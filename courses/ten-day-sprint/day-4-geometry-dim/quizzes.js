// Day 4 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions
// Focus: Decision Trees, SVM Margins & Kernels, PCA vs LDA, Case-Based Reasoning

window.DAY4_GEOMETRY_DIM_DATA_QUIZZES = [
  {
    id: "d4-q1",
    module: "Pattern Recognition Systems — Decision Trees",
    slideRef: "PSUPR Day 2 Slide 8-12",
    question: "A binary classification dataset has 14 instances: 9 Positive and 5 Negative. What is the Shannon Entropy $H(S)$ of this dataset, and what would it be if all 14 instances were Positive?",
    options: [
      "$H(S) = 0.940$ bits; if all Positive, $H(S) = 0.0$ bits (perfect purity)",
      "$H(S) = 1.000$ bits; if all Positive, $H(S) = 0.5$ bits",
      "$H(S) = 0.500$ bits; if all Positive, $H(S) = 1.0$ bits",
      "$H(S) = 1.414$ bits; if all Positive, $H(S) = 0.0$ bits"
    ],
    correctIndex: 0,
    hint: "Entropy formula: $H(S) = -p_+ \\log_2(p_+) - p_- \\log_2(p_-)$. If all instances belong to one class, $-\\log_2(1) = 0$.",
    explanation: "$H(S) = -\\frac{9}{14}\\log_2\\frac{9}{14} - \\frac{5}{14}\\log_2\\frac{5}{14} = -(0.6429)(-0.6374) - (0.3571)(-1.4854) \\approx 0.4098 + 0.5305 = 0.940$ bits. When all items are positive ($p_+=1, p_-=0$), the system has zero uncertainty, so $H(S) = 0.0$ bits."
  },
  {
    id: "d4-q2",
    module: "Pattern Recognition Systems — Decision Trees",
    slideRef: "PSUPR Day 2 Slide 15-18",
    question: "Why does the standard ID3 algorithm with Information Gain fail disastrously when an attribute like 'Customer_ID' or 'Date' is included in the feature set?",
    options: [
      "Information Gain cannot compute logarithms of integer values.",
      "Information Gain strongly biases towards attributes with many distinct values, creating single-instance pure leaves ($H=0$) that generalize terribly to new test data.",
      "ID3 only accepts binary Boolean features and throws an error on continuous IDs.",
      "Customer_ID causes infinite recursion because values cannot be sorted."
    ],
    correctIndex: 1,
    hint: "If every row has a unique ID, partitioning by ID gives $|S|$ branches with 1 sample each, yielding 0 entropy!",
    explanation: "Because Information Gain $Gain(S, A) = H(S) - \\sum \\frac{|S_v|}{|S|}H(S_v)$, an attribute with unique values partitions data into subsets of size 1 with entropy 0, maximizing Gain. C4.5 solves this flaw by dividing by Split Information: $GainRatio(S, A) = \\frac{Gain(S, A)}{SplitInfo(S, A)}$."
  },
  {
    id: "d4-q3",
    module: "Pattern Recognition Systems — Decision Trees",
    slideRef: "PSUPR Day 2 Slide 20-24",
    question: "In Decision Tree regularization, what is the fundamental operational difference between Pre-Pruning (Early Stopping) and Post-Pruning (Cost-Complexity Pruning)?",
    options: [
      "Pre-pruning halts tree construction while growing if impurity gain drops below a threshold; Post-pruning grows a full unconstrained tree first, then collapses subtrees that do not justify their complexity on validation data.",
      "Pre-pruning requires a validation set; Post-pruning does not require any validation data.",
      "Pre-pruning uses Gini index; Post-pruning can only use Shannon Entropy.",
      "Post-pruning increases tree depth to capture edge-case noise."
    ],
    correctIndex: 0,
    hint: "Pre = stop early before overfitting; Post = grow completely, then prune back leaves that add more complexity than accuracy.",
    explanation: "Pre-pruning stops splitting early (e.g. max_depth, min_samples_split) but risks stopping too early before discovering multi-attribute interactions. Post-pruning grows the tree to completion and prunes bottom-up using cost-complexity $R_\\alpha(T) = R(T) + \\alpha |T|$."
  },
  {
    id: "d4-q4",
    module: "Pattern Recognition Systems — SVM",
    slideRef: "PSUPR Day 2 Slide 28-32",
    question: "In a Hard-Margin Support Vector Machine, how is the geometric margin width related to the weight vector $w$?",
    options: [
      "Margin width is $\\frac{2}{\\|w\\|}$, which is why maximizing the margin is mathematically formulated as minimizing $\\frac{1}{2}\\|w\\|^2$.",
      "Margin width is $2 \\|w\\|$, so we maximize $\\|w\\|$.",
      "Margin width is $\\frac{\\|w\\|}{2}$, independent of the bias term $b$.",
      "Margin width is $\\|w\\|^2 + b^2$."
    ],
    correctIndex: 0,
    hint: "Distance between positive hyperplane $w^T x + b = +1$ and negative hyperplane $w^T x + b = -1$ is $\\frac{2}{\\|w\\|}$.",
    explanation: "The orthogonal distance between the bounding planes $w^T x + b = +1$ and $w^T x + b = -1$ is $\\frac{1 - (-1)}{\\|w\\|} = \\frac{2}{\\|w\\|}$. Maximizing $\\frac{2}{\\|w\\|}$ is equivalent to minimizing $\\frac{1}{2}\\|w\\|^2$ subject to $y_i(w^T x_i + b) \\ge 1$."
  },
  {
    id: "d4-q5",
    module: "Pattern Recognition Systems — SVM Soft Margin",
    slideRef: "PSUPR Day 2 Slide 35-38",
    question: "In Soft-Margin SVM, the objective function includes a regularization parameter $C$: $\\min \\frac{1}{2}\\|w\\|^2 + C \\sum \\xi_i$. What is the geometric effect of setting $C$ to an extremely large value?",
    options: [
      "The margin becomes very wide and permits many misclassifications.",
      "The penalty for slack violations $\\xi_i$ is severe, forcing a very narrow margin that tries to classify every training point correctly, increasing the risk of overfitting.",
      "All support vectors are ignored and the hyperplane defaults to the origin.",
      "The kernel matrix becomes singular."
    ],
    correctIndex: 1,
    hint: "High $C$ = high cost for misclassification = zero tolerance for errors = narrow margin.",
    explanation: "Parameter $C$ controls the trade-off: large $C$ heavily penalizes slack violations $\\xi_i$, leading to a narrower margin that fits training noise tightly (overfitting). Small $C$ tolerates more margin violations in exchange for a wider, more generalizable margin."
  },
  {
    id: "d4-q6",
    module: "Pattern Recognition Systems — Kernel Trick",
    slideRef: "PSUPR Day 2 Slide 42-46",
    question: "What is the core computational advantage of the 'Kernel Trick' ($K(x, z) = \\langle \\phi(x), \\phi(z) \\rangle$) in non-linear SVMs?",
    options: [
      "It allows computing dot products in an infinite-dimensional feature space directly in the original input space, without ever explicitly calculating the high-dimensional coordinates $\\phi(x)$.",
      "It converts multi-class problems into single-class clustering.",
      "It eliminates the need for computing Lagrange multipliers.",
      "It forces all non-linear data to lie on a 1D straight line."
    ],
    correctIndex: 0,
    hint: "Mercer's theorem: We only need inner products $\\langle \\phi(x), \\phi(z) \\rangle$, which can be evaluated via a closed-form kernel function $K(x,z)$!",
    explanation: "By Mercer's condition, as long as $K(x,z)$ is symmetric positive semi-definite, it corresponds to an inner product in some Hilbert space. For RBF kernels, this Hilbert space is infinite-dimensional, yet $K(x,z) = \\exp(-\\gamma \\|x-z\\|^2)$ takes only $O(d)$ time to compute."
  },
  {
    id: "d4-q7",
    module: "Pattern Recognition Systems — SVM Support Vectors",
    slideRef: "PSUPR Day 2 Slide 33",
    question: "Suppose you train a linear SVM on 1,000 data points and find that exactly 6 points are Support Vectors ($0 < \\alpha_i \\le C$). What happens to the decision boundary if you delete 500 non-support vector data points and retrain?",
    options: [
      "The decision boundary shifts dramatically because dataset size halved.",
      "The decision boundary remains 100% IDENTICAL, because the hyperplane is uniquely and solely defined by the support vectors on the margin.",
      "The margin shrinks by 50%.",
      "The classifier reverts to random guessing."
    ],
    correctIndex: 1,
    hint: "The dual formulation expresses $w = \\sum_{i \\in SV} \\alpha_i y_i x_i$. All non-SVs have $\\alpha_i = 0$!",
    explanation: "Non-support vectors have Lagrange multipliers $\\alpha_i = 0$. They exert zero torque on the separating hyperplane. Only the support vectors ($0 < \\alpha_i$) determine $w$ and $b$. Removing non-support vectors leaves the optimal hyperplane completely unchanged."
  },
  {
    id: "d4-q8",
    module: "Pattern Recognition Systems — Dimensionality Reduction",
    slideRef: "PSUPR Day 3 Slide 5-14",
    question: "What is the fundamental difference between Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA)?",
    options: [
      "PCA is unsupervised (finds orthogonal axes that maximize total variance regardless of class labels); LDA is supervised (finds an axis that maximizes between-class scatter while minimizing within-class scatter).",
      "PCA works only on 2D data; LDA works on $N$-dimensional data.",
      "PCA maximizes classification accuracy directly; LDA minimizes reconstruction loss.",
      "LDA assumes data is uniformly distributed; PCA assumes categorical data."
    ],
    correctIndex: 0,
    hint: "PCA asks 'where does data spread out most?'; LDA asks 'which projection separates Class 1 from Class 2 best?'",
    explanation: "PCA seeks directions maximizing $w^T \\Sigma w$ without using class labels. If the direction of maximum variance happens to merge classes together, PCA will obscure class separability. LDA uses labels to maximize Fisher's criterion: $J(w) = \\frac{w^T S_B w}{w^T S_W w}$."
  },
  {
    id: "d4-q9",
    module: "Reasoning Systems — Case-Based Reasoning (CBR)",
    slideRef: "RS Day 2 Slide 4-15",
    question: "In Aamodt & Plaza's classic Case-Based Reasoning (CBR) cycle, what are the four sequential operational stages (the '4 Rs')?",
    options: [
      "Read, Recognize, Resolve, Return",
      "Retrieve the most similar case(s), Reuse the precedent's solution, Revise the proposed solution to fit the new context, Retain the successful experience into memory.",
      "Rule-match, Recurse, Reduce, Refactor",
      "Regression, Randomization, Resampling, Residual"
    ],
    correctIndex: 1,
    hint: "The 4 Rs: Retrieve $\\to$ Reuse $\\to$ Revise $\\to$ Retain.",
    explanation: "The CBR 4R cycle: 1. Retrieve most similar prior case from the Case Base using similarity metrics; 2. Reuse its solution to propose an answer; 3. Revise/adapt the solution to account for differences and test in the real world; 4. Retain the newly validated case for future problem-solving."
  },
  {
    id: "d4-q10",
    module: "Pattern Recognition Systems — Exam Trap",
    slideRef: "PSUPR Day 3 Slide 8 & NUS ISS Past Exam Trap",
    question: "You run PCA on a financial risk dataset with two features: 'Annual Income' in dollars (USD 40,000 to USD 250,000) and 'Debt-to-Income Ratio' ($0.05$ to $0.45$). What fatal error occurs if you fail to standardize the features before computing the covariance matrix?",
    options: [
      "The covariance matrix becomes non-invertible.",
      "PC1 will be completely dominated ($>99.99\\%$) by 'Annual Income' simply because its numerical variance is orders of magnitude larger, effectively ignoring the critical Debt-to-Income feature.",
      "Eigenvalues will become negative complex numbers.",
      "The algorithm will run $1000\\times$ slower."
    ],
    correctIndex: 1,
    hint: "Variance of dollars is measured in millions; variance of ratio is measured in hundredths!",
    explanation: "PCA maximizes variance. Because $\\text{Var}(\\text{Income}) \\sim 10^9$ while $\\text{Var}(\\text{DebtRatio}) \\sim 10^{-2}$, the first principal component will align almost exclusively with the Income axis regardless of whether DebtRatio is more informative. Standardizing ($z = \\frac{x - \\mu}{\\sigma}$) is MANDATORY."
  }
];

window.DAY4_GEOMETRY_DIM_QUIZZES = window.DAY4_GEOMETRY_DIM_DATA_QUIZZES;
