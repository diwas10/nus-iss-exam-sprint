// 3-Day Fast-Track Synergistic Curriculum (Dependency Grouped)
// Designed for NUS ISS Pattern Recognition Systems (PRS) & Intelligent Reasoning Systems (IRS)

window.THREE_DAY_CURRICULUM = {
  id: "three-day-sprint",
  title: "⚡ Intelligent Pattern Recognition & Reasoning Systems — 3-Day Mastery Sprint",
  description: "An integrated, visualization-first revision of classical machine learning, probabilistic reasoning, signal processing, deep learning, symbolic reasoning, cognitive architectures, and intelligent system design.",
  days: [
    {
      id: "day-1-classical-ml",
      day: 1,
      title: "Day 1: Classical Machine Learning, Probability & Search",
      shortTitle: "Day 1: Classical ML, Probability & Search",
      subtitle: "From Data to Decisions — Classification, Bayesian Inference, Geometric Learning, Dimensionality Reduction and Intelligent Search",
      duration: "5–6 Hours (7 Levels + 6 Interactive Studios + Quizzes + 6 Structured Exam Questions)",
      status: "live",
      badge: "PRS + IRS Foundation",
      summary: "Understand how classical algorithms classify data, model uncertainty, reduce complexity and solve constrained problems. Covers state-space search (A* optimality & consistency proofs), constraint satisfaction (CSP MRV/LCV), supervised learning (k-NN, Logistic Regression, Naive Bayes Laplace smoothing), decision trees & entropy, confusion matrix metrics (Precision, Recall, Specificity, F1, Lift), Bayesian Belief Networks (CPTs, d-separation, collider traps), maximal-margin SVM (primal/dual, KKT conditions, RBF kernels), unsupervised PCA vs supervised Fisher LDA (Rayleigh quotient, data leakage traps), clustering (K-Means WCSS, GMM Expectation-Maximization, DBSCAN, Ward linkage), and recommender foundations (Apriori, Collaborative Filtering, Matrix Factorization)."
    },
    {
      id: "day-2-signals-deeplearning",
      day: 2,
      title: "Day 2: Signal Processing, Deep Learning & Representation Learning",
      shortTitle: "Day 2: Signals & Deep Learning",
      subtitle: "From Raw Sensory Signals to Intelligent Neural Representations",
      duration: "5–6 Hours (7 Levels + 6 Interactive Studios + Quizzes + 6 Structured Exam Questions)",
      status: "live",
      badge: "Sensory to Deep Learning",
      summary: "Understand how signals are captured, transformed, represented and processed by neural networks. Covers analog-to-digital conversion, Nyquist–Shannon sampling theorem ($f_s > 2f_{\\max}$), spectral aliasing and folding frequency ($f_N = f_s/2$), analog anti-aliasing hardware filters, arPLS rubber-band baseline correction, Dynamic Time Warping (DTW) alignment, Fourier transforms, STFT time-frequency trade-offs (Heisenberg-Gabor uncertainty), 2D Haar wavelets (LL, LH, HL, HH subbands and Parseval energy conservation), neural network backpropagation calculus, 2D CNN architecture design (receptive fields, dilated & depthwise separable convolutions, ResNet skip connections, Global Average Pooling vs Flatten redesign in PRS Q2a), sequential modeling with RNNs & LSTMs (BPTT, spectral radius vanishing gradient proof, Constant Error Carousel), and autoencoders (reconstruction MSE anomaly detection with 3-sigma calibration in PRS Q2c, Generative VAE ELBO and reparameterization trick)."
    },
    {
      id: "day-3-reasoning-integration",
      day: 3,
      title: "Day 3: Reasoning Systems, Cognitive Architectures & Intelligent System Integration",
      shortTitle: "Day 3: Reasoning, Agents & Exams",
      subtitle: "From Symbolic Knowledge and Uncertainty to Explainable, Adaptive and Hybrid AI Systems",
      duration: "5–6 Hours (7 Levels + 6 Interactive Studios + 20 Grand Quizzes + 6 Structured Exam Questions)",
      status: "live",
      badge: "Reasoning & Exam Crucible",
      summary: "Understand how intelligent systems represent knowledge, reason under uncertainty, optimize decisions, integrate multiple AI approaches and explain conclusions. Covers production rules (Forward/Backward chaining, conflict resolution), frame daemons (if-needed / if-added, camera distance calculation), Case-Based Reasoning (CBR 4R cycle), uncertainty models (MYCIN Certainty Factors, Fuzzy Sets & Mamdani inference with Centroid defuzzification), cognitive architectures (the 11-entity cognitive model in IRS Q2h, ACT-R, SOAR, Marr's 3 levels of vision), Transformer Scaled Dot-Product Attention, Knowledge Graphs (TransE embeddings, GraphRAG), Genetic Algorithms (Order Crossover OX for TSP permutations), multimodal sensor fusion (RVM digital twin: early vs late vs hybrid), rigorous ensemble theory (Condorcet's theorem, Bagging vs Random Forest variance reduction $\\rho \\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2$, AdaBoost exponential loss & sample reweighting ratio, Stacking OOF cross-validation), and full deconstruction of the official Nov 2026 Sample Papers (IRS 50m + PRS 40m)."
    }
  ]
};
