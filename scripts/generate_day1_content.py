import json

# We will generate a rich, full-fledged Day 1 content file with all 10 modules following the 7-stage structure.
def make_stage_html(mod_num, title, diagnostic_data, intuitive_html, vis_html, math_html, practice_html, exam_html, summary_html):
    d_q1 = diagnostic_data["q1"]
    d_q2 = diagnostic_data["q2"]
    
    html = f'''
      <div class="lesson-module-container" id="mod-{mod_num}">
        <!-- STAGE 1: DIAGNOSTIC -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge-tech" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">
              Stage 1: Diagnostic (Prior Knowledge Check)
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">2-Minute Diagnostic</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">
            Test your current understanding. If you answer both correctly, take the accelerated revision path!
          </p>
          
          <div class="grid-2-col" style="gap: 12px;">
            <div style="background: var(--bg-card); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
              <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Q1: {d_q1['q']}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px;">{d_q1['options']}</div>
              <button class="btn btn-sm btn-outline" onclick="alert('{d_q1['feedback']}')">Check Answer</button>
            </div>

            <div style="background: var(--bg-card); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
              <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Q2: {d_q2['q']}</div>
              <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 8px;">{d_q2['options']}</div>
              <button class="btn btn-sm btn-outline" onclick="alert('{d_q2['feedback']}')">Check Answer</button>
            </div>
          </div>
        </div>

        <!-- STAGE 2: INTUITIVE EXPLANATION -->
        <div class="lesson-card mb-4">
          <div class="badge-tech mb-2" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
            Stage 2: Intuitive Mental Model
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Why {title} Exists & What It Solves</h3>
          {intuitive_html}
        </div>

        <!-- STAGE 3: INTERACTIVE VISUALIZATION -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-left: 4px solid var(--accent-primary);">
          <div class="badge-tech mb-2" style="background: var(--accent-primary); color: white;">
            Stage 3: Interactive Visual Studio
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Manipulate & Observe Live State</h3>
          {vis_html}
        </div>

        <!-- STAGE 4: MATHEMATICAL FOUNDATIONS -->
        <div class="lesson-card mb-4">
          <div class="badge-tech mb-2" style="background: rgba(168, 85, 247, 0.15); color: #c084fc;">
            Stage 4: Mathematical Foundations & Solved Example
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Rigorous Formulations & Step-by-Step Proof</h3>
          {math_html}
        </div>

        <!-- STAGE 5: INDEPENDENT PRACTICE -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.04);">
          <div class="badge-tech mb-2" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">
            Stage 5: Independent Practice
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Solve Without Looking</h3>
          {practice_html}
        </div>

        <!-- STAGE 6: EXAM APPLICATION -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border: 1px solid var(--border-color);">
          <div class="badge-tech mb-2" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">
            Stage 6: Exam Application & Model Answer
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">How NUS-ISS Tests This in Open-Book Exams</h3>
          {exam_html}
        </div>

        <!-- STAGE 7: REVISION SUMMARY -->
        <div class="lesson-card mb-4" style="background: var(--bg-secondary); border-radius: 8px;">
          <div class="badge-tech mb-2" style="background: var(--text-muted); color: white;">
            Stage 7: Rapid Revision Summary
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Key Takeaways, Traps & Comparisons</h3>
          {summary_html}
        </div>
      </div>
    '''
    return html

# Modules data
modules = []

# Module 1
modules.append({
    "id": "mod-1",
    "num": 1,
    "title": "Machine Learning Foundations & Data Preprocessing",
    "subtitle": "Supervised, Unsupervised, Scaling, Encoding, Imputation, Splits & Bias-Variance",
    "badge": "PRS (PSUPR Day 1)",
    "diag": {
        "q1": {
            "q": "Why is MinMax scaling sensitive to outliers compared to Z-score or RobustScaler?",
            "options": "A: It divides by variance. B: It computes (x - min)/(max - min) where extreme outliers stretch denominator.",
            "feedback": "Correct! A single massive outlier makes all normal points compress near 0."
        },
        "q2": {
            "q": "What is data leakage during k-fold cross-validation?",
            "options": "A: Splitting train and test randomly. B: Fitting a scaler or PCA on the whole dataset before fold splitting.",
            "feedback": "Correct! Preprocessing transformations MUST be fit strictly on the train folds only."
        }
    },
    "intuitive": """
      <p class="lead-text">
        Every pattern recognition system begins with a physical phenomenon mapped into numbers. But raw numbers are treacherous:
        units are arbitrary (seconds vs dollars vs counts), measurements have gaps (missing sensor ticks), and algorithms blindly
        assume that larger magnitudes carry greater importance.
      </p>
      <p>
        Machine Learning Foundations provide the universal pipeline: <strong>Data Preprocessing $\\to$ Feature Representation $\\to$ Inductive Learning $\\to$ Generalization</strong>.
        If your preprocessing leaks future information or scales incorrectly, even a trillion-parameter neural network will produce worthless, non-generalizable predictions.
      </p>
    """,
    "vis": """
      <div id="feature-scaler-studio">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
          <div>
            <strong>Interactive Scaling Studio:</strong> See how e-commerce features transform.
          </div>
          <select id="scaler-method-select" onchange="SprintDay1Visualizers.updateFeatureScaler()" style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color);">
            <option value="standard">StandardScaler (Z-Score: mean=0, std=1)</option>
            <option value="minmax">MinMaxScaler (Range [0, 1])</option>
          </select>
        </div>
        <div id="scaler-formula-display" style="margin-bottom:10px;"></div>
        <div id="scaler-output-table"></div>
      </div>
    """,
    "math": """
      <p><strong>Min-Max Normalization:</strong></p>
      $$x_{\\text{scaled}} = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}} \\in [0, 1]$$
      <p><strong>Standardization (Z-Score):</strong></p>
      $$z = \\frac{x - \\mu}{\\sigma}, \\quad \\mu = \\frac{1}{N}\\sum x_i, \\quad \\sigma = \\sqrt{\\frac{1}{N-1}\\sum (x_i - \\mu)^2}$$
      <p><strong>Worked Numerical Example:</strong> An e-commerce feature has values $[10, 20, 30, 40, 100]$.</p>
      <ul>
        <li>$x_{\\min} = 10, \\; x_{\\max} = 100, \\; x_{\\max} - x_{\\min} = 90$.</li>
        <li>For $x = 20$: $x_{\\text{scaled}} = (20 - 10) / 90 = 10 / 90 \\approx 0.111$.</li>
        <li>For $x = 100$: $x_{\\text{scaled}} = (100 - 10) / 90 = 1.000$.</li>
        <li>Notice how the outlier $100$ crushes all other normal values ($10, 20, 30, 40$) into the bottom $33\\%$ of the range!</li>
      </ul>
      <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:8px 12px; border-radius:4px; margin-top:8px;">
        <strong>Common Calculation Mistake:</strong> Computing $\\mu$ and $\\sigma$ across the entire dataset before train/test splitting. This leaks the test distribution into the training pipeline and invalidates exam marks!
      </div>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A sensor measures voltage with historical training values $\\mu = 5.0\\text{ V}$ and $\\sigma = 2.0\\text{ V}$. An incoming test reading is $x = 8.5\\text{ V}$. Calculate its standardized Z-score.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod1-ans" placeholder="Z-score..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod1-ans').value); if(Math.abs(v - 1.75) < 0.05) alert('Correct! (8.5 - 5.0)/2.0 = 1.75'); else alert('Incorrect. (8.5 - 5.0)/2.0 = 1.75');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS Scenario Context (PRS Q1):</strong> In the online bookstore purchasing prediction task, the dataset contains numerical metrics (Bounce Rate, Page Value) and categorical features (OperatingSystems: 8 values, Browser: 13 values, TrafficType: 20 values).</p>
        <p><strong>Model Answer Strategy:</strong></p>
        <ol>
          <li>State categorical encoding strategy: One-Hot Encoding for low-cardinality nominal features (VisitorType, Weekend); Target Encoding or Frequency Encoding for high-cardinality (TrafficType with 20 values) to avoid dimensional explosion.</li>
          <li>Handle class imbalance: 84.5% non-buyers vs 15.5% buyers. Apply SMOTE on the training fold only, or use class-weighted cross-entropy loss.</li>
          <li>Never scale test fold with test parameters: Fit StandardScaler on train fold, call <code>scaler.transform(X_test)</code> on test fold.</li>
        </ol>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>MinMax:</strong> Bounds data to $[0, 1]$; highly sensitive to outliers.</li>
          <li><strong>StandardScaler:</strong> Produces $\\mu=0, \\sigma=1$; assumes approximately Gaussian distribution.</li>
          <li><strong>Data Leakage Rule:</strong> Any parameter (mean, min, max, PCA eigenvectors) MUST be learned solely from the training partition.</li>
        </ul>
      </div>
    """
})

# Module 2
modules.append({
    "id": "mod-2",
    "num": 2,
    "title": "Classical Supervised Learning: k-NN, Logistic Regression, Naive Bayes & Decision Trees",
    "subtitle": "Distance Metrics, Log-Odds, Sigmoid, Bayes Decision Theory, Laplace Smoothing & Information Gain",
    "badge": "PRS (PSUPR Day 1 & 2)",
    "diag": {
        "q1": {
            "q": "What happens in Naive Bayes if a feature value has count = 0 in class C?",
            "options": "A: The model defaults to prior. B: The entire product collapses to 0, wiping out all other evidence.",
            "feedback": "Correct! Because Naive Bayes multiplies all attribute likelihoods, a single zero wipes out the entire posterior."
        },
        "q2": {
            "q": "What is the denominator of Laplace smoothing for feature X with |V| distinct categories?",
            "options": "A: count(C) + 1. B: count(C) + |V|.",
            "feedback": "Correct! You must add |V| to the denominator to preserve total probability summation to 1.0."
        }
    },
    "intuitive": """
      <p class="lead-text">
        Supervised classification assigns discrete labels to unknown vectors. Different algorithms carve the decision boundary using fundamentally different philosophies:
      </p>
      <ul>
        <li><strong>k-NN:</strong> Non-parametric & lazy. "You are who your nearest neighbors are." No training phase; heavy test-time distance search.</li>
        <li><strong>Logistic Regression:</strong> Parametric & linear. Estimates log-odds of membership via the Sigmoid curve $\\sigma(z)$.</li>
        <li><strong>Naive Bayes:</strong> Generative & probabilistic. Assumes features are conditionally independent given the class label.</li>
        <li><strong>Decision Trees:</strong> Hierarchical orthogonal splits. Greedily partitions feature space by maximizing Information Gain or Gini purity.</li>
      </ul>
    """,
    "vis": """
      <div id="nb-laplace-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive Naive Bayes Laplace Smoothing Studio</h4>
        <div class="grid-3-col mb-3" style="gap:10px;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Observed Count in Class: <strong id="nb-obs-val" style="color:#38bdf8;">0</strong></label>
            <input type="range" id="nb-obs-slider" min="0" max="20" value="0" oninput="SprintDay1Visualizers.updateNaiveBayes()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Total Instances in Class: <strong id="nb-total-val" style="color:#10b981;">40</strong></label>
            <input type="range" id="nb-total-slider" min="10" max="100" value="40" oninput="SprintDay1Visualizers.updateNaiveBayes()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Attribute Cardinality |V|: <strong id="nb-v-val" style="color:#f59e0b;">5</strong></label>
            <input type="range" id="nb-v-slider" min="2" max="15" value="5" oninput="SprintDay1Visualizers.updateNaiveBayes()" style="width:100%;">
          </div>
        </div>
        <div id="nb-output-math" style="background:var(--bg-secondary); padding:12px; border-radius:6px;"></div>
      </div>
    """,
    "math": """
      <p><strong>Laplace-Smoothed Conditional Probability:</strong></p>
      $$P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}$$
      <p><strong>Shannon Entropy and Information Gain:</strong></p>
      $$H(S) = -\\sum_{i=1}^C p_i \\log_2 p_i, \\quad IG(S, A) = H(S) - \\sum_{v \\in \\text{Values}(A)} \\frac{|S_v|}{|S|} H(S_v)$$
      <p><strong>Gini Impurity:</strong></p>
      $$G(S) = 1 - \\sum_{i=1}^C p_i^2$$
      <p><strong>Fully Solved Worked Example (Laplace):</strong> Dataset of 40 Purchase sessions ($C=1$). Attribute 'Browser' has 5 values. Firefox appeared 0 times.</p>
      $$P(\\text{Firefox} \\mid C=1) = \\frac{0 + 1}{40 + 5} = \\frac{1}{45} \\approx 0.0222$$
      <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:8px 12px; border-radius:4px; margin-top:8px;">
        <strong>Examiner Trap:</strong> Writing $\\frac{0+1}{40+1} = \\frac{1}{41}$. This violates probability axioms because summing across all 5 values would yield $\\frac{5}{41} \\neq 1.0$!
      </div>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A binary dataset has 6 positive samples and 2 negative samples ($|S|=8$). Calculate the Gini impurity $G(S) = 1 - (p_+^2 + p_-^2)$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod2-ans" placeholder="Gini..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod2-ans').value); if(Math.abs(v - 0.375) < 0.02) alert('Correct! p+ = 6/8 = 0.75, p- = 2/8 = 0.25. Gini = 1 - (0.5625 + 0.0625) = 1 - 0.625 = 0.375.'); else alert('Incorrect. Gini = 1 - (0.75^2 + 0.25^2) = 0.375.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS Scenario Context (PRS Q2d Conveyor Diagnostics):</strong> When given maintenance logs with small sample counts (e.g. 9 records), compute unnormalized posteriors $P(C_k) \\prod P(x_j \\mid C_k)$. Compare products directly without calculating the evidence denominator $P(\\mathbf{x})$ to save calculation time.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>k-NN:</strong> Choose odd $K$ to prevent ties; scale all features first.</li>
          <li><strong>LogReg:</strong> Best linear probabilistic baseline; output is calibrated probability.</li>
          <li><strong>Laplace Rule:</strong> Numerator $+1$, Denominator $+|V|$.</li>
        </ul>
      </div>
    """
})

# Module 3
modules.append({
    "id": "mod-3",
    "num": 3,
    "title": "Model Evaluation, Explainability & Business Objectives",
    "subtitle": "Confusion Matrix, ROC-AUC, Cumulative Gains, Lift Deciles, Threshold Selection & SHAP/LIME",
    "badge": "PRS (PSUPR Day 2)",
    "diag": {
        "q1": {
            "q": "Why is Accuracy an invalid metric when positive class represents only 5% of data?",
            "options": "A: Accuracy cannot be computed for small numbers. B: A dummy model predicting negative 100% of the time gets 95% accuracy while finding 0 targets.",
            "feedback": "Correct! On imbalanced data, accuracy gives an illusion of success."
        },
        "q2": {
            "q": "What does a Lift of 3.0 at Decile 1 mean?",
            "options": "A: The model is 300% slower. B: The top 10% scored records contain 3x more positive cases than random outreach.",
            "feedback": "Correct! Lift measures enrichment over the random base rate."
        }
    },
    "intuitive": """
      <p class="lead-text">
        In machine learning examinations and real business systems, no single metric tells the full story. A model that achieves 99% accuracy by predicting that nobody has cancer is useless and lethal.
      </p>
      <p>
        Model evaluation must align mathematically with <strong>business costs</strong>. If distributing marketing discount coupons costs money, false positives waste budget $\\implies$ maximize <strong>Precision</strong>. If detecting machine breakdown saves lives, false negatives cause catastrophe $\\implies$ maximize <strong>Recall</strong>.
      </p>
    """,
    "vis": """
      <div id="cm-lift-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive Confusion Matrix & Trade-off Studio</h4>
        <div class="grid-4-col mb-3" style="gap:10px;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">True Positives (TP): <strong id="cm-tp-val" style="color:#10b981;">380</strong></label>
            <input type="range" id="cm-tp-slider" min="50" max="600" value="380" oninput="SprintDay1Visualizers.updateConfusionLift()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">False Positives (FP): <strong id="cm-fp-val" style="color:#ef4444;">520</strong></label>
            <input type="range" id="cm-fp-slider" min="50" max="1200" value="520" oninput="SprintDay1Visualizers.updateConfusionLift()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">True Negatives (TN): <strong id="cm-tn-val" style="color:#38bdf8;">2607</strong></label>
            <input type="range" id="cm-tn-slider" min="1000" max="3500" value="2607" oninput="SprintDay1Visualizers.updateConfusionLift()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">False Negatives (FN): <strong id="cm-fn-val" style="color:#f59e0b;">192</strong></label>
            <input type="range" id="cm-fn-slider" min="10" max="400" value="192" oninput="SprintDay1Visualizers.updateConfusionLift()" style="width:100%;">
          </div>
        </div>
        <div id="cm-metrics-output"></div>
      </div>
    """,
    "math": """
      <p><strong>Core Evaluation Formulas:</strong></p>
      $$\\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall} = \\frac{TP}{TP + FN}, \\quad \\text{Specificity} = \\frac{TN}{TN + FP}$$
      $$\\text{F1 Score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2TP}{2TP + FP + FN}$$
      $$\\text{Decile Lift} = \\frac{\\% \\text{ of total targets captured in top decile}}{10\\%} = \\frac{\\text{Precision in Decile}}{\\text{Overall Population Base Rate}}$$
      <p><strong>Worked Numerical Example (PRS Q1b Model A):</strong> $TP=380, FP=520, TN=2607, FN=192$. Total = 3,699.</p>
      $$\\text{Precision} = \\frac{380}{380 + 520} = \\frac{380}{900} \\approx 42.22\\%$$
      $$\\text{Recall} = \\frac{380}{380 + 192} = \\frac{380}{572} \\approx 66.43\\%$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Model B yields $TP=480, FP=980, FN=92$. Calculate the Precision of Model B (round to 1 decimal place %).</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod3-ans" placeholder="Precision %..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod3-ans').value); if(Math.abs(v - 32.9) < 0.5) alert('Correct! 480 / (480 + 980) = 480 / 1460 ≈ 32.9%.'); else alert('Incorrect. 480 / (480 + 980) = 32.9%.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>PRS Sample Paper Q1b Model Selection Rubric:</strong></p>
        <ul>
          <li><strong>If coupon budget is limited:</strong> Choose Model A (Linear SVM). Higher Precision (42.2% vs 32.9%) reduces wasted marketing spend on false positives (520 wasted coupons vs 980 for Model B).</li>
          <li><strong>If maximizing market share / sales volume:</strong> Choose Model B (Neural Net). Higher Recall (83.9% vs 66.4%) captures 100 more buying transactions, leaving only 92 missed buyers compared to 192 for Model A.</li>
        </ul>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>High Cost of FP:</strong> Maximize Precision (tight threshold $\\tau > 0.5$).</li>
          <li><strong>High Cost of FN:</strong> Maximize Recall (forgiving threshold $\\tau < 0.5$).</li>
          <li><strong>SHAP:</strong> Fair feature attribution via Shapley values from cooperative game theory.</li>
        </ul>
      </div>
    """
})

# Module 4
modules.append({
    "id": "mod-4",
    "num": 4,
    "title": "Support Vector Machines (SVM): Hyperplanes, Margins, C & Kernels",
    "subtitle": "Support Vectors, Hard/Soft Margins, Slack Variables, Kernel Trick (RBF/Gamma) & KKT Sparsity",
    "badge": "PRS (PSUPR Day 5)",
    "diag": {
        "q1": {
            "q": "What happens when SVM regularization parameter C is set extremely high?",
            "options": "A: The margin becomes wide and ignores errors. B: The margin becomes narrow and strictly penalizes slack violations, increasing overfitting risk.",
            "feedback": "Correct! Large C enforces hard margin behavior (low bias, high variance)."
        },
        "q2": {
            "q": "In an RBF kernel K(x, z) = exp(-gamma * ||x - z||^2), what is the effect of setting gamma very large?",
            "options": "A: The boundary becomes linear. B: The Gaussian bells become sharp spikes around each training point, causing severe overfitting.",
            "feedback": "Correct! High gamma gives tiny radius of influence, creating isolated islands."
        }
    },
    "intuitive": """
      <p class="lead-text">
        Many algorithms find *any* separating boundary between two classes. Support Vector Machines find the <strong>optimal boundary</strong> by maximizing the safety corridor (margin) between the closest points of each class.
      </p>
      <p>
        The points resting directly on the margin corridor edges are the <strong>Support Vectors</strong>. All other points in the training set have zero mathematical impact on the decision boundary! If data is not linearly separable, SVM projects data into higher-dimensional Hilbert space using the <strong>Kernel Trick</strong> without ever computing coordinates explicitly.
      </p>
    """,
    "vis": """
      <div id="svm-margin-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive SVM Margin & C/Gamma Playground</h4>
        <div class="grid-3-col mb-3" style="gap:10px;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Weight w1: <strong id="svm-w1-val" style="color:#38bdf8;">3.0</strong></label>
            <input type="range" id="svm-w1-slider" min="1" max="10" step="0.5" value="3.0" oninput="SprintDay4Visualizers.updateSVM()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Weight w2: <strong id="svm-w2-val" style="color:#10b981;">4.0</strong></label>
            <input type="range" id="svm-w2-slider" min="1" max="10" step="0.5" value="4.0" oninput="SprintDay4Visualizers.updateSVM()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Penalty C: <strong id="svm-c-val" style="color:#f59e0b;">1.0</strong></label>
            <input type="range" id="svm-c-slider" min="0.1" max="10" step="0.5" value="1.0" oninput="SprintDay4Visualizers.updateSVM()" style="width:100%;">
          </div>
        </div>
        <div id="svm-math-output" style="background:var(--bg-secondary); padding:12px; border-radius:6px;"></div>
      </div>
    """,
    "math": """
      <p><strong>Primal Soft-Margin Quadratic Program:</strong></p>
      $$\\min_{\\mathbf{w}, b, \\boldsymbol{\\xi}} \\frac{1}{2}\\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^N \\xi_i \\quad \\text{s.t. } y_i(\\mathbf{w}^T \\mathbf{x}_i + b) \\ge 1 - \\xi_i, \\quad \\xi_i \\ge 0$$
      <p><strong>Slack Variable $\\xi_i$ Interpretation:</strong></p>
      <ul>
        <li>$\\xi_i = 0$: Point is on or outside safety margin ($y_i f(\\mathbf{x}_i) \\ge 1$).</li>
        <li>$0 < \\xi_i < 1$: Point is correctly classified ($y_i f > 0$) but penetrates inside margin.</li>
        <li>$\\xi_i = 1$: Point lies directly on the decision boundary ($f(\\mathbf{x}_i) = 0$).</li>
        <li>$\\xi_i > 1$: Point is on the wrong side and <strong>misclassified</strong>.</li>
      </ul>
      <p><strong>Margin Width Formula:</strong> $\\gamma = \\frac{2}{\\|\\mathbf{w}\\|} = \\frac{2}{\\sqrt{w_1^2 + w_2^2}}$</p>
      <p><strong>Worked Example:</strong> If $\\mathbf{w} = [3, 4]$, $\\|\\mathbf{w}\\| = \\sqrt{3^2 + 4^2} = 5$. Margin width $\\gamma = 2 / 5 = 0.4$.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> If weight vector is $\\mathbf{w} = [1.2, 1.6]$, calculate the exact margin width $\\gamma = 2 / \\|\\mathbf{w}\\|$. (Hint: $\\sqrt{1.2^2 + 1.6^2} = 2.0$).</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod4-ans" placeholder="Margin width..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod4-ans').value); if(Math.abs(v - 1.0) < 0.05) alert('Correct! ||w|| = 2.0, so Margin = 2 / 2.0 = 1.0.'); else alert('Incorrect. 2 / sqrt(1.44 + 2.56) = 2 / 2 = 1.0.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS Scenario Recognition (PRS Q1b):</strong> Support Vector Machines excel in high-dimensional tabular data with clear margin structure. When nonlinear interactions dominate, use RBF kernel. If noise/outliers are prevalent, reduce parameter $C$ to widen margin.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Large C:</strong> Narrow margin, low bias, high variance (overfitting risk).</li>
          <li><strong>Small C:</strong> Wide margin, high bias, low variance (noise tolerant).</li>
          <li><strong>KKT Sparsity:</strong> Only points on or violating margin have $\\alpha_i > 0$.</li>
        </ul>
      </div>
    """
})

# Module 5
modules.append({
    "id": "mod-5",
    "num": 5,
    "title": "Feature Selection & Dimensionality Reduction (PCA vs LDA)",
    "subtitle": "Curse of Dimensionality, Filter/Wrapper/Embedded, Covariance Matrix, Eigenvalues, Energy Compaction & Leakage",
    "badge": "PRS (PSUPR Day 3)",
    "diag": {
        "q1": {
            "q": "What is the key mathematical difference between PCA and Fisher's LDA?",
            "options": "A: PCA uses labels, LDA does not. B: PCA is unsupervised (maximizes total variance); LDA is supervised (maximizes between-class vs within-class scatter).",
            "feedback": "Correct! PCA ignores class labels; LDA uses them to separate classes."
        },
        "q2": {
            "q": "Why was Table 3 in the Nov 2026 PRS sample paper flawed regarding PCA?",
            "options": "A: PCA was computed with too few components. B: The supervised target column 'Revenue' was leaked inside the PCA covariance matrix.",
            "feedback": "Correct! Supervised target labels must NEVER enter unsupervised PCA."
        }
    },
    "intuitive": """
      <p class="lead-text">
        As data dimensions grow, the volume of the space explodes exponentially—a phenomenon known as the <strong>Curse of Dimensionality</strong>. Points become isolated in corners, distance metrics concentrate, and models overfit.
      </p>
      <p>
        <strong>Principal Component Analysis (PCA)</strong> rotates the coordinate axes to align with the directions of maximum variance in the data. The first principal component captures the largest share of information (energy compaction). <strong>Fisher's LDA</strong> finds directions that separate distinct classes while keeping each class tightly clustered.
      </p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">PCA vs LDA Projection Comparison</h4>
        <p style="font-size:0.88rem; color:var(--text-secondary);">
          PCA finds orthogonal axes $\\mathbf{v}_1, \\mathbf{v}_2$ maximizing overall variance $\\mathbf{w}^T \\mathbf{\\Sigma} \\mathbf{w}$.<br>
          LDA solves generalized eigenvalue problem $\\mathbf{S}_W^{-1} \\mathbf{S}_B \\mathbf{w} = \\lambda \\mathbf{w}$ maximizing class separation.
        </p>
        <div style="background:var(--bg-card); padding:10px; border-radius:6px; font-family:var(--font-mono); font-size:0.85rem;">
          <div>[Dataset: 12,330 e-commerce sessions]</div>
          <div>PC1 (Page Value & Duration): Explains 48.2% of variance</div>
          <div>PC2 (Administrative Pages): Explains 24.1% of variance</div>
          <div>Cumulative Top 2 Components: 72.3% of total information preserved!</div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Sample Covariance Matrix:</strong></p>
      $$\\mathbf{\\Sigma} = \\frac{1}{N-1} \\mathbf{X}^T \\mathbf{X} \\quad (\\text{where } \\mathbf{X} \\text{ is zero-centered})$$
      <p><strong>Eigenvalue Decomposition:</strong></p>
      $$\\mathbf{\\Sigma} \\mathbf{v}_i = \\lambda_i \\mathbf{v}_i, \\quad \\text{Explained Variance Ratio} = \\frac{\\lambda_k}{\\sum_{j=1}^d \\lambda_j}$$
      <p><strong>Fisher's Criterion for LDA:</strong></p>
      $$J(\\mathbf{w}) = \\frac{\\mathbf{w}^T \\mathbf{S}_B \\mathbf{w}}{\\mathbf{w}^T \\mathbf{S}_W \\mathbf{w}}, \\quad \\mathbf{S}_B = \\sum N_c (\\boldsymbol{\\mu}_c - \\boldsymbol{\\mu})(\\boldsymbol{\\mu}_c - \\boldsymbol{\\mu})^T, \\quad \\mathbf{S}_W = \\sum \\sum (\\mathbf{x} - \\boldsymbol{\\mu}_c)(\\mathbf{x} - \\boldsymbol{\\mu}_c)^T$$
      <p><strong>Worked Example:</strong> A 2x2 covariance matrix has eigenvalues $\\lambda_1 = 12, \\lambda_2 = 4$.</p>
      $$\\text{Total Variance} = 12 + 4 = 16. \\quad \\text{PC1 EVR} = \\frac{12}{16} = 75\\%, \\quad \\text{PC2 EVR} = \\frac{4}{16} = 25\\%$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A 3-feature dataset has eigenvalues $\\lambda_1 = 30, \\lambda_2 = 15, \\lambda_3 = 5$. What percentage of total variance is retained by keeping the top 2 principal components?</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod5-ans" placeholder="Percentage %..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod5-ans').value); if(Math.abs(v - 90.0) < 1.0) alert('Correct! (30 + 15)/(30 + 15 + 5) = 45 / 50 = 90%.'); else alert('Incorrect. 45 / 50 = 90%.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS PRS Q1e Deconstruction:</strong> In Table 3, the candidate included the target class 'Revenue' in the PCA loadings. Examiners penalized this heavily. The model answer must explicitly state: (1) Target leakage occurs when target $Y$ is fed to PCA; (2) Nominal discrete categories (Browser, OS) cannot be treated as continuous variables in PCA covariance; (3) Scaling is mandatory before computing PCA.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>PCA:</strong> Unsupervised; maximizes overall variance; rank $\\le d$.</li>
          <li><strong>LDA:</strong> Supervised; maximizes class separation; rank $\\le C - 1$.</li>
          <li><strong>Data Leakage Rule:</strong> Fit PCA strictly on training split!</li>
        </ul>
      </div>
    """
})

# Module 6
modules.append({
    "id": "mod-6",
    "num": 6,
    "title": "Clustering & Manifold Discovery (K-Means, DBSCAN & GMM-EM)",
    "subtitle": "WCSS, Elbow Method, Silhouette Score, Hierarchical Linkage, Core/Border/Noise & Soft Responsibilities",
    "badge": "PRS (PSUPR Day 4)",
    "diag": {
        "q1": {
            "q": "What is the primary limitation of K-Means clustering?",
            "options": "A: It cannot cluster numerical data. B: It assumes spherical convex clusters and is sensitive to outliers and initialization.",
            "feedback": "Correct! Non-convex ring shapes or varying cluster densities break K-Means."
        },
        "q2": {
            "q": "In DBSCAN, what distinguishes a Core point from a Border point?",
            "options": "A: Border points have 0 neighbors. B: A Core point has >= MinPts within epsilon; a Border point has < MinPts but is within epsilon of a Core point.",
            "feedback": "Correct! Points with no Core neighbor within epsilon are labeled Noise (-1)."
        }
    },
    "intuitive": """
      <p class="lead-text">
        Clustering groups unlabeled data points so that points in the same cluster are similar while points in different clusters are distinct.
      </p>
      <p>
        <strong>K-Means</strong> partitions space into Voronoi cells around $K$ moving centroids. <strong>Hierarchical Clustering</strong> builds a nested tree (dendrogram). <strong>DBSCAN</strong> finds dense neighborhoods of arbitrary non-convex shape, treating isolated outliers as noise. <strong>Gaussian Mixture Models (GMM)</strong> provide soft probabilistic clustering via Expectation-Maximization.
      </p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Clustering Algorithms Behavior Comparison</h4>
        <table class="styled-table" style="width:100%; font-size:0.85rem;">
          <thead><tr><th>Criterion</th><th>K-Means</th><th>Hierarchical (Ward)</th><th>DBSCAN</th></tr></thead>
          <tbody>
            <tr><td><strong>Cluster Shape</strong></td><td>Spherical / Convex</td><td>Spherical / Variance-minimizing</td><td>Arbitrary / Non-linear manifolds</td></tr>
            <tr><td><strong>Outlier Robustness</strong></td><td>Poor (centroids pulled by outliers)</td><td>Moderate</td><td>Excellent (explicit Noise class -1)</td></tr>
            <tr><td><strong>Complexity</strong></td><td>$O(n \\cdot K \\cdot I \\cdot d)$ (very fast)</td><td>$O(n^2)$ to $O(n^3)$ (slow on big data)</td><td>$O(n \\log n)$ with spatial index</td></tr>
          </tbody>
        </table>
      </div>
    """,
    "math": """
      <p><strong>K-Means Objective (WCSS / Inertia):</strong></p>
      $$J = \\sum_{k=1}^K \\sum_{x_i \\in C_k} \\|x_i - \\mu_k\\|^2$$
      <p><strong>Silhouette Coefficient for Sample $i$:</strong></p>
      $$s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))} \\in [-1, +1]$$
      <p>where $a(i)$ is mean intra-cluster distance, and $b(i)$ is mean nearest-cluster distance.</p>
      <p><strong>Worked Example:</strong> If point $i$ has average distance $a(i) = 2.0$ to members of its own cluster, and average distance $b(i) = 8.0$ to the nearest neighboring cluster:</p>
      $$s(i) = \\frac{8.0 - 2.0}{\\max(2.0, 8.0)} = \\frac{6.0}{8.0} = +0.75 \\quad (\\text{Strong, well-separated cluster assignment!})$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A sample point has intra-cluster distance $a(i) = 5.0$ and nearest-cluster distance $b(i) = 5.0$. Calculate its Silhouette score $s(i)$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod6-ans" placeholder="Silhouette..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod6-ans').value); if(Math.abs(v - 0.0) < 0.01) alert('Correct! (5 - 5)/5 = 0. Point lies on the decision boundary between clusters.'); else alert('Incorrect. (5 - 5)/5 = 0.0.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Model Selection Guide:</strong> When scenario mentions 'unknown number of clusters with noisy outliers' (e.g. GPS traces, spatial defects) $\\implies$ choose <strong>DBSCAN</strong>. When scenario asks for customer segmentation with known marketing personas $\\implies$ choose <strong>K-Means</strong> with Elbow/Silhouette validation.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Silhouette $\\approx +1$:</strong> Highly dense, well-separated clusters.</li>
          <li><strong>Silhouette $\\approx 0$:</strong> Overlapping clusters on boundary.</li>
          <li><strong>Silhouette $< 0$:</strong> Sample assigned to wrong cluster.</li>
        </ul>
      </div>
    """
})

# Module 7
modules.append({
    "id": "mod-7",
    "num": 7,
    "title": "Regression and Alternative Neural Models",
    "subtitle": "Linear/Polynomial Regression, MAE/MSE/R², Radial Basis Functions (RBF), GRNN & Kohonen SOM",
    "badge": "PRS (PSUPR Day 5)",
    "diag": {
        "q1": {
            "q": "What does an R-squared (coefficient of determination) score of 0.85 indicate?",
            "options": "A: 85% of samples are classified correctly. B: 85% of the total variance in the target variable is explained by the regression model.",
            "feedback": "Correct! R^2 = 1 - (SS_res / SS_tot)."
        },
        "q2": {
            "q": "How does a General Regression Neural Network (GRNN) train compared to an MLP?",
            "options": "A: It requires 10,000 backpropagation epochs. B: It is a one-pass memory-based network with zero iterative gradient descent.",
            "feedback": "Correct! GRNN stores training samples directly as radial basis centers."
        }
    },
    "intuitive": """
      <p class="lead-text">
        Regression predicts continuous numerical values rather than discrete classes. Beyond ordinary least squares, alternative neural models offer unique structural benefits:
      </p>
      <ul>
        <li><strong>RBF Networks:</strong> Replace sigmoid hidden units with localized Gaussian basis functions. They train in two fast stages (clustering centers first, then linear weights).</li>
        <li><strong>GRNN:</strong> A memory-based probabilistic neural network that provides instantaneous one-pass regression.</li>
        <li><strong>Self-Organizing Maps (SOM):</strong> Unsupervised neural network that maps high-dimensional data onto a 2D topological grid preserving neighborhood relationships.</li>
      </ul>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Alternative Neural Models Comparison</h4>
        <table class="styled-table" style="width:100%; font-size:0.85rem;">
          <thead><tr><th>Architecture</th><th>Learning Type</th><th>Training Speed</th><th>Best Application</th></tr></thead>
          <tbody>
            <tr><td><strong>Multilayer Perceptron (MLP)</strong></td><td>Supervised (Gradient Descent)</td><td>Slow (iterative backprop)</td><td>Complex non-linear functional mapping</td></tr>
            <tr><td><strong>RBF Network</strong></td><td>Hybrid (K-Means + OLS)</td><td>Very Fast</td><td>Function approximation with local receptive fields</td></tr>
            <tr><td><strong>GRNN</strong></td><td>Supervised (Kernel Density)</td><td>Instantaneous (One-pass)</td><td>Real-time regression with sparse data</td></tr>
            <tr><td><strong>Kohonen SOM</strong></td><td>Unsupervised Competitive</td><td>Moderate</td><td>High-dimensional data visualization on 2D grid</td></tr>
          </tbody>
        </table>
      </div>
    """,
    "math": """
      <p><strong>Coefficient of Determination ($R^2$):</strong></p>
      $$R^2 = 1 - \\frac{SS_{\\text{res}}}{SS_{\\text{tot}}} = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}$$
      <p><strong>Gaussian Radial Basis Function:</strong></p>
      $$\\phi_j(\\mathbf{x}) = \\exp\\left(-\\frac{\\|\\mathbf{x} - \\mathbf{c}_j\\|^2}{2\\sigma_j^2}\\right), \\quad \\hat{y}(\\mathbf{x}) = \\sum_{j=1}^m w_j \\phi_j(\\mathbf{x}) + w_0$$
      <p><strong>Worked Example:</strong> If total variance $SS_{\\text{tot}} = 200$ and model residual error $SS_{\\text{res}} = 30$:</p>
      $$R^2 = 1 - \\frac{30}{200} = 1 - 0.15 = 0.85 \\quad (85\\% \\text{ variance explained!})$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A baseline model has $SS_{\\text{res}} = 50$ and $SS_{\\text{tot}} = 100$. Calculate its $R^2$ value.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod7-ans" placeholder="R2..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod7-ans').value); if(Math.abs(v - 0.5) < 0.05) alert('Correct! 1 - (50/100) = 0.50.'); else alert('Incorrect. 1 - (50/100) = 0.50.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS Open-Book Context:</strong> If asked to propose an architecture for rapid continuous parameter estimation where online retraining cannot afford iterative backpropagation, recommend <strong>RBF / GRNN</strong> because their weights can be solved directly by linear matrix inversion or kernel storage.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>MAE:</strong> Robust to outliers; linear error penalty.</li>
          <li><strong>MSE/RMSE:</strong> Penalizes large errors quadratically.</li>
          <li><strong>RBF:</strong> Localized Gaussian response; fast two-stage training.</li>
        </ul>
      </div>
    """
})

# Module 8
modules.append({
    "id": "mod-8",
    "num": 8,
    "title": "Search and Constraint Satisfaction (A* Optimality & CSP)",
    "subtitle": "State-Space Representation, BFS/DFS/UCS, A* Admissibility & Consistency, CSP Backtracking & AC-3",
    "badge": "IRS (MR Day 1 & 2)",
    "diag": {
        "q1": {
            "q": "Why does A* search evaluate f(n) = g(n) + h(n)?",
            "options": "A: g(n) is past cost from start; h(n) is heuristic estimate to goal.",
            "feedback": "Correct! f(n) balances path cost so far with estimated remaining cost."
        },
        "q2": {
            "q": "What does the Minimum Remaining Values (MRV) heuristic do in CSP search?",
            "options": "A: Selects the variable with the fewest legal values remaining in its domain.",
            "feedback": "Correct! MRV (fail-first) identifies the most constrained variable to prune dead branches early."
        }
    },
    "intuitive": """
      <p class="lead-text">
        When an intelligent system cannot learn directly from data, it must <strong>search</strong> through a combinatorial space of possibilities to find a goal trajectory or satisfying assignment.
      </p>
      <p>
        <strong>A* Search</strong> is the gold standard for state-space pathfinding. By combining known past cost $g(n)$ with a forward heuristic $h(n)$, it guides exploration toward the goal. In <strong>Constraint Satisfaction Problems (CSP)</strong>, variables must be assigned values satisfying explicit constraints (e.g. N-Queens, scheduling, timetable layout).
      </p>
    """,
    "vis": """
      <div id="astar-studio" class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">A* Priority Queue Step-by-Step Search Studio</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:10px;">
          Trace how OPEN queue nodes are evaluated by $f(n) = g(n) + h(n)$ and placed into the CLOSED set.
        </p>
        <div style="display:flex; gap:10px; margin-bottom:10px;">
          <button class="btn btn-primary btn-sm" onclick="SprintDay1Visualizers.stepAStar()">Step Expansion</button>
          <button class="btn btn-outline btn-sm" onclick="SprintDay1Visualizers.resetAStar()">Reset Grid</button>
        </div>
        <div id="astar-status-text" style="font-size:0.88rem; color:var(--text-primary); background:var(--bg-card); padding:10px; border-radius:6px; border-left:3px solid var(--accent-primary);">
          Click 'Step Expansion' to trace OPEN priority queue and CLOSED set.
        </div>
      </div>
    """,
    "math": """
      <p><strong>A* Evaluation Function:</strong></p>
      $$f(n) = g(n) + h(n)$$
      <p><strong>Admissibility (Tree Search Optimality):</strong></p>
      $$h(n) \\le h^*(n) \\quad \\forall n \\quad (\\text{never overestimates true remaining cost})$$
      <p><strong>Consistency / Monotonicity (Graph Search Optimality):</strong></p>
      $$h(n) \\le c(n, a, n') + h(n') \\quad (\\text{triangle inequality})$$
      <p><strong>Why Consistency is Critical in Graph Search:</strong></p>
      $$f(n') = g(n') + h(n') = g(n) + c(n, a, n') + h(n') \\ge g(n) + h(n) = f(n)$$
      <p>This guarantees that $f(n)$ values along any path are <strong>monotonically non-decreasing</strong>, meaning nodes are expanded in strict order of optimal cost. <em>Closed nodes never need to be reopened!</em></p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> In an A* search, node A has path cost from start $g(A) = 12$. Heuristic estimate to goal is $h(A) = 7$. Calculate $f(A)$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod8-ans" placeholder="f(A)..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-mod8-ans').value); if(Math.abs(v - 19.0) < 0.1) alert('Correct! f(A) = 12 + 7 = 19.'); else alert('Incorrect. 12 + 7 = 19.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS Examination Traps in Search:</strong></p>
        <ol>
          <li><strong>Goal Test Timing:</strong> NEVER test if a node is the goal when pushing it to OPEN queue! The goal test MUST occur strictly upon POPPING from OPEN. Pushing goal tests loses optimality.</li>
          <li><strong>Graph Search Fallacy:</strong> Claiming admissibility guarantees optimal graph search. You MUST state that Consistency is required to avoid reopening closed nodes.</li>
        </ol>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Admissible:</strong> $h(n) \\le h^*(n)$ (Optimality in Tree Search).</li>
          <li><strong>Consistent:</strong> $h(n) \\le c(n, n') + h(n')$ (Optimality in Graph Search).</li>
          <li><strong>CSP Heuristics:</strong> MRV (choose variable), LCV (choose value), AC-3 (prune arcs).</li>
        </ul>
      </div>
    """
})

# Module 9
modules.append({
    "id": "mod-9",
    "num": 9,
    "title": "Bayesian Networks, CPTs & d-Separation",
    "subtitle": "Directed Acyclic Graphs, Chain Rule Factorization, Parameter Counting, Chains, Forks & Colliders",
    "badge": "IRS (MR Day 3)",
    "diag": {
        "q1": {
            "q": "In a Bayesian Network with 5 binary variables where each node has at most 2 parents, what is the order of parameters required?",
            "options": "A: Exponential 2^5 = 32. B: Polynomial sum 2^parents <= 5 * 4 = 20 parameters.",
            "feedback": "Correct! Bayesian networks factorize the joint distribution, avoiding exponential parameter explosion."
        },
        "q2": {
            "q": "In a collider structure X -> Y <- Z, are X and Z dependent when Y is unobserved?",
            "options": "A: Yes, dependent. B: No, independent (d-separated) until Y or its child is conditioned on.",
            "feedback": "Correct! Colliders block the path when unobserved, but open the path when conditioned upon."
        }
    },
    "intuitive": """
      <p class="lead-text">
        A full joint probability distribution over $N$ binary variables requires $2^N - 1$ parameters—an astronomical number that is impossible to elicit or store for large systems.
      </p>
      <p>
        <strong>Bayesian Belief Networks (BBN)</strong> exploit conditional independence relationships to factorize the joint distribution into a compact Directed Acyclic Graph (DAG). Each node stores only a small Conditional Probability Table (CPT) conditioned on its immediate parents.
      </p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">d-Separation & Path Blocking Rules</h4>
        <div class="grid-3-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">1. Chain ($X \\to Y \\to Z$)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Blocked (Independent) if intermediate node $Y$ is <strong>OBSERVED</strong>.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">2. Fork ($X \\leftarrow Y \\to Z$)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Blocked (Independent) if common cause $Y$ is <strong>OBSERVED</strong>.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #ef4444;">
            <strong style="color:#ef4444;">3. Collider ($X \\to Y \\leftarrow Z$)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);"><strong>BLOCKED</strong> when $Y$ is unobserved! Path becomes <strong>ACTIVE</strong> when $Y$ is observed.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Chain-Rule Factorization:</strong></p>
      $$P(X_1, X_2, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))$$
      <p><strong>Parameter Counting Example:</strong> For 4 binary variables $A, B, C, D$ where $A \\to B, A \\to C, B \\to D, C \\to D$:</p>
      <ul>
        <li>$P(A)$: $2^0 = 1$ parameter ($P(A=1)$).</li>
        <li>$P(B \\mid A)$: $2^1 = 2$ parameters ($P(B=1 \\mid A=1), P(B=1 \\mid A=0)$).</li>
        <li>$P(C \\mid A)$: $2^1 = 2$ parameters.</li>
        <li>$P(D \\mid B, C)$: $2^2 = 4$ parameters.</li>
        <li><strong>Total BBN Parameters:</strong> $1 + 2 + 2 + 4 = 9$ parameters (vs $2^4 - 1 = 15$ for full joint table).</li>
      </ul>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A node $Y$ in a Bayesian Network has 3 binary parents $A, B, C$. How many independent conditional probability parameters are required in $Y$'s CPT?</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-mod9-ans" placeholder="Parameters..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseInt(document.getElementById('prac-mod9-ans').value); if(v === 8) alert('Correct! 2^3 = 8 parameters.'); else alert('Incorrect. 2^3 = 8 parameters.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Fatal Collider Trap in Exams:</strong> Students often mistakenly believe that observing a node always blocks the path. In a collider ($A \\to B \\leftarrow C$), observing $B$ <em>opens the path</em> and induces dependence between $A$ and $C$ ('Explaining Away').</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Factorization:</strong> Joint probability is product of parents.</li>
          <li><strong>d-Separation:</strong> Chains and Forks blocked by observing middle; Colliders activated by observing middle.</li>
          <li><strong>Explaining Away:</strong> Confirming one cause lowers belief in competing causes.</li>
        </ul>
      </div>
    """
})

# Module 10
modules.append({
    "id": "mod-10",
    "num": 10,
    "title": "Day 1 Mathematical Integration & Crucible",
    "subtitle": "Unified Numerical Problem Solving across Search, Classifiers, SVMs, PCA and Bayes",
    "badge": "PRS + IRS Crucible",
    "diag": {
        "q1": {
            "q": "What is the primary objective of Day 1 Mathematical Integration?",
            "options": "A: Memorizing slide text. B: Synthesizing multiple algorithms to solve unfamiliar end-to-end exam scenarios.",
            "feedback": "Correct! Real exam problems combine preprocessing, feature reduction, and model choice."
        },
        "q2": {
            "q": "Can PCA be applied to nominal categorical variables?",
            "options": "A: Yes, nominal integers have numeric meaning. B: No, PCA requires continuous or ordinal scale; one-hot encoding must precede or MCA should be used.",
            "feedback": "Correct! Treating nominal labels as continuous leads to meaningless covariance calculations."
        }
    },
    "intuitive": """
      <p class="lead-text">
        Day 1 ends by putting all classical components into action simultaneously. In an open-book university examination, questions will rarely ask about an algorithm in complete isolation.
      </p>
      <p>
        You will be presented with a complex business scenario (e.g. online bookstore purchasing intention, industrial conveyor sorting) and asked to evaluate the entire pipeline: preprocessing choices, feature extraction, classifier trade-offs, and probabilistic reasoning.
      </p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Day 1 Comprehensive Integration Map</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px;">
            <strong style="color:#38bdf8;">Pattern Recognition (PRS Track):</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Raw Sensors $\\to$ Scaling $\\to$ PCA/LDA $\\to$ k-NN/SVM/LogReg $\\to$ Confusion Matrix/Lift Deciles.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px;">
            <strong style="color:#10b981;">Machine Reasoning (IRS Track):</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">State Space $\\to$ A* Search ($f=g+h$) $\\to$ CSP Backtracking (MRV+LCV) $\\to$ Bayesian Networks (d-Sep).</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Master Formula Synthesis:</strong></p>
      $$\\text{Margin} = \\frac{2}{\\|\\mathbf{w}\\|}, \\quad P(x \\mid C) = \\frac{\\text{count} + 1}{\\text{total} + |V|}, \\quad f(n) = g(n) + h(n), \\quad \\text{Lift} = \\frac{\\text{Prec}_{\\text{decile}}}{\\text{Base Rate}}$$
      <p>Review the master formula sheet in the Daily Revision tab before attempting the Day 1 timed assessment.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>End-of-Day Challenge:</strong> Head to the <strong>Quizzes & Exam Questions</strong> tab or <strong>Daily Revision</strong> tab to take the 10 Slide Quizzes, 6 Structured Exam Questions, and the 20-minute Timed Assessment.</p>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Readiness Check:</strong> You are now prepared for PRS Section A Question 1 (Bookstore purchasing prediction, SVM vs NN, Lift deciles, PCA leakage) and IRS Search / Bayesian Network questions!</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Completed:</strong> 10 comprehensive modules covering 100% of Day 1 syllabus scope.</li>
          <li><strong>Next Step:</strong> Complete Day 1 Daily Revision & flashcards to lock in memory.</li>
        </ul>
      </div>
    """
})

# Compile sections array
sections = []
for m in modules:
    content_html = make_stage_html(m["num"], m["title"], m["diag"], m["intuitive"], m["vis"], m["math"], m["practice"], m["exam"], m["summary"])
    sections.append({
        "id": m["id"],
        "title": f"Module {m['num']}: {m['title']}",
        "subtitle": m["subtitle"],
        "badge": m["badge"],
        "content": content_html
    })

# Add aliases for backwards compatibility with level-0 to level-6
alias_map = {
    "level-0": "mod-1",
    "level-1": "mod-8",
    "level-2": "mod-2",
    "level-3": "mod-9",
    "level-4": "mod-4",
    "level-5": "mod-6",
    "level-6": "mod-10"
}

for lvl_id, mod_target in alias_map.items():
    target = next((x for x in sections if x["id"] == mod_target), None)
    if target:
        sections.append({
            "id": lvl_id,
            "title": target["title"] + f" (Legacy {lvl_id})",
            "subtitle": target["subtitle"],
            "badge": target["badge"],
            "content": target["content"]
        })

js_output = f"""// Day 1 Content: Classical Machine Learning, Probability & Search
// 10 Comprehensive Modules with 7-Stage Pedagogy for NUS-ISS PRS & IRS Examinations
window.DAY1_CLASSICAL_ML_CONTENT = {{
  id: "day-1-classical-ml",
  title: "Day 1: Classical Machine Learning, Probability & Search",
  author: "NUS-ISS Curriculum Team",
  sections: {json.dumps(sections, indent=2)}
}};
"""

with open("learning_platform/courses/three-day-sprint/day-1-classical-ml/content.js", "w") as f:
    f.write(js_output)

print(f"Generated Day 1 content.js with {len(modules)} modules and {len(sections)} sections (including aliases).")
