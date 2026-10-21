// Interactive Visualizers for Day 9: Genetic Algorithms, Multimodal RVM Fusion & ReAct Agent

window.SprintDay9Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Genetic Algorithm TSP & WS1GA.xlsx Studio
  // -------------------------------------------------------------------------
  initGeneticAlgorithmTSPArena: function() {
    const canvas = document.getElementById('ga-tsp-canvas');
    const btnEvolve = document.getElementById('ga-btn-evolve');
    const btnStep = document.getElementById('ga-btn-step');
    const btnReset = document.getElementById('ga-btn-reset');
    const lblGen = document.getElementById('ga-val-gen');
    const lblDist = document.getElementById('ga-val-dist');
    const selTab = document.getElementById('ga-tab-select');
    const containerWS1 = document.getElementById('ga-ws1-container');
    const containerTSP = document.getElementById('ga-tsp-container');

    const cities = window.DAY9_OPTIMIZATION_AGENTS_DATA?.tspCities || [];
    const ws1Data = window.DAY9_OPTIMIZATION_AGENTS_DATA?.ws1gaBenchmark;

    // --- Tab Switching ---
    if (selTab) {
      selTab.onchange = function() {
        const isTSP = this.value === 'tsp';
        if (containerTSP) containerTSP.style.display = isTSP ? 'block' : 'none';
        if (containerWS1) containerWS1.style.display = isTSP ? 'none' : 'block';
      };
    }

    // --- Part A: WS1GA.xlsx Hand Calculation Studio ---
    if (containerWS1 && ws1Data) {
      containerWS1.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; font-size: 0.82rem;">
          <h4 style="color: #38bdf8; margin-bottom: 8px;"><i data-lucide="table"></i> Dr. Zhu Fangming's WS1GA.xlsx Master Worksheet Replica</h4>
          <p style="color: var(--text-secondary);">
            Problem: Maximize $f(x) = x^2$ for 5-bit binary integers $x \\in [0, 31]$. Total Population Fitness = <strong>${ws1Data.totalFitness}</strong>.
          </p>
          <div style="overflow-x: auto; margin-top: 10px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: center;">
              <thead>
                <tr style="background: rgba(255,255,255,0.05); border-bottom: 1px solid var(--border-color);">
                  <th style="padding: 6px;">ID</th>
                  <th style="padding: 6px;">Chromosome</th>
                  <th style="padding: 6px;">Integer x</th>
                  <th style="padding: 6px;">Fitness f(x)=x²</th>
                  <th style="padding: 6px; color: #38bdf8;">Selection Prob p_i</th>
                  <th style="padding: 6px; color: #34d399;">Cumulative Prob C_i</th>
                </tr>
              </thead>
              <tbody>
                ${ws1Data.population.map((p, idx) => `
                  <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                    <td style="padding: 6px; font-weight: 700;">#${p.id}</td>
                    <td style="padding: 6px; font-family: monospace; color: #fbbf24;">${p.binary}</td>
                    <td style="padding: 6px;">${p.x}</td>
                    <td style="padding: 6px; font-weight: 700;">${p.fitness}</td>
                    <td style="padding: 6px; color: #38bdf8;">${(ws1Data.expectedProbabilities[idx] * 100).toFixed(1)}%</td>
                    <td style="padding: 6px; color: #34d399; font-weight: 700;">${ws1Data.expectedCumulative[idx].toFixed(4)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div style="margin-top: 12px; padding: 10px; border-radius: 6px; background: rgba(56,189,248,0.06); border-left: 3px solid #38bdf8; font-size: 0.78rem;">
            <strong>Roulette-Wheel Selection Rule:</strong> Draw random number $r \\in [0, 1)$. Select chromosome $k$ where $C_{k-1} < r \\le C_k$. Chromosome #2 (${(ws1Data.expectedProbabilities[1]*100).toFixed(1)}% slice) will dominate mating!
          </div>
        </div>
      `;
    }

    // --- Part B: Live TSP Genetic Algorithm Evolver ---
    if (!canvas || cities.length === 0) return;
    const ctx = canvas.getContext('2d');

    let generation = 0;
    let population = [];
    const popSize = 40;
    let isRunning = false;
    let animId = null;

    function dist(c1, c2) {
      return Math.hypot(c1.x - c2.x, c1.y - c2.y);
    }

    function tourLength(tour) {
      let total = 0;
      for (let i = 0; i < tour.length; i++) {
        const next = (i + 1) % tour.length;
        total += dist(cities[tour[i]], cities[tour[next]]);
      }
      return total;
    }

    function initPopulation() {
      population = [];
      const baseTour = Array.from({ length: cities.length }, (_, i) => i);
      for (let i = 0; i < popSize; i++) {
        const tour = [...baseTour].sort(() => Math.random() - 0.5);
        population.push(tour);
      }
      generation = 0;
    }

    function orderCrossover(p1, p2) {
      const start = Math.floor(Math.random() * (p1.length - 2));
      const end = start + Math.floor(Math.random() * (p1.length - start - 1)) + 1;
      const child = new Array(p1.length).fill(-1);

      // Copy slice from p1
      for (let i = start; i <= end; i++) child[i] = p1[i];

      // Fill remaining positions from p2 preserving relative order
      let p2Idx = 0;
      for (let i = 0; i < p1.length; i++) {
        if (child[i] === -1) {
          while (child.includes(p2[p2Idx])) p2Idx++;
          child[i] = p2[p2Idx];
        }
      }
      return child;
    }

    function mutate(tour) {
      if (Math.random() < 0.15) {
        const i1 = Math.floor(Math.random() * tour.length);
        const i2 = Math.floor(Math.random() * tour.length);
        const tmp = tour[i1];
        tour[i1] = tour[i2];
        tour[i2] = tmp;
      }
      return tour;
    }

    function evolveStep() {
      // Sort by fitness (shorter distance = higher fitness)
      population.sort((a, b) => tourLength(a) - tourLength(b));

      // Elitism: keep top 2
      const nextGen = [population[0], population[1]];

      while (nextGen.length < popSize) {
        // Tournament selection
        const p1 = population[Math.floor(Math.random() * (popSize / 2))];
        const p2 = population[Math.floor(Math.random() * (popSize / 2))];
        const child = mutate(orderCrossover(p1, p2));
        nextGen.push(child);
      }

      population = nextGen;
      generation++;
      renderTSP();
    }

    function renderTSP() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      const bestTour = population[0] || Array.from({ length: cities.length }, (_, i) => i);
      const bestLen = tourLength(bestTour);

      if (lblGen) lblGen.textContent = generation;
      if (lblDist) lblDist.textContent = (bestLen * 100).toFixed(1) + ' km';

      // Draw Tour Paths
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < bestTour.length; i++) {
        const c1 = cities[bestTour[i]];
        const c2 = cities[bestTour[(i + 1) % bestTour.length]];
        if (i === 0) ctx.moveTo(c1.x * w, c1.y * h);
        ctx.lineTo(c2.x * w, c2.y * h);
      }
      ctx.stroke();

      // Draw City Nodes
      cities.forEach((c, idx) => {
        ctx.beginPath();
        ctx.arc(c.x * w, c.y * h, 7, 0, 2 * Math.PI);
        ctx.fillStyle = '#f59e0b';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '10px sans-serif';
        ctx.fillText(c.name.split(' ')[0], c.x * w + 9, c.y * h + 4);
      });
    }

    initPopulation();
    renderTSP();

    if (btnStep) btnStep.onclick = evolveStep;
    if (btnReset) {
      btnReset.onclick = function() {
        isRunning = false;
        if (animId) cancelAnimationFrame(animId);
        if (btnEvolve) btnEvolve.textContent = "Start Evolution";
        initPopulation();
        renderTSP();
      };
    }

    if (btnEvolve) {
      btnEvolve.onclick = function() {
        isRunning = !isRunning;
        if (isRunning) {
          this.textContent = "Pause Evolution";
          function loop() {
            evolveStep();
            if (isRunning) animId = requestAnimationFrame(loop);
          }
          loop();
        } else {
          this.textContent = "Start Evolution";
          if (animId) cancelAnimationFrame(animId);
        }
      };
    }
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Multimodal RVM Sensor Fusion Digital Twin (ISSM Day 4)
  // -------------------------------------------------------------------------
  initMultimodalRVMFusionTwin: function() {
    const selCase = document.getElementById('rvm-scenario-select');
    const displayBox = document.getElementById('rvm-sensor-display');
    const verdictBox = document.getElementById('rvm-verdict-box');
    const scenarios = window.DAY9_OPTIMIZATION_AGENTS_DATA?.rvmScenarios || [];

    if (!selCase || !displayBox || scenarios.length === 0) return;

    function renderScenario() {
      const sc = scenarios.find(s => s.id === selCase.value) || scenarios[0];
      const s = sc.sensors;
      const isWeightAnomaly = s.weight.grams < s.weight.expectedRange[0] || s.weight.grams > s.weight.expectedRange[1];
      const isFraud = sc.id === 'case-3' || sc.id === 'case-4';

      displayBox.innerHTML = `
        <div class="grid-2-col mt-2" style="font-size: 0.8rem; gap: 10px;">
          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border-left: 3px solid #38bdf8;">
            <strong style="color: #38bdf8;">1. Optical Barcode Scanner:</strong><br>
            Code: <code>${s.barcode.value}</code><br>
            Status: ${s.barcode.valid ? '<span style="color: #34d399;">Valid Registered EAN</span>' : '<span style="color: #ef4444;">Invalid</span>'} (${s.barcode.catalogType})
          </div>

          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border-left: 3px solid #34d399;">
            <strong style="color: #34d399;">2. 3D Contour Profile:</strong><br>
            Shape: <strong>${s.contour.shape}</strong> (${s.contour.heightMm}mm × ${s.contour.diameterMm}mm)<br>
            Deformation: ${(s.contour.deformation * 100).toFixed(0)}%
          </div>

          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border-left: 3px solid ${isWeightAnomaly ? '#ef4444' : '#f59e0b'};">
            <strong style="color: ${isWeightAnomaly ? '#ef4444' : '#f59e0b'};">3. Load Cell Mass Sensor:</strong><br>
            Weight: <strong>${s.weight.grams}g</strong> (Expected: ${s.weight.expectedRange[0]}-${s.weight.expectedRange[1]}g)<br>
            Status: ${isWeightAnomaly ? '<span style="color: #ef4444; font-weight: 700;">MASS ANOMALY</span>' : '<span style="color: #34d399;">Normal</span>'}
          </div>

          <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border-left: 3px solid #c084fc;">
            <strong style="color: #c084fc;">4. Inductive & Acoustic Knock:</strong><br>
            Metal Inductive: <strong>${s.metalInductive.detected ? 'Metal Detected' : 'Non-Metal'}</strong><br>
            Resonance Peak: <strong>${s.acousticFreqHz} Hz</strong> (${s.acousticFreqHz > 2000 ? 'Glass Ping' : (s.acousticFreqHz > 1200 ? 'Metal Ring' : 'Plastic Damp')})
          </div>
        </div>
      `;

      if (verdictBox) {
        verdictBox.innerHTML = `
          <div style="background: ${isFraud ? 'rgba(239,68,68,0.1)' : 'rgba(52,211,153,0.1)'}; border: 1px solid ${isFraud ? '#ef4444' : '#34d399'}; padding: 12px; border-radius: 8px; font-size: 0.85rem;">
            <strong style="color: ${isFraud ? '#ef4444' : '#34d399'}; font-size: 1rem;">
              ${isFraud ? '🚨 FRAUD DETECTED — CONTAINER REJECTED' : '✓ RECYCLING TRANSACTION APPROVED'}
            </strong>
            <p style="margin-top: 6px; color: var(--text-secondary); font-size: 0.8rem;">
              ${sc.groundTruth}
            </p>
          </div>
        `;
      }
    }

    selCase.onchange = renderScenario;
    renderScenario();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive Cognitive ReAct Agent Trace Simulator (CS Day 3)
  // -------------------------------------------------------------------------
  initCognitiveReActAgentSimulator: function() {
    const btnNext = document.getElementById('react-btn-next');
    const btnReset = document.getElementById('react-btn-reset');
    const logBox = document.getElementById('react-log-box');
    const steps = window.DAY9_OPTIMIZATION_AGENTS_DATA?.reactTrace || [];

    if (!btnNext || !logBox || steps.length === 0) return;

    let currentIdx = 0;

    function renderLog() {
      let html = '';
      for (let i = 0; i <= currentIdx && i < steps.length; i++) {
        const item = steps[i];
        let badgeColor = '#38bdf8';
        if (item.type === 'Thought') badgeColor = '#c084fc';
        else if (item.type === 'Action') badgeColor = '#f59e0b';
        else if (item.type === 'Observation') badgeColor = '#38bdf8';
        else if (item.type === 'Final Answer') badgeColor = '#34d399';

        html += `
          <div style="margin-bottom: 10px; padding: 10px; border-radius: 6px; background: rgba(255,255,255,0.02); border-left: 3px solid ${badgeColor}; font-size: 0.8rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-weight: 700; color: ${badgeColor}; font-family: monospace;">[Step ${item.step}: ${item.type}]</span>
              ${item.tool ? `<span class="badge-tech" style="font-size: 0.7rem;">Tool: ${item.tool}</span>` : ''}
            </div>
            <div style="color: #e2e8f0; font-family: ${item.type === 'Action' ? 'monospace' : 'inherit'};">
              ${item.content || item.input}
            </div>
          </div>
        `;
      }
      logBox.innerHTML = html;
    }

    btnNext.onclick = function() {
      if (currentIdx < steps.length - 1) {
        currentIdx++;
        renderLog();
      }
    };

    if (btnReset) {
      btnReset.onclick = function() {
        currentIdx = 0;
        renderLog();
      };
    }

    renderLog();
  }
};
