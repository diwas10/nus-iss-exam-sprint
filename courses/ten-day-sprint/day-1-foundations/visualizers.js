// Upgraded Interactive Visualizers for Day 1: A* Search, CSP N-Queens, k-NN Boundary, Naive Bayes Laplace, Confusion Matrix & Lift Charts

window.SprintDay1Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive A* Graph Search Simulator
  // -------------------------------------------------------------------------
  initAStarPlayground: function() {
    const canvas = document.getElementById('astar-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const graphData = window.DAY1_FOUNDATIONS_DATA?.searchGraph;
    if (!graphData) return;

    const btnStep = document.getElementById('astar-btn-step');
    const btnReset = document.getElementById('astar-btn-reset');
    const selectHeuristic = document.getElementById('astar-heuristic-mode');
    const tableOpenBody = document.getElementById('astar-open-body');
    const closedListEl = document.getElementById('astar-closed-list');
    const logEl = document.getElementById('astar-log-box');

    let heuristicMode = 'admissible';
    let openList = [];
    let closedSet = new Set();
    let currentNode = null;
    let pathFound = null;
    let stepCount = 0;

    function resetSimulation() {
      heuristicMode = selectHeuristic ? selectHeuristic.value : 'admissible';
      const startH = heuristicMode === 'admissible' 
        ? graphData.nodes['S'].h_admissible 
        : graphData.nodes['S'].h_inadmissible;

      openList = [{ node: 'S', g: 0, h: startH, f: startH, parent: null }];
      closedSet = new Set();
      currentNode = null;
      pathFound = null;
      stepCount = 0;

      updateUI();
      if (logEl) logEl.innerHTML = '';
      logMessage(`A* Initialized. Start Node S placed in OPEN with g=0, h=${startH}, f=${startH}.`);
      renderCanvas();
    }

    function logMessage(msg) {
      if (!logEl) return;
      logEl.innerHTML = `<div class="log-entry" style="margin-bottom: 4px; padding-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.05);"><span style="color: #38bdf8;">[Step ${stepCount}]</span> ${msg}</div>` + logEl.innerHTML;
    }

    function stepAStar() {
      if (pathFound) {
        logMessage(`🎯 Search complete! Optimal path already found: <strong>${pathFound.join(' ➔ ')}</strong>`);
        return;
      }
      if (openList.length === 0) {
        logMessage(`⚠️ OPEN list is empty! No path exists to Goal.`);
        return;
      }

      stepCount++;

      // Sort OPEN list by f-value (ascending). Tie-breaker: lowest h
      openList.sort((a, b) => a.f - b.f || a.h - b.h);

      // Pop best node
      currentNode = openList.shift();
      closedSet.add(currentNode.node);

      logMessage(`Expanded Node <strong>${currentNode.node}</strong> (g=${currentNode.g}, h=${currentNode.h}, f=${currentNode.f}).`);

      // Goal Test upon EXPANSION (NUS ISS Rule: A* only tests goal when popped from OPEN!)
      if (currentNode.node === 'G') {
        const path = [];
        let curr = currentNode;
        while (curr) {
          path.unshift(curr.node);
          curr = curr.parent;
        }
        pathFound = path;
        logMessage(`🎉 GOAL REACHED! Optimal Path: <strong>${path.join(' ➔ ')}</strong> (Total Cost = ${currentNode.g})`);
        updateUI();
        renderCanvas();
        return;
      }

      // Find neighbors
      const neighbors = graphData.edges.filter(e => e.from === currentNode.node);
      neighbors.forEach(edge => {
        const neighborId = edge.to;
        if (closedSet.has(neighborId)) return;

        const tentativeG = currentNode.g + edge.cost;
        const hVal = heuristicMode === 'admissible' 
          ? graphData.nodes[neighborId].h_admissible 
          : graphData.nodes[neighborId].h_inadmissible;
        const fVal = tentativeG + hVal;

        const existingOpen = openList.find(item => item.node === neighborId);
        if (!existingOpen) {
          openList.push({ node: neighborId, g: tentativeG, h: hVal, f: fVal, parent: currentNode });
          logMessage(`&nbsp;&nbsp;↳ Added <strong>${neighborId}</strong> to OPEN (g=${tentativeG}, h=${hVal}, f=${fVal}).`);
        } else if (tentativeG < existingOpen.g) {
          existingOpen.g = tentativeG;
          existingOpen.f = fVal;
          existingOpen.parent = currentNode;
          logMessage(`&nbsp;&nbsp;↳ Cheaper path to <strong>${neighborId}</strong> found! Updated g=${tentativeG}, f=${fVal}.`);
        }
      });

      updateUI();
      renderCanvas();
    }

    function updateUI() {
      if (tableOpenBody) {
        if (openList.length === 0) {
          tableOpenBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 8px;">Empty</td></tr>`;
        } else {
          const sorted = [...openList].sort((a, b) => a.f - b.f || a.h - b.h);
          tableOpenBody.innerHTML = sorted.map((item, idx) => `
            <tr style="background: ${idx === 0 ? 'rgba(56, 189, 248, 0.15)' : 'transparent'};">
              <td style="padding: 4px 8px; font-weight: 700; color: ${idx === 0 ? '#38bdf8' : 'var(--text-primary)'};">${item.node} ${idx === 0 ? '(NEXT)' : ''}</td>
              <td style="padding: 4px 8px;">${item.g}</td>
              <td style="padding: 4px 8px;">${item.h}</td>
              <td style="padding: 4px 8px; font-weight: 600;">${item.f}</td>
              <td style="padding: 4px 8px; color: var(--text-muted);">${item.parent ? item.parent.node : '-'}</td>
            </tr>
          `).join('');
        }
      }

      if (closedListEl) {
        if (closedSet.size === 0) {
          closedListEl.innerHTML = `<span style="color: var(--text-muted);">None</span>`;
        } else {
          closedListEl.innerHTML = Array.from(closedSet).map(n => `
            <span class="badge-tech" style="display: inline-block; margin-right: 4px; padding: 2px 8px; font-size: 0.75rem;">${n}</span>
          `).join('');
        }
      }
    }

    function renderCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Edges
      graphData.edges.forEach(edge => {
        const nFrom = graphData.nodes[edge.from];
        const nTo = graphData.nodes[edge.to];

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2;

        if (pathFound) {
          for (let i = 0; i < pathFound.length - 1; i++) {
            if (pathFound[i] === edge.from && pathFound[i+1] === edge.to) {
              ctx.strokeStyle = '#34d399';
              ctx.lineWidth = 4;
              break;
            }
          }
        }

        ctx.beginPath();
        ctx.moveTo(nFrom.x, nFrom.y);
        ctx.lineTo(nTo.x, nTo.y);
        ctx.stroke();

        // Edge Cost Label
        const midX = (nFrom.x + nTo.x) / 2;
        const midY = (nFrom.y + nTo.y) / 2;
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px JetBrains Mono, monospace';
        ctx.fillText(`c=${edge.cost}`, midX - 8, midY - 6);
      });

      // Draw Nodes
      Object.keys(graphData.nodes).forEach(nodeId => {
        const node = graphData.nodes[nodeId];
        const isCurrent = currentNode && currentNode.node === nodeId;
        const isClosed = closedSet.has(nodeId);
        const isOpen = openList.some(item => item.node === nodeId);
        const isInPath = pathFound && pathFound.includes(nodeId);

        let fillColor = '#1e293b';
        let strokeColor = '#475569';

        if (isInPath) {
          fillColor = '#065f46';
          strokeColor = '#34d399';
        } else if (isCurrent) {
          fillColor = '#0369a1';
          strokeColor = '#38bdf8';
        } else if (isClosed) {
          fillColor = '#334155';
          strokeColor = '#64748b';
        } else if (isOpen) {
          fillColor = '#1e3a8a';
          strokeColor = '#60a5fa';
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.lineWidth = isCurrent || isInPath ? 3 : 2;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();

        // Node ID
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nodeId, node.x, node.y);

        // Node h-value
        const hVal = heuristicMode === 'admissible' ? node.h_admissible : node.h_inadmissible;
        ctx.fillStyle = '#f59e0b';
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillText(`h=${hVal}`, node.x, node.y + 28);
      });
    }

    if (btnStep) btnStep.onclick = stepAStar;
    if (btnReset) btnReset.onclick = resetSimulation;
    if (selectHeuristic) selectHeuristic.onchange = resetSimulation;

    resetSimulation();
  },

  // -------------------------------------------------------------------------
  // 2. NEW: Interactive CSP Backtracking & Heuristics Studio (N-Queens & Map)
  // -------------------------------------------------------------------------
  initCSPNQueensStudio: function() {
    const canvas = document.getElementById('csp-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const btnStep = document.getElementById('csp-btn-step');
    const btnSolve = document.getElementById('csp-btn-solve');
    const btnReset = document.getElementById('csp-btn-reset');
    const chkMRV = document.getElementById('csp-chk-mrv');
    const chkForwardChecking = document.getElementById('csp-chk-fc');
    const logEl = document.getElementById('csp-log-box');
    const statusEl = document.getElementById('csp-status-text');

    const N = 4; // 4-Queens for clean, clear step-by-step visual demonstration
    let queens = [-1, -1, -1, -1]; // queens[row] = col
    let domains = []; // domains[row] = [0, 1, 2, 3]
    let stateStack = [];
    let stepCount = 0;
    let isSolved = false;
    let autoInterval = null;

    function resetCSP() {
      if (autoInterval) { clearInterval(autoInterval); autoInterval = null; }
      queens = [-1, -1, -1, -1];
      domains = [
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3],
        [0, 1, 2, 3]
      ];
      stateStack = [{ row: 0, colIndex: 0 }];
      stepCount = 0;
      isSolved = false;
      if (logEl) logEl.innerHTML = '';
      if (statusEl) statusEl.textContent = 'CSP Initialized. 4-Queens board empty.';
      logCSP('Board initialized. Each variable (Row 0..3) has domain {0, 1, 2, 3}.');
      renderBoard();
    }

    function logCSP(msg) {
      if (!logEl) return;
      logEl.innerHTML = `<div style="margin-bottom: 4px; padding-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,0.05);"><span style="color: #a78bfa;">[Step ${stepCount}]</span> ${msg}</div>` + logEl.innerHTML;
    }

    function isSafe(row, col) {
      for (let r = 0; r < row; r++) {
        const c = queens[r];
        if (c === col) return false; // same column
        if (Math.abs(r - row) === Math.abs(c - col)) return false; // same diagonal
      }
      return true;
    }

    function stepCSP() {
      if (isSolved) {
        logCSP('🎉 Solution already achieved! Click Reset to try different heuristics.');
        return;
      }
      stepCount++;

      // Find unassigned row with Minimum Remaining Values (MRV) if enabled
      let targetRow = -1;
      if (chkMRV && chkMRV.checked) {
        let minDomainSize = 999;
        for (let r = 0; r < N; r++) {
          if (queens[r] === -1 && domains[r].length > 0 && domains[r].length < minDomainSize) {
            minDomainSize = domains[r].length;
            targetRow = r;
          }
        }
      }
      if (targetRow === -1) {
        for (let r = 0; r < N; r++) {
          if (queens[r] === -1) { targetRow = r; break; }
        }
      }

      if (targetRow === -1) {
        isSolved = true;
        if (statusEl) statusEl.textContent = '✅ All 4 Queens placed with ZERO constraint violations!';
        logCSP('🎉 <strong>SOLVED!</strong> All 4 Queens legally placed.');
        renderBoard();
        return;
      }

      // Try next available value in targetRow's domain
      let placed = false;
      while (domains[targetRow].length > 0) {
        const candidateCol = domains[targetRow].shift();
        if (isSafe(targetRow, candidateCol)) {
          queens[targetRow] = candidateCol;
          placed = true;
          logCSP(`Placed Queen at <strong>Row ${targetRow}, Col ${candidateCol}</strong>.`);

          // Forward Checking: prune future domains immediately
          if (chkForwardChecking && chkForwardChecking.checked) {
            let deadEnd = false;
            for (let nextRow = targetRow + 1; nextRow < N; nextRow++) {
              domains[nextRow] = domains[nextRow].filter(c => isSafe(nextRow, c));
              if (domains[nextRow].length === 0) {
                deadEnd = true;
                logCSP(`&nbsp;&nbsp;⚠️ <em>Forward Checking Alert:</em> Row ${nextRow} domain wiped out! Triggering immediate backtrack.`);
              }
            }
          }
          break;
        } else {
          logCSP(`&nbsp;&nbsp;❌ Conflict: Row ${targetRow}, Col ${candidateCol} violates column or diagonal.`);
        }
      }

      if (!placed) {
        // Backtrack
        logCSP(`↩️ <strong>Backtrack:</strong> No legal column in Row ${targetRow}. Removing previous Queen.`);
        for (let r = N - 1; r >= 0; r--) {
          if (queens[r] !== -1) {
            const prevCol = queens[r];
            queens[r] = -1;
            // Restore domain excluding tested
            domains[r] = [];
            for (let c = prevCol + 1; c < N; c++) domains[r].push(c);
            break;
          }
        }
      }

      // Check if all placed
      if (!queens.includes(-1)) {
        isSolved = true;
        if (statusEl) statusEl.textContent = '✅ 4-Queens CSP Solution Found!';
        logCSP('🎉 <strong>SUCCESS!</strong> Safe assignment found: [' + queens.join(', ') + '].');
      }

      renderBoard();
    }

    function renderBoard() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cellSize = canvas.width / N;

      for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
          const isDark = (r + c) % 2 === 1;
          ctx.fillStyle = isDark ? '#1e293b' : '#334155';
          ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);

          // Grid border
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.strokeRect(c * cellSize, r * cellSize, cellSize, cellSize);

          // Queen placement
          if (queens[r] === c) {
            ctx.fillStyle = '#fbbf24';
            ctx.font = 'bold 28px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('♛', c * cellSize + cellSize / 2, r * cellSize + cellSize / 2);
          }
        }
      }
    }

    if (btnStep) btnStep.onclick = stepCSP;
    if (btnReset) btnReset.onclick = resetCSP;
    if (btnSolve) {
      btnSolve.onclick = function() {
        if (autoInterval) {
          clearInterval(autoInterval);
          autoInterval = null;
          btnSolve.innerHTML = '<i data-lucide="play"></i> Auto Solve';
        } else {
          btnSolve.innerHTML = '<i data-lucide="pause"></i> Pause';
          autoInterval = setInterval(() => {
            if (isSolved) {
              clearInterval(autoInterval);
              autoInterval = null;
              btnSolve.innerHTML = '<i data-lucide="play"></i> Auto Solve';
            } else {
              stepCSP();
            }
          }, 350);
        }
      };
    }

    resetCSP();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive k-NN Decision Boundary Studio
  // -------------------------------------------------------------------------
  initKNNBoundaryPlayground: function() {
    const canvas = document.getElementById('knn-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sliderK = document.getElementById('knn-slider-k');
    const lblK = document.getElementById('knn-val-k');
    const selectMetric = document.getElementById('knn-metric-select');
    const btnBoundary = document.getElementById('knn-btn-boundary');
    const btnReset = document.getElementById('knn-btn-reset');

    let samplePoints = JSON.parse(JSON.stringify(window.DAY1_FOUNDATIONS_DATA?.knnSamplePoints || []));
    let k = sliderK ? parseInt(sliderK.value, 10) : 3;
    let metric = selectMetric ? selectMetric.value : 'euclidean';
    let showBoundary = false;

    function getDistance(x1, y1, x2, y2, m) {
      if (m === 'manhattan') {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
      }
      return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
    }

    function predictKNN(qx, qy, currentK, currentM) {
      const distances = samplePoints.map(p => ({
        dist: getDistance(qx, qy, p.x, p.y, currentM),
        label: p.label
      }));

      distances.sort((a, b) => a.dist - b.dist);
      const topK = distances.slice(0, currentK);

      let votesClass1 = 0;
      topK.forEach(item => { if (item.label === 1) votesClass1++; });
      return votesClass1 > topK.length / 2 ? 1 : 0;
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw Decision Boundary heatmap if toggled
      if (showBoundary) {
        const step = 8;
        for (let px = 0; px < w; px += step) {
          for (let py = 0; py < h; py += step) {
            const normX = px / w;
            const normY = py / h;
            const pred = predictKNN(normX, normY, k, metric);
            ctx.fillStyle = pred === 1 ? 'rgba(239, 68, 68, 0.12)' : 'rgba(56, 189, 248, 0.12)';
            ctx.fillRect(px, py, step, step);
          }
        }
      }

      // Draw Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 50) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 50) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Draw Points
      samplePoints.forEach(p => {
        const px = p.x * w;
        const py = p.y * h;

        ctx.beginPath();
        ctx.arc(px, py, 6, 0, 2 * Math.PI);
        ctx.fillStyle = p.label === 1 ? '#ef4444' : '#38bdf8';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      });
    }

    // Canvas click to add point
    canvas.onclick = function(e) {
      const rect = canvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) / canvas.width;
      const clickY = (e.clientY - rect.top) / canvas.height;

      const addClassRadio = document.querySelector('input[name="knn-add-class"]:checked');
      const chosenClass = addClassRadio ? parseInt(addClassRadio.value, 10) : 0;

      samplePoints.push({ x: clickX, y: clickY, label: chosenClass });
      render();
    };

    if (sliderK) {
      sliderK.oninput = function() {
        k = parseInt(this.value, 10);
        if (lblK) lblK.textContent = k;
        render();
      };
    }

    if (selectMetric) {
      selectMetric.onchange = function() {
        metric = this.value;
        render();
      };
    }

    if (btnBoundary) {
      btnBoundary.onclick = function() {
        showBoundary = !showBoundary;
        this.innerHTML = showBoundary 
          ? '<i data-lucide="eye-off"></i> Hide Decision Boundary' 
          : '<i data-lucide="eye"></i> Compute Decision Boundary';
        render();
        if (window.lucide) window.lucide.createIcons();
      };
    }

    if (btnReset) {
      btnReset.onclick = function() {
        samplePoints = JSON.parse(JSON.stringify(window.DAY1_FOUNDATIONS_DATA?.knnSamplePoints || []));
        render();
      };
    }

    render();
  },

  // -------------------------------------------------------------------------
  // 4. NEW: Interactive Naive Bayes Fruit & Laplace Smoothing Calculator
  // -------------------------------------------------------------------------
  initNaiveBayesLaplaceStudio: function() {
    const fruitData = window.DAY1_FOUNDATIONS_DATA?.naiveBayesFruitData;
    if (!fruitData) return;

    const selLong = document.getElementById('nb-sel-long');
    const selSweet = document.getElementById('nb-sel-sweet');
    const selYellow = document.getElementById('nb-sel-yellow');
    const chkLaplace = document.getElementById('nb-chk-laplace');
    const resultBox = document.getElementById('nb-result-container');

    function computePosterior() {
      if (!resultBox) return;

      const useLaplace = chkLaplace && chkLaplace.checked;
      const isLong = selLong ? selLong.value : 'Yes';
      const isSweet = selSweet ? selSweet.value : 'Yes';
      const isYellow = selYellow ? selYellow.value : 'Yes';

      const totalItems = fruitData.priorCounts.Total;
      const classes = fruitData.classes; // ["Banana", "Orange", "Other"]
      const alpha = useLaplace ? 1 : 0;
      const numFeatureValues = 2; // Yes / No (binary feature cardinality)

      let scores = {};
      let mathBreakdown = '';

      classes.forEach(c => {
        const priorCount = fruitData.priorCounts[c];
        const pPrior = priorCount / totalItems;

        // Long likelihood
        const longCount = fruitData.features.Long[c][isLong];
        const pLong = (longCount + alpha) / (priorCount + alpha * numFeatureValues);

        // Sweet likelihood
        const sweetCount = fruitData.features.Sweet[c][isSweet];
        const pSweet = (sweetCount + alpha) / (priorCount + alpha * numFeatureValues);

        // Yellow likelihood
        const yellowCount = fruitData.features.Yellow[c][isYellow];
        const pYellow = (yellowCount + alpha) / (priorCount + alpha * numFeatureValues);

        const unnormalizedScore = pPrior * pLong * pSweet * pYellow;
        scores[c] = unnormalizedScore;

        const isZeroCatastrophe = !useLaplace && unnormalizedScore === 0;

        mathBreakdown += `
          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; margin-bottom: 8px; border-left: 3px solid ${isZeroCatastrophe ? '#ef4444' : 'var(--accent-cyan)'};">
            <div style="display: flex; justify-content: space-between; font-weight: 700;">
              <span>Class: ${c}</span>
              <span style="color: ${isZeroCatastrophe ? '#ef4444' : '#38bdf8'}; font-family: monospace;">
                Score = ${unnormalizedScore.toFixed(5)} ${isZeroCatastrophe ? '⚠️ ZERO CATASTROPHE' : ''}
              </span>
            </div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px; font-family: monospace;">
              P(${c}) = ${priorCount}/${totalItems} = ${pPrior.toFixed(2)}<br>
              P(Long=${isLong}|${c}) = (${longCount} + ${alpha})/(${priorCount} + ${alpha*2}) = ${pLong.toFixed(3)}<br>
              P(Sweet=${isSweet}|${c}) = (${sweetCount} + ${alpha})/(${priorCount} + ${alpha*2}) = ${pSweet.toFixed(3)}<br>
              P(Yellow=${isYellow}|${c}) = (${yellowCount} + ${alpha})/(${priorCount} + ${alpha*2}) = ${pYellow.toFixed(3)}
            </div>
          </div>
        `;
      });

      const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
      let predictedClass = 'Undetermined';
      let maxScore = -1;

      let pctBreakdown = '';
      classes.forEach(c => {
        const probPct = totalScore > 0 ? (scores[c] / totalScore * 100) : 0;
        if (scores[c] > maxScore) {
          maxScore = scores[c];
          predictedClass = c;
        }
        pctBreakdown += `
          <div style="margin-bottom: 6px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem;">
              <span>${c}</span>
              <strong style="color: ${c === predictedClass ? '#34d399' : 'var(--text-secondary)'};">${probPct.toFixed(1)}%</strong>
            </div>
            <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; margin-top: 2px;">
              <div style="width: ${probPct}\\%; height: 100\\%; background: ${c === predictedClass ? '#34d399' : '#38bdf8'}; border-radius: 3px;"></div>
            </div>
          </div>
        `;
      });

      resultBox.innerHTML = `
        <div style="margin-bottom: 12px; padding: 10px; background: rgba(56, 189, 248, 0.1); border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.3);">
          <strong style="font-size: 0.9rem; color: #38bdf8;">Predicted Class: ${predictedClass.toUpperCase()}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-left: 8px;">(Laplace Smoothing: ${useLaplace ? 'ENABLED α=1' : 'DISABLED α=0'})</span>
        </div>
        ${pctBreakdown}
        <div style="margin-top: 12px;">
          <strong style="font-size: 0.8rem; color: var(--text-secondary);">Exact Step-by-Step Evidence Product:</strong>
          <div style="margin-top: 6px;">${mathBreakdown}</div>
        </div>
      `;
    }

    if (selLong) selLong.onchange = computePosterior;
    if (selSweet) selSweet.onchange = computePosterior;
    if (selYellow) selYellow.onchange = computePosterior;
    if (chkLaplace) chkLaplace.onchange = computePosterior;

    computePosterior();
  },

  // -------------------------------------------------------------------------
  // 5. Interactive Confusion Matrix Studio & ROC Point
  // -------------------------------------------------------------------------
  initConfusionMatrixPlayground: function() {
    const sliderTP = document.getElementById('cm-slider-tp');
    const sliderFP = document.getElementById('cm-slider-fp');
    const sliderFN = document.getElementById('cm-slider-fn');
    const sliderTN = document.getElementById('cm-slider-tn');

    const lblTP = document.getElementById('cm-val-tp');
    const lblFP = document.getElementById('cm-val-fp');
    const lblFN = document.getElementById('cm-val-fn');
    const lblTN = document.getElementById('cm-val-tn');

    const outSens = document.getElementById('cm-out-sensitivity');
    const outPrec = document.getElementById('cm-out-precision');
    const outSpec = document.getElementById('cm-out-specificity');
    const outAcc = document.getElementById('cm-out-accuracy');
    const outF1 = document.getElementById('cm-out-f1');
    const outArith = document.getElementById('cm-out-arithmetic');
    const canvas = document.getElementById('cm-roc-canvas');

    function update() {
      const tp = sliderTP ? parseFloat(sliderTP.value) : 90;
      const fp = sliderFP ? parseFloat(sliderFP.value) : 10;
      const fn = sliderFN ? parseFloat(sliderFN.value) : 20;
      const tn = sliderTN ? parseFloat(sliderTN.value) : 880;

      if (lblTP) lblTP.textContent = tp;
      if (lblFP) lblFP.textContent = fp;
      if (lblFN) lblFN.textContent = fn;
      if (lblTN) lblTN.textContent = tn;

      const total = tp + fp + fn + tn;
      const sensitivity = tp + fn > 0 ? tp / (tp + fn) : 0;
      const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
      const specificity = tn + fp > 0 ? tn / (tn + fp) : 0;
      const accuracy = total > 0 ? (tp + tn) / total : 0;
      const f1 = precision + sensitivity > 0 ? (2 * precision * sensitivity) / (precision + sensitivity) : 0;
      const arithmetic = (precision + sensitivity) / 2;
      const fpr = 1 - specificity;

      if (outSens) outSens.textContent = (sensitivity * 100).toFixed(1) + '%';
      if (outPrec) outPrec.textContent = (precision * 100).toFixed(1) + '%';
      if (outSpec) outSpec.textContent = (specificity * 100).toFixed(1) + '%';
      if (outAcc) outAcc.textContent = (accuracy * 100).toFixed(1) + '%';
      if (outF1) outF1.textContent = f1.toFixed(3);
      if (outArith) outArith.textContent = arithmetic.toFixed(3);

      // Render ROC Canvas
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const pad = 35;
        const plotW = w - pad * 2;
        const plotH = h - pad * 2;

        // Draw Axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pad, pad); ctx.lineTo(pad, h - pad); ctx.lineTo(w - pad, h - pad);
        ctx.stroke();

        // 45-degree random guessing dashed line
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(pad, h - pad);
        ctx.lineTo(w - pad, pad);
        ctx.stroke();
        ctx.setLineDash([]);

        // Axis Labels
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('False Positive Rate (1 - Specificity)', pad + plotW / 2, h - 8);

        ctx.save();
        ctx.translate(12, pad + plotH / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('True Positive Rate (Sensitivity)', 0, 0);
        ctx.restore();

        // Plot Operating Point
        const ptX = pad + fpr * plotW;
        const ptY = h - pad - sensitivity * plotH;

        ctx.beginPath();
        ctx.arc(ptX, ptY, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#34d399';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#34d399';
        ctx.font = 'bold 11px JetBrains Mono, monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`(${fpr.toFixed(2)}, ${sensitivity.toFixed(2)})`, ptX + 8, ptY - 4);
      }
    }

    [sliderTP, sliderFP, sliderFN, sliderTN].forEach(sl => {
      if (sl) sl.oninput = update;
    });

    update();
  },

  // -------------------------------------------------------------------------
  // 6. NEW: Cumulative Gain & Lift Chart Studio
  // -------------------------------------------------------------------------
  initLiftChartStudio: function() {
    const tableBody = document.getElementById('lift-table-body');
    const canvas = document.getElementById('lift-canvas');
    const liftData = window.DAY1_FOUNDATIONS_DATA?.liftChartData;
    if (!liftData || !tableBody) return;

    // Populate Decile Table
    tableBody.innerHTML = liftData.map(row => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
        <td style="padding: 6px 10px; font-weight: 700; color: var(--accent-cyan);">Decile ${row.decile} (${row.decile * 10}%)</td>
        <td style="padding: 6px 10px;">${row.responders}</td>
        <td style="padding: 6px 10px;">${row.cumResponders} / 500</td>
        <td style="padding: 6px 10px; font-weight: 600; color: #34d399;">${row.cumGainPct.toFixed(1)}%</td>
        <td style="padding: 6px 10px; font-weight: 700; color: ${row.lift > 1.0 ? '#38bdf8' : '#94a3b8'};">${row.lift.toFixed(2)}x</td>
      </tr>
    `).join('');

    // Render Lift Canvas
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const pad = 35;
      const plotW = w - pad * 2;
      const plotH = h - pad * 2;

      // Draw Axes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad, pad); ctx.lineTo(pad, h - pad); ctx.lineTo(w - pad, h - pad);
      ctx.stroke();

      // Baseline lift = 1.0 line
      const baselineY = h - pad - (1.0 / 3.0) * plotH;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(pad, baselineY);
      ctx.lineTo(w - pad, baselineY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('Baseline Lift = 1.0x', w - pad - 110, baselineY - 6);

      // Plot Model Lift Line
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      liftData.forEach((pt, i) => {
        const x = pad + (i / (liftData.length - 1)) * plotW;
        const y = h - pad - (pt.lift / 3.0) * plotH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Plot Data Dots
      liftData.forEach((pt, i) => {
        const x = pad + (i / (liftData.length - 1)) * plotW;
        const y = h - pad - (pt.lift / 3.0) * plotH;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#38bdf8';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Axis Labels
      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('% Population Targeted (Deciles 1 to 10)', pad + plotW / 2, h - 8);
    }
  }
};
