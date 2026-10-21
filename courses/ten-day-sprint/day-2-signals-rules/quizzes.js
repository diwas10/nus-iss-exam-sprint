// Day 2 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions

window.DAY2_SIGNALS_RULES_QUIZZES = [
  {
    id: "d2-q1",
    module: "Intelligent Sensing Systems — Sampling",
    slideRef: "ISSM Module 2 Slide 8-12",
    question: "A high-fidelity speech recognition microphone captures audio containing frequencies up to 8 kHz. What is the minimum theoretical sampling rate required according to the Nyquist-Shannon theorem, and what happens if sampled at 10 kHz?",
    options: [
      "Minimum rate is 8 kHz; sampling at 10 kHz causes signal amplification.",
      "Minimum rate is 16 kHz; sampling at 10 kHz causes severe aliasing where high frequencies fold back into audible lower frequencies.",
      "Minimum rate is 4 kHz; sampling at 10 kHz guarantees zero noise.",
      "Minimum rate is 32 kHz; sampling at 10 kHz crashes the analog-to-digital converter."
    ],
    correctIndex: 1,
    hint: "Nyquist frequency requires fs >= 2 * f_max.",
    explanation: "According to the Nyquist-Shannon Sampling Theorem, $f_s \\ge 2 \\cdot f_{max} = 2 \\times 8\\text{ kHz} = 16\\text{ kHz}$. If sampled at only 10 kHz, any frequency components between 5 kHz and 8 kHz fold across the 5 kHz Nyquist boundary, producing ghost alias frequencies."
  },
  {
    id: "d2-q2",
    module: "Intelligent Sensing Systems — Aliasing",
    slideRef: "ISSM Module 1 Slide 30",
    question: "A physical sinusoidal signal of frequency $f = 35\\text{ Hz}$ is sampled by a microcontroller ADC at $f_s = 50\\text{ Hz}$. What is the apparent perceived alias frequency $f_{\\text{alias}}$ reconstructed by the digital system?",
    options: [
      "$f_{\\text{alias}} = 35\\text{ Hz}$ (perfectly reconstructed)",
      "$f_{\\text{alias}} = 15\\text{ Hz}$",
      "$f_{\\text{alias}} = 25\\text{ Hz}$",
      "$f_{\\text{alias}} = 70\\text{ Hz}$"
    ],
    correctIndex: 1,
    hint: "Nyquist frequency is fs/2 = 25 Hz. The signal folds around fs: f_alias = |f - fs|.",
    explanation: "The Nyquist frequency is $f_N = f_s / 2 = 25\\text{ Hz}$. Because $35\\text{ Hz} > 25\\text{ Hz}$, aliasing occurs. The folding frequency is $f_{\\text{alias}} = |f - f_s| = |35 - 50| = 15\\text{ Hz}$. The system mistakenly perceives a 15 Hz tone!"
  },
  {
    id: "d2-q3",
    module: "Intelligent Sensing Systems — arPLS",
    slideRef: "ISSM Workshop 1-2 & Module 2 Slide 26",
    question: "In the Asymmetric Reweighted Penalized Least Squares (arPLS) baseline correction algorithm, why is the penalty asymmetric ($w_i \\approx 0$ for points above the baseline, $w_i \\approx 1$ for points below)?",
    options: [
      "To speed up matrix inversion by setting half of the elements to zero.",
      "To ensure that positive signal peaks (such as ECG QRS complexes) are ignored and do not drag the estimated baseline upward.",
      "To convert 1D signals into 2D time-frequency representations.",
      "To calculate the Fast Fourier Transform of the baseline."
    ],
    correctIndex: 1,
    hint: "If a heartbeat peak pulls the baseline up with it, the peak is erased when you subtract the baseline!",
    explanation: "The asymmetric weighting gives negligible weight to positive deviations ($y_i > z_i$), ensuring that true signal peaks do not pull the baseline estimate upward. Only the valleys and baseline points anchor the smooth curve."
  },
  {
    id: "d2-q4",
    module: "Intelligent Sensing Systems — DTW",
    slideRef: "ISSM Workshop 1-3 & Module 2 Slide 34-38",
    question: "Which of the following is NOT one of the standard warping path constraints in Dynamic Time Warping (DTW)?",
    options: [
      "Boundary Condition: The path must begin at (1, 1) and end at (N, M).",
      "Monotonicity: The path cannot step backward in time ($i_k \\ge i_{k-1}$ and $j_k \\ge j_{k-1}$).",
      "Linearity Constraint: The path must be a strictly straight 45-degree diagonal line across the matrix.",
      "Continuity / Step Size Condition: Steps are restricted to adjacent cells ($i_k - i_{k-1} \\le 1$ and $j_k - j_{k-1} \\le 1$)."
    ],
    correctIndex: 2,
    hint: "If the path had to be a straight 45-degree line, it would just be standard Euclidean distance with zero time warping!",
    explanation: "DTW's entire purpose is to allow non-linear, elastic alignment! The path is explicitly allowed to deviate from the straight diagonal to match features that occurred at different speeds or accelerations."
  },
  {
    id: "d2-q5",
    module: "Intelligent Sensing Systems — Peak Detection",
    slideRef: "ISSM Module 2 Slide 14-20",
    question: "In sensor signal processing, why is 'Peak Prominence' preferred over simple 'Absolute Height Threshold' when detecting heartbeats in an ECG signal suffering from baseline drift?",
    options: [
      "Because prominence runs in O(1) time while height requires sorting.",
      "Because an absolute height threshold will miss true low-voltage peaks located in a deep baseline trough and falsely trigger on small noise wiggles riding high on a baseline crest.",
      "Because prominence computes the Fourier spectrum of each peak.",
      "Because absolute height only works for square waves."
    ],
    correctIndex: 1,
    hint: "Prominence measures how high a peak stands relative to its surrounding local baseline valley, regardless of where the baseline wanders.",
    explanation: "When an ECG wanders vertically, an absolute threshold of 1.0V fails: a true heartbeat peak in a trough at 0.5V is completely missed, while a tiny noise wiggle at the top of a 1.2V baseline hill is falsely detected as a heartbeat. Prominence evaluates vertical elevation above the local contour line."
  },
  {
    id: "d2-q6",
    module: "Reasoning Systems — Pillars of Reasoning",
    slideRef: "MR Day 2 (JR) Slide 7-12 & RS Day 1 Slide 4",
    question: "Which reasoning type concludes the most plausible cause from an observed effect, such as a doctor diagnosing a disease based on observed symptoms or Sherlock Holmes deducing an explanation from crime scene clues?",
    options: [
      "Deductive Reasoning (Modus Ponens)",
      "Abductive Reasoning",
      "Inductive Reasoning",
      "Analogical Reasoning"
    ],
    correctIndex: 1,
    hint: "Given B and A -> B, conclude A as the best explanation.",
    explanation: "Abductive reasoning infers the best explanatory hypothesis from observed evidence. Unlike deductive reasoning (which guarantees truth), abductive conclusions are plausible hypotheses that must be verified."
  },
  {
    id: "d2-q7",
    module: "Reasoning Systems — Chaining",
    slideRef: "RS Day 1 (JR) Slide 18-22",
    question: "An automated patient monitoring system receives hundreds of real-time vital sign updates per minute and infers risk levels as facts arrive. Which inference approach is fundamentally best suited?",
    options: [
      "Backward Chaining (Goal-driven reasoning)",
      "Forward Chaining (Data-driven reasoning)",
      "Bidirectional Dijkstra Search",
      "Genetic Recombination"
    ],
    correctIndex: 1,
    hint: "Forward chaining starts with known facts and triggers rules forward to derive new conclusions.",
    explanation: "Forward chaining is data-driven: as new sensory facts enter working memory, the rule engine matches condition antecedents (IF parts) and fires conclusions (THEN parts). Backward chaining is goal-driven, used when verifying a specific hypothesis."
  },
  {
    id: "d2-q8",
    module: "Reasoning Systems — Conflict Resolution",
    slideRef: "RS Day 1 (JR) Slide 26-30",
    question: "In an emergency triage rule base: Rule A: `IF Fever > 38.0 THEN General Ward (Priority 20)`. Rule B: `IF Fever > 38.0 AND Oxygen < 90 THEN Intensive Care (Priority 90)`. When both rules match a patient, why does Rule B fire first under standard expert system strategies?",
    options: [
      "Rule B has fewer parameters and fires faster.",
      "Rule B is both more specific (2 conditions vs 1) and has a higher assigned priority (90 vs 20).",
      "Rule A was declared first in the source file, so it automatically overrides Rule B.",
      "Rule B deletes Rule A from working memory permanently."
    ],
    correctIndex: 1,
    hint: "Both Specificity (more specific context) and Priority (salience) favor Rule B.",
    explanation: "Under the Specificity strategy, a rule with more specific preconditions represents specialized clinical knowledge and takes precedence over general rules. Under the Priority/Salience strategy, explicit numerical priority (90 > 20) dictates firing order."
  },
  {
    id: "d2-q9",
    module: "Reasoning Systems — Hybrid Architectures",
    slideRef: "RS Day 1 (JR) Slide 42 & 46",
    question: "Why do modern mission-critical AI systems (e.g., healthcare, financial fraud) combine Machine Learning models with Rule-Based Reasoning rather than using ML alone?",
    options: [
      "Because ML models cannot process numerical values.",
      "Because ML provides statistical predictions from complex patterns, while Rule Engines enforce hard safety constraints, regulatory policies, and provide explainable audit trails.",
      "Because rule engines run on quantum processors.",
      "Because ML models have zero memory complexity."
    ],
    correctIndex: 1,
    hint: "Think about why a hospital lawyer or doctor cannot rely solely on an unexplainable probability output.",
    explanation: "Hybrid reasoning couples the predictive power of ML (e.g. estimating fraud risk = 0.94) with deterministic rule engines that enforce compliance, hospital bed availability constraints, safety policies, and auditable reasoning trails."
  },
  {
    id: "d2-q10",
    module: "Reasoning Systems — AI Safety & Guardrails",
    slideRef: "RS Day 1 (JR) Slide 73-82",
    question: "In Dr. JR's Reasoning Systems Day 1, which self-check mechanism is implemented to catch hallucinated outputs or contradictory vital sign sensor inputs before an action is taken?",
    options: [
      "Contradiction Check & Missing Explanation Check",
      "Gradient Descent Backpropagation",
      "Fourier Inversion",
      "Nearest Centroid Shifting"
    ],
    correctIndex: 0,
    hint: "The safety loop runs self-checks on facts and reasoning traces to detect mutual contradictions or unsupported claims.",
    explanation: "Modern reasoning architectures implement validation self-checks: (1) Contradiction Check to verify that newly asserted facts do not violate physiological constraints, and (2) Missing Explanation Check to guarantee that every high-stakes clinical disposition is supported by an unbroken chain of premises."
  }
];
