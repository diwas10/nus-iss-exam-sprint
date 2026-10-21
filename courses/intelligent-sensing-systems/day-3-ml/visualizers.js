// Interactive Canvas Visualizers & Simulators for Day 3: Intelligent Sensory Signal Processing using ML
window.Day3Visualizers = {
  // --------------------------------------------------------------------------
  // 1. Interactive PCA & Energy Compaction Simulator (Slides 6–15)
  // --------------------------------------------------------------------------
  initPCAStudio() {
    const canvas = document.getElementById('pca-canvas');
    const slider = document.getElementById('pca-angle-slider');
    const angleVal = document.getElementById('pca-angle-val');
    const varianceMeter = document.getElementById('pca-variance-meter');
    const errorMeter = document.getElementById('pca-error-meter');
    const btnOptimal = document.getElementById('btn-pca-find-optimal');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const pts = (window.DAY3_DATA && window.DAY3_DATA.pcaPoints) || [];

    // Compute optimal angle via SVD/covariance
    let sumXX = 0, sumYY = 0, sumXY = 0;
    pts.forEach(p => {
      sumXX += p[0] * p[0];
      sumYY += p[1] * p[1];
      sumXY += p[0] * p[1];
    });
    // Angle of first eigenvector: 0.5 * atan2(2*sumXY, sumXX - sumYY)
    const optRad = 0.5 * Math.atan2(2 * sumXY, sumXX - sumYY);
    const optDeg = Math.round((optRad * 180 / Math.PI + 360) % 180);

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const deg = parseFloat(slider ? slider.value : 0);
      const rad = deg * Math.PI / 180;
      const ux = Math.cos(rad);
      const uy = Math.sin(rad);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const scale = 38; // pixels per unit

      // Draw grid axes
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, cy); ctx.lineTo(w, cy);
      ctx.moveTo(cx, 0); ctx.lineTo(cx, h);
      ctx.stroke();

      // Axis labels
      ctx.fillStyle = '#64748b';
      ctx.font = '11px sans-serif';
      ctx.fillText('Dimension 1 (e.g. Temperature Sensor)', w - 210, cy - 8);
      ctx.fillText('Dimension 2 (e.g. Vibration Sensor)', cx + 10, 16);

      // Compute variance and reconstruction error
      let totalVar = 0;
      let totalErr = 0;

      pts.forEach(p => {
        const x = p[0];
        const y = p[1];
        const proj = x * ux + y * uy;
        totalVar += proj * proj;

        const projX = proj * ux;
        const projY = proj * uy;
        const errX = x - projX;
        const errY = y - projY;
        totalErr += (errX * errX + errY * errY);

        // Draw projection line (grey dashed)
        const px = cx + x * scale;
        const py = cy - y * scale;
        const projPx = cx + projX * scale;
        const projPy = cy - projY * scale;

        ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(projPx, projPy);
        ctx.stroke();

        // Projected point on basis line
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(projPx, projPy, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Original point
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });

      totalVar /= pts.length;
      totalErr /= pts.length;

      // Draw Basis vector line u1
      const lineLen = Math.max(w, h);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx - ux * lineLen, cy + uy * lineLen);
      ctx.lineTo(cx + ux * lineLen, cy - uy * lineLen);
      ctx.stroke();

      // Draw unit vector arrow
      const uLen = scale * 1.8;
      ctx.strokeStyle = '#34d399';
      ctx.fillStyle = '#34d399';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + ux * uLen, cy - uy * uLen);
      ctx.stroke();
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('u₁', cx + ux * (uLen + 14), cy - uy * (uLen + 14));

      // Draw orthogonal basis line u2 (dashed)
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx + uy * lineLen, cy + ux * lineLen);
      ctx.lineTo(cx - uy * lineLen, cy - ux * lineLen);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#ec4899';
      ctx.fillText('u₂', cx - uy * (uLen + 10), cy - ux * (uLen + 10));

      // Update text displays
      if (angleVal) angleVal.textContent = `${deg}°`;
      if (varianceMeter) varianceMeter.innerHTML = `<strong>Projected Variance:</strong> ${totalVar.toFixed(3)}`;
      if (errorMeter) errorMeter.innerHTML = `<strong>Reconstruction Error:</strong> ${totalErr.toFixed(3)}`;
    }

    if (slider) {
      slider.oninput = draw;
    }
    if (btnOptimal) {
      btnOptimal.onclick = () => {
        if (slider) slider.value = optDeg;
        draw();
      };
    }

    draw();
  },

  // --------------------------------------------------------------------------
  // 2. Autoencoder Latent Space & Reconstruction Studio (Slides 25–34)
  // --------------------------------------------------------------------------
  initAutoencoderStudio() {
    const canvas = document.getElementById('ae-canvas');
    const latentSlider = document.getElementById('ae-latent-slider');
    const latentVal = document.getElementById('ae-latent-val');
    const noiseSlider = document.getElementById('ae-noise-slider');
    const noiseVal = document.getElementById('ae-noise-val');
    const mseMeter = document.getElementById('ae-mse-meter');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const origSignal = (window.DAY3_DATA && window.DAY3_DATA.normalSample) || [];

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const zDim = parseInt(latentSlider ? latentSlider.value : 10);
      const noise = parseFloat(noiseSlider ? noiseSlider.value : 0);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const N = origSignal.length || 70;
      const corrupted = [];
      for (let i = 0; i < N; i++) {
        corrupted.push(origSignal[i] + (Math.random() - 0.5) * 2 * noise);
      }

      // Simulate Autoencoder reconstruction:
      // When z is small (e.g. z=2), only low-frequency components pass through (smoother/blurred).
      // When z is larger (e.g. z=10..20), fine variations are reconstructed.
      // Denoising effect: corrupt input -> reconstruct clean signal!
      const reconstructed = [];
      const windowSize = Math.max(1, Math.round((30 - zDim) / 3));

      for (let i = 0; i < N; i++) {
        let sum = 0, count = 0;
        for (let k = -windowSize; k <= windowSize; k++) {
          const idx = i + k;
          if (idx >= 0 && idx < N) {
            sum += corrupted[idx];
            count++;
          }
        }
        // Blend filtered signal with original according to bottleneck capacity
        const filtered = sum / count;
        const capacity = zDim / 30.0;
        reconstructed.push(filtered * (1 - capacity) + origSignal[i] * capacity);
      }

      // Compute MSE
      let mse = 0;
      for (let i = 0; i < N; i++) {
        const diff = origSignal[i] - reconstructed[i];
        mse += diff * diff;
      }
      mse /= N;

      // Draw zero axis
      const zeroY = h / 2;
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(40, zeroY); ctx.lineTo(w - 20, zeroY);
      ctx.stroke();

      const dx = (w - 70) / (N - 1);
      const scaleY = (h - 60) / 2.5;

      // 1. Draw Corrupted Input (Grey dashed if noise > 0)
      if (noise > 0) {
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const px = 40 + i * dx;
          const py = zeroY - corrupted[i] * scaleY;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // 2. Draw Original Ground Truth x (Cyan)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 40 + i * dx;
        const py = zeroY - origSignal[i] * scaleY;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 3. Draw Reconstructed Output x_hat (Emerald / Amber)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 40 + i * dx;
        const py = zeroY - reconstructed[i] * scaleY;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Legend
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('— Original Sensor Signal x (70 features)', 50, 24);
      ctx.fillStyle = '#10b981';
      ctx.fillText('- - - Reconstructed Signal x̂ (from bottleneck z)', 300, 24);
      if (noise > 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.fillText('··· Noisy Input x̃', 580, 24);
      }

      if (latentVal) latentVal.textContent = `${zDim} Nodes`;
      if (noiseVal) noiseVal.textContent = noise.toFixed(2);
      if (mseMeter) mseMeter.innerHTML = `<strong>Reconstruction Loss (MSE):</strong> ${mse.toFixed(4)}`;
    }

    if (latentSlider) latentSlider.oninput = draw;
    if (noiseSlider) noiseSlider.oninput = draw;

    draw();
  },

  // --------------------------------------------------------------------------
  // 3. Machine Sensor Anomaly Detection Threshold Studio (Slides 37–43)
  // --------------------------------------------------------------------------
  initAnomalyDetectionStudio() {
    const canvas = document.getElementById('anomaly-canvas');
    const threshSlider = document.getElementById('anomaly-thresh-slider');
    const threshVal = document.getElementById('anomaly-thresh-val');
    const btnAuto = document.getElementById('btn-anomaly-auto-thresh');
    const statusBox = document.getElementById('anomaly-status-box');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Generate 60 test sample reconstruction errors with injected anomalies at index 24, 45, 46
    const nSamples = 60;
    const errors = [];
    for (let i = 0; i < nSamples; i++) {
      if (i === 24) {
        errors.push(3.85); // Critical point anomaly (bearing seizure)
      } else if (i === 45 || i === 46) {
        errors.push(2.95 + (i === 46 ? 0.35 : 0)); // Collective anomaly (overheating ramp)
      } else {
        errors.push(0.45 + Math.random() * 0.4); // Normal operational noise
      }
    }

    // Baseline stats
    const normalSubset = errors.filter((_, idx) => idx !== 24 && idx !== 45 && idx !== 46);
    const meanErr = normalSubset.reduce((a, b) => a + b, 0) / normalSubset.length;
    const stdErr = Math.sqrt(normalSubset.reduce((a, b) => a + (b - meanErr) ** 2, 0) / normalSubset.length);
    const autoThresh = Math.round((meanErr + 3 * stdErr) * 100) / 100; // ~1.5

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const thresh = parseFloat(threshSlider ? threshSlider.value : 1.5);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const maxErr = 4.5;
      const bottomY = h - 35;
      const dx = (w - 70) / (nSamples - 1);

      // Draw threshold zone
      const threshY = bottomY - (thresh / maxErr) * (bottomY - 40);
      ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
      ctx.fillRect(40, 30, w - 60, threshY - 30);

      // Threshold line
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(40, threshY); ctx.lineTo(w - 20, threshY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(`Anomaly Threshold τ = ${thresh.toFixed(2)}`, w - 190, threshY - 8);

      // Draw error bars and markers
      let anomaliesCount = 0;
      for (let i = 0; i < nSamples; i++) {
        const px = 40 + i * dx;
        const err = errors[i];
        const py = bottomY - (err / maxErr) * (bottomY - 40);
        const isAnomaly = err > thresh;

        if (isAnomaly) anomaliesCount++;

        // Vertical stem
        ctx.strokeStyle = isAnomaly ? '#ef4444' : '#38bdf8';
        ctx.lineWidth = isAnomaly ? 2 : 1.2;
        ctx.beginPath();
        ctx.moveTo(px, bottomY);
        ctx.lineTo(px, py);
        ctx.stroke();

        // Point circle
        ctx.fillStyle = isAnomaly ? '#ef4444' : '#38bdf8';
        ctx.beginPath();
        ctx.arc(px, py, isAnomaly ? 4.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Pulse ring around anomalies
        if (isAnomaly) {
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
          ctx.beginPath();
          ctx.arc(px, py, 7.5, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = '#ef4444';
          ctx.font = '10px monospace';
          ctx.fillText(`Idx ${i}`, px - 12, py - 10);
        }
      }

      // X-axis baseline
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(40, bottomY); ctx.lineTo(w - 20, bottomY);
      ctx.stroke();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px sans-serif';
      ctx.fillText('Test Sample Index (Time Axis)', w / 2 - 70, h - 12);
      ctx.fillText('Reconstruction Error ||x - x̂||²', 10, 20);

      if (threshVal) threshVal.textContent = thresh.toFixed(2);
      if (statusBox) {
        statusBox.innerHTML = `
          <strong>Evaluation:</strong> Found <span style="color: ${anomaliesCount > 0 ? '#ef4444' : '#10b981'}; font-weight: bold;">${anomaliesCount} Anomalies</span> exceeding threshold τ = ${thresh.toFixed(2)}.<br>
          <small class="text-secondary">Expected anomalies in dataset: Index 24 (Bearing shock) and Index 45–46 (Thermal degradation).</small>
        `;
      }
    }

    if (threshSlider) threshSlider.oninput = draw;
    if (btnAuto) {
      btnAuto.onclick = () => {
        if (threshSlider) threshSlider.value = autoThresh;
        draw();
      };
    }

    draw();
  },

  // --------------------------------------------------------------------------
  // 4. Contrastive Learning Positive/Negative Pair Studio (Slide 35–36 & Q2)
  // --------------------------------------------------------------------------
  initContrastivePairStudio() {
    const canvas = document.getElementById('contrastive-canvas');
    const augSelect = document.getElementById('contrastive-aug-select');
    const simBox = document.getElementById('contrastive-sim-box');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const baseSig = (window.DAY3_DATA && window.DAY3_DATA.normalSample) || [];

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const augType = augSelect ? augSelect.value : 'jitter';

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const N = baseSig.length || 70;
      const posPair = [];
      const negPair = []; // completely different phase or frequency

      for (let i = 0; i < N; i++) {
        // Negative pair: inverted or phase shifted
        negPair.push(-baseSig[i] * 0.8 + 0.2);

        // Positive pair via selected augmentation:
        if (augType === 'jitter') {
          posPair.push(baseSig[i] + (Math.random() - 0.5) * 0.15);
        } else if (augType === 'scale') {
          posPair.push(baseSig[i] * 1.25);
        } else if (augType === 'timewarp') {
          const shiftIdx = Math.min(N - 1, Math.max(0, Math.round(i + 3 * Math.sin(i * 0.1))));
          posPair.push(baseSig[shiftIdx]);
        } else if (augType === 'permutation') {
          posPair.push(i < 35 ? baseSig[i + 10] : baseSig[i - 10]);
        }
      }

      // Compute Cosine Similarities
      let dotPos = 0, normBase = 0, normPos = 0, dotNeg = 0, normNeg = 0;
      for (let i = 0; i < N; i++) {
        dotPos += baseSig[i] * posPair[i];
        dotNeg += baseSig[i] * negPair[i];
        normBase += baseSig[i] * baseSig[i];
        normPos += posPair[i] * posPair[i];
        normNeg += negPair[i] * negPair[i];
      }
      const simPos = dotPos / (Math.sqrt(normBase) * Math.sqrt(normPos) + 1e-8);
      const simNeg = dotNeg / (Math.sqrt(normBase) * Math.sqrt(normNeg) + 1e-8);

      const halfH = h / 2;
      const dx = (w - 60) / (N - 1);

      // Top chart: Anchor x vs Positive Pair x+
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(20, 10, w - 40, halfH - 20);

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 30 + i * dx;
        const py = halfH / 2 - baseSig[i] * 35;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 30 + i * dx;
        const py = halfH / 2 - posPair[i] * 35;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('Anchor x', 35, 26);
      ctx.fillStyle = '#10b981';
      ctx.fillText(`Positive Pair x⁺ (Augmented via ${augType})`, 110, 26);
      ctx.fillStyle = '#facc15';
      ctx.fillText(`Cosine Similarity: ${simPos.toFixed(3)} (High Attraction)`, w - 240, 26);

      // Bottom chart: Anchor x vs Negative Pair x-
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(20, halfH + 10, w - 40, halfH - 20);

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 30 + i * dx;
        const py = halfH + halfH / 2 - baseSig[i] * 35;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 30 + i * dx;
        const py = halfH + halfH / 2 - negPair[i] * 35;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.fillText('Anchor x', 35, halfH + 26);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('Negative Pair x⁻ (Different Machine State)', 110, halfH + 26);
      ctx.fillStyle = '#f87171';
      ctx.fillText(`Cosine Similarity: ${simNeg.toFixed(3)} (Strong Repulsion)`, w - 240, halfH + 26);

      if (simBox) {
        simBox.innerHTML = `
          <strong>Contrastive Objective (InfoNCE Loss):</strong> Pull \\((x, x^+)\\) close in latent space (Sim: <span style="color: #10b981;">${simPos.toFixed(3)}</span>), while pushing \\((x, x^-)\\) far apart (Sim: <span style="color: #ef4444;">${simNeg.toFixed(3)}</span>).
        `;
        window.renderLatex(simBox);
      }
    }

    if (augSelect) augSelect.onchange = draw;

    draw();
  }
};

window.Visualizers = Object.assign(window.Visualizers || {}, window.Day3Visualizers);
