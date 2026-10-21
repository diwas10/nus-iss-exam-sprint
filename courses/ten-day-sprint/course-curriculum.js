// 10-Day Synergistic Curriculum Master Data for NUS ISS Modules (PRS + IRS)

window.SPRINT_CURRICULUM = {
  id: "ten-day-sprint",
  title: "🏆 10-Day A+ Exam Sprint (PRS + IRS)",
  description: "The complete, interactive path to an A+ in Pattern Recognition Systems & Intelligent Reasoning Systems. 4 hours each day combining intuitive mental models, interactive visualizers, code labs, and exam rubrics.",
  days: [
    {
      id: "day-1-foundations",
      day: 1,
      title: "Day 1: Foundations of Perception, Search & Classifiers",
      shortTitle: "Day 1: Perception & Search",
      subtitle: "LLMs vs Reasoning, A* Search & CSP Heuristics, k-NN, Logistic Regression, Naive Bayes Laplace & Confusion Matrix/Lift",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Explore the fundamental split between System 1 (LLMs) and System 2 (Reasoning). Master state space search, A*, and Constraint Satisfaction Problems (N-Queens & Singapore Map Coloring with MRV, LCV, and Forward Checking). Build intuitive understanding of k-NN, Logistic Regression, and Naive Bayes Laplace smoothing, ending with Confusion Matrix, ROC-AUC, and Cumulative Lift charts."
    },
    {
      id: "day-2-signals-rules",
      day: 2,
      title: "Day 2: Signals, Sampling & Rule-Based Reasoning",
      shortTitle: "Day 2: Signals & Rule Engines",
      subtitle: "Nyquist Sampling & Aliasing, arPLS Baseline Drift, Dynamic Time Warping (DTW) & Hospital Emergency Triage Rule Engine",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Bridge physical sensor reality to digital intelligence and deductive logic. Master the 4 Pillars of Reasoning (Deductive, Inductive, Abductive, Analogical). Experience Nyquist-Shannon sampling limits, wave symmetry, and aliasing live. De-noise ECG signals with arPLS rubber-band math. Align non-linear time series (ECG offset 15 and Singapore GDP) with DTW, and execute an explainable Hospital Emergency Triage Rule Engine with safety guardrails."
    },
    {
      id: "day-3-transforms-bayes",
      day: 3,
      title: "Day 3: Frequency Transforms, STFT & Bayesian Reasoning",
      shortTitle: "Day 3: Transforms & Bayes",
      subtitle: "Fourier Paradox, STFT Spectrograms, Wavelets MRA, Bayesian Belief Networks & Cognitive Architectures (ACT-R / SOAR)",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Understand why standard Fourier transform is time-blind. Master STFT windowing tradeoffs and Wavelet multiresolution analysis. Dive into Bayesian reasoning and cognitive architectures modeling perception, working memory, and procedural production rules."
    },
    {
      id: "day-4-geometry-dim",
      day: 4,
      title: "Day 4: Geometric Boundaries, Dimensionality & CBR",
      shortTitle: "Day 4: SVM & Dimensionality",
      subtitle: "Support Vector Machines (Kernels & Margins), PCA vs LDA, Sensor Energy Compaction & Case-Based Reasoning (CBR)",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Master maximum-margin hyperplanes and kernel tricks in SVM. Contrast unsupervised PCA with class-separating LDA. Understand sensory energy compaction and connect similarity metrics to Case-Based Reasoning retrieval and reuse cycles."
    },
    {
      id: "day-5-clusters-recommenders",
      day: 5,
      title: "Day 5: Clustering, Latent Factors & Recommenders",
      shortTitle: "Day 5: Clusters & Recommenders",
      subtitle: "K-Means, Hierarchical Linkage, DBSCAN, Market Basket Analysis (Apriori), Collaborative Filtering & Matrix Factorization",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Unsupervised discovery: K-Means centroids, Hierarchical dendrograms, and density-based DBSCAN. Pivot to recommender systems: Association rules (Support/Confidence/Lift), User/Item collaborative filtering, and SVD matrix factorization."
    },
    {
      id: "day-6-neural-foundations",
      day: 6,
      title: "Day 6: Deep Learning: Perceptrons, MLPs & Convolutions",
      shortTitle: "Day 6: MLPs & Convolutions",
      subtitle: "Perceptrons, Backpropagation, Gradient Descent, Activations (ReLU/Softmax), CNN Filters, Pooling & CIFAR-10",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Deconstruct artificial neurons, multi-layer perceptrons, forward propagation, and gradient descent backprop. Visualize 2D image convolutions, kernels, padding, stride, and pooling on CIFAR-10 computer vision tasks."
    },
    {
      id: "day-7-sequences-time",
      day: 7,
      title: "Day 7: Sequences, Time Series & Language Models",
      shortTitle: "Day 7: RNNs, LSTMs & Word Embeddings",
      subtitle: "Vanishing Gradients, LSTM Gating (Forget/Input/Output), 1D-CNNs, Word2Vec, GloVe & Semantic Embedding Spaces",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Tackle sequential memory in Recurrent Neural Networks, diagnose vanishing gradients, and examine LSTM forget/input/output gates. Bridge time-series to NLP with Word2Vec skip-grams, GloVe co-occurrence, and high-dimensional semantic vectors."
    },
    {
      id: "day-8-transformers-graphs",
      day: 8,
      title: "Day 8: Transformers, Knowledge Graphs & GraphRAG",
      shortTitle: "Day 8: Transformers & Graphs",
      subtitle: "Self-Attention, Multi-Head Transformers, Knowledge Graph Embeddings (TransE / PyKEEN), Neo4j Cypher & Graph-RAG",
      duration: "4 Hours (6 Levels + 4 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Decode the Transformer Attention mechanism: Queries, Keys, and Values. Move from unstructured vectors to structured Knowledge Graphs: TransE link prediction, Neo4j graph databases, and Graph-augmented RAG."
    },
    {
      id: "day-9-optimization-agents",
      day: 9,
      title: "Day 9: Evolutionary Optimization, Multimodal Fusion & Cognitive Agents",
      shortTitle: "Day 9: GA & Multimodal Agents",
      subtitle: "Genetic Algorithms (WS1GA.xlsx), Multimodal RVM Sensor Fusion, Cognitive Memory Maps (ACT-R / SOAR) & ReAct Agents",
      duration: "4 Hours (6 Levels + 3 Interactive Studios + 10 Slide Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Global heuristic search via Genetic Algorithms replicating Dr. Zhu Fangming's WS1GA.xlsx and solving TSP. Multi-sensor fusion strategies (early vs late vs hybrid) applied to reverse-engineer an RVM digital twin. Cognitive architectures (ACT-R/SOAR) and agentic ReAct loops."
    },
    {
      id: "day-10-ensembles-crucible",
      day: 10,
      title: "Day 10: Ensembles, Grand Synthesis & Full A+ Mock Exam",
      shortTitle: "Day 10: Ensembles & Crucible",
      subtitle: "Bagging, Boosting (AdaBoost), Stacking Meta-Learners, RS Escape Room & 20-Question Comprehensive Grand Mock Exam",
      duration: "4 Hours (6 Levels + 3 Interactive Studios + 20 Grand Exam Quizzes)",
      status: "live",
      badge: "Live Interactive",
      summary: "Ensemble intelligence: variance reduction via Bagging, bias correction via Boosting, and multi-model Stacking. Complete RS Escape Room simulator, 6 Master Architecture blueprints, and the Grand A+ Mock Exam Crucible (20 questions: 10 PRS + 10 IRS)."
    }
  ]
};
