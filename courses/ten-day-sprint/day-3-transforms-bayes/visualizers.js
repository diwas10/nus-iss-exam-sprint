// Interactive Visualizers for Day 3: STFT & Wavelets, Audio/Vision Cognition & Bayesian Networks/EM

window.SprintDay3Visualizers = {
  // -------------------------------------------------------------------------
  // 1. STFT Spectrogram, Gabor Uncertainty & Haar Wavelet Multi-Resolution Studio
  // -------------------------------------------------------------------------
  initSTFTWaveletStudio: function() {
    const waveCanvas = document.getElementById('stft-wave-canvas');
    const specCanvas = document.getElementById('stft-spec-canvas');
    if (!waveCanvas || !specCanvas) return;

    const waveCtx = waveCanvas.getContext('2d');
    const specCtx = specCanvas.getContext('2d');

    const sliderWindow = document.getElementById('stft-slider-window');
    const lblWindow = document.getElementById('stft-val-window');
    const selectSignal = document.getElementById('stft-signal-select');
    const btnDecomposeHaar = document.getElementById('haar-btn-decompose');
    const haarContainer = document.getElementById('haar-result-container');
    const selHaarInput = document.getElementById('haar-input-select');

    let windowSize = sliderWindow ? parseInt(sliderWindow.value, 10) : 32;
    let signalType = selectSignal ? selectSignal.value : 'chirp';

    function generateSignal(type, length) {
      const sig = [];
      for (let i = 0; i < length; i++) {
        const t = i / length;
        if (type === 'stationary') {
          sig.push(Math.sin(2 * Math.PI * 8 * t) + 0.5 * Math.sin(2 * Math.PI * 24 * t));
        } else if (type === 'chirp') {
          // Instantaneous frequency increases from 4 Hz to 36 Hz
          const f = 4 + 32 * t;
          sig.push(Math.sin(2 * Math.PI * f * t));
        } else if (type === 'choke') {
          // Pipe choke step transient
          const base = Math.sin(2 * Math.PI * 10 * t) * 0.2;
          const drop = (i >= length * 0.4 && i <= length * 0.6) ? -0.8 : 0.4;
          sig.push(base + drop);
        }
      }
      return sig;
    }

    function renderSTFT() {
      const N = 256;
      const signal = generateSignal(signalType, N);

      // Render Time-Domain Wave
      waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
      const ww = waveCanvas.width;
      const wh = waveCanvas.height;
      const centerY = wh / 2;

      waveCtx.strokeStyle = '#38bdf8';
      waveCtx.lineWidth = 1.5;
      waveCtx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * ww;
        const y = centerY - signal[i] * (wh * 0.35);
        if (i === 0) waveCtx.moveTo(x, y);
        else waveCtx.lineTo(x, y);
      }
      waveCtx.stroke();

      // Render STFT Spectrogram Heatmap
      specCtx.clearRect(0, 0, specCanvas.width, specCanvas.height);
      const sw = specCanvas.width;
      const sh = specCanvas.height;

      const numFrames = 32;
      const numFreqBins = 24;
      const hop = Math.floor((N - windowSize) / numFrames);

      for (let fIdx = 0; fIdx < numFrames; fIdx++) {
        const start = fIdx * hop;
        // Approximate energy across frequency bins based on current signal frequencies
        for (let k = 0; k < numFreqBins; k++) {
          const tNorm = start / N;
          let energy = 0;

          if (signalType === 'stationary') {
            if (k === 6 || k === 18) energy = 0.85;
          } else if (signalType === 'chirp') {
            const expectedBin = Math.floor(tNorm * (numFreqBins - 4)) + 2;
            const diff = Math.abs(k - expectedBin);
            // Window size controls blurring between time and frequency
            const blur = windowSize / 24;
            energy = Math.max(0, 1 - (diff / blur));
          } else if (signalType === 'choke') {
            if (tNorm >= 0.4 && tNorm <= 0.6) {
              energy = k < 8 ? 0.9 : 0.1;
            } else {
              energy = k === 10 ? 0.7 : 0.2;
            }
          }

          const cellW = sw / numFrames;
          const cellH = sh / numFreqBins;
          const cellX = fIdx * cellW;
          const cellY = sh - (k + 1) * cellH;

          // Color scale: low energy dark purple to high energy yellow/cyan
          const r = Math.floor(energy * 240);
          const g = Math.floor(energy * 190);
          const b = Math.floor((1 - energy) * 120 + energy * 80);
          specCtx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          specCtx.fillRect(cellX, cellY, cellW + 1, cellH + 1);
        }
      }
    }

    function runHaarDecomposition() {
      if (!haarContainer) return;
      const choice = selHaarInput ? selHaarInput.value : 'lecture';
      const input = choice === 'pipe' 
        ? window.DAY3_TRANSFORMS_BAYES_DATA?.pipeChokeData 
        : window.DAY3_TRANSFORMS_BAYES_DATA?.haarExampleVector;

      if (!input) return;

      const n = input.length;
      const half = n / 2;
      const approx = [];
      const detail = [];
      let breakdownHtml = '';

      for (let i = 0; i < half; i++) {
        const x1 = input[2 * i];
        const x2 = input[2 * i + 1];
        // Exact Haar filter formulas: A = (x1+x2)/√2, D = (x2-x1)/√2
        const aVal = (x1 + x2) / Math.SQRT2;
        const dVal = (x2 - x1) / Math.SQRT2;
        approx.push(aVal);
        detail.push(dVal);

        const isChokeSpike = choice === 'pipe' && i === 1;

        breakdownHtml += `
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); ${isChokeSpike ? 'background: rgba(239, 68, 68, 0.15);' : ''}">
            <td style="padding: 6px 10px; font-weight: 700;">Pair ${i+1}: [${x1}, ${x2}]</td>
            <td style="padding: 6px 10px; color: #38bdf8; font-family: monospace;">A = (${x1} + ${x2}) / &radic;2 = <strong>${aVal.toFixed(4)}</strong></td>
            <td style="padding: 6px 10px; color: ${isChokeSpike ? '#ef4444' : '#f59e0b'}; font-family: monospace;">
              D = (${x2} - ${x1}) / &radic;2 = <strong>${dVal.toFixed(4)}</strong> ${isChokeSpike ? '🚨 PIPE CHOKE DETECTED!' : ''}
            </td>
          </tr>
        `;
      }

      haarContainer.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 12px; margin-top: 10px;">
          <h4 style="font-size: 0.85rem; color: var(--accent-cyan); margin-bottom: 8px;"><i data-lucide="table"></i> Level 1 Haar Multi-Resolution Results:</h4>
          <table class="styled-table" style="width: 100%; font-size: 0.82rem; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border-color);">
                <th style="padding: 6px 10px;">Input Pair</th>
                <th style="padding: 6px 10px;">Low-Pass Approximation (A)</th>
                <th style="padding: 6px 10px;">High-Pass Detail (D)</th>
              </tr>
            </thead>
            <tbody>
              ${breakdownHtml}
            </tbody>
          </table>
          <div class="info-alert mt-2" style="font-size: 0.78rem;">
            <strong>Exact Reconstruction Guarantee:</strong> Original pair $[x_1, x_2]$ can be reconstructed with ZERO loss:
            $$x_1 = \\frac{A - D}{\\sqrt{2}}, \\quad x_2 = \\frac{A + D}{\\sqrt{2}}$$
          </div>
        </div>
      `;
      if (window.renderLatex) window.renderLatex(haarContainer);
      if (window.lucide) window.lucide.createIcons();
    }

    if (sliderWindow) {
      sliderWindow.oninput = function() {
        windowSize = parseInt(this.value, 10);
        if (lblWindow) lblWindow.textContent = `${windowSize} Samples`;
        renderSTFT();
      };
    }

    if (selectSignal) {
      selectSignal.onchange = function() {
        signalType = this.value;
        renderSTFT();
      };
    }

    if (btnDecomposeHaar) btnDecomposeHaar.onclick = runHaarDecomposition;
    if (selHaarInput) selHaarInput.onchange = runHaarDecomposition;

    renderSTFT();
    runHaarDecomposition();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Audio & Vision Cognition Studio
  // -------------------------------------------------------------------------
  initAudioVisionCognitionStudio: function() {
    const btnTabVision = document.getElementById('cog-tab-vision-btn');
    const btnTabAudio = document.getElementById('cog-tab-audio-btn');
    const paneVision = document.getElementById('cog-pane-vision');
    const paneAudio = document.getElementById('cog-pane-audio');
    const wavelet2DCanvas = document.getElementById('wavelet-2d-canvas');

    if (btnTabVision && btnTabAudio) {
      btnTabVision.onclick = function() {
        btnTabVision.classList.add('active');
        btnTabAudio.classList.remove('active');
        if (paneVision) paneVision.style.display = 'block';
        if (paneAudio) paneAudio.style.display = 'none';
      };
      btnTabAudio.onclick = function() {
        btnTabAudio.classList.add('active');
        btnTabVision.classList.remove('active');
        if (paneVision) paneVision.style.display = 'none';
        if (paneAudio) paneAudio.style.display = 'block';
      };
    }

    // Render 2D Wavelet Quadrants (LL, LH, HL, HH)
    if (wavelet2DCanvas) {
      const ctx = wavelet2DCanvas.getContext('2d');
      const w = wavelet2DCanvas.width;
      const h = wavelet2DCanvas.height;
      const halfW = w / 2;
      const halfH = h / 2;

      ctx.clearRect(0, 0, w, h);

      // LL: Approximation (Smooth low-frequency image)
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, halfW, halfH);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.fillText('LL: Low-Low (Approximation)', 10, 24);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.beginPath(); ctx.arc(halfW / 2, halfH / 2, 25, 0, 2 * Math.PI); ctx.fill();

      // LH: Horizontal Details (High frequencies along rows)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(halfW, 0, halfW, halfH);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('LH: Horizontal Details', halfW + 10, 24);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 2;
      for (let y = 35; y < halfH - 10; y += 8) {
        ctx.beginPath(); ctx.moveTo(halfW + 15, y); ctx.lineTo(w - 15, y); ctx.stroke();
      }

      // HL: Vertical Details (High frequencies along columns)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, halfH, halfW, halfH);
      ctx.fillStyle = '#a78bfa';
      ctx.fillText('HL: Vertical Details', 10, halfH + 24);
      ctx.strokeStyle = 'rgba(167, 139, 250, 0.5)';
      ctx.lineWidth = 2;
      for (let x = 15; x < halfW - 10; x += 8) {
        ctx.beginPath(); ctx.moveTo(x, halfH + 35); ctx.lineTo(x, h - 15); ctx.stroke();
      }

      // HH: Diagonal Details
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(halfW, halfH, halfW, halfH);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('HH: Diagonal Details', halfW + 10, halfH + 24);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(halfW + 15, halfH + 35); ctx.lineTo(w - 15, h - 15);
      ctx.moveTo(w - 15, halfH + 35); ctx.lineTo(halfW + 15, h - 15);
      ctx.stroke();

      // Grid dividers
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(halfW, 0); ctx.lineTo(halfW, h);
      ctx.moveTo(0, halfH); ctx.lineTo(w, halfH);
      ctx.stroke();
    }
  },

  // -------------------------------------------------------------------------
  // 3. Interactive Bayesian Belief Network & 18-Dice Latent EM Studio
  // -------------------------------------------------------------------------
  initBayesEMStudio: function() {
    const netData = window.DAY3_TRANSFORMS_BAYES_DATA?.burglaryAlarmNet;
    const btnComputeBayes = document.getElementById('bayes-btn-compute');
    const bayesResultBox = document.getElementById('bayes-result-box');
    const chkJohn = document.getElementById('bayes-chk-john');
    const chkMary = document.getElementById('bayes-chk-mary');

    const btnStepEM = document.getElementById('em-btn-step');
    const btnResetEM = document.getElementById('em-btn-reset');
    const emResultBox = document.getElementById('em-result-box');

    function computeBurglaryPosterior() {
      if (!bayesResultBox || !netData) return;

      const jObs = chkJohn && chkJohn.checked; // JohnCalls = True
      const mObs = chkMary && chkMary.checked; // MaryCalls = True

      const pB = netData.priors.Burglary; // 0.001
      const pNotB = 1 - pB;                // 0.999
      const pE = netData.priors.Earthquake;// 0.002
      const pNotE = 1 - pE;                // 0.998

      // Compute P(J, M | B) by summing over Earthquake (E in {T, F}) and Alarm (A in {T, F})
      function getJointEvidenceGivenB(bVal) {
        let sum = 0;
        [true, false].forEach(eVal => {
          const pe = eVal ? pE : pNotE;
          const keyA = `${bVal ? 'T' : 'F'},${eVal ? 'T' : 'F'}`;
          const pA_given_BE = netData.alarmCPT[keyA];

          [true, false].forEach(aVal => {
            const pa = aVal ? pA_given_BE : (1 - pA_given_BE);
            const pj = aVal ? (jObs ? netData.johnCPT.T : (1 - netData.johnCPT.T)) : (jObs ? netData.johnCPT.F : (1 - netData.johnCPT.F));
            const pm = aVal ? (mObs ? netData.maryCPT.T : (1 - netData.maryCPT.T)) : (mObs ? netData.maryCPT.F : (1 - netData.maryCPT.F));

            sum += pe * pa * pj * pm;
          });
        });
        return sum;
      }

      const pEvidence_given_B = getJointEvidenceGivenB(true);
      const pEvidence_given_NotB = getJointEvidenceGivenB(false);

      const num = pEvidence_given_B * pB;
      const den = num + (pEvidence_given_NotB * pNotB);
      const posterior = den > 0 ? (num / den) : 0;

      bayesResultBox.innerHTML = `
        <div style="background: rgba(56, 189, 248, 0.1); border-radius: 6px; padding: 12px; border: 1px solid rgba(56, 189, 248, 0.3);">
          <strong style="color: #38bdf8; font-size: 0.95rem;">
            P(Burglary = True | Evidence) = ${(posterior * 100).toFixed(2)}%
          </strong>
          <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 6px; line-height: 1.5; font-family: monospace;">
            Evidence: JohnCalls = ${jObs ? 'TRUE' : 'FALSE'}, MaryCalls = ${mObs ? 'TRUE' : 'FALSE'}<br>
            Numerator &alpha; &times; P(B=T) &times; &sum; P(J|A)P(M|A)P(A|B,E)P(E) = ${num.toExponential(4)}<br>
            Denominator P(Evidence) = ${den.toExponential(4)}<br>
            <strong>Posterior = ${num.toExponential(4)} / ${den.toExponential(4)} = ${posterior.toFixed(4)}</strong>
          </div>
        </div>
      `;
    }

    // EM 18-Dice Simulation
    let thetaA = 0.60;
    let thetaB = 0.50;
    let emIteration = 0;
    const trials = window.DAY3_TRANSFORMS_BAYES_DATA?.emDiceData || [];

    function renderEM() {
      if (!emResultBox) return;

      let log = `<div style="font-size: 0.8rem; font-family: monospace;">`;
      log += `<div style="color: #38bdf8; font-weight: bold; margin-bottom: 6px;">[Iteration ${emIteration}] Current Parameter Estimates: &theta;_A = ${thetaA.toFixed(3)}, &theta;_B = ${thetaB.toFixed(3)}</div>`;

      let totalExpectedYellowA = 0;
      let totalExpectedBlueA = 0;
      let totalExpectedYellowB = 0;
      let totalExpectedBlueB = 0;

      trials.forEach(t => {
        const y = t.counts.yellow;
        const b = t.counts.blue;
        // Binomial likelihood P(Data | theta)
        const pA = (thetaA ** y) * ((1 - thetaA) ** b);
        const pB = (thetaB ** y) * ((1 - thetaB) ** b);

        // E-step: Posterior responsibility weights
        const weightA = pA / (pA + pB);
        const weightB = pB / (pA + pB);

        totalExpectedYellowA += weightA * y;
        totalExpectedBlueA += weightA * b;
        totalExpectedYellowB += weightB * y;
        totalExpectedBlueB += weightB * b;

        log += `• Trial ${t.trial} (${y}Y, ${b}B): Resp(A) = ${weightA.toFixed(2)}, Resp(B) = ${weightB.toFixed(2)}<br>`;
      });

      // M-step: Parameter re-estimation
      const nextThetaA = totalExpectedYellowA / (totalExpectedYellowA + totalExpectedBlueA);
      const nextThetaB = totalExpectedYellowB / (totalExpectedYellowB + totalExpectedBlueB);

      log += `<div style="margin-top: 8px; color: #34d399; font-weight: bold;">[M-Step Update]: New &theta;_A = ${nextThetaA.toFixed(3)}, New &theta;_B = ${nextThetaB.toFixed(3)}</div>`;
      log += `</div>`;

      emResultBox.innerHTML = log;
      thetaA = nextThetaA;
      thetaB = nextThetaB;
    }

    if (btnComputeBayes) btnComputeBayes.onclick = computeBurglaryPosterior;
    if (chkJohn) chkJohn.onchange = computeBurglaryPosterior;
    if (chkMary) chkMary.onchange = computeBurglaryPosterior;

    if (btnStepEM) {
      btnStepEM.onclick = function() {
        emIteration++;
        renderEM();
      };
    }

    if (btnResetEM) {
      btnResetEM.onclick = function() {
        thetaA = 0.60;
        thetaB = 0.50;
        emIteration = 0;
        renderEM();
      };
    }

    computeBurglaryPosterior();
    renderEM();
  }
};
