// Day 10 Slide Mastery Quizzes: The Grand A+ Mock Exam Crucible (20 High-Yield Exam Questions)
// 10 Questions Pattern Recognition Systems (PSUPR, ISSM, PRMLS) + 10 Questions Intelligent Reasoning Systems (MR, CS, RS)

window.DAY10_ENSEMBLES_CRUCIBLE_QUIZZES = [
  // =========================================================================
  // PART 1: PATTERN RECOGNITION SYSTEMS (PRS) — Questions 1 to 10
  // =========================================================================
  {
    id: "d10-q1",
    module: "Paper 1: PSUPR — Naive Bayes Laplace Smoothing",
    slideRef: "PSUPR Day 2 Slide 15-22",
    question: "A spam filter is trained on $N = 10,000$ spam words across a vocabulary of $|V| = 2,500$ unique words. A new incoming email contains the word 'Crypto', which appeared 0 times in the spam training corpus. What is the Laplace-smoothed estimate $P(\\text{'Crypto'} \\mid \\text{Spam})$ using add-1 smoothing?",
    options: [
      "$\\frac{0 + 1}{10,000 + 2,500} = \\frac{1}{12,500} = 0.00008$",
      "$\\frac{0}{10,000} = 0$",
      "$\\frac{1}{10,000} = 0.00010$",
      "$\\frac{1}{2,500} = 0.00040$"
    ],
    correctIndex: 0,
    hint: "Remember the Laplace smoothing formula: $P(w \\mid c) = \\frac{\\text{count}(w, c) + 1}{\\sum_{w'} \\text{count}(w', c) + |V|}$. You must add $|V|$ to the denominator!",
    explanation: "Add-1 smoothing increments the numerator by 1 and the denominator by $|V|$ to ensure the probabilities across all $|V|$ vocabulary words sum to exactly 1.0. Therefore: $P = 1 / (10,000 + 2,500) = 1 / 12,500 = 0.00008$."
  },
  {
    id: "d10-q2",
    module: "Paper 1: PSUPR — k-Nearest Neighbors & Dimensionality",
    slideRef: "PSUPR Day 2 Slide 28-34",
    question: "When applying $k$-Nearest Neighbors ($k$-NN) to high-dimensional sensory data ($D = 500$), why does performance degrade drastically, and what is the optimal remedy?",
    options: [
      "The Curse of Dimensionality causes distance distributions to concentrate (ratio of distance to nearest vs furthest neighbor approaches 1.0), making all neighbors equally distant; applying PCA or LDA for dimensionality reduction before $k$-NN restores metric discrimination.",
      "Because $k$-NN cannot calculate Euclidean distances when $D > 10$.",
      "Because odd values of $k$ cause infinite loops in high dimensions.",
      "Because high-dimensional data makes training time quadratic in $D$."
    ],
    correctIndex: 0,
    hint: "As dimension grows, the volume of the space grows exponentially and data points become isolated in the corners of the hypercube.",
    explanation: "In high dimensions, the distance between any two random vectors approaches a constant. Thus, Euclidean distance loses discriminative power. Reducing dimensionality (via PCA, t-SNE, or autoencoders) or selecting informative features is mandatory."
  },
  {
    id: "d10-q3",
    module: "Paper 1: PSUPR — Cumulative Lift & ROC Curves",
    slideRef: "PSUPR Day 3 Slide 18-25",
    question: "A bank marketing dataset has a baseline conversion rate of $5.0\\%$ (50 positive responders out of 1,000 customers). A machine learning model identifies 35 positive responders in the top decile (top $10\\% = 100$ customers). What is the model's Cumulative Lift in the top decile?",
    options: [
      "$\\text{Lift} = \\frac{35 / 100}{50 / 1000} = \\frac{35\\%}{5\\%} = 7.0$",
      "$\\text{Lift} = 35 - 5 = 30.0$",
      "$\\text{Lift} = \\frac{35}{50} = 0.70$",
      "$\\text{Lift} = 100 / 1000 = 0.10$"
    ],
    correctIndex: 0,
    hint: "Cumulative Lift is the ratio of the model's hit rate in the selected top fraction to the random baseline hit rate: $\\text{Lift} = \\frac{\\text{Precision at } K}{\\text{Overall Baseline Prevalence}}$.",
    explanation: "Top decile precision is $35 / 100 = 35\\%$. The overall population response rate is $50 / 1000 = 5\\%$. Cumulative Lift = $35\\% / 5\\% = 7.0$. The model is 7 times better than random targeting!"
  },
  {
    id: "d10-q4",
    module: "Paper 1: ISSM — Nyquist Sampling & Aliasing",
    slideRef: "ISSM Day 1 Slide 12-18",
    question: "An industrial motor produces acoustic vibration frequencies up to $f_{\\max} = 4,000\\text{ Hz}$. What is the absolute minimum Nyquist sampling rate $f_s$, and what hardware filter must precede the Analog-to-Digital Converter (ADC)?",
    options: [
      "$f_s > 8,000\\text{ Hz}$, preceded by an Analog Low-Pass Anti-Aliasing Filter with cutoff at $4,000\\text{ Hz}$ to prevent high-frequency noise from folding back into the audible spectrum.",
      "$f_s = 4,000\\text{ Hz}$, preceded by a High-Pass Filter.",
      "$f_s = 2,000\\text{ Hz}$, preceded by a Kalman filter.",
      "$f_s = 100,000\\text{ Hz}$, preceded by a software FFT."
    ],
    correctIndex: 0,
    hint: "Nyquist-Shannon Theorem: $f_s > 2 f_{\\max}$. Once an analog signal is sampled below Nyquist, aliasing frequencies are permanently baked into the data and cannot be removed by digital filtering!",
    explanation: "The sampling rate must be strictly greater than $2 f_{\\max} = 8,000\\text{ Hz}$. An analog low-pass anti-aliasing filter before digitization is essential, because any analog frequency component above $f_s / 2$ will fold back into lower frequencies and corrupt the measurement."
  },
  {
    id: "d10-q5",
    module: "Paper 1: ISSM — Baseline Drift Correction",
    slideRef: "ISSM Day 2 Slide 20-27",
    question: "In Raman spectroscopy and ECG sensing, why is Asymmetric Reweighted Penalized Least Squares (arPLS) vastly superior to standard polynomial fitting for baseline drift correction?",
    options: [
      "Standard polynomial fitting is pulled upwards by genuine signal peaks (distorting true peak heights), whereas arPLS uses asymmetric weighting that assigns near-zero weights to positive peaks and unit weights only to the true baseline valleys.",
      "Because arPLS runs in $O(1)$ constant time.",
      "Because polynomial fitting only works on 2D images.",
      "Because arPLS eliminates the need for sensor calibration."
    ],
    correctIndex: 0,
    hint: "Peaks are physical signal; valleys are baseline. If your baseline algorithm treats positive peaks symmetrically, it gets dragged up into the peaks!",
    explanation: "arPLS balances smoothness (via a difference penalty matrix) with fidelity to valleys by iteratively down-weighting any points that rise above the estimated baseline. This allows it to ride underneath narrow peaks without chopping off signal amplitude."
  },
  {
    id: "d10-q6",
    module: "Paper 1: ISSM — Multimodal Sensor Fusion",
    slideRef: "ISSM Day 4 Slide 14-22",
    question: "In an autonomous vehicle sensing suite combining LiDAR (sparse 3D points at 10 Hz) and Radar (range-doppler at 50 Hz), why is Late Fusion (Decision-Level) preferred over Early Fusion (Feature-Level)?",
    options: [
      "Because Late Fusion natively handles asynchronous sensor sampling rates and provides modular fault tolerance (the vehicle continues operating safely even if LiDAR is blinded by heavy rain or fog).",
      "Because Early Fusion cannot run on GPUs.",
      "Because Late Fusion requires zero training data.",
      "Because Radar and LiDAR have the exact same spatial resolution."
    ],
    correctIndex: 0,
    hint: "Think about modularity: what happens in early feature concatenation if one sensor drops offline or operates at a 5x slower refresh rate?",
    explanation: "Early fusion requires strict synchronous alignment and breaks if one sensor stream fails. Late fusion trains specialized detectors per modality and combines their bounding boxes/trackers via Bayesian filtering or Hungarian association, providing high robustness to single-sensor failure."
  },
  {
    id: "d10-q7",
    module: "Paper 1: PRMLS — Decision Trees: Gain vs Gain Ratio",
    slideRef: "PRMLS Day 1 Slide 22-29",
    question: "In Quinlan's Decision Tree algorithms (ID3 vs C4.5), why was Information Gain replaced by Gain Ratio as the splitting criterion?",
    options: [
      "Information Gain exhibits a strong bias towards attributes with large numbers of distinct values (e.g. 'Customer_ID'), creating wide, shallow trees that overfit; Gain Ratio normalizes Information Gain by Split Information (the intrinsic entropy of the attribute partition).",
      "Because Information Gain cannot be computed for binary attributes.",
      "Because Gain Ratio eliminates the need for calculating logarithms.",
      "Because C4.5 only trains on continuous features."
    ],
    correctIndex: 0,
    hint: "If an attribute has 1000 unique IDs for 1000 samples, each leaf has 1 sample (Entropy = 0), yielding massive Information Gain but zero generalization! How does Gain Ratio penalize this?",
    explanation: "Quinlan introduced Gain Ratio: $\\text{GainRatio}(A) = \\frac{\\text{Gain}(A)}{\\text{SplitInfo}(A)}$, where $\\text{SplitInfo}(A) = -\\sum \\frac{|S_v|}{|S|} \\log_2 \\frac{|S_v|}{|S|}$. An attribute like Customer_ID has massive Split Information, which penalizes the Gain Ratio back down to zero."
  },
  {
    id: "d10-q8",
    module: "Paper 1: PRMLS — SVM Soft Margin & Kernel RBF",
    slideRef: "PRMLS Day 2 Slide 14-23",
    question: "In a Support Vector Machine with an RBF kernel $K(x, x') = \\exp(-\\gamma \\|x - x'\\|^2)$ and soft-margin penalty $C$, what happens if both $C$ and $\\gamma$ are set to extremely large values?",
    options: [
      "Severe overfitting: high $C$ enforces zero tolerance for margin violations (forcing slack $\\xi_i \\to 0$), and high $\\gamma$ makes the Gaussian bell curve extremely narrow, causing the decision boundary to wrap tightly around individual training points.",
      "Underfitting: the decision boundary becomes a flat hyperplane.",
      "The margin width becomes infinite.",
      "The SVM converts into a linear regression model."
    ],
    correctIndex: 0,
    hint: "High $C$ penalizes errors severely (hard margin). High $\\gamma$ means only very close neighbors influence the classification, creating isolated islands around training points.",
    explanation: "A high $C$ penalizes slack variables heavily, disallowing misclassifications. A high $\\gamma$ shrinks the radius of influence of support vectors. Combining both creates high-variance, highly convoluted decision boundaries that memorize training noise."
  },
  {
    id: "d10-q9",
    module: "Paper 1: PRMLS — PCA vs LDA Optimization",
    slideRef: "PRMLS Day 2 Slide 35-42",
    question: "What is the exact mathematical optimization objective of Fisher's Linear Discriminant Analysis (LDA) compared to Principal Component Analysis (PCA)?",
    options: [
      "LDA maximizes the Rayleigh quotient of between-class scatter to within-class scatter $J(w) = \\frac{w^T S_B w}{w^T S_W w}$ using class labels; PCA maximizes total variance $w^T \\Sigma w$ without using any class labels (unsupervised).",
      "LDA minimizes variance while PCA maximizes classification error.",
      "LDA finds orthogonal axes; PCA finds non-orthogonal axes.",
      "LDA is non-linear while PCA is purely non-parametric."
    ],
    correctIndex: 0,
    hint: "PCA cares only about spread (unsupervised). LDA wants classes to be far apart ($S_B$ large) and each class cluster to be tight ($S_W$ small).",
    explanation: "PCA projects data onto directions of maximal variance regardless of class labels. LDA is supervised and finds a projection $w$ that simultaneously maximizes the separation between class centroids ($S_B$) and minimizes the spread within each class ($S_W$)."
  },
  {
    id: "d10-q10",
    module: "Paper 1: PRMLS — CNN Parameter Counting",
    slideRef: "PRMLS Day 3a Slide 24-30",
    question: "A Convolutional layer takes an input tensor of shape $32 \\times 32 \\times 64$ ($H \\times W \\times C_{\\text{in}}$) and applies 128 filters of size $5 \\times 5$ with stride 1 and padding 2. What is the total number of trainable parameters in this layer?",
    options: [
      "$128 \\times (5 \\times 5 \\times 64 + 1) = 128 \\times (1,600 + 1) = 204,928$ parameters",
      "$128 \\times 5 \\times 5 = 3,200$ parameters",
      "$32 \\times 32 \\times 128 = 131,072$ parameters",
      "$128 \\times 64 = 8,192$ parameters"
    ],
    correctIndex: 0,
    hint: "Every filter must extend across all input channels $C_{\\text{in}} = 64$. Do not forget the $+1$ bias term per filter!",
    explanation: "Each filter has kernel size $F \\times F \\times C_{\\text{in}} = 5 \\times 5 \\times 64 = 1,600$ weights, plus 1 bias term $= 1,601$ parameters. With $K = 128$ filters: $128 \\times 1,601 = 204,928$ trainable parameters."
  },

  // =========================================================================
  // PART 2: INTELLIGENT REASONING SYSTEMS (IRS) — Questions 11 to 20
  // =========================================================================
  {
    id: "d10-q11",
    module: "Paper 2: Machine Reasoning — A* Heuristic Consistency",
    slideRef: "MR Day 1 Slide 22-30",
    question: "In $A^*$ graph search, why is heuristic Consistency (Monotonicity) $h(n) \\le c(n, a, n') + h(n')$ a stronger condition than simple Admissibility $h(n) \\le h^*(n)$?",
    options: [
      "Consistency guarantees that the evaluation function $f(n) = g(n) + h(n)$ is monotonically non-decreasing along any path, ensuring that the first time $A^*$ expands a node, the shortest path to that node is already found (no node re-expansions needed in Graph Search).",
      "Consistency allows $A^*$ to search backwards from the goal.",
      "Consistency guarantees that the heuristic is equal to zero.",
      "Admissible heuristics always require exponential time $O(2^N)$."
    ],
    correctIndex: 0,
    hint: "Triangle inequality: $h(n) - h(n') \\le c(n, a, n')$. The cost step is never underestimated relative to the heuristic drop.",
    explanation: "Admissibility ensures optimality in Tree Search. In Graph Search (where nodes can be reached via multiple paths), an admissible but inconsistent heuristic may require re-opening previously closed nodes. A consistent heuristic guarantees optimal paths on first expansion."
  },
  {
    id: "d10-q12",
    module: "Paper 2: Machine Reasoning — CSP Backtracking & MRV",
    slideRef: "MR Day 1 Slide 34-42",
    question: "When solving a Constraint Satisfaction Problem (CSP) like N-Queens or Map Coloring, why does the Minimum Remaining Values (MRV) heuristic dramatically prune the search tree?",
    options: [
      "MRV ('Fail-First' principle) selects the variable with the fewest legal values remaining, causing unfeasible subtrees to fail as early as possible before wasting time branching on wide sub-problems.",
      "MRV selects variables with the largest domain to maximize branching.",
      "MRV converts the CSP into a linear programming problem.",
      "MRV eliminates the need for backtracking."
    ],
    correctIndex: 0,
    hint: "If variable X has only 1 legal value left and variable Y has 5 legal values left, which one should you assign first to detect contradictions immediately?",
    explanation: "MRV selects the most constrained variable. By picking variables that are close to failure (fewest remaining values), search detects dead ends immediately at shallow depths, preventing massive exponential subtree expansions."
  },
  {
    id: "d10-q13",
    module: "Paper 2: Machine Reasoning — BBN d-Separation Colliders",
    slideRef: "MR Day 2 Slide 18-26",
    question: "In a Bayesian Belief Network structure $X \\to Z \\leftarrow Y$ (a Collider / V-structure), what is the conditional independence relationship between $X$ and $Y$?",
    options: [
      "$X$ and $Y$ are marginally independent ($X \\perp Y$), but become conditionally DEPENDENT given $Z$ (or given any descendant of $Z$) due to 'explaining away'.",
      "$X$ and $Y$ are always conditionally independent given $Z$.",
      "$X$ and $Y$ are always dependent regardless of $Z$.",
      "$Z$ has no causal connection to $X$ or $Y$."
    ],
    correctIndex: 0,
    hint: "Earthquake $\\to$ Alarm $\\leftarrow$ Burglary. If the alarm rings, and you confirm an earthquake just occurred, does the probability of a burglary increase or decrease?",
    explanation: "In a collider, the path is naturally blocked when $Z$ is unobserved (marginal independence). However, conditioning on $Z$ (or its descendants) activates the path, making $X$ and $Y$ dependent because learning one cause 'explains away' the other."
  },
  {
    id: "d10-q14",
    module: "Paper 2: Machine Reasoning — TransE Relation Limitations",
    slideRef: "MR Day 3 Slide 20-27",
    question: "In Knowledge Graph Embeddings, why does the standard TransE translation model $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$ fundamentally struggle with symmetric relations (e.g. `is_married_to`) and 1-to-$N$ relations (e.g. `has_child`)?",
    options: [
      "For symmetric relations ($h, r, t$ and $t, r, h$), TransE forces $\\mathbf{r} = \\mathbf{0}$ and $\\mathbf{h} = \\mathbf{t}$. For 1-to-$N$ relations, it forces all distinct tails to map to the exact same vector $\\mathbf{t}_1 = \\mathbf{t}_2 = \\mathbf{h} + \\mathbf{r}$.",
      "Because TransE vectors can only contain positive numbers.",
      "Because TransE requires all relations to be directed acyclic graphs.",
      "Because TransE cannot be trained using stochastic gradient descent."
    ],
    correctIndex: 0,
    hint: "If $\\mathbf{h} + \\mathbf{r} = \\mathbf{t}$ and $\\mathbf{t} + \\mathbf{r} = \\mathbf{h}$, add them together: $2\\mathbf{r} = \\mathbf{0} \\implies \\mathbf{r} = \\mathbf{0}$, which forces $\\mathbf{h} = \\mathbf{t}$!",
    explanation: "TransE treats relations as strict geometric translations in Euclidean space. Symmetric relations collapse the relation vector to zero and conflate entities. Advanced models like TransH (hyperplane projection), TransR (relation-specific spaces), or ComplEx (Hermitian dot products) resolve this."
  },
  {
    id: "d10-q15",
    module: "Paper 2: Cognitive Systems — Case-Based Reasoning (CBR) 4R Cycle",
    slideRef: "CS Day 1 PM Slide 14-22",
    question: "What is the correct sequential order and purpose of the 4 steps in the Case-Based Reasoning (CBR) lifecycle?",
    options: [
      "Retrieve the most similar past case(s); Reuse the retrieved case's solution to propose a new solution; Revise the proposed solution via testing/simulation; Retain the validated experience in the Case Base for future learning.",
      "Record, Recall, Reset, Return.",
      "Reduce, Re-estimate, Re-fit, Reject.",
      "Regress, Re-evaluate, Re-rank, Replace."
    ],
    correctIndex: 0,
    hint: "A doctor sees symptoms, remembers a similar patient, adapts the dosage, monitors the patient's recovery, and logs the clinical outcome.",
    explanation: "Aamodt and Plaza's classical 4R cycle: 1) RETRIEVE matching historical cases, 2) REUSE the past solution, 3) REVISE the adapted solution based on domain constraints or real feedback, and 4) RETAIN the new successful experience in the memory store."
  },
  {
    id: "d10-q16",
    module: "Paper 2: Cognitive Systems — ACT-R Memory Systems",
    slideRef: "CS Day 3 Slide 18-26",
    question: "In the ACT-R cognitive architecture, what is the functional difference between Declarative Memory and Procedural Memory?",
    options: [
      "Declarative memory stores factual chunks ('knowing that'), divided into Episodic (events with time/space tags) and Semantic (general knowledge); Procedural memory stores production rules ('knowing how') executed by matching working memory buffers.",
      "Declarative memory is short-term cache; Procedural memory is long-term tape backup.",
      "Declarative memory is used only for image processing; Procedural memory is for text.",
      "Declarative memory cannot be retrieved once stored."
    ],
    correctIndex: 0,
    hint: "Difference between knowing Singapore is a country (declarative) vs knowing how to balance on a bicycle (procedural).",
    explanation: "Declarative memory holds facts and experiences as structured chunks that are retrieved into working memory based on activation levels. Procedural memory consists of condition-action production rules that match current buffer states to fire actions."
  },
  {
    id: "d10-q17",
    module: "Paper 2: Cognitive Systems — ReAct Agent Loops",
    slideRef: "CS Day 3 Slide 32-38",
    question: "How does the ReAct (Reasoning + Acting) pattern solve the problem of factual hallucination in LLM-based autonomous agents?",
    options: [
      "By interleaving explicit reasoning steps ('Thought') with external tool calls ('Action') and grounding next-step thoughts on factual environmental feedback ('Observation'), breaking the closed hallucination loop.",
      "By setting the LLM temperature parameter to 10.0.",
      "By retraining the transformer foundation model weights on every prompt.",
      "By converting all prompts into SQL database queries."
    ],
    correctIndex: 0,
    hint: "Thought decomposes the problem -> Action queries the environment -> Observation returns ground truth.",
    explanation: "Without actions, an LLM generates plausibly sounding but hallucinated facts. In ReAct, the agent calls external search APIs, databases, or calculators. The returned 'Observation' is injected into the context window as verifiable ground truth."
  },
  {
    id: "d10-q18",
    module: "Paper 2: Reasoning Systems — Rule Chaining & Conflict Resolution",
    slideRef: "RS Day 3 Slide 15-24",
    question: "In an Expert System Rule Engine, when should you choose Forward Chaining versus Backward Chaining?",
    options: [
      "Use Forward Chaining (data-driven) when you have abundant initial facts and want to deduce all possible conclusions (e.g. sensor monitoring, alarm interpretation); use Backward Chaining (goal-driven) when you have a specific hypothesis to verify and want to gather only the necessary facts (e.g. medical diagnosis, loan approval).",
      "Forward chaining is for continuous numbers; backward chaining is for text.",
      "Forward chaining only uses NOT operators; backward chaining only uses AND operators.",
      "Backward chaining is obsolete and never used in production."
    ],
    correctIndex: 0,
    hint: "Data-driven bottom-up (facts $\\to$ conclusions) vs Goal-driven top-down (hypotheses $\\to$ sub-goals $\\to$ required facts).",
    explanation: "Forward chaining starts with available data and fires rules whose conditions are met until no more facts can be derived. Backward chaining starts with a query hypothesis and works backward to see if supporting evidence exists in working memory."
  },
  {
    id: "d10-q19",
    module: "Paper 2: Reasoning Systems — GA Permutation Order Crossover (OX)",
    slideRef: "RS Day 4 Slide 28-36",
    question: "Parent 1 has tour $[1, 2, 3, 4, 5, 6, 7, 8]$ and Parent 2 has $[8, 7, 6, 5, 4, 3, 2, 1]$. We apply Order Crossover (OX) with cut points after index 2 and index 5 (middle segment $[3, 4, 5]$). How does OX construct Child 1?",
    options: [
      "Child 1 inherits $[3, 4, 5]$ in positions 3 to 5 from Parent 1, then the remaining positions are filled using Parent 2's cities starting after the second cut point ($[3, 2, 1, 8, 7, 6, 5, 4]$), skipping cities already present ($\\{3, 4, 5\\}$), producing a valid non-repeating permutation.",
      "Child 1 simply swaps the entire middle segment with Parent 2, allowing duplicate cities.",
      "Child 1 deletes all odd-numbered cities.",
      "Child 1 sorts all cities in ascending numerical order."
    ],
    correctIndex: 0,
    hint: "In permutation problems, cities cannot repeat. OX copies the preserved slice, then cycles through the other parent preserving relative sequence order without duplicating existing genes.",
    explanation: "Order Crossover guarantees a valid permutation without duplicate or missing genes by copying a contiguous slice directly from Parent 1 and filling the remaining positions with genes from Parent 2 in their circular order, dropping duplicates."
  },
  {
    id: "d10-q20",
    module: "Paper 2: Reasoning Systems — Collaborative Filtering Normalization",
    slideRef: "RS Day 2 Slide 20-28",
    question: "In User-User Collaborative Filtering, why is Mean-Centered Pearson Correlation $\\hat{r}_{u, i} = \\bar{r}_u + \\frac{\\sum_{v} \\text{sim}(u, v)(r_{v, i} - \\bar{r}_v)}{\\sum_v |\\text{sim}(u, v)|}$ strictly superior to a raw average of neighbor ratings?",
    options: [
      "Because it normalizes for user rating bias: strict users who rate everything between 1 and 3 are calibrated against lenient users who give 4s and 5s to everything, focusing recommendations on relative deviations above or below a user's personal baseline.",
      "Because raw averages cannot be computed when ratings are integers.",
      "Because Pearson correlation eliminates negative numbers from the rating matrix.",
      "Because mean-centering converts the recommendation problem into an SVM."
    ],
    correctIndex: 0,
    hint: "A rating of 3 stars means 'great' to a harsh critic, but 'terrible' to a generous user. How do we compare their opinions on equal footing?",
    explanation: "Different users have different rating scales. Subtracting the user's mean rating $\\bar{r}_v$ isolates their relative preference deviation. Adding back $\\bar{r}_u$ adjusts the final predicted score to the active user's personal scale."
  }
];
