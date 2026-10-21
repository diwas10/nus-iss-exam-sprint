// Interactive Slide Deck Explorer & Viewer for NUS ISS Modules
// Supports Day 1 (124 slides across 3 decks) and Day 2 (54 slides across 2 decks)
// Including original diagrams, bullet points, code, and instructor speaker notes.

window.SlideViewer = {
  currentDeckKey: null,
  currentSlideIndex: 0,

  getActiveDayId() {
    return (window.app && window.app.currentDayId) || 'day-1-signals';
  },

  getDecksForDay() {
    const dayId = this.getActiveDayId();
    if (dayId === 'day-4-multimodal') {
      return {
        decks: window.DAY4_SLIDE_DECKS,
        defaultKey: 'day4_pdf',
        imageFolder: 'assets/slides_day4',
        instructor: 'Dr. TIAN Jing',
        title: 'Day 4 Slide Deck Explorer: Sense Making from Sensory Data',
        subtitle: 'Study all 53 slides/pages across Sense Making (PDF, 40 slides), Reverse Vending Machine Worksheet (PPTX, 9 slides), and RVM Instructions (PDF, 4 pages) with original figures, code snippets, and instructor notes.'
      };
    } else if (dayId === 'day-3-ml') {
      return {
        decks: window.DAY3_SLIDE_DECKS,
        defaultKey: 'day3_pdf',
        imageFolder: 'assets/slides_day3',
        instructor: 'Dr. TIAN Jing',
        title: 'Day 3 Slide Deck Explorer: Intelligent Sensory Signal Processing using Machine Learning',
        subtitle: 'Study all 52 slides across ML Foundations & Deep Learning (PDF, 44 slides) and Machine Sensor & Fish Tank Worksheet (PPTX, 8 slides) with original figures, code snippets, and instructor lecture notes.'
      };
    } else if (dayId === 'day-2-transformation') {
      return {
        decks: window.DAY2_SLIDE_DECKS,
        defaultKey: 'day2_pdf',
        imageFolder: 'assets/slides_day2',
        instructor: 'Dr. TIAN Jing',
        title: 'Day 2 Slide Deck Explorer: Sensory Signal Transformation',
        subtitle: 'Study all 54 slides across 2 Sensory signal transformation (PDF, 48 slides) and Automated Pipe Inspection (PPTX, 6 slides) with original figures and lecture notes.'
      };
    } else {
      return {
        decks: window.DAY1_SLIDE_DECKS,
        defaultKey: 'module1',
        imageFolder: 'assets/slides',
        instructor: 'Dr. Hu Zhengqing',
        title: 'Day 1 Slide Deck Explorer: Foundations of Sensor Signal Processing',
        subtitle: 'Study all 124 slides across Module 1 (PDF), Module 2 (PPTX), and Module 3 (PPTX) with original figures, code snippets, and instructor lecture notes.'
      };
    }
  },

  render(mountPointId) {
    const container = document.getElementById(mountPointId);
    if (!container) return;

    const dayConfig = this.getDecksForDay();
    const decks = dayConfig.decks;
    if (!decks) {
      container.innerHTML = `<div class="p-4 text-center">Slide data loading...</div>`;
      return;
    }

    if (!this.currentDeckKey || !decks[this.currentDeckKey]) {
      this.currentDeckKey = dayConfig.defaultKey;
      this.currentSlideIndex = 0;
    }

    const deck = decks[this.currentDeckKey];
    const slides = deck.slides;
    if (this.currentSlideIndex >= slides.length) this.currentSlideIndex = 0;
    const slide = slides[this.currentSlideIndex];

    const deckKeys = Object.keys(decks);

    let html = `
      <div class="slide-viewer-wrapper">
        <!-- Top Banner -->
        <div class="level-header-banner mb-4">
          <div class="level-badge-tag">Official Course Slides & Companion</div>
          <h2>${dayConfig.title}</h2>
          <p class="text-secondary">${dayConfig.subtitle}</p>
        </div>

        <!-- Deck Selector Tabs -->
        <div class="slide-deck-tabs-row mb-4" style="display: flex; gap: 10px; flex-wrap: wrap;">
          ${deckKeys.map(k => `
            <button class="btn ${this.currentDeckKey === k ? 'btn-primary' : 'btn-outline'}" onclick="SlideViewer.switchDeck('${k}')">
              <i data-lucide="${decks[k].format === 'PDF' ? 'file-text' : 'presentation'}"></i> ${decks[k].title} (${decks[k].format} - ${decks[k].slides.length} Slides)
            </button>
          `).join('')}
        </div>

        <!-- Navigation Controls Toolbar -->
        <div class="lesson-card mb-4" style="padding: 14px 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="btn btn-sm btn-outline" onclick="SlideViewer.prevSlide()" ${this.currentSlideIndex === 0 ? 'disabled' : ''}>
                <i data-lucide="chevron-left"></i> Previous
              </button>
              <button class="btn btn-sm btn-outline" onclick="SlideViewer.nextSlide()" ${this.currentSlideIndex === slides.length - 1 ? 'disabled' : ''}>
                Next <i data-lucide="chevron-right"></i>
              </button>
              <span class="text-muted" style="font-size: 0.85rem; margin-left: 8px;">
                Slide <strong>${this.currentSlideIndex + 1}</strong> of <strong>${slides.length}</strong>
              </span>
            </div>

            <!-- Jump to slide selector -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <label style="font-size: 0.8rem; color: var(--text-muted);">Jump to:</label>
              <select class="select-styled" style="font-size: 0.82rem; padding: 4px 10px; max-width: 260px;" onchange="SlideViewer.goToSlide(parseInt(this.value))">
                ${slides.map((s, idx) => `
                  <option value="${idx}" ${idx === this.currentSlideIndex ? 'selected' : ''}>
                    Slide ${s.slideNumber}: ${s.title.substring(0, 30)}...
                  </option>
                `).join('')}
              </select>

              ${slide.levelId ? `
                <button class="btn btn-sm btn-primary" onclick="app.loadLevel('${slide.levelId}')" title="Test this concept in the interactive level">
                  <i data-lucide="play"></i> Open in Sandbox
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Slide Presentation Card -->
        <div class="lesson-card slide-display-card mb-4" style="border: 1px solid var(--border-color); background: var(--bg-card); min-height: 480px; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
          <!-- Slide Header -->
          <div style="display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 14px; border-bottom: 1px solid var(--border-color); margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                <span class="badge-tech" style="font-size: 0.72rem;">${deck.format} &bull; ${deck.sourceFile}</span>
                <span class="badge-outline" style="font-size: 0.72rem;">SLIDE ${slide.slideNumber} OF ${slides.length}</span>
              </div>
              <h3 style="color: var(--accent-cyan); margin: 0; font-size: 1.3rem;">${slide.title}</h3>
            </div>
            ${slide.levelId ? `
              <span class="badge-count" style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); padding: 4px 10px; border-radius: 6px;">
                Interactive: ${slide.levelId.replace('-', ' ').toUpperCase()}
              </span>
            ` : ''}
          </div>

          <!-- Slide Visual Media (if available) -->
          ${slide.images && slide.images.length > 0 ? `
            <div class="slide-media-container mb-4" style="text-align: center; background: rgba(0,0,0,0.3); padding: 18px; border-radius: 8px; border: 1px solid var(--border-color);">
              <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 16px;">
                ${slide.images.map(img => `
                  <div style="max-width: 100%; text-align: center;">
                    <img src="${dayConfig.imageFolder}/${img}" alt="Slide Diagram" style="max-height: 320px; max-width: 100%; border-radius: 6px; object-fit: contain; box-shadow: 0 2px 8px rgba(0,0,0,0.3);" loading="lazy" onerror="this.style.display='none';">
                  </div>
                `).join('')}
              </div>
              <div class="text-muted mt-2" style="font-size: 0.72rem;">Extracted high-resolution diagram from original lecture presentation</div>
            </div>
          ` : ''}

          <!-- Slide Text Content & Bullet Points -->
          <div class="slide-body-content mb-4" style="font-size: 1rem; line-height: 1.65;">
            ${slide.content && slide.content.length > 0 ? `
              <div class="slide-bullet-points">
                ${slide.content.map(pt => {
                  const isCode = pt.includes('import ') || pt.includes('plt.') || pt.includes('np.') || pt.includes('pd.') || pt.includes('findPeaks') || pt.includes('pywt.') || pt.includes('def ') || pt.includes('GaussianNB') || pt.includes('torch.') || pt.includes('nn.');
                  if (isCode) {
                    return `<pre class="mt-2 mb-2"><code class="language-python">${pt}</code></pre>`;
                  }
                  return `<p style="margin-bottom: 8px; color: var(--text-primary);">&#8226; ${pt}</p>`;
                }).join('')}
              </div>
            ` : `<p class="text-muted">Slide contains visual diagrams and lecture titles.</p>`}
          </div>

          <!-- Speaker Notes Box -->
          ${slide.notes ? `
            <div class="slide-speaker-notes mt-4" style="background: rgba(2, 132, 199, 0.08); border-left: 4px solid var(--accent-cyan); padding: 14px 16px; border-radius: 6px;">
              <div style="display: flex; align-items: center; gap: 6px; font-weight: 700; color: var(--accent-cyan); font-size: 0.85rem; margin-bottom: 6px;">
                <i data-lucide="mic" style="width: 16px; height: 16px;"></i> Instructor Speaker Notes (${dayConfig.instructor}):
              </div>
              <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; white-space: pre-line;">
                ${slide.notes}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Slide Thumbnails Grid Toggle -->
        <div class="lesson-card mb-4">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h4><i data-lucide="grid"></i> Deck Slide Grid (${slides.length} Slides)</h4>
            <span class="text-muted" style="font-size: 0.78rem;">Click any slide to jump directly</span>
          </div>

          <div class="slide-thumbnail-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; max-height: 280px; overflow-y: auto; padding: 4px;">
            ${slides.map((s, idx) => `
              <button class="slide-thumb-btn ${idx === this.currentSlideIndex ? 'active' : ''}" onclick="SlideViewer.goToSlide(${idx})" style="text-align: left; padding: 8px; border-radius: 6px; border: 1px solid ${idx === this.currentSlideIndex ? 'var(--accent-cyan)' : 'var(--border-color)'}; background: ${idx === this.currentSlideIndex ? 'rgba(2, 132, 199, 0.2)' : 'var(--bg-card)'}; cursor: pointer; color: var(--text-primary); transition: all 0.15s ease;">
                <div style="font-size: 0.68rem; font-weight: 700; color: ${idx === this.currentSlideIndex ? 'var(--accent-cyan)' : 'var(--text-muted)'}; margin-bottom: 3px;">
                  Slide ${s.slideNumber}
                </div>
                <div style="font-size: 0.74rem; line-height: 1.25; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
                  ${s.title}
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Bottom Action Row -->
        <div class="level-footer-nav mt-4">
          <div class="footer-nav-grid">
            <button class="btn btn-outline" onclick="SlideViewer.prevSlide()" ${this.currentSlideIndex === 0 ? 'disabled' : ''}>
              <i data-lucide="arrow-left"></i> Previous Slide
            </button>
            <button class="btn btn-primary" onclick="SlideViewer.nextSlide()" ${this.currentSlideIndex === slides.length - 1 ? 'disabled' : ''}>
              Next Slide <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    window.renderLatex(container);
    if (window.lucide) window.lucide.createIcons();
  },

  switchDeck(deckKey) {
    this.currentDeckKey = deckKey;
    this.currentSlideIndex = 0;
    this.render('main-content-area');
    if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  nextSlide() {
    const dayConfig = this.getDecksForDay();
    const deck = dayConfig.decks[this.currentDeckKey];
    if (this.currentSlideIndex < deck.slides.length - 1) {
      this.currentSlideIndex++;
      this.render('main-content-area');
      if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.render('main-content-area');
      if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  goToSlide(index) {
    this.currentSlideIndex = index;
    this.render('main-content-area');
    if (typeof window.scrollTo === 'function') window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
