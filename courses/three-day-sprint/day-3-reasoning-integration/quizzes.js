// Day 3 Grand Mock Exam Quizzes & Post-Quiz Exam-Style Questions
// Reasoning Systems + Integration + Exams (Remaining parts of Days 3, 8, 9, 10 + Nov 2026 Sample Papers)

window.DAY3_REASONING_INTEGRATION_QUIZZES = [
  {
    id: "d3-q1",
    module: "Reasoning Systems — Rule Engines",
    slideRef: "RS Day 1 & Day 2 (IRS Q1)",
    question: "In a production rule engine, what is the role of the 'Refractoriness' conflict resolution strategy?",
    options: [
      "It ensures rules with the highest numeric priority always fire first.",
      "It prevents the exact same rule from firing more than once on the exact same set of working memory facts, preventing infinite execution loops.",
      "It deletes all facts from working memory once a rule fires.",
      "It converts production rules into Horn clauses."
    ],
    correctIndex: 1,
    hint: "Think about avoiding infinite loops when a condition remains true.",
    explanation: "Refractoriness ensures that once a rule has fired for a specific binding of facts, that instantiation is placed in an exhausted set and will not fire again unless the underlying working memory facts change, preventing infinite loops."
  },
  {
    id: "d3-q2",
    module: "Reasoning Systems — Knowledge Frames & Daemons",
    slideRef: "RS Day 3 Slide 25-42 (IRS Q1c)",
    question: "In a Frame-based Knowledge Representation system, what is the fundamental difference between an 'if-needed' daemon and an 'if-added' daemon?",
    options: [
      "if-needed compiles Python code; if-added executes Cypher queries.",
      "An 'if-needed' daemon triggers lazily when a slot's value is accessed/requested but empty (procedural attachment); an 'if-added' daemon triggers eagerly whenever new data is written into a slot (constraint checking and action trigger).",
      "if-needed deletes frames; if-added creates child frames.",
      "if-needed is used in backward chaining; if-added is used only in transformers."
    ],
    correctIndex: 1,
    hint: "Lazy calculation on demand vs immediate trigger on data entry.",
    explanation: "An `if-needed` daemon computes or retrieves data on-demand only when another rule or user queries that slot. An `if-added` daemon acts as a trigger/event handler as soon as new data enters the slot (e.g. checking safety thresholds)."
  },
  {
    id: "d3-q3",
    module: "Cognitive Systems — 11-Entity Cognitive Model",
    slideRef: "CS Day 1AM Slide 14-35 (IRS Q2h)",
    question: "In the 11-Entity Cognitive Model Framework (IRS Nov 2026 Q2h), what is the correct sequential order of entities and cognitive functions from stimulus to physical action?",
    options: [
      "Stimuli -> Learn -> Knowledge -> Act -> Effects",
      "1. Stimuli -> 2. Perceive -> 3. Data -> 4. Recognize -> 5. Information -> 6. Learn -> 7. Knowledge -> 8. Reason -> 9. Plan -> 10. Act -> 11. Effects",
      "1. Input -> 2. Black Box -> 3. Output -> 4. Feedback",
      "1. Memory -> 2. Rules -> 3. Graph -> 4. Attention -> 5. State"
    ],
    correctIndex: 1,
    hint: "Raw stimuli are perceived into data, recognized into information, learned into knowledge, reasoned into plans, and acted into effects.",
    explanation: "The official NUS ISS Cognitive Framework sequence is: (1) Environmental stimuli -> (2) Perceive function -> (3) Raw data -> (4) Recognize function -> (5) Information -> (6) Learn function -> (7) Knowledge (new/known) -> (8) Reason function -> (9) Plan/Solution -> (10) Act function -> (11) Effects of action."
  },
  {
    id: "d3-q4",
    module: "Cognitive Systems — Marr's 3 Levels of Vision",
    slideRef: "CS Day 1PM Slide 8-22 (IRS Q2a)",
    question: "According to David Marr's Tri-Level Hypothesis of Vision, what does the 'Algorithmic / Representational' level specify?",
    options: [
      "The physical silicon or neural hardware that executes the system.",
      "The mathematical representations (e.g. 2D primal sketch, 2.5D sketch, 3D model) and the explicit step-by-step algorithms used to transform input into output.",
      "The evolutionary purpose and abstract goal of the visual task.",
      "The marketing budget of the autonomous vehicle project."
    ],
    correctIndex: 1,
    hint: "Level 1 = Computational (What & Why), Level 2 = Algorithmic (Representations & Procedures), Level 3 = Implementational (Physical hardware).",
    explanation: "Marr Level 2 specifies the choice of representations (e.g. zero-crossings, depth maps) and the precise dynamic algorithms used to compute them."
  },
  {
    id: "d3-q5",
    module: "Transformers — Scaled Dot-Product Attention",
    slideRef: "PRMLS Day 5 Slide 14-32",
    question: "In Transformer self-attention, why is the dot product of Query and Key divided by $\\sqrt{d_k}$ in $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$?",
    options: [
      "To enforce non-negativity of weights.",
      "For large key dimensions $d_k$, the dot product grows large in magnitude, pushing the softmax function into regions with extremely small gradients (gradient vanishing); dividing by $\\sqrt{d_k}$ scales variance back to 1.",
      "To make the matrix multiplication strictly invertible.",
      "Because $\\sqrt{d_k}$ equals the batch size."
    ],
    correctIndex: 1,
    hint: "If components have zero mean and unit variance, their dot product has variance equal to d_k.",
    explanation: "Under the assumption of independent components with unit variance, the dot product $\\sum_{i=1}^{d_k} q_i k_i$ has mean 0 and variance $d_k$. Large values cause softmax to saturate with near-zero gradients. Scaling by $\\sqrt{d_k}$ prevents saturation."
  },
  {
    id: "d3-q6",
    module: "Knowledge Graphs — TransE Embedding Loss",
    slideRef: "MR Day 4 Slide 22-40",
    question: "What is the core geometric intuition and scoring function in TransE (Translating Embeddings) for knowledge graph triples $(h, r, t)$?",
    options: [
      "Entities are multiplied as complex numbers; $f(h, r, t) = h \\cdot r \\cdot t$.",
      "The relation $\\mathbf{r}$ is modeled as a translation vector in continuous space such that $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$; score $d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t}) = \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\|_2$ should be low for true triples and high for corrupted negatives.",
      "Relations are high-pass filters applied to entity matrices.",
      "Entities are clustered using K-Means with Euclidean centroids."
    ],
    correctIndex: 1,
    hint: "TransE: head vector + relation vector should equal tail vector.",
    explanation: "TransE treats relations as translations: if triple $(h, r, t)$ holds, $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$. The margin ranking loss minimizes $\|\mathbf{h} + \mathbf{r} - \mathbf{t}\|$ for true facts while maximizing it for corrupted facts."
  },
  {
    id: "d3-q7",
    module: "Optimization — Genetic Algorithm Order Crossover (OX)",
    slideRef: "MR Day 4 & WS1GA.xlsx",
    question: "When applying a Genetic Algorithm to permutation problems like the Traveling Salesperson Problem (TSP), why does standard 1-point crossover fail, and how does Order Crossover (OX) solve it?",
    options: [
      "Standard 1-point crossover is too slow; OX runs in $O(1)$ time.",
      "Standard 1-point crossover produces duplicate cities and misses other cities (violating the permutation constraint); Order Crossover preserves a contiguous slice from one parent and fills remaining cities in the cyclic relative order of the second parent without duplicates.",
      "Standard crossover cannot compute Euclidean distances.",
      "OX converts chromosomes into binary Gray codes."
    ],
    correctIndex: 1,
    hint: "Every city must be visited exactly once. Swapping tails creates duplicates like [1, 2, 3, 2, 1].",
    explanation: "In permutation problems, every allele must appear exactly once. Order Crossover (OX) copies a substring from Parent 1, then inserts missing alleles from Parent 2 starting from the second cut point, guaranteeing a valid permutation."
  },
  {
    id: "d3-q8",
    module: "Sensory Systems — Multimodal Sensor Fusion",
    slideRef: "ISSM Day 4 Slide 18-35",
    question: "In the Reverse Vending Machine (RVM) case study, what is the primary architectural disadvantage of 'Early Fusion' (concatenating raw pixel frames and inductive metal signals) compared to 'Late Fusion'?",
    options: [
      "Early fusion cannot be executed on Linux systems.",
      "Early fusion requires different sensor modalities to have identical sampling rates and physical dimensions, and is highly sensitive if one sensor fails; Late Fusion allows specialized sub-networks per modality and integrates predictions flexibly at the decision layer.",
      "Late fusion requires 100x more GPU memory.",
      "Early fusion prevents the use of AdaBoost."
    ],
    correctIndex: 1,
    hint: "Consider combining high-dimensional 30fps camera images with a 1000Hz 1D metal proximity scalar.",
    explanation: "Early fusion concatenates raw heterogeneous features, suffering from dimensionality mismatches, temporal alignment problems, and vulnerability to single sensor failure. Late fusion trains modality-specific classifiers and fuses high-level decisions."
  },
  {
    id: "d3-q9",
    module: "Ensemble Methods — Condorcet's Jury Theorem",
    slideRef: "PSUPR Day 5 & PRMLS Day 5",
    question: "According to Condorcet's Jury Theorem, what two strict conditions must hold for an ensemble majority vote of $M$ classifiers to have accuracy approaching 1.0 as $M \\to \\infty$?",
    options: [
      "All models must be Decision Trees, and learning rate must be $< 0.01$.",
      "(1) Each individual classifier must have accuracy $p > 0.5$ (better than random guessing), and (2) the errors of the classifiers must be statistically independent (uncorrelated).",
      "All models must be trained on the exact same dataset without bootstrap sampling.",
      "The dataset must contain an equal number of positive and negative classes."
    ],
    correctIndex: 1,
    hint: "Independent coin tosses with p > 0.5. As number of tosses increases, majority is guaranteed correct.",
    explanation: "Condorcet's Jury Theorem states that if independent voters have individual accuracy $p > 0.5$, the probability that the majority vote is correct approaches 1 as $M \\to \\infty$. If $p < 0.5$, majority accuracy approaches 0!"
  },
  {
    id: "d3-q10",
    module: "Ensemble Methods — AdaBoost vs Bagging",
    slideRef: "PRS Sample Paper Nov 2026 Q1c",
    question: "What is the fundamental difference between Bagging (Random Forest) and Boosting (AdaBoost) in terms of Bias and Variance reduction?",
    options: [
      "Bagging trains shallow trees sequentially; Boosting trains deep trees in parallel.",
      "Bagging trains high-variance, low-bias deep trees in parallel on bootstrap samples to REDUCE VARIANCE via averaging; Boosting trains high-bias shallow stumps sequentially on reweighted data to REDUCE BIAS by targeting hard errors.",
      "Bagging is supervised; Boosting is unsupervised.",
      "Bagging increases bias; Boosting increases variance."
    ],
    correctIndex: 1,
    hint: "Random Forest averages independent trees to smooth variance; AdaBoost builds stumps sequentially to fix bias.",
    explanation: "Bagging reduces variance by averaging decorrelated estimators: $\\text{Var} = \\rho \\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2$. Boosting builds an additive model sequentially, adjusting weights $w_i$ to focus on misclassified samples, systematically reducing bias."
  }
];

// Post-Quiz NUS ISS Exam-Style Questions (Mastery Section)
window.DAY3_EXAM_QUESTIONS = [
  {
    id: "d3-exam-q1",
    title: "Question 1: Hospital Triage / Ergonomics Rule Engine & Daemon Design",
    topic: "IRS / Reasoning Systems (Official Nov 2026 IRS Q1)",
    totalMarks: 10,
    scenario: `
      An AI workplace ergonomics and emergency health monitor (Nov 2026 IRS Q1) evaluates worker posture and health indicators using a pinhole webcam and biosensors.
      A frame-based knowledge base maintains user posture slots:
      <ul>
        <li><code>Worker_1.FaceDistance</code>: Distance $D$ in inches. Safe range is $[18, 24]$ inches.</li>
        <li><code>Worker_1.ObservedFaceDiameter</code>: Measured in pixels from camera frame ($d_{\\text{obs}}$).</li>
        <li>Calibration reference: at known distance $D_{\\text{cal}} = 20\\text{ inches}$, the face diameter is $d_{\\text{cal}} = 120\\text{ pixels}$.</li>
      </ul>
      A pinhole camera geometry dictates that face distance is inversely proportional to observed pixel diameter:
      $$D = D_{\\text{cal}} \\times \\frac{d_{\\text{cal}}}{d_{\\text{obs}}}$$
    `,
    subparts: [
      { prompt: "Design an 'if-needed' daemon attached to the <code>FaceDistance</code> slot that computes $D$ on demand when $d_{\\text{obs}} = 80\\text{ pixels}$.", marks: 3 },
      { prompt: "Design an 'if-added' daemon on <code>FaceDistance</code> that triggers an alert if the worker is outside the safe range $[18, 24]$ inches.", marks: 3 },
      { prompt: "Contrast Forward Chaining with Backward Chaining for real-time sensor alert monitoring vs medical diagnosis.", marks: 4 }
    ],
    solution: `
      <p><strong>Part (a) If-Needed Daemon Design [3 Marks]:</strong></p>
      <p>An <code>if-needed</code> daemon is a procedural attachment triggered when <code>Worker_1.FaceDistance</code> is queried but currently uncomputed:</p>
      $$\\begin{aligned}
      D &= D_{\\text{cal}} \\times \\frac{d_{\\text{cal}}}{d_{\\text{obs}}} \\\\
      &= 20\\text{ inches} \\times \\frac{120\\text{ pixels}}{80\\text{ pixels}} \\\\
      &= 20 \\times 1.5 = \\mathbf{30.0\\text{ inches}}
      \\end{aligned}$$
      <p><strong>Daemon Pseudocode:</strong></p>
      <pre><code>DAEMON Compute_FaceDistance (Instance W):
    d_obs = W.ObservedFaceDiameter
    IF d_obs > 0:
        W.FaceDistance = 20.0 * (120.0 / d_obs)
        RETURN W.FaceDistance
    ELSE:
        RETURN UNKNOWN
</code></pre>

      <p><strong>Part (b) If-Added Daemon Design [3 Marks]:</strong></p>
      <p>An <code>if-added</code> daemon executes immediately whenever a new value is written to <code>FaceDistance</code>:</p>
      <pre><code>DAEMON Check_Ergonomic_Distance (Instance W, NewValue D):
    IF D < 18.0:
        ASSERT WorkingMemory("Worker " + W.ID + " too close to screen: " + D + " in")
        TriggerAlert("POSTURE_WARNING", "Move back from monitor")
    ELSE IF D > 24.0:
        ASSERT WorkingMemory("Worker " + W.ID + " too far / slouching: " + D + " in")
        TriggerAlert("POSTURE_WARNING", "Lean forward into optimal viewing zone")
    ELSE:
        ASSERT WorkingMemory("Worker " + W.ID + " posture optimal")
</code></pre>

      <p><strong>Part (c) Forward Chaining vs Backward Chaining [4 Marks]:</strong></p>
      <table class="styled-table" style="font-size:0.85rem; width:100%;">
        <thead><tr><th>Dimension</th><th>Forward Chaining (Data-Driven)</th><th>Backward Chaining (Goal-Driven)</th></tr></thead>
        <tbody>
          <tr><td><strong>Starting Point</strong></td><td>Known sensor facts in Working Memory</td><td>A specific hypothesis / goal to prove</td></tr>
          <tr><td><strong>Search Direction</strong></td><td>Bottom-Up (Antecedents $\\to$ Consequents)</td><td>Top-Down (Consequents $\\to$ Antecedents)</td></tr>
          <tr><td><strong>Best Use Case</strong></td><td><strong>Real-Time Alert Monitoring & Triage:</strong> Sensors stream continuous data (posture, heart rate, temperature); engine fires rules to assert alerts.</td><td><strong>Medical Diagnosis & Troubleshooting:</strong> Clinician tests hypothesis 'Patient has Glaucoma'; engine queries missing tests on-demand.</td></tr>
          <tr><td><strong>Interaction</strong></td><td>Autonomous, passive data ingest</td><td>Interactive: queries user for missing inputs</td></tr>
        </tbody>
      </table>
    `,
    rubric: [
      "[+3 Marks] Correct formula derivation $20 \\times (120/80) = 30\\text{ inches}$ and procedural if-needed logic.",
      "[+3 Marks] Correct if-added daemon triggering alert when $D \\notin [18, 24]$.",
      "[+2 Marks] Explaining Forward Chaining as data-driven bottom-up stream monitoring.",
      "[+2 Marks] Explaining Backward Chaining as goal-driven interactive hypothesis testing."
    ],
    examinerTrap: "Mixing up if-needed and if-added. If-needed is lazy (calculates value on read); if-added is eager (validates and triggers actions on write)."
  },
  {
    id: "d3-exam-q2",
    title: "Question 2: Cognitive Model 11-Entity Mapping (IRS Nov 2026 Q2h)",
    topic: "Cognitive Systems / CS Day 1AM (Official Exam Question)",
    totalMarks: 10,
    scenario: `
      An autonomous AI retinal screening kiosk in a polyclinic (IRS Nov 2026 Q2) captures fundus eye photos, detects microaneurysms, updates historical patient disease records, reasons about progression risk, and generates a specialist referral.
      Map this medical system onto the official NUS ISS 11-Entity Cognitive Model Framework.
    `,
    subparts: [
      { prompt: "Complete the table mapping the 5 Functions and 6 Information Entities of the Cognitive Model.", marks: 6 },
      { prompt: "Explain how this system integrates Perception (System 1) with Symbolic Deliberation (System 2).", marks: 4 }
    ],
    solution: `
      <p><strong>Part (a) Official 11-Entity Cognitive Framework Mapping [6 Marks]:</strong></p>
      <table class="styled-table" style="font-size:0.85rem; width:100%;">
        <thead><tr><th>Entity #</th><th>Cognitive Model Component</th><th>Physical System Instantiation in Retinal Kiosk</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><strong>Environmental Stimuli</strong></td><td>Photons emitted/reflected from patient's retina; ambient clinic illumination.</td></tr>
          <tr><td>2</td><td><strong>Perceive Function</strong></td><td>High-resolution digital optical fundus camera with automated aperture and auto-focus.</td></tr>
          <tr><td>3</td><td><strong>Raw Data</strong></td><td>Uncompressed $4096 \\times 3072$ RGB RAW image tensor with pixel intensity arrays.</td></tr>
          <tr><td>4</td><td><strong>Recognize Function</strong></td><td>Deep Convolutional Neural Network (U-Net) performing lesion segmentation.</td></tr>
          <tr><td>5</td><td><strong>Information</strong></td><td>Extracted symbolic clinical signs: 8 microaneurysms detected, 2 hard exudates, cup-to-disc ratio 0.65.</td></tr>
          <tr><td>6</td><td><strong>Learn Function</strong></td><td>Incremental Case-Based Reasoning retention and knowledge base update logging novel anomaly cases.</td></tr>
          <tr><td>7</td><td><strong>Knowledge (New / Known)</strong></td><td>Ophthalmology clinical ontology: Clinical Practice Guidelines (CPG) linking diabetic retinopathy stages to lesion counts.</td></tr>
          <tr><td>8</td><td><strong>Reason Function</strong></td><td>Forward-chaining rule engine evaluating disease severity and urgency criteria.</td></tr>
          <tr><td>9</td><td><strong>Plan / Solution</strong></td><td>Clinical treatment action plan: 'Urgent Vitreoretinal Specialist Referral within 2 Weeks' + automated appointment booking request.</td></tr>
          <tr><td>10</td><td><strong>Act Function</strong></td><td>Electronic Health Record (EHR) API dispatcher printing referral letter and sending SMS alert.</td></tr>
          <tr><td>11</td><td><strong>Effects of Action</strong></td><td>Patient scheduled for hospital consultation; polyclinic slot freed; early intervention prevents permanent vision loss.</td></tr>
        </tbody>
      </table>

      <p><strong>Part (b) System 1 vs System 2 Integration [4 Marks]:</strong></p>
      <ul>
        <li><strong>System 1 (Associative Perception):</strong> The CNN executes fast, sub-symbolic pattern recognition (Entities 1 to 5). It converts continuous noisy pixel matrices into discrete symbolic clinical findings (e.g. 'Hard Exudates present').</li>
        <li><strong>System 2 (Deliberative Symbolic Reasoning):</strong> The Rule Engine executes deductive, verifiable logic (Entities 7 to 9). It operates on the symbolic findings using audited medical rules, guaranteeing explainable recommendations and safety guardrails that deep networks cannot provide alone.</li>
        <li><strong>Coupling:</strong> This is a <em>Sequential Subprocessing (Transformational) Loosely-Coupled Hybrid Architecture</em>.</li>
      </ul>
    `,
    rubric: [
      "[+6 Marks] Complete, accurate sequential mapping across all 11 entities.",
      "[+2 Marks] Contrasting System 1 perceptual CNN with System 2 rule-based reasoning.",
      "[+2 Marks] Identifying the loosely-coupled sequential hybrid architecture."
    ],
    examinerTrap: "Listing fewer than 11 entities or jumbling the sequence. Make sure to distinguish between Perceive (creates Data) and Recognize (creates Information)."
  },
  {
    id: "d3-exam-q3",
    title: "Question 3: Knowledge Graph Embeddings & TransE Loss Formulation",
    topic: "Machine Reasoning & Knowledge Graphs / MR Day 4",
    totalMarks: 10,
    scenario: `
      A biomedical knowledge graph embeds entities and relations into a continuous vector space $\\mathbb{R}^k$ ($k = 3$) using TransE.
      Given true relation triple: $(h, r, t) = (\\text{Metformin}, \\text{Treats}, \\text{Diabetes})$.
      Let entity and relation embedding vectors be:
      $$\\mathbf{h} = [0.2, \\, 0.8, \\, -0.4], \\quad \\mathbf{r} = [0.5, \\, -0.3, \\, 0.7], \\quad \\mathbf{t} = [0.6, \\, 0.5, \\, 0.2]$$
      A corrupted negative triple $(h, r, t')$ is generated by replacing the tail with $t' = \\text{Hypertension}$, where:
      $$\\mathbf{t}' = [-0.1, \\, 0.2, \\, 0.9]$$
      The TransE margin ranking loss is defined as:
      $$\\mathcal{L} = \\max\\left(0, \\, \\gamma + d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t}) - d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t}')\\right)$$
      With safety margin hyperparameter $\\gamma = 1.0$ and $L_2$ Euclidean distance metric $d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|_2$.
    `,
    subparts: [
      { prompt: "Compute the translation vector $\\mathbf{h} + \\mathbf{r}$.", marks: 2 },
      { prompt: "Calculate the distance $d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t})$ for the true positive triple.", marks: 3 },
      { prompt: "Calculate the distance $d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t}')$ for the corrupted negative triple and compute the resulting TransE margin loss $\\mathcal{L}$.", marks: 5 }
    ],
    solution: `
      <p><strong>Part (a) Translation Vector [2 Marks]:</strong></p>
      $$\\begin{aligned}
      \\mathbf{h} + \\mathbf{r} &= [0.2 + 0.5, \\, 0.8 - 0.3, \\, -0.4 + 0.7] \\\\
      &= \\mathbf{[0.7, \\, 0.5, \\, 0.3]}
      \\end{aligned}$$

      <p><strong>Part (b) True Positive Triple Distance [3 Marks]:</strong></p>
      $$\\begin{aligned}
      \\mathbf{h} + \\mathbf{r} - \\mathbf{t} &= [0.7 - 0.6, \\, 0.5 - 0.5, \\, 0.3 - 0.2] = [0.1, \\, 0.0, \\, 0.1] \\\\
      d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t}) &= \\sqrt{0.1^2 + 0.0^2 + 0.1^2} = \\sqrt{0.01 + 0 + 0.01} = \\sqrt{0.02} \\approx \\mathbf{0.1414}
      \\end{aligned}$$

      <p><strong>Part (c) Corrupted Negative Distance & Margin Loss [5 Marks]:</strong></p>
      $$\\begin{aligned}
      \\mathbf{h} + \\mathbf{r} - \\mathbf{t}' &= [0.7 - (-0.1), \\, 0.5 - 0.2, \\, 0.3 - 0.9] = [0.8, \\, 0.3, \\, -0.6] \\\\
      d(\\mathbf{h} + \\mathbf{r}, \\mathbf{t}') &= \\sqrt{0.8^2 + 0.3^2 + (-0.6)^2} = \\sqrt{0.64 + 0.09 + 0.36} = \\sqrt{1.09} \\approx \\mathbf{1.0440}
      \\end{aligned}$$

      <p>Now evaluate the Margin Ranking Loss:</p>
      $$\\begin{aligned}
      \\mathcal{L} &= \\max\\left(0, \\, \\gamma + d(\\mathbf{h}+\\mathbf{r}, \\mathbf{t}) - d(\\mathbf{h}+\\mathbf{r}, \\mathbf{t}')\\right) \\\\
      &= \\max\\left(0, \\, 1.0 + 0.1414 - 1.0440\\right) \\\\
      &= \\max\\left(0, \\, 0.0974\\right) \\\\
      &= \\mathbf{0.0974}
      \\end{aligned}$$
      <p><strong>Interpretation:</strong> Since $\\mathcal{L} = 0.0974 > 0$, the negative triple is not separated from the positive triple by the full required margin $\\gamma = 1.0$ (difference is $1.0440 - 0.1414 = 0.9026 < 1.0$). Gradient descent will update embeddings $\\mathbf{h}, \\mathbf{r}, \\mathbf{t}$ to further pull $\\mathbf{h}+\\mathbf{r}$ towards $\\mathbf{t}$ and push away from $\\mathbf{t}'$.</p>
    `,
    rubric: [
      "[+2 Marks] Correct translation vector: $[0.7, 0.5, 0.3]$.",
      "[+3 Marks] True distance: $\\sqrt{0.02} \\approx 0.1414$.",
      "[+3 Marks] Corrupted distance: $\\sqrt{1.09} \\approx 1.0440$.",
      "[+2 Marks] Margin loss calculation: $\\max(0, 1.0 + 0.1414 - 1.0440) = 0.0974$."
    ],
    examinerTrap: "Forgetting to take square root when using L2 Euclidean distance. If you use squared Euclidean distance, the formula must state L2^2."
  },
  {
    id: "d3-exam-q4",
    title: "Question 4: Genetic Algorithm Order Crossover (OX) Hand Execution",
    topic: "Optimization / MR Day 4 (WS1GA.xlsx)",
    totalMarks: 10,
    scenario: `
      An autonomous logistics robot optimizes delivery paths across 8 distribution centers (labeled 1 to 8) using a Genetic Algorithm.
      Two parent tour chromosomes are selected for crossover:
      $$\\begin{aligned}
      P_1 &= [1, \\, 2, \\, 3, \\; | \\; 4, \\, 5, \\, 6, \\, 7, \\; | \\; 8] \\\\
      P_2 &= [8, \\, 7, \\, 6, \\; | \\; 5, \\, 4, \\, 3, \\, 2, \\; | \\; 1]
      \\end{aligned}$$
      The crossover cut points are set after position 3 and after position 7 (enclosing the middle slice of length 4: indices 4, 5, 6, 7).
    `,
    subparts: [
      { prompt: "Execute Order Crossover (OX) to generate Offspring $O_1$ from $P_1$ and $P_2$, showing all intermediate steps.", marks: 6 },
      { prompt: "Explain why standard 1-point crossover fails on permutation representations, and how OX guarantees validity.", marks: 4 }
    ],
    solution: `
      <p><strong>Part (a) Step-by-Step Execution of Order Crossover (OX) [6 Marks]:</strong></p>
      <ol>
        <li><strong>Step 1: Copy Middle Slice from Parent 1:</strong>
          $$O_1 = [\\_, \\, \\_, \\, \\_, \\; | \\; \\mathbf{4, \\, 5, \\, 6, \\, 7}, \\; | \\; \\_]$$
        </li>
        <li><strong>Step 2: List Remaining Cities from Parent 2 starting from Second Cut Point (cyclic order):</strong>
          Starting from index 8 in $P_2 = [8, 7, 6, 5, 4, 3, 2, 1]$:
          $$\\text{Sequence from } P_2: [1, \\, 8, \\, 7, \\, 6, \\, 5, \\, 4, \\, 3, \\, 2]$$
        </li>
        <li><strong>Step 3: Remove Cities Already Present in $O_1$'s Slice ($\\{4, 5, 6, 7\\}$):</strong>
          $$\\text{Filtered sequence: } [\\mathbf{1}, \\, \\mathbf{8}, \\, \\cancel{7}, \\, \\cancel{6}, \\, \\cancel{5}, \\, \\cancel{4}, \\, \\mathbf{3}, \\, \\mathbf{2}] \\implies [1, \\, 8, \\, 3, \\, 2]$$
        </li>
        <li><strong>Step 4: Fill Vacant Slots in $O_1$ Cyclically starting from Second Cut Point:</strong>
          <ul>
            <li>Position 8 (after second cut): receives <strong>1</strong>.</li>
            <li>Wrap around to Position 1: receives <strong>8</strong>.</li>
            <li>Position 2: receives <strong>3</strong>.</li>
            <li>Position 3: receives <strong>2</strong>.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Final Valid Offspring $O_1$:</strong></p>
      $$\\mathbf{O_1 = [8, \\, 3, \\, 2, \\; | \\; 4, \\, 5, \\, 6, \\, 7, \\; | \\; 1]}$$

      <p><strong>Part (b) Why Standard Crossover Fails & How OX Guarantees Validity [4 Marks]:</strong></p>
      <ul>
        <li><strong>Failure of 1-Point Crossover:</strong> Standard crossover swaps heads and tails directly. For example, cutting after position 4 gives $O = [1, 2, 3, 4, \\; | \\; 4, 3, 2, 1]$. This contains duplicate visits to cities $\\{1, 2, 3, 4\\}$ and completely omits cities $\\{5, 6, 7, 8\\}$, violating the TSP constraint that each city must be visited exactly once.</li>
        <li><strong>OX Guarantee:</strong> OX preserves a contiguous sub-path of relative positions from $P_1$, and fills all missing distinct cities from $P_2$ in their exact relative order without duplicates, mathematically guaranteeing that $O_1$ is a <strong>complete, valid permutation</strong>.</li>
      </ul>
    `,
    rubric: [
      "[+2 Marks] Copying middle slice $[4, 5, 6, 7]$.",
      "[+2 Marks] Listing cyclic sequence from $P_2$ starting after cut point and filtering duplicates.",
      "[+2 Marks] Correctly filling positions: $O_1 = [8, 3, 2, 4, 5, 6, 7, 1]$.",
      "[+4 Marks] Rigorous explanation of duplicate allele violation in 1-point crossover vs permutation preservation in OX."
    ],
    examinerTrap: "Filling from position 1 instead of starting cyclically after the second cut point. OX must fill starting from the position right after the preserved slice."
  },
  {
    id: "d3-exam-q5",
    title: "Question 5: AdaBoost Weak Learner Weight Calculus & Sample Reweighting",
    topic: "Ensemble Methods / PSUPR Day 5 (Official Nov 2026 PRS Q1c)",
    totalMarks: 10,
    scenario: `
      An AdaBoost binary classifier ($y_i \\in \\{-1, +1\\}$) trains on an e-commerce customer transaction dataset.
      At iteration $t$, weak learner $h_t$ is trained.
      The weighted training error rate of $h_t$ is evaluated as:
      $$\\epsilon_t = \\sum_{i: y_i \\ne h_t(\\mathbf{x}_i)} w_i^{(t)} = 0.20 \\quad (20.0\\%)$$
      The weak learner voting weight is computed as:
      $$\\alpha_t = \\frac{1}{2} \\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right)$$
      Sample weights are updated according to:
      $$w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-\\alpha_t y_i h_t(\\mathbf{x}_i))}{Z_t}$$
      Where $Z_t$ is the normalization factor ensuring $\\sum_i w_i^{(t+1)} = 1$.
    `,
    subparts: [
      { prompt: "Calculate the exact voting weight $\\alpha_t$ for weak learner $h_t$.", marks: 3 },
      { prompt: "Show mathematically the exact ratio by which the weight of a misclassified sample is multiplied compared to a correctly classified sample.", marks: 4 },
      { prompt: "Explain how AdaBoost solves the feature importance shift observed in PRS Q1c (where a single tree relied on <code>PageValues</code>, but AdaBoost elevated <code>ProductRelated</code> to #1).", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Voting Weight $\\alpha_t$ [3 Marks]:</strong></p>
      $$\\begin{aligned}
      \\alpha_t &= \\frac{1}{2} \\ln\\left( \\frac{1 - 0.20}{0.20} \\right) \\\\
      &= \\frac{1}{2} \\ln\\left( \\frac{0.80}{0.20} \\right) \\\\
      &= \\frac{1}{2} \\ln(4.0) = \\frac{1}{2} (1.3863) = \\mathbf{0.6931}
      \\end{aligned}$$
      <p>Note that $\\alpha_t = \\ln(\\sqrt{4}) = \\ln(2) \\approx \\mathbf{0.6931}$.</p>

      <p><strong>Part (b) Sample Weight Multiplier Ratio [4 Marks]:</strong></p>
      <ul>
        <li>For a <strong>correctly classified</strong> instance ($y_i h_t = +1$):
          $$w_{\\text{correct}}^{(t+1)} \\propto w_i^{(t)} \\exp(-\\alpha_t) = w_i^{(t)} \\exp(-0.6931) = w_i^{(t)} \\times \\frac{1}{2} = 0.50 \\, w_i^{(t)}$$
        </li>
        <li>For a <strong>misclassified</strong> instance ($y_i h_t = -1$):
          $$w_{\\text{wrong}}^{(t+1)} \\propto w_i^{(t)} \\exp(+\\alpha_t) = w_i^{(t)} \\exp(+0.6931) = w_i^{(t)} \\times 2 = 2.00 \\, w_i^{(t)}$$
        </li>
      </ul>
      <p><strong>Relative Ratio:</strong></p>
      $$\\frac{w_{\\text{wrong}}^{(t+1)}}{w_{\\text{correct}}^{(t+1)}} = \\frac{\\exp(+\\alpha_t)}{\\exp(-\\alpha_t)} = \\exp(2\\alpha_t) = \\exp(2 \\times 0.6931) = e^{\\ln 4} = \\mathbf{4.00}$$
      <p>A misclassified sample receives a relative weight update that is <strong>4 times larger</strong> than a correctly classified sample!</p>

      <p><strong>Part (c) Feature Importance Shift (PRS Q1c Analysis) [3 Marks]:</strong></p>
      <ul>
        <li>A single greedy decision tree splits on <code>PageValues</code> at the root because it provides the highest single-feature Information Gain. Once easy buyers are isolated, the tree stops or prunes.</li>
        <li>In AdaBoost, weak learner 1 classifies the obvious <code>PageValues</code> sessions. The weights of the easy sessions are halved ($\times 0.5$), while the weights of hard, ambiguous borderline sessions (where <code>PageValues = 0</code> but customers still purchased) are quadrupled ($\times 2.0$).</li>
        <li>Weak learners $2, 3, \\dots, T$ are forced to focus exclusively on these hard sessions, discovering that deep behavioral variables (<code>ProductRelated</code>, <code>ProductRelated_Duration</code>, <code>SpecialDay</code>) discriminate these borderline buyers, elevating <code>ProductRelated</code> to the <strong>#1 overall most important feature</strong> across the ensemble.</li>
      </ul>
    `,
    rubric: [
      "[+3 Marks] Correct formula and calculation: $\\alpha_t = \\frac{1}{2}\\ln(4) = \\ln(2) \\approx 0.6931$.",
      "[+2 Marks] Multipliers: $\\exp(-\\alpha) = 0.5$ for correct, $\\exp(+\\alpha) = 2.0$ for wrong.",
      "[+2 Marks] Relative ratio: $\\exp(2\\alpha) = 4.0$.",
      "[+3 Marks] Clear explanation of sample reweighting forcing subsequent weak learners to exploit non-PageValues behavioral signals."
    ],
    examinerTrap: "Calculating natural log of 0.8/0.2 as 0.4. ln(4) = 1.3863. Forgetting the 1/2 factor in front of the logarithm."
  }
];
