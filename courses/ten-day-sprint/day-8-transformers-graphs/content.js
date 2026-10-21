// Day 8 Deep Vision, Transformers, Knowledge Graphs & GraphRAG Interactive Master Curriculum
// Modules: Pattern Recognition Systems (PRMLS Day 4a/4b), Machine Reasoning (MR Day 3), Reasoning Systems (RS Day 5)

window.DAY8_TRANSFORMERS_GRAPHS_CONTENT = {
  id: "day-8-transformers-graphs",
  title: "Day 8: Deep Vision Architectures, Transformers, Knowledge Graphs & GraphRAG",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — From Deep Vision to Structured Knowledge",
      subtitle: "The convergence of ultra-deep vision, parallel self-attention, and relational knowledge graphs",
      badge: "Foundations & Mental Models",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="share-2"></i></div>
  <div class="card-body">
    <h3>The Convergence: Deep Vision, Self-Attention & Knowledge Graphs</h3>
    <p class="lead-text">
      Welcome to Day 8! Over the past week, we conquered search graphs, sampling, Bayesian networks, SVMs, clustering, CNNs, and recurrent memory. Today, we enter the modern frontier where <strong>ultra-deep vision (ResNet/MobileNet)</strong>, <strong>parallel attention (Transformers)</strong>, and <strong>structured symbolic graphs (Neo4j & TransE)</strong> unite!
    </p>
    <div class="quote-box">
      <em>"A CNN sees local patches. A Transformer attends globally across all tokens in parallel. A Knowledge Graph stores explicit relational ground truth. When you combine statistical vector embeddings with symbolic knowledge graphs, hallucination vanishes and multi-hop reasoning becomes deterministic."</em>
      <div class="quote-author">— PRMLS Day 4 & RS Day 5 Masterclass Notes</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 7 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 7 Core Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. LSTM Parameter Multiplier:</strong><br>
      $4 \\times [(d_{\\text{in}} + d_h + 1) \\times d_h]$. The factor of 4 accounts for Forget, Input, Candidate, and Output gates!
    </div>
    <div>
      <strong style="color: #34d399;">2. Additive Gradient Highway:</strong><br>
      $C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$. $\\frac{\\partial C_t}{\\partial C_{t-1}} = f_t$. Additive recurrence prevents vanishing gradients.
    </div>
    <div>
      <strong style="color: #f59e0b;">3. Sensor Anomaly Debounce:</strong><br>
      Transient single-step spike = hardware glitch (ignore/filter). Persistent consecutive errors $\\ge 3$ steps = physical failure!
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="zap"></i> Evolution of Vision & Sequence Architectures</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In PRMLS Day 4, deep learning evolved to solve two massive bottlenecks:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. ResNet Residual Skips:</strong> $H(x) = F(x) + x$ solved the deep network degradation problem, allowing 152+ layers.</li>
      <li><strong>2. MobileNet Separable Convolutions:</strong> Split spatial filtering from channel mixing, reducing FLOPs by $8\\times-9\\times$ for mobile deployment.</li>
      <li><strong>3. Transformers (Vaswani et al., 2017):</strong> Replaced sequential $O(T)$ recurrence with parallel $O(1)$ self-attention matrix multiplication ($QK^T / \\sqrt{d_k}$).</li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="database"></i> The Symbolic Bridge: Knowledge Graphs</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In Machine Reasoning Day 3 & Reasoning Systems Day 5, pure vector search is augmented with <strong>Knowledge Graphs</strong>:
    </p>
    <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.82rem; margin-top: 8px;">
      [Knowledge Graph: (Entity) ➔ [Relation] ➔ (Entity)]<br>
      &nbsp;&nbsp;│<br>
      &nbsp;&nbsp;├──► TransE: Vectors $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$ for link prediction<br>
      &nbsp;&nbsp;├──► Neo4j: Property graph with index-free adjacency $O(1)$<br>
      &nbsp;&nbsp;└──► <strong>GraphRAG:</strong> Resolves multi-hop queries that vector cosine similarity misses!
    </div>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 8)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>Scaled Dot-Product Attention, ResNet Skip Connections, Knowledge Base Architecture (IRS Q2d/e), and GraphRAG</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Scaled Dot-Product &amp; Multi-Head Attention</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Projections:</strong> $Q = XW_Q, K = XW_K, V = XW_V$ with dimension $d_k$.</li>
        <li><strong>Attention Formula:</strong> $\\text{Attention}(Q,K,V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$.</li>
        <li><strong>Why divide by $\\sqrt{d_k}$?</strong> Dot products grow with variance $d_k$, pushing softmax into flat saturation regions where gradients vanish!</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. ResNet Skip Connections &amp; Modern CNNs</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Residual Mapping:</strong> $\\mathbf{y} = \\mathcal{F}(\\mathbf{x}, \\{W_i\\}) + \\mathbf{x}$.</li>
        <li><strong>Gradient Highway:</strong> $\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{x}} = \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{y}}\\left(1 + \\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}}\\right)$ — the $+1$ term guarantees unimpeded gradient flow!</li>
        <li><strong>$1\\times 1$ Pointwise Convolution:</strong> Mixes channels and shrinks depth $C_{\\text{in}} \\to C_{\\text{bottleneck}}$ to slash parameters.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. KBS Architecture vs Static Wall Chart (IRS Q2d &amp; Q2e)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Why Printed Wall Charts Fail (Q2e):</strong> 40 symptoms + 10 signs + 4 flags create $2^{54} \\approx 1.8 \\times 10^{16}$ combinations; impossible to print, zero dynamic filtering of secondary symptoms, no probabilistic ranking, and hard to update.</li>
        <li><strong><code>A-EYE-Web</code> KBS Architecture (Q2d):</strong> (1) <em>Web UI</em>, (2) <em>Working Memory</em> (active patient case), (3) <em>Inference Engine</em> (triggers secondary symptom rules + scores differential diagnoses), (4) <em>Knowledge Base</em> (Symptom Trigger Rules + Disease-Symptom Matrix), (5) <em>Patient Case DB</em>.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. Knowledge Elicitation vs Discovery (IRS Q2f)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Knowledge Elicitation (Expert Ophthalmologists):</strong> High clinical validity &amp; covers rare blinding emergencies, but suffers from the <em>knowledge acquisition bottleneck</em> and human bias.</li>
        <li><strong>Knowledge Discovery (Data Mining 5,000 Cases):</strong> Fast, scalable, and learns objective empirical probabilities, but fails on rare diseases with few rows and learns spurious dataset noise.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Modern CNN Case Studies — ResNet Skips & MobileNet Separable",
      subtitle: "The mathematical identity shortcut and depthwise separable factorizations",
      badge: "Deep Vision",
      content: `
<div class="lesson-card">
  <h3>Modern Vision Backbones: ResNet & MobileNet</h3>
  <p class="lead-text">
    Two architectural breakthroughs define modern computer vision: ResNet (solving gradient flow in deep networks) and MobileNet (solving computational efficiency on edge devices).
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">1. ResNet Residual Formulation</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Instead of learning an underlying mapping $H(x)$, ResNet forces stacked layers to learn a residual mapping $F(x) = H(x) - x$, casting the output as:
      </p>
      $$H(x) = F(x) + x$$
      $$\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H} \\cdot \\left( \\frac{\\partial F}{\\partial x} + 1 \\right) = \\frac{\\partial L}{\\partial H} \\frac{\\partial F}{\\partial x} + \\mathbf{\\frac{\\partial L}{\\partial H}}$$
      <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 6px;">
        The additive $+1$ guarantees that early layers receive gradient signals regardless of network depth!
      </p>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #f59e0b;">2. MobileNet Depthwise Separable Factorization</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Decouples standard convolution into two separate lightweight operations:
      </p>
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li><strong>Depthwise:</strong> 1 filter of size $F \\times F$ per channel $\\to \\text{Cost} = H \\cdot W \\cdot C_{\\text{in}} \\cdot F^2$.</li>
        <li><strong>Pointwise:</strong> $K$ filters of size $1 \\times 1 \\times C_{\\text{in}} \\to \\text{Cost} = H \\cdot W \\cdot C_{\\text{in}} \\cdot K$.</li>
        <li><strong>Relative Speedup:</strong> $\\frac{1}{K} + \\frac{1}{F^2} \\approx \\frac{1}{9} \\implies \\mathbf{8.2\\times \\text{ to } 9\\times \\text{ faster!}}$</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive Deep CNN Case Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="layers"></i> Interactive Deep CNN Case Studio</h3>
    <select id="deepcnn-tab-select" class="select-styled" style="font-size: 0.85rem;">
      <option value="resnet" selected>ResNet Residual Skip Highway (He et al.)</option>
      <option value="mobilenet">MobileNet Depthwise Separable Calculator</option>
    </select>
  </div>

  <div id="deepcnn-content-container" class="mt-3">
    <!-- Rendered dynamically by SprintDay8Visualizers.initDeepCNNCaseStudio() -->
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Transformers & Scaled Dot-Product Self-Attention Studio",
      subtitle: "Query, Key, Value mechanics and why sqrt(d_k) prevents softmax saturation",
      badge: "Attention Engine",
      content: `
<div class="lesson-card">
  <h3>The Transformer: Scaled Dot-Product Self-Attention</h3>
  <p class="lead-text">
    Vaswani et al. (2017) discarded recurrence entirely in favor of <strong>Self-Attention</strong>. Every token simultaneously queries every other token in the sequence.
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">1. The Attention Formulation</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Given input embeddings $X$, compute linear projections $Q = X W_Q$, $K = X W_K$, $V = X W_V$:
      </p>
      $$\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V$$
      <div style="background: rgba(56,189,248,0.06); padding: 8px; border-radius: 6px; border-left: 3px solid #38bdf8; margin-top: 6px; font-size: 0.8rem;">
        <strong>$Q$ (Query):</strong> What the current token is seeking.<br>
        <strong>$K$ (Key):</strong> What each candidate token offers.<br>
        <strong>$V$ (Value):</strong> The actual semantic content retrieved.
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #ef4444;">2. Why Divide by $\\sqrt{d_k}$?</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        For components with zero mean and unit variance, the dot product $q^T k = \\sum_{i=1}^{d_k} q_i k_i$ has variance $d_k$.
      </p>
      <div style="background: rgba(239,68,68,0.06); padding: 8px; border-radius: 6px; border-left: 3px solid #ef4444; margin-top: 6px; font-size: 0.8rem;">
        <strong>Softmax Saturation Trap:</strong><br>
        If $d_k = 64$, dot products reach magnitudes of $\\pm 25$. Softmax exponentiation produces extreme outputs of $1.0$ and $0.0$, where gradients vanish to 0! Dividing by $\\sqrt{d_k}$ normalizes variance back to 1.
      </div>
    </div>
  </div>
</div>

<!-- Interactive Self-Attention Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="eye"></i> Interactive Self-Attention Heatmap Studio</h3>
    <label style="font-size: 0.85rem; display: flex; align-items: center; gap: 6px;">
      <input type="checkbox" id="attn-chk-scaled" checked>
      <span>Enable $\\sqrt{d_k}$ Scaling (Normal vs Saturated)</span>
    </label>
  </div>
  <p class="text-secondary mt-1">
    Sentence: <em>"The <strong>animal</strong> didn't cross the street because <strong>it</strong> was too tired"</em>. Click the token <strong>"it"</strong> below. Notice how it places 58% attention on "animal" and 14% on "street". Then uncheck $\\sqrt{d_k}$ to watch the distribution collapse into 98.5% overconfident saturation!
  </p>

  <div id="attn-tokens-container" class="mt-3" style="display: flex; flex-wrap: wrap; gap: 6px;">
    <!-- Rendered dynamically by SprintDay8Visualizers.initSelfAttentionHeatmapStudio() -->
  </div>

  <div class="lesson-card mt-3" style="background: rgba(255,255,255,0.02); padding: 14px;">
    <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">Attention Weights Distribution:</span>
    <div id="attn-bars-container" class="mt-2" style="display: flex; flex-direction: column; gap: 6px;">
      <!-- Rendered dynamically -->
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Knowledge Graph Embeddings (TransE & Link Prediction)",
      subtitle: "Geometric translation space h + r = t, relation symmetry limits, and MRR metrics",
      badge: "KGE Models",
      content: `
<div class="lesson-card">
  <h3>Knowledge Graph Embeddings (KGE): TransE</h3>
  <p class="lead-text">
    A Knowledge Graph is a collection of relational facts represented as triples $(h, r, t)$ (Head, Relation, Tail). TransE (Bordes et al., 2013) embeds entities and relations into a continuous vector space where relations are <strong>translations</strong>.
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">1. The TransE Translation Principle</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        For a true triple $(h, r, t)$, the tail embedding should be close to the head plus relation:
      </p>
      $$\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$$
      $$\\text{Score: } f_r(h, t) = \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\|_2$$
      <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 6px;">
        Trained using pairwise margin ranking loss against corrupted negative triples $(h', r, t)$ or $(h, r, t')$.
      </p>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #f59e0b;">2. Link Prediction Evaluation Metrics</h4>
      <div style="font-family: monospace; font-size: 0.78rem; line-height: 1.6; color: #e2e8f0;">
        • Mean Rank (MR): &nbsp;MR = \\frac{1}{|Q|} \\sum \\text{rank}_i<br>
        • Mean Reciprocal Rank (MRR): &nbsp;MRR = \\frac{1}{|Q|} \\sum \\frac{1}{\\text{rank}_i}<br>
        • Hits@K: &nbsp;Fraction of test triples ranked in top K (e.g. Hits@1, Hits@3)
      </div>
      <p style="font-size: 0.78rem; color: #ef4444; margin-top: 8px;">
        <strong>Symmetric Relation Trap:</strong> If $h \\xrightarrow{r} t$ and $t \\xrightarrow{r} h$, TransE forces $\\mathbf{r} = \\mathbf{0}$! Use DistMult or ComplEx for symmetric relations.
      </p>
    </div>
  </div>
</div>

<!-- Interactive TransE Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="compass"></i> Interactive TransE Vector Translation & Link Prediction</h3>
    <div style="display: flex; gap: 8px; align-items: center;">
      <label style="font-size: 0.85rem;">Head (h):</label>
      <select id="transe-head-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="Aspirin" selected>Aspirin (Drug)</option>
        <option value="Headache">Headache (Symptom)</option>
        <option value="Metformin">Metformin (Drug)</option>
        <option value="Insulin_Resist">Insulin_Resist (Symptom)</option>
      </select>
      <label style="font-size: 0.85rem;">Relation (r):</label>
      <select id="transe-rel-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="TREATS" selected>TREATS</option>
        <option value="SYMPTOM_OF">SYMPTOM_OF</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Watch the relation vector $\\mathbf{r}$ translate the head entity $\\mathbf{h}$ directly to the predicted tail target $\\mathbf{h} + \\mathbf{r}$ on the 2D plane!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="transe-canvas" width="480" height="300" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">Link Prediction Evaluation:</span>
      <div id="transe-metrics-box" class="mt-2">
        <!-- Rendered dynamically by SprintDay8Visualizers.initTransEVectorPlayground() -->
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Neo4j Property Graphs, Cypher & Graph-Enabled RAG",
      subtitle: "Why Vector RAG fails on multi-hop associative queries and how GraphRAG fixes it",
      badge: "GraphRAG & Code",
      content: `
<div class="lesson-card">
  <h3>Property Graphs & GraphRAG: Solving Multi-Hop Queries</h3>
  <p class="lead-text">
    Standard Retrieval-Augmented Generation (Vector RAG) converts text into chunks and searches by cosine similarity. But what happens when answering a query requires connecting facts spread across 3 different documents?
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(239,68,68,0.06); padding: 14px; border-radius: 8px; border: 1px solid rgba(239,68,68,0.3);">
      <h4 style="color: #ef4444;">The Vector RAG Multi-Hop Failure</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Query: <em>"What symptoms are associated with the disease treated by Metformin?"</em>
      </p>
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li>Chunk 1 says: "Metformin treats Type 2 Diabetes."</li>
        <li>Chunk 2 says: "Type 2 Diabetes causes insulin resistance and fatigue."</li>
        <li><strong>Failure:</strong> Vector similarity to "symptoms" and "Metformin" misses the bridge "Type 2 Diabetes" because chunk boundaries break causal chains!</li>
      </ul>
    </div>

    <div style="background: rgba(52,211,153,0.06); padding: 14px; border-radius: 8px; border: 1px solid rgba(52,211,153,0.3);">
      <h4 style="color: #34d399;">The GraphRAG Solution (Neo4j Cypher)</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        GraphRAG extracts structured entities and relations into a property graph:
      </p>
      <div style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.75rem; color: #38bdf8; margin: 6px 0;">
        MATCH (d:Drug {name:'Metformin'})-[:TREATS]->(dis:Disease)<br>
        MATCH (s:Symptom)-[:SYMPTOM_OF]->(dis)<br>
        RETURN s.name, dis.name
      </div>
      <p style="color: #34d399; font-weight: 600; font-size: 0.78rem;">
        Traverses the graph deterministically in 18 ms with zero hallucination!
      </p>
    </div>
  </div>
</div>

<!-- Interactive GraphRAG Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="git-merge"></i> Interactive Multi-Hop Query: Vector RAG vs GraphRAG</h3>
    <button id="rag-btn-compare" class="btn-primary" style="font-size: 0.85rem; padding: 6px 16px; background: #38bdf8; color: #000; font-weight: 700; border: none; border-radius: 6px; cursor: pointer;">
      Run Comparative Benchmark
    </button>
  </div>
  <p class="text-secondary mt-1">
    Click the button above to execute the multi-hop clinical question across both retrieval pipelines simultaneously.
  </p>

  <div id="rag-results-display">
    <!-- Rendered dynamically by SprintDay8Visualizers.initGraphRAGvsVectorRAGStudio() -->
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: Exam Crucible — 5 Dangerous Traps & Common Flaws",
      subtitle: "MR vs MRR inversion, TransE symmetry collapse, and attention temperature scaling",
      badge: "Exam Traps & Survival",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #ef4444;">
  <div class="card-icon" style="color: #ef4444;"><i data-lucide="shield-alert"></i></div>
  <div class="card-body">
    <h3>The 5 Fatal Exam Traps for Day 8 Deep Vision & Graphs</h3>
    <p class="lead-text">
      Make sure you never make these 5 common mistakes on ResNet, Transformers, and Knowledge Graphs!
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 1: Mean Rank (MR) vs Mean Reciprocal Rank (MRR) Inversion</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Ranks for 3 queries are 1, 2, 4. The student calculates $\\text{MRR} = \\frac{1+2+4}{3} = 2.33$.<br>
      <strong>The Reality:</strong> That is <strong>Mean Rank (MR)</strong>! Mean Reciprocal Rank takes the reciprocal of each rank: $\\text{MRR} = \\frac{1}{3}\\left(1 + \\frac{1}{2} + \\frac{1}{4}\\right) = \\frac{1.75}{3} \\approx 0.5833$. For MRR, higher is better ($1.0$ is perfect); for MR, lower is better ($1.0$ is perfect).
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 2: The TransE Symmetric Collapse</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Choosing TransE to model relations like "is_similar_to" or "is_coworker_of".<br>
      <strong>The Reality:</strong> If $(A, r, B)$ and $(B, r, A)$ both hold, TransE requires $\\mathbf{a} + \\mathbf{r} = \\mathbf{b}$ and $\\mathbf{b} + \\mathbf{r} = \\mathbf{a}$. Adding them gives $2\\mathbf{r} = \\mathbf{0} \\implies \\mathbf{r} = \\mathbf{0}$ and $\\mathbf{a} = \\mathbf{b}$! TransE collapses all symmetric entities onto identical points.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 3: Omitting the $\\sqrt{d_k}$ Scaling Factor</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Explaining self-attention as simply $\\text{softmax}(QK^T)V$.<br>
      <strong>The Reality:</strong> Without dividing by $\\sqrt{d_k}$, large vector dimensions cause dot products to blow up, driving Softmax into saturated flat zones where gradients vanish ($\\sigma'(z) \\approx 0$). Dividing by $\\sqrt{d_k}$ is mathematically required to preserve training stability.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 4: MobileNet Depthwise Channel Separation Fallacy</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Believing Depthwise convolution mixes channels.<br>
      <strong>The Reality:</strong> Depthwise convolution applies $3 \\times 3$ filters to each channel in complete isolation (zero cross-channel information flow!). Channel mixing happens <strong>exclusively</strong> in the subsequent $1 \\times 1$ Pointwise convolution.
    </p>
  </div>
</div>

<div class="lesson-card mt-3" style="border-left: 3px solid #38bdf8;">
  <h4 style="color: #38bdf8;">Trap 5: Vector RAG Multi-Hop Assumption</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
    <strong>The Trap:</strong> Assuming embedding cosine similarity can answer multi-hop questions across disconnected documents.<br>
    <strong>The Reality:</strong> If Question asks for $A \\to B \\to C$, but Document 1 only mentions $(A, B)$ and Document 2 only mentions $(B, C)$, Vector RAG will often retrieve neither or fail to connect them. GraphRAG's deterministic entity-relation paths solve this cleanly.
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
  <h3><i data-lucide="check-square"></i> Day 8 Slide Mastery Crucible</h3>
  <p class="lead-text">
    Answer all 10 questions below. Each question is sampled directly from past NUS ISS examination patterns covering ResNet, MobileNet, Self-Attention, TransE, and GraphRAG.
  </p>
  <div id="sprint-quiz-container" class="mt-4">
    <!-- Rendered dynamically by Quiz Engine -->
  </div>
</div>
`
    }
  ]
};
