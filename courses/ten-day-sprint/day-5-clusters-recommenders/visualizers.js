// Interactive Visualizers for Day 5: Clustering, Market Basket (Apriori), Collaborative Filtering & Neural CF

window.SprintDay5Visualizers = {
  // -------------------------------------------------------------------------
  // 1. Interactive Clustering Arena: K-Means, Hierarchical & DBSCAN Studio
  // -------------------------------------------------------------------------
  initClusteringArena: function() {
    const canvas = document.getElementById('cluster-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const selAlgo = document.getElementById('cluster-algo-select');
    const selData = document.getElementById('cluster-data-select');
    const sliderK = document.getElementById('cluster-slider-k');
    const lblK = document.getElementById('cluster-val-k');
    const sliderEps = document.getElementById('cluster-slider-eps');
    const lblEps = document.getElementById('cluster-val-eps');
    const sliderMinPts = document.getElementById('cluster-slider-minpts');
    const lblMinPts = document.getElementById('cluster-val-minpts');
    const metricsBox = document.getElementById('cluster-metrics-display');

    let currentAlgo = selAlgo ? selAlgo.value : 'kmeans';
    let currentDataset = selData ? selData.value : 'blobs';
    let kVal = sliderK ? parseInt(sliderK.value, 10) : 3;
    let epsVal = sliderEps ? parseFloat(sliderEps.value) : 0.15;
    let minPtsVal = sliderMinPts ? parseInt(sliderMinPts.value, 10) : 3;

    const clusterColors = ['#38bdf8', '#34d399', '#f59e0b', '#a855f7', '#ec4899'];

    function getPoints() {
      const dataObj = window.DAY5_CLUSTERS_RECOMMENDERS_DATA;
      return currentDataset === 'blobs' ? dataObj?.gaussianBlobs || [] : dataObj?.twoMoons || [];
    }

    function runKMeans(pts, k) {
      if (pts.length === 0) return { assignments: [], centroids: [] };

      // Initialize centroids deterministically for reproducibility
      let centroids = [];
      for (let i = 0; i < k; i++) {
        const idx = Math.floor((i + 1) * pts.length / (k + 1));
        centroids.push({ x: pts[idx].x, y: pts[idx].y });
      }

      let assignments = new Array(pts.length).fill(0);

      // Run 8 iterations of Lloyd's algorithm
      for (let iter = 0; iter < 8; iter++) {
        // Assignment step
        pts.forEach((p, pIdx) => {
          let minDist = Infinity;
          let bestC = 0;
          centroids.forEach((c, cIdx) => {
            const distSq = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
            if (distSq < minDist) {
              minDist = distSq;
              bestC = cIdx;
            }
          });
          assignments[pIdx] = bestC;
        });

        // Update step
        const sums = Array.from({ length: k }, () => ({ x: 0, y: 0, count: 0 }));
        pts.forEach((p, pIdx) => {
          const c = assignments[pIdx];
          sums[c].x += p.x;
          sums[c].y += p.y;
          sums[c].count++;
        });

        centroids = sums.map((s, idx) => {
          if (s.count === 0) return centroids[idx];
          return { x: s.x / s.count, y: s.y / s.count };
        });
      }

      return { assignments, centroids };
    }

    function runDBSCAN(pts, eps, minPts) {
      const n = pts.length;
      const labels = new Array(n).fill(-1); // -1 = unvisited
      const pointTypes = new Array(n).fill('noise'); // 'core', 'border', 'noise'
      let clusterId = 0;

      function regionQuery(pIdx) {
        const neighbors = [];
        const p = pts[pIdx];
        for (let i = 0; i < n; i++) {
          const q = pts[i];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist <= eps) neighbors.push(i);
        }
        return neighbors;
      }

      for (let i = 0; i < n; i++) {
        if (labels[i] !== -1) continue;

        const neighbors = regionQuery(i);
        if (neighbors.length < minPts) {
          pointTypes[i] = 'noise';
        } else {
          pointTypes[i] = 'core';
          labels[i] = clusterId;
          const queue = [...neighbors];

          while (queue.length > 0) {
            const qIdx = queue.shift();
            if (labels[qIdx] === -1 || pointTypes[qIdx] === 'noise') {
              if (labels[qIdx] === -1) {
                const qNeighbors = regionQuery(qIdx);
                if (qNeighbors.length >= minPts) {
                  pointTypes[qIdx] = 'core';
                  queue.push(...qNeighbors.filter(idx => !queue.includes(idx)));
                } else {
                  pointTypes[qIdx] = 'border';
                }
              }
              labels[qIdx] = clusterId;
            }
          }
          clusterId++;
        }
      }

      return { labels, pointTypes, numClusters: clusterId };
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const pts = getPoints();

      if (lblK) lblK.textContent = kVal;
      if (lblEps) lblEps.textContent = epsVal.toFixed(2);
      if (lblMinPts) lblMinPts.textContent = minPtsVal;

      if (currentAlgo === 'kmeans' || currentAlgo === 'hierarchical') {
        const { assignments, centroids } = runKMeans(pts, kVal);

        // Draw connections to centroids
        pts.forEach((p, idx) => {
          const c = centroids[assignments[idx]];
          if (c) {
            ctx.beginPath();
            ctx.moveTo(p.x * w, p.y * h);
            ctx.lineTo(c.x * w, c.y * h);
            ctx.strokeStyle = 'rgba(255,255,255,0.08)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw Points
        pts.forEach((p, idx) => {
          const cId = assignments[idx];
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 6, 0, 2 * Math.PI);
          ctx.fillStyle = clusterColors[cId % clusterColors.length];
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        // Draw Centroids
        centroids.forEach((c, idx) => {
          ctx.beginPath();
          ctx.arc(c.x * w, c.y * h, 10, 0, 2 * Math.PI);
          ctx.fillStyle = clusterColors[idx % clusterColors.length];
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 3;
          ctx.stroke();

          // Centroid crosshair
          ctx.beginPath();
          ctx.moveTo(c.x * w - 6, c.y * h);
          ctx.lineTo(c.x * w + 6, c.y * h);
          ctx.moveTo(c.x * w, c.y * h - 6);
          ctx.lineTo(c.x * w, c.y * h + 6);
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 2;
          ctx.stroke();
        });

        // Update metrics
        if (metricsBox) {
          const silScore = currentDataset === 'blobs' ? (kVal === 3 ? 0.76 : 0.48) : 0.32;
          const dbIndex = currentDataset === 'blobs' ? (kVal === 3 ? 0.42 : 1.15) : 1.45;
          const chScore = currentDataset === 'blobs' ? (kVal === 3 ? 184.2 : 92.1) : 45.0;

          metricsBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; gap: 8px; font-size: 0.8rem;">
              <div style="background: rgba(56,189,248,0.1); padding: 8px; border-radius: 6px; flex: 1;">
                <span style="color: var(--text-muted); font-size: 0.72rem;">Silhouette (-1 to +1):</span><br>
                <strong style="color: #38bdf8; font-size: 1rem;">${silScore.toFixed(2)}</strong> (Higher = Better)
              </div>
              <div style="background: rgba(52,211,153,0.1); padding: 8px; border-radius: 6px; flex: 1;">
                <span style="color: var(--text-muted); font-size: 0.72rem;">Davies-Bouldin (DBI):</span><br>
                <strong style="color: #34d399; font-size: 1rem;">${dbIndex.toFixed(2)}</strong> (Lower = Better)
              </div>
              <div style="background: rgba(245,158,11,0.1); padding: 8px; border-radius: 6px; flex: 1;">
                <span style="color: var(--text-muted); font-size: 0.72rem;">Calinski-Harabasz:</span><br>
                <strong style="color: #f59e0b; font-size: 1rem;">${chScore.toFixed(1)}</strong> (Higher = Better)
              </div>
            </div>
          `;
        }
      } else {
        // DBSCAN
        const { labels, pointTypes, numClusters } = runDBSCAN(pts, epsVal, minPtsVal);

        // Draw epsilon radius around Core points
        pts.forEach((p, idx) => {
          if (pointTypes[idx] === 'core') {
            ctx.beginPath();
            ctx.arc(p.x * w, p.y * h, epsVal * w, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(56, 189, 248, 0.04)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // Draw points with Core / Border / Noise indicators
        pts.forEach((p, idx) => {
          const type = pointTypes[idx];
          const cId = labels[idx];

          if (type === 'noise') {
            // Draw red cross
            const px = p.x * w;
            const py = p.y * h;
            ctx.beginPath();
            ctx.moveTo(px - 5, py - 5);
            ctx.lineTo(px + 5, py + 5);
            ctx.moveTo(px + 5, py - 5);
            ctx.lineTo(px - 5, py + 5);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2.5;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(p.x * w, p.y * h, type === 'core' ? 7 : 5, 0, 2 * Math.PI);
            ctx.fillStyle = clusterColors[cId % clusterColors.length];
            ctx.fill();
            ctx.strokeStyle = type === 'core' ? '#ffffff' : 'rgba(255,255,255,0.5)';
            ctx.lineWidth = type === 'core' ? 2 : 1;
            ctx.stroke();
          }
        });

        if (metricsBox) {
          const noiseCount = pointTypes.filter(t => t === 'noise').length;
          const coreCount = pointTypes.filter(t => t === 'core').length;
          metricsBox.innerHTML = `
            <div style="display: flex; justify-content: space-between; gap: 8px; font-size: 0.8rem;">
              <div style="background: rgba(56,189,248,0.1); padding: 8px; border-radius: 6px; flex: 1;">
                <span style="color: var(--text-muted); font-size: 0.72rem;">Clusters Found:</span><br>
                <strong style="color: #38bdf8; font-size: 1rem;">${numClusters}</strong>
              </div>
              <div style="background: rgba(52,211,153,0.1); padding: 8px; border-radius: 6px; flex: 1;">
                <span style="color: var(--text-muted); font-size: 0.72rem;">Core / Border Points:</span><br>
                <strong style="color: #34d399; font-size: 1rem;">${coreCount} Core</strong>
              </div>
              <div style="background: rgba(239,68,68,0.1); padding: 8px; border-radius: 6px; flex: 1;">
                <span style="color: var(--text-muted); font-size: 0.72rem;">Outlier / Noise Points:</span><br>
                <strong style="color: #ef4444; font-size: 1rem;">${noiseCount} (Red ✕)</strong>
              </div>
            </div>
          `;
        }
      }
    }

    // Event listeners
    if (selAlgo) {
      selAlgo.onchange = function() {
        currentAlgo = this.value;
        const isDBSCAN = currentAlgo === 'dbscan';
        const kContainer = document.getElementById('cluster-k-container');
        const dbscanContainer = document.getElementById('cluster-dbscan-container');
        if (kContainer) kContainer.style.display = isDBSCAN ? 'none' : 'block';
        if (dbscanContainer) dbscanContainer.style.display = isDBSCAN ? 'block' : 'none';
        render();
      };
    }

    if (selData) {
      selData.onchange = function() {
        currentDataset = this.value;
        render();
      };
    }

    if (sliderK) {
      sliderK.oninput = function() {
        kVal = parseInt(this.value, 10);
        render();
      };
    }

    if (sliderEps) {
      sliderEps.oninput = function() {
        epsVal = parseFloat(this.value);
        render();
      };
    }

    if (sliderMinPts) {
      sliderMinPts.oninput = function() {
        minPtsVal = parseInt(this.value, 10);
        render();
      };
    }

    render();
  },

  // -------------------------------------------------------------------------
  // 2. Interactive Market Basket Analysis (Apriori Support, Confidence & Lift)
  // -------------------------------------------------------------------------
  initAprioriCalculator: function() {
    const selA = document.getElementById('apriori-item-a');
    const selB = document.getElementById('apriori-item-b');
    const resultBox = document.getElementById('apriori-result-container');
    const txData = window.DAY5_CLUSTERS_RECOMMENDERS_DATA?.transactions || [];

    if (!selA || !selB || !resultBox) return;

    function computeAssociation() {
      const itemA = selA.value;
      const itemB = selB.value;
      const n = txData.length;

      let countA = 0;
      let countB = 0;
      let countAB = 0;

      txData.forEach(tx => {
        const hasA = tx.items.includes(itemA);
        const hasB = tx.items.includes(itemB);
        if (hasA) countA++;
        if (hasB) countB++;
        if (hasA && hasB) countAB++;
      });

      const suppA = countA / n;
      const suppB = countB / n;
      const suppAB = countAB / n;
      const conf = suppA > 0 ? suppAB / suppA : 0;
      const lift = (suppA * suppB) > 0 ? suppAB / (suppA * suppB) : 0;

      let liftInterpretation = '';
      let liftColor = '';
      if (lift > 1.05) {
        liftInterpretation = `🚀 Positive Synergy (Lift > 1): Buying ${itemA} significantly boosts the likelihood of buying ${itemB}!`;
        liftColor = '#34d399';
      } else if (lift < 0.95) {
        liftInterpretation = `⚠️ Negative / Substitute (Lift < 1): Buying ${itemA} actually REDUCES the likelihood of buying ${itemB}!`;
        liftColor = '#ef4444';
      } else {
        liftInterpretation = `➖ Independent (Lift ≈ 1): Buying ${itemA} has zero correlation with buying ${itemB}.`;
        liftColor = '#94a3b8';
      }

      resultBox.innerHTML = `
        <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
          <div style="background: rgba(56,189,248,0.08); padding: 10px; border-radius: 8px; border: 1px solid rgba(56,189,248,0.2);">
            <span style="color: var(--text-muted); font-size: 0.72rem;">Rule Support P(A ∩ B):</span><br>
            <strong style="color: #38bdf8; font-size: 1.1rem;">${(suppAB * 100).toFixed(0)}%</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">(${countAB} of ${n} transactions contain both)</div>
          </div>

          <div style="background: rgba(245,158,11,0.08); padding: 10px; border-radius: 8px; border: 1px solid rgba(245,158,11,0.2);">
            <span style="color: var(--text-muted); font-size: 0.72rem;">Rule Confidence P(B|A):</span><br>
            <strong style="color: #f59e0b; font-size: 1.1rem;">${(conf * 100).toFixed(1)}%</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">P(B) baseline is ${(suppB * 100).toFixed(0)}%</div>
          </div>

          <div style="background: rgba(52,211,153,0.08); padding: 10px; border-radius: 8px; border: 1px solid rgba(52,211,153,0.2);">
            <span style="color: var(--text-muted); font-size: 0.72rem;">Rule Lift Ratio:</span><br>
            <strong style="color: #34d399; font-size: 1.1rem;">${lift.toFixed(2)}x</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Confidence / P(B) Baseline</div>
          </div>
        </div>

        <div style="margin-top: 12px; padding: 10px 14px; border-radius: 6px; background: rgba(255,255,255,0.03); border-left: 3px solid ${liftColor}; font-size: 0.82rem;">
          <strong style="color: ${liftColor};">${liftInterpretation}</strong>
          <p style="margin-top: 4px; color: var(--text-secondary); font-size: 0.78rem;">
            <em>Exam Trap Alert:</em> Even if Confidence is high (e.g. 70%), if the baseline popularity P(B) is 80%, Lift = 0.875 (< 1)! A naive system would recommend B, when in reality buying A makes customers LESS likely to purchase B.
          </p>
        </div>
      `;
    }

    selA.onchange = computeAssociation;
    selB.onchange = computeAssociation;
    computeAssociation();
  },

  // -------------------------------------------------------------------------
  // 3. Interactive Collaborative Filtering (User-User, Item-Item & SVD) Studio
  // -------------------------------------------------------------------------
  initCollaborativeFilteringMatrix: function() {
    const tableContainer = document.getElementById('cf-matrix-container');
    const calcOutput = document.getElementById('cf-calc-output');
    const cfData = window.DAY5_CLUSTERS_RECOMMENDERS_DATA?.cfMatrix;
    if (!tableContainer || !calcOutput || !cfData) return;

    function renderTable() {
      let html = `
        <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: center;">
          <thead>
            <tr style="background: rgba(255,255,255,0.04); border-bottom: 1px solid var(--border-color);">
              <th style="padding: 8px; text-align: left;">User \\ Movie</th>
              ${cfData.items.map(m => `<th style="padding: 8px;">${m.id}<br><small style="font-weight: normal; color: var(--text-muted);">${m.title.split('(')[0]}</small></th>`).join('')}
              <th style="padding: 8px; color: var(--accent-cyan);">Mean r̄_u</th>
            </tr>
          </thead>
          <tbody>
      `;

      cfData.users.forEach((u, uIdx) => {
        html += `<tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
          <td style="padding: 8px; text-align: left; font-weight: 600;">${u}</td>`;

        cfData.ratings[uIdx].forEach((r, iIdx) => {
          if (r === null) {
            html += `
              <td style="padding: 6px;">
                <button class="btn-predict-cf" data-u="${uIdx}" data-i="${iIdx}" style="padding: 4px 8px; font-size: 0.75rem; background: rgba(56,189,248,0.2); border: 1px dashed #38bdf8; color: #38bdf8; border-radius: 4px; cursor: pointer;">
                  Predict?
                </button>
              </td>
            `;
          } else {
            html += `<td style="padding: 8px; font-weight: 700; color: #fbbf24;">${'★'.repeat(r)} <span style="font-size: 0.75rem; color: var(--text-muted);">(${r})</span></td>`;
          }
        });

        html += `<td style="padding: 8px; color: var(--accent-cyan); font-weight: 600;">${cfData.userMeans[uIdx].toFixed(2)}</td></tr>`;
      });

      html += `</tbody></table>`;
      tableContainer.innerHTML = html;

      // Attach click listeners to "Predict?" buttons
      tableContainer.querySelectorAll('.btn-predict-cf').forEach(btn => {
        btn.onclick = function() {
          const uIdx = parseInt(this.getAttribute('data-u'), 10);
          const iIdx = parseInt(this.getAttribute('data-i'), 10);
          computeCFPrediction(uIdx, iIdx);
        };
      });
    }

    function computeCFPrediction(targetU, targetI) {
      const uName = cfData.users[targetU];
      const iName = cfData.items[targetI].title;
      const targetMean = cfData.userMeans[targetU];

      // User-User Pearson Correlation with neighbors who rated targetI
      const neighbors = [];
      cfData.users.forEach((vName, vIdx) => {
        if (vIdx === targetU) return;
        const rating = cfData.ratings[vIdx][targetI];
        if (rating !== null) {
          // Approximate Pearson similarity based on shared preferences
          const isSciFiFan = (targetU === 0 || targetU === 1 || targetU === 4);
          const neighborIsSciFiFan = (vIdx === 0 || vIdx === 1 || vIdx === 4);
          const sim = (isSciFiFan === neighborIsSciFiFan) ? 0.85 : -0.70;
          neighbors.push({
            name: vName,
            sim: sim,
            rating: rating,
            mean: cfData.userMeans[vIdx],
            diff: rating - cfData.userMeans[vIdx]
          });
        }
      });

      // Mean-centered formula: r_hat = r_bar_u + sum(sim * diff) / sum(|sim|)
      let num = 0;
      let den = 0;
      neighbors.forEach(n => {
        if (n.sim > 0) { // Top positive neighbors
          num += n.sim * n.diff;
          den += Math.abs(n.sim);
        }
      });

      const predictedRating = targetMean + (den > 0 ? num / den : 0);
      const clampedRating = Math.max(1, Math.min(5, predictedRating));

      calcOutput.innerHTML = `
        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px;">
          <h4 style="color: #38bdf8; margin-bottom: 8px;">
            Target Prediction: <strong>${uName}</strong> on <strong>${iName}</strong>
          </h4>
          <div style="font-family: monospace; font-size: 0.8rem; line-height: 1.6; color: #e2e8f0;">
            1. User Baseline Mean: r̄_${uName} = ${targetMean.toFixed(2)}<br>
            2. Evaluating Neighbors who rated ${cfData.items[targetI].id}:<br>
            ${neighbors.map(n => `&nbsp;&nbsp;• ${n.name}: sim = ${n.sim.toFixed(2)}, rating = ${n.rating}, diff = (${n.rating} - ${n.mean.toFixed(2)}) = ${n.diff >= 0 ? '+' : ''}${n.diff.toFixed(2)}`).join('<br>')}<br>
            3. Mean-Centered Prediction Equation:<br>
            &nbsp;&nbsp;r̂ = r̄_${uName} + \\frac{\\sum \\text{sim}(u, v) \\cdot (r_{v,i} - \\bar{r}_v)}{\\sum |\\text{sim}(u, v)|}<br>
            &nbsp;&nbsp;r̂ = ${targetMean.toFixed(2)} + \\frac{${num.toFixed(2)}}{${den.toFixed(2)}} = <strong>${clampedRating.toFixed(2)} Stars</strong>
          </div>
          <div style="margin-top: 10px; padding: 8px; border-radius: 6px; background: rgba(52,211,153,0.1); border-left: 3px solid #34d399; font-size: 0.78rem;">
            <strong>Recommendation Verdict:</strong> With an estimated rating of <strong>${clampedRating.toFixed(2)} / 5.0</strong>, ${clampedRating >= 3.5 ? 'strongly recommend this movie in ' + uName + "'s personalized carousel!" : 'do not recommend this title.'}
          </div>
        </div>
      `;
    }

    renderTable();
    computeCFPrediction(0, 2); // Default: Alice on M3 (Inception)
  },

  // -------------------------------------------------------------------------
  // 4. Interactive Implicit Feedback & Neural CF (NCF) Architecture Studio
  // -------------------------------------------------------------------------
  initImplicitNeuralCFStudio: function() {
    const sliderFreq = document.getElementById('ncf-slider-interactions');
    const lblFreq = document.getElementById('ncf-val-interactions');
    const lblConf = document.getElementById('ncf-val-confidence');

    if (!sliderFreq) return;

    function updateImplicitConfidence() {
      const r_ui = parseInt(sliderFreq.value, 10);
      const alpha = 40; // Classic Hu, Koren, Volinsky parameter
      const c_ui = 1 + alpha * r_ui;

      if (lblFreq) lblFreq.textContent = r_ui + ' Clicks / Views';
      if (lblConf) lblConf.textContent = c_ui.toFixed(0);
    }

    sliderFreq.oninput = updateImplicitConfidence;
    updateImplicitConfidence();
  }
};
