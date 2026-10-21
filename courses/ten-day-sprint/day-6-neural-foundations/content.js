// Day 6 Deep Learning: Perceptrons, MLPs, RBF/SOM & Convolutions Interactive Master Curriculum
// Modules: Pattern Recognition Systems (PRMLS Day 1a/1b, Day 2a/2b, PSUPR Day 5) & Machine Reasoning (MR Day 4)

window.DAY6_NEURAL_FOUNDATIONS_CONTENT = {
  id: "day-6-neural-foundations",
  title: "Day 6: Deep Learning: Perceptrons, MLPs, RBF/SOM & Convolutions",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — From Linear Limits to Deep Representation",
      subtitle: "Overcoming the XOR wall and the evolution from global hyperplanes to local receptive fields and translation invariance",
      badge: "Foundations & Mental Models",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="cpu"></i></div>
  <div class="card-body">
    <h3>The Deep Learning Revolution: Representation over Feature Engineering</h3>
    <p class="lead-text">
      Welcome to Day 6! In the first half of our sprint (Days 1–5), we relied heavily on <strong>handcrafted features</strong> — whether measuring wave peaks, counting words in BBNs, or building transaction itemsets. Today, we step into the neural paradigm where machines <strong>learn hierarchical feature representations directly from raw inputs</strong>.
    </p>
    <div class="quote-box">
      <em>"A single perceptron is blinded by non-linear boundaries. Stack them with non-linear activations, and you can approximate any continuous function on Earth. Replace global connections with sliding local kernels, and you get computer vision. Replace hyperplanes with radial bells, and you get local uncertainty awareness."</em>
      <div class="quote-author">— PRMLS Day 1 & 2 Masterclass Lecture Notes</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 5 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 5 Core High-Yield Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. DBSCAN Density:</strong><br>
      Core points have $\\ge \\text{MinPts}$ in $\\epsilon$. Border points $< \\text{MinPts}$ but reachable. Non-convex moons can only be separated by density, NOT spherical K-Means!
    </div>
    <div>
      <strong style="color: #34d399;">2. Apriori Lift $< 1$ Trap:</strong><br>
      Confidence can be high (e.g. 70%), but if baseline $P(B) = 80\\%$, $\\text{Lift} = 0.875 < 1$ (negative association). Always check Lift!
    </div>
    <div>
      <strong style="color: #f59e0b;">3. Mean-Centered CF:</strong><br>
      $\\hat{r}_{u,i} = \\bar{r}_u + \\frac{\\sum \\text{sim}(u,v)(r_{v,i} - \\bar{r}_v)}{\\sum |\\text{sim}(u,v)|}$. Subtracting $\\bar{r}_v$ removes individual rating bias.
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="layers"></i> 4 Architectural Neural Paradigms</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In the NUS ISS curriculum, every neural architecture has a distinct geometric personality:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. Multi-Layer Perceptron (MLP):</strong> Stacks linear projections with non-linear activations (ReLU, Sigmoid). Decision boundaries are <em>global unbounded hyperplanes</em>.</li>
      <li><strong>2. Radial Basis Function (RBF):</strong> Computes Euclidean distance to prototype centers $\\mu_j$ with Gaussian decay. Boundaries are <em>localized receptive fields</em>.</li>
      <li><strong>3. Self-Organizing Maps (SOM):</strong> Unsupervised competitive learning where a 2D topological mesh bends to fit high-dimensional data without labels.</li>
      <li><strong>4. Convolutional Neural Networks (CNN):</strong> Exploits spatial locality and translation invariance via shared sliding kernels and pooling layers.</li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="eye"></i> Explainable AI (XAI) Synergy</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      Deep networks are powerful universal approximators, but they are notorious "black boxes". In Machine Reasoning Day 4, intelligent systems require <strong>interpretability</strong>:
    </p>
    <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.82rem; margin-top: 8px;">
      [Raw Image / Tabular Input]<br>
      &nbsp;&nbsp;│<br>
      &nbsp;&nbsp;├──► Deep Neural Net Prediction (e.g. 94% Malignant Tumor)<br>
      &nbsp;&nbsp;│<br>
      &nbsp;&nbsp;└──► <strong>XAI Decoder:</strong><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• SHAP: Exact game-theoretic feature attribution<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• LIME: Local linear surrogate perturbation<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Grad-CAM: Gradient heatmaps on final conv layer
    </div>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 6)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>CNN Parameter Audits, Multi-Head GAP Redesign (PRS Q2a — 8 Marks!), and MLP Backpropagation</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Exact CNN Shape &amp; Parameter Formulas</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Spatial Output Size:</strong> $O = \\left\\lfloor \\frac{W - K + 2P}{S} \\right\\rfloor + 1$. With <code>padding='same'</code> and $S=1$, $O = W$.</li>
        <li><strong>Conv2D Params:</strong> $(K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}$.</li>
        <li><strong>Pooling / GAP / Flatten / Dropout Params:</strong> Always <strong>0</strong>!</li>
        <li><strong>Dense Params:</strong> $(N_{\\text{in}} + 1) \\times N_{\\text{out}}$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. PRS Q2a CNN Critique &amp; 97.3% Parameter Reduction</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Flaw 1 (Flatten Bottleneck):</strong> <code>Flatten(14×14×48 = 9408)</code> into <code>dense_3(256)</code> creates $9408 \\times 256 + 256 = \\mathbf{2,408,704}$ params ($93.4\\%$ of network) $\\implies$ massive overfitting on 5,000 images.</li>
        <li><strong>Flaw 2 (918-Class Cartesian Output):</strong> Combining $18\\text{ Brands} \\times 17\\text{ Types} \\times 3\\text{ Values} = 918$ classes leaves $<5.5$ images/class and $118,422$ output params.</li>
        <li><strong>Fix 1 (GlobalAveragePooling2D):</strong> Replace <code>Flatten</code> with <code>GAP2D</code> $\\to$ shape <code>(None, 48)</code> $\\to$ <code>dense_3</code> drops to $(48+1)\\times 256 = \\mathbf{12,544}$ params!</li>
        <li><strong>Fix 2 (3 Multi-Task Heads):</strong> Replace <code>dense_5(918)</code> with 3 parallel Softmax heads (<code>Brand: 18</code>, <code>Type: 17</code>, <code>Value: 3</code>) $\\to$ $(128+1)\\times(18+17+3) = \\mathbf{4,902}$ params. Total params drop from <strong>2,578,982 to 69,398 (-97.3%)</strong>!</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. MLP Backpropagation &amp; Activation Trade-offs</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Output Gradient:</strong> $\\boldsymbol{\\delta}^{(L)} = \\hat{\\mathbf{y}} - \\mathbf{y}$ (for Softmax + Cross-Entropy or Sigmoid + BCE).</li>
        <li><strong>Hidden Layer Gradient:</strong> $\\boldsymbol{\\delta}^{(l)} = ((W^{(l+1)})^T \\boldsymbol{\\delta}^{(l+1)}) \\odot f'(\\mathbf{z}^{(l)})$.</li>
        <li><strong>Why ReLU Beats Sigmoid:</strong> Sigmoid derivative $\\sigma'(z) \\le 0.25$ vanishes across layers ($0.25^L \\to 0$); ReLU has $f'(z)=1$ for $z&gt;0$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. RBF Networks vs Self-Organizing Maps (SOM)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>RBF Activation:</strong> $\\phi_j(\\mathbf{x}) = \\exp\\left(-\\frac{\\|\\mathbf{x} - \\boldsymbol{\\mu}_j\\|^2}{2\\sigma_j^2}\\right)$ (local Gaussian receptive field).</li>
        <li><strong>SOM Best Matching Unit (BMU):</strong> $c = \\arg\\min_j \\|\\mathbf{x} - \\mathbf{w}_j\\|$.</li>
        <li><strong>SOM Topological Update:</strong> $\\mathbf{w}_j(t+1) = \\mathbf{w}_j(t) + \\eta(t) h_{cj}(t)(\\mathbf{x} - \\mathbf{w}_j(t))$.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Perceptrons, MLPs & Exact Backpropagation Math",
      subtitle: "Replicating the NUS ISS ANN-BP-v006 benchmark spreadsheet step by step",
      badge: "Backprop Engine",
      content: `
<div class="lesson-card">
  <h3>The Mathematics of Backpropagation: Step-by-Step Derivation</h3>
  <p class="lead-text">
    Backpropagation is simply the recursive application of the <strong>Calculus Chain Rule</strong> along the computational graph. In the NUS ISS exam, you will be expected to calculate forward passes and backward error deltas by hand!
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. Forward Pass Equations</strong>
      For hidden neuron $j$:
      $$z_j = \\sum_{i} w_{ij} x_i + b_j, \\quad a_j = \\sigma(z_j)$$
      For output neuron $k$:
      $$z_k = \\sum_{j} w_{jk} a_j + b_k, \\quad y_k = \\sigma(z_k)$$
      Total Squared Loss:
      $$E_{\\text{total}} = \\frac{1}{2} \\sum_{k} (t_k - y_k)^2$$
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #f59e0b;">2. Output Layer Error Gradient</strong>
      Local gradient $\\delta_k = -\\frac{\\partial E}{\\partial z_k}$:
      $$\\delta_k = (t_k - y_k) \\cdot y_k(1 - y_k)$$
      Weight update from hidden $j$ to output $k$:
      $$\\Delta w_{jk} = \\eta \\cdot \\delta_k \\cdot a_j$$
      $$w_{jk}^{(\\text{new})} = w_{jk}^{(\\text{old})} + \\Delta w_{jk}$$
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">3. Hidden Layer Error Gradient</strong>
      Local gradient $\\delta_j$ backpropagated from all connected outputs:
      $$\\delta_j = a_j(1 - a_j) \\cdot \\sum_{k} (\\delta_k \\cdot w_{jk})$$
      Weight update from input $i$ to hidden $j$:
      $$\\Delta w_{ij} = \\eta \\cdot \\delta_j \\cdot x_i$$
      $$w_{ij}^{(\\text{new})} = w_{ij}^{(\\text{old})} + \\Delta w_{ij}$$
    </div>
  </div>
</div>

<!-- Interactive Backprop Spreadsheet Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="calculator"></i> Interactive Backpropagation Spreadsheet Lab (ANN-BP-v006.xlsx)</h3>
    <div style="display: flex; gap: 8px;">
      <button id="bp-btn-forward" class="btn-primary" style="font-size: 0.8rem; padding: 6px 14px; background: #38bdf8; color: #000; font-weight: 700; border: none; border-radius: 6px; cursor: pointer;">
        1. Execute Forward Pass
      </button>
      <button id="bp-btn-backward" class="btn-primary" style="font-size: 0.8rem; padding: 6px 14px; background: #34d399; color: #000; font-weight: 700; border: none; border-radius: 6px; cursor: pointer;">
        2. Execute Backward Pass
      </button>
      <button id="bp-btn-reset" class="btn-outline" style="font-size: 0.8rem; padding: 6px 12px;">
        Reset
      </button>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Direct interactive web replica of Dr. Zhu Fangming's official NUS ISS benchmark spreadsheet. Traces inputs $[0.05, 0.10]$ targeting $[0.01, 0.99]$ with learning rate $\\eta = 0.5$.
  </p>

  <div id="bp-spreadsheet-container" class="mt-3">
    <!-- Rendered dynamically by SprintDay6Visualizers.initBackpropSpreadsheetLab() -->
  </div>

  <div id="bp-step-log" class="mt-3" style="background: rgba(0,0,0,0.4); border-radius: 8px; border: 1px solid var(--border-color); padding: 12px; font-family: monospace; font-size: 0.8rem; min-height: 120px;">
    <span style="color: var(--text-muted);">Click "1. Execute Forward Pass" to start tracing equations...</span>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: RBF Networks, GRNN & Self-Organizing Maps (SOM)",
      subtitle: "Local Gaussian receptive fields vs global hyperplanes and unsupervised competitive learning",
      badge: "Local Fields & SOM",
      content: `
<div class="lesson-card">
  <h3>Radial Basis Function (RBF) Networks & Kohonen SOM</h3>
  <p class="lead-text">
    While MLPs rely on sigmoidal hyperplanes that divide the entire universe, RBF networks model local neighborhoods using Gaussian basis functions, and SOMs map continuous topology onto discrete lattices.
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #34d399;">RBF Gaussian Receptive Fields</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Instead of $w^T x + b$, each hidden neuron $j$ computes the distance to a prototype center $\\mu_j$:
      </p>
      $$\\phi_j(x) = \\exp\\left(-\\frac{\\|x - \\mu_j\\|^2}{2\\sigma_j^2}\\right)$$
      <div style="background: rgba(52,211,153,0.05); padding: 10px; border-radius: 6px; border-left: 3px solid #34d399; margin-top: 8px;">
        <strong>The 2-Stage Training Advantage:</strong>
        <ol style="margin: 4px 0 0 16px;">
          <li><strong>Unsupervised Phase:</strong> Run K-Means on training points to find centers $\\mu_j$ and spreads $\\sigma_j$.</li>
          <li><strong>Supervised Phase:</strong> Solve output weights in ONE shot using the pseudo-inverse: $W = (\\Phi^T \\Phi)^{-1} \\Phi^T Y$. No vanishing gradients, no learning rate tuning!</li>
        </ol>
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #f59e0b;">Self-Organizing Maps (Kohonen SOM)</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        An unsupervised neural network that maps high-dimensional data onto a low-dimensional (usually 2D) topological grid:
      </p>
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li><strong>Competition:</strong> For each input $x$, find the Best Matching Unit (BMU) $c = \\arg\\min_i \\|x - w_i\\|$.</li>
        <li><strong>Cooperation:</strong> Define a Gaussian neighborhood $h_{ci}(t) = \\exp(-\\frac{d_{ci}^2}{2\\sigma^2(t)})$ around the BMU.</li>
        <li><strong>Adaptation:</strong> Pull the BMU and its neighbors toward $x$:
          $$\\Delta w_i = \\eta(t) h_{ci}(t) (x - w_i)$$
        </li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive RBF vs SOM Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="radio"></i> Interactive RBF Receptive Fields vs SOM Studio</h3>
    <div style="display: flex; gap: 8px;">
      <select id="rbf-mode-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="rbf" selected>RBF (Local Gaussian Bells)</option>
        <option value="mlp">MLP (Global Infinite Hyperplanes)</option>
        <option value="som">SOM (Competitive 2D Mesh)</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Switch between RBF, MLP, and SOM. Notice how an input far from all centers in an RBF produces zero activation (signaling uncertainty!), while an MLP extrapolates arbitrary confidence to infinity.
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="rbf-som-canvas" width="480" height="340" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <div id="rbf-sigma-container" class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Gaussian Spread $\\sigma$ (Bandwidth):</span>
          <span id="rbf-val-sigma" class="badge-tech" style="color: #34d399;">0.20</span>
        </label>
        <input type="range" id="rbf-slider-sigma" min="0.08" max="0.45" step="0.01" value="0.20" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>Narrow (Sharp spikes / Memory)</span>
          <span>Broad (Smooth interpolation)</span>
        </div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <strong style="font-size: 0.85rem; color: #38bdf8;"><i data-lucide="shield-check"></i> Master Comparison Table: MLP vs RBF</strong>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem; margin-top: 8px;">
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
            <th style="padding: 4px; text-align: left;">Feature</th>
            <th style="padding: 4px;">MLP</th>
            <th style="padding: 4px;">RBF</th>
          </tr>
          <tr>
            <td style="padding: 4px;">Activation</td>
            <td style="padding: 4px;">Global ($w^T x + b$)</td>
            <td style="padding: 4px;">Local ($\\phi(\\|x - \\mu\\|)$)</td>
          </tr>
          <tr>
            <td style="padding: 4px;">Training</td>
            <td style="padding: 4px;">Slow (Backprop)</td>
            <td style="padding: 4px;">Fast (2-stage pseudo-inv)</td>
          </tr>
          <tr>
            <td style="padding: 4px;">Extrapolation</td>
            <td style="padding: 4px; color: #ef4444;">Unsafe (arbitrary)</td>
            <td style="padding: 4px; color: #34d399;">Safe (drops to 0)</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: 2D Convolutional Networks — Kernels, Stride & Parameter Counting",
      subtitle: "Spatial dimension formulas and exact parameter calculation with biases for the exam",
      badge: "Computer Vision",
      content: `
<div class="lesson-card">
  <h3>Convolutional Neural Networks: The 2 Master Formulas</h3>
  <p class="lead-text">
    In Computer Vision (PRMLS Day 2b & PSUPR Day 5), fully connected MLPs fail because a $224 \\times 224 \\times 3$ image would create 150,000 weights per hidden neuron! CNNs solve this via <strong>local connectivity</strong> and <strong>weight sharing</strong>.
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">Formula 1: Output Spatial Dimension</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Given an input width $W$, filter size $F$, padding $P$, and stride $S$:
      </p>
      $$W_{\\text{out}} = \\left\\lfloor \\frac{W - F + 2P}{S} \\right\\rfloor + 1$$
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li><strong>Valid Padding ($P=0$):</strong> Shrinks feature map size.</li>
        <li><strong>Same Padding ($P=\\frac{F-1}{2}$):</strong> Preserves spatial dimensions when $S=1$.</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #f59e0b;">Formula 2: Exact Trainable Parameters</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        For a convolutional layer with $K$ filters applied to an input with $C_{\\text{in}}$ channels:
      </p>
      $$\\text{Total Parameters} = \\Big( F \\times F \\times C_{\\text{in}} + 1 \\Big) \\times K$$
      <div style="background: rgba(239,68,68,0.08); padding: 8px; border-radius: 6px; border-left: 3px solid #ef4444; margin-top: 6px; font-size: 0.8rem;">
        <strong>Notice the $+1$:</strong> Every filter has exactly one learnable scalar bias term! Do not forget to add it.
      </div>
    </div>
  </div>
</div>

<!-- Interactive CNN Architecture Calculator -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="layers"></i> Interactive CNN Layer Dimension & Parameter Calculator Studio</h3>
  <p class="text-secondary mt-1">
    Experiment with kernel sizes, padding, strides, and filter depths. Watch the output tensor shape and exact parameter count compute in real time!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1fr 1.2fr;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="font-size: 0.88rem; color: #38bdf8; margin-bottom: 10px;">Layer Hyperparameters</h4>
      <div class="grid-2-col" style="font-size: 0.82rem; gap: 8px;">
        <div>
          <label>Input Size $W \\times H$:</label>
          <input type="number" id="cnn-input-dim" value="32" class="select-styled" style="width: 100%; margin-top: 4px;">
        </div>
        <div>
          <label>Input Channels $C_{\\text{in}}$:</label>
          <input type="number" id="cnn-input-channels" value="3" class="select-styled" style="width: 100%; margin-top: 4px;">
        </div>
        <div>
          <label>Kernel Size $F$:</label>
          <input type="number" id="cnn-kernel-size" value="3" class="select-styled" style="width: 100%; margin-top: 4px;">
        </div>
        <div>
          <label>Filters $K$:</label>
          <input type="number" id="cnn-num-filters" value="32" class="select-styled" style="width: 100%; margin-top: 4px;">
        </div>
        <div>
          <label>Stride $S$:</label>
          <input type="number" id="cnn-stride" value="1" class="select-styled" style="width: 100%; margin-top: 4px;">
        </div>
        <div>
          <label>Padding $P$:</label>
          <input type="number" id="cnn-padding" value="1" class="select-styled" style="width: 100%; margin-top: 4px;">
        </div>
      </div>
    </div>

    <div id="cnn-calc-results">
      <!-- Rendered dynamically by SprintDay6Visualizers.initCNNArchitectureCalculator() -->
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Inductive Learning, Explainable AI (XAI) & Python Labs",
      subtitle: "Interpreting black-box representations with SHAP, LIME, and verified workshop code",
      badge: "Explainability & Code",
      content: `
<div class="lesson-card">
  <h3>Explainable AI (XAI): Peeking Inside the Black Box</h3>
  <p class="lead-text">
    In high-stakes reasoning systems (healthcare, credit approval, autonomous driving), achieving high accuracy is not enough — the system must justify its reasoning.
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. SHAP (Shapley Values)</strong>
      Grounded in cooperative game theory:
      $$\\phi_i = \\sum_{S \\subseteq F \\setminus \\{i\\}} \\frac{|S|!(|F| - |S| - 1)!}{|F|!} \\Big( f(S \\cup \\{i\\}) - f(S) \\Big)$$
      Fairly distributes prediction gain across all features.
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">2. LIME (Local Surrogates)</strong>
      Builds a simple interpretable model (e.g. sparse linear regression) locally around the prediction by perturbing input samples:
      $$\\xi(x) = \\arg\\min_{g \\in G} \\mathcal{L}(f, g, \\pi_x) + \\Omega(g)$$
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #f59e0b;">3. Grad-CAM (CNN Attention)</strong>
      Uses gradients flowing into the final convolutional layer to produce a coarse localization map highlighting discriminative image regions:
      $$L_{\\text{Grad-CAM}}^c = \\text{ReLU}\\left( \\sum_k \\alpha_k^c A^k \\right)$$
    </div>
  </div>
</div>

<!-- Interactive XAI Waterfall Studio -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="bar-chart-2"></i> Interactive SHAP Waterfall Attribution Studio (Loan Approval)</h3>
  <p class="text-secondary mt-1">
    Inspect how an applicant's attributes pull the approval probability above or below the population baseline ($E[f(x)] = 64\\%$). Green bars push approval up; red bars pull approval down!
  </p>

  <div id="xai-waterfall-container" class="mt-3">
    <!-- Rendered dynamically by SprintDay6Visualizers.initXAIInspector() -->
  </div>
</div>

<!-- Python Labs -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="code"></i> Verified Python Code Labs (Keras & PyTorch CNN)</h3>
  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; border: 1px solid var(--border-color); margin-top: 10px;">
    <strong style="color: #38bdf8;">1. CIFAR-10 Convolutional Network in Keras / TensorFlow</strong>
    <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>from tensorflow.keras import layers, models

model = models.Sequential([
    # Layer 1: 32 filters of 3x3, same padding -> (32, 32, 32)
    layers.Conv2D(32, (3, 3), padding='same', activation='relu', input_shape=(32, 32, 3)),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)), # -> (16, 16, 32)
    
    # Layer 2: 64 filters of 3x3, valid padding -> (14, 14, 64)
    layers.Conv2D(64, (3, 3), padding='valid', activation='relu'),
    layers.MaxPooling2D((2, 2)), # -> (7, 7, 64)
    
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.3), # Regularization at train time
    layers.Dense(10, activation='softmax') # 10 CIFAR classes
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.summary()</code></pre>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: Exam Crucible — 5 Dangerous Traps & Common Flaws",
      subtitle: "The CNN bias omission trap, vanishing gradients, and RBF out-of-distribution safety",
      badge: "Exam Traps & Survival",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #ef4444;">
  <div class="card-icon" style="color: #ef4444;"><i data-lucide="shield-alert"></i></div>
  <div class="card-body">
    <h3>The 5 Lethal Exam Traps for Day 6 Neural Foundations</h3>
    <p class="lead-text">
      Students constantly make small calculation slips on CNN parameters or conceptual errors on RBF vs MLP. Review these traps!
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 1: The CNN Bias Omission Trap</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> The exam asks: <em>"A conv layer has 64 filters of size $3 \\times 3 \\times 32$. How many trainable parameters are there?"</em><br>
      <strong>Student Mistake:</strong> $3 \\times 3 \\times 32 \\times 64 = 18,432$.<br>
      <strong>The Reality:</strong> You FORGOT the $+1$ bias per filter! The correct formula is $[(3 \\times 3 \\times 32) + 1] \\times 64 = 289 \\times 64 = 18,496$. Omitting 64 biases loses full marks on the question!
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 2: Derivative of Sigmoid in Backpropagation</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Calculating hidden layer delta $\\delta_j$ and writing $\\delta_j = \\sigma(z_j) \\sum \\delta_k w_{jk}$.<br>
      <strong>The Reality:</strong> The derivative of sigmoid is $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z)) = a_j(1 - a_j)$. You must multiply by $(1 - a_j)$! Forgetting this produces wildly inaccurate weight updates.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 3: RBF Out-of-Distribution Safety vs MLP Blindness</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Assuming an MLP is always superior to an RBF network because deep MLPs have higher capacity.<br>
      <strong>The Reality:</strong> An MLP with linear sigmoidal hyperplanes extrapolates arbitrary high-confidence predictions on data points located thousands of standard deviations outside the training distribution! An RBF network naturally outputs $\\approx 0$ activation everywhere far from known centroids, signaling <em>"I do not know"</em>.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 4: Dropout Scaling Inversion</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Leaving Dropout enabled at test/inference time.<br>
      <strong>The Reality:</strong> Dropout must be <strong>disabled</strong> during inference. In standard dropout, weights are multiplied by $(1 - p)$ at test time. In modern PyTorch/TensorFlow (inverted dropout), activations are scaled by $\\frac{1}{1-p}$ during <em>training</em>, so test time evaluation requires zero modifications!
    </p>
  </div>
</div>

<div class="lesson-card mt-3" style="border-left: 3px solid #38bdf8;">
  <h4 style="color: #38bdf8;">Trap 5: LIME Non-Determinism vs SHAP Axiomatic Guarantee</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
    <strong>The Trap:</strong> Assuming LIME feature importance rankings are mathematically unique.<br>
    <strong>The Reality:</strong> LIME relies on random perturbation sampling; different random seeds can produce different feature rankings for the same prediction! SHAP is uniquely grounded in the Shapley axioms, guaranteeing consistent, additive explanations.
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
  <h3><i data-lucide="check-square"></i> Day 6 Slide Mastery Crucible</h3>
  <p class="lead-text">
    Answer all 10 questions below. Each question is sampled directly from past NUS ISS examination patterns covering Perceptrons, Backpropagation, RBF/SOM, CNN Dimensions & Parameters, and Explainable AI.
  </p>
  <div id="sprint-quiz-container" class="mt-4">
    <!-- Rendered dynamically by Quiz Engine -->
  </div>
</div>
`
    }
  ]
};
