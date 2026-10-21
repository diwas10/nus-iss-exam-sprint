// Research Hub & Capstone Use-Case Builder Engine

window.ResearchHub = {
  render: function(containerId, researchData) {
    const container = document.getElementById(containerId);
    if (!container || !researchData) return;

    let html = `
      <div class="lesson-card hero-card mb-4">
        <div class="card-icon"><i data-lucide="book-open"></i></div>
        <div class="card-body">
          <h3>Student Research & Exploration Lab</h3>
          <p class="lead-text">
            Go beyond textbook definitions. Here you explore real academic research papers cited in the lecture slides, investigate open challenges in intelligent sensing, and formulate your own intelligent sense-making project proposal.
          </p>
        </div>
      </div>

      <div class="research-section-title mt-4">
        <h4><i data-lucide="file-text"></i> Paper Deep-Dives from Day 1 Slides</h4>
        <p class="text-secondary">Explore the seminal papers referenced during lectures, their mathematical bottlenecks, and open research questions.</p>
      </div>

      <div class="research-grid mt-3">
    `;

    researchData.topics.forEach(t => {
      html += `
        <div class="research-card">
          <div class="research-meta">
            <span class="badge-tech">${t.slideRef}</span>
            <span class="text-muted"><i data-lucide="external-link"></i> ${t.source}</span>
          </div>
          <h4 class="mt-2">${t.title}</h4>
          <p class="text-secondary mt-1">${t.summary}</p>
          
          <div class="challenge-alert mt-2">
            <strong>The Core Signal Challenge:</strong> ${t.coreChallenge}
          </div>

          <div class="research-questions-box mt-3">
            <strong>Guiding Research Questions:</strong>
            <ul class="clean-list mt-1">
              ${t.researchQuestions.map(q => `<li><i data-lucide="arrow-right"></i> ${q}</li>`).join('')}
            </ul>
          </div>

          <div class="reading-box mt-2">
            <small><strong>Recommended Literature:</strong></small>
            <ul class="text-muted" style="font-size: 0.85rem; margin-top: 4px; padding-left: 18px;">
              ${t.recommendedReading.map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    });

    html += `
      </div>

      <!-- Slide 23 Interactive Use-Case Builder -->
      <div class="use-case-builder-card mt-5">
        <div class="builder-header">
          <div>
            <h3><i data-lucide="compass"></i> Module 1, Slide 23: Intelligent Sense-Making Project Builder</h3>
            <p class="text-secondary">Propose your own intelligent sensing system. Fill in the deployment, acquired signal, processing pipeline, and automated action.</p>
          </div>
          <div class="preset-buttons">
            <button class="btn btn-sm btn-outline" onclick="ResearchHub.loadPreset(0)">Sample 1: Firefighter Patch</button>
            <button class="btn btn-sm btn-outline" onclick="ResearchHub.loadPreset(1)">Sample 2: Rail Bridge</button>
          </div>
        </div>

        <div class="builder-form grid-2-col mt-4">
          <div>
            <div class="form-group">
              <label>Project Title:</label>
              <input type="text" id="uc-title" class="input-styled" placeholder="e.g. Autonomous Drone Pipeline Gas Leak Detector">
            </div>
            <div class="form-group mt-2">
              <label>Domain / Industry:</label>
              <input type="text" id="uc-domain" class="input-styled" placeholder="e.g. Energy Infrastructure, Healthcare, Autonomous Driving">
            </div>
            <div class="form-group mt-2">
              <label>(a) Sensor Deployment & Acquired Signal:</label>
              <textarea id="uc-sensor" class="textarea-styled" rows="3" placeholder="Describe sensor type, physical phenomenon measured, sampling rate..."></textarea>
            </div>
            <div class="form-group mt-2">
              <label>(b) Signal Processing & Feature Extraction:</label>
              <textarea id="uc-processing" class="textarea-styled" rows="3" placeholder="Describe filtering (arPLS), peak detection, DTW alignment..."></textarea>
            </div>
            <div class="form-group mt-2">
              <label>(c) Sense-Making & Actionable Insights:</label>
              <textarea id="uc-action" class="textarea-styled" rows="3" placeholder="Describe automated decision, alerts, or robotic actuation..."></textarea>
            </div>
            <button class="btn btn-primary mt-3" onclick="ResearchHub.generateReport()">
              <i data-lucide="check"></i> Compile Proposal
            </button>
          </div>

          <div class="proposal-preview-box">
            <div class="preview-header">
              <span>Proposal Preview & Markdown Export</span>
              <button class="btn btn-sm btn-outline" onclick="ResearchHub.copyProposal()"><i data-lucide="copy"></i> Copy Markdown</button>
            </div>
            <div id="proposal-output" class="preview-content">
              <em class="text-muted">Fill out the form or select a sample preset to generate your compiled proposal report.</em>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    if (window.renderMathInElement) {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ]
      });
    }

    if (window.lucide) window.lucide.createIcons();
  },

  loadPreset: function(index) {
    const p = window.DAY1_RESEARCH.useCaseTemplate.sampleProjects[index];
    if (!p) return;

    document.getElementById('uc-title').value = p.name;
    document.getElementById('uc-domain').value = p.domain;
    document.getElementById('uc-sensor').value = p.sensorDeployment + "\n" + p.acquiredSignal;
    document.getElementById('uc-processing').value = p.processingPipeline;
    document.getElementById('uc-action').value = p.actionableInsights;

    this.generateReport();
  },

  generateReport: function() {
    const title = document.getElementById('uc-title').value || "Intelligent Sensing System";
    const domain = document.getElementById('uc-domain').value || "Industrial Sensing";
    const sensor = document.getElementById('uc-sensor').value || "N/A";
    const processing = document.getElementById('uc-processing').value || "N/A";
    const action = document.getElementById('uc-action').value || "N/A";

    const preview = document.getElementById('proposal-output');
    const md = `
### ${title}
**Domain:** ${domain}

#### 1. Sensor Deployment & Acquired Signal
${sensor}

#### 2. Signal Processing & Feature Extraction Strategy
${processing}

#### 3. Sense-Making Findings & Actionable Insights
${action}
    `;

    preview.innerHTML = `
      <h4 class="text-primary">${title}</h4>
      <p><strong>Domain:</strong> ${domain}</p>
      <hr style="border-color: rgba(255,255,255,0.1); margin: 10px 0;">
      <p><strong>1. Sensor Deployment & Signal:</strong><br>${sensor.replace(/\n/g, '<br>')}</p>
      <p><strong>2. Signal Processing Strategy:</strong><br>${processing.replace(/\n/g, '<br>')}</p>
      <p><strong>3. Sense-Making & Action:</strong><br>${action.replace(/\n/g, '<br>')}</p>
    `;
    this.currentMd = md;
  },

  copyProposal: function() {
    if (!this.currentMd) {
      alert("Please compile a proposal first!");
      return;
    }
    navigator.clipboard.writeText(this.currentMd).then(() => {
      alert("Proposal copied to clipboard in Markdown format!");
    });
  }
};
