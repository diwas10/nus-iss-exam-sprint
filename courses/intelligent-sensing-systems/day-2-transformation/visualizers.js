// Interactive Canvas Visualizers & Simulators for Day 2: Sensory Signal Transformation
window.Day2Visualizers = {
  // 1. Fourier Time-Blindness Simulator
  initFourierBlindness() {
    const canvasSig = document.getElementById('fourier-signal-canvas');
    const canvasSpec = document.getElementById('fourier-spectrum-canvas');
    const orderBtn = document.getElementById('btn-swap-freq-order');
    const statusBox = document.getElementById('fourier-status-box');
    if (!canvasSig || !canvasSpec) return;

    const ctxSig = canvasSig.getContext('2d');
    const ctxSpec = canvasSpec.getContext('2d');
    let order = '5-then-25'; // or '25-then-5'

    function draw() {
      const wSig = canvasSig.width;
      const hSig = canvasSig.height;
      ctxSig.fillStyle = '#0f172a';
      ctxSig.fillRect(0, 0, wSig, hSig);

      // Generate signal: 2 seconds total, 200 points per second = 400 points
      const N = 400;
      const tMax = 2.0;
      const signal = [];
      for (let i = 0; i < N; i++) {
        const t = (i / N) * tMax;
        let val = 0;
        if (order === '5-then-25') {
          val = t < 1.0 ? Math.cos(2 * Math.PI * 5 * t) : Math.cos(2 * Math.PI * 25 * t);
        } else {
          val = t < 1.0 ? Math.cos(2 * Math.PI * 25 * t) : Math.cos(2 * Math.PI * 5 * t);
        }
        signal.push(val);
      }

      // Draw Grid & Zero axis
      ctxSig.strokeStyle = 'rgba(255,255,255,0.1)';
      ctxSig.lineWidth = 1;
      ctxSig.beginPath();
      ctxSig.moveTo(0, hSig / 2);
      ctxSig.lineTo(wSig, hSig / 2);
      ctxSig.moveTo(wSig / 2, 0);
      ctxSig.lineTo(wSig / 2, hSig);
      ctxSig.stroke();

      // Draw Time Waveform
      ctxSig.strokeStyle = order === '5-then-25' ? '#38bdf8' : '#f59e0b';
      ctxSig.lineWidth = 2;
      ctxSig.beginPath();
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * wSig;
        const y = hSig / 2 - signal[i] * (hSig * 0.4);
        if (i === 0) ctxSig.moveTo(x, y);
        else ctxSig.lineTo(x, y);
      }
      ctxSig.stroke();

      // Labels on Signal Canvas
      ctxSig.font = '11px monospace';
      ctxSig.fillStyle = '#94a3b8';
      ctxSig.fillText('t = 0.0s', 10, hSig - 8);
      ctxSig.fillText('t = 1.0s (Transition)', wSig / 2 - 50, 16);
      ctxSig.fillText('t = 2.0s', wSig - 60, hSig - 8);
      ctxSig.fillStyle = '#fff';
      if (order === '5-then-25') {
        ctxSig.fillText('Region 1: 5 Hz Burst', 20, 30);
        ctxSig.fillText('Region 2: 25 Hz Burst', wSig / 2 + 20, 30);
      } else {
        ctxSig.fillText('Region 1: 25 Hz Burst', 20, 30);
        ctxSig.fillText('Region 2: 5 Hz Burst', wSig / 2 + 20, 30);
      }

      // Draw FFT Magnitude Spectrum
      const wSpec = canvasSpec.width;
      const hSpec = canvasSpec.height;
      ctxSpec.fillStyle = '#0f172a';
      ctxSpec.fillRect(0, 0, wSpec, hSpec);

      // Compute simple DFT magnitudes up to 40 Hz
      const maxFreq = 40;
      const freqs = [];
      const mags = [];
      for (let f = 1; f <= maxFreq; f += 0.5) {
        let real = 0, imag = 0;
        for (let n = 0; n < N; n++) {
          const t = (n / N) * tMax;
          const angle = -2 * Math.PI * f * t;
          real += signal[n] * Math.cos(angle);
          imag += signal[n] * Math.sin(angle);
        }
        freqs.push(f);
        mags.push(Math.sqrt(real * real + imag * imag) / N);
      }

      const maxMag = Math.max(...mags, 0.5);

      // Draw Spectrum Bars
      for (let i = 0; i < freqs.length; i++) {
        const x = (freqs[i] / maxFreq) * wSpec;
        const barH = (mags[i] / maxMag) * (hSpec * 0.78);
        const y = hSpec - barH - 20;

        const isPeak = Math.abs(freqs[i] - 5) < 0.6 || Math.abs(freqs[i] - 25) < 0.6;
        ctxSpec.fillStyle = isPeak ? '#34d399' : 'rgba(56, 189, 248, 0.4)';
        ctxSpec.fillRect(x - 2, y, 4, barH);

        if (isPeak && (freqs[i] === 5 || freqs[i] === 25)) {
          ctxSpec.fillStyle = '#fff';
          ctxSpec.font = '10px monospace';
          ctxSpec.fillText(`${freqs[i]}Hz`, x - 10, y - 6);
        }
      }

      // Spectrum Axis
      ctxSpec.strokeStyle = 'rgba(255,255,255,0.2)';
      ctxSpec.lineWidth = 1;
      ctxSpec.beginPath();
      ctxSpec.moveTo(0, hSpec - 20);
      ctxSpec.lineTo(wSpec, hSpec - 20);
      ctxSpec.stroke();

      ctxSpec.fillStyle = '#94a3b8';
      ctxSpec.font = '11px monospace';
      ctxSpec.fillText('0 Hz', 6, hSpec - 6);
      ctxSpec.fillText('20 Hz', wSpec / 2 - 15, hSpec - 6);
      ctxSpec.fillText('40 Hz', wSpec - 40, hSpec - 6);
      ctxSpec.fillStyle = '#34d399';
      ctxSpec.fillText('Magnitude |F(u)| Identical for Both Cases!', 20, 24);

      if (statusBox) {
        statusBox.innerHTML = `
          <strong>Active Configuration:</strong> <code>${order === '5-then-25' ? '5 Hz (0-1s) followed by 25 Hz (1-2s)' : '25 Hz (0-1s) followed by 5 Hz (1-2s)'}</code><br>
          <span style="color: #34d399;"><strong>Observation:</strong> Look at the green frequency peaks above! In both orders, the Fourier Transform reports peaks at exactly 5 Hz and 25 Hz with the EXACT same height. Fourier Transform is completely <em>blind</em> to temporal order!</span>
        `;
      }
    }

    if (orderBtn) {
      orderBtn.onclick = () => {
        order = order === '5-then-25' ? '25-then-5' : '5-then-25';
        orderBtn.innerHTML = order === '5-then-25' ? 
          `<i data-lucide="shuffle"></i> Swap Order: Play 25 Hz First` : 
          `<i data-lucide="shuffle"></i> Swap Order: Play 5 Hz First`;
        draw();
        if (window.lucide) window.lucide.createIcons();
      };
    }

    draw();
  },

  // 2. STFT Spectrogram & Heisenberg Uncertainty Studio
  initSTFTStudio() {
    const canvas = document.getElementById('stft-spectrogram-canvas');
    const slider = document.getElementById('stft-window-slider');
    const valLabel = document.getElementById('stft-window-val');
    const tradeOffBox = document.getElementById('stft-tradeoff-box');
    if (!canvas || !slider) return;

    const ctx = canvas.getContext('2d');

    function renderSpectrogram(winSize) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Signal: Chirp from 5Hz to 35Hz over 3 seconds
      const sampleRate = 120;
      const duration = 3.0;
      const totalSamples = Math.floor(sampleRate * duration);
      const sig = [];
      for (let i = 0; i < totalSamples; i++) {
        const t = i / sampleRate;
        // Chirp frequency increases from 5 to 35
        const instFreq = 5 + (30 / duration) * t;
        sig.push(Math.sin(2 * Math.PI * instFreq * t * 0.5));
      }

      // Step size (hop length)
      const hop = Math.max(4, Math.floor(winSize / 4));
      const numFrames = Math.floor((totalSamples - winSize) / hop);
      const numBins = Math.floor(winSize / 2);

      const frameWidth = w / numFrames;
      const binHeight = h / numBins;

      for (let f = 0; f < numFrames; f++) {
        const start = f * hop;
        // Apply Hanning window
        const frame = [];
        for (let n = 0; n < winSize; n++) {
          const wCoeff = 0.5 * (1 - Math.cos((2 * Math.PI * n) / (winSize - 1)));
          frame.push(sig[start + n] * wCoeff);
        }

        // Compute FFT magnitudes for positive bins
        for (let k = 0; k < numBins; k++) {
          let real = 0, imag = 0;
          for (let n = 0; n < winSize; n++) {
            const angle = (-2 * Math.PI * k * n) / winSize;
            real += frame[n] * Math.cos(angle);
            imag += frame[n] * Math.sin(angle);
          }
          const mag = Math.sqrt(real * real + imag * imag) / (winSize / 4);
          const intensity = Math.min(255, Math.floor(mag * 220));

          // Color map: dark blue to cyan to yellow
          let r = 0, g = 0, b = 0;
          if (intensity < 100) {
            b = Math.floor(intensity * 2.5);
            g = Math.floor(intensity * 1.5);
          } else if (intensity < 180) {
            g = 150 + Math.floor((intensity - 100) * 1.2);
            b = 255;
            r = Math.floor((intensity - 100) * 1.5);
          } else {
            r = 255;
            g = 200 + Math.floor((intensity - 180) * 0.7);
            b = Math.floor((255 - intensity) * 1.2);
          }

          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          // Draw bin inverted so low frequencies are at the bottom
          const x = f * frameWidth;
          const y = h - (k + 1) * binHeight;
          ctx.fillRect(x, y, Math.ceil(frameWidth) + 1, Math.ceil(binHeight) + 1);
        }
      }

      // Overlay Axes & Grid
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, w, h);

      ctx.fillStyle = '#ffffff';
      ctx.font = '11px monospace';
      ctx.fillText('Frequency (Hz) ↑', 10, 18);
      ctx.fillText('Time (t = 0.0s to 3.0s) →', w - 180, h - 8);

      if (valLabel) valLabel.textContent = `${winSize} samples`;

      if (tradeOffBox) {
        if (winSize <= 32) {
          tradeOffBox.innerHTML = `
            <strong style="color: #38bdf8;">Narrow Window (${winSize} points): Wideband Spectrogram</strong><br>
            <span class="text-secondary">High Time Resolution ($\\Delta t$ small), Low Frequency Resolution ($\\Delta f$ wide). You can pinpoint exact millisecond events, but frequency bands are broad vertical smears!</span>
          `;
        } else if (winSize >= 128) {
          tradeOffBox.innerHTML = `
            <strong style="color: #f59e0b;">Wide Window (${winSize} points): Narrowband Spectrogram</strong><br>
            <span class="text-secondary">High Frequency Resolution ($\\Delta f$ small), Low Time Resolution ($\\Delta t$ wide). Pure frequency harmonics form crisp horizontal bands, but you lose the exact moment when tone changes occurred!</span>
          `;
        } else {
          tradeOffBox.innerHTML = `
            <strong style="color: #34d399;">Balanced Window (${winSize} points): Standard Gabor STFT</strong><br>
            <span class="text-secondary">Balanced compromise satisfying the Heisenberg-Gabor inequality: $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$.</span>
          `;
        }
        window.renderLatex(tradeOffBox);
      }
    }

    slider.oninput = (e) => {
      renderSpectrogram(parseInt(e.target.value));
    };

    renderSpectrogram(parseInt(slider.value));
  },

  // 3. Interactive Haar Wavelet Decomposition & Reconstruction Engine
  initWaveletDecompStudio() {
    const canvas = document.getElementById('wavelet-canvas');
    const stepBox = document.getElementById('wavelet-step-explanation');
    const threshSlider = document.getElementById('wavelet-thresh-slider');
    const threshVal = document.getElementById('wavelet-thresh-val');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let currentStep = 1; // 1: Input, 2: Decomp Level 1, 3: Decomp Level 2, 4: Reconstructed

    // Exact values from Slide 17 & 19
    const origSignal = [9, 7, 3, 5];
    const s2 = Math.SQRT2;
    const s2_2 = Math.SQRT1_2; // sqrt(2)/2

    // Level 1: Approx = [8*sqrt(2), 4*sqrt(2)] = [11.314, 5.657]
    // Level 1: Detail = [-sqrt(2), sqrt(2)] = [-1.414, 1.414]
    // Level 2: Approx = 12, Detail = -4
    const l1Approx = [8 * s2, 4 * s2];
    const l1Detail = [-s2, s2];
    const l2Approx = 12;
    const l2Detail = -4;

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Draw horizontal axis
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      const threshold = threshSlider ? parseFloat(threshSlider.value) : 0;
      if (threshVal) threshVal.textContent = threshold.toFixed(2);

      if (currentStep === 1) {
        // Draw original signal [9, 7, 3, 5]
        drawBars(origSignal, '#38bdf8', 'Original Signal: [9, 7, 3, 5]');
        if (stepBox) {
          stepBox.innerHTML = `
            <h4>Step 1: Input Discrete Signal</h4>
            <p>We begin with a 4-sample discrete signal: <code>x = [9, 7, 3, 5]</code>. Notice how the values drop sharply in the middle from 7 down to 3.</p>
            <div class="math-banner">\\[ \\mathbf{x} = [9,\\; 7,\\; 3,\\; 5] \\]</div>
          `;
        }
      } else if (currentStep === 2) {
        // Draw Level 1 Decomposition: A1 and D1
        const values = [...l1Approx, ...l1Detail];
        drawSubbandBars([
          { label: 'A1: 8√2 (11.31)', val: l1Approx[0], color: '#38bdf8' },
          { label: 'A1: 4√2 (5.66)', val: l1Approx[1], color: '#38bdf8' },
          { label: 'D1: -√2 (-1.41)', val: l1Detail[0], color: '#f59e0b' },
          { label: 'D1: √2 (1.41)', val: l1Detail[1], color: '#f59e0b' }
        ], 'Level 1 Subbands: Approximation A1 (Low-Pass) & Detail D1 (High-Pass)');

        if (stepBox) {
          stepBox.innerHTML = `
            <h4>Step 2: Level-1 Haar Filter Convolution & Downsampling</h4>
            <p>Using Haar Low-pass filter \\([\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]\\) and High-pass filter \\([-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]\\):</p>
            <ul class="clean-list">
              <li><strong>Approximation \\(A_1\\):</strong> \\(9 \\cdot \\frac{\\sqrt{2}}{2} + 7 \\cdot \\frac{\\sqrt{2}}{2} = 8\\sqrt{2} \\approx 11.31\\) and \\(3 \\cdot \\frac{\\sqrt{2}}{2} + 5 \\cdot \\frac{\\sqrt{2}}{2} = 4\\sqrt{2} \\approx 5.66\\)</li>
              <li><strong>Detail \\(D_1\\):</strong> \\(9 \\cdot (-\\frac{\\sqrt{2}}{2}) + 7 \\cdot \\frac{\\sqrt{2}}{2} = -\\sqrt{2} \\approx -1.41\\) and \\(3 \\cdot (-\\frac{\\sqrt{2}}{2}) + 5 \\cdot \\frac{\\sqrt{2}}{2} = \\sqrt{2} \\approx 1.41\\)</li>
            </ul>
          `;
        }
      } else if (currentStep === 3) {
        // Draw Level 2 Decomposition: [A2, D2, D1_0, D1_1] = [12, -4, -sqrt(2), sqrt(2)]
        drawSubbandBars([
          { label: 'A2: 12 (Trend)', val: l2Approx, color: '#34d399' },
          { label: 'D2: -4 (Mid Detail)', val: l2Detail, color: '#a78bfa' },
          { label: 'D1[0]: -√2 (High Detail)', val: l1Detail[0], color: '#f59e0b' },
          { label: 'D1[1]: √2 (High Detail)', val: l1Detail[1], color: '#f59e0b' }
        ], 'Final Wavelet Coefficients: [12, -4, -√2, √2]');

        if (stepBox) {
          stepBox.innerHTML = `
            <h4>Step 3: Level-2 Decomposition (Slide 17)</h4>
            <p>Now we decompose \\(A_1 = [8\\sqrt{2}, 4\\sqrt{2}]\\) further:</p>
            <div class="math-banner">
              \\[ A_2 = 8\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} + 4\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = 8 + 4 = 12 \\]
              \\[ D_2 = 8\\sqrt{2} \\cdot (-\\frac{\\sqrt{2}}{2}) + 4\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = -8 + 4 = -4 \\]
            </div>
            <p>The full wavelet coefficient vector is: <code>[12, -4, -1.414, 1.414]</code>.</p>
          `;
        }
      } else if (currentStep === 4) {
        // Reconstructed signal, potentially with thresholding applied!
        let d1_0 = Math.abs(l1Detail[0]) >= threshold ? l1Detail[0] : 0;
        let d1_1 = Math.abs(l1Detail[1]) >= threshold ? l1Detail[1] : 0;
        let d2 = Math.abs(l2Detail) >= threshold ? l2Detail : 0;
        let a2 = l2Approx;

        // Reconstruct A1 from A2, D2:
        // A1_0 = (A2 - D2)/sqrt(2) = (12 - (-4))/sqrt(2) = 16/sqrt(2) = 8*sqrt(2)
        // A1_1 = (A2 + D2)/sqrt(2) = (12 + (-4))/sqrt(2) = 8/sqrt(2) = 4*sqrt(2)
        const recA1_0 = (a2 - d2) * s2_2;
        const recA1_1 = (a2 + d2) * s2_2;

        // Reconstruct signal from A1 and D1:
        // x0 = (recA1_0 - d1_0)*sqrt(2)/2 ?
        // Using Slide 19 formula:
        const x0 = (recA1_0 - d1_0) * s2_2;
        const x1 = (recA1_0 + d1_0) * s2_2;
        const x2 = (recA1_1 - d1_1) * s2_2;
        const x3 = (recA1_1 + d1_1) * s2_2;
        const recSig = [x0, x1, x2, x3];

        drawBars(recSig, '#34d399', `Reconstructed Signal (Denoising Thresh = ${threshold.toFixed(2)})`);

        if (stepBox) {
          stepBox.innerHTML = `
            <h4>Step 4: Wavelet Reconstruction & Denoising (Slide 19)</h4>
            <p>Using up-sampling (inserting zeros) and reconstruction synthesis filters:</p>
            <div class="math-banner">\\[ \\hat{\\mathbf{x}} = [${recSig.map(v => v.toFixed(2)).join(',\\; ')}] \\]</div>
            <p>Notice: When threshold is <code>0.00</code>, the reconstruction is <strong>100% exact: [9, 7, 3, 5]</strong>! If you raise the threshold, fine details are eliminated, smoothing out high-frequency noise!</p>
          `;
        }
      }

      window.renderLatex(stepBox);
    }

    function drawBars(arr, color, title) {
      const w = canvas.width;
      const h = canvas.height;
      const barW = w / (arr.length * 2);
      ctx.fillStyle = color;

      for (let i = 0; i < arr.length; i++) {
        const x = (i + 0.5) * (w / arr.length) - barW / 2;
        const barH = (arr[i] / 15) * (h * 0.4);
        const y = h / 2 - barH;
        ctx.fillRect(x, Math.min(y, h / 2), barW, Math.abs(barH));

        ctx.fillStyle = '#ffffff';
        ctx.font = '12px monospace';
        ctx.fillText(arr[i].toFixed(1), x + barW / 4, y > h / 2 ? y + 16 : y - 6);
        ctx.fillStyle = color;
      }

      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(title, 20, 26);
    }

    function drawSubbandBars(items, title) {
      const w = canvas.width;
      const h = canvas.height;
      const barW = w / (items.length * 2);

      for (let i = 0; i < items.length; i++) {
        const x = (i + 0.5) * (w / items.length) - barW / 2;
        const barH = (items[i].val / 15) * (h * 0.4);
        const y = h / 2 - barH;

        ctx.fillStyle = items[i].color;
        ctx.fillRect(x, Math.min(y, h / 2), barW, Math.abs(barH));

        ctx.fillStyle = '#ffffff';
        ctx.font = '11px monospace';
        ctx.fillText(items[i].val.toFixed(2), x - 2, y > h / 2 ? y + 16 : y - 6);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px sans-serif';
        ctx.fillText(items[i].label.split(':')[0], x - 4, h - 8);
      }

      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(title, 20, 26);
    }

    // Step button handlers
    for (let i = 1; i <= 4; i++) {
      const btn = document.getElementById(`btn-wavelet-step-${i}`);
      if (btn) {
        btn.onclick = () => {
          currentStep = i;
          for (let j = 1; j <= 4; j++) {
            const b = document.getElementById(`btn-wavelet-step-${j}`);
            if (b) b.className = j === i ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm';
          }
          draw();
        };
      }
    }

    if (threshSlider) {
      threshSlider.oninput = () => {
        currentStep = 4; // switch to reconstruction to show denoising
        for (let j = 1; j <= 4; j++) {
          const b = document.getElementById(`btn-wavelet-step-${j}`);
          if (b) b.className = j === 4 ? 'btn btn-primary btn-sm' : 'btn btn-outline btn-sm';
        }
        draw();
      };
    }

    draw();
  },

  // 4. 2D Wavelet Quadrants Visualizer
  initWavelet2DStudio() {
    const canvas = document.getElementById('wavelet2d-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    const halfW = w / 2;
    const halfH = h / 2;

    // AA quadrant (Top Left - Low/Low)
    ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.fillRect(2, 2, halfW - 4, halfH - 4);
    ctx.strokeStyle = '#38bdf8';
    ctx.strokeRect(2, 2, halfW - 4, halfH - 4);

    // AD quadrant (Top Right - Low/High = Vertical edges)
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.fillRect(halfW + 2, 2, halfW - 4, halfH - 4);
    ctx.strokeStyle = '#f59e0b';
    ctx.strokeRect(halfW + 2, 2, halfW - 4, halfH - 4);

    // DA quadrant (Bottom Left - High/Low = Horizontal edges)
    ctx.fillStyle = 'rgba(167, 139, 250, 0.15)';
    ctx.fillRect(2, halfH + 2, halfW - 4, halfH - 4);
    ctx.strokeStyle = '#a78bfa';
    ctx.strokeRect(2, halfH + 2, halfW - 4, halfH - 4);

    // DD quadrant (Bottom Right - High/High = Diagonal edges)
    ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
    ctx.fillRect(halfW + 2, halfH + 2, halfW - 4, halfH - 4);
    ctx.strokeStyle = '#ef4444';
    ctx.strokeRect(halfW + 2, halfH + 2, halfW - 4, halfH - 4);

    // Labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px bold monospace';
    ctx.fillText('AA: Approximation', 16, 28);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Low-pass row + Low-pass col (Smooth 1/2 res image)', 16, 48);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px bold monospace';
    ctx.fillText('AD: Vertical Edges', halfW + 16, 28);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Low-pass row + High-pass col (Vertical features)', halfW + 16, 48);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px bold monospace';
    ctx.fillText('DA: Horizontal Edges', 16, halfH + 28);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('High-pass row + Low-pass col (Horizontal features)', 16, halfH + 48);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px bold monospace';
    ctx.fillText('DD: Diagonal Edges', halfW + 16, halfH + 28);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('High-pass row + High-pass col (Corner/diagonal details)', halfW + 16, halfH + 48);
  },

  // 5. Gaussian Naive Bayes Posterior Calculator
  initNaiveBayesStudio() {
    const canvas = document.getElementById('nb-canvas');
    const priorSlider = document.getElementById('nb-prior-slider');
    const priorVal = document.getElementById('nb-prior-val');
    const decisionBox = document.getElementById('nb-decision-box');
    if (!canvas || !priorSlider) return;

    const ctx = canvas.getContext('2d');

    function draw(pWalk) {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const pRun = 1.0 - pWalk;
      if (priorVal) priorVal.textContent = pWalk.toFixed(2);

      // Class 1: Walking -> mu1 = 1.2 m/s^2, sigma1 = 0.5
      // Class 2: Running -> mu2 = 3.5 m/s^2, sigma2 = 0.9
      const mu1 = 1.2, sig1 = 0.5;
      const mu2 = 3.5, sig2 = 0.9;

      function g(x, mu, sig) {
        return (1 / (sig * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mu) / sig, 2));
      }

      // Range: x from 0 to 6 m/s^2
      const xMin = 0, xMax = 6;

      // Draw Grid & Axes
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.beginPath();
      ctx.moveTo(0, h - 25);
      ctx.lineTo(w, h - 25);
      ctx.stroke();

      // Find Decision Boundary where P(Walk|x) == P(Run|x)
      let boundaryX = 2.0;
      let minDiff = 999;
      const N = 300;

      // Plot Posteriors
      ctx.lineWidth = 2;

      // Walking Posterior Curve
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = xMin + (i / N) * (xMax - xMin);
        const l1 = g(x, mu1, sig1);
        const l2 = g(x, mu2, sig2);
        const evidence = l1 * pWalk + l2 * pRun;
        const post1 = (l1 * pWalk) / (evidence + 1e-9);

        const cx = (i / N) * w;
        const cy = h - 25 - post1 * (h * 0.7);
        if (i === 0) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);

        const diff = Math.abs(post1 - 0.5);
        if (diff < minDiff) {
          minDiff = diff;
          boundaryX = x;
        }
      }
      ctx.stroke();

      // Running Posterior Curve
      ctx.strokeStyle = '#f59e0b';
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = xMin + (i / N) * (xMax - xMin);
        const l1 = g(x, mu1, sig1);
        const l2 = g(x, mu2, sig2);
        const evidence = l1 * pWalk + l2 * pRun;
        const post2 = (l2 * pRun) / (evidence + 1e-9);

        const cx = (i / N) * w;
        const cy = h - 25 - post2 * (h * 0.7);
        if (i === 0) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);
      }
      ctx.stroke();

      // Draw Decision Boundary Line
      const bx = ((boundaryX - xMin) / (xMax - xMin)) * w;
      ctx.strokeStyle = '#34d399';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(bx, 20);
      ctx.lineTo(bx, h - 25);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#34d399';
      ctx.font = '11px monospace';
      ctx.fillText(`Decision Boundary: x* = ${boundaryX.toFixed(2)} m/s²`, bx + 6, 40);

      // Labels
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('P(Walking | x)', 20, 25);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText('P(Running | x)', w - 120, 25);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Acceleration x (m/s²) →', w / 2 - 60, h - 6);

      if (decisionBox) {
        decisionBox.innerHTML = `
          <strong>Bayesian Decision Rule (Slide 29):</strong><br>
          If sensor acceleration \\(x < ${boundaryX.toFixed(2)}\\text{ m/s}^2\\) \\(\\implies\\) Classify as <strong>WALKING</strong>.<br>
          If sensor acceleration \\(x \\ge ${boundaryX.toFixed(2)}\\text{ m/s}^2\\) \\(\\implies\\) Classify as <strong>RUNNING</strong>.<br>
          <span class="text-secondary" style="font-size: 0.82rem;">Notice how dragging the prior probability shifts the green decision boundary left or right according to Bayes' Theorem!</span>
        `;
        window.renderLatex(decisionBox);
      }
    }

    priorSlider.oninput = (e) => {
      draw(parseFloat(e.target.value));
    };

    draw(parseFloat(priorSlider.value));
  },

  // 6. Expectation-Maximization (EM) Two-Dice Simulator
  initEMDiceStudio() {
    const tableYellow = document.getElementById('em-yellow-table');
    const tableBlue = document.getElementById('em-blue-table');
    const priorsBox = document.getElementById('em-priors-box');
    const rollsGrid = document.getElementById('em-rolls-display');
    const iterLabel = document.getElementById('em-iteration-count');
    const btnNext = document.getElementById('btn-em-next');
    const btnAuto = document.getElementById('btn-em-auto');
    const btnReset = document.getElementById('btn-em-reset');
    if (!tableYellow || !rollsGrid) return;

    const rolls = window.DAY2_DATA.emDice.rolls;
    let iteration = 0;

    // Parameters
    let pZ_Yellow = 0.5;
    let pZ_Blue = 0.5;
    let pX_Yellow = [0.4, 0.05, 0.05, 0.05, 0.05, 0.4];
    let pX_Blue = [0.3, 0.3, 0.1, 0.1, 0.1, 0.1];

    function updateView() {
      if (iterLabel) iterLabel.textContent = `Iteration ${iteration}`;

      // 1. Compute E-step for all 18 rolls
      const responsibilities = [];
      let sumY = 0, sumB = 0;
      const countY = [0, 0, 0, 0, 0, 0];
      const countB = [0, 0, 0, 0, 0, 0];

      for (let r of rolls) {
        const valIdx = r - 1;
        const likY = pX_Yellow[valIdx] * pZ_Yellow;
        const likB = pX_Blue[valIdx] * pZ_Blue;
        const total = likY + likB;
        const postY = likY / (total + 1e-9);
        const postB = likB / (total + 1e-9);

        responsibilities.push({ roll: r, postY, postB });
        sumY += postY;
        sumB += postB;
        countY[valIdx] += postY;
        countB[valIdx] += postB;
      }

      // Render 18 rolls visual bar
      rollsGrid.innerHTML = responsibilities.map((item, idx) => `
        <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); border-radius: 6px; padding: 6px; text-align: center; font-size: 0.78rem;">
          <div style="font-weight: 800; font-size: 1.05rem; color: #fff;">${item.roll}</div>
          <div style="font-size: 0.65rem; color: #facc15;">Y: ${(item.postY * 100).toFixed(0)}%</div>
          <div style="font-size: 0.65rem; color: #38bdf8;">B: ${(item.postB * 100).toFixed(0)}%</div>
        </div>
      `).join('');

      // Render Tables
      tableYellow.innerHTML = `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <th style="padding: 6px;">Outcome X</th>
          ${[1, 2, 3, 4, 5, 6].map(x => `<th style="padding: 6px; text-align: center;">${x}</th>`).join('')}
        </tr>
        <tr>
          <td style="padding: 6px; font-weight: 600; color: #facc15;">P(X | Yellow)</td>
          ${pX_Yellow.map(p => `<td style="padding: 6px; text-align: center; font-family: monospace;">${p.toFixed(3)}</td>`).join('')}
        </tr>
      `;

      tableBlue.innerHTML = `
        <tr style="border-bottom: 1px solid var(--border-color);">
          <th style="padding: 6px;">Outcome X</th>
          ${[1, 2, 3, 4, 5, 6].map(x => `<th style="padding: 6px; text-align: center;">${x}</th>`).join('')}
        </tr>
        <tr>
          <td style="padding: 6px; font-weight: 600; color: #38bdf8;">P(X | Blue)</td>
          ${pX_Blue.map(p => `<td style="padding: 6px; text-align: center; font-family: monospace;">${p.toFixed(3)}</td>`).join('')}
        </tr>
      `;

      if (priorsBox) {
        priorsBox.innerHTML = `
          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <div><strong>P(Z = Yellow):</strong> <code style="color: #facc15; font-size: 1rem;">${pZ_Yellow.toFixed(3)}</code> (Sum: ${sumY.toFixed(2)})</div>
            <div><strong>P(Z = Blue):</strong> <code style="color: #38bdf8; font-size: 1rem;">${pZ_Blue.toFixed(3)}</code> (Sum: ${sumB.toFixed(2)})</div>
            <div><strong>Total Rolls:</strong> 18</div>
          </div>
        `;
      }
    }

    function stepEM() {
      iteration++;

      // E-step & M-step calculation
      let sumY = 0, sumB = 0;
      const countY = [0, 0, 0, 0, 0, 0];
      const countB = [0, 0, 0, 0, 0, 0];

      for (let r of rolls) {
        const valIdx = r - 1;
        const likY = pX_Yellow[valIdx] * pZ_Yellow;
        const likB = pX_Blue[valIdx] * pZ_Blue;
        const total = likY + likB;
        const postY = likY / (total + 1e-9);
        const postB = likB / (total + 1e-9);

        sumY += postY;
        sumB += postB;
        countY[valIdx] += postY;
        countB[valIdx] += postB;
      }

      // M-step: Update P(X|Yellow) and P(X|Blue)
      for (let i = 0; i < 6; i++) {
        pX_Yellow[i] = countY[i] / (sumY + 1e-9);
        pX_Blue[i] = countB[i] / (sumB + 1e-9);
      }

      // Update Priors
      pZ_Yellow = sumY / rolls.length;
      pZ_Blue = sumB / rolls.length;

      updateView();
    }

    if (btnNext) btnNext.onclick = () => stepEM();
    if (btnAuto) {
      btnAuto.onclick = () => {
        for (let k = 0; k < 10; k++) stepEM();
      };
    }
    if (btnReset) {
      btnReset.onclick = () => {
        iteration = 0;
        pZ_Yellow = 0.5;
        pZ_Blue = 0.5;
        pX_Yellow = [0.4, 0.05, 0.05, 0.05, 0.05, 0.4];
        pX_Blue = [0.3, 0.3, 0.1, 0.1, 0.1, 0.1];
        updateView();
      };
    }

    updateView();
  },

  // 7. Interactive Pipe Choke Detection with Haar Wavelet
  initPipeChokeStudio() {
    const canvas = document.getElementById('pipe-choke-canvas');
    const resultBox = document.getElementById('pipe-choke-results');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const flowData = window.DAY2_DATA.pipeInspection.flowRates; // [0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6]
    const N = flowData.length;

    // Compute 1-level Haar Wavelet Decomposition
    // Low pass: (x[2i] + x[2i+1])/sqrt(2)
    // High pass: (-x[2i] + x[2i+1])/sqrt(2)
    const s2_2 = Math.SQRT1_2;
    const approx = [];
    const detail = [];

    for (let i = 0; i < N; i += 2) {
      const a = (flowData[i] + flowData[i + 1]) * s2_2;
      const d = (-flowData[i] + flowData[i + 1]) * s2_2;
      approx.push(a);
      detail.push(d);
    }

    // Canvas dimensions
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, w, h);

    // Plot Raw Flow Rate Line
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // Draw flow rate
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const x = ((i + 0.5) / N) * w;
      const y = h * 0.75 - (flowData[i] / 1.0) * (h * 0.5);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw points
    for (let i = 0; i < N; i++) {
      const x = ((i + 0.5) / N) * w;
      const y = h * 0.75 - (flowData[i] / 1.0) * (h * 0.5);

      const isChoke = i === 3 || i === 4;
      ctx.fillStyle = isChoke ? '#ef4444' : '#38bdf8';
      ctx.beginPath();
      ctx.arc(x, y, isChoke ? 7 : 4, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.fillText(`${flowData[i]}m/s`, x - 15, y - 10);
      ctx.fillStyle = '#94a3b8';
      ctx.fillText(`t=${i + 1}h`, x - 8, h - 8);
    }

    // Highlight Choke Window
    ctx.fillStyle = 'rgba(239, 68, 68, 0.12)';
    const chokeX1 = (2.5 / N) * w;
    const chokeX2 = (5.5 / N) * w;
    ctx.fillRect(chokeX1, 20, chokeX2 - chokeX1, h - 45);
    ctx.strokeStyle = '#ef4444';
    ctx.setLineDash([3, 3]);
    ctx.strokeRect(chokeX1, 20, chokeX2 - chokeX1, h - 45);
    ctx.setLineDash([]);

    ctx.fillStyle = '#ef4444';
    ctx.font = '11px sans-serif';
    ctx.fillText('CRITICAL CHOKE EVENT (Flow drops to 0.4 & 0.3 m/s)', chokeX1 + 10, 38);

    if (resultBox) {
      resultBox.innerHTML = `
        <h4>Haar Wavelet Evaluation Results:</h4>
        <div class="math-banner">
          \\[ \\text{Detail Subband } D_1 = [${detail.map(d => d.toFixed(3)).join(',\\; ')}] \\]
        </div>
        <p><strong>Conclusion:</strong> In pair 2 (between hour 3 reading 0.8 m/s and hour 4 reading 0.4 m/s), the detail coefficient \\(D_1[1]\\) spikes to <strong style="color: #ef4444;">-0.283</strong>! This sudden high-frequency surge proves that <strong>Haar Wavelet detail coefficients easily detect drainage pipe chokes</strong> automatically!</p>
      `;
      window.renderLatex(resultBox);
    }
  }
};

window.Visualizers = Object.assign(window.Visualizers || {}, window.Day2Visualizers);
