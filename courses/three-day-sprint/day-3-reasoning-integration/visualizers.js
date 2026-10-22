// Day 3 Visualizers Bridge for 3-Day Sprint (Reasoning Systems + Integration + Exams)

// Polyfill aliases for 10-day sprint visualizers if present
if (typeof window !== 'undefined') {
  if (window.SprintDay8Visualizers) {
    window.SprintDay8Visualizers.initTransEStudio = window.SprintDay8Visualizers.initTransEStudio || window.SprintDay8Visualizers.initTransEVectorPlayground;
    window.SprintDay8Visualizers.initSelfAttentionStudio = window.SprintDay8Visualizers.initSelfAttentionStudio || window.SprintDay8Visualizers.initSelfAttentionHeatmapStudio;
  }
  if (window.SprintDay9Visualizers) {
    window.SprintDay9Visualizers.initGeneticAlgorithmArena = window.SprintDay9Visualizers.initGeneticAlgorithmArena || window.SprintDay9Visualizers.initGeneticAlgorithmTSPArena;
  }
  if (window.SprintDay10Visualizers) {
    window.SprintDay10Visualizers.initEnsembleStudio = window.SprintDay10Visualizers.initEnsembleStudio || window.SprintDay10Visualizers.initBaggingBoostingStackingStudio;
  }
}

window.ThreeDaySprintDay3Visualizers = {
  _cbrStepIdx: 0,
  _gaStepIdx: 0,

  // -------------------------------------------------------------------------
  // Helper for rendering LaTeX math
  // -------------------------------------------------------------------------
  renderMath: function(el) {
    if (!el) return;
    if (typeof window.renderLatex === 'function') {
      window.renderLatex(el);
    } else if (window.renderMathInElement) {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  },

  // -------------------------------------------------------------------------
  // 1. MYCIN Certainty Factor Combination Calculator
  // -------------------------------------------------------------------------
  initMYCINCalculator: function() {
    this.updateMYCIN();
  },

  updateMYCIN: function() {
    const s1 = document.getElementById('mycin-cf1-slider');
    const s2 = document.getElementById('mycin-cf2-slider');
    const v1 = document.getElementById('mycin-cf1-val');
    const v2 = document.getElementById('mycin-cf2-val');
    const mathEl = document.getElementById('mycin-result-math');
    const barEl = document.getElementById('mycin-meter-bar');
    const noteEl = document.getElementById('mycin-status-note');

    if (!s1 || !s2) return;

    const cf1 = parseFloat(s1.value);
    const cf2 = parseFloat(s2.value);

    if (v1) v1.textContent = (cf1 >= 0 ? '+' : '') + cf1.toFixed(2);
    if (v2) v2.textContent = (cf2 >= 0 ? '+' : '') + cf2.toFixed(2);

    let cfComb = 0;
    let formulaStr = '';
    let noteStr = '';

    if (cf1 >= 0 && cf2 >= 0) {
      // Both positive
      cfComb = cf1 + cf2 * (1 - cf1);
      formulaStr = `$$CF_{\\text{comb}} = ${cf1.toFixed(2)} + ${cf2.toFixed(2)}(1 - ${cf1.toFixed(2)}) = \\mathbf{${(cfComb >= 0 ? '+' : '') + cfComb.toFixed(3)}}$$`;
      noteStr = "Both clues confirm hypothesis: Asymptotic accumulation towards +1.0 (Increased confidence).";
    } else if (cf1 < 0 && cf2 < 0) {
      // Both negative
      cfComb = cf1 + cf2 * (1 + cf1);
      formulaStr = `$$CF_{\\text{comb}} = ${cf1.toFixed(2)} + ${cf2.toFixed(2)}(1 + ${cf1.toFixed(2)}) = \\mathbf{${cfComb.toFixed(3)}}$$`;
      noteStr = "Both clues refute hypothesis: Confidence drops asymptotically towards -1.0.";
    } else {
      // Opposite signs
      const minAbs = Math.min(Math.abs(cf1), Math.abs(cf2));
      const denom = 1 - minAbs;
      if (denom === 0) {
        cfComb = 0;
        formulaStr = `$$CF_{\\text{comb}} = 0.00 \\quad (\\text{Complete contradiction})$$`;
      } else {
        cfComb = (cf1 + cf2) / denom;
        cfComb = Math.max(-1, Math.min(1, cfComb));
        formulaStr = `$$CF_{\\text{comb}} = \\frac{${cf1.toFixed(2)} + (${cf2.toFixed(2)})}{1 - ${minAbs.toFixed(2)}} = \\mathbf{${(cfComb >= 0 ? '+' : '') + cfComb.toFixed(3)}}$$`;
      }
      noteStr = "Conflicting clues: Partial cancellation through normalisation.";
    }

    if (mathEl) {
      mathEl.innerHTML = formulaStr;
      this.renderMath(mathEl);
    }

    if (barEl) {
      const pct = Math.max(0, Math.min(100, ((cfComb + 1) / 2) * 100));
      barEl.style.width = pct.toFixed(1) + '%';
      if (cfComb > 0.1) {
        barEl.style.background = 'linear-gradient(90deg, #10b981, #06b6d4)';
      } else if (cfComb < -0.1) {
        barEl.style.background = 'linear-gradient(90deg, #ef4444, #f97316)';
      } else {
        barEl.style.background = '#9ca3af';
      }
    }

    if (noteEl) {
      noteEl.textContent = noteStr;
    }
  },

  // -------------------------------------------------------------------------
  // 2. Mamdani Fuzzy Inference & Centroid Defuzzifier
  // -------------------------------------------------------------------------
  initMamdaniDefuzzifier: function() {
    this.updateMamdani();
  },

  updateMamdani: function() {
    const sTemp = document.getElementById('mamdani-temp-slider');
    const vTemp = document.getElementById('mamdani-temp-val');
    const mathEl = document.getElementById('mamdani-result-math');
    const bdownEl = document.getElementById('mamdani-breakdown-math');
    const barEl = document.getElementById('mamdani-meter-bar');

    if (!sTemp) return;

    const e = parseFloat(sTemp.value);

    // Membership functions over error e in [-10, +10]
    // Cold: triangular from -10 to 0, peak at -5 (or ramp from 0 to -5)
    let muCold = 0;
    if (e <= -5) muCold = 1.0;
    else if (e < 0) muCold = (0 - e) / 5.0;

    // OK: triangular centered at 0 with base [-5, 5]
    let muOK = 0;
    if (Math.abs(e) < 5) muOK = 1.0 - Math.abs(e) / 5.0;

    // Hot: triangular from 0 to +5, peak at +5
    let muHot = 0;
    if (e >= 5) muHot = 1.0;
    else if (e > 0) muHot = e / 5.0;

    if (vTemp) {
      let state = 'Normal / OK';
      if (e <= -2.5) state = 'Cold Error';
      else if (e >= 2.5) state = 'Hot Error';
      vTemp.textContent = `${(e >= 0 ? '+' : '') + e.toFixed(1)} °C (${state})`;
    }

    // Rules:
    // R1: IF Cold THEN Heater = High (80%)
    // R2: IF OK   THEN Heater = Medium (40%)
    // R3: IF Hot  THEN Heater = Off (0%)
    const zCold = 80;
    const zOK = 40;
    const zHot = 0;

    const num = (muCold * zCold) + (muOK * zOK) + (muHot * zHot);
    const den = muCold + muOK + muHot;
    const zStar = den > 0 ? (num / den) : 40.0;

    if (mathEl) {
      mathEl.innerHTML = `$$z^* = \\frac{(${zCold})( ${muCold.toFixed(2)} ) + (${zOK})( ${muOK.toFixed(2)} ) + (${zHot})( ${muHot.toFixed(2)} )}{${muCold.toFixed(2)} + ${muOK.toFixed(2)} + ${muHot.toFixed(2)}} = \\mathbf{${zStar.toFixed(1)}\\% \\text{ Heater Power}}$$`;
      this.renderMath(mathEl);
    }

    if (bdownEl) {
      bdownEl.innerHTML = `$$\\mu_{\\text{Cold}} = ${muCold.toFixed(2)}, \\quad \\mu_{\\text{OK}} = ${muOK.toFixed(2)}, \\quad \\mu_{\\text{Hot}} = ${muHot.toFixed(2)}$$`;
      this.renderMath(bdownEl);
    }

    if (barEl) {
      barEl.style.width = zStar.toFixed(1) + '%';
      if (zStar > 55) {
        barEl.style.background = 'linear-gradient(90deg, #f59e0b, #ef4444)';
      } else if (zStar > 25) {
        barEl.style.background = 'linear-gradient(90deg, #3b82f6, #10b981)';
      } else {
        barEl.style.background = '#6b7280';
      }
    }
  },

  // -------------------------------------------------------------------------
  // 3. Case-Based Reasoning (CBR) 4R Stepper
  // -------------------------------------------------------------------------
  stepCBR: function() {
    const disp = document.getElementById('cbr-step-display');
    if (!disp) return;

    const steps = [
      {
        phase: "Phase 1: RETRIEVE",
        badge: "K-NN Memory Search",
        color: "#3b82f6",
        text: "New Patient (Age: 58, IOP: 24 mmHg, Cup-to-Disk: 0.7) queries Case Memory of 500 records. Cosine similarity retrieves nearest exemplar <strong>Case #142</strong> (Glaucoma, IOP 25 mmHg, similarity $S=0.962$)."
      },
      {
        phase: "Phase 2: REUSE",
        badge: "Solution Adaptation",
        color: "#10b981",
        text: "Case #142 proposed solution: <em>Prostaglandin analog once daily</em>. System maps therapeutic guideline to current patient weight ($72\\,\\text{kg}$) and initiates standard dosage protocol."
      },
      {
        phase: "Phase 3: REVISE",
        badge: "Clinical Simulation & Verification",
        color: "#f59e0b",
        text: "Attending ophthalmologist checks patient allergies: mild sulfa intolerance detected. Specialist revises adjuvant agent from Brinzolamide to Brimonidine before confirming order."
      },
      {
        phase: "Phase 4: RETAIN",
        badge: "Case Library Indexing",
        color: "#8b5cf6",
        text: "Patient follow-up at 4 weeks shows IOP stabilized to $15.5\\,\\text{mmHg}$. This verified treatment journey is encoded as <strong>Case #501</strong> and indexed in memory for future queries."
      }
    ];

    this._cbrStepIdx = ((this._cbrStepIdx || 0) + 1) % steps.length;
    const cur = steps[this._cbrStepIdx];

    disp.style.borderLeftColor = cur.color;
    disp.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <strong style="color:${cur.color};">${cur.phase}</strong>
        <span style="font-size:0.75rem; background:rgba(255,255,255,0.08); padding:2px 8px; border-radius:12px; color:${cur.color}; font-weight:600;">${cur.badge}</span>
      </div>
      <div>${cur.text}</div>
    `;
    this.renderMath(disp);
  },

  // -------------------------------------------------------------------------
  // 4. Genetic Algorithm Order Crossover (OX) Stepper
  // -------------------------------------------------------------------------
  stepGA: function() {
    const disp = document.getElementById('ga-ox-display');
    if (!disp) return;

    const oxSteps = [
      {
        step: "Step 1: Select Parents & Cut Points",
        color: "#3b82f6",
        html: `<strong>Parent 1:</strong> [ 1, 2, <span style="background:rgba(59,130,246,0.3); padding:2px 4px; border-radius:3px;">3, 4, 5</span>, 6, 7, 8 ]<br>
               <strong>Parent 2:</strong> [ 8, 7, <span style="background:rgba(16,185,129,0.3); padding:2px 4px; border-radius:3px;">6, 5, 4</span>, 3, 2, 1 ]<br>
               <span style="font-size:0.8rem; color:var(--text-muted);">Cut points chosen at positions 2 and 4 (0-indexed).</span>`
      },
      {
        step: "Step 2: Copy Parent 1 Middle Substring to Offspring",
        color: "#f59e0b",
        html: `<strong>Offspring 1 draft:</strong> [ _, _, <span style="background:rgba(59,130,246,0.3); padding:2px 4px; border-radius:3px; font-weight:700;">3, 4, 5</span>, _, _, _ ]<br>
               <span style="font-size:0.8rem; color:var(--text-muted);">Middle substring [3, 4, 5] is directly preserved from Parent 1 to preserve adjacency traits.</span>`
      },
      {
        step: "Step 3: Read Parent 2 from Cut Point 2 & Filter Duplicates",
        color: "#10b981",
        html: `Parent 2 sequence from pos 5 onward: [ 3, 2, 1, 8, 7, 6, 5, 4 ]<br>
               Exclude already copied elements {3, 4, 5}: Remaining stream = <strong>[ 2, 1, 8, 7, 6 ]</strong>.`
      },
      {
        step: "Step 4: Fill Vacant Slots to Yield Valid Permutation",
        color: "#8b5cf6",
        html: `<strong>Final Offspring 1:</strong> [ <span style="color:#10b981; font-weight:600;">7, 6</span>, <span style="background:rgba(59,130,246,0.3); padding:2px 4px; border-radius:3px; font-weight:700;">3, 4, 5</span>, <span style="color:#10b981; font-weight:600;">2, 1, 8</span> ]<br>
               <span style="font-size:0.8rem; color:#10b981; font-weight:600;">No duplicate cities! Valid TSP permutation guaranteed without repair heuristics.</span>`
      }
    ];

    this._gaStepIdx = ((this._gaStepIdx || 0) + 1) % oxSteps.length;
    const cur = oxSteps[this._gaStepIdx];

    disp.style.borderLeftColor = cur.color;
    disp.innerHTML = `
      <div style="font-weight:700; color:${cur.color}; margin-bottom:6px;">${cur.step}</div>
      <div style="line-height:1.6;">${cur.html}</div>
    `;
  },

  // -------------------------------------------------------------------------
  // 5. Transformer Attention Scaling Interactive Explorer
  // -------------------------------------------------------------------------
  initAttention: function() {
    this.updateAttention();
  },

  updateAttention: function() {
    const sDk = document.getElementById('attn-dk-slider');
    const vDk = document.getElementById('attn-dk-val');
    const mathEl = document.getElementById('attn-result-math');
    const noteEl = document.getElementById('attn-entropy-note');

    if (!sDk) return;
    const dk = parseInt(sDk.value);
    if (vDk) vDk.textContent = `d_k = ${dk}`;

    // Sample dot product logits for 3 key tokens: [18.0, 12.0, 4.0]
    const rawDot = [18.0, 12.0, 4.0];
    const sqrtDk = Math.sqrt(dk);
    const scaled = rawDot.map(x => x / sqrtDk);

    // Softmax
    const maxVal = Math.max(...scaled);
    const exps = scaled.map(x => Math.exp(x - maxVal));
    const sumExp = exps.reduce((a, b) => a + b, 0);
    const probs = exps.map(x => x / sumExp);

    if (mathEl) {
      mathEl.innerHTML = `$$\\sqrt{d_k} = ${sqrtDk.toFixed(2)}, \\quad \\mathbf{p} = [\\, ${(probs[0]*100).toFixed(1)}\\%, \\; ${(probs[1]*100).toFixed(1)}\\%, \\; ${(probs[2]*100).toFixed(1)}\\% \\,]$$`;
      this.renderMath(mathEl);
    }

    if (noteEl) {
      if (dk <= 4) {
        noteEl.innerHTML = `<span style="color:#ef4444; font-weight:600;">Vanishing Gradients Alert:</span> Small $d_k$ causes extreme dot products ($18 / 1 = 18$), collapsing softmax into a hard one-hot argmax. Softmax gradient $\\to 0$.`;
      } else {
        noteEl.innerHTML = `<span style="color:#10b981; font-weight:600;">Healthy Softmax Gradient:</span> Dividing by $\\sqrt{d_k} = ${sqrtDk.toFixed(2)}$ prevents large logits. Gradients flow smoothly to both query and key matrices.`;
      }
      this.renderMath(noteEl);
    }
  },

  // -------------------------------------------------------------------------
  // 6. TransE Vector Embedding Explorer
  // -------------------------------------------------------------------------
  initTransE: function() {
    this.updateTransE();
  },

  updateTransE: function() {
    const sRel = document.getElementById('transe-rel-select');
    const mathEl = document.getElementById('transe-formula-math');
    const scoreEl = document.getElementById('transe-score-val');

    if (!sRel) return;
    const rel = sRel.value;

    let h = [0.80, 0.20]; // Diabetes
    let r = [0.10, 0.70]; // TreatedWith
    let t = [0.88, 0.92]; // Metformin
    let nameH = "Diabetes";
    let nameR = "TreatedWith";
    let nameT = "Metformin";

    if (rel === 'hypertension') {
      h = [0.20, 0.90]; // Hypertension
      r = [0.60, -0.40]; // Causes
      t = [0.82, 0.48]; // Retinopathy
      nameH = "Hypertension";
      nameR = "Causes";
      nameT = "Retinopathy";
    }

    const predT = [h[0] + r[0], h[1] + r[1]];
    const dist = Math.sqrt(Math.pow(predT[0] - t[0], 2) + Math.pow(predT[1] - t[1], 2));

    if (mathEl) {
      mathEl.innerHTML = `$$\\mathbf{h} + \\mathbf{r} = [${h[0]}, ${h[1]}] + [${r[0]}, ${r[1]}] = [${predT[0].toFixed(2)}, ${predT[1].toFixed(2)}] \\approx \\mathbf{t}_{\\text{${nameT}}} [${t[0]}, ${t[1]}]$$`;
      this.renderMath(mathEl);
    }

    if (scoreEl) {
      scoreEl.innerHTML = `L2 Norm Distance $\\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| = \\mathbf{${dist.toFixed(4)}}$ (Valid Fact: distance $< \\gamma = 1.0$).`;
      this.renderMath(scoreEl);
    }
  },

  // -------------------------------------------------------------------------
  // 7. Random Forest vs Bagging Variance Reduction Studio
  // -------------------------------------------------------------------------
  initEnsemble: function() {
    this.updateEnsemble();
  },

  updateEnsemble: function() {
    const sM = document.getElementById('ens-m-slider');
    const sRho = document.getElementById('ens-rho-slider');
    const vM = document.getElementById('ens-m-val');
    const vRho = document.getElementById('ens-rho-val');
    const mathEl = document.getElementById('ens-result-math');
    const noteEl = document.getElementById('ens-summary-note');

    if (!sM || !sRho) return;

    const M = parseInt(sM.value);
    const rho = parseFloat(sRho.value);
    const sigma2 = 1.0; // base individual tree variance

    if (vM) vM.textContent = `M = ${M} trees`;
    if (vRho) {
      let label = `${rho.toFixed(2)}`;
      if (rho >= 0.7) label += " (Bagging)";
      else if (rho <= 0.25) label += " (Random Forest)";
      vRho.textContent = label;
    }

    const indepTerm = ((1 - rho) / M) * sigma2;
    const asympFloor = rho * sigma2;
    const totalVar = asympFloor + indepTerm;

    if (mathEl) {
      mathEl.innerHTML = `$$\\text{Var}(\\bar{X}) = \\underbrace{${asympFloor.toFixed(3)}}_{\\rho \\sigma^2 \\text{ (Floor)}} + \\underbrace{${indepTerm.toFixed(3)}}_{\\frac{1-\\rho}{M}\\sigma^2} = \\mathbf{${totalVar.toFixed(3)} \\, \\sigma^2}$$`;
      this.renderMath(mathEl);
    }

    if (noteEl) {
      if (rho >= 0.6) {
        noteEl.innerHTML = `<span style="color:#ef4444; font-weight:600;">Bagging Correlation Bottleneck:</span> Even as $M \\to \\infty$, variance cannot drop below $\\rho = ${asympFloor.toFixed(2)}$ because identically distributed greedy trees pick the same dominant split.`;
      } else {
        noteEl.innerHTML = `<span style="color:#10b981; font-weight:600;">Random Forest Decorrelation Benefit:</span> Random feature subsampling $\\sqrt{p}$ slashed tree correlation from 0.75 down to $\\rho = ${rho.toFixed(2)}$, permanently lowering the variance floor by ${(((0.75 - rho)/0.75)*100).toFixed(0)}\\%!`;
      }
      this.renderMath(noteEl);
    }
  },

  // -------------------------------------------------------------------------
  // Existing Bridges for Day 3
  // -------------------------------------------------------------------------
  initEnsemble: function() {
    this.updateEnsemble();
  },

  initLevel1Visualizers: function() {
    this.updateMYCIN();
    this.updateMamdani();
  },

  initLevel3Visualizers: function() {
    this.updateAttention();
    this.updateTransE();
  },

  initLevel4Visualizers: function() {
    this.stepGA();
  },

  initLevel5Visualizers: function() {
    this.updateEnsemble();
  },

  initHospitalTriage: function() {
    if (window.SprintDay2Visualizers?.initHospitalTriageStudio) {
      window.SprintDay2Visualizers.initHospitalTriageStudio();
    }
  },

  initGA: function() {
    if (window.SprintDay9Visualizers?.initGeneticAlgorithmArena) {
      window.SprintDay9Visualizers.initGeneticAlgorithmArena();
    } else {
      this.stepGA();
    }
  }
};
