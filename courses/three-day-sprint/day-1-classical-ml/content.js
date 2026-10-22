// Day 1 Content: Classical ML + Probability + Search
// Synthesizes Course Days 1, 4, and 5, plus Bayesian Reasoning from Day 3

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
              Welcome to <strong>Day 1 of your Accelerated 3-Day Fast-Track Sprint</strong>. In the standard 10-day syllabus, foundational algorithms are scattered across multiple days. By grouping them by <strong>learning dependency</strong>, we construct an ironclad mental hierarchy:
            </p>
            <div class="quote-box">
              <em>"Deterministic Search ($A^*$, CSP) navigates known state graphs; Supervised Classifiers (k-NN, Naive Bayes, SVM) learn boundaries from labeled empirical points; Dimensionality Reduction (PCA, LDA) extracts compact coordinate bases; and Probabilistic Networks (BBNs) handle uncertainty and causal inference."</em>
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
              From non-parametric instance memory (k-NN) and conditional independence (Naive Bayes Laplace) to maximal-margin hyperplanes (Soft-Margin SVM, RBF kernels) and Fisher's LDA discriminant ratio.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="git-branch"></i> Pillar 3: Latent Factors & Bayes</h4>
            <p style="font-size: 0.88rem; line-height: 1.55;">
              Maximize unsupervised variance with PCA (avoiding test-time target leakage), partition space with K-Means & DBSCAN, mine Apriori associations (Support, Confidence, Lift), and factorize distributions via Bayesian DAGs & d-separation.
            </p>
          </div>
        </div>

        <div class="lesson-card mb-4" style="background: var(--bg-secondary); border-left: 4px solid var(--accent-primary);">
          <h4 style="margin-top:0;"><i data-lucide="clock"></i> Suggested 5–6 Hour Study Strategy for Day 1</h4>
          <ol style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 0;">
            <li><strong>Hour 1 (Search & CSP):</strong> Work through Level 1, interact with the $A^*$ pathfinder and N-Queens CSP solver.</li>
            <li><strong>Hour 2 (Supervised Classifiers):</strong> Master k-NN distance normalization and Naive Bayes Laplace hand-calculations in Level 2.</li>
            <li><strong>Hour 3 (Bayesian Networks):</strong> Master d-separation, the Collider trap, and CPT factorizations in Level 3.</li>
            <li><strong>Hour 4 (Geometry & PCA):</strong> Solve SVM margin formulations and examine the Nov 2026 PRS Q1e PCA target leakage trap in Level 4.</li>
            <li><strong>Hour 5 (Clustering & Apriori):</strong> Compare K-Means vs DBSCAN and compute Support/Confidence/Lift in Level 5.</li>
            <li><strong>Hour 6 (Revision & Exam Crucible):</strong> Complete the 10 Slide Mastery Quizzes, tackle the 5 post-quiz structured exam questions, and resolve any doubts in the Q&A Assistant!</li>
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
                A heuristic is <strong>admissible</strong> if it is optimistic and never overestimates:
                $$0 \\le h(n) \\le h^*(n), \\quad h(G) = 0$$
                This guarantees optimal paths in <em>Tree Search</em>.
              </p>
            </div>
            <div style="background:var(--bg-secondary); border-radius:8px; padding:14px; border-left:3px solid #10b981;">
              <h4 style="margin:0 0 6px 0; color:#34d399;">Consistency / Monotonicity (Graph Search Optimality)</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                A heuristic is <strong>consistent</strong> if it obeys the triangle inequality:
                $$h(n) \\le c(n, a, n') + h(n')$$
                This guarantees $f(n') \\ge f(n)$. Nodes expanded for the first time are already optimal; <strong>no closed nodes ever need to be reopened</strong>.
              </p>
            </div>
          </div>
        </div>

        <!-- Interactive A* Pathfinder Sandbox -->
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

        <!-- Interactive Naive Bayes Studio -->
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
                $B$ is a common effect. Path is <strong>BLOCKED</strong> when $B$ is unobserved ($A \\perp C$). Conditioning on $B$ <strong>ACTIVATES</strong> the path ('Explaining Away')!
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-4",
      title: "Level 4: Geometric Boundaries & Dimensionality (SVM & PCA vs LDA)",
      subtitle: "Support Vector Margins, RBF Kernels, PCA Covariance & Test-Time Target Leakage",
      badge: "Continuous Geometric Intelligence",
      content: `
        <div class="lesson-card mb-4">
          <h3>Support Vector Machines (SVM): Maximal Margins & Soft Slacks</h3>
          <p>
            SVM constructs an optimal separating hyperplane $\\mathbf{w}^T \\mathbf{x} + b = 0$ that maximizes the geometric margin $2/\\|\\mathbf{w}\\|$.
          </p>
          $$\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i \\quad \\text{s.t.} \\quad y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\ge 1 - \\xi_i, \\quad \\xi_i \\ge 0$$
          <ul>
            <li>$\\xi_i = 0$: Point is on or outside the safety margin.</li>
            <li>$0 < \\xi_i < 1$: Point is correctly classified but penetrates the margin.</li>
            <li>$\\xi_i > 1$: Point is <strong>misclassified</strong>.</li>
            <li><strong>Parameter $C$:</strong> Controls the trade-off. Large $C$ creates a hard margin with zero training errors (high variance, risk of overfitting). Small $C$ creates a wide, forgiving margin (high bias).</li>
          </ul>
        </div>

        <div class="lesson-card mb-4">
          <h3>Unsupervised PCA vs Supervised Fisher LDA</h3>
          <table class="styled-table" style="font-size:0.88rem; width:100%;">
            <thead><tr><th>Dimension Reduction Aspect</th><th>PCA (Principal Component Analysis)</th><th>LDA (Linear Discriminant Analysis)</th></tr></thead>
            <tbody>
              <tr><td><strong>Supervision</strong></td><td>Strictly <strong>Unsupervised</strong> (ignores class labels)</td><td>Strictly <strong>Supervised</strong> (uses class labels $y$)</td></tr>
              <tr><td><strong>Mathematical Objective</strong></td><td>Find orthogonal axes that maximize total feature variance $\\mathbf{w}^T \\Sigma \\mathbf{w}$</td><td>Maximize ratio of between-class scatter to within-class scatter: $J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}}$</td></tr>
              <tr><td><strong>Maximum Components</strong></td><td>Up to feature dimension $D$</td><td>At most $C - 1$ components ($C = \\text{number of classes}$)</td></tr>
              <tr><td><strong>Common Exam Trap (PRS Q1e)</strong></td><td>Target column leaked into PCA input matrix</td><td>Fails when within-class scatter matrix $S_W$ is singular ($N < D$)</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "level-5",
      title: "Level 5: Unsupervised Clustering & Association (K-Means, DBSCAN & Apriori)",
      subtitle: "Centroid Spheres, Density Connectivity, Support/Confidence/Lift & SVD",
      badge: "Latent Pattern Discovery",
      content: `
        <div class="lesson-card mb-4">
          <h3>K-Means vs Density-Based DBSCAN</h3>
          <p>
            <strong>K-Means</strong> minimizes Within-Cluster Sum of Squares (WCSS):
          </p>
          $$\\text{WCSS} = \\sum_{k=1}^K \\sum_{\\mathbf{x}_i \\in C_k} \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_k\\|^2$$
          <p style="font-size:0.88rem; line-height:1.55;">
            <strong>Limitation:</strong> K-Means inherently assumes isotropic (spherical) clusters with equal variance. It cuts space with linear Voronoi partitions and completely fails on non-convex moon shapes or concentric rings.<br>
            <strong>DBSCAN:</strong> Replaces centroids with density connectivity. Points with $\\ge \\text{MinPts}$ neighbors within radius $\\epsilon$ form core points, discovering arbitrary topologies while cleanly isolating noise points as outliers.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Market Basket Analysis: Support, Confidence & Lift</h3>
          <p>
            Association rule mining discovers co-occurrence relationships $X \\to Y$ across transactional databases:
          </p>
          <div class="grid-3-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">Support:</strong>
              $$\\text{Supp}(X \\to Y) = P(X \\cap Y) = \\frac{\\text{count}(X \\cup Y)}{N}$$
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">Confidence:</strong>
              $$\\text{Conf}(X \\to Y) = P(Y \\mid X) = \\frac{P(X \\cap Y)}{P(X)}$$
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:var(--accent-primary);">Lift:</strong>
              $$\\text{Lift}(X \\to Y) = \\frac{P(X \\cap Y)}{P(X)P(Y)} = \\frac{\\text{Conf}(X \\to Y)}{P(Y)}$$
            </div>
          </div>
          <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; margin-top:12px; font-size:0.85rem;">
            <strong>Interpretation of Lift:</strong>
            <ul>
              <li>$\\text{Lift} > 1$: Positive association ($X$ increases likelihood of $Y$).</li>
              <li>$\\text{Lift} = 1$: Independent ($X$ and $Y$ occur purely by random chance).</li>
              <li>$\\text{Lift} < 1$: Negative substitution ($X$ depresses likelihood of $Y$).</li>
            </ul>
          </div>
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
            Test your conceptual clarity with the 10 Slide Mastery Quizzes, tackle the multi-part NUS ISS post-quiz exam questions, and use the Doubt Resolver if you need help on any step.
          </p>
          <button class="btn btn-primary" onclick="app.loadLevel('quizzes')">
            <i data-lucide="play"></i> Proceed to Day 1 Quizzes & Exam Questions
          </button>
        </div>
      `
    }
  ]
};
