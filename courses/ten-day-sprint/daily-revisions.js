// 10-Day A+ Daily Revision & Active Recall Flashcard System
// Formulated specifically for NUS ISS: Pattern Recognition Systems (PRS) & Intelligent Reasoning Systems (IRS)

window.DAILY_REVISIONS = {
  "day-1-foundations": {
    dayNum: 1,
    title: "Day 1 Active Recall & 15-Minute Exam Revision",
    subtitle: "Foundations of Perception, Search Heuristics, Supervised Classifiers & Evaluation",
    summary: "Day 1 builds your fundamental mental model: System 1 (associative pattern completion) vs System 2 (verifiable deliberative search), plus state-space search (A* optimality), constraint satisfaction (CSP), parametric/non-parametric classifiers (k-NN, Naive Bayes), and model evaluation (Confusion Matrix, ROC, Lift).",
    keyFormulas: [
      { name: "A* Evaluation Function", formula: "f(n) = g(n) + h(n)", note: "g(n) = exact path cost from start, h(n) = estimated cost to goal. Admissible: 0 \\le h(n) \\le h^*(n). Consistent: h(n) \\le c(n, a, n') + h(n')." },
      { name: "Naive Bayes Laplace Smoothing", formula: "P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}", note: "You MUST add |V_j| (the number of distinct attribute values) to the denominator to maintain total probability 1!" },
      { name: "Confusion Matrix Metrics", formula: "\\text{Recall} = \\frac{TP}{TP+FN}, \\quad \\text{Precision} = \\frac{TP}{TP+FP}, \\quad \\text{F1} = \\frac{2 P R}{P + R}", note: "In imbalanced domains, never use overall Accuracy. Use Recall for high-value targets (buyers/diseases)." },
      { name: "Cumulative Lift at Decile 1", formula: "\\text{Lift} = \\frac{\\text{Hit Rate in Top 10\\%}}{\\text{Overall Population Base Rate}}", note: "A lift of 3.5 means the top 10% scored records contain 3.5x more positive cases than random selection." }
    ],
    flashcards: [
      {
        q: "What is the fatal flaw of relying solely on an LLM for multi-step diagnostic reasoning?",
        a: "Autoregressive compounding error ($p^k$). If an LLM has a 95% accuracy per deduction step, across a 7-step clinical chain the probability of reaching the end without error drops to $0.95^7 \\approx 69.8\\%$. Machine Reasoning (System 2) searches explicitly and verifies constraints to guarantee sound proofs."
      },
      {
        q: "When must the Goal Test be performed in A* graph search to guarantee an optimal path?",
        a: "ONLY when the goal node is POAPPED from the Priority Queue (Open List). Testing when a goal node is generated/pushed can return a sub-optimal path because a lower-cost path to that goal may still exist in the queue."
      },
      {
        q: "What are the 3 core heuristics in CSP Backtracking and what does each do?",
        a: "(1) MRV (Minimum Remaining Values): picks variable with fewest legal values ('fail-first'). (2) Degree Heuristic: breaks MRV ties by picking variable with most constraints on unassigned variables. (3) LCV (Least Constraining Value): picks value that leaves the maximum flexibility for neighbors."
      },
      {
        q: "Why is feature standardization mandatory before running k-NN or PCA?",
        a: "Distance metrics compute Euclidean differences $\\sum (x_i - y_i)^2$. A feature with scale $10^5$ (e.g. Annual Income in dollars) completely swamps a feature with scale $10^0$ (e.g. Debt Ratio), rendering the second feature completely invisible unless normalized ($z = \\frac{x-\\mu}{\\sigma}$)."
      }
    ],
    examTraps: [
      "Laplace Smoothing: Forgetting to add |V| to the denominator when count=0 is the #1 point-loser in Naive Bayes exam calculations.",
      "A* Search Tree vs Graph: Admissibility guarantees optimality for Tree Search, but Graph Search requires Consistency (monotonicity) to avoid reopening closed nodes.",
      "Imbalanced Evaluation: An algorithm achieving 95% accuracy on a dataset with 5% positive cases is useless if it simply predicts 'Negative' 100% of the time."
    ]
  },

  "day-2-signals-rules": {
    dayNum: 2,
    title: "Day 2 Active Recall & 15-Minute Exam Revision",
    subtitle: "Sensory Signals, Nyquist Sampling, Peak Finding, Baseline Removal & Rule Engines",
    summary: "Day 2 bridges physical hardware sensing and high-level deductive logic: Nyquist-Shannon sampling, anti-aliasing filters, time-domain peak prominence, rubber-band baseline correction (arPLS), elastic alignment (DTW), and production rule engines (Forward/Backward Chaining, Conflict Resolution, Frame inheritance daemons).",
    keyFormulas: [
      { name: "Nyquist Sampling Criterion", formula: "f_s > 2 f_{\\max}", note: "If sampling frequency is \\le 2 f_{\\max}, frequencies fold back across the Nyquist folding frequency f_N = f_s / 2 as aliasing ghost signals." },
      { name: "Dynamic Time Warping (DTW) Cost", formula: "D(i, j) = d(i, j) + \\min\\left(D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1)\\right)", note: "Computes non-linear elastic alignment between two temporal sequences. Sakoe-Chiba band |i-j| \\le w constrains warping window." },
      { name: "Frame Pinhole Camera Distance Daemon", formula: "D = D_{\\text{cal}} \\times \\frac{d_{\\text{cal}}}{d_{\\text{obs}}}", note: "As seen in IRS Q1c: face distance D is inversely proportional to observed pixel diameter d. Flag warning if D \\notin [18, 24] inches." },
      { name: "Resolution Rule", formula: "\\frac{C_1 \\lor L, \\quad C_2 \\lor \\neg L'}{\\text{Subst}(\\theta, C_1 \\lor C_2)}", note: "Used in refutation proofs: negate the goal, convert to CNF, and resolve until the empty clause (\\square) is derived." }
    ],
    flashcards: [
      {
        q: "Where MUST the low-pass anti-aliasing filter be placed in a sensor data acquisition pipeline?",
        a: "BEFORE the Analog-to-Digital Converter (ADC). Once a continuous signal is digitized at rate $f_s$, any frequencies $> f_s/2$ are permanently folded into the baseband and cannot be removed digitally!"
      },
      {
        q: "Why is arPLS (asymmetric reweighted penalized least squares) superior to polynomial baseline fitting?",
        a: "Polynomial fitting is pulled upwards by prominent peaks, distorting both peak area and peak height. arPLS uses asymmetric weights: points on peaks get $w_i \\approx 0$ while valley baseline points get $w_i = 1$, acting like a rubber band pulled taut beneath the signal."
      },
      {
        q: "When should you choose Forward Chaining vs Backward Chaining in an expert system?",
        a: "Choose Forward Chaining for data-driven monitoring/triage where facts are continuously provided by sensors and many possible conclusions exist. Choose Backward Chaining for goal-driven targeted diagnosis where few hypotheses exist and the system queries the user for missing symptoms on-demand."
      },
      {
        q: "What is the difference between an if-needed and an if-added daemon in a Frame Knowledge Base?",
        a: "An `if-needed` daemon triggers lazily when a slot's value is requested but empty (procedural generation/calculation). An `if-added` daemon triggers immediately when a slot is populated with data (constraint checking/alert generation)."
      }
    ],
    examTraps: [
      "Aliasing: High frequencies don't just disappear; they fold back as false low-frequency ghost signals that fool subsequent ML models.",
      "Rule Cycles: Rule engines will loop infinitely unless Conflict Resolution implements Refractoriness (never fire the same rule on the same working memory facts twice).",
      "DTW vs Euclidean: Euclidean distance requires identical length and fails on phase shifts; DTW aligns signals with variable speeds but is sensitive to baseline shifts."
    ]
  },

  "day-3-transforms-bayes": {
    dayNum: 3,
    title: "Day 3 Active Recall & 15-Minute Exam Revision",
    subtitle: "STFT, Discrete Wavelet Transform, Marr's Vision, BBNs & Certainty Factors",
    summary: "Day 3 addresses time-frequency uncertainty and reasoning under uncertainty: the Fourier Paradox / Heisenberg-Gabor limit, Short-Time Fourier Transform (STFT), 1D & 2D Haar Wavelet Multi-Resolution Analysis (LL, LH, HL, HH subbands), Marr's 3 levels of vision, Bayesian Belief Networks (CPTs, d-separation), and Certainty Factors.",
    keyFormulas: [
      { name: "Heisenberg-Gabor Time-Frequency Uncertainty", formula: "\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}", note: "You cannot achieve arbitrarily high precision in both time and frequency simultaneously. Wide window = high freq resolution, low time resolution." },
      { name: "Haar 1D Wavelet Transform", formula: "A = \\frac{x_1 + x_2}{\\sqrt{2}} \\quad (\\text{Approximation}), \\quad D = \\frac{x_1 - x_2}{\\sqrt{2}} \\quad (\\text{Detail})", note: "The \\sqrt{2} factor preserves total energy (orthogonality: ||x||^2 = A^2 + D^2)." },
      { name: "Bayesian Network Chain Rule", formula: "P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))", note: "Factorizes a joint distribution using the DAG structure, reducing parameter count exponentially." },
      { name: "Certainty Factor Combination (Positive)", formula: "CF_{\\text{comb}} = CF_1 + CF_2(1 - CF_1)", note: "Shortliffe MYCIN rule for combining two independent rules supporting the same hypothesis H with positive certainty." },
      { name: "Corrected RAPD Eye Formula (IRS Q2g)", formula: "RAPD = \\frac{|\\bar{L} - \\bar{R}|}{0.30 \\times \\max(\\bar{L}, \\bar{R})} \\ge 1", note: "Must have absolute value |L - R| and divide by 0.30 of reference pupil size to check for a \\ge 30% difference." }
    ],
    flashcards: [
      {
        q: "Why does the standard Fourier Transform fail disastrously on transient anomalies (e.g. pipe choke or heartbeat arrhythmia)?",
        a: "The standard FFT integrates over all time ($-\\infty$ to $+\\infty$), computing global frequency content. It tells you WHAT frequencies exist, but has ZERO time localization (cannot tell WHEN the transient frequency burst occurred)."
      },
      {
        q: "In 2D Discrete Wavelet Decomposition, what information is contained in the HH subband?",
        a: "HH is High-pass filtered in both horizontal and vertical directions, capturing diagonal edges, corner textures, and high-frequency noise. LL contains the low-frequency smooth approximation."
      },
      {
        q: "What is d-separation in Bayesian Networks, and what happens at a V-structure (Collider: A -> B <- C)?",
        a: "In a V-structure, path A -> B <- C is BLOCKED when B is unobserved (A and C are marginally independent). However, conditioning on B or any of its descendants ACTIVATES the path (A and C become dependent via 'Explaining Away')."
      },
      {
        q: "Name the 11 entities of the Cognitive Model Framework (IRS Q2h) in sequence.",
        a: "1. Environmental stimuli -> 2. Perceive function -> 3. Raw data -> 4. Recognize function -> 5. Information -> 6. Learn function -> 7. Knowledge (new/known) -> 8. Reason function -> 9. Plan/Solution -> 10. Act function -> 11. Effects of action."
      }
    ],
    examTraps: [
      "BBN d-Separation Collider Trap: Unlike chains (A->B->C) and forks (A<-B->C) which are blocked when conditioned on, a collider is ACTIVATED when conditioned on!",
      "Wavelet Reconstruction: Discarding detail coefficients (D=0) acts as a low-pass denoising filter; discarding approximation (A=0) acts as edge detection.",
      "RAPD Formula Error: In IRS Q2.2, dividing relative pupil fractions in (0,1) by 30 produces numbers <0.033, which can never be >= 1."
    ]
  },

  "day-4-geometry-dim": {
    dayNum: 4,
    title: "Day 4 Active Recall & 15-Minute Exam Revision",
    subtitle: "Decision Trees, SVM Kernels, PCA vs LDA & Case-Based Reasoning",
    summary: "Day 4 focuses on geometric partitioning and precedent-based reasoning: Information Gain vs Gain Ratio, soft-margin SVM and RBF kernels, unsupervised PCA variance maximization vs supervised Fisher LDA separation, PCA target leakage traps, and the CBR 4R cycle.",
    keyFormulas: [
      { name: "Shannon Entropy & Information Gain", formula: "H(S) = -\\sum_{k=1}^K p_k \\log_2 p_k, \\quad IG(S, A) = H(S) - \\sum_v \\frac{|S_v|}{|S|} H(S_v)", note: "ID3 selects attribute maximizing IG. C4.5 divides IG by SplitInfo(A) to avoid high-cardinality bias." },
      { name: "Soft-Margin SVM Optimization", formula: "\\min_{\\mathbf{w}, b, \\xi} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i \\quad \\text{s.t.} \\quad y_i(\\mathbf{w}^T\\mathbf{x}_i + b) \\ge 1 - \\xi_i", note: "High C = strict margin (low bias, high variance, risk overfitting). Low C = wider margin (more margin violations allowed)." },
      { name: "RBF Gaussian Kernel", formula: "K(\\mathbf{x}, \\mathbf{x}') = \\exp(-\\gamma \\|\\mathbf{x} - \\mathbf{x}'\\|^2)", note: "High \\gamma = narrow spiky Gaussian bells around training points (overfitting). Low \\gamma = smooth decision boundaries." },
      { name: "Fisher Linear Discriminant (LDA)", formula: "J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}}", note: "Supervised: maximizes between-class scatter S_B while minimizing within-class scatter S_W." }
    ],
    flashcards: [
      {
        q: "Why does a single multi-class Decision Tree fail when predicting 100+ eye diagnoses (IRS Q3a)?",
        a: "With 100+ classes and only 5,000 cases, a single tree fragments the data across branches so leaves contain <5 samples. It prunes away rare blinding diseases, and a leaf cannot produce a well-calibrated Top-10 ranked probability list. Use One-vs-Rest binary trees or k-NN instead."
      },
      {
        q: "What was the fatal examiner trap in Table 3 of the Nov 2026 PRS PCA question (PRS Q1e)?",
        a: "The target class label 'Revenue' was leaked inside the PCA covariance matrix (0.221 in PC1, 0.534 in PC4)! Supervised target labels must NEVER enter unsupervised dimensionality reduction, because the target is unknown at test time. Also, nominal integer IDs (Browser, OS) were wrongly fed as continuous numbers."
      },
      {
        q: "Why is a Neural Network with 89.67% accuracy better for an online bookstore than an SVM with 89.62% accuracy (PRS Q1b)?",
        a: "Because the bookstore's goal is capturing buyers. NN achieved 52.46% Buyer Recall (288 buyers) vs SVM's 43.17% (237 buyers). Capturing 51 additional buyers generates thousands in profit, while the minor increase in false alarms (discount coupons to non-buyers) has negligible cost."
      },
      {
        q: "Name the 4 stages of the Case-Based Reasoning (CBR) cycle and explain the purpose of 'Retain'.",
        a: "1. Retrieve (find similar past cases), 2. Reuse (adapt past solution to new problem), 3. Revise (validate in simulation/clinical test), 4. Retain: Store the verified novel case in the Case Base so the system learns from experience without needing model retraining."
      }
    ],
    examTraps: [
      "PCA Data Leakage: Always check whether the target column Y was accidentally included in PCA loadings tables.",
      "SVM vs Logistic Regression: SVM only depends on Support Vectors (points on/inside margin); points far away have zero influence on boundary. Logistic Regression depends on all points.",
      "ID3 Bias: Standard Information Gain prefers attributes with many unique values (like CustomerID) because each partition has entropy 0, creating 100% training accuracy but 0% test generalization."
    ]
  },

  "day-5-clusters-recommenders": {
    dayNum: 5,
    title: "Day 5 Active Recall & 15-Minute Exam Revision",
    subtitle: "Clustering Algorithms, Association Rule Mining & Recommender Systems",
    summary: "Day 5 covers unsupervised discovery and preference modeling: K-Means (spherical WCSS) vs GMM (soft EM covariance) vs DBSCAN (density-based), Apriori Association Rules (Support, Confidence, Lift), User/Item Collaborative Filtering, Matrix Factorization (SVD), and medical recommender critiques.",
    keyFormulas: [
      { name: "Association Rule Metrics", formula: "\\text{Supp}(X \\to Y) = P(X \\cap Y), \\quad \\text{Conf}(X \\to Y) = \\frac{P(X \\cap Y)}{P(X)}, \\quad \\text{Lift}(X \\to Y) = \\frac{P(X \\cap Y)}{P(X)P(Y)}", note: "Lift > 1 indicates positive association (X increases likelihood of Y). Lift = 1 means independent. Lift < 1 means negative substitution." },
      { name: "Mean-Centered User-Based CF", formula: "\\hat{r}_{u, i} = \\bar{r}_u + \\frac{\\sum_{v \\in N} \\text{sim}(u, v)(r_{v, i} - \\bar{r}_v)}{\\sum_{v \\in N} |\\text{sim}(u, v)|}", note: "Mean-centering subtracts user's baseline rating bias (some users are harsh raters, others give 5 stars generously)." },
      { name: "Silhouette Coefficient", formula: "s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}", note: "a(i) = mean intra-cluster distance, b(i) = mean nearest-cluster distance. Range [-1, +1]. Values > 0.5 indicate strong clusters." },
      { name: "K-Means Inertia (WCSS)", formula: "\\text{WCSS} = \\sum_{k=1}^K \\sum_{i \\in C_k} \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_k\\|^2", note: "K-Means assumes spherical clusters of equal variance. Fails on non-convex moon shapes and varying density." }
    ],
    flashcards: [
      {
        q: "Why does User-Based Collaborative Filtering fail disastrously for medical eye disease treatments (IRS Q3c)?",
        a: "Two reasons: (1) Extreme Sparsity: 2,000 patients x 300 treatments = 600,000 cells with only 2,000 ratings (99.67% empty). (2) Pathology Mismatch (Fatal): Treatments must be chosen based on current biological diagnosis, not whether two patients gave similar satisfaction stars to past eye drops!"
      },
      {
        q: "How do you structure transactions to mine longitudinal disease-treatment progressions (IRS Q3b)?",
        a: "Group visits by Patient ID (2,000 patient baskets), sort chronologically by Diagnosis Date, prefix earlier visits as `Past_Diag:X` and `Past_Treat:Y`, and filter rules where LHS contains past conditions/treatments and RHS is strictly a current diagnosis `Curr_Diag:Z` with Lift > 1."
      },
      {
        q: "Why does K-Means fail on concentric circles or interleaving moons, and which algorithm solves it?",
        a: "K-Means uses Euclidean distance to spherical centroids, cutting space with linear Voronoi boundaries. DBSCAN (Density-Based Spatial Clustering of Applications with Noise) solves this by connecting dense neighborhoods of points via $\\epsilon$ and MinPts regardless of shape."
      },
      {
        q: "What is the Cold-Start problem in Collaborative Filtering, and how do Hybrid Recommenders solve it?",
        a: "New users or new items have zero rating history, so similarity cannot be computed. Hybrid recommenders fall back to Content-Based Filtering (using item metadata/tags and user demographics) until sufficient interaction data accumulates."
      }
    ],
    examTraps: [
      "Apriori Anti-Monotonicity: If an itemset is infrequent, all of its supersets are also infrequent (used to prune candidate search space).",
      "Lift vs Confidence: A rule with 90% confidence can have Lift < 1 if the consequent is already extremely common (e.g. buying milk is 95% across all baskets).",
      "K-Means Random Initialization: K-Means can converge to bad local minima. Always use K-Means++ initialization which spreads initial centroids far apart."
    ]
  },

  "day-6-neural-foundations": {
    dayNum: 6,
    title: "Day 6 Active Recall & 15-Minute Exam Revision",
    subtitle: "MLPs, Backpropagation Calculus, RBF/SOM & CNN Architecture Design",
    summary: "Day 6 explores neural representation learning: Perceptron linear limitations (XOR), multi-layer backpropagation gradient flow, vanishing gradients, RBF local receptive fields, Kohonen Self-Organizing Maps (SOM), and exact 2D CNN spatial dimension and parameter counting (plus the PRS Q2a 8-mark redesign).",
    keyFormulas: [
      { name: "CNN Output Spatial Dimension", formula: "O = \\left\\lfloor \\frac{W - K + 2P}{S} \\right\\rfloor + 1", note: "W = input dimension, K = kernel size, P = padding, S = stride. For 'same' padding with S=1, O = W." },
      { name: "Conv2D Trainable Parameter Count", formula: "\\text{Params} = (K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}", note: "Each filter has (K_h x K_w x C_in) weights + 1 bias, replicated across C_out filters. Pooling and GAP have 0 params." },
      { name: "Dense Layer Parameter Count", formula: "\\text{Params} = (N_{\\text{in}} + 1) \\times N_{\\text{out}}", note: "Each output neuron has N_in incoming weights + 1 bias." },
      { name: "Backpropagation Output Error", formula: "\\boldsymbol{\\delta}^{(L)} = \\hat{\\mathbf{y}} - \\mathbf{y} \\quad (\\text{Softmax + Cross-Entropy})", note: "Hidden layer error: \\boldsymbol{\\delta}^{(l)} = ((W^{(l+1)})^T \\boldsymbol{\\delta}^{(l+1)}) \\odot f'(\\mathbf{z}^{(l)})." }
    ],
    flashcards: [
      {
        q: "What were the two major flaws in Table 4 CNN (2.57M params) in PRS Q2a, and how do you fix them?",
        a: "Flaw 1: `Flatten(9408) -> Dense(256)` created 2,408,704 weights (93.4% of network) causing massive overfitting on 5,000 images. Fix: Replace `Flatten` with `GlobalAveragePooling2D` (reduces to 12,544 weights). Flaw 2: Single Cartesian `Dense(918)` output (18x17x3 classes) had only 5 images/class. Fix: Replace with 3 parallel heads (Brand: 18, Type: 17, Value: 3). Total params drop 97.3% to 69,398!"
      },
      {
        q: "Why did ReLU replace Sigmoid as the default activation function in deep neural networks?",
        a: "Sigmoid derivative saturates at $\\sigma'(z) \\le 0.25$. When backpropagating through $L$ layers, gradients are multiplied by $(0.25)^L \\to 0$, causing vanishing gradients. ReLU has derivative $f'(z) = 1$ for all $z > 0$, allowing gradient signals to flow unchanged across deep networks."
      },
      {
        q: "How does a Radial Basis Function (RBF) network differ from a standard Multi-Layer Perceptron (MLP)?",
        a: "An MLP partitions space using global hyperplanes (each neuron is active across an entire half-space). An RBF network uses local Gaussian receptive fields $\\exp(-\\|\\mathbf{x} - \\boldsymbol{\\mu}_j\\|^2 / 2\\sigma^2)$ that only activate in a compact region near centroid $\\boldsymbol{\\mu}_j$."
      },
      {
        q: "How does a Kohonen Self-Organizing Map (SOM) preserve topological neighborhood relationships?",
        a: "When a Best Matching Unit (BMU) $c$ wins, the update rule moves not only the BMU weights toward the input vector, but also pulls neighboring lattice neurons via a Gaussian neighborhood function $h_{cj}(t) = \\exp(-d(c, j)^2 / 2\\sigma(t)^2)$."
      }
    ],
    examTraps: [
      "Pooling Parameters: MaxPooling2D and GlobalAveragePooling2D have exactly 0 trainable parameters!",
      "Flatten Bottleneck: High-resolution feature maps feeding directly into large Dense layers are the #1 cause of parameter explosion in CNN exam questions.",
      "Softmax vs Sigmoid: Use Softmax for mutually exclusive multi-class problems (sum to 1); use Sigmoid for multi-label problems (each class independent probability)."
    ]
  },

  "day-7-sequences-time": {
    dayNum: 7,
    title: "Day 7 Active Recall & 15-Minute Exam Revision",
    subtitle: "Recurrent Networks, LSTMs, Anomaly Autoencoders & HMMs",
    summary: "Day 7 tackles sequential dependencies and temporal memory: RNN vanishing/exploding gradients, LSTM gating highways (forget, input, output gates), Reconstruction Autoencoders for sensor anomaly detection, Word2Vec vector spaces, and Hidden Markov Models (Baum-Welch, Forward, Viterbi).",
    keyFormulas: [
      { name: "LSTM Memory Cell Update", formula: "\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t", note: "Additive cell state gradient \\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t acts as an unimpeded gradient highway across long temporal lags." },
      { name: "HMM Forward Algorithm Likelihood", formula: "\\alpha_t(j) = \\left[\\sum_{i=1}^N \\alpha_{t-1}(i) a_{ij}\\right] b_j(\\mathbf{o}_t), \\quad P(O \\mid \\lambda) = \\sum_{i=1}^N \\alpha_T(i)", note: "Computes total sequence probability across all possible hidden state paths in O(N^2 T) time using dynamic programming." },
      { name: "HMM Viterbi Best Path (\\max)", formula: "v_t(j) = \\max_{i} \\left[v_{t-1}(i) a_{ij}\\right] b_j(\\mathbf{o}_t)", note: "Identical to Forward algorithm except \\sum is replaced with \\max to find the single most likely hidden state trajectory." },
      { name: "Autoencoder Anomaly MSE Score", formula: "e(\\mathbf{x}) = \\frac{1}{D} \\sum_{j=1}^D (x_j - \\hat{x}_j)^2 > \\tau", note: "Trained ONLY on normal signals. When an anomalous pattern enters, the bottleneck cannot reconstruct it, spiking MSE above threshold \\tau." }
    ],
    flashcards: [
      {
        q: "Why does a standard RNN suffer from vanishing gradients while an LSTM does not?",
        a: "Standard RNN multiplies hidden state by weight matrix $W_{hh}^T$ at every time step, causing gradients to shrink exponentially ($W^T \\to 0$). LSTM has an additive cell state $\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\dots$ where gradients flow linearly through time without repeated matrix multiplications."
      },
      {
        q: "How do you classify a 7-day user query sequence into 'Software Engineer' vs 'Sales Exec' using HMMs (IRS Q1d)?",
        a: "Define 3 hidden states (Intensive Screen, Mobile Work, Off-Screen) and 7 daily observation count vectors $o_t = [q_{\\text{erg}}, q_{\\text{vis}}, q_{\\text{ex}}]$. Train model $\\lambda_{\\text{SE}}$ on engineer logs and $\\lambda_{\\text{Sales}}$ on sales logs using Baum-Welch. At inference, run the Forward Algorithm to compute $P(O_{1:7} \\mid \\lambda_{\\text{SE}})$ and $P(O_{1:7} \\mid \\lambda_{\\text{Sales}})$ and classify via Bayes' rule."
      },
      {
        q: "Why does supervised binary classification fail on 3,000 normal vs 2 abnormal vibration sequences (PRS Q2c)?",
        a: "With only 2 abnormal sequences (0.067%), a binary classifier gets 99.93% accuracy by predicting 'Normal' all the time, or overfits to memorize the exact 2 samples. Formulate as Unsupervised One-Class Anomaly Detection: train an Autoencoder solely on normal sequences and flag test samples with high reconstruction error."
      },
      {
        q: "How do you prepare variable-length clickstream sequences for a recurrent model (PRS Q1d)?",
        a: "Map high-cardinality page IDs into dense learnable embeddings, concatenate dwell times, pad/truncate sequences to length $T_{\\max}$, and apply boolean padding masks to 3D tensor `(N_sessions, T_max, D_features)` so zero-padding steps do not affect gradients."
      }
    ],
    examTraps: [
      "Forward vs Viterbi: Forward uses $\\sum$ to compute total sequence likelihood; Viterbi uses $\\max$ with backpointers to decode the single best hidden state sequence.",
      "Stationary Assumption in Autoencoders: Raw time-series features must be standardized; global 5-second summary stats dilute short transient bursts (t=1-3s). Use sliding windows.",
      "Skip-Gram vs CBOW: CBOW predicts target word from surrounding context (faster, better for frequent words); Skip-Gram predicts context from target (better for rare words)."
    ]
  },

  "day-8-transformers-graphs": {
    dayNum: 8,
    title: "Day 8 Active Recall & 15-Minute Exam Revision",
    subtitle: "Deep Vision Backbones, Transformers, Knowledge Graphs & GraphRAG",
    summary: "Day 8 covers modern vision and relational representation: ResNet skip connections (gradient highways), Scaled Dot-Product and Multi-Head Self-Attention, Knowledge Graph Embeddings (TransE translation space), GraphRAG vs Vector RAG, and KBS system architectures (IRS Q2d/e).",
    keyFormulas: [
      { name: "ResNet Residual Mapping & Gradient Highway", formula: "\\mathbf{y} = \\mathcal{F}(\\mathbf{x}, \\{W_i\\}) + \\mathbf{x} \\implies \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{x}} = \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{y}} \\left( \\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}} + 1 \\right)", note: "The +1 term guarantees that gradient flows directly backward to earlier layers even if \\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}} vanishes!" },
      { name: "Scaled Dot-Product Attention", formula: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V", note: "Dividing by \\sqrt{d_k} scales variance to 1, preventing dot products from blowing up and pushing softmax into flat near-zero gradient regions." },
      { name: "TransE Knowledge Graph Score", formula: "f(h, r, t) = -\\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\|_{1, 2}", note: "Models relation as a translation vector in embedding space: \\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}. Valid triplets have low distance (high score)." },
      { name: "Combinatorial Explosion in Static Charts (IRS Q2e)", formula: "2^{40 \\text{ symptoms} + 10 \\text{ signs} + 4 \\text{ flags}} = 2^{54} \\approx 1.8 \\times 10^{16}", note: "Physically impossible to print on a wall lookup chart. A rule-based KBS dynamically prompts secondary symptoms." }
    ],
    flashcards: [
      {
        q: "Why does Vector RAG fail on multi-hop relational questions, and how does GraphRAG fix it?",
        a: "Vector RAG chunks text into isolated embeddings and computes cosine similarity to the query, missing multi-hop connections (e.g. 'A treats B, which is caused by C'). GraphRAG indexes entities and relationships in a Knowledge Graph, executing graph traversals (Cypher queries) across multiple relational hops to synthesize comprehensive answers."
      },
      {
        q: "What is the structural flaw of TransE when modeling symmetric and 1-to-N relationships?",
        a: "If relation $r$ is symmetric (e.g. 'married_to'), then $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$ and $\\mathbf{t} + \\mathbf{r} \\approx \\mathbf{h}$, forcing $\\mathbf{r} = \\mathbf{0}$ and $\\mathbf{h} = \\mathbf{t}$. For 1-to-N relations, it forces distinct entities $t_1, t_2$ to map to identical vectors."
      },
      {
        q: "What are the components of the A-EYE-Web Knowledge-Based System architecture (IRS Q2d)?",
        a: "(1) Web UI, (2) Working Memory (active patient case), (3) Inference Engine (forward chains primary symptoms to trigger secondary checklists, then scores differential diagnoses), (4) Two-Tier Knowledge Base (Tier 1: Dynamic trigger rules; Tier 2: Disease-symptom profiles), (5) Patient Case Database."
      },
      {
        q: "Compare Knowledge Elicitation vs Knowledge Discovery (Data Mining) for clinical diagnosis (IRS Q2f).",
        a: "Elicitation (interviews with ophthalmologists) captures causal clinical rationales and rare blinding emergencies with zero data, but suffers from the knowledge acquisition bottleneck and high cost. Discovery (data mining 5,000 cases) is fast, scalable, and finds empirical frequencies, but fails on rare diseases and learns spurious dataset noise."
      }
    ],
    examTraps: [
      "Softmax Scaling: If an exam question asks why dot-product attention divides by $\\sqrt{d_k}$, state that large dimensions cause large dot products that saturate softmax gradients.",
      "1x1 Pointwise Convolutions: Used in ResNet and MobileNet to change channel depth (bottleneck projection) without spatial resizing, slashing parameter counts.",
      "Static Decision Tables: Any static wall lookup table with >20 binary symptoms suffers from combinatorial explosion ($2^N$) and cannot handle partial inputs or dynamic filtering."
    ]
  },

  "day-9-optimization-agents": {
    dayNum: 9,
    title: "Day 9 Active Recall & 15-Minute Exam Revision",
    subtitle: "Genetic Algorithms, Deep Reinforcement Learning & Cognitive Agent Architectures",
    summary: "Day 9 explores global heuristic search and autonomous agent agency: Genetic Algorithms (chromosomes, fitness proportionate selection, crossover, mutation, elitism), Deep Reinforcement Learning for robotics (states, actions, 3-component rewards, Sim-to-Real digital twins), and BDI / ReAct cognitive agent loops.",
    keyFormulas: [
      { name: "GA Roulette Wheel Selection Probability", formula: "p_i = \\frac{f_i}{\\sum_{j=1}^M f_j}, \\quad C_i = \\sum_{k=1}^i p_k", note: "Fitter individuals occupy larger sectors of roulette wheel. Generate random r \\in [0, 1] and pick first individual where C_i \\ge r." },
      { name: "Q-Learning Bellman Optimality Update", formula: "Q(s_t, a_t) \\leftarrow Q(s_t, a_t) + \\alpha \\left[ R_{t+1} + \\gamma \\max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \\right]", note: "\\alpha = learning rate, \\gamma = discount factor. Target: R_{t+1} + \\gamma \\max_{a'} Q(s_{t+1}, a')." },
      { name: "Robotic Pick-and-Place Multi-Factor Reward (PRS Q2b)", formula: "R_t = +w_1 R_{\\text{grasp\\_sort}} - w_2 P_{\\text{collision}} - w_3 P_{\\text{pose\\_time}}", note: "Reward correct sorting, heavily penalize collisions with bin/conveyor, penalize invalid joint singularity poses or dropped items." },
      { name: "Hybrid System Architecture Classification (IRS Q2c)", formula: "\\text{Raw Sensory Frames} \\xrightarrow{\\text{CV Subsystem}} \\text{Symbolic Sign} \\xrightarrow{\\text{KBS Subsystem}} \\text{Diagnosis}", note: "Sequential Subprocessing (Transformational) Loosely-Coupled Hybrid System." }
    ],
    flashcards: [
      {
        q: "Why must Order Crossover (OX) or PMX be used instead of standard 1-point crossover for the Traveling Salesperson Problem (TSP)?",
        a: "Standard 1-point crossover creates duplicate cities and omits unvisited cities (violating the permutation constraint that every city must be visited exactly once). Order Crossover preserves a subset of relative order from one parent and fills remaining slots from the second parent without duplicates."
      },
      {
        q: "How does a Sim-to-Real Digital Twin prevent physical damage during robotic DRL training (PRS Q2b)?",
        a: "In early training, DRL explores randomly by trial and error, which on physical hardware would collide with conveyor belts or strip motor gears. Training inside a physics simulator (Gazebo/Isaac Gym) with Domain Randomization allows millions of collision-free trials before zero-shot transfer to the real arm."
      },
      {
        q: "What are the two key stabilizing innovations in Deep Q-Networks (DQN)?",
        a: "(1) Experience Replay Buffer: breaks temporal correlation between consecutive transition tuples $(s_t, a_t, r_{t+1}, s_{t+1})$. (2) Separate Target Network ($\\theta^-$): keeps the bootstrap target fixed for $C$ steps, preventing the algorithm from chasing a moving target."
      },
      {
        q: "What is the ReAct (Reason + Act) autonomous agent loop, and why does it outperform pure reasoning?",
        a: "ReAct alternates between: Thought (reasoning about the current state) -> Action (invoking external tools, APIs, or sensors) -> Observation (receiving ground-truth feedback from the environment). External observations ground the reasoning and break hallucination loops."
      }
    ],
    examTraps: [
      "Premature Convergence in GAs: If selection pressure is too high, one mediocre individual takes over the population before exploration happens. Solved via Elitism + higher mutation rate ($p_m$) or tournament selection.",
      "Sparse Rewards in RL: If reward is only given after successful 50-step sorting, the agent rarely finds the reward. Solved via Reward Shaping (small progressive distance rewards) or Curiosity-driven exploration.",
      "Exploration vs Exploitation: $\\epsilon$-greedy strategy starts with $\\epsilon=1.0$ (pure exploration) and decays to $\\epsilon=0.05$ (pure exploitation) over training episodes."
    ]
  },

  "day-10-ensembles-crucible": {
    dayNum: 10,
    title: "Day 10 Active Recall & 15-Minute Exam Revision",
    subtitle: "Ensemble Theory, Bias-Variance Decomposition & Nov 2026 Sample Paper Mastery",
    summary: "Day 10 is the grand synthesis: Condorcet's Jury Theorem, Bagging (variance reduction) vs Boosting (bias reduction) vs Stacking (heterogeneous meta-learning), plus full mastery of the official Nov 2026 ISY5001 IRS (50 marks) and ISY5002 PRS (40 marks) exam papers.",
    keyFormulas: [
      { name: "Condorcet's Jury Theorem (Ensemble Majority Vote)", formula: "P_{\\text{ensemble}} = \\sum_{k=\\lceil M/2 \\rceil}^M \\binom{M}{k} p^k (1-p)^{M-k}", note: "If individual independent classifiers have accuracy p > 0.5, as M \\to \\infty, ensemble accuracy approaches 1.0!" },
      { name: "AdaBoost Classifier Weight & Sample Reweight", formula: "\\alpha_t = \\frac{1}{2}\\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right), \\quad w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-\\alpha_t y_i h_t(\\mathbf{x}_i))}{Z_t}", note: "Accurate classifiers get high voting weight \\alpha. Misclassified samples receive increased weight in next iteration." },
      { name: "Random Forest Feature Bagging", formula: "m = \\sqrt{p} \\quad (\\text{Classification}), \\quad m = \\frac{p}{3} \\quad (\\text{Regression})", note: "Subsampling features at each split decorrelates trees, drastically reducing ensemble variance: \\text{Var} = \\rho \\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2." },
      { name: "PRS Q2d Naive Bayes Final Hand-Calculation", formula: "S(\\text{Mistracking}) = \\frac{4}{9} \\times \\frac{2}{4} \\times \\frac{2}{4} = \\frac{1}{9} \\approx 0.1111 > S(\\text{Carryback}) = 0.0667", note: "Normalized posterior P(\\text{Mistracking} \\mid \\text{Fair, Low}) = 62.5% vs Carryback = 37.5%." }
    ],
    flashcards: [
      {
        q: "What is the fundamental difference between Bagging and Boosting in terms of Bias and Variance?",
        a: "Bagging (e.g. Random Forest) trains high-variance, low-bias deep trees in parallel on bootstrap samples to REDUCE VARIANCE through averaging. Boosting (e.g. AdaBoost, XGBoost) trains high-bias shallow stumps sequentially on reweighted data to REDUCE BIAS by targeting hard errors."
      },
      {
        q: "Why must Stacking Ensembles use Out-of-Fold (OOF) cross-validation predictions for the meta-learner?",
        a: "If base learners predict on their own training data, their predictions will be over-optimistic. The Level-1 meta-learner would overfit to the most overfitted base model instead of learning how to balance generalization errors. 5-fold OOF cross-validation guarantees unbiased inputs."
      },
      {
        q: "How does AdaBoost explain the variable importance shift in PRS Q1c (ProductRelated #1, PageValues #8)?",
        a: "A single tree splits greedily on PageValues and stops. In AdaBoost, once the first stump handles easy PageValues sessions, all sample weights concentrate on the hard borderline sessions, forcing subsequent weak learners to exploit deep behavioral variables (ProductRelated, Duration, SpecialDay)."
      },
      {
        q: "What is the 4-step answering template for 10+ mark scenario questions in NUS ISS exams?",
        a: "(1) Characterize Data & Stakeholder Bottleneck (dimensions, class imbalance, clinical/business risk). (2) Draw Pipeline Dataflow Architecture (inputs, feature extraction, models, outputs). (3) Justify Technique Selection & Explain Why Competing Models Failed. (4) Pick Evaluation Metrics Aligned to Business Profit / Clinical Safety."
      }
    ],
    examTraps: [
      "Base Model Diversity: Stacking identical models (e.g. 5 Random Forests) adds no value. Stacking requires heterogeneous architectures (e.g. SVM + XGBoost + PyTorch Neural Network) with uncorrelated error distributions.",
      "Out-of-Fold Stacking: Never train the Level-1 meta-classifier on the same training predictions that the Level-0 base models were fitted on (data leakage).",
      "Exam Parameter Reductions: Always look for GlobalAveragePooling2D and multi-task heads when critiquing bloated CNN classification layers."
    ]
  }
};
