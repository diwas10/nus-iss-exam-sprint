// Day 10 Ensembles, Grand Synthesis & Full A+ Mock Exam Master Curriculum
// Comprehensive Capstone: Pattern Recognition Systems (PSUPR, ISSM, PRMLS) & Intelligent Reasoning Systems (MR, CS, RS)

window.DAY10_ENSEMBLES_CRUCIBLE_CONTENT = {
  id: "day-10-ensembles-crucible",
  title: "Day 10: Ensembles, Grand Synthesis & Full A+ Mock Exam",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — Why Committees Beat Individuals",
      subtitle: "Condorcet's Jury Theorem and the Bias-Variance Ensemble Decomposition",
      badge: "Ensembles & Synergy",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="award"></i></div>
  <div class="card-body">
    <h3>The Grand Capstone: Committees, Synergy & The A+ Horizon</h3>
    <p class="lead-text">
      Congratulations on reaching <strong>Day 10</strong>! Over the past 9 days, you have systematically conquered signal processing, heuristic graph search, Bayesian inference, geometric classifiers, neural architectures, sequence modeling, transformers, knowledge graphs, and evolutionary optimization.
    </p>
    <div class="quote-box">
      <em>"A single learner, no matter how complex, is limited by its inductive bias. By combining diverse learners—whether through Bagging's variance reduction, Boosting's bias reduction, or Stacking's meta-learning—we create systems that surpass the performance of any individual model. Today, we unite every course into an unshakeable A+ foundation!"</em>
      <div class="quote-author">— PRMLS Day 5 & RS Day 5 Capstone Lecture</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 9 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 9 Core Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. GA Selection Probability:</strong><br>
      $p_i = \\frac{f_i}{\\sum f}$. In WS1GA.xlsx ($f=x^2$), chromosome #2 with $x=24, f=576$ has $p_2 = \\frac{576}{1170} = 49.23\\%$.
    </div>
    <div>
      <strong style="color: #34d399;">2. Permutation OX Crossover:</strong><br>
      Standard 1-point crossover creates duplicate cities! Order Crossover (OX) copies a segment and fills remaining cities in relative order without duplicates.
    </div>
    <div>
      <strong style="color: #f59e0b;">3. ReAct Cognitive Loop:</strong><br>
      Thought &rarr; Action &rarr; Observation. External tool observations inject physical ground truth, eliminating LLM hallucinations.
    </div>
  </div>
</div>

<div class="grid-3-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="copy"></i> Bagging (Random Forest)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>Reduces Variance.</strong> Trains deep, low-bias, high-variance decision trees in parallel on bootstrap samples ($63.2\\%$ unique, $36.8\\%$ Out-of-Bag) with random feature subspaces ($m = \\sqrt{p}$).
    </p>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="trending-up"></i> Boosting (AdaBoost / XGBoost)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>Reduces Bias.</strong> Trains shallow, high-bias, low-variance weak learners sequentially. Misclassified points receive inflated weights $w_i e^{\\alpha_t}$, forcing subsequent stumps to correct previous mistakes.
    </p>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="layers"></i> Stacking (Meta-Learner)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>Maximizes Representation.</strong> Blends heterogeneous base learners (k-NN, SVM, Random Forest, MLP) by training a Level-1 Meta-Learner on out-of-fold cross-validated predictions.
    </p>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Bagging, Boosting & Stacking Studio",
      subtitle: "Interactive AdaBoost weight updating, Bootstrap simulation, and Stacking meta-models",
      badge: "Ensemble Studio",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="sliders"></i> The Ensemble Triad: Mathematical Principles</h3>
  <p style="font-size: 0.9rem; color: var(--text-secondary);">
    In Pattern Recognition Systems (PRMLS Day 5), ensemble methods combine multiple models to minimize Expected Prediction Error: $\\text{EPE} = \\text{Bias}^2 + \\text{Variance} + \\sigma^2$.
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.82rem;">
    <div style="background: rgba(56, 189, 248, 0.05); padding: 12px; border-radius: 6px; border-left: 3px solid #38bdf8;">
      <strong style="color: #38bdf8;">Bagging (Bootstrap Aggregation):</strong><br>
      $f_{\\text{bag}}(x) = \\frac{1}{B} \\sum_{b=1}^B f_b(x)$.<br>
      Averaging $B$ independent models with variance $\\sigma^2$ reduces variance to $\\frac{\\sigma^2}{B} + \\rho\\sigma^2$. Feature bagging de-correlates trees, driving $\\rho \\to 0$.
    </div>

    <div style="background: rgba(245, 158, 11, 0.05); padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
      <strong style="color: #f59e0b;">Boosting (AdaBoost.M1):</strong><br>
      Weighted error: $\\epsilon_t = \\sum_{i: y_i \\ne h_t(x_i)} w_i^{(t)}$.<br>
      Classifier weight: $\\alpha_t = \\frac{1}{2} \\ln\\left(\\frac{1 - \\epsilon_t}{\\epsilon_t}\\right)$.<br>
      Weight update: $w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-y_i \\alpha_t h_t(x_i))}{Z_t}$.
    </div>

    <div style="background: rgba(52, 211, 153, 0.05); padding: 12px; border-radius: 6px; border-left: 3px solid #34d399;">
      <strong style="color: #34d399;">Stacking Generalization:</strong><br>
      Level 0: $M$ base models generate cross-validated predictions $\\hat{y}_{i, m}$.<br>
      Level 1: Meta-learner $g(\\hat{y}_{i, 1}, \\dots, \\hat{y}_{i, M})$ learns optimal non-linear blending weights.
    </div>
  </div>
</div>

<!-- Interactive Ensemble Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
    <h4><i data-lucide="play-circle"></i> Interactive Ensemble Studio</h4>
    <div>
      <label style="font-size: 0.85rem; margin-right: 8px;">Select Ensemble Mode:</label>
      <select id="ensemble-tab-select" class="form-select" style="width: auto; display: inline-block; padding: 4px 10px; font-size: 0.85rem;">
        <option value="boosting" selected>1. AdaBoost Live Weight & Voting Calculator</option>
        <option value="bagging">2. Bootstrap Sampling & Out-of-Bag (OOB) Sim</option>
        <option value="stacking">3. Stacking & Meta-Learner Architecture</option>
      </select>
    </div>
  </div>

  <!-- Tab 1: Boosting -->
  <div id="ensemble-tab-boosting">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px;">
      <h5 style="color: #f59e0b; margin-bottom: 8px;">AdaBoost Iteration 1 Calculator (5 Sample Benchmark)</h5>
      <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px;">
        Adjust the weighted classification error $\\epsilon_t$ to observe how the voting weight $\\alpha_t$ and sample re-weighting multipliers update dynamically:
      </p>

      <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 14px; flex-wrap: wrap;">
        <div>
          <label style="font-size: 0.85rem;">Weighted Error $\\epsilon_t$:</label>
          <input type="range" id="adaboost-slider-eps" min="0.05" max="0.45" step="0.01" value="0.40" style="vertical-align: middle; margin-left: 8px;">
          <span id="adaboost-val-eps" style="font-weight: 700; color: #f59e0b; margin-left: 8px;">0.40</span>
        </div>
        <div style="font-size: 0.85rem; font-family: monospace;">
          Classifier Weight $\\alpha_t$: <span id="adaboost-val-alpha" style="color: #38bdf8; font-weight: 700;">0.2027</span>
        </div>
        <div style="font-size: 0.85rem; font-family: monospace;">
          Correct Multiplier: <span id="adaboost-val-wt-corr" style="color: #34d399; font-weight: 700;">0.816x</span> |
          Wrong Multiplier: <span id="adaboost-val-wt-wrong" style="color: #ef4444; font-weight: 700;">1.225x</span>
        </div>
      </div>

      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; text-align: center;">
          <thead>
            <tr style="background: rgba(255,255,255,0.05); border-bottom: 1px solid var(--border-color);">
              <th style="padding: 6px;">ID</th>
              <th style="padding: 6px;">Coordinates</th>
              <th style="padding: 6px;">True Label $y_i$</th>
              <th style="padding: 6px;">Stump 1 Pred $\\hat{y}_i$</th>
              <th style="padding: 6px;">Initial Weight $w_i^{(1)}$</th>
              <th style="padding: 6px;">Updated Weight $w_i^{(2)}$</th>
            </tr>
          </thead>
          <tbody id="adaboost-table-body"></tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Tab 2: Bagging -->
  <div id="ensemble-tab-bagging" style="display: none;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px;">
      <h5 style="color: #38bdf8; margin-bottom: 8px;">Bootstrap Sampling (Sampling with Replacement) & Out-of-Bag (OOB)</h5>
      <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px;">
        Click below to simulate drawing $N = 1,000$ samples with replacement from a population of $N = 1,000$. Notice how the unique sample fraction converges to $1 - 1/e \\approx 63.2\\%$, leaving $36.8\\%$ Out-of-Bag:
      </p>

      <div style="margin-bottom: 14px;">
        <button id="btn-draw-bootstrap" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.85rem;"><i data-lucide="refresh-cw"></i> Draw Bootstrap Sample (N=1000)</button>
      </div>

      <div style="margin-bottom: 8px; font-size: 0.85rem;">
        <strong>Unique In-Bag Samples:</strong> <span id="bootstrap-val-unique" style="color: #34d399; font-weight: 700;">--</span>
      </div>
      <div style="background: rgba(255,255,255,0.1); height: 12px; border-radius: 6px; overflow: hidden; margin-bottom: 14px;">
        <div id="bootstrap-bar-unique" style="background: #34d399; height: 100%; width: 63.2%; transition: width 0.3s;"></div>
      </div>

      <div style="margin-bottom: 8px; font-size: 0.85rem;">
        <strong>Out-of-Bag (OOB) Samples (Free Validation Set):</strong> <span id="bootstrap-val-oob" style="color: #f59e0b; font-weight: 700;">--</span>
      </div>
      <div style="background: rgba(255,255,255,0.1); height: 12px; border-radius: 6px; overflow: hidden;">
        <div id="bootstrap-bar-oob" style="background: #f59e0b; height: 100%; width: 36.8%; transition: width 0.3s;"></div>
      </div>

      <div class="callout mt-3" style="font-size: 0.8rem; background: rgba(56, 189, 248, 0.05); border-left: 3px solid #38bdf8; padding: 10px; border-radius: 4px;">
        <strong>Mathematical Proof:</strong> Probability of an item NOT being chosen in 1 draw is $1 - \\frac{1}{N}$. For $N$ independent draws, probability of never being picked is $\\left(1 - \\frac{1}{N}\\right)^N$. In the limit as $N \\to \\infty$, $\\lim_{N\\to\\infty} \\left(1 - \\frac{1}{N}\\right)^N = \\frac{1}{e} \\approx 0.3679$ ($36.8\\%$).
      </div>
    </div>
  </div>

  <!-- Tab 3: Stacking -->
  <div id="ensemble-tab-stacking" style="display: none;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px;">
      <h5 style="color: #34d399; margin-bottom: 8px;">Stacking Generalization (Level-0 Base Learners &rarr; Level-1 Meta-Learner)</h5>
      <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px;">
        Unlike Bagging and Boosting which use homogeneous base models, Stacking leverages heterogeneous learners to combine diverse decision surfaces:
      </p>

      <div class="grid-2-col" style="gap: 14px;">
        <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px; border-left: 3px solid #38bdf8; font-size: 0.82rem;">
          <strong style="color: #38bdf8;">Level-0 Base Learners:</strong>
          <ul style="padding-left: 18px; margin-top: 6px; color: var(--text-secondary);">
            <li><strong>Model 1: k-NN ($k=5$)</strong> &mdash; captures local manifold topology</li>
            <li><strong>Model 2: SVM (RBF kernel)</strong> &mdash; constructs maximum-margin boundary</li>
            <li><strong>Model 3: Random Forest (100 trees)</strong> &mdash; captures non-linear feature interactions</li>
            <li><strong>Model 4: MLP (2-layer neural net)</strong> &mdash; projects continuous latent representations</li>
          </ul>
        </div>

        <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px; border-left: 3px solid #34d399; font-size: 0.82rem;">
          <strong style="color: #34d399;">Level-1 Meta-Learner:</strong>
          <p style="margin-top: 6px; color: var(--text-secondary);">
            <strong>Logistic Regression / Shallow Neural Net</strong> trained on Out-of-Fold (OOF) cross-validation predictions.
          </p>
          <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; font-family: monospace; font-size: 0.78rem; color: #fbbf24;">
            Input: [P_knn, P_svm, P_rf, P_mlp]<br>
            Output: Final Calibrated P(y=1|x)
          </div>
          <p style="font-size: 0.78rem; color: #94a3b8; margin-top: 6px;">
            <em>Critical Exam Rule:</em> You MUST use out-of-fold cross-validation when creating Level-1 training inputs, otherwise the meta-learner severely overfits to base model training leakages!
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: RS Escape Room & Master Architecture Selector",
      subtitle: "Solving the 5 official RS course puzzles and architecting multi-course production systems",
      badge: "Grand Synthesis",
      content: `
<!-- Part A: RS Day 5 Escape Room -->
<div class="lesson-card">
  <h3><i data-lucide="key"></i> The Official RS Day 5 Escape Room Challenge</h3>
  <p style="font-size: 0.9rem; color: var(--text-secondary);">
    In Reasoning Systems (RS Day 5), students are locked inside the AI Reasoning Vault and must solve 5 multi-paradigm chambers to escape. Solve each puzzle below to unlock all 5 keys:
  </p>

  <div id="escape-room-keys-bar" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;"></div>
  <div id="escape-room-status" style="margin-bottom: 14px;"></div>
  <div id="escape-room-container"></div>
</div>

<!-- Part B: Master Architecture Selector -->
<div class="lesson-card mt-4">
  <h4><i data-lucide="compass"></i> Master Architecture Scenario Selector</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    In NUS ISS exams, the ultimate high-mark question asks you to <em>"Design and justify an end-to-end intelligent system architecture for an industry scenario combining PRS and IRS modules"</em>. Explore the 6 definitive blueprints below:
  </p>

  <div style="margin-bottom: 14px;">
    <label style="font-size: 0.85rem; margin-right: 8px; font-weight: 600;">Select Industry Scenario:</label>
    <select id="arch-scenario-select" class="form-select" style="max-width: 520px; display: inline-block; padding: 6px 12px; font-size: 0.85rem;">
      <option value="arch-1">1. Hospital ICU Early Sepsis Warning Engine (ISSM + PRMLS + RS)</option>
      <option value="arch-2">2. High-Speed Train Bearing Fault Diagnostics (ISSM + PSUPR + PRMLS)</option>
      <option value="arch-3">3. E-Commerce Real-Time Personalized Recommender (RS + CS + PRMLS)</option>
      <option value="arch-4">4. Autonomous Reverse Vending Machine (RVM) Recycler (ISSM + PSUPR + RS)</option>
      <option value="arch-5">5. Pharmaceutical Drug-Target Interaction Discovery (MR + RS + PRMLS)</option>
      <option value="arch-6">6. Smart City Autonomous Delivery Fleet Router (MR + RS + CS)</option>
    </select>
  </div>

  <div id="arch-blueprint-display"></div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Paper 1 (PRS) Full Exam Formula & Trap Bible",
      subtitle: "The definitive 1-page cheat sheet for Problem Solving Using PR, Intelligent Sensing Systems & PRMLS",
      badge: "PRS Bible",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid var(--accent-cyan);">
  <div class="card-icon" style="color: var(--accent-cyan);"><i data-lucide="book-open"></i></div>
  <div class="card-body">
    <h3>Paper 1 (Pattern Recognition Systems) Master Exam Bible</h3>
    <p class="lead-text">
      Everything you need to know for Paper 1 condensed into rigorous formulas, decision matrices, and examiner trap decoders.
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <!-- Module 1: PSUPR -->
  <div class="lesson-card" style="border-top: 3px solid #38bdf8;">
    <h4 style="color: #38bdf8;">1. Problem Solving Using PR (PSUPR)</h4>
    <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
      <p><strong>Naive Bayes Laplace Smoothing:</strong><br>
      $P(w_i \\mid c) = \\frac{\\text{count}(w_i, c) + 1}{\\sum_{w} \\text{count}(w, c) + |V|}$. You MUST add $|V|$ to the denominator!</p>

      <p><strong>k-NN Distance Metrics:</strong><br>
      Euclidean: $d(x, y) = \\sqrt{\\sum (x_i - y_i)^2}$. Manhattan: $d(x, y) = \\sum |x_i - y_i|$.<br>
      <em>Trap:</em> Normalization is mandatory! Without min-max or z-score normalization, features with large units dominate.</p>

      <p><strong>ROC Curve & Cumulative Lift:</strong><br>
      $\\text{TPR} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}}$, $\\text{FPR} = \\frac{\\text{FP}}{\\text{FP} + \\text{TN}}$.<br>
      $\\text{Lift at Decile 1} = \\frac{\\text{Hit Rate in Top 10\\%}}{\\text{Overall Population Response Rate}}$.</p>

      <p><strong>Marr's 3 Levels of Vision:</strong><br>
      1) Primal Sketch (edges/contours), 2) 2.5D Sketch (viewer-centered depth/surface orientation), 3) 3D Model Representation (object-centered volume).</p>
    </div>
  </div>

  <!-- Module 2: ISSM -->
  <div class="lesson-card" style="border-top: 3px solid #34d399;">
    <h4 style="color: #34d399;">2. Intelligent Sensing Systems (ISSM)</h4>
    <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
      <p><strong>Nyquist-Shannon Sampling:</strong><br>
      $f_s > 2 f_{\\max}$. If $f_s \\le 2 f_{\\max}$, high frequencies fold back as aliasing artifacts. Always place an analog low-pass anti-aliasing filter BEFORE the ADC.</p>

      <p><strong>Baseline Correction (arPLS):</strong><br>
      Asymmetric reweighting penalizes points above baseline with weight $w_i \\approx 0$, while valley baseline points get $w_i = 1$. Prevents peak distortion.</p>

      <p><strong>Dynamic Time Warping (DTW):</strong><br>
      Accumulated cost matrix $D(i, j) = d(i, j) + \\min(D(i-1, j), D(i, j-1), D(i-1, j-1))$. Sakoe-Chiba band $|i - j| \\le w$ limits warping window and accelerates calculation.</p>

      <p><strong>Sensor Fusion (Early vs Late):</strong><br>
      Early: concatenates raw vectors (sensitive to missing data). Late: fuses individual sensor classifier decisions/probabilities (fault-tolerant & modular).</p>
    </div>
  </div>
</div>

<div class="lesson-card mt-4" style="border-top: 3px solid #f59e0b;">
  <h4 style="color: #f59e0b;">3. Pattern Recognition & Machine Learning Systems (PRMLS)</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
    <div>
      <strong style="color: #f59e0b;">Decision Trees:</strong><br>
      $H(S) = -\\sum p_i \\log_2 p_i$.<br>
      $\\text{Gain}(S, A) = H(S) - \\sum \\frac{|S_v|}{|S|} H(S_v)$.<br>
      $\\text{GainRatio}(A) = \\frac{\\text{Gain}(S, A)}{\\text{SplitInfo}(A)}$. GainRatio penalizes attributes with large numbers of unique values (e.g. ID numbers).
    </div>

    <div>
      <strong style="color: #38bdf8;">SVM & Dimensionality:</strong><br>
      Soft-Margin: $\\min \\frac{1}{2}\\|w\\|^2 + C \\sum \\xi_i$. High $C$ = hard margin (overfitting).<br>
      RBF kernel: $\\exp(-\\gamma \\|x-x'\\|^2)$. High $\\gamma$ = narrow bells.<br>
      PCA: unsupervised max total variance.<br>
      LDA: supervised max $\\frac{w^T S_B w}{w^T S_W w}$.
    </div>

    <div>
      <strong style="color: #34d399;">Neural Networks & CNNs:</strong><br>
      Output size: $\\lfloor\\frac{W - F + 2P}{S}\\rfloor + 1$.<br>
      Parameters per conv layer: $K \\times (F \\times F \\times C_{\\text{in}} + 1)$.<br>
      ResNet skip: $H(x) = F(x) + x \\implies \\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H}(\\frac{\\partial F}{\\partial x} + 1)$. The $+1$ prevents vanishing gradients!
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Paper 2 (IRS) Full Exam Formula & Trap Bible",
      subtitle: "The definitive 1-page cheat sheet for Machine Reasoning, Cognitive Systems & Reasoning Systems",
      badge: "IRS Bible",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid var(--accent-gold);">
  <div class="card-icon" style="color: var(--accent-gold);"><i data-lucide="shield-check"></i></div>
  <div class="card-body">
    <h3>Paper 2 (Intelligent Reasoning Systems) Master Exam Bible</h3>
    <p class="lead-text">
      Everything you need to know for Paper 2 condensed into rigorous formulas, decision matrices, and examiner trap decoders.
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <!-- Module 1: MR -->
  <div class="lesson-card" style="border-top: 3px solid #fbbf24;">
    <h4 style="color: #fbbf24;">1. Machine Reasoning (MR)</h4>
    <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
      <p><strong>A* Search:</strong><br>
      $f(n) = g(n) + h(n)$. Admissible: $h(n) \\le h^*(n)$ (never overestimates). Consistent: $h(n) \\le c(n, a, n') + h(n')$ (triangle inequality). Consistency guarantees optimal graph search without re-expanding closed nodes.</p>

      <p><strong>CSP Backtracking:</strong><br>
      Minimum Remaining Values (MRV): pick variable with fewest legal values ('fail-first'). Degree Heuristic: break ties with most constraints on other unassigned variables. Forward Checking: prune domains of adjacent variables.</p>

      <p><strong>BBN d-Separation:</strong><br>
      Chain ($A \\to B \\to C$): blocked when $B$ is observed.<br>
      Fork ($A \\leftarrow B \\to C$): blocked when $B$ is observed.<br>
      Collider ($A \\to B \\leftarrow C$): blocked when $B$ is UNCONSTRAINED. Conditioning on $B$ activates the path ('explaining away')!</p>

      <p><strong>Knowledge Graphs (TransE):</strong><br>
      Energy: $f(h, r, t) = -\\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\|$. Fails on symmetric relations (forces $\\mathbf{r}=\\mathbf{0}$) and 1-to-$N$ relations.</p>
    </div>
  </div>

  <!-- Module 2: CS -->
  <div class="lesson-card" style="border-top: 3px solid #c084fc;">
    <h4 style="color: #c084fc;">2. Cognitive Systems (CS)</h4>
    <div style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
      <p><strong>Case-Based Reasoning (CBR 4R Cycle):</strong><br>
      1. RETRIEVE similar historical cases using weighted Euclidean/similarity metric.<br>
      2. REUSE retrieved past solution.<br>
      3. REVISE adapted solution based on domain constraints or simulation.<br>
      4. RETAIN validated experience in case memory.</p>

      <p><strong>ACT-R & SOAR Memory Partitions:</strong><br>
      Declarative: Episodic (events with time/space tags) + Semantic (concepts/facts).<br>
      Procedural: Production Rules (IF condition THEN action) executed via pattern matching.</p>

      <p><strong>Word Embeddings & Vector Space:</strong><br>
      Word2Vec Skip-gram: predicts context tokens given target word. CBOW: predicts target word given context. Semantic composition: $\\mathbf{v}(\\text{King}) - \\mathbf{v}(\\text{Man}) + \\mathbf{v}(\\text{Woman}) \\approx \\mathbf{v}(\\text{Queen})$.</p>

      <p><strong>ReAct Autonomous Agent Framework:</strong><br>
      Thought &rarr; Action &rarr; Observation. Factual observations ground reasoning and break hallucination loops.</p>
    </div>
  </div>
</div>

<div class="lesson-card mt-4" style="border-top: 3px solid #f87171;">
  <h4 style="color: #f87171;">3. Reasoning Systems (RS)</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
    <div>
      <strong style="color: #f87171;">Rule Engines:</strong><br>
      Forward Chaining: data-driven (facts &rarr; conclusions).<br>
      Backward Chaining: goal-driven (hypotheses &rarr; sub-goals &rarr; required facts).<br>
      Conflict Resolution: Refraction (no re-firing on same data), Specificity (more tests = higher priority), Recency.
    </div>

    <div>
      <strong style="color: #38bdf8;">Genetic Algorithms:</strong><br>
      Roulette Selection: $p_i = \\frac{f_i}{\\sum f}$. Cumulative $C_i = \\sum p_k$.<br>
      Permutations (TSP): Order Crossover (OX) or PMX to avoid duplicate cities.<br>
      Inversion/Swap mutation.<br>
      Elitism: preserve top individual untouched.
    </div>

    <div>
      <strong style="color: #34d399;">Recommenders & Association:</strong><br>
      Mean-Centered Pearson CF: $\\hat{r}_{u, i} = \\bar{r}_u + \\frac{\\sum \\text{sim}(u, v)(r_{v, i} - \\bar{r}_v)}{\\sum |\\text{sim}(u, v)|}$.<br>
      Apriori: Support $\\frac{\\text{count}(X \\cup Y)}{N}$, Confidence $\\frac{\\text{count}(X \\cup Y)}{\\text{count}(X)}$, Lift $\\frac{\\text{Conf}}{P(Y)}$.
    </div>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: NUS ISS Workshop Code Lab",
      subtitle: "Production Python implementations of Random Forest, AdaBoost and Stacking Ensembles",
      badge: "Code Labs",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="code"></i> Workshop Lab 1: AdaBoost from Scratch with Decision Stumps</h3>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    Notice how AdaBoost computes the weighted error $\\epsilon$, assigns the classifier voting weight $\\alpha$, and inflates misclassified sample weights.
  </p>

<pre><code class="language-python">import numpy as np

class DecisionStump:
    def __init__(self):
        self.polarity = 1
        self.feature_idx = None
        self.threshold = None
        self.alpha = None

    def predict(self, X):
        n_samples = X.shape[0]
        X_column = X[:, self.feature_idx]
        predictions = np.ones(n_samples)
        if self.polarity == 1:
            predictions[X_column < self.threshold] = -1
        else:
            predictions[X_column > self.threshold] = -1
        return predictions

class AdaBoost:
    def __init__(self, n_clf=10):
        self.n_clf = n_clf
        self.clfs = []

    def fit(self, X, y):
        n_samples, n_features = X.shape
        w = np.full(n_samples, (1 / n_samples))

        for _ in range(self.n_clf):
            clf = DecisionStump()
            min_error = float('inf')

            for feat_i in range(n_features):
                X_column = X[:, feat_i]
                thresholds = np.unique(X_column)
                for threshold in thresholds:
                    for polarity in [1, -1]:
                        predictions = np.ones(n_samples)
                        if polarity == 1:
                            predictions[X_column < threshold] = -1
                        else:
                            predictions[X_column > threshold] = -1

                        error = np.sum(w[y != predictions])
                        if error < min_error:
                            min_error = error
                            clf.polarity = polarity
                            clf.threshold = threshold
                            clf.feature_idx = feat_i

            EPS = 1e-10
            clf.alpha = 0.5 * np.log((1.0 - min_error + EPS) / (min_error + EPS))
            predictions = clf.predict(X)
            w *= np.exp(-clf.alpha * y * predictions)
            w /= np.sum(w) # Normalize
            self.clfs.append(clf)

    def predict(self, X):
        clf_preds = [clf.alpha * clf.predict(X) for clf in self.clfs]
        return np.sign(np.sum(clf_preds, axis=0))
</code></pre>
</div>

<div class="lesson-card mt-4">
  <h3><i data-lucide="code"></i> Workshop Lab 2: Stacking Classifier with Out-of-Fold Meta-Learner</h3>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    Demonstrating the exact Scikit-Learn pipeline from PRMLS Day 5 workshop (<code>D5_StackingNNEnsemble.ipynb</code>) on bank note authentication.
  </p>

<pre><code class="language-python">from sklearn.ensemble import StackingClassifier, RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# 1. Define Heterogeneous Base Learners
base_learners = [
    ('knn', KNeighborsClassifier(n_neighbors=5)),
    ('svm', SVC(kernel='rbf', probability=True, random_state=42)),
    ('rf', RandomForestClassifier(n_estimators=100, max_features='sqrt', random_state=42))
]

# 2. Define Level-1 Meta Learner
meta_learner = LogisticRegression()

# 3. Assemble Stacking Ensemble with 5-Fold Cross-Validation
stacking_clf = StackingClassifier(
    estimators=base_learners,
    final_estimator=meta_learner,
    cv=5, # Enforces Out-of-Fold training for meta-learner!
    n_jobs=-1
)

# Fit on training data
stacking_clf.fit(X_train, y_train)
y_pred = stacking_clf.predict(X_test)
print(classification_report(y_test, y_pred))
</code></pre>
</div>
`
    },
            {
      id: "level-6",
      title: "Level 6: Official Nov 2026 Sample Papers (IRS & PRS) — Complete A+ Solutions",
      subtitle: "Question-by-question model answers, math derivations, architecture blueprints & examiner rubrics for ISY5001 (50m) & ISY5002 (40m)",
      badge: "Official Sample Papers",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #10b981;">
  <div class="card-icon" style="color: #10b981;"><i data-lucide="file-check"></i></div>
  <div class="card-body">
    <h3>Official Nov 2026 Sample Exam Papers — Complete Step-by-Step A+ Solutions</h3>
    <p class="lead-text">
      Below are the complete, exam-ready solutions for both official sample papers in your <code>Sample Papers/</code> folder:
      <strong>ISY5001 Intelligent Reasoning Systems (50 Marks, 3 Questions)</strong> and <strong>ISY5002 Pattern Recognition Systems (40 Marks, 2 Questions)</strong>.
      Every sub-question includes the exact formula, step-by-step calculation, system architecture diagram, and examiner marking rubric.
    </p>
  </div>
</div>

<!-- ===================================================================== -->
<!-- PAPER 1: ISY5002 PATTERN RECOGNITION SYSTEMS (40 MARKS)               -->
<!-- ===================================================================== -->
<div class="lesson-card mt-4" style="border-top: 4px solid #38bdf8;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <h3 style="margin:0; color:#38bdf8;">📘 PAPER 1: ISY5002 Pattern Recognition Systems (Nov 2026 Sample Paper — 40 Marks)</h3>
    <span class="badge-tech">2 Questions • 20 Marks Each</span>
  </div>
  <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:8px;">
    <strong>Open-Book Exam Strategy:</strong> Always tie technical metrics (Recall, Precision, PCA variance, CNN parameter count) back to the <em>business objective</em> stated in the scenario.
  </p>

  <hr style="border-color:var(--border-color); margin:16px 0;">

  <!-- PRS QUESTION 1 (20 MARKS) -->
  <h4 style="color:#38bdf8; margin-bottom:10px;">Question 1: Online Bookstore Purchasing Intention (20 Marks)</h4>
  <p style="font-size:0.84rem; color:var(--text-secondary);">
    <strong>Scenario Summary:</strong> Dataset <code>online_shoppers_intention.csv</code> with $N = 12,330$ sessions ($84.5\\%$ <code>False</code> = $10,422$ non-buyers; $15.5\\%$ <code>True</code> = $1,908$ buyers) across 10 numerical and 8 categorical attributes.
  </p>

  <div class="grid-2-col mt-3" style="gap:16px;">
    <!-- Q1a -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #38bdf8;">
      <h5 style="margin:0 0 8px 0; color:#38bdf8;">Q1(a) Decision Tree Analysis, Imbalance Critique &amp; Evaluation (4 Marks)</h5>
      <ol style="margin:0; padding-left:18px; font-size:0.83rem; line-height:1.55;">
        <li><strong>Tree Interpretation &amp; Business Alignment:</strong>
          <br>• <strong>Root Split (<code>PageValue &lt; 1</code>):</strong> Covers $80\\%$ of all sessions; $96\\%$ do <em>not</em> buy (<code>False</code>).
          <br>• <strong>Right Branch (<code>PageValue &ge; 1</code>, $20\\%$ of traffic):</strong> Splits on <code>BounceRate</code>:
          <br>&nbsp;&nbsp;– <code>BounceRate &lt; 81e-5</code> ($5\\%$ of sessions): <strong>$74\\%$ buy (<code>True</code>)</strong> — high-intent shoppers!
          <br>&nbsp;&nbsp;– <code>BounceRate &ge; 81e-5</code> ($15\\%$ of sessions): $54\\%$ False vs $46\\%$ True — hesitant cart abandoners (prime target for real-time discount pop-ups).</li>
        <li><strong>Key Problems Identified:</strong>
          <br>• <strong>Severe Class Imbalance ($84.5\\%$ vs $15.5\\%$):</strong> Standard accuracy-driven pruning collapses branches where <code>False</code> slightly outnumbers <code>True</code> (e.g., the $54\\%/46\\%$ node defaults to <code>False</code>, missing nearly half of buyers!).
          <br>• <strong>Underfitting / Feature Neglect:</strong> Only 2 of 18 features (<code>PageValue</code>, <code>BounceRate</code>) are used; all 16 other behavioral and temporal signals are ignored.
          <br>• <strong>Look-Ahead Bias in <code>PageValue</code>:</strong> <code>PageValue</code> is historically computed near checkout pages, making it a lagging indicator rather than an early-session predictor.</li>
        <li><strong>Improvements &amp; Evaluation Metrics:</strong>
          <br>• <em>Fix Imbalance:</em> Apply <strong>SMOTE</strong> on the training split, or set <strong>cost-sensitive class weights</strong> ($w_{\\text{True}} \\approx \\frac{84.5}{15.5} \\approx 5.45$).
          <br>• <em>Better Metrics:</em> Do <strong>not</strong> use Accuracy (a dummy all-<code>False</code> model gets $84.5\\%$). Evaluate using <strong>Minority-Class Recall (Sensitivity)</strong>, <strong>F1-Score</strong>, <strong>PR-AUC / ROC-AUC</strong>, <strong>Cumulative Lift / Gain Chart</strong>, and an <strong>Expected Profit Matrix</strong>.</li>
      </ol>
    </div>

    <!-- Q1b -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h5 style="margin:0 0 8px 0; color:#10b981;">Q1(b) SVM vs. Neural Network Confusion Matrix Comparison (3 Marks)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Test Set Breakdown ($N_{\\text{test}} = 3,699$):</strong> Actual <code>0 (False)</code> $= 3,150$; Actual <code>1 (True)</code> $= 549$.</p>
        <table class="styled-table" style="width:100%; font-size:0.78rem; margin-bottom:8px;">
          <thead>
            <tr><th>Metric</th><th>Formula</th><th>SVM</th><th>Neural Network (NN)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Overall Accuracy</strong></td><td>$\\frac{TP_0 + TN_1}{3699}$</td><td>$\\frac{3078+237}{3699} = \\mathbf{89.62\\%}$</td><td>$\\frac{3029+288}{3699} = \\mathbf{89.67\\%}$</td></tr>
            <tr><td><strong>Non-Buyer Recall (Class 0)</strong></td><td>$\\frac{TP_0}{3150}$</td><td>$\\frac{3078}{3150} = \\mathbf{97.71\\%}$</td><td>$\\frac{3029}{3150} = 96.16\\%$</td></tr>
            <tr><td><strong>Buyer Recall / Sensitivity (Class 1)</strong></td><td>$\\frac{TN_1}{549}$</td><td>$\\frac{237}{549} = 43.17\\%$</td><td>$\\frac{288}{549} = \\mathbf{52.46\\%}$</td></tr>
            <tr><td><strong>Buyer Precision (Class 1)</strong></td><td>$\\frac{TN_1}{TN_1 + FN_0}$</td><td>$\\frac{237}{237+72} = \\mathbf{76.70\\%}$</td><td>$\\frac{288}{288+121} = 70.42\\%$</td></tr>
            <tr><td><strong>Buyer F1-Score (Class 1)</strong></td><td>$\\frac{2 P_1 R_1}{P_1 + R_1}$</td><td>$0.5524$</td><td>$\\mathbf{0.6013}$</td></tr>
          </tbody>
        </table>
        <p style="margin:0;">
          <strong>Business Alignment Verdict:</strong> Even though SVM and NN have virtually identical overall accuracy ($89.62\\%$ vs $89.67\\%$), <strong>Neural Network is significantly better for the bookstore</strong> because it captures <strong>51 more actual buyers</strong> ($52.46\\%$ vs $43.17\\%$ Buyer Recall, F1 $= 0.6013$ vs $0.5524$). Missing a buyer costs the full book profit margin, whereas a false alarm (offering a small promo/recommendation to a non-buyer) has negligible cost!
        </p>
      </div>
    </div>

    <!-- Q1c -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h5 style="margin:0 0 8px 0; color:#f59e0b;">Q1(c) AdaBoost Variable Importance vs. Single Decision Tree (3 Marks)</h5>
      <ol style="margin:0; padding-left:18px; font-size:0.83rem; line-height:1.55;">
        <li><strong>Key Observation:</strong> In Q1(a)'s single tree, <code>PageValues</code> was #1 and <code>BounceRates</code> was #2. In AdaBoost (Table 2), <code>ProductRelated</code> ($34.7\\%$), <code>Informational_Duration</code> ($17.8\\%$), <code>Browser</code> ($16.5\\%$), and <code>SpecialDay</code> ($13.5\\%$) dominate, while <code>PageValues</code> drops to 8th ($2.49\\%$) and <code>BounceRates</code> to $0\\%$!</li>
        <li><strong>Algorithmic Explanation:</strong>
          <br>• A <em>single greedy tree</em> stops after 2 splits because <code>PageValues</code> alone handles the easy majority cases.
          <br>• <em>AdaBoost</em> sequentially reweights misclassified examples ($w_i^{(t+1)} = w_i^{(t)} e^{-\\alpha_t y_i h_t(\\mathbf{x}_i)}$). Once the first stump splits on <code>PageValues</code>, all remaining weight concentrates on the <strong>hard borderline sessions</strong> (e.g., users with low <code>PageValues</code> who still buy, or high <code>PageValues</code> who abandon), forcing subsequent weak learners to exploit deeper behavioral depth (<code>ProductRelated</code>, <code>Informational_Duration</code>, <code>SpecialDay</code>).</li>
        <li><strong>How to Use for Feature Selection:</strong> Rank features by cumulative weighted impurity reduction across all boosted trees, or run <strong>Permutation Importance</strong> on the validation set, and drop zero-importance variables (<code>Weekend</code>, <code>TrafficType</code>, <code>OperatingSystems</code>) to reduce noise and training latency.</li>
      </ol>
    </div>

    <!-- Q1d -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #c084fc;">
      <h5 style="margin:0 0 8px 0; color:#c084fc;">Q1(d) Sequential Clickstream Model &amp; Multimodal Fusion (4 Marks)</h5>
      <ol style="margin:0; padding-left:18px; font-size:0.83rem; line-height:1.55;">
        <li><strong>Proposed Sequential Model:</strong> Use a <strong>Bidirectional LSTM / GRU</strong> (or <strong>1D-CNN + Transformer Encoder</strong>) to capture temporal transition patterns (e.g., <em>Home $\\to$ Search $\\to$ Product Review $\\to$ Cart</em>).</li>
        <li><strong>Clickstream Data Preparation (4 Steps):</strong>
          <br>• <em>Step Features:</em> At each click step $t$, encode $(\\text{PageCategory}_t, \\text{PageID}_t, \\Delta t_{\\text{dwell}}, \\text{Action}_t)$.
          <br>• <em>Categorical Embedding:</em> Map high-cardinality <code>PageID</code> through a learnable <code>Embedding(V, d_emb)</code> layer; log-transform skewed dwell times $\\log(1 + \\Delta t)$ and Z-score normalize.
          <br>• <em>3D Tensor Formatting:</em> Pad/truncate variable-length sessions to length $T_{\\max}$ (with boolean masking for padded zeros) into tensor shape <code>(N_sessions, T_max, D_step)</code>.</li>
        <li><strong>Combining Sequential + Static Models (2 Architectures):</strong>
          <br>• <em>Option A — Intermediate Feature Fusion (Wide &amp; Deep):</em> Concatenate the final LSTM context vector $\\mathbf{h}_T$ with the static tabular vector $\\mathbf{x}_{\\text{static}}$: $\\mathbf{z} = [\\mathbf{h}_T \\mathbin{\\|} \\mathbf{x}_{\\text{static}}] \\to \\text{Dense}(64, \\text{ReLU}) \\to \\text{Sigmoid}$.
          <br>• <em>Option B — Late Fusion / Stacking Ensemble:</em> Train a Level-1 <strong>Logistic Regression Meta-Learner</strong> on out-of-fold predicted probabilities $[P_{\\text{SVM}}(y=1), P_{\\text{NN}}(y=1), P_{\\text{AdaBoost}}(y=1), P_{\\text{LSTM}}(y=1)]$.</li>
      </ol>
    </div>
  </div>

  <!-- Q1e (Full Width) -->
  <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f43f5e; margin-top:16px;">
    <h5 style="margin:0 0 8px 0; color:#f43f5e;">Q1(e) PCA Output Analysis, Factor Interpretation &amp; Critical Data-Leakage Trap (6 Marks)</h5>
    <div class="grid-2-col" style="gap:16px; font-size:0.83rem; line-height:1.55;">
      <div>
        <strong>(i) How Many Factors to Retain &amp; Justification (3 Marks):</strong>
        <ul style="margin:6px 0 0 0; padding-left:18px;">
          <li><strong>Retain $K = 8$ Principal Components</strong> (or $K = 9$ for an $85\\%$ threshold):
            <br>• At <strong>8 PCs</strong>, Cumulative Proportion of Variance reaches <strong>$80.605\\%$</strong> ($\\ge 80\\%$ standard industry threshold).
            <br>• At <strong>9 PCs</strong>, Cumulative Variance reaches <strong>$85.553\\%$</strong>, after which additional components add $&lt; 4.6\\%$ variance each.</li>
          <li><strong>Kaiser Criterion Check ($\\text{SD} \\ge 1.0$):</strong> Components <strong>PC1 to PC6</strong> have Standard Deviation $\\ge 0.9965$ (Eigenvalue $\\lambda = \\text{SD}^2 \\ge 1.0$, explaining $69.85\\%$ variance), while PC7 ($\\text{SD}=0.755$) and PC8 ($\\text{SD}=0.710$) bring cumulative variance past $80\\%$.</li>
        </ul>
      </div>
      <div>
        <strong>(ii) Factor Meaning &amp; Critical Examiner Traps (3 Marks):</strong>
        <ul style="margin:6px 0 0 0; padding-left:18px;">
          <li><strong>Semantic Interpretation of Top PCs:</strong>
            <br>• <strong>PC1 ($18.96\\%$ var):</strong> <em>Overall Session Depth &amp; Shopping Intensity</em> — strong negative loadings on <code>ProductRelated</code> ($-0.511$), <code>ProductRelated_Duration</code> ($-0.476$), <code>Administrative</code> ($-0.404$), and <code>Informational</code> ($-0.369$).
            <br>• <strong>PC2 ($12.50\\%$ var):</strong> <em>Immediate Disengagement / Bounce Factor</em> — dominated by <code>BounceRates</code> ($-0.700$) and <code>ExitRates</code> ($-0.692$).
            <br>• <strong>PC3 ($9.93\\%$ var):</strong> <em>Technical Platform Profile</em> — dominated by <code>Browser</code> ($+0.691$) and <code>OperatingSystems</code> ($+0.677$).
            <br>• <strong>PC4 ($8.67\\%$ var):</strong> <em>Conversion &amp; Monetization Value</em> — dominated by <code>PageValues</code> ($+0.579$) and <code>Revenue</code> ($+0.534$), opposed by <code>SpecialDay</code> ($-0.464$).</li>
          <li><strong style="color:#f43f5e;">🚨 CRITICAL EXAMINER TRAP #1 (Target Leakage!):</strong> Look at the last row of Table 3 — the target variable <strong><code>Revenue</code></strong> was included inside the PCA matrix ($0.221$ in PC1, $0.534$ in PC4)! You must <strong>NEVER include the ground-truth label $Y$ inside unsupervised feature extraction</strong>, because $Y$ is unknown at test time and leaks the target into the principal components!</li>
          <li><strong style="color:#f59e0b;">🚨 CRITICAL EXAMINER TRAP #2 (Nominal Categoricals in PCA):</strong> Nominal integer codes like <code>Browser</code>, <code>Region</code>, <code>TrafficType</code>, and <code>OperatingSystems</code> were fed directly into PCA as continuous numbers, creating artificial distance geometry (PC3 and PC5 are pure artifacts of categorical IDs). PCA should only be applied to standardized continuous features!</li>
        </ul>
      </div>
    </div>
  </div>

  <hr style="border-color:var(--border-color); margin:20px 0;">

  <!-- PRS QUESTION 2 (20 MARKS) -->
  <h4 style="color:#34d399; margin-bottom:10px;">Question 2: Machinew Robotic E-Waste Sorting System (20 Marks)</h4>

  <div class="grid-2-col mt-3" style="gap:16px;">
    <!-- Q2a (8 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #34d399;">
      <h5 style="margin:0 0 8px 0; color:#34d399;">Q2(a) CNN Architecture Critique &amp; Multi-Head GAP Redesign (8 Marks)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>1. Three Major Flaws in Table 4 CNN ($2,578,982$ Total Params):</strong></p>
        <ul style="margin:0 0 8px 0; padding-left:18px;">
          <li><strong>Flaw A — <code>Flatten</code> to <code>dense_3</code> Parameter Explosion ($93.4\\%$ of network):</strong> <code>flatten_1</code> outputs $14 \\times 14 \\times 48 = 9,408$ features into <code>dense_3(256)</code>, requiring $(9408 + 1) \\times 256 = \\mathbf{2,408,704}$ parameters! Training $2.4\\text{M}$ weights on only $5,000$ images guarantees severe overfitting.</li>
          <li><strong>Flaw B — Combinatorial 918-Class Cartesian Output (<code>dense_5</code>):</strong> Combining $18\\text{ Brands} \\times 17\\text{ Types} \\times 3\\text{ Values} = \\mathbf{918}$ joint classes means each class has on average only $\\frac{5000}{918} \\approx \\mathbf{5.4\\text{ images}}$ (and many combinations have $0$ images!), while ignoring shared visual features across brands and types.</li>
          <li><strong>Flaw C — Unbalanced Backbone Capacity:</strong> The 3 Conv layers have only $19,056$ parameters total ($0.74\\%$ of the network) and lack <code>BatchNormalization</code> or data augmentation to handle uneven lighting/orientations.</li>
        </ul>
        <p style="margin:0 0 6px 0;"><strong>2. Improved Multi-Task GAP CNN Architecture (97.3% Parameter Reduction!):</strong></p>
        <table class="styled-table" style="width:100%; font-size:0.76rem; margin-bottom:6px;">
          <thead>
            <tr><th>Layer</th><th>Output Shape</th><th>Parameter Calculation</th><th>Params</th></tr>
          </thead>
          <tbody>
            <tr><td><code>Conv+Pool Backbone</code></td><td><code>(None, 14, 14, 48)</code></td><td>$320 + 4,640 + 14,096$ (from Table 4)</td><td>$19,056$</td></tr>
            <tr><td><code>GlobalAveragePooling2D</code></td><td><code>(None, 48)</code></td><td>Replaces <code>Flatten(9408)</code>! $0$ params</td><td>$0$</td></tr>
            <tr><td><code>dense_3 (ReLU)</code></td><td><code>(None, 256)</code></td><td>$(48 + 1) \\times 256$</td><td>$12,544$</td></tr>
            <tr><td><code>dropout_1 (0.4)</code></td><td><code>(None, 256)</code></td><td>Regularization</td><td>$0$</td></tr>
            <tr><td><code>dense_4 (ReLU)</code></td><td><code>(None, 128)</code></td><td>$(256 + 1) \\times 128$</td><td>$32,896$</td></tr>
            <tr><td><code>Head 1: Brand (Softmax)</code></td><td><code>(None, 18)</code></td><td>$(128 + 1) \\times 18$</td><td>$2,322$</td></tr>
            <tr><td><code>Head 2: Type (Softmax)</code></td><td><code>(None, 17)</code></td><td>$(128 + 1) \\times 17$</td><td>$2,193$</td></tr>
            <tr><td><code>Head 3: Value (Softmax)</code></td><td><code>(None, 3)</code></td><td>$(128 + 1) \\times 3$</td><td>$387$</td></tr>
            <tr style="border-top:2px solid #34d399; font-weight:700;"><td><strong>TOTAL IMPROVED</strong></td><td>3 Parallel Outputs</td><td>$\\mathcal{L} = \\mathcal{L}_{\\text{Brand}} + \\mathcal{L}_{\\text{Type}} + \\mathcal{L}_{\\text{Value}}$</td><td><strong>69,398</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Q2b (4 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #38bdf8;">
      <h5 style="margin:0 0 8px 0; color:#38bdf8;">Q2(b) Deep Reinforcement Learning (DRL) for Robotic Pick-and-Place (4 Marks)</h5>
      <ol style="margin:0; padding-left:18px; font-size:0.83rem; line-height:1.55;">
        <li><strong>(i) Three Essential Reward Function Factors:</strong>
          <br>$$R_t = +w_1 R_{\\text{grasp\\_sort}} - w_2 P_{\\text{collision}} - w_3 P_{\\text{pose\\_time}}$$
          <br>1. <strong>Task Completion &amp; Grasp Reward ($+R_{\\text{grasp\\_sort}}$):</strong> Positive reward for stably grasping an overlapping e-waste item and depositing it into the correct bin matching its CNN-predicted Type/Value.
          <br>2. <strong>Collision Avoidance Penalty ($-P_{\\text{collision}}$):</strong> Large negative penalty if the robotic arm/gripper collides with the conveyor belt, bin walls, or adjacent components.
          <br>3. <strong>Joint Pose &amp; Cycle-Time Penalty ($-P_{\\text{pose\\_time}}$):</strong> Small negative step penalty for invalid/singular inverse-kinematics joint configurations, dropped objects, or slow trajectory execution.</li>
        <li><strong>(ii) DRL System Architecture Blueprint:</strong>
          <br><code>Overhead RGB-D Camera + Joint Encoders</code> $\\to$ <strong>State $s_t$</strong> (6D object pose + depth map + joint angles) $\\to$ <strong>Actor-Critic DRL Policy Network (PPO / SAC)</strong> $\\to$ <strong>Action $a_t$</strong> ($\\Delta \\theta_{1..6}$ joint velocities + gripper force) $\\to$ <strong>Environment</strong> $\\to$ <strong>Reward Calculator $R_t$ + Replay Buffer</strong>.</li>
        <li><strong>(iii) Preventing Physical Collisions During Training:</strong>
          <br>Train the DRL agent inside a <strong>3D Physics Digital Twin Simulator</strong> (e.g., NVIDIA Isaac Gym / Gazebo / PyBullet) with <strong>Domain Randomization</strong> (varying friction, mass, lighting, object pile geometry), plus a hard-coded <strong>Control Barrier / Safety Shield</strong> limiting joint torque and workspace bounds before transferring (<em>Sim-to-Real</em>) to the physical conveyor!</li>
      </ol>
    </div>

    <!-- Q2c (4 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h5 style="margin:0 0 8px 0; color:#f59e0b;">Q2(c) Critique of Vibration Anomaly Detection Proposal (4 Marks)</h5>
      <ol style="margin:0; padding-left:18px; font-size:0.83rem; line-height:1.55;">
        <li><strong>Challenge 1 — Extreme Class Imbalance (3,000 Normal vs. Only 2 Abnormal Sequences):</strong>
          <br>• <em>Why Binary MLP Fails:</em> With $3,000$ Normal ($99.93\\%$) vs $2$ Abnormal ($0.067\\%$) samples, a supervised binary neural network will either predict <code>Normal</code> $100\\%$ of the time or memorize the exact 2 fault instances without generalizing to unseen faults.
          <br>• <em>Recommended Solution:</em> Formulate as <strong>Unsupervised / One-Class Anomaly Detection</strong>! Train an <strong>Autoencoder</strong> (or <strong>One-Class SVM / Isolation Forest</strong>) <em>exclusively on the 3,000 Normal sequences</em>, and flag an anomaly whenever reconstruction error $\\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|_2^2 &gt; \\tau$.</li>
        <li><strong>Challenge 2 — Feature Scale Mismatch &amp; Loss of Temporal Localization (Fig. 1 &amp; Table 5):</strong>
          <br>• <em>Why Raw 30D Summary Vector Fails:</em> In Table 5, features span wildly different scales (e.g., <code>Max-Min</code> $= 20.69$ vs <code>Mean</code> $= -0.00018$), so unnormalized inputs will saturate MLP weights. Furthermore, Figure 1 shows the abnormal vibration occurs transiently between <strong>$t = 1\\text{s}$ and $t = 3\\text{s}$</strong>; global 5-second statistics dilute this localized burst!
          <br>• <em>Recommended Solution:</em> Apply <strong>Z-score standardization</strong> ($z = \\frac{x-\\mu}{\\sigma}$ fit on normal data) and compute features over <strong>short overlapping sliding windows (STFT / Wavelet packets)</strong> or feed the sequence into a <strong>1D-CNN / LSTM Autoencoder</strong>.</li>
      </ol>
    </div>

    <!-- Q2d (4 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h5 style="margin:0 0 8px 0; color:#10b981;">Q2(d) Naive Bayes Hand-Calculation on Table 6 (4 Marks)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Query Input:</strong> $\\mathbf{x} = (\\text{Vibration} = \\text{Fair}, \\; \\text{Acoustic} = \\text{Low})$ across $N = 9$ maintenance records.</p>
        <ol style="margin:0; padding-left:18px;">
          <li><strong>Step 1 — Class Priors $P(C_k)$:</strong>
            <br>• $P(\\text{Carryback}) = \\frac{5}{9} \\approx 0.5556$ (Records 1, 2, 3, 7, 8)
            <br>• $P(\\text{Mistracking}) = \\frac{4}{9} \\approx 0.4444$ (Records 4, 5, 6, 9)</li>
          <li><strong>Step 2 — Class-Conditional Likelihoods $P(x_j \\mid C_k)$:</strong>
            <br>• Given <code>Carryback</code> ($5$ rows):
            <br>&nbsp;&nbsp;$P(\\text{Vib}=\\text{Fair} \\mid \\text{Carryback}) = \\frac{1}{5} = 0.20$ (Record 7)
            <br>&nbsp;&nbsp;$P(\\text{Acoust}=\\text{Low} \\mid \\text{Carryback}) = \\frac{3}{5} = 0.60$ (Records 3, 7, 8)
            <br>• Given <code>Mistracking</code> ($4$ rows):
            <br>&nbsp;&nbsp;$P(\\text{Vib}=\\text{Fair} \\mid \\text{Mistracking}) = \\frac{2}{4} = 0.50$ (Records 6, 9)
            <br>&nbsp;&nbsp;$P(\\text{Acoust}=\\text{Low} \\mid \\text{Mistracking}) = \\frac{2}{4} = 0.50$ (Records 6, 9)</li>
          <li><strong>Step 3 — Posterior Score &amp; Classification Decision:</strong>
            <br>• $S(\\text{Carryback}) = \\frac{5}{9} \\times \\frac{1}{5} \\times \\frac{3}{5} = \\frac{3}{45} = \\frac{1}{15} \\approx \\mathbf{0.0667}$
            <br>• $S(\\text{Mistracking}) = \\frac{4}{9} \\times \\frac{2}{4} \\times \\frac{2}{4} = \\frac{1}{9} \\approx \\mathbf{0.1111}$
            <br>• <strong>Normalized Posterior:</strong> $P(\\text{Mistracking} \\mid \\mathbf{x}) = \\frac{1/9}{1/9 + 1/15} = \\frac{5}{8} = \\mathbf{62.5\\%} &gt; P(\\text{Carryback} \\mid \\mathbf{x}) = \\mathbf{37.5\\%}$.
            <br>• <strong>Final Prediction:</strong> <span style="color:#10b981; font-weight:700;"><code>Mistracking</code></span>!</li>
        </ol>
      </div>
    </div>
  </div>
</div>

<!-- ===================================================================== -->
<!-- PAPER 2: ISY5001 INTELLIGENT REASONING SYSTEMS (50 MARKS)             -->
<!-- ===================================================================== -->
<div class="lesson-card mt-4" style="border-top: 4px solid #fbbf24;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <h3 style="margin:0; color:#fbbf24;">📙 PAPER 2: ISY5001 Intelligent Reasoning Systems (Nov 2026 Sample Paper — 50 Marks)</h3>
    <span class="badge-tech">Section A (13m) • Section B (26m) • Section C (11m)</span>
  </div>
  <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:8px;">
    <strong>Case Theme:</strong> Ophthalmologist Dr. Irisa's two workplace/clinical AI initiatives: <strong>EyeCoach</strong> (Section A, 13 Marks) and the <strong>A-EYE Diagnosis &amp; Triaging Suite</strong> (Section B, 26 Marks &amp; Section C, 11 Marks).
  </p>

  <hr style="border-color:var(--border-color); margin:16px 0;">

  <!-- IRS SECTION A: QUESTION 1 (13 MARKS) -->
  <h4 style="color:#fbbf24; margin-bottom:10px;">Section A — Question 1: EyeCoach Workplace Eye-Protection Chatbot (13 Marks)</h4>

  <div class="grid-2-col mt-3" style="gap:16px;">
    <!-- Q1a & Q1b -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #fbbf24;">
      <h5 style="margin:0 0 8px 0; color:#fbbf24;">Q1(a) High-Level Intents &amp; Slots (2m) + Q1(b) FAQ Q&amp;A Pipeline (2m)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Q1(a) Intent &amp; Slot Schema for EyeCoach (2 Marks):</strong></p>
        <table class="styled-table" style="width:100%; font-size:0.77rem; margin-bottom:10px;">
          <thead>
            <tr><th>High-Level Intent</th><th>Required Entity Slots</th><th>Example Utterance</th></tr>
          </thead>
          <tbody>
            <tr><td><code>AssessErgonomics</code></td><td><code>ergonomic_factor</code> (lighting, screen_distance, gaze_angle), <code>device_type</code></td><td>"How far should my monitor be from my eyes?"</td></tr>
            <tr><td><code>ManageVisualHabit</code></td><td><code>habit_action</code> (20-20-20 break, blink_rate), <code>interval_mins</code></td><td>"Remind me to take a break every 20 minutes."</td></tr>
            <tr><td><code>GuideEyeExercise</code></td><td><code>exercise_type</code> (palming, focus_shift), <code>job_role</code>, <code>symptom</code></td><td>"What eye exercises help a software engineer with dry eyes?"</td></tr>
          </tbody>
        </table>
        <p style="margin:0 0 4px 0;"><strong>Q1(b) Question-Answering Pipeline Using Irisa's Q&amp;A Collection (2 Marks):</strong></p>
        <ol style="margin:0; padding-left:18px;">
          <li><strong>Offline Indexing:</strong> Clean Irisa's curated Q&amp;A pairs $(Q_i, A_i)$ (tokenization, lemmatization) and encode every canonical question $Q_i$ into a vector $\\mathbf{d}_i$ using <strong>TF-IDF</strong> or a pre-trained <strong>Sentence-BERT embedding model</strong>.</li>
          <li><strong>Online Query Matching:</strong> Encode the user's free-text query into vector $\\mathbf{q}$ and compute <strong>Cosine Similarity</strong> against all indexed FAQ questions:
            $$\\text{sim}(\\mathbf{q}, \\mathbf{d}_i) = \\frac{\\mathbf{q} \\cdot \\mathbf{d}_i}{\\|\\mathbf{q}\\|_2 \\|\\mathbf{d}_i\\|_2}$$</li>
          <li><strong>Thresholding &amp; Fallback:</strong> If $\\max_i \\text{sim}(\\mathbf{q}, \\mathbf{d}_i) \\ge \\tau$ (e.g. $0.75$), return Dr. Irisa's verified answer $A_{i^*}$; otherwise trigger a clarification prompt or top-3 suggested topics.</li>
        </ol>
      </div>
    </div>

    <!-- Q1c (5 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #c084fc;">
      <h5 style="margin:0 0 8px 0; color:#c084fc;">Q1(c) Frame-Based Knowledge Representation &amp; Distance Daemon (5 Marks)</h5>
      <div style="font-size:0.82rem; line-height:1.52;">
        <pre style="background:rgba(0,0,0,0.3); padding:10px; border-radius:6px; font-size:0.75rem; overflow-x:auto; margin:0 0 8px 0;"><code>FRAME: ErgonomicAssessment (Class Frame)
  AKO:            WorkplaceHealthObject
  user_id:        [TYPE: String]
  lighting_state: [TYPE: Symbol, RANGE: {Dim, Sufficient, Glare}, DEFAULT: Sufficient]
  screen_ref:     [TYPE: Instance-Of ScreenFrame]
  pose_ref:       [TYPE: Instance-Of UserPoseFrame]
  overall_status: [TYPE: Symbol, RANGE: {Safe, Warning},
                   IF-NEEDED: eval_ergonomic_rules(lighting_state, pose_ref)]

FRAME: UserPoseFrame (Class Frame)
  AKO:                 ErgonomicComponent
  calibrated_pixel_d0: [TYPE: Float, DEFAULT: 120.0] // pixel radius at 20 inches
  observed_pixel_d:    [TYPE: Float]                 // d1 or d2 from webcam Fig Q1.A
  gaze_tilt_deg:       [TYPE: Float, RANGE: [-15.0, 0.0], DEFAULT: -10.0]
  gaze_compliance:     [TYPE: Symbol, RANGE: {Optimal, TooHigh, TooLow}]
  face_distance_inch:  [TYPE: Float, GOLD_STANDARD: [18.0, 24.0],
                        IF-NEEDED: calc_distance_daemon(calibrated_pixel_d0, observed_pixel_d)]
  distance_status:     [TYPE: Symbol, RANGE: {TooClose, GoldStandard_18_24in, TooFar},
                        IF-ADDED: trigger_posture_alert_daemon()]</code></pre>
        <p style="margin:0;">
          <strong>How the <code>if-needed</code> Distance Daemon Works (Fig. Q1.A):</strong> By pinhole camera geometry, apparent face/iris pixel diameter $d$ is inversely proportional to physical distance $D$: $D_{\\text{est}} = D_0 \\times \\frac{d_0}{d_{\\text{obs}}}$ (where $D_0 = 20\\text{ in}$ at calibration diameter $d_0$). Since $d_1 &gt; d_2$ in Fig. Q1.A, the daemon computes $D_1 &lt; 18\\text{ in} \\implies$ sets <code>distance_status = TooClose</code> and alerts the user to move back to the $18\\text{--}24\\text{ inch}$ gold standard!
        </p>
      </div>
    </div>
  </div>

  <!-- Q1d (4 Marks) -->
  <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #38bdf8; margin-top:16px;">
    <h5 style="margin:0 0 8px 0; color:#38bdf8;">Q1(d) Hidden Markov Model (HMM) for 7-Day Work Pattern Classification (4 Marks)</h5>
    <div class="grid-2-col" style="gap:16px; font-size:0.83rem; line-height:1.55;">
      <div>
        <strong>1. Defining HMM Components on <code>Q1.Table 1</code> (2 Marks):</strong>
        <ul style="margin:4px 0 0 0; padding-left:18px;">
          <li><strong>Sequence Length ($T = 7$):</strong> Day index $t \\in \\{1, 2, 3, 4, 5, 6, 7\\}$ (Monday to Sunday).</li>
          <li><strong>Hidden States ($S_t \\in \\{S_1, S_2, S_3\\}$):</strong> The user's unobserved daily visual workload regime:
            <br>• $S_1$: <em>Intensive Continuous Screen Work</em> (coding/debugging)
            <br>• $S_2$: <em>Intermittent/Mobile Client Work</em> (meetings/calls)
            <br>• $S_3$: <em>Off-Screen / Weekend Recovery</em>.</li>
          <li><strong>Observations ($\\mathbf{o}_t$):</strong> The observed daily query count vector from <code>Q1.Table 1</code>:
            $$\\mathbf{o}_t = [q_{\\text{erg},t}, \\; q_{\\text{vis},t}, \\; q_{\\text{ex},t}]$$
            (or discretized query intensity symbol).</li>
        </ul>
      </div>
      <div>
        <strong>2. Training &amp; Classification Procedure (2 Marks):</strong>
        <ul style="margin:4px 0 0 0; padding-left:18px;">
          <li><strong>Training Phase (Baum-Welch EM):</strong> Fit two class-conditional HMMs using historical 7-day logs:
            <br>• $\\lambda_{\\text{SE}} = (\\boldsymbol{\\pi}, A, B)_{\\text{SE}}$ trained on <em>Software Engineer</em> sequences.
            <br>• $\\lambda_{\\text{Sales}} = (\\boldsymbol{\\pi}, A, B)_{\\text{Sales}}$ trained on <em>Sales Executive</em> sequences.</li>
          <li><strong>Inference Phase (Forward Algorithm):</strong> Given a new user's 7-day observation sequence $O_{1:7} = (\\mathbf{o}_1, \\dots, \\mathbf{o}_7)$, run the <strong>Forward Algorithm</strong> $\\alpha_t(j) = \\left[\\sum_{i=1}^N \\alpha_{t-1}(i)a_{ij}\\right]b_j(\\mathbf{o}_t)$ to compute sequence log-likelihoods $\\log P(O_{1:7} \\mid \\lambda_{\\text{SE}})$ and $\\log P(O_{1:7} \\mid \\lambda_{\\text{Sales}})$, and classify via Bayes' rule:
            $$\\hat{y} = \\arg\\max_{c \\in \\{\\text{SE}, \\text{Sales}\\}} P(O_{1:7} \\mid \\lambda_c) P(c)$$</li>
        </ul>
      </div>
    </div>
  </div>

  <hr style="border-color:var(--border-color); margin:20px 0;">

  <!-- IRS SECTION B: QUESTION 2 (26 MARKS) -->
  <h4 style="color:#34d399; margin-bottom:10px;">Section B — Question 2: A-EYE Diagnosis &amp; Triaging Suite (26 Marks)</h4>

  <div class="grid-2-col mt-3" style="gap:16px;">
    <!-- Q2a & Q2b -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #34d399;">
      <h5 style="margin:0 0 8px 0; color:#34d399;">Q2(a) Stakeholder Pain Points (2m) &amp; Q2(b) System Functionalities/IO (3m)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Q2(a) Two Core Pain Points (2 Marks):</strong></p>
        <ol style="margin:0 0 8px 0; padding-left:18px;">
          <li><strong>Primary Care (GP) Diagnostic &amp; Triage Uncertainty:</strong> General practitioners lack specialist ophthalmology training and equipment to distinguish benign red/painful eyes from sight-threatening emergencies or perform objective swinging-flashlight RAPD tests.</li>
          <li><strong>Severe Specialist Bottleneck in Singapore:</strong> With only $\\sim 300$ ophthalmologists serving $2,400$ specialist clinic visits per ophthalmologist annually (projected to double by 2030), non-urgent referrals overload tertiary eye hospitals while urgent cases risk delayed triage.</li>
        </ol>
        <p style="margin:0 0 6px 0;"><strong>Q2(b) Functionalities, Inputs &amp; Outputs of <code>A-EYE-Web</code> &amp; <code>A-EYE-App</code> (3 Marks):</strong></p>
        <ul style="margin:0; padding-left:18px;">
          <li><strong><code>A-EYE-Web</code> (Clinical Decision Support &amp; Triaging System):</strong>
            <br>• <em>Functionality:</em> Guides GPs through adaptive symptom/sign collection and generates a ranked differential diagnosis with referral urgency.
            <br>• <em>Inputs:</em> Patient demographics (Age, Gender, Occupation), medical history (Diabetes, Hypertension, High Cholesterol, Medications), Primary Symptoms (e.g., <code>Eye Pain</code>, <code>Red Eye</code>), dynamically triggered Secondary Symptoms (<code>Blurring of vision</code>, <code>Nausea/vomiting</code>), and Clinical Signs (<code>RAPD</code>, <code>Corneal reflex</code>).
            <br>• <em>Outputs:</em> Ranked Top-10 Differential Diagnoses with likelihood scores (e.g., <code>Acute Angle-Closure Glaucoma: 85%</code>) + Triage Urgency (<code>Immediate Emergency Referral</code> vs <code>Routine</code>).</li>
          <li><strong><code>A-EYE-App</code> (Smartphone Computer-Vision Pupillometry Tool):</strong>
            <br>• <em>Functionality:</em> Automates the objective detection of Relative Afferent Pupillary Defect (<code>RAPD</code>).
            <br>• <em>Inputs:</em> 100 video frames ($5\\text{s} \\times 20\\text{ fps}$) of the patient's left and right eyes under controlled illumination.
            <br>• <em>Outputs:</em> Segmented iris/pupil bounding boxes, mean relative pupil sizes $(\\bar{L}, \\bar{R})$, and binary clinical sign <code>RAPD = Positive / Negative</code>.</li>
        </ul>
      </div>
    </div>

    <!-- Q2c & Q2d -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #38bdf8;">
      <h5 style="margin:0 0 8px 0; color:#38bdf8;">Q2(c) Hybrid Architecture (3m) &amp; Q2(d) A-EYE-Web Knowledge Model (4m)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Q2(c) Hybrid System Classification &amp; Dataflow (3 Marks):</strong></p>
        <ul style="margin:0 0 8px 0; padding-left:18px;">
          <li><strong>Classification:</strong> <strong>Sequential Subprocessing (Transformational) Loosely-Coupled Hybrid Intelligent System</strong>.</li>
          <li><strong>Architecture Flow:</strong>
            <br><code>[Smartphone Camera: 100 Frames]</code> $\\to$ <strong><code>A-EYE-App</code> (Sub-symbolic CV: Haar Cascade + Pixel Ratio + Eq Q2.2)</strong> $\\to$ extracts symbolic clinical sign <code>RAPD = True/False</code> $\\to$ <strong><code>A-EYE-Web</code> (Symbolic Knowledge-Based System)</strong> $\\to$ <code>[Ranked Differential Diagnosis + Referral Urgency]</code>.</li>
        </ul>
        <p style="margin:0 0 6px 0;"><strong>Q2(d) <code>A-EYE-Web</code> Knowledge Model &amp; System Architecture (4 Marks):</strong></p>
        <ul style="margin:0; padding-left:18px;">
          <li><strong>1. Knowledge Base (Two-Tier Structure):</strong>
            <br>• <em>Tier 1 — Dynamic Symptom Trigger Rules:</em> Production rules <code>IF Primary_Symptom = Eye_Pain THEN Query_Secondary = {Nausea, Halos, Vision_Loss}</code>.
            <br>• <em>Tier 2 — Disease-Profile Knowledge Matrix / Frames:</em> Maps each disease $D_m$ to weighted symptom/sign profiles, risk factors (Age, Diabetes), and triage urgency level.</li>
          <li><strong>2. Working Memory:</strong> Stores active patient demographics, selected primary/secondary symptoms, and <code>RAPD</code> sign from <code>A-EYE-App</code>.</li>
          <li><strong>3. Inference Engine:</strong> (a) Forward-chains primary symptoms to update UI secondary symptom prompts; (b) Scores and ranks candidate diagnoses $D_1 \\dots D_M$ by weighted evidence match / Bayesian posterior.</li>
          <li><strong>4. Explanation &amp; Case Repository UI:</strong> Displays matched clinical criteria and logs confirmed diagnoses into the 5,000-case database.</li>
        </ul>
      </div>
    </div>

    <!-- Q2e, Q2f, Q2i -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h5 style="margin:0 0 8px 0; color:#f59e0b;">Q2(e) Wall Chart Critique (2m), Q2(f) Elicitation vs Mining (3m) &amp; Q2(i) Self-Service Risk (1.5m)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Q2(e) Why a Static Wall Look-Up Table Fails (2 Marks):</strong></p>
        <ul style="margin:0 0 8px 0; padding-left:18px;">
          <li><strong>Combinatorial Explosion:</strong> With 40 symptoms, 10 signs, and 4 history flags ($54$ binary variables), there are $2^{54} \\approx 1.8 \\times 10^{16}$ possible combinations — physically impossible to print or scan on a wall chart!</li>
          <li><strong>No Dynamic Filtering or Probabilistic Ranking:</strong> A static chart cannot dynamically hide irrelevant secondary symptoms, handle partial/uncertain inputs, rank top-10 likelihoods, or update easily when clinical guidelines change.</li>
        </ul>
        <p style="margin:0 0 6px 0;"><strong>Q2(f) Knowledge Elicitation vs. Knowledge Discovery (3 Marks):</strong></p>
        <ul style="margin:0 0 8px 0; padding-left:18px;">
          <li><strong>(a) Knowledge Elicitation (Interviewing Ophthalmologists):</strong> <em>Pros:</em> Captures causal clinical reasoning, edge-case red flags, and rare blinding emergencies even with zero historical data. <em>Cons:</em> Time-consuming bottleneck, expensive specialist hours, subjective cognitive bias.</li>
          <li><strong>(b) Knowledge Discovery (Data Mining Historical Records):</strong> <em>Pros:</em> Fast, scalable, discovers subtle multi-variable statistical interactions and empirical probabilities automatically. <em>Cons:</em> Fails on rare conditions with few rows, sensitive to missing/noisy GP records, lacks causal explainability.</li>
        </ul>
        <p style="margin:0;"><strong>Q2(i) Critique of Patient Self-Service Positioning (1.5 Marks):</strong></p>
        <ul style="margin:4px 0 0 0; padding-left:18px;">
          <li><strong>High Clinical Risk:</strong> Patients cannot accurately assess clinical signs (corneal reflex, intraocular pressure, subtle pupillary defects) and may misinterpret acute emergencies (e.g., retinal detachment or acute glaucoma) as benign eye strain, leading to irreversible blindness and severe medico-legal liability.</li>
        </ul>
      </div>
    </div>

    <!-- Q2g & Q2h (7.5 Marks combined!) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f43f5e;">
      <h5 style="margin:0 0 8px 0; color:#f43f5e;">Q2(g) Equation Q2.2 Math Audit (2m) &amp; Q2(h) 11-Entity Cognitive Model Mapping (5.5m)</h5>
      <div style="font-size:0.82rem; line-height:1.52;">
        <p style="margin:0 0 6px 0;"><strong>Q2(g) Two Mathematical Errors in Equation Q2.2 &amp; Corrected Formula (2 Marks):</strong></p>
        <ul style="margin:0 0 8px 0; padding-left:18px;">
          <li><strong>Original Flawed Equation Q2.2:</strong> $RAPD = \\frac{(\\overline{\\text{relative left pupil size}}) - (\\overline{\\text{relative right pupil size}})}{30} \\ge 1$.</li>
          <li><strong>Error 1 (Missing Absolute Value):</strong> $(\\bar{L} - \\bar{R})$ is signed! If the right pupil is larger than the left pupil ($\\bar{R} &gt; \\bar{L}$), the numerator is negative and can never be $\\ge 1$.</li>
          <li><strong>Error 2 (Percentage vs. Decimal &amp; Relative Reference Scaling):</strong> Since relative pupil size $\\frac{\\text{pixels(pupil)}}{\\text{pixels(iris)}} \\in (0, 1)$, dividing a number $&lt; 1$ by $30$ yields a maximum value $&lt; 0.033$, which is <strong>never $\\ge 1$</strong>! Furthermore, "differ by $30\\%$ or more" requires dividing the absolute difference by $0.30$ of the reference pupil size:
            $$RAPD = \\frac{|\\bar{L} - \\bar{R}|}{0.30 \\times \\max(\\bar{L}, \\bar{R})} \\ge 1 \\quad \\left(\\text{or } \\frac{|\\bar{L} - \\bar{R}|}{0.30 \\times \\frac{\\bar{L}+\\bar{R}}{2}} \\ge 1\\right)$$</li>
        </ul>
        <p style="margin:0 0 4px 0;"><strong>Q2(h) Mapping <code>A-EYE-App</code> to all 11 Entities of the Cognitive Model Framework (5.5 Marks — 0.5m each):</strong></p>
        <table class="styled-table" style="width:100%; font-size:0.74rem;">
          <thead>
            <tr><th>#</th><th>Cognitive Entity</th><th>Exact Mapping in <code>A-EYE-App</code></th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td><strong>Environmental stimuli</strong></td><td>Light reflected from the patient's left and right eyes under controlled illumination.</td></tr>
            <tr><td>2</td><td><strong>Perceive function</strong></td><td>Smartphone camera sensor capturing 20 frames/sec for 5 seconds.</td></tr>
            <tr><td>3</td><td><strong>Raw data</strong></td><td>100 raw RGB eye image frames stored in memory buffer.</td></tr>
            <tr><td>4</td><td><strong>Recognize function</strong></td><td>Haar cascade classifier localizing iris &amp; pupil regions + Eq Q2.1 pixel ratio computation.</td></tr>
            <tr><td>5</td><td><strong>Information</strong></td><td>Extracted time-series of 100 relative left and right pupil sizes and their means $(\\bar{L}, \\bar{R})$.</td></tr>
            <tr><td>6</td><td><strong>Learn function</strong></td><td>Supervised training of Haar cascade / calibration of RAPD threshold from labeled eye datasets.</td></tr>
            <tr><td>7</td><td><strong>Knowledge (new/known)</strong></td><td>Trained Haar cascade feature weights + domain rule (Eq Q2.2: $\\ge 30\\%$ asymmetry = RAPD).</td></tr>
            <tr><td>8</td><td><strong>Reason function</strong></td><td>Evaluating corrected Equation Q2.2 on $(\\bar{L}, \\bar{R})$ to infer whether RAPD is present.</td></tr>
            <tr><td>9</td><td><strong>Plan / Solution</strong></td><td>Binary clinical determination (<code>RAPD = Positive</code> or <code>Negative</code>) + summary metrics.</td></tr>
            <tr><td>10</td><td><strong>Act function</strong></td><td>Rendering the diagnostic result on screen (Fig Q2.B) and transmitting <code>RAPD</code> sign to <code>A-EYE-Web</code>.</td></tr>
            <tr><td>11</td><td><strong>Effects of action</strong></td><td>GP incorporates objective RAPD sign into <code>A-EYE-Web</code> triage, improving referral accuracy.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <hr style="border-color:var(--border-color); margin:20px 0;">

  <!-- IRS SECTION C: QUESTION 3 (11 MARKS) -->
  <h4 style="color:#c084fc; margin-bottom:10px;">Section C — Question 3: A-EYE-Web Machine Learning, Association Rules &amp; Collaborative Filtering (11 Marks)</h4>

  <div class="grid-2-col mt-3" style="gap:16px;">
    <!-- Q3a (5 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #c084fc;">
      <h5 style="margin:0 0 8px 0; color:#c084fc;">Q3(a) Comparing 3 Top-10 Diagnostic Ranking Methods (5 Marks)</h5>
      <ol style="margin:0; padding-left:18px; font-size:0.83rem; line-height:1.55;">
        <li><strong>(i) Least Suitable Method — Method 1 (A Single Multi-Class Decision Tree) (2 Marks):</strong>
          <br>• With <strong>hundreds of possible eye diagnoses</strong> and only $5,000$ historical cases, a single decision tree suffers from <strong>severe data fragmentation</strong> (leaves contain only a handful of samples).
          <br>• Multi-class entropy across hundreds of classes is noisy, rare blinding diseases get pruned away, and a single leaf with 3–5 training cases cannot produce a well-calibrated Top-10 probability ranking.</li>
        <li><strong>(ii) Input Variables &amp; Top-10 Ranking Mechanism for Method 2 &amp; Method 3 (3 Marks):</strong>
          <br>• <strong>Input Variables (from <code>Q3.Table 1</code> &amp; <code>Table 2</code>):</strong>
            <br>&nbsp;&nbsp;– <em>Demographics:</em> <code>Gender</code>, derived <code>Age = Diagnosis_Date - Date_of_Birth</code>, <code>Occupation</code> (one-hot encoded). (Exclude raw IDs: <code>Patient ID</code>, <code>Doctor ID</code>, <code>Case ID</code>!)
            <br>&nbsp;&nbsp;– <em>Medical History:</em> <code>High Blood Pressure</code>, <code>Diabetes</code>, <code>High Cholesterol</code>, <code>Other Medications</code>.
            <br>&nbsp;&nbsp;– <em>Clinical Presentation:</em> Binary vector of <code>Symptom 1..40</code> and <code>Sign 1..10</code>.
          <br>• <strong>How Method 2 (One-vs-Rest Binary Decision Trees) Ranks Top-10:</strong> Train $M$ binary trees (one per disease $D_m$ vs. all others) using unpruned probability estimation (Laplace-smoothed leaf class frequencies $P(D_m = \\text{True} \\mid \\mathbf{x})$). At inference, pass patient $\\mathbf{x}$ through all $M$ trees and sort $P(D_m = \\text{True} \\mid \\mathbf{x})$ descending to output the Top-10.
          <br>• <strong>How Method 3 ($k$-Nearest Neighbors) Ranks Top-10:</strong> Normalize continuous features (<code>Age</code>) and compute distance $d(\\mathbf{x}, \\mathbf{x}_i)$ to all $5,000$ historical cases. Retrieve the $k$ nearest neighbors (choose $k \\ge 30$, e.g., $k=50$, so at least 10 distinct diseases can appear) and rank candidate diagnoses by distance-weighted voting:
            $$\\text{Score}(D_m) = \\sum_{i \\in N_k(\\mathbf{x})} \\frac{\\mathbb{I}(y_i = D_m)}{d(\\mathbf{x}, \\mathbf{x}_i) + \\epsilon}$$</li>
      </ol>
    </div>

    <!-- Q3b & Q3c (6 Marks) -->
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h5 style="margin:0 0 8px 0; color:#10b981;">Q3(b) Longitudinal Association Rules (4m) &amp; Q3(c) CF Critique (2m)</h5>
      <div style="font-size:0.83rem; line-height:1.55;">
        <p style="margin:0 0 6px 0;"><strong>Q3(b) Association Rule Mining for Historical Disease/Treatment Links (4 Marks):</strong></p>
        <ol style="margin:0 0 10px 0; padding-left:18px;">
          <li><strong>(i) Transaction Construction &amp; Count (2 Marks):</strong>
            <br>• Join <code>Q3.Table 1</code> and <code>Q3.Table 2</code> on <code>Patient ID</code> and group all 5,000 cases by patient $\\implies$ <strong>2,000 patient-level transactions</strong> (one basket per unique patient, or one basket per follow-up visit paired with all prior visits of that same patient).
            <br>• Sort each patient's visits chronologically by <code>Diagnosis Date</code>. Encode earlier visits with temporal prefixes <code>Past_Diag:&lt;D&gt;</code> and <code>Past_Treat:&lt;T&gt;</code> (optionally bucketed by lag $\\Delta t \\ge 6\\text{ months}$), and the latest visit as <code>Curr_Diag:&lt;D&gt;</code>.
            <br>• <em>Example Transaction:</em> <code>{Past_Diag:Cataract, Past_Treat:Lens_Replacement, Lag:&gt;6m, Curr_Diag:PCO}</code>.</li>
          <li><strong>(ii) Rule Identification &amp; Filtering Strategy (2 Marks):</strong>
            <br>• Run Apriori / FP-Growth and filter rules using <strong>Template Constraints</strong>: Antecedent (LHS) must contain at least one <code>Past_Diag:*</code> and/or <code>Past_Treat:*</code>, and Consequent (RHS) must be a single <code>Curr_Diag:*</code>.
            <br>• Rank and prune rules using <strong>Support</strong> (e.g., min count $\\ge 10$ patients to avoid noise), high <strong>Confidence</strong> $P(\\text{Curr\\_Diag} \\mid \\text{Past\\_Diag, Past\\_Treat})$, and <strong>Lift $&gt; 1.0$</strong> (proving positive clinical association beyond baseline disease prevalence).</li>
        </ol>
        <p style="margin:0 0 4px 0;"><strong>Q3(c) Critique of User-Based Collaborative Filtering on Patient Feedback (2 Marks):</strong></p>
        <ul style="margin:0; padding-left:18px;">
          <li><strong>1. Extreme Sparsity ($99.67\\%$ Empty Matrix):</strong> With $2,000$ patients and $300$ treatments ($600,000$ matrix cells) and only $40\\%$ feedback on $5,000$ cases ($2,000$ ratings total), each patient rates on average just <strong>1 treatment</strong> — making Pearson/Cosine user-similarity computation statistically meaningless!</li>
          <li><strong>2. Clinical Hazard &amp; Pathology Mismatch:</strong> Medical treatment must be prescribed based on the <strong>current physiological diagnosis</strong>, not whether two patients gave similar 1–5 star satisfaction scores to past eye drops! Furthermore, patient ratings reflect subjective comfort/cost rather than objective clinical cure.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "quizzes",
      title: "Grand A+ Mock Exam Crucible (20 High-Yield Exam Questions)",
      subtitle: "The final exam simulation: 10 PRS questions + 10 IRS questions with full step-by-step marking rubrics",
      badge: "Grand Crucible",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="award"></i></div>
  <div class="card-body">
    <h3>The Grand A+ Mock Exam Crucible</h3>
    <p class="lead-text">
      This is it! 20 comprehensive questions spanning all 6 courses: <strong>Problem Solving Using PR</strong>, <strong>Intelligent Sensing Systems</strong>, <strong>PRMLS</strong>, <strong>Machine Reasoning</strong>, <strong>Cognitive Systems</strong>, and <strong>Reasoning Systems</strong>.
    </p>
    <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 8px;">
      Answer each question carefully. Score 18/20 or higher to demonstrate definitive A+ readiness for both Paper 1 and Paper 2!
    </div>
  </div>
</div>
<div id="quiz-container" class="mt-4"></div>
`
    }
  ]
};
