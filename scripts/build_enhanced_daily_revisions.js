// Node.js script to generate courses/three-day-sprint/daily-revisions.js with full double-escaping for KaTeX
const fs = require('fs');
const path = require('path');

const fileContent = `// Enhanced NUS-ISS Daily Assessment & Spaced Active Recall System
// Full syllabus coverage across all 3 days meeting all Section 7 Master Prompt criteria:
// - Comprehensive revision summaries & formula sheets
// - Concept comparison tables
// - 10 Quick-Recall active recall cards per day (with cumulative retrieval)
// - 5 Mathematical / Technical application questions with deterministic check
// - 2 Unfamiliar scenario exam questions with official rubrics
// - Interactive timed assessment countdown mode
// - Dynamic Error-Analysis Report & prioritized weakness tracking

window.THREE_DAY_DAILY_REVISIONS = {
  "day-1-classical-ml": {
    dayNum: 1,
    title: "Day 1 Comprehensive Daily Revision & Timed Assessment",
    subtitle: "Classical Machine Learning, Probability, Dimensionality & State-Space Search",
    durationRecommended: "45–60 Minutes",
    summary: "Day 1 establishes the mathematical bedrock of empirical pattern recognition (PRS) and deliberative problem solving (IRS). You have covered inductive learning from data (k-NN, LogReg, Naive Bayes), maximum margin geometry (SVMs), unsupervised manifold projection (PCA) and supervised separation (LDA), clustering dynamics (K-Means, DBSCAN, GMM-EM), state-space search optimality (A* admissibility and consistency), and probabilistic reasoning across directed graphs (Bayesian Belief Networks, CPTs, and d-separation).",
    
    // 1. FORMULA SHEET (Properly double-escaped for KaTeX)
    keyFormulas: [
      { name: "A* Path Evaluation", formula: "f(n) = g(n) + h(n)", note: "g(n) is known path cost from start; h(n) is heuristic estimate to goal." },
      { name: "Heuristic Consistency (Monotonicity)", formula: "h(n) \\\\le c(n, a, n') + h(n')", note: "Triangle inequality. Guarantees f(n) non-decreasing and graph search optimality without node reopening." },
      { name: "Naive Bayes Laplace Smoothing", formula: "P(x_j \\\\mid C_k) = \\\\frac{\\\\text{count}(x_j, C_k) + 1}{\\\\text{count}(C_k) + |V_j|}", note: "Must add |V_j| to denominator so probabilities across all domain values sum to 1.0." },
      { name: "Linear SVM Margin Width", formula: "\\\\gamma = \\\\frac{2}{\\\\|\\\\mathbf{w}\\\\|} = \\\\frac{2}{\\\\sqrt{\\\\sum w_i^2}}", note: "Distance between canonical planes w^T x + b = +1 and -1. Maximize margin <=> Minimize 0.5 ||w||^2." },
      { name: "Evaluation Metrics", formula: "\\\\text{Precision} = \\\\frac{TP}{TP+FP}, \\\\; \\\\text{Recall} = \\\\frac{TP}{TP+FN}, \\\\; \\\\text{F1} = \\\\frac{2PR}{P+R}", note: "F1 is harmonic mean balancing precision (quality) and recall (coverage)." },
      { name: "Cumulative Decile Lift", formula: "\\\\text{Lift} = \\\\frac{\\\\% \\\\text{ responders in top decile}}{\\\\% \\\\text{ responders overall}}", note: "Lift > 1 proves model outperforms random targeting. Critical for coupon budget allocation." },
      { name: "PCA Covariance Matrix", formula: "\\\\mathbf{\\\\Sigma} = \\\\frac{1}{N-1}\\\\mathbf{X}^T\\\\mathbf{X}, \\\\quad \\\\mathbf{\\\\Sigma} \\\\mathbf{v}_i = \\\\lambda_i \\\\mathbf{v}_i", note: "Data MUST be zero-centered first. Fit strictly on train split to prevent target leakage!" },
      { name: "Fisher's LDA Criterion", formula: "J(\\\\mathbf{w}) = \\\\frac{\\\\mathbf{w}^T \\\\mathbf{S}_B \\\\mathbf{w}}{\\\\mathbf{w}^T \\\\mathbf{S}_W \\\\mathbf{w}} \\\\implies \\\\mathbf{S}_W^{-1} \\\\mathbf{S}_B \\\\mathbf{w} = \\\\lambda \\\\mathbf{w}", note: "Supervised: maximizes between-class scatter S_B while minimizing within-class scatter S_W." },
      { name: "GMM E-Step Responsibilities", formula: "\\\\gamma_{ik} = \\\\frac{\\\\pi_k \\\\mathcal{N}(\\\\mathbf{x}_i \\\\mid \\\\boldsymbol{\\\\mu}_k, \\\\boldsymbol{\\\\Sigma}_k)}{\\\\sum_j \\\\pi_j \\\\mathcal{N}(\\\\mathbf{x}_i \\\\mid \\\\boldsymbol{\\\\mu}_j, \\\\boldsymbol{\\\\Sigma}_j)}", note: "Soft clustering fractional ownership in [0, 1]. E-step computes responsibilities; M-step updates parameters." }
    ],

    // 2. CONCEPT COMPARISON TABLES
    comparisonTables: [
      {
        title: "Supervised vs Unsupervised Dimensionality: PCA vs LDA",
        subtitle: "Key distinctions for feature projection in NUS-ISS PRS",
        headers: ["Criterion", "Principal Component Analysis (PCA)", "Linear Discriminant Analysis (LDA)"],
        rows: [
          ["Target Labels", "Completely unsupervised (ignores y)", "Strictly supervised (requires class labels y)"],
          ["Objective", "Maximizes overall variance: var(w^T x)", "Maximizes class separability: S_B / S_W"],
          ["Output Dimensions", "Up to d components (rank of X)", "At most C - 1 components (where C = number of classes)"],
          ["Data Leakage Risk", "Target label must NEVER enter PCA fit", "Labels used during training only"]
        ]
      },
      {
        title: "Clustering Paradigms: K-Means vs DBSCAN vs GMM",
        subtitle: "Geometric assumptions, noise handling, and boundary shapes",
        headers: ["Feature", "K-Means", "DBSCAN", "Gaussian Mixture Models (GMM)"],
        rows: [
          ["Cluster Geometry", "Convex / spherical Voronoi cells", "Arbitrary non-convex shapes, manifolds", "Ellipsoidal Gaussian density contours"],
          ["Cluster Count k", "Must be specified beforehand", "Discovered automatically from eps & MinPts", "Must be specified beforehand (k components)"],
          ["Noise Handling", "Sensitive to outliers (pulls centroids)", "Explicitly labels outliers as Noise (-1)", "Can absorb noise into wide covariance"],
          ["Assignment Type", "Hard partition (0 or 1)", "Hard partition + noise", "Soft probabilistic responsibility gamma in [0, 1]"]
        ]
      }
    ],

    // 3. 10 QUICK-RECALL FLASHCARDS
    flashcards: [
      { q: "Why is heuristic consistency required for A* Graph Search instead of mere admissibility?", a: "In Graph Search, nodes in the CLOSED set are not reopened. Inconsistent heuristics allow f-values to decrease, meaning a suboptimal path could reach and close a state before the true optimal path is discovered. Consistency (triangle inequality) guarantees monotonically non-decreasing f-values, ensuring optimal paths on first expansion." },
      { q: "What is added to the denominator in Laplace smoothing for Naive Bayes?", a: "The cardinality of the feature attribute domain |V_j| (the number of distinct possible values of feature j). Adding only +1 causes probabilities across values to not sum to 1.0." },
      { q: "What was the fatal error in PRS Sample Paper Table 3 PCA table?", a: "The supervised target column 'Revenue' was leaked inside the PCA covariance matrix! Target labels are unknown at inference and must never be used in unsupervised feature extraction." },
      { q: "What does slack variable xi = 0.5 indicate in a Soft-Margin SVM?", a: "The data point is correctly classified (on the correct side of the decision boundary), but penetrates inside the margin corridor (between the margin and the hyperplane)." },
      { q: "What does slack variable xi = 1.8 indicate in a Soft-Margin SVM?", a: "The data point is misclassified (lies on the wrong side of the decision hyperplane w^T x + b = 0)." },
      { q: "In a Bayesian Network Collider structure (X -> Y <- Z), what happens when Y is observed?", a: "Conditioning on Y (or its descendants) ACTIVATES the path between X and Z, inducing dependency via 'Explaining Away'." },
      { q: "Why does K-Means fail on concentric circular rings of data?", a: "K-Means assumes convex, isotropic spherical clusters based on Euclidean distance to centroids. It cannot model non-linear manifold topologies (DBSCAN or Spectral Clustering must be used)." },
      { q: "Why is feature scaling mandatory before running k-NN or PCA?", a: "Distance calculations sum squared coordinate differences. Features with huge numerical magnitudes (e.g. Salary $100,000) completely dominate features with small ranges (e.g. Age 30), rendering the smaller features inert." },
      { q: "What is the maximum number of projection dimensions achievable by Fisher's LDA?", a: "At most C - 1 dimensions, where C is the number of distinct classes (because the between-class scatter matrix S_B has rank at most C - 1)." },
      { q: "In Decision Tree learning, what is the Gini impurity of a perfectly pure node?", a: "0.0. Gini = 1 - sum(p_i^2). If all samples belong to one class (p_1 = 1.0), Gini = 1 - 1^2 = 0." }
    ],

    // 4. 5 MATHEMATICAL / TECHNICAL APPLICATION QUESTIONS
    mathQuestions: [
      {
        id: "d1-math-1",
        num: 1,
        title: "Linear SVM Margin Width",
        marks: 5,
        units: "units",
        scenario: "An SVM hyperplane has weight vector w = [6, 8] and bias b = -10.",
        question: "Calculate the exact margin width \\\\gamma = \\\\frac{2}{\\\\|\\\\mathbf{w}\\\\|}.",
        formulaHint: "\\\\gamma = \\\\frac{2}{\\\\sqrt{w_1^2 + w_2^2}}",
        expected: 0.2,
        correctValue: 0.2,
        tolerance: 0.01,
        stepByStepSolution: "1. Compute norm of weight vector: \\\\|\\\\mathbf{w}\\\\| = \\\\sqrt{6^2 + 8^2} = \\\\sqrt{36 + 64} = \\\\sqrt{100} = 10.<br>2. Calculate margin width: \\\\gamma = \\\\frac{2}{\\\\|\\\\mathbf{w}\\\\|} = \\\\frac{2}{10} = 0.2 units.",
        steps: "\\\\|\\\\mathbf{w}\\\\| = \\\\sqrt{6^2 + 8^2} = \\\\sqrt{36 + 64} = \\\\sqrt{100} = 10. Margin = 2 / 10 = 0.2."
      },
      {
        id: "d1-math-2",
        num: 2,
        title: "Naive Bayes Laplace Conditional Probability",
        marks: 5,
        units: "",
        scenario: "Class C has 50 training instances. Attribute X has |V| = 4 possible values. Feature value x_1 appeared 0 times for class C.",
        question: "Calculate the Laplace-smoothed probability P(x_1 | C). Round to 4 decimal places.",
        formulaHint: "P(x_j \\\\mid C) = \\\\frac{\\\\text{count}(x_j, C) + 1}{\\\\text{count}(C) + |V_j|}",
        expected: 0.0185,
        correctValue: 0.0185,
        tolerance: 0.001,
        stepByStepSolution: "1. Identify numerator: count(x_1, C) + 1 = 0 + 1 = 1.<br>2. Identify denominator: count(C) + |V| = 50 + 4 = 54.<br>3. Compute probability: P(x_1 | C) = 1 / 54 \\\\approx 0.018518 (0.0185).",
        steps: "P(x_1 | C) = (0 + 1) / (50 + 4) = 1 / 54 ≈ 0.018518."
      },
      {
        id: "d1-math-3",
        num: 3,
        title: "Precision and Recall from Confusion Matrix",
        marks: 5,
        units: "",
        scenario: "Test results on 1,000 samples: True Positives (TP) = 160, False Positives (FP) = 40, True Negatives (TN) = 760, False Negatives (FN) = 40.",
        question: "Calculate the Precision of the model (TP / (TP + FP)).",
        formulaHint: "\\\\text{Precision} = \\\\frac{TP}{TP + FP}",
        expected: 0.80,
        correctValue: 0.80,
        tolerance: 0.01,
        stepByStepSolution: "1. True Positives (TP) = 160.<br>2. Predicted Positives = TP + FP = 160 + 40 = 200.<br>3. Precision = 160 / 200 = 0.80 (80.0%).",
        steps: "Precision = 160 / (160 + 40) = 160 / 200 = 0.80 (80%)."
      },
      {
        id: "d1-math-4",
        num: 4,
        title: "A* Evaluation Function Calculation",
        marks: 5,
        units: "",
        scenario: "In an A* graph search, path cost from Start to node N is g(N) = 14. Heuristic straight-line estimate from N to Goal is h(N) = 9.",
        question: "Calculate the total priority value f(N) = g(N) + h(N).",
        formulaHint: "f(N) = g(N) + h(N)",
        expected: 23.0,
        correctValue: 23.0,
        tolerance: 0.1,
        stepByStepSolution: "1. Known path cost g(N) = 14.<br>2. Heuristic estimate h(N) = 9.<br>3. Total priority f(N) = 14 + 9 = 23.0.",
        steps: "f(N) = g(N) + h(N) = 14 + 9 = 23."
      },
      {
        id: "d1-math-5",
        num: 5,
        title: "Cumulative Decile Lift Ratio",
        marks: 5,
        units: "",
        scenario: "A marketing base rate is 5% responders in total population. In the top 10% scored model decile, 25% of customers respond.",
        question: "Calculate the Lift ratio in Decile 1 (Hit Rate / Base Rate).",
        formulaHint: "\\\\text{Lift} = \\\\frac{\\\\text{Hit Rate in Decile 1}}{\\\\text{Overall Base Rate}}",
        expected: 5.0,
        correctValue: 5.0,
        tolerance: 0.1,
        stepByStepSolution: "1. Decile 1 Response Rate = 25% = 0.25.<br>2. Population Base Rate = 5% = 0.05.<br>3. Lift = 0.25 / 0.05 = 5.0. The top decile is 5x more effective than random targeting.",
        steps: "Lift = 25% / 5% = 5.0. The top decile is 5x more effective than random outreach."
      }
    ],

    // 5. 2 UNFAMILIAR SCENARIO QUESTIONS
    scenarioQuestions: [
      {
        id: "d1-scen-1",
        num: 1,
        title: "Scenario A: Online Bookstore Coupon Allocation under Asymmetric Costs (PRS Q1 Context)",
        marks: 10,
        context: "An e-commerce bookstore detects purchasing intention to distribute $10 coupons. If a coupon is given to a non-purchaser, $10 marketing budget is completely lost. If a purchaser is missed, the customer leaves and $40 profit is lost. Model 1 has Precision=75%, Recall=50%. Model 2 has Precision=45%, Recall=90%. Total daily visitors = 10,000, true conversion rate = 5% (500 true buyers, 9,500 non-buyers).",
        question: "Perform a financial cost-benefit analysis and state which model the business must deploy to maximize total net profit.",
        rubricCriteria: [
          { criterion: "Calculates Model 1 profit/loss: Identifies 250 buyers captured ($10,000 profit), 83 FP wasted coupons ($830 lost), 250 missed buyers ($10,000 lost profit).", marks: 3 },
          { criterion: "Calculates Model 2 profit/loss: Identifies 450 buyers captured ($18,000 profit), 550 FP wasted coupons ($5,500 lost), only 50 missed buyers ($2,000 lost profit).", marks: 3 },
          { criterion: "Justification of Business Trade-off: Concludes Model 2 is superior because the $40 cost of false negatives heavily outweighs the $10 cost of false positives in this asymmetric margin structure.", marks: 4 }
        ],
        modelSolution: [
          "<strong>Financial Breakdown for Model 1 (Precision 75%, Recall 50%):</strong><br>• True Buyers Captured (TP): 500 * 0.50 = 250. Gross Profit: 250 * $40 = $10,000.<br>• Coupons Distributed: 250 / 0.75 = 333 total. False Positives (FP): 83. Marketing Cost: 333 * $10 = $3,330.<br>• False Negatives (FN): 250 missed buyers * $40 lost = $10,000 lost.<br>• Net Daily Profit: $10,000 - $3,330 = <strong>+$6,670</strong>.",
          "<strong>Financial Breakdown for Model 2 (Precision 45%, Recall 90%):</strong><br>• True Buyers Captured (TP): 500 * 0.90 = 450. Gross Profit: 450 * $40 = $18,000.<br>• Coupons Distributed: 450 / 0.45 = 1,000 total. False Positives (FP): 550. Marketing Cost: 1,000 * $10 = $10,000.<br>• False Negatives (FN): 50 missed buyers * $40 lost = $2,000 lost.<br>• Net Daily Profit: $18,000 - $10,000 = <strong>+$8,000</strong>.",
          "<strong>Decision & Conclusion:</strong> Deploy Model 2. Net profit is higher by $1,330/day ($8,000 vs $6,670) because the $40 cost of a missed buyer (FN) dwarfs the $10 cost of a wasted coupon (FP)."
        ],
        commonExaminerTraps: [
          "Selecting Model 1 simply because 75% Precision 'looks higher'. In asymmetric cost domains, high Recall is often far more profitable.",
          "Forgetting that true buyers also receive coupons: each captured buyer yields $40 profit minus $10 coupon cost, or gross profit must be accounted against total coupon spend."
        ]
      },
      {
        id: "d1-scen-2",
        num: 2,
        title: "Scenario B: Conveyor Failure Cause Isolation with Bayesian Inference (PRS Q2d Context)",
        marks: 10,
        context: "A recycling plant experiences occasional conveyor failure. Sensor readings: Vibration = Large, Acoustics = High. Historical log: 6 Carryback failures (Vibration: 4 Large, 2 Small; Acoustics: 3 High, 3 Low), and 4 Mistracking failures (Vibration: 1 Large, 3 Small; Acoustics: 3 High, 1 Low). Prior probabilities: P(Carryback) = 0.6, P(Mistracking) = 0.4.",
        question: "Using Naive Bayes conditional independence, compute the unnormalized posterior probability for each cause and state the final diagnosis.",
        rubricCriteria: [
          { criterion: "Computes Carryback likelihood: P(Large|C) = 4/6 = 2/3; P(High|C) = 3/6 = 1/2. P(Obs|C) = 2/3 * 1/2 = 1/3.", marks: 3 },
          { criterion: "Computes Mistracking likelihood: P(Large|M) = 1/4; P(High|M) = 3/4. P(Obs|M) = 1/4 * 3/4 = 3/16 = 0.1875.", marks: 3 },
          { criterion: "Multiplies by Priors & Concludes: P(C)*P(Obs|C) = 0.6 * 0.333 = 0.200. P(M)*P(Obs|M) = 0.4 * 0.1875 = 0.075. Decision: Carryback (0.200 > 0.075).", marks: 4 }
        ],
        modelSolution: [
          "<strong>1. Carryback Cause (C):</strong><br>• P(C) = 0.6.<br>• P(Vibration=Large | C) = 4 / 6 = 2/3.<br>• P(Acoustics=High | C) = 3 / 6 = 1/2.<br>• Likelihood P(Obs | C) = (2/3) * (1/2) = 1/3 \\\\approx 0.3333.<br>• Joint Unnormalized Posterior: P(C) * P(Obs | C) = 0.6 * (1/3) = <strong>0.200</strong>.",
          "<strong>2. Mistracking Cause (M):</strong><br>• P(M) = 0.4.<br>• P(Vibration=Large | M) = 1 / 4 = 0.25.<br>• P(Acoustics=High | M) = 3 / 4 = 0.75.<br>• Likelihood P(Obs | M) = (1/4) * (3/4) = 3/16 = 0.1875.<br>• Joint Unnormalized Posterior: P(M) * P(Obs | M) = 0.4 * 0.1875 = <strong>0.075</strong>.",
          "<strong>3. Final Diagnosis:</strong> Carryback is the diagnosed fault since 0.200 > 0.075 (normalized posterior P(Carryback | Obs) = 0.200 / 0.275 = 72.7%)."
        ],
        commonExaminerTraps: [
          "Forgetting to multiply likelihood by the prior probability (0.6 and 0.4).",
          "Adding probabilities instead of multiplying conditional independent likelihoods."
        ]
      }
    ]
  },

  "day-2-signals-deeplearning": {
    dayNum: 2,
    title: "Day 2 Comprehensive Daily Revision & Timed Assessment",
    subtitle: "Sensory Signals, Spectral Transforms, Deep Learning & Representation Learning",
    durationRecommended: "45–60 Minutes",
    summary: "Day 2 progresses from continuous physical sensor signals to deep representations and autonomous sequential perception. You have mastered analog-to-digital conversion (sampling, quantization, Nyquist aliasing, anti-aliasing filters), signal preprocessing (peak detection, arPLS baseline drift, elastic DTW alignment), time-frequency transforms (STFT spectrograms, 2D Haar wavelets and Parseval energy conservation), backpropagation calculus, 2D CNN receptive fields and GAP parameter redesign (PRS Q2a), sequential memory (RNN, LSTM Constant Error Carousel), Hidden Markov Models (HMM), Transformers, autoencoder anomaly detection (PRS Q2c), deep reinforcement learning (PRS Q2b), ensemble learning, and multimodal fusion (RVM).",
    
    keyFormulas: [
      { name: "Nyquist Criterion & Ghost Aliasing", formula: "f_s > 2 f_{\\\\max}, \\\\quad f_N = \\\\frac{f_s}{2}, \\\\quad f_{\\\\text{alias}} = |f - k f_s|", note: "Frequencies above f_N fold back into baseband as phantom frequencies unless removed by analog hardware filter." },
      { name: "Heisenberg-Gabor STFT Uncertainty", formula: "\\\\Delta t \\\\cdot \\\\Delta f \\\\ge \\\\frac{1}{4\\\\pi}", note: "Wide window: high frequency resolution, low time resolution. Narrow window: sharp time localization, blurry frequency." },
      { name: "DTW Cumulative Cost Matrix", formula: "D(i, j) = d(x_i, y_j) + \\\\min(D(i-1, j), D(i, j-1), D(i-1, j-1))", note: "Non-linear dynamic programming alignment allowing temporal stretching and compression." },
      { name: "Conv2D Output Dimension", formula: "O = \\\\left\\\\lfloor \\\\frac{I - k + 2p}{s} \\\\right\\\\rfloor + 1", note: "I = input size, k = filter size, p = padding, s = stride." },
      { name: "Global Average Pooling (GAP) Parameters", formula: "\\\\text{GAP Params} = 0", note: "Collapses H x W feature map to 1 scalar. Replaces multi-million parameter Flatten layers (PRS Q2a)." },
      { name: "LSTM Forget Gate Activation", formula: "\\\\mathbf{f}_t = \\\\sigma(\\\\mathbf{W}_f [\\\\mathbf{h}_{t-1}, \\\\mathbf{x}_t] + \\\\mathbf{b}_f)", note: "Controls what fraction of past cell state c_{t-1} is retained on the additive gradient highway." },
      { name: "3-Sigma Reconstruction Anomaly Threshold", formula: "\\\\tau = \\\\mu_e + 3 \\\\sigma_e", note: "Threshold calibrated strictly on normal training reconstruction errors. Solves 3000:2 severe class imbalance." },
      { name: "AdaBoost Model Weight", formula: "\\\\alpha_t = \\\\frac{1}{2}\\\\ln\\\\left(\\\\frac{1-\\\\epsilon_t}{\\\\epsilon_t}\\\\right)", note: "Higher weight assigned to base classifiers with lower weighted error rate epsilon_t." },
      { name: "Scaled Dot-Product Attention", formula: "\\\\text{Attention}(\\\\mathbf{Q}, \\\\mathbf{K}, \\\\mathbf{V}) = \\\\text{softmax}\\\\left(\\\\frac{\\\\mathbf{Q}\\\\mathbf{K}^T}{\\\\sqrt{d_k}}\\\\right)\\\\mathbf{V}", note: "Dividing by sqrt(d_k) prevents dot products from blowing up into regions with vanishing softmax gradients." }
    ],

    comparisonTables: [
      {
        title: "Flatten Layer vs Global Average Pooling (GAP) in Deep CNNs",
        subtitle: "Architectural comparison for PRS Question 2a defect inspection",
        headers: ["Property", "Flatten + Dense Layer (PRS Q2a Flawed)", "Global Average Pooling (GAP Redesign)"],
        rows: [
          ["Parameter Count", "Massive: (H x W x C_in) * N_units (e.g. 102M params)", "Exactly ZERO learnable parameters"],
          ["Overfitting Propensity", "Extreme overfitting risk without massive dropout", "Acts as structural regularizer; excellent generalization"],
          ["Input Resolution Flexibility", "Fixed: requires rigid image dimensions", "Flexible: accepts variable spatial input resolutions"],
          ["Interpretability", "Opaque dense weight connections", "Direct 1-to-1 correspondence with feature map activations"]
        ]
      },
      {
        title: "Anomaly Detection: Supervised Classifier vs Unsupervised Autoencoder",
        subtitle: "Why supervised classification fails on severe mechanical fault imbalance",
        headers: ["Criterion", "Supervised Classifier (Colleague's Flawed Proposal)", "Unsupervised Autoencoder (3-Sigma Reconstruction)"],
        rows: [
          ["Data Requirement", "Requires balanced positive and negative classes", "Requires ONLY normal operational data for training"],
          ["Behavior on 3000:2 Imbalance", "Collapses to majority class (99.93% acc, 0% recall)", "Unaffected by rarity; models normal manifold distribution"],
          ["Novel Fault Discovery", "Fails completely on unseen failure modes", "Detects ANY mechanical deviation exceeding 3-sigma error"],
          ["Decision Boundary", "Rigid hyperplane separating 2 classes", "Envelope around normal operating sensor manifold"]
        ]
      }
    ],

    flashcards: [
      { q: "What is the exact physical purpose of an analog anti-aliasing filter before an ADC?", a: "To attenuate all analog frequency components above the Nyquist folding frequency (f > fs/2) BEFORE sampling, preventing them from irrevocably folding into the digital signal as ghost frequencies." },
      { q: "Why does Global Average Pooling (GAP) prevent overfitting in deep CNNs?", a: "GAP has zero learnable parameters; it averages spatial feature maps directly into class logits, enforcing spatial semantic correspondence and eliminating dense layer parameter explosion." },
      { q: "Why is supervised classification invalid for conveyor anomaly detection with 3,000 normal and 2 abnormal signals (PRS Q2c)?", a: "Extreme class imbalance causes trivial majority classification (predicting 'Normal' gives 99.93% accuracy but 0% recall), and 2 samples cannot represent the infinite space of future unseen mechanical faults." },
      { q: "In LSTM, what architectural mechanism prevents vanishing gradients over long sequences?", a: "The Constant Error Carousel (CEC) cell state conveyor belt, which updates via linear addition (c_t = f_t * c_{t-1} + i_t * c~_t) rather than repeated matrix multiplication." },
      { q: "In Transformers, why must dot products QK^T be scaled by 1/sqrt(d_k)?", a: "For large key dimensions d_k, the dot products grow large in magnitude, pushing the softmax function into saturated regions with near-zero gradients. Scaling maintains unit variance." },
      { q: "What is Parseval's Theorem in wavelet transformations?", a: "Total signal energy in the time domain equals the sum of energies across all wavelet subbands: sum(x^2) = LL^2 + LH^2 + HL^2 + HH^2." },
      { q: "How can dangerous real-world robot collisions be avoided during Reinforcement Learning training (PRS Q2b)?", a: "Train policies in a physics simulator (MuJoCo/PyBullet) using Domain Randomization (varying mass, friction, lighting) before transferring to physical robot with safety constraint bounding boxes." },
      { q: "[CUMULATIVE DAY 1] What is the difference between heuristic admissibility and consistency?", a: "Admissibility (h <= h*) guarantees optimality in Tree Search; Consistency (triangle inequality h(n) <= c + h(n')) guarantees optimality in Graph Search without reopening closed nodes." },
      { q: "[CUMULATIVE DAY 1] In Laplace smoothing, why do we add |V| to the denominator?", a: "Because we add +1 pseudo-count to each of the |V| possible attribute values in the numerator, expanding total imaginary evidence by |V| to keep total probability summing to 1.0." },
      { q: "What is the difference between Early and Late multimodal sensor fusion?", a: "Early fusion concatenates raw signals/features into one vector before modeling (capturing cross-modal correlations); Late fusion trains separate models per sensor and fuses outputs via voting/meta-model (robust to sensor failure)." }
    ],

    mathQuestions: [
      {
        id: "d2-math-1",
        num: 1,
        title: "Spectral Aliasing Ghost Frequency",
        marks: 5,
        units: "Hz",
        scenario: "An acoustic sensor samples at fs = 200 Hz. A fan blade produces a pure vibration tone at f = 340 Hz.",
        question: "Calculate the apparent ghost frequency f_alias observed in the sampled data.",
        formulaHint: "f_N = \\\\frac{f_s}{2}, \\\\quad k = \\\\text{round}\\\\left(\\\\frac{f}{f_s}\\\\right), \\\\quad f_{\\\\text{alias}} = |f - k f_s|",
        expected: 60.0,
        correctValue: 60.0,
        tolerance: 0.5,
        stepByStepSolution: "1. Nyquist folding frequency: f_N = 200 / 2 = 100 Hz.<br>2. Multiple k = round(340 / 200) = 2.<br>3. Ghost frequency: f_alias = |340 - 2(200)| = |340 - 400| = 60 Hz.",
        steps: "f_N = 200 / 2 = 100 Hz. k = round(340 / 200) = 2. f_alias = |340 - 2(200)| = |340 - 400| = 60 Hz."
      },
      {
        id: "d2-math-2",
        num: 2,
        title: "2D CNN Output Spatial Dimension",
        marks: 5,
        units: "pixels",
        scenario: "An input feature map has spatial size I = 32x32. A convolutional layer uses kernel k = 5, padding p = 2, and stride s = 2.",
        question: "Calculate the output spatial width O = floor((I - k + 2p)/s) + 1.",
        formulaHint: "O = \\\\left\\\\lfloor \\\\frac{I - k + 2p}{s} \\\\right\\\\rfloor + 1",
        expected: 16.0,
        correctValue: 16.0,
        tolerance: 0.1,
        stepByStepSolution: "1. Numerator: I - k + 2p = 32 - 5 + 2(2) = 31.<br>2. Division by stride: 31 / 2 = 15.5.<br>3. Floor and add 1: floor(15.5) + 1 = 15 + 1 = 16 pixels.",
        steps: "O = floor((32 - 5 + 2*2)/2) + 1 = floor((32 - 5 + 4)/2) + 1 = floor(31/2) + 1 = 15 + 1 = 16."
      },
      {
        id: "d2-math-3",
        num: 3,
        title: "Conv2D Layer Trainable Parameters",
        marks: 5,
        units: "parameters",
        scenario: "A conv layer has C_in = 64 input channels, C_out = 128 output filters, and filter size 3x3 with bias.",
        question: "Calculate the total trainable parameters (weights + biases).",
        formulaHint: "\\\\text{Params} = (k_h \\\\times k_w \\\\times C_{\\\\text{in}} \\\\times C_{\\\\text{out}}) + C_{\\\\text{out}}",
        expected: 73856.0,
        correctValue: 73856.0,
        tolerance: 10.0,
        stepByStepSolution: "1. Kernel weights: (3 * 3 * 64) * 128 = 576 * 128 = 73,728.<br>2. Biases: 128 (one per output filter).<br>3. Total parameters: 73,728 + 128 = 73,856 parameters.",
        steps: "Weights = (3 * 3 * 64) * 128 = 576 * 128 = 73,728. Biases = 128. Total = 73,728 + 128 = 73,856 parameters."
      },
      {
        id: "d2-math-4",
        num: 4,
        title: "Autoencoder 3-Sigma Anomaly Threshold",
        marks: 5,
        units: "",
        scenario: "Normal validation set reconstruction errors have mean mu_e = 0.040 and standard deviation sigma_e = 0.015.",
        question: "Calculate the 3-sigma anomaly threshold tau = mu_e + 3*sigma_e.",
        formulaHint: "\\\\tau = \\\\mu_e + 3 \\\\sigma_e",
        expected: 0.085,
        correctValue: 0.085,
        tolerance: 0.002,
        stepByStepSolution: "1. Mean error mu_e = 0.040.<br>2. 3 * sigma_e = 3 * 0.015 = 0.045.<br>3. Threshold tau = 0.040 + 0.045 = 0.085.",
        steps: "tau = 0.040 + 3*(0.015) = 0.040 + 0.045 = 0.085."
      },
      {
        id: "d2-math-5",
        num: 5,
        title: "AdaBoost Classifier Weight Alpha",
        marks: 5,
        units: "",
        scenario: "A base decision stump achieves weighted error rate epsilon = 0.20 on training samples.",
        question: "Calculate the classifier weight alpha = 0.5 * ln((1 - epsilon) / epsilon). Round to 3 decimal places.",
        formulaHint: "\\\\alpha_t = \\\\frac{1}{2}\\\\ln\\\\left(\\\\frac{1-\\\\epsilon_t}{\\\\epsilon_t}\\\\right)",
        expected: 0.693,
        correctValue: 0.693,
        tolerance: 0.01,
        stepByStepSolution: "1. Error ratio: (1 - 0.20) / 0.20 = 0.80 / 0.20 = 4.0.<br>2. Natural logarithm: ln(4.0) \\\\approx 1.386294.<br>3. Classifier weight alpha: 0.5 * 1.386294 = 0.693147 \\\\approx 0.693.",
        steps: "alpha = 0.5 * ln((1 - 0.20) / 0.20) = 0.5 * ln(0.80 / 0.20) = 0.5 * ln(4) = 0.5 * 1.38629 = 0.693."
      }
    ],

    scenarioQuestions: [
      {
        id: "d2-scen-1",
        num: 1,
        title: "Scenario A: CNN Overfitting Diagnosis & GAP Redesign (PRS Q2a)",
        marks: 10,
        context: "A vision team builds a defect detector on 224x224 RGB images. Layer Conv5 outputs a 7x7x512 feature map. This is fed into Flatten() followed by Dense(4096) -> Dense(4096) -> Dense(2). The training accuracy is 99.8% while test accuracy is 58.2%. The team wants to collect 50,000 more images.",
        question: "Diagnose the architectural bottleneck, explain why more images is an inefficient fix, and present a mathematically justified redesign.",
        rubricCriteria: [
          { criterion: "Diagnoses Parameter Explosion: Flatten creates 7*7*512 = 25,088 units. Connecting to Dense(4096) produces 25,088 * 4096 ≈ 102.7M parameters in the first dense layer alone!", marks: 3 },
          { criterion: "Identifies Severe Overfitting: Network capacity exceeds dataset entropy, memorizing noise rather than invariant features.", marks: 3 },
          { criterion: "Proposes Global Average Pooling (GAP) Redesign: Replace Flatten + 4096 units with GAP (0 params) directly connected to Dense(2) output. Reduces parameters by 99.99% and enforces spatial invariant feature representation.", marks: 4 }
        ],
        modelSolution: [
          "<strong>1. Architectural Diagnosis:</strong> The Conv5 output of 7x7x512 flattened yields 25,088 units. Connecting this to Dense(4096) creates 25,088 * 4096 = 102,760,448 parameters in that single layer! Total dense head parameters exceed 120 million. The model has vast over-capacity and memorizes training artifacts, causing the 99.8% train vs 58.2% test divergence.",
          "<strong>2. Why More Images is Inefficient:</strong> Collecting 50,000 more images is costly and fails to address the root structural design flaw. The network architecture itself lacks regularization and spatial translation invariance.",
          "<strong>3. Mathematically Justified Redesign:</strong> Replace Flatten() and the two 4096 Dense layers with a Global Average Pooling (GAP) layer followed directly by Dense(2). GAP computes the spatial mean of each 7x7 feature map, yielding a 512-dimensional vector with exactly 0 learnable parameters! Connecting 512 units to Dense(2) requires only 512 * 2 + 2 = 1,026 parameters, reducing classifier head parameters by >99.99% while boosting generalization."
        ],
        commonExaminerTraps: [
          "Suggesting generic hyperparameter tuning (e.g. learning rate) without calculating the 102.7M parameter count.",
          "Failing to name Global Average Pooling (GAP) as the modern replacement for Flatten layers."
        ]
      },
      {
        id: "d2-scen-2",
        num: 2,
        title: "Scenario B: Robotic Sorting DRL Architecture & Multi-Factor Reward (PRS Q2b)",
        marks: 10,
        context: "You are designing an autonomous e-waste sorting robot that picks circuit boards and batteries from a moving conveyor and drops them into sorting bins. Objects arrive in random 3D orientations. Collisions with stationary support beams cause severe mechanical damage.",
        question: "Formulate a 3-factor reward function, draft the 5-component system architecture, and detail how to train safely without physical damage.",
        rubricCriteria: [
          { criterion: "3-Factor Reward Function: R = R_success (+100 for correct bin) + R_time (-1 per step) + R_collision (-500 for beam impact) + R_proximity shaping.", marks: 3 },
          { criterion: "System Architecture: Drafts (1) Physical Hardware/Arm, (2) RGB-D Vision Pose Estimator, (3) DRL Actor-Critic Policy Network, (4) State Environment Buffer, (5) Safety Interlock Controller.", marks: 4 },
          { criterion: "Safe Sim-to-Real Transfer: Proposes training in physics simulator (MuJoCo/PyBullet) with Domain Randomization and deploying to real robot with hardware bounding boxes.", marks: 3 }
        ],
        modelSolution: [
          "<strong>1. Multi-Factor Reward Formulation:</strong><br>R = R_success (+100 for correct bin placement) + R_time (-1 per timestep to incentivize speed) + R_collision (-500 terminal penalty for striking support beams) + R_shaping (continuous distance reward approaching target).",
          "<strong>2. 5-Component System Architecture:</strong><br>• (1) Sensing & Perception: Overhead RGB-D camera estimating 6D object pose and conveyor speed.<br>• (2) State Buffer: Concatenates arm joint angles, gripper position, target pose, and conveyor velocity.<br>• (3) DRL Policy Network: Actor-Critic (PPO/SAC) network outputting continuous joint motor torques.<br>• (4) Safety Interlock Controller: Kinematic filter enforcing a collision-free geometric operational envelope.<br>• (5) Physical Robot Actuators: Robotic arm and vacuum/magnetic gripper.",
          "<strong>3. Safe Collision Mitigation Strategy:</strong><br>Train policy exclusively in a high-fidelity physics simulator (MuJoCo or PyBullet). Apply Domain Randomization across friction, object mass, conveyor velocity, and sensor noise. Transfer to real hardware using digital twin constraints and hardware current limiters."
        ],
        commonExaminerTraps: [
          "Proposing to train on the real robot directly with trial-and-error, which causes catastrophic hardware destruction.",
          "Using only a sparse +1 reward, which causes reinforcement learning to fail to converge."
        ]
      }
    ]
  },

  "day-3-reasoning-integration": {
    dayNum: 3,
    title: "Day 3 Comprehensive Daily Revision & Timed Assessment",
    subtitle: "Knowledge Engineering, Cognitive Architectures & Sample Paper Crucible",
    durationRecommended: "45–60 Minutes",
    summary: "Day 3 culminates the 36-hour revision sprint by bridging symbolic reasoning, cognitive memory models, and multi-system neuro-symbolic integration. You have covered expert rule engines (match-resolve-act), frame systems with active daemons (IRS Q1c), uncertainty modeling (MYCIN certainty factors, fuzzy Mamdani defuzzification), association mining and collaborative recommender systems (IRS Q3b, Q3c), Knowledge Graphs and TransE embeddings, Genetic Algorithms with Order Crossover for TSP, Marr's 3 levels of vision cognition, the exact 11-entity cognitive framework (IRS Q2h), GraphRAG with Cypher querying, and clinical safety governance (IRS Q2i).",
    
    keyFormulas: [
      { name: "MYCIN Certainty Factor (Positive Evidence)", formula: "CF_{\\\\text{combine}} = CF_1 + CF_2 - CF_1 \\\\cdot CF_2 \\\\quad (CF_1, CF_2 \\\\ge 0)", note: "Asymptotically approaches +1.0 as independent positive evidence accumulates." },
      { name: "Fuzzy Mamdani Centroid Defuzzification", formula: "z^* = \\\\frac{\\\\sum z_i \\\\cdot \\\\mu(z_i)}{\\\\sum \\\\mu(z_i)}", note: "Center of Gravity of aggregated fuzzy membership shape." },
      { name: "Association Rule Lift Ratio", formula: "\\\\text{Lift}(X \\\\implies Y) = \\\\frac{\\\\text{Conf}(X \\\\implies Y)}{\\\\text{Supp}(Y)} = \\\\frac{P(X \\\\cap Y)}{P(X)P(Y)}", note: "Lift > 1 indicates positive dependence; Lift < 1 indicates substitution/negative correlation." },
      { name: "TransE Knowledge Graph Score", formula: "f(h, r, t) = -\\\\|\\\\mathbf{h} + \\\\mathbf{r} - \\\\mathbf{t}\\\\|_{1/2}", note: "Translational vector model: head vector + relation vector should approximate tail vector." },
      { name: "Genetic Order Crossover (OX)", formula: "\\\\text{Swath Preservation} + \\\\text{Relative Order Insertion}", note: "Preserves continuous sub-tour from Parent 1, fills remaining positions from Parent 2 in circular order. Prevents duplicate cities in TSP." },
      { name: "Cosine Vector Similarity", formula: "\\\\text{sim}(\\\\mathbf{u}, \\\\mathbf{v}) = \\\\frac{\\\\mathbf{u} \\\\cdot \\\\mathbf{v}}{\\\\|\\\\mathbf{u}\\\\| \\\\|\\\\mathbf{v}\\\\|}", note: "Normalized dot product measuring angular semantic alignment in high-dimensional embedding space." }
    ],

    comparisonTables: [
      {
        title: "Rule-Based Systems vs Case-Based Reasoning (CBR)",
        subtitle: "Symbolic reasoning comparison for medical and enterprise reasoning",
        headers: ["Dimension", "Rule-Based Expert System", "Case-Based Reasoning (CBR)"],
        rows: [
          ["Knowledge Formalism", "Explicit IF-THEN production rules in Knowledge Base", "Library of past episodic concrete problem-solution cases"],
          ["Inference Mechanism", "Logical chaining (Forward / Backward) via Match-Resolve-Act", "4R Cycle: Retrieve similar cases, Reuse, Revise, Retain"],
          ["Knowledge Bottleneck", "High elicitation effort; difficult to formulate rules for complex domains", "Low initial elicitation; learns naturally by accumulating new cases"],
          ["Auditability & Compliance", "100% deterministic explanation tree (mandatory for safety/law)", "Analogical justification based on similarity to nearest precedent"]
        ]
      },
      {
        title: "Translational Knowledge Graph Embeddings: TransE vs TransH vs TransR",
        subtitle: "Scoring functions, geometric spaces, and multi-mapping expressiveness",
        headers: ["Model", "Embedding Space", "Scoring Function", "Limitation / Capability"],
        rows: [
          ["TransE", "All entities and relations in shared space R^d", "- ||h + r - t||", "Fails on 1-to-N, N-to-1 relations (collapses entities)"],
          ["TransH", "Entities projected onto relation hyperplane w_r", "- ||h_perp + r - t_perp||", "Allows entities to have distinct roles per relation"],
          ["TransR", "Entities in R^d, relations in distinct space R^k", "- ||M_r h + r - M_r t||", "Full projection matrix M_r; highly expressive but more parameters"]
        ]
      }
    ],

    flashcards: [
      { q: "What are the four stages of the Case-Based Reasoning (CBR) cycle?", a: "Retrieve (find most similar past case), Reuse (map solution to new case), Revise (evaluate in real world and repair), Retain (store verified experience into case library)." },
      { q: "What is the difference between an if-needed and an if-added daemon in Frame Systems (IRS Q1c)?", a: "An if-needed daemon fires lazily when a slot value is requested but empty (calculating value on demand); an if-added daemon fires actively whenever a slot value is modified/written (triggering checks or side effects)." },
      { q: "What are Marr's Three Levels of Analysis for cognitive perception?", a: "1. Computational Theory (what is the goal and why); 2. Representation and Algorithm (how are input/output represented and what algorithm transforms them); 3. Hardware Implementation (how is it physically realized in neurons or silicon)." },
      { q: "Name the exact 11 entities in the NUS-ISS Cognitive Framework (IRS Q2h).", a: "1. Sensing, 2. Input, 3. Information, 4. Learn Function, 5. Knowledge Base, 6. Memory, 7. Reason Function, 8. Plan/Solution, 9. Act Function, 10. Output, 11. Effects of Action." },
      { q: "Why should Order Crossover (OX) be used instead of 1-point crossover for Traveling Salesperson Problem (TSP)?", a: "Standard 1-point crossover creates duplicate cities and missing cities in TSP permutation chromosomes. Order Crossover preserves a sub-tour while inserting remaining cities in relative order without duplicates." },
      { q: "Why is patient self-service without primary doctor supervision risky in clinical AI (IRS Q2i)?", a: "Patients cannot evaluate ophthalmic signs accurately; false negatives lead to irreversible blindness; medical legal malpractice cannot be assigned to software; and humans-in-the-loop provide essential accountability." },
      { q: "[CUMULATIVE DAY 2] What does a Flatten layer do in a CNN and why does GAP replace it?", a: "Flatten vectorizes spatial feature maps, creating millions of dense weights. Global Average Pooling replaces all spatial pixels with their average scalar, requiring 0 parameters and preventing overfitting." },
      { q: "[CUMULATIVE DAY 2] In 3-sigma anomaly detection on vibration signals, how is the threshold calibrated?", a: "Threshold tau = mu_e + 3*sigma_e is calibrated strictly on normal training reconstruction errors. An anomaly is flagged if a test sequence error exceeds tau." },
      { q: "[CUMULATIVE DAY 1] What is the difference between A* admissibility and consistency?", a: "Admissibility (h <= h*) guarantees Tree Search optimality; Consistency (h(n) <= c + h(n')) guarantees Graph Search optimality without reopening closed nodes." },
      { q: "[CUMULATIVE DAY 1] What is d-separation in a Bayesian Network Collider (A -> B <- C)?", a: "Unobserved B blocks the path (A and C independent). Observing B opens the path, creating dependence via explaining away." }
    ],

    mathQuestions: [
      {
        id: "d3-math-1",
        num: 1,
        title: "MYCIN Certainty Factor Combination",
        marks: 5,
        units: "",
        scenario: "Rule 1 asserts hypothesis H with CF1 = +0.70. Rule 2 independently asserts H with CF2 = +0.40.",
        question: "Calculate the combined certainty factor CF_combine = CF1 + CF2 - (CF1 * CF2).",
        formulaHint: "CF_{\\\\text{combine}} = CF_1 + CF_2 - CF_1 \\\\cdot CF_2",
        expected: 0.82,
        correctValue: 0.82,
        tolerance: 0.01,
        stepByStepSolution: "1. Sum of independent positive factors: 0.70 + 0.40 = 1.10.<br>2. Interaction product term: 0.70 * 0.40 = 0.28.<br>3. Combined CF: 1.10 - 0.28 = 0.82.",
        steps: "CF_combine = 0.70 + 0.40 - (0.70 * 0.40) = 1.10 - 0.28 = 0.82."
      },
      {
        id: "d3-math-2",
        num: 2,
        title: "Association Mining Lift Calculation",
        marks: 5,
        units: "",
        scenario: "In 2,000 patient records: 400 have symptom S (Supp = 0.20), 200 have disease D (Supp = 0.10), and 100 have both S and D (Supp = 0.05).",
        question: "Calculate the Lift ratio of rule S => D. (Conf / Supp(D)).",
        formulaHint: "\\\\text{Lift} = \\\\frac{\\\\text{Conf}(S \\\\implies D)}{\\\\text{Supp}(D)} = \\\\frac{\\\\text{Supp}(S \\\\cap D)}{\\\\text{Supp}(S) \\\\times \\\\text{Supp}(D)}",
        expected: 2.50,
        correctValue: 2.50,
        tolerance: 0.05,
        stepByStepSolution: "1. Confidence: Conf(S => D) = Supp(S & D) / Supp(S) = 0.05 / 0.20 = 0.25 (25%).<br>2. Lift: 0.25 / Supp(D) = 0.25 / 0.10 = 2.50.<br>3. Interpretation: Presence of symptom S increases likelihood of disease D by 2.5x over baseline.",
        steps: "Conf(S => D) = 0.05 / 0.20 = 0.25. Lift = 0.25 / 0.10 = 2.50. Having symptom S makes disease D 2.5x more likely."
      },
      {
        id: "d3-math-3",
        num: 3,
        title: "Fuzzy Mamdani Centroid Defuzzification",
        marks: 5,
        units: "",
        scenario: "An aggregated fuzzy output shape has 3 discrete samples: z1 = 10 with mu = 0.2; z2 = 20 with mu = 0.8; z3 = 30 with mu = 0.5.",
        question: "Calculate the defuzzified crisp output z* = sum(z_i * mu_i) / sum(mu_i).",
        formulaHint: "z^* = \\\\frac{\\\\sum z_i \\\\cdot \\\\mu(z_i)}{\\\\sum \\\\mu(z_i)}",
        expected: 22.0,
        correctValue: 22.0,
        tolerance: 0.2,
        stepByStepSolution: "1. Numerator: 10(0.2) + 20(0.8) + 30(0.5) = 2.0 + 16.0 + 15.0 = 33.0.<br>2. Denominator: 0.2 + 0.8 + 0.5 = 1.5.<br>3. Centroid z*: 33.0 / 1.5 = 22.0.",
        steps: "Numerator = 10(0.2) + 20(0.8) + 30(0.5) = 2 + 16 + 15 = 33. Denominator = 0.2 + 0.8 + 0.5 = 1.5. z* = 33 / 1.5 = 22.0."
      },
      {
        id: "d3-math-4",
        num: 4,
        title: "Speech Recognition Word Error Rate (WER)",
        marks: 5,
        units: "",
        scenario: "An ASR transcription evaluation of a 50-word sentence has: Substitutions S = 4, Deletions D = 2, Insertions I = 1.",
        question: "Calculate the Word Error Rate WER = (S + D + I) / N. Round to 2 decimal places.",
        formulaHint: "\\\\text{WER} = \\\\frac{S + D + I}{N}",
        expected: 0.14,
        correctValue: 0.14,
        tolerance: 0.01,
        stepByStepSolution: "1. Total edit distance errors: S + D + I = 4 + 2 + 1 = 7.<br>2. Reference length N = 50.<br>3. WER: 7 / 50 = 0.14 (14.0%).",
        steps: "WER = (4 + 2 + 1) / 50 = 7 / 50 = 0.14 (14.0%)."
      },
      {
        id: "d3-math-5",
        num: 5,
        title: "Camera Face Distance Active Daemon",
        marks: 5,
        units: "cm",
        scenario: "Camera focal length f = 600 pixels, known human face width W = 16 cm. Face bounding box in image has width P = 192 pixels.",
        question: "Calculate distance D (in cm) using formula D = (f * W) / P.",
        formulaHint: "D = \\\\frac{f \\\\times W}{P}",
        expected: 50.0,
        correctValue: 50.0,
        tolerance: 0.5,
        stepByStepSolution: "1. Numerator: f * W = 600 * 16 = 9,600.<br>2. Division by pixel width: 9,600 / 192 = 50.0 cm.",
        steps: "D = (600 * 16) / 192 = 9600 / 192 = 50.0 cm."
      }
    ],

    scenarioQuestions: [
      {
        id: "d3-scen-1",
        num: 1,
        title: "Scenario A: Clinical Diagnostic Model Selection (IRS Q3a)",
        marks: 10,
        context: "A primary care portal diagnoses 15 eye diseases from 40 symptoms, 10 clinical signs, and medication flags. You evaluate: Method 1 (Single Decision Tree), Method 2 (Random Forest of Decision Trees), Method 3 (k-Nearest Neighbor).",
        question: "(i) State which method is LEAST suitable and why. (ii) For the remaining two methods, describe how a ranked differential diagnosis list is generated.",
        rubricCriteria: [
          { criterion: "Identifies Single Decision Tree as Least Suitable: Suffers severe high variance, greedy split bias, brittle error propagation, and inability to produce robust calibrated probabilities.", marks: 3 },
          { criterion: "Method 2 (Random Forest) Ranking: Input = binary vector of 50 symptoms/signs. Output ranking = aggregated class vote fractions across all decision trees (trees voting for Disease X / total trees).", marks: 3 },
          { criterion: "Method 3 (k-NN) Ranking: Input = weighted symptom vector. Output ranking = inverse distance weighting among k nearest historical patient cases.", marks: 4 }
        ],
        modelSolution: [
          "<strong>Part (i) Least Suitable Method:</strong> Method 1 (Single Decision Tree) is least suitable. A single tree has high variance, greedy split selection, and extreme sensitivity to minor symptom variations. A single missing symptom early in the tree misroutes the patient down the wrong branch, causing brittle diagnostic failure with zero calibrated ranking capability.",
          "<strong>Part (ii) Ranked Differential Diagnosis:</strong><br>• <strong>Method 2 (Random Forest):</strong> Evaluates an ensemble of B decorrelated decision trees trained on bootstrap samples and random feature subsets. For a new patient, every tree votes for a disease. The differential diagnosis list is ranked by vote proportion: P(Disease_k) = (Count of trees voting for Disease_k) / B.<br>• <strong>Method 3 (k-NN):</strong> Computes distance (e.g., Gower's distance or cosine similarity) between the query patient and all historical cases in the case library. Identifies the k nearest neighbors. Ranks candidate diseases by inverse-distance weighted frequency: Score(Disease_k) = sum_{i in k-NN, y_i = k} (1 / (d(x, x_i) + eps))."
        ],
        commonExaminerTraps: [
          "Selecting k-NN as least suitable without justifying the extreme instability of a single decision tree.",
          "Failing to explain HOW the probability or ranking score is calculated (tree vote fractions vs inverse distance)."
        ]
      },
      {
        id: "d3-scen-2",
        num: 2,
        title: "Scenario B: The 11-Entity Cognitive Framework for SGH Smart Mirror (CS Day 1PM / IRS Q2h)",
        marks: 10,
        context: "Singapore General Hospital (SGH) deploys an AI Smart Mirror in staff anterooms to verify Personal Protective Equipment (PPE) compliance before entering isolation wards. The system observes medical staff, inspects gown/gloves/mask/shield, detects improper donning, and gives verbal correction.",
        question: "Deconstruct the SGH Smart Mirror system by mapping its components into the 11 entities of the NUS-ISS Cognitive Framework.",
        rubricCriteria: [
          { criterion: "Maps Sensory Input Entities: 1. Sensing (RGB-D depth camera + mic); 2. Input (raw frames 1080p); 3. Information (extracted body keypoint skeleton + PPE bounding boxes).", marks: 3 },
          { criterion: "Maps Central Processing & Memory: 4. Learn (fine-tuning pose estimator); 5. Knowledge Base (MOH infection control PPE guidelines); 6. Memory (current staff inspection state); 7. Reason (verifying all protocol steps satisfied); 8. Plan (synthesizing spoken feedback prompt).", marks: 4 },
          { criterion: "Maps Action & Environment: 9. Act (TTS voice synthesizer & UI display); 10. Output (spoken audio guidance + green/red screen highlight); 11. Effects of Action (staff member adjusts mask strap before opening ward door).", marks: 3 }
        ],
        modelSolution: [
          "<strong>Mapping to the 11 NUS-ISS Cognitive Framework Entities:</strong><br>1. <strong>Sensing:</strong> Physical sensors: Intel RealSense RGB-D depth camera and directional microphone array.<br>2. <strong>Input:</strong> Raw 1080p RGB video stream, 3D point cloud depth map, and audio waveforms.<br>3. <strong>Information:</strong> Extracted structured representations: 25-joint 3D body skeleton, facial landmark mesh, and PPE bounding boxes (mask, goggles, gown, gloves).<br>4. <strong>Learn Function:</strong> Continual learning module adapting to staff appearance changes and rare gown types.<br>5. <strong>Knowledge Base:</strong> MOH Infection Prevention Guidelines, donning sequence ontology, and PPE compliance rules.<br>6. <strong>Memory:</strong> Working memory tracking current staff ID, checkpoint checklist, and elapsed inspection duration.<br>7. <strong>Reason Function:</strong> Forward-chaining rule engine checking compliance: IF N95 mask seal gap > 5mm THEN Flag(MaskImproper).<br>8. <strong>Plan/Solution:</strong> Dialogue manager prioritizing corrective feedback (e.g., alert mask seal first, then glove tuck).<br>9. <strong>Act Function:</strong> Text-To-Speech (TTS) voice generator and UI rendering engine.<br>10. <strong>Output:</strong> Spoken audio: 'Please tighten your upper mask strap' and red bounding box on mirror display.<br>11. <strong>Effects of Action:</strong> Nurse adjusts strap; sensor detects compliance; mirror displays green checkmark; isolation door unlocks."
        ],
        commonExaminerTraps: [
          "Conflating 'Input' (raw pixel data) with 'Information' (extracted structured keypoints and bounding boxes).",
          "Forgetting the 11th entity ('Effects of Action'), which represents the real-world consequence in the operational environment."
        ]
      }
    ]
  }
};

// Aliases for maximum compatibility with both template engines
Object.keys(window.THREE_DAY_DAILY_REVISIONS).forEach(dayKey => {
  const day = window.THREE_DAY_DAILY_REVISIONS[dayKey];
  if (!day.comparisons) day.comparisons = day.comparisonTables;
  if (!day.quickRecall) day.quickRecall = day.flashcards;
});
`;

fs.writeFileSync(path.join(__dirname, '../courses/three-day-sprint/daily-revisions.js'), fileContent, 'utf8');
console.log('Successfully wrote courses/three-day-sprint/daily-revisions.js');
