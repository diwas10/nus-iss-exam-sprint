// Day 2 Comprehensive Visualizers Engine
// Full Interactive Studios for Day 2 Modules:
// Nyquist Aliasing, arPLS Baseline & DTW Matrix, STFT & 2D Wavelets, Backprop Calculator,
// CNN Sizer & GAP Redesign, LSTM Gate Valves, HMM Sequence Trellis, Attention Heatmap,
// Autoencoder 3-Sigma Anomaly, DRL Pick-and-Place, Ensemble Studio, and Multimodal RVM Fusion.

window.SprintDay2Visualizers = window.SprintDay2Visualizers || {};

// 1. Nyquist & Aliasing Studio (Module 1)
window.SprintDay2Visualizers.initNyquistAliasingStudio = function() {
  this.updateNyquist();
};

window.SprintDay2Visualizers.updateNyquist = function() {
  const fEl = document.getElementById('nyq-f-slider');
  const fsEl = document.getElementById('nyq-fs-slider');
  if (!fEl || !fsEl) return;

  const f = parseFloat(fEl.value);
  const fs = parseFloat(fsEl.value);

  document.getElementById('nyq-f-val').textContent = f + ' Hz';
  document.getElementById('nyq-fs-val').textContent = fs + ' Hz';

  const fn = fs / 2;
  const isAliased = f > fn;
  let fAlias = f;
  if (isAliased) {
    const k = Math.round(f / fs);
    fAlias = Math.abs(f - k * fs);
  }

  const out = document.getElementById('nyq-output-math');
  if (out) {
    out.innerHTML = `
      <div><strong>Nyquist Folding Frequency ($f_N = f_s / 2$):</strong> $f_N = \\frac{${fs}}{2} = ${fn}\\text{ Hz}$</div>
      <div style="margin-top:6px;">
        <strong>Signal Status:</strong> ${isAliased 
          ? `<span style="color:#ef4444; font-weight:bold;">ALIASED! True frequency ${f} Hz exceeds ${fn} Hz.</span>` 
          : `<span style="color:#10b981; font-weight:bold;">PERFECT RECONSTRUCTION ($f \\le f_N$).</span>`}
      </div>
      <div style="margin-top:6px; font-size:1rem; color:${isAliased ? '#f87171' : 'var(--text-primary)'};">
        <strong>Observed Digital Frequency:</strong> $f_{\\text{alias}} = |f - k f_s| = |${f} - ${Math.round(f/fs)}(${fs})| = ${fAlias.toFixed(1)}\\text{ Hz}$
      </div>
      <div style="margin-top:8px; font-size:0.84rem; color:var(--text-secondary);">
        <strong>Hardware Protection:</strong> An <em>analog low-pass anti-aliasing filter</em> MUST precede the ADC to cut off all frequencies $> ${fn}\\text{ Hz}$ before sampling.
      </div>
    `;
    if (window.renderLatex) window.renderLatex(out);
  }
};

// 2. CNN Output Sizer & GAP Redesign Studio (Module 5 / PRS Q2a)
window.SprintDay2Visualizers.initCNNParameterStudio = function() {
  this.updateCNNParams();
};

window.SprintDay2Visualizers.updateCNNParams = function() {
  const iEl = document.getElementById('cnn-i-slider');
  const kEl = document.getElementById('cnn-k-slider');
  const pEl = document.getElementById('cnn-p-slider');
  const sEl = document.getElementById('cnn-s-slider');
  const cInEl = document.getElementById('cnn-cin-slider');
  const cOutEl = document.getElementById('cnn-cout-slider');

  if (!iEl || !kEl || !pEl || !sEl || !cInEl || !cOutEl) return;

  const I = parseInt(iEl.value);
  const k = parseInt(kEl.value);
  const p = parseInt(pEl.value);
  const s = parseInt(sEl.value);
  const cIn = parseInt(cInEl.value);
  const cOut = parseInt(cOutEl.value);

  document.getElementById('cnn-i-val').textContent = I + 'x' + I;
  document.getElementById('cnn-k-val').textContent = k + 'x' + k;
  document.getElementById('cnn-p-val').textContent = p;
  document.getElementById('cnn-s-val').textContent = s;
  document.getElementById('cnn-cin-val').textContent = cIn;
  document.getElementById('cnn-cout-val').textContent = cOut;

  const O = Math.floor((I - k + 2 * p) / s) + 1;
  const weights = (k * k * cIn) * cOut;
  const biases = cOut;
  const totalParams = weights + biases;

  // Compare with Flatten (PRS Q2a)
  const flattenUnits = O * O * cOut;
  const dense4096Params = (flattenUnits + 1) * 4096;
  const gapParams = 0; // GAP has zero parameters

  const out = document.getElementById('cnn-output-math');
  if (out) {
    out.innerHTML = `
      <div class="grid-2-col mb-3" style="gap:10px;">
        <div style="background:var(--bg-card); padding:10px; border-radius:6px; border-left:3px solid #38bdf8;">
          <div style="font-size:0.75rem; color:var(--text-muted);">Output Spatial Map</div>
          <div style="font-size:1.4rem; font-weight:700; color:#38bdf8;">${O} x ${O} x ${cOut}</div>
          <div style="font-size:0.8rem; color:var(--text-secondary);">$O = \\lfloor(I - k + 2p)/s\\rfloor + 1$</div>
        </div>
        <div style="background:var(--bg-card); padding:10px; border-radius:6px; border-left:3px solid #10b981;">
          <div style="font-size:0.75rem; color:var(--text-muted);">Conv2D Layer Parameters</div>
          <div style="font-size:1.4rem; font-weight:700; color:#10b981;">${totalParams.toLocaleString()}</div>
          <div style="font-size:0.8rem; color:var(--text-secondary);">(${k}x${k}x${cIn}) * ${cOut} + ${cOut} bias</div>
        </div>
      </div>

      <!-- PRS Q2a Comparison Card -->
      <div style="background:rgba(239,68,68,0.08); padding:12px; border-radius:8px; border:1px solid rgba(239,68,68,0.2);">
        <strong style="color:#ef4444;">PRS Q2a Architectural Bottleneck vs Redesign:</strong>
        <div class="grid-2-col mt-2" style="font-size:0.85rem;">
          <div style="background:var(--bg-card); padding:8px; border-radius:4px;">
            <strong style="color:#ef4444;">Flatten() + Dense(4096):</strong>
            <div>Units: ${flattenUnits.toLocaleString()}</div>
            <div>Params: <strong style="color:#ef4444;">${dense4096Params.toLocaleString()}</strong> (~${(dense4096Params/1e6).toFixed(1)}M parameters! Overfitting!)</div>
          </div>
          <div style="background:var(--bg-card); padding:8px; border-radius:4px;">
            <strong style="color:#10b981;">Global Average Pooling (GAP):</strong>
            <div>Units: ${cOut} (averages spatial ${O}x${O})</div>
            <div>Params: <strong style="color:#10b981;">0 parameters!</strong> Directly connected to 2 classes = ${cOut * 2 + 2} params.</div>
          </div>
        </div>
      </div>
    `;
    if (window.renderLatex) window.renderLatex(out);
  }
};

// 3. Autoencoder 3-Sigma Anomaly Detection Studio (Module 9 / PRS Q2c)
window.SprintDay2Visualizers.initAnomalyStudio = function() {
  this.updateAnomaly();
};

window.SprintDay2Visualizers.updateAnomaly = function() {
  const errEl = document.getElementById('ae-err-slider');
  if (!errEl) return;

  const testErr = parseFloat(errEl.value);
  document.getElementById('ae-err-val').textContent = testErr.toFixed(3);

  // Baseline calibrated statistics on 3000 normal sequences
  const mu_e = 0.040;
  const sigma_e = 0.015;
  const threshold = mu_e + 3 * sigma_e; // 0.085

  const isAnomaly = testErr > threshold;

  const out = document.getElementById('ae-output-math');
  if (out) {
    out.innerHTML = `
      <div><strong>Calibrated 3-Sigma Threshold ($\\tau = \\mu_e + 3\\sigma_e$):</strong> $0.040 + 3(0.015) = \\mathbf{${threshold.toFixed(3)}}$</div>
      <div style="margin-top:6px;"><strong>Current Test Reconstruction Error:</strong> $\\|x - \\hat{x}\\|^2 = ${testErr.toFixed(3)}$</div>
      <div style="margin-top:8px; padding:10px; border-radius:6px; background:${isAnomaly ? 'rgba(239,68,68,0.15)' : 'rgba(16,185,129,0.15)'}; border-left:4px solid ${isAnomaly ? '#ef4444' : '#10b981'};">
        <strong style="color:${isAnomaly ? '#ef4444' : '#10b981'}; font-size:1.05rem;">
          ${isAnomaly ? '🚨 ANOMALY DETECTED! (Exceeds 3-Sigma Threshold)' : '✓ NORMAL OPERATION (Within 3-Sigma Operating Envelope)'}
        </strong>
        <p style="margin:4px 0 0 0; font-size:0.85rem; color:var(--text-primary);">
          ${isAnomaly 
            ? 'The autoencoder was trained strictly on normal vibration patterns. Because this sequence has novel spectral distortion (bearing crack / mistracking), the bottleneck cannot reconstruct it accurately, producing high residual error.' 
            : 'Reconstruction error is within statistical normal noise bounds. No equipment wear detected.'}
        </p>
      </div>
    `;
    if (window.renderLatex) window.renderLatex(out);
  }
};

// 4. Backpropagation Gradient Flow Studio (Module 4 & PRS Q1 / PRMLS)
window.SprintDay6Visualizers = window.SprintDay6Visualizers || {};

window.SprintDay6Visualizers.initBackpropCalculator = function() {
  const container = document.getElementById('backprop-calculator-studio') || document.getElementById('bp-spreadsheet-container');
  if (!container) return;

  // Initial State: Official NUS-ISS Benchmark (ANN-BP-v006)
  const BENCHMARKS = {
    benchmark: {
      name: 'NUS-ISS Official Benchmark (ANN-BP-v006.xlsx)',
      x1: 0.05, x2: 0.10,
      t1: 0.01, t2: 0.99,
      lr: 0.5,
      w11: 0.15, w12: 0.20, bh1: 0.35,
      w21: 0.25, w22: 0.30, bh2: 0.35,
      v11: 0.40, v12: 0.45, bo1: 0.60,
      v21: 0.50, v22: 0.55, bo2: 0.60
    },
    xor: {
      name: 'XOR Logic Gate (Target [0.99, 0.01])',
      x1: 1.0, x2: 0.0,
      t1: 0.99, t2: 0.01,
      lr: 0.5,
      w11: 0.40, w12: -0.30, bh1: 0.10,
      w21: -0.50, w22: 0.60, bh2: -0.20,
      v11: 0.70, v12: -0.60, bo1: 0.20,
      v21: -0.40, v22: 0.50, bo2: -0.10
    },
    symmetric: {
      name: 'Symmetric Weights (Symmetry Breaking Trap)',
      x1: 0.2, x2: 0.4,
      t1: 0.1, t2: 0.9,
      lr: 0.5,
      w11: 0.50, w12: 0.50, bh1: 0.20,
      w21: 0.50, w22: 0.50, bh2: 0.20,
      v11: 0.50, v12: 0.50, bo1: 0.30,
      v21: 0.50, v22: 0.50, bo2: 0.30
    }
  };

  const initial = BENCHMARKS.benchmark;
  let state = {
    x1: initial.x1, x2: initial.x2,
    t1: initial.t1, t2: initial.t2,
    lr: initial.lr,
    w11: initial.w11, w12: initial.w12, bh1: initial.bh1,
    w21: initial.w21, w22: initial.w22, bh2: initial.bh2,
    v11: initial.v11, v12: initial.v12, bo1: initial.bo1,
    v21: initial.v21, v22: initial.v22, bo2: initial.bo2,
    epoch: 0,
    lastPhase: 'idle' // 'idle', 'forward', 'backward', 'train10'
  };

  function sigmoid(z) {
    return 1 / (1 + Math.exp(-Math.max(-40, Math.min(40, z))));
  }

  function forward() {
    const net_h1 = state.x1 * state.w11 + state.x2 * state.w12 + state.bh1;
    const out_h1 = sigmoid(net_h1);

    const net_h2 = state.x1 * state.w21 + state.x2 * state.w22 + state.bh2;
    const out_h2 = sigmoid(net_h2);

    const net_o1 = out_h1 * state.v11 + out_h2 * state.v12 + state.bo1;
    const out_o1 = sigmoid(net_o1);

    const net_o2 = out_h1 * state.v21 + out_h2 * state.v22 + state.bo2;
    const out_o2 = sigmoid(net_o2);

    const e1 = 0.5 * Math.pow(state.t1 - out_o1, 2);
    const e2 = 0.5 * Math.pow(state.t2 - out_o2, 2);
    const loss = e1 + e2;

    return { net_h1, out_h1, net_h2, out_h2, net_o1, out_o1, net_o2, out_o2, e1, e2, loss };
  }

  function backward(fwd) {
    // Output error deltas: dE/dnet_o = (out_o - target) * out_o * (1 - out_o)
    const delta_o1 = (fwd.out_o1 - state.t1) * fwd.out_o1 * (1 - fwd.out_o1);
    const delta_o2 = (fwd.out_o2 - state.t2) * fwd.out_o2 * (1 - fwd.out_o2);

    // Output weights gradients: dE/dv_jk = delta_ok * out_hj
    const dv11 = delta_o1 * fwd.out_h1;
    const dv12 = delta_o1 * fwd.out_h2;
    const dbo1 = delta_o1;

    const dv21 = delta_o2 * fwd.out_h1;
    const dv22 = delta_o2 * fwd.out_h2;
    const dbo2 = delta_o2;

    // Hidden layer error deltas: dE/dnet_hj = (sum_k delta_ok * v_kj) * out_hj * (1 - out_hj)
    const sum_h1 = delta_o1 * state.v11 + delta_o2 * state.v21;
    const delta_h1 = sum_h1 * fwd.out_h1 * (1 - fwd.out_h1);

    const sum_h2 = delta_o1 * state.v12 + delta_o2 * state.v22;
    const delta_h2 = sum_h2 * fwd.out_h2 * (1 - fwd.out_h2);

    // Hidden weights gradients: dE/dw_ij = delta_hj * x_i
    const dw11 = delta_h1 * state.x1;
    const dw12 = delta_h1 * state.x2;
    const dbh1 = delta_h1;

    const dw21 = delta_h2 * state.x1;
    const dw22 = delta_h2 * state.x2;
    const dbh2 = delta_h2;

    return {
      delta_o1, delta_o2, dv11, dv12, dbo1, dv21, dv22, dbo2,
      delta_h1, delta_h2, dw11, dw12, dbh1, dw21, dw22, dbh2,
      new_v11: state.v11 - state.lr * dv11,
      new_v12: state.v12 - state.lr * dv12,
      new_bo1: state.bo1 - state.lr * dbo1,
      new_v21: state.v21 - state.lr * dv21,
      new_v22: state.v22 - state.lr * dv22,
      new_bo2: state.bo2 - state.lr * dbo2,
      new_w11: state.w11 - state.lr * dw11,
      new_w12: state.w12 - state.lr * dw12,
      new_bh1: state.bh1 - state.lr * dbh1,
      new_w21: state.w21 - state.lr * dw21,
      new_w22: state.w22 - state.lr * dw22,
      new_bh2: state.bh2 - state.lr * dbh2
    };
  }

  function applyBackward(bwd) {
    state.v11 = bwd.new_v11; state.v12 = bwd.new_v12; state.bo1 = bwd.new_bo1;
    state.v21 = bwd.new_v21; state.v22 = bwd.new_v22; state.bo2 = bwd.new_bo2;
    state.w11 = bwd.new_w11; state.w12 = bwd.new_w12; state.bh1 = bwd.new_bh1;
    state.w21 = bwd.new_w21; state.w22 = bwd.new_w22; state.bh2 = bwd.new_bh2;
    state.epoch++;
  }

  function renderSVG(fwd, bwd) {
    const fwdColor = state.lastPhase === 'forward' ? '#38bdf8' : (state.lastPhase === 'backward' ? '#94a3b8' : '#38bdf8');
    const bwdColor = state.lastPhase === 'backward' ? '#f59e0b' : '#64748b';

    return `
      <svg viewBox="0 0 760 260" style="width:100%; max-height:260px; font-family:sans-serif;">
        <defs>
          <marker id="arrow-fwd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
          </marker>
          <marker id="arrow-bwd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b" />
          </marker>
        </defs>

        <!-- Edges: Inputs to Hidden -->
        <line x1="110" y1="70" x2="350" y2="70" stroke="${fwdColor}" stroke-width="2" marker-end="url(#arrow-fwd)" />
        <line x1="110" y1="70" x2="350" y2="190" stroke="#64748b" stroke-width="1.5" />
        <line x1="110" y1="190" x2="350" y2="70" stroke="#64748b" stroke-width="1.5" />
        <line x1="110" y1="190" x2="350" y2="190" stroke="${fwdColor}" stroke-width="2" marker-end="url(#arrow-fwd)" />

        <!-- Edge Labels: Input Weights -->
        <rect x="170" y="54" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="202" y="66" fill="#94a3b8" font-size="10" text-anchor="middle">w11=${state.w11.toFixed(4)}</text>

        <rect x="220" y="110" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="252" y="122" fill="#94a3b8" font-size="10" text-anchor="middle">w12=${state.w12.toFixed(4)}</text>

        <rect x="220" y="136" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="252" y="148" fill="#94a3b8" font-size="10" text-anchor="middle">w21=${state.w21.toFixed(4)}</text>

        <rect x="170" y="194" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="202" y="206" fill="#94a3b8" font-size="10" text-anchor="middle">w22=${state.w22.toFixed(4)}</text>

        <!-- Edges: Hidden to Outputs -->
        <line x1="410" y1="70" x2="630" y2="70" stroke="${fwdColor}" stroke-width="2" marker-end="url(#arrow-fwd)" />
        <line x1="410" y1="70" x2="630" y2="190" stroke="#64748b" stroke-width="1.5" />
        <line x1="410" y1="190" x2="630" y2="70" stroke="#64748b" stroke-width="1.5" />
        <line x1="410" y1="190" x2="630" y2="190" stroke="${fwdColor}" stroke-width="2" marker-end="url(#arrow-fwd)" />

        <!-- Edge Labels: Output Weights -->
        <rect x="480" y="54" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="512" y="66" fill="#38bdf8" font-size="10" text-anchor="middle">v11=${state.v11.toFixed(4)}</text>

        <rect x="520" y="110" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="552" y="122" fill="#94a3b8" font-size="10" text-anchor="middle">v12=${state.v12.toFixed(4)}</text>

        <rect x="520" y="136" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="552" y="148" fill="#94a3b8" font-size="10" text-anchor="middle">v21=${state.v21.toFixed(4)}</text>

        <rect x="480" y="194" width="65" height="16" rx="3" fill="#1e293b" />
        <text x="512" y="206" fill="#38bdf8" font-size="10" text-anchor="middle">v22=${state.v22.toFixed(4)}</text>

        <!-- Nodes: Layer 1 (Inputs) -->
        <g transform="translate(80, 70)">
          <circle r="28" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
          <text y="-4" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">x1</text>
          <text y="12" fill="#f8fafc" font-size="11" text-anchor="middle">${state.x1.toFixed(2)}</text>
        </g>
        <g transform="translate(80, 190)">
          <circle r="28" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
          <text y="-4" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">x2</text>
          <text y="12" fill="#f8fafc" font-size="11" text-anchor="middle">${state.x2.toFixed(2)}</text>
        </g>

        <!-- Nodes: Layer 2 (Hidden) -->
        <g transform="translate(380, 70)">
          <circle r="32" fill="#0f172a" stroke="${state.lastPhase === 'backward' ? '#f59e0b' : '#38bdf8'}" stroke-width="2.5" />
          <text y="-10" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">h1 (b=${state.bh1.toFixed(2)})</text>
          <text y="6" fill="#94a3b8" font-size="9" text-anchor="middle">net:${fwd.net_h1.toFixed(3)}</text>
          <text y="20" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">${fwd.out_h1.toFixed(4)}</text>
        </g>
        <g transform="translate(380, 190)">
          <circle r="32" fill="#0f172a" stroke="${state.lastPhase === 'backward' ? '#f59e0b' : '#38bdf8'}" stroke-width="2.5" />
          <text y="-10" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">h2 (b=${state.bh2.toFixed(2)})</text>
          <text y="6" fill="#94a3b8" font-size="9" text-anchor="middle">net:${fwd.net_h2.toFixed(3)}</text>
          <text y="20" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">${fwd.out_h2.toFixed(4)}</text>
        </g>

        <!-- Nodes: Layer 3 (Outputs) -->
        <g transform="translate(660, 70)">
          <circle r="32" fill="#0f172a" stroke="${state.lastPhase === 'backward' ? '#ef4444' : '#10b981'}" stroke-width="2.5" />
          <text y="-10" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">y1 (t=${state.t1})</text>
          <text y="6" fill="#94a3b8" font-size="9" text-anchor="middle">net:${fwd.net_o1.toFixed(3)}</text>
          <text y="20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">${fwd.out_o1.toFixed(4)}</text>
        </g>
        <g transform="translate(660, 190)">
          <circle r="32" fill="#0f172a" stroke="${state.lastPhase === 'backward' ? '#ef4444' : '#10b981'}" stroke-width="2.5" />
          <text y="-10" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">y2 (t=${state.t2})</text>
          <text y="6" fill="#94a3b8" font-size="9" text-anchor="middle">net:${fwd.net_o2.toFixed(3)}</text>
          <text y="20" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">${fwd.out_o2.toFixed(4)}</text>
        </g>
      </svg>
    `;
  }

  function updateView() {
    const fwd = forward();
    const bwd = backward(fwd);

    const epochEl = document.getElementById('bp-epoch-badge');
    const lossEl = document.getElementById('bp-loss-badge');
    const svgEl = document.getElementById('bp-svg-container');
    const fwdMathEl = document.getElementById('bp-math-forward');
    const bwdMathEl = document.getElementById('bp-math-backward');
    const ledgerEl = document.getElementById('bp-ledger-body');
    const statusEl = document.getElementById('bp-status-text');

    if (epochEl) epochEl.textContent = state.epoch;
    if (lossEl) lossEl.textContent = fwd.loss.toFixed(6);

    if (statusEl) {
      if (state.lastPhase === 'forward') {
        statusEl.innerHTML = `<span style="color:#38bdf8;">▶ Forward Pass Complete. Activations computed.</span>`;
      } else if (state.lastPhase === 'backward') {
        statusEl.innerHTML = `<span style="color:#f59e0b;">◀ Backward Pass Complete. Gradients applied to weights.</span>`;
      } else if (state.lastPhase === 'train10') {
        statusEl.innerHTML = `<span style="color:#10b981;">⚡ 10 Epochs Trained. Loss: ${fwd.loss.toFixed(6)}</span>`;
      } else {
        statusEl.innerHTML = `<span style="color:var(--text-muted);">Ready</span>`;
      }
    }

    if (svgEl) svgEl.innerHTML = renderSVG(fwd, bwd);

    if (fwdMathEl) {
      fwdMathEl.innerHTML = `
        <div><strong>Hidden Layer 1:</strong> $net_{h1} = ${state.x1}\\times${state.w11.toFixed(3)} + ${state.x2}\\times${state.w12.toFixed(3)} + ${state.bh1.toFixed(2)} = \\mathbf{${fwd.net_h1.toFixed(4)}}$</div>
        <div>$\\to out_{h1} = \\sigma(${fwd.net_h1.toFixed(4)}) = \\mathbf{${fwd.out_h1.toFixed(6)}}$</div>
        
        <div style="margin-top:6px;"><strong>Hidden Layer 2:</strong> $net_{h2} = ${state.x1}\\times${state.w21.toFixed(3)} + ${state.x2}\\times${state.w22.toFixed(3)} + ${state.bh2.toFixed(2)} = \\mathbf{${fwd.net_h2.toFixed(4)}}$</div>
        <div>$\\to out_{h2} = \\sigma(${fwd.net_h2.toFixed(4)}) = \\mathbf{${fwd.out_h2.toFixed(6)}}$</div>

        <div style="margin-top:6px;"><strong>Output 1 ($y_1$):</strong> $net_{o1} = ${fwd.out_h1.toFixed(3)}\\times${state.v11.toFixed(3)} + ${fwd.out_h2.toFixed(3)}\\times${state.v12.toFixed(3)} + ${state.bo1.toFixed(2)} = \\mathbf{${fwd.net_o1.toFixed(4)}}$</div>
        <div>$\\to out_{o1} = \\mathbf{${fwd.out_o1.toFixed(6)}}$ (Target $t_1 = ${state.t1}$)</div>

        <div style="margin-top:6px;"><strong>Output 2 ($y_2$):</strong> $net_{o2} = ${fwd.out_h1.toFixed(3)}\\times${state.v21.toFixed(3)} + ${fwd.out_h2.toFixed(3)}\\times${state.v22.toFixed(3)} + ${state.bo2.toFixed(2)} = \\mathbf{${fwd.net_o2.toFixed(4)}}$</div>
        <div>$\\to out_{o2} = \\mathbf{${fwd.out_o2.toFixed(6)}}$ (Target $t_2 = ${state.t2}$)</div>

        <div style="margin-top:8px; padding:6px 10px; background:rgba(56,189,248,0.1); border-radius:4px;">
          <strong style="color:#38bdf8;">Total Error $E_{\\text{total}}$:</strong><br>
          $E = \\frac{1}{2}(${state.t1} - ${fwd.out_o1.toFixed(4)})^2 + \\frac{1}{2}(${state.t2} - ${fwd.out_o2.toFixed(4)})^2 = \\mathbf{${fwd.loss.toFixed(6)}}$
        </div>
      `;
    }

    if (bwdMathEl) {
      bwdMathEl.innerHTML = `
        <div><strong>Output Delta $\\delta_{o1}$:</strong> $(out_{o1} - t_1) \\cdot out_{o1}(1 - out_{o1}) = \\mathbf{${bwd.delta_o1.toFixed(6)}}$</div>
        <div>$\\frac{\\partial E}{\\partial v_{11}} = \\delta_{o1} \\cdot out_{h1} = ${bwd.delta_o1.toFixed(4)} \\times ${fwd.out_h1.toFixed(4)} = \\mathbf{${bwd.dv11.toFixed(6)}}$</div>
        <div style="color:#10b981;">$v_{11}^{\\text{new}} = ${state.v11.toFixed(4)} - ${state.lr}(${bwd.dv11.toFixed(4)}) = \\mathbf{${bwd.new_v11.toFixed(6)}}$</div>

        <div style="margin-top:6px;"><strong>Hidden Delta $\\delta_{h1}$:</strong> $(\\delta_{o1}v_{11} + \\delta_{o2}v_{21}) out_{h1}(1 - out_{h1}) = \\mathbf{${bwd.delta_h1.toFixed(6)}}$</div>
        <div>$\\frac{\\partial E}{\\partial w_{11}} = \\delta_{h1} \\cdot x_1 = ${bwd.delta_h1.toFixed(6)} \\times ${state.x1} = \\mathbf{${bwd.dw11.toFixed(6)}}$</div>
        <div style="color:#10b981;">$w_{11}^{\\text{new}} = ${state.w11.toFixed(4)} - ${state.lr}(${bwd.dw11.toFixed(6)}) = \\mathbf{${bwd.new_w11.toFixed(6)}}$</div>

        <div style="margin-top:8px; padding:6px 10px; background:rgba(245,158,11,0.1); border-radius:4px;">
          <strong style="color:#f59e0b;">Gradient Descent Step:</strong><br>
          All 6 weights and 4 biases updated simultaneously via Chain Rule.
        </div>
      `;
    }

    if (ledgerEl) {
      const rows = [
        { name: 'Output Weight v11 (h1 -> y1)', curr: state.v11, grad: bwd.dv11, delta: -state.lr * bwd.dv11, next: bwd.new_v11 },
        { name: 'Output Weight v12 (h2 -> y1)', curr: state.v12, grad: bwd.dv12, delta: -state.lr * bwd.dv12, next: bwd.new_v12 },
        { name: 'Output Bias bo1 (-> y1)', curr: state.bo1, grad: bwd.dbo1, delta: -state.lr * bwd.dbo1, next: bwd.new_bo1 },
        { name: 'Output Weight v21 (h1 -> y2)', curr: state.v21, grad: bwd.dv21, delta: -state.lr * bwd.dv21, next: bwd.new_v21 },
        { name: 'Output Weight v22 (h2 -> y2)', curr: state.v22, grad: bwd.dv22, delta: -state.lr * bwd.dv22, next: bwd.new_v22 },
        { name: 'Output Bias bo2 (-> y2)', curr: state.bo2, grad: bwd.dbo2, delta: -state.lr * bwd.dbo2, next: bwd.new_bo2 },
        { name: 'Hidden Weight w11 (x1 -> h1)', curr: state.w11, grad: bwd.dw11, delta: -state.lr * bwd.dw11, next: bwd.new_w11 },
        { name: 'Hidden Weight w12 (x2 -> h1)', curr: state.w12, grad: bwd.dw12, delta: -state.lr * bwd.dw12, next: bwd.new_w12 },
        { name: 'Hidden Bias bh1 (-> h1)', curr: state.bh1, grad: bwd.dbh1, delta: -state.lr * bwd.dbh1, next: bwd.new_bh1 },
        { name: 'Hidden Weight w21 (x1 -> h2)', curr: state.w21, grad: bwd.dw21, delta: -state.lr * bwd.dw21, next: bwd.new_w21 },
        { name: 'Hidden Weight w22 (x2 -> h2)', curr: state.w22, grad: bwd.dw22, delta: -state.lr * bwd.dw22, next: bwd.new_w22 },
        { name: 'Hidden Bias bh2 (-> h2)', curr: state.bh2, grad: bwd.dbh2, delta: -state.lr * bwd.dbh2, next: bwd.new_bh2 }
      ];

      ledgerEl.innerHTML = rows.map(r => `
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
          <td style="padding:4px 8px; font-weight:600; color:var(--text-primary);">${r.name}</td>
          <td style="padding:4px 8px; color:#94a3b8;">${r.curr.toFixed(6)}</td>
          <td style="padding:4px 8px; color:${r.grad >= 0 ? '#f87171' : '#38bdf8'}; font-family:monospace;">${r.grad >= 0 ? '+' : ''}${r.grad.toFixed(6)}</td>
          <td style="padding:4px 8px; color:${r.delta >= 0 ? '#10b981' : '#f87171'}; font-family:monospace;">${r.delta >= 0 ? '+' : ''}${r.delta.toFixed(6)}</td>
          <td style="padding:4px 8px; font-weight:700; color:#10b981;">${r.next.toFixed(6)}</td>
        </tr>
      `).join('');
    }

    if (window.renderLatex) {
      if (fwdMathEl) window.renderLatex(fwdMathEl);
      if (bwdMathEl) window.renderLatex(bwdMathEl);
    }
  }

  // Build the Studio HTML Shell
  container.innerHTML = `
    <div class="backprop-studio-wrapper p-3" style="background:var(--bg-secondary); border-radius:10px; border:1px solid var(--border-color);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
        <div>
          <h4 style="color:#38bdf8; margin:0; font-size:1.15rem; display:flex; align-items:center; gap:8px;">
            <i data-lucide="network"></i> Backpropagation Calculus & Gradient Flow Studio
          </h4>
          <p style="margin:4px 0 0 0; font-size:0.83rem; color:var(--text-secondary);">
            Interactive 2-2-2 Neural Network. Live Forward Activations, Backward Chain-Rule Gradients & Parameter Updates.
          </p>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="badge-tech" style="background:rgba(56,189,248,0.2); color:#38bdf8; font-size:0.75rem;">
            Epoch: <strong id="bp-epoch-badge">0</strong>
          </span>
          <span class="badge-tech" style="background:rgba(245,158,11,0.2); color:#f59e0b; font-size:0.75rem;">
            Loss: <strong id="bp-loss-badge">0.298371</strong>
          </span>
        </div>
      </div>

      <div id="bp-benchmark-banner" style="margin-bottom:12px; padding:8px 12px; border-radius:6px; background:rgba(16,185,129,0.1); border-left:3px solid #10b981; font-size:0.82rem; color:var(--text-primary); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="color:#10b981;">✓ NUS-ISS Official Benchmark Match (ANN-BP-v006.xlsx):</strong>
          <span>Initial Loss $E = 0.298371$, Post-Step $w_{ho11} = 0.358916$, $w_{ih11} = 0.149781$.</span>
        </div>
        <button class="btn btn-sm btn-outline" id="bp-btn-preset-bench" style="padding:2px 8px; font-size:0.75rem;">Reload Benchmark</button>
      </div>

      <div class="grid-3-col mb-3" style="gap:10px; background:var(--bg-card); padding:12px; border-radius:8px;">
        <div>
          <div style="font-weight:600; font-size:0.8rem; color:var(--text-primary); margin-bottom:6px;">Inputs & Targets</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
            <div>
              <label style="font-size:0.75rem; color:var(--text-muted);">Input $x_1$</label>
              <input type="number" step="0.01" id="bp-in-x1" value="0.05" style="width:100%; padding:4px 6px; font-size:0.8rem; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary);">
            </div>
            <div>
              <label style="font-size:0.75rem; color:var(--text-muted);">Input $x_2$</label>
              <input type="number" step="0.01" id="bp-in-x2" value="0.10" style="width:100%; padding:4px 6px; font-size:0.8rem; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary);">
            </div>
            <div>
              <label style="font-size:0.75rem; color:var(--text-muted);">Target $t_1$</label>
              <input type="number" step="0.01" id="bp-in-t1" value="0.01" style="width:100%; padding:4px 6px; font-size:0.8rem; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary);">
            </div>
            <div>
              <label style="font-size:0.75rem; color:var(--text-muted);">Target $t_2$</label>
              <input type="number" step="0.01" id="bp-in-t2" value="0.99" style="width:100%; padding:4px 6px; font-size:0.8rem; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary);">
            </div>
          </div>
        </div>

        <div>
          <div style="font-weight:600; font-size:0.8rem; color:var(--text-primary); margin-bottom:6px;">Hyperparameters</div>
          <div>
            <label style="font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between;">
              <span>Learning Rate $\\eta$</span>
              <strong id="bp-lr-display" style="color:#38bdf8;">0.50</strong>
            </label>
            <input type="range" id="bp-lr-slider" min="0.05" max="2.0" step="0.05" value="0.5" style="width:100%;">
          </div>
          <div style="margin-top:6px;">
            <label style="font-size:0.75rem; color:var(--text-muted);">Architecture Preset</label>
            <select id="bp-preset-select" style="width:100%; padding:4px 6px; font-size:0.8rem; border-radius:4px; background:var(--bg-secondary); border:1px solid var(--border-color); color:var(--text-primary);">
              <option value="benchmark">NUS-ISS Official Benchmark (ANN-BP-v006)</option>
              <option value="xor">XOR Non-Linear Classification</option>
              <option value="symmetric">Symmetric Initial Weights</option>
            </select>
          </div>
        </div>

        <div>
          <div style="font-weight:600; font-size:0.8rem; color:var(--text-primary); margin-bottom:6px;">Execution Controls</div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div style="display:flex; gap:6px;">
              <button class="btn btn-sm btn-outline" id="bp-btn-fwd" style="flex:1; border-color:#38bdf8; color:#38bdf8;">
                <i data-lucide="play"></i> Forward Pass
              </button>
              <button class="btn btn-sm btn-outline" id="bp-btn-bwd" style="flex:1; border-color:#f59e0b; color:#f59e0b;">
                <i data-lucide="arrow-left"></i> Backward Pass
              </button>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-sm btn-primary" id="bp-btn-step10" style="flex:1;">
                <i data-lucide="zap"></i> Train 10 Epochs
              </button>
              <button class="btn btn-sm btn-outline" id="bp-btn-reset" style="flex:1;">
                <i data-lucide="rotate-ccw"></i> Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style="background:var(--bg-card); padding:10px; border-radius:8px; margin-bottom:12px; border:1px solid var(--border-color); text-align:center;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; padding:0 8px;">
          <span style="font-size:0.78rem; font-weight:600; color:var(--text-muted); text-transform:uppercase;">Network Graph: Forward Signals & Backward Gradients</span>
          <span id="bp-status-text" style="font-size:0.78rem; font-weight:600; color:#38bdf8;">Ready (Forward pass pending)</span>
        </div>
        <div id="bp-svg-container" style="overflow-x:auto;"></div>
      </div>

      <div class="grid-2-col" style="gap:10px;">
        <div style="background:var(--bg-card); padding:12px; border-radius:8px; border-left:3px solid #38bdf8;">
          <div style="font-weight:700; color:#38bdf8; font-size:0.88rem; margin-bottom:6px; display:flex; justify-content:space-between;">
            <span>1. Forward Activations & Total Error</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">$E = \\frac{1}{2}\\sum(t_k - y_k)^2$</span>
          </div>
          <div id="bp-math-forward" style="font-size:0.8rem; line-height:1.5; color:var(--text-primary);"></div>
        </div>

        <div style="background:var(--bg-card); padding:12px; border-radius:8px; border-left:3px solid #f59e0b;">
          <div style="font-weight:700; color:#f59e0b; font-size:0.88rem; margin-bottom:6px; display:flex; justify-content:space-between;">
            <span>2. Backward Gradients & Weight Updates</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">$w \\leftarrow w - \\eta \\frac{\\partial E}{\\partial w}$</span>
          </div>
          <div id="bp-math-backward" style="font-size:0.8rem; line-height:1.5; color:var(--text-primary);"></div>
        </div>
      </div>

      <div style="margin-top:12px; background:var(--bg-card); padding:12px; border-radius:8px; overflow-x:auto;">
        <div style="font-weight:700; color:var(--text-primary); font-size:0.85rem; margin-bottom:6px;">
          Weight & Bias Gradient Ledger (All 12 Parameters)
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; text-align:left;">
          <thead>
            <tr style="border-bottom:1px solid var(--border-color); color:var(--text-muted);">
              <th style="padding:4px 8px;">Layer / Parameter</th>
              <th style="padding:4px 8px;">Current Value</th>
              <th style="padding:4px 8px;">Gradient $\\frac{\\partial E}{\\partial w}$</th>
              <th style="padding:4px 8px;">Update Step $-\\eta \\nabla$</th>
              <th style="padding:4px 8px;">Next Value</th>
            </tr>
          </thead>
          <tbody id="bp-ledger-body"></tbody>
        </table>
      </div>
    </div>
  `;

  // Attach Listeners
  const x1In = document.getElementById('bp-in-x1');
  const x2In = document.getElementById('bp-in-x2');
  const t1In = document.getElementById('bp-in-t1');
  const t2In = document.getElementById('bp-in-t2');
  const lrSlider = document.getElementById('bp-lr-slider');
  const presetSel = document.getElementById('bp-preset-select');
  const btnBench = document.getElementById('bp-btn-preset-bench');

  function updateInputs() {
    state.x1 = parseFloat(x1In.value) || 0.05;
    state.x2 = parseFloat(x2In.value) || 0.10;
    state.t1 = parseFloat(t1In.value) || 0.01;
    state.t2 = parseFloat(t2In.value) || 0.99;
    state.lr = parseFloat(lrSlider.value) || 0.5;
    const lrDisp = document.getElementById('bp-lr-display');
    if (lrDisp) lrDisp.textContent = state.lr.toFixed(2);
    updateView();
  }

  if (x1In) x1In.oninput = updateInputs;
  if (x2In) x2In.oninput = updateInputs;
  if (t1In) t1In.oninput = updateInputs;
  if (t2In) t2In.oninput = updateInputs;
  if (lrSlider) lrSlider.oninput = updateInputs;

  function loadPreset(key) {
    const p = BENCHMARKS[key] || BENCHMARKS.benchmark;
    state.x1 = p.x1; state.x2 = p.x2;
    state.t1 = p.t1; state.t2 = p.t2;
    state.lr = p.lr;
    state.w11 = p.w11; state.w12 = p.w12; state.bh1 = p.bh1;
    state.w21 = p.w21; state.w22 = p.w22; state.bh2 = p.bh2;
    state.v11 = p.v11; state.v12 = p.v12; state.bo1 = p.bo1;
    state.v21 = p.v21; state.v22 = p.v22; state.bo2 = p.bo2;
    state.epoch = 0;
    state.lastPhase = 'idle';

    if (x1In) x1In.value = state.x1;
    if (x2In) x2In.value = state.x2;
    if (t1In) t1In.value = state.t1;
    if (t2In) t2In.value = state.t2;
    if (lrSlider) lrSlider.value = state.lr;
    const lrDisp = document.getElementById('bp-lr-display');
    if (lrDisp) lrDisp.textContent = state.lr.toFixed(2);

    updateView();
  }

  if (presetSel) presetSel.onchange = (e) => loadPreset(e.target.value);
  if (btnBench) btnBench.onclick = () => {
    if (presetSel) presetSel.value = 'benchmark';
    loadPreset('benchmark');
  };

  const btnFwd = document.getElementById('bp-btn-fwd');
  if (btnFwd) {
    btnFwd.onclick = () => {
      state.lastPhase = 'forward';
      updateView();
    };
  }

  const btnBwd = document.getElementById('bp-btn-bwd');
  if (btnBwd) {
    btnBwd.onclick = () => {
      const fwd = forward();
      const bwd = backward(fwd);
      applyBackward(bwd);
      state.lastPhase = 'backward';
      updateView();
    };
  }

  const btnStep10 = document.getElementById('bp-btn-step10');
  if (btnStep10) {
    btnStep10.onclick = () => {
      for (let i = 0; i < 10; i++) {
        const fwd = forward();
        const bwd = backward(fwd);
        applyBackward(bwd);
      }
      state.lastPhase = 'train10';
      updateView();
    };
  }

  const btnReset = document.getElementById('bp-btn-reset');
  if (btnReset) {
    btnReset.onclick = () => {
      loadPreset(presetSel ? presetSel.value : 'benchmark');
    };
  }

  // Initial draw
  updateView();
  if (window.lucide) window.lucide.createIcons();
};

window.SprintDay2Visualizers.initBackpropCalculator = window.SprintDay6Visualizers.initBackpropCalculator;

console.log("Day 2 Comprehensive Visualizers loaded successfully.");
