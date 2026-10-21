// Interactive Canvas Visualizers & Simulators for Day 4: Sense Making from Sensory Data
window.Day4Visualizers = {
  // --------------------------------------------------------------------------
  // 1. Multimodal Sensor Fusion Playground (Slides 14–20)
  // --------------------------------------------------------------------------
  initFusionPlayground() {
    const canvas = document.getElementById('fusion-canvas');
    const fusionModeSelect = document.getElementById('fusion-mode-select');
    const noiseVisionSlider = document.getElementById('fusion-noise-vision');
    const noiseAudioSlider = document.getElementById('fusion-noise-audio');
    const confidenceMeter = document.getElementById('fusion-confidence-meter');
    const statusBox = document.getElementById('fusion-status-box');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const mode = fusionModeSelect ? fusionModeSelect.value : 'late';
      const noiseVis = parseFloat(noiseVisionSlider ? noiseVisionSlider.value : 0);
      const noiseAud = parseFloat(noiseAudioSlider ? noiseAudioSlider.value : 0);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Baseline clean confidence scores for ground truth activity (e.g. Walking Up Stairs)
      // Vision: 0.92, Audio: 0.85, Inertial: 0.89
      const cInertial = 0.89;
      const cVision = Math.max(0.1, 0.92 - noiseVis * 0.85);
      const cAudio = Math.max(0.1, 0.85 - noiseAud * 0.75);

      let finalConf = 0;
      let fusionExplanation = '';

      if (mode === 'early') {
        // Early fusion: concatenates features. If vision or audio is corrupted by noise,
        // the noise corrupts the entire unified feature vector, dropping accuracy significantly.
        finalConf = (cInertial + cVision + cAudio) / 3.0 * (1 - 0.25 * (noiseVis + noiseAud));
        fusionExplanation = '<strong>Early Fusion (Tightly Coupled):</strong> Raw features concatenated into a single vector. Heavy sensor noise propagates into the entire feature space, degrading model prediction.';
      } else if (mode === 'intermediate') {
        // Intermediate fusion: shared cross-attention representation layer
        finalConf = Math.min(0.96, Math.max(cInertial, (cInertial * 0.5 + cVision * 0.25 + cAudio * 0.25)));
        fusionExplanation = '<strong>Intermediate Fusion (Loosely Coupled):</strong> Latent embeddings fused via cross-attention. The network learns to down-weight corrupted sensor tokens dynamically.';
      } else {
        // Late fusion: decision-level weighted voting
        // Sensor confidence dynamically weights votes: w_i = 1 / (1 + noise)
        const wInertial = 1.0;
        const wVis = 1.0 / (1.0 + noiseVis * 4);
        const wAud = 1.0 / (1.0 + noiseAud * 4);
        const totalW = wInertial + wVis + wAud;
        finalConf = (cInertial * wInertial + cVision * wVis + cAudio * wAud) / totalW;
        fusionExplanation = '<strong>Late Fusion (Uncoupled Decision Ensemble):</strong> Each modality predicts independently. The system applies dynamic confidence-gating, completely isolating noisy sensors!';
      }

      // Draw 3 Modality columns
      const colW = (w - 80) / 3;
      const mods = [
        { name: '1. Inertial Sensor (IMU)', conf: cInertial, color: '#38bdf8', noise: 0, desc: 'Clean Acceleration & Gyro' },
        { name: '2. Vision Camera (RGB)', conf: cVision, color: '#10b981', noise: noiseVis, desc: noiseVis > 0.4 ? 'Severely Glared / Occluded' : 'Clear Scene View' },
        { name: '3. Acoustic Mic (Sound)', conf: cAudio, color: '#f59e0b', noise: noiseAud, desc: noiseAud > 0.4 ? 'Heavy Factory Background Noise' : 'Clear Footstep Acoustics' }
      ];

      mods.forEach((m, idx) => {
        const x = 30 + idx * (colW + 10);
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(x, 20, colW, 110);

        ctx.strokeStyle = m.noise > 0.4 ? '#ef4444' : m.color;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x, 20, colW, 110);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(m.name, x + 10, 42);

        ctx.fillStyle = m.noise > 0.4 ? '#f87171' : '#94a3b8';
        ctx.font = '10px sans-serif';
        ctx.fillText(m.desc, x + 10, 60);

        // Confidence bar
        ctx.fillStyle = '#334155';
        ctx.fillRect(x + 10, 75, colW - 20, 14);
        ctx.fillStyle = m.noise > 0.4 ? '#ef4444' : m.color;
        ctx.fillRect(x + 10, 75, (colW - 20) * m.conf, 14);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText(`${(m.conf * 100).toFixed(0)}% Conf`, x + 14, 86);
      });

      // Draw Fusion Hub Box below
      const hubY = 160;
      ctx.fillStyle = '#0b1329';
      ctx.fillRect(30, hubY, w - 60, 95);
      ctx.strokeStyle = finalConf > 0.75 ? '#10b981' : '#f59e0b';
      ctx.lineWidth = 2;
      ctx.strokeRect(30, hubY, w - 60, 95);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(`MULTIMODAL FUSION DECISION (${mode.toUpperCase()} FUSION)`, 45, hubY + 28);

      ctx.font = '12px sans-serif';
      ctx.fillStyle = finalConf > 0.75 ? '#34d399' : '#f87171';
      ctx.fillText(`Predicted Activity: Walking Up Stairs (Ensemble Confidence: ${(finalConf * 100).toFixed(1)}%)`, 45, hubY + 54);

      // Draw overall confidence progress bar
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(45, hubY + 68, w - 90, 14);
      ctx.fillStyle = finalConf > 0.75 ? '#10b981' : '#f59e0b';
      ctx.fillRect(45, hubY + 68, (w - 90) * Math.min(1.0, finalConf), 14);

      if (confidenceMeter) confidenceMeter.innerHTML = `<strong>Ensemble Confidence:</strong> ${(finalConf * 100).toFixed(1)}%`;
      if (statusBox) statusBox.innerHTML = fusionExplanation;
    }

    if (fusionModeSelect) fusionModeSelect.onchange = draw;
    if (noiseVisionSlider) noiseVisionSlider.oninput = draw;
    if (noiseAudioSlider) noiseAudioSlider.oninput = draw;

    draw();
  },

  // --------------------------------------------------------------------------
  // 2. Sensor Data Augmentation Lab (Slides 12–13)
  // --------------------------------------------------------------------------
  initAugmentationLab() {
    const canvas = document.getElementById('aug-canvas');
    const jitterSlider = document.getElementById('aug-jitter-slider');
    const jitterVal = document.getElementById('aug-jitter-val');
    const scaleSlider = document.getElementById('aug-scale-slider');
    const scaleVal = document.getElementById('aug-scale-val');
    const warpSlider = document.getElementById('aug-warp-slider');
    const warpVal = document.getElementById('aug-warp-val');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const origAcc = (window.DAY4_DATA && window.DAY4_DATA.accX) || [];

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const jitter = parseFloat(jitterSlider ? jitterSlider.value : 0);
      const scale = parseFloat(scaleSlider ? scaleSlider.value : 1.0);
      const warp = parseFloat(warpSlider ? warpSlider.value : 0);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const N = origAcc.length || 100;
      const augmented = [];

      for (let i = 0; i < N; i++) {
        // Time warp mapping: warp index with non-linear distortion
        const warpOffset = warp * Math.sin(i * 0.15) * 8;
        const warpedIdx = Math.min(N - 1, Math.max(0, Math.round(i + warpOffset)));
        const val = origAcc[warpedIdx] * scale + (Math.random() - 0.5) * jitter;
        augmented.push(val);
      }

      const zeroY = h / 2;
      const dx = (w - 60) / (N - 1);
      const scaleY = 45;

      // Draw zero axis
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(30, zeroY); ctx.lineTo(w - 30, zeroY);
      ctx.stroke();

      // Draw Original (Cyan dashed)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 30 + i * dx;
        const py = zeroY - origAcc[i] * scaleY;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Augmented (Emerald solid)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 30 + i * dx;
        const py = zeroY - augmented[i] * scaleY;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Legend
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('- - - Original Sensor Stream x (100 samples)', 40, 24);
      ctx.fillStyle = '#10b981';
      ctx.fillText('— Augmented Stream x_aug (Jitter + Scaling + Time-Warping)', 320, 24);

      if (jitterVal) jitterVal.textContent = jitter.toFixed(2);
      if (scaleVal) scaleVal.textContent = scale.toFixed(2) + 'x';
      if (warpVal) warpVal.textContent = warp.toFixed(2);
    }

    if (jitterSlider) jitterSlider.oninput = draw;
    if (scaleSlider) scaleSlider.oninput = draw;
    if (warpSlider) warpSlider.oninput = draw;

    draw();
  },

  // --------------------------------------------------------------------------
  // 3. Multimodal Temporal Alignment & DTW Studio (Slides 21–25)
  // --------------------------------------------------------------------------
  initMultimodalAlignmentStudio() {
    const canvas = document.getElementById('align-canvas');
    const lagSlider = document.getElementById('align-lag-slider');
    const lagVal = document.getElementById('align-lag-val');
    const alignMeter = document.getElementById('align-score-meter');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rawAcc = (window.DAY4_DATA && window.DAY4_DATA.accX) || [];
    const rawFlow = (window.DAY4_DATA && window.DAY4_DATA.videoFlow) || [];

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const lag = parseInt(lagSlider ? lagSlider.value : 0);

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      const N = Math.min(rawAcc.length, rawFlow.length) || 100;
      const halfH = h / 2;
      const dx = (w - 70) / (N - 1);

      // Compute shifted video flow
      const shiftedFlow = [];
      for (let i = 0; i < N; i++) {
        const srcIdx = Math.min(N - 1, Math.max(0, i - lag));
        shiftedFlow.push((rawFlow[srcIdx] - 12) / 10); // normalize around 0
      }

      // Compute Cross-Correlation / Alignment score
      let dot = 0, nAcc = 0, nFlow = 0;
      for (let i = 0; i < N; i++) {
        dot += rawAcc[i] * shiftedFlow[i];
        nAcc += rawAcc[i] * rawAcc[i];
        nFlow += shiftedFlow[i] * shiftedFlow[i];
      }
      const score = Math.max(0, dot / (Math.sqrt(nAcc) * Math.sqrt(nFlow) + 1e-6));

      // Draw Top Track: Wearable Accelerometer (Cyan)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 40 + i * dx;
        const py = halfH / 2 - rawAcc[i] * 30;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Draw Bottom Track: Video Optical Flow (Amber)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const px = 40 + i * dx;
        const py = halfH + halfH / 2 - shiftedFlow[i] * 30;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Draw alignment correspondence tie lines
      ctx.strokeStyle = score > 0.8 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.25)';
      ctx.lineWidth = 1;
      for (let i = 5; i < N; i += 6) {
        const px1 = 40 + i * dx;
        const py1 = halfH / 2 - rawAcc[i] * 30;
        const px2 = 40 + i * dx;
        const py2 = halfH + halfH / 2 - shiftedFlow[i] * 30;
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();
      }

      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('Modality 1: Wearable Inertial Accelerometer', 50, 24);
      ctx.fillStyle = '#f59e0b';
      ctx.fillText(`Modality 2: Vision Camera Optical Flow (Lag: ${lag} frames)`, 50, halfH + 24);

      if (lagVal) lagVal.textContent = `${lag} frames`;
      if (alignMeter) {
        alignMeter.innerHTML = `<strong>Alignment Correlation:</strong> <span style="color: ${score > 0.8 ? '#10b981' : '#f59e0b'}; font-weight: bold;">${(score * 100).toFixed(1)}%</span> ${score > 0.85 ? '✓ Synchronized!' : '(Misaligned)'}`;
      }
    }

    if (lagSlider) lagSlider.oninput = draw;

    draw();
  },

  // --------------------------------------------------------------------------
  // 4. Multimodal Reverse Vending Machine (RVM) Digital Twin (Worksheet Case Study)
  // --------------------------------------------------------------------------
  initRVMDigitalTwin() {
    const selector = document.getElementById('rvm-item-select');
    const canvas = document.getElementById('rvm-canvas');
    const resultBox = document.getElementById('rvm-decision-box');
    const barcodeBadge = document.getElementById('rvm-badge-barcode');
    const cameraBadge = document.getElementById('rvm-badge-camera');
    const loadcellBadge = document.getElementById('rvm-badge-loadcell');
    const metalBadge = document.getElementById('rvm-badge-metal');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const catalog = (window.DAY4_DATA && window.DAY4_DATA.rvmCatalog) || [];

    function update() {
      const w = canvas.width;
      const h = canvas.height;
      const itemIndex = selector ? parseInt(selector.value) : 0;
      const item = catalog[itemIndex] || catalog[0];

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Draw Conveyor belt
      const beltY = h - 60;
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(40, beltY, w - 80, 24);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.strokeRect(40, beltY, w - 80, 24);

      // Draw Conveyor rollers
      for (let rx = 55; rx < w - 80; rx += 30) {
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(rx, beltY + 12, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Inspection Zone Box
      const zoneX = w / 2 - 120;
      const zoneW = 240;
      const zoneY = 40;
      const zoneH = beltY - zoneY;

      ctx.fillStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.fillRect(zoneX, zoneY, zoneW, zoneH);
      ctx.strokeStyle = item.decision === 'VALID' ? '#10b981' : '#ef4444';
      ctx.lineWidth = 2;
      ctx.strokeRect(zoneX, zoneY, zoneW, zoneH);

      // Draw Sensors on the inspection portal
      // 1. Barcode Laser (Red diagonal beam from top)
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.7)';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(zoneX + 30, zoneY);
      ctx.lineTo(w / 2 - 20, beltY - 40);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = '10px sans-serif';
      ctx.fillText('Optical Laser Scanner', zoneX + 15, zoneY + 16);

      // 2. Vision Camera (Top center)
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(w / 2 - 25, zoneY - 15, 50, 16);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 9px sans-serif';
      ctx.fillText('RGB CAM', w / 2 - 20, zoneY - 3);

      // 3. Digital Load Cell (Underneath conveyor belt in zone)
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(zoneX + 40, beltY + 28, zoneW - 80, 14);
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px sans-serif';
      ctx.fillText(`Load Cell (Scale): ${item.weightGrams}g`, zoneX + 50, beltY + 40);

      // 4. Inductive Metal Sensor (Side sensor)
      ctx.fillStyle = '#a855f7';
      ctx.fillRect(zoneX + zoneW - 12, beltY - 50, 12, 35);
      ctx.font = '9px sans-serif';
      ctx.fillText('Metal Coil', zoneX + zoneW - 55, beltY - 30);

      // Draw Container on conveyor
      const objX = w / 2 - 40;
      const objY = beltY - 60;
      const objW = 80;
      const objH = 55;

      if (item.id === 'item-2' || item.id === 'item-5') {
        // Soda Can (Silver cylinder)
        ctx.fillStyle = item.id === 'item-5' ? '#64748b' : '#94a3b8';
        ctx.fillRect(objX + 15, objY, 50, objH);
        ctx.strokeStyle = '#cbd5e1';
        ctx.strokeRect(objX + 15, objY, 50, objH);
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px sans-serif';
        ctx.fillText(item.id === 'item-5' ? 'CRUSHED' : '330ml CAN', objX + 18, objY + 30);
      } else if (item.id === 'item-3') {
        // Wood Cylinder (Brown)
        ctx.fillStyle = '#78350f';
        ctx.fillRect(objX + 15, objY, 50, objH);
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px sans-serif';
        ctx.fillText('WOOD', objX + 24, objY + 30);
      } else {
        // PET Bottle (Light blue translucent)
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.fillRect(objX + 15, objY, 50, objH);
        ctx.strokeStyle = '#38bdf8';
        ctx.strokeRect(objX + 15, objY, 50, objH);
        // Bottle cap
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(objX + 30, objY - 10, 20, 10);
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px sans-serif';
        ctx.fillText(item.liquidResidue ? '+LIQUID' : '500ml PET', objX + 18, objY + 30);
      }

      // Barcode pattern on container
      ctx.fillStyle = item.barcodeValid ? '#000000' : '#ef4444';
      ctx.fillRect(objX + 25, objY + 35, 30, 12);

      // Update Sensor Status Badges
      if (barcodeBadge) {
        barcodeBadge.className = item.barcodeValid ? 'badge-tech' : 'badge-outline';
        barcodeBadge.innerHTML = item.barcodeValid ? `<i data-lucide="check"></i> Valid GS1 (${item.barcode})` : `<i data-lucide="x"></i> ${item.barcode}`;
      }
      if (cameraBadge) {
        cameraBadge.className = 'badge-tech';
        cameraBadge.innerHTML = `<i data-lucide="camera"></i> ${item.material}`;
      }
      if (loadcellBadge) {
        const isWeightValid = item.weightGrams >= item.weightRange[0] && item.weightGrams <= item.weightRange[1];
        loadcellBadge.className = isWeightValid ? 'badge-tech' : 'badge-outline';
        loadcellBadge.innerHTML = `<i data-lucide="scale"></i> ${item.weightGrams}g ${isWeightValid ? '(Pass)' : '(Anomaly)'}`;
      }
      if (metalBadge) {
        metalBadge.className = 'badge-tech';
        metalBadge.innerHTML = item.isMetal ? `<i data-lucide="zap"></i> Metal Positive` : `<i data-lucide="minus"></i> Non-Metal`;
      }

      // Decision Card
      if (resultBox) {
        const isAccept = item.decision === 'VALID';
        resultBox.innerHTML = `
          <div style="border-left: 4px solid ${isAccept ? '#10b981' : '#ef4444'}; padding-left: 12px;">
            <h4 style="color: ${isAccept ? '#10b981' : '#ef4444'}; margin: 0;">${item.outcome}</h4>
            <p class="mt-1 text-secondary" style="font-size: 0.9rem; margin-bottom: 0;">
              <strong>Multimodal Decision Rationale:</strong> ${item.explanation}
            </p>
          </div>
        `;
      }
      if (window.lucide) window.lucide.createIcons();
    }

    if (selector) selector.onchange = update;
    update();
  }
};

window.Visualizers = Object.assign(window.Visualizers || {}, window.Day4Visualizers);
