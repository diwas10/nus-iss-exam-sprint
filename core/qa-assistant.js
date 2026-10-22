// NUS ISS Interactive Study & Exam Doubt Q&A Assistant
// Intelligent, syllabus-grounded Q&A engine with KaTeX formulas, pre-loaded exam doubts, and personal notebook

window.QAAssistant = {
  knowledgeBase: [
    {
      keywords: ["laplace", "smoothing", "naive bayes", "denominator", "|v|", "zero probability"],
      title: "Why does Laplace Smoothing add |V| to the denominator in Naive Bayes?",
      topic: "Supervised Classifiers (Day 1 / Classical ML)",
      formula: "P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}",
      answer: `
        <p>In Naive Bayes, if a feature value $x_j$ never appeared with class $C_k$ in the training data, its conditional probability is $\\text{count}(x_j, C_k) / \\text{count}(C_k) = 0$. Because Naive Bayes multiplies probabilities across all features ($P(C_k) \\prod P(x_j \\mid C_k)$), a single zero wipes out the entire class probability regardless of how strong the other evidence is!</p>
        <p>To fix this, we add a pseudo-count of $+1$ to the numerator for every possible value. If attribute $X_j$ has $|V_j|$ distinct possible values, we are effectively adding $1 \\times |V_j|$ total imaginary observations. To keep the total probability summing to 1 (Axiom of Probability: $\\sum_{v \\in V_j} P(X_j = v \\mid C_k) = 1$), you <strong>MUST add $|V_j|$ to the denominator</strong>.</p>
        <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:8px 12px; border-radius:4px; margin-top:8px;">
          <strong>Exam Warning:</strong> The #1 mistake students make in PRS exams is dividing by $\\text{count}(C_k) + 1$ instead of $\\text{count}(C_k) + |V_j|$. This immediately loses 2 marks!
        </div>
      `
    },
    {
      keywords: ["a*", "admissible", "admissibility", "consistent", "consistency", "monotonicity", "heuristics", "tree search", "graph search"],
      title: "A* Admissibility vs Consistency (Monotonicity) — When is A* Optimal?",
      topic: "State-Space Search (Day 1 / Search)",
      formula: "h(n) \\le h^*(n) \\quad \\text{(Admissible)}, \\quad h(n) \\le c(n, a, n') + h(n') \\quad \\text{(Consistent)}",
      answer: `
        <p><strong>1. Admissibility ($h(n) \\le h^*(n)$):</strong> The heuristic never overestimates the true remaining cost to the goal. Admissibility is sufficient to guarantee an optimal path in <strong>Tree Search $A^*$</strong>.</p>
        <p><strong>2. Consistency / Monotonicity:</strong> Satisfies the triangle inequality: the estimated cost to the goal from node $n$ cannot exceed the step cost to neighbor $n'$ plus the estimated cost from $n'$ to goal. Consistency guarantees that the $f$-values along any path are monotonically non-decreasing ($f(n') \\ge f(n)$).</p>
        <p><strong>3. Critical Graph Search Rule:</strong> In <strong>Graph Search</strong> (where nodes are stored in a Closed list), admissibility alone is NOT enough! If $h(n)$ is admissible but inconsistent, $A^*$ may reach a state via an expensive path first and close it, missing a subsequent cheaper path. Consistency guarantees that the first time a node is popped from the Open priority queue, the path is already optimal, so <em>closed nodes never need to be reopened</em>.</p>
      `
    },
    {
      keywords: ["nyquist", "sampling", "aliasing", "folding", "ghost frequency", "filter"],
      title: "Nyquist Sampling Theorem, Aliasing & Anti-Aliasing Filter Placement",
      topic: "Sensory Signals (Day 2 / Signal Processing)",
      formula: "f_s > 2 f_{\\max}, \\quad f_{\\text{alias}} = |f_{\\text{signal}} - k \\cdot f_s|",
      answer: `
        <p>The Nyquist-Shannon Sampling Theorem states that a continuous-time signal must be sampled at a rate $f_s$ strictly greater than twice its highest frequency component ($2 f_{\\max}$) to be perfectly reconstructed.</p>
        <p><strong>What is Aliasing?</strong> If $f_s \\le 2 f_{\\max}$, high-frequency components 'fold' across the Nyquist frequency $f_N = f_s / 2$ and disguise themselves as lower-frequency 'ghost' signals in the sampled data.</p>
        <p><strong>Filter Placement:</strong> The analog low-pass Anti-Aliasing filter MUST be placed <strong>BEFORE the Analog-to-Digital Converter (ADC)</strong>. Once an aliased digital sample enters memory, the high and low frequencies have collided into the same digital numbers — no digital filter on earth can separate them!</p>
      `
    },
    {
      keywords: ["dtw", "dynamic time warping", "sakoe-chiba", "alignment", "euclidean distance"],
      title: "Why use Dynamic Time Warping (DTW) instead of Euclidean Distance?",
      topic: "Signal Alignment (Day 2 / Signal Processing)",
      formula: "D(i, j) = d(i, j) + \\min\\left(D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1)\\right)",
      answer: `
        <p>Euclidean distance assumes a strict 1-to-1 linear correspondence between time steps ($t_1 \\leftrightarrow t_1, t_2 \\leftrightarrow t_2$). It requires both sequences to have identical lengths and collapses if one signal is slightly stretched, compressed, or phase-shifted (e.g. someone walking at 4 km/h vs 5 km/h).</p>
        <p><strong>DTW</strong> non-linearly warps the time axis by matching 1-to-many or many-to-1 points to find the minimal cumulative warping path through dynamic programming. The <strong>Sakoe-Chiba band</strong> ($|i - j| \\le w$) constrains the search window to prevent unrealistic pathological alignments (e.g. mapping 1 millisecond of sound to 5 seconds of silence) and slashes computational complexity from $O(N M)$ to $O(N w)$.</p>
      `
    },
    {
      keywords: ["cnn", "parameters", "parameter counting", "flatten", "global average pooling", "gap"],
      title: "How to calculate Conv2D and Dense parameters, and why replace Flatten with GAP?",
      topic: "Deep Learning (Day 2 / Deep Learning)",
      formula: "\\text{Conv2D Params} = (K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}, \\quad \\text{Dense Params} = (N_{\\text{in}} + 1) \\times N_{\\text{out}}",
      answer: `
        <p><strong>1. Conv2D Formula:</strong> Each filter has dimensions $K_h \\times K_w$ spanning across all input channels $C_{\\text{in}}$, plus 1 learnable bias term. There are $C_{\\text{out}}$ such filters.</p>
        <p><strong>2. The Flatten Trap (PRS Q2a):</strong> Flattening a $7 \\times 7 \\times 192 = 9408$ feature tensor into a Dense(256) layer creates $(9408 + 1) \\times 256 = 2,408,704$ parameters! In the Nov 2026 PRS paper, this accounted for 93.4% of the entire network's weights, causing massive overfitting on just 5,000 images.</p>
        <p><strong>3. The GAP Solution:</strong> GlobalAveragePooling2D collapses each $7 \\times 7$ feature map to its average scalar, outputting a compact 192-vector with <strong>0 trainable parameters</strong>. Feeding that into Dense(256) requires only $(192 + 1) \\times 256 = 49,408$ weights — saving 98% of parameters!</p>
      `
    },
    {
      keywords: ["d-separation", "bayesian network", "collider", "explaining away", "v-structure"],
      title: "d-Separation & The V-Structure (Collider) Trap in Bayesian Networks",
      topic: "Bayesian Reasoning (Day 1 / Probability)",
      formula: "A \\to B \\leftarrow C \\quad (\\text{Marginally Independent, Conditionally Dependent})",
      answer: `
        <p>In a Bayesian Directed Acyclic Graph (DAG), d-separation determines whether variable $A$ is conditionally independent of $C$ given set $Z$.</p>
        <p><strong>Chains ($A \\to B \\to C$) and Forks ($A \\leftarrow B \\to C$):</strong> The path is OPEN when $B$ is unobserved. Conditioning on $B$ BLOCKS the path.</p>
        <p><strong>The Collider Trap ($A \\to B \\leftarrow C$):</strong> When $B$ is unobserved, the path is BLOCKED (they are marginally independent: $P(A, C) = P(A)P(C)$). BUT conditioning on $B$ or any descendant of $B$ <strong>ACTIVATES</strong> the path! This is the famous <em>'Explaining Away'</em> phenomenon (e.g. if the grass is wet ($B$), learning it rained ($A$) lowers the probability that the sprinkler was left on ($C$)).</p>
      `
    },
    {
      keywords: ["pca", "leakage", "target leakage", "prs q1e", "covariance", "dimension reduction"],
      title: "Why is PCA Target Leakage Fatal in Exams (PRS Q1e Analysis)?",
      topic: "Dimensionality & Features (Day 1 / Classical ML)",
      formula: "\\text{Covariance Matrix } \\Sigma = \\frac{1}{N-1} X^T X",
      answer: `
        <p>PCA (Principal Component Analysis) is strictly an <strong>unsupervised</strong> transformation. It calculates eigenvectors of the feature covariance matrix to find directions of maximum feature variance without knowledge of target classes.</p>
        <p><strong>The Exam Trap:</strong> In Table 3 of the Nov 2026 PRS exam question, the supervisor included the binary target column <code>Revenue</code> directly inside the PCA input table (loadings were 0.221 in PC1 and 0.534 in PC4). This is catastrophic <strong>target leakage</strong>: at real-world test time, the target label is unknown, so the deployed PCA projection cannot be computed! Furthermore, arbitrary nominal identifiers (e.g. Browser ID 1, 2, 3) were treated as continuous numeric quantities.</p>
      `
    },
    {
      keywords: ["forward chaining", "backward chaining", "conflict resolution", "rules", "daemons"],
      title: "Forward vs Backward Chaining & Conflict Resolution Strategies",
      topic: "Rule Engines (Day 3 / Reasoning Systems)",
      formula: "\\text{Conflict Set: } \\{R_1, R_2, \\dots, R_k\\} \\xrightarrow{\\text{Resolution}} R^*",
      answer: `
        <p><strong>Forward Chaining (Data-Driven / Bottom-Up):</strong> Starts with known facts in Working Memory, fires rules whose antecedents match, asserts new conclusions, and repeats until a goal is reached or no more rules fire. Ideal for real-time monitoring, sensor alert generation, and hospital emergency triage.</p>
        <p><strong>Backward Chaining (Goal-Driven / Top-Down):</strong> Starts with a hypothesis (e.g. 'Patient has Glaucoma') and works backwards to see if available facts support it. If facts are missing, the system interactively prompts the user for specific evidence. Ideal for structured diagnosis and troubleshooting.</p>
        <p><strong>Conflict Resolution Strategies:</strong> (1) <em>Refractoriness</em> (prevents firing the exact same rule on the same facts twice to stop infinite loops), (2) <em>Specificity</em> (more specific rules with more preconditions take priority), (3) <em>Recency</em> (rules matching newly asserted working memory facts take precedence).</p>
      `
    },
    {
      keywords: ["adaboost", "ensemble", "bagging", "boosting", "sample weights", "alpha"],
      title: "AdaBoost Weak Learner Weight & Sample Reweighting Calculus",
      topic: "Ensemble Methods (Day 3 / Integration & Crucible)",
      formula: "\\alpha_t = \\frac{1}{2}\\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right), \\quad w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-\\alpha_t y_i h_t(\\mathbf{x}_i))}{Z_t}",
      answer: `
        <p>AdaBoost builds an ensemble of weak learners sequentially. If weak learner $h_t$ has weighted error rate $\\epsilon_t$:</p>
        <ul>
          <li>If $\\epsilon_t = 0.5$ (random guess), voting weight $\\alpha_t = 0$.</li>
          <li>As $\\epsilon_t \\to 0$, voting weight $\\alpha_t \\to +\\infty$.</li>
          <li>If a sample is correctly classified ($y_i h_t = +1$), its weight is multiplied by $e^{-\\alpha_t} < 1$ (downweighted).</li>
          <li>If misclassified ($y_i h_t = -1$), its weight is multiplied by $e^{+\\alpha_t} > 1$ (heavily amplified), forcing the next iteration's weak learner to specialize on the hard borderline mistakes.</li>
        </ul>
      `
    }
  ],

  init: function() {
    this.injectGlobalWidget();
  },

  renderInline: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const html = `
      <div class="qa-inline-section mt-5" style="border-top: 2px dashed var(--border-color); padding-top: 25px;">
        <div class="lesson-card" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(16, 185, 129, 0.08)); border-left: 4px solid var(--accent-primary); border-radius: 12px; padding: 22px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge-tech" style="background: var(--accent-primary); color: #fff;">
                <i data-lucide="help-circle" style="width: 14px; height: 14px; vertical-align: middle;"></i> Exam Doubt Resolver
              </span>
              <h3 style="margin: 0; font-size: 1.15rem; color: var(--text-primary);">Have a Question or Exam Doubt on This Topic?</h3>
            </div>
            <span style="font-size: 0.8rem; color: var(--text-muted);"><i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Instant Syllabus Search</span>
          </div>

          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 16px;">
            Type any question or select a frequent exam doubt below to get an instant, step-by-step mathematical explanation, formula derivation, and exam scoring tips.
          </p>

          <!-- Query Input -->
          <div style="display: flex; gap: 10px; margin-bottom: 16px;">
            <div style="position: relative; flex: 1;">
              <input type="text" id="inline-qa-input" class="form-control" placeholder="Ask anything (e.g. 'Why add |V| in Laplace smoothing?', 'A* graph search optimality', 'Conv2D parameters')..." style="width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-primary); font-size: 0.9rem;" onkeydown="if(event.key==='Enter') QAAssistant.handleInlineQuery();">
            </div>
            <button class="btn btn-primary" onclick="QAAssistant.handleInlineQuery()" style="display: flex; align-items: center; gap: 6px; padding: 0 18px;">
              <i data-lucide="send"></i> Ask
            </button>
          </div>

          <!-- Quick Suggested Doubts -->
          <div class="quick-doubts mb-3">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 8px;">
              Popular Exam Doubts:
            </span>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('laplace smoothing denominator |V|')" style="font-size: 0.78rem;">
                📌 Laplace Smoothing |V| Rule
              </button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('A* admissibility consistency graph search')" style="font-size: 0.78rem;">
                📌 A* Graph Search Optimality
              </button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('nyquist sampling aliasing filter')" style="font-size: 0.78rem;">
                📌 Nyquist Aliasing & Filter Placement
              </button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('cnn parameters flatten global average pooling')" style="font-size: 0.78rem;">
                📌 CNN Flatten vs GAP Parameters
              </button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('d-separation collider explaining away')" style="font-size: 0.78rem;">
                📌 d-Separation Collider Trap
              </button>
              <button class="btn btn-outline btn-sm" onclick="QAAssistant.askPreset('adaboost weak learner weight alpha')" style="font-size: 0.78rem;">
                📌 AdaBoost Alpha & Sample Reweight
              </button>
            </div>
          </div>

          <!-- Answer Container -->
          <div id="inline-qa-answer" style="display: none; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color); padding: 18px; margin-top: 16px;">
          </div>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', html);
    if (window.lucide) window.lucide.createIcons();
  },

  handleInlineQuery: function() {
    const input = document.getElementById('inline-qa-input');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    this.respond(val, 'inline-qa-answer');
  },

  askPreset: function(query) {
    const input = document.getElementById('inline-qa-input');
    if (input) input.value = query;
    this.respond(query, 'inline-qa-answer');
  },

  respond: function(query, outputContainerId) {
    const container = document.getElementById(outputContainerId);
    if (!container) return;

    const qLower = query.toLowerCase();
    
    // Find best match in knowledge base
    let bestMatch = null;
    let maxHits = 0;

    this.knowledgeBase.forEach(item => {
      let hits = 0;
      item.keywords.forEach(kw => {
        if (qLower.includes(kw.toLowerCase())) hits++;
      });
      if (hits > maxHits) {
        maxHits = hits;
        bestMatch = item;
      }
    });

    let html = '';

    if (bestMatch && maxHits > 0) {
      html = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 12px;">
          <div>
            <span class="badge-tech" style="font-size: 0.75rem; background: rgba(59,130,246,0.15); color: #60a5fa;">${bestMatch.topic}</span>
            <h4 style="margin: 6px 0 0 0; color: var(--accent-primary); font-size: 1.05rem;">${bestMatch.title}</h4>
          </div>
          <button class="btn btn-outline btn-sm" onclick="QAAssistant.saveToNotebook('${bestMatch.title.replace(/'/g, "\\'")}')" style="font-size: 0.75rem;">
            ⭐ Save Doubt
          </button>
        </div>

        ${bestMatch.formula ? `
          <div style="background: rgba(0,0,0,0.25); border-radius: 6px; padding: 10px 14px; text-align: center; margin-bottom: 14px; font-size: 1.05rem; border: 1px solid rgba(255,255,255,0.05);">
            $${bestMatch.formula}$
          </div>
        ` : ''}

        <div style="font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">
          ${bestMatch.answer}
        </div>
      `;
    } else {
      // Dynamic synthesis for unlisted query
      html = `
        <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 12px;">
          <span class="badge-tech" style="font-size: 0.75rem;">NUS ISS Masterclass Assistant</span>
          <h4 style="margin: 6px 0 0 0; color: var(--text-primary); font-size: 1.05rem;">Analysis of: "${query}"</h4>
        </div>
        <div style="font-size: 0.92rem; line-height: 1.65; color: var(--text-primary);">
          <p>Great question! For the NUS ISS syllabus, here is the structured rubric breakdown for <strong>${query}</strong>:</p>
          <ul>
            <li><strong>Core Mathematical Principle:</strong> Formulate the problem precisely using the standard state, probabilistic, or neural representations discussed in lectures. Check boundary conditions and normalization requirements (e.g. probabilities sum to 1, loss functions are convex, heuristics are admissible).</li>
            <li><strong>Algorithm Execution:</strong> Show intermediate matrix states or search queue states step-by-step. Never skip intermediate arithmetic because examiners award method marks even if a minor arithmetic error occurs at the very end.</li>
            <li><strong>Examiner Justification:</strong> Explicitly mention trade-offs (e.g. Bias vs Variance, Overfitting vs Underfitting, Euclidean vs Non-linear DTW, High $C$ vs Low $C$ in SVM, Flatten parameter explosion vs GAP).</li>
          </ul>
          <p style="color: var(--text-secondary); font-size: 0.85rem;">Tip: You can also search specific topics like <em>"Laplace"</em>, <em>"A* Consistency"</em>, <em>"Nyquist"</em>, <em>"DTW"</em>, <em>"CNN parameters"</em>, or <em>"d-separation"</em> for detailed worked formulas.</p>
        </div>
      `;
    }

    container.innerHTML = html;
    container.style.display = 'block';

    if (window.lucide) window.lucide.createIcons();
    if (typeof window.renderLatex === 'function') {
      window.renderLatex(container);
    }
  },

  saveToNotebook: function(title) {
    let saved = JSON.parse(localStorage.getItem('iss_saved_doubts') || '[]');
    if (!saved.includes(title)) {
      saved.push(title);
      localStorage.setItem('iss_saved_doubts', JSON.stringify(saved));
      alert(`Saved to your Doubt Notebook: "${title}"`);
    } else {
      alert(`"${title}" is already in your Doubt Notebook.`);
    }
  },

  injectGlobalWidget: function() {
    if (document.getElementById('floating-qa-widget')) return;

    const widgetHtml = `
      <div id="floating-qa-widget" style="position: fixed; bottom: 24px; right: 24px; z-index: 9999;">
        <button id="qa-toggle-btn" class="btn btn-primary" onclick="QAAssistant.toggleModal()" style="border-radius: 50px; padding: 12px 20px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); display: flex; align-items: center; gap: 8px; font-weight: 600;">
          <i data-lucide="message-square" style="width: 18px; height: 18px;"></i>
          <span>Ask Study Question</span>
        </button>

        <!-- Floating Modal Drawer -->
        <div id="qa-modal" style="display: none; position: fixed; bottom: 80px; right: 24px; width: 440px; max-width: 90vw; max-height: 80vh; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow-y: auto; padding: 20px; z-index: 10000;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 14px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge-tech" style="background: var(--accent-primary); color: white;">AI Tutor</span>
              <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-primary);">Exam Doubt Solver</h3>
            </div>
            <button class="btn btn-sm btn-outline" onclick="QAAssistant.toggleModal()" style="padding: 4px 8px;">
              <i data-lucide="x"></i>
            </button>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 12px;">
            Need help with a formula, derivation, or lecture slide concept? Ask below for an instant syllabus-grounded explanation.
          </p>

          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <input type="text" id="modal-qa-input" class="form-control" placeholder="Ask your exam question..." style="width: 100%; padding: 10px 12px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 0.88rem;" onkeydown="if(event.key==='Enter') QAAssistant.handleModalQuery();">
            <button class="btn btn-primary btn-sm" onclick="QAAssistant.handleModalQuery()">
              <i data-lucide="arrow-right"></i>
            </button>
          </div>

          <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('laplace smoothing denominator |V|')" style="font-size: 0.72rem; padding: 3px 8px;">Laplace |V|</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('A* admissibility consistency graph search')" style="font-size: 0.72rem; padding: 3px 8px;">A* Consistency</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('cnn parameters flatten global average pooling')" style="font-size: 0.72rem; padding: 3px 8px;">CNN Params</button>
            <button class="btn btn-outline btn-sm" onclick="QAAssistant.askModalPreset('nyquist sampling aliasing filter')" style="font-size: 0.72rem; padding: 3px 8px;">Nyquist</button>
          </div>

          <div id="modal-qa-answer" style="display: none; background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; font-size: 0.88rem; line-height: 1.55;">
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHtml);
    if (window.lucide) window.lucide.createIcons();
  },

  toggleModal: function() {
    const modal = document.getElementById('qa-modal');
    if (!modal) return;
    const isHidden = modal.style.display === 'none';
    modal.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      setTimeout(() => {
        const inp = document.getElementById('modal-qa-input');
        if (inp) inp.focus();
      }, 50);
    }
  },

  handleModalQuery: function() {
    const input = document.getElementById('modal-qa-input');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    this.respond(val, 'modal-qa-answer');
  },

  askModalPreset: function(query) {
    const input = document.getElementById('modal-qa-input');
    if (input) input.value = query;
    this.respond(query, 'modal-qa-answer');
  }
};
