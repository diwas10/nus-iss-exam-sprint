// Day 5 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions
// Focus: Clustering (K-Means, DBSCAN, Hierarchical), Apriori Market Basket, Collaborative Filtering & SVD

window.DAY5_CLUSTERS_RECOMMENDERS_QUIZZES = [
  {
    id: "d5-q1",
    module: "Pattern Recognition Systems — Clustering",
    slideRef: "PSUPR Day 4 Slide 6-12",
    question: "What is the mathematical objective function minimized by the standard K-Means clustering algorithm?",
    options: [
      "Within-Cluster Sum of Squares (WCSS / SSE): $J = \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|^2$",
      "Between-Cluster Scatter Matrix: $J = \\sum_{k=1}^K n_k (\\mu_k - \\mu)^T (\\mu_k - \\mu)$",
      "Silhouette Coefficient: $J = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$",
      "Maximum Margin Distance: $J = \\frac{2}{\\|w\\|}$"
    ],
    correctIndex: 0,
    hint: "K-Means iteratively updates centroids $\\mu_k$ to minimize the squared Euclidean distance of assigned points.",
    explanation: "K-Means minimizes the Within-Cluster Sum of Squares (WCSS): $J = \\sum_{k=1}^K \\sum_{x_i \\in C_k} \\|x_i - \\mu_k\\|^2$. It alternates between assigning points to the closest centroid $\\mu_k$ and recomputing $\\mu_k$ as the mean of assigned points."
  },
  {
    id: "d5-q2",
    module: "Pattern Recognition Systems — Hierarchical Clustering",
    slideRef: "PSUPR Day 4 Slide 18-22",
    question: "In Agglomerative Hierarchical Clustering, what is the notorious drawback of using 'Single Linkage' (minimum pairwise distance between clusters)?",
    options: [
      "It requires clusters to be strictly spherical.",
      "It is susceptible to the 'chaining effect', where noise or a thin bridge of points causes two distinct elongated clusters to merge prematurely into one giant straggly cluster.",
      "It cannot compute dendrograms.",
      "It is computationally more expensive than Ward's method."
    ],
    correctIndex: 1,
    hint: "Single Linkage distance $d(C_A, C_B) = \\min_{x \\in C_A, y \\in C_B} d(x, y)$ only cares about the single closest pair of points!",
    explanation: "Because Single Linkage merges clusters based on the minimum distance between any single pair of points, a sequence of single noisy points bridging two clusters will chain them together. Complete Linkage or Ward's Linkage avoids this flaw."
  },
  {
    id: "d5-q3",
    module: "Pattern Recognition Systems — DBSCAN",
    slideRef: "PSUPR Day 4 Slide 26-30",
    question: "In DBSCAN with parameters $\\epsilon = 0.2$ and $\\text{MinPts} = 4$, a data point $P$ has exactly 2 neighbors within radius $\\epsilon$, but one of those neighbors is a confirmed Core point. How is point $P$ classified?",
    options: [
      "Core Point",
      "Border Point (belongs to the cluster of the reachable Core point)",
      "Noise / Outlier (discarded)",
      "Centroid Point"
    ],
    correctIndex: 1,
    hint: "Has $< \\text{MinPts}$ neighbors, but is reachable from a Core point!",
    explanation: "In DBSCAN: 1. Core points have $\\ge \\text{MinPts}$ neighbors within $\\epsilon$. 2. Border points have $< \\text{MinPts}$ neighbors within $\\epsilon$, but are density-reachable from at least one Core point. 3. Noise points have $< \\text{MinPts}$ neighbors and are unreachable from any Core point."
  },
  {
    id: "d5-q4",
    module: "Pattern Recognition Systems — Cluster Validation",
    slideRef: "PSUPR Day 4 Slide 34-38",
    question: "Which of the following statements correctly identifies the optimization direction for cluster validation indices?",
    options: [
      "Silhouette Coefficient: higher is better; Davies-Bouldin Index (DBI): lower is better; Calinski-Harabasz Index (CH): higher is better.",
      "Silhouette Coefficient: lower is better; Davies-Bouldin Index (DBI): higher is better; Calinski-Harabasz Index (CH): lower is better.",
      "All three indices should be maximized to 1.0.",
      "Davies-Bouldin Index must be negative for valid clustering."
    ],
    correctIndex: 0,
    hint: "Davies-Bouldin measures average cluster similarity (overlap): you want minimum overlap!",
    explanation: "Silhouette score ranges from $-1$ to $+1$ (higher = better separation). Davies-Bouldin Index (DBI) evaluates the ratio of within-cluster scatter to between-cluster separation; lower values indicate tighter, better-separated clusters. Calinski-Harabasz (CH) is the variance ratio criterion; higher values indicate better-defined clusters."
  },
  {
    id: "d5-q5",
    module: "Reasoning Systems — Market Basket Analysis",
    slideRef: "RS Day 2 Slide 8-14",
    question: "Out of 1,000 retail transactions, 200 contain Beer, 300 contain Diapers, and 150 contain both Beer and Diapers. What is the Support and Confidence of the association rule: $\\{\\text{Diapers}\\} \\rightarrow \\{\\text{Beer}\\}$?",
    options: [
      "$\\text{Support} = 15\\%$, $\\text{Confidence} = 50\\%$",
      "$\\text{Support} = 50\\%$, $\\text{Confidence} = 15\\%$",
      "$\\text{Support} = 20\\%$, $\\text{Confidence} = 75\\%$",
      "$\\text{Support} = 15\\%$, $\\text{Confidence} = 75\\%$"
    ],
    correctIndex: 0,
    hint: "$\\text{Support}(A \\rightarrow B) = \\frac{|A \\cap B|}{|T|}$ and $\\text{Confidence}(A \\rightarrow B) = \\frac{|A \\cap B|}{|A|}$.",
    explanation: "$\\text{Support}(\\text{Diapers} \\rightarrow \\text{Beer}) = \\frac{150}{1000} = 15\\%$. $\\text{Confidence}(\\text{Diapers} \\rightarrow \\text{Beer}) = \\frac{\\text{Support}(\\text{Diapers} \\cap \\text{Beer})}{\\text{Support}(\\text{Diapers})} = \\frac{150}{300} = 50\\%$."
  },
  {
    id: "d5-q6",
    module: "Reasoning Systems — Apriori Principle",
    slideRef: "RS Day 2 Slide 16-18",
    question: "What is the foundational Apriori property (Downward-Closure Property) that allows pruning candidate itemsets efficiently?",
    options: [
      "Any superset of an infrequent itemset MUST also be infrequent.",
      "Any subset of an infrequent itemset MUST be frequent.",
      "The confidence of a rule is always greater than its support.",
      "All single items are automatically frequent."
    ],
    correctIndex: 0,
    hint: "If $\\{\\text{Caviar}\\}$ is bought only once in 1M transactions, can $\\{\\text{Caviar, Bread}\\}$ ever exceed 100 purchases?",
    explanation: "The Apriori property states: If an itemset is infrequent, all of its supersets will also be infrequent ($Support(A \\cup B) \\le Support(A)$). This enables massive branch pruning without evaluating the exponential $2^N$ itemset lattice."
  },
  {
    id: "d5-q7",
    module: "Reasoning Systems — Association Rule Lift",
    slideRef: "RS Day 2 Slide 20-22",
    question: "A store discovers that the rule $\\{\\text{Milk}\\} \\rightarrow \\{\\text{Bread}\\}$ has $70\\%$ Confidence. However, $80\\%$ of all store transactions contain Bread. What is the Lift of this rule, and what business action should be taken?",
    options: [
      "$\\text{Lift} = 0.875$ (Lift $< 1$). The rule reflects negative association; placing Milk and Bread together does NOT boost Bread sales and may be redundant.",
      "$\\text{Lift} = 1.14$ (Lift $> 1$). Milk drives massive Bread sales; promote them together.",
      "$\\text{Lift} = 5.60$. Put Bread next to Milk immediately.",
      "Lift cannot be computed without the price of Milk."
    ],
    correctIndex: 0,
    hint: "$\\text{Lift} = \\frac{\\text{Confidence}(A \\rightarrow B)}{\\text{Support}(B)} = \\frac{0.70}{0.80}$.",
    explanation: "$\\text{Lift} = \\frac{\\text{Confidence}}{\\text{Benchmark Support}} = \\frac{0.70}{0.80} = 0.875$. Since $\\text{Lift} < 1$, customers who buy Milk are actually LESS likely to buy Bread ($70\\%$) than an average shopper ($80\\%$). Relying purely on high confidence without Lift is an infamous exam pitfall!"
  },
  {
    id: "d5-q8",
    module: "Reasoning Systems — Collaborative Filtering",
    slideRef: "RS Day 3 Slide 5-10",
    question: "Why does User-User Collaborative Filtering predict ratings using Mean-Centered ratings ($r_{v,i} - \\bar{r}_v$) instead of raw star ratings?",
    options: [
      "Because scikit-learn cannot invert matrices with positive numbers.",
      "To eliminate individual user rating bias: an 'optimistic' user might give 4 stars to average movies, while a 'critical' user gives 2 stars to the same quality movie.",
      "To guarantee that predicted ratings are always integer values.",
      "Because Pearson correlation only works on binary values."
    ],
    correctIndex: 1,
    hint: "Some people are harsh graders, while others give 5 stars to everything. Centering around user mean normalizes baseline attitudes!",
    explanation: "Users have idiosyncratic rating scales. Mean-centering ($\\hat{r}_{u,i} = \\bar{r}_u + \\frac{\\sum \\text{sim}(u,v)(r_{v,i} - \\bar{r}_v)}{\\sum |\\text{sim}(u,v)|}$) accounts for whether a neighbor liked a movie relative to their own personal standard, then adds the offset to target user $u$'s personal baseline."
  },
  {
    id: "d5-q9",
    module: "Reasoning Systems — SVD Matrix Factorization",
    slideRef: "RS Day 3 Slide 18-24",
    question: "In Matrix Factorization for recommender systems (Funk SVD), a rating matrix $R \\in \\mathbb{R}^{m \\times n}$ is approximated as the product of two low-rank matrices $P \\in \\mathbb{R}^{m \\times k}$ and $Q \\in \\mathbb{R}^{n \\times k}$. What do the rows of $P$ and $Q$ represent?",
    options: [
      "Rows of $P$ represent User Latent Factor affinities; rows of $Q$ represent Item Latent Factor attributes.",
      "Rows of $P$ are decision trees; rows of $Q$ are neural weights.",
      "Rows of $P$ represent time stamps; rows of $Q$ represent transaction IDs.",
      "Rows of $P$ and $Q$ are identical copies of the covariance matrix."
    ],
    correctIndex: 0,
    hint: "Each user $u$ gets a $k$-dimensional vector $p_u$, and each item $i$ gets a $k$-dimensional vector $q_i$. Rating is the dot product $p_u \\cdot q_i^T$!",
    explanation: "Matrix Factorization maps both users and items to a joint latent factor space of dimensionality $k$. The inner product $\\hat{r}_{ui} = p_u^T q_i$ captures the interaction between user $u$'s taste profile and item $i$'s thematic characteristics."
  },
  {
    id: "d5-q10",
    module: "Reasoning Systems — Cold-Start Dilemma",
    slideRef: "RS Day 3 Slide 28-32",
    question: "A brand-new user registers on a movie streaming platform and has provided zero ratings. Pure Collaborative Filtering fails to recommend any movies. What is this failure called, and what is the standard industrial solution?",
    options: [
      "The Cold-Start Problem; resolved using Hybrid Recommendation (content-based metadata matching, demographic clustering, or popularity onboarding)",
      "The Vanishing Gradient Problem; resolved using ReLU activations",
      "The Overfitting Problem; resolved using L1 lasso regularization",
      "The Aliasing Problem; resolved using low-pass anti-aliasing filters"
    ],
    correctIndex: 0,
    hint: "No interaction history = Cold Start. What information do you have left? Content, genres, onboarding questions!",
    explanation: "When a new user or new item enters the system, collaborative filtering has no overlap in the rating matrix (Cold-Start Problem). Systems solve this by falling back to content-based filtering (matching genre/actor metadata) or prompting the user to select 3 favorite genres upon onboarding."
  }
];
