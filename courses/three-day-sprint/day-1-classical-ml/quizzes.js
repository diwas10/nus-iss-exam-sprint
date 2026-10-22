// Day 1 Slide Mastery Quizzes & Post-Quiz Exam-Style Questions
// Classical ML + Probability + Search (Course Days 1, 4, 5 + Bayesian Reasoning from Day 3)

window.DAY1_CLASSICAL_ML_QUIZZES = [
  {
    id: "d1-q1",
    module: "Machine Reasoning — Search Heuristics",
    slideRef: "MR Day 1 (JR) Slide 32 & 46",
    question: "Why does the Admissibility property of a heuristic $h(n)$ ($h(n) \\le h^*(n)$) guarantee an optimal path in Tree-Search $A^*$?",
    options: [
      "Because the heuristic overestimates costs to discourage risky exploratory paths.",
      "Because the heuristic is optimistic and never overestimates the true remaining cost to the goal, ensuring a node on the optimal path will always have an f-value less than or equal to any sub-optimal goal, preventing premature sub-optimal termination.",
      "Because it reduces the state branching factor to 1.",
      "Because it guarantees the OPEN priority queue never holds more than $b \\times d$ nodes."
    ],
    correctIndex: 1,
    hint: "Think about optimism: Can an inferior path look cheaper than an optimistic estimate of the true optimal path?",
    explanation: "Admissibility ensures optimism ($h(n) \\le h^*(n)$). If $C^*$ is optimal cost, any node $n$ on the optimal path satisfies $f(n) = g(n) + h(n) \\le g(n) + h^*(n) = C^*$. A sub-optimal goal $G_2$ has $f(G_2) = g(G_2) > C^*$. Thus $A^*$ will always expand $n$ before $G_2$."
  },
  {
    id: "d1-q2",
    module: "Machine Reasoning — Graph Consistency",
    slideRef: "MR Day 1 (JR) Slide 42 & 46",
    question: "In Graph Search $A^*$, why is Consistency (Monotonicity: $h(n) \\le c(n, a, n') + h(n')$) strictly required instead of merely Admissibility?",
    options: [
      "Without consistency, memory consumption grows factorially.",
      "Consistency satisfies the triangle inequality, guaranteeing that f-values along any path are monotonically non-decreasing, which ensures that when any node is popped from the Open list for the first time, its path is already optimal (no closed nodes need to be reopened).",
      "Consistency guarantees that all heuristic values are strictly zero, turning A* into Dijkstra.",
      "Consistency is only required when the cost function contains negative edges."
    ],
    correctIndex: 1,
    hint: "Think about the Closed list in graph search: what happens if a cheaper path to a closed node is discovered later?",
    explanation: "If $h(n)$ is admissible but inconsistent, $A^*$ can reach a state via a sub-optimal path first and close it. With consistency, $f(n') \\ge f(n)$ along any path, mathematically guaranteeing the first expansion of any node is already the optimal path."
  },
  {
    id: "d1-q3",
    module: "Pattern Recognition — Naive Bayes Laplace",
    slideRef: "PSUPR Day 1b Slide 28",
    question: "When applying Laplace smoothing to estimate conditional probability $P(x_j = v \\mid C_k)$, why is the denominator $\\text{count}(C_k) + |V_j|$ rather than $\\text{count}(C_k) + 1$?",
    options: [
      "To artificially increase the prior probability of rare classes.",
      "Because we add a pseudo-count of +1 to every possible outcome in feature domain $V_j$; to ensure the probabilities over all $|V_j|$ outcomes sum to exactly 1, we must add $|V_j|$ to the denominator.",
      "To prevent division by zero when the dataset is completely empty.",
      "Because $|V_j|$ represents the total number of features in the feature vector."
    ],
    correctIndex: 1,
    hint: "Total probability axiom: sum of P(x_j = v | C_k) across all values v in V_j must equal 1.",
    explanation: "If attribute $X_j$ can take $|V_j|$ distinct values, adding 1 to each numerator adds $\\sum_{v=1}^{|V_j|} 1 = |V_j|$ total virtual counts. Therefore, the denominator must increase by $|V_j|$ so that $\\sum_v P(X_j = v \\mid C_k) = \\frac{\\sum (\\text{count} + 1)}{\\text{count}(C_k) + |V_j|} = 1$."
  },
  {
    id: "d1-q4",
    module: "Pattern Recognition — Distance Normalization",
    slideRef: "PSUPR Day 1a Slide 24",
    question: "Why is feature z-score standardization ($z = \\frac{x - \\mu}{\\sigma}$) mandatory before applying k-NN or PCA?",
    options: [
      "Because k-NN requires all input values to be strictly integers.",
      "Because Euclidean distance $\\sqrt{\\sum(x_i - y_i)^2}$ is completely dominated by features with large numeric scales (e.g. Income $100,000 vs Age 40), effectively blinding the algorithm to small-scale features.",
      "Because standardizing features converts non-linear boundaries into linear hyperplanes.",
      "Because PCA cannot invert a non-diagonal covariance matrix without standardization."
    ],
    correctIndex: 1,
    hint: "Consider what happens to the distance calculation when one feature has range [0, 100,000] and another has range [0, 1].",
    explanation: "Euclidean distance squares numerical differences. A feature with scale $10^5$ generates squared differences of $10^{10}$, completely overwhelming a feature with scale $10^0$, making the smaller feature mathematically invisible."
  },
  {
    id: "d1-q5",
    module: "Reasoning Systems — Bayesian Belief Networks",
    slideRef: "MR Day 3 Slide 15-28",
    question: "In a Bayesian Network with V-structure (Collider: $A \\to B \\leftarrow C$), what is the conditional independence relationship between $A$ and $C$?",
    options: [
      "A and C are always independent regardless of what is observed.",
      "A and C are marginally independent ($P(A, C) = P(A)P(C)$) when B is unobserved, but become conditionally DEPENDENT once B or any of its descendants is observed ('Explaining Away').",
      "A and C are conditionally independent given B, but dependent when B is unobserved.",
      "A and C form a directed cycle, which violates the DAG definition."
    ],
    correctIndex: 1,
    hint: "Think about the wet grass example: rain (A) and sprinkler (C) causing wet grass (B).",
    explanation: "In a collider ($A \\to B \\leftarrow C$), the path is blocked when $B$ is unobserved. But observing $B$ (or its descendant) unblocks the path: knowing the outcome $B$ allows learning about $A$ to explain away or influence the likelihood of $C$."
  },
  {
    id: "d1-q6",
    module: "Pattern Recognition — Support Vector Machines",
    slideRef: "PRMLS Day 2a Slide 14-32",
    question: "In a Soft-Margin SVM, what happens to the decision boundary and generalization when the penalty parameter $C$ is set to an extremely large value ($C \\to \\infty$)?",
    options: [
      "The margin becomes infinite, causing high bias and underfitting.",
      "The penalty for slack violations $\\xi_i$ is extremely severe, forcing the optimization to find a hard margin with zero training misclassifications, leading to low bias but high variance (risk of overfitting).",
      "All training points become support vectors.",
      "The kernel matrix collapses to the identity matrix."
    ],
    correctIndex: 1,
    hint: "C balances margin width (1/2 ||w||^2) against training errors (sum of xi).",
    explanation: "Large $C$ penalizes slack variables heavily, prioritizing correct classification of every training instance over margin width. This creates a narrower, strict boundary that is sensitive to noise (overfitting)."
  },
  {
    id: "d1-q7",
    module: "Pattern Recognition — Dimensionality (PCA vs LDA)",
    slideRef: "PSUPR Day 3 Slide 18-35",
    question: "What is the fundamental difference between Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA)?",
    options: [
      "PCA is supervised while LDA is unsupervised.",
      "PCA is unsupervised and finds orthogonal projection axes that maximize total feature variance, whereas LDA is supervised and finds projection axes that maximize the ratio of between-class scatter to within-class scatter.",
      "PCA requires labeled classes, while LDA only operates on continuous variables.",
      "PCA projects data to a single dimension, whereas LDA preserves all dimensions."
    ],
    correctIndex: 1,
    hint: "Which one uses class labels Y during projection vector calculation?",
    explanation: "PCA maximizes total variance $\\mathbf{w}^T \\Sigma \\mathbf{w}$ without using class labels. LDA utilizes labels to maximize Fisher's criterion $J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}}$."
  },
  {
    id: "d1-q8",
    module: "Pattern Recognition — Clustering",
    slideRef: "PSUPR Day 4 Slide 22-45",
    question: "Why does K-Means fail to separate two interleaving concentric circle clusters, and which algorithm successfully partitions them?",
    options: [
      "K-Means requires labeled data; use Logistic Regression.",
      "K-Means partitions space using Euclidean distance to linear centroids (Voronoi spherical cells); DBSCAN succeeds because it discovers clusters based on spatial density connectivity regardless of non-convex shape.",
      "K-Means only works on 1D signals; use STFT.",
      "K-Means always converges to global minima; use GMM."
    ],
    correctIndex: 1,
    hint: "Concentric rings are not linearly or spherically separable in Euclidean space.",
    explanation: "K-Means minimizes Within-Cluster Sum of Squares (WCSS) to spherical centers, cutting through concentric rings. DBSCAN links points in dense $\\epsilon$-neighborhoods, effortlessly following arbitrary ring topologies."
  },
  {
    id: "d1-q9",
    module: "Reasoning Systems — Association Rules (Apriori)",
    slideRef: "RS Day 4 Slide 12-25",
    question: "In Market Basket Analysis, if rule $X \\to Y$ has $\\text{Support} = 0.05$, $\\text{Confidence} = 0.80$, and the global baseline probability $P(Y) = 0.85$, what is the Lift and what does it reveal?",
    options: [
      "$\\text{Lift} = 1.06$; purchasing X strongly promotes buying Y.",
      "$\\text{Lift} = \\frac{0.80}{0.85} \\approx 0.941$; buying X actually slightly reduces or has a negative association with buying Y compared to random chance, despite high confidence.",
      "$\\text{Lift} = 0.05 / 0.80 = 0.0625$; the itemset is statistically insignificant.",
      "$\\text{Lift} = 0.80 \\times 0.85 = 0.68$; confidence is invalid."
    ],
    correctIndex: 1,
    hint: "Lift = Confidence / P(Y). If Lift < 1, the presence of X actually depresses Y!",
    explanation: "$\\text{Lift}(X \\to Y) = \\frac{\\text{Conf}(X \\to Y)}{P(Y)} = \\frac{0.80}{0.85} = 0.941 < 1$. High confidence alone is misleading if the consequent $Y$ is already overwhelmingly frequent. Buying $X$ slightly decreases the likelihood of $Y$."
  },
  {
    id: "d1-q10",
    module: "Pattern Recognition — Model Evaluation",
    slideRef: "PSUPR Day 1b Slide 45-52",
    question: "In an imbalanced dataset where only 2% of transactions are fraudulent, why is overall Accuracy a dangerous metric, and what metric should be prioritized?",
    options: [
      "Accuracy is sensitive to outliers; use K-Means inertia.",
      "A trivial model predicting 'Non-Fraud' 100% of the time achieves 98% accuracy but catches zero fraud; instead, prioritize Recall (Sensitivity) to capture all positive frauds and ROC-AUC / PR-AUC.",
      "Accuracy can exceed 100% on skewed data; use Mean Squared Error.",
      "Accuracy assumes Gaussian class distributions; use PCA."
    ],
    correctIndex: 1,
    hint: "Recall = TP / (TP + FN). What happens if FN is huge?",
    explanation: "Accuracy on imbalanced datasets rewards the majority class trivial prediction. Recall $\\frac{TP}{TP + FN}$ measures the proportion of actual positive cases detected, ensuring high-consequence fraud or disease is not ignored."
  }
];

// Post-Quiz NUS ISS Exam-Style Questions (Mastery Section)
window.DAY1_EXAM_QUESTIONS = [
  {
    id: "d1-exam-q1",
    title: "Question 1: Naive Bayes Hand Calculation & Laplace Smoothing",
    topic: "PRS / PSUPR Day 1b (Official Exam Format)",
    totalMarks: 10,
    scenario: `
      A maintenance telemetry system classifies conveyor belt failure into two classes: $C_1 = \\text{Normal}$ and $C_2 = \\text{Faulty}$.
      Historical inspection logs over $N = 20$ maintenance shifts show:
      <ul>
        <li>$\\text{Normal } (C_1)$: 15 shifts.</li>
        <li>$\\text{Faulty } (C_2)$: 5 shifts.</li>
      </ul>
      Two categorical features are measured:
      <ol>
        <li><strong>Vibration Level ($X_1$):</strong> domain $V_1 = \\{\\text{Low}, \\text{Medium}, \\text{High}\\}$ ($|V_1| = 3$).</li>
        <li><strong>Acoustic Noise ($X_2$):</strong> domain $V_2 = \\{\\text{Quiet}, \\text{Loud}\\}$ ($|V_2| = 2$).</li>
      </ol>
      The observed training frequency counts are:
      <table class="styled-table mt-2 mb-2" style="font-size:0.85rem; width:100%;">
        <thead><tr><th>Class</th><th>$X_1=\\text{Low}$</th><th>$X_1=\\text{Med}$</th><th>$X_1=\\text{High}$</th><th>$X_2=\\text{Quiet}$</th><th>$X_2=\\text{Loud}$</th></tr></thead>
        <tbody>
          <tr><td>$C_1$ (Normal, 15)</td><td>9</td><td>5</td><td>1</td><td>12</td><td>3</td></tr>
          <tr><td>$C_2$ (Faulty, 5)</td><td>0</td><td>1</td><td>4</td><td>1</td><td>4</td></tr>
        </tbody>
      </table>
      A new test sample arrives with reading: $\\mathbf{x}^* = (X_1 = \\text{Low}, X_2 = \\text{Loud})$.
    `,
    subparts: [
      { prompt: "Calculate prior probabilities $P(C_1)$ and $P(C_2)$.", marks: 2 },
      { prompt: "Explain why standard Maximum Likelihood Estimation fails on this test sample, and state the Laplace smoothing formula.", marks: 3 },
      { prompt: "Compute the Laplace-smoothed likelihoods $P(X_1=\\text{Low} \\mid C_k)$ and $P(X_2=\\text{Loud} \\mid C_k)$ for both classes, and determine the predicted class for $\\mathbf{x}^*$.", marks: 5 }
    ],
    solution: `
      <p><strong>Part (a) Priors [2 Marks]:</strong></p>
      $$\\begin{aligned}
      P(C_1) &= \\frac{15}{20} = 0.75 \\\\
      P(C_2) &= \\frac{5}{20} = 0.25
      \\end{aligned}$$

      <p><strong>Part (b) Zero-Frequency Problem & Laplace Formula [3 Marks]:</strong></p>
      <p>In standard MLE, $\\text{count}(X_1=\\text{Low}, C_2) = 0$, giving $P(X_1=\\text{Low} \\mid C_2) = 0/5 = 0$. In Naive Bayes, the joint likelihood is $P(C_2) \\prod_j P(x_j \\mid C_2) = 0.25 \\times 0 \\times (4/5) = 0$. This zero eliminates the faulty hypothesis regardless of the loud acoustic reading!</p>
      <p>Laplace smoothing adds a pseudo-count of $+1$ to the numerator and $|V_j|$ to the denominator:</p>
      $$P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}$$

      <p><strong>Part (c) Smoothed Likelihoods & Classification [5 Marks]:</strong></p>
      <p>For Attribute $X_1$ ($|V_1| = 3$):</p>
      $$\\begin{aligned}
      P(X_1=\\text{Low} \\mid C_1) &= \\frac{9 + 1}{15 + 3} = \\frac{10}{18} = \\frac{5}{9} \\approx 0.5556 \\\\
      P(X_1=\\text{Low} \\mid C_2) &= \\frac{0 + 1}{5 + 3} = \\frac{1}{8} = 0.1250
      \\end{aligned}$$

      <p>For Attribute $X_2$ ($|V_2| = 2$):</p>
      $$\\begin{aligned}
      P(X_2=\\text{Loud} \\mid C_1) &= \\frac{3 + 1}{15 + 2} = \\frac{4}{17} \\approx 0.2353 \\\\
      P(X_2=\\text{Loud} \\mid C_2) &= \\frac{4 + 1}{5 + 2} = \\frac{5}{7} \\approx 0.7143
      \\end{aligned}$$

      <p>Unnormalized Posteriors $\\text{Score}(C_k) = P(C_k) \\times P(X_1=\\text{Low} \\mid C_k) \\times P(X_2=\\text{Loud} \\mid C_k)$:</p>
      $$\\begin{aligned}
      \\text{Score}(C_1) &= 0.75 \\times \\frac{10}{18} \\times \\frac{4}{17} = 0.75 \\times 0.5556 \\times 0.2353 \\approx \\mathbf{0.0980} \\\\
      \\text{Score}(C_2) &= 0.25 \\times \\frac{1}{8} \\times \\frac{5}{7} = 0.25 \\times 0.1250 \\times 0.7143 \\approx \\mathbf{0.0223}
      \\end{aligned}$$

      <p>Since $\\text{Score}(C_1) = 0.0980 > \\text{Score}(C_2) = 0.0223$, the system predicts <strong>$C_1$ (Normal)</strong>.</p>
      <p>Normalized Probabilities: $P(C_1 \\mid \\mathbf{x}^*) = \\frac{0.0980}{0.0980 + 0.0223} = \\mathbf{81.46\\%}$, $P(C_2 \\mid \\mathbf{x}^*) = \\mathbf{18.54\\%}$.</p>
    `,
    rubric: [
      "[+2 Marks] Correct prior probabilities $P(C_1)=0.75, P(C_2)=0.25$.",
      "[+1 Mark] Clear explanation of the zero-frequency probability collapse.",
      "[+2 Marks] Stating Laplace formula with $|V_j|$ in denominator.",
      "[+2 Marks] Accurate smoothed likelihood fractions for both classes ($10/18, 1/8, 4/17, 5/7$).",
      "[+2 Marks] Score comparison and final classification decision with justification."
    ],
    examinerTrap: "Dividing by count(C_k) + 1 instead of count(C_k) + |V_j|. In this problem, |V_1|=3 and |V_2|=2. If you divide by count + 1, you violate probability axioms and lose 3 marks."
  },
  {
    id: "d1-exam-q2",
    title: "Question 2: A* Admissibility Proof & CSP Backtracking",
    topic: "IRS / Machine Reasoning Day 1 (Official Exam Format)",
    totalMarks: 10,
    scenario: `
      An automated warehouse AGV (Automated Guided Vehicle) plans collision-free routes across a discrete topological grid using $A^*$ graph search.
      Let $n$ be an arbitrary node in the search graph, $g(n)$ be the exact path cost from start $S$ to $n$, and $h(n)$ be the estimated heuristic cost from $n$ to goal $G$.
      The true minimum cost from $n$ to $G$ is denoted $h^*(n)$.
    `,
    subparts: [
      { prompt: "Define Heuristic Admissibility and prove mathematically that $A^*$ Tree Search is guaranteed to terminate with the optimal path.", marks: 4 },
      { prompt: "State the mathematical definition of Heuristic Consistency (Monotonicity) and explain why Consistency is necessary for Graph Search $A^*$.", marks: 3 },
      { prompt: "In CSP Backtracking (e.g. allocating charging schedules to 4 AGVs), contrast Minimum Remaining Values (MRV) with Least Constraining Value (LCV).", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Admissibility & Optimality Proof [4 Marks]:</strong></p>
      <p><strong>Definition:</strong> A heuristic $h(n)$ is admissible if it never overestimates the true cost to reach the goal: $0 \\le h(n) \\le h^*(n)$ for all $n$, with $h(G) = 0$.</p>
      <p><strong>Proof by Contradiction:</strong></p>
      <ol>
        <li>Let $C^*$ be the true cost of the optimal goal state $G^*$.</li>
        <li>Suppose $A^*$ terminates sub-optimally by selecting sub-optimal goal $G_2$ where $g(G_2) > C^*$.</li>
        <li>Since $G_2$ is a goal, $h(G_2) = 0$, so $f(G_2) = g(G_2) + 0 > C^*$.</li>
        <li>Consider an unexpanded node $n'$ on the OPEN list that lies on the true optimal path to $G^*$. By admissibility:
        $$f(n') = g(n') + h(n') \\le g(n') + h^*(n') = C^*$$</li>
        <li>Therefore: $f(n') \\le C^* < f(G_2)$.</li>
        <li>Because $A^*$ priority queue always pops the node with minimum $f$-value, node $n'$ MUST be selected and expanded before $G_2$ can ever be popped.</li>
        <li>Contradiction! Hence $A^*$ tree search cannot terminate with a sub-optimal goal. $\\blacksquare$</li>
      </ol>

      <p><strong>Part (b) Consistency & Graph Search [3 Marks]:</strong></p>
      <p><strong>Definition:</strong> A heuristic is consistent if for every node $n$ and every successor $n'$ generated by action $a$:
      $$h(n) \\le c(n, a, n') + h(n')$$
      This is the triangle inequality. It implies:
      $$f(n') = g(n') + h(n') = g(n) + c(n, a, n') + h(n') \\ge g(n) + h(n) = f(n)$$
      $f$-values along any path are monotonically non-decreasing. When a node is popped, its path cost is globally optimal, so <strong>no closed nodes ever need to be reopened</strong>.</p>

      <p><strong>Part (c) MRV vs LCV in CSP [3 Marks]:</strong></p>
      <ul>
        <li><strong>MRV (Minimum Remaining Values / 'Fail-First'):</strong> Variable ordering heuristic. Chooses the variable with the fewest remaining legal values. Rationale: Prune dead-end branches as early as possible in the search tree.</li>
        <li><strong>LCV (Least Constraining Value / 'Fail-Last'):</strong> Value ordering heuristic. Once variable $X$ is selected, chooses the value that leaves the maximum number of allowable choices for remaining unassigned neighbors. Rationale: Maximize flexibility to avoid backtracking.</li>
      </ul>
    `,
    rubric: [
      "[+1 Mark] Precise definition of admissibility $0 \\le h(n) \\le h^*(n)$.",
      "[+3 Marks] Formal step-by-step proof showing $f(n') \\le C^* < f(G_2)$.",
      "[+2 Marks] Triangle inequality formula for consistency and proof that $f(n') \\ge f(n)$.",
      "[+1 Mark] Explanation of why consistency eliminates reopening closed nodes.",
      "[+3 Marks] Clear distinction: MRV = variable selection (fail-first), LCV = value selection (fail-last)."
    ],
    examinerTrap: "Confusing Tree Search with Graph Search: Admissibility is sufficient for Tree Search, but Graph Search requires Consistency. Also testing goal when node is pushed instead of popped loses full proof marks."
  },
  {
    id: "d1-exam-q3",
    title: "Question 3: PCA Variance Maximization vs Target Leakage (PRS Q1e)",
    topic: "PRS / PSUPR Day 3 (Official Sample Paper Nov 2026 Q1e)",
    totalMarks: 10,
    scenario: `
      In an e-commerce behavioral analytics project (Nov 2026 PRS Q1e), an engineer applies PCA to reduce 10 session attributes into 4 Principal Components.
      The eigenvalues of the sample covariance matrix are:
      $\\lambda_1 = 4.25, \\lambda_2 = 2.10, \\lambda_3 = 1.45, \\lambda_4 = 0.80, \\dots, \\sum_{i=1}^{10} \\lambda_i = 10.0$.
      In the published component loading matrix, the binary classification target column <code>Revenue</code> (0 = Non-Buyer, 1 = Buyer) has loading <strong>+0.221 in PC1</strong> and <strong>+0.534 in PC4</strong>.
      Furthermore, categorical variables <code>Browser</code> (values 1 to 13) and <code>OperatingSystem</code> (values 1 to 8) were fed directly into the numeric PCA calculation.
    `,
    subparts: [
      { prompt: "Calculate the percentage of total variance explained by the first two principal components (PC1 and PC2).", marks: 2 },
      { prompt: "Critique the presence of the <code>Revenue</code> target column in the PCA transformation. Why is this a fatal methodological flaw?", marks: 4 },
      { prompt: "Identify the error regarding <code>Browser</code> and <code>OperatingSystem</code>, and specify the correct feature engineering preprocessing steps.", marks: 4 }
    ],
    solution: `
      <p><strong>Part (a) Explained Variance Ratio [2 Marks]:</strong></p>
      $$\\begin{aligned}
      \\text{Explained Variance}(\\text{PC1}) &= \\frac{\\lambda_1}{\\sum \\lambda} = \\frac{4.25}{10.0} = 42.5\\% \\\\
      \\text{Explained Variance}(\\text{PC2}) &= \\frac{\\lambda_2}{\\sum \\lambda} = \\frac{2.10}{10.0} = 21.0\\% \\\\
      \\text{Cumulative Variance}(\\text{PC1} + \\text{PC2}) &= 42.5\\% + 21.0\\% = \\mathbf{63.5\\%}
      \\end{aligned}$$

      <p><strong>Part (b) Fatal Target Leakage Critique [4 Marks]:</strong></p>
      <ol>
        <li><strong>Unsupervised Nature Violated:</strong> PCA is strictly an unsupervised technique intended to compress input features $\\mathbf{X}$. Including target label $Y$ (<code>Revenue</code>) introduces <strong>Data Leakage</strong>.</li>
        <li><strong>Inference Failure at Test Time:</strong> At test/deployment time, a customer's purchasing status is unknown (that is the exact variable the system must predict!). If the learned PCA projection matrix requires <code>Revenue</code> as an input, the model cannot physically transform test data without fabricating the answer.</li>
        <li><strong>Artificially Inflated Offline Metrics:</strong> Offline cross-validation scores will look spectacular because PC1 and PC4 leak ground-truth buyer labels directly into subsequent classifiers, but real-world performance will catastrophically crash.</li>
      </ol>

      <p><strong>Part (c) Categorical Encoding Error & Solution [4 Marks]:</strong></p>
      <ul>
        <li><strong>The Error:</strong> <code>Browser</code> and <code>OperatingSystem</code> are nominal categorical variables with no inherent mathematical order ($Browser=4$ is not 'twice as large' as $Browser=2$). Treating arbitrary integer IDs as continuous metric variables creates false distance relationships in the covariance matrix.</li>
        <li><strong>The Solution:</strong>
          <ol>
            <li>High-cardinality nominals must be converted via <strong>One-Hot Encoding</strong> (creating binary dummy indicators for frequent categories) or target frequency encoding.</li>
            <li>Drop infrequent categories into an 'Other' bucket to prevent dimension explosion.</li>
            <li>Apply standard scaling to all continuous features prior to PCA.</li>
          </ol>
        </li>
      </ul>
    `,
    rubric: [
      "[+2 Marks] Correct cumulative variance calculation: $(4.25 + 2.10)/10 = 63.5\\%$.",
      "[+2 Marks] Stating that PCA is unsupervised and target inclusion is data leakage.",
      "[+2 Marks] Explaining why model cannot run at test time when target is missing.",
      "[+2 Marks] Identifying that nominal IDs have no mathematical ordering.",
      "[+2 Marks] Recommending one-hot encoding and standard scaling."
    ],
    examinerTrap: "Failing to spot the target variable inside Table 3 of the exam paper. Always inspect PCA loading tables for the dependent class label!"
  },
  {
    id: "d1-exam-q4",
    title: "Question 4: Soft-Margin SVM Formulation & RBF Kernel Dynamics",
    topic: "PRS / PRMLS Day 2a (Official Exam Format)",
    totalMarks: 10,
    scenario: `
      A binary classification task uses a soft-margin Support Vector Machine with an RBF (Gaussian) kernel:
      $$K(\\mathbf{x}, \\mathbf{x}') = \\exp(-\\gamma \\|\\mathbf{x} - \\mathbf{x}'\\|^2)$$
      The primal optimization objective is formulated as:
      $$\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i \\quad \\text{subject to } y_i(\\mathbf{w}^T \\phi(\\mathbf{x}_i) + b) \\ge 1 - \\xi_i, \\quad \\xi_i \\ge 0$$
    `,
    subparts: [
      { prompt: "Define the physical meaning of the slack variables $\\xi_i$ and state the geometric location of sample $\\mathbf{x}_i$ when $\\xi_i = 0$, $0 < \\xi_i < 1$, and $\\xi_i > 1$.", marks: 4 },
      { prompt: "Analyze the bias-variance trade-off when tuning penalty parameter $C$.", marks: 3 },
      { prompt: "Explain the geometric effect of setting Gaussian kernel parameter $\\gamma$ too high vs too low.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Slack Variables $\\xi_i$ [4 Marks]:</strong></p>
      <p>$\\xi_i$ quantifies the degree of margin violation for training instance $i$:</p>
      <ul>
        <li><strong>$\\xi_i = 0$:</strong> The sample is correctly classified and lies on or outside the margin boundary ($y_i f(\\mathbf{x}_i) \\ge 1$). If $y_i f(\\mathbf{x}_i) = 1$, it is a canonical support vector on the margin.</li>
        <li><strong>$0 < \\xi_i < 1$:</strong> The sample is correctly classified ($y_i f(\\mathbf{x}_i) > 0$), but violates the margin and lies inside the margin corridor. It is a support vector.</li>
        <li><strong>$\\xi_i = 1$:</strong> The sample lies exactly on the separating decision hyperplane ($f(\\mathbf{x}_i) = 0$).</li>
        <li><strong>$\\xi_i > 1$:</strong> The sample lies on the wrong side of the decision boundary and is <strong>misclassified</strong>.</li>
      </ul>

      <p><strong>Part (b) Bias-Variance Trade-off for $C$ [3 Marks]:</strong></p>
      <ul>
        <li><strong>Small $C$ ($C \\to 0$):</strong> Soft margin. The optimization prioritizes maximizing margin width ($1/\\|\\mathbf{w}\\|$) over training accuracy, tolerating many margin violations. Result: High bias, low variance (underfitting risk, robust to noise).</li>
        <li><strong>Large $C$ ($C \\to \\infty$):</strong> Hard margin. Heavily penalizes every non-zero slack $\\xi_i$, forcing the hyperplane to correctly classify every training point. Result: Low bias, high variance (severe overfitting risk).</li>
      </ul>

      <p><strong>Part (c) RBF Kernel Parameter $\\gamma$ [3 Marks]:</strong></p>
      <ul>
        <li><strong>High $\\gamma$:</strong> $\\gamma = 1/(2\\sigma^2)$. A large $\\gamma$ corresponds to a tiny Gaussian radius $\\sigma$. Each training instance creates a sharp, narrow Gaussian bell. The decision boundary twists into isolated islands around individual data points, causing extreme overfitting.</li>
        <li><strong>Low $\\gamma$:</strong> Large Gaussian radius $\\sigma$. Bells overlap broadly, producing a smooth, almost linear decision boundary with high bias (underfitting).</li>
      </ul>
    `,
    rubric: [
      "[+4 Marks] Correct geometric mapping: $\\xi=0$ (on/outside), $0<\\xi<1$ (inside margin), $\\xi>1$ (misclassified).",
      "[+3 Marks] Bias-variance trade-off for $C$ (low $C$ = wide margin/high bias; high $C$ = hard margin/high variance).",
      "[+3 Marks] Geometric behavior of $\\gamma$ (high $\\gamma$ = spiky overfitting; low $\\gamma$ = overly smooth boundary)."
    ],
    examinerTrap: "Thinking slack xi = 0.5 means misclassified. When 0 < xi < 1, the point is still on the correct side of the boundary, but has penetrated the safety margin."
  },
  {
    id: "d1-exam-q5",
    title: "Question 5: Market Basket Association Rules & Medical Recommender Critique",
    topic: "IRS / Reasoning Systems Day 4 (Official Exam IRS Q3b & Q3c)",
    totalMarks: 10,
    scenario: `
      An ophthalmology clinical decision support system (IRS Nov 2026 Q3) evaluates historical patient treatment records across 2,000 patients and 300 possible medication therapies.
      In an initial trial, an engineer proposes using standard User-Based Collaborative Filtering to recommend eye drops based on patient star-ratings.
      Separately, association rule mining is executed on sequential hospital visits to discover longitudinal disease-treatment progressions.
    `,
    subparts: [
      { prompt: "Define Support, Confidence, and Lift for association rule $X \\to Y$.", marks: 3 },
      { prompt: "Given a database of 2,000 patient records, if 400 patients received Drug A, 200 patients received Drug B, and 160 patients received both Drug A and Drug B, calculate Support, Confidence, and Lift for rule $\\text{Drug A} \\to \\text{Drug B}$.", marks: 3 },
      { prompt: "Critique why User-Based Collaborative Filtering is a disastrous failure mode for ophthalmology treatment recommendations (cite IRS Q3c).", marks: 4 }
    ],
    solution: `
      <p><strong>Part (a) Association Rule Metrics [3 Marks]:</strong></p>
      $$\\begin{aligned}
      \\text{Support}(X \\to Y) &= P(X \\cap Y) = \\frac{\\text{count}(X \\cup Y)}{N} \\\\
      \\text{Confidence}(X \\to Y) &= P(Y \\mid X) = \\frac{P(X \\cap Y)}{P(X)} = \\frac{\\text{count}(X \\cup Y)}{\\text{count}(X)} \\\\
      \\text{Lift}(X \\to Y) &= \\frac{P(X \\cap Y)}{P(X)P(Y)} = \\frac{\\text{Confidence}(X \\to Y)}{P(Y)}
      \\end{aligned}$$

      <p><strong>Part (b) Numerical Calculation [3 Marks]:</strong></p>
      $$N = 2000, \\quad \\text{count}(A) = 400, \\quad \\text{count}(B) = 200, \\quad \\text{count}(A \\cap B) = 160$$
      $$\\begin{aligned}
      \\text{Support}(A \\to B) &= \\frac{160}{2000} = \\mathbf{0.080} \\quad (8.0\\%) \\\\
      \\text{Confidence}(A \\to B) &= \\frac{160}{400} = \\mathbf{0.400} \\quad (40.0\\%) \\\\
      P(B) &= \\frac{200}{2000} = 0.100 \\quad (10.0\\%) \\\\
      \\text{Lift}(A \\to B) &= \\frac{0.400}{0.100} = \\mathbf{4.00}
      \\end{aligned}$$
      <p><strong>Interpretation:</strong> A lift of 4.0 indicates that patients taking Drug A are <strong>4 times more likely</strong> to receive Drug B than a random patient in the population.</p>

      <p><strong>Part (c) Collaborative Filtering Critique (IRS Q3c) [4 Marks]:</strong></p>
      <ol>
        <li><strong>Pathology Mismatch (Fatal Clinical Danger):</strong> Collaborative filtering assumes that if User A and User B agreed on past items, they will agree on future items. In medicine, eye treatment MUST be dictated by underlying biological etiology (intraocular pressure, bacterial strain, corneal thickness), NOT subjective satisfaction ratings. Recommending glaucoma drops to a cataract patient because they both liked artificial tears causes permanent blindness!</li>
        <li><strong>Extreme Matrix Sparsity:</strong> 2,000 patients $\\times$ 300 treatments = 600,000 cells. With only ~2,000 recorded interactions, the matrix is <strong>99.67% empty</strong>. Nearest-neighbor similarity vectors are completely uninformative.</li>
        <li><strong>Rare Disease Failure:</strong> Rare diseases have 1-2 cases. CF cannot find neighbor clusters for rare pathologies.</li>
        <li><strong>Clinical Recommendation:</strong> Use Rule-Based Expert Systems or Case-Based Reasoning (CBR) conditioned on objective clinical biomarker similarity.</li>
      </ol>
    `,
    rubric: [
      "[+3 Marks] Formal definitions of Support, Confidence, and Lift.",
      "[+3 Marks] Accurate calculations: Support=0.08, Confidence=0.40, Lift=4.0.",
      "[+2 Marks] Explaining pathology mismatch: treatments require objective etiology, not subjective ratings.",
      "[+2 Marks] Identifying extreme sparsity (99.67% empty) and recommending CBR/Rule engines."
    ],
    examinerTrap: "Recommending Collaborative Filtering for medical diagnosis. The exam paper specifically tests whether you recognize that e-commerce algorithms fail on safety-critical physiological workflows."
  },
  {
    id: "d1-exam-q6",
    title: "Question 6: Gaussian Mixture Model (GMM) EM Hand Calculation & Ward's Linkage",
    topic: "PSUPR Day 4 & Day 5 (Clustering & Unsupervised Learning)",
    totalMarks: 10,
    scenario: `
      A 1-dimensional dataset is modeled using a 2-component Gaussian Mixture Model:
      $$p(x) = \\pi_1 \\mathcal{N}(x \\mid \\mu_1, \\sigma_1^2) + \\pi_2 \\mathcal{N}(x \\mid \\mu_2, \\sigma_2^2)$$
      At current iteration $t$, the parameters are:
      $$\\pi_1 = 0.60, \\quad \\mu_1 = 2.0, \\quad \\sigma_1^2 = 1.0 \\quad (\\sigma_1 = 1.0)$$
      $$\\pi_2 = 0.40, \\quad \\mu_2 = 6.0, \\quad \\sigma_2^2 = 1.0 \\quad (\\sigma_2 = 1.0)$$
      Consider observation point $x^* = 4.0$. Note that for a 1D Gaussian:
      $$\\mathcal{N}(x \\mid \\mu, \\sigma^2) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right)$$
      With $\\frac{1}{\\sqrt{2\\pi}} \\approx 0.3989$.
      Separately, in Agglomerative Hierarchical Clustering, Cluster $A$ contains $n_A = 4$ points with centroid $\\boldsymbol{\\mu}_A = [2, 3]^T$, and Cluster $B$ contains $n_B = 6$ points with centroid $\\boldsymbol{\\mu}_B = [5, 7]^T$.
    `,
    subparts: [
      { prompt: "Calculate Gaussian densities $\\mathcal{N}(4 \\mid 2, 1)$ and $\\mathcal{N}(4 \\mid 6, 1)$, and determine the posterior responsibilities $\\gamma_1(x^*)$ and $\\gamma_2(x^*)$ during the E-step.", marks: 4 },
      { prompt: "Explain how the M-step updates mean $\\mu_1$ and explain why GMM provides a soft-probabilistic generalization of hard K-Means.", marks: 3 },
      { prompt: "Calculate the Ward's minimum variance linkage merge cost $\\Delta \\text{ESS}(A, B)$ for merging clusters $A$ and $B$.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) E-Step Density & Responsibility Calculation [4 Marks]:</strong></p>
      <p>Evaluate density for Component 1 ($\\\\mu_1 = 2, \\\\sigma_1^2 = 1$):</p>
      $$\\begin{aligned}
      \\mathcal{N}(4 \\mid 2, 1) &= 0.3989 \\times \\exp\\left( -\\frac{(4 - 2)^2}{2(1)} \\right) \\\\
      &= 0.3989 \\times \\exp(-2) \\\\
      &= 0.3989 \\times 0.135335 \\approx \\mathbf{0.0540}
      \\end{aligned}$$

      <p>Evaluate density for Component 2 ($\\\\mu_2 = 6, \\\\sigma_2^2 = 1$):</p>
      $$\\begin{aligned}
      \\mathcal{N}(4 \\mid 6, 1) &= 0.3989 \\times \\exp\\left( -\\frac{(4 - 6)^2}{2(1)} \\right) \\\\
      &= 0.3989 \\times \\exp(-2) \\\\
      &= 0.3989 \\times 0.135335 \\approx \\mathbf{0.0540}
      \\end{aligned}$$

      <p>Notice that because $x^* = 4$ is equidistant from $\\mu_1 = 2$ and $\\mu_2 = 6$, both densities are identical ($0.0540$). However, the mixing priors $\\pi_1 = 0.60$ and $\\pi_2 = 0.40$ break the tie:</p>
      $$\\begin{aligned}
      \\text{Numerator}_1 &= \\pi_1 \\mathcal{N}(4 \\mid 2, 1) = 0.60 \\times 0.0540 = 0.0324 \\\\
      \\text{Numerator}_2 &= \\pi_2 \\mathcal{N}(4 \\mid 6, 1) = 0.40 \\times 0.0540 = 0.0216 \\\\
      \\text{Total Evidence} &= 0.0324 + 0.0216 = 0.0540
      \\end{aligned}$$
      $$\\mathbf{\\gamma_1(x^*) = \\frac{0.0324}{0.0540} = 0.600 \\quad (60.0\\%)}, \\quad \\mathbf{\\gamma_2(x^*) = \\frac{0.0216}{0.0540} = 0.400 \\quad (40.0\\%)}$$

      <p><strong>Part (b) M-Step Update & GMM vs K-Means [3 Marks]:</strong></p>
      $$\\mu_1^{(t+1)} = \\frac{\\sum_{i=1}^N \\gamma_{i1} x_i}{\\sum_{i=1}^N \\gamma_{i1}} = \\frac{\\sum_{i=1}^N \\gamma_{i1} x_i}{N_1}$$
      <ul>
        <li>In K-Means, cluster assignment is hard (indicator $\\gamma_{ik} \\in \\{0, 1\\}$), meaning point $x^*$ would be forced entirely into one cluster or arbitrarily split on ties.</li>
        <li>In GMM, $\\gamma_{ik} \\in [0, 1]$ represents continuous fractional ownership. Point $x^*$ contributes 60% of its value to updating $\\mu_1$ and 40% to updating $\\mu_2$.</li>
        <li>Furthermore, GMM parameters include full covariance matrices $\\boldsymbol{\\Sigma}_k$, allowing elliptical clusters with arbitrary orientation, whereas K-Means assumes isotropic spherical clusters.</li>
      </ul>

      <p><strong>Part (c) Ward's Minimum Variance Merge Cost [3 Marks]:</strong></p>
      $$\\Delta \\text{ESS}(A, B) = \\frac{n_A n_B}{n_A + n_B} \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2$$
      <p>Given $n_A = 4, n_B = 6, \\boldsymbol{\\mu}_A = [2, 3]^T, \\boldsymbol{\\mu}_B = [5, 7]^T$:</p>
      $$\\begin{aligned}
      \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2 &= (2 - 5)^2 + (3 - 7)^2 = (-3)^2 + (-4)^2 = 9 + 16 = \\mathbf{25} \\\\
      \\frac{n_A n_B}{n_A + n_B} &= \\frac{4 \\times 6}{4 + 6} = \\frac{24}{10} = \\mathbf{2.4} \\\\
      \\Delta \\text{ESS}(A, B) &= 2.4 \\times 25 = \\mathbf{60.0}
      \\end{aligned}$$
      <p>Ward's algorithm will compare this merge increase ($60.0$) against all other candidate pairs and merge the pair that causes the minimal $\\Delta \\text{ESS}$.</p>
    `,
    rubric: [
      "[+2 Marks] Calculating densities $\\mathcal{N}(4|2,1) = \\mathcal{N}(4|6,1) \\approx 0.0540$.",
      "[+2 Marks] Accurate posteriors: $\\gamma_1 = 0.60$ and $\\gamma_2 = 0.40$ incorporating priors.",
      "[+3 Marks] Stating M-step formula and contrasting soft probabilistic ownership with hard K-Means Voronoi partitions.",
      "[+3 Marks] Step-by-step Ward's merge cost calculation: $\\frac{24}{10} \\times 25 = 60.0$."
    ],
    examinerTrap: "Ignoring the mixing priors pi_1=0.6 and pi_2=0.4 in the E-step. Because the point is equidistant from both means, students often incorrectly write gamma_1 = gamma_2 = 0.5 without weighting by priors."
  }
];
