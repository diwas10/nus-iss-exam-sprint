// Interactive Visualizers for Day 7: LSTM Gating, Autoencoder Anomaly Detection & Word2Vec Vector Space

window.SprintDay7Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive LSTM Gate Valve & Memory Highway Studio
  // -------------------------------------------------------------------------
  initLSTMGateValveStudio: function() {
    const seq = window.DAY7_SEQUENCES_TIME_DATA?.lstmSequence || [];
    const btnNext = document.getElementById('lstm-btn-next');
    const btnReset = document.getElementById('lstm-btn-reset');
    const tokenDisplay = document.getElementById('lstm-current-token');
    const cellStateDisplay = document.getElementById('lstm-cell-state');
    const gatesContainer = document.getElementById('lstm-gates-status');

    if (!btnNext || seq.length === 0) return;

    let currentStep = 0;
    let C_t = 0.0; // Cell state highway
    let h_t = 0.0; // Hidden state

    function stepLSTM() {
      if (currentStep >= seq.length) currentStep = 0;
      const item = seq[currentStep];

      // Simulate gate activations based on token semantics
      let f_t = 0.85; // Default: retain memory
      let i_t = 0.30;
      let c_tilde = item.value;

      if (item.token === "engine") {
        f_t = 0.20; // Flush old context
        i_t = 0.95; // Write strong singular noun signal
        c_tilde = 0.90;
      } else if (item.token === "bolts") {
        f_t = 0.95; // Retain engine memory!
        i_t = 0.15; // Suppress plural distractor from hijacking memory!
        c_tilde = -0.50;
      } else if (item.token === "WAS") {
        f_t = 0.90;
        i_t = 0.05;
      }

      // Additive cell state update: C_t = f_t * C_{t-1} + i_t * c_tilde
      C_t = f_t * C_t + i_t * c_tilde;
      const o_t = 0.80;
      h_t = o_t * Math.tanh(C_t);

      if (tokenDisplay) {
        tokenDisplay.innerHTML = `
          <div style="font-size: 1.8rem; font-weight: 800; color: #38bdf8;">"${item.token}"</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">Step ${item.step + 1} of ${seq.length}: ${item.desc}</div>
        `;
      }

      if (cellStateDisplay) {
        cellStateDisplay.innerHTML = `
          <div style="font-family: monospace; font-size: 1.1rem; color: #34d399; font-weight: 700;">
            C_t = ${C_t.toFixed(3)} | h_t = ${h_t.toFixed(3)}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">
            ${C_t > 0.5 ? '🧠 Strong Subject Signal (Singular): "engine" active on memory highway!' : 'Neutral Memory State'}
          </div>
        `;
      }

      if (gatesContainer) {
        gatesContainer.innerHTML = `
          <div class="grid-4-col" style="font-size: 0.78rem; gap: 8px;">
            <div style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); padding: 8px; border-radius: 6px;">
              <span style="color: #ef4444; font-weight: 700;">Forget Gate f_t:</span><br>
              <strong style="font-size: 1.05rem; color: #ef4444;">${(f_t * 100).toFixed(0)}%</strong>
              <div style="color: var(--text-muted); font-size: 0.7rem;">Retains past C_{t-1}</div>
            </div>
            <div style="background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.3); padding: 8px; border-radius: 6px;">
              <span style="color: #38bdf8; font-weight: 700;">Input Gate i_t:</span><br>
              <strong style="font-size: 1.05rem; color: #38bdf8;">${(i_t * 100).toFixed(0)}%</strong>
              <div style="color: var(--text-muted); font-size: 0.7rem;">Admits new info</div>
            </div>
            <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); padding: 8px; border-radius: 6px;">
              <span style="color: #f59e0b; font-weight: 700;">Candidate C̃_t:</span><br>
              <strong style="font-size: 1.05rem; color: #f59e0b;">${c_tilde.toFixed(2)}</strong>
              <div style="color: var(--text-muted); font-size: 0.7rem;">tanh(W_c x + U_c h)</div>
            </div>
            <div style="background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.3); padding: 8px; border-radius: 6px;">
              <span style="color: #34d399; font-weight: 700;">Output Gate o_t:</span><br>
              <strong style="font-size: 1.05rem; color: #34d399;">${(o_t * 100).toFixed(0)}%</strong>
              <div style="color: var(--text-muted); font-size: 0.7rem;">Gates hidden output h_t</div>
            </div>
          </div>
        `;
      }

      currentStep++;
    }

    btnNext.onclick = stepLSTM;
    if (btnReset) {
      btnReset.onclick = function() {
        currentStep = 0;
        C_t = 0.0;
        h_t = 0.0;
        stepLSTM();
      };
    }

    stepLSTM();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Smart Fish Tank Sensor Anomaly Detection Studio (ISSM Day 3)
  // -------------------------------------------------------------------------
  initAutoencoderAnomalyStudio: function() {
    const canvas = document.getElementById('anomaly-canvas');
    const sliderTau = document.getElementById('anomaly-slider-tau');
    const lblTau = document.getElementById('anomaly-val-tau');
    const statusBox = document.getElementById('anomaly-diagnosis-box');

    const data = window.DAY7_SEQUENCES_TIME_DATA?.fishTankData;
    if (!canvas || !data) return;
    const ctx = canvas.getContext('2d');

    let tau = sliderTau ? parseFloat(sliderTau.value) : 0.45;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const n = data.timeSteps.length;
      const stepW = w / (n - 1);

      if (lblTau) lblTau.textContent = tau.toFixed(2);

      // Split canvas: Top = Raw Dissolved Oxygen (0 to 14 mg/L), Bottom = Reconstruction Error (0 to 1.5)
      const midY = h * 0.48;

      // Divider Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(w, midY);
      ctx.stroke();

      // Labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px sans-serif';
      ctx.fillText('1. Raw Dissolved Oxygen (mg/L):', 10, 16);
      ctx.fillText('2. Autoencoder Reconstruction Error MSE ||x - x̂||²:', 10, midY + 18);

      // 1. Draw Raw Dissolved Oxygen Waveform
      ctx.beginPath();
      data.dissolvedOxygen.forEach((val, i) => {
        const x = i * stepW;
        // Map 0 to 14 mg/L into 0 to midY
        const y = midY - (val / 14.0) * (midY - 25);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 2. Draw Reconstruction Error Waveform
      ctx.beginPath();
      data.reconstructionErrors.forEach((err, i) => {
        const x = i * stepW;
        // Map 0 to 1.5 error into midY to h
        const y = h - (err / 1.5) * (h - midY - 25);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 3. Draw Threshold Tau Line (Dashed Red)
      const tauY = h - (tau / 1.5) * (h - midY - 25);
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, tauY);
      ctx.lineTo(w, tauY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#ef4444';
      ctx.font = '10px monospace';
      ctx.fillText(`Threshold τ = ${tau.toFixed(2)}`, w - 110, tauY - 4);

      // 4. Highlight Anomaly Points Exceeding Tau
      let glitchCaught = false;
      let hypoxiaCaught = false;
      let falseAlarmCount = 0;

      data.reconstructionErrors.forEach((err, i) => {
        if (err >= tau) {
          const x = i * stepW;
          const y = h - (err / 1.5) * (h - midY - 25);

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fillStyle = '#ef4444';
          ctx.fill();

          if (i === 26) glitchCaught = true;
          else if (i >= 41) hypoxiaCaught = true;
          else falseAlarmCount++;
        }
      });

      // Update Diagnosis Box
      if (statusBox) {
        statusBox.innerHTML = `
          <div style="font-size: 0.82rem; line-height: 1.5;">
            <div><strong>Event A (Hardware Glitch at t=26):</strong> ${glitchCaught ? '<span style="color: #34d399;">✓ DETECTED (Isolated single-point spike)</span>' : '<span style="color: #ef4444;">✗ MISSED (Threshold too high)</span>'}</div>
            <div><strong>Event B (Biological Hypoxia Decay t=41-59):</strong> ${hypoxiaCaught ? '<span style="color: #34d399;">✓ DETECTED (Persistent multi-step alarm)</span>' : '<span style="color: #ef4444;">✗ MISSED (Threshold too high)</span>'}</div>
            <div><strong>False Alarms (Normal noise flagged):</strong> <span style="color: ${falseAlarmCount === 0 ? '#34d399' : '#f59e0b'};">${falseAlarmCount} timestamps</span></div>
          </div>
          <div style="margin-top: 8px; font-size: 0.75rem; color: var(--text-secondary); border-top: 1px solid rgba(255,255,255,0.08); padding-top: 6px;">
            <em>Triage Action:</em> Single isolated violation = ignore or reboot sensor. Consecutive violations $\\ge 3$ steps = Trigger emergency aeration pump!
          </div>
        `;
      }
    }

    if (sliderTau) {
      sliderTau.oninput = function() {
        tau = parseFloat(this.value);
        render();
      };
    }

    render();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive Word2Vec Vector Space & Semantic Arithmetic Studio
  // -------------------------------------------------------------------------
  initWordEmbeddingVectorSpace: function() {
    const canvas = document.getElementById('w2v-canvas');
    const selArithmetic = document.getElementById('w2v-arithmetic-select');
    const resultBox = document.getElementById('w2v-result-container');

    const words = window.DAY7_SEQUENCES_TIME_DATA?.wordEmbeddings;
    if (!canvas || !words) return;
    const ctx = canvas.getContext('2d');

    const catColors = {
      royalty: '#c084fc',
      gender: '#38bdf8',
      fruit: '#34d399',
      city: '#f59e0b',
      country: '#ec4899'
    };

    function cosineSim(v1, v2) {
      const dot = v1.x * v2.x + v1.y * v2.y;
      const mag1 = Math.hypot(v1.x, v1.y);
      const mag2 = Math.hypot(v2.x, v2.y);
      return (mag1 * mag2) > 0 ? dot / (mag1 * mag2) : 0;
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw Center Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
      ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
      ctx.stroke();

      // Transform normalized [-1, +1] space to canvas coords
      function toScreen(pt) {
        return {
          x: (pt.x + 1) * 0.5 * (w - 60) + 30,
          y: (1 - pt.y) * 0.5 * (h - 60) + 30
        };
      }

      // Draw Word Points
      Object.keys(words).forEach(word => {
        const pt = words[word];
        const screen = toScreen(pt);
        const color = catColors[pt.category] || '#ffffff';

        ctx.beginPath();
        ctx.arc(screen.x, screen.y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '11px monospace';
        ctx.fillText(word, screen.x + 8, screen.y + 4);
      });

      // Handle Vector Arithmetic Selection
      const op = selArithmetic ? selArithmetic.value : 'royalty';
      if (op === 'royalty') {
        // King - Man + Woman = Queen
        const pKing = toScreen(words['king']);
        const pMan = toScreen(words['man']);
        const pWoman = toScreen(words['woman']);
        const pQueen = toScreen(words['queen']);

        // Draw arrow from Man to King
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pMan.x, pMan.y);
        ctx.lineTo(pKing.x, pKing.y);
        ctx.stroke();

        // Draw parallel arrow from Woman to Queen
        ctx.strokeStyle = 'rgba(192, 132, 252, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pWoman.x, pWoman.y);
        ctx.lineTo(pQueen.x, pQueen.y);
        ctx.stroke();

        if (resultBox) {
          resultBox.innerHTML = `
            <div style="background: rgba(192,132,252,0.1); border: 1px solid rgba(192,132,252,0.3); border-radius: 8px; padding: 12px; font-size: 0.82rem;">
              <strong style="color: #c084fc;">Vector Equation:</strong> [king] − [man] + [woman] ≈ <strong>[queen]</strong><br>
              <div style="margin-top: 4px; color: var(--text-secondary); font-size: 0.75rem;">
                Cosine Similarity to [queen]: <strong>0.962</strong> (Top-1 nearest neighbor in vocabulary!)<br>
                <em>Cognitive Meaning:</em> The vector offset between [king] and [man] encodes the abstract semantic concept of "Royalty", which transfers perfectly to female terms!
              </div>
            </div>
          `;
        }
      } else if (op === 'capital') {
        // Paris - France + Japan = Tokyo
        const pParis = toScreen(words['paris']);
        const pFrance = toScreen(words['france']);
        const pJapan = toScreen(words['japan']);
        const pTokyo = toScreen(words['tokyo']);

        ctx.strokeStyle = 'rgba(236, 72, 153, 0.7)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(pFrance.x, pFrance.y);
        ctx.lineTo(pParis.x, pParis.y);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
        ctx.beginPath();
        ctx.moveTo(pJapan.x, pJapan.y);
        ctx.lineTo(pTokyo.x, pTokyo.y);
        ctx.stroke();

        if (resultBox) {
          resultBox.innerHTML = `
            <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); border-radius: 8px; padding: 12px; font-size: 0.82rem;">
              <strong style="color: #f59e0b;">Vector Equation:</strong> [paris] − [france] + [japan] ≈ <strong>[tokyo]</strong><br>
              <div style="margin-top: 4px; color: var(--text-secondary); font-size: 0.75rem;">
                Cosine Similarity to [tokyo]: <strong>0.948</strong><br>
                <em>Cognitive Meaning:</em> The relation vector encodes "Capital City of".
              </div>
            </div>
          `;
        }
      }
    }

    if (selArithmetic) selArithmetic.onchange = render;
    render();
  }
};
