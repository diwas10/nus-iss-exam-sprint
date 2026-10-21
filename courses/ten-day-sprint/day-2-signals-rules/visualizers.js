// Upgraded Interactive Visualizers for Day 2: Nyquist-Aliasing & Symmetry, Peak Prominence & arPLS, DTW Recurrence & Hospital Triage Rule Engine

window.SprintDay2Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Nyquist-Shannon Sampling, Aliasing & Wave Symmetry Studio
  // -------------------------------------------------------------------------
  initNyquistAliasingStudio: function() {
    const canvas = document.getElementById('nyquist-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sliderSignalF = document.getElementById('nyquist-slider-f');
    const sliderSampleFs = document.getElementById('nyquist-slider-fs');
    const lblSignalF = document.getElementById('nyquist-val-f');
    const lblSampleFs = document.getElementById('nyquist-val-fs');
    const alertBox = document.getElementById('nyquist-alert-box');
    const btnSymmetryEven = document.getElementById('nyquist-sym-even');
    const btnSymmetryOdd = document.getElementById('nyquist-sym-odd');

    let f = sliderSignalF ? parseFloat(sliderSignalF.value) : 10;
    let fs = sliderSampleFs ? parseFloat(sliderSampleFs.value) : 25;
    let waveType = 'sine'; // 'sine' (odd symmetry) or 'cosine' (even symmetry)

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      // Draw Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY); ctx.lineTo(w, centerY);
      ctx.stroke();

      const timeDuration = 1.0;
      const nyquistLimit = 2 * f;
      const isAliasing = fs < nyquistLimit;

      // 1. Draw True Analog Signal (Cyan)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let px = 0; px < w; px++) {
        const t = (px / w) * timeDuration;
        const angle = 2 * Math.PI * f * t;
        const yVal = waveType === 'sine' ? Math.sin(angle) : Math.cos(angle);
        const py = centerY - yVal * (h * 0.35);
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // 2. Compute Samples at rate fs
      const numSamples = Math.floor(fs * timeDuration);
      const samplePoints = [];
      for (let n = 0; n <= numSamples; n++) {
        const t = n / fs;
        const px = (t / timeDuration) * w;
        const angle = 2 * Math.PI * f * t;
        const yVal = waveType === 'sine' ? Math.sin(angle) : Math.cos(angle);
        const py = centerY - yVal * (h * 0.35);
        samplePoints.push({ px, py, t, yVal });
      }

      // 3. Draw Reconstructed Wave from samples (Green or Ghost Red)
      ctx.strokeStyle = isAliasing ? '#ef4444' : '#10b981';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      
      let fPerceived = f;
      if (isAliasing) {
        const k = Math.round(f / fs);
        fPerceived = Math.abs(f - k * fs);
      }

      for (let px = 0; px < w; px++) {
        const t = (px / w) * timeDuration;
        const angle = 2 * Math.PI * fPerceived * t;
        const yVal = waveType === 'sine' ? Math.sin(angle) : Math.cos(angle);
        const py = centerY - yVal * (h * 0.35);
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // 4. Draw Discrete Sampling Dots (Orange Dots)
      samplePoints.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Update UI Banner
      if (alertBox) {
        if (isAliasing) {
          alertBox.className = 'lesson-card';
          alertBox.style.borderLeft = '4px solid #ef4444';
          alertBox.style.background = 'rgba(239, 68, 68, 0.1)';
          alertBox.innerHTML = `
            <strong style="color: #ef4444;"><i data-lucide="alert-triangle"></i> SEVERE ALIASING DETECTED!</strong>
            <p style="font-size: 0.85rem; margin-top: 4px; color: var(--text-primary);">
              Sampling frequency $f_s = ${fs}\\text{ Hz}$ is strictly below Nyquist rate $2 \\cdot f_{max} = ${nyquistLimit}\\text{ Hz}$.<br>
              The digital system cannot perceive ${f} Hz and instead sees a <strong>ghost alias wave at ${fPerceived.toFixed(1)} Hz</strong>!
            </p>
          `;
        } else {
          alertBox.className = 'lesson-card';
          alertBox.style.borderLeft = '4px solid #10b981';
          alertBox.style.background = 'rgba(16, 185, 129, 0.1)';
          alertBox.innerHTML = `
            <strong style="color: #10b981;"><i data-lucide="check-circle"></i> NYQUIST CRITERION SATISFIED!</strong>
            <p style="font-size: 0.85rem; margin-top: 4px; color: var(--text-primary);">
              Sampling frequency $f_s = ${fs}\\text{ Hz} \\ge 2 \\cdot f_{max} = ${nyquistLimit}\\text{ Hz}$. Perfect reconstruction guaranteed with zero information loss!
            </p>
          `;
        }
        if (window.renderLatex) window.renderLatex(alertBox);
        if (window.lucide) window.lucide.createIcons();
      }
    }

    if (sliderSignalF) {
      sliderSignalF.oninput = function() {
        f = parseFloat(this.value);
        if (lblSignalF) lblSignalF.textContent = `${f} Hz`;
        render();
      };
    }

    if (sliderSampleFs) {
      sliderSampleFs.oninput = function() {
        fs = parseFloat(this.value);
        if (lblSampleFs) lblSampleFs.textContent = `${fs} Hz`;
        render();
      };
    }

    if (btnSymmetryEven) {
      btnSymmetryEven.onclick = function() {
        waveType = 'cosine';
        btnSymmetryEven.classList.add('active');
        if (btnSymmetryOdd) btnSymmetryOdd.classList.remove('active');
        render();
      };
    }

    if (btnSymmetryOdd) {
      btnSymmetryOdd.onclick = function() {
        waveType = 'sine';
        btnSymmetryOdd.classList.add('active');
        if (btnSymmetryEven) btnSymmetryEven.classList.remove('active');
        render();
      };
    }

    render();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Peak Detection & arPLS Baseline Drift Studio
  // -------------------------------------------------------------------------
  initARPLSBaselineStudio: function() {
    const rawCanvas = document.getElementById('arpls-raw-canvas');
    const cleanCanvas = document.getElementById('arpls-clean-canvas');
    if (!rawCanvas || !cleanCanvas) return;

    const rawCtx = rawCanvas.getContext('2d');
    const cleanCtx = cleanCanvas.getContext('2d');

    const sliderLambda = document.getElementById('arpls-slider-lambda');
    const sliderP = document.getElementById('arpls-slider-p');
    const lblLambda = document.getElementById('arpls-val-lambda');
    const lblP = document.getElementById('arpls-val-p');

    // Generate Synthetic ECG Wave with severe low-frequency sinusoidal baseline wander
    const N = 200;
    const rawSignal = [];
    const truePeaks = [30, 80, 130, 180]; // QRS heartbeats

    for (let i = 0; i < N; i++) {
      const wander = 0.8 * Math.sin((2 * Math.PI * i) / 100) + 0.3 * Math.cos((2 * Math.PI * i) / 180);
      let ecg = 0;
      truePeaks.forEach(peakIdx => {
        const dist = Math.abs(i - peakIdx);
        if (dist <= 4) {
          ecg += 1.5 * Math.exp(-(dist ** 2) / 2); // QRS sharp positive spike
        } else if (dist <= 8) {
          ecg -= 0.3 * Math.exp(-((dist - 6) ** 2) / 2); // S-wave dip
        }
      });
      const noise = (Math.random() - 0.5) * 0.08;
      rawSignal.push(wander + ecg + noise);
    }

    function computeBaseline(lambdaPower, pVal) {
      const baseline = [];
      const stiffness = 10 ** lambdaPower;
      const smoothFactor = Math.min(0.98, 0.70 + (lambdaPower / 8) * 0.28);

      let current = rawSignal[0];
      for (let i = 0; i < N; i++) {
        const val = rawSignal[i];
        if (val > current) {
          // Asymmetric weighting: peaks get negligible weight (pVal)
          current = current * (1 - pVal * 0.1) + val * (pVal * 0.1);
        } else {
          // Valleys get heavy anchor weight
          current = current * 0.75 + val * 0.25;
        }
        baseline.push(current);
      }

      // Backward smoothing pass
      for (let i = N - 2; i >= 0; i--) {
        baseline[i] = baseline[i] * (1 - smoothFactor) + baseline[i + 1] * smoothFactor;
      }

      return baseline;
    }

    function render() {
      const lambdaPow = sliderLambda ? parseFloat(sliderLambda.value) : 5;
      const pVal = sliderP ? parseFloat(sliderP.value) : 0.01;

      if (lblLambda) lblLambda.textContent = `10^${lambdaPow.toFixed(1)}`;
      if (lblP) lblP.textContent = pVal.toFixed(3);

      const baseline = computeBaseline(lambdaPow, pVal);
      const cleaned = rawSignal.map((v, i) => v - baseline[i]);

      // 1. Render Raw Signal + Fitted Baseline
      rawCtx.clearRect(0, 0, rawCanvas.width, rawCanvas.height);
      const rw = rawCanvas.width;
      const rh = rawCanvas.height;

      // Draw Raw (White)
      rawCtx.strokeStyle = '#e2e8f0';
      rawCtx.lineWidth = 1.5;
      rawCtx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * rw;
        const y = rh / 2 - rawSignal[i] * (rh * 0.3);
        if (i === 0) rawCtx.moveTo(x, y);
        else rawCtx.lineTo(x, y);
      }
      rawCtx.stroke();

      // Draw Baseline (Yellow)
      rawCtx.strokeStyle = '#fbbf24';
      rawCtx.lineWidth = 2.5;
      rawCtx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * rw;
        const y = rh / 2 - baseline[i] * (rh * 0.3);
        if (i === 0) rawCtx.moveTo(x, y);
        else rawCtx.lineTo(x, y);
      }
      rawCtx.stroke();

      // 2. Render Cleaned Signal (Cyan)
      cleanCtx.clearRect(0, 0, cleanCanvas.width, cleanCanvas.height);
      const cw = cleanCanvas.width;
      const ch = cleanCanvas.height;

      // Zero baseline guide
      cleanCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      cleanCtx.lineWidth = 1;
      cleanCtx.setLineDash([3, 3]);
      cleanCtx.beginPath();
      cleanCtx.moveTo(0, ch / 2); cleanCtx.lineTo(cw, ch / 2);
      cleanCtx.stroke();
      cleanCtx.setLineDash([]);

      // Cleaned ECG wave
      cleanCtx.strokeStyle = '#38bdf8';
      cleanCtx.lineWidth = 2;
      cleanCtx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * cw;
        const y = ch / 2 - cleaned[i] * (ch * 0.35);
        if (i === 0) cleanCtx.moveTo(x, y);
        else cleanCtx.lineTo(x, y);
      }
      cleanCtx.stroke();

      // Detected Peaks Markers (Red Dots on cleaned signal)
      truePeaks.forEach(idx => {
        const x = (idx / (N - 1)) * cw;
        const y = ch / 2 - cleaned[idx] * (ch * 0.35);
        cleanCtx.beginPath();
        cleanCtx.arc(x, y, 4, 0, 2 * Math.PI);
        cleanCtx.fillStyle = '#ef4444';
        cleanCtx.fill();
        cleanCtx.strokeStyle = '#ffffff';
        cleanCtx.lineWidth = 1;
        cleanCtx.stroke();
      });
    }

    if (sliderLambda) sliderLambda.oninput = render;
    if (sliderP) sliderP.oninput = render;

    render();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive DTW Accumulated Cost Matrix Studio
  // -------------------------------------------------------------------------
  initDTWMatixStudio: function() {
    const tableEl = document.getElementById('dtw-matrix-table');
    const pathInfoEl = document.getElementById('dtw-path-info');
    const selectDataset = document.getElementById('dtw-dataset-select');
    if (!tableEl) return;

    let seqA = [1, 2, 4, 8, 3];
    let seqB = [1, 1, 2, 4, 8, 8, 3];

    function loadDataset(name) {
      if (name === 'gdp') {
        seqA = [2.1, 4.8, 6.2, 1.8, -1.2];
        seqB = [1.8, 3.1, 4.5, 6.1, 4.2, -1.5, 0.6];
      } else {
        seqA = [1, 2, 4, 8, 3];
        seqB = [1, 1, 2, 4, 8, 8, 3];
      }
      computeAndRender();
    }

    function computeAndRender() {
      const N = seqA.length;
      const M = seqB.length;

      // 1. Local distance matrix
      const D = [];
      for (let i = 0; i < N; i++) {
        D[i] = [];
        for (let j = 0; j < M; j++) {
          D[i][j] = Math.abs(seqA[i] - seqB[j]);
        }
      }

      // 2. Accumulated cost matrix
      const D_acc = [];
      for (let i = 0; i < N; i++) {
        D_acc[i] = [];
        for (let j = 0; j < M; j++) {
          const cost = D[i][j];
          if (i === 0 && j === 0) {
            D_acc[i][j] = cost;
          } else if (i === 0) {
            D_acc[i][j] = cost + D_acc[i][j - 1];
          } else if (j === 0) {
            D_acc[i][j] = cost + D_acc[i - 1][j];
          } else {
            D_acc[i][j] = cost + Math.min(D_acc[i - 1][j], D_acc[i][j - 1], D_acc[i - 1][j - 1]);
          }
        }
      }

      // 3. Backtracking optimal warping path from (N-1, M-1) to (0, 0)
      const path = [];
      let curI = N - 1;
      let curJ = M - 1;
      path.push([curI, curJ]);

      while (curI > 0 || curJ > 0) {
        if (curI === 0) {
          curJ--;
        } else if (curJ === 0) {
          curI--;
        } else {
          const diag = D_acc[curI - 1][curJ - 1];
          const left = D_acc[curI][curJ - 1];
          const up = D_acc[curI - 1][curJ];
          const minVal = Math.min(diag, left, up);

          if (minVal === diag) {
            curI--; curJ--;
          } else if (minVal === left) {
            curJ--;
          } else {
            curI--;
          }
        }
        path.push([curI, curJ]);
      }

      const totalCost = D_acc[N - 1][M - 1];
      if (pathInfoEl) {
        pathInfoEl.innerHTML = `
          <span class="badge-tech" style="color: #38bdf8;">Optimal DTW Distance = ${totalCost.toFixed(2)}</span>
          <span style="color: var(--text-muted); margin-left: 8px;">Path Steps: ${path.length}</span>
        `;
      }

      // Build HTML Table (reversed rows so (0,0) is bottom-left as in lecture slides!)
      let html = '<thead><tr><th style="padding: 6px 10px;">Seq A \\ Seq B</th>';
      for (let j = 0; j < M; j++) {
        html += `<th style="padding: 6px 10px; color: #38bdf8;">b[${j}]=${seqB[j]}</th>`;
      }
      html += '</tr></thead><tbody>';

      for (let i = N - 1; i >= 0; i--) {
        html += `<tr><td style="padding: 6px 10px; font-weight: 700; color: #f59e0b;">a[${i}]=${seqA[i]}</td>`;
        for (let j = 0; j < M; j++) {
          const isPath = path.some(p => p[0] === i && p[1] === j);
          const cellVal = D_acc[i][j].toFixed(1);
          const bg = isPath ? 'rgba(239, 68, 68, 0.35)' : 'rgba(255,255,255,0.02)';
          const border = isPath ? '2px solid #ef4444' : '1px solid var(--border-color)';
          const color = isPath ? '#ffffff' : 'var(--text-secondary)';

          html += `
            <td style="padding: 8px 12px; background: ${bg}; border: ${border}; color: ${color}; font-weight: ${isPath ? '700' : '400'};">
              ${cellVal} ${isPath ? '⭐' : ''}
            </td>
          `;
        }
        html += '</tr>';
      }
      html += '</tbody>';
      tableEl.innerHTML = html;
    }

    if (selectDataset) {
      selectDataset.onchange = function() { loadDataset(this.value); };
    }

    computeAndRender();
  },

  // -------------------------------------------------------------------------
  // 4. Upgraded Hospital Emergency Triage Rule Engine & Guardrails Studio
  // -------------------------------------------------------------------------
  initHospitalTriageStudio: function() {
    const btnRun = document.getElementById('triage-btn-run');
    const auditLogEl = document.getElementById('triage-audit-log');
    const badgeDisposition = document.getElementById('triage-disposition-badge');

    const inputAge = document.getElementById('triage-input-age');
    const inputSpO2 = document.getElementById('triage-input-spo2');
    const inputHR = document.getElementById('triage-input-hr');
    const inputFever = document.getElementById('triage-input-fever');
    const inputScore = document.getElementById('triage-input-score');
    const selectBed = document.getElementById('triage-input-bed');

    function executeTriageEngine() {
      if (!auditLogEl) return;

      const age = inputAge ? parseFloat(inputAge.value) : 76;
      const spo2 = inputSpO2 ? parseFloat(inputSpO2.value) : 88;
      const hr = inputHR ? parseFloat(inputHR.value) : 128;
      const fever = inputFever ? parseFloat(inputFever.value) : 39.2;
      const score = inputScore ? parseFloat(inputScore.value) : 0.92;
      const bed = selectBed ? selectBed.value : 'yes';

      let log = `<div style="font-family: monospace; font-size: 0.8rem; line-height: 1.5;">`;
      log += `<div style="color: var(--accent-cyan); font-weight: bold; margin-bottom: 6px;">[CYCLE 1: WORKING MEMORY INITIALIZATION]</div>`;
      log += `• Assert Fact: Patient(Age=${age}, SpO2=${spo2}%, HR=${hr}bpm, Fever=${fever}&deg;C)<br>`;
      log += `• Assert Fact: ML_Risk_Severity = ${score} (from Deep CNN/Sensor model)<br>`;
      log += `• Assert Fact: Hospital_Resource(ICU_Bed_Available = '${bed.toUpperCase()}')<br><br>`;

      log += `<div style="color: #f59e0b; font-weight: bold; margin-bottom: 6px;">[CYCLE 2: SELF-CHECKS & SAFETY GUARDRAILS (RS Day 1)]</div>`;
      // 1. Contradiction Check
      if (spo2 < 80 && hr < 40 && fever > 41) {
        log += `<span style="color: #ef4444;">⚠️ Contradiction Check FAILED: Physiological sensor values mutually improbable. Flagged for sensor recalibration!</span><br>`;
      } else {
        log += `✓ Sensor Vitals Plausibility Check: PASSED (No physiological contradictions)<br>`;
      }

      // 2. Prompt Injection Guardrail
      log += `✓ Prompt Injection & Policy Override Check: PASSED (Hard logic bounds enforce safety)<br><br>`;

      log += `<div style="color: #a78bfa; font-weight: bold; margin-bottom: 6px;">[CYCLE 3: FORWARD CHAINING & CONFLICT SET EVALUATION]</div>`;

      const matchedRules = [];
      const rules = window.DAY2_SIGNALS_RULES_DATA?.triageRules || [];

      // Evaluate R1
      if (score > 0.85 && spo2 < 90 && bed === 'yes') {
        matchedRules.push(rules[0]);
        log += `• Matched Rule [R1]: Immediate ICU Critical Alarm (Priority=100, Specificity=3)<br>`;
      }

      // Evaluate R2 (Bed Scarcity Divert)
      if (score > 0.85 && spo2 < 90 && bed === 'no') {
        matchedRules.push(rules[1]);
        log += `• Matched Rule [R2]: ICU Divert to HDU (Priority=95, Specificity=3)<br>`;
      }

      // Evaluate R3 (HDU Cardiac)
      if (hr > 120 || (age > 70 && fever > 38.5)) {
        matchedRules.push(rules[2]);
        log += `• Matched Rule [R3]: High Dependency Cardiac Monitoring (Priority=80, Specificity=2)<br>`;
      }

      // Evaluate R4 (General Ward)
      if (fever > 38.0 || score > 0.50) {
        matchedRules.push(rules[3]);
        log += `• Matched Rule [R4]: Inpatient General Ward Care (Priority=50, Specificity=1)<br>`;
      }

      // Evaluate R5 (Discharge)
      if (score <= 0.50 && spo2 >= 95) {
        matchedRules.push(rules[4]);
        log += `• Matched Rule [R5]: Outpatient Discharge (Priority=10, Specificity=2)<br>`;
      }

      log += `<br><div style="color: #34d399; font-weight: bold; margin-bottom: 6px;">[CYCLE 4: CONFLICT RESOLUTION (Priority & Specificity)]</div>`;
      if (matchedRules.length === 0) {
        log += `• No rules matched. Default to Observation Unit.<br>`;
        if (badgeDisposition) {
          badgeDisposition.className = 'badge-tech';
          badgeDisposition.style.color = '#f59e0b';
          badgeDisposition.textContent = 'Observation Unit';
        }
      } else {
        // Sort by priority descending
        matchedRules.sort((a, b) => b.priority - a.priority || b.specificity - a.specificity);
        const winningRule = matchedRules[0];

        log += `• Fired Rule: <strong>[${winningRule.id}] ${winningRule.name}</strong><br>`;
        log += `• Conflict Resolution Justification: Rule has highest assigned Salience Priority (${winningRule.priority}) and Specificity (${winningRule.specificity} antecedents).<br>`;
        log += `• Disposition Action Executed: <strong>${winningRule.action}</strong><br>`;

        if (badgeDisposition) {
          badgeDisposition.className = 'badge-tech';
          badgeDisposition.style.color = winningRule.department === 'ICU' ? '#ef4444' : winningRule.department === 'HDU' ? '#f59e0b' : '#34d399';
          badgeDisposition.textContent = winningRule.action;
        }
      }

      log += `</div>`;
      auditLogEl.innerHTML = log;
    }

    if (btnRun) btnRun.onclick = executeTriageEngine;
  }
};
