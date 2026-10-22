// 3-Day Fast-Track Sprint Active Recall & 15-Minute Exam Revision
// Formulated specifically for NUS ISS: Pattern Recognition Systems (PRS) & Intelligent Reasoning Systems (IRS)

window.THREE_DAY_DAILY_REVISIONS = {
  "day-1-classical-ml": {
    dayNum: 1,
    title: "Day 1 Active Recall & 15-Minute Exam Revision",
    subtitle: "Classical Machine Learning, State-Space Search, Bayesian Networks & Dimensionality",
    summary: "Day 1 establishes the mathematical foundations of deliberative search, probabilistic inference, and geometric classifiers. Review these core formulas and active recall flashcards to ensure flawless marks in search optimality proofs, Naive Bayes Laplace calculations, and PCA variance explanations.",
    keyFormulas: [
      { name: "A* Evaluation & Consistency", formula: "f(n) = g(n) + h(n), \\quad h(n) \\le c(n, a, n') + h(n')", note: "Admissibility (h <= h*) guarantees Tree Search optimality; Consistency (triangle inequality) guarantees Graph Search optimality without reopening closed nodes." },
      { name: "Naive Bayes Laplace Smoothing", formula: "P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}", note: "Must add |V_j| (distinct attribute domain values) to the denominator to preserve total probability sum = 1." },
      { name: "Cumulative Lift at Decile 1", formula: "\\text{Lift} = \\frac{\\text{Hit Rate in Top 10\\%}}{\\text{Overall Population Base Rate}}", note: "A lift of 3.5 means the top 10% scored records contain 3.5x more positive cases than random selection." },
      { name: "Soft-Margin SVM Objective & KKT", formula: "\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i, \\quad \\alpha_i [y_i(\\mathbf{w}^T \\mathbf{x}_i + b) - 1 + \\xi_i] = 0", note: "Large C = strict margin (high variance / risk overfitting); small C = forgiving margin (high bias). Non-SVs have alpha=0 (sparsity)." },
      { name: "Fisher's LDA Criterion", formula: "J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}} \\implies S_W^{-1} S_B \\mathbf{w} = \\lambda \\mathbf{w}", note: "Supervised: maximizes between-class scatter S_B relative to within-class scatter S_W. Rank <= C - 1." },
      { name: "GMM Posterior Responsibilities (E-Step)", formula: "\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_k, \\boldsymbol{\\Sigma}_k)}{\\sum_j \\pi_j \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_j, \\boldsymbol{\\Sigma}_j)}", note: "Continuous fractional ownership in [0, 1]. Generalizes hard K-Means Voronoi partitions." },
      { name: "Ward's Minimum Variance Linkage", formula: "\\Delta \\text{ESS} = \\frac{n_A n_B}{n_A + n_B} \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2", note: "Merges the cluster pair that minimizes the increase in total within-cluster sum of squares." },
      { name: "Association Rule Lift", formula: "\\text{Lift}(X \\to Y) = \\frac{P(X \\cap Y)}{P(X)P(Y)} = \\frac{\\text{Conf}(X \\to Y)}{P(Y)}", note: "Lift > 1 implies positive correlation; Lift < 1 indicates negative substitution." }
    ],
    flashcards: [
      {
        q: "Why does standard maximum likelihood Naive Bayes fail when an attribute count is zero in training?",
        a: "Because conditional probabilities across all features are multiplied ($P(C) \\prod P(x_j \\mid C)$). A single zero value collapses the entire joint posterior to zero, completely blinding the classifier to all other positive evidence."
      },
      {
        q: "What was the fatal examiner trap in Table 3 of the Nov 2026 PRS PCA question (PRS Q1e)?",
        a: "The supervised target column 'Revenue' was leaked inside the unsupervised PCA covariance matrix! Supervised target labels must NEVER enter PCA because the target is unknown at test time. Also, nominal integer IDs (Browser, OS) were wrongly fed as continuous numbers."
      },
      {
        q: "What is d-separation in Bayesian Networks, and what happens at a Collider (A -> B <- C)?",
        a: "At a collider, path A -> B <- C is BLOCKED when B is unobserved (A and C are marginally independent). However, conditioning on B or any of its descendants ACTIVATES the path (A and C become dependent via 'Explaining Away')."
      },
      {
        q: "Why is feature standardization mandatory before running k-NN, PCA, or SVM?",
        a: "Distance metrics compute Euclidean differences $\\sum (x_i - y_i)^2$. A feature with scale $10^5$ (e.g. Annual Income) completely swamps a feature with scale $10^0$ (e.g. Debt Ratio), rendering the second feature completely invisible unless normalized ($z = \\frac{x-\\mu}{\\sigma}$)."
      }
    ],
    examTraps: [
      "Laplace Smoothing: Forgetting to add |V| to the denominator when count=0 is the #1 point-loser in Naive Bayes exam calculations.",
      "A* Goal Test: In A* search, NEVER test if a node is the goal when pushing/generating it. Testing must ONLY occur when the node is POAPPED from the priority queue.",
      "PCA Data Leakage: Always check whether the target class column Y was accidentally included in PCA loadings tables."
    ]
  },

  "day-2-signals-deeplearning": {
    dayNum: 2,
    title: "Day 2 Active Recall & 15-Minute Exam Revision",
    subtitle: "Sensory Signals, Nyquist Sampling, Time-Frequency Transforms & Deep Learning Architectures",
    summary: "Day 2 covers physical sensor signal digitization, time-frequency transforms, backpropagation, CNN parameter counting, and sequential LSTM memory highways. Master these formulas to secure full marks on sampling aliasing calculations and the PRS Q2a CNN redesign.",
    keyFormulas: [
      { name: "Nyquist Sampling Criterion", formula: "f_s > 2 f_{\\max}, \\quad f_N = \\frac{f_s}{2}", note: "Frequencies f > f_N fold back across f_N as aliasing ghost signals: f_{alias} = |f - k f_s|." },
      { name: "Heisenberg-Gabor Time-Frequency Uncertainty", formula: "\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}", note: "In STFT: wide window = high frequency resolution, low time resolution; narrow window = high time resolution, blurry frequency bins." },
      { name: "Dynamic Time Warping (DTW) Cost", formula: "D(i, j) = d(i, j) + \\min\\left(D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1)\\right)", note: "Non-linear elastic alignment matrix. Sakoe-Chiba band |i-j| <= w bounds the search window." },
      { name: "Conv2D Trainable Parameter Count", formula: "\\text{Params} = (K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}", note: "Each filter has K_h x K_w x C_in weights + 1 bias, multiplied across C_out filters. Pooling and GAP have 0 params." },
      { name: "2D Haar Wavelet Parseval Energy Conservation", formula: "\\sum x_{ij}^2 = LL^2 + LH^2 + HL^2 + HH^2", note: "Spatial energy equals wavelet subband energy. LL subband typically captures >80-90% of total energy." },
      { name: "Dense Layer Parameter Count", formula: "\\text{Params} = (N_{\\text{in}} + 1) \\times N_{\\text{out}}", note: "Each output neuron has N_in incoming weights + 1 bias." },
      { name: "LSTM Memory Cell Gradient Highway", formula: "\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t", note: "Additive cell state c_t = f_t * c_{t-1} + i_t * c~_t prevents exponential vanishing gradient collapse." },
      { name: "VAE Reparameterization Trick & KL Loss", formula: "\\mathbf{z} = \\boldsymbol{\\mu} + \\boldsymbol{\\sigma} \\odot \\boldsymbol{\\epsilon}, \\quad D_{\\text{KL}} = -\\frac{1}{2}\\sum(1 + \\ln\\sigma^2 - \\mu^2 - \\sigma^2)", note: "Isolates stochasticity into epsilon ~ N(0, I), enabling end-to-end backpropagation through latent sampling." }
    ],
    flashcards: [
      {
        q: "Where MUST the analog low-pass anti-aliasing filter be placed in a hardware sensing pipeline?",
        a: "Strictly BEFORE the Analog-to-Digital Converter (ADC). Once a continuous waveform is digitized into discrete numbers, aliased ghost frequencies collide into the baseband and cannot be separated by any digital software filter!"
      },
      {
        q: "What were the two major flaws in Table 4 CNN (2.57M params) in PRS Q2a, and how do you fix them?",
        a: "Flaw 1: Flatten(9408) -> Dense(256) created 2,408,704 weights (93.4% of network), causing massive overfitting on 5,000 images. Fix: Replace Flatten with GlobalAveragePooling2D (reduces to 49,408 weights). Flaw 2: Single Cartesian Dense(918) output had only 5 images/class. Fix: Replace with 3 parallel heads (Brand: 18, Type: 17, Value: 3). Total params drop 97.3% to 69,398!"
      },
      {
        q: "Why did ReLU replace Sigmoid as the default activation function in deep networks?",
        a: "Sigmoid derivative saturates at $\\sigma'(z) \\le 0.25$. Multiplying $(0.25)^L$ across $L$ layers causes gradients to shrink exponentially to 0 (vanishing gradients). ReLU has constant derivative $f'(z) = 1$ for all $z > 0$, allowing gradient signals to flow undiminished."
      },
      {
        q: "Why does supervised classification fail on 3,000 normal vs 2 abnormal vibration sequences (PRS Q2c)?",
        a: "Extreme class imbalance (0.067% abnormal) causes supervised models to get 99.93% accuracy by predicting 'Normal' all the time, missing every breakdown. Formulate as Unsupervised Anomaly Detection: train an Autoencoder on normal data; flag test samples with reconstruction error $e(\\mathbf{x}) > \\tau$."
      }
    ],
    examTraps: [
      "Pooling Parameters: MaxPooling2D and GlobalAveragePooling2D have exactly 0 trainable parameters!",
      "Flatten Bottleneck: High-resolution feature maps feeding directly into large Dense layers are the #1 cause of parameter explosion in CNN exam questions.",
      "Aliasing Software Trap: Claiming that software filters can fix aliasing after sampling is an immediate zero on exam hardware questions."
    ]
  },

  "day-3-reasoning-integration": {
    dayNum: 3,
    title: "Day 3 Active Recall & 15-Minute Exam Revision",
    subtitle: "Rule Engines, Cognitive Architectures, Attention, Genetic Algorithms & Ensembles",
    summary: "Day 3 synthesizes high-level symbolic deduction, relational graphs, evolutionary optimization, multimodal fusion, and the Nov 2026 Sample Papers. Review these core formulas to secure maximum marks in production rules, TransE embeddings, and AdaBoost calculations.",
    keyFormulas: [
      { name: "Pinhole Camera Distance Daemon", formula: "D = D_{\\text{cal}} \\times \\frac{d_{\\text{cal}}}{d_{\\text{obs}}}", note: "As seen in IRS Q1c: face distance D is inversely proportional to observed pixel diameter d. Trigger warning if D not in [18, 24] in." },
      { name: "Transformer Scaled Dot-Product Attention", formula: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V", note: "Dividing by sqrt(d_k) prevents the dot product from exploding in magnitude, stopping softmax from saturating with zero gradients." },
      { name: "TransE Margin Ranking Loss", formula: "\\mathcal{L} = \\max\\left(0, \\, \\gamma + \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| - \\|\\mathbf{h}' + \\mathbf{r} - \\mathbf{t}'\\|\\right)", note: "Minimizes translation distance ||h + r - t|| for true positive facts while pushing corrupted negative facts away by margin gamma." },
      { name: "AdaBoost Weak Learner Weight", formula: "\\alpha_t = \\frac{1}{2}\\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right)", note: "If error rate epsilon = 0.20, alpha = 0.5 * ln(0.80/0.20) = 0.5 * ln(4) = ln(2) = 0.6931." },
      { name: "AdaBoost Sample Reweight Ratio", formula: "\\frac{w_{\\text{wrong}}}{w_{\\text{correct}}} = \\exp(2\\alpha_t) = \\frac{1 - \\epsilon_t}{\\epsilon_t}", note: "For error 0.20, relative sample reweighting multiplier ratio is exp(2 * 0.6931) = 4.0." },
      { name: "Ensemble Variance Reduction (Bagging vs RF)", formula: "\\text{Var}(\\bar{X}) = \\rho \\sigma^2 + \\frac{1 - \\rho}{M} \\sigma^2, \\quad \\lim_{M \\to \\infty} \\text{Var} = \\rho \\sigma^2", note: "Random Forest feature subsampling decorrelates trees (rho: 0.75 -> 0.20), driving the variance asymptote down by 72%!" },
      { name: "Condorcet's Jury Majority Theorem", formula: "P_{\\text{ensemble}} = \\sum_{k=\\lceil M/2 \\rceil}^M \\binom{M}{k} p^k (1-p)^{M-k}", note: "If individual independent classifiers have accuracy p > 0.5, as M -> inf, ensemble accuracy approaches 1.0." }
    ],
    flashcards: [
      {
        q: "What is the difference between an if-needed and an if-added daemon in a Frame Knowledge Base?",
        a: "An `if-needed` daemon triggers lazily when a slot's value is requested but empty (procedural generation/calculation). An `if-added` daemon triggers immediately when a slot is populated with data (constraint checking/alert generation)."
      },
      {
        q: "Name the 11 entities of the Cognitive Model Framework (IRS Q2h) in sequence.",
        a: "1. Environmental stimuli -> 2. Perceive function -> 3. Raw data -> 4. Recognize function -> 5. Information -> 6. Learn function -> 7. Knowledge (new/known) -> 8. Reason function -> 9. Plan/Solution -> 10. Act function -> 11. Effects of action."
      },
      {
        q: "Why must Order Crossover (OX) be used instead of standard 1-point crossover for the Traveling Salesperson Problem (TSP)?",
        a: "Standard 1-point crossover creates duplicate cities and omits unvisited cities (violating the permutation constraint that every city must be visited exactly once). Order Crossover preserves a subset of relative order from one parent and fills remaining slots from the second parent without duplicates."
      },
      {
        q: "Why does User-Based Collaborative Filtering fail for medical eye disease treatments (IRS Q3c)?",
        a: "Two reasons: (1) Extreme Sparsity: 2,000 patients x 300 treatments = 600,000 cells with only 2,000 ratings (99.67% empty). (2) Pathology Mismatch (Fatal): Treatments must be chosen based on current biological etiology, not whether two patients gave similar satisfaction stars to eye drops!"
      }
    ],
    examTraps: [
      "Rule Cycles: Rule engines will loop infinitely unless Conflict Resolution implements Refractoriness (never fire the same rule on the same working memory facts twice).",
      "AdaBoost Math: Forgetting the 1/2 factor in alpha = 0.5 * ln((1-e)/e). ln(4) = 1.386, so alpha = 0.693.",
      "Stacking Data Leakage: Meta-learners must be trained on Out-of-Fold (OOF) cross-validation predictions; training on base model train predictions causes severe overfitting."
    ]
  }
};
