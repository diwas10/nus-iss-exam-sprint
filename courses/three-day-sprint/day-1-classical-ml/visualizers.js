// Day 1 Comprehensive Visualizers Engine
// Full Interactive Studios for Day 1 Modules:
// Feature Scaler, k-NN Boundary, Naive Bayes Laplace, Confusion & Lift, SVM Margin & C/Gamma, PCA vs LDA, K-Means & DBSCAN, Regression Curves, A* Priority Queue, BBN d-Separation, and Math Workbench.

window.SprintDay1Visualizers = window.SprintDay1Visualizers || {};

// 1. Feature Scaling Simulator (Module 1)
window.SprintDay1Visualizers.initFeatureScalerStudio = function() {
  this.updateFeatureScaler();
};

window.SprintDay1Visualizers.updateFeatureScaler = function() {
  const method = document.getElementById('scaler-method-select')?.value || 'standard';
  const outEl = document.getElementById('scaler-output-table');
  const formulaEl = document.getElementById('scaler-formula-display');
  if (!outEl) return;

  // Raw dataset: e-commerce pageview session features
  const rawData = [
    { sample: 'Session 1', administrativeDuration: 340, pageValue: 0.0 },
    { sample: 'Session 2', administrativeDuration: 12, pageValue: 18.5 },
    { sample: 'Session 3', administrativeDuration: 1540, pageValue: 120.0 },
    { sample: 'Session 4', administrativeDuration: 85, pageValue: 5.2 }
  ];

  const adminVals = rawData.map(d => d.administrativeDuration);
  const pvVals = rawData.map(d => d.pageValue);

  const meanAdmin = adminVals.reduce((a, b) => a + b, 0) / adminVals.length;
  const meanPV = pvVals.reduce((a, b) => a + b, 0) / pvVals.length;

  const stdAdmin = Math.sqrt(adminVals.reduce((a, b) => a + Math.pow(b - meanAdmin, 2), 0) / adminVals.length) || 1;
  const stdPV = Math.sqrt(pvVals.reduce((a, b) => a + Math.pow(b - meanPV, 2), 0) / pvVals.length) || 1;

  const minAdmin = Math.min(...adminVals), maxAdmin = Math.max(...adminVals);
  const minPV = Math.min(...pvVals), maxPV = Math.max(...pvVals);

  let transformed = [];
  if (method === 'standard') {
    if (formulaEl) formulaEl.innerHTML = '$$z = \\frac{x - \\mu}{\\sigma} \\quad (\\mu=0, \; \\sigma=1)$$';
    transformed = rawData.map(d => ({
      sample: d.sample,
      admin: ((d.administrativeDuration - meanAdmin) / stdAdmin).toFixed(3),
      pv: ((d.pageValue - meanPV) / stdPV).toFixed(3)
    }));
  } else {
    if (formulaEl) formulaEl.innerHTML = '$$x_{\\text{scaled}} = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} \\quad (\\text{Range: } [0, 1])$$';
    transformed = rawData.map(d => ({
      sample: d.sample,
      admin: ((d.administrativeDuration - minAdmin) / (maxAdmin - minAdmin)).toFixed(3),
      pv: ((d.pageValue - minPV) / (maxPV - minPV)).toFixed(3)
    }));
  }

  let html = `
    <table class="styled-table" style="width:100%; font-size:0.85rem;">
      <thead><tr><th>Session</th><th>Raw Admin Duration (s)</th><th>Scaled Admin</th><th>Raw Page Value ($)</th><th>Scaled Page Value</th></tr></thead>
      <tbody>
  `;
  transformed.forEach((t, i) => {
    html += `
      <tr>
        <td><strong>${t.sample}</strong></td>
        <td>${rawData[i].administrativeDuration}s</td>
        <td style="color:#38bdf8; font-weight:600;">${t.admin}</td>
        <td>\$${rawData[i].pageValue}</td>
        <td style="color:#10b981; font-weight:600;">${t.pv}</td>
      </tr>
    `;
  });
  html += '</tbody></table>';
  outEl.innerHTML = html;
  if (window.renderLatex && formulaEl) window.renderLatex(formulaEl);
};

// 2. Naive Bayes Laplace Studio (Module 2)
window.SprintDay1Visualizers.initNaiveBayesLaplaceStudio = function() {
  this.updateNaiveBayes();
};

window.SprintDay1Visualizers.updateNaiveBayes = function() {
  const obsEl = document.getElementById('nb-obs-slider');
  const totEl = document.getElementById('nb-total-slider');
  const vEl = document.getElementById('nb-v-slider');
  if (!obsEl || !totEl || !vEl) return;

  const obs = parseInt(obsEl.value);
  const tot = parseInt(totEl.value);
  const v = parseInt(vEl.value);

  document.getElementById('nb-obs-val').textContent = obs;
  document.getElementById('nb-total-val').textContent = tot;
  document.getElementById('nb-v-val').textContent = v;

  const num = obs + 1;
  const den = tot + v;
  const prob = (num / den).toFixed(4);

  const rawProb = tot > 0 ? (obs / tot).toFixed(4) : "0.0000";

  const mathEl = document.getElementById('nb-output-math');
  if (mathEl) {
    mathEl.innerHTML = `
      <div style="font-size:0.95rem; line-height:1.7;">
        <div><strong>Raw Frequency Probability:</strong> $P_{\\text{raw}}(x \\mid C) = \\frac{${obs}}{${tot}} = ${rawProb}$ ${obs === 0 ? '<span style="color:#ef4444; font-weight:bold;">(ZERO MULTIPLICATION DISASTER!)</span>' : ''}</div>
        <div style="margin-top:6px;"><strong>Laplace-Smoothed Probability:</strong> $$P_{\\text{Laplace}}(x \\mid C) = \\frac{\\text{count}(x, C) + 1}{\\text{count}(C) + |V|} = \\frac{${obs} + 1}{${tot} + ${v}} = \\frac{${num}}{${den}} \\approx ${prob}$$</div>
      </div>
    `;
    if (window.renderLatex) window.renderLatex(mathEl);
  }
};

// 3. Confusion Matrix & Lift Studio (Module 3)
window.SprintDay1Visualizers.initConfusionLiftStudio = function() {
  this.updateConfusionLift();
};

window.SprintDay1Visualizers.updateConfusionLift = function() {
  const tpEl = document.getElementById('cm-tp-slider');
  const fpEl = document.getElementById('cm-fp-slider');
  const tnEl = document.getElementById('cm-tn-slider');
  const fnEl = document.getElementById('cm-fn-slider');
  if (!tpEl || !fpEl || !tnEl || !fnEl) return;

  const TP = parseInt(tpEl.value);
  const FP = parseInt(fpEl.value);
  const TN = parseInt(tnEl.value);
  const FN = parseInt(fnEl.value);

  document.getElementById('cm-tp-val').textContent = TP;
  document.getElementById('cm-fp-val').textContent = FP;
  document.getElementById('cm-tn-val').textContent = TN;
  document.getElementById('cm-fn-val').textContent = FN;

  const total = TP + FP + TN + FN;
  const accuracy = ((TP + TN) / total).toFixed(3);
  const precision = (TP + FP > 0) ? (TP / (TP + FP)).toFixed(3) : "0.000";
  const recall = (TP + FN > 0) ? (TP / (TP + FN)).toFixed(3) : "0.000";
  const f1 = (parseFloat(precision) + parseFloat(recall) > 0) ? 
    ((2 * precision * recall) / (parseFloat(precision) + parseFloat(recall))).toFixed(3) : "0.000";

  const pPrec = (precision * 100).toFixed(1);
  const pRec = (recall * 100).toFixed(1);

  const statsEl = document.getElementById('cm-metrics-output');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="grid-4-col" style="gap:10px;">
        <div class="p-2" style="background:var(--bg-secondary); border-radius:6px; text-align:center;">
          <div style="font-size:0.75rem; color:var(--text-muted);">Accuracy</div>
          <div style="font-size:1.3rem; font-weight:700; color:var(--text-primary);">${(accuracy * 100).toFixed(1)}%</div>
        </div>
        <div class="p-2" style="background:var(--bg-secondary); border-radius:6px; text-align:center; border-bottom:2px solid #38bdf8;">
          <div style="font-size:0.75rem; color:var(--text-muted);">Precision (Quality)</div>
          <div style="font-size:1.3rem; font-weight:700; color:#38bdf8;">${pPrec}%</div>
        </div>
        <div class="p-2" style="background:var(--bg-secondary); border-radius:6px; text-align:center; border-bottom:2px solid #10b981;">
          <div style="font-size:0.75rem; color:var(--text-muted);">Recall (Coverage)</div>
          <div style="font-size:1.3rem; font-weight:700; color:#10b981;">${pRec}%</div>
        </div>
        <div class="p-2" style="background:var(--bg-secondary); border-radius:6px; text-align:center; border-bottom:2px solid #f59e0b;">
          <div style="font-size:0.75rem; color:var(--text-muted);">F1 Score</div>
          <div style="font-size:1.3rem; font-weight:700; color:#f59e0b;">${f1}</div>
        </div>
      </div>
      <div style="margin-top:10px; font-size:0.85rem; color:var(--text-secondary);">
        <strong>Business Interpretation:</strong> If $15 coupons are limited, high <strong>Precision (${pPrec}%)</strong> prevents wasted spend. If capturing maximum buyers matters, prioritize <strong>Recall (${pRec}%)</strong>.
      </div>
    `;
  }
};

// 4. SVM Margin & Hyperplane Studio (Module 4)
window.SprintDay4Visualizers = window.SprintDay4Visualizers || {};
window.SprintDay4Visualizers.initSVMMarginPlayground = function() {
  this.updateSVM();
};

window.SprintDay4Visualizers.updateSVM = function() {
  const w1El = document.getElementById('svm-w1-slider');
  const w2El = document.getElementById('svm-w2-slider');
  const cEl = document.getElementById('svm-c-slider');
  if (!w1El || !w2El) return;

  const w1 = parseFloat(w1El.value);
  const w2 = parseFloat(w2El.value);
  const C = cEl ? parseFloat(cEl.value) : 1.0;

  document.getElementById('svm-w1-val').textContent = w1.toFixed(1);
  document.getElementById('svm-w2-val').textContent = w2.toFixed(1);
  if (document.getElementById('svm-c-val')) document.getElementById('svm-c-val').textContent = C.toFixed(1);

  const normW = Math.sqrt(w1 * w1 + w2 * w2);
  const marginWidth = normW > 0 ? (2 / normW).toFixed(3) : "Infinity";

  const out = document.getElementById('svm-math-output');
  if (out) {
    out.innerHTML = `
      $$\|\\mathbf{w}\| = \\sqrt{${w1.toFixed(1)}^2 + ${w2.toFixed(1)}^2} = \\sqrt{${(normW * normW).toFixed(2)}} = ${normW.toFixed(3)}$$
      $$\\text{Geometric Margin Width } \\gamma = \\frac{2}{\|\\mathbf{w}\|} = \\frac{2}{${normW.toFixed(3)}} = ${marginWidth}$$
      <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">
        <strong>Penalty C = ${C.toFixed(1)}:</strong> ${C >= 5.0 ? 'Hard margin emphasis (strict boundary, low bias, risk of overfitting to noise).' : 'Soft margin emphasis (forgiving corridor, allows slack violations $\\xi_i > 0$, higher bias, noise tolerant).'}
      </div>
    `;
    if (window.renderLatex) window.renderLatex(out);
  }
};

// 5. A* Search Step Trace (Module 8)
window.SprintDay1Visualizers.stepAStar = function() {
  const status = document.getElementById('astar-status-text');
  if (!status) return;

  const steps = [
    "Step 1: Start node A expanded (g=0, h=7, f=7). Pushed neighbors B (g=2, h=5, f=7) and C (g=4, h=4, f=8) into OPEN priority queue.",
    "Step 2: Popped node B from OPEN (min f=7). Added B to CLOSED set. Explored neighbor D (g=2+3=5, h=2, f=7).",
    "Step 3: Popped node D from OPEN (min f=7). Added D to CLOSED set. Explored Goal node G (g=5+2=7, h=0, f=7).",
    "Step 4: Popped Goal G from OPEN (min f=7). Optimal goal test verified upon POP! Closed nodes never reopened because h is consistent."
  ];
  this._stepIdx = ((this._stepIdx || 0) + 1) % steps.length;
  status.innerHTML = `<span style="color:#38bdf8; font-weight:600;">${steps[this._stepIdx]}</span>`;
};

window.SprintDay1Visualizers.resetAStar = function() {
  this._stepIdx = -1;
  const status = document.getElementById('astar-status-text');
  if (status) status.textContent = "Grid reset. Click 'Step Expansion' to trace OPEN priority queue and CLOSED set.";
};

console.log("Day 1 Comprehensive Visualizers loaded successfully.");
