// Interactive Canvas & Chart Visualizers for NUS ISS Learning Hub

window.Visualizers = {
  // -------------------------------------------------------------
  // 1. Wave Studio & Audio Synthesizer Visualizer
  // -------------------------------------------------------------
  initWaveStudio: function() {
    const canvas = document.getElementById('wave-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sliderFreq = document.getElementById('slider-freq');
    const sliderAmp = document.getElementById('slider-amp');
    const selectWave = document.getElementById('select-waveform');
    const lblFreq = document.getElementById('freq-val');
    const lblAmp = document.getElementById('amp-val');
    const btnAudio = document.getElementById('btn-audio-play');
    const audioBtnText = document.getElementById('audio-btn-text');

    let freq = parseFloat(sliderFreq.value);
    let amp = parseFloat(sliderAmp.value);
    let waveType = selectWave.value;
    let animTime = 0;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      // Draw Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center Axis
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      ctx.stroke();

      // Draw Waveform
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.shadowColor = '#0ea5e9';
      ctx.shadowBlur = 10;
      ctx.beginPath();

      const displayCycles = (freq / 440) * 4;
      const scaleAmp = (h / 2.5) * (amp / 2.0);

      for (let px = 0; px < w; px++) {
        const t = (px / w) * displayCycles * 2 * Math.PI + animTime;
        let yVal = 0;

        if (waveType === 'sine') {
          yVal = Math.sin(t);
        } else if (waveType === 'square') {
          yVal = Math.sin(t) >= 0 ? 1 : -1;
        } else if (waveType === 'sawtooth') {
          yVal = 2 * ((t / (2 * Math.PI)) - Math.floor(0.5 + (t / (2 * Math.PI))));
        } else if (waveType === 'triangle') {
          yVal = (2 / Math.PI) * Math.asin(Math.sin(t));
        }

        const py = centerY - yVal * scaleAmp;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animTime += 0.05;
      requestAnimationFrame(render);
    }

    render();

    // Event listeners
    sliderFreq.addEventListener('input', (e) => {
      freq = parseFloat(e.target.value);
      lblFreq.innerText = `${freq} Hz`;
      if (window.soundSynth) window.soundSynth.setFrequency(freq);
    });

    sliderAmp.addEventListener('input', (e) => {
      amp = parseFloat(e.target.value);
      lblAmp.innerText = amp.toFixed(2);
      if (window.soundSynth) window.soundSynth.setVolume(amp * 0.15);
    });

    selectWave.addEventListener('change', (e) => {
      waveType = e.target.value;
      if (window.soundSynth) window.soundSynth.setWaveform(waveType);
    });

    btnAudio.addEventListener('click', () => {
      const active = window.soundSynth.toggle(freq, waveType, amp * 0.15);
      if (active) {
        btnAudio.classList.add('btn-active');
        audioBtnText.innerText = 'Stop Audio';
      } else {
        btnAudio.classList.remove('btn-active');
        audioBtnText.innerText = 'Hear This Tone';
      }
    });
  },

  // -------------------------------------------------------------
  // 2. Interactive Aliasing Simulator
  // -------------------------------------------------------------
  initAliasingSimulator: function() {
    const canvas = document.getElementById('aliasing-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sliderAnalogFreq = document.getElementById('slider-analog-freq');
    const sliderSampleRate = document.getElementById('slider-sample-rate');
    const lblAnalogFreq = document.getElementById('analog-freq-val');
    const lblSampleRate = document.getElementById('sample-rate-val');
    const statusBox = document.getElementById('aliasing-status-box');

    function draw() {
      const f = parseFloat(sliderAnalogFreq.value);
      const fs = parseFloat(sliderSampleRate.value);
      lblAnalogFreq.innerText = `${f} Hz`;
      lblSampleRate.innerText = `${fs} Hz`;

      const nyquist = fs / 2;
      const isAliased = f > nyquist;

      // Status text
      if (isAliased) {
        // Apparent folded frequency: |f - k*fs|
        const apparentF = Math.abs(f - Math.round(f / fs) * fs);
        statusBox.className = 'danger-box mt-2';
        statusBox.innerHTML = `
          <strong><i data-lucide="alert-octagon"></i> ALIASING OCCURRED!</strong>
          Signal frequency \\(f = ${f}\\text{ Hz}\\) exceeds the Nyquist limit \\(f_N = f_s / 2 = ${nyquist.toFixed(1)}\\text{ Hz}\\).<br>
          The reconstructed signal folds down into a <strong>phantom frequency of ${apparentF.toFixed(1)} Hz</strong>! Information is permanently destroyed!
        `;
      } else {
        statusBox.className = 'success-box mt-2';
        statusBox.innerHTML = `
          <strong><i data-lucide="check-circle"></i> SAFE SAMPLING (Nyquist Satisfied)</strong>
          Sampling rate \\(f_s = ${fs}\\text{ Hz} \\ge 2 \\times ${f}\\text{ Hz}\\). The reconstructed digital signal faithfully represents the continuous analog reality!
        `;
      }
      if (window.renderLatex) window.renderLatex(statusBox);
      if (window.lucide) window.lucide.createIcons();

      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;
      const amp = h * 0.35;
      const duration = 1.0; // 1 second view window

      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Center axis
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(w, centerY);
      ctx.stroke();

      // 1. Draw Original True Analog Wave (Smooth Light Blue)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      for (let px = 0; px < w; px++) {
        const t = (px / w) * duration;
        const y = centerY - amp * Math.sin(2 * Math.PI * f * t);
        if (px === 0) ctx.moveTo(px, y);
        else ctx.lineTo(px, y);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Discrete Sample Points
      const numSamples = Math.floor(fs * duration);
      const samplePoints = [];
      for (let s = 0; s <= numSamples; s++) {
        const t = s / fs;
        if (t <= duration) {
          const px = (t / duration) * w;
          const py = centerY - amp * Math.sin(2 * Math.PI * f * t);
          samplePoints.push({ x: px, y: py });
        }
      }

      // 3. Draw Reconstructed Wave (Connected linear or smoothed points)
      ctx.strokeStyle = isAliased ? '#ef4444' : '#10b981';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < samplePoints.length; i++) {
        const pt = samplePoints[i];
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      // Draw Dots
      for (let i = 0; i < samplePoints.length; i++) {
        const pt = samplePoints[i];
        ctx.fillStyle = isAliased ? '#ef4444' : '#10b981';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Legend
      ctx.font = '12px Inter, sans-serif';
      ctx.fillStyle = 'rgba(56, 189, 248, 0.8)';
      ctx.fillText(`-- True Analog Wave (${f} Hz)`, 15, 25);
      ctx.fillStyle = isAliased ? '#ef4444' : '#10b981';
      ctx.fillText(`● Reconstructed Digital Samples (${fs} Hz)`, 220, 25);
    }

    sliderAnalogFreq.addEventListener('input', draw);
    sliderSampleRate.addEventListener('input', draw);
    draw();
  },

  // -------------------------------------------------------------
  // 3. Stroboscopic Wagon Wheel Simulator
  // -------------------------------------------------------------
  initWagonWheel: function() {
    const canvas = document.getElementById('wagon-wheel-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sliderSpeed = document.getElementById('slider-wheel-speed');
    const sliderFps = document.getElementById('slider-camera-fps');
    const lblSpeed = document.getElementById('wheel-rpm-val');
    const lblFps = document.getElementById('camera-fps-val');

    let currentAngle = 0;
    let lastFrameTime = performance.now();
    let sampleTimer = 0;
    let sampledAngle = 0;

    function render(now) {
      const dt = (now - lastFrameTime) / 1000;
      lastFrameTime = now;

      const speedRevSec = parseFloat(sliderSpeed.value);
      const cameraFps = parseFloat(sliderFps.value);
      lblSpeed.innerText = `${speedRevSec} rev/s`;
      lblFps.innerText = `${cameraFps} fps`;

      // True physical angle advances continuously
      currentAngle += 2 * Math.PI * speedRevSec * dt;

      // Camera shutter captures discrete frames
      sampleTimer += dt;
      const frameInterval = 1.0 / cameraFps;
      if (sampleTimer >= frameInterval) {
        sampledAngle = currentAngle;
        sampleTimer %= frameInterval;
      }

      // Draw Wheel
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = 95;

      ctx.clearRect(0, 0, w, h);

      // Outer tire rim
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      // Draw 6 Spokes at sampled camera angle
      const numSpokes = 6;
      for (let s = 0; s < numSpokes; s++) {
        const spokeAngle = sampledAngle + (s * 2 * Math.PI) / numSpokes;
        const x2 = cx + radius * Math.cos(spokeAngle);
        const y2 = cy + radius * Math.sin(spokeAngle);

        ctx.strokeStyle = (s === 0) ? '#f43f5e' : '#cbd5e1'; // Red marker spoke!
        ctx.lineWidth = (s === 0) ? 4 : 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Center hub
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, 2 * Math.PI);
      ctx.fill();

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  },

  // -------------------------------------------------------------
  // 4. Interactive Peak Finder Sandbox (Real ECG)
  // -------------------------------------------------------------
  initPeakFinder: function() {
    const canvas = document.getElementById('peak-canvas');
    if (!canvas || !window.ECG_1D) return;
    const ctx = canvas.getContext('2d');

    const selectStrategy = document.getElementById('select-peak-strategy');
    const sliderParam = document.getElementById('slider-peak-param');
    const lblSlider = document.getElementById('lbl-param-slider');
    const valSlider = document.getElementById('val-param-slider');
    const lblCount = document.getElementById('detected-peaks-count');
    const badgeQuality = document.getElementById('peak-quality-badge');

    const ecg = window.ECG_1D; // 1440 samples
    const n = ecg.length;

    function updateControls() {
      const strategy = selectStrategy.value;
      if (strategy === 'raw') {
        sliderParam.style.display = 'none';
        lblSlider.style.display = 'none';
      } else {
        sliderParam.style.display = 'block';
        lblSlider.style.display = 'block';
        if (strategy === 'height') {
          sliderParam.min = '-0.5';
          sliderParam.max = '2.5';
          sliderParam.step = '0.05';
          sliderParam.value = '1.0';
          lblSlider.innerHTML = `Height Threshold: <span id="val-param-slider" class="ctrl-val">1.00</span>`;
        } else if (strategy === 'distance') {
          sliderParam.min = '10';
          sliderParam.max = '300';
          sliderParam.step = '10';
          sliderParam.value = '100';
          lblSlider.innerHTML = `Distance Window: <span id="val-param-slider" class="ctrl-val">100 pts</span>`;
        } else if (strategy === 'prominence') {
          sliderParam.min = '0.1';
          sliderParam.max = '1.5';
          sliderParam.step = '0.05';
          sliderParam.value = '0.5';
          lblSlider.innerHTML = `Prominence Threshold: <span id="val-param-slider" class="ctrl-val">0.50</span>`;
        }
      }
      render();
    }

    function render() {
      const strategy = selectStrategy.value;
      const paramVal = parseFloat(sliderParam.value);
      const valSpan = document.getElementById('val-param-slider');
      if (valSpan) valSpan.innerText = paramVal.toFixed(2);

      let peakIndices = [];
      if (strategy === 'raw') {
        // Find every local maximum (demonstrating false positives)
        for (let i = 1; i < n - 1; i++) {
          if (ecg[i] > ecg[i - 1] && ecg[i] >= ecg[i + 1]) {
            peakIndices.push(i);
          }
        }
      } else if (strategy === 'height') {
        peakIndices = window.SignalEngine.findPeaks(ecg, { height: paramVal });
      } else if (strategy === 'distance') {
        peakIndices = window.SignalEngine.findPeaks(ecg, { distance: paramVal });
      } else if (strategy === 'prominence') {
        peakIndices = window.SignalEngine.findPeaks(ecg, { prominence: paramVal });
      }

      // Update count & quality badge
      lblCount.innerText = peakIndices.length;
      if (peakIndices.length === 7) {
        badgeQuality.className = 'badge-success';
        badgeQuality.innerText = 'Perfect Match (All 7 R-Peaks Detected!)';
      } else if (peakIndices.length > 20) {
        badgeQuality.className = 'badge-danger';
        badgeQuality.innerText = `False Positive Trap (${peakIndices.length} Noise Spikes!)`;
      } else if (peakIndices.length < 7) {
        badgeQuality.className = 'badge-warning';
        badgeQuality.innerText = `Under-detection (Missed Real Beats)`;
      } else {
        badgeQuality.className = 'badge-warning';
        badgeQuality.innerText = `Sub-optimal (${peakIndices.length} peaks)`;
      }

      // Draw Chart
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Scale signal to canvas
      let minVal = -0.7;
      let maxVal = 2.8;
      const scaleY = (v) => h - 25 - ((v - minVal) / (maxVal - minVal)) * (h - 45);
      const scaleX = (i) => (i / (n - 1)) * (w - 30) + 15;

      // Axis zero line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      ctx.moveTo(15, scaleY(0));
      ctx.lineTo(w - 15, scaleY(0));
      ctx.stroke();

      // Threshold line if height is chosen
      if (strategy === 'height') {
        ctx.strokeStyle = '#eab308';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(15, scaleY(paramVal));
        ctx.lineTo(w - 15, scaleY(paramVal));
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Draw ECG Curve
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const x = scaleX(i);
        const y = scaleY(ecg[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Detected Peaks
      for (let p = 0; p < peakIndices.length; p++) {
        const idx = peakIndices[p];
        const x = scaleX(idx);
        const y = scaleY(ecg[idx]);

        // Red cross marker
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2.5;
        const s = 6;
        ctx.beginPath();
        ctx.moveTo(x - s, y - s);
        ctx.lineTo(x + s, y + s);
        ctx.moveTo(x + s, y - s);
        ctx.lineTo(x - s, y + s);
        ctx.stroke();
      }
    }

    selectStrategy.addEventListener('change', updateControls);
    sliderParam.addEventListener('input', render);
    updateControls();
  },

  // -------------------------------------------------------------
  // 5. Interactive Baseline Corrector (arPLS Lambda Tuner)
  // -------------------------------------------------------------
  initBaselineCorrector: function() {
    const canvas = document.getElementById('baseline-canvas');
    if (!canvas || !window.ECG_1D) return;
    const ctx = canvas.getContext('2d');

    const sliderLambda = document.getElementById('slider-lambda');
    const selectView = document.getElementById('select-baseline-view');
    const lblLambda = document.getElementById('lambda-val');
    const explBox = document.getElementById('lambda-explanation-box');

    const ecg = window.ECG_1D;
    const n = ecg.length;

    function render() {
      const lambdaPow = parseInt(sliderLambda.value);
      const viewMode = selectView.value;

      const labels = {
        2: "10² (Far Too Flexible)",
        3: "10³ (Under-smoothing)",
        4: "10⁴ (Near Optimal)",
        5: "10⁵ (Optimal for ECG)",
        6: "10⁶ (Slightly Stiff)",
        7: "10⁷ (Too Rigid)",
        8: "10⁸ (Flat Line)"
      };
      lblLambda.innerText = labels[lambdaPow] || `10^${lambdaPow}`;

      if (lambdaPow <= 3) {
        explBox.className = 'danger-box mt-2';
        explBox.innerHTML = `<strong><i data-lucide="alert-triangle"></i> Under-smoothing (\\(\\lambda = 10^${lambdaPow}\\)):</strong> Baseline penalty is too weak! The baseline bends directly into the heartbeat R-peaks. Subtracting it eats away your real heartbeats!`;
      } else if (lambdaPow === 4 || lambdaPow === 5) {
        explBox.className = 'success-box mt-2';
        explBox.innerHTML = `<strong><i data-lucide="check-circle"></i> Optimal Stiffness (\\(\\lambda = 10^${lambdaPow}\\)):</strong> The baseline hugs the slow respiration drift and passes smoothly under the heartbeats without distorting ECG morphology!`;
      } else {
        explBox.className = 'warning-box mt-2';
        explBox.innerHTML = `<strong><i data-lucide="info"></i> Over-smoothing (\\(\\lambda = 10^${lambdaPow}\\)):</strong> Baseline is too stiff! It cannot bend with the breathing wander, leaving baseline drift in the corrected signal.`;
      }
      if (window.renderLatex) window.renderLatex(explBox);
      if (window.lucide) window.lucide.createIcons();

      const baseline = window.SignalEngine.getSimulatedBaseline(ecg, lambdaPow);

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const minVal = -1.0;
      const maxVal = 2.8;
      const scaleY = (v) => h - 25 - ((v - minVal) / (maxVal - minVal)) * (h - 45);
      const scaleX = (i) => (i / (n - 1)) * (w - 30) + 15;

      // Zero line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      ctx.moveTo(15, scaleY(0));
      ctx.lineTo(w - 15, scaleY(0));
      ctx.stroke();

      if (viewMode === 'both') {
        // Raw ECG
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const x = scaleX(i);
          const y = scaleY(ecg[i]);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Estimated Baseline (Orange)
        ctx.strokeStyle = '#f97316';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const x = scaleX(i);
          const y = scaleY(baseline[i]);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Legend
        ctx.font = '12px Inter, sans-serif';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('— Raw ECG Signal', 20, 25);
        ctx.fillStyle = '#f97316';
        ctx.fillText('— Estimated arPLS Baseline (z)', 160, 25);
      } else {
        // Cleaned ECG (raw - baseline)
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          const x = scaleX(i);
          const y = scaleY(ecg[i] - baseline[i]);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.font = '12px Inter, sans-serif';
        ctx.fillStyle = '#10b981';
        ctx.fillText('— Baseline Corrected Clean ECG (Zero Grounded)', 20, 25);
      }
    }

    sliderLambda.addEventListener('input', render);
    selectView.addEventListener('change', render);
    render();
  },

  // -------------------------------------------------------------
  // 6. Interactive Dynamic Time Warping (DTW) Studio
  // -------------------------------------------------------------
  initDTWStudio: function() {
    const canvasMatrix = document.getElementById('dtw-matrix-canvas');
    const canvasWarp = document.getElementById('dtw-warp-canvas');
    if (!canvasMatrix || !canvasWarp) return;

    const selectDataset = document.getElementById('select-dtw-dataset');
    const lblCost = document.getElementById('dtw-cost-metric');
    const lblPathLen = document.getElementById('dtw-path-len-metric');
    const badgeMorph = document.getElementById('dtw-morphology-badge');

    const ctxMatrix = canvasMatrix.getContext('2d');
    const ctxWarp = canvasWarp.getContext('2d');

    function loadSignals(choice) {
      if (choice === 'toy') {
        // Module 3, Slide 16 toy sequences
        return {
          s1: [1, 1, 2, 3, 2, 0],
          s2: [0.5, 0.5, 1, 1.5, 1, 1],
          label1: "Toy X",
          label2: "Toy Y"
        };
      }

      // ECG Segments from ecg2D.csv
      const ecg = window.ECG_2D ? window.ECG_2D[1] : window.ECG_1D;
      const peaks = window.SignalEngine.findPeaks(ecg, { prominence: 0.5 });
      const segs = window.SignalEngine.extractECG(ecg, peaks, 15);

      if (choice === 'ecg_2_3') {
        return { s1: segs[1], s2: segs[2], label1: "ECG Beat 2", label2: "ECG Beat 3" };
      } else if (choice === 'ecg_1_2') {
        return { s1: segs[0], s2: segs[1], label1: "ECG Beat 1", label2: "ECG Beat 2" };
      } else if (choice === 'ecg_2_6') {
        return { s1: segs[1], s2: segs[5], label1: "ECG Beat 2", label2: "ECG Beat 6" };
      } else if (choice === 'gdp_us_cn') {
        return {
          s1: window.GDP_DATA.us.map(v => v / 1000),
          s2: window.GDP_DATA.china.map(v => v / 1000),
          label1: "US GDP ($T)",
          label2: "China GDP ($T)"
        };
      } else if (choice === 'gdp_cn_jp') {
        return {
          s1: window.GDP_DATA.china.map(v => v / 1000),
          s2: window.GDP_DATA.japan.map(v => v / 1000),
          label1: "China GDP ($T)",
          label2: "Japan GDP ($T)"
        };
      }
      return { s1: segs[1], s2: segs[2], label1: "Beat 2", label2: "Beat 3" };
    }

    function render() {
      const choice = selectDataset.value;
      const { s1, s2, label1, label2 } = loadSignals(choice);

      // Compute DTW
      const dists = window.SignalEngine.computeDists(s1, s2);
      const acuCost = window.SignalEngine.computeAcuCost(dists);
      const { path, cost } = window.SignalEngine.doDTW(s1, s2, dists, acuCost);

      lblCost.innerText = cost.toFixed(4);
      lblPathLen.innerText = `${path.length} steps`;

      if (cost < 1.5) {
        badgeMorph.className = 'badge-success';
        badgeMorph.innerText = 'High Similarity (Normal Sinus Rhythm)';
      } else if (cost < 5.0) {
        badgeMorph.className = 'badge-warning';
        badgeMorph.innerText = 'Moderate Variation';
      } else {
        badgeMorph.className = 'badge-danger';
        badgeMorph.innerText = 'Severe Dissimilarity (Morphological Anomaly)';
      }

      // 1. Draw Cost Matrix Heatmap
      const n = s2.length;
      const m = s1.length;
      const mw = canvasMatrix.width;
      const mh = canvasMatrix.height;
      ctxMatrix.clearRect(0, 0, mw, mh);

      const maxCost = acuCost[n - 1][m - 1] || 1;
      const cellW = mw / m;
      const cellH = mh / n;

      // Draw Heatmap (Y inverted to start from bottom as in slide 19-20)
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          const ratio = Math.min(1.0, acuCost[i][j] / maxCost);
          // Heatmap color: dark blue to cyan to red
          const r = Math.floor(ratio * 240);
          const g = Math.floor((1 - ratio) * 120);
          const b = Math.floor((1 - ratio) * 220);
          ctxMatrix.fillStyle = `rgb(${r}, ${g}, ${b})`;

          const px = j * cellW;
          const py = mh - (i + 1) * cellH;
          ctxMatrix.fillRect(px, py, Math.ceil(cellW), Math.ceil(cellH));
        }
      }

      // Draw Warping Path (White Line)
      ctxMatrix.strokeStyle = '#ffffff';
      ctxMatrix.lineWidth = 2.5;
      ctxMatrix.shadowColor = '#000000';
      ctxMatrix.shadowBlur = 4;
      ctxMatrix.beginPath();

      for (let p = 0; p < path.length; p++) {
        const pj = path[p][0];
        const pi = path[p][1];
        const px = pj * cellW + cellW / 2;
        const py = mh - (pi * cellH + cellH / 2);
        if (p === 0) ctxMatrix.moveTo(px, py);
        else ctxMatrix.lineTo(px, py);
      }
      ctxMatrix.stroke();
      ctxMatrix.shadowBlur = 0;

      // 2. Draw Elastic Warp Point-to-Point Connections (pltWarp Slide 33)
      const ww = canvasWarp.width;
      const wh = canvasWarp.height;
      ctxWarp.clearRect(0, 0, ww, wh);

      // Find min and max across both signals
      let minVal = Math.min(...s1, ...s2);
      let maxVal = Math.max(...s1, ...s2);
      if (minVal === maxVal) { minVal -= 1; maxVal += 1; }

      const padX = 35;
      const padY = 30;
      const scaleWarpY = (v) => wh - padY - ((v - minVal) / (maxVal - minVal)) * (wh - 2 * padY);
      const scaleWarpX1 = (idx) => padX + (idx / (s1.length - 1)) * (ww - 2 * padX);
      const scaleWarpX2 = (idx) => padX + (idx / (s2.length - 1)) * (ww - 2 * padX);

      // Draw Warping Alignment Ties (Yellow/Purple Lines)
      ctxWarp.strokeStyle = 'rgba(251, 191, 36, 0.45)';
      ctxWarp.lineWidth = 1.2;
      for (let p = 0; p < path.length; p += Math.max(1, Math.floor(path.length / 100))) {
        const j = path[p][0];
        const i = path[p][1];
        ctxWarp.beginPath();
        ctxWarp.moveTo(scaleWarpX1(j), scaleWarpY(s1[j]));
        ctxWarp.lineTo(scaleWarpX2(i), scaleWarpY(s2[i]));
        ctxWarp.stroke();
      }

      // Draw Signal 1 (Blue)
      ctxWarp.strokeStyle = '#38bdf8';
      ctxWarp.lineWidth = 2.5;
      ctxWarp.beginPath();
      for (let j = 0; j < s1.length; j++) {
        const x = scaleWarpX1(j);
        const y = scaleWarpY(s1[j]);
        if (j === 0) ctxWarp.moveTo(x, y);
        else ctxWarp.lineTo(x, y);
      }
      ctxWarp.stroke();

      // Draw Signal 2 (Orange)
      ctxWarp.strokeStyle = '#fb923c';
      ctxWarp.lineWidth = 2.5;
      ctxWarp.beginPath();
      for (let i = 0; i < s2.length; i++) {
        const x = scaleWarpX2(i);
        const y = scaleWarpY(s2[i]);
        if (i === 0) ctxWarp.moveTo(x, y);
        else ctxWarp.lineTo(x, y);
      }
      ctxWarp.stroke();

      // Legend
      ctxWarp.font = '12px Inter, sans-serif';
      ctxWarp.fillStyle = '#38bdf8';
      ctxWarp.fillText(`● ${label1}`, 20, 20);
      ctxWarp.fillStyle = '#fb923c';
      ctxWarp.fillText(`■ ${label2}`, 180, 20);
      ctxWarp.fillStyle = '#f59e0b';
      ctxWarp.fillText(`| Elastic Warp Ties`, 320, 20);
    }

    selectDataset.addEventListener('change', render);
    render();
  }
};
