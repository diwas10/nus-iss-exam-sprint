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
  // 0. The 4 Types of Reasoning Visual Studio & Simulator (Day 3 Mod 1)
  // -------------------------------------------------------------------------
  _currentReasoningType: 'deductive',
  _currentReasoningScenario: 'eyecoach',

  _reasoningData: {
    deductive: {
      title: "Deductive Reasoning (Top-Down / Truth-Preserving)",
      color: "#38bdf8",
      tag: "Guaranteed 100% Certainty",
      direction: "General Rule + Specific Fact \\implies Guaranteed Conclusion",
      formula: "$$\\text{Modus Ponens: } P, \\; P \\to Q \\vdash Q \\qquad \\text{Modus Tollens: } \\neg Q, \\; P \\to Q \\vdash \\neg P$$",
      certainty: 100,
      certaintyLabel: "100% Sound & Valid (Truth-Preserving, Monotonic)",
      systemMode: "System 2: Slow, deliberative, formal rule-engine execution",
      scenarios: {
        eyecoach: {
          premise1: "General Rule: IF continuous screen time > 20 min, THEN EyeCoach MUST trigger 20-20-20 break alarm.",
          premise2: "Specific Fact: Employee Tan has logged 22 minutes continuous gaze without lookaway.",
          conclusion: "Conclusion: Trigger break alarm immediately (100% mathematically and logically guaranteed).",
          inferenceTrace: "Rule Engine Match-Resolve-Act cycle fired Rule #04 with specificity score 1.0. No contradiction possible."
        },
        drone: {
          premise1: "General Rule: IF obstacle proximity sensor < 0.5m, THEN initiate emergency braking thrust.",
          premise2: "Specific Fact: LiDAR ping detects wall at 0.35m.",
          conclusion: "Conclusion: Fire reverse thrusters immediately (Safety critical: zero tolerance for uncertainty).",
          inferenceTrace: "Hard real-time interrupt triggered state transition to EMERGENCY_HALT."
        },
        fraud: {
          premise1: "General Rule: IF card country is Singapore AND transaction IP is Nigeria within 3 minutes, THEN Flag Impossible Velocity Fraud.",
          premise2: "Specific Fact: Physical swipe at Orchard Rd at 12:00, online authorization in Lagos at 12:02.",
          conclusion: "Conclusion: Block transaction and freeze card (Deductive business rule violation).",
          inferenceTrace: "Compliance Rule Set 12 triggered deterministic block."
        }
      },
      examTip: "NUS-ISS Open-Book Trap: Deductive logic is monotonic — adding new facts can never invalidate a sound conclusion. In clinical/legal AI, deduction is mandatory for accountability and audit trails."
    },
    inductive: {
      title: "Inductive Reasoning (Bottom-Up / Statistical)",
      color: "#10b981",
      tag: "Probabilistic Generalization (ML)",
      direction: "Specific Observations \\implies Generalized Probabilistic Pattern",
      formula: "$$\\hat{\\theta} = \\arg\\max_\\theta \\prod_{i=1}^N P(x_i \\mid \\theta), \\quad P(Y=1 \\mid X) = \\sigma(w^T X + b)$$",
      certainty: 88,
      certaintyLabel: "Probabilistic (High confidence, but falsifiable by counterexample)",
      systemMode: "System 1: Fast, pattern-associative, neural feature representation",
      scenarios: {
        eyecoach: {
          premise1: "Observations: 1,400 recorded gaze sessions show users blinking > 25 times/min exhibit 89% eye strain symptoms after 2 hours.",
          premise2: "Observed Pattern: High blink rate strongly correlates with uncalibrated monitor brightness.",
          conclusion: "Conclusion: Generalize model: P(Eye Strain | High Blink Rate, Glare) = 0.89.",
          inferenceTrace: "Logistic regression / random forest fit on historical observational dataset."
        },
        drone: {
          premise1: "Observations: Over 5,000 flight hours across monsoon winds, turbulent gusts caused sudden 12° yaw drift in 94% of cases.",
          premise2: "Observed Pattern: High barometer variance precedes wind shear.",
          conclusion: "Conclusion: Learn adaptive Kalman Filter covariance matrix Q for gust compensation.",
          inferenceTrace: "Empirical covariance estimation from flight telemetry."
        },
        fraud: {
          premise1: "Observations: 200,000 historical credit transactions reveal that 93% of fraudulent attempts occur between 2 AM and 4 AM on overseas merchant categories.",
          premise2: "Observed Pattern: Anomaly score clusters in high-risk latent space.",
          conclusion: "Conclusion: Induce XGBoost decision boundary classifying risk score > 0.85.",
          inferenceTrace: "Gradient boosted trees optimizing cross-entropy loss."
        }
      },
      examTip: "NUS-ISS Open-Book Trap: Induction is non-monotonic and never guarantees truth. A single counterexample can falsify the induced hypothesis (David Hume's Problem of Induction)."
    },
    abductive: {
      title: "Abductive Reasoning (Diagnostic / Effect \\to Cause)",
      color: "#f59e0b",
      tag: "Inference to the Best Explanation",
      direction: "Observed Effect / Symptom + Causal Knowledge \\implies Most Plausible Cause",
      formula: "$$\\text{Observation } Q, \\; P \\to Q \\vdash \\text{Hypothesize } P \\quad \\text{subject to } \\arg\\max_P P(P \\mid Q)$$",
      certainty: 72,
      certaintyLabel: "Plausible Hypothesis (Requires differential confirmation)",
      systemMode: "System 2 + 1: Hypothesize-and-Test diagnostic cycle (Clinical reasoning)",
      scenarios: {
        eyecoach: {
          premise1: "Observed Symptom: User presents with severe headaches, red sclera, and frequent squinting after 3 PM.",
          premise2: "Known Causality: Astigmatism (A), Poor Ergonomic Distance (E), or Ambient Glare (G) cause these symptoms.",
          conclusion: "Conclusion: EyeCoach hypothesizes 'Improper Display Distance' as best initial explanation because ambient light sensor reads normal.",
          inferenceTrace: "Abductive differential diagnosis ruled out Glare; recommended screen distance calibration before clinical referral."
        },
        drone: {
          premise1: "Observed Symptom: Motor #3 RPM abruptly spiked 40% while altitude dropped 1.2 meters.",
          premise2: "Known Causality: Propeller blade chip, motor bearing seizure, or sudden downdraft.",
          conclusion: "Conclusion: Hypothesize blade micro-fracture as most likely cause based on vibration frequency analysis.",
          inferenceTrace: "Abductive fault isolation module selected hypothesis with maximum posterior probability."
        },
        fraud: {
          premise1: "Observed Symptom: Customer with 10-year spotless record has 5 micro-charges of $1.00 within 2 minutes.",
          premise2: "Known Causality: Card testing bot attack or customer testing new digital wallet.",
          conclusion: "Conclusion: Hypothesize automated card credential testing bot attack as most plausible explanation.",
          inferenceTrace: "Abductive fraud investigator agent generates alert for immediate silent step-up 2FA."
        }
      },
      examTip: "NUS-ISS Open-Book Trap: Confusing Abduction with Deduction is the #1 mistake in IRS exams! In formal logic, affirming the consequent ($Q, P \\to Q \\implies P$) is a logical fallacy, but in AI diagnosis it is the fundamental heuristic engine of Abduction."
    },
    analogical: {
      title: "Analogical Reasoning (Source \\to Target / CBR)",
      color: "#ec4899",
      tag: "Case-Based Structural Mapping",
      direction: "Source Case Domain Knowledge \\implies Adapted Target Solution",
      formula: "$$\\text{Sim}(C_{\\text{target}}, C_{\\text{source}}) = \\frac{\\sum w_i \\cdot s_i(f_{i}^{\\text{tgt}}, f_{i}^{\\text{src}})}{\\sum w_i}, \\quad \\text{Solution} = \\text{Adapt}(S_{\\text{src}})$$",
      certainty: 78,
      certaintyLabel: "Heuristic Transfer (Depends on domain structural similarity)",
      systemMode: "System 2: Structural mapping + Case-Based Retrieval (CBR 4R Cycle)",
      scenarios: {
        eyecoach: {
          premise1: "Source Case: Case #812 — Software engineer with identical ergonomic desk height and dry eyes was cured by 20° monitor downward tilt.",
          premise2: "Target Situation: Current designer has similar workstation dimensions and reports dry eyes.",
          conclusion: "Conclusion: Retrieve Case #812 and adapt solution: recommend tilting monitor downwards by 18°.",
          inferenceTrace: "CBR 4R cycle: Retrieve (k-NN distance = 0.92) -> Reuse solution -> Revise angle for designer's height -> Retain new case."
        },
        drone: {
          premise1: "Source Case: Flocking behavior in bird murmurations avoids collisions without central broadcast communication.",
          premise2: "Target Situation: Swarm of 50 delivery drones operating in tight urban corridor.",
          conclusion: "Conclusion: Map Reynolds Boids rules (Separation, Alignment, Cohesion) onto decentralized drone flight controllers.",
          inferenceTrace: "Cross-domain bio-inspired analogical mapping."
        },
        fraud: {
          premise1: "Source Case: 2023 crypto phishing attack pattern that simulated fake refund notifications.",
          premise2: "Target Situation: New wave of SMS claiming transit card account refunds with spoofed headers.",
          conclusion: "Conclusion: Adapt previous phishing mitigation signature to instantly block sender domain pattern.",
          inferenceTrace: "Incident response CBR engine reused previous remediation playbook."
        }
      },
      examTip: "NUS-ISS Open-Book Trap: In Case-Based Reasoning questions, always cite the 4R cycle (Retrieve, Reuse, Revise, Retain). Analogical reasoning succeeds when surface features differ but deep structural relationships are isomorphic."
    }
  },

  initReasoningTypesStudio: function() {
    this.selectReasoningType(this._currentReasoningType || 'deductive');
  },

  setReasoningScenario: function(scen) {
    this._currentReasoningScenario = scen;
    this.renderReasoningWorkbench();
  },

  selectReasoningType: function(type) {
    if (!this._reasoningData[type]) return;
    this._currentReasoningType = type;

    // Update active style on cards
    ['deductive', 'inductive', 'abductive', 'analogical'].forEach(t => {
      const el = document.getElementById(`rcard-${t}`);
      if (el) {
        if (t === type) {
          el.style.border = `2px solid ${this._reasoningData[t].color}`;
          el.style.background = 'rgba(56, 189, 248, 0.08)';
          el.style.boxShadow = `0 0 12px ${this._reasoningData[t].color}33`;
        } else {
          el.style.border = '1px solid var(--border-color)';
          el.style.background = 'var(--bg-card)';
          el.style.boxShadow = 'none';
        }
      }
    });

    this.renderReasoningWorkbench();
  },

  renderReasoningWorkbench: function() {
    const wb = document.getElementById('reasoning-workbench');
    if (!wb) return;

    const type = this._currentReasoningType || 'deductive';
    const data = this._reasoningData[type];
    const scenKey = this._currentReasoningScenario || 'eyecoach';
    const scen = (data.scenarios && data.scenarios[scenKey]) ? data.scenarios[scenKey] : data.scenarios['eyecoach'];

    wb.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
        <div>
          <h4 style="margin: 0; color: ${data.color}; font-size: 1.05rem; display: flex; align-items: center; gap: 8px;">
            <span>${data.title}</span>
          </h4>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 3px;">
            <i data-lucide="compass" style="width: 12px; height: 12px; vertical-align: middle;"></i> Direction: <strong>${data.direction}</strong>
          </div>
        </div>
        <div style="display: flex; gap: 6px; align-items: center;">
          <span class="badge-tech" style="background: rgba(255,255,255,0.06); color: var(--text-secondary); font-size: 0.72rem;">
            ${data.systemMode}
          </span>
        </div>
      </div>

      <!-- Formal Mathematical Syllogism -->
      <div style="background: var(--bg-secondary); border-radius: 6px; padding: 10px 14px; margin-bottom: 12px; text-align: center;">
        <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 4px;">Formal Logical / Mathematical Formulation</div>
        <div id="rw-math" style="font-size: 0.95rem; color: #38bdf8;">${data.formula}</div>
      </div>

      <!-- Live Scenario Syllogism Trace -->
      <div class="grid-2-col" style="gap: 12px; margin-bottom: 12px;">
        <div style="background: var(--bg-secondary); padding: 12px; border-radius: 6px; border-left: 3px solid ${data.color};">
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 4px;">Premises & Inputs</div>
          <div style="font-size: 0.82rem; color: var(--text-primary); margin-bottom: 6px;"><strong>Premise 1:</strong> ${scen.premise1}</div>
          <div style="font-size: 0.82rem; color: var(--text-primary);"><strong>Premise 2:</strong> ${scen.premise2}</div>
        </div>
        <div style="background: var(--bg-secondary); padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
          <div style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; margin-bottom: 4px;">Inference Result</div>
          <div style="font-size: 0.84rem; color: #10b981; font-weight: 600; margin-bottom: 6px;">${scen.conclusion}</div>
          <div style="font-size: 0.76rem; color: var(--text-secondary);"><i data-lucide="cpu" style="width: 12px; height: 12px; vertical-align: middle;"></i> <em>${scen.inferenceTrace}</em></div>
        </div>
      </div>

      <!-- Certainty Bar -->
      <div style="background: var(--bg-secondary); padding: 10px 14px; border-radius: 6px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 4px;">
          <span style="color: var(--text-muted); font-weight: 600;">Certainty & Soundness Level:</span>
          <span style="color: ${data.color}; font-weight: 700;">${data.certaintyLabel}</span>
        </div>
        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden;">
          <div style="width: ${data.certainty}%; height: 100%; background: ${data.color}; transition: width 0.4s ease;"></div>
        </div>
      </div>

      <!-- Exam Tip & Trap -->
      <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid #f59e0b; padding: 10px 14px; border-radius: 4px; font-size: 0.8rem; color: var(--text-primary); line-height: 1.5;">
        <strong style="color: #f59e0b;"><i data-lucide="alert-triangle" style="width: 13px; height: 13px; vertical-align: middle;"></i> Exam Strategy & Pitfalls:</strong> ${data.examTip}
      </div>
    `;

    this.renderMath(wb);
    if (window.lucide) window.lucide.createIcons();
  },

  checkReasoningChallenge: function(selectedType) {
    const feedback = document.getElementById('reasoning-challenge-feedback');
    if (!feedback) return;

    feedback.style.display = 'block';
    if (selectedType === 'abductive') {
      feedback.style.color = '#10b981';
      feedback.innerHTML = `<strong><i data-lucide="check-circle" style="width:14px;height:14px;vertical-align:middle;"></i> Correct!</strong> This is <strong>Abductive Reasoning</strong>. EyeCoach observed the symptom (slow blinks, droopy eyelids) and inferred the most plausible explanatory cause (ocular fatigue). Note that eye fatigue is not 100% guaranteed (deduction) nor is it a learned dataset distribution (pure induction) — it is a diagnostic hypothesis.`;
    } else {
      feedback.style.color = '#ef4444';
      feedback.innerHTML = `<strong><i data-lucide="x-circle" style="width:14px;height:14px;vertical-align:middle;"></i> Not quite.</strong> You selected <em>${selectedType.toUpperCase()}</em>. The scenario describes observing an <strong>effect / symptom</strong> and hypothesizing the <strong>underlying cause</strong>. In NUS-ISS IRS, that is the defining definition of <strong>Abductive Reasoning</strong> (Inference to the Best Explanation). Try clicking the "Abductive" card above!`;
    }
    if (window.lucide) window.lucide.createIcons();
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
