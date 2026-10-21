// Day 10 Reference Data: Ensembles, RS Escape Room Puzzles & Master Architecture Blueprints

window.DAY10_ENSEMBLES_CRUCIBLE_DATA = {
  // 1. AdaBoost Benchmark Data (PRMLS Day 5 Slide 16-24)
  adaboostDemo: {
    samples: [
      { id: 1, x: 1.0, y: 2.1, trueLabel: 1,  pred1: 1,  pred2: 1 },
      { id: 2, x: 2.0, y: 1.1, trueLabel: 1,  pred1: 1,  pred2: 1 },
      { id: 3, x: 1.5, y: 1.5, trueLabel: 1,  pred1: -1, pred2: 1 }, // Misclassified by stump 1!
      { id: 4, x: 3.0, y: 3.2, trueLabel: -1, pred1: -1, pred2: -1 },
      { id: 5, x: 2.5, y: 2.8, trueLabel: -1, pred1: 1,  pred2: -1 }  // Misclassified by stump 1!
    ],
    initialWeights: [0.20, 0.20, 0.20, 0.20, 0.20],
    stump1: {
      rule: "Threshold on x <= 2.2 -> Class +1, else Class -1",
      misclassifiedIds: [3, 5],
      epsilon: 0.40, // 0.20 + 0.20
      alpha: 0.2027  // 0.5 * ln((1 - 0.4)/0.4) = 0.5 * ln(1.5) = 0.2027
    }
  },

  // 2. RS Day 5 Escape Room 5 Grand Puzzles
  escapeRoomPuzzles: [
    {
      id: 1,
      title: "Chamber 1: The Expert Rule Engine Lock",
      module: "Reasoning Systems — Forward Chaining",
      scenario: "A secure medical ICU alert vault requires the final firing rule conclusion. Working Memory initially contains: { Fever=True, Cough=True, HeartRate=110 }. Rules in Knowledge Base: R1: IF Fever AND Cough THEN Upper_Respiratory_Infection. R2: IF Upper_Respiratory_Infection AND HeartRate > 100 THEN Systemic_Inflammation. R3: IF Systemic_Inflammation THEN Trigger_Sepsis_Protocol_Code_702.",
      question: "Which emergency protocol code is unlocked after forward chaining completes?",
      answer: "702",
      options: ["Code 104", "Code 501", "Code 702", "Code 999"],
      correctOptionIndex: 2,
      explanation: "Cycle 1 matches R1 (Fever+Cough) -> asserts Upper_Respiratory_Infection. Cycle 2 matches R2 (Upper_Resp + HR>100) -> asserts Systemic_Inflammation. Cycle 3 matches R3 -> asserts Code 702."
    },
    {
      id: 2,
      title: "Chamber 2: The Bayesian Cryptographic Vault",
      module: "Machine Reasoning — Bayesian Belief Networks",
      scenario: "A security alarm network has Prior P(Intrusion)=0.01. Sensor Reliability: P(Alarm | Intrusion)=0.95, and False Positive Rate P(Alarm | ¬Intrusion)=0.05. The alarm has sounded! What is the exact posterior probability P(Intrusion | Alarm)?",
      question: "Compute P(Intrusion | Alarm) using Bayes' Theorem:",
      answer: "0.161",
      options: ["0.950 (95.0%)", "0.500 (50.0%)", "0.161 (16.1%)", "0.010 (1.0%)"],
      correctOptionIndex: 2,
      explanation: "Numerator: 0.01 * 0.95 = 0.0095. Denominator: 0.0095 + (0.99 * 0.05) = 0.0095 + 0.0495 = 0.0590. P(I|A) = 0.0095 / 0.0590 = 0.1610 (16.1%)."
    },
    {
      id: 3,
      title: "Chamber 3: The Collaborative Recommender Passcode",
      module: "Reasoning Systems — Recommender Systems",
      scenario: "Predict User A's rating for Movie 3 using User-User Mean-Centered Pearson Collaborative Filtering. User A has mean rating 3.0. Neighbor B has Pearson similarity sim(A, B) = 0.8, mean rating 4.0, and rated Movie 3 as 5.0 (deviation +1.0). Neighbor C has sim(A, C) = 0.2, mean rating 3.0, and rated Movie 3 as 2.0 (deviation -1.0).",
      question: "What is User A's predicted rating for Movie 3?",
      answer: "3.6",
      options: ["3.0", "3.6", "4.2", "5.0"],
      correctOptionIndex: 1,
      explanation: "Weighted deviation: (0.8 * (+1.0) + 0.2 * (-1.0)) / (0.8 + 0.2) = (0.8 - 0.2) / 1.0 = +0.6. Predicted rating = Mean(A) + 0.6 = 3.0 + 0.6 = 3.6."
    },
    {
      id: 4,
      title: "Chamber 4: The Genetic Optimization Safe",
      module: "Reasoning Systems — Genetic Algorithms (WS1GA.xlsx)",
      scenario: "Four candidate keys in binary representation: #1: 01101 (fitness 169), #2: 11000 (fitness 576), #3: 01000 (fitness 64), #4: 10011 (fitness 361). Total population fitness = 1170. A random selection pointer lands on r = 0.500.",
      question: "Under cumulative Roulette-Wheel selection, which chromosome key is selected to open the safe?",
      answer: "Chromosome #2",
      options: ["Chromosome #1 (C1=0.144)", "Chromosome #2 (C2=0.637)", "Chromosome #3 (C3=0.692)", "Chromosome #4 (C4=1.000)"],
      correctOptionIndex: 1,
      explanation: "Cumulative thresholds: C0=0, C1=0.1444, C2=0.6368. Since 0.1444 < 0.500 <= 0.6368, Chromosome #2 is chosen."
    },
    {
      id: 5,
      title: "Chamber 5: The Neo4j Cypher Graph Portal",
      module: "Reasoning Systems & Machine Reasoning — Cypher Traversal",
      scenario: "Cypher Query: MATCH (p:Patient {id: 'P902'})-[:SHOWS]->(s:Symptom)<-[:INDICATES]-(d:Disease) WHERE NOT (p)-[:DIAGNOSED_WITH]->(d) RETURN d.name, count(s) AS matched_symptoms ORDER BY matched_symptoms DESC LIMIT 1.",
      question: "What reasoning paradigm does this query execute to unlock the final exit portal?",
      answer: "Multi-hop Graph-Enabled Differential Diagnosis",
      options: [
        "Unsupervised K-Means clustering",
        "Multi-hop Graph-Enabled Differential Diagnosis via bipartite projection",
        "Linear Regression extrapolation",
        "Single-layer Perceptron backpropagation"
      ],
      correctOptionIndex: 1,
      explanation: "The query traverses from Patient to Symptoms and hops through INDICATES relationships to candidate Diseases, ranking diseases by the count of shared symptoms — a multi-hop graph reasoning traversal."
    }
  ],

  // 3. 6 Master Architecture Blueprints (PRS + IRS Cross-Course Synthesis)
  masterArchitectures: [
    {
      id: "arch-1",
      name: "Hospital ICU Early Sepsis Warning Engine",
      domains: ["ISSM (Sensing)", "PRMLS (Deep Learning)", "RS (Rule Systems)"],
      description: "Real-time multimodal monitoring of vitals (ECG, SpO2, blood pressure) with immediate clinical rule overrides.",
      pipeline: [
        { stage: "Sensing & Denoising", tech: "ISSM: Nyquist 250Hz sampling + arPLS baseline drift correction + 50Hz notch filter" },
        { stage: "Temporal Feature Extraction", tech: "PRMLS: 2-layer LSTM with Forget Gate recurrence to detect deteriorating trajectory" },
        { stage: "Classification Ensemble", tech: "PRMLS: Random Forest + Logistic Regression Stacking meta-learner for risk probability" },
        { stage: "Deterministic Clinical Guardrail", tech: "RS: Forward-chaining expert rules (e.g. SIRS criteria: temp>38C + HR>90 -> immediate bedside pager alert)" },
        { stage: "Explainability", tech: "PRMLS: TreeSHAP waterfall to display top contributing biomarkers to attending doctors" }
      ],
      justification: "Pure deep learning is unacceptable in ICU triage because black-box errors kill patients. Combining LSTM temporal feature extraction with a deterministic expert rule guardrail provides both high predictive sensitivity and 100% auditable clinical compliance."
    },
    {
      id: "arch-2",
      name: "High-Speed Train Bearing Fault Diagnostics",
      domains: ["ISSM (Acoustic/Vibration)", "PSUPR (Transforms)", "PRMLS (SVM & Ensembles)"],
      description: "Continuous vibration monitoring on train wheel axles to detect microscopic outer-race spalls before catastrophic failure.",
      pipeline: [
        { stage: "Sensory Transducers", tech: "ISSM: Piezoelectric tri-axial accelerometers mounted on axle box (10 kHz sampling)" },
        { stage: "Multi-Resolution Transforms", tech: "PSUPR: Short-Time Fourier Transform (STFT) spectrogram + 4-level 1D Haar/Daubechies Wavelet MRA" },
        { stage: "Dimensionality Reduction", tech: "PRMLS: Principal Component Analysis (PCA) retaining 95% variance to compress 1024 spectral bins to 20" },
        { stage: "Classifier & Anomaly Detection", tech: "PRMLS: Support Vector Machine (SVM) with RBF kernel + Autoencoder reconstruction threshold tau" },
        { stage: "Ensemble Aggregation", tech: "PRMLS: AdaBoost with decision stumps to handle extreme class imbalance (99.9% normal, 0.1% fault)" }
      ],
      justification: "Vibration signals are non-stationary and packed with mechanical noise. Fourier alone smears transient impact frequencies; Wavelet Multi-Resolution Analysis isolates high-frequency micro-cracks in localized time windows."
    },
    {
      id: "arch-3",
      name: "E-Commerce Real-Time Personalized Recommender",
      domains: ["RS (Recommenders & Association)", "CS (NLP Embeddings)", "PRMLS (Neural CF)"],
      description: "Hybrid recommendation platform handling cold-start users, session-based affinity, and multi-million catalog scale.",
      pipeline: [
        { stage: "Cold-Start Anonymous Users", tech: "RS: Apriori association rules (Support >= 0.01, Confidence >= 0.6, Lift > 2.0) based on cart contents" },
        { stage: "Semantic Text Search", tech: "CS: Word2Vec Skip-gram item embeddings + FAISS cosine similarity indexing" },
        { stage: "Collaborative Filtering", tech: "RS: User-User Mean-Centered Pearson CF for dense active user neighborhoods" },
        { stage: "Deep Ranking Model", tech: "PRMLS: Neural Collaborative Filtering (NCF) with dual embedding towers and dot-product interaction" },
        { stage: "Diversity Re-ranking", tech: "RS: Intra-list diversity penalty to prevent echo-chamber recommendation fatigue" }
      ],
      justification: "No single recommendation paradigm works for all users. Association rules catch cold users; Matrix Factorization / Neural CF discovers latent affinities for warm users; Word2Vec enables cross-category semantic analogies."
    },
    {
      id: "arch-4",
      name: "Autonomous Reverse Vending Machine (RVM) Recycler",
      domains: ["ISSM (Multi-Sensor)", "PSUPR (Vision & Geometry)", "RS (Rule Verification)"],
      description: "Multi-sensor kiosk for container deposit return schemes that intercepts fraudulent insertions and sorts materials in real time.",
      pipeline: [
        { stage: "Optical Acquisition", tech: "PSUPR: 2D Barcode scanner (EAN-13 lookup) + 3D vision contour diameter & height measurement" },
        { stage: "Physical Sensing Suite", tech: "ISSM: Strain-gauge load cell (weight +/- 1g) + Inductive metal coil + Piezo acoustic impact ping" },
        { stage: "Acoustic Resonance Analysis", tech: "ISSM: FFT peak frequency detection (Plastic ~800Hz, Aluminum ~1.5kHz, Glass ~2.8kHz)" },
        { stage: "Late Fusion Veto Engine", tech: "ISSM & RS: Rule-based cross-modal verification matrix (e.g. valid barcode + metallic inductive signal = REJECT FRAUD)" },
        { stage: "Actuator Dispense", tech: "RS: Pneumatic flipper sorting to PET bin, Aluminum bin, or Eject chute with refund token credit" }
      ],
      justification: "Single-sensor setups are easily defeated by photocopied barcodes or lead weights. Late Fusion preserves modularity, allowing independent sensor thresholding and immediate fraud vetoes."
    },
    {
      id: "arch-5",
      name: "Pharmaceutical Drug-Target Interaction Discovery",
      domains: ["MR (Knowledge Graphs & TransE)", "RS (GraphRAG)", "PRMLS (Graph Neural Networks)"],
      description: "Large-scale biomedical knowledge discovery to identify repurposed drugs for rare genetic disorders.",
      pipeline: [
        { stage: "Heterogeneous Graph Store", tech: "RS: Neo4j graph database storing (Gene)-[:ASSOCIATED_WITH]->(Disease) and (Drug)-[:BINDS_TO]->(Protein)" },
        { stage: "Relational Embedding", tech: "MR: TransE / ComplEx vector embedding mapping entities and relations to d=128 vector space" },
        { stage: "Link Prediction Scoring", tech: "MR: Energy scoring f(h, r, t) = -||h + r - t|| evaluated by Hits@10 and Mean Reciprocal Rank (MRR)" },
        { stage: "Graph-Enabled RAG", tech: "RS & CS: Cypher multi-hop traversal feeding retrieved clinical pathways into an LLM synthesizer" },
        { stage: "Validation Protocol", tech: "MR: Biological plausibility verification against PubMed biomedical ontology hierarchies (OLS)" }
      ],
      justification: "Biomedical relationships are multi-hop ('Drug A inhibits Target B, which downregulates Pathway C, curing Disease D'). Vector similarity alone cannot trace directional biochemical causation; Knowledge Graphs make the pathway explicit."
    },
    {
      id: "arch-6",
      name: "Smart City Autonomous Delivery Fleet Router",
      domains: ["MR (A* Search)", "RS (Genetic Algorithms)", "CS (ReAct Agents)"],
      description: "Dynamic routing and schedule dispatching for 50 autonomous last-mile delivery robots across Singapore urban hubs.",
      pipeline: [
        { stage: "Topological Map Graph", tech: "MR: Singapore road network representation with nodes (intersections) and directed weighted edges (travel time)" },
        { stage: "Point-to-Point Pathfinding", tech: "MR: A* Search with consistent Euclidean/Manhattan distance heuristic h(n) <= h*(n)" },
        { stage: "Multi-Drop Tour Optimization", tech: "RS: Genetic Algorithm with Order Crossover (OX) and Inversion Mutation to solve NP-hard TSP tours" },
        { stage: "Dynamic Replanning Agent", tech: "CS: Autonomous ReAct loop (Thought -> Action -> Observation) querying live LTA traffic API" },
        { stage: "Constraint Satisfaction", tech: "MR: CSP with Forward Checking and MRV to schedule delivery time windows and battery recharging intervals" }
      ],
      justification: "A* provides optimal 1-to-1 shortest paths, but cannot solve multi-stop combinatorial TSP. The Genetic Algorithm solves the global combinatorial route, while the ReAct agent handles real-world dynamic disruptions (rain, roadblocks)."
    }
  ]
};
