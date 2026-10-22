// Global robust KaTeX LaTeX Renderer
window.renderLatex = function(element) {
  if (!element) element = document.getElementById('main-content-area') || document.body;

  function run() {
    if (typeof renderMathInElement === 'function') {
      try {
        renderMathInElement(element, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false,
          ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
          ignoredClasses: ["language-python", "code-tab-content"]
        });
      } catch (e) {
        console.warn("KaTeX render error:", e);
      }
    }
  }

  if (typeof renderMathInElement === 'function') {
    run();
  } else {
    let attempts = 0;
    const t = setInterval(() => {
      attempts++;
      if (typeof renderMathInElement === 'function') {
        clearInterval(t);
        run();
      } else if (attempts > 20) {
        clearInterval(t);
      }
    }, 50);
  }
};

class LearningApp {
  constructor() {
    this.currentCourseId = 'ten-day-sprint';
    this.currentDayId = 'day-1-foundations';
    this.currentLevelId = 'level-0';
    this.courses = [];
  }

  async init() {
    // 1. Fetch available courses
    try {
      const resp = await fetch('courses/courses.json');
      if (resp.ok) {
        this.courses = await resp.json();
      }
    } catch (e) {
      console.warn("Using default embedded course list", e);
    }

    // 2. Setup theme
    this.initTheme();

    // 3. Render Course Switcher in Sidebar
    // Single 10-Day Sprint Curriculum
    

    // 4. Render Days Section (Directly below course selector)
    this.renderDaysSelector();

    // 5. Setup dynamic math observer
    this.setupMathObserver();

    // 6. Support URL params and hash for direct Day & Level linking (e.g. ?day=10 or #day=day-5&level=quizzes)
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const hashStr = (window.location.hash || '').replace(/^#/, '');
      const hashParams = new URLSearchParams(hashStr);

      const targetCourse = searchParams.get('course') || hashParams.get('course') || 
        (window.location.pathname.includes('three-day-sprint') ? 'three-day-sprint' : null);
      if (targetCourse === 'three-day-sprint' || targetCourse === '3day') {
        this.currentCourseId = 'three-day-sprint';
        this.currentDayId = 'day-1-classical-ml';
      }

      const targetDay = searchParams.get('day') || hashParams.get('day');
      const targetLevel = searchParams.get('level') || hashParams.get('level');

      if (targetDay) {
        if (this.currentCourseId === 'three-day-sprint') {
          const threeDayMap = {
            '1': 'day-1-classical-ml',
            '2': 'day-2-signals-deeplearning',
            '3': 'day-3-reasoning-integration'
          };
          this.currentDayId = threeDayMap[targetDay] || targetDay;
        } else {
          const sprintDayMap = {
            '1': 'day-1-foundations',
            '2': 'day-2-signals-rules',
            '3': 'day-3-transforms-bayes',
            '4': 'day-4-geometry-dim',
            '5': 'day-5-clusters-recommenders',
            '6': 'day-6-neural-foundations',
            '7': 'day-7-sequences-time',
            '8': 'day-8-transformers-graphs',
            '9': 'day-9-optimization-agents',
            '10': 'day-10-ensembles-crucible'
          };
          this.currentDayId = sprintDayMap[targetDay] || targetDay;
        }
      }

      this.renderDaysSelector();
      this.selectDay(this.currentDayId);

      if (targetLevel) {
        setTimeout(() => this.loadLevel(targetLevel), 80);
      }
    } catch (e) {
      this.selectDay(this.currentDayId);
    }

    // Initialize global Study Q&A Assistant
    if (window.QAAssistant && typeof window.QAAssistant.init === 'function') {
      window.QAAssistant.init();
    }

    // 7. Setup global event listeners
    this.setupEventListeners();
    
    // Mobile Drawer Setup
    this.setupMobileMenu();


    if (window.lucide) window.lucide.createIcons();
  }

  setupMathObserver() {
    const target = document.getElementById('main-content-area');
    if (!target || this._observerActive) return;
    this._observerActive = true;

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'childList') {
          for (const node of m.addedNodes) {
            if (node.nodeType === 1) {
              const text = node.textContent || '';
              if (!node.classList?.contains('katex') && (text.includes('$') || text.includes('\\(') || text.includes('\\['))) {
                window.renderLatex(node);
              }
            }
          }
        }
      }
    });

    observer.observe(target, { childList: true, subtree: true });
  }

  initTheme() {
    const savedTheme = localStorage.getItem('iss_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = savedTheme === 'dark' ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('iss_theme', next);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = next === 'dark' ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    }
    if (window.lucide) window.lucide.createIcons();
  }

  renderCourseSelector() {
    const selectEl = document.getElementById('course-select-dropdown');
    if (!selectEl) return;

    if (this.courses && this.courses.length > 0) {
      selectEl.innerHTML = this.courses.map(c => `
        <option value="${c.id}" ${c.id === this.currentCourseId ? 'selected' : ''}>
          ${c.title}
        </option>
      `).join('');
    } else {
      selectEl.innerHTML = `
        <option value="ten-day-sprint" selected>🏆 10-Day A+ Exam Sprint (PRS + IRS)</option>
        <option value="intelligent-sensing-systems">Intelligent Sensing Systems</option>
        <option value="problem-solving-pr">Problem Solving using PR</option>
        <option value="machine-reasoning">Machine Reasoning</option>
        <option value="reasoning-systems">Reasoning Systems</option>
        <option value="prmls">Pattern Recognition & MLS</option>
        <option value="cognitive-systems">Cognitive Systems</option>
      `;
    }

    selectEl.addEventListener('change', (e) => {
      const val = e.target.value;
      this.currentCourseId = val;
      if (val === 'ten-day-sprint') {
        this.renderDaysSelector();
        this.selectDay('day-1-foundations');
      } else if (val === 'intelligent-sensing-systems') {
        this.renderDaysSelector();
        this.selectDay('day-1-signals');
      } else {
        this.renderDaysSelector();
        this.renderComingSoon(val);
      }
    });
  }

  getCurrentCourse() {
    if (this.currentCourseId === 'three-day-sprint') {
      return {
        id: 'three-day-sprint',
        title: '⚡ 3-Day Fast-Track Sprint (PRS + IRS)',
        modules: window.THREE_DAY_CURRICULUM ? window.THREE_DAY_CURRICULUM.days : []
      };
    }
    return {
      id: 'ten-day-sprint',
      title: '🏆 NUS ISS 10-Day A+ Exam Sprint (PRS & IRS)',
      modules: window.SPRINT_CURRICULUM ? window.SPRINT_CURRICULUM.days : []
    };
  }

  renderDaysSelector() {
    const daysContainer = document.getElementById('sidebar-days-list');
    const badgeEl = document.getElementById('days-count-badge');
    if (!daysContainer) return;

    const course = this.getCurrentCourse();
    const modules = course.modules || [];

    if (badgeEl) {
      badgeEl.textContent = `${modules.length} Day${modules.length === 1 ? '' : 's'}`;
    }

    if (modules.length === 0) {
      daysContainer.innerHTML = `<div class="text-muted p-2" style="font-size: 0.75rem;">No modules scheduled yet.</div>`;
      return;
    }

    let html = '';
    modules.forEach((mod, idx) => {
      const isDayActive = mod.id === this.currentDayId;
      const dayNum = mod.day || mod.dayNumber || (idx + 1);
      const isLive = [
        'day-1-classical-ml', 'day-2-signals-deeplearning', 'day-3-reasoning-integration',
        'day-1-signals', 'day-2-transformation', 'day-3-ml', 'day-4-multimodal', 
        'day-1-foundations', 'day-2-signals-rules', 'day-3-transforms-bayes', 
        'day-4-geometry-dim', 'day-5-clusters-recommenders', 'day-6-neural-foundations', 
        'day-7-sequences-time', 'day-8-transformers-graphs', 'day-9-optimization-agents', 
        'day-10-ensembles-crucible'
      ].includes(mod.id);
      const badgeText = isLive ? 'Live Interactive' : (mod.badge || 'Syllabus & Notes');
      const badgeClass = isLive ? 'live' : 'preview';

      html += `
        <button class="day-card-btn ${isDayActive ? 'active' : ''}" onclick="app.selectDay('${mod.id}')" id="day-card-${mod.id}">
          <div class="day-badge-num">DAY ${dayNum}</div>
          <div class="day-info">
            <div class="day-title-text" title="${mod.title}">${mod.shortTitle || mod.title}</div>
            <div class="day-sub-text" title="${mod.subtitle || mod.tagline || ''}">${mod.subtitle || mod.tagline || ''}</div>
            <span class="day-status-pill ${badgeClass}">${badgeText}</span>
          </div>
        </button>
      `;
    });

    daysContainer.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  selectDay(dayId) {
    this.currentDayId = dayId;
    this.currentLevelId = 'level-0';

    // 1. Highlight day card in sidebar
    document.querySelectorAll('.day-card-btn').forEach(btn => btn.classList.remove('active'));
    const activeDayBtn = document.getElementById(`day-card-${dayId}`);
    if (activeDayBtn) activeDayBtn.classList.add('active');

    // 2. Find day metadata
    const course = this.getCurrentCourse();
    const mod = (course.modules || []).find(m => m.id === dayId) || 
      (window.THREE_DAY_CURRICULUM ? window.THREE_DAY_CURRICULUM.days.find(d => d.id === dayId) : null) ||
      (window.ISSM_CURRICULUM ? window.ISSM_CURRICULUM.days.find(d => d.id === dayId) : null) ||
      (window.SPRINT_CURRICULUM ? window.SPRINT_CURRICULUM.days.find(d => d.id === dayId) : null);

    // 3. Update topbar breadcrumbs
    const topbarDay = document.getElementById('topbar-active-day');
    const breadcrumbRoot = document.querySelector('#topbar-breadcrumbs span:first-child');
    if (breadcrumbRoot) {
      breadcrumbRoot.textContent = this.currentCourseId === 'three-day-sprint'
        ? '3-Day Fast-Track Sprint (PRS & IRS)'
        : '10-Day A+ Exam Sprint (PRS & IRS)';
    }
    if (topbarDay && mod) {
      topbarDay.textContent = mod.title || `Day ${mod.day || mod.dayNumber}`;
    }

    // 4. Update topbar status badge & sidebar section
    const statusBadge = document.getElementById('topbar-status-badge');
    const headingEl = document.getElementById('active-day-heading');
    const badgeDayEl = document.getElementById('active-day-badge');
    const sprintDayMap = {
      'day-1-classical-ml': 1,
      'day-2-signals-deeplearning': 2,
      'day-3-reasoning-integration': 3,
      'day-1-foundations': 1,
      'day-2-signals-rules': 2,
      'day-3-transforms-bayes': 3,
      'day-4-geometry-dim': 4,
      'day-5-clusters-recommenders': 5,
      'day-6-neural-foundations': 6,
      'day-7-sequences-time': 7,
      'day-8-transformers-graphs': 8,
      'day-9-optimization-agents': 9,
      'day-10-ensembles-crucible': 10
    };
    const dayNum = mod?.day || mod?.dayNumber || sprintDayMap[dayId] || 1;
    const liveDays = [
      'day-1-classical-ml', 'day-2-signals-deeplearning', 'day-3-reasoning-integration',
      'day-1-signals', 'day-2-transformation', 'day-3-ml', 'day-4-multimodal', 
      'day-1-foundations', 'day-2-signals-rules', 'day-3-transforms-bayes', 
      'day-4-geometry-dim', 'day-5-clusters-recommenders', 'day-6-neural-foundations', 
      'day-7-sequences-time', 'day-8-transformers-graphs', 'day-9-optimization-agents', 
      'day-10-ensembles-crucible'
    ];


    if (liveDays.includes(dayId)) {
      if (statusBadge) {
        statusBadge.className = 'badge-tech';
        statusBadge.innerHTML = `<i data-lucide="cpu" style="width: 12px; height: 12px; vertical-align: middle;"></i> Live Interactive`;
      }
      if (headingEl) headingEl.textContent = `DAY ${dayNum} MODULE SECTIONS`;
      if (badgeDayEl) {
        badgeDayEl.className = 'badge-active-day';
        badgeDayEl.textContent = 'Live';
      }
      this.renderSidebarNav();
      const defaultLevel = (this.currentCourseId === 'three-day-sprint' || ['day-1-classical-ml', 'day-2-signals-deeplearning', 'day-3-reasoning-integration'].includes(dayId)) ? 'mod-1' : 'level-0';
      this.loadLevel(defaultLevel);
    } else {
      if (statusBadge) {
        statusBadge.className = 'badge-outline';
        statusBadge.innerHTML = `<i data-lucide="book-open" style="width: 12px; height: 12px; vertical-align: middle;"></i> Course Syllabus & Materials`;
      }
      if (headingEl) headingEl.textContent = `DAY ${dayNum} NAVIGATION`;
      if (badgeDayEl) {
        badgeDayEl.className = 'badge-count';
        badgeDayEl.textContent = 'Preview';
      }
      this.renderDaySidebarNav(dayId, mod);
      this.loadDayHub(dayId);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  renderSidebarNav() {
    const navContainer = document.getElementById('sidebar-level-nav');
    if (!navContainer) return;

    let levels = [];

    if (this.currentCourseId === 'three-day-sprint' || ['day-1-classical-ml', 'day-2-signals-deeplearning', 'day-3-reasoning-integration'].includes(this.currentDayId)) {
      const dayMeta = (window.THREE_DAY_CURRICULUM?.days || []).find(d => d.id === this.currentDayId);
      const iconMap = {
        'mod-1': 'zap', 'mod-2': 'layers', 'mod-3': 'target', 'mod-4': 'shield-check',
        'mod-5': 'sliders', 'mod-6': 'share-2', 'mod-7': 'cpu', 'mod-8': 'compass',
        'mod-9': 'git-branch', 'mod-10': 'calculator', 'mod-11': 'brain', 'mod-12': 'sparkles',
        'mod-13': 'award', 'mod-14': 'flag'
      };
      if (dayMeta && dayMeta.modules && dayMeta.modules.length > 0) {
        levels = dayMeta.modules.map(m => ({
          id: m.id,
          icon: iconMap[m.id] || 'book-open',
          title: `Mod ${m.num}. ${m.title}`,
          subtitle: `${m.duration} • ${m.subj}`
        }));
      } else {
        levels = [
          { id: 'mod-1', icon: 'zap', title: 'Mod 1. Module Foundations', subtitle: '60 mins' }
        ];
      }
      levels.push(
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Active Recall', subtitle: 'Formulas, tables, 10 recall, 5 math, 2 scenarios' },
        { id: 'quizzes', icon: 'award', title: 'Slide Quizzes & Exam Crucible', subtitle: 'Slide Mastery MCQs + Structured Exam Qs' },
        { id: 'exam-generator', icon: 'cpu', title: '⚡ 4-Tier Exam Generator', subtitle: 'Concept, math, scenario rubric & system design' },
        { id: 'mastery-tracker', icon: 'bar-chart-2', title: '📊 Mastery & Mistake Log', subtitle: 'PRS vs IRS readiness & persistent error classification' },
        { id: 'prs-handbook', icon: 'file-text', title: '📘 ISY5002 PRS Revision Handbook', subtitle: 'Printable 30-min strategy, formulas & traps' },
        { id: 'irs-handbook', icon: 'book-open', title: '📗 ISY5001 IRS Revision Handbook', subtitle: 'Printable 30-min strategy, algorithms & traps' },
        { id: 'traceability', icon: 'check-square', title: '🎯 Syllabus Traceability Matrix', subtitle: '100% mapping of 37 lecture PDFs to lessons' }
      );
    } else if (this.currentDayId === 'day-1-foundations') {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Mental Model', subtitle: 'System 1 vs System 2 & 5-Stage PR Pipeline' },
        { id: 'level-1', icon: 'compass', title: '1. Search Engine & CSP', subtitle: 'A* Path Trace & N-Queens CSP Backtracking' },
        { id: 'level-2', icon: 'layers', title: '2. Supervised Classifiers', subtitle: 'k-NN Decision Boundary & Naive Bayes Laplace' },
        { id: 'level-3', icon: 'activity', title: '3. Evaluation & Lift Studio', subtitle: 'Confusion Matrix, ROC & Cumulative Lift' },
        { id: 'level-4', icon: 'code', title: '4. NUS ISS Workshop Lab', subtitle: 'N-Queens, Russian Cities A* & Diabetes' },
        { id: 'level-5', icon: 'shield-check', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Examiner Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-2-signals-rules') {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Physical World & 4 Pillars', subtitle: 'Sensors, Symmetry & Deductive/Abductive Logic' },
        { id: 'level-1', icon: 'activity', title: '1. Nyquist & Aliasing Studio', subtitle: 'Sampling Theorem, Ghost Frequencies & Symmetry' },
        { id: 'level-2', icon: 'filter', title: '2. Peak Detection & arPLS', subtitle: 'Peak Prominence & Rubber-Band Baseline Removal' },
        { id: 'level-3', icon: 'git-merge', title: '3. Dynamic Time Warping', subtitle: 'Elastic Alignment Matrix, ECG & Singapore GDP' },
        { id: 'level-4', icon: 'shield-check', title: '4. Hospital Triage Rule Engine', subtitle: 'Forward Chaining, Conflict Resolution & Guardrails' },
        { id: 'level-5', icon: 'award', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & Examiner Trap Decoders' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-3-transforms-bayes') {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Mental Model', subtitle: 'Fourier Paradox & Cognitive Perception' },
        { id: 'level-1', icon: 'sliders', title: '1. STFT & 1D Haar Wavelets', subtitle: 'Gabor Limit & Multi-Resolution Analysis' },
        { id: 'level-2', icon: 'layers', title: '2. 2D Wavelet Subbands', subtitle: 'LL, LH, HL, HH & Sensor Compression' },
        { id: 'level-3', icon: 'eye', title: '3. Audio & Vision Cognition', subtitle: "Marr's 3 Levels & Mel-Scale Filterbanks" },
        { id: 'level-4', icon: 'git-branch', title: '4. Bayesian Belief Networks', subtitle: 'Burglary CPT, D-Separation & EM Toy' },
        { id: 'level-5', icon: 'shield-check', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Examiner Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-4-geometry-dim') {
      levels = [
        { id: 'level-0', icon: 'compass', title: '0. The Mental Model', subtitle: 'Boundaries, Projections & Precedents' },
        { id: 'level-1', icon: 'split', title: '1. Decision Trees Split Studio', subtitle: 'Entropy, Information Gain & Gain Ratio' },
        { id: 'level-2', icon: 'crosshair', title: '2. SVM Margins & Kernels', subtitle: 'Maximal Margin, Slack C & RBF Gamma' },
        { id: 'level-3', icon: 'rotate-3d', title: '3. PCA vs LDA Studio', subtitle: 'Variance Maximization vs Fisher Criterion' },
        { id: 'level-4', icon: 'archive', title: '4. Case-Based Reasoning (CBR)', subtitle: '4R Cycle & Scikit-Learn Python Labs' },
        { id: 'level-5', icon: 'shield-alert', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Examiner Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-5-clusters-recommenders') {
      levels = [
        { id: 'level-0', icon: 'compass', title: '0. The Mental Model', subtitle: 'Discovery & Personalization' },
        { id: 'level-1', icon: 'target', title: '1. Clustering Arena', subtitle: 'K-Means, Linkages & DBSCAN' },
        { id: 'level-2', icon: 'shopping-bag', title: '2. Market Basket (Apriori)', subtitle: 'Support, Confidence & Lift' },
        { id: 'level-3', icon: 'film', title: '3. Collaborative Filtering', subtitle: 'Mean-Centered CF & SVD Matrix' },
        { id: 'level-4', icon: 'sliders', title: '4. Deep Recommenders', subtitle: 'Implicit Feedback & Neural CF (NCF)' },
        { id: 'level-5', icon: 'shield-alert', title: '5. The A+ Exam Crucible', subtitle: 'Exam Traps & Mid-Course Synthesis' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-6-neural-foundations') {
      levels = [
        { id: 'level-0', icon: 'cpu', title: '0. The Mental Model', subtitle: 'Neural Foundations & Representation' },
        { id: 'level-1', icon: 'calculator', title: '1. Backpropagation Lab', subtitle: 'ANN-BP-v006 Exact Spreadsheet Math' },
        { id: 'level-2', icon: 'radio', title: '2. RBF Networks & SOM', subtitle: 'Local Receptive Fields & Kohonen Map' },
        { id: 'level-3', icon: 'layers', title: '3. 2D CNN Architecture', subtitle: 'Dimensions, Strides & Parameter Counting' },
        { id: 'level-4', icon: 'bar-chart-2', title: '4. Explainable AI & Labs', subtitle: 'SHAP Waterfall, LIME & PyTorch CNN' },
        { id: 'level-5', icon: 'shield-alert', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Examiner Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-7-sequences-time') {
      levels = [
        { id: 'level-0', icon: 'git-commit', title: '0. The Mental Model', subtitle: 'Temporal Memory & Sensory Streams' },
        { id: 'level-1', icon: 'sliders', title: '1. LSTM Gate Valve Studio', subtitle: 'Vanishing Gradients & Memory Highways' },
        { id: 'level-2', icon: 'activity', title: '2. Sensor Anomaly Studio', subtitle: 'Smart Fish Tank & Reconstruction MSE' },
        { id: 'level-3', icon: 'compass', title: '3. NLP Vector Semantics', subtitle: 'Word2Vec CBOW & Vector Arithmetic' },
        { id: 'level-4', icon: 'code', title: '4. NUS ISS Workshop Lab', subtitle: 'PyTorch Autoencoder & Keras LSTM' },
        { id: 'level-5', icon: 'shield-alert', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Examiner Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-8-transformers-graphs') {
      levels = [
        { id: 'level-0', icon: 'share-2', title: '0. The Mental Model', subtitle: 'Vision to Structured Knowledge' },
        { id: 'level-1', icon: 'layers', title: '1. Deep CNN Case Studio', subtitle: 'ResNet Skips & MobileNet Separable' },
        { id: 'level-2', icon: 'eye', title: '2. Scaled Self-Attention', subtitle: 'Q, K, V Matrices & Softmax Scaling' },
        { id: 'level-3', icon: 'compass', title: '3. TransE Link Prediction', subtitle: 'KGE Translation Space & MRR Metrics' },
        { id: 'level-4', icon: 'git-merge', title: '4. GraphRAG vs Vector RAG', subtitle: 'Neo4j Cypher & Multi-Hop Traversal' },
        { id: 'level-5', icon: 'shield-alert', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Examiner Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-9-optimization-agents') {
      levels = [
        { id: 'level-0', icon: 'dna', title: '0. The Mental Model', subtitle: 'Evolutionary Search & Agency' },
        { id: 'level-1', icon: 'table', title: '1. Genetic Algorithms', subtitle: 'WS1GA.xlsx & TSP Arena' },
        { id: 'level-2', icon: 'layers', title: '2. Multimodal Fusion', subtitle: 'RVM Sensor Digital Twin' },
        { id: 'level-3', icon: 'brain', title: '3. Cognitive Memory', subtitle: 'ACT-R & ReAct Agent Loop' },
        { id: 'level-4', icon: 'code', title: '4. NUS ISS Workshop Lab', subtitle: 'Python GA & ReAct Agent' },
        { id: 'level-5', icon: 'shield-alert', title: '5. The A+ Exam Crucible', subtitle: 'Formula Cheat Sheet & 5 Traps' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Slide Mastery Quizzes', subtitle: '10 high-yield exam questions' }
      ];
    } else if (this.currentDayId === 'day-10-ensembles-crucible') {
      levels = [
        { id: 'level-0', icon: 'award', title: '0. The Mental Model', subtitle: 'Ensembles & Condorcet Jury' },
        { id: 'level-1', icon: 'sliders', title: '1. Ensemble Studio', subtitle: 'AdaBoost, Bagging & Stacking' },
        { id: 'level-2', icon: 'key', title: '2. RS Escape Room', subtitle: '5 Chambers & Master Architectures' },
        { id: 'level-3', icon: 'book-open', title: '3. Paper 1 (PRS) Bible', subtitle: 'PSUPR, ISSM & PRMLS Cheatsheet' },
        { id: 'level-4', icon: 'shield-check', title: '4. Paper 2 (IRS) Bible', subtitle: 'MR, CS & RS Cheatsheet' },
        { id: 'level-5', icon: 'code', title: '5. NUS ISS Workshop Lab', subtitle: 'AdaBoost & Stacking Classifier' },
        { id: 'level-6', icon: 'file-check', title: '6. Nov 2026 Sample Papers', subtitle: 'Official IRS (50m) & PRS (40m) Solutions' },
        { id: 'daily-revision', icon: 'repeat', title: 'Daily Revision & Flashcards', subtitle: '15-min active recall, formulas & traps' },
        { id: 'quizzes', icon: 'award', title: 'Grand Mock Exam (20Q)', subtitle: 'Comprehensive A+ Exam Crucible' }
      ];
    } else if (this.currentDayId === 'day-4-multimodal') {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Mental Model', subtitle: 'Beyond single-sensor blindness' },
        { id: 'level-1', icon: 'alert-triangle', title: '1. Single Modality Pitfalls', subtitle: 'Unimodal edge failures' },
        { id: 'level-2', icon: 'git-merge', title: '2. Fusion Architectures', subtitle: 'Early, late & hybrid fusion' },
        { id: 'level-3', icon: 'shuffle', title: '3. Data Augmentation', subtitle: 'Cross-modal warping & mixup' },
        { id: 'level-4', icon: 'link', title: '4. Cross-Modal Alignment', subtitle: 'CLIP & InfoNCE contrastive' },
        { id: 'level-5', icon: 'settings', title: '5. Reverse Engineering RVM', subtitle: 'Multi-sensor deconstruction' },
        { id: 'level-6', icon: 'cpu', title: '6. RVM Digital Twin', subtitle: 'Interactive decision engine' },
        { id: 'level-7', icon: 'code', title: '7. Python Code Lab', subtitle: 'Verified RVM simulator' },
        { id: 'quizzes', icon: 'award', title: 'Lecture Slide Quizzes', subtitle: '10 slide-based questions' },
        { id: 'research', icon: 'book-open', title: 'Student Research Lab', subtitle: 'RVM, Transformers & Zero-Shot' },
        { id: 'slide-viewer', icon: 'presentation', title: 'Slide Deck Companion', subtitle: 'PDF, PPTX & Activity (53 Slides)' },
        { id: 'day4-audit', icon: 'check-circle', title: 'Slide & PDF Audit Matrix', subtitle: '100% verification (53 slides)' }
      ];
    } else if (this.currentDayId === 'day-3-ml') {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Mental Model', subtitle: 'Handcrafted vs representation' },
        { id: 'level-1', icon: 'activity', title: '1. Feature Extraction', subtitle: 'Time & frequency features' },
        { id: 'level-2', icon: 'compass', title: '2. Dimensionality Reduction', subtitle: 'PCA & covariance projection' },
        { id: 'level-3', icon: 'layers', title: '3. Deep Autoencoders', subtitle: 'Bottlenecks & reconstruction' },
        { id: 'level-4', icon: 'shield-alert', title: '4. Anomaly Detection', subtitle: 'Residual error thresholds' },
        { id: 'level-5', icon: 'git-commit', title: '5. Metric Learning', subtitle: 'Siamese & Triplet loss' },
        { id: 'level-6', icon: 'droplet', title: '6. Fish Tank Capstone Lab', subtitle: 'Hypoxia vs sensor glitch' },
        { id: 'level-7', icon: 'code', title: '7. Python PyTorch Lab', subtitle: 'Verified machine autoencoder' },
        { id: 'quizzes', icon: 'award', title: 'Lecture Slide Quizzes', subtitle: '10 slide-based questions' },
        { id: 'research', icon: 'book-open', title: 'Student Research Lab', subtitle: 'Autoencoders, Contrastive & TinyML' },
        { id: 'slide-viewer', icon: 'presentation', title: 'Slide Deck Companion', subtitle: 'PDF & PPTX (52 Slides)' },
        { id: 'day3-audit', icon: 'check-circle', title: 'Slide & PDF Audit Matrix', subtitle: '100% verification (52 slides)' }
      ];
    } else if (this.currentDayId === 'day-2-transformation') {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Mental Model', subtitle: 'Why transform signals' },
        { id: 'level-1', icon: 'activity', title: '1. The Fourier Paradox', subtitle: 'Heisenberg blindness' },
        { id: 'level-2', icon: 'disc', title: '2. STFT & Spectrogram', subtitle: 'Windowing & Gabor limit' },
        { id: 'level-3', icon: 'trending-up', title: '3. Wavelet MRA', subtitle: 'Scaling, filters & Haar toy' },
        { id: 'level-4', icon: 'layers', title: '4. 2D Wavelets', subtitle: 'LL, LH, HL, HH subbands' },
        { id: 'level-5', icon: 'git-merge', title: '5. Gaussian Naive Bayes', subtitle: 'Bayesian classification' },
        { id: 'level-6', icon: 'cpu', title: '6. Expectation-Maximization', subtitle: 'Latent 18-dice simulation' },
        { id: 'level-7', icon: 'code', title: '7. Pipe Choke Lab', subtitle: 'Haar choke & UCI HAR Python' },
        { id: 'quizzes', icon: 'award', title: 'Lecture Slide Quizzes', subtitle: '10 slide-based questions' },
        { id: 'research', icon: 'book-open', title: 'Student Research Lab', subtitle: 'UCI HAR, Wave-ViT & EM' },
        { id: 'slide-viewer', icon: 'presentation', title: 'Slide Deck Companion', subtitle: 'PDF & PPTX (54 Slides)' },
        { id: 'day2-audit', icon: 'check-circle', title: 'Slide & PDF Audit Matrix', subtitle: '100% verification (54 slides)' }
      ];
    } else {
      levels = [
        { id: 'level-0', icon: 'zap', title: '0. The Mental Model', subtitle: 'Why signals matter' },
        { id: 'level-1', icon: 'activity', title: '1. Anatomy of a Wave', subtitle: 'Tone & wave studio' },
        { id: 'level-2', icon: 'disc', title: '2. The Digital Bridge', subtitle: 'Nyquist & wagon wheel' },
        { id: 'level-3', icon: 'trending-up', title: '3. Detecting Signposts', subtitle: 'Peaks & prominence' },
        { id: 'level-4', icon: 'filter', title: '4. Signal Cleaning', subtitle: 'arPLS baseline drift' },
        { id: 'level-5', icon: 'git-merge', title: '5. Elastic Alignment', subtitle: 'Dynamic Time Warping' },
        { id: 'level-6', icon: 'code', title: '6. Hands-on Code Lab', subtitle: 'Python workshop solutions' },
        { id: 'quizzes', icon: 'award', title: 'Lecture Slide Quizzes', subtitle: '11 slide-based questions' },
        { id: 'research', icon: 'book-open', title: 'Student Research Lab', subtitle: 'Papers & use-case builder' },
        { id: 'slide-viewer', icon: 'presentation', title: 'Slide Deck Companion', subtitle: 'Both PPTX & PDF (124 Slides)' },
        { id: 'day1-audit', icon: 'check-circle', title: 'Slide & PDF Audit Matrix', subtitle: '100% verification (124 slides)' }
      ];
    }

    let html = '';
    levels.forEach(lvl => {
      if (lvl.id === 'daily-revision') {
        html += `<div class="sidebar-sub-heading" style="padding: 12px 14px 6px; font-size: 0.72rem; font-weight: 800; color: #f59e0b; text-transform: uppercase; letter-spacing: 0.5px;"><i data-lucide="check-circle" style="width: 12px; height: 12px; vertical-align: middle;"></i> End-of-Day Assessment</div>`;
      } else if (lvl.id === 'exam-generator') {
        html += `<div class="sidebar-sub-heading" style="padding: 12px 14px 6px; font-size: 0.72rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.5px;"><i data-lucide="award" style="width: 12px; height: 12px; vertical-align: middle;"></i> Mastery & Revision Tools</div>`;
      }
      const isActive = lvl.id === this.currentLevelId;
      html += `
        <button class="nav-item ${isActive ? 'active' : ''}" onclick="app.loadLevel('${lvl.id}')" id="nav-${lvl.id}">
          <div class="nav-icon"><i data-lucide="${lvl.icon}"></i></div>
          <div class="nav-text">
            <div class="nav-title">${lvl.title}</div>
            <div class="nav-sub">${lvl.subtitle}</div>
          </div>
        </button>
      `;
    });

    navContainer.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  renderDaySidebarNav(dayId, mod) {
    const navContainer = document.getElementById('sidebar-level-nav');
    if (!navContainer) return;

    const navItems = [
      { id: 'overview', icon: 'info', title: 'Module Overview', subtitle: 'Learning objectives' },
      { id: 'decks', icon: 'file-text', title: 'Lecture Slide Syllabus', subtitle: `${mod?.slideCount || 'Slides & outline'}` },
      { id: 'workshops', icon: 'terminal', title: 'Workshops & Exercises', subtitle: 'Python assignments' },
      { id: 'videos', icon: 'video', title: 'Case Studies & Media', subtitle: 'Video demonstrations' },
      { id: 'back-to-day1', icon: 'arrow-left-circle', title: 'Return to Day 1', subtitle: 'Interactive sandbox' }
    ];

    let html = '';
    navItems.forEach((item, idx) => {
      const isFirst = idx === 0;
      html += `
        <button class="nav-item ${isFirst ? 'active' : ''}" onclick="app.handleDayNav('${dayId}', '${item.id}')" id="daynav-${item.id}">
          <div class="nav-icon"><i data-lucide="${item.icon}"></i></div>
          <div class="nav-text">
            <div class="nav-title">${item.title}</div>
            <div class="nav-sub">${item.subtitle}</div>
          </div>
        </button>
      `;
    });

    navContainer.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  }

  handleDayNav(dayId, actionId) {
    if (actionId === 'back-to-day1') {
      this.selectDay('day-1-signals');
      return;
    }

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const btn = document.getElementById(`daynav-${actionId}`);
    if (btn) btn.classList.add('active');

    const selectorMap = {
      'overview': '.day-hero-banner',
      'decks': '.deck-list-container',
      'workshops': '.workshop-cards-grid',
      'videos': '.videos-grid'
    };

    const target = document.querySelector(selectorMap[actionId]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  loadDayHub(dayId) {
    const contentArea = document.getElementById('main-content-area');
    if (!contentArea) return;

    if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.renderDayHub) {
      contentArea.innerHTML = window.renderDayHub(dayId);
      window.renderLatex(contentArea);
    } else {
      contentArea.innerHTML = `<div class="lesson-card"><h3>Day ${dayId}</h3><p>Curriculum details loading...</p></div>`;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  loadLevel(levelId) {
    this.currentLevelId = levelId;

    // Update active class in sidebar
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${levelId}`);
    if (activeNav) activeNav.classList.add('active');

    const contentArea = document.getElementById('main-content-area');
    if (!contentArea) return;

    if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });

    const dayId = this.currentDayId;
    let contentData = window.DAY1_CONTENT;
    let quizData = window.DAY1_QUIZZES;
    let researchData = window.DAY1_RESEARCH;

    if (dayId === 'day-1-classical-ml') {
      contentData = window.DAY1_CLASSICAL_ML_CONTENT;
      quizData = window.DAY1_CLASSICAL_ML_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY1_EXAM_QUESTIONS;
    } else if (dayId === 'day-2-signals-deeplearning') {
      contentData = window.DAY2_SIGNALS_DEEPLEARNING_CONTENT;
      quizData = window.DAY2_SIGNALS_DEEPLEARNING_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY2_EXAM_QUESTIONS;
    } else if (dayId === 'day-3-reasoning-integration') {
      contentData = window.DAY3_REASONING_INTEGRATION_CONTENT;
      quizData = window.DAY3_REASONING_INTEGRATION_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY3_EXAM_QUESTIONS;
    } else if (dayId === 'day-1-foundations') {
      contentData = window.DAY1_FOUNDATIONS_CONTENT;
      quizData = window.DAY1_FOUNDATIONS_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY1_EXAM_QUESTIONS;
    } else if (dayId === 'day-2-signals-rules') {
      contentData = window.DAY2_SIGNALS_RULES_CONTENT;
      quizData = window.DAY2_SIGNALS_RULES_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY2_EXAM_QUESTIONS;
    } else if (dayId === 'day-3-transforms-bayes') {
      contentData = window.DAY3_TRANSFORMS_BAYES_CONTENT;
      quizData = window.DAY3_TRANSFORMS_BAYES_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY1_EXAM_QUESTIONS;
    } else if (dayId === 'day-4-geometry-dim') {
      contentData = window.DAY4_GEOMETRY_DIM_CONTENT;
      quizData = window.DAY4_GEOMETRY_DIM_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY1_EXAM_QUESTIONS;
    } else if (dayId === 'day-5-clusters-recommenders') {
      contentData = window.DAY5_CLUSTERS_RECOMMENDERS_CONTENT;
      quizData = window.DAY5_CLUSTERS_RECOMMENDERS_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY1_EXAM_QUESTIONS;
    } else if (dayId === 'day-6-neural-foundations') {
      contentData = window.DAY6_NEURAL_FOUNDATIONS_CONTENT;
      quizData = window.DAY6_NEURAL_FOUNDATIONS_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY2_EXAM_QUESTIONS;
    } else if (dayId === 'day-7-sequences-time') {
      contentData = window.DAY7_SEQUENCES_TIME_CONTENT;
      quizData = window.DAY7_SEQUENCES_TIME_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY2_EXAM_QUESTIONS;
    } else if (dayId === 'day-8-transformers-graphs') {
      contentData = window.DAY8_TRANSFORMERS_GRAPHS_CONTENT;
      quizData = window.DAY8_TRANSFORMERS_GRAPHS_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY3_EXAM_QUESTIONS;
    } else if (dayId === 'day-9-optimization-agents') {
      contentData = window.DAY9_OPTIMIZATION_AGENTS_CONTENT;
      quizData = window.DAY9_OPTIMIZATION_AGENTS_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY3_EXAM_QUESTIONS;
    } else if (dayId === 'day-10-ensembles-crucible') {
      contentData = window.DAY10_ENSEMBLES_CRUCIBLE_CONTENT;
      quizData = window.DAY10_ENSEMBLES_CRUCIBLE_QUIZZES;
      window.CURRENT_EXAM_QUESTIONS = window.DAY3_EXAM_QUESTIONS;
    } else if (dayId === 'day-4-multimodal') {
      contentData = window.DAY4_CONTENT;
      quizData = window.DAY4_QUIZZES;
      researchData = window.DAY4_RESEARCH;
    } else if (dayId === 'day-3-ml') {
      contentData = window.DAY3_CONTENT;
      quizData = window.DAY3_QUIZZES;
      researchData = window.DAY3_RESEARCH;
    } else if (dayId === 'day-2-transformation') {
      contentData = window.DAY2_CONTENT;
      quizData = window.DAY2_QUIZZES;
      researchData = window.DAY2_RESEARCH;
    }

    if (levelId === 'quizzes') {
      contentArea.innerHTML = `<div id="quiz-mount-point"></div>`;
      window.QuizEngine.render('quiz-mount-point', quizData);
    } else if (levelId === 'daily-revision') {
      this.renderDailyRevision(contentArea);
    } else if (levelId === 'exam-generator') {
      contentArea.innerHTML = `<div id="exam-generator-mount-point"></div>`;
      if (window.ExamGenerator && typeof window.ExamGenerator.render === 'function') {
        window.ExamGenerator.render('exam-generator-mount-point');
      }
    } else if (levelId === 'mastery-tracker') {
      contentArea.innerHTML = `<div id="mastery-tracker-mount-point"></div>`;
      if (window.MasteryTracker && typeof window.MasteryTracker.renderDashboard === 'function') {
        window.MasteryTracker.renderDashboard('mastery-tracker-mount-point');
      }
    } else if (levelId === 'prs-handbook') {
      contentArea.innerHTML = `<div id="prs-handbook-mount-point"></div>`;
      if (window.ExamHandbooks && typeof window.ExamHandbooks.renderPRS === 'function') {
        window.ExamHandbooks.renderPRS('prs-handbook-mount-point');
      }
    } else if (levelId === 'irs-handbook') {
      contentArea.innerHTML = `<div id="irs-handbook-mount-point"></div>`;
      if (window.ExamHandbooks && typeof window.ExamHandbooks.renderIRS === 'function') {
        window.ExamHandbooks.renderIRS('irs-handbook-mount-point');
      }
    } else if (levelId === 'traceability') {
      contentArea.innerHTML = `<div id="traceability-mount-point"></div>`;
      if (window.TraceabilityMatrix && typeof window.TraceabilityMatrix.render === 'function') {
        window.TraceabilityMatrix.render('traceability-mount-point');
      }
    } else if (levelId === 'research') {
      contentArea.innerHTML = `<div id="research-mount-point"></div>`;
      window.ResearchHub.render('research-mount-point', researchData);
    } else if (levelId === 'slide-viewer') {
      contentArea.innerHTML = `<div id="slide-viewer-mount-point"></div>`;
      window.SlideViewer.render('slide-viewer-mount-point');
    } else if (levelId === 'day1-audit' || levelId === 'day2-audit' || levelId === 'day3-audit' || levelId === 'day4-audit') {
      this.renderAuditMatrix(contentArea);
    } else {
      // Find section in appropriate content data
      const section = contentData?.sections?.find(s => s.id === levelId);
      if (section) {
        contentArea.innerHTML = `
          <div class="level-header-banner mb-4">
            <div class="level-badge-tag">${section.badge}</div>
            <h2>${section.title}</h2>
            <p class="text-secondary">${section.subtitle}</p>
          </div>
          ${section.content}
          
          <!-- Bottom Navigation Flow -->
          <div class="level-footer-nav mt-5">
            ${this.renderFooterButtons(levelId)}
          </div>
        `;

        // Typeset LaTeX math with KaTeX
        window.renderLatex(contentArea);

        // Initialize Assessment Engine (Leak-Free Diagnostics & Interactive Practices)
        if (window.AssessmentEngine && typeof window.AssessmentEngine.initModule === 'function') {
          window.AssessmentEngine.initModule(levelId, dayId);
        }

        // Initialize level visualizers
        this.initVisualizersForLevel(levelId);
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  renderAuditMatrix(contentArea) {
    const dayId = this.currentDayId;
    let matrix = window.DAY1_TRACEABILITY_MATRIX || [];
    let title = "Day 1 Slide & PDF Traceability Matrix";
    let subtitle = "Comprehensive proof of coverage: Every single slide from Module 1, Module 2, and Module 3 has been utilized, analyzed, and implemented in the interactive learning platform.";
    let totalScope = "Total Day 1 scope: 36 pages (PDF 1) + 44 slides (PPTX 2) + 44 slides (PPTX 3) = <strong>124 slides</strong> + 3 workshop datasets (ecg1D, ecg2D, GDP).";

    if (dayId === 'day-4-multimodal') {
      matrix = window.DAY4_TRACEABILITY_MATRIX || [];
      title = "Day 4 Slide & PDF Traceability Matrix";
      subtitle = "Comprehensive proof of coverage: Every single slide from '4 Sense making from sensory data v3.3.pdf' (40 slides), 'ISSM Day4 worksheet your name.pptx' (9 slides), and 'ISSM Day4 worksheet instruction.pdf' (4 pages) = 53 slides/pages + MIT lecture case study has been analyzed and implemented.";
      totalScope = "Total Day 4 scope: 40 pages (PDF) + 9 slides (PPTX) + 4 pages (Activity PDF) = <strong>53 slides/pages</strong> + Reverse Vending Machine (RVM) multi-sensor digital twin simulator.";
    } else if (dayId === 'day-3-ml') {
      matrix = window.DAY3_TRACEABILITY_MATRIX || [];
      title = "Day 3 Slide & PDF Traceability Matrix";
      subtitle = "Comprehensive proof of coverage: Every single slide from '3 Intelligent sensory signal processing using machine learning v3.6.pdf' (44 slides) and 'ISSM Day3 worksheet your name.pptx' (8 slides) = 52 slides + machine sensor workshop (900 samples) has been analyzed and implemented.";
      totalScope = "Total Day 3 scope: 44 pages (PDF) + 8 slides (PPTX) = <strong>52 slides</strong> + PyTorch Autoencoder Anomaly Detection Lab + Smart Fish Tank IoT monitoring.";
    } else if (dayId === 'day-2-transformation') {
      matrix = window.DAY2_TRACEABILITY_MATRIX || [];
      title = "Day 2 Slide & PDF Traceability Matrix";
      subtitle = "Comprehensive proof of coverage: Every single slide from '2 Sensory signal transformation v3.3.pdf' (48 slides) and 'ISSM Day2 worksheet your name.pptx' (6 slides) = 54 slides + UCI HAR human activity recognition workshop has been utilized, analyzed, and implemented in the interactive learning platform.";
      totalScope = "Total Day 2 scope: 48 pages (PDF) + 6 slides (PPTX) = <strong>54 slides</strong> + 2 video demonstrations (Slide 17 & Slide 19) + UCI HAR wearable dataset (9 inertial sensors).";
    }

    contentArea.innerHTML = `
      <div class="level-header-banner mb-4">
        <div class="level-badge-tag">Verification & Curriculum Audit</div>
        <h2>${title}</h2>
        <p class="text-secondary">${subtitle}</p>
      </div>

      <div class="lesson-card mb-4" style="border-left: 4px solid #34d399;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
          <div>
            <h3 style="color: #34d399; margin: 0;"><i data-lucide="check-circle" style="vertical-align: middle;"></i> 100% Slide & Material Usage</h3>
            <p class="text-secondary mt-1" style="margin-bottom: 0;">${totalScope}</p>
          </div>
          <button class="btn btn-primary" onclick="app.loadLevel('level-0')">
            <i data-lucide="play"></i> Start Learning (Level 0)
          </button>
        </div>
      </div>

      <div class="lesson-card mb-4">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <h3><i data-lucide="table"></i> Slide-to-Interactive Feature Mapping</h3>
          <span class="badge-tech">${matrix.length} Mapping Clusters</span>
        </div>

        <div class="table-responsive" style="overflow-x: auto;">
          <table class="styled-table" style="width: 100%; font-size: 0.88rem; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: rgba(0,0,0,0.2);">
                <th style="padding: 12px 14px; color: var(--text-primary);">Slide Deck / Source</th>
                <th style="padding: 12px 14px; color: var(--text-primary);">Page / Slide Range</th>
                <th style="padding: 12px 14px; color: var(--text-primary);">Core Topic Covered</th>
                <th style="padding: 12px 14px; color: var(--text-primary);">Platform Module</th>
                <th style="padding: 12px 14px; color: var(--text-primary);">Interactive Implementation</th>
              </tr>
            </thead>
            <tbody>
              ${matrix.map((row, i) => `
                <tr style="border-bottom: 1px solid var(--border-color); background: ${i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'};">
                  <td style="padding: 12px 14px; font-weight: 700; color: var(--accent-cyan); white-space: nowrap;">${row.deck}</td>
                  <td style="padding: 12px 14px; font-family: monospace; font-weight: 600;">${row.slides}</td>
                  <td style="padding: 12px 14px; line-height: 1.45;">${row.topic}</td>
                  <td style="padding: 12px 14px; font-weight: 600; color: var(--text-primary); white-space: nowrap;">${row.platformLevel}</td>
                  <td style="padding: 12px 14px; color: var(--text-secondary); line-height: 1.45;">${row.interactiveFeature}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="level-footer-nav mt-5">
        <div class="footer-nav-grid">
          <button class="btn btn-outline" onclick="app.loadLevel('research')"><i data-lucide="arrow-left"></i> Student Research Lab</button>
          <button class="btn btn-primary" onclick="app.loadLevel('level-0')">Start From Level 0 <i data-lucide="arrow-right"></i></button>
        </div>
      </div>
    `;

    window.renderLatex(contentArea);
    if (window.lucide) window.lucide.createIcons();
  }

  renderFooterButtons(currentId) {
    const dayId = this.currentDayId;
    let order = [];
    if (dayId === 'day-1-classical-ml') {
      if (currentId.startsWith('level-')) {
        order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'daily-revision', 'quizzes'];
      } else {
        order = ['mod-1', 'mod-2', 'mod-3', 'mod-4', 'mod-5', 'mod-6', 'mod-7', 'mod-8', 'mod-9', 'mod-10', 'daily-revision', 'quizzes'];
      }
    } else if (dayId === 'day-2-signals-deeplearning') {
      if (currentId.startsWith('level-')) {
        order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'daily-revision', 'quizzes'];
      } else {
        order = ['mod-1', 'mod-2', 'mod-3', 'mod-4', 'mod-5', 'mod-6', 'mod-7', 'mod-8', 'mod-9', 'mod-10', 'mod-11', 'mod-12', 'mod-13', 'daily-revision', 'quizzes'];
      }
    } else if (dayId === 'day-3-reasoning-integration') {
      if (currentId.startsWith('level-')) {
        order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'daily-revision', 'quizzes'];
      } else {
        order = ['mod-1', 'mod-2', 'mod-3', 'mod-4', 'mod-5', 'mod-6', 'mod-7', 'mod-8', 'mod-9', 'mod-10', 'mod-11', 'mod-12', 'mod-13', 'mod-14', 'daily-revision', 'quizzes'];
      }
    } else if (dayId === 'day-10-ensembles-crucible') {
      order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'daily-revision', 'quizzes'];
    } else if ([
      'day-1-foundations',
      'day-2-signals-rules',
      'day-3-transforms-bayes',
      'day-4-geometry-dim',
      'day-5-clusters-recommenders',
      'day-6-neural-foundations',
      'day-7-sequences-time',
      'day-8-transformers-graphs',
      'day-9-optimization-agents'
    ].includes(dayId)) {
      order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'daily-revision', 'quizzes'];
    } else if (dayId === 'day-4-multimodal') {
      order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'level-7', 'quizzes', 'research', 'slide-viewer', 'day4-audit'];
    } else if (dayId === 'day-3-ml') {
      order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'level-7', 'quizzes', 'research', 'slide-viewer', 'day3-audit'];
    } else if (dayId === 'day-2-transformation') {
      order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'level-7', 'quizzes', 'research', 'slide-viewer', 'day2-audit'];
    } else {
      order = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'quizzes', 'research', 'slide-viewer', 'day1-audit'];
    }
    
    const idx = order.indexOf(currentId);
    let html = '<div class="footer-nav-grid">';

    if (idx > 0) {
      const prevId = order[idx - 1];
      html += `<button class="btn btn-outline" onclick="app.loadLevel('${prevId}')"><i data-lucide="arrow-left"></i> Previous Section</button>`;
    } else {
      html += `<div></div>`;
    }

    if (idx < order.length - 1) {
      const nextId = order[idx + 1];
      html += `<button class="btn btn-primary" onclick="app.loadLevel('${nextId}')">Next Section <i data-lucide="arrow-right"></i></button>`;
    }
    html += '</div>';
    return html;
  }

  initVisualizersForLevel(levelId) {
    setTimeout(() => {
      const dayId = this.currentDayId;
      if (dayId === 'day-1-classical-ml') {
        if (levelId === 'level-1' || levelId === 'mod-8') {
          if (window.SprintDay1Visualizers?.initAStarPlayground) window.SprintDay1Visualizers.initAStarPlayground();
          if (window.SprintDay1Visualizers?.initCSPNQueensStudio) window.SprintDay1Visualizers.initCSPNQueensStudio();
        } else if (levelId === 'level-2' || levelId === 'mod-2') {
          if (window.SprintDay1Visualizers?.initKNNBoundaryPlayground) window.SprintDay1Visualizers.initKNNBoundaryPlayground();
          if (window.SprintDay1Visualizers?.initNaiveBayesLaplaceStudio) window.SprintDay1Visualizers.initNaiveBayesLaplaceStudio();
        } else if (levelId === 'level-3' || levelId === 'mod-9') {
          if (window.SprintDay3Visualizers?.initBBNStudio) window.SprintDay3Visualizers.initBBNStudio();
        } else if (levelId === 'level-4' || levelId === 'mod-4') {
          if (window.SprintDay4Visualizers?.initSVMMarginPlayground) window.SprintDay4Visualizers.initSVMMarginPlayground();
          if (window.SprintDay4Visualizers?.initPCAProjectionStudio) window.SprintDay4Visualizers.initPCAProjectionStudio();
        } else if (levelId === 'level-5' || levelId === 'mod-6') {
          if (window.SprintDay5Visualizers?.initKMeansPlayground) window.SprintDay5Visualizers.initKMeansPlayground();
        } else if (levelId === 'mod-1') {
          if (window.SprintDay1Visualizers?.initFeatureScalerStudio) window.SprintDay1Visualizers.initFeatureScalerStudio();
        } else if (levelId === 'mod-3') {
          if (window.SprintDay1Visualizers?.initConfusionLiftStudio) window.SprintDay1Visualizers.initConfusionLiftStudio();
          if (window.SprintDay1Visualizers?.initConfusionMatrixPlayground) window.SprintDay1Visualizers.initConfusionMatrixPlayground();
        } else if (levelId === 'mod-5') {
          if (window.SprintDay4Visualizers?.initPCAProjectionStudio) window.SprintDay4Visualizers.initPCAProjectionStudio();
          if (window.SprintDay4Visualizers?.initPCavsLDAStudio) window.SprintDay4Visualizers.initPCavsLDAStudio();
        }
      } else if (dayId === 'day-2-signals-deeplearning') {
        if (levelId === 'level-1' || levelId === 'mod-1') {
          if (window.SprintDay2Visualizers?.initNyquistAliasingStudio) window.SprintDay2Visualizers.initNyquistAliasingStudio();
        } else if (levelId === 'mod-2') {
          if (window.SprintDay2Visualizers?.initARPLSBaselineStudio) window.SprintDay2Visualizers.initARPLSBaselineStudio();
          if (window.SprintDay2Visualizers?.initDTWMatixStudio) window.SprintDay2Visualizers.initDTWMatixStudio();
        } else if (levelId === 'level-2' || levelId === 'mod-3') {
          if (window.SprintDay3Visualizers?.initSTFTStudio) window.SprintDay3Visualizers.initSTFTStudio();
          if (window.SprintDay3Visualizers?.init1DHaarStudio) window.SprintDay3Visualizers.init1DHaarStudio();
          if (window.SprintDay3Visualizers?.init2DWaveletStudio) window.SprintDay3Visualizers.init2DWaveletStudio();
        } else if (levelId === 'level-3' || levelId === 'mod-4') {
          if (window.SprintDay6Visualizers?.initBackpropCalculator) window.SprintDay6Visualizers.initBackpropCalculator();
          if (window.SprintDay6Visualizers?.initBackpropSpreadsheetLab) window.SprintDay6Visualizers.initBackpropSpreadsheetLab();
        } else if (levelId === 'level-4' || levelId === 'mod-5') {
          if (window.SprintDay6Visualizers?.initCNNParameterStudio) window.SprintDay6Visualizers.initCNNParameterStudio();
        } else if (levelId === 'level-5' || levelId === 'mod-6') {
          if (window.SprintDay7Visualizers?.initLSTMGateValveStudio) window.SprintDay7Visualizers.initLSTMGateValveStudio();
        } else if (levelId === 'mod-9') {
          if (window.SprintDay2Visualizers?.initAnomalyStudio) window.SprintDay2Visualizers.initAnomalyStudio();
          if (window.SprintDay7Visualizers?.initAutoencoderAnomalyStudio) window.SprintDay7Visualizers.initAutoencoderAnomalyStudio();
        } else if (levelId === 'mod-11') {
          if (window.SprintDay10Visualizers?.initEnsembleStudio) window.SprintDay10Visualizers.initEnsembleStudio();
        } else if (levelId === 'mod-12') {
          if (window.SprintDay9Visualizers?.initMultimodalRVMFusionTwin) window.SprintDay9Visualizers.initMultimodalRVMFusionTwin();
        }
      } else if (dayId === 'day-3-reasoning-integration') {
        if (levelId === 'level-1' || levelId === 'mod-1' || levelId === 'mod-2') {
          if (window.SprintDay2Visualizers?.initHospitalTriageStudio) window.SprintDay2Visualizers.initHospitalTriageStudio();
          if (window.ThreeDaySprintDay3Visualizers?.initLevel1Visualizers) window.ThreeDaySprintDay3Visualizers.initLevel1Visualizers();
          if (window.ThreeDaySprintDay3Visualizers?.initReasoningTypesStudio) window.ThreeDaySprintDay3Visualizers.initReasoningTypesStudio();
        } else if (levelId === 'mod-4') {
          if (window.ThreeDaySprintDay3Visualizers?.initMYCINCalculator) window.ThreeDaySprintDay3Visualizers.initMYCINCalculator();
          if (window.ThreeDaySprintDay3Visualizers?.initMamdaniDefuzzifier) window.ThreeDaySprintDay3Visualizers.initMamdaniDefuzzifier();
        } else if (levelId === 'level-3' || levelId === 'mod-7') {
          if (window.SprintDay8Visualizers?.initTransEStudio) window.SprintDay8Visualizers.initTransEStudio();
          if (window.ThreeDaySprintDay3Visualizers?.initTransEStudio) window.ThreeDaySprintDay3Visualizers.initTransEStudio();
        } else if (levelId === 'mod-8') {
          if (window.SprintDay9Visualizers?.initGeneticAlgorithmTSPArena) window.SprintDay9Visualizers.initGeneticAlgorithmArena();
          if (window.ThreeDaySprintDay3Visualizers?.initGeneticAlgorithmArena) window.ThreeDaySprintDay3Visualizers.initGeneticAlgorithmArena();
        } else if (levelId === 'level-4' || levelId === 'mod-11') {
          if (window.ThreeDaySprintDay3Visualizers?.initLevel3Visualizers) window.ThreeDaySprintDay3Visualizers.initLevel3Visualizers();
        } else if (levelId === 'mod-12') {
          if (window.SprintDay9Visualizers?.initCognitiveReActAgentSimulator) window.SprintDay9Visualizers.initCognitiveReActAgentSimulator();
        } else if (levelId === 'level-5' || levelId === 'mod-13' || levelId === 'mod-14') {
          if (window.SprintDay10Visualizers?.initEnsembleStudio) window.SprintDay10Visualizers.initEnsembleStudio();
          if (window.ThreeDaySprintDay3Visualizers?.initLevel5Visualizers) window.ThreeDaySprintDay3Visualizers.initLevel5Visualizers();
        }
      } else if (dayId === 'day-1-foundations') {
        if (levelId === 'level-1') {
          if (window.SprintDay1Visualizers?.initAStarPlayground) window.SprintDay1Visualizers.initAStarPlayground();
          if (window.SprintDay1Visualizers?.initCSPNQueensStudio) window.SprintDay1Visualizers.initCSPNQueensStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay1Visualizers?.initKNNBoundaryPlayground) window.SprintDay1Visualizers.initKNNBoundaryPlayground();
          if (window.SprintDay1Visualizers?.initNaiveBayesLaplaceStudio) window.SprintDay1Visualizers.initNaiveBayesLaplaceStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay1Visualizers?.initConfusionMatrixPlayground) window.SprintDay1Visualizers.initConfusionMatrixPlayground();
          if (window.SprintDay1Visualizers?.initLiftChartStudio) window.SprintDay1Visualizers.initLiftChartStudio();
        } else if (levelId === 'level-4') {
          this.initCodeTabs();
        }
      } else if (dayId === 'day-2-signals-rules') {
        if (levelId === 'level-1') {
          if (window.SprintDay2Visualizers?.initNyquistAliasingStudio) window.SprintDay2Visualizers.initNyquistAliasingStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay2Visualizers?.initARPLSBaselineStudio) window.SprintDay2Visualizers.initARPLSBaselineStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay2Visualizers?.initDTWMatixStudio) window.SprintDay2Visualizers.initDTWMatixStudio();
        } else if (levelId === 'level-4') {
          if (window.SprintDay2Visualizers?.initHospitalTriageStudio) window.SprintDay2Visualizers.initHospitalTriageStudio();
        }
      } else if (dayId === 'day-3-transforms-bayes') {
        if (levelId === 'level-1') {
          if (window.SprintDay3Visualizers?.initSTFTStudio) window.SprintDay3Visualizers.initSTFTStudio();
          if (window.SprintDay3Visualizers?.init1DHaarStudio) window.SprintDay3Visualizers.init1DHaarStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay3Visualizers?.init2DWaveletStudio) window.SprintDay3Visualizers.init2DWaveletStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay3Visualizers?.initMarrLevelsStudio) window.SprintDay3Visualizers.initMarrLevelsStudio();
          if (window.SprintDay3Visualizers?.initMelScaleStudio) window.SprintDay3Visualizers.initMelScaleStudio();
        } else if (levelId === 'level-4') {
          if (window.SprintDay3Visualizers?.initBBNStudio) window.SprintDay3Visualizers.initBBNStudio();
          if (window.SprintDay3Visualizers?.initEMStudio) window.SprintDay3Visualizers.initEMStudio();
        }
      } else if (dayId === 'day-4-geometry-dim') {
        if (levelId === 'level-1') {
          if (window.SprintDay4Visualizers?.initDecisionTreeStudio) window.SprintDay4Visualizers.initDecisionTreeStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay4Visualizers?.initSVMKernelStudio) window.SprintDay4Visualizers.initSVMKernelStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay4Visualizers?.initPCavsLDAStudio) window.SprintDay4Visualizers.initPCavsLDAStudio();
        } else if (levelId === 'level-4') {
          if (window.SprintDay4Visualizers?.initCBR4RStudio) window.SprintDay4Visualizers.initCBR4RStudio();
          this.initCodeTabs();
        }
      } else if (dayId === 'day-5-clusters-recommenders') {
        if (levelId === 'level-1') {
          if (window.SprintDay5Visualizers?.initClusteringArena) window.SprintDay5Visualizers.initClusteringArena();
        } else if (levelId === 'level-2') {
          if (window.SprintDay5Visualizers?.initAprioriCalculator) window.SprintDay5Visualizers.initAprioriCalculator();
        } else if (levelId === 'level-3') {
          if (window.SprintDay5Visualizers?.initCollaborativeFilteringMatrix) window.SprintDay5Visualizers.initCollaborativeFilteringMatrix();
        } else if (levelId === 'level-4') {
          if (window.SprintDay5Visualizers?.initImplicitNeuralCFStudio) window.SprintDay5Visualizers.initImplicitNeuralCFStudio();
          this.initCodeTabs();
        }
      } else if (dayId === 'day-6-neural-foundations') {
        if (levelId === 'level-1') {
          if (window.SprintDay6Visualizers?.initBackpropSpreadsheetLab) window.SprintDay6Visualizers.initBackpropSpreadsheetLab();
        } else if (levelId === 'level-2') {
          if (window.SprintDay6Visualizers?.initRBFvsSOMStudio) window.SprintDay6Visualizers.initRBFvsSOMStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay6Visualizers?.initCNNArchitectureCalculator) window.SprintDay6Visualizers.initCNNArchitectureCalculator();
        } else if (levelId === 'level-4') {
          if (window.SprintDay6Visualizers?.initXAIInspector) window.SprintDay6Visualizers.initXAIInspector();
          this.initCodeTabs();
        }
      } else if (dayId === 'day-7-sequences-time') {
        if (levelId === 'level-1') {
          if (window.SprintDay7Visualizers?.initLSTMGateValveStudio) window.SprintDay7Visualizers.initLSTMGateValveStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay7Visualizers?.initAutoencoderAnomalyStudio) window.SprintDay7Visualizers.initAutoencoderAnomalyStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay7Visualizers?.initWordEmbeddingVectorSpace) window.SprintDay7Visualizers.initWordEmbeddingVectorSpace();
        } else if (levelId === 'level-4') {
          this.initCodeTabs();
        }
      } else if (dayId === 'day-8-transformers-graphs') {
        if (levelId === 'level-1') {
          if (window.SprintDay8Visualizers?.initDeepCNNCaseStudio) window.SprintDay8Visualizers.initDeepCNNCaseStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay8Visualizers?.initSelfAttentionHeatmapStudio) window.SprintDay8Visualizers.initSelfAttentionHeatmapStudio();
        } else if (levelId === 'level-3') {
          if (window.SprintDay8Visualizers?.initTransEVectorPlayground) window.SprintDay8Visualizers.initTransEVectorPlayground();
        } else if (levelId === 'level-4') {
          if (window.SprintDay8Visualizers?.initGraphRAGvsVectorRAGStudio) window.SprintDay8Visualizers.initGraphRAGvsVectorRAGStudio();
          this.initCodeTabs();
        }
      } else if (dayId === 'day-9-optimization-agents') {
        if (levelId === 'level-1') {
          if (window.SprintDay9Visualizers?.initGeneticAlgorithmTSPArena) window.SprintDay9Visualizers.initGeneticAlgorithmTSPArena();
        } else if (levelId === 'level-2') {
          if (window.SprintDay9Visualizers?.initMultimodalRVMFusionTwin) window.SprintDay9Visualizers.initMultimodalRVMFusionTwin();
        } else if (levelId === 'level-3') {
          if (window.SprintDay9Visualizers?.initCognitiveReActAgentSimulator) window.SprintDay9Visualizers.initCognitiveReActAgentSimulator();
        } else if (levelId === 'level-4') {
          this.initCodeTabs();
        }
      } else if (dayId === 'day-10-ensembles-crucible') {
        if (levelId === 'level-1') {
          if (window.SprintDay10Visualizers?.initBaggingBoostingStackingStudio) window.SprintDay10Visualizers.initBaggingBoostingStackingStudio();
        } else if (levelId === 'level-2') {
          if (window.SprintDay10Visualizers?.initEscapeRoomSimulator) window.SprintDay10Visualizers.initEscapeRoomSimulator();
          if (window.SprintDay10Visualizers?.initMasterArchitectureSelector) window.SprintDay10Visualizers.initMasterArchitectureSelector();
        } else if (levelId === 'level-5') {
          this.initCodeTabs();
        }
      } else if (dayId === 'day-4-multimodal') {
        if (levelId === 'level-2') {
          if (window.Visualizers?.initFusionPlayground) window.Visualizers.initFusionPlayground();
        } else if (levelId === 'level-3') {
          if (window.Visualizers?.initAugmentationLab) window.Visualizers.initAugmentationLab();
        } else if (levelId === 'level-4') {
          if (window.Visualizers?.initMultimodalAlignmentStudio) window.Visualizers.initMultimodalAlignmentStudio();
        } else if (levelId === 'level-6') {
          if (window.Visualizers?.initRVMDigitalTwin) window.Visualizers.initRVMDigitalTwin();
        } else if (levelId === 'level-7') {
          this.initCodeTabs();
        }
      } else if (dayId === 'day-3-ml') {
        if (levelId === 'level-2') {
          if (window.Visualizers?.initPCAStudio) window.Visualizers.initPCAStudio();
        } else if (levelId === 'level-3') {
          if (window.Visualizers?.initAutoencoderStudio) window.Visualizers.initAutoencoderStudio();
        } else if (levelId === 'level-4') {
          if (window.Visualizers?.initAnomalyDetectionStudio) window.Visualizers.initAnomalyDetectionStudio();
        } else if (levelId === 'level-5') {
          if (window.Visualizers?.initContrastivePairStudio) window.Visualizers.initContrastivePairStudio();
        } else if (levelId === 'level-7') {
          this.initCodeTabs();
        }
      } else if (dayId === 'day-2-transformation') {
        if (levelId === 'level-1') {
          if (window.Visualizers?.initFourierBlindness) window.Visualizers.initFourierBlindness();
        } else if (levelId === 'level-2') {
          if (window.Visualizers?.initSTFTStudio) window.Visualizers.initSTFTStudio();
        } else if (levelId === 'level-3') {
          if (window.Visualizers?.initWaveletDecompStudio) window.Visualizers.initWaveletDecompStudio();
        } else if (levelId === 'level-4') {
          if (window.Visualizers?.initWavelet2DStudio) window.Visualizers.initWavelet2DStudio();
        } else if (levelId === 'level-5') {
          if (window.Visualizers?.initNaiveBayesStudio) window.Visualizers.initNaiveBayesStudio();
        } else if (levelId === 'level-6') {
          if (window.Visualizers?.initEMDiceStudio) window.Visualizers.initEMDiceStudio();
        } else if (levelId === 'level-7') {
          if (window.Visualizers?.initPipeChokeStudio) window.Visualizers.initPipeChokeStudio();
          this.initCodeTabs();
        }
      } else {
        if (levelId === 'level-1') {
          if (window.Visualizers?.initWaveStudio) window.Visualizers.initWaveStudio();
        } else if (levelId === 'level-2') {
          if (window.Visualizers?.initAliasingSimulator) window.Visualizers.initAliasingSimulator();
          if (window.Visualizers?.initWagonWheel) window.Visualizers.initWagonWheel();
        } else if (levelId === 'level-3') {
          if (window.Visualizers?.initPeakFinder) window.Visualizers.initPeakFinder();
        } else if (levelId === 'level-4') {
          if (window.Visualizers?.initBaselineCorrector) window.Visualizers.initBaselineCorrector();
        } else if (levelId === 'level-5') {
          if (window.Visualizers?.initDTWStudio) window.Visualizers.initDTWStudio();
        } else if (levelId === 'level-6') {
          this.initCodeTabs();
        }
      }
      const contentArea = document.getElementById('main-content-area');
      if (contentArea && window.renderLatex) window.renderLatex(contentArea);
    }, 50);
  }

  initCodeTabs() {
    document.querySelectorAll('.code-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.code-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.code-tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetTab = btn.getAttribute('data-tab');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) targetContent.classList.add('active');
      });
    });
  }


  renderDailyRevision(contentArea) {
    const dayId = this.currentDayId;
    const rev = (window.THREE_DAY_DAILY_REVISIONS && window.THREE_DAY_DAILY_REVISIONS[dayId]) ||
                (window.DAILY_REVISIONS && window.DAILY_REVISIONS[dayId]) || {
      title: "Daily Revision & Active Recall",
      subtitle: "15-minute quick revision of core formulas, flashcards, and exam traps",
      summary: "Review these fundamental definitions and step-by-step algorithms to lock in full marks for your exam.",
      keyFormulas: [],
      flashcards: [],
      examTraps: []
    };

    let formulasHtml = (rev.keyFormulas || []).map(f => {
      return '<div style="background:var(--bg-secondary); border-radius:8px; padding:14px; border-left:3px solid var(--accent-primary);">' +
             '<div style="font-weight:700; color:var(--accent-primary); margin-bottom:6px; font-size:0.88rem;">' + f.name + '</div>' +
             '<div style="font-size:1.05rem; margin:8px 0; text-align:center;">$' + f.formula + '$</div>' +
             '<div style="font-size:0.8rem; color:var(--text-secondary); line-height:1.45;">' + f.note + '</div>' +
             '</div>';
    }).join('');

    // Concept Comparison Tables
    let comparisonTablesHtml = '';
    const tables = rev.comparisonTables || rev.comparisons || [];
    if (tables.length > 0) {
      comparisonTablesHtml = tables.map(tbl => `
        <div class="lesson-card mb-4">
          <div style="margin-bottom: 12px;">
            <h4 style="margin: 0; color: var(--accent-cyan); font-size: 0.95rem;"><i data-lucide="columns" style="width: 14px; height: 14px; vertical-align: middle;"></i> ${tbl.title}</h4>
            <p class="text-secondary" style="margin: 4px 0 0; font-size: 0.82rem;">${tbl.subtitle || ''}</p>
          </div>
          <div class="table-responsive" style="overflow-x: auto;">
            <table class="styled-table" style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color); background: rgba(0,0,0,0.25); text-align: left;">
                  ${tbl.headers.map(h => `<th style="padding: 10px 12px; color: var(--text-primary); font-weight: 700;">${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${tbl.rows.map((row, ri) => `
                  <tr style="border-bottom: 1px solid var(--border-color); background: ${ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)'};">
                    ${row.map((cell, ci) => `<td style="padding: 10px 12px; ${ci === 0 ? 'font-weight: 700; color: var(--accent-cyan);' : 'color: var(--text-secondary); line-height: 1.45;'}">${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `).join('');
    }

    // Flashcards (Active Spaced Recall)
    const cards = rev.flashcards || rev.quickRecall || [];
    let flashcardsHtml = cards.map((card, i) => {
      return `
        <div class="flashcard-box" id="flashcard-${i}" style="background:var(--bg-secondary); border:1px solid var(--border-color); border-radius:10px; padding:16px; transition:all 0.25s ease;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="badge-tech" style="font-size:0.75rem;">Card ${i+1} of ${cards.length}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); cursor:pointer;" onclick="const ans = document.getElementById('flash-ans-${i}'); ans.style.display = (ans.style.display==='none'?'block':'none'); if(window.renderLatex) window.renderLatex(ans);"><i data-lucide="flip-horizontal"></i> Toggle Answer</span>
          </div>
          <div style="font-weight:600; font-size:0.9rem; margin-bottom:12px; color:var(--text-primary); line-height:1.5;">${card.q}</div>
          <div id="flash-ans-${i}" style="display:none; border-top:1px dashed var(--border-color); padding-top:12px; font-size:0.85rem; color:#10b981; line-height:1.55;">
            <strong>Exam Answer:</strong> ${card.a}
            <div style="display:flex; gap:8px; margin-top:10px;">
              <button class="btn btn-sm btn-outline" style="font-size:0.72rem; padding:3px 8px; border-color:#10b981; color:#10b981;" onclick="window.trackFlashcardRecall(${i}, true, '${dayId}')"><i data-lucide="check"></i> Mastered</button>
              <button class="btn btn-sm btn-outline" style="font-size:0.72rem; padding:3px 8px; border-color:#f59e0b; color:#f59e0b;" onclick="window.trackFlashcardRecall(${i}, false, '${dayId}')"><i data-lucide="repeat"></i> Review Later</button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // 5 Mathematical & Technical Application Questions
    let mathQuestionsHtml = '';
    const mathQs = rev.mathQuestions || [];
    if (mathQs.length > 0) {
      mathQuestionsHtml = `
        <div class="lesson-card mb-4" style="border-left: 4px solid #38bdf8;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
            <h3 style="margin:0;"><i data-lucide="calculator"></i> 5 Mathematical & Technical Application Drills</h3>
            <span class="badge-tech" style="background:#0284c7; color:white;">Calculated & Graded</span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:18px;">
            Solve these 5 calculation drills manually with a calculator. Enter your numerical answer to verify against the official exam tolerance range, and click to reveal complete step-by-step mathematical working.
          </p>
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${mathQs.map((q, idx) => {
              const qNum = q.num !== undefined ? q.num : (idx + 1);
              const qCleanTitle = (q.title || `Drill ${qNum}`).replace(/^[0-9]+\.\s*/, '');
              const marks = q.marks !== undefined ? q.marks : 5;
              const correctVal = q.correctValue !== undefined ? q.correctValue : (q.expected !== undefined ? q.expected : 0);
              const tol = q.tolerance !== undefined ? q.tolerance : 0.05;
              const units = q.units || q.unit || '';
              const solution = q.stepByStepSolution || q.steps || '';
              const contextText = q.scenario || q.context || '';
              const escapedTitle = qCleanTitle.replace(/'/g, "\\'");

              return `
              <div class="math-drill-card" style="background:rgba(0,0,0,0.2); border:1px solid var(--border-color); border-radius:8px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
                  <span style="font-weight:700; color:#38bdf8; font-size:0.92rem;">Q${qNum}. ${qCleanTitle}</span>
                  <span class="badge-tech" style="font-size:0.75rem;">[${marks} Marks]</span>
                </div>
                ${contextText ? `<div style="background:rgba(255,255,255,0.02); border-left:2px solid #38bdf8; padding:8px 12px; border-radius:6px; margin-bottom:10px; font-size:0.84rem; line-height:1.5; color:var(--text-secondary);"><strong>Context:</strong> ${contextText}</div>` : ''}
                <div style="font-size:0.88rem; line-height:1.55; color:var(--text-primary); margin-bottom:10px;">
                  <strong>Problem:</strong> ${q.question}
                </div>
                ${q.formulaHint ? `<div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:12px; font-style:italic;"><i data-lucide="info" style="width:12px; height:12px; vertical-align:middle;"></i> Formula Hint: $${q.formulaHint}$</div>` : ''}
                
                <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:8px;">
                  <input type="number" step="any" id="math-input-${q.id}" placeholder="Enter calculated value${units ? ` (${units})` : ''}" style="background:var(--bg-card); color:var(--text-primary); border:1px solid var(--border-color); padding:6px 12px; border-radius:6px; font-size:0.85rem; width:220px;" />
                  <button class="btn btn-sm btn-primary" onclick="window.checkMathAnswer('${q.id}', ${correctVal}, ${tol}, '${units}', ${marks}, '${escapedTitle}')">
                    <i data-lucide="check"></i> Check Calculation
                  </button>
                  <button class="btn btn-sm btn-outline" onclick="const s=document.getElementById('math-solution-${q.id}'); s.style.display=(s.style.display==='none'?'block':'none'); if(window.renderLatex) window.renderLatex(s);">
                    <i data-lucide="eye"></i> Toggle Full Working
                  </button>
                </div>
                <div id="math-feedback-${q.id}" style="margin-top:6px;"></div>
                <div id="math-solution-${q.id}" style="display:none; margin-top:12px; background:rgba(0,0,0,0.3); border-left:3px solid #38bdf8; padding:14px; border-radius:6px; font-size:0.84rem; line-height:1.6; color:var(--text-secondary);">
                  <div style="font-weight:700; color:#38bdf8; margin-bottom:6px;">Step-by-Step Mathematical Solution:</div>
                  ${solution}
                </div>
              </div>
            `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // 2 Unfamiliar Scenario Questions
    let scenarioQuestionsHtml = '';
    const scenQs = rev.scenarioQuestions || [];
    if (scenQs.length > 0) {
      scenarioQuestionsHtml = `
        <div class="lesson-card mb-4" style="border-left: 4px solid #10b981;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
            <h3 style="margin:0;"><i data-lucide="layers"></i> 2 Unfamiliar Scenario Crucible Drills</h3>
            <span class="badge-tech" style="background:#059669; color:white;">NUS-ISS Format</span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:18px;">
            Examiners frequently present unfamiliar engineering setups to test conceptual transfer. Read the scenario, formulate your answer, and review the detailed marking rubric and model response.
          </p>
          <div style="display:flex; flex-direction:column; gap:20px;">
            ${scenQs.map((sc, idx) => {
              const scNum = sc.num !== undefined ? sc.num : (idx + 1);
              const scTitle = sc.title || `Scenario ${scNum}`;
              const displayTitle = scTitle.startsWith('Scenario') ? scTitle : `Scenario ${scNum}: ${scTitle}`;
              const contextText = sc.context || sc.scenario || '';
              const rubricCriteria = sc.rubricCriteria || (sc.rubric ? sc.rubric.map(r => ({ criterion: r.item || r.criterion || r.criteria, marks: r.marks || 1 })) : []);
              const marks = sc.marks !== undefined ? sc.marks : (rubricCriteria.length > 0 ? rubricCriteria.reduce((sum, r) => sum + (r.marks || 0), 0) : 10);
              const escapedTitle = scTitle.replace(/'/g, "\\'");

              return `
              <div class="scenario-drill-card" style="background:rgba(0,0,0,0.2); border:1px solid var(--border-color); border-radius:8px; padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                  <h4 style="margin:0; color:#10b981; font-size:0.95rem;">${displayTitle}</h4>
                  <div style="display:flex; gap:6px; align-items:center;">
                    <span class="badge-tech" style="font-size:0.75rem;">[${marks} Marks]</span>
                    <div id="scenario-score-badge-${sc.id}"></div>
                  </div>
                </div>
                ${contextText ? `
                <div style="background:rgba(255,255,255,0.03); border-left:3px solid var(--accent-cyan); padding:12px; border-radius:6px; margin-bottom:12px; font-size:0.85rem; line-height:1.55; color:var(--text-secondary);">
                  <strong>Scenario Context:</strong> ${contextText}
                </div>` : ''}
                <div style="font-size:0.88rem; line-height:1.55; color:var(--text-primary); margin-bottom:14px;">
                  <strong>Question Prompt:</strong> ${sc.question}
                </div>
                <div>
                  <button class="btn btn-sm btn-outline" style="border-color:#10b981; color:#10b981;" onclick="const r=document.getElementById('sc-rubric-${sc.id}'); r.style.display=(r.style.display==='none'?'block':'none'); if(window.renderLatex) window.renderLatex(r); if(window.lucide) window.lucide.createIcons();">
                    <i data-lucide="file-text"></i> Reveal Model Solution & Examiner Rubric
                  </button>
                </div>
                
                <div id="sc-rubric-${sc.id}" style="display:none; margin-top:16px; border-top:1px dashed var(--border-color); padding-top:14px;">
                  <!-- Rubric Table -->
                  ${rubricCriteria.length > 0 ? `
                    <div style="font-weight:700; color:var(--text-primary); font-size:0.84rem; margin-bottom:8px;">Examiner Marking Rubric:</div>
                    <table class="styled-table" style="width:100%; font-size:0.82rem; margin-bottom:14px; border-collapse:collapse;">
                      <thead>
                        <tr style="border-bottom:1px solid var(--border-color); background:rgba(0,0,0,0.3); text-align:left;">
                          <th style="padding:6px 10px; color:var(--text-primary);">Assessment Criterion</th>
                          <th style="padding:6px 10px; width:70px; text-align:center; color:var(--text-primary);">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${rubricCriteria.map(rc => `
                          <tr style="border-bottom:1px solid var(--border-color);">
                            <td style="padding:6px 10px; color:var(--text-secondary);">${rc.criterion}</td>
                            <td style="padding:6px 10px; text-align:center; font-weight:700; color:#10b981;">+${rc.marks}m</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  ` : ''}

                  <!-- Model Solution -->
                  ${sc.modelSolution ? `
                    <div style="font-weight:700; color:#10b981; font-size:0.84rem; margin-bottom:8px;">Model Examination Answer:</div>
                    <div style="background:rgba(0,0,0,0.3); border-radius:6px; padding:14px; font-size:0.84rem; line-height:1.6; color:var(--text-secondary); margin-bottom:14px;">
                      ${Array.isArray(sc.modelSolution) ? sc.modelSolution.map(s => `<p style="margin-bottom:8px;">${s}</p>`).join('') : `<p>${sc.modelSolution}</p>`}
                    </div>
                  ` : (rubricCriteria.length > 0 ? `
                    <div style="font-weight:700; color:#10b981; font-size:0.84rem; margin-bottom:8px;">Model Solution & Marking Guide:</div>
                    <div style="background:rgba(0,0,0,0.3); border-radius:6px; padding:14px; font-size:0.84rem; line-height:1.6; color:var(--text-secondary); margin-bottom:14px;">
                      <ul style="margin:0; padding-left:18px;">
                        ${rubricCriteria.map(rc => `<li style="margin-bottom:8px;"><strong>[${rc.marks} Marks]</strong> ${rc.criterion}</li>`).join('')}
                      </ul>
                    </div>
                  ` : '')}

                  <!-- Examiner Traps -->
                  ${sc.commonExaminerTraps && sc.commonExaminerTraps.length > 0 ? `
                    <div style="background:rgba(244,63,94,0.1); border-left:3px solid #f43f5e; padding:10px 14px; border-radius:6px; margin-bottom:14px; font-size:0.82rem; line-height:1.5; color:#f43f5e;">
                      <strong>Examiner Trap Alert:</strong>
                      <ul style="margin:4px 0 0; padding-left:18px;">
                        ${sc.commonExaminerTraps.map(tr => `<li>${tr}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}

                  <!-- Self Scoring -->
                  <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; padding-top:6px;">
                    <span style="font-size:0.8rem; font-weight:600; color:var(--text-muted);">Self-Assessment:</span>
                    <button class="btn btn-sm btn-primary" style="font-size:0.75rem; padding:4px 10px;" onclick="window.scoreScenario('${sc.id}', 'full', ${marks}, '${escapedTitle}')">
                      Award Full Marks (+${marks}m)
                    </button>
                    <button class="btn btn-sm btn-outline" style="font-size:0.75rem; padding:4px 10px;" onclick="window.scoreScenario('${sc.id}', 'partial', ${marks}, '${escapedTitle}')">
                      Partial Credit
                    </button>
                    <button class="btn btn-sm btn-outline" style="font-size:0.75rem; padding:4px 10px; border-color:#f43f5e; color:#f43f5e;" onclick="window.scoreScenario('${sc.id}', 'review', ${marks}, '${escapedTitle}')">
                      Needs Review (Log Error)
                    </button>
                  </div>
                </div>
              </div>
            `;
            }).join('')}
          </div>
        </div>
      `;
    }

    let trapsHtml = (rev.examTraps || []).map(t => {
      return '<li style="margin-bottom:6px;">' + t + '</li>';
    }).join('');

    const isRunning = !!window._dailyTimerInterval;
    const curSeconds = typeof window._dailySecondsLeft === 'number' ? window._dailySecondsLeft : 45 * 60;
    const mins = Math.floor(curSeconds / 60);
    const secs = curSeconds % 60;
    const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    contentArea.innerHTML = `
      <div class="lesson-card mb-4" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.12), rgba(99, 102, 241, 0.08)); border: 1px solid rgba(56, 189, 248, 0.25); border-left: 4px solid var(--accent-primary); border-radius: 12px; padding: 22px 24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <div style="flex: 1; min-width: 260px;">
            <div class="level-badge-tag" style="background: var(--accent-primary); color: white; margin-bottom: 8px;">
              <i data-lucide="repeat"></i> ${rev.durationRecommended || '45-60 Min'} Active Recall & Drills
            </div>
            <h2 style="margin: 0 0 6px 0; color: var(--text-primary); font-size: 1.45rem;">${rev.title}</h2>
            <p class="text-secondary" style="margin: 0; font-size: 0.92rem; line-height: 1.5;">${rev.subtitle}</p>
          </div>
          <!-- Live Countdown Timer -->
          <div style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 14px 22px; text-align: center; min-width: 190px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <div style="font-size: 0.72rem; color: #38bdf8; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: ${isRunning ? '#10b981' : '#f59e0b'};"></span>
              Revision Timer
            </div>
            <div id="daily-timer-display" style="font-size: 1.85rem; font-weight: 800; font-family: var(--font-mono, monospace); color: #38bdf8; margin: 4px 0;">${timeFormatted}</div>
            <div style="display: flex; gap: 8px; justify-content: center;">
              <button class="btn btn-sm ${isRunning ? 'btn-primary' : 'btn-outline'}" id="daily-timer-btn" onclick="window.toggleDailyStopwatch()" style="font-size: 0.75rem; padding: 3px 10px;">
                <i data-lucide="${isRunning ? 'pause' : 'play'}"></i> ${isRunning ? 'Pause' : (curSeconds < 45 * 60 ? 'Resume' : 'Start')}
              </button>
              <button class="btn btn-sm btn-outline" onclick="window.resetDailyStopwatch()" style="font-size: 0.75rem; padding: 3px 10px;" title="Reset 45 min">
                <i data-lucide="rotate-ccw"></i> Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lesson-card mb-4" style="background: linear-gradient(135deg, rgba(59,130,246,0.08), rgba(16,185,129,0.08));">
        <h3 style="margin-top:0;"><i data-lucide="sparkles"></i> High-Yield Executive Summary</h3>
        <p style="font-size:0.92rem; line-height:1.6; margin-bottom:0; color:var(--text-primary);">${rev.summary}</p>
      </div>

      <!-- Key Formulas -->
      <div class="lesson-card mb-4">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
          <h3 style="margin:0;"><i data-lucide="calculator"></i> Essential Exam Formulas & Definitions</h3>
          <span class="badge-tech">${rev.keyFormulas ? rev.keyFormulas.length : 0} Core Formulas</span>
        </div>
        <div class="grid-2-col" style="gap:14px;">${formulasHtml}</div>
      </div>

      <!-- Concept Comparison Tables -->
      ${comparisonTablesHtml}

      <!-- 10 Quick-Recall Flashcards -->
      <div class="lesson-card mb-4">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;">
          <h3 style="margin:0;"><i data-lucide="help-circle"></i> 10 Active Recall Flashcards (Click to Flip & Reveal)</h3>
          <span class="badge-tech">${rev.flashcards ? rev.flashcards.length : 0} Flashcards</span>
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px;">Test yourself! Read each scenario question, mentally state your answer, then click to reveal the exact model answer.</p>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px;">${flashcardsHtml}</div>
      </div>

      <!-- 5 Math Questions -->
      ${mathQuestionsHtml}

      <!-- 2 Unfamiliar Scenarios -->
      ${scenarioQuestionsHtml}

      <!-- Examiner Traps -->
      <div class="lesson-card mb-4" style="border-left:4px solid #f43f5e;">
        <h3 style="color:#f43f5e; margin-top:0;"><i data-lucide="shield-alert"></i> Examiner Trap Alert (Where Students Lose Points)</h3>
        <ul style="margin:8px 0 0 0; padding-left:20px; font-size:0.88rem; line-height:1.6; color:var(--text-secondary);">${trapsHtml}</ul>
      </div>

      <div class="level-footer-nav mt-5">
        ${this.renderFooterButtons('daily-revision')}
      </div>
    `;

    window.renderLatex(contentArea);
    if (window.lucide) window.lucide.createIcons();
  }

  renderComingSoon(courseName) {
    const courseMeta = (this.courses || []).find(c => c.id === courseName) || {
      title: courseName,
      code: "NUS ISS",
      description: "Comprehensive curriculum coverage."
    };

    const contentArea = document.getElementById('main-content-area');
    contentArea.innerHTML = `
      <div class="lesson-card hero-card" style="padding: 36px 30px;">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
          <div class="badge-tech" style="font-size: 1.1rem; padding: 6px 14px;">${courseMeta.code || 'NUS ISS'}</div>
          <div>
            <h2 style="margin: 0;">${courseMeta.title}</h2>
            <p class="text-secondary" style="margin: 0; font-size: 0.9rem;">${courseMeta.department || 'Institute of Systems Science'}</p>
          </div>
        </div>
        <p class="lead-text mt-2" style="color: var(--text-primary); max-width: 800px; font-size: 1.05rem;">
          ${courseMeta.description}
        </p>
      </div>

      <div class="grid-2-col mt-4">
        <div class="lesson-card">
          <h4><i data-lucide="zap"></i> Direct Integration into 10-Day Exam Sprint</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">
            All lecture decks, workshops, and exam questions for <strong>${courseMeta.title}</strong> are integrated into the 10-Day Exam Sprint:
          </p>
          <div class="pipeline-flow mt-3">
            <div class="pipeline-step highlight-step">
              <div><strong>Visual Sandboxes</strong><br><small>Zero-math-fear intuition</small></div>
            </div>
            <div class="pipeline-arrow"><i data-lucide="arrow-down"></i></div>
            <div class="pipeline-step">
              <div><strong>Python Workshop Labs</strong><br><small>Verified solution notebooks</small></div>
            </div>
            <div class="pipeline-arrow"><i data-lucide="arrow-down"></i></div>
            <div class="pipeline-step">
              <div><strong>Exam Crucible Quizzes</strong><br><small>Instant grading & justifications</small></div>
            </div>
          </div>
        </div>

        <div class="lesson-card">
          <h4><i data-lucide="award"></i> Recommended Action for Fast Mastery</h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary);">
            To prepare for your exam in 10 days (4 hours each day), jump into the unified 10-Day Sprint where this module is paired with its complementary topic to eliminate math panic and maximize exam retention!
          </p>
          <div class="mt-4" style="display: flex; gap: 10px; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="document.getElementById('course-select-dropdown').value='ten-day-sprint'; app.currentCourseId='ten-day-sprint'; app.renderDaysSelector(); app.selectDay('day-1-foundations');">
              <i data-lucide="play"></i> Launch 10-Day Sprint (Day 1)
            </button>
            <button class="btn btn-outline" onclick="document.getElementById('course-select-dropdown').value='intelligent-sensing-systems'; app.currentCourseId='intelligent-sensing-systems'; app.renderDaysSelector(); app.selectDay('day-1-signals');">
              <i data-lucide="activity"></i> Explore ISSM Track
            </button>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }


  setupMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebar = document.querySelector('.sidebar');

    const toggleSidebar = () => {
      if (sidebar) sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
    };

    const closeSidebar = () => {
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    };

    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleSidebar);
    }
    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    // Auto-close sidebar on mobile after clicking any day or level link
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        if (e.target.closest('.day-card-btn') || e.target.closest('.nav-item')) {
          closeSidebar();
        }
      }
    });
  }

  setupEventListeners() {
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// Interactive Daily Revision Handlers
window.checkMathAnswer = function(qId, correctVal, tol, units, marks, topicName) {
  const inputEl = document.getElementById(`math-input-${qId}`);
  const feedbackEl = document.getElementById(`math-feedback-${qId}`);
  const solutionEl = document.getElementById(`math-solution-${qId}`);
  if (!inputEl || !feedbackEl) return;

  const raw = inputEl.value.trim();
  if (raw === '') {
    feedbackEl.innerHTML = `<span style="color: #f43f5e; font-weight: 600;"><i data-lucide="alert-circle"></i> Please enter your numerical calculation result first.</span>`;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const val = parseFloat(raw);
  if (isNaN(val)) {
    feedbackEl.innerHTML = `<span style="color: #f43f5e; font-weight: 600;"><i data-lucide="alert-circle"></i> Please enter a valid number.</span>`;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const diff = Math.abs(val - correctVal);
  const isCorrect = diff <= (tol || 0.05);

  if (isCorrect) {
    feedbackEl.innerHTML = `<div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 6px; padding: 10px; color: #10b981; font-weight: 700;">
      <i data-lucide="check-circle" style="vertical-align: middle;"></i> Correct! +${marks} Marks (${correctVal} ${units || ''})
    </div>`;
  } else {
    feedbackEl.innerHTML = `<div style="background: rgba(244, 63, 94, 0.15); border: 1px solid #f43f5e; border-radius: 6px; padding: 10px; color: #f43f5e; font-weight: 700;">
      <i data-lucide="x-circle" style="vertical-align: middle;"></i> Incorrect. Your answer: ${val}, Target: ${correctVal} ± ${tol || 0.05} ${units || ''}
    </div>`;
    if (window.MasteryTracker) {
      window.MasteryTracker.logMistake({
        module: topicName || 'Daily Math Revision',
        exam: (topicName && (topicName.includes('IRS') || topicName.includes('MR') || topicName.includes('RS') || topicName.includes('CS'))) ? 'IRS' : 'PRS',
        question: `Math Calculation: ${topicName || qId}`,
        userAnswer: `${val} ${units || ''}`,
        correctAnswer: `${correctVal} ${units || ''}`,
        errorType: 'Calculation Error',
        keyTakeaway: `Review arithmetic steps and formulas for ${topicName || qId}.`
      });
    }
  }

  if (solutionEl) {
    solutionEl.style.display = 'block';
    if (window.renderLatex) window.renderLatex(solutionEl);
  }
  if (window.lucide) window.lucide.createIcons();
};

window.scoreScenario = function(scId, scoreType, marks, topicName) {
  const badgeEl = document.getElementById(`scenario-score-badge-${scId}`);
  if (badgeEl) {
    if (scoreType === 'full') {
      badgeEl.innerHTML = `<span class="badge-tech" style="background: #10b981; color: white;">Full Marks Awarded (+${marks}m)</span>`;
    } else if (scoreType === 'partial') {
      badgeEl.innerHTML = `<span class="badge-tech" style="background: #f59e0b; color: white;">Partial Credit Recorded</span>`;
    } else {
      badgeEl.innerHTML = `<span class="badge-tech" style="background: #f43f5e; color: white;">Logged to Mistake Tracker</span>`;
      if (window.MasteryTracker) {
        window.MasteryTracker.logMistake({
          module: topicName || 'Scenario Crucible',
          exam: (topicName && (topicName.includes('IRS') || topicName.includes('MR') || topicName.includes('RS') || topicName.includes('CS'))) ? 'IRS' : 'PRS',
          question: `Scenario: ${topicName || scId}`,
          userAnswer: 'Self-assessed needs review',
          correctAnswer: 'Review model rubric solution',
          errorType: 'Scenario Interpretation',
          keyTakeaway: `Revisit examiner marking criteria and domain pitfalls for ${topicName || scId}.`
        });
      }
    }
  }
};

window.trackFlashcardRecall = function(idx, success, dayId) {
  const box = document.getElementById(`flashcard-${idx}`);
  if (box) {
    if (success) {
      box.style.borderColor = '#10b981';
      box.style.background = 'rgba(16, 185, 129, 0.05)';
    } else {
      box.style.borderColor = '#f59e0b';
      box.style.background = 'rgba(245, 158, 11, 0.05)';
      if (window.MasteryTracker) {
        const prompt = box.querySelector('div:nth-child(2)')?.textContent || `Flashcard #${idx + 1}`;
        window.MasteryTracker.logMistake({
          module: dayId || 'Flashcard Recall',
          exam: dayId && dayId.includes('reasoning') ? 'IRS' : 'PRS',
          question: prompt,
          userAnswer: 'Active recall failed',
          correctAnswer: 'See flashcard model answer',
          errorType: 'Recall Gap',
          keyTakeaway: `Review active recall card #${idx + 1}.`
        });
      }
    }
  }
};

window.toggleDailyStopwatch = function() {
  const btn = document.getElementById('daily-timer-btn');
  const display = document.getElementById('daily-timer-display');
  if (!btn || !display) return;

  if (window._dailyTimerInterval) {
    clearInterval(window._dailyTimerInterval);
    window._dailyTimerInterval = null;
    btn.innerHTML = `<i data-lucide="play"></i> Resume`;
    btn.className = 'btn btn-sm btn-outline';
  } else {
    if (typeof window._dailySecondsLeft === 'undefined' || window._dailySecondsLeft <= 0) {
      window._dailySecondsLeft = 45 * 60;
    }
    btn.innerHTML = `<i data-lucide="pause"></i> Pause`;
    btn.className = 'btn btn-sm btn-primary';

    window._dailyTimerInterval = setInterval(() => {
      window._dailySecondsLeft--;
      const curDisplay = document.getElementById('daily-timer-display');
      const curBtn = document.getElementById('daily-timer-btn');
      if (window._dailySecondsLeft <= 0) {
        clearInterval(window._dailyTimerInterval);
        window._dailyTimerInterval = null;
        if (curDisplay) curDisplay.textContent = '00:00';
        if (curBtn) {
          curBtn.innerHTML = `<i data-lucide="rotate-ccw"></i> Reset`;
          curBtn.className = 'btn btn-sm btn-outline';
          if (window.lucide) window.lucide.createIcons();
        }
        alert('45-Minute Timed Revision Completed! Review your mathematical workings.');
        return;
      }
      const mins = Math.floor(window._dailySecondsLeft / 60);
      const secs = window._dailySecondsLeft % 60;
      if (curDisplay) {
        curDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }, 1000);
  }
  if (window.lucide) window.lucide.createIcons();
};

window.resetDailyStopwatch = function() {
  if (window._dailyTimerInterval) {
    clearInterval(window._dailyTimerInterval);
    window._dailyTimerInterval = null;
  }
  window._dailySecondsLeft = 45 * 60;
  const display = document.getElementById('daily-timer-display');
  const btn = document.getElementById('daily-timer-btn');
  if (display) display.textContent = '45:00';
  if (btn) {
    btn.innerHTML = `<i data-lucide="play"></i> Start`;
    btn.className = 'btn btn-sm btn-outline';
  }
  if (window.lucide) window.lucide.createIcons();
};

// Global helper for code copying
window.copyCodeBlock = function(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    alert("Python solution code copied to clipboard!");
  });
};

window.app = new LearningApp();
document.addEventListener('DOMContentLoaded', () => {
  window.app.init();
});
