// Interactive Visualizers for Day 4: Decision Trees, SVM Kernels, PCA vs LDA & Case-Based Reasoning (CBR)

window.SprintDay4Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Decision Tree Entropy, Info Gain & Gain Ratio Studio
  // -------------------------------------------------------------------------
  initDecisionTreeStudio: function() {
    const selFeature = document.getElementById('dt-feature-select');
    const resultBox = document.getElementById('dt-result-container');
    const data = window.DAY4_GEOMETRY_DIM_DATA?.weatherDataset;
    if (!data || !resultBox) return;

    function computeLog2(p) {
      return p > 0 ? Math.log2(p) : 0;
    }

    function computeEntropy(subset) {
      if (subset.length === 0) return 0;
      let yes = 0;
      let no = 0;
      subset.forEach(item => {
        if (item.play === 'Yes') yes++;
        else no++;
      });
      const pYes = yes / subset.length;
      const pNo = no / subset.length;
      return -(pYes * computeLog2(pYes) + pNo * computeLog2(pNo));
    }

    function updateTreeCalculations() {
      const feat = selFeature ? selFeature.value : 'outlook';
      const totalEntropy = computeEntropy(data); // H(S) for 9 Yes, 5 No = 0.940

      // Partition dataset by chosen feature
      const groups = {};
      data.forEach(item => {
        const val = item[feat];
        if (!groups[val]) groups[val] = [];
        groups[val].push(item);
      });

      let splitEntropy = 0;
      let splitInfo = 0;
      let breakdownHtml = '';

      Object.keys(groups).forEach(val => {
        const subset = groups[val];
        const subsetH = computeEntropy(subset);
        const weight = subset.length / data.length;
        splitEntropy += weight * subsetH;

        // Split info for Gain Ratio: - sum( |Sv|/|S| * log2(|Sv|/|S|) )
        splitInfo -= weight * computeLog2(weight);

        const yesCount = subset.filter(x => x.play === 'Yes').length;
        const noCount = subset.filter(x => x.play === 'No').length;

        breakdownHtml += `
          <div style="background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 6px; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="color: var(--accent-cyan);">${val}</strong> (${subset.length} samples: ${yesCount} Yes, ${noCount} No)
            </div>
            <div style="font-family: monospace; font-size: 0.82rem; color: #38bdf8;">
              Entropy = ${subsetH.toFixed(3)}
            </div>
          </div>
        `;
      });

      const infoGain = totalEntropy - splitEntropy;
      const gainRatio = splitInfo > 0 ? (infoGain / splitInfo) : 0;

      resultBox.innerHTML = `
        <div class="grid-3-col mb-3">
          <div class="metric-card" style="padding: 10px; background: rgba(255,255,255,0.03); border-radius: 6px;">
            <small style="color: var(--text-muted);">Root Entropy H(S)</small>
            <div style="font-size: 1.2rem; font-weight: 700; color: #38bdf8;">${totalEntropy.toFixed(3)}</div>
          </div>
          <div class="metric-card" style="padding: 10px; background: rgba(52, 211, 153, 0.1); border-radius: 6px; border: 1px solid rgba(52, 211, 153, 0.3);">
            <small style="color: #34d399;">Information Gain (ID3)</small>
            <div style="font-size: 1.2rem; font-weight: 700; color: #34d399;">${infoGain.toFixed(3)}</div>
          </div>
          <div class="metric-card" style="padding: 10px; background: rgba(167, 139, 250, 0.1); border-radius: 6px; border: 1px solid rgba(167, 139, 250, 0.3);">
            <small style="color: #a78bfa;">Gain Ratio (C4.5)</small>
            <div style="font-size: 1.2rem; font-weight: 700; color: #a78bfa;">${gainRatio.toFixed(3)}</div>
          </div>
        </div>

        <strong style="font-size: 0.85rem; color: var(--text-secondary);">Branch Partition Breakdown:</strong>
        <div style="margin-top: 6px;">${breakdownHtml}</div>

        <div class="info-alert mt-3" style="font-size: 0.78rem;">
          <strong>Examiner's Rule:</strong> Outlook yields highest Information Gain ($IG = 0.247$), becoming the <strong>Root Node</strong> of the decision tree! Notice how Overcast has $H=0$ (pure leaf: 100% Yes)!
        </div>
      `;
    }

    if (selFeature) selFeature.onchange = updateTreeCalculations;
    updateTreeCalculations();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Support Vector Machine (SVM) Margin & Kernel Studio
  // -------------------------------------------------------------------------
  initSVMKernelStudio: function() {
    const canvas = document.getElementById('svm-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const selectData = document.getElementById('svm-data-select');
    const sliderC = document.getElementById('svm-slider-c');
    const sliderGamma = document.getElementById('svm-slider-gamma');
    const lblC = document.getElementById('svm-val-c');
    const lblGamma = document.getElementById('svm-val-gamma');

    let mode = selectData ? selectData.value : 'linear';
    let cVal = sliderC ? parseFloat(sliderC.value) : 1.0;
    let gammaVal = sliderGamma ? parseFloat(sliderGamma.value) : 1.0;

    function renderSVM() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      const pts = mode === 'linear' 
        ? window.DAY4_GEOMETRY_DIM_DATA?.svmLinearPoints 
        : window.DAY4_GEOMETRY_DIM_DATA?.svmNonLinearPoints;

      if (!pts) return;

      if (lblC) lblC.textContent = cVal.toFixed(1);
      if (lblGamma) lblGamma.textContent = gammaVal.toFixed(1);

      if (mode === 'linear') {
        // Draw Soft vs Hard Margin Hyperplane: w = [1, 1], b = -0.5
        const marginWidth = Math.max(15, 60 / cVal);

        // Margin Shading
        ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
        ctx.beginPath();
        ctx.moveTo(0, h - (-marginWidth));
        ctx.lineTo(w, 0 - (-marginWidth));
        ctx.lineTo(w, 0 - marginWidth);
        ctx.lineTo(0, h - marginWidth);
        ctx.fill();

        // Positive Margin w^T x + b = 1
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, h * 0.9 - marginWidth);
        ctx.lineTo(w, h * 0.1 - marginWidth);
        ctx.stroke();

        // Negative Margin w^T x + b = -1
        ctx.beginPath();
        ctx.moveTo(0, h * 0.9 + marginWidth);
        ctx.lineTo(w, h * 0.1 + marginWidth);
        ctx.stroke();
        ctx.setLineDash([]);

        // Maximum Margin Hyperplane w^T x + b = 0
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, h * 0.9);
        ctx.lineTo(w, h * 0.1);
        ctx.stroke();
      } else {
        // RBF Kernel Boundary (Circle around center)
        const radius = Math.min(w * 0.35, Math.max(w * 0.15, (w * 0.25) / Math.sqrt(gammaVal)));
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();

        // Margin rings
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, Math.max(10, radius - 20 / cVal), 0, 2 * Math.PI);
        ctx.arc(w / 2, h / 2, radius + 20 / cVal, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw Sample Points
      pts.forEach(p => {
        const px = p.x * w;
        const py = p.y * h;

        // Check if on/near margin (Support Vector)
        const isSupportVector = (mode === 'linear' && (p.x === 0.40 || p.x === 0.60)) ||
                                (mode === 'nonlinear' && (p.x === 0.48 || p.x === 0.28));

        if (isSupportVector) {
          ctx.beginPath();
          ctx.arc(px, py, 11, 0, 2 * Math.PI);
          ctx.strokeStyle = '#fbbf24';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, 2 * Math.PI);
        ctx.fillStyle = p.label === 1 ? '#ef4444' : '#38bdf8';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    }

    if (selectData) {
      selectData.onchange = function() {
        mode = this.value;
        renderSVM();
      };
    }

    if (sliderC) {
      sliderC.oninput = function() {
        cVal = parseFloat(this.value);
        renderSVM();
      };
    }

    if (sliderGamma) {
      sliderGamma.oninput = function() {
        gammaVal = parseFloat(this.value);
        renderSVM();
      };
    }

    renderSVM();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive PCA vs LDA Rotating Axis Projection Studio
  // -------------------------------------------------------------------------
  initPCavsLDAStudio: function() {
    const canvas = document.getElementById('pca-lda-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sliderAngle = document.getElementById('pca-lda-slider-angle');
    const lblAngle = document.getElementById('pca-lda-val-angle');
    const btnSetPCA = document.getElementById('pca-btn-set-pca');
    const btnSetLDA = document.getElementById('pca-btn-set-lda');
    const pts = window.DAY4_GEOMETRY_DIM_DATA?.pcaLdaPoints || [];

    let angleDeg = sliderAngle ? parseFloat(sliderAngle.value) : 45;

    function renderProjection() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      if (lblAngle) lblAngle.textContent = `${angleDeg}&deg;`;

      const rad = (angleDeg * Math.PI) / 180;
      const dx = Math.cos(rad);
      const dy = -Math.sin(rad); // Canvas y is inverted

      // Draw Projection Axis (Yellow Line through center)
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - dx * 200, cy - dy * 200);
      ctx.lineTo(cx + dx * 200, cy + dy * 200);
      ctx.stroke();

      // Project Points onto Axis
      pts.forEach(p => {
        const px = p.x * w;
        const py = p.y * h;

        // Vector from center to point
        const vx = px - cx;
        const vy = py - cy;
        // Dot product projection scalar
        const dot = vx * dx + vy * dy;
        const projX = cx + dot * dx;
        const projY = cy + dot * dy;

        // Projection dropped line (dashed)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(projX, projY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Projected dot on axis
        ctx.beginPath();
        ctx.arc(projX, projY, 4, 0, 2 * Math.PI);
        ctx.fillStyle = p.label === 'Class A' ? '#38bdf8' : '#ef4444';
        ctx.fill();

        // Original 2D point
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, 2 * Math.PI);
        ctx.fillStyle = p.label === 'Class A' ? '#38bdf8' : '#ef4444';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
    }

    if (sliderAngle) {
      sliderAngle.oninput = function() {
        angleDeg = parseFloat(this.value);
        renderProjection();
      };
    }

    if (btnSetPCA) {
      btnSetPCA.onclick = function() {
        angleDeg = 45; // Direction of maximum variance
        if (sliderAngle) sliderAngle.value = 45;
        renderProjection();
      };
    }

    if (btnSetLDA) {
      btnSetLDA.onclick = function() {
        angleDeg = 135; // Direction of maximum class separation
        if (sliderAngle) sliderAngle.value = 135;
        renderProjection();
      };
    }

    renderProjection();
  },

  // -------------------------------------------------------------------------
  // 4. Interactive Case-Based Reasoning (CBR 4R Cycle) Studio
  // -------------------------------------------------------------------------
  initCBR4RStudio: function() {
    const btnExecuteCBR = document.getElementById('cbr-btn-execute');
    const logContainer = document.getElementById('cbr-audit-log');
    const tableBody = document.getElementById('cbr-table-body');
    const caseBase = window.DAY4_GEOMETRY_DIM_DATA?.cbrCaseBase || [];

    function renderCaseTable() {
      if (!tableBody) return;
      tableBody.innerHTML = caseBase.map(c => `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
          <td style="padding: 6px 10px; font-weight: 700; color: var(--accent-cyan);">${c.id}</td>
          <td style="padding: 6px 10px;">$${c.income.toLocaleString()}</td>
          <td style="padding: 6px 10px;">${c.creditScore}</td>
          <td style="padding: 6px 10px;">${(c.debtRatio * 100).toFixed(0)}\\%</td>
          <td style="padding: 6px 10px;">$${c.loanAmount.toLocaleString()}</td>
          <td style="padding: 6px 10px; font-weight: 700; color: ${c.decision === 'Approved' ? '#34d399' : '#ef4444'};">${c.decision}</td>
          <td style="padding: 6px 10px;">${c.interestRate > 0 ? c.interestRate + '%' : '-'}</td>
        </tr>
      `).join('');
    }

    function run4RCycle() {
      if (!logContainer) return;

      const newCase = {
        income: 70000,
        creditScore: 710,
        debtRatio: 0.28,
        loanAmount: 240000
      };

      // 1. RETRIEVE: Compute weighted distance against precedent cases
      let bestCase = null;
      let minDistance = 999999;

      caseBase.forEach(c => {
        // Normalized Euclidean distance
        const dIncome = ((c.income - newCase.income) / 100000) ** 2;
        const dCredit = ((c.creditScore - newCase.creditScore) / 400) ** 2;
        const dDebt = ((c.debtRatio - newCase.debtRatio) / 1.0) ** 2;
        const dist = Math.sqrt(dIncome * 0.4 + dCredit * 0.4 + dDebt * 0.2);

        if (dist < minDistance) {
          minDistance = dist;
          bestCase = c;
        }
      });

      // 2. REUSE: Copy precedent solution and adapt
      const adaptedInterest = bestCase.interestRate + 0.2; // Adjusted for slightly lower credit score

      // 3. REVISE: Review policy rules
      const passedVerification = newCase.debtRatio < 0.40;

      // 4. RETAIN: Add to Case Base
      const newId = `C${caseBase.length + 1}`;
      const savedCase = {
        id: newId,
        income: newCase.income,
        creditScore: newCase.creditScore,
        debtRatio: newCase.debtRatio,
        loanAmount: newCase.loanAmount,
        decision: passedVerification ? 'Approved' : 'Rejected',
        interestRate: passedVerification ? parseFloat(adaptedInterest.toFixed(1)) : 0.0
      };

      logContainer.innerHTML = `
        <div style="font-family: monospace; font-size: 0.8rem; line-height: 1.5;">
          <div style="color: #38bdf8; font-weight: bold;">[STAGE 1: RETRIEVE]</div>
          • Query: Income=USD 70k, Credit=710, Debt=28%<br>
          • Nearest Precedent: <strong>Case ${bestCase.id}</strong> (Distance = ${minDistance.toFixed(4)}, Decision = ${bestCase.decision}, Rate = ${bestCase.interestRate}%)<br><br>

          <div style="color: #f59e0b; font-weight: bold;">[STAGE 2: REUSE]</div>
          • Adaptation Rule: Adjust precedent rate by +0.2% due to credit difference (720 &rarr; 710). Proposed Rate = <strong>${adaptedInterest.toFixed(1)}%</strong>.<br><br>

          <div style="color: #a78bfa; font-weight: bold;">[STAGE 3: REVISE]</div>
          • Compliance Check: Debt-to-income ${newCase.debtRatio * 100}% &le; 40% threshold. Outcome: <strong>VERIFIED</strong>.<br><br>

          <div style="color: #34d399; font-weight: bold;">[STAGE 4: RETAIN]</div>
          • Storing verified case <strong>${newId}</strong> into Case Base for future queries!
        </div>
      `;

      if (!caseBase.some(c => c.id === newId)) {
        caseBase.push(savedCase);
        renderCaseTable();
      }
    }

    if (btnExecuteCBR) btnExecuteCBR.onclick = run4RCycle;
    renderCaseTable();
  }
};
