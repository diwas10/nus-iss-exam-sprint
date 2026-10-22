// Day 3 Content: Reasoning Systems + Integration + Exams
// Synthesizes remaining parts of Days 3, 8, 9, 10 + Nov 2026 Sample Papers (IRS 50m + PRS 40m)

window.DAY3_REASONING_INTEGRATION_CONTENT = {
  id: "day-3-reasoning-integration",
  title: "Day 3: Reasoning Systems + Integration + Exams",
  author: "NUS-ISS Masterclass Senior Faculty",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Unified Dependency Map — Symbolic Deduction to Cumulative Exam Crucible",
      subtitle: "Why Knowledge Graphs, Rule Engines, Genetic Algorithms, and Ensembles Guarantee A+ Mastery",
      badge: "Grand Synthesis",
      content: `
        <div class="lesson-card hero-card mb-4">
          <div class="card-icon"><i data-lucide="award"></i></div>
          <div class="card-body">
            <h3>Day 3 Synthesis: Reasoning Systems + Integration + Exams</h3>
            <p class="lead-text">
              Welcome to the <strong>Grand Finale of your 3-Day Fast-Track Sprint</strong>. Today unites deliberative System 2 symbolic reasoning, knowledge graphs, evolutionary search, multimodal fusion, and the full official examination rubrics:
            </p>
            <div class="quote-box">
              <em>"Production rules enforce audited deterministic safety; Knowledge Graph embeddings provide structured relational memory; Genetic Algorithms discover optimal non-convex permutations; Multimodal fusion unifies disparate sensors; and Ensembles conquer variance and bias to lock in an A+ in both PRS and IRS."</em>
              <div class="quote-author">— NUS ISS A+ Exam Board</div>
            </div>
          </div>
        </div>

        <div class="grid-3-col mb-4">
          <div class="lesson-card">
            <h4><i data-lucide="shield-check"></i> 1. Rules & Cognitive Models</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Forward vs Backward chaining, Conflict Resolution (refractoriness, recency, specificity), Frame daemons (if-needed / if-added), and the 11-Entity Cognitive Framework (IRS Q2h).
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="share-2"></i> 2. Attention, Graphs & GAs</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Scaled Dot-Product Attention ($QK^T / \\sqrt{d_k}$), TransE link prediction, Neo4j GraphRAG multi-hop traversal, and Genetic Algorithm Order Crossover (OX) for TSP routes.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="award"></i> 3. Ensembles & Sample Papers</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Condorcet's Jury Theorem, Random Forest feature bagging, AdaBoost sample reweighting calculus, and complete model answers for the Nov 2026 Sample Papers (IRS 50m + PRS 40m).
            </p>
          </div>
        </div>
      `
    },
    {
      id: "level-1",
      title: "Level 1: Deductive Rule Engines & Expert Systems (IRS Q1)",
      subtitle: "Forward/Backward Chaining, Conflict Resolution & Frame Daemons",
      badge: "Deductive Symbolic Logic",
      content: `
        <div class="lesson-card mb-4">
          <h3>Production Rule Systems: Data-Driven vs Goal-Driven Inference</h3>
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
          <h3>Frame Knowledge Representation & Daemons (IRS Q1c)</h3>
          <p>
            A Frame represents an entity with named slots. When slot values need dynamic computation or validation, <strong>daemons</strong> are procedurally attached:
          </p>
          <ul>
            <li><strong><code>if-needed</code> Daemon (Lazy Evaluation):</strong> Triggers only when a slot's value is accessed but empty. Computes the value dynamically on demand (e.g. computing distance $D = D_{\\text{cal}} \\times (d_{\\text{cal}} / d_{\\text{obs}})$ from pinhole camera pixel width).</li>
            <li><strong><code>if-added</code> Daemon (Eager Trigger):</strong> Triggers immediately whenever a slot is populated. Performs range constraint checking and fires alerts (e.g. flagging warning if $D \\notin [18, 24]$ inches).</li>
          </ul>
        </div>
      `
    },
    {
      id: "level-2",
      title: "Level 2: Cognitive Architectures & Mental Frameworks (IRS Q2)",
      subtitle: "The 11-Entity Cognitive Framework, ACT-R & David Marr's 3 Levels of Vision",
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
        </div>
      `
    },
    {
      id: "level-4",
      title: "Level 4: Evolutionary Optimization & Multimodal Fusion",
      subtitle: "Genetic Algorithm Order Crossover (OX) & Reverse Vending Machine (RVM) Twin",
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
        </div>

        <div class="lesson-card mb-4">
          <h3>Multimodal Sensor Fusion: Early vs Late vs Hybrid</h3>
          <table class="styled-table" style="font-size:0.85rem; width:100%;">
            <thead><tr><th>Fusion Strategy</th><th>Mechanism</th><th>Advantage</th><th>Disadvantage</th></tr></thead>
            <tbody>
              <tr><td><strong>Early Fusion</strong></td><td>Concatenate raw sensor features into a single high-dimensional vector</td><td>Captures cross-modal low-level correlations</td><td>Dimensionality mismatch, temporal alignment fragility, single-sensor failure crashes entire pipeline</td></tr>
              <tr><td><strong>Late Fusion</strong></td><td>Train separate models per modality; fuse high-level class probabilities via voting or soft averaging</td><td>Robust to sensor dropouts; modalities can have distinct architectures</td><td>Cannot learn low-level cross-modal sensor synergies</td></tr>
              <tr><td><strong>Hybrid Fusion (RVM)</strong></td><td>Fuse optical camera + barcode + inductive metal sensor at intermediate latent layers</td><td>Combines cross-modal representation learning with modular safety guardrails</td><td>Requires multi-branch network tuning</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      id: "level-5",
      title: "Level 5: Ensemble Methods & Official Sample Paper Crucible",
      subtitle: "AdaBoost Calculus, Stacking Meta-Learners & Full Nov 2026 Model Answers",
      badge: "Official Exam Simulation",
      content: `
        <div class="lesson-card mb-4">
          <h3>AdaBoost Weak Learner Weight Calculus & Sample Reweighting</h3>
          $$\\mathbf{\\alpha_t = \\frac{1}{2} \\ln\\left( \\frac{1 - \\epsilon_t}{\\epsilon_t} \\right)}, \\quad \\mathbf{w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-\\alpha_t y_i h_t(\\mathbf{x}_i))}{Z_t}}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            Misclassified samples receive weight multiplied by $\\exp(+\\alpha_t)$, while correct samples are multiplied by $\\exp(-\\alpha_t)$. The relative update multiplier ratio is $\\exp(2\\alpha_t) = \\frac{1 - \\epsilon_t}{\\epsilon_t}$.
          </p>
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
            Complete your preparation with the 20-Question Grand Mock Exam, review the 5 post-quiz structured exam questions covering the official Nov 2026 rubrics, and use the Doubt Resolver to lock in your A+ grade.
          </p>
          <button class="btn btn-primary" onclick="app.loadLevel('quizzes')">
            <i data-lucide="play"></i> Proceed to Day 3 Grand Mock Exam & Quizzes
          </button>
        </div>
      `
    }
  ]
};
