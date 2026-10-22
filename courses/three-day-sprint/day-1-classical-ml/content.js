// Day 1 Content: Classical ML + Probability + Search
// Deepened & Expanded Edition: Rigorous SVM, PCA vs LDA, Clustering (GMM-EM, K-Means, DBSCAN, Ward), Naive Bayes, BBNs & A*

window.DAY1_CLASSICAL_ML_CONTENT = {
  id: "day-1-classical-ml",
  title: "Day 1: Classical ML + Probability + Search",
  author: "NUS-ISS Masterclass Senior Faculty",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Unified Dependency Map — Statistical Learning to Verifiable Search",
      subtitle: "Why Classical ML, Bayesian Reasoning, and Search Form a Single Unified Continuum",
      badge: "Architectural Synthesis",
      content: `
        <div class="lesson-card hero-card mb-4">
          <div class="card-icon"><i data-lucide="zap"></i></div>
          <div class="card-body">
            <h3>Day 1 Synthesis: Classical ML + Probability + Search</h3>
            <p class="lead-text">
              Welcome to <strong>Day 1 of your Accelerated 3-Day Fast-Track Sprint</strong>. By organizing machine learning by <strong>fundamental learning paradigms and geometric representations</strong>, we construct an ironclad mental hierarchy:
            </p>
            <div class="quote-box">
              <em>"Deterministic Search ($A^*$, CSP) navigates known state graphs; Supervised Classifiers (k-NN, Naive Bayes, SVM) construct optimal separation boundaries from labeled empirical points; Dimensionality Reduction (PCA, Fisher LDA) extracts compact coordinate bases; Unsupervised Clustering (K-Means, GMM-EM, DBSCAN) discovers latent cluster structures; and Probabilistic Networks (BBNs) handle uncertainty and causal inference."</em>
              <div class="quote-author">— NUS ISS A+ Exam Synthesis</div>
            </div>
          </div>
        </div>

        <div class="grid-3-col mb-4">
          <div class="lesson-card">
            <h4><i data-lucide="compass"></i> Pillar 1: Search & Constraints</h4>
            <p style="font-size: 0.88rem; line-height: 1.55;">
              Explore how agents navigate combinatorially explosive graphs. Master $f(n) = g(n) + h(n)$, heuristic admissibility ($h \\le h^*$), graph consistency ($h(n) \\le c + h(n')$), and CSP backtracking heuristics (MRV, Degree, LCV).
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="layers"></i> Pillar 2: Classifiers & Geometry</h4>
            <p style="font-size: 0.88rem; line-height: 1.55;">
              From non-parametric instance memory (k-NN) and conditional independence (Naive Bayes Laplace) to maximal-margin hyperplanes (Soft-Margin SVM, Lagrangian Dual, KKT conditions, RBF kernels) and Fisher's LDA discriminant ratio.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="git-branch"></i> Pillar 3: Latent Factors & Bayes</h4>
            <p style="font-size: 0.88rem; line-height: 1.55;">
              Maximize unsupervised variance with PCA (avoiding test-time target leakage), partition space with K-Means Lloyd's, GMM Expectation-Maximization, and DBSCAN, mine Apriori associations (Support, Confidence, Lift), and factorize distributions via Bayesian DAGs & d-separation.
            </p>
          </div>
        </div>

        <div class="lesson-card mb-4" style="background: var(--bg-secondary); border-left: 4px solid var(--accent-primary);">
          <h4 style="margin-top:0;"><i data-lucide="clock"></i> Suggested 5–6 Hour Study Strategy for Day 1</h4>
          <ol style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 0;">
            <li><strong>Hour 1 (Search & CSP):</strong> Work through Level 1, interact with the $A^*$ pathfinder and N-Queens CSP solver.</li>
            <li><strong>Hour 2 (Supervised Classifiers):</strong> Master k-NN distance normalization and Naive Bayes Laplace hand-calculations in Level 2.</li>
            <li><strong>Hour 3 (Bayesian Networks):</strong> Master d-separation, the Collider trap, and CPT factorizations in Level 3.</li>
            <li><strong>Hour 4 (Deep Geometry: SVM & PCA vs LDA):</strong> Study the Lagrangian dual, KKT complementary slackness, RBF Gaussian kernels, Rayleigh quotient maximization, and the Nov 2026 PRS Q1e PCA target leakage trap in Level 4.</li>
            <li><strong>Hour 5 (Unsupervised Clustering: K-Means, GMM-EM, DBSCAN):</strong> Compare Lloyd's WCSS convergence, GMM posterior responsibilities $\\gamma_{ik}$, DBSCAN core/border/noise points, and Ward's linkage in Level 5.</li>
            <li><strong>Hour 6 (Revision & Exam Crucible):</strong> Complete the 10 Slide Mastery Quizzes, tackle the 6 post-quiz structured exam questions, and resolve any doubts in the Q&A Assistant!</li>
          </ol>
        </div>
      `
    },
    {
      id: "level-1",
      title: "Level 1: State-Space Search & Constraint Satisfaction (A* & CSP)",
      subtitle: "Admissibility, Consistency Proofs & MRV/LCV Backtracking",
      badge: "Core Reasoning Foundation",
      content: `
        <div class="lesson-card mb-4">
          <h3>The $A^*$ Algorithm: Balancing Explored Cost and Future Heuristic</h3>
          <p>
            In any state-space graph search, $A^*$ selects the node $n$ from the OPEN Priority Queue that minimizes total estimated path cost:
          </p>
          $$\\mathbf{f(n) = g(n) + h(n)}$$
          <ul>
            <li>$g(n)$: Exact path cost accumulated from the start node $S$ to current node $n$.</li>
            <li>$h(n)$: Heuristic estimate of the cheapest path cost from $n$ to goal $G$.</li>
          </ul>

          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); border-radius:8px; padding:14px; border-left:3px solid #3b82f6;">
              <h4 style="margin:0 0 6px 0; color:#60a5fa;">Admissibility (Tree Search Optimality)</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                A heuristic is <strong>admissible</strong> if it is optimistic and never overestimates the true remaining cost to the goal:
                $$0 \\le h(n) \\le h^*(n), \\quad h(G) = 0$$
                This guarantees optimal paths in <em>Tree Search</em> because no sub-optimal goal can ever be expanded before an optimal frontier node.
              </p>
            </div>
            <div style="background:var(--bg-secondary); border-radius:8px; padding:14px; border-left:3px solid #10b981;">
              <h4 style="margin:0 0 6px 0; color:#34d399;">Consistency / Monotonicity (Graph Search Optimality)</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                A heuristic is <strong>consistent</strong> if it obeys the triangle inequality across every step $(n, a, n')$:
                $$h(n) \\le c(n, a, n') + h(n')$$
                This guarantees $f(n') = g(n') + h(n') \\ge g(n) + h(n) = f(n)$. The estimated cost along any path is monotonically non-decreasing. When a node is expanded for the first time, its path is globally optimal; <strong>no closed nodes ever need to be reopened</strong>.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="margin:0;"><i data-lucide="compass"></i> Interactive A* Graph Search Simulator</h3>
            <span class="badge-tech">Heuristic Admissibility Studio</span>
          </div>
          <p style="font-size:0.88rem; color:var(--text-secondary);">
            Click on cells to toggle obstacles, then step through $A^*$ expansion to watch $g(n)$, $h(n)$, and $f(n)$ updates.
          </p>
          <div id="astar-grid-mount" style="min-height: 220px; background:var(--bg-secondary); border-radius:8px; padding:14px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div style="display:flex; gap:10px; margin-bottom:12px;">
              <button class="btn btn-primary btn-sm" id="astar-step-btn" onclick="if(window.SprintDay1Visualizers?.stepAStar) window.SprintDay1Visualizers.stepAStar();"><i data-lucide="play"></i> Step Expansion</button>
              <button class="btn btn-outline btn-sm" id="astar-reset-btn" onclick="if(window.SprintDay1Visualizers?.resetAStar) window.SprintDay1Visualizers.resetAStar();"><i data-lucide="rotate-ccw"></i> Reset Grid</button>
            </div>
            <div id="astar-canvas-container"></div>
            <div id="astar-status-text" style="font-size:0.82rem; color:var(--text-muted); margin-top:8px;">Ready. Step expansion will trace OPEN and CLOSED priority queues.</div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Constraint Satisfaction Problems (CSP): Fast Pruning Heuristics</h3>
          <p>
            Standard depth-first search explores $O(d^n)$ states. CSP Backtracking incorporates three fast filtering and ordering heuristics:
          </p>
          <div class="grid-3-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">1. MRV (Minimum Remaining Values)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Variable Selection ('Fail-First'):</em> Pick the variable with the fewest remaining legal domain values to prune failing branches earliest.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">2. Degree Heuristic</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Tie-Breaker:</em> If multiple variables have the same MRV count, pick the one involved in the largest number of constraints with other unassigned variables.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">3. LCV (Least Constraining Value)</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Value Selection ('Fail-Last'):</em> Once a variable is picked, choose the value that rules out the fewest choices for neighboring variables.
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-2",
      title: "Level 2: Supervised Classifiers & Evaluation (k-NN, Naive Bayes & Lift)",
      subtitle: "Distance Metrics, Laplace Smoothing & Decile 1 Cumulative Lift",
      badge: "Core Predictive Modeling",
      content: `
        <div class="lesson-card mb-4">
          <h3>k-Nearest Neighbors (k-NN) & Distance Normalization</h3>
          <p>
            k-NN is a non-parametric instance-based learner. Given test point $\\mathbf{x}^*$, it computes distance to all training instances:
          </p>
          $$d(\\mathbf{x}^*, \\mathbf{x}_i) = \\sqrt{\\sum_{j=1}^D (x^*_j - x_{i,j})^2}$$
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin:12px 0;">
            <strong style="color:#ef4444;"><i data-lucide="alert-triangle"></i> Mandatory Normalization Rule:</strong>
            Features must always be standardized via $z = (x - \\mu)/\\sigma$. If feature 1 is Salary ($0 - 200,000) and feature 2 is Experience in Years ($0 - 30$), the squared differences of Salary completely swamp Experience, rendering Experience mathematically irrelevant!
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Naive Bayes Classification & Laplace Smoothing</h3>
          <p>
            By Bayes' theorem and conditional independence of features given class $C_k$:
          </p>
          $$P(C_k \\mid \\mathbf{x}) = \\frac{P(C_k) \\prod_{j=1}^D P(x_j \\mid C_k)}{P(\\mathbf{x})}$$
          <p>
            If a feature value $x_j$ never appeared with class $C_k$ in the training data, $P(x_j \\mid C_k) = 0$, which zeros out the entire product! To prevent zero-probability collapse:
          </p>
          $$\\mathbf{P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}}$$
          <p style="font-size:0.85rem; color:var(--text-secondary);">
            Where $|V_j|$ is the total number of distinct possible values of attribute $X_j$. Adding $|V_j|$ to the denominator ensures that the probabilities over all possible outcomes continue to sum to exactly 1.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="margin:0;"><i data-lucide="layers"></i> Interactive Naive Bayes Laplace Studio</h3>
            <span class="badge-tech">Zero-Count Stabilizer</span>
          </div>
          <div id="nb-interactive-mount" style="background:var(--bg-secondary); border-radius:8px; padding:16px;">
            <div style="display:flex; gap:16px; flex-wrap:wrap; margin-bottom:12px;">
              <div>
                <label style="font-size:0.82rem; font-weight:600;">Observed Count: <span id="nb-obs-val">0</span></label><br>
                <input type="range" id="nb-obs-slider" min="0" max="20" value="0" style="width:140px;" oninput="document.getElementById('nb-obs-val').textContent=this.value; if(window.SprintDay1Visualizers?.updateNaiveBayes) window.SprintDay1Visualizers.updateNaiveBayes();">
              </div>
              <div>
                <label style="font-size:0.82rem; font-weight:600;">Class Total: <span id="nb-total-val">10</span></label><br>
                <input type="range" id="nb-total-slider" min="5" max="50" value="10" style="width:140px;" oninput="document.getElementById('nb-total-val').textContent=this.value; if(window.SprintDay1Visualizers?.updateNaiveBayes) window.SprintDay1Visualizers.updateNaiveBayes();">
              </div>
              <div>
                <label style="font-size:0.82rem; font-weight:600;">Domain Cardinality |V|: <span id="nb-v-val">4</span></label><br>
                <input type="range" id="nb-v-slider" min="2" max="10" value="4" style="width:140px;" oninput="document.getElementById('nb-v-val').textContent=this.value; if(window.SprintDay1Visualizers?.updateNaiveBayes) window.SprintDay1Visualizers.updateNaiveBayes();">
              </div>
            </div>
            <div id="nb-output-math" style="font-size:1.05rem; text-align:center; padding:10px; background:rgba(0,0,0,0.25); border-radius:6px;">
              $$P(x \\mid C) = \\frac{0 + 1}{10 + 4} = \\frac{1}{14} \\approx 0.0714 \\quad (\\text{Non-zero!})$$
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Model Evaluation: ROC-AUC & Decile 1 Cumulative Lift</h3>
          <p>
            In imbalanced domains (e.g. customer conversion base rate = 5%), accuracy is meaningless. We evaluate rank-ordering power via <strong>Cumulative Lift</strong>:
          </p>
          $$\\text{Cumulative Lift at Decile 1} = \\frac{\\text{Hit Rate in Top 10\\% Scored Population}}{\\text{Overall Population Base Rate}}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            If the overall base rate is 5% and the top 10% scored prospects contain 18% buyers, the Lift is $18\\% / 5\\% = \\mathbf{3.6}$. This means targeted marketing based on model deciles will capture 3.6x more buyers than random cold-calling.
          </p>
        </div>
      `
    },
    {
      id: "level-3",
      title: "Level 3: Probabilistic Reasoning & Bayesian Belief Networks",
      subtitle: "DAG Factorization, CPTs, d-Separation & The Explaining Away Trap",
      badge: "Inference Under Uncertainty",
      content: `
        <div class="lesson-card mb-4">
          <h3>Bayesian Belief Networks (BBNs): Exploiting Conditional Independence</h3>
          <p>
            A full joint distribution over $N$ binary variables requires $2^N - 1$ parameters. A Bayesian Network represents the joint distribution as a Directed Acyclic Graph (DAG), factoring it into local Conditional Probability Tables (CPTs):
          </p>
          $$P(X_1, X_2, \\dots, X_N) = \\prod_{i=1}^N P(X_i \\mid \\text{Parents}(X_i))$$
          <p>
            If each node has at most $k$ parents, parameter complexity drops from $O(2^N)$ to $O(N \\cdot 2^k)$.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>d-Separation & The 3 Classical Graphical Motifs</h3>
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
      title: "Level 4: Deep Geometric Boundaries & Dimensionality (SVM & PCA vs LDA)",
      subtitle: "Convex QP, Lagrangian Dual, KKT Conditions, RBF Kernels, Rayleigh Quotient & Target Leakage",
      badge: "Rigorous Continuous Geometry",
      content: `
        <div class="lesson-card mb-4">
          <h3>Support Vector Machines (SVM): Primal Soft-Margin Quadratic Program</h3>
          <p>
            SVM constructs an optimal separating hyperplane $\\mathbf{w}^T \\mathbf{x} + b = 0$ that maximizes the geometric margin $\\frac{2}{\\|\\mathbf{w}\\|}$, or equivalently minimizes $\\frac{1}{2}\\|\\mathbf{w}\\|^2$. In non-linearly separable data, slack variables $\\xi_i \\ge 0$ permit margin violations penalized by trade-off parameter $C$:
          </p>
          $$\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i \\quad \\text{subject to} \\quad y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\ge 1 - \\xi_i, \\quad \\xi_i \\ge 0$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">Physical Interpretation of Slack $\\xi_i$:</strong>
              <ul style="font-size:0.85rem; margin:6px 0 0 0; padding-left:18px;">
                <li>$\\xi_i = 0$: Point lies on or outside the safety margin corridor ($y_i f(\\mathbf{x}_i) \\ge 1$).</li>
                <li>$0 < \\xi_i < 1$: Point is correctly classified ($y_i f(\\mathbf{x}_i) > 0$), but penetrates inside the margin.</li>
                <li>$\\xi_i = 1$: Point lies directly on the decision boundary ($f(\\mathbf{x}_i) = 0$).</li>
                <li>$\\xi_i > 1$: Point lies on the wrong side of the hyperplane and is <strong>misclassified</strong>.</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">Bias-Variance Control via Penalty $C$:</strong>
              <ul style="font-size:0.85rem; margin:6px 0 0 0; padding-left:18px;">
                <li><strong>Large $C$ ($C \\to \\infty$):</strong> Hard margin. Heavily penalizes any margin violations. Produces narrow margin, low bias, high variance (overfitting risk).</li>
                <li><strong>Small $C$ ($C \\to 0$):</strong> Soft margin. Tolerates violations to maximize corridor width $\\frac{2}{\\|\\mathbf{w}\\|}$. High bias, low variance (underfitting risk, robust to noise).</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>The Lagrangian Dual Formulation & Karush-Kuhn-Tucker (KKT) Sparsity</h3>
          <p>
            Formulating the Lagrangian with Lagrange multipliers $\\alpha_i \\ge 0$ and $\\beta_i \\ge 0$:
          </p>
          $$\\mathcal{L}(\\mathbf{w}, b, \\boldsymbol{\\xi}, \\boldsymbol{\\alpha}, \\boldsymbol{\\beta}) = \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i - \\sum_{i=1}^N \\alpha_i \\left[ y_i(\\mathbf{w}^T \\mathbf{x}_i + b) - 1 + \\xi_i \\right] - \\sum_{i=1}^N \\beta_i \\xi_i$$
          <p>Setting derivatives with respect to primal variables to zero:</p>
          $$\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{w}} = 0 \\implies \\mathbf{w} = \\sum_{i=1}^N \\alpha_i y_i \\mathbf{x}_i, \\quad \\frac{\\partial \\mathcal{L}}{\\partial b} = 0 \\implies \\sum_{i=1}^N \\alpha_i y_i = 0, \\quad \\frac{\\partial \\mathcal{L}}{\\partial \\xi_i} = 0 \\implies C - \\alpha_i - \\beta_i = 0$$
          <p>
            Substituting back yields the <strong>Wolfe Dual Optimization Problem</strong>:
          </p>
          $$\\max_{\\boldsymbol{\\alpha}} \\sum_{i=1}^N \\alpha_i - \\frac{1}{2} \\sum_{i=1}^N \\sum_{j=1}^N \\alpha_i \\alpha_j y_i y_j \\mathbf{x}_i^T \\mathbf{x}_j \\quad \\text{subject to} \\quad 0 \\le \\alpha_i \\le C, \\quad \\sum_{i=1}^N \\alpha_i y_i = 0$$
          <div style="background:var(--bg-secondary); border-left:3px solid #10b981; padding:12px; border-radius:6px; margin:12px 0;">
            <strong style="color:#10b981;">The KKT Complementary Slackness Theorem (Extreme Sparsity):</strong>
            $$\\alpha_i \\left[ y_i(\\mathbf{w}^T \\mathbf{x}_i + b) - 1 + \\xi_i \\right] = 0 \\quad \\text{and} \\quad \\beta_i \\xi_i = (C - \\alpha_i)\\xi_i = 0$$
            <ul>
              <li><strong>Case 1 (Non-Support Vectors):</strong> If $y_i(\\mathbf{w}^T \\mathbf{x}_i + b) > 1$, then $\\xi_i = 0$, which forces $\\mathbf{\\alpha_i = 0}$. The sample has <em>zero influence</em> on the decision boundary!</li>
              <li><strong>Case 2 (Free Margin Support Vectors):</strong> If $0 < \\alpha_i < C$, then $\\xi_i = 0$ and $y_i(\\mathbf{w}^T \\mathbf{x}_i + b) = 1$. These points sit precisely on the margin and are used to solve for bias $b$.</li>
              <li><strong>Case 3 (Bounded Margin Violators):</strong> If $\\alpha_i = C$, then $\\xi_i > 0$. These points penetrate the margin or are misclassified.</li>
            </ul>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>The Kernel Trick: Non-Linear Mapping to Hilbert Spaces</h3>
          <p>
            Since the dual objective and decision function depend strictly on inner products $\\mathbf{x}_i^T \\mathbf{x}_j$, we can replace them with a Mercer kernel $K(\\mathbf{x}_i, \\mathbf{x}_j) = \\langle \\phi(\\mathbf{x}_i), \\phi(\\mathbf{x}_j) \\rangle$:
          </p>
          $$f(\\mathbf{x}) = \\text{sign}\\left( \\sum_{i \\in \\text{SVs}} \\alpha_i y_i K(\\mathbf{x}_i, \\mathbf{x}) + b \\right)$$
          <div class="grid-3-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>1. Linear Kernel</strong>
              $$K(\\mathbf{x}_i, \\mathbf{x}_j) = \\mathbf{x}_i^T \\mathbf{x}_j$$
              Fastest to compute. Ideal when feature dimension $D$ is huge relative to samples $N$ (e.g. text classification).
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>2. Polynomial Kernel</strong>
              $$K(\\mathbf{x}_i, \\mathbf{x}_j) = (\\mathbf{x}_i^T \\mathbf{x}_j + c)^d$$
              Computes all polynomial feature interactions up to degree $d$ without explicitly generating high-dimensional vectors.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border:1px solid #3b82f6;">
              <strong style="color:#60a5fa;">3. RBF Gaussian Kernel</strong>
              $$K(\\mathbf{x}_i, \\mathbf{x}_j) = \\exp\\left( -\\gamma \\|\\mathbf{x}_i - \\mathbf{x}_j\\|^2 \\right)$$
              Maps into infinite-dimensional Hilbert space. $\\gamma = \\frac{1}{2\\sigma^2}$.
            </div>
          </div>
          <div style="background:rgba(59,130,246,0.1); border-left:3px solid #3b82f6; padding:12px; border-radius:6px; margin-top:12px; font-size:0.85rem;">
            <strong>Tuning Gaussian Parameter $\\gamma$:</strong>
            <ul>
              <li><strong>High $\\gamma$ (tiny $\\sigma$):</strong> Narrow, peaked Gaussians around each training point. Boundary contorts into isolated circular islands around individual points $\\implies$ <strong>Severe Overfitting</strong>.</li>
              <li><strong>Low $\\gamma$ (large $\\sigma$):</strong> Broad, overlapping Gaussians. Boundary becomes nearly linear $\\implies$ <strong>High Bias / Underfitting</strong>.</li>
            </ul>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Unsupervised PCA vs Supervised Fisher LDA: Objective Derivations</h3>
          <p>
            Both algorithms seek linear projections $\\mathbf{y} = \\mathbf{w}^T \\mathbf{x}$, but optimize completely different objective functions:
          </p>
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <h4 style="margin:0 0 8px 0; color:#60a5fa;">PCA: Unsupervised Variance Maximization</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                Center data $\\tilde{X} = X - \\boldsymbol{\\mu}$. Sample covariance matrix:
                $$\\Sigma = \\frac{1}{N - 1} \\tilde{X}^T \\tilde{X}$$
                Objective: Maximize projected variance $\\mathbf{w}^T \\Sigma \\mathbf{w}$ subject to $\\|\\mathbf{w}\\|^2 = 1$.
                Lagrangian: $\\mathcal{L} = \\mathbf{w}^T \\Sigma \\mathbf{w} - \\lambda(\\mathbf{w}^T \\mathbf{w} - 1)$.
                Derivative: $\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{w}} = 0 \\implies \\mathbf{\\Sigma \\mathbf{w} = \\lambda \\mathbf{w}}$.
                The principal projection directions are the <strong>eigenvectors of the covariance matrix $\\Sigma$</strong>, with variance equal to eigenvalue $\\lambda_k$.
                Total variance explained: $\\frac{\\lambda_k}{\\sum_{j=1}^D \\lambda_j}$.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <h4 style="margin:0 0 8px 0; color:#34d399;">Fisher's LDA: Supervised Class Separation</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                Given $C$ classes, define Within-Class Scatter $S_W$ and Between-Class Scatter $S_B$:
                $$S_W = \\sum_{c=1}^C \\sum_{\\mathbf{x} \\in \\mathcal{C}_c} (\\mathbf{x} - \\boldsymbol{\\mu}_c)(\\mathbf{x} - \\boldsymbol{\\mu}_c)^T$$
                $$S_B = \\sum_{c=1}^C N_c (\\boldsymbol{\\mu}_c - \\boldsymbol{\\mu})(\\boldsymbol{\\mu}_c - \\boldsymbol{\\mu})^T$$
                Rayleigh Quotient Objective:
                $$J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}}$$
                Setting derivative to zero yields the <strong>Generalized Eigenvalue Problem</strong>:
                $$\\mathbf{S_W^{-1} S_B \\mathbf{w} = \\lambda \\mathbf{w}}$$
                Maximum number of non-zero discriminant components is strictly $\\min(C - 1, D)$.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #ef4444;">
          <h3 style="color:#f87171; margin-top:0;"><i data-lucide="shield-alert"></i> The 8-Mark PRS Q1e Target Leakage Exam Trap</h3>
          <p style="font-size:0.88rem; line-height:1.55;">
            In Table 3 of the Nov 2026 PRS Examination, an engineer applied PCA to a retail customer dataset. Careful inspection of the loading matrix revealed that the binary target variable <code>Revenue</code> had a loading of <strong>+0.221 in PC1</strong> and <strong>+0.534 in PC4</strong>.
          </p>
          <ul style="font-size:0.85rem; line-height:1.55;">
            <li><strong>Why this is fatal:</strong> PCA is strictly an unsupervised technique meant to compress predictors $\\mathbf{X}$. Incorporating target label $Y$ is catastrophic data leakage.</li>
            <li><strong>Production Deployment Failure:</strong> In production inference, a prospective buyer's <code>Revenue</code> status is unknown (that is what the model must predict!). The PCA projection cannot physically be computed at test time without fabricating the target answer.</li>
            <li><strong>Categorical Data Distortion:</strong> The table also fed nominal categorical variables <code>Browser</code> (1 to 13) and <code>OperatingSystem</code> (1 to 8) as raw continuous numbers, creating fabricated Euclidean distances ($Browser=4$ is not 'twice' $Browser=2$). Must apply One-Hot Encoding!</li>
          </ul>
        </div>
      `
    },
    {
      id: "level-5",
      title: "Level 5: Unsupervised Clustering & Latent Space (K-Means, GMM-EM & DBSCAN)",
      subtitle: "Lloyd's WCSS Convergence, Expectation-Maximization Responsibilities, Density Connectivity & Ward's Linkage",
      badge: "Latent Pattern Discovery",
      content: `
        <div class="lesson-card mb-4">
          <h3>K-Means: Lloyd's Algorithm & Monotonic Convergence Proof</h3>
          <p>
            K-Means partitions $N$ observations into $K$ disjoint clusters $C = \\{C_1, C_2, \\dots, C_K\\}$ to minimize the Within-Cluster Sum of Squares (WCSS / Inertia):
          </p>
          $$\\text{WCSS} = \\mathcal{J} = \\sum_{k=1}^K \\sum_{\\mathbf{x}_i \\in C_k} \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_k\\|^2$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Step 1: Assignment Step</strong>
              $$C_k^{(t)} = \\left\\{ \\mathbf{x}_i : \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_k^{(t)}\\|^2 \\le \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_j^{(t)}\\|^2 \\; \\forall j \\right\\}$$
              Assigns each point to its nearest centroid. Minimizes $\\mathcal{J}$ with respect to cluster assignments holding centroids $\\boldsymbol{\\mu}$ fixed.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Step 2: Update Step</strong>
              $$\\boldsymbol{\\mu}_k^{(t+1)} = \\frac{1}{|C_k^{(t)}|} \\sum_{\\mathbf{x}_i \\in C_k^{(t)}} \\mathbf{x}_i$$
              Recomputes centroid as the arithmetic mean. Setting $\\frac{\\partial \\mathcal{J}}{\\partial \\boldsymbol{\\mu}_k} = 0$ proves this minimizes $\\mathcal{J}$ holding assignments fixed.
            </div>
          </div>
          <p style="font-size:0.85rem; line-height:1.55; margin-top:12px;">
            <strong>Convergence Guarantee:</strong> At every iteration, both steps either strictly decrease $\\mathcal{J}$ or leave it unchanged. Since there are only a finite number ($K^N$) of possible partitions, Lloyd's algorithm <strong>must converge in a finite number of steps</strong> (though it may get trapped in a local minimum).
          </p>
          <div style="background:var(--bg-secondary); border-left:3px solid var(--accent-primary); padding:12px; border-radius:6px; margin-top:10px; font-size:0.85rem;">
            <strong>K-Means++ Initialization:</strong> Solves local minimum trapping by seeding initial centers probabilistically. First center chosen uniformly at random; subsequent centers chosen with probability proportional to squared distance from nearest existing center: $P(\\mathbf{x}) = \\frac{D(\\mathbf{x})^2}{\\sum D(\\mathbf{x}')^2}$. Guarantees $O(\\log K)$ competitive ratio to optimal clustering!
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Gaussian Mixture Models (GMM) & The Expectation-Maximization (EM) Algorithm</h3>
          <p>
            Unlike K-Means (which forces hard spherical cluster assignments), GMM is a generative probabilistic model representing data as a mixture of $K$ multivariate Gaussian distributions:
          </p>
          $$p(\\mathbf{x}) = \\sum_{k=1}^K \\pi_k \\mathcal{N}(\\mathbf{x} \\mid \\boldsymbol{\\mu}_k, \\boldsymbol{\\Sigma}_k), \\quad \\sum_{k=1}^K \\pi_k = 1$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #3b82f6;">
              <h4 style="margin:0 0 6px 0; color:#60a5fa;">E-Step: Posterior Responsibilities</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                Calculate the soft responsibility $\\gamma_{ik} = P(z_i = k \\mid \\mathbf{x}_i)$ that cluster $k$ generated point $\\mathbf{x}_i$:
                $$\\mathbf{\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_k, \\boldsymbol{\\Sigma}_k)}{\\sum_{j=1}^K \\pi_j \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_j, \\boldsymbol{\\Sigma}_j)}}$$
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #10b981;">
              <h4 style="margin:0 0 6px 0; color:#34d399;">M-Step: Parameter Updates</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                Re-estimate parameters using the weighted data points:
                $$N_k = \\sum_{i=1}^N \\gamma_{ik}, \\quad \\mathbf{\\pi_k = \\frac{N_k}{N}}$$
                $$\\mathbf{\\boldsymbol{\\mu}_k = \\frac{1}{N_k} \\sum_{i=1}^N \\gamma_{ik} \\mathbf{x}_i}$$
                $$\\mathbf{\\boldsymbol{\\Sigma}_k = \\frac{1}{N_k} \\sum_{i=1}^N \\gamma_{ik} (\\mathbf{x}_i - \\boldsymbol{\\mu}_k)(\\mathbf{x}_i - \\boldsymbol{\\mu}_k)^T}$$
              </p>
            </div>
          </div>
          <p style="font-size:0.85rem; line-height:1.55; margin-top:12px;">
            <strong>GMM vs K-Means:</strong> GMM generalizes K-Means. If covariance matrices are constrained to $\\boldsymbol{\\Sigma}_k = \\sigma^2 \\mathbf{I}$ with $\\sigma^2 \\to 0$, GMM EM equations reduce exactly to hard K-Means! GMM handles overlapping, elongated, ellipsoidal clusters of varying sizes.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>DBSCAN (Density-Based Spatial Clustering of Applications with Noise)</h3>
          <p>
            DBSCAN replaces geometric centroids with density connectivity, requiring parameters $\\epsilon$ (neighborhood radius) and $\\text{MinPts}$:
          </p>
          <div class="grid-3-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:#10b981;">1. Core Point</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                A point $p$ where $|N_\\epsilon(p)| \\ge \\text{MinPts}$ (has at least $\\text{MinPts}$ points within distance $\\epsilon$).
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:#60a5fa;">2. Border Point</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                $|N_\\epsilon(p)| < \\text{MinPts}$, but lies within radius $\\epsilon$ of a Core Point (density-reachable).
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border:1px solid #ef4444;">
              <strong style="color:#f87171;">3. Noise / Outlier</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                Neither a Core point nor reachable from any Core point. Cleanly isolated into label $-1$.
              </p>
            </div>
          </div>
          <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; margin-top:12px; font-size:0.85rem;">
            <strong>Advantages over K-Means:</strong>
            <ol style="margin:4px 0 0 0; padding-left:18px;">
              <li>Does not require pre-specifying $K$ (number of clusters).</li>
              <li>Can discover arbitrary non-convex geometries (concentric rings, intertwined spirals, crescents).</li>
              <li>Robust to noise; does not force isolated outliers into valid clusters.</li>
            </ol>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Agglomerative Hierarchical Clustering: Linkage Criteria</h3>
          <p>
            Bottom-up hierarchical clustering starts with each sample in its own cluster and iteratively merges the closest pair of clusters until only one remains:
          </p>
          <table class="styled-table" style="font-size:0.85rem; width:100%;">
            <thead><tr><th>Linkage Criterion</th><th>Mathematical Definition</th><th>Behavioral Characteristic</th></tr></thead>
            <tbody>
              <tr><td><strong>Single Linkage</strong></td><td>$d(A, B) = \\min_{\\mathbf{a} \\in A, \\mathbf{b} \\in B} d(\\mathbf{a}, \\mathbf{b})$</td><td>Can follow arbitrary shapes, but prone to <strong>chaining</strong> (thin bridges merging distinct clusters).</td></tr>
              <tr><td><strong>Complete Linkage</strong></td><td>$d(A, B) = \\max_{\\mathbf{a} \\in A, \\mathbf{b} \\in B} d(\\mathbf{a}, \\mathbf{b})$</td><td>Resists chaining; enforces compact, tightly-bounded spherical clusters of equal diameter.</td></tr>
              <tr><td><strong>Average Linkage</strong></td><td>$d(A, B) = \\frac{1}{|A||B|} \\sum_{\\mathbf{a} \\in A} \\sum_{\\mathbf{b} \\in B} d(\\mathbf{a}, \\mathbf{b})$</td><td>Balanced compromise; less sensitive to outliers than single or complete.</td></tr>
              <tr><td><strong>Ward's Minimum Variance</strong></td><td>$\\Delta \\text{ESS} = \\frac{|A||B|}{|A| + |B|} \\|\\boldsymbol{\\mu}_A - \\boldsymbol{\\mu}_B\\|^2$</td><td>Merges clusters that minimize the increase in total within-cluster variance. Most similar to K-Means objective.</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "level-6",
      title: "Level 6: Python Code Labs & Complete Mathematical Workout",
      subtitle: "Verified Implementations & Step-by-Step Hand-Calculations",
      badge: "Hands-on Code & Proofs",
      content: `
        <div class="lesson-card mb-4">
          <h3>Hands-on Python Implementation: A*, Naive Bayes, SVM & PCA</h3>
          <div class="code-tab-container">
            <div class="code-tab-nav" style="display:flex; gap:8px; border-bottom:1px solid var(--border-color); padding-bottom:8px; margin-bottom:12px;">
              <button class="btn btn-sm btn-primary" onclick="SprintDay1Visualizers.showCodeTab('py-nb')">Naive Bayes Laplace</button>
              <button class="btn btn-sm btn-outline" onclick="SprintDay1Visualizers.showCodeTab('py-astar')">A* Search</button>
              <button class="btn btn-sm btn-outline" onclick="SprintDay1Visualizers.showCodeTab('py-pca')">PCA & SVM</button>
            </div>
            <div id="code-content-area" style="background:#1e1e1e; border-radius:8px; padding:16px; font-family:'JetBrains Mono', monospace; font-size:0.85rem; color:#d4d4d4; overflow-x:auto;">
<pre><code>import numpy as np
from sklearn.naive_bayes import CategoricalNB
from sklearn.preprocessing import StandardScaler

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
          <h3 style="color:#10b981; margin-top:0;"><i data-lucide="award"></i> Level Complete: You are ready for the Quizzes & Exam Questions!</h3>
          <p style="font-size:0.9rem; margin-bottom:14px;">
            Test your conceptual clarity with the 10 Slide Mastery Quizzes, tackle the 6 multi-part NUS ISS post-quiz exam questions, and use the Doubt Resolver if you need help on any step.
          </p>
          <button class="btn btn-primary" onclick="app.loadLevel('quizzes')">
            <i data-lucide="play"></i> Proceed to Day 1 Quizzes & Exam Questions
          </button>
        </div>
      `
    }
  ]
};
