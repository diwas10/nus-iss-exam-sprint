// Day 3 Content: Reasoning Systems, Cognitive Architectures & Intelligent System Integration
// Course: Intelligent Pattern Recognition & Reasoning Systems — 3-Day Mastery Sprint
// Subtitle: From Symbolic Knowledge and Uncertainty to Explainable, Adaptive and Hybrid AI Systems

window.DAY3_REASONING_INTEGRATION_CONTENT = {
  id: "day-3-reasoning-integration",
  title: "Day 3: Reasoning Systems, Cognitive Architectures & Intelligent System Integration",
  author: "NUS-ISS Masterclass Senior Faculty",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Unified Mental Model — Connecting Perception, Knowledge, Reasoning, Learning and Action",
      subtitle: "Why Symbolic Rules, Cognitive Memories, Evolutionary Search, and Ensembles Form the Apex of AI Systems",
      badge: "Reasoning & Exam Crucible",
      content: `
        <div class="lesson-card hero-card mb-4">
          <div class="card-icon"><i data-lucide="award"></i></div>
          <div class="card-body">
            <h3>Day 3 Synthesis: Reasoning Systems, Cognitive Architectures & System Integration</h3>
            <p class="lead-text">
              Welcome to the <strong>Grand Finale of your Intensive 3-Day Mastery Sprint</strong>. Today unites deliberative System 2 symbolic reasoning, knowledge graphs, uncertainty calculi, evolutionary search, multimodal sensor fusion, and the full official examination rubrics:
            </p>
            <div class="quote-box">
              <em>"Production rules enforce audited deterministic safety; Knowledge Graph embeddings provide structured relational memory; Certainty Factors and Fuzzy Logic quantify empirical doubt; Genetic Algorithms discover optimal permutations; Multimodal fusion unifies disparate sensors; and Ensembles conquer variance and bias to lock in an A+ in both PRS and IRS."</em>
              <div class="quote-author">— NUS ISS A+ Exam Board</div>
            </div>
          </div>
        </div>

        <div class="grid-3-col mb-4">
          <div class="lesson-card">
            <h4><i data-lucide="shield-check"></i> 1. Rules, Uncertainty & Cognition</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Forward vs Backward chaining, conflict resolution, Frame daemons, Case-Based Reasoning (CBR 4R), MYCIN Certainty Factors, Mamdani Fuzzy Inference, and the 11-Entity Cognitive Framework.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="share-2"></i> 2. Attention, Graphs & GAs</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Transformer Scaled Dot-Product Attention ($QK^T / \\sqrt{d_k}$), TransE Knowledge Graph translation vectors, GraphRAG multi-hop retrieval, and Genetic Algorithm Order Crossover (OX) for TSP routes.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="award"></i> 3. Ensembles & Nov 2026 Crucible</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Condorcet's Jury Theorem, Random Forest feature bagging variance reduction $\\rho \\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2$, AdaBoost exponential loss & $\\alpha_t$ calculus, Stacking OOF, and full Nov 2026 model answers.
            </p>
          </div>
        </div>
      `
    },
    {
      id: "level-1",
      title: "Level 1: Rule-Based Reasoning, Knowledge Representation & Uncertainty (Expanded)",
      subtitle: "Building Explainable Decisions from Facts, Rules, Frame Daemons, Certainty Factors & Fuzzy Logic",
      badge: "Deductive Symbolic Logic & Uncertainty",
      content: `
        <div class="lesson-card mb-4">
          <h3>1. Production Rule Systems: Data-Driven vs Goal-Driven Inference</h3>
          <table class="styled-table" style="font-size:0.88rem; width:100%;">
            <thead><tr><th>Inference Paradigm</th><th>Forward Chaining (Bottom-Up)</th><th>Backward Chaining (Top-Down)</th></tr></thead>
            <tbody>
              <tr><td><strong>Starting Point</strong></td><td>Known sensor facts in Working Memory</td><td>A target hypothesis / goal to prove</td></tr>
              <tr><td><strong>Operation</strong></td><td>Evaluates rule antecedents (IF parts), fires matching rules, asserts new facts</td><td>Works backward from consequents (THEN parts) to verify if antecedents hold</td></tr>
              <tr><td><strong>Exam Example</strong></td><td>Hospital emergency triage & ergonomics alerts (IRS Q1)</td><td>Targeted glaucoma / retinopathy diagnosis (IRS Q3)</td></tr>
            </tbody>
          </table>
          <div style="background:var(--bg-secondary); border-left:3px solid var(--accent-primary); padding:12px; border-radius:6px; margin-top:12px;">
            <strong>Conflict Resolution Strategies:</strong>
            <ul>
              <li><strong>Refractoriness:</strong> Never fire the exact same rule on the same working memory fact bindings twice (prevents infinite loops).</li>
              <li><strong>Specificity:</strong> Rules with more antecedent conditions take priority over more general rules.</li>
              <li><strong>Recency:</strong> Rules matching facts added most recently to working memory fire first.</li>
            </ul>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>2. Frame Knowledge Representation & Daemons (IRS Q1c)</h3>
          <p>
            A Frame represents an entity with named slots. When slot values need dynamic computation or validation, <strong>daemons</strong> are procedurally attached:
          </p>
          <ul>
            <li><strong><code>if-needed</code> Daemon (Lazy Evaluation):</strong> Triggers only when a slot's value is accessed but empty. Computes the value dynamically on demand (e.g. computing distance $D = D_{\\text{cal}} \\times (d_{\\text{cal}} / d_{\\text{obs}})$ from pinhole camera pixel width).</li>
            <li><strong><code>if-added</code> Daemon (Eager Trigger):</strong> Triggers immediately whenever a slot is populated. Performs range constraint checking and fires alerts (e.g. flagging warning if $D \\notin [18, 24]$ inches).</li>
          </ul>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid var(--accent-primary);">
          <h3 style="color:var(--accent-primary); margin-top:0;">3. [Expanded] Case-Based Reasoning (CBR): The 4R Cycle</h3>
          <p>
            Case-Based Reasoning solves new problems by finding similar past cases and adapting their solutions:
          </p>
          <div class="grid-2-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>The 4R Cycle:</strong>
              <ol style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li><strong>Retrieve:</strong> Query case library for most similar historical cases using weighted Euclidean/cosine distance.</li>
                <li><strong>Reuse:</strong> Adapt the retrieved past solution to fit the current problem context.</li>
                <li><strong>Revise:</strong> Evaluate proposed solution in real-world or simulation; repair flaws if outcomes fail.</li>
                <li><strong>Retain:</strong> Store the validated new experience as a new case in the case base for future learning.</li>
              </ol>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Why CBR Excels in Clinical & Engineering Domains:</strong>
              <p style="font-size:0.82rem; margin:4px 0 0 0; line-height:1.45;">
                Unlike deep black-box networks, CBR provides instant <em>precedent-based justification</em> ('Patient X was successfully treated with Protocol Y because their clinical biomarker profile matched Case #402'). Handles rare edge cases where general rules do not exist.
              </p>
            </div>
          </div>

          <!-- Interactive CBR 4R Stepper -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="margin:0; font-size:0.92rem; color:var(--accent-primary);"><i data-lucide="refresh-cw"></i> Interactive CBR 4R Cycle Stepper</h4>
              <button class="btn btn-primary btn-sm" onclick="if(window.ThreeDaySprintDay3Visualizers?.stepCBR) window.ThreeDaySprintDay3Visualizers.stepCBR();">Next Phase <i data-lucide="arrow-right"></i></button>
            </div>
            <div id="cbr-step-display" style="padding:12px; background:var(--bg-card); border-radius:6px; font-size:0.85rem; border-left:3px solid var(--accent-primary);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="color:#3b82f6;">Phase 1: RETRIEVE</strong>
                <span style="font-size:0.75rem; background:rgba(255,255,255,0.08); padding:2px 8px; border-radius:12px; color:#3b82f6; font-weight:600;">K-NN Memory Search</span>
              </div>
              <div>New Patient (Age: 58, IOP: 24 mmHg, Cup-to-Disk: 0.7) queries Case Memory of 500 records. Cosine similarity retrieves nearest exemplar <strong>Case #142</strong> (Glaucoma, IOP 25 mmHg, similarity $S=0.962$).</div>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #f59e0b;">
          <h3 style="color:#f59e0b; margin-top:0;">4. [Added] MYCIN Certainty Factors (CF Calculus)</h3>
          <p>
            Certainty Factors represent clinical confidence under partial evidence: $CF \\in [-1, +1]$, where $+1$ is absolute certainty, $0$ is total ignorance, and $-1$ is absolute falsity:
          </p>
          $$CF(h, e) = MB(h, e) - MD(h, e)$$
          <div class="grid-2-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Rule Propagation:</strong>
              $$CF(h) = CF(\\text{rule}) \\times \\max(0, \\, CF(e))$$
              Conjunction: $CF(e_1 \\land e_2) = \\min(CF(e_1), CF(e_2))$.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Combining Independent Evidence ($CF_1, CF_2 > 0$):</strong>
              $$\\mathbf{CF_{\\text{combine}} = CF_1 + CF_2(1 - CF_1)}$$
              Combines independent clues asymptotically towards $+1.0$.
            </div>
          </div>

          <!-- Interactive MYCIN Combination Workbench -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <h4 style="margin:0 0 10px 0; font-size:0.92rem; color:#f59e0b;"><i data-lucide="calculator"></i> Interactive MYCIN Certainty Factor Combination Studio</h4>
            <div class="grid-2-col" style="gap:14px;">
              <div>
                <label style="font-size:0.82rem; font-weight:600; display:flex; justify-content:space-between;">
                  <span>Evidence 1 ($CF_1$):</span>
                  <span id="mycin-cf1-val" style="color:#f59e0b;">+0.70</span>
                </label>
                <input type="range" id="mycin-cf1-slider" min="-1" max="1" step="0.05" value="0.70" style="width:100%; margin:4px 0;" oninput="window.ThreeDaySprintDay3Visualizers?.updateMYCIN();">

                <label style="font-size:0.82rem; font-weight:600; display:flex; justify-content:space-between; margin-top:8px;">
                  <span>Evidence 2 ($CF_2$):</span>
                  <span id="mycin-cf2-val" style="color:#f59e0b;">+0.50</span>
                </label>
                <input type="range" id="mycin-cf2-slider" min="-1" max="1" step="0.05" value="0.50" style="width:100%; margin:4px 0;" oninput="window.ThreeDaySprintDay3Visualizers?.updateMYCIN();">
              </div>
              <div style="background:var(--bg-card); border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:2px;">Combined Certainty Factor:</div>
                <div id="mycin-result-math" style="font-size:0.95rem; font-weight:700; color:var(--accent-primary);">
                  $$CF_{\text{comb}} = 0.70 + 0.50(1 - 0.70) = \mathbf{+0.850}$$
                </div>
                <div style="margin-top:6px; height:8px; background:#374151; border-radius:4px; overflow:hidden;">
                  <div id="mycin-meter-bar" style="width:92.5%; height:100%; background:linear-gradient(90deg, #10b981, #06b6d4); transition:width 0.2s;"></div>
                </div>
                <div id="mycin-status-note" style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
                  Both clues confirm hypothesis: Asymptotic accumulation towards +1.0 (Increased confidence).
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-top:0;">5. [Added] Fuzzy Sets & Mamdani Fuzzy Inference</h3>
          <p>
            Unlike crisp binary logic ($x \\in \\{0, 1\\}$), fuzzy logic allows continuous degrees of truth: membership function $\\mu_A(x) \\in [0, 1]$.
          </p>
          <div class="grid-3-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Fuzzy Operators:</strong>
              <ul style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li>$\\mu_{A \\cap B}(x) = \\min(\\mu_A(x), \\mu_B(x))$</li>
                <li>$\\mu_{A \\cup B}(x) = \\max(\\mu_A(x), \\mu_B(x))$</li>
                <li>$\\mu_{\\neg A}(x) = 1 - \\mu_A(x)$</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Mamdani 4-Step Pipeline:</strong>
              <ol style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li>Fuzzify crisp inputs</li>
                <li>Evaluate rule antecedents (min)</li>
                <li>Aggregate consequents (max)</li>
                <li>Defuzzify to crisp output</li>
              </ol>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Centroid Defuzzification:</strong>
              $$z^* = \\frac{\\sum z_i \\cdot \\mu(z_i)}{\\sum \\mu(z_i)}$$
              Computes the Center of Gravity (COG) of the aggregate fuzzy area.
            </div>
          </div>

          <!-- Interactive Mamdani Defuzzifier Workbench -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <h4 style="margin:0 0 10px 0; font-size:0.92rem; color:#10b981;"><i data-lucide="activity"></i> Interactive Mamdani Fuzzy Defuzzifier (Center of Gravity)</h4>
            <div class="grid-2-col" style="gap:14px;">
              <div>
                <label style="font-size:0.82rem; font-weight:600; display:flex; justify-content:space-between;">
                  <span>Input Temperature Error ($e$):</span>
                  <span id="mamdani-temp-val" style="color:#10b981;">-3.0 °C (Cold Error)</span>
                </label>
                <input type="range" id="mamdani-temp-slider" min="-10" max="10" step="0.5" value="-3" style="width:100%; margin:4px 0;" oninput="window.ThreeDaySprintDay3Visualizers?.updateMamdani();">

                <div style="font-size:0.75rem; color:var(--text-muted); margin-top:6px; line-height:1.4;">
                  <div><strong>Mamdani Rules:</strong></div>
                  <div>1. IF Error is Cold THEN Heater = High (80%)</div>
                  <div>2. IF Error is OK THEN Heater = Medium (40%)</div>
                  <div>3. IF Error is Hot THEN Heater = Off (0%)</div>
                </div>
              </div>
              <div style="background:var(--bg-card); border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:2px;">Centroid Defuzzified Output ($z^*$):</div>
                <div id="mamdani-result-math" style="font-size:0.95rem; font-weight:700; color:#10b981;">
                  $$z^* = \mathbf{64.0\% \text{ Heater Power}}$$
                </div>
                <div style="margin-top:6px; height:8px; background:#374151; border-radius:4px; overflow:hidden;">
                  <div id="mamdani-meter-bar" style="width:64%; height:100%; background:linear-gradient(90deg, #f59e0b, #ef4444); transition:width 0.2s;"></div>
                </div>
                <div id="mamdani-breakdown-math" style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
                  $$\mu_{\text{Cold}} = 0.60, \quad \mu_{\text{OK}} = 0.40, \quad \mu_{\text{Hot}} = 0.00$$
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-2",
      title: "Level 2: Cognitive Architectures & Human-Inspired Models (IRS Q2)",
      subtitle: "The 11-Entity Cognitive Framework, ACT-R, SOAR & David Marr's 3 Levels of Vision",
      badge: "Cognitive Science & Memory",
      content: `
        <div class="lesson-card mb-4">
          <h3>The 11-Entity Cognitive Model Framework (IRS Nov 2026 Q2h)</h3>
          <p>
            The official NUS ISS cognitive continuum models how biological or artificial agents interact with an environment:
          </p>
          $$\\text{Stimuli} \\xrightarrow{\\text{Perceive}} \\text{Data} \\xrightarrow{\\text{Recognize}} \\text{Information} \\xrightarrow{\\text{Learn}} \\text{Knowledge} \\xrightarrow{\\text{Reason}} \\text{Plan} \\xrightarrow{\\text{Act}} \\text{Effects}$$
          <ol style="font-size:0.88rem; line-height:1.6;">
            <li><strong>Environmental Stimuli:</strong> Physical energy (photons, acoustic pressure).</li>
            <li><strong>Perceive Function:</strong> Physical sensor transduction (optical camera, microphone).</li>
            <li><strong>Raw Data:</strong> Unprocessed numeric arrays (pixel intensities, audio samples).</li>
            <li><strong>Recognize Function:</strong> Deep pattern matching (CNN segmentation, STFT spectrogram).</li>
            <li><strong>Information:</strong> Extracted symbolic features (lesion counts, pitch frequencies).</li>
            <li><strong>Learn Function:</strong> Updating long-term memory (case retention, parameter tuning).</li>
            <li><strong>Knowledge (New / Known):</strong> Structured domain ontology and clinical rules.</li>
            <li><strong>Reason Function:</strong> Deliberative inference (rule engine, constraint satisfaction).</li>
            <li><strong>Plan / Solution:</strong> Action schema (specialist referral, emergency brake command).</li>
            <li><strong>Act Function:</strong> Motor effectors or digital dispatchers (EHR API, robotic arm).</li>
            <li><strong>Effects of Action:</strong> State transition in the physical environment.</li>
          </ol>
        </div>

        <div class="lesson-card mb-4">
          <h3>David Marr's Tri-Level Hypothesis of Vision</h3>
          <div class="grid-3-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:#60a5fa;">1. Computational Level</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>What is the goal?</em> Defines the visual task and abstract logic (e.g. recovering 3D surface geometry from 2D shading).
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:#60a5fa;">2. Algorithmic / Representational</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>How is it computed?</em> The data representations (primal sketch, 2.5D depth sketch, 3D model) and explicit algorithmic steps.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong style="color:#60a5fa;">3. Implementational / Physical</strong>
              <p style="font-size:0.82rem; margin:6px 0 0 0; line-height:1.45;">
                <em>Where does it run?</em> Physical hardware realization (silicon CMOS sensors, GPU tensors, or biological retinal ganglion cells).
              </p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-3",
      title: "Level 3: Transformers, Knowledge Graphs & GraphRAG",
      subtitle: "Scaled Attention, TransE Embedding Translations & Multi-Hop Cypher Queries",
      badge: "Modern Relational AI",
      content: `
        <div class="lesson-card mb-4">
          <h3>Transformer Scaled Dot-Product Attention</h3>
          $$\\mathbf{\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            Dividing by $\\sqrt{d_k}$ prevents the dot product from exploding in magnitude for high dimensions, keeping the softmax function from saturating and vanishing gradients.
          </p>

          <!-- Interactive Attention Scaling Workbench -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h4 style="margin:0; font-size:0.92rem; color:var(--accent-primary);"><i data-lucide="zap"></i> Interactive Attention Scaling Explorer ($\\sqrt{d_k}$)</h4>
              <span id="attn-dk-val" style="font-size:0.82rem; font-weight:700; color:var(--accent-primary);">d_k = 64</span>
            </div>
            <input type="range" id="attn-dk-slider" min="1" max="256" step="1" value="64" style="width:100%; margin:4px 0;" oninput="window.ThreeDaySprintDay3Visualizers?.updateAttention();">
            <div id="attn-result-math" style="background:var(--bg-card); border-radius:6px; padding:10px; margin-top:8px; font-size:0.95rem;">
              $$\\sqrt{d_k} = 8.00, \\quad \\mathbf{p} = [\\, 65.2\\%, \\; 24.3\\%, \\; 10.5\\% \\,]$$
            </div>
            <div id="attn-entropy-note" style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
              <span style="color:#10b981; font-weight:600;">Healthy Softmax Gradient:</span> Dividing by $\\sqrt{d_k}$ scales down logits, preventing one-hot saturation.
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>TransE Knowledge Graph Embeddings & Margin Ranking Loss</h3>
          <p>
            TransE represents facts as triples $(h, r, t)$ in vector space $\\mathbb{R}^k$ such that relation $\\mathbf{r}$ is a translation:
          </p>
          $$\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$$
          $$\\mathcal{L} = \\sum_{(h, r, t) \\in S} \\sum_{(h', r, t') \\in S'} \\max\\left(0, \\, \\gamma + \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| - \\|\\mathbf{h}' + \\mathbf{r} - \\mathbf{t}'\\|\\right)$$
          <p style="font-size:0.88rem; line-height:1.55;">
            Minimizes Euclidean distance for true positive triples while ensuring corrupted negative triples are separated by safety margin $\\gamma$.
          </p>

          <!-- Interactive TransE Vector Studio -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h4 style="margin:0; font-size:0.92rem; color:#8b5cf6;"><i data-lucide="share-2"></i> Interactive TransE Translation Workbench</h4>
              <select id="transe-rel-select" class="form-select form-select-sm" style="background:var(--bg-card); color:var(--text-main); border:1px solid var(--border-color); border-radius:4px; padding:2px 8px; font-size:0.8rem;" onchange="window.ThreeDaySprintDay3Visualizers?.updateTransE();">
                <option value="metformin">(Diabetes, TreatedWith, Metformin)</option>
                <option value="hypertension">(Hypertension, Causes, Retinopathy)</option>
              </select>
            </div>
            <div id="transe-formula-math" style="background:var(--bg-card); border-radius:6px; padding:10px; font-size:0.92rem;">
              $$\\mathbf{h} + \\mathbf{r} = [0.80, 0.20] + [0.10, 0.70] = [0.90, 0.90] \\approx \\mathbf{t}_{\\text{Metformin}} [0.88, 0.92]$$
            </div>
            <div id="transe-score-val" style="font-size:0.75rem; color:#10b981; margin-top:6px; font-weight:600;">
              L2 Norm Distance $\\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| = 0.0283$ (Valid Fact: distance $< \\gamma = 1.0$).
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-4",
      title: "Level 4: Evolutionary Optimization, Recommenders & Multimodal Sensor Systems",
      subtitle: "Genetic Algorithm Order Crossover (OX) & Reverse Vending Machine (RVM) Multi-Sensor Fusion",
      badge: "Optimization & Hardware Fusion",
      content: `
        <div class="lesson-card mb-4">
          <h3>Genetic Algorithms: Permutation Problems & Order Crossover (OX)</h3>
          <p>
            In permutation tasks (e.g. Traveling Salesperson Problem), every allele must appear exactly once. Standard 1-point crossover creates illegal duplicate alleles.
          </p>
          <div style="background:var(--bg-secondary); border-left:3px solid var(--accent-primary); padding:12px; border-radius:6px;">
            <strong>Order Crossover (OX) Procedure:</strong>
            <ol style="font-size:0.85rem; line-height:1.5; margin:6px 0 0 0;">
              <li>Select two cut points and copy the middle substring from Parent 1 directly into Offspring 1.</li>
              <li>Starting from the second cut point, list alleles from Parent 2 cyclically.</li>
              <li>Filter out all alleles already copied into Offspring 1.</li>
              <li>Fill the remaining vacant positions in Offspring 1 cyclically starting from the second cut point.</li>
            </ol>
          </div>

          <!-- Interactive GA Order Crossover Stepper -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <h4 style="margin:0; font-size:0.92rem; color:var(--accent-primary);"><i data-lucide="git-merge"></i> Interactive GA Order Crossover (OX) Stepper</h4>
              <button class="btn btn-primary btn-sm" onclick="if(window.ThreeDaySprintDay3Visualizers?.stepGA) window.ThreeDaySprintDay3Visualizers.stepGA();">Step Crossover <i data-lucide="arrow-right"></i></button>
            </div>
            <div id="ga-ox-display" style="padding:12px; background:var(--bg-card); border-radius:6px; font-size:0.85rem; border-left:3px solid #3b82f6;">
              <div style="font-weight:700; color:#3b82f6; margin-bottom:6px;">Step 1: Select Parents & Cut Points</div>
              <div style="line-height:1.6;">
                <strong>Parent 1:</strong> [ 1, 2, <span style="background:rgba(59,130,246,0.3); padding:2px 4px; border-radius:3px;">3, 4, 5</span>, 6, 7, 8 ]<br>
                <strong>Parent 2:</strong> [ 8, 7, <span style="background:rgba(16,185,129,0.3); padding:2px 4px; border-radius:3px;">6, 5, 4</span>, 3, 2, 1 ]<br>
                <span style="font-size:0.8rem; color:var(--text-muted);">Cut points chosen at positions 2 and 4 (0-indexed).</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Intelligent Sensing Systems: Multimodal Sensor Fusion (ISSM)</h3>
          <p>
            In complex industrial inspection and robotics, no single sensor modality is sufficient. Intelligent systems fuse heterogeneous sensory streams:
          </p>
          <table class="styled-table" style="font-size:0.85rem; width:100%;">
            <thead><tr><th>Fusion Level</th><th>Mechanism</th><th>Advantage</th><th>Disadvantage & Failure Mode</th></tr></thead>
            <tbody>
              <tr><td><strong>Early Fusion (Data-Level)</strong></td><td>Concatenate raw sensor features/vectors into a single joint vector before model input.</td><td>Captures fine-grained cross-modal correlations and physical synergies.</td><td>High dimensional explosion; sensor rate mismatch; total system crashes if 1 sensor drops or has noise.</td></tr>
              <tr><td><strong>Late Fusion (Decision-Level)</strong></td><td>Train separate models per modality; aggregate predictions via weighted voting, soft averaging, or Dempster-Shafer theory.</td><td>Highly robust; handles asynchronous sensor rates; modular updates.</td><td>Cannot learn low-level cross-sensor physical interactions (e.g. sound correlating with vibration).</td></tr>
              <tr><td><strong>Hybrid / Mid-Level Fusion</strong></td><td>Process modalities in parallel feature extractors; fuse intermediate latent representations with rule-based safety overrides.</td><td>Combines cross-modal representation learning with modular safety guardrails.</td><td>Requires multi-branch network training and synchronized temporal buffering.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-top:0;"><i data-lucide="cpu"></i> Reverse Vending Machine (RVM) Multi-Sensor Digital Twin Case Study</h3>
          <p style="font-size:0.88rem; line-height:1.55;">
            An autonomous Reverse Vending Machine accepts used beverage containers, validates deposits, and classifies material into Aluminum, PET Plastic, or Glass.
          </p>
          <div class="grid-2-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Heterogeneous Sensor Modalities:</strong>
              <ul style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li><strong>Inductive Proximity Sensor:</strong> Measures eddy currents. High voltage change indicates metallic aluminum; zero indicates plastic/glass.</li>
                <li><strong>Optical Barcode Scanner:</strong> Reads EAN-13 code to query database for valid container registration.</li>
                <li><strong>Load Cell (Strain Gauge):</strong> Measures weight ($m \\in [12, 28]\\text{g}$). Flags leftover liquids if weight exceeds threshold.</li>
                <li><strong>RGB Vision Camera:</strong> Classifies container geometry and deformation state.</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>Hybrid Decision Logic:</strong>
              <ul style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li>If Inductive Sensor triggers $\\to$ <strong>Aluminum Can</strong> (Rule Override).</li>
                <li>If Inductive Sensor silent and Camera predicts bottle $\\to$ <strong>PET Bottle</strong>.</li>
                <li>If Weight $> 35\\text{g}$ $\\to$ <strong>Reject Container (Liquid Contamination)</strong>.</li>
                <li>If Barcode matches deposit whitelist $\\to$ <strong>Issue 10¢ Refund Voucher</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-5",
      title: "Level 5: Rigorous Ensemble Theory & Official Sample Paper Crucible",
      subtitle: "Condorcet's Jury Proof, Bagging Variance Reduction, AdaBoost Exponential Loss & Official Nov 2026 Answers",
      badge: "Deep Ensemble Mastery",
      content: `
        <div class="lesson-card mb-4">
          <h3>Condorcet's Jury Theorem: Mathematical Proof of Ensemble Superiority</h3>
          <p>
            Consider an ensemble of $M$ independent classifiers (where $M$ is odd), each having probability $p > 0.5$ of being correct. The ensemble makes a majority decision. The probability of the majority vote being correct is:
          </p>
          $$P_{\\text{ensemble}} = \\sum_{k=\\frac{M+1}{2}}^M \\binom{M}{k} p^k (1 - p)^{M - k}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            By the Law of Large Numbers, as $M \\to \\infty$, $\\mathbf{P_{\\text{ensemble}} \\to 1.0}$! For example, with $M = 5$ independent learners each with $p = 0.70$, majority voting achieves $P = 0.8369$ (an 83.7% accuracy, dramatically surpassing any individual base learner).
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Bagging & Random Forest: The Variance Reduction Formula</h3>
          <p>
            Consider an average of $M$ identically distributed base learners, each with individual variance $\\sigma^2$ and positive pairwise correlation $\\rho$:
          </p>
          $$\\mathbf{\\text{Var}\\left( \\frac{1}{M}\\sum_{i=1}^M X_i \\right) = \\rho \\sigma^2 + \\frac{1 - \\rho}{M} \\sigma^2}$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>1. Limit as Trees $M \\to \\infty$:</strong>
              $$\\lim_{M \\to \\infty} \\text{Var} = \\mathbf{\\rho \\sigma^2}$$
              Standard bagging on identical decision trees has high tree correlation $\\rho \\approx 0.8$, so adding more trees hits a hard variance floor!
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border-left:3px solid #10b981;">
              <strong style="color:#10b981;">2. Random Forest Feature Subsampling:</strong>
              By considering only a random subset of $\\sqrt{p}$ features at each split, Random Forest <strong>de-correlates the trees</strong> (driving $\\rho \\to 0.2$). This crushes the variance asymptote $\\rho \\sigma^2$, producing far superior generalization!
            </div>
          </div>

          <!-- Interactive Variance Reduction Studio -->
          <div class="visualizer-container mt-3" style="background:var(--bg-secondary); border-radius:8px; padding:14px;">
            <h4 style="margin:0 0 10px 0; font-size:0.92rem; color:var(--accent-primary);"><i data-lucide="sliders"></i> Interactive Ensemble Variance Reduction Workbench</h4>
            <div class="grid-2-col" style="gap:14px;">
              <div>
                <label style="font-size:0.82rem; font-weight:600; display:flex; justify-content:space-between;">
                  <span>Tree Correlation ($\rho$):</span>
                  <span id="ens-rho-val" style="color:var(--accent-primary);">0.20 (Random Forest)</span>
                </label>
                <input type="range" id="ens-rho-slider" min="0.05" max="0.95" step="0.05" value="0.20" style="width:100%; margin:4px 0;" oninput="window.ThreeDaySprintDay3Visualizers?.updateEnsemble();">

                <label style="font-size:0.82rem; font-weight:600; display:flex; justify-content:space-between; margin-top:8px;">
                  <span>Number of Trees ($M$):</span>
                  <span id="ens-m-val" style="color:var(--accent-primary);">M = 25 trees</span>
                </label>
                <input type="range" id="ens-m-slider" min="1" max="100" step="1" value="25" style="width:100%; margin:4px 0;" oninput="window.ThreeDaySprintDay3Visualizers?.updateEnsemble();">
              </div>
              <div style="background:var(--bg-card); border-radius:6px; padding:10px; display:flex; flex-direction:column; justify-content:center;">
                <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:2px;">Total Ensemble Variance:</div>
                <div id="ens-result-math" style="font-size:0.95rem; font-weight:700; color:var(--accent-primary);">
                  $$\text{Var}(\bar{X}) = 0.200 + 0.032 = \mathbf{0.232 \, \sigma^2}$$
                </div>
                <div id="ens-summary-note" style="font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
                  <span style="color:#10b981; font-weight:600;">Random Forest Decorrelation Benefit:</span> Random feature subsampling drives $\rho \to 0.20$, crushing the variance asymptote.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>AdaBoost Weak Learner Weight Calculus & Exponential Loss Minimization</h3>
          <p>
            AdaBoost sequentially fits weak learners $h_t(\\mathbf{x}) \\in \\{-1, +1\\}$ to minimize the exponential loss function:
          </p>
          $$\\mathcal{L} = \\sum_{i=1}^N \\exp\\left( -y_i H(\\mathbf{x}_i) \\right) = \\sum_{i=1}^N \\exp\\left( -y_i [H_{t-1}(\\mathbf{x}_i) + \\alpha_t h_t(\\mathbf{x}_i)] \\right)$$
          <p>Splitting samples into correct ($y_i h_t = +1$) and misclassified ($y_i h_t = -1$):</p>
          $$\\mathcal{L} = e^{-\\alpha_t} \\sum_{y_i = h_t} w_i^{(t)} + e^{+\\alpha_t} \\sum_{y_i \\ne h_t} w_i^{(t)} = (1 - \\epsilon_t) e^{-\\alpha_t} + \\epsilon_t e^{+\\alpha_t}$$
          <p>Differentiating with respect to $\\alpha_t$ and setting to zero:</p>
          $$\\frac{d\\mathcal{L}}{d\\alpha_t} = -(1 - \\epsilon_t)e^{-\\alpha_t} + \\epsilon_t e^{+\\alpha_t} = 0 \\implies e^{2\\alpha_t} = \\frac{1 - \\epsilon_t}{\\epsilon_t} \\implies \\mathbf{\\alpha_t = \\frac{1}{2} \\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right)}$$
          <p style="font-size:0.85rem; line-height:1.55; margin-top:8px;">
            The sample weight update rule is:
            $$w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-\\alpha_t y_i h_t(\\mathbf{x}_i))}{Z_t}$$
            Misclassified samples are multiplied by $\\exp(+\\alpha_t)$, while correct samples are multiplied by $\\exp(-\\alpha_t)$. The relative update ratio is $\\mathbf{\\exp(2\\alpha_t) = \\frac{1 - \\epsilon_t}{\\epsilon_t}}$.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Stacking (Stacked Generalization) & Out-of-Fold (OOF) CV</h3>
          <p>
            Unlike Bagging (homogeneous trees in parallel) or Boosting (homogeneous trees in sequence), <strong>Stacking</strong> combines heterogeneous base models (e.g. LightGBM + SVM + MLP) using a meta-learner (e.g. Ridge Regression).
          </p>
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin-top:10px; font-size:0.85rem;">
            <strong style="color:#ef4444;"><i data-lucide="shield-alert"></i> Mandatory Out-of-Fold (OOF) Rule:</strong>
            If base models predict on their own training data, their predictions will be overfitted and unnaturally accurate. Training the meta-learner on these in-sample predictions causes extreme target leakage. Base model predictions for the meta-learner MUST be generated strictly using <strong>K-fold Out-of-Fold (OOF) cross-validation</strong>!
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #3b82f6;">
          <h3 style="color:#60a5fa; margin-top:0;"><i data-lucide="file-check"></i> Official Sample Paper Summary Matrix (Nov 2026)</h3>
          <table class="styled-table" style="font-size:0.85rem; width:100%;">
            <thead><tr><th>Paper</th><th>Question</th><th>Topic & Official Solution Key</th><th>Marks</th></tr></thead>
            <tbody>
              <tr><td><strong>PRS</strong></td><td>Q1b</td><td>Bookstore Conversion: Neural Network (52.46% Recall) preferred over SVM (43.17%) to capture 51 additional paying customers.</td><td>8m</td></tr>
              <tr><td><strong>PRS</strong></td><td>Q1e</td><td>PCA Critique: Target label <code>Revenue</code> leaked into PC1 (0.221) and PC4 (0.534); test inference impossible; nominal IDs fed as continuous numbers.</td><td>8m</td></tr>
              <tr><td><strong>PRS</strong></td><td>Q2a</td><td>CNN Redesign: Replace Flatten with GlobalAveragePooling2D (slashing 2.41M weights); replace 918 Cartesian head with 3 parallel heads (Brand/Type/Value).</td><td>8m</td></tr>
              <tr><td><strong>PRS</strong></td><td>Q2c</td><td>Anomaly Detection: Extreme imbalance (2/3000 failures); train Unsupervised Autoencoder on normal data; flag test reconstruction MSE $e(\\mathbf{x}) > \\tau$.</td><td>8m</td></tr>
              <tr><td><strong>IRS</strong></td><td>Q1c</td><td>Ergonomics Frame: if-needed daemon calculates distance $D = 20 \\times (120/d_{\\text{obs}})$; if-added daemon flags posture outside $[18, 24]$ in.</td><td>10m</td></tr>
              <tr><td><strong>IRS</strong></td><td>Q2h</td><td>Cognitive Model: 11-entity mapping from retinal stimuli to vitreoretinal specialist referral EHR dispatch.</td><td>10m</td></tr>
              <tr><td><strong>IRS</strong></td><td>Q3c</td><td>Recommender Critique: Collaborative Filtering fails on eye diseases due to 99.67% sparsity and pathology mismatch (treatments require biological etiology, not star ratings).</td><td>10m</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "level-6",
      title: "Level 6: Comprehensive Grand Crucible & Self-Assessment",
      subtitle: "20-Question Grand Mock Exam & Worked Exam Rubrics",
      badge: "Final Crucible",
      content: `
        <div class="lesson-card mb-4" style="border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-top:0;"><i data-lucide="award"></i> Grand Finale: Proceed to the Day 3 Comprehensive Crucible!</h3>
          <p style="font-size:0.9rem; margin-bottom:14px;">
            Complete your preparation with the 20-Question Grand Mock Exam, review the 6 post-quiz structured exam questions covering the official Nov 2026 rubrics, and use the Doubt Resolver to lock in your A+ grade.
          </p>
          <button class="btn btn-primary" onclick="app.loadLevel('quizzes')">
            <i data-lucide="play"></i> Proceed to Day 3 Grand Mock Exam & Quizzes
          </button>
        </div>
      `
    }
  ]
};
