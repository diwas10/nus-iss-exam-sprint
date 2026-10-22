
// Manages Leak-Free Diagnostic Questions (74 items across 37 modules)
// and Interactive Mathematical Practice Exercises (37 items with tolerance checking)
// Integrates with MasteryTracker for Mistake Logging and Spaced Repetition

window.AssessmentEngine = {
  diagnostics: [
  {
    "id": "diag-d1m1-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-1",
    "q": "Why is MinMax scaling sensitive to outliers compared to Z-score or RobustScaler?",
    "options": [
      "It divides by the feature variance rather than the range.",
      "It computes (x - min) / (max - min) where extreme outliers stretch the denominator."
    ],
    "correctIndex": 1,
    "explanation": "In MinMax scaling, a single extreme outlier drastically increases the denominator (max - min), forcing all normal data points to be compressed into an extremely narrow band near 0."
  },
  {
    "id": "diag-d1m1-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-1",
    "q": "What is data leakage during k-fold cross-validation?",
    "options": [
      "Splitting the dataset into train and test folds with random seeds.",
      "Fitting a scaler or PCA on the entire dataset before splitting into cross-validation folds."
    ],
    "correctIndex": 1,
    "explanation": "Preprocessing transformations (scaling, imputation, dimensionality reduction) must be fit strictly on training folds only. Fitting on the entire dataset leaks statistical parameters (mean, variance, components) from validation folds into training."
  },
  {
    "id": "diag-d1m2-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-2",
    "q": "What happens in Naive Bayes if a feature value has zero occurrences in class C (count = 0)?",
    "options": [
      "The model automatically defaults to the class prior probability.",
      "The entire posterior product collapses to 0, completely wiping out all other feature evidence."
    ],
    "correctIndex": 1,
    "explanation": "Because Naive Bayes multiplies conditional probabilities P(C) * prod(P(x_i|C)), a single zero probability forces the entire product to 0 regardless of how strong the other features are."
  },
  {
    "id": "diag-d1m2-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-2",
    "q": "What is the denominator of Laplace smoothing for feature X with |V| distinct categories?",
    "options": [
      "count(C) + 1",
      "count(C) + |V|"
    ],
    "correctIndex": 1,
    "explanation": "To ensure the smoothed probabilities across all |V| categories sum to 1.0, the numerator adds 1 to each category and the denominator must add |V| * 1 = |V|."
  },
  {
    "id": "diag-d1m3-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-3",
    "q": "Why is Accuracy an invalid primary evaluation metric when the positive class represents only 5% of the data?",
    "options": [
      "Accuracy requires balanced precision and recall to be mathematically computable.",
      "A naive baseline model predicting negative 100% of the time achieves 95% accuracy while identifying zero positive targets."
    ],
    "correctIndex": 1,
    "explanation": "Under severe class imbalance, accuracy creates an illusion of high performance because predicting the majority class yields 95% accuracy while failing to detect a single actual target (0% recall)."
  },
  {
    "id": "diag-d1m3-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-3",
    "q": "What does a Lift of 3.0 at Decile 1 indicate?",
    "options": [
      "The model inference takes three times longer to process the top decile.",
      "The top 10% model-ranked records contain 3 times more positive cases than random selection."
    ],
    "correctIndex": 1,
    "explanation": "Lift measures the enrichment factor over a random baseline. A lift of 3.0 means targeting the top decile captures 300% of the positive instances expected from random outreach."
  },
  {
    "id": "diag-d1m4-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-4",
    "q": "What happens when the SVM regularization parameter C is set extremely large?",
    "options": [
      "The margin expands and ignores slack variable penalties.",
      "The margin narrows to strictly penalize slack violations, increasing overfitting risk."
    ],
    "correctIndex": 1,
    "explanation": "Large C places heavy penalty on misclassifications, enforcing a hard margin (low bias, high variance, sensitive to outliers). Small C creates a soft margin that allows more violations (high bias, low variance)."
  },
  {
    "id": "diag-d1m4-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-4",
    "q": "In an RBF kernel K(x, z) = exp(-gamma * ||x - z||^2), what is the effect of setting gamma extremely large?",
    "options": [
      "The decision boundary becomes smooth and approximately linear.",
      "The Gaussian basis functions become sharp localized spikes around each training point, leading to severe overfitting."
    ],
    "correctIndex": 1,
    "explanation": "Large gamma produces very narrow Gaussian bells with tiny radii of influence, creating complex, isolated decision islands around individual training samples and failing to generalize."
  },
  {
    "id": "diag-d1m5-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-5",
    "q": "What is the primary mathematical difference between PCA and Fisher's Linear Discriminant Analysis (LDA)?",
    "options": [
      "PCA is a supervised technique while LDA is completely unsupervised.",
      "PCA is unsupervised and maximizes total variance, while LDA is supervised and maximizes between-class scatter relative to within-class scatter."
    ],
    "correctIndex": 1,
    "explanation": "PCA finds orthogonal axes of maximal variance without knowing class labels. LDA explicitly uses class labels to maximize class separability (S_B / S_W)."
  },
  {
    "id": "diag-d1m5-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-5",
    "q": "Why was Table 3 in the Nov 2026 PRS sample paper flawed regarding PCA?",
    "options": [
      "PCA was computed with an insufficient number of principal components.",
      "The supervised target column 'Revenue' was included in the PCA covariance matrix calculation."
    ],
    "correctIndex": 1,
    "explanation": "Supervised target labels must never enter unsupervised feature transformation. Including the target leaks the ground truth into feature representations."
  },
  {
    "id": "diag-d1m6-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-6",
    "q": "What is the primary geometric limitation of K-Means clustering?",
    "options": [
      "It cannot process continuous numerical feature vectors.",
      "It assumes spherical, convex clusters of equal variance and is sensitive to outliers and initialization."
    ],
    "correctIndex": 1,
    "explanation": "K-Means partitions space via Voronoi cells, assuming spherical clusters of similar size. It fails on non-convex arbitrary shapes (concentric rings, spirals) or varying cluster densities."
  },
  {
    "id": "diag-d1m6-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-6",
    "q": "In DBSCAN, what distinguishes a Core point from a Border point?",
    "options": [
      "Border points have zero neighbors in the dataset.",
      "A Core point has at least MinPts within epsilon, whereas a Border point has fewer than MinPts but lies within epsilon of a Core point."
    ],
    "correctIndex": 1,
    "explanation": "A Core point satisfies |N_epsilon(p)| >= MinPts. A Border point has fewer than MinPts neighbors but is density-reachable from a Core point."
  },
  {
    "id": "diag-d1m7-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-7",
    "q": "What does an R^2 (coefficient of determination) score of 0.85 indicate?",
    "options": [
      "85% of samples are classified correctly into the target class.",
      "85% of the total variance in the dependent variable is explained by the regression model."
    ],
    "correctIndex": 1,
    "explanation": "R^2 = 1 - (SS_res / SS_tot) measures the proportion of variance in the target variable explained by the independent predictors."
  },
  {
    "id": "diag-d1m7-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-7",
    "q": "How does training a General Regression Neural Network (GRNN) compare to an MLP?",
    "options": [
      "GRNN requires thousands of iterative backpropagation epochs with SGD.",
      "GRNN is a one-pass memory-based network with zero iterative gradient descent."
    ],
    "correctIndex": 1,
    "explanation": "GRNN stores training samples directly as radial basis pattern units in a single forward pass, setting weights analytically without iterative backpropagation."
  },
  {
    "id": "diag-d1m8-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-8",
    "q": "Why does A* search evaluate f(n) = g(n) + h(n)?",
    "options": [
      "g(n) is the heuristic estimate to the goal, and h(n) is the historical path cost from the start.",
      "g(n) is the exact cost from the start node to n, and h(n) is the admissible heuristic estimate from n to the goal."
    ],
    "correctIndex": 1,
    "explanation": "f(n) represents the estimated total cost of the cheapest path through n, combining known cost so far g(n) with estimated future cost h(n)."
  },
  {
    "id": "diag-d1m8-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-8",
    "q": "What does the Minimum Remaining Values (MRV) heuristic do in CSP search?",
    "options": [
      "Selects the variable involved in the largest number of constraints on unassigned variables.",
      "Selects the unassigned variable with the fewest remaining legal values in its domain."
    ],
    "correctIndex": 1,
    "explanation": "MRV ('fail-first' heuristic) selects the most constrained variable to prune the search tree early and detect dead ends quickly."
  },
  {
    "id": "diag-d1m9-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-9",
    "q": "What is the Markov Blanket of a node Y in a Bayesian Belief Network?",
    "options": [
      "Only the immediate parents and immediate children of Y.",
      "The parents of Y, the children of Y, and the other parents of Y's children."
    ],
    "correctIndex": 1,
    "explanation": "Conditioned on its parents, its children, and its children's co-parents (spouses), node Y is conditionally independent of all other nodes in the network."
  },
  {
    "id": "diag-d1m9-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-9",
    "q": "In a V-structure (collider) X -> Y <- Z, are X and Z conditionally independent given evidence on Y?",
    "options": [
      "Yes, conditioning on Y blocks the path between X and Z.",
      "No, conditioning on Y activates the path between X and Z, inducing dependence."
    ],
    "correctIndex": 1,
    "explanation": "In a collider X -> Y <- Z, X and Z are marginally independent. However, conditioning on the collider Y (or any of its descendants) 'explains away' evidence and makes X and Z dependent."
  },
  {
    "id": "diag-d1m10-q1",
    "day": "day-1-classical-ml",
    "mod": "mod-10",
    "q": "Why must feature scaling parameters calculated on training folds never be updated with test data?",
    "options": [
      "Test data cannot be converted to numerical floating point values.",
      "Computing scaling statistics on test data introduces data leakage, distorting real-world generalization."
    ],
    "correctIndex": 1,
    "explanation": "The production model will not have access to future test distribution statistics; evaluating test data with its own parameters artificially inflates performance."
  },
  {
    "id": "diag-d1m10-q2",
    "day": "day-1-classical-ml",
    "mod": "mod-10",
    "q": "In an open-book exam, what is the best strategy when encountering an unfamiliar multi-step pattern recognition scenario?",
    "options": [
      "Skip directly to training a deep neural network without feature analysis.",
      "Structure the pipeline into Sensors/Data Preprocessing, Feature Extraction/Selection, Model Selection, and Rigorous Validation."
    ],
    "correctIndex": 1,
    "explanation": "NUS-ISS examiners award marks for systematic end-to-end architectural rigor: addressing data nuances, class balance, feature justification, and validation strategy."
  },
  {
    "id": "diag-d2m1-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-1",
    "q": "What is the Nyquist folding frequency for a sensor sampled at fs = 100 Hz?",
    "options": [
      "100 Hz",
      "50 Hz"
    ],
    "correctIndex": 1,
    "explanation": "The Nyquist folding frequency is defined as half the sampling rate: f_N = fs / 2 = 100 / 2 = 50 Hz."
  },
  {
    "id": "diag-d2m1-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-1",
    "q": "Where must an anti-aliasing filter be physically placed?",
    "options": [
      "In software as a digital low-pass filter after the ADC.",
      "In hardware as an analog low-pass filter strictly before the ADC."
    ],
    "correctIndex": 1,
    "explanation": "Once aliasing occurs during sampling, high frequencies permanently disguise themselves as low frequencies. Digital post-processing cannot distinguish ghost frequencies from true frequencies."
  },
  {
    "id": "diag-d2m2-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-2",
    "q": "What problem does asymmetric reweighted penalized least squares (arPLS) solve?",
    "options": [
      "Removes high-frequency Gaussian sensor noise.",
      "Removes slowly varying low-frequency baseline drift without eroding legitimate signal peaks."
    ],
    "correctIndex": 1,
    "explanation": "arPLS uses an asymmetric weighting scheme that assigns near-zero weight to positive peak residuals, fitting an elastic baseline beneath peaks without pulling down the peaks themselves."
  },
  {
    "id": "diag-d2m2-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-2",
    "q": "Why is Dynamic Time Warping (DTW) superior to Euclidean distance for aligning time-series signals?",
    "options": [
      "DTW runs in linear O(N) time whereas Euclidean distance is quadratic.",
      "DTW accommodates non-linear temporal accelerations and phase shifts by finding an optimal non-linear warping path."
    ],
    "correctIndex": 1,
    "explanation": "Euclidean distance rigidly aligns point i with point i, failing completely if a signal is compressed or delayed in time. DTW finds an elastic many-to-one alignment."
  },
  {
    "id": "diag-d2m3-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-3",
    "q": "What fundamental trade-off does the Short-Time Fourier Transform (STFT) face due to the Heisenberg-Gabor limit?",
    "options": [
      "It cannot compute phase angles of acoustic signals.",
      "Narrow time windows provide precise time localization but poor frequency resolution, while wide windows provide precise frequency resolution but poor time localization."
    ],
    "correctIndex": 1,
    "explanation": "A fixed window length delta_t fixes the frequency resolution delta_f >= 1 / (4 * pi * delta_t). You cannot simultaneously have high time and high frequency resolution with STFT."
  },
  {
    "id": "diag-d2m3-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-3",
    "q": "What are the four subbands produced by a 1-level 2D Discrete Wavelet Transform (DWT)?",
    "options": [
      "Alpha, Beta, Gamma, and Delta subbands.",
      "LL, LH, HL, and HH subbands."
    ],
    "correctIndex": 1,
    "explanation": "2D DWT applies low-pass (L) and high-pass (H) filters across rows and columns, creating LL (Approximation), LH (Horizontal details), HL (Vertical details), and HH (Diagonal details)."
  },
  {
    "id": "diag-d2m4-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-4",
    "q": "Why can a single-layer perceptron not solve the XOR logic classification task?",
    "options": [
      "XOR requires four continuous input features.",
      "XOR is not linearly separable by a single flat hyperplane."
    ],
    "correctIndex": 1,
    "explanation": "Minsky and Papert proved that a single-layer perceptron can only define a linear decision boundary. XOR requires at least one hidden layer to project inputs into a linearly separable space."
  },
  {
    "id": "diag-d2m4-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-4",
    "q": "What is the derivative of the ReLU activation function f(z) = max(0, z) for z > 0?",
    "options": [
      "0",
      "1.0"
    ],
    "correctIndex": 1,
    "explanation": "For z > 0, d/dz ReLU(z) = 1.0. This constant unit derivative prevents the gradient from vanishing during backpropagation through deep architectures."
  },
  {
    "id": "diag-d2m5-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-5",
    "q": "In the PRS sample paper (Q2a), why did the initial CNN architecture suffer from massive parameter explosion?",
    "options": [
      "The network contained too many convolutional layers.",
      "A Flatten layer after high-dimensional feature maps connected into Dense(4096), producing tens of millions of fully-connected weights."
    ],
    "correctIndex": 1,
    "explanation": "Flattening an O x O x C tensor into a 4096-neuron dense layer creates millions of parameters. Replacing Flatten + Dense with Global Average Pooling (GAP) reduces parameters to near zero while preventing overfitting."
  },
  {
    "id": "diag-d2m5-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-5",
    "q": "For an input of size I = 28, kernel k = 5, padding p = 2, and stride s = 1, what is the output spatial dimension?",
    "options": [
      "24",
      "28"
    ],
    "correctIndex": 1,
    "explanation": "O = floor((I - k + 2p)/s) + 1 = floor((28 - 5 + 4)/1) + 1 = 27 + 1 = 28. Padding p = (k - 1)/2 = 2 preserves the input spatial size ('same' padding)."
  },
  {
    "id": "diag-d2m6-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-6",
    "q": "How does the Long Short-Term Memory (LSTM) cell prevent vanishing gradients over long sequences?",
    "options": [
      "By replacing all matrix multiplications with Softmax activations.",
      "Through the Constant Error Carousel (CEC) cell state that updates linearly with additive gradients."
    ],
    "correctIndex": 1,
    "explanation": "The cell state updates additively rather than through repeated matrix products, allowing error gradients to flow backward through time without exponential decay."
  },
  {
    "id": "diag-d2m6-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-6",
    "q": "In an e-commerce session purchase prediction problem with variable sequence lengths, which architecture is most suitable?",
    "options": [
      "Ordinary Least Squares (OLS) linear regression.",
      "A sequence model (LSTM/GRU or 1D Dilated CNN) with masking and padding."
    ],
    "correctIndex": 1,
    "explanation": "Customer browsing sessions consist of variable-length ordered sequences of actions and page dwell times, requiring sequential modeling with sequence masking."
  },
  {
    "id": "diag-d2m7-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-7",
    "q": "What is the fundamental difference between hidden states and observed states in an HMM?",
    "options": [
      "Hidden states are encrypted while observed states are plain text.",
      "Hidden states are unobservable latent conditions, while observed states are measurable sensor outputs emitted probabilistically from the hidden states."
    ],
    "correctIndex": 1,
    "explanation": "An HMM assumes the underlying system transitions between latent Markovian states S, which emit observable emissions O according to emission matrix B."
  },
  {
    "id": "diag-d2m7-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-7",
    "q": "Which HMM algorithm finds the single most probable sequence of hidden states given an observation sequence?",
    "options": [
      "The Baum-Welch EM algorithm.",
      "The Viterbi dynamic programming algorithm."
    ],
    "correctIndex": 1,
    "explanation": "Viterbi uses dynamic programming to efficiently compute argmax_Q P(Q, O | lambda), finding the global optimal hidden state trajectory."
  },
  {
    "id": "diag-d2m8-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-8",
    "q": "Why is the dot product Q * K^T scaled by 1 / sqrt(d_k) in Transformer self-attention?",
    "options": [
      "To reduce the memory complexity from quadratic to linear.",
      "To prevent the dot products from growing excessively large for large dimensions, which would push the Softmax into regions with near-zero gradients."
    ],
    "correctIndex": 1,
    "explanation": "For vectors with mean 0 and variance 1, the dot product has variance d_k. Dividing by sqrt(d_k) stabilizes the variance to 1.0, preventing Softmax saturation."
  },
  {
    "id": "diag-d2m8-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-8",
    "q": "What is the fundamental architectural difference between BERT and GPT?",
    "options": [
      "BERT is an autoregressive decoder while GPT is a bidirectional encoder.",
      "BERT is a bidirectional encoder trained with masked language modeling, while GPT is an autoregressive causal decoder trained to predict the next token."
    ],
    "correctIndex": 1,
    "explanation": "BERT looks both left and right simultaneously to build deep contextual representations, whereas GPT masks future tokens to generate text sequentially."
  },
  {
    "id": "diag-d2m9-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-9",
    "q": "Why is an Autoencoder trained strictly on normal data effective for anomaly detection with extreme class imbalance?",
    "options": [
      "Because normal data requires no matrix operations.",
      "Because the bottleneck learns a low-dimensional manifold of normal operation, causing unseen anomalous defects to reconstruct with large residual errors."
    ],
    "correctIndex": 1,
    "explanation": "When training data contains thousands of normal samples and only 1 or 2 defects, supervised classifiers fail. An autoencoder learns to reconstruct normal patterns; unseen faults cannot be reconstructed accurately."
  },
  {
    "id": "diag-d2m9-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-9",
    "q": "How is the 3-sigma anomaly decision threshold tau calibrated?",
    "options": [
      "tau = 3 * max(x)",
      "tau = mu_e + 3 * sigma_e computed on validation reconstruction errors from normal samples."
    ],
    "correctIndex": 1,
    "explanation": "Under Gaussian error distribution assumptions, mu_e + 3 * sigma_e encloses 99.73% of normal noise variation. Errors exceeding this threshold are flagged as statistically significant anomalies."
  },
  {
    "id": "diag-d2m10-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-10",
    "q": "What is the primary purpose of Experience Replay in Deep Q-Networks (DQN)?",
    "options": [
      "Compresses observation images to save GPU memory.",
      "Stores transitions (s, a, r, s') in a memory buffer and samples mini-batches uniformly to break temporal correlation."
    ],
    "correctIndex": 1,
    "explanation": "Sequential transitions are strongly correlated, which destabilizes neural network training. Uniformly sampling past experiences breaks correlation and satisfies i.i.d. training assumptions."
  },
  {
    "id": "diag-d2m10-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-10",
    "q": "What is the Bellman Optimality Equation for Q*(s, a)?",
    "options": [
      "Q*(s, a) = r(s, a) + gamma * sum_a Q*(s', a)",
      "Q*(s, a) = r(s, a) + gamma * max_a' Q*(s', a')"
    ],
    "correctIndex": 1,
    "explanation": "The optimal action-value is the immediate reward plus the discounted maximum expected return achievable from the next state s'."
  },
  {
    "id": "diag-d2m11-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-11",
    "q": "How does Bagging reduce error compared to a single decision tree?",
    "options": [
      "It increases tree depth to reduce model bias.",
      "It averages predictions across multiple bootstrap-sampled models, reducing variance without increasing bias."
    ],
    "correctIndex": 1,
    "explanation": "Averaging M independent estimators with variance sigma^2 reduces variance toward sigma^2 / M while preserving the expectation (bias)."
  },
  {
    "id": "diag-d2m11-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-11",
    "q": "In AdaBoost, how are sample weights adjusted after a weak learner makes errors?",
    "options": [
      "All sample weights are reset to uniform values 1 / N.",
      "Misclassified samples receive increased weights while correctly classified samples receive decreased weights."
    ],
    "correctIndex": 1,
    "explanation": "AdaBoost focuses successive weak learners on the hardest examples by scaling up the importance of misclassified instances."
  },
  {
    "id": "diag-d2m12-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-12",
    "q": "What is the primary operational advantage of a Relevance Vector Machine (RVM) over an SVM?",
    "options": [
      "RVM does not use kernel functions.",
      "RVM provides well-calibrated probabilistic confidence outputs P(y | x) and produces sparser decision boundaries with far fewer support vectors."
    ],
    "correctIndex": 1,
    "explanation": "Formulated within a Bayesian framework, RVM delivers exact posterior probabilities and uses Automatic Relevance Determination (ARD) to eliminate non-informative vectors, creating much sparser models than SVM."
  },
  {
    "id": "diag-d2m12-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-12",
    "q": "In multimodal sensor fusion, what is Late (Decision-Level) Fusion?",
    "options": [
      "Concatenating raw sensor waveforms before any feature extraction.",
      "Processing each sensor modality through an independent classifier, then combining their individual output predictions or probabilities."
    ],
    "correctIndex": 1,
    "explanation": "Late fusion decouples sensor architectures, allowing each modality (vision, acoustic, vibration) to be modeled with its optimal specialized classifier before fusing confidence scores."
  },
  {
    "id": "diag-d2m13-q1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-13",
    "q": "In the PRS sample exam Q2 conveyor belt monitoring task, why was a single modality (e.g. sound alone) deemed inadequate?",
    "options": [
      "Acoustic sensors cannot record digital audio waveforms.",
      "Factory floor ambient noise contaminates acoustic recordings, while vibration sensors capture mechanical friction directly and thermal cameras detect bearing overheating."
    ],
    "correctIndex": 1,
    "explanation": "Combining complementary modalities (acoustic, vibration, infrared) ensures robust detection when individual sensors suffer from ambient interference or failure."
  },
  {
    "id": "diag-d2m13-q2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-13",
    "q": "What is the golden rule when selecting deep learning vs classical ML on industrial sensor tasks?",
    "options": [
      "Always deploy deep neural networks regardless of dataset size.",
      "Choose classical ML with domain-engineered features when data is scarce (< 1,000 samples); reserve deep learning for abundant, complex unstructured data."
    ],
    "correctIndex": 1,
    "explanation": "Over-parameterized deep models overfit severely on small tabular/sensor datasets. Well-engineered spectral features with SVM/Random Forests regularly outperform deep networks on small sample sizes."
  },
  {
    "id": "diag-d3m1-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-1",
    "q": "Which form of reasoning guarantees that if the premises are true, the conclusion is strictly guaranteed to be true?",
    "options": [
      "Inductive reasoning.",
      "Deductive reasoning."
    ],
    "correctIndex": 1,
    "explanation": "Deductive reasoning is truth-preserving: valid deduction guarantees true conclusions from true premises. Inductive and abductive reasoning yield probable or plausible inferences, not guarantees."
  },
  {
    "id": "diag-d3m1-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-1",
    "q": "In the DIKW hierarchy, what transforms Information into Knowledge?",
    "options": [
      "Storing records in a relational SQL database.",
      "Contextual understanding, synthesis of relationships, and actionable rules."
    ],
    "correctIndex": 1,
    "explanation": "Data is raw symbols; Information is structured data with meaning; Knowledge is actionable understanding synthesized from patterns and relationships; Wisdom is applied knowledge with judgment."
  },
  {
    "id": "diag-d3m2-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-2",
    "q": "In a Frame-based knowledge representation system, what is an 'if-needed' daemon?",
    "options": [
      "An operating system background process that monitors memory usage.",
      "A procedural attachment that executes dynamically to compute a slot's value only when requested."
    ],
    "correctIndex": 1,
    "explanation": "Procedural attachments ('daemons') allow frames to be dynamic. An 'if-needed' daemon computes values on demand (e.g. querying a sensor or calculating an age from birthdate)."
  },
  {
    "id": "diag-d3m2-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-2",
    "q": "What is default inheritance in hierarchical frame systems?",
    "options": [
      "Subclasses must strictly redefine every attribute of the parent class.",
      "A child frame automatically inherits slot values from its parent class unless explicitly overridden locally."
    ],
    "correctIndex": 1,
    "explanation": "Inheritance enables concise knowledge bases. Specialized instances inherit general defaults from superclasses, overriding only idiosyncratic properties."
  },
  {
    "id": "diag-d3m3-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-3",
    "q": "When is Forward Chaining preferred over Backward Chaining in production expert systems?",
    "options": [
      "When you have a single specific hypothesis to verify with minimal questions.",
      "When data is continuously arriving and multiple potential conclusions or actions must be derived from available facts."
    ],
    "correctIndex": 1,
    "explanation": "Forward chaining (data-driven) starts with known facts and applies rules to deduce all reachable conclusions. It is ideal for monitoring, emergency triage, and diagnosis with open-ended outcomes."
  },
  {
    "id": "diag-d3m3-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-3",
    "q": "What is Conflict Resolution in the Rete pattern-matching cycle?",
    "options": [
      "Deleting contradictory rules from the knowledge base.",
      "The strategy used by the inference engine to decide which single rule fires when multiple rules match the working memory."
    ],
    "correctIndex": 1,
    "explanation": "When several rules are simultaneously satisfied (in the conflict set), strategies like refractoriness, specificity, recency, or explicit salience priorities choose the winning rule."
  },
  {
    "id": "diag-d3m4-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-4",
    "q": "In MYCIN Certainty Factor calculus, if two independent rules conclude hypothesis H with CF1 = +0.8 and CF2 = +0.5, what is the combined CF?",
    "options": [
      "+1.30",
      "+0.90"
    ],
    "correctIndex": 1,
    "explanation": "For two positive certainty factors: CF_comb = CF1 + CF2 * (1 - CF1) = 0.8 + 0.5 * (1 - 0.8) = 0.8 + 0.10 = +0.90."
  },
  {
    "id": "diag-d3m4-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-4",
    "q": "What are the standard Zadeh operators for Fuzzy AND, Fuzzy OR, and Fuzzy NOT on membership values mu_A, mu_B?",
    "options": [
      "Linear addition, subtraction, and multiplication.",
      "min(mu_A, mu_B) for AND, max(mu_A, mu_B) for OR, and 1 - mu_A for NOT."
    ],
    "correctIndex": 1,
    "explanation": "Zadeh's fuzzy set operations generalize Boolean logic: intersection is minimum, union is maximum, and complement is 1 - mu."
  },
  {
    "id": "diag-d3m5-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-5",
    "q": "What are the 4 R's that define the classic Case-Based Reasoning operational cycle?",
    "options": [
      "Read, Record, Reduce, and Report.",
      "Retrieve, Reuse, Revise, and Retain."
    ],
    "correctIndex": 1,
    "explanation": "CBR solves new problems by Retrieving similar past cases, Reusing the retrieved solution, Revising the solution to fit differences, and Retaining the confirmed case for future reuse."
  },
  {
    "id": "diag-d3m5-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-5",
    "q": "How does CBR handle domain adaptation when exact rule sets cannot be codified?",
    "options": [
      "It randomly samples solutions from uniform distributions.",
      "It leverages accumulated episodic historical experiences, retrieving the most similar precedent via weighted attribute distance."
    ],
    "correctIndex": 1,
    "explanation": "When general domain rules are too complex, incomplete, or tacit (e.g. legal precedents, medical triage), CBR relies on concrete past exemplars."
  },
  {
    "id": "diag-d3m6-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-6",
    "q": "What does the Apriori Property state regarding itemset support?",
    "options": [
      "All supersets of an infrequent itemset must be frequent.",
      "All non-empty subsets of a frequent itemset must also be frequent."
    ],
    "correctIndex": 1,
    "explanation": "If an itemset {A, B} is frequent, then {A} and {B} must also be frequent. Equivalently (anti-monotonicity): if an itemset is infrequent, all of its supersets are guaranteed to be infrequent and can be pruned."
  },
  {
    "id": "diag-d3m6-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-6",
    "q": "What does a rule Lift of 1.0 indicate between antecedent A and consequent B?",
    "options": [
      "A and B are completely mutually exclusive.",
      "A and B are statistically independent (P(B | A) = P(B))."
    ],
    "correctIndex": 1,
    "explanation": "Lift(A -> B) = P(A and B) / (P(A) * P(B)). A lift of 1.0 means occurrence of A has zero correlation with occurrence of B."
  },
  {
    "id": "diag-d3m7-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-7",
    "q": "In the TransE knowledge graph embedding model, what geometric relationship is enforced for valid triple (h, r, t)?",
    "options": [
      "h * r = t",
      "h + r approx t"
    ],
    "correctIndex": 1,
    "explanation": "TransE models relations as translations in embedding space: head vector h translated by relation vector r should end close to tail vector t (||h + r - t|| approx 0)."
  },
  {
    "id": "diag-d3m7-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-7",
    "q": "What is the primary representational flaw of TransE when modeling 1-to-N relations?",
    "options": [
      "TransE is computationally intractable on large graphs.",
      "It forces all tail entities to map to the exact same point in space, causing entity representations to collapse."
    ],
    "correctIndex": 1,
    "explanation": "If (h, r, t1) and (h, r, t2) both hold, h + r approx t1 and h + r approx t2 mathematically implies t1 approx t2, collapsing distinct entities together."
  },
  {
    "id": "diag-d3m8-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-8",
    "q": "Why is standard 1-point binary crossover invalid for the Traveling Salesperson Problem (TSP)?",
    "options": [
      "Binary crossover is computationally too slow.",
      "It generates invalid permutations containing duplicate cities and missing cities."
    ],
    "correctIndex": 1,
    "explanation": "TSP chromosomes represent permutations where every city must appear exactly once. Slicing and swapping parents creates duplicate visits to some cities while omitting others."
  },
  {
    "id": "diag-d3m8-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-8",
    "q": "How does Order Crossover (OX) preserve valid tour permutations?",
    "options": [
      "It randomly mutates all duplicate genes to zeroes.",
      "It copies a continuous swath of cities from Parent 1, then fills remaining slots using Parent 2's city order while skipping cities already in the swath."
    ],
    "correctIndex": 1,
    "explanation": "OX maintains the relative ordering of cities from the second parent while preserving a contiguous sub-tour from the first parent, guaranteeing zero duplicates and zero omissions."
  },
  {
    "id": "diag-d3m9-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-9",
    "q": "In conversational AI (IRS Q1a), what is the difference between an Intent and a Slot?",
    "options": [
      "An Intent is a database schema; a Slot is an SQL table.",
      "An Intent is the user's high-level goal, while a Slot is an entity or parameter required to fulfill that goal."
    ],
    "correctIndex": 1,
    "explanation": "In NLU, Intent represents what the user wants to achieve (e.g. BookFlight), while Slots capture required variable values (e.g. destination='Singapore', date='2026-11-01')."
  },
  {
    "id": "diag-d3m9-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-9",
    "q": "How should an enterprise conversational system handle ambiguous or out-of-domain user queries?",
    "options": [
      "Generate a random speculative answer.",
      "Compare query embedding similarity against a confidence threshold, asking clarifying questions or falling back to a human agent when confidence is low."
    ],
    "correctIndex": 1,
    "explanation": "Robust conversational systems apply threshold-based guardrails: high confidence routes to automated answers; borderline confidence triggers slot clarification; low confidence routes to human-in-the-loop escalation."
  },
  {
    "id": "diag-d3m10-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-10",
    "q": "What are David Marr's Three Levels of Analysis for cognitive and information processing systems?",
    "options": [
      "Input, Hidden, and Output layers.",
      "Computational Theory, Representation & Algorithm, and Hardware Implementation."
    ],
    "correctIndex": 1,
    "explanation": "Marr's framework separates: (1) Computational Theory (what is the goal and logic?), (2) Representation & Algorithm (what representations and procedures are used?), and (3) Hardware Implementation (how is it physically realized in silicon or biology?)."
  },
  {
    "id": "diag-d3m10-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-10",
    "q": "What does Reverberation Time T60 measure in acoustic cognition?",
    "options": [
      "The time required for sound to travel 60 meters.",
      "The time required for sound energy in an enclosed space to decay by 60 decibels after the sound source stops."
    ],
    "correctIndex": 1,
    "explanation": "Sabine's reverberation metric T60 quantifies room acoustics: the duration for reflected sound pressure level to drop by 60 dB (10^-6 of original acoustic energy)."
  },
  {
    "id": "diag-d3m11-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-11",
    "q": "In the ACT-R cognitive architecture, what is the difference between Declarative and Procedural memory?",
    "options": [
      "Declarative memory stores sensor audio; Procedural memory stores video frames.",
      "Declarative memory stores facts and episodic chunks ('knowing that'), while Procedural memory stores IF-THEN production rules ('knowing how')."
    ],
    "correctIndex": 1,
    "explanation": "ACT-R separates explicit factual knowledge (chunks retrieved via activation) from implicit skill knowledge (production rules matched against the goal and working memory)."
  },
  {
    "id": "diag-d3m11-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-11",
    "q": "In the official NUS-ISS 11-entity cognitive framework (IRS Q2h), what entity is produced by the 'Reason' function?",
    "options": [
      "The Act Function.",
      "The Plan / Solution entity."
    ],
    "correctIndex": 1,
    "explanation": "In the NUS-ISS cognitive loop: Sensors -> Sense -> Internal State -> Reason -> Plan/Solution -> Act -> Actuators. The Reason function generates the Plan/Solution."
  },
  {
    "id": "diag-d3m12-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-12",
    "q": "What is the core loop of the ReAct (Reasoning + Acting) agent framework?",
    "options": [
      "A front-end state management library for React.js components.",
      "An interleaved cycle of Thought (reasoning), Action (calling external tools), and Observation (inspecting tool outputs)."
    ],
    "correctIndex": 1,
    "explanation": "ReAct prompts LLMs to interleave verbal reasoning steps with concrete external actions (search, API call, database query) and observe results before deciding the next step."
  },
  {
    "id": "diag-d3m12-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-12",
    "q": "Why does GraphRAG outperform traditional Vector RAG on complex multi-hop queries?",
    "options": [
      "Vector RAG cannot index unstructured text documents.",
      "Vector RAG retrieves isolated text chunks by surface similarity, whereas GraphRAG traverses structured entity-relationship edges across multiple documents."
    ],
    "correctIndex": 1,
    "explanation": "Vector similarity search struggles when an answer requires connecting facts distributed across disparate documents. GraphRAG follows explicit relational edges to synthesize cross-document insights."
  },
  {
    "id": "diag-d3m13-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-13",
    "q": "What constitutes a Neuro-Symbolic AI architecture?",
    "options": [
      "A neural network with a larger number of hidden layers and residual connections.",
      "The integration of neural perception (for robust sensory pattern recognition) with symbolic logic (for verifiable rules, constraints, and explainability)."
    ],
    "correctIndex": 1,
    "explanation": "Neuro-symbolic systems combine the strengths of Kahneman's System 1 (fast, perceptual, neural) and System 2 (deliberative, logical, verifiable, symbolic)."
  },
  {
    "id": "diag-d3m13-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-13",
    "q": "In high-stakes medical diagnosis (IRS Q2i), why is direct patient self-service without clinician oversight unacceptable?",
    "options": [
      "Smartphone web browsers lack GPU acceleration for deep learning models.",
      "Risk of false negatives leading to irreversible harm, inability of patients to verify clinical signs, and legal liability requirements for medical malpractice."
    ],
    "correctIndex": 1,
    "explanation": "High-stakes clinical decision support requires Human-in-the-Loop governance to prevent catastrophic diagnostic omissions, validate physical symptoms, and ensure medical accountability."
  },
  {
    "id": "diag-d3m14-q1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-14",
    "q": "What is the central architectural objective of the 36-Hour Revision Course?",
    "options": [
      "Memorizing multiple-choice answer keys for past exam papers.",
      "Building a comprehensive, interconnected mastery of both Pattern Recognition Systems (ISY5002) and Intelligent Reasoning Systems (ISY5001) across perception, representation, inference, and system design."
    ],
    "correctIndex": 1,
    "explanation": "The platform synthesizes signal processing, deep learning, symbolic reasoning, probabilistic inference, and cognitive architectures to prepare candidates for novel open-book examination scenarios."
  },
  {
    "id": "diag-d3m14-q2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-14",
    "q": "When presenting a system design proposal in an NUS-ISS examination, what structure maximizes marks?",
    "options": [
      "Writing code implementations in Python without architectural diagrams.",
      "Providing an end-to-end architecture covering Input Ingestion, Knowledge Representation, Inference Mechanism, Uncertainty Handling, and Evaluation & Governance."
    ],
    "correctIndex": 1,
    "explanation": "Examiners allocate marks across requirements analysis, representation choice, inference engine justification, handling edge cases/uncertainty, and human-in-the-loop oversight."
  }
],
  practices: [
  {
    "id": "prac-d1m1",
    "day": "day-1-classical-ml",
    "mod": "mod-1",
    "question": "A sensor measures voltage with historical training values $\\mu = 5.0\\text{ V}$ and $\\sigma = 2.0\\text{ V}$. An incoming test reading is $x = 8.5\\text{ V}$. Calculate its standardized Z-score.",
    "placeholder": "Z-score...",
    "unit": "Z-score",
    "targetValue": 1.75,
    "tolerance": 0.05,
    "solution": "Formula: $Z = \\frac{x - \\mu}{\\sigma} = \\frac{8.5 - 5.0}{2.0} = \\frac{3.5}{2.0} = \\mathbf{1.75}$."
  },
  {
    "id": "prac-d1m2",
    "day": "day-1-classical-ml",
    "mod": "mod-2",
    "question": "A binary dataset has 6 positive samples and 10 negative samples. Calculate the prior probability of the positive class $P(C_1)$.",
    "placeholder": "P(C1)...",
    "unit": "Probability",
    "targetValue": 0.375,
    "tolerance": 0.02,
    "solution": "Formula: $P(C_1) = \\frac{6}{6 + 10} = \\frac{6}{16} = \\mathbf{0.375}$ (or $37.5\\%$)."
  },
  {
    "id": "prac-d1m3",
    "day": "day-1-classical-ml",
    "mod": "mod-3",
    "question": "Model B yields $TP=480, FP=980, FN=92$. Calculate the Precision percentage (positive predictive value).",
    "placeholder": "Precision %...",
    "unit": "%",
    "targetValue": 32.9,
    "tolerance": 1.0,
    "solution": "Formula: $\\text{Precision} = \\frac{TP}{TP + FP} = \\frac{480}{480 + 980} = \\frac{480}{1460} \\approx 0.3288 = \\mathbf{32.9\\%}$."
  },
  {
    "id": "prac-d1m4",
    "day": "day-1-classical-ml",
    "mod": "mod-4",
    "question": "If an SVM weight vector is $\\mathbf{w} = [1.2, 1.6]$, calculate the total geometric margin width $M = \\frac{2}{\\|\\mathbf{w}\\|}$.",
    "placeholder": "Margin M...",
    "unit": "Width",
    "targetValue": 1.0,
    "tolerance": 0.05,
    "solution": "Formula: $\\|\\mathbf{w}\\| = \\sqrt{1.2^2 + 1.6^2} = \\sqrt{1.44 + 2.56} = \\sqrt{4.0} = 2.0$. Margin $M = \\frac{2}{2.0} = \\mathbf{1.0}$."
  },
  {
    "id": "prac-d1m5",
    "day": "day-1-classical-ml",
    "mod": "mod-5",
    "question": "A 3-feature dataset has eigenvalues $\\lambda_1 = 4.5, \\lambda_2 = 0.3, \\lambda_3 = 0.2$. What percentage of total variance is retained by the first principal component PC1 alone?",
    "placeholder": "Variance %...",
    "unit": "%",
    "targetValue": 90.0,
    "tolerance": 1.0,
    "solution": "Total variance $= 4.5 + 0.3 + 0.2 = 5.0$. PC1 explains: $\\frac{4.5}{5.0} = 0.90 = \\mathbf{90.0\\%}$."
  },
  {
    "id": "prac-d1m6",
    "day": "day-1-classical-ml",
    "mod": "mod-6",
    "question": "A sample point has mean intra-cluster distance $a = 2.0$ and mean nearest-cluster distance $b = 2.0$. Calculate its Silhouette coefficient $s = \\frac{b - a}{\\max(a, b)}$.",
    "placeholder": "Silhouette s...",
    "unit": "Score",
    "targetValue": 0.0,
    "tolerance": 0.05,
    "solution": "Formula: $s = \\frac{2.0 - 2.0}{\\max(2.0, 2.0)} = \\frac{0}{2.0} = \\mathbf{0.0}$ (Point lies exactly on the boundary between two clusters)."
  },
  {
    "id": "prac-d1m7",
    "day": "day-1-classical-ml",
    "mod": "mod-7",
    "question": "A baseline regression model has residual sum of squares $SS_{\\text{res}} = 200$ and total sum of squares $SS_{\\text{tot}} = 400$. Calculate its $R^2$ score.",
    "placeholder": "R^2 score...",
    "unit": "R^2",
    "targetValue": 0.5,
    "tolerance": 0.05,
    "solution": "Formula: $R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{200}{400} = 1 - 0.5 = \\mathbf{0.50}$."
  },
  {
    "id": "prac-d1m8",
    "day": "day-1-classical-ml",
    "mod": "mod-8",
    "question": "In an A* search, node A has path cost from start $g(A) = 12$ and heuristic estimate to goal $h(A) = 7$. Calculate total evaluation $f(A)$.",
    "placeholder": "f(A)...",
    "unit": "Cost",
    "targetValue": 19.0,
    "tolerance": 0.1,
    "solution": "Formula: $f(A) = g(A) + h(A) = 12 + 7 = \\mathbf{19.0}$."
  },
  {
    "id": "prac-d1m9",
    "day": "day-1-classical-ml",
    "mod": "mod-9",
    "question": "A node $Y$ in a Bayesian Network has 3 binary parents $A, B, C$. How many independent conditional probability parameters are required in $Y$'s CPT?",
    "placeholder": "Parameters...",
    "unit": "Count",
    "targetValue": 8.0,
    "tolerance": 0.1,
    "solution": "Each binary parent has 2 states. For 3 parents, there are $2^3 = 8$ parent configurations. For each configuration, binary $Y$ needs 1 independent probability $P(Y=1 | A, B, C)$ (since $P(Y=0) = 1 - P(Y=1)$). Total independent parameters $= 2^3 = \\mathbf{8}$."
  },
  {
    "id": "prac-d1m10",
    "day": "day-1-classical-ml",
    "mod": "mod-10",
    "question": "How many core architectural pipeline stages (Sensors, Preprocessing, Feature Engineering, Model Training, Evaluation & Deployment) comprise the end-to-end Pattern Recognition framework?",
    "placeholder": "Stages count...",
    "unit": "Stages",
    "targetValue": 5.0,
    "tolerance": 0.1,
    "solution": "The 5 canonical NUS-ISS stages are: (1) Sensor Data Acquisition, (2) Preprocessing & Cleaning, (3) Feature Extraction & Dimensionality Reduction, (4) Model Architecture & Training, and (5) Evaluation, Validation & Deployment."
  },
  {
    "id": "prac-d2m1",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-1",
    "question": "A vibration sensor samples at $f_s = 200\\text{ Hz}$. A gear tooth fault frequency is $f = 350\\text{ Hz}$. Calculate the apparent alias frequency $f_{\\text{alias}}$.",
    "placeholder": "Alias Hz...",
    "unit": "Hz",
    "targetValue": 50.0,
    "tolerance": 1.0,
    "solution": "Folding frequency $f_N = 200 / 2 = 100\\text{ Hz}$. Since $350 > 100$, aliasing occurs. $k = \\text{round}(350 / 200) = 2$. $f_{\\text{alias}} = |350 - 2(200)| = |350 - 400| = \\mathbf{50.0\\text{ Hz}}$."
  },
  {
    "id": "prac-d2m2",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-2",
    "question": "In DTW dynamic programming, local distance is $d(x_i, y_j) = 3$. The minimum accumulated cost among preceding neighbors $(i-1, j), (i, j-1), (i-1, j-1)$ is 8. Calculate updated accumulated cost $D(i, j)$.",
    "placeholder": "D(i, j)...",
    "unit": "Cost",
    "targetValue": 11.0,
    "tolerance": 0.1,
    "solution": "Formula: $D(i, j) = d(x_i, y_j) + \\min(D(i-1, j), D(i, j-1), D(i-1, j-1)) = 3 + 8 = \\mathbf{11.0}$."
  },
  {
    "id": "prac-d2m3",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-3",
    "question": "Two adjacent signal samples are $x_1 = 6, x_2 = 2$. Calculate the unscaled 1D Haar detail difference coefficient $(x_1 - x_2) / 2$.",
    "placeholder": "Detail...",
    "unit": "Value",
    "targetValue": 2.0,
    "tolerance": 0.1,
    "solution": "Formula: $d = \\frac{x_1 - x_2}{2} = \\frac{6 - 2}{2} = \\frac{4}{2} = \\mathbf{2.0}$."
  },
  {
    "id": "prac-d2m4",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-4",
    "question": "For a binary classification task, ground truth is $y = 1$ and model prediction is $\\hat{y} = 0.8$. Calculate the Binary Cross-Entropy loss $\\mathcal{L} = -\\ln(\\hat{y})$.",
    "placeholder": "BCE loss...",
    "unit": "Loss",
    "targetValue": 0.223,
    "tolerance": 0.02,
    "solution": "Formula: $\\mathcal{L} = -[1 \\cdot \\ln(0.8) + 0 \\cdot \\ln(0.2)] = -\\ln(0.8) = -(-0.22314) = \\mathbf{0.223}$."
  },
  {
    "id": "prac-d2m5",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-5",
    "question": "A Conv2D layer has input channels $C_{\\text{in}} = 3$, output channels $C_{\\text{out}} = 16$, and kernel size $3 \\times 3$. Calculate total trainable parameters (weights + biases).",
    "placeholder": "Parameters...",
    "unit": "Weights",
    "targetValue": 448.0,
    "tolerance": 1.0,
    "solution": "Weights $= (K_h \\times K_w \\times C_{\\text{in}}) \\times C_{\\text{out}} = (3 \\times 3 \\times 3) \\times 16 = 27 \\times 16 = 432$. Biases $= C_{\\text{out}} = 16$. Total parameters $= 432 + 16 = \\mathbf{448}$."
  },
  {
    "id": "prac-d2m6",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-6",
    "question": "In an LSTM cell, previous cell state is $C_{t-1} = 4.0$, forget gate is $f_t = 0.5$, input gate is $i_t = 0.8$, and candidate memory is $\\tilde{C}_t = 2.0$. Calculate updated cell state $C_t$.",
    "placeholder": "C_t...",
    "unit": "State",
    "targetValue": 3.6,
    "tolerance": 0.1,
    "solution": "Formula: $C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t = 0.5(4.0) + 0.8(2.0) = 2.0 + 1.6 = \\mathbf{3.6}$."
  },
  {
    "id": "prac-d2m7",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-7",
    "question": "In an HMM, initial state probability is $\\pi_1 = 0.6$ and emission probability is $b_1(o_1) = 0.5$. Calculate the initial forward variable $\\alpha_1(1)$.",
    "placeholder": "Alpha_1(1)...",
    "unit": "Probability",
    "targetValue": 0.3,
    "tolerance": 0.02,
    "solution": "Formula: $\\alpha_1(1) = \\pi_1 \\cdot b_1(o_1) = 0.6 \\times 0.5 = \\mathbf{0.30}$."
  },
  {
    "id": "prac-d2m8",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-8",
    "question": "In Transformer self-attention, if key dimension is $d_k = 64$, calculate the scaling factor $\\sqrt{d_k}$.",
    "placeholder": "sqrt(d_k)...",
    "unit": "Factor",
    "targetValue": 8.0,
    "tolerance": 0.1,
    "solution": "Formula: $\\sqrt{d_k} = \\sqrt{64} = \\mathbf{8.0}$."
  },
  {
    "id": "prac-d2m9",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-9",
    "question": "Validation reconstruction errors have mean $\\mu_e = 0.020$ and standard deviation $\\sigma_e = 0.005$. Calculate the 3-sigma anomaly detection threshold $\\tau = \\mu_e + 3\\sigma_e$.",
    "placeholder": "Threshold tau...",
    "unit": "Threshold",
    "targetValue": 0.035,
    "tolerance": 0.002,
    "solution": "Formula: $\\tau = \\mu_e + 3\\sigma_e = 0.020 + 3(0.005) = 0.020 + 0.015 = \\mathbf{0.035}$."
  },
  {
    "id": "prac-d2m10",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-10",
    "question": "In Q-learning, immediate reward is $r = +10$, discount factor is $\\gamma = 0.90$, and estimated maximum future return is $\\max_{a'} Q(s', a') = 50.0$. Calculate updated target Q-value.",
    "placeholder": "Q target...",
    "unit": "Return",
    "targetValue": 55.0,
    "tolerance": 0.5,
    "solution": "Formula: $Q_{\\text{target}} = r + \\gamma \\max_{a'} Q(s', a') = 10 + 0.90(50.0) = 10 + 45.0 = \\mathbf{55.0}$."
  },
  {
    "id": "prac-d2m11",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-11",
    "question": "An AdaBoost base classifier has weighted error rate $\\epsilon = 0.10$. Calculate the learner's voting weight $\\alpha = \\frac{1}{2} \\ln\\left(\\frac{1 - \\epsilon}{\\epsilon}\\right)$.",
    "placeholder": "Alpha weight...",
    "unit": "Weight",
    "targetValue": 1.1,
    "tolerance": 0.05,
    "solution": "Formula: $\\alpha = \\frac{1}{2} \\ln\\left(\\frac{0.90}{0.10}\\right) = \\frac{1}{2} \\ln(9) = 0.5 \\times 2.1972 = \\mathbf{1.0986 \\approx 1.10}$."
  },
  {
    "id": "prac-d2m12",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-12",
    "question": "Camera modality predicts probability $P_1 = 0.90$ with reliability weight $w_1 = 0.60$. Audio modality predicts $P_2 = 0.50$ with reliability weight $w_2 = 0.40$. Calculate weighted late fusion probability $P = w_1 P_1 + w_2 P_2$.",
    "placeholder": "Fused P...",
    "unit": "Probability",
    "targetValue": 0.74,
    "tolerance": 0.02,
    "solution": "Formula: $P = 0.60(0.90) + 0.40(0.50) = 0.54 + 0.20 = \\mathbf{0.74}$."
  },
  {
    "id": "prac-d2m13",
    "day": "day-2-signals-deeplearning",
    "mod": "mod-13",
    "question": "A continuous mechanical signal contains frequencies up to $f_{\\max} = 250\\text{ Hz}$. What is the theoretical minimum Nyquist sampling rate $f_s$ required to prevent aliasing?",
    "placeholder": "Sampling rate fs...",
    "unit": "Hz",
    "targetValue": 500.0,
    "tolerance": 5.0,
    "solution": "Formula: $f_s > 2 f_{\\max} = 2 \\times 250 = \\mathbf{500\\text{ Hz}}$."
  },
  {
    "id": "prac-d3m1",
    "day": "day-3-reasoning-integration",
    "mod": "mod-1",
    "question": "In classical propositional logic, if premise 1 is $A \\to B$ and premise 2 is $A$, how many valid conclusions are deduced via Modus Ponens?",
    "placeholder": "Conclusions...",
    "unit": "Count",
    "targetValue": 1.0,
    "tolerance": 0.1,
    "solution": "Modus Ponens deduces exactly 1 unique truth-preserving conclusion: $B$."
  },
  {
    "id": "prac-d3m2",
    "day": "day-3-reasoning-integration",
    "mod": "mod-2",
    "question": "A camera with focal length $f = 500\\text{ px}$ observes an object of real physical width $X = 40\\text{ mm}$ spanning $x = 500\\text{ px}$ on the sensor. Calculate physical depth distance $Z = \\frac{f \\cdot X}{x}$.",
    "placeholder": "Depth Z (mm)...",
    "unit": "mm",
    "targetValue": 40.0,
    "tolerance": 1.0,
    "solution": "Formula: $Z = \\frac{f \\cdot X}{x} = \\frac{500 \\times 40}{500} = \\mathbf{40.0\\text{ mm}}$."
  },
  {
    "id": "prac-d3m3",
    "day": "day-3-reasoning-integration",
    "mod": "mod-3",
    "question": "How many primary reasoning paradigms exist in artificial intelligence (Deduction, Induction, Abduction)?",
    "placeholder": "Paradigms...",
    "unit": "Count",
    "targetValue": 3.0,
    "tolerance": 0.1,
    "solution": "The 3 foundational paradigms are: Deduction (rule + cause -> effect), Induction (cause + effect -> rule), and Abduction (rule + effect -> cause)."
  },
  {
    "id": "prac-d3m4",
    "day": "day-3-reasoning-integration",
    "mod": "mod-4",
    "question": "Rule 1 asserts hypothesis $H$ with certainty factor $CF_1 = +0.80$. Rule 2 independently asserts $H$ with $CF_2 = +0.50$. Calculate the combined certainty factor $CF_{\\text{comb}} = CF_1 + CF_2(1 - CF_1)$.",
    "placeholder": "CF comb...",
    "unit": "CF",
    "targetValue": 0.9,
    "tolerance": 0.02,
    "solution": "Formula: $CF_{\\text{comb}} = 0.80 + 0.50(1 - 0.80) = 0.80 + 0.50(0.20) = 0.80 + 0.10 = \\mathbf{0.90}$."
  },
  {
    "id": "prac-d3m5",
    "day": "day-3-reasoning-integration",
    "mod": "mod-5",
    "question": "A fuzzy speed variable has 4 linguistic terms: Low, Medium, High, Extreme. How many fuzzy membership functions are defined for this variable?",
    "placeholder": "Functions...",
    "unit": "Count",
    "targetValue": 4.0,
    "tolerance": 0.1,
    "solution": "Each distinct linguistic term corresponds to 1 fuzzy membership function $\\mu(x)$. Thus 4 linguistic terms require $\\mathbf{4}$ membership functions."
  },
  {
    "id": "prac-d3m6",
    "day": "day-3-reasoning-integration",
    "mod": "mod-6",
    "question": "In a hospital cohort of 1,000 patients, symptom $A$ appears in 200 cases ($P(A) = 0.20$), disease $B$ appears in 100 cases ($P(B) = 0.10$), and both appear together in 50 cases ($P(A \\cap B) = 0.05$). Calculate the association rule Lift for $A \\to B$.",
    "placeholder": "Lift...",
    "unit": "Lift",
    "targetValue": 2.5,
    "tolerance": 0.1,
    "solution": "Formula: $\\text{Lift}(A \\to B) = \\frac{P(A \\cap B)}{P(A) \\cdot P(B)} = \\frac{0.05}{0.20 \\times 0.10} = \\frac{0.05}{0.02} = \\mathbf{2.50}$."
  },
  {
    "id": "prac-d3m7",
    "day": "day-3-reasoning-integration",
    "mod": "mod-7",
    "question": "In a 1D TransE knowledge graph embedding, head entity has coordinate $h = 2.0$ and relation has vector translation $r = 5.0$. What is the expected coordinate of tail entity $t = h + r$?",
    "placeholder": "Tail t...",
    "unit": "Coordinate",
    "targetValue": 7.0,
    "tolerance": 0.1,
    "solution": "Formula: $t = h + r = 2.0 + 5.0 = \\mathbf{7.0}$."
  },
  {
    "id": "prac-d3m8",
    "day": "day-3-reasoning-integration",
    "mod": "mod-8",
    "question": "Three candidate chromosomes have fitness values $f_1 = 10, f_2 = 20, f_3 = 10$. In fitness-proportionate (roulette wheel) selection, what is the selection probability for chromosome 2?",
    "placeholder": "Probability...",
    "unit": "Probability",
    "targetValue": 0.5,
    "tolerance": 0.05,
    "solution": "Total fitness $= 10 + 20 + 10 = 40$. Probability for chromosome 2: $P_2 = \\frac{20}{40} = \\mathbf{0.50}$ (or $50\\%$)."
  },
  {
    "id": "prac-d3m9",
    "day": "day-3-reasoning-integration",
    "mod": "mod-9",
    "question": "Two normalized sentence embeddings $\\mathbf{u}, \\mathbf{v}$ have inner dot product $\\mathbf{u} \\cdot \\mathbf{v} = 0.85$. What is their Cosine Similarity score $\\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$?",
    "placeholder": "Cosine similarity...",
    "unit": "Similarity",
    "targetValue": 0.85,
    "tolerance": 0.02,
    "solution": "For normalized unit vectors (\\|\\mathbf{u}\\| = 1, \\|\\mathbf{v}\\| = 1), cosine similarity equals their dot product: $\\frac{0.85}{1 \\times 1} = \\mathbf{0.85}$."
  },
  {
    "id": "prac-d3m10",
    "day": "day-3-reasoning-integration",
    "mod": "mod-10",
    "question": "A reference audio transcript has $N = 20$ words. An ASR model makes 2 word substitutions, 1 deletion, and 1 insertion. Calculate the Word Error Rate percentage $\\text{WER} = \\frac{S + D + I}{N} \\times 100\\%$.",
    "placeholder": "WER %...",
    "unit": "%",
    "targetValue": 20.0,
    "tolerance": 1.0,
    "solution": "Formula: $\\text{WER} = \\frac{2 + 1 + 1}{20} = \\frac{4}{20} = 0.20 = \\mathbf{20.0\\%}$."
  },
  {
    "id": "prac-d3m11",
    "day": "day-3-reasoning-integration",
    "mod": "mod-11",
    "question": "How many total entities (Sensors, Sense, Internal State, Reason, Plan/Solution, Act, Actuators, External World, Learn, Reflect, Knowledge/Memory) constitute the official NUS-ISS Cognitive Architecture framework?",
    "placeholder": "Entities count...",
    "unit": "Entities",
    "targetValue": 11.0,
    "tolerance": 0.1,
    "solution": "The 11 canonical entities in the official NUS-ISS framework (IRS Q2h) are: (1) Sensors, (2) Sense, (3) Internal State, (4) Reason, (5) Plan/Solution, (6) Act, (7) Actuators, (8) External World, (9) Learn, (10) Reflect, and (11) Knowledge/Memory."
  },
  {
    "id": "prac-d3m12",
    "day": "day-3-reasoning-integration",
    "mod": "mod-12",
    "question": "In the ReAct agent framework, how many interleaved phases (Thought, Action, Observation) form each reasoning cycle step?",
    "placeholder": "Phases count...",
    "unit": "Phases",
    "targetValue": 3.0,
    "tolerance": 0.1,
    "solution": "The 3 cyclical phases are: (1) Thought (internal verbal reasoning), (2) Action (external API or tool call execution), and (3) Observation (sensory perception of environment feedback)."
  },
  {
    "id": "prac-d3m13",
    "day": "day-3-reasoning-integration",
    "mod": "mod-13",
    "question": "In cognitive psychology and neuro-symbolic AI, how many cognitive systems (System 1 fast/perceptual, System 2 slow/deliberative) are defined in Kahneman's dual-process model?",
    "placeholder": "Systems count...",
    "unit": "Systems",
    "targetValue": 2.0,
    "tolerance": 0.1,
    "solution": "Kahneman's dual-process model defines exactly 2 systems: System 1 (rapid, intuitive, neural pattern recognition) and System 2 (deliberate, analytical, symbolic logical deduction)."
  },
  {
    "id": "prac-d3m14",
    "day": "day-3-reasoning-integration",
    "mod": "mod-14",
    "question": "What is the total duration of focused study hours designed into this 3-day NUS-ISS intensive revision platform (12 hours per day)?",
    "placeholder": "Total hours...",
    "unit": "Hours",
    "targetValue": 36.0,
    "tolerance": 1.0,
    "solution": "Duration: 3 study days $\\times 12\\text{ focused hours/day} = \\mathbf{36.0\\text{ hours}}$."
  }
],

  // User state
  diagAnswers: {},   // qId -> selectedOptionIndex
  diagSubmitted: {}, // qId -> boolean
  pracSubmitted: {}, // pId -> boolean

  initModule: function(modId, dayId) {
    if (!dayId && window.app) dayId = window.app.currentDayId;
    const shortDay = this.shortDay(dayId);

    const aliasMap = {
      'level-0': 'mod-1',
      'level-1': (shortDay === 'd1' ? 'mod-8' : (shortDay === 'd2' ? 'mod-1' : 'mod-1')),
      'level-2': (shortDay === 'd1' ? 'mod-2' : (shortDay === 'd2' ? 'mod-3' : 'mod-2')),
      'level-3': (shortDay === 'd1' ? 'mod-9' : (shortDay === 'd2' ? 'mod-4' : 'mod-7')),
      'level-4': (shortDay === 'd1' ? 'mod-4' : (shortDay === 'd2' ? 'mod-5' : 'mod-11')),
      'level-5': (shortDay === 'd1' ? 'mod-6' : (shortDay === 'd2' ? 'mod-6' : 'mod-13')),
      'level-6': (shortDay === 'd1' ? 'mod-10' : (shortDay === 'd2' ? 'mod-7' : 'mod-14'))
    };

    const targetMod = aliasMap[modId] || modId;
    const modNum = targetMod.replace('mod-', '');

    // Mount Question 1
    const q1Mount = document.getElementById(`diag-mount-${targetMod}-q1`) || document.getElementById(`diag-mount-${modId}-q1`);
    if (q1Mount) {
      const q1Id = `diag-${shortDay}m${modNum}-q1`;
      this.renderDiagnostic(q1Mount.id, q1Id);
    }

    // Mount Question 2
    const q2Mount = document.getElementById(`diag-mount-${targetMod}-q2`) || document.getElementById(`diag-mount-${modId}-q2`);
    if (q2Mount) {
      const q2Id = `diag-${shortDay}m${modNum}-q2`;
      this.renderDiagnostic(q2Mount.id, q2Id);
    }

    // Mount Practice
    const pracMount = document.getElementById(`prac-mount-${targetMod}`) || document.getElementById(`prac-mount-${modId}`);
    if (pracMount) {
      const pId = `prac-${shortDay}m${modNum}`;
      this.renderPractice(pracMount.id, pId);
    }

    // Also mount any other unmounted items on the page
    this.mountAll();
  },

  mountAll: function() {
    const dayId = window.app?.currentDayId || 'day-1-classical-ml';
    const shortDay = this.shortDay(dayId);

    document.querySelectorAll('[id^="diag-mount-"]').forEach(el => {
      if (el.children.length === 0) {
        const m = el.id.match(/diag-mount-(?:mod-)?(\d+)-q([12])/);
        if (m) {
          const qId = `diag-${shortDay}m${m[1]}-q${m[2]}`;
          this.renderDiagnostic(el.id, qId);
        }
      }
    });

    document.querySelectorAll('[id^="prac-mount-"]').forEach(el => {
      if (el.children.length === 0) {
        const m = el.id.match(/prac-mount-(?:mod-)?(\d+)/);
        if (m) {
          const pId = `prac-${shortDay}m${m[1]}`;
          this.renderPractice(el.id, pId);
        }
      }
    });
  },

  shortDay: function(dayId) {
    if (!dayId) return 'd1';
    if (dayId.includes('day-1')) return 'd1';
    if (dayId.includes('day-2')) return 'd2';
    if (dayId.includes('day-3')) return 'd3';
    return 'd1';
  },

  // -------------------------------------------------------------------------
  // DIAGNOSTIC QUESTIONS CONTROLLER
  // -------------------------------------------------------------------------
  renderDiagnostic: function(containerId, qId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const q = this.diagnostics.find(item => item.id === qId);
    if (!q) {
      container.innerHTML = `<div style="font-size:0.82rem; color:var(--text-muted);">Diagnostic question not found.</div>`;
      return;
    }

    const selectedIdx = this.diagAnswers[qId];
    const isSubmitted = Boolean(this.diagSubmitted[qId]);
    const isCorrect = selectedIdx === q.correctIndex;

    let html = `
      <div class="diagnostic-card" id="card-${qId}" style="background:var(--bg-card); padding:14px; border-radius:8px; border:1px solid var(--border-color);">
        <div style="font-size:0.86rem; font-weight:600; color:var(--text-primary); margin-bottom:8px; line-height:1.45;">
          ${q.q}
        </div>

        <div class="quiz-options-list" style="margin-bottom:10px;">
          ${q.options.map((opt, optIdx) => {
            let cls = 'quiz-option';
            if (isSubmitted) {
              if (optIdx === q.correctIndex) cls += ' opt-correct';
              else if (optIdx === selectedIdx && !isCorrect) cls += ' opt-wrong';
            } else if (selectedIdx === optIdx) {
              cls += ' opt-selected';
            }
            return `
              <div class="${cls}" id="diag-opt-${qId}-${optIdx}" onclick="window.AssessmentEngine.selectDiag('${qId}', ${optIdx})" style="cursor:${isSubmitted ? 'default' : 'pointer'};">
                <span class="opt-indicator">${String.fromCharCode(65 + optIdx)}</span>
                <span class="opt-text">${opt}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div style="display:flex; gap:8px; align-items:center;">
          <button class="btn btn-sm btn-primary" id="btn-submit-${qId}" ${isSubmitted ? 'disabled' : ''} onclick="window.AssessmentEngine.submitDiag('${qId}')">
            <i data-lucide="check-circle" style="width:13px; height:13px; vertical-align:middle;"></i> Check Answer
          </button>
          ${isSubmitted ? `
            <button class="btn btn-sm btn-outline" onclick="window.AssessmentEngine.resetDiag('${qId}')">
              <i data-lucide="rotate-ccw" style="width:13px; height:13px; vertical-align:middle;"></i> Retry
            </button>
          ` : ''}
        </div>

        ${isSubmitted ? `
          <div class="mt-2 p-2" style="border-radius:6px; font-size:0.83rem; line-height:1.45; background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'}; border-left:3px solid ${isCorrect ? '#10b981' : '#ef4444'};">
            <strong style="color:${isCorrect ? '#10b981' : '#ef4444'};">
              ${isCorrect ? '✓ Correct!' : '✗ Incorrect. Review Solution:'}
            </strong>
            <p style="margin:4px 0 0 0; color:var(--text-primary);">${q.explanation}</p>
          </div>
        ` : ''}
      </div>
    `;

    container.innerHTML = html;
    if (window.renderLatex) window.renderLatex(container);
    if (window.lucide) window.lucide.createIcons();
  },

  selectDiag: function(qId, optIdx) {
    if (this.diagSubmitted[qId]) return;
    this.diagAnswers[qId] = optIdx;

    const q = this.diagnostics.find(item => item.id === qId);
    if (!q) return;

    q.options.forEach((_, idx) => {
      const el = document.getElementById(`diag-opt-${qId}-${idx}`);
      if (el) {
        if (idx === optIdx) el.classList.add('opt-selected');
        else el.classList.remove('opt-selected');
      }
    });
  },

  submitDiag: function(qId) {
    const q = this.diagnostics.find(item => item.id === qId);
    if (!q) return;

    const selectedIdx = this.diagAnswers[qId];
    if (selectedIdx === undefined) {
      alert('Please select an option before checking your answer.');
      return;
    }

    this.diagSubmitted[qId] = true;
    const isCorrect = selectedIdx === q.correctIndex;

    // Log mistake to MasteryTracker if incorrect
    if (!isCorrect && window.MasteryTracker && typeof window.MasteryTracker.logMistake === 'function') {
      window.MasteryTracker.logMistake({
        id: `err_${qId}_${Date.now()}`,
        topic: q.mod || 'Diagnostic Assessment',
        exam: q.day?.includes('day-1') ? 'PRS' : (q.day?.includes('day-2') ? 'PRS' : 'IRS'),
        question: q.q,
        myAnswer: q.options[selectedIdx],
        correctAnswer: q.options[q.correctIndex],
        errorType: 'Diagnostic Conceptual Gap',
        explanation: q.explanation
      });
    }

    // Re-render this question card with solution
    const cardEl = document.getElementById(`card-${qId}`);
    if (cardEl && cardEl.parentElement) {
      this.renderDiagnostic(cardEl.parentElement.id, qId);
    }
  },

  resetDiag: function(qId) {
    delete this.diagAnswers[qId];
    delete this.diagSubmitted[qId];

    const cardEl = document.getElementById(`card-${qId}`);
    if (cardEl && cardEl.parentElement) {
      this.renderDiagnostic(cardEl.parentElement.id, qId);
    }
  },

  // -------------------------------------------------------------------------
  // INDEPENDENT PRACTICE CONTROLLER
  // -------------------------------------------------------------------------
  renderPractice: function(containerId, pId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const p = this.practices.find(item => item.id === pId);
    if (!p) {
      container.innerHTML = `<div style="font-size:0.82rem; color:var(--text-muted);">Practice exercise loading...</div>`;
      return;
    }

    const isSubmitted = Boolean(this.pracSubmitted[pId]);
    const attemptVal = this['pracVal_' + pId];
    const isCorrect = isSubmitted && typeof attemptVal === 'number' && Math.abs(attemptVal - p.targetValue) <= p.tolerance;

    let html = `
      <div class="practice-exercise-card" id="pcard-${pId}" style="font-size:0.9rem;">
        <p style="margin:0 0 10px 0; color:var(--text-primary); line-height:1.55;">
          <strong>Exercise:</strong> ${p.question}
        </p>

        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap; margin-bottom:8px;">
          <input type="number" step="any" id="inp-${pId}" value="${attemptVal !== undefined ? attemptVal : ''}" placeholder="${p.placeholder || 'Answer...'}" ${isSubmitted ? 'disabled' : ''} style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:160px; font-size:0.9rem;">
          
          <button class="btn btn-sm btn-primary" id="btn-prac-sub-${pId}" ${isSubmitted ? 'disabled' : ''} onclick="window.AssessmentEngine.submitPractice('${pId}')">
            <i data-lucide="check-circle" style="width:13px; height:13px; vertical-align:middle;"></i> Submit Answer
          </button>

          ${isSubmitted ? `
            <button class="btn btn-sm btn-outline" onclick="window.AssessmentEngine.resetPractice('${pId}')">
              <i data-lucide="rotate-ccw" style="width:13px; height:13px; vertical-align:middle;"></i> Retry Exercise
            </button>
          ` : ''}
        </div>

        ${isSubmitted ? `
          <div class="mt-2 p-3" style="border-radius:6px; font-size:0.86rem; line-height:1.55; background:${isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'}; border-left:4px solid ${isCorrect ? '#10b981' : '#ef4444'};">
            <strong style="color:${isCorrect ? '#10b981' : '#ef4444'}; font-size:0.92rem;">
              ${isCorrect ? '✓ Correct! Exact Numerical Solution Verified' : '✗ Incorrect. Walkthrough & Expected Derivation:'}
            </strong>
            <div style="margin-top:6px; color:var(--text-primary);">
              ${p.solution}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    container.innerHTML = html;
    if (window.renderLatex) window.renderLatex(container);
    if (window.lucide) window.lucide.createIcons();
  },

  submitPractice: function(pId) {
    const p = this.practices.find(item => item.id === pId);
    if (!p) return;

    const inp = document.getElementById(`inp-${pId}`);
    if (!inp) return;

    const val = parseFloat(inp.value);
    if (isNaN(val)) {
      alert('Please enter a numerical answer.');
      return;
    }

    this['pracVal_' + pId] = val;
    this.pracSubmitted[pId] = true;

    const isCorrect = Math.abs(val - p.targetValue) <= p.tolerance;

    // Log mistake to MasteryTracker if wrong
    if (!isCorrect && window.MasteryTracker && typeof window.MasteryTracker.logMistake === 'function') {
      window.MasteryTracker.logMistake({
        id: `err_prac_${pId}_${Date.now()}`,
        topic: p.mod || 'Independent Numerical Practice',
        exam: p.day?.includes('day-1') ? 'PRS' : (p.day?.includes('day-2') ? 'PRS' : 'IRS'),
        question: p.question,
        myAnswer: String(val) + (p.unit ? ' ' + p.unit : ''),
        correctAnswer: String(p.targetValue) + (p.unit ? ' ' + p.unit : ''),
        errorType: 'Mathematical Calculation Error',
        explanation: p.solution
      });
    }

    const cardEl = document.getElementById(`pcard-${pId}`);
    if (cardEl && cardEl.parentElement) {
      this.renderPractice(cardEl.parentElement.id, pId);
    }
  },

  resetPractice: function(pId) {
    delete this['pracVal_' + pId];
    delete this.pracSubmitted[pId];

    const cardEl = document.getElementById(`pcard-${pId}`);
    if (cardEl && cardEl.parentElement) {
      this.renderPractice(cardEl.parentElement.id, pId);
    }
  }
};

// Backward compatibility alias
window.DiagnosticEngine = window.AssessmentEngine;
window.PracticeEngine = window.AssessmentEngine;

console.log("AssessmentEngine (Diagnostic & Practice) initialized successfully.");
