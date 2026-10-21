// Day 4 Geometry, Boundaries & Precedents Interactive Master Curriculum
// Modules: Pattern Recognition Systems (PSUPR Day 2 & 3) & Reasoning Systems (RS Day 2 CBR)

window.DAY4_GEOMETRY_DIM_CONTENT = {
  id: "day-4-geometry-dim",
  title: "Day 4: Decision Trees, SVM Kernels, PCA vs LDA & Case-Based Reasoning",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — Boundaries, Projections & Precedents",
      subtitle: "From axis-aligned recursive partitioning to maximum-margin hyperplanes and analogical case libraries",
      badge: "Foundations & Mental Models",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="compass"></i></div>
  <div class="card-body">
    <h3>The Geometry of Decision Making: Splitting, Projecting, and Remembering</h3>
    <p class="lead-text">
      Welcome to Day 4! In Days 1–3 we mastered graph search, rule engines, continuous signal sampling, Fourier transforms, and Bayesian belief networks. Today, we step into the core engine of modern statistical pattern recognition and analogical reasoning: <strong>how machines carve decision spaces and reuse past experience</strong>.
    </p>
    <div class="quote-box">
      <em>"A Decision Tree carves the feature space using orthogonal, axis-aligned cuts. A Support Vector Machine searches for the single, unique orientation that maximizes the safety buffer between classes. Linear Discriminant Analysis finds the perspective where classes separate cleanest. And Case-Based Reasoning says: forget the equation, what did we do last time?"</em>
      <div class="quote-author">— PSUPR Day 2 & RS Day 2 Master Lecture Notes</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 3 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 3 Core High-Yield Formulas</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. Heisenberg-Gabor Limit:</strong><br>
      $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$. Narrow time window $\\to$ sharp time, blurry frequency. Wide window $\\to$ sharp frequency, blurry time.
    </div>
    <div>
      <strong style="color: #34d399;">2. Haar Wavelet Filters:</strong><br>
      $A = \\frac{x_1 + x_2}{\\sqrt{2}}$ (Approximation), $D = \\frac{x_2 - x_1}{\\sqrt{2}}$ (Detail). Energy is strictly preserved ($A^2 + D^2 = x_1^2 + x_2^2$).
    </div>
    <div>
      <strong style="color: #f59e0b;">3. Bayesian D-Separation:</strong><br>
      Common Cause and Causal Chain are blocked when conditioned on the middle node. Common Effect (Collider) is <strong>unblocked</strong> when conditioned on the collider or its descendant!
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="layers"></i> 4 Ways to Classify the World</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In the NUS ISS curriculum, every classifier approaches the decision space through a distinct philosophy:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. Decision Tree (ID3/C4.5):</strong> Greedy top-down recursive partitioning using Information Gain or Gini impurity. Hyperplanes are strictly axis-parallel ($x_j \\le \\theta$).</li>
      <li><strong>2. Support Vector Machine (SVM):</strong> Convex optimization finding the global maximum margin $\\frac{2}{\\|w\\|}$. Boundary is determined strictly by a sparse set of <em>support vectors</em>.</li>
      <li><strong>3. Dimension Reduction (PCA vs LDA):</strong> Project high-dimensional data onto lower dimensions. PCA maximizes total variance (unsupervised); LDA maximizes class discrimination (supervised).</li>
      <li><strong>4. Case-Based Reasoning (CBR):</strong> Analogical reasoning that solves new problems by retrieving and adapting precedents from a case memory (4R cycle: Retrieve, Reuse, Revise, Retain).</li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="git-merge"></i> Cognitive Systems Alignment</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In Cognitive Systems, human problem solving relies heavily on <strong>episodic memory</strong> and <strong>analogical transfer</strong> rather than re-deriving mathematical first principles each time:
    </p>
    <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.82rem; margin-top: 8px;">
      [New Medical Patient Symptoms]<br>
      &nbsp;&nbsp;│<br>
      &nbsp;&nbsp;├──► 1. RETRIEVE: Find Patient #402 from 2023 with 92% symptom match<br>
      &nbsp;&nbsp;├──► 2. REUSE: Apply Patient #402's antibiotic regimen<br>
      &nbsp;&nbsp;├──► 3. REVISE: Reduce dosage by 20% due to kidney function variance<br>
      &nbsp;&nbsp;└──► 4. RETAIN: Save new patient case into clinical library
    </div>
    <p style="font-size: 0.8rem; color: var(--accent-cyan); margin-top: 8px;">
      This mimics real-world medical, legal, and engineering triage!
    </p>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 4)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>Decision Tree Business Critiques (PRS Q1a), Multi-Class Trees (IRS Q3a), SVM vs NN Confusion Matrices (PRS Q1b), and PCA Data Leakage Traps (PRS Q1e)</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Decision Tree Split &amp; Imbalance Critique (PRS Q1a &amp; IRS Q3a)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Split Formulas:</strong> $IG(S,A) = H(S) - \\sum_v \\frac{|S_v|}{|S|} H(S_v)$ where $H(S) = -\\sum_k p_k \\log_2 p_k$; $\\text{Gini}(S) = 1 - \\sum_k p_k^2$.</li>
        <li><strong>PRS Q1a Imbalance Critique:</strong> With $84.5\\%$ False vs $15.5\\%$ True, greedy accuracy pruning creates an overly shallow tree using only 2 of 18 features (<code>PageValue</code>, <code>BounceRate</code>). Fix via <strong>SMOTE</strong> or <strong>Cost-Sensitive Class Weights</strong> + evaluate via <strong>ROC-AUC, F1, and Lift Chart</strong>.</li>
        <li><strong>IRS Q3a Multi-Class Failure:</strong> A single tree fails on $100+$ diseases (severe leaf fragmentation, cannot rank Top-10). Use <strong>One-vs-Rest Binary Trees</strong> sorted by leaf probability $P(D_m=\\text{True}\\mid \\mathbf{x})$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. SVM Margin &amp; Confusion Matrix Comparison (PRS Q1b)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Soft-Margin SVM:</strong> $\\min \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C\\sum_i \\xi_i$ s.t. $y_i(\\mathbf{w}^T\\phi(\\mathbf{x}_i)+b) \\ge 1 - \\xi_i$.</li>
        <li><strong>PRS Q1b Calculation:</strong>
          <br>• <strong>SVM:</strong> $TP(0)=3078, FN=72 \\implies \\text{Class 0 Recall}=97.7\\%$, but $TN(1)=237, FP=312 \\implies \\text{Buyer Recall}=\\mathbf{43.2\\%}$.
          <br>• <strong>NN:</strong> $TP(0)=3029, FN=121 \\implies \\text{Class 0 Recall}=96.2\\%$, and $TN(1)=288, FP=261 \\implies \\text{Buyer Recall}=\\mathbf{52.5\\%}$.
          <br>• <strong>Business Verdict:</strong> Choose <strong>NN</strong> because capturing actual buyers ($+9.3\\%$ recall on True class) generates far higher revenue than avoiding cheap marketing coupons!</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. PCA Step-by-Step &amp; Target Leakage Trap (PRS Q1e)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Retaining $K$ Factors:</strong> Use Cumulative Variance $\\ge 80\\%$ (<strong>8 PCs = 80.6%</strong> in PRS Q1e) or Scree Elbow / Kaiser rule.</li>
        <li><strong>Factor Interpretation:</strong> Inspect largest loading magnitudes $|w_{jk}|$ (e.g., PC1 = browsing volume <code>ProductRelated</code> $-0.511$; PC2 = exit/bounce disengagement $-0.700$).</li>
        <li><strong>CRITICAL EXAM TRAP (PRS Q1e):</strong> The PCA table included the target label <code>Revenue</code> ($0.221$ in PC1, $0.534$ in PC4) and nominal integer IDs (<code>Browser</code>, <code>OperatingSystems</code>)! Target labels must <strong>never</strong> enter PCA (causes severe target leakage at test time).</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. Case-Based Reasoning (CBR) 4R Cycle</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>1. Retrieve:</strong> Compute weighted global similarity $\\text{Sim}(Q, C) = \\frac{\\sum w_i \\text{sim}_i(q_i, c_i)}{\\sum w_i}$.</li>
        <li><strong>2. Reuse (Adapt):</strong> Transform/parameter-adjust past solution to fit new query constraints.</li>
        <li><strong>3. Revise:</strong> Validate adapted solution in simulation or via domain expert feedback.</li>
        <li><strong>4. Retain:</strong> Index verified novel cases into Case Base; prune redundant cases to preserve retrieval speed.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Decision Trees — Entropy, Information Gain & Gain Ratio",
      subtitle: "Quinlan's ID3 vs C4.5 mathematics and interactive feature split studio",
      badge: "Tree Architecture",
      content: `
<div class="lesson-card">
  <h3>The Mathematics of Purity: Shannon Entropy to C4.5</h3>
  <p class="lead-text">
    A Decision Tree seeks to partition an impure dataset into pure subsets where all instances belong to a single class. The fundamental metric of impurity is <strong>Shannon Entropy</strong>.
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. Shannon Entropy $H(S)$</strong>
      $$H(S) = - \\sum_{i=1}^{c} p_i \\log_2(p_i)$$
      For binary classification ($p_+$ and $p_-$):
      $$H(S) = -p_+ \\log_2(p_+) - p_- \\log_2(p_-)$$
      <ul>
        <li>Pure set ($p_+=1$ or $p_-=1$): $H(S) = 0$ bits.</li>
        <li>Equal split ($p_+=0.5, p_-=0.5$): $H(S) = 1.0$ bit.</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">2. Information Gain $Gain(S, A)$</strong>
      Reduction in entropy achieved by partitioning on attribute $A$:
      $$Gain(S, A) = H(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} H(S_v)$$
      ID3 selects the attribute that <strong>maximizes</strong> Information Gain at each node.
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #f59e0b;">3. C4.5 Gain Ratio $GR(S, A)$</strong>
      Corrects ID3's fatal bias toward high-cardinality features (like Customer ID):
      $$SplitInfo(S, A) = - \\sum_{v} \\frac{|S_v|}{|S|} \\log_2\\left(\\frac{|S_v|}{|S|}\\right)$$
      $$GainRatio(S, A) = \\frac{Gain(S, A)}{SplitInfo(S, A)}$$
    </div>
  </div>
</div>

<!-- Interactive Decision Tree Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="split"></i> Interactive Decision Tree Split Studio (Quinlan Weather Dataset)</h3>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 0.85rem;">Split Attribute:</label>
      <select id="dt-feature-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="outlook" selected>Outlook (Sunny, Overcast, Rain)</option>
        <option value="temp">Temperature (Hot, Mild, Cool)</option>
        <option value="humidity">Humidity (High, Normal)</option>
        <option value="wind">Wind (Weak, Strong)</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Experiment with the 14-day Play Tennis dataset from PSUPR Day 2 Slide 11. See live entropy reductions, weighted child impurities, Information Gain, and C4.5 Split Information!
  </p>

  <div id="dt-result-container" class="mt-3">
    <!-- Rendered dynamically by SprintDay4Visualizers.initDecisionTreeStudio() -->
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Support Vector Machines — Margins, Slack & The Kernel Trick",
      subtitle: "Geometric margin derivation, dual optimization, and non-linear RBF mappings",
      badge: "Optimization & Kernels",
      content: `
<div class="lesson-card">
  <h3>Support Vector Machines: Maximum Margin Classifiers</h3>
  <p class="lead-text">
    Unlike Perceptrons which stop at any arbitrary hyperplane that separates classes, the Support Vector Machine (SVM) finds the <strong>unique hyperplane that maximizes the margin</strong> (the distance to the nearest training instances).
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div>
      <h4 style="color: #38bdf8;">1. Geometric Margin Derivation</h4>
      <p style="color: var(--text-secondary);">
        Let the separating hyperplane be $w^T x + b = 0$. We normalize $w$ and $b$ such that the canonical hyperplanes bounding the margin are:
      </p>
      <div style="background: rgba(0,0,0,0.25); padding: 10px; border-radius: 6px; font-family: monospace; margin: 6px 0;">
        Positive Margin: &nbsp;w^T x + b = +1<br>
        Negative Margin: &nbsp;w^T x + b = -1
      </div>
      <p style="color: var(--text-secondary);">
        The geometric width of the margin between these two bounding planes is:
        $$\\text{Margin} = \\frac{2}{\\|w\\|}$$
        To <strong>maximize</strong> $\\frac{2}{\\|w\\|}$, we solve the equivalent quadratic programming minimization:
        $$\\min_{w, b} \\frac{1}{2} \\|w\\|^2 \\quad \\text{subject to } y_i(w^T x_i + b) \\ge 1, \\quad \\forall i$$
      </p>
    </div>

    <div>
      <h4 style="color: #34d399;">2. Soft Margin & Slack Variables $\\xi_i$</h4>
      <p style="color: var(--text-secondary);">
        When data is noisy or non-linearly separable, we introduce slack variables $\\xi_i \\ge 0$:
        $$\\min_{w, b, \\xi} \\frac{1}{2} \\|w\\|^2 + C \\sum_{i=1}^{N} \\xi_i \\quad \\text{s.t. } y_i(w^T x_i + b) \\ge 1 - \\xi_i$$
      </p>
      <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border-left: 3px solid #34d399; margin-top: 8px;">
        <strong>The $C$ Regularization Tradeoff:</strong>
        <ul style="margin: 4px 0 0 16px;">
          <li><strong>Large $C$:</strong> Heavy penalty for errors $\\to$ narrow margin, strict fit, risk of overfitting.</li>
          <li><strong>Small $C$:</strong> Tolerant of errors $\\to$ wider margin, softer boundary, risk of underfitting.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="lesson-card mt-3" style="background: rgba(245, 158, 11, 0.05); border-left: 4px solid var(--accent-gold);">
    <h4 style="color: #fbbf24;"><i data-lucide="cpu"></i> Mercer's Theorem & The Kernel Trick</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      If data cannot be separated linearly, we map it into a higher-dimensional feature space $\\Phi(x)$. Crucially, the dual optimization only requires computing inner products $\\langle \\Phi(x_i), \\Phi(x_j) \\rangle$. A <strong>Kernel Function</strong> computes this dot product directly in input space without ever calculating $\\Phi(x)$:
      $$K(x, z) = \\langle \\Phi(x), \\Phi(z) \\rangle$$
    </p>
    <div class="grid-3-col mt-2" style="font-size: 0.82rem;">
      <div><strong>Linear:</strong> $K(x, z) = x^T z$</div>
      <div><strong>Polynomial:</strong> $K(x, z) = (x^T z + c)^d$</div>
      <div><strong>RBF / Gaussian:</strong> $K(x, z) = \\exp(-\\gamma \\|x - z\\|^2)$</div>
    </div>
  </div>
</div>

<!-- Interactive SVM Kernel Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="crosshair"></i> Interactive SVM Margin, Slack & Kernel Studio</h3>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 0.85rem;">Dataset:</label>
      <select id="svm-data-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="linear" selected>Linearly Separable (Linear Kernel)</option>
        <option value="nonlinear">Concentric Rings (RBF Kernel)</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Observe the gold-circled <strong>Support Vectors</strong>. Adjust $C$ to see the margin expand/contract, and adjust $\\gamma$ on the RBF kernel to watch the boundary wrap around circular clusters!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="svm-canvas" width="480" height="340" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Slack Penalty $C$:</span>
          <span id="svm-val-c" class="badge-tech" style="color: #38bdf8;">1.0</span>
        </label>
        <input type="range" id="svm-slider-c" min="0.1" max="10" step="0.1" value="1.0" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>Soft Margin (Wide / Tolerates Errors)</span>
          <span>Hard Margin (Narrow / Strict Fit)</span>
        </div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>RBF Kernel $\\gamma$ (Gamma):</span>
          <span id="svm-val-gamma" class="badge-tech" style="color: #f59e0b;">2.0</span>
        </label>
        <input type="range" id="svm-slider-gamma" min="0.1" max="15" step="0.5" value="2.0" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>Low $\\gamma$ (Broad Gaussian bell)</span>
          <span>High $\\gamma$ (Tight island wrapping)</span>
        </div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <strong style="font-size: 0.85rem; color: #fbbf24;"><i data-lucide="check-circle"></i> Key Exam Rule: Support Vector Invariance</strong>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 6px;">
          Points with $\\alpha_i = 0$ (non-support vectors) can be added, moved, or deleted arbitrarily without shifting the decision boundary by even 1 micrometer!
        </p>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Dimensionality Reduction — PCA vs LDA Projection Studio",
      subtitle: "Unsupervised variance maximization vs supervised Fisher class discrimination",
      badge: "Dimension Reduction",
      content: `
<div class="lesson-card">
  <h3>Principal Component Analysis (PCA) vs Linear Discriminant Analysis (LDA)</h3>
  <p class="lead-text">
    When dealing with sensor arrays, spectral bands, or image pixels, dimensionality reduction is vital. But choosing between PCA and LDA is a classic NUS ISS exam design question!
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">PCA: Unsupervised Variance Maximization</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        PCA seeks orthogonal projection axes $w$ that maximize the variance of the projected data, ignoring all class labels:
        $$\\max_{w} w^T \\Sigma w \\quad \\text{subject to } w^T w = 1$$
        Solving the Lagrangian leads to the classic eigenvalue equation:
        $$\\Sigma w = \\lambda w$$
      </p>
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li>Eigenvectors $w_i$ give the principal axis directions.</li>
        <li>Eigenvalues $\\lambda_i$ represent the variance captured by that component.</li>
        <li><strong>Blindness:</strong> If maximum variance direction overlaps classes, PCA will fuse the classes together!</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #34d399;">LDA: Supervised Fisher Discriminant</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        LDA explicitly uses class labels to maximize the ratio of <strong>Between-Class Scatter ($S_B$)</strong> to <strong>Within-Class Scatter ($S_W$)</strong>:
        $$J(w) = \\frac{w^T S_B w}{w^T S_W w}$$
      </p>
      <div style="background: rgba(0,0,0,0.25); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.78rem; margin: 6px 0;">
        S_B = (m_1 - m_2)(m_1 - m_2)^T<br>
        S_W = \\sum_{x \\in C_1} (x - m_1)(x - m_1)^T + \\sum_{x \\in C_2} (x - m_2)(x - m_2)^T
      </div>
      <p style="color: var(--text-secondary);">
        The optimal Fisher projection vector is given in closed form by:
        $$w = S_W^{-1} (m_1 - m_2)$$
      </p>
    </div>
  </div>
</div>

<!-- Interactive PCA vs LDA Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="rotate-3d"></i> Interactive PCA vs LDA Rotating Projection Axis Studio</h3>
    <div style="display: flex; gap: 8px;">
      <button id="pca-btn-set-pca" class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: rgba(56, 189, 248, 0.2); border: 1px solid #38bdf8;">
        Snap to PCA Axis (~32°)
      </button>
      <button id="pca-btn-set-lda" class="btn-primary" style="font-size: 0.8rem; padding: 6px 12px; background: rgba(52, 211, 153, 0.2); border: 1px solid #34d399;">
        Snap to LDA Axis (~118°)
      </button>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Rotate the projection axis. Notice how PCA aligns with the widest scatter of points regardless of class, causing Class A (blue) and Class B (red) to overlap on the 1D line! Then snap to LDA to see perfect separation.
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="pca-lda-canvas" width="480" height="340" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Projection Axis Angle $\\theta$:</span>
          <span id="pca-lda-val-angle" class="badge-tech" style="color: #38bdf8;">45°</span>
        </label>
        <input type="range" id="pca-lda-slider-angle" min="0" max="180" step="1" value="45" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>0° (Horizontal)</span>
          <span>90° (Vertical)</span>
          <span>180°</span>
        </div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <strong style="font-size: 0.85rem; color: #ef4444;"><i data-lucide="alert-triangle"></i> The Classic Exam Question</strong>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 6px;">
          <em>"When will PCA perform worse than LDA for classification?"</em><br>
          <strong>Answer:</strong> When the direction of maximum variance is perpendicular to the direction of class separability. PCA projects along maximum variance, squashing the classes into each other!
        </p>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Case-Based Reasoning (CBR 4R Cycle) & Python Labs",
      subtitle: "Analogical reasoning architecture, case memory adaptation, and scikit-learn implementations",
      badge: "Reasoning & Code Labs",
      content: `
<div class="lesson-card">
  <h3>Case-Based Reasoning (CBR): Reasoning by Analogy</h3>
  <p class="lead-text">
    Rule-based systems struggle when domain rules are incomplete or too vast to enumerate. Case-Based Reasoning (Aamodt & Plaza, 1994) solves new problems by finding similar past cases and adapting their solutions.
  </p>

  <div class="grid-4-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(56, 189, 248, 0.05); padding: 12px; border-radius: 8px; border: 1px solid #38bdf8;">
      <strong style="color: #38bdf8;">1. RETRIEVE</strong><br>
      Given a new problem description, retrieve the most similar case(s) from the Case Base using weighted distance (e.g. Euclidean, Manhattan, or Tversky similarity).
    </div>

    <div style="background: rgba(52, 211, 153, 0.05); padding: 12px; border-radius: 8px; border: 1px solid #34d399;">
      <strong style="color: #34d399;">2. REUSE</strong><br>
      Map the retrieved precedent case's solution to the target problem. Propose an initial adapted solution (e.g. adjust interest rate based on credit difference).
    </div>

    <div style="background: rgba(245, 158, 11, 0.05); padding: 12px; border-radius: 8px; border: 1px solid #f59e0b;">
      <strong style="color: #f59e0b;">3. REVISE</strong><br>
      Evaluate the proposed solution in the real world or through simulation. Check hard policy rules and correct any flaws.
    </div>

    <div style="background: rgba(168, 85, 247, 0.05); padding: 12px; border-radius: 8px; border: 1px solid #a855f7;">
      <strong style="color: #a855f7;">4. RETAIN</strong><br>
      If the revised solution succeeds, store the new problem-solution pair into the Case Base to expand systemic competence!
    </div>
  </div>
</div>

<!-- Interactive CBR 4R Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="archive"></i> Interactive CBR 4R Loan Decision Engine</h3>
    <button id="cbr-btn-execute" class="btn-primary" style="font-size: 0.85rem; padding: 8px 16px; background: #38bdf8; color: #000; font-weight: 700; border: none; border-radius: 6px; cursor: pointer;">
      <i data-lucide="play"></i> Run 4R Cycle on New Applicant
    </button>
  </div>
  <p class="text-secondary mt-1">
    Target Applicant: <strong>Income: $70,000 | Credit Score: 710 | Debt Ratio: 28\\% | Requested Loan: $240,000</strong>. Watch the 4R cycle retrieve the closest historical case, adapt the interest rate, audit policy compliance, and retain the new case!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.1fr 1fr;">
    <div>
      <span style="font-size: 0.75rem; color: #38bdf8; font-weight: 600;">Historical Case Base Library:</span>
      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); overflow-x: auto; margin-top: 6px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.78rem; text-align: left;">
          <thead>
            <tr style="background: rgba(255,255,255,0.05); border-bottom: 1px solid var(--border-color);">
              <th style="padding: 6px 10px;">ID</th>
              <th style="padding: 6px 10px;">Income</th>
              <th style="padding: 6px 10px;">Credit</th>
              <th style="padding: 6px 10px;">Debt%</th>
              <th style="padding: 6px 10px;">Loan</th>
              <th style="padding: 6px 10px;">Decision</th>
              <th style="padding: 6px 10px;">Rate</th>
            </tr>
          </thead>
          <tbody id="cbr-table-body">
            <!-- Rendered by SprintDay4Visualizers.initCBR4RStudio() -->
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <span style="font-size: 0.75rem; color: #34d399; font-weight: 600;">4R Execution Audit Log:</span>
      <div id="cbr-audit-log" style="background: rgba(0,0,0,0.4); border-radius: 8px; border: 1px solid var(--border-color); padding: 12px; font-family: monospace; font-size: 0.8rem; min-height: 180px;">
        <span style="color: var(--text-muted);">Click "Run 4R Cycle on New Applicant" to start execution...</span>
      </div>
    </div>
  </div>
</div>

<!-- Python Labs -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="code"></i> Verified Python Code Labs (Scikit-Learn & CBR)</h3>
  <p class="text-secondary mt-1">Copy and run these production-grade snippets for your workshops and exam preparation.</p>

  <div class="tab-container mt-3">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. Decision Tree Split & Cost-Complexity Pruning</strong>
      <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split

# Train with Information Gain (entropy) vs Gini
clf_entropy = DecisionTreeClassifier(criterion='entropy', max_depth=3, random_state=42)
clf_entropy.fit(X_train, y_train)

# Post-Pruning via Cost-Complexity Path
path = clf_entropy.cost_complexity_pruning_path(X_train, y_train)
ccp_alphas, impurities = path.ccp_alphas, path.impurities

# Select optimal alpha using validation set
pruned_clf = DecisionTreeClassifier(criterion='entropy', ccp_alpha=ccp_alphas[len(ccp_alphas)//2])
pruned_clf.fit(X_train, y_train)
print(export_text(pruned_clf, feature_names=feature_cols))</code></pre>

      <strong style="color: #34d399; margin-top: 14px; display: block;">2. SVM with RBF Kernel & Grid Search</strong>
      <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# ALWAYS scale features before SVM!
svm_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('svm', SVC(kernel='rbf'))
])

param_grid = {
    'svm__C': [0.1, 1.0, 10.0, 100.0],
    'svm__gamma': ['scale', 'auto', 0.01, 0.1, 1.0]
}

grid = GridSearchCV(svm_pipeline, param_grid, cv=5, scoring='f1_macro')
grid.fit(X_train, y_train)
print("Best Params:", grid.best_params_)
print("Number of Support Vectors:", grid.best_estimator_['svm'].n_support_)</code></pre>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: Exam Crucible — 5 Dangerous Traps & Common Flaws",
      subtitle: "The high-cardinality trap, SVM scaling failure, and PCA variance fallacy",
      badge: "Exam Traps & Survival",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #ef4444;">
  <div class="card-icon" style="color: #ef4444;"><i data-lucide="shield-alert"></i></div>
  <div class="card-body">
    <h3>The 5 Lethal Exam Traps for Day 4 Topics</h3>
    <p class="lead-text">
      Students frequently drop from an A to a B in NUS ISS exams due to these 5 conceptual traps. Memorize these defenses!
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 1: The ID3 High-Branching Feature Trap</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> The exam asks: <em>"An attribute 'Transaction_ID' has 1,000 unique values for 1,000 rows. Will ID3 select it as the root node?"</em><br>
      <strong>Student Mistake:</strong> Saying "No, unique IDs have no predictive power."<br>
      <strong>The Reality:</strong> Mathematically, ID3's Information Gain <strong>WILL</strong> select it! Splitting on Transaction_ID creates 1,000 child nodes with 1 sample each ($H=0$). Hence $Gain = H(S) - 0 = H(S)$, which is the maximum possible gain! C4.5's Gain Ratio penalizes this by dividing by $SplitInfo = -\\sum \\frac{1}{1000}\\log_2\\frac{1}{1000} \\approx 9.97$.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 2: The SVM Feature Scaling Disaster</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Training an SVM directly on unscaled features where Feature 1 is Salary (\$10,000 - \$200,000) and Feature 2 is Age (18 - 80).<br>
      <strong>The Reality:</strong> SVM computes Euclidean distance $\\|x_i - x_j\\|^2$. The Salary dimension will be $10^8$ times larger than Age, causing the hyperplane to ignore Age entirely and rendering the margin meaningless. <strong>Always apply StandardScaler before SVM!</strong>
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 3: The SVM Regularization $C$ Inversion Confusion</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Confusing the SVM parameter $C$ with the ridge/lasso parameter $\\lambda$.<br>
      <strong>The Reality:</strong> In Ridge Regression, $\\min \\text{Loss} + \\lambda \\|w\\|^2$, large $\\lambda$ means MORE regularization (flatter model). But in SVM, $\\min \\frac{1}{2}\\|w\\|^2 + C \\sum \\xi_i$, the $C$ multiplies the <strong>loss penalty</strong>! Therefore:
      <ul style="margin: 4px 0 0 16px;">
        <li><strong>Large $C$ = LESS regularization</strong> (tighter fit, higher risk of overfitting).</li>
        <li><strong>Small $C$ = MORE regularization</strong> (wider margin, higher tolerance for errors).</li>
      </ul>
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 4: PCA Label Blindness Fallacy</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Assuming PCA is always the best preprocessing step before training a classifier.<br>
      <strong>The Reality:</strong> PCA is <strong>completely unsupervised</strong>. It maximizes variance, not class discrimination. If the signal separating Class 1 from Class 2 lies along a low-variance direction, PCA's dimensionality reduction will discard that exact feature and destroy classifier accuracy! Use LDA or supervised feature selection instead.
    </p>
  </div>
</div>

<div class="lesson-card mt-3" style="border-left: 3px solid #38bdf8;">
  <h4 style="color: #38bdf8;">Trap 5: CBR Case Base Bloat & Retrieval Stagnation</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
    <strong>The Trap:</strong> In the <strong>RETAIN</strong> step of CBR, retaining every single solved case.<br>
    <strong>The Reality:</strong> Indiscriminately retaining all cases causes the Case Base to bloat, increasing retrieval latency ($O(N)$) without adding new problem-solving coverage. Effective CBR systems only retain cases that represent novel problem topologies or failed precedents that required substantial revision!
  </p>
</div>
`
    },
    {
      id: "level-6",
      title: "Level 6: Slide Mastery Quizzes — 10 High-Yield Exam Questions",
      subtitle: "Test your mastery against authentic NUS ISS exam questions with instant step-by-step solutions",
      badge: "Knowledge Check",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="check-square"></i> Day 4 Slide Mastery Crucible</h3>
  <p class="lead-text">
    Answer all 10 questions below. Each question is sampled directly from past NUS ISS examination patterns covering Decision Trees, SVM, Kernels, PCA/LDA, and CBR.
  </p>
  <div id="sprint-quiz-container" class="mt-4">
    <!-- Rendered dynamically by Quiz Engine -->
  </div>
</div>
`
    }
  ]
};
