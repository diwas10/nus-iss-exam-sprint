// NUS ISS Open-Book Revision Handbooks
// Two Separate Comprehensive Printable Reference Bibles:
// 1. ISY5002 — Pattern Recognition Systems (PRS) Handbook
// 2. ISY5001 — Intelligent Reasoning Systems (IRS) Handbook

window.ExamHandbooks = {
  renderPRS: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="handbook-container printable-handbook prs-handbook" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
        <!-- Handbook Header / Print Button -->
        <div class="handbook-topbar mb-4" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #38bdf8; padding-bottom: 14px;">
          <div>
            <span class="badge-tech" style="background: #0284c7; color: white;">NUS-ISS Graduate Certificate in AIS</span>
            <h2 style="margin: 6px 0 0 0; color: #38bdf8;">📘 ISY5002 Pattern Recognition Systems (PRS)</h2>
            <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">
              The Official 36-Hour Revision Bible & Open-Book Exam Companion (PSUPR, PRMLS, ISSM)
            </p>
          </div>
          <button class="btn btn-outline" onclick="window.print()" style="border-color: #38bdf8; color: #38bdf8;">
            <i data-lucide="printer"></i> Print / Save PDF
          </button>
        </div>

        <!-- 30-Minute Reading Phase Tactical Checklist -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
          <h4 style="color: #f59e0b; margin-top: 0;"><i data-lucide="clock"></i> The 30-Minute Scenario Reading Phase Strategy</h4>
          <ol style="margin: 8px 0 0 20px; font-size: 0.88rem; line-height: 1.6; color: var(--text-primary);">
            <li><strong>Minute 0–5: Skim All Scenario Prompts & Questions.</strong> Identify whether the core tasks are tabular e-commerce (PRS Q1 style), vision architecture (PRS Q2a style), robotic RL (PRS Q2b style), sensory vibration anomaly (PRS Q2c style), or Bayesian diagnosis (PRS Q2d style).</li>
            <li><strong>Minute 5–15: Extract the Explicit Constraints.</strong> Underline dataset size, class imbalance ratio (e.g. 3,000 normal vs 2 abnormal), feature types (numerical vs categorical), sequence lengths, sampling rates (e.g. 50 Hz, 4 seconds = 200 samples), and operational hardware constraints.</li>
            <li><strong>Minute 15–25: Check Business Objectives & Trade-offs.</strong> Note whether precision or recall is penalized higher (e.g. coupon waste vs missed purchase; robot collision penalty vs task completion time).</li>
            <li><strong>Minute 25–30: Map to Handbook Architecture Blueprints.</strong> Note the exact formula or architecture diagram you will reproduce.</li>
          </ol>
        </div>

        <!-- Section 1: Master Formula Reference -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-radius: 10px;">
          <h3 style="color: #38bdf8; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
            1. Master Mathematical Formula Reference
          </h3>
          
          <div class="table-responsive mt-3">
            <table class="styled-table" style="width: 100%; font-size: 0.86rem;">
              <thead>
                <tr><th>Technique</th><th>Mathematical Formula</th><th>Key Variables & Meaning</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Nyquist Theorem</strong></td>
                  <td>$$f_s > 2 f_{\\max}, \\quad f_N = \\frac{f_s}{2}$$</td>
                  <td>$f_s$ = sampling rate, $f_N$ = folding Nyquist frequency. If $f > f_N$, aliasing folds as $f_{\\text{alias}} = |f - k f_s|$.</td>
                </tr>
                <tr>
                  <td><strong>Laplace Smoothing</strong></td>
                  <td>$$P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}$$</td>
                  <td>$|V_j|$ = total distinct values for feature $j$. Denominator MUST add $|V_j|$, NOT $+1$!</td>
                </tr>
                <tr>
                  <td><strong>SVM Margin Width</strong></td>
                  <td>$$\\gamma = \\frac{2}{\\|\\mathbf{w}\\|} = \\frac{2}{\\sqrt{\\sum w_i^2}}$$</td>
                  <td>Distance between $\\mathbf{w}^T \\mathbf{x} + b = +1$ and $\\mathbf{w}^T \\mathbf{x} + b = -1$. Larger margin $\\implies$ higher generalization.</td>
                </tr>
                <tr>
                  <td><strong>CNN Output Sizing</strong></td>
                  <td>$$O = \\left\\lfloor \\frac{I - k + 2p}{s} \\right\\rfloor + 1$$</td>
                  <td>$I$ = input dimension, $k$ = kernel size, $p$ = padding, $s$ = stride.</td>
                </tr>
                <tr>
                  <td><strong>CNN Parameter Count</strong></td>
                  <td>$$\\text{Weights} = (k_h \\times k_w \\times C_{\\text{in}}) \\times C_{\\text{out}} + C_{\\text{out}}$$</td>
                  <td>Convolutional layer parameters depend ONLY on filter size and channels, independent of image resolution!</td>
                </tr>
                <tr>
                  <td><strong>Evaluation Metrics</strong></td>
                  <td>$$\\text{Precision} = \\frac{TP}{TP+FP}, \\quad \\text{Recall} = \\frac{TP}{TP+FN}$$</td>
                  <td>$$\\text{F1} = \\frac{2PR}{P+R}, \\quad \\text{Lift} = \\frac{\\text{Decile 1 Responders (\\%)}}{\\text{Overall Responders (\\%)}}$$</td>
                </tr>
                <tr>
                  <td><strong>PCA Covariance & Variance</strong></td>
                  <td>$$\\mathbf{\Sigma} = \\frac{1}{N-1}\\mathbf{X}^T\\mathbf{X}, \\quad \\text{EVR}_k = \\frac{\\lambda_k}{\\sum \\lambda_i}$$</td>
                  <td>Data MUST be zero-centered first. Fit strictly on train split to prevent target leakage!</td>
                </tr>
                <tr>
                  <td><strong>3-Sigma Anomaly Threshold</strong></td>
                  <td>$$\\tau = \\mu_{\\text{error}} + 3 \\sigma_{\\text{error}}$$</td>
                  <td>Calibrated on normal training reconstruction error $e_i = \\|x_i - \\hat{x}_i\\|^2$. If test error $> \\tau \\implies$ anomaly!</td>
                </tr>
                <tr>
                  <td><strong>AdaBoost Alpha & Weight</strong></td>
                  <td>$$\\alpha_t = \\frac{1}{2}\\ln\\left(\\frac{1-\\epsilon_t}{\\epsilon_t}\\right), \\quad w_i^{(t+1)} = w_i^{(t)} e^{-\\alpha_t y_i h_t(x_i)}$$</td>
                  <td>$\\epsilon_t$ = weighted error rate. Misclassified samples get multiplied by $e^{\\alpha_t} > 1$.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Section 2: Step-by-Step Calculation Walkthroughs -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-radius: 10px;">
          <h3 style="color: #38bdf8; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
            2. High-Yield Calculation Walkthroughs
          </h3>

          <div class="mt-3">
            <h4 style="color: var(--accent-cyan); font-size: 1rem;">Procedure 1: Global Average Pooling vs Flatten Layer Redesign (PRS Q2a)</h4>
            <p style="font-size: 0.88rem; line-height: 1.6;">
              <strong>Step 1: Compute Feature Map Size before classification head.</strong> Suppose final conv output is $7 \\times 7 \\times 512$.<br>
              <strong>Step 2: Calculate Flatten layer parameters.</strong> Flatten yields a vector of length $7 \\times 7 \\times 512 = 25,088$. If connecting to a dense layer with 4,096 units, parameters = $25,088 \\times 4,096 + 4,096 = 102,764,544$ (~102.8M parameters!).<br>
              <strong>Step 3: Redesign with Global Average Pooling (GAP).</strong> GAP averages each $7 \\times 7$ slice to a single scalar, reducing $7 \\times 7 \\times 512$ directly to a 512-dim vector with <strong>0 learnable parameters</strong>. Directly connecting 512 to 2 classes yields only $512 \\times 2 + 2 = 1,026$ parameters! This eliminates 99.99% of parameters and prevents overfitting.
            </p>

            <h4 style="color: var(--accent-cyan); font-size: 1rem; margin-top: 14px;">Procedure 2: Conveyor Belt Failure Bayesian Diagnosis (PRS Q2d)</h4>
            <p style="font-size: 0.88rem; line-height: 1.6;">
              Given 9 historical maintenance records: 5 Carryback ($C$), 4 Mistracking ($M$). Observation: Vibration = Fair, Acoustic = Low.<br>
              $$P(C) = 5/9, \\quad P(M) = 4/9$$
              $$P(\\text{Fair} \\mid C) = 1/5, \\quad P(\\text{Low} \\mid C) = 2/5 \\implies P(\\text{Obs} \\mid C) = \\frac{1}{5} \\times \\frac{2}{5} = \\frac{2}{25} = 0.08$$
              $$P(\\text{Fair} \\mid M) = 2/4 = 1/2, \\quad P(\\text{Low} \\mid M) = 2/4 = 1/2 \\implies P(\\text{Obs} \\mid M) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 0.25$$
              $$\\text{Unnormalized Posterior: } P(C) \\cdot P(\\text{Obs} \\mid C) = \\frac{5}{9} \\times 0.08 = \\frac{0.4}{9} \\approx 0.0444$$
              $$P(M) \\cdot P(\\text{Obs} \\mid M) = \\frac{4}{9} \\times 0.25 = \\frac{1.0}{9} \\approx 0.1111$$
              $$\\mathbf{\\text{Decision: } P(M \\mid \\text{Obs}) > P(C \\mid \\text{Obs}) \\implies \\text{Diagnose Mistracking!}}$$
            </p>
          </div>
        </div>

        <!-- Section 3: Scenario Recognition Keywords & Model Selection Guide -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-radius: 10px;">
          <h3 style="color: #38bdf8; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
            3. Scenario Recognition Keywords & Algorithm Selector
          </h3>
          <table class="styled-table" style="width: 100%; font-size: 0.86rem;">
            <thead>
              <tr><th>Scenario Keywords</th><th>Recommended Technique</th><th>Core Justification</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>"Extreme imbalance", "2 abnormal vs 3000 normal", "rare machine breakdown", "wear and tear"</td>
                <td><strong>Unsupervised Autoencoder (3-sigma threshold)</strong></td>
                <td>Supervised classification suffers trivial majority collapse; abnormal samples cannot represent unknown future failure modes.</td>
              </tr>
              <tr>
                <td>"Temporal sequence", "clickstream navigation", "pages visited in order", "dwell time"</td>
                <td><strong>LSTM / GRU or 1D Dilated CNN</strong></td>
                <td>Preserves transition dynamics, memory over multiple steps, and handles variable-length session sequences.</td>
              </tr>
              <tr>
                <td>"High parameter count", "overfitting in deep vision", "dense layer bottleneck"</td>
                <td><strong>Global Average Pooling (GAP) + Skip Connections</strong></td>
                <td>Eliminates fully connected parameters, forces spatial semantic pooling, regularizes network.</td>
              </tr>
              <tr>
                <td>"Coupon distribution", "limited budget", "avoid wasting marketing spend"</td>
                <td><strong>High-Precision Model + Decile Lift Chart Selection</strong></td>
                <td>Maximizes True Positive rate among targeted users; minimizes False Positive coupon wastage.</td>
              </tr>
              <tr>
                <td>"Physical collision risk", "robotic arm in debris", "dangerous exploration"</td>
                <td><strong>Sim-to-Real DRL + Domain Randomization</strong></td>
                <td>Trains safe exploration in physics simulation (MuJoCo) before transferring to physical arm.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Section 4: 10 Fatal Examiner Traps to Avoid -->
        <div class="lesson-card mb-4" style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.2);">
          <h3 style="color: #ef4444; margin-top: 0;"><i data-lucide="alert-octagon"></i> 10 Fatal Examiner Traps in PRS Examinations</h3>
          <ul style="font-size: 0.88rem; line-height: 1.6; color: var(--text-primary); margin-left: 20px;">
            <li><strong>Trap 1 (Laplace Smoothing):</strong> Dividing by $N+1$ instead of $N+|V_j|$. Immediate 2-mark deduction.</li>
            <li><strong>Trap 2 (PCA Data Leakage):</strong> Fitting PCA on the entire dataset before splitting train/test. PCA MUST be fit strictly on train split!</li>
            <li><strong>Trap 3 (Class Imbalance Metric):</strong> Citing Accuracy as proof of good performance on imbalanced data. Use Precision, Recall, F1, or PR-AUC!</li>
            <li><strong>Trap 4 (Nyquist vs Sampling Frequency):</strong> Confusing the sampling rate $f_s$ with folding frequency $f_N = f_s / 2$.</li>
            <li><strong>Trap 5 (CNN Output Sizing):</strong> Forgetting the $+1$ term in $(I - k + 2p)/s + 1$.</li>
            <li><strong>Trap 6 (Supervised Anomaly Fallacy):</strong> Agreeing with a proposal to train a 2-class classifier on 3000:2 data. Always propose unsupervised reconstruction!</li>
            <li><strong>Trap 7 (Anti-Aliasing Filter Location):</strong> Placing digital filtering *after* ADC sampling. Anti-aliasing MUST be an analog hardware low-pass filter *before* ADC!</li>
            <li><strong>Trap 8 (SVM Slack Variable Meaning):</strong> Claiming $\\xi_i > 0$ means misclassified. Only $\\xi_i > 1$ is misclassified; $0 < \\xi_i \\le 1$ is correctly classified within the margin!</li>
            <li><strong>Trap 9 (DTW Constraint):</strong> Forgetting that DTW is $O(NM)$ without Sakoe-Chiba window constraints.</li>
            <li><strong>Trap 10 (Stacking Target Leakage):</strong> Training the meta-learner on the base models' training predictions. Stacking REQUIRES Out-Of-Fold (OOF) cross-validation!</li>
          </ul>
        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.renderLatex) window.renderLatex(container);
    if (window.lucide) window.lucide.createIcons();
  },

  renderIRS: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="handbook-container printable-handbook irs-handbook" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
        <!-- Handbook Header / Print Button -->
        <div class="handbook-topbar mb-4" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #10b981; padding-bottom: 14px;">
          <div>
            <span class="badge-tech" style="background: #059669; color: white;">NUS-ISS Graduate Certificate in AIS</span>
            <h2 style="margin: 6px 0 0 0; color: #10b981;">📗 ISY5001 Intelligent Reasoning Systems (IRS)</h2>
            <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">
              The Official 36-Hour Revision Bible & Open-Book Exam Companion (MR, RS, CS)
            </p>
          </div>
          <button class="btn btn-outline" onclick="window.print()" style="border-color: #10b981; color: #10b981;">
            <i data-lucide="printer"></i> Print / Save PDF
          </button>
        </div>

        <!-- 30-Minute Reading Phase Tactical Checklist -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.08);">
          <h4 style="color: #f59e0b; margin-top: 0;"><i data-lucide="clock"></i> The 30-Minute Scenario Reading Phase Strategy</h4>
          <ol style="margin: 8px 0 0 20px; font-size: 0.88rem; line-height: 1.6; color: var(--text-primary);">
            <li><strong>Minute 0–5: Identify the Primary Case Studies.</strong> In IRS Sample Paper, identify the workplace health chatbot (EyeCoach - Q1), medical diagnostic web portal (A-Eye-Web - Q2 & Q3).</li>
            <li><strong>Minute 5–15: Deconstruct Knowledge Formalisms.</strong> Are you asked for Intent/Slot dialogue definitions (Q1a), Frame schema with inheritance and active daemons (Q1c), HMM sequence classification (Q1d), the 11-entity cognitive framework (Q2h), or Association Mining itemsets (Q3b)?</li>
            <li><strong>Minute 15–25: Check Doctor vs Patient Self-Service Governance.</strong> Watch out for clinical safety, ethical liability, and human-in-the-loop justification questions (Q2i).</li>
            <li><strong>Minute 25–30: Map to the 11-Entity Blueprint & Frame Schema.</strong> Draw the flow diagram layout in your rough notes before writing.</li>
          </ol>
        </div>

        <!-- Section 1: The Exact 11-Entity Cognitive Framework Blueprint (IRS Q2h) -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-radius: 10px;">
          <h3 style="color: #10b981; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
            1. The Exact 11-Entity Cognitive Framework Architecture (IRS Q2h)
          </h3>
          <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
            Official mapping required in IRS Section B Question 2h for autonomous clinical diagnostic systems:
          </p>
          
          <table class="styled-table" style="width: 100%; font-size: 0.86rem;">
            <thead>
              <tr><th>Entity #</th><th>Cognitive Entity</th><th>Role in A-EYE / Medical Architecture</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1</strong></td><td>Sensing</td><td>Physical sensory acquisition: High-res retinal fundus camera, intraocular tonometer, patient symptom text input interface.</td></tr>
              <tr><td><strong>2</strong></td><td>Input</td><td>Raw digital data buffer: Unprocessed JPEG fundus images, pressure numerical readings, raw text strings.</td></tr>
              <tr><td><strong>3</strong></td><td>Information</td><td>Processed features: Cup-to-disc ratio (CDR), optic disc hemorrhages, tokenized symptom embeddings.</td></tr>
              <tr><td><strong>4</strong></td><td>Learn Function</td><td>Inductive learning engine: Retinal CNN feature extractor training, updating association rules from patient historical cases.</td></tr>
              <tr><td><strong>5</strong></td><td>Knowledge Base</td><td>Formal medical repositories: Clinical practice guidelines, ophthalmic ontologies, drug contraindication rules.</td></tr>
              <tr><td><strong>6</strong></td><td>Memory</td><td>Working memory (current patient case facts) + Long-term memory (historical patient registry database).</td></tr>
              <tr><td><strong>7</strong></td><td>Reason Function</td><td>Inference engine: Rule forward-chaining for triage, Bayesian disease posterior calculation, CBR similarity matching.</td></tr>
              <tr><td><strong>8</strong></td><td>Plan / Solution</td><td>Diagnostic output & care plan: Ranked differential diagnoses, recommended confirmatory tests, medication prescription.</td></tr>
              <tr><td><strong>9</strong></td><td>Act Function</td><td>Execution module: Generating clinical report, sending referral alerts to specialist, updating EHR database.</td></tr>
              <tr><td><strong>10</strong></td><td>Output</td><td>Digital & physical signals: Rendered diagnostic dashboard, automated SMS to patient, notification chime.</td></tr>
              <tr><td><strong>11</strong></td><td>Effects of Action</td><td>Clinical real-world outcomes: Patient attends glaucoma specialist, intraocular pressure stabilizes, feedback stored in case base.</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Section 2: Frame-Based Knowledge Schema & Active Daemons (IRS Q1c) -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-radius: 10px;">
          <h3 style="color: #10b981; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
            2. Frame Systems & Active Daemons Design Guide (IRS Q1c)
          </h3>
          
          <div style="font-size: 0.88rem; line-height: 1.6;">
            <p><strong>Core Elements Required by NUS-ISS Examiners:</strong></p>
            <ul>
              <li><strong>Frames (Classes & Instances):</strong> Taxonomy hierarchy from general to specific (e.g. <code>Entity -> Workstation -> Display</code>, <code>Entity -> Human -> Employee</code>).</li>
              <li><strong>Inheritance:</strong> Specific instances inherit slots and default values from underlying parent frames (e.g. <code>SoftwareEngineer</code> inherits <code>eye_care_policy</code> from <code>Employee</code>).</li>
              <li><strong>Slots:</strong> Attributes capturing domain properties (e.g. <code>screen_distance_cm</code>, <code>session_work_time_min</code>, <code>blink_frequency</code>).</li>
              <li><strong>Facets:</strong> Metadata defining slot constraints (e.g. <code>value-type</code>, <code>default-value</code>, <code>range</code>).</li>
              <li><strong>Active Daemons (Procedural Attachments):</strong>
                <ul>
                  <li><code>if-needed</code>: Fires lazily when a slot value is requested but empty. <em>Example:</em> <code>calc_distance()</code> calculates distance from camera face bounding-box radius $D = \\frac{f \\cdot W}{P}$.</li>
                  <li><code>if-added</code>: Fires when a slot value is written or updated. <em>Example:</em> <code>check_break_schedule()</code> checks if <code>work_time >= 20 min</code> and triggers the 20-20-20 alert.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <!-- Section 3: Master Formula Reference for IRS -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-radius: 10px;">
          <h3 style="color: #10b981; border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
            3. IRS Master Formula Reference
          </h3>
          <table class="styled-table" style="width: 100%; font-size: 0.86rem;">
            <thead>
              <tr><th>Method</th><th>Formula</th><th>Examiner Notes</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A* Search</strong></td>
                <td>$$f(n) = g(n) + h(n)$$</td>
                <td>$g(n)$ = exact path cost from start, $h(n)$ = heuristic estimate to goal.<br>Admissible: $h(n) \\le h^*(n)$.<br>Consistent: $h(n) \\le c(n, a, n') + h(n')$.</td>
              </tr>
              <tr>
                <td><strong>MYCIN CF Combination</strong></td>
                <td>$$CF_{\\text{combine}} = CF_1 + CF_2 - CF_1 \\cdot CF_2 \\quad (CF_1, CF_2 \\ge 0)$$</td>
                <td>If both $CF_1, CF_2 < 0 \\implies CF_1 + CF_2 + CF_1 \\cdot CF_2$.<br>If opposite signs $\\implies \\frac{CF_1 + CF_2}{1 - \\min(|CF_1|, |CF_2|)}$.</td>
              </tr>
              <tr>
                <td><strong>Fuzzy Centroid Defuzzification</strong></td>
                <td>$$z^* = \\frac{\\sum z_i \\cdot \\mu(z_i)}{\\sum \\mu(z_i)}$$</td>
                <td>Center of gravity of the clipped/aggregated fuzzy membership area.</td>
              </tr>
              <tr>
                <td><strong>Association Support & Lift</strong></td>
                <td>$$\\text{Supp} = \\frac{\\text{count}(X \\cup Y)}{N}, \\quad \\text{Lift} = \\frac{\\text{Conf}(X \\implies Y)}{\\text{Supp}(Y)}$$</td>
                <td>Lift $> 1$ indicates positive association; Lift $= 1$ independence; Lift $< 1$ negative substitution.</td>
              </tr>
              <tr>
                <td><strong>TransE KG Loss</strong></td>
                <td>$$\\mathcal{L} = \\max\\left(0, \\gamma + \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| - \\|\\mathbf{h}' + \\mathbf{r} - \\mathbf{t}'\\|\\right)$$</td>
                <td>Enforces head + relation $\\approx$ tail for true triples while penalizing corrupted negative triples by margin $\\gamma$.</td>
              </tr>
              <tr>
                <td><strong>Genetic Order Crossover (OX)</strong></td>
                <td>$$\\text{Child Swath} = \\text{Parent 1 Swath}, \\quad \\text{Remainder} = \\text{Parent 2 in relative order}$$</td>
                <td>Critical for permutation problems (TSP) to guarantee every city is visited exactly once with no duplicates!</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Section 4: 10 Fatal Examiner Traps to Avoid in IRS -->
        <div class="lesson-card mb-4" style="background: rgba(239, 68, 68, 0.06); border: 1px solid rgba(239, 68, 68, 0.2);">
          <h3 style="color: #ef4444; margin-top: 0;"><i data-lucide="alert-octagon"></i> 10 Fatal Examiner Traps in IRS Examinations</h3>
          <ul style="font-size: 0.88rem; line-height: 1.6; color: var(--text-primary); margin-left: 20px;">
            <li><strong>Trap 1 (Graph Search Admissibility):</strong> Claiming admissibility alone guarantees optimality in Graph Search. Graph Search REQUIRES Consistency (Monotonicity)!</li>
            <li><strong>Trap 2 (Collider d-Separation):</strong> Believing an unobserved collider blocks the path. In colliders ($X \\to Y \\leftarrow Z$), the path is BLOCKED when $Y$ is unobserved, but becomes ACTIVE when $Y$ is observed (explaining away)!</li>
            <li><strong>Trap 3 (Rule Engine vs CBR):</strong> Recommending CBR when exact legal or medical guidelines must be strictly enforced. Guidelines require Rule Engines; CBR is for experiential problem solving where rules cannot be formalized!</li>
            <li><strong>Trap 4 (Single Decision Tree for Medical Diagnosis):</strong> Selecting a single decision tree over k-NN or Random Forest for 40 symptoms + 10 signs (IRS Q3a). Single trees suffer extreme high variance and greedy bias.</li>
            <li><strong>Trap 5 (TransE 1-to-N Limitation):</strong> Using TransE for 1-to-N relations (e.g. <code>is_director_of</code>). TransE forces all tail entities to map to the exact same point! Must use TransH or TransR.</li>
            <li><strong>Trap 6 (TSP Crossover):</strong> Using standard 1-point crossover on TSP paths. This produces invalid tours with duplicate cities and missing cities. Must use Order Crossover (OX) or PMX!</li>
            <li><strong>Trap 7 (Support Threshold in Healthcare):</strong> Setting min_support too high (e.g. 20%) in clinical association mining. Rare life-threatening diseases have $<1\\%$ support and would be completely pruned out!</li>
            <li><strong>Trap 8 (MYCIN Disbelief Combination):</strong> Forgetting that certainty factors range from $-1$ to $+1$, not $0$ to $1$.</li>
            <li><strong>Trap 9 (RAG Hallucination Mitigation):</strong> Claiming vector similarity search guarantees factual accuracy. RAG requires Knowledge Graph verification (GraphRAG) or deterministic rule checks.</li>
            <li><strong>Trap 10 (Patient Self-Service Endorsement):</strong> Agreeing to replace primary care doctors with autonomous self-service apps without stating medical liability, false-negative risks, and Human-in-the-Loop governance.</li>
          </ul>
        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.renderLatex) window.renderLatex(container);
    if (window.lucide) window.lucide.createIcons();
  }
};
