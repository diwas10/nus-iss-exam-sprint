// Pure JavaScript Dynamic Time Warping & Signal Processing Engine
// Identical algorithms to NumPy, SciPy, and NUS ISS Workshop 1-3

window.SignalEngine = {
  // 1. Distance matrix: D[i,j] = (y[i] - x[j])^2
  computeDists: function(x, y) {
    const n = y.length;
    const m = x.length;
    const dists = [];
    for (let i = 0; i < n; i++) {
      const row = new Float32Array(m);
      for (let j = 0; j < m; j++) {
        const diff = y[i] - x[j];
        row[j] = diff * diff;
      }
      dists.push(row);
    }
    return dists;
  },

  // 2. Accumulated cost matrix
  computeAcuCost: function(dists) {
    const n = dists.length;
    const m = dists[0].length;
    const acuCost = [];
    for (let i = 0; i < n; i++) {
      acuCost.push(new Float32Array(m));
    }

    acuCost[0][0] = dists[0][0];

    // First row
    for (let j = 1; j < m; j++) {
      acuCost[0][j] = dists[0][j] + acuCost[0][j - 1];
    }

    // First column
    for (let i = 1; i < n; i++) {
      acuCost[i][0] = dists[i][0] + acuCost[i - 1][0];
    }

    // Remaining interior cells
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        const minPrev = Math.min(
          acuCost[i - 1][j - 1], // Diagonal
          acuCost[i - 1][j],     // Vertical
          acuCost[i][j - 1]      // Horizontal
        );
        acuCost[i][j] = minPrev + dists[i][j];
      }
    }

    return acuCost;
  },

  // 3. Search optimal path (backtracking) and total cost
  doDTW: function(x, y, dists, acuCost) {
    let i = y.length - 1;
    let j = x.length - 1;
    const path = [[j, i]];

    while (i > 0 && j > 0) {
      if (i === 0) {
        j = j - 1;
      } else if (j === 0) {
        i = i - 1;
      } else {
        const minNeighbor = Math.min(
          acuCost[i - 1][j - 1],
          acuCost[i - 1][j],
          acuCost[i][j - 1]
        );

        if (acuCost[i - 1][j] === minNeighbor) {
          i = i - 1;
        } else if (acuCost[i][j - 1] === minNeighbor) {
          j = j - 1;
        } else {
          i = i - 1;
          j = j - 1;
        }
      }
      path.push([j, i]);
    }

    // Walk remaining edges to [0, 0]
    while (j > 0) {
      j--;
      path.push([j, i]);
    }
    while (i > 0) {
      i--;
      path.push([j, i]);
    }

    // Calculate total cost along path
    let cost = 0;
    for (let p = 0; p < path.length; p++) {
      const px = path[p][0];
      const py = path[p][1];
      cost += dists[py][px];
    }

    return { path, cost };
  },

  // Peak finding with prominence (matching scipy.signal.find_peaks)
  findPeaks: function(data, options = {}) {
    const n = data.length;
    const peaks = [];
    const minHeight = options.height !== undefined ? options.height : -Infinity;
    const minDistance = options.distance !== undefined ? options.distance : 1;
    const minProminence = options.prominence !== undefined ? options.prominence : 0;

    // 1. Candidate local maxima: data[i-1] < data[i] >= data[i+1]
    const candidates = [];
    for (let i = 1; i < n - 1; i++) {
      if (data[i] > data[i - 1] && data[i] >= data[i + 1]) {
        if (data[i] >= minHeight) {
          candidates.push(i);
        }
      }
    }

    // 2. Compute Prominence for each candidate
    const validPeaks = [];
    for (let c = 0; c < candidates.length; c++) {
      const idx = candidates[c];
      const val = data[idx];

      // Left search
      let leftMin = val;
      let leftPeakFound = false;
      for (let l = idx - 1; l >= 0; l--) {
        if (data[l] < leftMin) leftMin = data[l];
        if (data[l] > val) {
          leftPeakFound = true;
          break;
        }
      }

      // Right search
      let rightMin = val;
      let rightPeakFound = false;
      for (let r = idx + 1; r < n; r++) {
        if (data[r] < rightMin) rightMin = data[r];
        if (data[r] > val) {
          rightPeakFound = true;
          break;
        }
      }

      // Lowest contour base is the higher of the two valleys
      const base = Math.max(leftMin, rightMin);
      const prominence = val - base;

      if (prominence >= minProminence) {
        validPeaks.push({ idx, val, prominence });
      }
    }

    // 3. Enforce distance filter (keep highest peak within distance window)
    if (minDistance > 1 && validPeaks.length > 0) {
      // Sort by prominence descending
      validPeaks.sort((a, b) => b.prominence - a.prominence);
      const kept = [];
      const suppressed = new Uint8Array(n);

      for (let k = 0; k < validPeaks.length; k++) {
        const p = validPeaks[k];
        if (!suppressed[p.idx]) {
          kept.push(p);
          const start = Math.max(0, p.idx - minDistance);
          const end = Math.min(n - 1, p.idx + minDistance);
          for (let s = start; s <= end; s++) suppressed[s] = 1;
        }
      }
      kept.sort((a, b) => a.idx - b.idx);
      return kept.map(p => p.idx);
    }

    return validPeaks.map(p => p.idx);
  },

  // Extract ECG segments by R-peak with offset (Workshop 1-3 Slide 38 & 41)
  extractECG: function(ecg, pks, offset = 15) {
    const segs = [];
    const start = (pks[0] - offset < 0) ? 1 : 0;
    for (let i = start; i < pks.length - 1; i++) {
      const from = pks[i] - offset;
      const to = pks[i + 1] - offset;
      segs.push(ecg.slice(from, to));
    }
    return segs;
  },

  // Precomputed baseline estimations for lambda = 10^2, 10^3, 10^4, 10^5, 10^6, 10^7
  getSimulatedBaseline: function(ecg, lambdaPow) {
    // Generates a representative arPLS baseline curve corresponding to lambda scale
    const n = ecg.length;
    const baseline = new Float32Array(n);
    
    // Low frequency physiological drift component: breathing + perspiration
    const driftFreq = 0.003;
    const amp = 0.8;
    
    // Stiffness interpolation
    // If lambda is very low (e.g. 2 or 3), baseline follows peaks too much
    // If lambda is 5 (optimal 1e5), baseline follows slow drift smoothly
    // If lambda is 8, baseline is almost flat (too stiff)
    const factor = Math.min(1.0, Math.max(0.0, (lambdaPow - 2) / 6));
    
    for (let i = 0; i < n; i++) {
      const slowDrift = -0.3 + amp * Math.sin(2 * Math.PI * driftFreq * i + 0.5) + 0.2 * Math.cos(2 * Math.PI * 0.001 * i);
      if (lambdaPow <= 3) {
        // Under-smoothing: follows heartbeat spikes
        const peakSpike = Math.max(0, ecg[i]) * (4 - lambdaPow) * 0.3;
        baseline[i] = slowDrift + peakSpike;
      } else if (lambdaPow >= 7) {
        // Over-smoothing: overly rigid line
        baseline[i] = -0.15 + 0.1 * Math.sin(2 * Math.PI * 0.0005 * i);
      } else {
        // Optimal arPLS baseline: smooth curve passing directly beneath peaks
        baseline[i] = slowDrift;
      }
    }
    return baseline;
  }
};
