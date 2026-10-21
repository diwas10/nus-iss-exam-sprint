// Day 1 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions

window.DAY1_FOUNDATIONS_QUIZZES = [
  {
    id: "d1-q1",
    module: "Machine Reasoning — Search",
    slideRef: "MR Day 1 (JR) Slide 32 & 46",
    question: "Why does the Admissibility property of a heuristic $h(n)$ ($h(n) \\le h^*(n)$) guarantee an optimal solution in Tree-Search $A^*$?",
    options: [
      "Because the heuristic is pessimistic and overestimates costs, discouraging exploration of risky paths.",
      "Because the heuristic never overestimates the remaining cost, ensuring the true optimal goal node will always have an f-value less than or equal to any sub-optimal goal, preventing early sub-optimal termination.",
      "Because it reduces the branching factor to 1, effectively turning A* into Breadth-First Search.",
      "Because it guarantees that the OPEN list will never hold more than b * d nodes."
    ],
    correctIndex: 1,
    hint: "Think about optimism: If a path to the true goal looks artificially cheap or exact, could an inferior path ever look cheaper?",
    explanation: "Admissibility ensures optimism: $h(n) \\le h^*(n)$. If $C^*$ is the optimal goal cost, any node $n$ on the optimal path has $f(n) = g(n) + h(n) \\le g(n) + h^*(n) = C^*$. A sub-optimal goal $G_2$ has $f(G_2) = g(G_2) > C^*$. Therefore, $A^*$ will always expand $n$ before $G_2$."
  },
  {
    id: "d1-q2",
    module: "Machine Reasoning — Consistency",
    slideRef: "MR Day 1 (JR) Slide 42 & 46",
    question: "For Graph Search, A* requires a stronger condition called Consistency (Monotonicity). What is the mathematical definition and its major algorithmic consequence?",
    options: [
      "$h(n) = c(n, a, n') - h(n')$; nodes are expanded in reverse order.",
      "$h(n) \\le c(n, a, n') + h(n')$; the f-values along any path are monotonically non-decreasing, guaranteeing the first expansion of any node is already the optimal path.",
      "$h(n) \\ge h^*(n)$; cycles in the graph are automatically resolved by Dijkstra.",
      "$f(n) = g(n) \\times h(n)$; memory complexity drops to O(1)."
    ],
    correctIndex: 1,
    hint: "This is the triangle inequality for heuristics: the estimated distance from n to goal cannot exceed the step cost to n' plus n' to goal.",
    explanation: "Consistency ($h(n) \\le c(n, a, n') + h(n')$) guarantees that along any path, $f(n') \\ge f(n)$. As a result, when $A^*$ expands any node for the first time, it has already found the optimal path to that state. No closed nodes ever need to be reopened!"
  },
  {
    id: "d1-q3",
    module: "Machine Reasoning — CSP",
    slideRef: "MR Day 1 (JR) Slide 79-88",
    question: "When solving a Constraint Satisfaction Problem (CSP) like Map Coloring or N-Queens, which variable ordering heuristic selects the variable with the fewest legal remaining values in its domain?",
    options: [
      "Least Constraining Value (LCV)",
      "Minimum Remaining Values (MRV) / Most Constrained Variable",
      "Degree Heuristic",
      "Alpha-Beta Pruning"
    ],
    correctIndex: 1,
    hint: "MRV picks the variable closest to failure ('Fail-First principle').",
    explanation: "The Minimum Remaining Values (MRV) heuristic (also known as 'Most Constrained Variable' or 'Fail-First') chooses the variable with the fewest remaining legal values. This prunes dead ends earliest in the search tree."
  },
  {
    id: "d1-q4",
    module: "Machine Reasoning — CSP Filtering",
    slideRef: "MR Day 1 (JR) Slide 82-84",
    question: "What is the key mechanism of Forward Checking during CSP backtracking?",
    options: [
      "It re-orders all constraint equations in alphabetical order.",
      "Whenever variable X is assigned a value, it immediately checks all unassigned neighbor variables Y connected to X by constraints, and prunes from Y's domain any value inconsistent with X's assignment.",
      "It randomly mutates variables to escape local optima.",
      "It translates constraints into propositional logic Horn clauses."
    ],
    correctIndex: 1,
    hint: "Forward checking looks ahead to neighbor domains and detects early domain wipes.",
    explanation: "Forward checking tracks domains of unassigned variables. If any unassigned variable's domain becomes empty after an assignment, the algorithm immediately backtracks without wasting time traversing deeper into an impossible subtree."
  },
  {
    id: "d1-q5",
    module: "PSUPR — Supervised Classifiers",
    slideRef: "S-PSUPR Day 1b Slide 28-31",
    question: "In k-Nearest Neighbors (k-NN), what is the effect of setting $k=1$ versus setting $k$ equal to the total number of training samples $N$?",
    options: [
      "k=1 gives maximum bias and high underfitting; k=N gives maximum variance.",
      "k=1 overfits to individual training samples (zero training error, high variance); k=N simply predicts the majority class everywhere (high bias, flat boundary).",
      "Both k=1 and k=N produce identical linear hyperplanes.",
      "k=1 is computationally slowest during training, while k=N is fastest during query."
    ],
    correctIndex: 1,
    hint: "At k=1, even a single mislabeled noisy outlier creates its own classification island.",
    explanation: "At $k=1$, the decision boundary tightly wraps around every single training point, yielding 100% training accuracy but severe overfitting (high variance). At $k=N$, every query point polls all $N$ data points, so the prediction is always the global majority class (high bias)."
  },
  {
    id: "d1-q6",
    module: "PSUPR — Preprocessing",
    slideRef: "S-PSUPR Day 1b Slide 7",
    question: "Why is feature normalization (such as Min-Max scaling or Z-Score standardization) strictly mandatory before training a distance-based classifier like k-NN?",
    options: [
      "Because k-NN requires all input features to be integers.",
      "Because features with naturally large numerical ranges (e.g. Salary: $10,000–$100,000) will mathematically dominate the Euclidean distance calculation over smaller features (e.g. Age: 20–70), regardless of biological importance.",
      "Because scikit-learn throws a syntax error if inputs are unscaled.",
      "Because normalization converts non-linear boundaries into linear hyperplanes."
    ],
    correctIndex: 1,
    hint: "In Euclidean distance $d(x,y) = \\sqrt{\\sum (x_i - y_i)^2}$, a difference of 5,000 in salary dwarfs a difference of 10 in age.",
    explanation: "Distance metrics compute differences squared. If feature A has scale $10^5$ and feature B has scale $10^1$, feature A accounts for USD 99.99\\%$ of the distance, rendering feature B completely invisible to the classifier unless normalized."
  },
  {
    id: "d1-q7",
    module: "PSUPR — Model Evaluation",
    slideRef: "S-PSUPR Day 1b Slide 17",
    question: "A bank fraud detection model evaluates 10,000 transactions. 100 transactions are actual fraud. The model predicts 90 fraud cases correctly (TP=90), misses 10 (FN=10), but falsely flags 900 legitimate transactions as fraud (FP=900). What is the model's Sensitivity (Recall) and Precision?",
    options: [
      "Sensitivity = 90.0%, Precision = 9.09%",
      "Sensitivity = 9.09%, Precision = 90.0%",
      "Sensitivity = 99.0%, Precision = 10.0%",
      "Sensitivity = 50.0%, Precision = 50.0%"
    ],
    correctIndex: 0,
    hint: "Recall = TP / (TP + FN); Precision = TP / (TP + FP).",
    explanation: "Sensitivity (Recall) = TP / (TP + FN) = 90 / (90 + 10) = 90 / 100 = 90.0%. Precision = TP / (TP + FP) = 90 / (90 + 900) = 90 / 990 = 9.09%."
  },
  {
    id: "d1-q8",
    module: "PSUPR — Gain & Lift Charts",
    slideRef: "S-PSUPR Day 1b Slide 19-20",
    question: "In a marketing campaign targeting 10,000 customers with a 5% overall base response rate (500 total responders), the model's top decile (top 10% = 1,000 customers) captures 240 responders. What is the Lift in Decile 1?",
    options: [
      "Lift = 1.00",
      "Lift = 2.40 (The model is 4.8x better than random selection in the top decile)",
      "Lift = 4.80 (24% response rate divided by 5% baseline rate)",
      "Lift = 0.48"
    ],
    correctIndex: 2,
    hint: "Lift = (Responders in Decile / Total in Decile) / (Overall Base Response Rate).",
    explanation: "Decile 1 Response Rate = 240 / 1,000 = 24.0%. Overall Base Response Rate = 500 / 10,000 = 5.0%. Lift = 24.0% / 5.0% = 4.80x. (Alternatively: Cumulative Gain % in top 10% is 240/500 = 48%, so Lift = 48% / 10% = 4.8x)."
  },
  {
    id: "d1-q9",
    module: "PSUPR — Naive Bayes",
    slideRef: "S-PSUPR Day 1b Slide 33-46",
    question: "Why is Laplace (Add-1) Smoothing necessary when implementing Naive Bayes for text classification or medical diagnosis?",
    options: [
      "To convert continuous features into categorical features.",
      "To prevent zero-frequency probabilities from multiplying across the conditional likelihood chain and completely zeroing out the entire posterior probability.",
      "To enforce equal prior probabilities for all classes.",
      "To invert the covariance matrix in high-dimensional feature spaces."
    ],
    correctIndex: 1,
    hint: "In Naive Bayes, features are multiplied: P(X1|Y) * P(X2|Y) * ... If any single term is zero, what is the product?",
    explanation: "Because Naive Bayes multiplies conditional probabilities $\\prod P(X_i \\mid Y)$, if a specific feature was never observed for class $Y$ in training, $P(X_i \\mid Y) = 0$. This would zero out the entire product regardless of all other evidence. Laplace smoothing ($+1$) guarantees a valid non-zero probability."
  },
  {
    id: "d1-q10",
    module: "Machine Reasoning — Overview",
    slideRef: "MR Day 1 (JR) Slide 8 & 14",
    question: "In NUS ISS Machine Reasoning, what is the core architectural difference between System 1 (Generative AI / LLMs) and System 2 (Symbolic Reasoning)?",
    options: [
      "System 1 uses CPU while System 2 uses GPU.",
      "System 1 is associative, fast pattern recognition via next-token statistical prediction; System 2 is deliberative, multi-step search over formal symbolic states with verifiable constraint satisfaction.",
      "System 1 can only process numbers, while System 2 processes images.",
      "System 1 is deterministic, while System 2 is completely random."
    ],
    correctIndex: 1,
    hint: "Think about how Kahneman defines System 1 (fast intuition) vs System 2 (calculating chess moves).",
    explanation: "LLMs operate as System 1: rapid, statistical intuition based on semantic similarity. They lack an explicit internal state engine, leading to hallucinations on sequential logic. Symbolic Machine Reasoning operates as System 2: state space search, logical constraints, and formal proofs with guaranteed correctness."
  }
];
