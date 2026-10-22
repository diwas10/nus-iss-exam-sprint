code = '''// NUS ISS Mastery & Progress Tracking Engine
// Tracks 3 Independent Dimensions: Conceptual Understanding, Application Ability, and Exam Readiness
// Maintains Persistent Mistake Log with Error Types, Corrected Explanations, and PRS vs IRS Views

window.MasteryTracker = {
  storageKey: 'iss_mastery_data_v2',
  mistakeKey: 'iss_mistake_log_v2',

  state: {
    // topicId -> { conceptual: boolean, application: boolean, examReady: boolean, lastUpdated: string }
    topics: {},
    mistakes: []
  },

  init: function() {
    this.loadState();
  },

  loadState: function() {
    try {
      const savedTopics = localStorage.getItem(this.storageKey);
      if (savedTopics) this.state.topics = JSON.parse(savedTopics);
      
      const savedMistakes = localStorage.getItem(this.mistakeKey);
      if (savedMistakes) this.state.mistakes = JSON.parse(savedMistakes);
    } catch (e) {
      console.warn('MasteryTracker load error:', e);
    }
  },

  saveState: function() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state.topics));
      localStorage.setItem(this.mistakeKey, JSON.stringify(this.state.mistakes));
    } catch (e) {
      console.warn('MasteryTracker save error:', e);
    }
  },

  getTopicStatus: function(topicId) {
    return this.state.topics[topicId] || { conceptual: false, application: false, examReady: false };
  },

  toggleDimension: function(topicId, dimension) {
    if (!this.state.topics[topicId]) {
      this.state.topics[topicId] = { conceptual: false, application: false, examReady: false };
    }
    this.state.topics[topicId][dimension] = !this.state.topics[topicId][dimension];
    this.state.topics[topicId].lastUpdated = new Date().toISOString();
    this.saveState();
    this.refreshUI();
  },

  logMistake: function(mistake) {
    // mistake: { id, topic, exam, question, myAnswer, correctAnswer, errorType, explanation, date, nextRevision }
    const entry = {
      id: mistake.id || 'err_' + Date.now(),
      topic: mistake.topic || 'General',
      exam: mistake.exam || 'PRS',
      question: mistake.question || '',
      myAnswer: mistake.myAnswer || '',
      correctAnswer: mistake.correctAnswer || '',
      errorType: mistake.errorType || 'Conceptual Misunderstanding',
      explanation: mistake.explanation || '',
      date: mistake.date || new Date().toISOString().split('T')[0],
      nextRevision: mistake.nextRevision || this.computeNextRevision(1)
    };

    this.state.mistakes.unshift(entry);
    this.saveState();
    this.refreshUI();
    return entry;
  },

  deleteMistake: function(mistakeId) {
    this.state.mistakes = this.state.mistakes.filter(m => m.id !== mistakeId);
    this.saveState();
    this.refreshUI();
  },

  computeNextRevision: function(daysToAdd) {
    const d = new Date();
    d.setDate(d.getDate() + (daysToAdd || 1));
    return d.toISOString().split('T')[0];
  },

  calculateStats: function() {
    const topics = Object.values(this.state.topics);
    const totalCount = 37; // Total core syllabus modules across 3 days (10 + 13 + 14)
    
    let conceptualCount = 0;
    let applicationCount = 0;
    let examReadyCount = 0;

    topics.forEach(t => {
      if (t.conceptual) conceptualCount++;
      if (t.application) applicationCount++;
      if (t.examReady) examReadyCount++;
    });

    const prsTopics = [
      'd1-mod-1', 'd1-mod-2', 'd1-mod-3', 'd1-mod-4', 'd1-mod-5', 'd1-mod-6', 'd1-mod-7', 'd1-mod-10',
      'd2-mod-1', 'd2-mod-2', 'd2-mod-3', 'd2-mod-4', 'd2-mod-5', 'd2-mod-6', 'd2-mod-7', 'd2-mod-8',
      'd2-mod-9', 'd2-mod-10', 'd2-mod-11', 'd2-mod-12', 'd2-mod-13'
    ];
    const irsTopics = [
      'd1-mod-8', 'd1-mod-9',
      'd3-mod-1', 'd3-mod-2', 'd3-mod-3', 'd3-mod-4', 'd3-mod-5', 'd3-mod-6', 'd3-mod-7', 'd3-mod-8',
      'd3-mod-9', 'd3-mod-10', 'd3-mod-11', 'd3-mod-12', 'd3-mod-13', 'd3-mod-14'
    ];

    let prsScore = 0;
    prsTopics.forEach(id => {
      const s = this.getTopicStatus(id);
      prsScore += (s.conceptual ? 1 : 0) + (s.application ? 1 : 0) + (s.examReady ? 1 : 0);
    });
    const prsTotalPossible = prsTopics.length * 3;
    const prsPercent = Math.round((prsScore / prsTotalPossible) * 100);

    let irsScore = 0;
    irsTopics.forEach(id => {
      const s = this.getTopicStatus(id);
      irsScore += (s.conceptual ? 1 : 0) + (s.application ? 1 : 0) + (s.examReady ? 1 : 0);
    });
    const irsTotalPossible = irsTopics.length * 3;
    const irsPercent = Math.round((irsScore / irsTotalPossible) * 100);

    return {
      totalModules: totalCount,
      conceptualCount,
      applicationCount,
      examReadyCount,
      prsPercent,
      irsPercent,
      overallPercent: Math.round(((prsScore + irsScore) / (prsTotalPossible + irsTotalPossible)) * 100),
      mistakesCount: this.state.mistakes.length
    };
  },

  refreshUI: function() {
    const stats = this.calculateStats();
    
    // Update topbar badges if present
    const prsEl = document.getElementById('topbar-prs-mastery');
    if (prsEl) prsEl.textContent = stats.prsPercent + '%';

    const irsEl = document.getElementById('topbar-irs-mastery');
    if (irsEl) irsEl.textContent = stats.irsPercent + '%';

    const mistakesEl = document.getElementById('topbar-mistakes-badge');
    if (mistakesEl) mistakesEl.textContent = stats.mistakesCount;

    // If tracker dashboard is currently rendered, re-render it
    const mount = document.getElementById('mastery-tracker-mount');
    if (mount) this.renderDashboard('mastery-tracker-mount');
  },

  renderDashboard: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const stats = this.calculateStats();
    const mistakes = this.state.mistakes;

    let html = `
      <div class="mastery-dashboard-container">
        <!-- Top Metrics Grid -->
        <div class="grid-4-col mb-4">
          <div class="lesson-card p-3" style="border-left: 4px solid var(--accent-primary); background: var(--bg-card);">
            <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Overall Mastery</div>
            <div style="font-size: 2rem; font-weight: 800; color: var(--accent-cyan); margin: 4px 0;">${stats.overallPercent}%</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">${stats.examReadyCount} / ${stats.totalModules} Exam Ready</div>
          </div>

          <div class="lesson-card p-3" style="border-left: 4px solid #38bdf8; background: var(--bg-card);">
            <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">PRS (ISY5002) Readiness</div>
            <div style="font-size: 2rem; font-weight: 800; color: #38bdf8; margin: 4px 0;">${stats.prsPercent}%</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">PSUPR, PRMLS & ISSM</div>
          </div>

          <div class="lesson-card p-3" style="border-left: 4px solid #10b981; background: var(--bg-card);">
            <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">IRS (ISY5001) Readiness</div>
            <div style="font-size: 2rem; font-weight: 800; color: #10b981; margin: 4px 0;">${stats.irsPercent}%</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">MR, RS & CS</div>
          </div>

          <div class="lesson-card p-3" style="border-left: 4px solid #f43f5e; background: var(--bg-card);">
            <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Tracked Mistakes</div>
            <div style="font-size: 2rem; font-weight: 800; color: #f43f5e; margin: 4px 0;">${stats.mistakesCount}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Targeted Revision Queue</div>
          </div>
        </div>

        <!-- 3 Dimensions Explanation Banner -->
        <div class="lesson-card mb-4" style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2);">
          <div style="display: flex; gap: 14px; align-items: flex-start;">
            <div style="font-size: 1.5rem; color: var(--accent-cyan);"><i data-lucide="shield-check"></i></div>
            <div>
              <h4 style="margin: 0; color: var(--text-primary);">Three-Dimensional Mastery Standard</h4>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 6px 0 0 0; line-height: 1.5;">
                To guarantee true A+ performance in unfamiliar open-book examination scenarios, each topic requires three independent verifications:
                <strong>(1) Conceptual:</strong> Can explain the physical meaning, why it exists, and when to choose it;
                <strong>(2) Application:</strong> Can solve mathematical workouts and step-by-step algorithms;
                <strong>(3) Exam Ready:</strong> Can write an authentic NUS-ISS scenario response with trade-offs under timed conditions.
              </p>
            </div>
          </div>
        </div>

        <!-- Tabbed View: PRS vs IRS vs Mistake Log -->
        <div class="mastery-tabs mb-4" style="display: flex; gap: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
          <button class="btn btn-sm btn-primary" onclick="MasteryTracker.switchTab('mistakes')" id="tab-btn-mistakes">
            <i data-lucide="alert-triangle"></i> Mistake Log & Spaced Revision (${mistakes.length})
          </button>
          <button class="btn btn-sm btn-outline" onclick="MasteryTracker.switchTab('prs')" id="tab-btn-prs">
            <i data-lucide="layers"></i> PRS (ISY5002) Matrix
          </button>
          <button class="btn btn-sm btn-outline" onclick="MasteryTracker.switchTab('irs')" id="tab-btn-irs">
            <i data-lucide="brain"></i> IRS (ISY5001) Matrix
          </button>
        </div>

        <!-- Tab Content Areas -->
        <div id="mastery-tab-content">
          ${this.renderMistakesTab()}
        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  },

  switchTab: function(tabName) {
    document.querySelectorAll('.mastery-tabs button').forEach(b => {
      b.className = 'btn btn-sm btn-outline';
    });
    const activeBtn = document.getElementById(`tab-btn-${tabName}`);
    if (activeBtn) activeBtn.className = 'btn btn-sm btn-primary';

    const contentArea = document.getElementById('mastery-tab-content');
    if (!contentArea) return;

    if (tabName === 'mistakes') {
      contentArea.innerHTML = this.renderMistakesTab();
    } else if (tabName === 'prs') {
      contentArea.innerHTML = this.renderPRSMatrixTab();
    } else if (tabName === 'irs') {
      contentArea.innerHTML = this.renderIRSMatrixTab();
    }

    if (window.lucide) window.lucide.createIcons();
  },

  renderMistakesTab: function() {
    const mistakes = this.state.mistakes;
    if (mistakes.length === 0) {
      return `
        <div class="lesson-card p-4 text-center" style="background: var(--bg-card);">
          <div style="font-size: 2.5rem; color: #10b981; margin-bottom: 10px;"><i data-lucide="check-circle-2"></i></div>
          <h4 style="margin: 0; color: var(--text-primary);">Zero Logged Mistakes</h4>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 6px;">
            As you practice quizzes, exam workouts, and the Question Generator, any errors will be logged here with error classifications, corrected reasoning, and recommended spaced revision dates.
          </p>
          <button class="btn btn-sm btn-outline mt-3" onclick="MasteryTracker.addSampleMistake()">
            <i data-lucide="plus"></i> Add Sample Exam Trap Entry
          </button>
        </div>
      `;
    }

    let listHtml = '';
    mistakes.forEach(m => {
      listHtml += `
        <div class="lesson-card mb-3 p-3" style="border: 1px solid var(--border-color); background: var(--bg-card); border-left: 4px solid #f43f5e;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; flex-wrap: wrap;">
            <div>
              <span class="badge-tech" style="background: rgba(244, 63, 94, 0.15); color: #f43f5e; font-size: 0.75rem;">
                ${m.exam} • ${m.topic}
              </span>
              <span class="badge-outline" style="border-color: #f59e0b; color: #f59e0b; font-size: 0.75rem; margin-left: 6px;">
                ${m.errorType}
              </span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              Logged: ${m.date} | Next: <strong style="color: var(--accent-cyan);">${m.nextRevision}</strong>
              <button class="btn btn-sm btn-outline" style="padding: 2px 6px; margin-left: 8px; color: #f43f5e;" onclick="MasteryTracker.deleteMistake('${m.id}')" title="Delete entry">
                <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>
              </button>
            </div>
          </div>

          <h5 style="margin: 10px 0 6px 0; color: var(--text-primary); font-size: 0.95rem;">${m.question}</h5>
          
          <div class="grid-2-col mt-2" style="font-size: 0.85rem;">
            <div style="background: rgba(239, 68, 68, 0.1); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #ef4444;">
              <strong style="color: #ef4444;">Your Answer / Misconception:</strong>
              <div style="color: var(--text-primary); margin-top: 4px;">${m.myAnswer}</div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 8px 12px; border-radius: 6px; border-left: 3px solid #10b981;">
              <strong style="color: #10b981;">Correct Verified Solution:</strong>
              <div style="color: var(--text-primary); margin-top: 4px;">${m.correctAnswer}</div>
            </div>
          </div>

          <div style="margin-top: 10px; font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-secondary); padding: 10px; border-radius: 6px;">
            <strong style="color: var(--accent-primary);">Examiner Trap & Corrected Mental Model:</strong> ${m.explanation}
          </div>
        </div>
      `;
    });

    return `
      <div class="mistakes-section">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <h4 style="margin: 0; color: var(--text-primary);"><i data-lucide="clipboard-list"></i> Targeted Error Revision Ledger</h4>
          <button class="btn btn-sm btn-outline" onclick="MasteryTracker.addSampleMistake()">
            <i data-lucide="plus"></i> Log Exam Trap
          </button>
        </div>
        ${listHtml}
      </div>
    `;
  },

  renderPRSMatrixTab: function() {
    const prsModules = [
      { id: 'd1-mod-1', name: 'Module 1: ML Foundations & Preprocessing', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-2', name: 'Module 2: Classical Supervised (k-NN, LogReg, Naive Bayes)', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-3', name: 'Module 3: Evaluation, ROC-AUC & Lift Deciles', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-4', name: 'Module 4: Support Vector Machines & Kernels', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-5', name: 'Module 5: Feature Selection, PCA vs LDA', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-6', name: 'Module 6: Clustering (K-Means, DBSCAN, GMM-EM)', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-7', name: 'Module 7: Regression, RBF Networks & SOM', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd1-mod-10', name: 'Module 10: Day 1 Math Integration', day: 'Day 1', subj: 'PSUPR' },
      { id: 'd2-mod-1', name: 'Module 1: Signal Foundations & Nyquist Aliasing', day: 'Day 2', subj: 'ISSM' },
      { id: 'd2-mod-2', name: 'Module 2: Preprocessing, arPLS & DTW Alignment', day: 'Day 2', subj: 'ISSM' },
      { id: 'd2-mod-3', name: 'Module 3: Signal Transforms (STFT & 2D Wavelets)', day: 'Day 2', subj: 'ISSM' },
      { id: 'd2-mod-4', name: 'Module 4: Neural Foundations & Backprop Calculus', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-5', name: 'Module 5: CNNs, Receptive Fields & GAP Redesign', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-6', name: 'Module 6: Sequential Models (RNN, LSTM & Clickstream)', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-7', name: 'Module 7: Hidden Markov Models (HMM)', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-8', name: 'Module 8: Transformers & Scaled Attention', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-9', name: 'Module 9: Autoencoders & 3-Sigma Anomaly Detection', day: 'Day 2', subj: 'ISSM' },
      { id: 'd2-mod-10', name: 'Module 10: Deep Reinforcement Learning (Robotics)', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-11', name: 'Module 11: Ensemble Learning (AdaBoost & Stacking)', day: 'Day 2', subj: 'PRMLS' },
      { id: 'd2-mod-12', name: 'Module 12: Multimodal Sensing & RVM Digital Twin', day: 'Day 2', subj: 'ISSM' },
      { id: 'd2-mod-13', name: 'Module 13: Day 2 Integration & Case Studies', day: 'Day 2', subj: 'ISSM/PRMLS' }
    ];

    return this.renderModuleTable(prsModules, 'ISY5002 — Pattern Recognition Systems (PRS)');
  },

  renderIRSMatrixTab: function() {
    const irsModules = [
      { id: 'd1-mod-8', name: 'Module 8: Search (A* Optimality) & CSP (AC-3)', day: 'Day 1', subj: 'MR' },
      { id: 'd1-mod-9', name: 'Module 9: Bayesian Networks, CPT & d-Separation', day: 'Day 1', subj: 'MR' },
      { id: 'd3-mod-1', name: 'Module 1: Reasoning Foundations & System 1/2', day: 'Day 3', subj: 'CS' },
      { id: 'd3-mod-2', name: 'Module 2: Knowledge Representation & Frame Daemons', day: 'Day 3', subj: 'CS' },
      { id: 'd3-mod-3', name: 'Module 3: Expert Systems & Case-Based Reasoning', day: 'Day 3', subj: 'RS' },
      { id: 'd3-mod-4', name: 'Module 4: Uncertainty (MYCIN CF & Fuzzy Mamdani)', day: 'Day 3', subj: 'RS' },
      { id: 'd3-mod-5', name: 'Module 5: Knowledge Acquisition & Verification', day: 'Day 3', subj: 'RS' },
      { id: 'd3-mod-6', name: 'Module 6: Association Mining (Apriori) & Recommenders', day: 'Day 3', subj: 'RS' },
      { id: 'd3-mod-7', name: 'Module 7: Knowledge Graphs & TransE Embeddings', day: 'Day 3', subj: 'MR' },
      { id: 'd3-mod-8', name: 'Module 8: Genetic Algorithms & Order Crossover (OX)', day: 'Day 3', subj: 'RS' },
      { id: 'd3-mod-9', name: 'Module 9: Natural Language Cognition & Chatbots', day: 'Day 3', subj: 'CS' },
      { id: 'd3-mod-10', name: 'Module 10: Vision & Audio Cognition (Marr 3 Levels)', day: 'Day 3', subj: 'CS' },
      { id: 'd3-mod-11', name: 'Module 11: Cognitive Architectures & 11-Entity Model', day: 'Day 3', subj: 'CS' },
      { id: 'd3-mod-12', name: 'Module 12: LLM Reasoning, GraphRAG & Agents', day: 'Day 3', subj: 'RS/CS' },
      { id: 'd3-mod-13', name: 'Module 13: Hybrid Reasoning & Architecture Design', day: 'Day 3', subj: 'CS' },
      { id: 'd3-mod-14', name: 'Module 14: Day 3 Integration & Sample Paper Crucible', day: 'Day 3', subj: 'MR/RS/CS' }
    ];

    return this.renderModuleTable(irsModules, 'ISY5001 — Intelligent Reasoning Systems (IRS)');
  },

  renderModuleTable: function(modules, courseTitle) {
    let rowsHtml = '';
    modules.forEach(m => {
      const status = this.getTopicStatus(m.id);
      const isComplete = status.conceptual && status.application && status.examReady;
      
      rowsHtml += `
        <tr style="border-bottom: 1px solid var(--border-color); background: ${isComplete ? 'rgba(16, 185, 129, 0.05)' : 'transparent'};">
          <td style="padding: 10px 12px; font-size: 0.85rem;">
            <span class="badge-tech" style="font-size: 0.7rem; padding: 2px 6px;">${m.day}</span>
            <span class="badge-outline" style="font-size: 0.7rem; padding: 2px 6px; margin-left: 4px;">${m.subj}</span>
          </td>
          <td style="padding: 10px 12px; font-weight: 600; font-size: 0.88rem; color: var(--text-primary);">${m.name}</td>
          
          <td style="padding: 10px 12px; text-align: center;">
            <input type="checkbox" ${status.conceptual ? 'checked' : ''} onchange="MasteryTracker.toggleDimension('${m.id}', 'conceptual')" style="cursor: pointer; width: 16px; height: 16px; accent-color: var(--accent-primary);">
          </td>
          <td style="padding: 10px 12px; text-align: center;">
            <input type="checkbox" ${status.application ? 'checked' : ''} onchange="MasteryTracker.toggleDimension('${m.id}', 'application')" style="cursor: pointer; width: 16px; height: 16px; accent-color: #38bdf8;">
          </td>
          <td style="padding: 10px 12px; text-align: center;">
            <input type="checkbox" ${status.examReady ? 'checked' : ''} onchange="MasteryTracker.toggleDimension('${m.id}', 'examReady')" style="cursor: pointer; width: 16px; height: 16px; accent-color: #10b981;">
          </td>

          <td style="padding: 10px 12px; text-align: center;">
            ${isComplete 
              ? '<span class="badge-tech" style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 0.75rem;"><i data-lucide="check-check" style="width: 12px; height: 12px;"></i> Mastered</span>' 
              : '<span class="badge-outline" style="font-size: 0.75rem; color: var(--text-muted);">In Progress</span>'}
          </td>
        </tr>
      `;
    });

    return `
      <div class="lesson-card p-3" style="background: var(--bg-card);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h4 style="margin: 0; color: var(--text-primary); font-size: 1.05rem;">${courseTitle}</h4>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Click checkboxes to track independently</span>
        </div>
        <div style="overflow-x: auto;">
          <table class="styled-table" style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--border-color); text-align: left; background: var(--bg-secondary);">
                <th style="padding: 10px 12px;">Schedule</th>
                <th style="padding: 10px 12px;">Module Topic</th>
                <th style="padding: 10px 12px; text-align: center;" title="Can explain intuitively and justify algorithm choice">1. Conceptual</th>
                <th style="padding: 10px 12px; text-align: center;" title="Can calculate by hand and solve mathematical questions">2. Application</th>
                <th style="padding: 10px 12px; text-align: center;" title="Can solve timed unfamiliar exam scenarios with trade-offs">3. Exam Ready</th>
                <th style="padding: 10px 12px; text-align: center;">Status</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  addSampleMistake: function() {
    this.logMistake({
      topic: 'Supervised Classifiers (Naive Bayes)',
      exam: 'PRS',
      question: 'When computing Laplace smoothed conditional probability P(x_j | C_k), what is added to the denominator?',
      myAnswer: 'Added +1 to denominator: count(C_k) + 1',
      correctAnswer: 'Must add |V_j| to denominator: count(C_k) + |V_j| where |V_j| is the number of distinct possible values for feature j.',
      errorType: 'Laplace Denominator |V| Trap',
      explanation: 'Because we add +1 pseudo-count to every possible state of attribute j in the numerator, the total imaginary counts sum to |V_j|. To ensure the probability distribution sums to 1.0, the denominator must expand by |V_j|.'
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  if (window.MasteryTracker) window.MasteryTracker.init();
});
'''

with open('learning_platform/core/mastery-tracker.js', 'w') as f:
    f.write(code)

print("Created core/mastery-tracker.js successfully.")
