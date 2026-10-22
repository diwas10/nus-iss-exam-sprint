// NUS ISS Interactive Study & Exam Doubt Q&A Assistant
// Comprehensive Syllabus-Grounded Q&A Engine with KaTeX Formulas, Advanced Math Proofs, Pre-loaded Exam Doubts, and Personal Notebook

window.QAAssistant = {
  knowledgeBase: [
    {
      keywords: ["laplace", "smoothing", "naive bayes", "denominator", "|v|", "zero probability"],
      title: "Why does Laplace Smoothing add |V| to the denominator in Naive Bayes?",
      topic: "Supervised Classifiers (Classical ML)",
      formula: "P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}",
      answer: `
        <p>In Naive Bayes, if a feature value $x_j$ never appeared with class $C_k$ in the training data, its conditional probability is $\\text{count}(x_j, C_k) / \\text{count}(C_k) = 0$. Because Naive Bayes multiplies probabilities across all features ($P(C_k) \\prod P(x_j \\mid C_k)$), a single zero wipes out the entire class probability regardless of how strong the other evidence is!</p>
        <p>To fix this, we add a pseudo-count of $+1$ to the numerator for every possible value. If attribute $X_j$ has $|V_j|$ distinct possible values, we are effectively adding $1 \\times |V_j|$ total imaginary observations. To keep the total probability summing to 1 (Axiom of Probability: $\\sum_{v \\in V_j} P(X_j = v \\mid C_k) = 1$), you <strong>MUST add $|V_j|$ to the denominator</strong>.</p>
        <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:8px 12px; border-radius:4px; margin-top:8px;">
          <strong>Exam Warning:</strong> The #1 mistake students make in PRS exams is dividing by $\\text{count}(C_k) + 1$ instead of $\\text{count}(C_k) + |V_j|$. This immediately loses 2 to 3 marks!
        </div>
      `
    },
    {
      keywords: ["a*", "admissible", "admissibility", "consistent", "consistency", "monotonicity", "heuristics", "tree search", "graph search"],
      title: "A* Admissibility vs Consistency (Monotonicity) — When is A* Optimal?",
      topic: "State-Space Search (Search & Reasoning)",
      formula: "h(n) \\le h^*(n) \\quad \\text{(Admissible)}, \\quad h(n) \\le c(n, a, n') + h(n') \\quad \\text{(Consistent)}",
      answer: `
        <p><strong>1. Admissibility ($h(n) \\le h^*(n)$):</strong> The heuristic never overestimates the true remaining cost to the goal. Admissibility is sufficient to guarantee an optimal path in <strong>Tree Search $A^*$</strong>.</p>
        <p><strong>2. Consistency / Monotonicity:</strong> Satisfies the triangle inequality: the estimated cost to the goal from node $n$ cannot exceed the step cost to neighbor $n'$ plus the estimated cost from $n'$ to goal. Consistency guarantees that the $f$-values along any path are monotonically non-decreasing ($f(n') \\ge f(n)$).</p>
        <p><strong>3. Critical Graph Search Rule:</strong> In <strong>Graph Search</strong> (where nodes are stored in a Closed list), admissibility alone is NOT enough! If $h(n)$ is admissible but inconsistent, $A^*$ may reach a state via an expensive path first and close it, missing a subsequent cheaper path. Consistency guarantees that the first time a node is popped from the Open priority queue, the path is already optimal, so <em>closed nodes never need to be reopened</em>.</p>
      `
    },
    {
      keywords: ["svm", "support vector", "lagrangian", "dual", "kkt", "slack", "margin", "convex qp"],
      title: "Support Vector Machines (SVM): Primal QP, Lagrangian Dual & KKT Sparsity",
      topic: "Geometric Classifiers (Classical ML)",
      formula: "\\max_{\\boldsymbol{\\alpha}} \\sum_{i=1}^N \\alpha_i - \\frac{1}{2}\\sum_{i,j=1}^N \\alpha_i \\alpha_j y_i y_j K(\\mathbf{x}_i, \\mathbf{x}_j) \\quad \\text{s.t. } 0 \\le \\alpha_i \\le C, \\; \\sum \\alpha_i y_i = 0",
      answer: `
        <p><strong>1. Primal Formulation:</strong> Minimizes $\\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum \\xi_i$ subject to $y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\ge 1 - \\xi_i$. The margin width is $\\frac{2}{\\|\\mathbf{w}\\|}$.</p>
        <p><strong>2. Physical Meaning of Slack $\\xi_i$:</strong></p>
        <ul>
          <li>$\\xi_i = 0$: Point is on or outside the safety margin ($y_i f(\\mathbf{x}_i) \\ge 1$).</li>
          <li>$0 < \\xi_i < 1$: Point is correctly classified ($y_i f > 0$) but penetrates inside the margin.</li>
          <li>$\\xi_i = 1$: Point lies directly on the decision boundary ($f(\\mathbf{x}_i) = 0$).</li>
          <li>$\\xi_i > 1$: Point lies on the wrong side and is <strong>misclassified</strong>.</li>
        </ul>
        <p><strong>3. KKT Complementary Slackness (Sparsity Theorem):</strong> $\\alpha_i [y_i(\\mathbf{w}^T \\mathbf{x}_i + b) - 1 + \\xi_i] = 0$. For points strictly outside the margin, $\\alpha_i = 0$, meaning they have zero influence on the decision boundary. Only points with $\\alpha_i > 0$ are Support Vectors!</p>
        <p><strong>4. Penalty $C$ Trade-off:</strong> Large $C \\implies$ hard margin, low bias, high variance (overfitting risk). Small $C \\implies$ soft margin, wide corridor, high bias, low variance (noise tolerant).</p>
      `
    },
    {
      keywords: ["rbf", "gaussian kernel", "kernel trick", "gamma", "svm kernel"],
      title: "SVM Kernel Trick & Tuning RBF Gaussian Parameter Gamma",
      topic: "Non-Linear Geometry (Classical ML)",
      formula: "K(\\mathbf{x}_i, \\mathbf{x}_j) = \\exp\\left(-\\gamma \\|\\mathbf{x}_i - \\mathbf{x}_j\\|^2\\right), \\quad \\gamma = \\frac{1}{2\\sigma^2}",
      answer: `
        <p>The Kernel Trick replaces explicit non-linear feature maps $\\phi(\\mathbf{x})$ with an inner product evaluation $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\langle \\phi(\\mathbf{x}_i), \\phi(\\mathbf{x}_j) \\rangle$ directly in the original space, avoiding high-dimensional feature computation.</p>
        <p><strong>Tuning Gaussian $\\gamma$:</strong></p>
        <ul>
          <li><strong>High $\\gamma$ (tiny Gaussian radius $\\sigma$):</strong> Each training point creates a sharp, narrow Gaussian peak. The decision boundary twists into isolated circular islands around individual points $\\implies$ <strong>Severe Overfitting / High Variance</strong>.</li>
          <li><strong>Low $\\gamma$ (large Gaussian radius $\\sigma$):</strong> Broad, overlapping Gaussian bells. The decision boundary becomes smooth and nearly linear $\\implies$ <strong>High Bias / Underfitting</strong>.</li>
        </ul>
      `
    },
    {
      keywords: ["pca", "lda", "fisher", "rayleigh", "between class", "within class", "leakage", "prs q1e"],
      title: "Unsupervised PCA vs Supervised Fisher LDA & The Target Leakage Trap",
      topic: "Dimensionality Reduction (Classical ML)",
      formula: "J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}} \\implies S_W^{-1} S_B \\mathbf{w} = \\lambda \\mathbf{w}",
      answer: `
        <p><strong>1. Objective Comparison:</strong></p>
        <ul>
          <li><strong>PCA (Unsupervised):</strong> Finds orthogonal axes that maximize total feature variance $\\mathbf{w}^T \\Sigma \\mathbf{w}$ without knowledge of target classes. Solves $\\Sigma \\mathbf{w} = \\lambda \\mathbf{w}$. Number of components up to feature dimension $D$.</li>
          <li><strong>Fisher LDA (Supervised):</strong> Maximizes the Rayleigh quotient of between-class scatter $S_B$ to within-class scatter $S_W$. Solves $S_W^{-1} S_B \\mathbf{w} = \\lambda \\mathbf{w}$. Maximum number of non-zero discriminant components is strictly $\\min(C - 1, D)$ where $C$ is class count.</li>
        </ul>
        <p><strong>2. PRS Q1e Target Leakage Trap:</strong> In the Nov 2026 PRS exam, the supervisor included target column <code>Revenue</code> in the PCA matrix (loadings 0.221 in PC1 and 0.534 in PC4). This is fatal because at test/deployment time, <code>Revenue</code> is unknown! The projection cannot be computed. Also, nominal categories (Browser, OS) must be one-hot encoded, not fed as continuous integers.</p>
      `
    },
    {
      keywords: ["k-means", "gmm", "expectation maximization", "dbscan", "ward", "clustering", "unsupervised"],
      title: "Clustering Algorithms: K-Means WCSS, GMM Expectation-Maximization & DBSCAN",
      topic: "Unsupervised Clustering (Classical ML)",
      formula: "\\text{E-Step: } \\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_k, \\boldsymbol{\\Sigma}_k)}{\\sum_j \\pi_j \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_j, \\boldsymbol{\\Sigma}_j)}, \\quad \\text{Ward Linkage: } \\Delta \\text{ESS} = \\frac{n_A n_B}{n_A + n_B} \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2",
      answer: `
        <p><strong>1. K-Means:</strong> Lloyd's algorithm minimizes WCSS $\\sum \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_k\\|^2$. Alternates between assigning points to nearest centroids and recomputing cluster means. Monotonically converges in finite steps. Assumes spherical clusters of equal size.</p>
        <p><strong>2. GMM & EM Algorithm:</strong> Soft-clustering generalization of K-Means. E-step computes continuous posterior responsibility $\\gamma_{ik} \\in [0, 1]$. M-step updates weights $\\pi_k = N_k / N$, means $\\boldsymbol{\\mu}_k = \\frac{1}{N_k}\\sum \\gamma_{ik} \\mathbf{x}_i$, and full covariance matrices $\\boldsymbol{\\Sigma}_k$. Handles elongated elliptical clusters.</p>
        <p><strong>3. DBSCAN:</strong> Replaces centroids with density connectivity (parameters $\\epsilon, \\text{MinPts}$). Discovers arbitrary non-convex geometries (rings, spirals) and isolates noise into label $-1$.</p>
        <p><strong>4. Ward's Linkage:</strong> Merges clusters that cause the minimum increase in total within-cluster variance $\\Delta \\text{ESS} = \\frac{n_A n_B}{n_A + n_B} \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2$.</p>
      `
    },
    {
      keywords: ["nyquist", "sampling", "aliasing", "folding", "ghost frequency", "filter", "adc"],
      title: "Nyquist Sampling Theorem, Aliasing & Anti-Aliasing Filter Placement",
      topic: "Sensory Signals (Signal Processing)",
      formula: "f_s > 2 f_{\\max}, \\quad f_N = \\frac{f_s}{2}, \\quad f_{\\text{alias}} = |f_{\\text{signal}} - k \\cdot f_s|",
      answer: `
        <p>The Nyquist-Shannon Sampling Theorem states that a continuous-time signal must be sampled at a rate $f_s$ strictly greater than twice its highest frequency component ($2 f_{\\max}$) to be perfectly reconstructed.</p>
        <p><strong>What is Aliasing?</strong> If $f_s \\le 2 f_{\\max}$, high-frequency components 'fold' across the Nyquist frequency $f_N = f_s / 2$ and disguise themselves as lower-frequency 'ghost' signals in the sampled data.</p>
        <p><strong>Filter Placement:</strong> The analog low-pass Anti-Aliasing filter MUST be placed <strong>BEFORE the Analog-to-Digital Converter (ADC)</strong>. Once an aliased digital sample enters memory, the high and low frequencies have collided into the same digital numbers — no digital filter on earth can separate them!</p>
      `
    },
    {
      keywords: ["arpls", "baseline", "drift", "rubber band", "penalized least squares"],
      title: "arPLS (Asymmetric Reweighted Penalized Least Squares) Baseline Correction",
      topic: "Sensory Signals (Signal Processing)",
      formula: "\\min_{\\mathbf{z}} \\sum_{i=1}^N w_i (x_i - z_i)^2 + \\lambda \\sum_{i=2}^{N-1} (z_{i-1} - 2z_i + z_{i+1})^2, \\quad w_i = \\frac{1}{1 + \\exp\\left( \\frac{2(x_i - z_i)}{d} \\right)}",
      answer: `
        <p>Sensory signals (spectrograms, ECG, Raman spectroscopy) suffer from baseline drift caused by temperature, patient movement, or sensor decay. Standard polynomial curve fitting is symmetrically pulled upwards by high signal peaks, distorting true peak amplitudes.</p>
        <p><strong>The Rubber Band Trick:</strong> arPLS applies asymmetric weights: if $x_i < z_i$ (baseline valley), $w_i \\approx 1.0$; if $x_i > z_i$ (signal peak), $w_i \\approx 0.0$. The fitted curve behaves like a rubber band pulled taut underneath the peaks, eliminating drift without flattening signal peaks!</p>
      `
    },
    {
      keywords: ["dtw", "dynamic time warping", "sakoe-chiba", "alignment", "euclidean distance"],
      title: "Why use Dynamic Time Warping (DTW) instead of Euclidean Distance?",
      topic: "Signal Alignment (Signal Processing)",
      formula: "D(i, j) = d(i, j) + \\min\\left(D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1)\\right)",
      answer: `
        <p>Euclidean distance assumes a strict 1-to-1 linear correspondence between time steps ($t_1 \\leftrightarrow t_1, t_2 \\leftrightarrow t_2$). It requires both sequences to have identical lengths and collapses if one signal is slightly stretched, compressed, or phase-shifted (e.g. someone walking at 4 km/h vs 5 km/h).</p>
        <p><strong>DTW</strong> non-linearly warps the time axis by matching 1-to-many or many-to-1 points to find the minimal cumulative warping path through dynamic programming. The <strong>Sakoe-Chiba band</strong> ($|i - j| \\le w$) constrains the search window to prevent unrealistic pathological alignments (e.g. mapping 1 millisecond of sound to 5 seconds of silence) and slashes computational complexity from $O(N M)$ to $O(N w)$.</p>
      `
    },
    {
      keywords: ["stft", "wavelet", "haar", "heisenberg", "gabor", "uncertainty", "subbands", "parseval"],
      title: "STFT Heisenberg-Gabor Uncertainty vs 2D Haar Wavelet Decomposition",
      topic: "Time-Frequency Transforms (Signal Processing)",
      formula: "\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}, \\quad \\sum x_{ij}^2 = LL^2 + LH^2 + HL^2 + HH^2",
      answer: `
        <p><strong>1. Fourier Paradox & Heisenberg-Gabor Uncertainty:</strong> Standard FFT integrates over all time, offering zero time localization. STFT adds windowing, but is bounded by the Heisenberg-Gabor limit $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$. Narrow windows provide sharp time resolution but blurry frequency resolution; wide windows provide sharp frequency resolution but blurry time onset.</p>
        <p><strong>2. Discrete Wavelet Transform (DWT):</strong> Overcomes STFT's fixed window using dyadic scaling (narrow time windows for high frequencies, wide time windows for low frequencies).</p>
        <p><strong>3. 2D Haar Wavelet Subbands:</strong></p>
        <ul>
          <li><strong>LL (Low-Low):</strong> Global structural approximation containing $>80-90\\%$ of total signal energy.</li>
          <li><strong>LH (Low-High):</strong> Horizontal detail capturing vertical edges.</li>
          <li><strong>HL (High-Low):</strong> Vertical detail capturing horizontal edges.</li>
          <li><strong>HH (High-High):</strong> Diagonal detail, corners, and high-frequency noise.</li>
        </ul>
        <p><strong>4. Parseval's Theorem:</strong> Energy in spatial domain equals energy in wavelet subbands (strictly conserved: $\\sum x^2 = LL^2 + LH^2 + HL^2 + HH^2$).</p>
      `
    },
    {
      keywords: ["cnn", "parameters", "parameter counting", "flatten", "global average pooling", "gap", "receptive field", "dilated", "resnet"],
      title: "CNN Design: Receptive Fields, Dilated Convs, ResNet Shortcuts & GAP Redesign",
      topic: "Computer Vision & Sizing (Deep Learning)",
      formula: "O = \\left\\lfloor \\frac{W - K + 2P}{S} \\right\\rfloor + 1, \\quad RF_l = RF_{l-1} + (K_l - 1) \\cdot J_{l-1}, \\quad \\mathbf{y} = \\mathcal{F}(\\mathbf{x}) + \\mathbf{x}",
      answer: `
        <p><strong>1. Conv2D Parameter Counting:</strong> $(K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}$. Dense layer: $(N_{\\text{in}} + 1) \\times N_{\\text{out}}$. Pooling has <strong>0 parameters</strong>.</p>
        <p><strong>2. Receptive Field & Dilated Convolutions:</strong> Stacking two $3 \\times 3$ convs gives a receptive field of $5 \\times 5$ with $2 \\times 3^2 = 18$ parameters vs $5^2 = 25$ for a single $5 \\times 5$ conv. Dilated convs ($K' = K + (K-1)(d-1)$) expand receptive field exponentially without adding a single parameter.</p>
        <p><strong>3. ResNet Residual Shortcut:</strong> $\\mathbf{y} = \\mathcal{F}(\\mathbf{x}) + \\mathbf{x}$. Gradient $\\frac{\\partial \\mathcal{E}}{\\partial \\mathbf{x}} = \\frac{\\partial \\mathcal{E}}{\\partial \\mathbf{y}} (\\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}} + \\mathbf{I})$. The additive identity term $\\mathbf{I}$ allows gradients to flow directly back across 100+ layers without vanishing.</p>
        <p><strong>4. PRS Q2a Redesign:</strong> Flattening $7 \\times 7 \\times 192 = 9408$ into Dense(256) took 2.41M weights (93.4% of network). Replacing Flatten with <code>GlobalAveragePooling2D</code> collapses spatial size to 192 with 0 weights, cutting Dense(256) to 49k weights (saving 97.3% total parameters)!</p>
      `
    },
    {
      keywords: ["rnn", "lstm", "bptt", "spectral radius", "cec", "constant error carousel", "forget gate"],
      title: "RNN Vanishing Gradients (Spectral Radius) & LSTM Constant Error Carousel",
      topic: "Sequential Deep Learning (Deep Learning)",
      formula: "\\frac{\\partial h_T}{\\partial h_t} = \\prod_{k=t+1}^T \\text{diag}(1 - \\tanh^2) W_{hh}^T, \\quad \\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t \\approx 1",
      answer: `
        <p><strong>1. Vanilla RNN BPTT & Spectral Radius:</strong> Backpropagation Through Time multiplies recurrent Jacobian $\\prod W_{hh}^T$. If the spectral radius (largest absolute eigenvalue) $\\rho(W_{hh}) < 1$, gradients decay exponentially to 0 as $T - t \\to \\infty$ (vanishing gradient). If $\\rho(W_{hh}) > 1$, gradients explode to $\\pm \\infty$ (exploding gradient, clipped via gradient clipping).</p>
        <p><strong>2. LSTM Constant Error Carousel (CEC):</strong> An LSTM maintains an additive cell state $\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t$. The derivative is $\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t$. When the network learns to set forget gate $\\mathbf{f}_t \\approx 1$, the gradient passes backward across hundreds of time steps with <strong>zero exponential attenuation</strong>!</p>
        <p><strong>3. Forget Gate Role:</strong> At regime shifts or sequence resets, setting $\\mathbf{f}_t \\approx 0$ clears obsolete historical memory.</p>
      `
    },
    {
      keywords: ["autoencoder", "anomaly", "vae", "elbo", "reparameterization", "variational"],
      title: "Anomaly Autoencoders (3-Sigma Rule) & Generative VAE Reparameterization",
      topic: "Latent Representations (Deep Learning)",
      formula: "e(\\mathbf{x}) = \\frac{1}{D}\\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|^2 > \\tau, \\quad \\mathbf{z} = \\boldsymbol{\\mu} + \\boldsymbol{\\sigma} \\odot \\boldsymbol{\\epsilon}, \\quad \\boldsymbol{\\epsilon} \\sim \\mathcal{N}(\\mathbf{0}, \\mathbf{I})",
      answer: `
        <p><strong>1. Unsupervised Anomaly Autoencoder (PRS Q2c):</strong> With extreme class imbalance (3,000 normal vs 2 failures), supervised classifiers achieve 99.93% accuracy by predicting 'Normal' all the time, missing all failures! We train an Autoencoder exclusively on normal data. The bottleneck learns the normal manifold. When an anomaly enters, reconstruction error $e(\\mathbf{x})$ spikes past threshold $\\tau = \\mu_e + 3\\sigma_e$.</p>
        <p><strong>2. Variational Autoencoder (VAE) ELBO:</strong> Constrains latent space to standard normal prior: $\\mathcal{L} = \\mathbb{E}[\\log p(\\mathbf{x}|\\mathbf{z})] - D_{\\text{KL}}(q(\\mathbf{z}|\\mathbf{x}) \\parallel p(\\mathbf{z}))$. Closed-form Gaussian KL: $-\\frac{1}{2}\\sum (1 + \\ln(\\sigma^2) - \\mu^2 - \\sigma^2)$.</p>
        <p><strong>3. Reparameterization Trick:</strong> Direct sampling $\\mathbf{z} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\boldsymbol{\\sigma}^2)$ is non-differentiable. By setting $\\mathbf{z} = \\boldsymbol{\\mu} + \\boldsymbol{\\sigma} \\odot \\boldsymbol{\\epsilon}$ where $\\boldsymbol{\\epsilon} \\sim \\mathcal{N}(\\mathbf{0}, \\mathbf{I})$, stochasticity is isolated into an external leaf node, allowing deterministic gradients to flow end-to-end to the encoder!</p>
      `
    },
    {
      keywords: ["ensemble", "bagging", "random forest", "variance reduction", "condorcet", "stacking", "oof"],
      title: "Ensemble Theory: Condorcet's Theorem, Bagging Variance Reduction & Stacking OOF",
      topic: "Ensemble Methods (Reasoning & Crucible)",
      formula: "\\text{Var}(\\bar{X}) = \\rho \\sigma^2 + \\frac{1 - \\rho}{M} \\sigma^2, \\quad \\lim_{M \\to \\infty} \\text{Var} = \\rho \\sigma^2",
      answer: `
        <p><strong>1. Condorcet's Jury Theorem:</strong> For $M$ independent classifiers each with accuracy $p > 0.5$, majority voting probability approaches $1.0$ as $M \\to \\infty$.</p>
        <p><strong>2. Bagging Variance Reduction:</strong> Averaging $M$ trees reduces variance according to $\\rho \\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2$. As $M \\to \\infty$, variance hits the hard asymptote $\\rho \\sigma^2$. In standard bagging, trees are correlated ($\\rho \\approx 0.8$).</p>
        <p><strong>3. Random Forest De-correlation:</strong> By randomly subsampling $\\sqrt{p}$ features at each split, Random Forest de-correlates the trees (driving $\\rho \\to 0.2$), lowering the variance floor and slashing overall prediction error!</p>
        <p><strong>4. Stacking & Out-of-Fold (OOF):</strong> Stacking combines heterogeneous models (SVM + LightGBM + MLP). To prevent target leakage into the meta-learner, base model predictions MUST be generated strictly using Out-of-Fold (OOF) cross-validation.</p>
      `
    },
    {
      keywords: ["multimodal", "sensor fusion", "rvm", "early fusion", "late fusion", "hybrid fusion"],
      title: "Multimodal Sensor Fusion: Early vs Late vs Hybrid & The RVM Case Study",
      topic: "Intelligent Sensing Systems (ISSM)",
      formula: "\\text{Sensors: } \\{\\text{Inductive, Barcode, Weight, Camera}\\} \\xrightarrow{\\text{Hybrid Fusion}} \\text{Material Class}",
      answer: `
        <p><strong>1. Fusion Architecture Taxonomy:</strong></p>
        <ul>
          <li><strong>Early Fusion (Data-Level):</strong> Concatenates raw sensor features. Captures low-level cross-sensor synergies, but causes dimensional explosion, timing jitter, and crashes completely if one sensor drops.</li>
          <li><strong>Late Fusion (Decision-Level):</strong> Modalities are processed independently; class scores are fused via soft voting or Bayesian consensus. Robust to dropouts, but blind to subtle cross-modal physical interactions.</li>
          <li><strong>Hybrid Fusion:</strong> Combines deterministic rule-based safety pre-filters with mid-level deep latent feature concatenation.</li>
        </ul>
        <p><strong>2. Reverse Vending Machine (RVM) Case Study:</strong> (1) Inductive proximity sensor provides deterministic override: high eddy current voltage immediately asserts <code>Material = Aluminum Can</code>; (2) Load cell checks mass ($m > 35\\text{g}$ rejects container for liquid contamination); (3) RGB camera with GlobalAveragePooling classifies container geometry; (4) Barcode scanner queries deposit database to issue deposit refund.</p>
      `
    },
    {
      keywords: ["adaboost", "sample weights", "alpha", "exponential loss"],
      title: "AdaBoost Weak Learner Weight & Sample Reweighting Calculus",
      topic: "Ensemble Methods (Reasoning & Crucible)",
      formula: "\\alpha_t = \\frac{1}{2}\\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right), \\quad \\frac{w_{\\text{mis}}}{w_{\\text{corr}}} = \\exp(2\\alpha_t) = \\frac{1 - \\epsilon_t}{\\epsilon_t}",
      answer: `
        <p>AdaBoost minimizes exponential loss $\\mathcal{L} = \\sum \\exp(-y_i H(\\mathbf{x}_i))$. For weak learner $h_t$ with weighted error $\\epsilon_t$:</p>
        <ul>
          <li>Voting weight is $\\alpha_t = \\frac{1}{2}\\ln(\\frac{1-\\epsilon_t}{\\epsilon_t})$. If $\\epsilon_t = 0.20$, $\\alpha_t = \\frac{1}{2}\\ln(4) = \\ln(2) \\approx 0.6931$.</li>
          <li>Sample weight update: correct samples multiplied by $\\exp(-\\alpha_t) = 0.50$; misclassified samples multiplied by $\\exp(+\\alpha_t) = 2.00$.</li>
          <li>The relative weight multiplier ratio is $\\exp(2\\alpha_t) = 4.00$. Subsequent weak learners are forced to focus on the hard borderline mistakes!</li>
        </ul>
      `
    },
    {
      keywords: ["forward chaining", "backward chaining", "conflict resolution", "rules", "daemons", "frames"],
      title: "Forward vs Backward Chaining & Frame Daemons (if-needed vs if-added)",
      topic: "Rule Engines (Reasoning Systems)",
      formula: "D = D_{\\text{cal}} \\times \\left( \\frac{d_{\\text{cal}}}{d_{\\text{obs}}} \\right) = 20 \\times \\left( \\frac{120}{d_{\\text{obs}}} \\right)",
      answer: `
        <p><strong>1. Forward Chaining (Data-Driven / Bottom-Up):</strong> Starts with known facts in Working Memory, fires rules whose antecedents match, asserts new conclusions, and repeats. Ideal for real-time monitoring and ergonomics posture alerts (IRS Q1).</p>
        <p><strong>2. Backward Chaining (Goal-Driven / Top-Down):</strong> Starts with a hypothesis (e.g. 'Patient has Glaucoma') and works backwards to see if available facts support it, interactively prompting for missing tests. Ideal for structured diagnosis.</p>
        <p><strong>3. Frame Daemons:</strong></p>
        <ul>
          <li><strong><code>if-needed</code> (Lazy Evaluation):</strong> Triggers only when a slot's value is accessed but empty. Computes value on demand (e.g. pinhole camera distance $D = 20 \\times 120 / d_{\\text{obs}}$).</li>
          <li><strong><code>if-added</code> (Eager Trigger):</strong> Triggers immediately when new data enters a slot (e.g. checks if $D \\notin [18, 24]$ inches and fires posture alert).</li>
        </ul>
      `
    }
  ],

  // AI Engine State (Default: Free Cloud LLM - No API Key Needed)
  engine: (typeof localStorage !== 'undefined' && localStorage.getItem('iss_qa_engine')) || 'free_cloud',
  freeModel: (typeof localStorage !== 'undefined' && localStorage.getItem('iss_qa_model')) || 'openai',
  ollamaModel: (typeof localStorage !== 'undefined' && localStorage.getItem('iss_ollama_model')) || 'llama3',
  ollamaHost: 'http://localhost:11434',

  freeModelLabels: {
    'openai': 'GPT-4o Mini (OpenAI)',
    'deepseek': 'DeepSeek R1 / V3',
    'llama': 'Llama 3.3 70B (Meta)',
    'mistral': 'Mistral Large',
    'qwen': 'Qwen 2.5 Coder 32B'
  },

  setEngine: function(eng, scope) {
    this.engine = eng;
    if (typeof localStorage !== 'undefined') localStorage.setItem('iss_qa_engine', eng);
    this.updateEngineUI(scope || 'modal');
  },

  setFreeModel: function(model, scope) {
    this.freeModel = model;
    if (typeof localStorage !== 'undefined') localStorage.setItem('iss_qa_model', model);
  },

  setOllamaModel: function(model, scope) {
    this.ollamaModel = model;
    if (typeof localStorage !== 'undefined') localStorage.setItem('iss_ollama_model', model);
  },

  updateEngineUI: function(scope) {
    const prefix = scope === 'inline' ? 'inline-' : 'modal-';
    const tabs = ['free_cloud', 'ollama', 'offline'];
    tabs.forEach(t => {
      const btn = document.getElementById(`${prefix}btn-${t}`);
      if (btn) {
        if (this.engine === t) {
          btn.className = 'btn btn-sm btn-primary';
        } else {
          btn.className = 'btn btn-sm btn-outline';
        }
      }
    });

    const cloudSettings = document.getElementById(`${prefix}free-cloud-settings`);
    const ollamaSettings = document.getElementById(`${prefix}ollama-settings`);
    if (cloudSettings) cloudSettings.style.display = this.engine === 'free_cloud' ? 'flex' : 'none';
    if (ollamaSettings) ollamaSettings.style.display = this.engine === 'ollama' ? 'flex' : 'none';
  },

  parseMarkdown: function(md) {
    if (!md) return '';
    let html = md;

    // Code blocks with syntax badge and copy button
    html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (m, lang, code) => {
      return `<div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-color); border-radius: 8px; margin: 12px 0; overflow: hidden;">
        <div style="background: rgba(255,255,255,0.05); padding: 4px 12px; font-size: 0.72rem; color: var(--text-muted); font-family: monospace; display: flex; justify-content: space-between;">
          <span>${lang || 'code'}</span>
          <span style="cursor: pointer; color: #38bdf8;" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.innerText); alert('Code block copied!');">Copy</span>
        </div>
        <pre style="margin: 0; padding: 12px; overflow-x: auto; font-size: 0.82rem; font-family: var(--font-mono, monospace); line-height: 1.5; color: #e2e8f0;"><code>${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
      </div>`;
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code style="background: rgba(255, 255, 255, 0.08); padding: 2px 6px; border-radius: 4px; font-size: 0.85em; font-family: var(--font-mono, monospace); color: #38bdf8;">$1</code>');

    // Headers
    html = html.replace(/^#### (.*$)/gim, '<h5 style="color: #38bdf8; margin: 12px 0 4px 0; font-size: 0.92rem; font-weight: 700;">$1</h5>');
    html = html.replace(/^### (.*$)/gim, '<h4 style="color: #38bdf8; margin: 14px 0 6px 0; font-size: 1.02rem; font-weight: 700;">$1</h4>');
    html = html.replace(/^## (.*$)/gim, '<h3 style="color: var(--text-primary); margin: 16px 0 8px 0; font-size: 1.12rem; font-weight: 800; border-bottom: 1px solid var(--border-color); padding-bottom: 4px;">$1</h3>');
    html = html.replace(/^# (.*$)/gim, '<h2 style="color: var(--text-primary); margin: 18px 0 10px 0; font-size: 1.25rem; font-weight: 800;">$1</h2>');

    // Bold & Italic
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: var(--text-primary);">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em style="color: var(--text-secondary);">$1</em>');

    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote style="border-left: 3px solid #38bdf8; padding-left: 10px; margin: 8px 0; color: var(--text-secondary); font-style: italic;">$1</blockquote>');

    // Unordered lists
    html = html.replace(/^\s*[-*]\s+(.*$)/gim, '<li style="margin-bottom: 5px;">$1</li>');
    html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul style="margin: 8px 0 12px 20px; padding-left: 0; color: var(--text-primary); font-size: 0.88rem; line-height: 1.6;">$&</ul>');

    // Tables
    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '';
    const newLines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHtml = '<table class="styled-table" style="width: 100%; margin: 12px 0; font-size: 0.84rem;">';
        }
        if (line.includes('---')) continue;
        const cells = line.split('|').slice(1, -1).map(c => c.trim());
        const isHeader = !tableHtml.includes('<tbody>') && !tableHtml.includes('<tr>');
        if (isHeader) {
          tableHtml += '<thead><tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
        } else {
          tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
        }
      } else {
        if (inTable) {
          tableHtml += '</tbody></table>';
          newLines.push(tableHtml);
          inTable = false;
          tableHtml = '';
        }
        newLines.push(lines[i]);
      }
    }
    if (inTable) {
      tableHtml += '</tbody></table>';
      newLines.push(tableHtml);
    }
    html = newLines.join('\n');

    // Paragraphs
    html = html.split(/\n\n+/).map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<') && (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<div') || p.startsWith('<table') || p.startsWith('<pre') || p.startsWith('<blockquote'))) {
        return p;
      }
      return `<p style="margin-bottom: 8px; line-height: 1.65; color: var(--text-primary);">${p}</p>`;
    }).join('\n');

    return html;
  },

  init: function() {
    this.injectGlobalWidget();
  },

  renderInline: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = `
      <div class="qa-inline-section mt-5" style="border-top: 2px dashed var(--border-color); padding-top: 25px;">
        <div class="lesson-card" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08)); border-left: 4px solid var(--accent-primary); border-radius: 12px; padding: 22px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge-tech" style="background: var(--accent-primary); color: #fff;">
                <i data-lucide="help-circle" style="width: 14px; height: 14px; vertical-align: middle;"></i> Exam Doubt Resolver
              </span>
              <h3 style="margin: 0; font-size: 1.15rem; color: var(--text-primary);">Have a Question or Exam Doubt on This Topic?</h3>
            </div>
            <span class="badge-tech" style="font-size: 0.72rem; background: rgba(16, 185, 129, 0.15); color: #10b981;">
              ✨ Free AI Models Included • No API Key Needed
            </span>
          </div>

          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 14px;">
            Ask any question or choose an AI engine below for an instant mathematical explanation, formula derivation, and NUS-ISS scoring rubric tips.
          </p>

          <!-- Engine Selector Bar -->
          <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px 14px; margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <div style="display: flex; gap: 6px;">
                <button class="btn btn-sm ${this.engine === 'free_cloud' ? 'btn-primary' : 'btn-outline'}" id="inline-btn-free_cloud" onclick="QAAssistant.setEngine('free_cloud', 'inline')" style="font-size: 0.76rem; padding: 3px 10px;">
                  🌐 Free Cloud AI (Pollinations)
                </button>
                <button class="btn btn-sm ${this.engine === 'ollama' ? 'btn-primary' : 'btn-outline'}" id="inline-btn-ollama" onclick="QAAssistant.setEngine('ollama', 'inline')" style="font-size: 0.76rem; padding: 3px 10px;">
                  💻 Localhost Ollama
                </button>
                <button class="btn btn-sm ${this.engine === 'offline' ? 'btn-primary' : 'btn-outline'}" id="inline-btn-offline" onclick="QAAssistant.setEngine('offline', 'inline')" style="font-size: 0.76rem; padding: 3px 10px;">
                  📚 Syllabus KB (Instant)
                </button>
              </div>

              <!-- Inline Cloud Model Settings -->
              <div id="inline-free-cloud-settings" style="display: ${this.engine === 'free_cloud' ? 'flex' : 'none'}; align-items: center; gap: 6px;">
                <label style="font-size: 0.76rem; color: var(--text-muted);">Model:</label>
                <select id="inline-free-model-select" onchange="QAAssistant.setFreeModel(this.value, 'inline')" style="background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 6px; padding: 3px 8px; font-size: 0.76rem;">
                  <option value="openai" ${this.freeModel === 'openai' ? 'selected' : ''}>GPT-4o Mini (OpenAI) [Free]</option>
                  <option value="deepseek" ${this.freeModel === 'deepseek' ? 'selected' : ''}>DeepSeek R1 / V3 [Free]</option>
                  <option value="llama" ${this.freeModel === 'llama' ? 'selected' : ''}>Llama 3.3 70B (Meta) [Free]</option>
                  <option value="mistral" ${this.freeModel === 'mistral' ? 'selected' : ''}>Mistral Large [Free]</option>
                  <option value="qwen" ${this.freeModel === 'qwen' ? 'selected' : ''}>Qwen 2.5 Coder [Free]</option>
                </select>
              </div>

              <!-- Inline Ollama Settings -->
              <div id="inline-ollama-settings" style="display: ${this.engine === 'ollama' ? 'flex' : 'none'}; align-items: center; gap: 6px;">
                <label style="font-size: 0.76rem; color: var(--text-muted);">Model:</label>
                <input type="text" id="inline-ollama-model-input" value="${this.ollamaModel || 'llama3'}" onchange="QAAssistant.setOllamaModel(this.value, 'inline')" placeholder="llama3" style="width: 110px; background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 6px; padding: 3px 8px; font-size: 0.76rem;">
              </div>
            </div>
          </div>

          <!-- Query Input -->
          <div style="display: flex; gap: 10px; margin-bottom: 16px;">
            <div style="position: relative; flex: 1;">
              <input type="text" id="inline-qa-input" class="form-control" placeholder="Ask anything (e.g. 'SVM Lagrangian dual & KKT', 'CNN receptive field & GAP', 'LSTM error carousel', 'GMM EM', 'VAE reparameterization')..." style="width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-primary); font-size: 0.9rem;" onkeydown="if(event.key==='Enter') QAAssistant.handleInlineQuery();">
            </div>
            <button class="btn btn-primary" onclick="QAAssistant.handleInlineQuery()" style="display: flex; align-items: center; gap: 6px; padding: 0 18px;">
              <i data-lucide="send"></i> Ask AI
            </button>
          </div>

          <!-- Quick Suggested Doubts -->
          <div class="quick-doubts mb-3">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">
              Popular Exam Doubts:
            </span>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('svm lagrangian dual kkt slack')" style="font-size: 0.78rem;">📌 SVM Dual & KKT</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('cnn receptive field dilated gap flatten parameters')" style="font-size: 0.78rem;">📌 CNN Params & GAP</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('rnn lstm bptt spectral radius constant error carousel')" style="font-size: 0.78rem;">📌 LSTM Error Carousel</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('pca lda fisher rayleigh target leakage prs q1e')" style="font-size: 0.78rem;">📌 PCA vs LDA Leakage</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('gmm expectation maximization k-means dbscan ward')" style="font-size: 0.78rem;">📌 GMM-EM Clustering</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('autoencoder anomaly 3-sigma vae elbo reparameterization')" style="font-size: 0.78rem;">📌 VAE Reparameterization</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('stft wavelet haar heisenberg uncertainty parseval')" style="font-size: 0.78rem;">📌 2D Haar Wavelets</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('ensemble bagging random forest variance reduction adaboost')" style="font-size: 0.78rem;">📌 Bagging vs RF Variance</button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('multimodal sensor fusion rvm early late hybrid')" style="font-size: 0.78rem;">📌 RVM Sensor Fusion</button>
            </div>
          </div>

          <!-- Answer Container -->
          <div id="inline-qa-answer" style="display: none; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color); padding: 18px; margin-top: 16px;">
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', html);
    if (window.lucide) window.lucide.createIcons();
  },

  handleInlineQuery: function() {
    const input = document.getElementById('inline-qa-input');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    this.respond(val, 'inline-qa-answer');
  },

  askPreset: function(query) {
    const input = document.getElementById('inline-qa-input');
    if (input) input.value = query;
    this.respond(query, 'inline-qa-answer');
  },

  respond: function(query, outputContainerId) {
    if (this.engine === 'free_cloud') {
      this.askFreeCloudLLM(query, outputContainerId);
    } else if (this.engine === 'ollama') {
      this.askOllama(query, outputContainerId);
    } else {
      this.respondOffline(query, outputContainerId);
    }
  },

  askFreeCloudLLM: async function(query, outputContainerId) {
    const container = document.getElementById(outputContainerId);
    if (!container) return;
    container.style.display = 'block';

    const modelKey = this.freeModel || 'openai';
    const modelLabel = this.freeModelLabels[modelKey] || modelKey;

    container.innerHTML = `
      <div style="padding: 24px 16px; text-align: center; color: var(--text-muted);">
        <div class="qa-spinner" style="margin-bottom: 12px;"></div>
        <div style="font-size: 0.9rem; color: #38bdf8; font-weight: 700;">Consulting Free AI Model: ${modelLabel}...</div>
        <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 4px;">Zero API keys required • Grounding in NUS-ISS Syllabus</div>
      </div>
    `;

    const systemPrompt = `You are a senior AI curriculum architect and NUS-ISS Graduate Examination Specialist for Pattern Recognition Systems (ISY5002) and Intelligent Reasoning Systems (ISY5001).
Answer the student's revision question with:
1. Rigorous, step-by-step mathematical reasoning using standard LaTeX formatting ($...$ for inline math and $$...$$ for standalone display formulas).
2. Precise algorithmic mechanics and boundary conditions.
3. Key trade-offs (e.g. Bias vs Variance, Overfitting, Computational Complexity, Parameter explosions).
4. NUS-ISS Open-Book Examination marking criteria and common student pitfalls.
Keep the answer direct, highly structured, well-formatted, and educational.`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      const res = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: query }
          ],
          model: modelKey,
          seed: Math.floor(Math.random() * 100000)
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();

      if (text.includes("Free limit reached") || text.includes("Please wait")) {
        // Fallback gracefully to offline syllabus KB with polite banner
        this.respondOffline(query, outputContainerId, `
          <div style="background: rgba(245, 158, 11, 0.12); border-left: 3px solid #f59e0b; padding: 10px 14px; border-radius: 6px; margin-bottom: 14px; font-size: 0.82rem; color: #f59e0b; line-height: 1.5;">
            <i data-lucide="clock" style="width: 14px; height: 14px; vertical-align: middle;"></i> <strong>Free Cloud AI Cooldown:</strong> The public free endpoint has a 30-second rate-limit window. Showing instant verified response from offline NUS-ISS Knowledge Base below:
          </div>
        `);
        return;
      }

      const parsedHtml = this.parseMarkdown(text);
      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge-tech" style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 0.76rem;">
              <i data-lucide="sparkles" style="width: 12px; height: 12px; vertical-align: middle;"></i> ${modelLabel} (Free LLM)
            </span>
            <span style="font-size: 0.74rem; color: var(--text-muted);">No API Key • Live Response</span>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.copyAnswer('${outputContainerId}')" style="font-size: 0.72rem; padding: 3px 8px;">
              <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy
            </button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.saveToNotebook('${query.replace(/'/g, "\\'")}')" style="font-size: 0.72rem; padding: 3px 8px;">
              ⭐ Save
            </button>
          </div>
        </div>
        <div class="qa-response-body" style="font-size: 0.9rem; line-height: 1.65; color: var(--text-primary);">
          ${parsedHtml}
        </div>
      `;

      if (window.lucide) window.lucide.createIcons();
      if (typeof window.renderLatex === 'function') window.renderLatex(container);

    } catch (err) {
      console.warn("Free cloud LLM fallback:", err);
      this.respondOffline(query, outputContainerId, `
        <div style="background: rgba(239, 68, 68, 0.12); border-left: 3px solid #ef4444; padding: 10px 14px; border-radius: 6px; margin-bottom: 14px; font-size: 0.82rem; color: #ef4444; line-height: 1.5;">
          <i data-lucide="wifi-off" style="width: 14px; height: 14px; vertical-align: middle;"></i> Could not reach external AI endpoint (${err.message || 'network timeout'}). Serving instant verified response from offline NUS-ISS Knowledge Base:
        </div>
      `);
    }
  },

  askOllama: async function(query, outputContainerId) {
    const container = document.getElementById(outputContainerId);
    if (!container) return;
    container.style.display = 'block';

    const model = this.ollamaModel || 'llama3';
    container.innerHTML = `
      <div style="padding: 24px 16px; text-align: center; color: var(--text-muted);">
        <div class="qa-spinner" style="margin-bottom: 12px; border-top-color: #10b981;"></div>
        <div style="font-size: 0.9rem; color: #10b981; font-weight: 700;">Connecting to Localhost Ollama (${model})...</div>
        <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 4px;">Zero latency • 100% Offline & Private • http://localhost:11434</div>
      </div>
    `;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const res = await fetch(`${this.ollamaHost}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: model,
          prompt: `System: You are an expert NUS-ISS Graduate Examination Tutor (Pattern Recognition Systems ISY5002 & Intelligent Reasoning Systems ISY5001). Answer concisely with step-by-step mathematical reasoning, formal LaTeX notation ($...$ and $$...$$), and exam marking advice.\n\nStudent Question: ${query}\n\nAnswer:`,
          stream: false
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      const parsedHtml = this.parseMarkdown(data.response || '');

      container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="badge-tech" style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 0.76rem;">
              <i data-lucide="cpu" style="width: 12px; height: 12px; vertical-align: middle;"></i> Ollama: ${model}
            </span>
            <span style="font-size: 0.74rem; color: var(--text-muted);">Local Machine • Private & Free</span>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.copyAnswer('${outputContainerId}')" style="font-size: 0.72rem; padding: 3px 8px;">
              <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy
            </button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.saveToNotebook('${query.replace(/'/g, "\\'")}')" style="font-size: 0.72rem; padding: 3px 8px;">
              ⭐ Save
            </button>
          </div>
        </div>
        <div class="qa-response-body" style="font-size: 0.9rem; line-height: 1.65; color: var(--text-primary);">
          ${parsedHtml}
        </div>
      `;

      if (window.lucide) window.lucide.createIcons();
      if (typeof window.renderLatex === 'function') window.renderLatex(container);

    } catch (err) {
      container.innerHTML = `
        <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 14px; margin-bottom: 12px;">
          <div style="color: #ef4444; font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="alert-circle" style="width: 16px; height: 16px;"></i> Ollama Connection Failed
          </div>
          <p style="font-size: 0.82rem; color: var(--text-primary); margin: 0 0 8px 0;">
            Could not reach Ollama at <code>http://localhost:11434</code>. To use local models without API keys:
          </p>
          <ol style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 10px 16px; padding: 0;">
            <li>Install Ollama from <a href="https://ollama.com" target="_blank" style="color: #38bdf8; text-decoration: underline;">ollama.com</a>.</li>
            <li>Run <code>ollama run ${model}</code> in your terminal.</li>
            <li>Enable CORS if needed: <code>OLLAMA_ORIGINS="*" ollama serve</code>.</li>
          </ol>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-sm btn-primary" onclick="QAAssistant.setEngine('free_cloud', 'modal'); QAAssistant.handleModalQuery();" style="font-size: 0.75rem;">
              Switch to Free Cloud AI
            </button>
            <button class="btn btn-sm btn-outline" onclick="QAAssistant.setEngine('offline', 'modal'); QAAssistant.handleModalQuery();" style="font-size: 0.75rem;">
              View Offline Syllabus Answer
            </button>
          </div>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  },

  respondOffline: function(query, outputContainerId, topBanner) {
    const container = document.getElementById(outputContainerId);
    if (!container) return;

    const qLower = query.toLowerCase();
    
    // Find best match in knowledge base
    let bestMatch = null;
    let maxHits = 0;

    this.knowledgeBase.forEach(item => {
      let hits = 0;
      item.keywords.forEach(kw => {
        if (qLower.includes(kw.toLowerCase())) hits++;
      });
      if (hits > maxHits) {
        maxHits = hits;
        bestMatch = item;
      }
    });

    let html = topBanner || '';

    if (bestMatch && maxHits > 0) {
      html += `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 12px;">
          <div>
            <span class="badge-tech" style="font-size: 0.75rem; background: rgba(59,130,246,0.15); color: #60a5fa;">${bestMatch.topic}</span>
            <h4 style="margin: 6px 0 0 0; color: var(--accent-primary); font-size: 1.05rem;">${bestMatch.title}</h4>
          </div>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.copyAnswer('${outputContainerId}')" style="font-size: 0.72rem; padding: 2px 8px;">
              <i data-lucide="copy" style="width: 12px; height: 12px;"></i> Copy
            </button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.saveToNotebook('${bestMatch.title.replace(/'/g, "\\'")}')" style="font-size: 0.72rem; padding: 2px 8px;">
              ⭐ Save Doubt
            </button>
          </div>
        </div>

        ${bestMatch.formula ? `
          <div style="background: rgba(0,0,0,0.25); border-radius: 6px; padding: 10px 14px; text-align: center; margin-bottom: 14px; font-size: 1.05rem; border: 1px solid rgba(255,255,255,0.05);">
            $${bestMatch.formula}$
          </div>
        ` : ''}

        <div class="qa-response-body" style="font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">
          ${bestMatch.answer}
        </div>
      `;
    } else {
      // Dynamic synthesis for unlisted query
      html += `
        <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 12px;">
          <span class="badge-tech" style="font-size: 0.75rem;">NUS ISS Masterclass Assistant</span>
          <h4 style="margin: 6px 0 0 0; color: var(--text-primary); font-size: 1.05rem;">Analysis of: "${query}"</h4>
        </div>
        <div class="qa-response-body" style="font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">
          <p>For the NUS ISS syllabus, here is the structured rubric breakdown for <strong>${query}</strong>:</p>
          <ul>
            <li><strong>Core Mathematical Principle:</strong> Formulate the problem precisely using the standard state, probabilistic, or neural representations discussed in lectures. Check boundary conditions and normalization requirements (e.g. probabilities sum to 1, loss functions are convex, heuristics are admissible).</li>
            <li><strong>Algorithm Execution:</strong> Show intermediate matrix states or search queue states step-by-step. Never skip intermediate arithmetic because examiners award method marks even if a minor arithmetic error occurs at the very end.</li>
            <li><strong>Examiner Justification:</strong> Explicitly mention trade-offs (e.g. Bias vs Variance, Overfitting vs Underfitting, Euclidean vs Non-linear DTW, High $C$ vs Low $C$ in SVM, Flatten parameter explosion vs GAP).</li>
          </ul>
          <p style="color: var(--text-secondary); font-size: 0.85rem;">Tip: You can also search specific topics like <em>"SVM KKT"</em>, <em>"CNN GAP"</em>, <em>"LSTM CEC"</em>, <em>"GMM EM"</em>, <em>"VAE reparameterization"</em>, or <em>"Bagging variance"</em> for detailed worked formulas, or switch to <strong>Free Cloud AI</strong> to query any live LLM model.</p>
        </div>
      `;
    }

    container.innerHTML = html;
    container.style.display = 'block';

    if (window.lucide) window.lucide.createIcons();
    if (typeof window.renderLatex === 'function') {
      window.renderLatex(container);
    }
  },

  copyAnswer: function(outputContainerId) {
    const el = document.getElementById(outputContainerId);
    if (!el) return;
    const body = el.querySelector('.qa-response-body') || el;
    navigator.clipboard.writeText(body.innerText).then(() => {
      alert("Answer copied to clipboard!");
    });
  },

  saveToNotebook: function(title) {
    let saved = JSON.parse(localStorage.getItem('iss_saved_doubts') || '[]');
    if (!saved.includes(title)) {
      saved.push(title);
      localStorage.setItem('iss_saved_doubts', JSON.stringify(saved));
      alert(`Saved to your Doubt Notebook: "${title}"`);
    } else {
      alert(`"${title}" is already in your Doubt Notebook.`);
    }
  },

  injectGlobalWidget: function() {
    if (document.getElementById('floating-qa-widget')) return;

    const widgetHtml = `
      <div id="floating-qa-widget" style="position: fixed; bottom: 24px; right: 24px; z-index: 9999;">
        <button id="qa-toggle-btn" class="btn btn-primary" onclick="QAAssistant.toggleModal()" style="border-radius: 50px; padding: 12px 20px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); display: flex; align-items: center; gap: 8px; font-weight: 600;">
          <i data-lucide="message-square" style="width: 18px; height: 18px;"></i>
          <span>Ask Study Question</span>
        </button>

        <!-- Floating Modal Drawer -->
        <div id="qa-modal" style="display: none; position: fixed; bottom: 80px; right: 24px; width: 490px; max-width: 92vw; max-height: 82vh; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow-y: auto; padding: 20px; z-index: 10000;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge-tech" style="background: var(--accent-primary); color: white;">AI Tutor</span>
              <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">Exam Doubt Solver</h3>
            </div>
            <button class="btn btn-sm btn-outline" onclick="QAAssistant.toggleModal()" style="padding: 4px 8px;">
              <i data-lucide="x"></i>
            </button>
          </div>

          <!-- Engine Switcher -->
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 10px 12px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Reasoning Engine:</span>
              <span class="badge-tech" style="font-size: 0.68rem; background: rgba(16, 185, 129, 0.15); color: #10b981;">
                ✨ No API Key Required
              </span>
            </div>
            <div style="display: flex; gap: 6px; margin-bottom: 8px;">
              <button class="btn btn-sm ${this.engine === 'free_cloud' ? 'btn-primary' : 'btn-outline'}" id="modal-btn-free_cloud" onclick="QAAssistant.setEngine('free_cloud', 'modal')" style="font-size: 0.74rem; padding: 3px 8px; flex: 1;">
                🌐 Free Cloud AI
              </button>
              <button class="btn btn-sm ${this.engine === 'ollama' ? 'btn-primary' : 'btn-outline'}" id="modal-btn-ollama" onclick="QAAssistant.setEngine('ollama', 'modal')" style="font-size: 0.74rem; padding: 3px 8px; flex: 1;">
                💻 Local Ollama
              </button>
              <button class="btn btn-sm ${this.engine === 'offline' ? 'btn-primary' : 'btn-outline'}" id="modal-btn-offline" onclick="QAAssistant.setEngine('offline', 'modal')" style="font-size: 0.74rem; padding: 3px 8px; flex: 1;">
                📚 Syllabus KB
              </button>
            </div>

            <!-- Modal Cloud Model Settings -->
            <div id="modal-free-cloud-settings" style="display: ${this.engine === 'free_cloud' ? 'flex' : 'none'}; align-items: center; justify-content: space-between; font-size: 0.76rem;">
              <span style="color: var(--text-secondary);">Select Open Model:</span>
              <select id="modal-free-model-select" onchange="QAAssistant.setFreeModel(this.value, 'modal')" style="background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 6px; padding: 3px 8px; font-size: 0.76rem;">
                <option value="openai" ${this.freeModel === 'openai' ? 'selected' : ''}>GPT-4o Mini (OpenAI) [Free]</option>
                <option value="deepseek" ${this.freeModel === 'deepseek' ? 'selected' : ''}>DeepSeek R1 / V3 [Free]</option>
                <option value="llama" ${this.freeModel === 'llama' ? 'selected' : ''}>Llama 3.3 70B (Meta) [Free]</option>
                <option value="mistral" ${this.freeModel === 'mistral' ? 'selected' : ''}>Mistral Large [Free]</option>
                <option value="qwen" ${this.freeModel === 'qwen' ? 'selected' : ''}>Qwen 2.5 Coder [Free]</option>
              </select>
            </div>

            <!-- Modal Ollama Settings -->
            <div id="modal-ollama-settings" style="display: ${this.engine === 'ollama' ? 'flex' : 'none'}; align-items: center; justify-content: space-between; font-size: 0.76rem;">
              <span style="color: var(--text-secondary);">Model Tag:</span>
              <input type="text" id="modal-ollama-model-input" value="${this.ollamaModel || 'llama3'}" onchange="QAAssistant.setOllamaModel(this.value, 'modal')" placeholder="llama3" style="width: 120px; background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); border-radius: 6px; padding: 3px 8px; font-size: 0.76rem;">
            </div>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px;">
            Need help with a formula derivation or scenario? Ask below for an instant syllabus-grounded explanation.
          </p>

          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <input type="text" id="modal-qa-input" class="form-control" placeholder="Ask your exam question..." style="width: 100%; padding: 10px 12px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.88rem;" onkeydown="if(event.key==='Enter') QAAssistant.handleModalQuery();">
            <button class="btn btn-primary btn-sm" onclick="QAAssistant.handleModalQuery()">
              <i data-lucide="arrow-right"></i>
            </button>
          </div>

          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('svm lagrangian dual kkt slack')" style="font-size: 0.72rem; padding: 3px 8px;">SVM Dual & KKT</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('cnn receptive field dilated gap flatten parameters')" style="font-size: 0.72rem; padding: 3px 8px;">CNN Params & GAP</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('rnn lstm bptt spectral radius constant error carousel')" style="font-size: 0.72rem; padding: 3px 8px;">LSTM Error Carousel</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('gmm expectation maximization k-means dbscan ward')" style="font-size: 0.72rem; padding: 3px 8px;">GMM-EM Clustering</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('autoencoder anomaly 3-sigma vae elbo reparameterization')" style="font-size: 0.72rem; padding: 3px 8px;">VAE Reparameterization</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('ensemble bagging random forest variance reduction adaboost')" style="font-size: 0.72rem; padding: 3px 8px;">Ensemble Variance</button>
          </div>

          <div id="modal-qa-answer" style="display: none; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; font-size: 0.88rem; line-height: 1.55;">
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHtml);
    if (window.lucide) window.lucide.createIcons();
  },

  toggleModal: function() {
    const modal = document.getElementById('qa-modal');
    if (!modal) return;
    const isHidden = modal.style.display === 'none';
    modal.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      setTimeout(() => {
        const inp = document.getElementById('modal-qa-input');
        if (inp) inp.focus();
      }, 50);
    }
  },

  handleModalQuery: function() {
    const input = document.getElementById('modal-qa-input');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    this.respond(val, 'modal-qa-answer');
  },

  askModalPreset: function(query) {
    const input = document.getElementById('modal-qa-input');
    if (input) input.value = query;
    this.respond(query, 'modal-qa-answer');
  }
};
