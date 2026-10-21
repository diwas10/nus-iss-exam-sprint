// Day 7 Reference Data: RNNs, LSTM Gating, Autoencoder Anomaly & Word2Vec Vector Space

window.DAY7_SEQUENCES_TIME_DATA = {
  // 1. Sequence Data for LSTM Gating Simulation
  lstmSequence: [
    { step: 0, token: "The", value: 0.20, desc: "Article / Intro" },
    { step: 1, token: "engine", value: 0.85, desc: "Subject (Singular Noun)" },
    { step: 2, token: "with", value: 0.15, desc: "Prepositional phrase start" },
    { step: 3, token: "many", value: 0.40, desc: "Distractor modifier" },
    { step: 4, token: "loose", value: 0.35, desc: "Distractor modifier" },
    { step: 5, token: "bolts", value: 0.70, desc: "Plural distractor" },
    { step: 6, token: "WAS", value: 0.90, desc: "Verb: Must remember singular 'engine'!" }
  ],

  // 2. Smart Fish Tank Sensor Benchmark Data (ISSM Day 3 Slide 25-35)
  // 60-step temporal readings with normal operation, Event A (glitch), and Event B (hypoxia)
  fishTankData: {
    timeSteps: Array.from({ length: 60 }, (_, i) => i),
    // Dissolved Oxygen (mg/L): Normal ~ 7.0 mg/L.
    // Steps 0-25: Normal fluctuations (6.8 to 7.2)
    // Step 26: Event A - Sudden sensor spike to 13.5 mg/L (Hardware glitch)
    // Steps 27-40: Return to normal
    // Steps 41-59: Event B - Biological Hypoxia (steady decay from 7.0 down to 2.4 mg/L)
    dissolvedOxygen: [
      6.9, 7.1, 7.0, 6.8, 7.2, 7.0, 6.9, 7.1, 7.0, 6.8,
      7.1, 7.2, 7.0, 6.9, 7.0, 7.1, 6.8, 7.0, 7.2, 6.9,
      7.0, 7.1, 6.9, 7.0, 7.2, 7.0, 13.5, 7.1, 6.9, 7.0,
      7.2, 7.0, 6.9, 7.1, 7.0, 6.8, 7.1, 7.0, 6.9, 7.2,
      7.0, 6.7, 6.3, 5.9, 5.5, 5.0, 4.6, 4.1, 3.8, 3.4,
      3.1, 2.8, 2.6, 2.5, 2.4, 2.4, 2.3, 2.3, 2.2, 2.1
    ],
    // Baseline Autoencoder Reconstruction Error (MSE)
    reconstructionErrors: [
      0.02, 0.03, 0.01, 0.02, 0.04, 0.02, 0.01, 0.03, 0.02, 0.01,
      0.03, 0.04, 0.02, 0.01, 0.02, 0.03, 0.01, 0.02, 0.04, 0.01,
      0.02, 0.03, 0.01, 0.02, 0.04, 0.02, 0.95, 0.03, 0.01, 0.02,
      0.04, 0.02, 0.01, 0.03, 0.02, 0.01, 0.03, 0.02, 0.01, 0.04,
      0.02, 0.08, 0.14, 0.22, 0.31, 0.42, 0.53, 0.66, 0.78, 0.89,
      0.98, 1.05, 1.12, 1.18, 1.24, 1.25, 1.28, 1.29, 1.32, 1.35
    ]
  },

  // 3. Word2Vec 2D Semantic Embedding Coordinates (CS Day 1 AM & Workshop)
  wordEmbeddings: {
    "king": { x: 0.72, y: 0.65, category: "royalty" },
    "queen": { x: 0.68, y: 0.95, category: "royalty" },
    "man": { x: 0.45, y: 0.35, category: "gender" },
    "woman": { x: 0.41, y: 0.65, category: "gender" },
    "prince": { x: 0.78, y: 0.55, category: "royalty" },
    "princess": { x: 0.74, y: 0.85, category: "royalty" },
    "apple": { x: -0.75, y: -0.40, category: "fruit" },
    "orange": { x: -0.68, y: -0.45, category: "fruit" },
    "banana": { x: -0.72, y: -0.30, category: "fruit" },
    "paris": { x: 0.10, y: -0.75, category: "city" },
    "france": { x: 0.15, y: -0.90, category: "country" },
    "tokyo": { x: 0.85, y: -0.70, category: "city" },
    "japan": { x: 0.90, y: -0.85, category: "country" }
  }
};
