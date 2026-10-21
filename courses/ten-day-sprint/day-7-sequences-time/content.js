// Day 7 Sequences, Time Series & Language Models Interactive Master Curriculum
// Modules: Pattern Recognition Systems (PRMLS Day 3a/3b), Intelligent Sensing Systems (ISSM Day 3), Cognitive Systems (CS Day 1 AM)

window.DAY7_SEQUENCES_TIME_CONTENT = {
  id: "day-7-sequences-time",
  title: "Day 7: Sequences, Time Series & Language Models",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — Temporal Memory & Sensory Representation",
      subtitle: "Why order matters, overcoming vanishing gradients with memory highways, and dense semantic vector geometry",
      badge: "Foundations & Mental Models",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="git-commit"></i></div>
  <div class="card-body">
    <h3>The Dimension of Time: Beyond Static Independent Snapshots</h3>
    <p class="lead-text">
      Welcome to Day 7! In Days 1–6, our classifiers assumed that each data point was Independent and Identically Distributed (i.i.d.). But real-world intelligence lives in <strong>temporal streams</strong>: sensor vibrations, ECG heartbeats, audio phonemes, and human sentences where the meaning of word $N$ depends on word 1!
    </p>
    <div class="quote-box">
      <em>"In a static image, you can scramble pixels and lose spatial meaning. In a sequence, scrambling the order completely changes the physical reality: 'The dog bit the man' is news; 'The man bit the dog' is a crisis. Machines need temporal memory to survive."</em>
      <div class="quote-author">— PRMLS Day 3b & CS Day 1 Master Lecture Notes</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 6 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 6 Core Neural Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. Backprop Output Gradient:</strong><br>
      $\\delta_k = (t_k - y_k) \\cdot y_k(1 - y_k)$. Output weight update is $\\Delta w_{jk} = \\eta \\delta_k a_j$.
    </div>
    <div>
      <strong style="color: #34d399;">2. RBF 2-Stage Training:</strong><br>
      K-Means finds Gaussian centers $\\mu_j$; output weights are solved in ONE step via linear pseudo-inverse $W = \\Phi^{\\dagger} Y$ (no gradient descent!).
    </div>
    <div>
      <strong style="color: #f59e0b;">3. CNN Parameter Math:</strong><br>
      $[(F \\times F \\times C_{\\text{in}}) + 1] \\times K$. Never forget the $+1$ bias per filter!
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="clock"></i> The Sequence Spectrum</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In NUS ISS, temporal reasoning progresses across three core architectures:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. Vanilla RNN:</strong> Hidden state recurrence $h_t = \\tanh(W x_t + U h_{t-1} + b)$. Suffers from severe exponential vanishing gradients over $>10$ time steps.</li>
      <li><strong>2. LSTM / GRU:</strong> Introduces additive linear cell state highways protected by multiplicative gates (Forget, Input, Output), allowing gradients to flow for hundreds of steps.</li>
      <li><strong>3. Deep Bottleneck Autoencoder:</strong> Learns compressed temporal dynamics to detect machine degradation and water quality hypoxia via reconstruction error.</li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="cpu"></i> Cognitive Systems Alignment</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In Cognitive Systems Day 1, human language memory is represented by <strong>dense semantic embeddings</strong> rather than dictionary indexes:
    </p>
    <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.82rem; margin-top: 8px;">
      [Word2Vec Continuous Semantic Space]<br>
      &nbsp;&nbsp;│<br>
      &nbsp;&nbsp;├──► Words mapped to 300-dimensional vectors<br>
      &nbsp;&nbsp;├──► Semantic relationships encoded as spatial offsets:<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vec("King") − vec("Man") + vec("Woman") ≈ vec("Queen")<br>
      &nbsp;&nbsp;└──► Enables cognitive analogical reasoning in NLP!
    </div>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 7)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>HMM Sequence Classification (IRS Q1d), Chatbot Intent/FAQ Pipelines (IRS Q1a/b), and Clickstream LSTM Fusion (PRS Q1d)</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. HMM Work-Pattern Classification (IRS Q1d Blueprint)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Hidden States ($S$):</strong> Latent daily workload state $s_t \\in \\{\\text{Intensive Screen}, \\text{Moderate}, \\text{Off-Screen/Rest}\\}$.</li>
        <li><strong>Observations ($O$):</strong> Daily query count vector $o_t = [q_{\\text{erg},t}, q_{\\text{vis},t}, q_{\\text{ex},t}]$ across $t=1\\dots 7$ days.</li>
        <li><strong>Training (Baum-Welch EM):</strong> Estimate separate HMM parameters $\\lambda_{\\text{SE}} = (\\pi, A, B)_{\\text{SE}}$ and $\\lambda_{\\text{Sales}} = (\\pi, A, B)_{\\text{Sales}}$.</li>
        <li><strong>Classification (Forward Algorithm):</strong> Compute $\\alpha_t(j) = \\left[\\sum_i \\alpha_{t-1}(i) a_{ij}\\right] b_j(o_t)$ and assign $\\arg\\max_{c \\in \\{\\text{SE}, \\text{Sales}\\}} P(O_{1:7} \\mid \\lambda_c)$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. Chatbot Intents, Slots &amp; FAQ Retrieval (IRS Q1a &amp; Q1b)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Intent + Slot Schema (Q1a):</strong>
          <br>• <code>QueryErgonomics</code> $\\to$ slots: <code>ergonomic_aspect</code> (lighting, screen distance)
          <br>• <code>ManageVisualHabit</code> $\\to$ slots: <code>habit_type</code>, <code>interval_minutes</code>
          <br>• <code>GuideEyeExercise</code> $\\to$ slots: <code>exercise_type</code>, <code>job_role</code>.</li>
        <li><strong>FAQ Retrieval Pipeline (Q1b):</strong> Preprocess query $\\to$ encode via TF-IDF or Sentence-BERT $\\to$ compute Cosine Similarity $\\frac{\\mathbf{q}\\cdot\\mathbf{d}_i}{\\|\\mathbf{q}\\|\\|\\mathbf{d}_i\\|} \\ge \\tau$ against Irisa's Q&amp;A bank $\\to$ return top answer or fallback.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. Clickstream LSTM &amp; Hybrid Fusion (PRS Q1d Blueprint)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>3D Sequence Tensor:</strong> Format variable-length clickstreams as $(N_{\\text{sessions}}, T_{\\text{max}}, D_{\\text{features}})$ with zero-padding and masking.</li>
        <li><strong>LSTM Memory Highway:</strong> $\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t$ captures sequential dwell-time progression toward purchase.</li>
        <li><strong>Combining with Static Models:</strong> Use <strong>Intermediate Feature Concatenation</strong> ($[\\mathbf{h}_T \\mathbin{\\|} \\mathbf{x}_{\\text{static}}] \\to \\text{Dense}$) or <strong>Stacking / Late Fusion</strong> (meta-classifier over SVM, NN, and LSTM probabilities).</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. Viterbi Decoding vs Forward Algorithm</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Forward ($\\sum$):</strong> Computes total likelihood $P(O \\mid \\lambda) = \\sum_i \\alpha_T(i)$ for sequence classification.</li>
        <li><strong>Viterbi ($\\max$):</strong> Computes most likely hidden state sequence $Q^* = \\arg\\max_Q P(Q, O \\mid \\lambda)$ via $v_t(j) = \\max_i [v_{t-1}(i)a_{ij}] b_j(o_t)$.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: RNNs, Vanishing Gradients & The LSTM Gating Engine",
      subtitle: "Why standard recurrence fails across time and how the 4 LSTM gates preserve memory",
      badge: "LSTM Engine",
      content: `
<div class="lesson-card">
  <h3>Recurrent Neural Networks & The Vanishing Gradient Problem</h3>
  <p class="lead-text">
    In Backpropagation Through Time (BPTT), computing the gradient of loss at time step $T$ with respect to the initial hidden state $h_1$ requires multiplying $T-1$ Jacobian matrices:
    $$\\frac{\\partial h_T}{\\partial h_1} = \\prod_{t=2}^{T} \\frac{\\partial h_t}{\\partial h_{t-1}} = \\prod_{t=2}^{T} W_{hh}^T \\cdot \\text{diag}\\big(1 - \\tanh^2(z_t)\\big)$$
    If the largest eigenvalue of $W_{hh} < 1$, the gradient shrinks exponentially to zero! The network becomes completely amnesic to early context.
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">The LSTM Solution: Additive Cell Highway</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Hochreiter & Schmidhuber (1997) replaced multiplicative recurrence with an <strong>additive cell state update</strong>:
      </p>
      $$C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$$
      <div style="background: rgba(56,189,248,0.06); padding: 10px; border-radius: 6px; border-left: 3px solid #38bdf8; margin-top: 6px;">
        <strong>The Gradient Highway:</strong><br>
        Notice that $\\frac{\\partial C_t}{\\partial C_{t-1}} = f_t$. If the Forget Gate $f_t = 1$, the gradient flows back across 100 time steps with <strong>zero exponential decay</strong>!
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #f59e0b;">The 4 Gate Equations</h4>
      <div style="font-family: monospace; font-size: 0.78rem; line-height: 1.6; color: #e2e8f0;">
        1. Forget: &nbsp;&nbsp;f_t = σ(W_f x_t + U_f h_{t-1} + b_f)<br>
        2. Input: &nbsp;&nbsp;&nbsp;i_t = σ(W_i x_t + U_i h_{t-1} + b_i)<br>
        3. Candidate: C̃_t = tanh(W_c x_t + U_c h_{t-1} + b_c)<br>
        4. Output: &nbsp;&nbsp;o_t = σ(W_o x_t + U_o h_{t-1} + b_o)<br>
        5. Hidden: &nbsp;&nbsp;h_t = o_t ⊙ tanh(C_t)
      </div>
      <p style="font-size: 0.78rem; color: #fbbf24; margin-top: 8px;">
        <strong>Parameter Multiplier:</strong> Exactly $4 \\times [(d_{\\text{in}} + d_h + 1) \\times d_h]$.
      </p>
    </div>
  </div>
</div>

<!-- Interactive LSTM Gate Valve Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="sliders"></i> Interactive LSTM Gate Valve & Memory Highway Studio</h3>
    <div style="display: flex; gap: 8px;">
      <button id="lstm-btn-next" class="btn-primary" style="font-size: 0.8rem; padding: 6px 14px; background: #38bdf8; color: #000; font-weight: 700; border: none; border-radius: 6px; cursor: pointer;">
        Step Next Token ➔
      </button>
      <button id="lstm-btn-reset" class="btn-outline" style="font-size: 0.8rem; padding: 6px 12px;">
        Reset
      </button>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Watch an LSTM process the tricky sentence: <em>"The <strong>engine</strong> with many loose <strong>bolts</strong> WAS..."</em>. Notice how the input gate suppresses the plural distractor "bolts" so the memory cell state $C_t$ preserves the singular subject "engine" all the way to the verb "WAS"!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1fr 1.2fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; text-align: center;">
      <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Current Sequence Token:</span>
      <div id="lstm-current-token" class="mt-2">
        <!-- Rendered dynamically -->
      </div>
      <div id="lstm-cell-state" class="mt-3" style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px;">
        <!-- Rendered dynamically -->
      </div>
    </div>

    <div>
      <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">Active Gate Valve Status:</span>
      <div id="lstm-gates-status" class="mt-2">
        <!-- Rendered dynamically by SprintDay7Visualizers.initLSTMGateValveStudio() -->
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Deep Autoencoders & Sensor Anomaly Detection",
      subtitle: "The Smart Fish Tank benchmark, reconstruction thresholds, and temporal debounce triage",
      badge: "Sensor Anomaly",
      content: `
<div class="lesson-card">
  <h3>Deep Bottleneck Autoencoders for Sensory Anomaly Detection</h3>
  <p class="lead-text">
    In Intelligent Sensing Systems Day 3, machines must detect sensor failures or environmental crises without ever having seen anomalies during training. The standard solution is a <strong>Bottleneck Autoencoder</strong> ($70 \\to 10 \\to 70$).
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. Unsupervised Baseline</strong>
      The autoencoder is trained strictly on normal telemetry:
      $$z = f_{\\text{enc}}(x), \\quad \\hat{x} = f_{\\text{dec}}(z)$$
      $$\\mathcal{L} = \\frac{1}{2} \\|x - \\hat{x}\\|^2$$
      It learns the compressed subspace of healthy operational dynamics.
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #f59e0b;">2. Residual Anomaly Score</strong>
      When anomalous sensor readings arrive, the bottleneck cannot faithfully reconstruct them:
      $$\\text{Error}(t) = \\|x(t) - \\hat{x}(t)\\|^2 > \\tau$$
      Tripping threshold $\\tau$ triggers an alert.
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">3. Temporal Debounce Triage</strong>
      Crucial exam distinction:
      <ul>
        <li><strong>Transient Glitch (Event A):</strong> 1-step spike $\\to$ noise, filter out.</li>
        <li><strong>Persistent Crisis (Event B):</strong> $\\ge 3$ consecutive steps $\\to$ trigger physical actuators!</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive Smart Fish Tank Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="activity"></i> Interactive Smart Fish Tank Anomaly Studio (ISSM Day 3)</h3>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-weight: 600; font-size: 0.85rem;">Threshold $\\tau$:</label>
      <input type="range" id="anomaly-slider-tau" min="0.10" max="1.20" step="0.05" value="0.45" style="width: 140px;">
      <span id="anomaly-val-tau" class="badge-tech" style="color: #ef4444;">0.45</span>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Slide threshold $\\tau$. Notice how an optimal threshold ($\\tau \\approx 0.45$) isolates both the single-point hardware glitch at $t=26$ and the biological hypoxia decay ($t=41-59$), while completely ignoring normal baseline fluctuations!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="anomaly-canvas" width="480" height="300" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">Automated Sensory Triage Diagnosis:</span>
      <div id="anomaly-diagnosis-box" class="lesson-card mt-2" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <!-- Rendered dynamically by SprintDay7Visualizers.initAutoencoderAnomalyStudio() -->
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: NLP Cognition & Dense Word Embeddings",
      subtitle: "One-hot limits, Word2Vec CBOW vs Skip-Gram, Negative Sampling, and geometric vector arithmetic",
      badge: "Vector Semantics",
      content: `
<div class="lesson-card">
  <h3>Continuous Vector Semantics: Word2Vec & GloVe</h3>
  <p class="lead-text">
    In classic AI, words were discrete symbols (one-hot vectors: $[0, 0, 1, 0, \\dots]$). The dot product between "hotel" and "motel" was 0, meaning the system had zero concept of semantic similarity!
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">Word2Vec: CBOW vs Skip-Gram</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Mikolov et al. (2013) introduced distributed representations based on Harris's distributional hypothesis: <em>"You shall know a word by the company it keeps."</em>
      </p>
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li><strong>CBOW (Continuous Bag of Words):</strong> Predicts central target word from surrounding context words. Faster, averages noise.</li>
        <li><strong>Skip-Gram:</strong> Predicts surrounding context words from a central target word. Slower, superior for rare words and small corpora.</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #f59e0b;">Negative Sampling Formulation</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Standard Softmax requires evaluating $\\sum_{w \\in V} \\exp(v_w^T v_c)$, which is impossible for $|V| = 100,000$. Negative Sampling converts this to binary logistic regressions:
      </p>
      $$\\mathcal{L} = \\log \\sigma(v_{w_O}^T v_{w_I}) + \\sum_{i=1}^{k} \\mathbb{E}_{w_i \\sim P_n(w)} \\big[ \\log \\sigma(-v_{w_i}^T v_{w_I}) \\big]$$
      <p style="color: var(--text-secondary); font-size: 0.78rem;">
        Samples $k$ noise words from unigram distribution $U(w)^{3/4}$ to boost rare words!
      </p>
    </div>
  </div>
</div>

<!-- Interactive Word2Vec Vector Space Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="compass"></i> Interactive Word2Vec Semantic Vector Space Studio</h3>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 0.85rem;">Analogy Equation:</label>
      <select id="w2v-arithmetic-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="royalty" selected>[king] − [man] + [woman] ≈ [queen]</option>
        <option value="capital">[paris] − [france] + [japan] ≈ [tokyo]</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Observe how abstract semantic concepts (gender, royalty, capital cities) are encoded as consistent spatial displacement vectors in continuous space!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="w2v-canvas" width="480" height="320" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">Vector Arithmetic Analysis:</span>
      <div id="w2v-result-container" class="mt-2">
        <!-- Rendered dynamically by SprintDay7Visualizers.initWordEmbeddingVectorSpace() -->
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: NUS ISS Workshop Code Lab (Keras LSTM & PyTorch Autoencoder)",
      subtitle: "Verified workshop implementations for sequence modeling and anomaly detection",
      badge: "Code Labs",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="code"></i> Production Code Labs: LSTM & Sensor Autoencoders</h3>
  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; border: 1px solid var(--border-color); margin-top: 10px;">
    <strong style="color: #38bdf8;">1. PyTorch Deep Autoencoder for Sensor Anomaly Detection (ISSM Day 3)</strong>
    <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>import torch
import torch.nn as nn

class SensorAutoencoder(nn.Module):
    def __init__(self, input_dim=70, latent_dim=10):
        super().__init__()
        # Encoder: 70 -> 32 -> 10 (Bottleneck)
        self.encoder = nn.Sequential(
            nn.Linear(input_dim, 32),
            nn.ReLU(),
            nn.Linear(32, latent_dim),
            nn.ReLU()
        )
        # Decoder: 10 -> 32 -> 70
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 32),
            nn.ReLU(),
            nn.Linear(32, input_dim)
        )
        
    def forward(self, x):
        return self.decoder(self.encoder(x))

# Anomaly Scoring
model.eval()
with torch.no_grad():
    x_hat = model(test_sensor_tensor)
    mse_errors = torch.mean((test_sensor_tensor - x_hat) ** 2, dim=1).numpy()

anomalies = mse_errors > threshold_tau</code></pre>

    <strong style="color: #34d399; margin-top: 14px; display: block;">2. Keras Functional API Bidirectional LSTM Sequence Classifier</strong>
    <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>from tensorflow.keras import layers, Model

inputs = layers.Input(shape=(seq_length, feature_dim))
x = layers.Bidirectional(layers.LSTM(64, return_sequences=True))(inputs)
x = layers.Dropout(0.2)(x)
x = layers.LSTM(32, return_sequences=False)(x)
outputs = layers.Dense(1, activation='sigmoid')(x)

model = Model(inputs=inputs, outputs=outputs)
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.summary()</code></pre>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: Exam Crucible — 5 Dangerous Traps & Common Flaws",
      subtitle: "The LSTM 4x parameter trap, forget gate inversion, and transient noise debounce",
      badge: "Exam Traps & Survival",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #ef4444;">
  <div class="card-icon" style="color: #ef4444;"><i data-lucide="shield-alert"></i></div>
  <div class="card-body">
    <h3>The 5 Fatal Exam Traps for Day 7 Sequences & Embeddings</h3>
    <p class="lead-text">
      Examiners constantly penalize students who calculate LSTM parameters as if they were simple RNNs, or who fail to distinguish transient sensor glitches from real crises.
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 1: The LSTM 4× Multiplier Trap</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Calculating trainable parameters for an LSTM with $d_{\\text{in}} = 100$ and $d_h = 64$ as $(100 + 64 + 1) \\times 64 = 10,560$.<br>
      <strong>The Reality:</strong> That is the formula for a <em>Vanilla RNN</em>! An LSTM contains <strong>FOUR internal networks</strong> (Forget, Input, Candidate, Output). The true count is $4 \\times 10,560 = 42,240$. Forgetting the factor of 4 is an automatic deduction!
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 2: Forget Gate Direction Inversion</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Assuming $f_t = 1$ means "forget completely" and $f_t = 0$ means "remember".<br>
      <strong>The Reality:</strong> The formula is $C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$. Therefore:
      <ul style="margin: 4px 0 0 16px;">
        <li>$f_t = 1$: Multiply past memory by 1 $\\to$ <strong>KEEP 100%</strong> of memory!</li>
        <li>$f_t = 0$: Multiply past memory by 0 $\\to$ <strong>FLUSH / ERASE</strong> memory!</li>
      </ul>
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 3: Transient Noise Alarm Trap</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Triggering an industrial factory shutdown or medical emergency pump on the very first time step that reconstruction error exceeds $\\tau$.<br>
      <strong>The Reality:</strong> Single-step spikes are almost always hardware voltage glitches (Event A). Systems must require <strong>$K$ consecutive anomalous steps (persistence debouncing)</strong> before executing high-cost physical interventions!
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 4: PCA vs Autoencoder Equivalence Fallacy</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Believing deep autoencoders always reduce to PCA.<br>
      <strong>The Reality:</strong> A linear autoencoder with no non-linear activations indeed spans the exact same subspace as PCA. However, deep autoencoders with non-linear activations (ReLU, Sigmoid) learn curved, non-linear manifolds that PCA is mathematically incapable of representing.
    </p>
  </div>
</div>

<div class="lesson-card mt-3" style="border-left: 3px solid #38bdf8;">
  <h4 style="color: #38bdf8;">Trap 5: CBOW vs Skip-Gram Selection Confusion</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
    <strong>The Trap:</strong> Recommending CBOW for rare specialized medical vocabulary on a small corpus.<br>
    <strong>The Reality:</strong> CBOW averages context representations, smoothing out and drowning rare words. <strong>Skip-Gram</strong> treats every context-target pair independently, making it far superior for rare terms and specialized domain glossaries.
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
  <h3><i data-lucide="check-square"></i> Day 7 Slide Mastery Crucible</h3>
  <p class="lead-text">
    Answer all 10 questions below. Each question is sampled directly from past NUS ISS examination patterns covering RNNs, LSTMs, GRUs, Sensor Autoencoders, and Word2Vec.
  </p>
  <div id="sprint-quiz-container" class="mt-4">
    <!-- Rendered dynamically by Quiz Engine -->
  </div>
</div>
`
    }
  ]
};
