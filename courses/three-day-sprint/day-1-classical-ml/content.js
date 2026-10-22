// Day 1 Content: Classical Machine Learning, Probability & Search
// Course: Intelligent Pattern Recognition & Reasoning Systems — 3-Day Mastery Sprint
// Subtitle: From Data to Decisions — Classification, Bayesian Inference, Geometric Learning, Dimensionality Reduction and Intelligent Search

window.DAY1_CLASSICAL_ML_CONTENT = {
  id: "day-1-classical-ml",
  title: "Day 1: Classical Machine Learning, Probability & Search",
  author: "NUS-ISS Masterclass Senior Faculty",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Unified Mental Model — How Pattern Recognition and Machine Reasoning Work Together",
      subtitle: "Connecting Perception, Statistical Induction, and Deductive Problem Solving",
      badge: "PRS + IRS Foundation",
      content: `
        <div class="lesson-card hero-card mb-4">
          <div class="card-icon"><i data-lucide="zap"></i></div>
          <div class="card-body">
            <h3>Day 1 Synthesis: Classical Machine Learning, Probability & Search</h3>
            <p class="lead-text">
              Welcome to <strong>Day 1 of your Intensive 3-Day Mastery Sprint</strong>. Pattern Recognition Systems (PRS) and Intelligent Reasoning Systems (IRS) are often taught separately, but in real-world intelligent systems they operate as two halves of a single cognitive whole:
            </p>
            <div class="quote-box">
              <em>"Pattern Recognition (PRS) extracts empirical structure from raw, noisy observations through statistical learning, clustering, and geometry; Machine Reasoning (IRS) evaluates logical constraints, performs causal inference under uncertainty, and searches combinatorial state spaces to make verifiable decisions."</em>
              <div class="quote-author">— NUS ISS PRS + IRS Faculty Board</div>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>1. Pattern Recognition vs Machine Learning vs Machine Reasoning</h3>
          <p>
            Let us clarify the boundaries that examiners frequently probe in oral reviews and scenario questions:
          </p>
          <div class="grid-3-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:var(--accent-primary);"><i data-lucide="eye"></i> Pattern Recognition (PRS)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                <em>Sub-symbolic & Perceptual:</em> Focuses on taking continuous sensory measurements (voltages, pixels, sensor vectors) and mapping them into discrete labels or clusters (k-NN, SVM, CNN, Wavelets).
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:#60a5fa;"><i data-lucide="cpu"></i> Machine Learning (ML)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                <em>Inductive Optimization:</em> The broad mathematical paradigm where algorithms improve their performance metric on task $T$ through experience $E$ without being explicitly programmed with rules.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:#10b981;"><i data-lucide="brain"></i> Machine Reasoning (IRS)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                <em>Symbolic & Deliberative:</em> Focuses on operating over discrete, structured knowledge representations (Ontologies, DAGs, Rules, CSPs, Heuristic Graphs) to draw verifiable conclusions and plan actions.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. The Learning Paradigms: Supervised, Unsupervised & Probabilistic</h3>
          <table class="styled-table" style="font-size:0.88rem; width:100%;">
            <thead><tr><th>Learning Paradigm</th><th>Input Data</th><th>Mathematical Goal</th><th>Core Day 1 Algorithms</th></tr></thead>
            <tbody>
              <tr><td><strong>Supervised Learning</strong></td><td>Feature matrix $\\mathbf{X}$, Ground-truth labels $\\mathbf{y}$</td><td>Learn mapping $f: \\mathbf{X} \\to \\mathbf{y}$ minimizing loss $\\mathcal{L}(y, \\hat{y})$</td><td>k-NN, Logistic Regression, Naive Bayes, Decision Trees, SVM</td></tr>
              <tr><td><strong>Unsupervised Learning</strong></td><td>Feature matrix $\\mathbf{X}$ alone (no labels)</td><td>Discover latent manifold, clusters, or orthogonal bases</td><td>PCA, K-Means, DBSCAN, GMM-EM, Hierarchical Linkages</td></tr>
              <tr><td><strong>Probabilistic Reasoning</strong></td><td>Graph topology $\\mathcal{G}$, Evidence nodes $\\mathbf{e}$</td><td>Compute posterior belief distribution $P(Y \\mid \\mathbf{e})$</td><td>Bayesian Belief Networks (BBNs), d-separation, CPT factorizations</td></tr>
              <tr><td><strong>State-Space Search</strong></td><td>State space $\\mathcal{S}$, Actions $\\mathcal{A}$, Goal test</td><td>Find optimal cost trajectory from Start to Goal</td><td>$A^*$ Graph Search, Heuristic evaluation ($f=g+h$), CSP Backtracking</td></tr>
            </tbody>
          </table>
        </div>

        <div class="lesson-card mb-4">
          <h3>3. Model Complexity, Bias-Variance Trade-off & Data Splits</h3>
          <p>
            Every machine learning model must balance two competing sources of error:
          </p>
          $$\\text{Expected Prediction Error} = \\text{Bias}^2 + \\text{Variance} + \\sigma_{\\text{irreducible}}^2$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #ef4444;">
              <strong style="color:#ef4444;">Underfitting (High Bias)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                Model is overly simplistic and makes rigid assumptions (e.g. fitting a straight line to quadratic data). Both training error and test error are unacceptably high. Example: Linear SVM on circular boundary, or single decision stump.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #f59e0b;">
              <strong style="color:#f59e0b;">Overfitting (High Variance)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                Model has excessive capacity and memorizes random training noise. Training error approaches zero, but test generalization catastrophically collapses. Example: Unpruned decision tree with depth 30, 1-NN classifier, or RBF SVM with $\\gamma = 1000$.
              </p>
            </div>
          </div>
          <div style="background:rgba(59,130,246,0.1); border-left:3px solid #3b82f6; padding:12px; border-radius:6px; margin-top:12px; font-size:0.85rem;">
            <strong>Mandatory Protocol:</strong> Data must strictly be split into <strong>Training (e.g. 70%)</strong>, <strong>Validation (e.g. 15%)</strong> for hyperparameter tuning and model selection, and <strong>Test (e.g. 15%)</strong> kept locked in a vault for final unbiased evaluation. Preprocessing parameters (means, standard deviations, PCA bases) must be fit <em>strictly on training data</em> to avoid fatal test-time target leakage!
          </div>
        </div>
      `
    },
    {
      id: "level-1",
      title: "Level 1: Search Algorithms & Constraint Satisfaction (A* & CSP)",
      subtitle: "Finding Solutions in Combinatorial Search Spaces Under Constraints",
      badge: "Symbolic Problem Solving",
      content: `
        <div class="lesson-card mb-4">
          <h3>1. State-Space Representation & Uninformed vs Informed Search</h3>
          <p>
            A state space problem is formally defined by 5 components: $\\langle S_0, \\text{Actions}(s), \\text{Result}(s, a), \\text{GoalTest}(s), \\text{PathCost}(c) \\rangle$.
          </p>
          <table class="styled-table" style="font-size:0.85rem; width:100%;">
            <thead><tr><th>Search Algorithm</th><th>Frontier Queue Type</th><th>Selection Evaluation</th><th>Time Complexity</th><th>Completeness & Optimality</th></tr></thead>
            <tbody>
              <tr><td><strong>Breadth-First (BFS)</strong></td><td>FIFO Queue</td><td>Shallowest depth first</td><td>$O(b^d)$</td><td>Complete; Optimal only if step costs are equal</td></tr>
              <tr><td><strong>Depth-First (DFS)</strong></td><td>LIFO Stack</td><td>Deepest node first</td><td>$O(b^m)$</td><td>Not complete in infinite graphs; Not optimal</td></tr>
              <tr><td><strong>Uniform-Cost (UCS)</strong></td><td>Priority Queue</td><td>$g(n)$ (cumulative cost)</td><td>$O(b^{1 + \\lfloor C^*/\\epsilon \\rfloor})$</td><td>Complete; Optimal for any positive step costs (Dijkstra)</td></tr>
              <tr><td><strong>Greedy Best-First</strong></td><td>Priority Queue</td><td>$h(n)$ (heuristic only)</td><td>$O(b^m)$</td><td>Not complete; Not optimal (easily misled by obstacles)</td></tr>
              <tr><td><strong>$A^*$ Search</strong></td><td>Priority Queue</td><td>$f(n) = g(n) + h(n)$</td><td>$O(b^d)$ (heuristic dependent)</td><td><strong>Complete and Globally Optimal</strong> (if $h$ is admissible/consistent)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. The $A^*$ Algorithm: Admissibility vs Consistency Proofs</h3>
          $$\\mathbf{f(n) = g(n) + h(n)}$$
          <ul>
            <li>$g(n)$: Exact path cost accumulated from start node $S$ to current node $n$.</li>
            <li>$h(n)$: Estimated cheapest cost from $n$ to goal $G$.</li>
          </ul>

          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #3b82f6;">
              <h4 style="margin:0 0 6px 0; color:#60a5fa;">Admissibility (Tree Search Optimality)</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                A heuristic is <strong>admissible</strong> if it never overestimates:
                $$0 \\le h(n) \\le h^*(n), \\quad h(G) = 0$$
                <strong>Formal Proof of Optimality:</strong> Let $G^*$ be an optimal goal with cost $C^*$, and $G_2$ be a sub-optimal goal with $g(G_2) > C^*$. For $G_2$, $f(G_2) = g(G_2) + 0 > C^*$. Let $n'$ be an unexpanded node on the frontier that lies on the optimal path to $G^*$. By admissibility, $f(n') = g(n') + h(n') \\le g(n') + h^*(n') = C^*$. Thus $f(n') \\le C^* < f(G_2)$. $A^*$ will always pop $n'$ before $G_2$, preventing premature sub-optimal termination!
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #10b981;">
              <h4 style="margin:0 0 6px 0; color:#34d399;">Consistency / Monotonicity (Graph Search Optimality)</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                A heuristic is <strong>consistent</strong> if it obeys the triangle inequality:
                $$h(n) \\le c(n, a, n') + h(n')$$
                This guarantees $f(n') = g(n') + h(n') = g(n) + c(n, a, n') + h(n') \\ge g(n) + h(n) = f(n)$. The $f$-values along any path are monotonically non-decreasing. When a node is expanded for the first time, its path is globally optimal: <strong>closed nodes never need to be reopened</strong>.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="margin:0;"><i data-lucide="compass"></i> Interactive A* Graph Search Simulator</h3>
            <span class="badge-tech">Heuristic Admissibility Studio</span>
          </div>
          <div id="astar-grid-mount" style="min-height: 220px; background:var(--bg-secondary); border-radius:8px; padding:14px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div style="display:flex; gap:10px; margin-bottom:12px;">
              <button class="btn btn-primary btn-sm" id="astar-step-btn" onclick="if(window.SprintDay1Visualizers?.stepAStar) window.SprintDay1Visualizers.stepAStar();"><i data-lucide="play"></i> Step Expansion</button>
              <button class="btn btn-outline btn-sm" id="astar-reset-btn" onclick="if(window.SprintDay1Visualizers?.resetAStar) window.SprintDay1Visualizers.resetAStar();"><i data-lucide="rotate-ccw"></i> Reset Grid</button>
            </div>
            <div id="astar-canvas-container"></div>
            <div id="astar-status-text" style="font-size:0.82rem; color:var(--text-muted); margin-top:8px;">Ready. Click cells to place obstacles, then step through A* expansion.</div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>3. Constraint Satisfaction Problems (CSP): Backtracking & Pruning</h3>
          <p>
            A CSP is defined by variables $\\{X_1, \\dots, X_n\\}$, domains $\\{D_1, \\dots, D_n\\}$, and constraints $C$. Standard depth-first search explores $O(d^n)$ leaves. CSP backtracking prunes the search space using three filtering and ordering heuristics:
          </p>
          <div class="grid-3-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">1. MRV (Minimum Remaining Values)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Variable Selection ('Fail-First'):</em> Pick the variable with the fewest remaining legal domain values. Prunes failing subtrees earliest.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">2. Degree Heuristic</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Tie-Breaker:</em> If multiple variables have equal MRV count, choose the variable involved in the largest number of constraints with other unassigned variables.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">3. LCV (Least Constraining Value)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Value Selection ('Fail-Last'):</em> Once a variable is selected, pick the domain value that rules out the fewest choices for neighboring unassigned variables.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-2",
      title: "Level 2: Supervised Classification & Model Evaluation (Expanded)",
      subtitle: "k-NN, Logistic Regression, Naive Bayes, Decision Trees, and Comprehensive Confusion Matrix Metrics",
      badge: "Core Predictive Modeling",
      content: `
        <div class="lesson-card mb-4">
          <h3>1. k-Nearest Neighbors (k-NN) & Distance Normalization</h3>
          <p>
            k-NN is an instance-based non-parametric learner. For test query $\\mathbf{x}^*$, it computes distance to all training instances:
          </p>
          $$d(\\mathbf{x}^*, \\mathbf{x}_i) = \\sqrt{\\sum_{j=1}^D (x^*_j - x_{i,j})^2}$$
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin:12px 0;">
            <strong style="color:#ef4444;"><i data-lucide="alert-triangle"></i> Mandatory Normalization Rule:</strong>
            Features must always be standardized via $z = (x - \\mu)/\\sigma$. If feature 1 is Salary ($0 - 200,000) and feature 2 is Experience in Years ($0 - 30$), the squared differences of Salary completely swamp Experience, rendering Experience mathematically irrelevant!
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. Logistic Regression: Sigmoid & Decision Boundaries</h3>
          <p>
            For binary classification ($y \\in \\{0, 1\\}$), logistic regression models class posterior probability using the standard sigmoid function:
          </p>
          $$P(y = 1 \\mid \\mathbf{x}) = \\sigma(\\mathbf{w}^T \\mathbf{x} + b) = \\frac{1}{1 + e^{-(\\mathbf{w}^T \\mathbf{x} + b)}}$$
          $$\\text{Log-Odds / Logit: } \\ln\\left( \\frac{P(y=1 \\mid \\mathbf{x})}{1 - P(y=1 \\mid \\mathbf{x})} \\right) = \\mathbf{w}^T \\mathbf{x} + b$$
          <p style="font-size:0.85rem; color:var(--text-secondary);">
            The decision boundary is the linear hyperplane where $P(y=1 \\mid \\mathbf{x}) = 0.5$, which occurs when $\\mathbf{w}^T \\mathbf{x} + b = 0$.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>3. Naive Bayes Classification & Laplace Smoothing</h3>
          <p>
            By Bayes' theorem and feature conditional independence given class $C_k$:
          </p>
          $$P(C_k \\mid \\mathbf{x}) = \\frac{P(C_k) \\prod_{j=1}^D P(x_j \\mid C_k)}{P(\\mathbf{x})}$$
          <p>
            If a feature value $x_j$ never appeared with class $C_k$ in the training data, $P(x_j \\mid C_k) = 0$, which wipes out the entire joint probability! To prevent zero-frequency collapse:
          </p>
          $$\\mathbf{P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}}$$
          <p style="font-size:0.85rem; color:var(--text-secondary);">
            Where $|V_j|$ is the total number of distinct possible values of attribute $X_j$. Adding $|V_j|$ to the denominator preserves the total probability axiom (sum across all values equals 1).
          </p>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid var(--accent-primary);">
          <h3 style="color:var(--accent-primary); margin-top:0;">4. [Expanded] Decision Trees: Entropy & Information Gain</h3>
          <p>
            Decision trees partition feature space using recursive greedy splitting. At each node, we select the attribute that maximizes <strong>Information Gain</strong>:
          </p>
          $$\\text{Entropy of Set } S: \\quad H(S) = -\\sum_{i=1}^C p_i \\log_2(p_i)$$
          $$\\text{Information Gain: } \\quad IG(S, A) = H(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} H(S_v)$$
          <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; margin-top:10px; font-size:0.85rem;">
            <strong>Worked Numerical Example:</strong> Suppose a set of 14 sessions has 9 Buyers ($+$) and 5 Non-Buyers ($-$).
            $$H(S) = -\\left(\\frac{9}{14}\\log_2\\frac{9}{14} + \\frac{5}{14}\\log_2\\frac{5}{14}\\right) = -(0.6429 \\times (-0.6374) + 0.3571 \\times (-1.4854)) = \\mathbf{0.9403\\text{ bits}}$$
            If attribute $A$ splits $S$ into $S_{\\text{Loud}}$ (4 buyers, 1 non-buyer) and $S_{\\text{Quiet}}$ (5 buyers, 4 non-buyers), we compute entropy for both subsets and subtract their weighted average from $0.9403$ to find $IG(S, A)$. The attribute with highest $IG$ becomes the decision root!
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-top:0;">5. [Expanded] Comprehensive Confusion Matrix & Evaluation Metrics</h3>
          <p>
            In real-world engineering scenarios (e.g. medical diagnosis, fraud detection, machine breakdowns), overall accuracy is misleading due to severe class imbalance. We evaluate performance using the full Confusion Matrix:
          </p>
          <table class="styled-table" style="font-size:0.85rem; width:100%; text-align:center;">
            <thead><tr><th>Actual \\ Predicted</th><th>Predicted Positive (1)</th><th>Predicted Negative (0)</th><th>Metric Formula</th></tr></thead>
            <tbody>
              <tr><td><strong>Actual Positive (1)</strong></td><td style="background:rgba(16,185,129,0.15);"><strong>True Positive (TP)</strong></td><td style="background:rgba(239,68,68,0.15);"><strong>False Negative (FN)</strong> (Type II Error)</td><td><strong>Recall / Sensitivity:</strong> $\\frac{TP}{TP + FN}$</td></tr>
              <tr><td><strong>Actual Negative (0)</strong></td><td style="background:rgba(239,68,68,0.15);"><strong>False Positive (FP)</strong> (Type I Error)</td><td style="background:rgba(16,185,129,0.15);"><strong>True Negative (TN)</strong></td><td><strong>Specificity:</strong> $\\frac{TN}{TN + FP}$</td></tr>
              <tr><td><strong>Evaluation Summary</strong></td><td><strong>Precision:</strong> $\\frac{TP}{TP + FP}$</td><td><strong>Negative Predictive Value:</strong> $\\frac{TN}{TN + FN}$</td><td><strong>Accuracy:</strong> $\\frac{TP + TN}{TP + TN + FP + FN}$</td></tr>
            </tbody>
          </table>
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">F1-Score (Harmonic Mean):</strong>
              $$F_1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2TP}{2TP + FP + FN}$$
              Harmonic mean severely penalizes extreme imbalances between Precision and Recall.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">Cumulative Lift at Decile 1:</strong>
              $$\\text{Lift} = \\frac{\\text{Hit Rate in Top 10\\% Scored Population}}{\\text{Overall Population Base Rate}}$$
              Measures how much better the model is at capturing rare positives compared to random selection.
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-3",
      title: "Level 3: Bayesian Networks & Probabilistic Reasoning",
      subtitle: "Reasoning Under Uncertainty Using Graphical Models and d-Separation",
      badge: "Inference Under Uncertainty",
      content: `
        <div class="lesson-card mb-4">
          <h3>1. Bayesian Belief Networks (BBNs): Exploiting Conditional Independence</h3>
          <p>
            A full joint distribution over $N$ binary variables requires $2^N - 1$ parameters. A Bayesian Network represents the joint distribution as a Directed Acyclic Graph (DAG), factoring it into local Conditional Probability Tables (CPTs):
          </p>
          $$P(X_1, X_2, \\dots, X_N) = \\prod_{i=1}^N P(X_i \\mid \\text{Parents}(X_i))$$
          <p>
            If each node has at most $k$ parents, parameter complexity drops from $O(2^N)$ to $O(N \\cdot 2^k)$, making exact inference computationally tractable for large clinical and industrial systems.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. d-Separation & The 3 Classical Graphical Motifs</h3>
          <p>
            d-separation determines whether variable set $X$ is conditionally independent of $Y$ given evidence set $Z$:
          </p>
          <div class="grid-3-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:#60a5fa;">1. Serial Chain ($A \\to B \\to C$)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                Path is <strong>ACTIVE</strong> when $B$ is unobserved. Conditioning on $B$ <strong>BLOCKS</strong> the path: $A \\perp C \\mid B$.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:#60a5fa;">2. Divergent Fork ($A \\leftarrow B \\to C$)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                $B$ is a common cause. Path is <strong>ACTIVE</strong> when $B$ is unobserved. Conditioning on $B$ <strong>BLOCKS</strong> the path: $A \\perp C \\mid B$.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border:1px solid #ef4444;">
              <strong style="color:#f87171;">3. Convergent Collider ($A \\to B \\leftarrow C$)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                $B$ is a common effect. Path is <strong>BLOCKED</strong> when $B$ is unobserved ($A \\perp C$). Conditioning on $B$ or its descendants <strong>ACTIVATES</strong> the path ('Explaining Away')!
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-4",
      title: "Level 4: SVM, Dimensionality Reduction & Feature Engineering",
      subtitle: "Learning Optimal Boundaries, RBF Kernels, PCA Variance vs LDA Rayleigh & Data Leakage",
      badge: "Continuous Geometric Intelligence",
      content: `
        <div class="lesson-card mb-4">
          <h3>1. Support Vector Machines (SVM): Primal Soft-Margin Formulation</h3>
          <p>
            SVM constructs an optimal separating hyperplane $\\mathbf{w}^T \\mathbf{x} + b = 0$ that maximizes the geometric margin $\\frac{2}{\\|\\mathbf{w}\\|}$. Slack variables $\\xi_i \\ge 0$ permit margin violations penalized by trade-off parameter $C$:
          </p>
          $$\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i \\quad \\text{subject to} \\quad y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\ge 1 - \\xi_i, \\quad \\xi_i \\ge 0$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Slack Variable Cases:</strong>
              <ul style="font-size:0.85rem; margin:6px 0 0 0; padding-left:18px;">
                <li>$\\xi_i = 0$: Point on or outside margin ($y_i f \\ge 1$).</li>
                <li>$0 < \\xi_i < 1$: Correctly classified ($y_i f > 0$) but inside margin corridor.</li>
                <li>$\\xi_i = 1$: Point lies directly on separating hyperplane ($f=0$).</li>
                <li>$\\xi_i > 1$: Point is <strong>misclassified</strong>.</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Parameter $C$ Bias-Variance Control:</strong>
              <ul style="font-size:0.85rem; margin:6px 0 0 0; padding-left:18px;">
                <li><strong>Large $C$ ($C \\to \\infty$):</strong> Hard margin, zero training errors, narrow margin, low bias, high variance (overfitting risk).</li>
                <li><strong>Small $C$ ($C \\to 0$):</strong> Soft margin, wide corridor, high bias, low variance (noise tolerant).</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. The Kernel Trick: Linear, Polynomial & RBF Gaussian</h3>
          <p>
            Evaluating inner products $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\langle \\phi(\\mathbf{x}_i), \\phi(\\mathbf{x}_j) \\rangle$ directly:
          </p>
          <div class="grid-3-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>1. Linear Kernel</strong>
              $$K(\\mathbf{x}_i, \\mathbf{x}_j) = \\mathbf{x}_i^T \\mathbf{x}_j$$
              Ideal for high-dimensional text vectors where $D \\gg N$.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>2. Polynomial Kernel</strong>
              $$K(\\mathbf{x}_i, \\mathbf{x}_j) = (\\mathbf{x}_i^T \\mathbf{x}_j + c)^d$$
              Computes all degree-$d$ interactions without explicit vector generation.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border:1px solid #3b82f6;">
              <strong style="color:#60a5fa;">3. RBF Gaussian Kernel</strong>
              $$K = \\exp\\left(-\\gamma \\|\\mathbf{x}_i - \\mathbf{x}_j\\|^2\\right)$$
              $\\gamma = \\frac{1}{2\\sigma^2}$. High $\\gamma$ causes spiky overfitting; low $\\gamma$ causes underfitting.
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>3. Unsupervised PCA vs Supervised Fisher LDA</h3>
          <table class="styled-table" style="font-size:0.88rem; width:100%;">
            <thead><tr><th>Aspect</th><th>PCA (Principal Component Analysis)</th><th>LDA (Linear Discriminant Analysis)</th></tr></thead>
            <tbody>
              <tr><td><strong>Supervision</strong></td><td>Strictly <strong>Unsupervised</strong> (ignores class labels)</td><td>Strictly <strong>Supervised</strong> (uses class labels $y$)</td></tr>
              <tr><td><strong>Objective Function</strong></td><td>Maximize projected variance $\\mathbf{w}^T \\Sigma \\mathbf{w}$ subject to $\\|\\mathbf{w}\\|=1$</td><td>Maximize Rayleigh quotient: $J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}}$</td></tr>
              <tr><td><strong>Eigen-Problem</strong></td><td>$\\Sigma \\mathbf{w} = \\lambda \\mathbf{w}$ where $\\Sigma = \\frac{1}{N-1}\\tilde{X}^T\\tilde{X}$</td><td>Generalized eigen-problem: $S_W^{-1} S_B \\mathbf{w} = \\lambda \\mathbf{w}$</td></tr>
              <tr><td><strong>Max Components</strong></td><td>Up to feature dimension $D$</td><td>At most $\\min(C - 1, D)$ ($C$ = class count)</td></tr>
              <tr><td><strong>Exam Warning (PRS Q1e)</strong></td><td>Target column leaked into PCA input matrix</td><td>Fails if within-class scatter $S_W$ is singular ($N < D$)</td></tr>
            </tbody>
          </table>
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin-top:12px; font-size:0.85rem;">
            <strong style="color:#ef4444;">PRS Q1e Data Leakage Trap:</strong> In Table 3 of the Nov 2026 PRS exam, the target label <code>Revenue</code> was leaked into PC1 (0.221) and PC4 (0.534). This destroyed production deployment because at real-world test time, the customer's <code>Revenue</code> status is unknown! Always fit PCA <em>strictly on training predictors</em>.
          </div>
        </div>
      `
    },
    {
      id: "level-5",
      title: "Level 5: Clustering, Mixture Models & Recommender Foundations (Expanded)",
      subtitle: "K-Means, GMM Expectation-Maximization, DBSCAN, Ward Linkage, Apriori & Matrix Factorization",
      badge: "Latent Pattern Discovery",
      content: `
        <div class="lesson-card mb-4">
          <h3>1. K-Means vs Gaussian Mixture Models (GMM)</h3>
          <p>
            <strong>K-Means</strong> minimizes Within-Cluster Sum of Squares (WCSS): $\\sum_{k=1}^K \\sum_{\\mathbf{x} \\in C_k} \\|\\mathbf{x} - \\boldsymbol{\\mu}_k\\|^2$. It enforces hard, spherical Voronoi partitions.<br>
            <strong>GMM & Expectation-Maximization (EM):</strong> Represents data as a mixture of Gaussians: $p(\\mathbf{x}) = \\sum \\pi_k \\mathcal{N}(\\mathbf{x} \\mid \\boldsymbol{\\mu}_k, \\boldsymbol{\\Sigma}_k)$.
          </p>
          <div class="grid-2-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>E-Step (Posterior Responsibility):</strong>
              $$\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_k, \\boldsymbol{\\Sigma}_k)}{\\sum_{j=1}^K \\pi_j \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_j, \\boldsymbol{\\Sigma}_j)}$$
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>M-Step (Parameter Updates):</strong>
              $$\\boldsymbol{\\mu}_k = \\frac{1}{N_k}\\sum_{i=1}^N \\gamma_{ik}\\mathbf{x}_i, \\quad \\pi_k = \\frac{N_k}{N}$$
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. DBSCAN & Hierarchical Linkages</h3>
          <p>
            <strong>DBSCAN:</strong> Replaces centroids with density connectivity (parameters $\\epsilon, \\text{MinPts}$). Discovers arbitrary non-convex geometries (rings, crescents) and isolates noise into label $-1$.<br>
            <strong>Ward's Minimum Variance Linkage:</strong> Merges clusters that minimize the increase in total within-cluster variance:
            $$\\Delta \\text{ESS} = \\frac{n_A n_B}{n_A + n_B} \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2$$
          </p>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid var(--accent-primary);">
          <h3 style="color:var(--accent-primary); margin-top:0;">3. [Expanded] Recommender Systems: Collaborative Filtering & Matrix Factorization</h3>
          <p>
            Recommender systems predict missing preferences in a user-item rating matrix $R \\in \\mathbb{R}^{M \\times N}$:
          </p>
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>User-Based vs Item-Based Collaborative Filtering (CF):</strong>
              <p style="font-size:0.82rem; margin:4px 0 0 0; line-height:1.45;">
                Computes cosine or Pearson similarity between rating vectors: $\\text{sim}(u, v) = \\frac{\\mathbf{r}_u \\cdot \\mathbf{r}_v}{\\|\\mathbf{r}_u\\| \\|\\mathbf{r}_v\\|}$.<br>
                <em>Fatal Clinical Trap (IRS Q3c):</em> Collaborative filtering assumes subjective preference correlation. In medicine, eye treatments require objective biological etiology, NOT star ratings! Recommending glaucoma drops based on CF causes blindness.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Matrix Factorization (SVD / Latent Factors):</strong>
              <p style="font-size:0.82rem; margin:4px 0 0 0; line-height:1.45;">
                Decomposes high-dimensional sparse matrix $R$ into dense low-rank user matrix $P \\in \\mathbb{R}^{M \\times k}$ and item matrix $Q \\in \\mathbb{R}^{N \\times k}$:
                $$\\hat{r}_{u,i} = \\mathbf{p}_u^T \\mathbf{q}_i = \\sum_{f=1}^k p_{u,f} q_{i,f}$$
                Minimizes regularized loss: $\\sum_{(u,i) \\in R} (r_{ui} - \\mathbf{p}_u^T \\mathbf{q}_i)^2 + \\lambda(\\|\\mathbf{p}_u\\|^2 + \\|\\mathbf{q}_i\\|^2)$.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>4. Market Basket Analysis: Support, Confidence & Lift</h3>
          $$\\text{Support}(X \\to Y) = P(X \\cap Y) = \\frac{\\text{count}(X \\cup Y)}{N}$$
          $$\\text{Confidence}(X \\to Y) = P(Y \\mid X) = \\frac{\\text{count}(X \\cup Y)}{\\text{count}(X)}$$
          $$\\text{Lift}(X \\to Y) = \\frac{\\text{Conf}(X \\to Y)}{P(Y)} = \\frac{P(X \\cap Y)}{P(X)P(Y)}$$
          <p style="font-size:0.85rem; color:var(--text-secondary);">
            $\\text{Lift} > 1$: Positive association ($X$ increases purchase of $Y$). $\\text{Lift} = 1$: Independent. $\\text{Lift} < 1$: Negative substitution.
          </p>
        </div>
      `
    },
    {
      id: "level-6",
      title: "Level 6: Integrated Mathematical Workshop",
      subtitle: "From Algorithm Recognition to Independent Problem Solving (Step-by-Step Numerical Walkthroughs)",
      badge: "Hands-on Code & Proofs",
      content: `
        <div class="lesson-card mb-4">
          <h3>Comprehensive Mathematical Exercises & Formulas</h3>
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <h4 style="margin:0 0 6px 0; color:var(--accent-primary);">1. Naive Bayes Laplace Smoothing</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                For attribute $X$ with $|V|=3$ values, if $\\text{count}(X=\\text{Low}, C_2) = 0$ out of 5 instances of $C_2$:
                $$P(X=\\text{Low} \\mid C_2) = \\frac{0 + 1}{5 + 3} = \\frac{1}{8} = 0.1250 \\quad (\\text{Non-zero!})$$
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <h4 style="margin:0 0 6px 0; color:var(--accent-primary);">2. Confusion Matrix F1 & Lift</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                If $TP=50, FP=10, FN=20$:
                $$\\text{Precision} = \\frac{50}{60} = 0.833, \\quad \\text{Recall} = \\frac{50}{70} = 0.714$$
                $$F_1 = 2 \\times \\frac{0.833 \\times 0.714}{0.833 + 0.714} = \\mathbf{0.769}$$
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Hands-on Python Implementation: A*, Naive Bayes, Decision Trees & SVM</h3>
          <div class="code-tab-container">
            <div class="code-tab-nav" style="display:flex; gap:8px; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:12px;">
              <button class="btn btn-sm btn-primary" onclick="ThreeDaySprintDay1Visualizers.showCodeTab('py-nb')">Naive Bayes Laplace</button>
              <button class="btn btn-sm btn-outline" onclick="ThreeDaySprintDay1Visualizers.showCodeTab('py-astar')">A* Search</button>
              <button class="btn btn-sm btn-outline" onclick="ThreeDaySprintDay1Visualizers.showCodeTab('py-pca')">PCA & SVM</button>
            </div>
            <div id="code-content-area" style="background:#1e1e1e; border-radius:8px; padding:16px; font-family:'JetBrains Mono', monospace; font-size:0.85rem; color:#d4d4d4; overflow-x:auto;">
<pre><code>import numpy as np
from sklearn.naive_bayes import CategoricalNB

# Naive Bayes with Laplace Smoothing (alpha = 1.0)
X_train = np.array([[0, 1], [1, 0], [2, 1], [0, 1]]) # Features
y_train = np.array([0, 0, 1, 1])

# min_categories enforces cardinality |V| in the denominator!
clf = CategoricalNB(alpha=1.0, min_categories=[3, 2])
clf.fit(X_train, y_train)

# Predict for test instance (Low=0, Loud=1)
X_test = np.array([[0, 1]])
prob = clf.predict_proba(X_test)
print(f"Predicted class: {clf.predict(X_test)[0]} with probabilities: {prob}")
</code></pre>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-top:0;"><i data-lucide="award"></i> Level Complete: Proceed to Day 1 Quizzes & Exam Questions!</h3>
          <p style="font-size:0.9rem; margin-bottom:14px;">
            Test your conceptual clarity with the 10 Slide Mastery Quizzes, tackle the 6 structured NUS ISS post-quiz exam questions, and use the Doubt Resolver if you need help on any step.
          </p>
          <button class="btn btn-primary" onclick="app.loadLevel('quizzes')">
            <i data-lucide="play"></i> Proceed to Day 1 Quizzes & Exam Questions
          </button>
        </div>
      `
    }
  ]
};
