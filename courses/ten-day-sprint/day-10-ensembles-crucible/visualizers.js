// Interactive Visualizers for Day 10: Ensembles, RS Escape Room & Master Architecture Selector

window.SprintDay10Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Bagging, Boosting (AdaBoost) & Stacking Studio
  // -------------------------------------------------------------------------
  initBaggingBoostingStackingStudio: function() {
    const selTab = document.getElementById('ensemble-tab-select');
    const containerBoost = document.getElementById('ensemble-tab-boosting');
    const containerBag = document.getElementById('ensemble-tab-bagging');
    const containerStack = document.getElementById('ensemble-tab-stacking');

    if (selTab) {
      selTab.onchange = function() {
        const val = this.value;
        if (containerBoost) containerBoost.style.display = val === 'boosting' ? 'block' : 'none';
        if (containerBag) containerBag.style.display = val === 'bagging' ? 'block' : 'none';
        if (containerStack) containerStack.style.display = val === 'stacking' ? 'block' : 'none';
      };
    }

    // --- Tab 1: AdaBoost Live Weight & Voting Calculator ---
    const sliderEpsilon = document.getElementById('adaboost-slider-eps');
    const lblEps = document.getElementById('adaboost-val-eps');
    const lblAlpha = document.getElementById('adaboost-val-alpha');
    const lblWeightCorrect = document.getElementById('adaboost-val-wt-corr');
    const lblWeightWrong = document.getElementById('adaboost-val-wt-wrong');
    const tableBody = document.getElementById('adaboost-table-body');
    const demoData = window.DAY10_ENSEMBLES_CRUCIBLE_DATA?.adaboostDemo;

    function updateAdaBoostCalc() {
      if (!sliderEpsilon) return;
      const eps = parseFloat(sliderEpsilon.value);
      if (lblEps) lblEps.textContent = eps.toFixed(2);

      // Alpha = 0.5 * ln((1 - eps) / eps)
      const ratio = (1.0 - eps) / eps;
      const alpha = 0.5 * Math.log(ratio);
      if (lblAlpha) lblAlpha.textContent = alpha.toFixed(4);

      // Multipliers: e^(-alpha) for correct, e^(+alpha) for wrong
      const multCorrect = Math.exp(-alpha);
      const multWrong = Math.exp(alpha);

      if (lblWeightCorrect) lblWeightCorrect.textContent = `${multCorrect.toFixed(3)}x (Decreased)`;
      if (lblWeightWrong) lblWeightWrong.textContent = `${multWrong.toFixed(3)}x (Inflated)`;

      // Update 5-sample demo table
      if (tableBody && demoData) {
        const samples = demoData.samples;
        // Misclassified IDs: 3 and 5
        let rawNewWeights = [];
        let sumW = 0;
        for (let i = 0; i < samples.length; i++) {
          const isWrong = (samples[i].id === 3 || samples[i].id === 5);
          const wOld = 0.20;
          const wNewUnnorm = isWrong ? wOld * multWrong : wOld * multCorrect;
          rawNewWeights.push(wNewUnnorm);
          sumW += wNewUnnorm;
        }

        tableBody.innerHTML = samples.map((s, idx) => {
          const isWrong = (s.id === 3 || s.id === 5);
          const normW = rawNewWeights[idx] / sumW;
          return `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); ${isWrong ? 'background: rgba(239,68,68,0.1);' : ''}">
              <td style="padding: 6px; font-weight: 700;">#${s.id}</td>
              <td style="padding: 6px;">(${s.x}, ${s.y})</td>
              <td style="padding: 6px; font-weight: 700; color: ${s.trueLabel > 0 ? '#38bdf8' : '#fbbf24'};">${s.trueLabel > 0 ? '+1' : '-1'}</td>
              <td style="padding: 6px; color: ${s.pred1 === s.trueLabel ? '#34d399' : '#ef4444'}; font-weight: 700;">
                ${s.pred1 > 0 ? '+1' : '-1'} ${s.pred1 === s.trueLabel ? '✓' : '✗'}
              </td>
              <td style="padding: 6px; font-family: monospace;">0.2000</td>
              <td style="padding: 6px; font-family: monospace; font-weight: 700; color: ${isWrong ? '#ef4444' : '#34d399'};">
                ${normW.toFixed(4)} ${isWrong ? '▲' : '▼'}
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    if (sliderEpsilon) {
      sliderEpsilon.oninput = updateAdaBoostCalc;
      updateAdaBoostCalc();
    }

    // --- Tab 2: Bootstrap Sampling Simulation ---
    const btnDrawBootstrap = document.getElementById('btn-draw-bootstrap');
    const lblUnique = document.getElementById('bootstrap-val-unique');
    const lblOOB = document.getElementById('bootstrap-val-oob');
    const barUnique = document.getElementById('bootstrap-bar-unique');
    const barOOB = document.getElementById('bootstrap-bar-oob');

    function runBootstrapSim() {
      const N = 1000;
      const drawn = new Set();
      for (let i = 0; i < N; i++) {
        drawn.add(Math.floor(Math.random() * N));
      }
      const uniqueCount = drawn.size;
      const uniquePct = (uniqueCount / N) * 100;
      const oobPct = 100 - uniquePct;

      if (lblUnique) lblUnique.textContent = `${uniqueCount} / ${N} (${uniquePct.toFixed(1)}%)`;
      if (lblOOB) lblOOB.textContent = `${N - uniqueCount} / ${N} (${oobPct.toFixed(1)}%)`;
      if (barUnique) barUnique.style.width = `${uniquePct}%`;
      if (barOOB) barOOB.style.width = `${oobPct}%`;
    }

    if (btnDrawBootstrap) {
      btnDrawBootstrap.onclick = runBootstrapSim;
      runBootstrapSim();
    }
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Master Architecture Scenario Selector
  // -------------------------------------------------------------------------
  initMasterArchitectureSelector: function() {
    const selArch = document.getElementById('arch-scenario-select');
    const displayBox = document.getElementById('arch-blueprint-display');
    const architectures = window.DAY10_ENSEMBLES_CRUCIBLE_DATA?.masterArchitectures || [];

    if (!selArch || !displayBox || architectures.length === 0) return;

    function renderArch() {
      const arch = architectures.find(a => a.id === selArch.value) || architectures[0];

      displayBox.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <h4 style="color: #38bdf8; margin: 0;"><i data-lucide="layout"></i> ${arch.name}</h4>
            <div>
              ${arch.domains.map(d => `<span class="badge-tech" style="font-size: 0.75rem; margin-left: 4px;">${d}</span>`).join('')}
            </div>
          </div>

          <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 14px;">
            ${arch.description}
          </p>

          <h5 style="color: #fbbf24; font-size: 0.85rem; margin-bottom: 8px;"><i data-lucide="git-commit"></i> End-to-End Pipeline Stages:</h5>
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
            ${arch.pipeline.map((p, idx) => `
              <div style="display: flex; align-items: center; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 6px; border-left: 3px solid ${['#38bdf8', '#34d399', '#fbbf24', '#c084fc', '#f87171'][idx % 5]}; font-size: 0.82rem;">
                <span style="font-weight: 700; width: 180px; flex-shrink: 0; color: #e2e8f0;">Stage ${idx + 1}: ${p.stage}</span>
                <span style="font-family: monospace; color: #94a3b8;">&rarr; ${p.tech}</span>
              </div>
            `).join('')}
          </div>

          <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 12px; font-size: 0.82rem;">
            <strong style="color: #38bdf8;"><i data-lucide="check-circle-2"></i> A+ Architectural Justification & Exam Rationale:</strong><br>
            <span style="color: var(--text-secondary);">${arch.justification}</span>
          </div>
        </div>
      `;

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    selArch.onchange = renderArch;
    renderArch();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive RS Day 5 Escape Room Simulator
  // -------------------------------------------------------------------------
  initEscapeRoomSimulator: function() {
    const chamberContainer = document.getElementById('escape-room-container');
    const badgeBar = document.getElementById('escape-room-keys-bar');
    const statusMsg = document.getElementById('escape-room-status');
    const puzzles = window.DAY10_ENSEMBLES_CRUCIBLE_DATA?.escapeRoomPuzzles || [];

    if (!chamberContainer || puzzles.length === 0) return;

    let unlockedKeys = new Set();

    function renderChambers() {
      // Keys Status Bar
      if (badgeBar) {
        badgeBar.innerHTML = puzzles.map(p => {
          const isDone = unlockedKeys.has(p.id);
          return `
            <span style="padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 700; border: 1px solid ${isDone ? '#34d399' : 'var(--border-color)'}; background: ${isDone ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.02)'}; color: ${isDone ? '#34d399' : 'var(--text-secondary)'};">
              Key ${p.id}: ${isDone ? 'UNLOCKED ✓' : 'LOCKED 🔒'}
            </span>
          `;
        }).join('');
      }

      if (statusMsg) {
        if (unlockedKeys.size === puzzles.length) {
          statusMsg.innerHTML = `
            <div style="background: rgba(52,211,153,0.15); border: 1px solid #34d399; color: #34d399; padding: 12px; border-radius: 6px; text-align: center; font-weight: 700; font-size: 0.95rem;">
              🎉 VAULT UNLOCKED! You have solved all 5 RS Escape Room Chambers! You are ready for the A+ Grand Crucible!
            </div>
          `;
        } else {
          statusMsg.innerHTML = `
            <div style="color: var(--text-secondary); font-size: 0.82rem;">
              Progress: <strong>${unlockedKeys.size} / ${puzzles.length}</strong> Chambers Solved. Solve each puzzle below to unlock the final portal.
            </div>
          `;
        }
      }

      chamberContainer.innerHTML = puzzles.map(p => {
        const isDone = unlockedKeys.has(p.id);
        return `
          <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid ${isDone ? '#34d399' : 'var(--border-color)'}; padding: 14px; margin-bottom: 12px; font-size: 0.85rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h5 style="color: ${isDone ? '#34d399' : '#38bdf8'}; margin: 0;">${p.title}</h5>
              <span class="badge-tech" style="font-size: 0.7rem;">${p.module}</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.82rem; margin-bottom: 10px;">
              ${p.scenario}
            </p>
            <div style="font-weight: 600; color: #f8fafc; margin-bottom: 8px;">
              ${p.question}
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
              ${p.options.map((opt, optIdx) => `
                <button class="btn btn-secondary escape-opt-btn" data-pid="${p.id}" data-oidx="${optIdx}" style="text-align: left; padding: 6px 10px; font-size: 0.8rem; border-color: ${isDone && optIdx === p.correctOptionIndex ? '#34d399' : 'var(--border-color)'}; ${isDone && optIdx === p.correctOptionIndex ? 'background: rgba(52,211,153,0.1); color: #34d399;' : ''}">
                  ${opt}
                </button>
              `).join('')}
            </div>

            <div id="escape-feedback-${p.id}" style="font-size: 0.8rem; display: ${isDone ? 'block' : 'none'}; color: #34d399;">
              <strong>Key Code Unlocked:</strong> ${p.answer} &mdash; <em>${p.explanation}</em>
            </div>
          </div>
        `;
      }).join('');

      // Attach button clicks
      const optBtns = chamberContainer.querySelectorAll('.escape-opt-btn');
      optBtns.forEach(btn => {
        btn.onclick = function() {
          const pid = parseInt(this.getAttribute('data-pid'));
          const oidx = parseInt(this.getAttribute('data-oidx'));
          const puzzle = puzzles.find(x => x.id === pid);
          const feedbackEl = document.getElementById(`escape-feedback-${pid}`);

          if (puzzle && oidx === puzzle.correctOptionIndex) {
            unlockedKeys.add(pid);
            renderChambers();
          } else {
            if (feedbackEl) {
              feedbackEl.style.display = 'block';
              feedbackEl.style.color = '#ef4444';
              feedbackEl.textContent = 'Incorrect keycode attempt! Check the formulas and try again.';
            }
          }
        };
      });
    }

    renderChambers();
  }
};
