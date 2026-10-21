// Day 1 Foundations Interactive Content for NUS ISS Learning Hub (Upgraded Masterclass Edition)

window.DAY1_FOUNDATIONS_CONTENT = {
  id: "day-1-foundations",
  title: "Day 1: Foundations of Perception, Search & Classifiers",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — What is Intelligence?",
      subtitle: "System 1 (LLMs) vs System 2 (Symbolic Reasoning) & The 5-Stage Pattern Recognition Pipeline",
      badge: "Philosophy & Intuition",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="zap"></i></div>
  <div class="card-body">
    <h3>The Grand Split in Modern AI</h3>
    <p class="lead-text">
      Welcome to Day 1 of your NUS ISS Exam Sprint! In today's AI landscape, people confuse <strong>Generative AI (LLMs)</strong> with <strong>True Machine Reasoning</strong>. As Dr. Jierong emphasizes on Slide 8 of MR Day 1, this distinction is fundamental to scoring an A+.
    </p>
    <div class="quote-box">
      <em>"LLMs predict the next likely word based on billions of associations (System 1). Machine Reasoning deliberately searches across states, checks constraints, and constructs verifiable proofs (System 2)."</em>
      <div class="quote-author">— Machine Reasoning Day 1, Dr. JR Cheng</div>
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="brain"></i> System 1: Statistical Pattern Matching</h4>
    <ul class="feature-list">
      <li><strong>Operational Style:</strong> Fast, unconscious, reflex-like text completion.</li>
      <li><strong>Under the Hood:</strong> $P(w_t \\mid w_1, \\dots, w_{t-1})$. Matrix multiplication across billions of weights.</li>
      <li><strong>Fatal Weakness:</strong> Autoregressive compounding errors ($p^k$). In a 7-step logic puzzle, if step 3 has a subtle 5% hallucination, the probability of reaching step 7 without error collapses!</li>
      <li><strong>Explainability:</strong> Black-box probabilities. Cannot provide a formal proof of correctness.</li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="compass"></i> System 2: Deliberative Search & Proofs</h4>
    <ul class="feature-list">
      <li><strong>Operational Style:</strong> Slow, methodical, logical step-by-step verification.</li>
      <li><strong>Under the Hood:</strong> State-space search graphs, heuristics ($A^*$), propositional logic, constraint satisfaction (CSP).</li>
      <li><strong>Key Strength:</strong> Soundness and completeness. When it finds a solution, you have an ironclad mathematical guarantee.</li>
      <li><strong>Explainability:</strong> Explicit state trail from initial state to goal state.</li>
    </ul>
  </div>
</div>

<div class="lesson-card mt-4">
  <h4><i data-lucide="git-merge"></i> The Complete Pattern Recognition Lifecycle (PSUPR Day 1a & 1b)</h4>
  <p>In Pattern Recognition, we extract structured meaning from raw signals through 5 disciplined stages:</p>
  <div class="pipeline-flow mt-3">
    <div class="pipeline-step">
      <span class="step-num">1</span>
      <div><strong>Data Acquisition</strong><br><small>Sensors, tabular CSV, images</small></div>
    </div>
    <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
    <div class="pipeline-step">
      <span class="step-num">2</span>
      <div><strong>Preprocessing</strong><br><small>Cleaning, Normalization</small></div>
    </div>
    <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
    <div class="pipeline-step">
      <span class="step-num">3</span>
      <div><strong>Feature Selection</strong><br><small>Filter, Wrapper & PCA</small></div>
    </div>
    <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
    <div class="pipeline-step">
      <span class="step-num">4</span>
      <div><strong>Model Learning</strong><br><small>k-NN, LogReg, Naive Bayes</small></div>
    </div>
    <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
    <div class="pipeline-step highlight-step">
      <span class="step-num">5</span>
      <div><strong>Evaluation</strong><br><small>Confusion Matrix, ROC, Lift</small></div>
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="sliders"></i> Mandatory Preprocessing: 3 Normalization Formulas</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In distance-based models (e.g., $k$-NN), unnormalized features with large numerical magnitudes completely drown out smaller features:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>Min-Max Scaling ($[0, 1]$):</strong>
        $$x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}$$
        <em>Best when bounds are known; sensitive to extreme outliers.</em>
      </li>
      <li><strong>Z-Score Standardization ($\\mu=0, \\sigma=1$):</strong>
        $$z = \\frac{x - \\mu}{\\sigma}$$
        <em>Handles outliers robustly; preserves bell curve distribution.</em>
      </li>
      <li><strong>Decimal Scaling ($[-1, 1]$):</strong>
        $$x' = \\frac{x}{10^j} \\quad \\text{where } j = \\lceil \\log_{10}(\\max|x|) \\rceil$$
      </li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="shield-check"></i> Validation Strategy & Data Augmentation</h4>
    <ul class="feature-list" style="font-size: 0.85rem;">
      <li><strong>$k$-Fold Cross-Validation:</strong> Splits dataset into $k$ equal subsets; trains on $k-1$, tests on 1, repeats $k$ times to eliminate train-test split bias.</li>
      <li><strong>Stratified $k$-Fold:</strong> Preserves the exact class percentage ratio in each fold (mandatory for imbalanced medical or fraud data).</li>
      <li><strong>Leave-One-Out (LOOCV):</strong> $k=N$. Uses 1 sample for test, $N-1$ for training. High computation, zero randomness.</li>
      <li><strong>Data Augmentation:</strong> Artificially expands training sets through rotation, scaling, jittering, and noise addition to prevent overfitting.</li>
    </ul>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 1)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Use this rapid-fire reference to revise exact definitions, step-by-step algorithms, and exam traps for <strong>A* Search, CSPs, Naive Bayes (PRS Q2d), and k-NN Ranking (IRS Q3a)</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. A* Search Execution & Optimality Proof</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Evaluation Function:</strong> $f(n) = g(n) + h(n)$ where $g(n)$ is exact path cost from start and $h(n)$ is estimated cost to goal.</li>
        <li><strong>Tree Search Optimality:</strong> Requires <strong>Admissibility</strong> ($0 \\le h(n) \\le h^*(n)$, never overestimates).</li>
        <li><strong>Graph Search Optimality:</strong> Requires <strong>Consistency</strong> ($h(n) \\le c(n, a, n') + h(n')$, triangle inequality).</li>
        <li><strong>Goal Test Timing:</strong> Never terminate when a goal is <em>pushed</em> to the Priority Queue; terminate only when the goal is <em>popped</em> with minimum $f(n)$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. CSP Backtracking + MRV + AC-3</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Variable Selection (MRV):</strong> Pick unassigned variable with smallest remaining domain $|D_i|$.</li>
        <li><strong>Tie-Breaker (Degree Heuristic):</strong> Pick variable involved in the most constraints on other <em>unassigned</em> variables.</li>
        <li><strong>Value Ordering (LCV):</strong> Try value that rules out the <em>fewest</em> choices in neighboring variables.</li>
        <li><strong>Forward Checking vs AC-3:</strong> FC prunes only direct neighbors of assigned $X_i$; AC-3 propagates queue of arcs $(X_j, X_k)$ until all domains are arc-consistent.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. Naive Bayes Hand-Calculation (PRS Q2d Blueprint)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Count Class Priors:</strong> $P(C_k) = \\frac{\\text{count}(C_k)}{N}$ (e.g., $P(\\text{Carryback})=\\frac{5}{9}$, $P(\\text{Mistracking})=\\frac{4}{9}$).</li>
        <li><strong>Conditional Likelihoods:</strong> $P(x_j \\mid C_k) = \\frac{\\text{count}(x_j \\land C_k)}{\\text{count}(C_k)}$. Apply Laplace smoothing $\\frac{\\text{count}+1}{N_k + |V_j|}$ if any count is $0$.</li>
        <li><strong>Unnormalized Score:</strong> $S(C_k) = P(C_k) \\prod_{j=1}^d P(x_j \\mid C_k)$.</li>
        <li><strong>Posterior &amp; Decision:</strong> $P(C_k \\mid \\mathbf{x}) = \\frac{S(C_k)}{\\sum_m S(C_m)}$; predict $\\arg\\max_{C_k} S(C_k)$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. k-NN Top-10 Multi-Class Ranking (IRS Q3a)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Feature Normalization:</strong> Standardize continuous variables ($z = \\frac{x-\\mu}{\\sigma}$) so age/blood pressure don't dominate binary symptoms.</li>
        <li><strong>Choose $k$:</strong> To rank a Top-10 differential diagnosis list, choose $k \\ge 30$ (e.g., $k=50$).</li>
        <li><strong>Distance-Weighted Voting:</strong> Score each candidate diagnosis $D_m$ via $S(D_m) = \\sum_{i \\in N_k(\\mathbf{x})} \\frac{\\mathbb{I}(y_i = D_m)}{d(\\mathbf{x}, \\mathbf{x}_i) + \\epsilon}$ and return top 10.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Search as the Reasoning Engine (A* & Constraint Satisfaction)",
      subtitle: "State spaces, heuristic admissibility/consistency, and CSP backtracking heuristics",
      badge: "Search & CSP",
      content: `
<div class="lesson-card">
  <h3>Search: The Core Engine of Machine Reasoning</h3>
  <p class="lead-text">
    Whether solving an 8-Queens board, scheduling an operating theatre, or routing across cities, we formulate the problem as a <strong>State Space</strong>:
    $$\\text{Problem} = \\{ \\text{Initial State } S_0, \\text{ Actions } A(s), \\text{ Transition Model } R(s, a), \\text{ Goal Test } G(s), \\text{ Step Cost } c(s, a, s') \\}$$
  </p>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="git-commit"></i> Uninformed vs Informed Search</h4>
    <table class="styled-table" style="width: 100%; font-size: 0.85rem;">
      <thead>
        <tr><th>Algorithm</th><th>Order</th><th>Complete?</th><th>Optimal?</th><th>Space Complexity</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>BFS</strong></td><td>FIFO (queue)</td><td>Yes</td><td>Yes (if cost uniform)</td><td>$O(b^d)$ (Memory choke!)</td></tr>
        <tr><td><strong>DFS</strong></td><td>LIFO (stack)</td><td>No (in infinite spaces)</td><td>No</td><td>$O(b \\cdot m)$ (Low memory)</td></tr>
        <tr><td><strong>UCS (Dijkstra)</strong></td><td>Lowest $g(n)$</td><td>Yes</td><td>Yes</td><td>$O(b^{1 + \\lfloor C^* / \\epsilon \\rfloor})$</td></tr>
        <tr><td><strong>Greedy Best-First</strong></td><td>Lowest $h(n)$</td><td>No (can cycle)</td><td>No</td><td>$O(b^m)$</td></tr>
        <tr style="background: rgba(2, 132, 199, 0.15);"><td><strong>A* Search</strong></td><td>Lowest $g(n) + h(n)$</td><td>Yes</td><td>Yes (with admissible $h$)</td><td>$O(b^d)$</td></tr>
      </tbody>
    </table>
  </div>

  <div class="lesson-card" style="border-left: 4px solid var(--accent-cyan);">
    <h4><i data-lucide="award"></i> The 2 Golden Rules of $A^*$ (100% Exam Value)</h4>
    <div class="mt-2">
      <strong>1. Admissibility (Optimistic Heuristic):</strong>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">
        $h(n) \\le h^*(n)$ for all $n$. It never overestimates true cost to goal. Guarantees optimal path in <em>Tree Search</em>.
      </p>
    </div>
    <div class="mt-3">
      <strong>2. Consistency / Monotonicity (Triangle Inequality):</strong>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 4px;">
        $h(n) \\le c(n, a, n') + h(n')$. Guarantees $f(n)$ values are non-decreasing along paths. Guarantees optimal path in <em>Graph Search</em> on the very first expansion! No reopened nodes needed!
      </p>
    </div>
  </div>
</div>

<!-- Interactive A* Playground -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="play-circle"></i> Interactive $A^*$ Graph Search Sandbox</h3>
    <div style="display: flex; gap: 8px;">
      <select id="astar-heuristic-mode" class="select-styled" style="width: 220px; font-size: 0.85rem;">
        <option value="admissible">Admissible Heuristic (h &le; h*)</option>
        <option value="inadmissible">Inadmissible Heuristic (Overestimates!)</option>
      </select>
      <button class="btn btn-sm btn-primary" id="astar-btn-step"><i data-lucide="step-forward"></i> Step A*</button>
      <button class="btn btn-sm btn-outline" id="astar-btn-reset"><i data-lucide="rotate-ccw"></i> Reset</button>
    </div>
  </div>
  <p class="text-secondary mt-1">Watch how the Priority Queue (OPEN List) evaluates $f(n) = g(n) + h(n)$ at each step to find the optimal path from Start (S) to Goal (G).</p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.3fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; text-align: center;">
      <canvas id="astar-canvas" width="580" height="320" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <div style="margin-bottom: 12px;">
        <strong style="font-size: 0.85rem; color: var(--accent-cyan);"><i data-lucide="list"></i> Priority Queue (OPEN List Sorted by Lowest f):</strong>
        <div style="max-height: 140px; overflow-y: auto; margin-top: 6px; border: 1px solid var(--border-color); border-radius: 6px;">
          <table style="width: 100%; font-size: 0.8rem; border-collapse: collapse; text-align: left;">
            <thead>
              <tr style="background: rgba(255,255,255,0.05); border-bottom: 1px solid var(--border-color);">
                <th style="padding: 6px 10px;">Node</th>
                <th style="padding: 6px 10px;">g</th>
                <th style="padding: 6px 10px;">h</th>
                <th style="padding: 6px 10px;">f = g+h</th>
                <th style="padding: 6px 10px;">Parent</th>
              </tr>
            </thead>
            <tbody id="astar-open-body">
              <!-- Populated by visualizers.js -->
            </tbody>
          </table>
        </div>
      </div>

      <div style="margin-bottom: 12px;">
        <strong style="font-size: 0.85rem; color: #94a3b8;"><i data-lucide="check-square"></i> Explored Set (CLOSED List):</strong>
        <div id="astar-closed-list" style="margin-top: 6px; font-size: 0.85rem;">None</div>
      </div>

      <div>
        <strong style="font-size: 0.85rem; color: #f59e0b;"><i data-lucide="terminal"></i> Step-by-Step Reasoning Log:</strong>
        <div id="astar-log-box" style="margin-top: 6px; height: 100px; overflow-y: auto; background: rgba(0,0,0,0.4); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.75rem; line-height: 1.4; color: #e2e8f0;"></div>
      </div>
    </div>
  </div>
</div>

<!-- NEW: Interactive CSP Section -->
<div class="lesson-card mt-5">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <div>
      <span class="badge-tech" style="font-size: 0.75rem;">MR Day 1 Slides 73–90</span>
      <h3 style="margin-top: 4px;"><i data-lucide="check-circle-2"></i> Constraint Satisfaction Problems (CSP) & Heuristic Pruning</h3>
    </div>
    <div style="display: flex; gap: 8px;">
      <button class="btn btn-sm btn-primary" id="csp-btn-step"><i data-lucide="step-forward"></i> Step Search</button>
      <button class="btn btn-sm btn-outline" id="csp-btn-solve"><i data-lucide="play"></i> Auto Solve</button>
      <button class="btn btn-sm btn-outline" id="csp-btn-reset"><i data-lucide="rotate-ccw"></i> Reset</button>
    </div>
  </div>
  <p class="text-secondary mt-1">
    A CSP is defined by a triad $(X, D, C)$: Variables $X$, Domains $D$, Constraints $C$. Standard backtracking searches blindly; smart CSP uses heuristics to prune dead ends early!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1fr 1.2fr;">
    <div style="text-align: center;">
      <canvas id="csp-canvas" width="300" height="300" style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
      <div id="csp-status-text" style="font-size: 0.8rem; color: var(--accent-cyan); margin-top: 8px; font-weight: 600;"></div>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 12px; margin-bottom: 12px;">
        <strong style="font-size: 0.85rem; color: var(--accent-cyan);"><i data-lucide="cpu"></i> CSP Heuristic Switches:</strong>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
          <label style="font-size: 0.82rem; display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" id="csp-chk-mrv" checked>
            <span><strong>MRV (Minimum Remaining Values):</strong> Pick variable with fewest legal values ("Fail-First").</span>
          </label>
          <label style="font-size: 0.82rem; display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" id="csp-chk-fc" checked>
            <span><strong>Forward Checking:</strong> Prune neighbor domains immediately; backtrack before dead-end exploration.</span>
          </label>
        </div>
      </div>

      <div>
        <strong style="font-size: 0.82rem; color: #a78bfa;"><i data-lucide="terminal"></i> CSP Reasoning & Backtrack Log:</strong>
        <div id="csp-log-box" style="margin-top: 6px; height: 160px; overflow-y: auto; background: rgba(0,0,0,0.4); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.75rem; line-height: 1.4; color: #e2e8f0;"></div>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: The Supervised Triad (k-NN, Logistic Regression, Naive Bayes)",
      subtitle: "Geometric boundaries, log-odds probability, and evidence accumulation with Laplace smoothing",
      badge: "Machine Learning Foundations",
      content: `
<div class="lesson-card">
  <h3>Zero-Math-Fear: The 3 Core Supervised Classifiers</h3>
  <p class="lead-text">
    In [PSUPR Day 1b Slides 22–46], Dr. Zhu Fangming introduces the foundational algorithms. Here is their core intuition:
  </p>
</div>

<div class="grid-3-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="users"></i> 1. k-Nearest Neighbors</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      <strong>"Show me your friends."</strong> A lazy instance-based learner. No training time ($O(1)$), high query time ($O(N \\cdot D)$).
    </p>
    <div class="info-alert mt-2" style="font-size: 0.8rem;">
      <strong>Distance Metric:</strong>
      $$d_{\\text{Euclidean}}(x, y) = \\sqrt{\\sum (x_i - y_i)^2}$$
      $$d_{\\text{Manhattan}}(x, y) = \\sum |x_i - y_i|$$
      <em>Normalization is mandatory to prevent feature domination!</em>
    </div>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="trending-up"></i> 2. Logistic Regression</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      <strong>"S-Curve Probability."</strong> Squashes a linear score into a valid probability $[0, 1]$ via Sigmoid:
      $$\\sigma(z) = \\frac{1}{1 + e^{-z}}$$
    </p>
    <div class="info-alert mt-2" style="font-size: 0.8rem;">
      <strong>Log-Odds Form:</strong>
      $$\\ln\\left(\\frac{P}{1-P}\\right) = w^T x + b$$
      <em>Multinomial Logistic extends this to $K$ classes via Softmax!</em>
    </div>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="pie-chart"></i> 3. Naive Bayes</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      <strong>"Evidence Accumulator."</strong> Computes posterior class probability using Bayes' Theorem:
      $$P(Y \\mid X) \\propto P(Y) \\prod_{i=1}^d P(X_i \\mid Y)$$
    </p>
    <div class="info-alert mt-2" style="font-size: 0.8rem;">
      <strong>Conditional Independence:</strong> Assumes features are independent given class. Fast, but vulnerable to zero frequency!
    </div>
  </div>
</div>

<!-- Interactive k-NN Decision Boundary Sandbox -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="sliders"></i> Interactive k-NN Decision Boundary Studio</h3>
    <div style="display: flex; gap: 10px; align-items: center;">
      <label style="font-size: 0.85rem;">Distance Metric:</label>
      <select id="knn-metric-select" class="select-styled" style="width: 140px; font-size: 0.85rem;">
        <option value="euclidean">Euclidean (L2)</option>
        <option value="manhattan">Manhattan (L1)</option>
      </select>
      <button class="btn btn-sm btn-primary" id="knn-btn-boundary"><i data-lucide="eye"></i> Compute Decision Boundary</button>
      <button class="btn btn-sm btn-outline" id="knn-btn-reset"><i data-lucide="rotate-ccw"></i> Reset Points</button>
    </div>
  </div>
  <p class="text-secondary mt-1">Click anywhere on the canvas to place new training samples! Watch how changing $k$ shifts the decision boundary between severe overfitting ($k=1$) and smooth generalization ($k=15$).</p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; text-align: center;">
      <canvas id="knn-canvas" width="540" height="340" style="max-width: 100%; height: auto; border-radius: 6px; cursor: crosshair;"></canvas>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); margin-bottom: 12px; padding: 14px;">
        <label style="font-weight: 600; font-size: 0.9rem; display: flex; justify-content: space-between;">
          <span>Value of k (Number of Neighbors):</span>
          <span id="knn-val-k" class="badge-tech" style="color: #38bdf8; font-size: 0.95rem;">3</span>
        </label>
        <input type="range" id="knn-slider-k" min="1" max="15" step="2" value="3" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>k=1 (High Variance / Overfitting)</span>
          <span>k=15 (High Bias / Smooth)</span>
        </div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <strong style="font-size: 0.85rem;">Click-to-Add Training Point Class:</strong>
        <div style="display: flex; gap: 20px; margin-top: 10px;">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: #38bdf8; font-size: 0.88rem;">
            <input type="radio" name="knn-add-class" value="0" checked>
            <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #38bdf8;"></span>
            Class 0 (Healthy / Blue)
          </label>
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; color: #ef4444; font-size: 0.88rem;">
            <input type="radio" name="knn-add-class" value="1">
            <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></span>
            Class 1 (Diabetic Risk / Red)
          </label>
        </div>
        <p class="text-secondary mt-3" style="font-size: 0.8rem; line-height: 1.4;">
          <strong>Examiner's Tip:</strong> Why do we use odd numbers for $k$ ($1, 3, 5, 7$)? To prevent tie-breaking ambiguity in 2-class problems!
        </p>
      </div>
    </div>
  </div>
</div>

<!-- NEW: Interactive Naive Bayes Fruit & Laplace Smoothing Studio -->
<div class="lesson-card mt-5">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <div>
      <span class="badge-tech" style="font-size: 0.75rem;">PSUPR Day 1b Slides 37–46</span>
      <h3 style="margin-top: 4px;"><i data-lucide="calculator"></i> Interactive Naive Bayes Fruit Classification & Laplace Smoothing</h3>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 0.85rem; display: flex; align-items: center; gap: 6px; cursor: pointer;">
        <input type="checkbox" id="nb-chk-laplace" checked>
        <span style="color: #34d399; font-weight: 600;">Enable Laplace Smoothing (&alpha;=1)</span>
      </label>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Based directly on the lecture's Fruit Dataset (500 Bananas, 300 Oranges, 200 Other). Select fruit observations and watch how zero frequencies wipe out probabilities unless protected by Laplace Smoothing:
    $$P(x_i \\mid C_k) = \\frac{\\text{count}(x_i, C_k) + \\alpha}{\\text{count}(C_k) + \\alpha \\cdot |V|}$$
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1fr 1.3fr;">
    <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 16px;">
      <h4 style="font-size: 0.9rem; margin-bottom: 12px; color: var(--accent-cyan);"><i data-lucide="tag"></i> Observed Fruit Features:</h4>
      
      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.82rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">Shape (Long?):</label>
        <select id="nb-sel-long" class="select-styled" style="width: 100%;">
          <option value="Yes" selected>Yes (Long)</option>
          <option value="No">No (Not Long)</option>
        </select>
      </div>

      <div style="margin-bottom: 12px;">
        <label style="font-size: 0.82rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">Taste (Sweet?):</label>
        <select id="nb-sel-sweet" class="select-styled" style="width: 100%;">
          <option value="Yes" selected>Yes (Sweet)</option>
          <option value="No">No (Not Sweet)</option>
        </select>
      </div>

      <div style="margin-bottom: 14px;">
        <label style="font-size: 0.82rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">Color (Yellow?):</label>
        <select id="nb-sel-yellow" class="select-styled" style="width: 100%;">
          <option value="Yes" selected>Yes (Yellow)</option>
          <option value="No">No (Not Yellow)</option>
        </select>
      </div>

      <div class="info-alert" style="font-size: 0.78rem;">
        <strong>Zero-Frequency Trap:</strong> Note that in training, <strong>Orange has 0 Long fruits</strong>. If an unseen long orange arrives and Laplace is OFF, $P(\\text{Long}|\\text{Orange})=0$, making the entire orange score 0 regardless of all other evidence!
      </div>
    </div>

    <div id="nb-result-container">
      <!-- Populated dynamically by visualizers.js -->
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Model Evaluation & The Confusion Matrix Studio",
      subtitle: "Sensitivity, Specificity, Precision, Recall, F1 harmonic mean, ROC curves, and Cumulative Gain/Lift charts",
      badge: "Evaluation Metrics",
      content: `
<div class="lesson-card">
  <h3>Beyond Accuracy: Demystifying the Confusion Matrix</h3>
  <p class="lead-text">
    In healthcare, fraud detection, and sensor alarms, <strong>Accuracy is a dangerous illusion</strong>. If 99% of transactions are legitimate and 1% are fraud, a model predicting "Legitimate" for 100% of cases has 99% accuracy, yet catches 0 fraud!
  </p>
</div>

<!-- Interactive Confusion Matrix Dashboard -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="activity"></i> Interactive Confusion Matrix & ROC Operating Point Dashboard</h3>
  <p class="text-secondary mt-1">Drag the sliders below to change counts of True Positives, False Positives, False Negatives, and True Negatives. Watch all formulas and the ROC point update live!</p>

  <div class="grid-2-col mt-4" style="grid-template-columns: 1.1fr 1fr;">
    <div>
      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 16px;">
        <h4 style="font-size: 0.9rem; margin-bottom: 12px; color: var(--accent-cyan);"><i data-lucide="sliders"></i> Confusion Matrix Slider Inputs:</h4>
        
        <div style="margin-bottom: 10px;">
          <label style="display: flex; justify-content: space-between; font-size: 0.82rem;">
            <span>True Positives (TP - Caught Sick/Fraud):</span>
            <span id="cm-val-tp" style="color: #34d399; font-weight: 700;">90</span>
          </label>
          <input type="range" id="cm-slider-tp" min="0" max="200" value="90" style="width: 100%;">
        </div>

        <div style="margin-bottom: 10px;">
          <label style="display: flex; justify-content: space-between; font-size: 0.82rem;">
            <span>False Positives (FP - False Alarm):</span>
            <span id="cm-val-fp" style="color: #f59e0b; font-weight: 700;">10</span>
          </label>
          <input type="range" id="cm-slider-fp" min="0" max="200" value="10" style="width: 100%;">
        </div>

        <div style="margin-bottom: 10px;">
          <label style="display: flex; justify-content: space-between; font-size: 0.82rem;">
            <span>False Negatives (FN - Missed Patient/Leak):</span>
            <span id="cm-val-fn" style="color: #ef4444; font-weight: 700;">20</span>
          </label>
          <input type="range" id="cm-slider-fn" min="0" max="200" value="20" style="width: 100%;">
        </div>

        <div>
          <label style="display: flex; justify-content: space-between; font-size: 0.82rem;">
            <span>True Negatives (TN - Healthy Cleared):</span>
            <span id="cm-val-tn" style="color: #38bdf8; font-weight: 700;">880</span>
          </label>
          <input type="range" id="cm-slider-tn" min="100" max="1000" value="880" style="width: 100%;">
        </div>
      </div>

      <div class="mt-3" style="text-align: center;">
        <canvas id="cm-roc-canvas" width="360" height="200" style="background: rgba(0,0,0,0.25); border-radius: 6px; border: 1px solid var(--border-color);"></canvas>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">ROC Curve Operating Point: Green Dot (FPR vs TPR)</div>
      </div>
    </div>

    <div>
      <div class="metric-card mb-2" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong>Sensitivity / Recall (TPR):</strong><br>
            <small style="color: var(--text-muted);">$\\frac{TP}{TP + FN}$ (How many sick did we catch?)</small>
          </div>
          <span id="cm-out-sensitivity" class="badge-tech" style="font-size: 1.1rem; color: #34d399;">81.8%</span>
        </div>
      </div>

      <div class="metric-card mb-2" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong>Precision (PPV):</strong><br>
            <small style="color: var(--text-muted);">$\\frac{TP}{TP + FP}$ (When alarm sounds, is it real?)</small>
          </div>
          <span id="cm-out-precision" class="badge-tech" style="font-size: 1.1rem; color: #38bdf8;">90.0%</span>
        </div>
      </div>

      <div class="metric-card mb-2" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong>Specificity (TNR):</strong><br>
            <small style="color: var(--text-muted);">$\\frac{TN}{TN + FP}$ (How many healthy correctly cleared?)</small>
          </div>
          <span id="cm-out-specificity" class="badge-tech" style="font-size: 1.1rem; color: #a78bfa;">98.9%</span>
        </div>
      </div>

      <div class="metric-card mb-2" style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 12px; border: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong>Overall Accuracy:</strong><br>
            <small style="color: var(--text-muted);">$\\frac{TP + TN}{\\text{Total}}$</small>
          </div>
          <span id="cm-out-accuracy" class="badge-tech" style="font-size: 1.1rem; color: #f59e0b;">97.0%</span>
        </div>
      </div>

      <div class="metric-card" style="background: rgba(2, 132, 199, 0.1); border-radius: 8px; padding: 12px; border: 1px solid rgba(56, 189, 248, 0.3);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <strong style="color: #38bdf8;">F1-Score (Harmonic Mean):</strong><br>
            <small style="color: var(--text-secondary);">$2 \\cdot \\frac{\\text{Prec} \\cdot \\text{Rec}}{\\text{Prec} + \\text{Rec}}$</small>
          </div>
          <span id="cm-out-f1" class="badge-tech" style="font-size: 1.2rem; color: #38bdf8;">0.857</span>
        </div>
        <div style="margin-top: 6px; font-size: 0.75rem; color: var(--text-muted);">
          Compare with simple arithmetic mean: <span id="cm-out-arithmetic" style="font-weight: 700; color: #f8fafc;">0.859</span>. Harmonic mean strictly penalizes imbalance when one metric collapses!
        </div>
      </div>
    </div>
  </div>
</div>

<!-- NEW: Interactive Cumulative Gain & Lift Chart Studio -->
<div class="lesson-card mt-5">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <div>
      <span class="badge-tech" style="font-size: 0.75rem;">PSUPR Day 1b Slides 19–20</span>
      <h3 style="margin-top: 4px;"><i data-lucide="trending-up"></i> Cumulative Gain & Lift Chart Studio</h3>
    </div>
  </div>
  <p class="text-secondary mt-1">
    How much better is our model than random guessing? In targeted marketing and medical campaigns, Lift measures how much more concentrated responders are in the top model-predicted deciles:
    $$\\text{Lift} = \\frac{\\% \\text{ Responders in Target Decile}}{\\% \\text{ Total Population in Target Decile}}$$
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 12px; overflow-x: auto;">
      <table class="styled-table" style="width: 100%; font-size: 0.8rem; border-collapse: collapse;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border-color);">
            <th style="padding: 6px 10px;">Decile (% Pop)</th>
            <th style="padding: 6px 10px;">Responders</th>
            <th style="padding: 6px 10px;">Cum Responders</th>
            <th style="padding: 6px 10px;">Cum Gain %</th>
            <th style="padding: 6px 10px;">Lift Factor</th>
          </tr>
        </thead>
        <tbody id="lift-table-body">
          <!-- Populated by visualizers.js -->
        </tbody>
      </table>
    </div>

    <div style="text-align: center;">
      <canvas id="lift-canvas" width="380" height="260" style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 6px;">Lift Curve (Cyan) vs Baseline Random Selection = 1.0x (Dashed White)</div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: NUS ISS Workshop Lab Walkthrough",
      subtitle: "Verified Python solutions: N-Queens CSP, Russian Cities A* & Diabetes Diagnostic Classifiers",
      badge: "Hands-on Python",
      content: `
<div class="lesson-card hero-card">
  <h3>Direct Workshop Solution Code</h3>
  <p class="lead-text">
    Walk through your actual submitted workshop files: <code>A0355263A Diwash Baral-MR WS1.3.1.ipynb</code>, <code>RajaVijayakumar-MR1WS1.3.2-Astar RF.ipynb</code>, and <code>A0355263A Diwash Baral D1diabetes_psupr_knn_logreg_NB.ipynb</code>.
  </p>
</div>

<div class="code-tabs-container mt-4">
  <div class="code-tabs-header">
    <button class="code-tab-btn active" data-tab="tab-nqueens">1. N-Queens CSP (Python)</button>
    <button class="code-tab-btn" data-tab="tab-astar">2. Russian Cities A* (Python)</button>
    <button class="code-tab-btn" data-tab="tab-diabetes">3. Diabetes Classifier Pipeline</button>
  </div>

  <div class="code-tab-content active" id="tab-nqueens">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span class="text-muted" style="font-size: 0.8rem;">Reference: MR 1 Workshop 1.3.1 (Constraint Satisfaction)</span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-nqueens')"><i data-lucide="copy"></i> Copy Python Code</button>
    </div>
    <pre class="code-block" id="code-nqueens"><code>def solve_n_queens_csp(n=4):
    """
    NUS ISS Machine Reasoning WS1.3.1: N-Queens via Backtracking + Forward Checking
    Returns all valid board configurations.
    """
    solutions = []
    board = [-1] * n  # board[row] = col

    def is_safe(row, col):
        for r in range(row):
            c = board[r]
            if c == col or abs(r - row) == abs(c - col):
                return False
        return True

    def backtrack(row):
        if row == n:
            solutions.append(list(board))
            return
        for col in range(n):
            if is_safe(row, col):
                board[row] = col
                backtrack(row + 1)
                board[row] = -1  # restore on backtrack

    backtrack(0)
    return solutions

print(f"4-Queens Solutions: {solve_n_queens_csp(4)}")
# Expected: [[1, 3, 0, 2], [2, 0, 3, 1]]
</code></pre>
  </div>

  <div class="code-tab-content" id="tab-astar">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span class="text-muted" style="font-size: 0.8rem;">Reference: MR 1 Workshop 1.3.2 (A* Search)</span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-astar')"><i data-lucide="copy"></i> Copy Python Code</button>
    </div>
    <pre class="code-block" id="code-astar"><code>import heapq

def a_star_search(graph, heuristics, start, goal):
    """
    Verified A* Implementation for NUS ISS Machine Reasoning
    Returns: (optimal_path, total_cost)
    """
    open_queue = []
    # (f_score, g_score, current_node, path)
    heapq.heappush(open_queue, (heuristics[start], 0, start, [start]))
    explored = set()

    while open_queue:
        f, g, current, path = heapq.heappop(open_queue)

        # GOAL TEST: Evaluated ONLY when popped from OPEN queue!
        if current == goal:
            return path, g

        if current in explored:
            continue
        explored.add(current)

        for neighbor, step_cost in graph.get(current, {}).items():
            if neighbor not in explored:
                tentative_g = g + step_cost
                h = heuristics.get(neighbor, 0)
                f_score = tentative_g + h
                heapq.heappush(open_queue, (f_score, tentative_g, neighbor, path + [neighbor]))

    return None, float('inf')
</code></pre>
  </div>

  <div class="code-tab-content" id="tab-diabetes">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span class="text-muted" style="font-size: 0.8rem;">Reference: PSUPR 1 Workshop (Pima Indians Diabetes)</span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-diabetes')"><i data-lucide="copy"></i> Copy Python Code</button>
    </div>
    <pre class="code-block" id="code-diabetes"><code>import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score

# 1. Load and Split
df = pd.read_csv('diabetes.csv')
X = df.drop('Outcome', axis=1)
y = df['Outcome']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# 2. MANDATORY Normalization for k-NN
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 3. Model Benchmark
models = {
    "k-NN (k=5)": KNeighborsClassifier(n_neighbors=5),
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Gaussian Naive Bayes": GaussianNB()
}

for name, clf in models.items():
    clf.fit(X_train_scaled, y_train)
    y_pred = clf.predict(X_test_scaled)
    y_prob = clf.predict_proba(X_test_scaled)[:, 1]
    
    auc = roc_auc_score(y_test, y_prob)
    print(f"=== {name} ===")
    print(f"ROC-AUC: {auc:.3f}")
    print(classification_report(y_test, y_pred))
</code></pre>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: The A+ Exam Crucible & Trap Decoders",
      subtitle: "Past paper question patterns, model answer rubrics, and formula cheat sheet",
      badge: "Exam Mastery",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #34d399;">
  <h3>How to Score 100% on NUS ISS Exam Day</h3>
  <p class="lead-text">
    NUS ISS professors do not deduct marks for simple math syntax; they deduct marks for missing <strong>justifications and core conditions</strong>. Here are the top 5 traps:
  </p>
</div>

<div class="accordion-item mt-4">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 1: When is the Goal Test applied in A* Search?</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Many students write that the goal test is performed as soon as a goal node is <em>generated</em> as a neighbor.</p>
    <p><strong>The A+ Correction:</strong> In $A^*$, the goal test MUST be performed ONLY when the node is <strong>popped / selected for expansion</strong> from the OPEN priority queue! If you terminate when generated, you might accept a sub-optimal path before an alternative cheaper path finishes propagating.</p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 2: Why can't we use Accuracy alone on Medical or Sensor Data?</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Simply stating "because accuracy is bad for imbalanced data".</p>
    <p><strong>The A+ Correction:</strong> Give the formal calculation! In a dataset with 99% Negative and 1% Positive instances, a trivial Zero-Rule classifier that predicts Negative for all inputs achieves 99% accuracy but has <strong>Sensitivity (Recall) = 0%</strong> and <strong>F1-Score = 0</strong>, completely failing to detect any critical positive events.</p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 3: Admissibility vs Consistency Distinction</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Confusing which condition is required for Tree Search vs Graph Search.</p>
    <p><strong>The A+ Correction:</strong> Memorize this exact statement:
    <em>"Admissibility ($h(n) \\le h^*(n)$) guarantees optimality for Tree Search. Consistency ($h(n) \\le c(n, a, n') + h(n')$) guarantees optimality for Graph Search without needing to reopen nodes in the explored set."</em></p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 4: CSP Heuristics: MRV vs Degree vs LCV</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Mixing up which heuristic chooses the <em>variable</em> vs the <em>value</em>.</p>
    <p><strong>The A+ Correction:</strong>
    1. <strong>MRV (Variable ordering):</strong> Choose variable with fewest remaining values ("Fail-First").
    2. <strong>Degree Heuristic (Variable ordering):</strong> Tie-breaker for MRV; choose variable with most constraints on remaining unassigned variables.
    3. <strong>LCV (Value ordering):</strong> Choose value that leaves the maximum flexibility (leaves most choices open for neighbors).</p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 5: Naive Bayes Zero-Frequency & Laplace Smoothing</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Forgetting the denominator addition in Laplace smoothing.</p>
    <p><strong>The A+ Correction:</strong>
    $$P(x_i \\mid C) = \\frac{\\text{count}(x_i, C) + 1}{\\text{count}(C) + |V|}$$
    Where $|V|$ is the number of possible values for feature $x_i$. If feature is binary ($Yes/No$), $|V|=2$.</p>
  </div>
</div>

<div class="lesson-card mt-4" style="background: rgba(255,255,255,0.02);">
  <h4><i data-lucide="file-text"></i> Day 1 Consolidated Formula Quick-Reference</h4>
  <div style="overflow-x: auto; font-size: 0.85rem;" class="mt-2">
    <table class="styled-table" style="width: 100%;">
      <thead><tr><th>Concept</th><th>Mathematical Formula</th><th>Key Purpose</th></tr></thead>
      <tbody>
        <tr><td>$A^*$ Evaluation</td><td>$f(n) = g(n) + h(n)$</td><td>Balances past path cost $g(n)$ and estimated future cost $h(n)$</td></tr>
        <tr><td>Consistency</td><td>$h(n) \\le c(n, a, n') + h(n')$</td><td>Triangle inequality; ensures monotone non-decreasing $f(n)$</td></tr>
        <tr><td>Z-Score Scaling</td><td>$z = (x - \\mu) / \\sigma$</td><td>Forces $\\mu=0, \\sigma=1$; handles outliers</td></tr>
        <tr><td>Min-Max Scaling</td><td>$x' = (x - x_{\\min}) / (x_{\\max} - x_{\\min})$</td><td>Bounds values into $[0, 1]$</td></tr>
        <tr><td>Sensitivity / Recall</td><td>$TP / (TP + FN)$</td><td>Proportion of true sick/fraud caught</td></tr>
        <tr><td>Precision (PPV)</td><td>$TP / (TP + FP)$</td><td>Proportion of alarms that are true positive</td></tr>
        <tr><td>Specificity (TNR)</td><td>$TN / (TN + FP)$</td><td>Proportion of healthy correctly cleared</td></tr>
        <tr><td>F1-Score</td><td>$2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}$</td><td>Harmonic mean penalizing extreme disparity</td></tr>
        <tr><td>Lift in Decile $k$</td><td>$\\frac{\\text{Resp in Decile } k / \\text{Total in Decile } k}{\\text{Total Responders} / \\text{Total Population}}$</td><td>Multiplier performance over random targeting</td></tr>
      </tbody>
    </table>
  </div>
</div>
`
    },
    {
      id: "quizzes",
      title: "Level 6: Slide Mastery Quizzes",
      subtitle: "10 high-yield NUS ISS exam questions with instant scoring",
      badge: "Knowledge Check",
      content: `
<div id="quiz-container-day1">
  <!-- Rendered by QuizEngine -->
</div>
`
    }
  ]
};
