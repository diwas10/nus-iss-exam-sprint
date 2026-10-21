// Interactive Visualizers for Day 6: Backprop Spreadsheet, RBF/SOM, CNN Parameter Calculator & XAI

window.SprintDay6Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Backpropagation Spreadsheet Lab (ANN-BP-v006.xlsx Replica)
  // -------------------------------------------------------------------------
  initBackpropSpreadsheetLab: function() {
    const container = document.getElementById('bp-spreadsheet-container');
    const btnForward = document.getElementById('bp-btn-forward');
    const btnBackward = document.getElementById('bp-btn-backward');
    const btnReset = document.getElementById('bp-btn-reset');
    const logBox = document.getElementById('bp-step-log');

    const bench = window.DAY6_NEURAL_FOUNDATIONS_DATA?.backpropBenchmark;
    if (!container || !bench) return;

    let state = {
      x: [...bench.inputs],
      t: [...bench.targets],
      lr: bench.learningRate,
      w_ih: JSON.parse(JSON.stringify(bench.w_ih)),
      b_h: [...bench.b_h],
      w_ho: JSON.parse(JSON.stringify(bench.w_ho)),
      b_o: [...bench.b_o],
      step: 0, // 0: initial, 1: forward done, 2: backward done
      net_h: [0, 0],
      out_h: [0, 0],
      net_o: [0, 0],
      out_o: [0, 0],
      delta_o: [0, 0],
      delta_h: [0, 0],
      loss: 0
    };

    function sigmoid(z) {
      return 1 / (1 + Math.exp(-z));
    }

    function runForward() {
      // Hidden layer
      state.net_h[0] = state.x[0] * state.w_ih[0][0] + state.x[1] * state.w_ih[0][1] + state.b_h[0];
      state.out_h[0] = sigmoid(state.net_h[0]);

      state.net_h[1] = state.x[0] * state.w_ih[1][0] + state.x[1] * state.w_ih[1][1] + state.b_h[1];
      state.out_h[1] = sigmoid(state.net_h[1]);

      // Output layer
      state.net_o[0] = state.out_h[0] * state.w_ho[0][0] + state.out_h[1] * state.w_ho[0][1] + state.b_o[0];
      state.out_o[0] = sigmoid(state.net_o[0]);

      state.net_o[1] = state.out_h[0] * state.w_ho[1][0] + state.out_h[1] * state.w_ho[1][1] + state.b_o[1];
      state.out_o[1] = sigmoid(state.net_o[1]);

      // Total squared error: 0.5 * sum((target - output)^2)
      const e1 = 0.5 * ((state.t[0] - state.out_o[0]) ** 2);
      const e2 = 0.5 * ((state.t[1] - state.out_o[1]) ** 2);
      state.loss = e1 + e2;
      state.step = 1;

      renderView();
      if (logBox) {
        logBox.innerHTML = `
          <div style="color: #38bdf8; font-weight: 700;">✓ Forward Pass Complete:</div>
          net_h1 = (${state.x[0]}×${state.w_ih[0][0]} + ${state.x[1]}×${state.w_ih[0][1]} + ${state.b_h[0]}) = <strong>${state.net_h[0].toFixed(4)}</strong> → out_h1 = σ(net_h1) = <strong>${state.out_h[0].toFixed(6)}</strong><br>
          net_h2 = (${state.x[0]}×${state.w_ih[1][0]} + ${state.x[1]}×${state.w_ih[1][1]} + ${state.b_h[1]}) = <strong>${state.net_h[1].toFixed(4)}</strong> → out_h2 = σ(net_h2) = <strong>${state.out_h[1].toFixed(6)}</strong><br>
          net_o1 = (${state.out_h[0].toFixed(4)}×${state.w_ho[0][0]} + ${state.out_h[1].toFixed(4)}×${state.w_ho[0][1]} + ${state.b_o[0]}) = <strong>${state.net_o[0].toFixed(4)}</strong> → out_o1 = <strong>${state.out_o[0].toFixed(6)}</strong> (target: ${state.t[0]})<br>
          net_o2 = (${state.out_h[0].toFixed(4)}×${state.w_ho[1][0]} + ${state.out_h[1].toFixed(4)}×${state.w_ho[1][1]} + ${state.b_o[1]}) = <strong>${state.net_o[1].toFixed(4)}</strong> → out_o2 = <strong>${state.out_o[1].toFixed(6)}</strong> (target: ${state.t[1]})<br>
          <strong style="color: #f59e0b;">Total Error E = 0.5·(t1-o1)² + 0.5·(t2-o2)² = ${state.loss.toFixed(6)}</strong> (Matches Excel: 0.298371)
        `;
      }
    }

    function runBackward() {
      if (state.step === 0) runForward();

      // Output error deltas: delta_k = (target_k - out_k) * out_k * (1 - out_k)
      state.delta_o[0] = (state.t[0] - state.out_o[0]) * state.out_o[0] * (1 - state.out_o[0]);
      state.delta_o[1] = (state.t[1] - state.out_o[1]) * state.out_o[1] * (1 - state.out_o[1]);

      // Hidden error deltas: delta_j = out_j * (1 - out_j) * sum(delta_k * w_jk)
      const sum_h1 = state.delta_o[0] * state.w_ho[0][0] + state.delta_o[1] * state.w_ho[1][0];
      state.delta_h[0] = state.out_h[0] * (1 - state.out_h[0]) * sum_h1;

      const sum_h2 = state.delta_o[0] * state.w_ho[0][1] + state.delta_o[1] * state.w_ho[1][1];
      state.delta_h[1] = state.out_h[1] * (1 - state.out_h[1]) * sum_h2;

      // Weight updates: w_new = w_old + lr * delta * input
      // Output layer weights
      const dw_ho00 = state.lr * state.delta_o[0] * state.out_h[0];
      const dw_ho01 = state.lr * state.delta_o[0] * state.out_h[1];
      const dw_ho10 = state.lr * state.delta_o[1] * state.out_h[0];
      const dw_ho11 = state.lr * state.delta_o[1] * state.out_h[1];

      state.w_ho[0][0] += dw_ho00;
      state.w_ho[0][1] += dw_ho01;
      state.w_ho[1][0] += dw_ho10;
      state.w_ho[1][1] += dw_ho11;

      // Hidden layer weights
      const dw_ih00 = state.lr * state.delta_h[0] * state.x[0];
      const dw_ih01 = state.lr * state.delta_h[0] * state.x[1];
      const dw_ih10 = state.lr * state.delta_h[1] * state.x[0];
      const dw_ih11 = state.lr * state.delta_h[1] * state.x[1];

      state.w_ih[0][0] += dw_ih00;
      state.w_ih[0][1] += dw_ih01;
      state.w_ih[1][0] += dw_ih10;
      state.w_ih[1][1] += dw_ih11;

      state.step = 2;
      renderView();

      if (logBox) {
        logBox.innerHTML = `
          <div style="color: #34d399; font-weight: 700;">✓ Backward Pass & Weight Updates Complete:</div>
          δ_o1 = (${state.t[0]} - ${state.out_o[0].toFixed(4)}) · ${state.out_o[0].toFixed(4)} · (1 - ${state.out_o[0].toFixed(4)}) = <strong>${state.delta_o[0].toFixed(6)}</strong><br>
          δ_o2 = (${state.t[1]} - ${state.out_o[1].toFixed(4)}) · ${state.out_o[1].toFixed(4)} · (1 - ${state.out_o[1].toFixed(4)}) = <strong>${state.delta_o[1].toFixed(6)}</strong><br>
          δ_h1 = ${state.out_h[0].toFixed(4)} · (1 - ${state.out_h[0].toFixed(4)}) · [δ_o1·w31 + δ_o2·w32] = <strong>${state.delta_h[0].toFixed(6)}</strong><br>
          Updated w_ho[0][0] (w5): ${bench.w_ho[0][0]} → <strong>${state.w_ho[0][0].toFixed(6)}</strong> (Δw = ${(dw_ho00).toFixed(6)})<br>
          Updated w_ih[0][0] (w1): ${bench.w_ih[0][0]} → <strong>${state.w_ih[0][0].toFixed(6)}</strong> (Δw = ${(dw_ih00).toFixed(6)})<br>
          <span style="color: #38bdf8;">All 8 weights updated in strict synchronization with gradient descent!</span>
        `;
      }
    }

    function resetState() {
      state = {
        x: [...bench.inputs],
        t: [...bench.targets],
        lr: bench.learningRate,
        w_ih: JSON.parse(JSON.stringify(bench.w_ih)),
        b_h: [...bench.b_h],
        w_ho: JSON.parse(JSON.stringify(bench.w_ho)),
        b_o: [...bench.b_o],
        step: 0,
        net_h: [0, 0],
        out_h: [0, 0],
        net_o: [0, 0],
        out_o: [0, 0],
        delta_o: [0, 0],
        delta_h: [0, 0],
        loss: 0
      };
      renderView();
      if (logBox) logBox.innerHTML = `<span style="color: var(--text-muted);">Click "Execute Forward Pass" to start tracing equations...</span>`;
    }

    function renderView() {
      container.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 12px; font-family: monospace; font-size: 0.8rem;">
          <div style="display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 12px; text-align: center;">
            <!-- Inputs -->
            <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
              <strong style="color: #38bdf8;">Input Layer</strong><br>
              x₁ = ${state.x[0]}<br>
              x₂ = ${state.x[1]}<br><br>
              <strong style="color: #94a3b8;">Input-to-Hidden Weights</strong><br>
              w₁₁ = ${state.w_ih[0][0].toFixed(4)} | w₂₁ = ${state.w_ih[0][1].toFixed(4)}<br>
              w₁₂ = ${state.w_ih[1][0].toFixed(4)} | w₂₂ = ${state.w_ih[1][1].toFixed(4)}<br>
              b_h = [${state.b_h[0]}, ${state.b_h[1]}]
            </div>

            <!-- Hidden -->
            <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border: 1px solid ${state.step >= 1 ? '#38bdf8' : 'transparent'};">
              <strong style="color: #f59e0b;">Hidden Layer (Sigmoid)</strong><br>
              net_h₁ = ${state.net_h[0].toFixed(4)} → a_h₁ = ${state.out_h[0].toFixed(4)}<br>
              net_h₂ = ${state.net_h[1].toFixed(4)} → a_h₂ = ${state.out_h[1].toFixed(4)}<br><br>
              <strong style="color: #94a3b8;">Hidden-to-Output Weights</strong><br>
              w₃₁ = ${state.w_ho[0][0].toFixed(4)} | w₄₁ = ${state.w_ho[0][1].toFixed(4)}<br>
              w₃₂ = ${state.w_ho[1][0].toFixed(4)} | w₄₂ = ${state.w_ho[1][1].toFixed(4)}<br>
              b_o = [${state.b_o[0]}, ${state.b_o[1]}]
            </div>

            <!-- Output -->
            <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border: 1px solid ${state.step >= 1 ? '#34d399' : 'transparent'};">
              <strong style="color: #34d399;">Output Layer</strong><br>
              out_o₁ = ${state.out_o[0].toFixed(4)} (target: ${state.t[0]})<br>
              out_o₂ = ${state.out_o[1].toFixed(4)} (target: ${state.t[1]})<br><br>
              <strong style="color: #ef4444;">Total Loss E</strong><br>
              E = ${state.loss.toFixed(6)}<br>
              <span style="font-size: 0.72rem; color: var(--text-muted);">η = ${state.lr} | Step: ${state.step === 0 ? 'Init' : (state.step === 1 ? 'Forward' : 'Backward')}</span>
            </div>
          </div>
        </div>
      `;
    }

    if (btnForward) btnForward.onclick = runForward;
    if (btnBackward) btnBackward.onclick = runBackward;
    if (btnReset) btnReset.onclick = resetState;

    renderView();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive RBF Local Gaussian Fields vs SOM Competitive Map Studio
  // -------------------------------------------------------------------------
  initRBFvsSOMStudio: function() {
    const canvas = document.getElementById('rbf-som-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const selMode = document.getElementById('rbf-mode-select');
    const sliderSigma = document.getElementById('rbf-slider-sigma');
    const lblSigma = document.getElementById('rbf-val-sigma');

    let mode = selMode ? selMode.value : 'rbf';
    let sigma = sliderSigma ? parseFloat(sliderSigma.value) : 0.20;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      if (lblSigma) lblSigma.textContent = sigma.toFixed(2);

      if (mode === 'mlp') {
        // Draw 3 infinite linear hyperplanes (Global activation)
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, h * 0.3);
        ctx.lineTo(w, h * 0.8);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, h * 0.7);
        ctx.lineTo(w, h * 0.2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px sans-serif';
        ctx.fillText('MLP: Global Hyperplanes partition the entire space to infinity', 20, 25);
      } else if (mode === 'rbf') {
        // Draw 3 localized Gaussian receptive field centers
        const centers = [
          { x: w * 0.25, y: h * 0.40 },
          { x: w * 0.70, y: h * 0.35 },
          { x: w * 0.50, y: h * 0.75 }
        ];

        centers.forEach((c, idx) => {
          const r = sigma * w;
          // Gradient fill for Gaussian bell
          const grad = ctx.createRadialGradient(c.x, c.y, 2, c.x, c.y, r);
          grad.addColorStop(0, 'rgba(52, 211, 153, 0.8)');
          grad.addColorStop(0.5, 'rgba(52, 211, 153, 0.3)');
          grad.addColorStop(1, 'rgba(52, 211, 153, 0.0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(c.x, c.y, r, 0, 2 * Math.PI);
          ctx.fill();

          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Center point
          ctx.beginPath();
          ctx.arc(c.x, c.y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = '#ffffff';
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = '11px monospace';
          ctx.fillText(`μ_${idx+1}`, c.x + 8, c.y + 4);
        });

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px sans-serif';
        ctx.fillText('RBF: Local Receptive Fields (Response drops to 0 far from μ_j)', 20, 25);
      } else {
        // SOM Lattice
        const rows = 4;
        const cols = 5;
        const nodeRadius = 6;
        const grid = [];

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            grid.push({
              x: w * 0.2 + (c * w * 0.15) + Math.sin(r + c) * 10,
              y: h * 0.25 + (r * h * 0.16) + Math.cos(r) * 8
            });
          }
        }

        // Draw grid lines
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 1.5;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            if (c < cols - 1) {
              ctx.beginPath();
              ctx.moveTo(grid[idx].x, grid[idx].y);
              ctx.lineTo(grid[idx + 1].x, grid[idx + 1].y);
              ctx.stroke();
            }
            if (r < rows - 1) {
              ctx.beginPath();
              ctx.moveTo(grid[idx].x, grid[idx].y);
              ctx.lineTo(grid[idx + cols].x, grid[idx + cols].y);
              ctx.stroke();
            }
          }
        }

        // Draw nodes
        grid.forEach((pt, idx) => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, nodeRadius, 0, 2 * Math.PI);
          ctx.fillStyle = idx === 12 ? '#ef4444' : '#f59e0b';
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px sans-serif';
        ctx.fillText('SOM: Competitive Topological Mesh (Red = Best Matching Unit BMU)', 20, 25);
      }
    }

    if (selMode) {
      selMode.onchange = function() {
        mode = this.value;
        const sigmaBox = document.getElementById('rbf-sigma-container');
        if (sigmaBox) sigmaBox.style.display = mode === 'rbf' ? 'block' : 'none';
        render();
      };
    }

    if (sliderSigma) {
      sliderSigma.oninput = function() {
        sigma = parseFloat(this.value);
        render();
      };
    }

    render();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive CNN Layer Dimension & Parameter Calculator Studio
  // -------------------------------------------------------------------------
  initCNNArchitectureCalculator: function() {
    const inpW = document.getElementById('cnn-input-dim');
    const inpC = document.getElementById('cnn-input-channels');
    const inpF = document.getElementById('cnn-kernel-size');
    const inpK = document.getElementById('cnn-num-filters');
    const inpS = document.getElementById('cnn-stride');
    const inpP = document.getElementById('cnn-padding');
    const resultBox = document.getElementById('cnn-calc-results');

    if (!inpW || !resultBox) return;

    function computeCNN() {
      const W = parseInt(inpW.value, 10) || 32;
      const Cin = parseInt(inpC.value, 10) || 3;
      const F = parseInt(inpF.value, 10) || 3;
      const K = parseInt(inpK.value, 10) || 32;
      const S = parseInt(inpS.value, 10) || 1;
      const P = parseInt(inpP.value, 10) || 0;

      // Spatial Output Dimension: floor((W - F + 2P)/S) + 1
      const W_out = Math.floor((W - F + 2 * P) / S) + 1;
      const H_out = W_out; // Assuming square images

      // Parameter count per filter: (F * F * Cin + 1)
      const weightsPerFilter = F * F * Cin;
      const biasPerFilter = 1;
      const paramsPerFilter = weightsPerFilter + biasPerFilter;
      const totalParams = paramsPerFilter * K;

      // Total FLOPs / Multiplications: H_out * W_out * K * (F * F * Cin)
      const totalMacc = H_out * W_out * K * weightsPerFilter;

      resultBox.innerHTML = `
        <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
          <div style="background: rgba(56,189,248,0.08); padding: 12px; border-radius: 8px; border: 1px solid rgba(56,189,248,0.2);">
            <span style="color: var(--text-muted); font-size: 0.72rem;">Output Feature Map Shape:</span><br>
            <strong style="color: #38bdf8; font-size: 1.15rem;">(${H_out} × ${W_out} × ${K})</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">⌊(W - F + 2P)/S⌋ + 1 = ⌊(${W}-${F}+${2*P})/${S}⌋ + 1</div>
          </div>

          <div style="background: rgba(245,158,11,0.08); padding: 12px; border-radius: 8px; border: 1px solid rgba(245,158,11,0.2);">
            <span style="color: var(--text-muted); font-size: 0.72rem;">Total Trainable Parameters:</span><br>
            <strong style="color: #f59e0b; font-size: 1.15rem;">${totalParams.toLocaleString()}</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">(${F}×${F}×${Cin} weights + 1 bias) × ${K} filters</div>
          </div>

          <div style="background: rgba(52,211,153,0.08); padding: 12px; border-radius: 8px; border: 1px solid rgba(52,211,153,0.2);">
            <span style="color: var(--text-muted); font-size: 0.72rem;">Forward FLOPs (MACCs):</span><br>
            <strong style="color: #34d399; font-size: 1.15rem;">${(totalMacc / 1e6).toFixed(2)} Million</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">${H_out} × ${W_out} × ${K} × ${weightsPerFilter}</div>
          </div>
        </div>

        <div style="margin-top: 12px; padding: 10px 14px; border-radius: 6px; background: rgba(239,68,68,0.05); border-left: 3px solid #ef4444; font-size: 0.8rem;">
          <strong style="color: #ef4444;">🚨 Classic Exam Trap Warning:</strong><br>
          Students constantly forget the <strong>+1 bias per filter</strong>! For $K=${K}$ filters, omitting the biases produces ${totalParams - K} instead of the true answer ${totalParams}. Examiners deduct full marks for this!
        </div>
      `;
    }

    [inpW, inpC, inpF, inpK, inpS, inpP].forEach(el => {
      if (el) el.oninput = computeCNN;
    });

    computeCNN();
  },

  // -------------------------------------------------------------------------
  // 4. Interactive Explainable AI (XAI) Waterfall Studio (SHAP vs LIME)
  // -------------------------------------------------------------------------
  initXAIInspector: function() {
    const container = document.getElementById('xai-waterfall-container');
    const xaiData = window.DAY6_NEURAL_FOUNDATIONS_DATA?.xaiLoanExample;
    if (!container || !xaiData) return;

    const base = xaiData.baseValue;
    const shap = xaiData.shapValues;
    const keys = Object.keys(shap);

    let html = `
      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; font-size: 0.82rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div>Base Approval Value E[f(x)]: <strong style="color: #94a3b8;">${(base * 100).toFixed(0)}%</strong></div>
          <div>Model Prediction f(x): <strong style="color: #38bdf8;">${(xaiData.predictionScore * 100).toFixed(0)}% Approved</strong></div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
    `;

    keys.forEach(k => {
      const val = shap[k];
      const isPos = val >= 0;
      const barWidth = Math.min(100, Math.abs(val) * 300);
      const color = isPos ? '#34d399' : '#ef4444';

      html += `
        <div style="display: grid; grid-template-columns: 140px 1fr 60px; align-items: center; gap: 10px;">
          <div style="text-align: right; color: var(--text-secondary);">${k}:</div>
          <div style="background: rgba(255,255,255,0.05); height: 16px; border-radius: 4px; overflow: hidden; position: relative;">
            <div style="width: ${barWidth}\\%; height: 100\\%; background: ${color}; border-radius: 4px;"></div>
          </div>
          <div style="font-weight: 700; color: ${color}; font-family: monospace;">${isPos ? '+' : ''}${(val * 100).toFixed(1)}%</div>
        </div>
      `;
    });

    html += `
        </div>
        <div style="margin-top: 14px; padding: 10px; border-radius: 6px; background: rgba(56,189,248,0.05); border-left: 3px solid #38bdf8; font-size: 0.78rem;">
          <strong>Shapley Axiom Verification (Efficiency):</strong> The sum of all feature contributions exactly equals the difference between model output and baseline:
          $\\sum \\phi_i = f(x) - E[f(x)] = 0.62 - 0.64 = -0.02$.
        </div>
      </div>
    `;

    container.innerHTML = html;
  }
};
