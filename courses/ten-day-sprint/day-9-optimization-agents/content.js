// Day 9 Evolutionary Optimization, Multimodal Fusion & Cognitive Agents Interactive Master Curriculum
// Modules: Reasoning Systems (RS Day 4), Intelligent Sensing Systems (ISSM Day 4), Cognitive Systems (CS Day 3)

window.DAY9_OPTIMIZATION_AGENTS_CONTENT = {
  id: "day-9-optimization-agents",
  title: "Day 9: Evolutionary Optimization, Multimodal Fusion & Cognitive Agents",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — From Local Heuristics to Global Evolution & Agency",
      subtitle: "Connecting Genetic Algorithms, Multi-Sensor Fusion, and Cognitive Architectures",
      badge: "Foundations & Mental Models",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="dna"></i></div>
  <div class="card-body">
    <h3>The Triad: Evolutionary Search, Physical Perception & Autonomous Agency</h3>
    <p class="lead-text">
      Welcome to Day 9! Yesterday, we mastered ultra-deep ResNets, Transformers, and Knowledge Graph reasoning. Today, we conquer three foundational pillars that bridge computer science, physics, and human cognition: <strong>Evolutionary Optimization (Genetic Algorithms)</strong>, <strong>Multimodal Sensor Fusion (Physical Perception)</strong>, and <strong>Cognitive Memory & ReAct Agent Architectures</strong>.
    </p>
    <div class="quote-box">
      <em>"Gradient descent requires differentiable, convex mathematical landscapes. When the search space is discrete, non-convex, or full of local traps, biological evolution provides the ultimate global heuristic. And when autonomous agents act in the real world, fusing multi-sensory physical feedback with cognitive memory prevents hallucination and guarantees verifiable execution."</em>
      <div class="quote-author">— RS Day 4 & CS Day 3 Masterclass Notes</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 8 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 8 Core Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. ResNet Additive $+1$ Gradient:</strong><br>
      $\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H}\\left(\\frac{\\partial F}{\\partial x} + 1\\right)$. The $+1$ skip connection guarantees gradients flow back 152 layers without decaying.
    </div>
    <div>
      <strong style="color: #34d399;">2. MobileNet Separable Speedup:</strong><br>
      Separating spatial $3 \\times 3$ Depthwise conv from $1 \\times 1$ Pointwise channel projection cuts FLOPs by $\\frac{1}{K} + \\frac{1}{F^2} \\approx \\frac{1}{9}$ ($89\\%$ computational saving!).
    </div>
    <div>
      <strong style="color: #f59e0b;">3. Scaled Self-Attention & TransE:</strong><br>
      Attention divides by $\\sqrt{d_k}$ to prevent softmax gradient saturation. TransE optimizes $\\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| \\approx 0$ for vector knowledge graph completion.
    </div>
  </div>
</div>

<div class="grid-3-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="cpu"></i> 1. Evolutionary Search (RS)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Simulating Darwinian survival of the fittest: Chromosome encoding, Fitness proportionate Roulette-Wheel selection, Order Crossover (OX), Mutation, and Elitism to solve NP-hard combinatorial optimization (TSP).
    </p>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="layers"></i> 2. Multimodal Fusion (ISSM)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Early (Feature) vs Late (Decision) fusion. Deconstruct the NUS ISS Reverse Vending Machine (RVM): Barcode + Vision + Load Cell + Inductive Metal + Acoustic Ping to expose fraud edge cases.
    </p>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="bot"></i> 3. Cognitive Agency (CS & MR)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Human memory architecture (ACT-R / SOAR: Declarative Episodic/Semantic vs Procedural Rules). Modern LLM ReAct loops: Thought &rarr; Action &rarr; Observation &rarr; Grounded Answer.
    </p>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 9)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>Deep Reinforcement Learning for Robotic Sorting (PRS Q2b), Hybrid System Architectures (IRS Q2c), and Genetic Algorithms</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Robotic Pick-and-Place DRL Blueprint (PRS Q2b)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>State ($s_t$):</strong> Overhead RGB-D camera image/pose of overlapping e-waste + robot arm joint angles + gripper state.</li>
        <li><strong>3 Reward Factors ($R_t$):</strong>
          <br>• $+R_{\\text{pick/place}}$: Positive reward for grasping &amp; placing into correct sorting bin.
          <br>• $-P_{\\text{collision}}$: Heavy penalty for colliding with conveyor, bin walls, or other components.
          <br>• $-P_{\\text{pose/drop}}$: Penalty for invalid joint configurations, excessive time, or dropping e-waste.</li>
        <li><strong>Sim-to-Real Digital Twin:</strong> Train DRL policy inside a physics simulator (Gazebo/Isaac Gym) with <em>Domain Randomization</em> before deploying to physical hardware so trial-and-error exploration never causes physical collisions!</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. Hybrid Intelligent System Architectures (IRS Q2c)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Architecture Type for <code>A-EYE</code>:</strong> <strong>Sequential Subprocessing / Transformational Loosely-Coupled Hybrid System</strong>.</li>
        <li><strong>Execution Flow:</strong> <code>A-EYE-App</code> (computer vision + pupil measurement module) processes 100 raw eye frames to detect a symbolic clinical sign (<code>RAPD = Present/Absent</code>), which is fed as a structured input into <code>A-EYE-Web</code> (knowledge-based diagnostic reasoning system).</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. Q-Learning &amp; Bellman Optimality Equations</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>TD Target:</strong> $Y_t = R_{t+1} + \\gamma \\max_{a'} Q(S_{t+1}, a'; \\theta^-)$.</li>
        <li><strong>Q-Learning Update:</strong> $Q(S_t, A_t) \\leftarrow Q(S_t, A_t) + \\alpha \\left[R_{t+1} + \\gamma \\max_{a'} Q(S_{t+1}, a') - Q(S_t, A_t)\\right]$.</li>
        <li><strong>DQN Stabilizers:</strong> Experience Replay Buffer (breaks correlation) + Target Network $\\theta^-$ (stabilizes bootstrap target).</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. Genetic Algorithm (GA) 5-Step Optimization</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Encode Chromosomes:</strong> Binary bitstrings (feature selection), real vectors, or permutations (TSP/routing).</li>
        <li><strong>Evaluate Fitness:</strong> Roulette wheel probability $P(c_i) = \\frac{f(c_i)}{\\sum_j f(c_j)}$.</li>
        <li><strong>Crossover ($p_c \\approx 0.8$), Mutation ($p_m \\approx 0.01$) &amp; Elitism:</strong> Recombine parents, mutate for diversity, and preserve top elite solutions unchanged.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Genetic Algorithms — WS1GA.xlsx & TSP Arena",
      subtitle: "Replicating Dr. Zhu Fangming's exact spreadsheet calculations and evolving 10-city Singapore tours",
      badge: "Evolutionary GA",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="table"></i> Dr. Zhu Fangming's WS1GA.xlsx Master Blueprint</h3>
  <p style="font-size: 0.9rem; color: var(--text-secondary);">
    In Reasoning Systems (RS Day 4), Dr. Zhu introduces Genetic Algorithms using the foundational benchmark: <strong>Maximize $f(x) = x^2$</strong> for a 5-bit binary chromosome $x \\in [0, 31]$. Let us deconstruct the exact 4-individual population hand-calculations tested in NUS ISS exams.
  </p>

  <div class="grid-2-col mt-3">
    <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.85rem;">
      <h5 style="color: #38bdf8; margin-bottom: 6px;">Step 1: Fitness Proportionate Selection (Roulette Wheel)</h5>
      <p>For each chromosome $i \\in \\{1, 2, 3, 4\\}$:</p>
      $$p_i = \\frac{f(x_i)}{\\sum_{j=1}^N f(x_j)}, \\quad C_i = \\sum_{k=1}^i p_k$$
      <p style="color: var(--text-secondary); font-size: 0.8rem;">
        Total Fitness $\\sum f = 169 + 576 + 64 + 361 = \\mathbf{1170}$.<br>
        Spin a uniform random number $r \\in [0, 1)$. Select chromosome $i$ where $C_{i-1} < r \\le C_i$.
      </p>
    </div>

    <div style="background: rgba(0,0,0,0.25); padding: 12px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.85rem;">
      <h5 style="color: #34d399; margin-bottom: 6px;">Step 2: Crossover & Mutation Operators</h5>
      <ul style="padding-left: 18px; margin: 0; color: var(--text-secondary); font-size: 0.8rem;">
        <li><strong>Single-point Crossover ($p_c = 0.7$):</strong> Split binary strings at position $k \\in [1, 4]$ and swap tails.</li>
        <li><strong>Bit-flip Mutation ($p_m = 0.05$):</strong> Flip each bit ($0 \\leftrightarrow 1$) with small probability to escape local extrema.</li>
        <li><strong>Elitism ($K=1$):</strong> Automatically carry over the highest-fitness individual (#2: $x=24, f=576$) directly into the next generation.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive GA Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4><i data-lucide="play-circle"></i> Interactive GA Studio: WS1GA.xlsx & 10-City TSP Tour Arena</h4>
    <div>
      <label style="font-size: 0.85rem; margin-right: 8px;">Select Studio Mode:</label>
      <select id="ga-tab-select" class="form-select" style="width: auto; display: inline-block; padding: 4px 10px; font-size: 0.85rem;">
        <option value="tsp" selected>1. Singapore Landmark TSP Tour Evolver</option>
        <option value="ws1">2. Dr. Zhu's WS1GA.xlsx Hand-Calculation</option>
      </select>
    </div>
  </div>

  <!-- TSP Container -->
  <div id="ga-tsp-container">
    <div style="display: flex; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; align-items: center;">
      <button id="ga-btn-evolve" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.85rem;"><i data-lucide="play"></i> Start Evolution</button>
      <button id="ga-btn-step" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;"><i data-lucide="step-forward"></i> Evolve 1 Generation</button>
      <button id="ga-btn-reset" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;"><i data-lucide="refresh-cw"></i> Reset</button>
      <div style="margin-left: auto; font-size: 0.85rem; font-family: monospace;">
        Generation: <span id="ga-val-gen" style="color: #38bdf8; font-weight: 700;">0</span> | 
        Best Tour Distance: <span id="ga-val-dist" style="color: #34d399; font-weight: 700;">--</span>
      </div>
    </div>

    <div style="background: rgba(0,0,0,0.4); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; text-align: center;">
      <canvas id="ga-tsp-canvas" width="700" height="340" style="width: 100%; max-width: 700px; height: 340px; display: block; margin: 0 auto; border-radius: 6px;"></canvas>
    </div>

    <div class="grid-3-col mt-3" style="font-size: 0.8rem; color: var(--text-secondary);">
      <div>
        <strong style="color: #38bdf8;">Order Crossover (OX):</strong><br>
        Preserves valid permutations! Slices a sub-tour from Parent 1, then fills remaining cities in the relative order of Parent 2 without duplicates.
      </div>
      <div>
        <strong style="color: #34d399;">Inversion Mutation:</strong><br>
        Reverses a random segment of the tour. Mirrors the 2-opt heuristic in operations research to untangle crossed edges.
      </div>
      <div>
        <strong style="color: #f59e0b;">Elitism Guarantee:</strong><br>
        The shortest tour found so far is preserved without alteration across generations, preventing regression.
      </div>
    </div>
  </div>

  <!-- WS1 Container -->
  <div id="ga-ws1-container" style="display: none;"></div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Multimodal Sensor Fusion — Reverse Vending Machine (RVM) Digital Twin",
      subtitle: "Deconstructing Early vs Late Fusion and catching physical fraud edge cases",
      badge: "Sensor Fusion",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="layers"></i> Multi-Sensor Fusion Paradigms: Early vs Late Fusion</h3>
  <p style="font-size: 0.9rem; color: var(--text-secondary);">
    In Intelligent Sensing Systems (ISSM Day 4), sensor fusion combines data from multiple disparate transducers to achieve higher accuracy and robustness than any individual sensor could provide alone.
  </p>

  <div class="grid-2-col mt-3">
    <div style="background: rgba(56, 189, 248, 0.05); border-left: 3px solid #38bdf8; padding: 12px; border-radius: 6px; font-size: 0.85rem;">
      <h5 style="color: #38bdf8;">1. Early Fusion (Feature-Level Fusion)</h5>
      <ul style="padding-left: 18px; margin: 0; color: var(--text-secondary); font-size: 0.82rem;">
        <li>Raw signals or feature vectors from all sensors are concatenated into a single master vector $\\mathbf{x} = [\\mathbf{x}_{\\text{vision}}, \\mathbf{x}_{\\text{weight}}, \\mathbf{x}_{\\text{acoustic}}]$.</li>
        <li><strong>Pros:</strong> Can capture rich cross-modal non-linear interactions at the earliest layer.</li>
        <li><strong>Cons:</strong> Highly sensitive to missing data; requires strict synchronous sampling; adding a new sensor requires retraining the entire model.</li>
      </ul>
    </div>

    <div style="background: rgba(52, 211, 153, 0.05); border-left: 3px solid #34d399; padding: 12px; border-radius: 6px; font-size: 0.85rem;">
      <h5 style="color: #34d399;">2. Late Fusion (Decision-Level Fusion)</h5>
      <ul style="padding-left: 18px; margin: 0; color: var(--text-secondary); font-size: 0.82rem;">
        <li>Each sensor modality has an independent classifier outputting probabilities $P_m(y|x_m)$. Outputs are fused via weighted voting, Dempster-Shafer, or rule-based veto.</li>
        <li><strong>Pros:</strong> Asynchronous robustness; modularity (plug-and-play sensors); explainable failure modes.</li>
        <li><strong>Cons:</strong> Discards fine-grained low-level cross-sensor correlation.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive RVM Digital Twin -->
<div class="lesson-card mt-4">
  <h4><i data-lucide="refresh-cw"></i> Interactive Reverse Vending Machine (RVM) Multi-Sensor Digital Twin</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    Select an incoming container to observe how the RVM fuses 5 distinct sensors (Optical Barcode, Vision Contour, Strain Gauge Load Cell, Inductive Metal Coil, and Piezo Acoustic Ping) to accept valid recyclables and intercept sophisticated fraud attempts.
  </p>

  <div style="margin-bottom: 12px;">
    <label style="font-size: 0.85rem; margin-right: 8px; font-weight: 600;">Incoming Test Scenario:</label>
    <select id="rvm-scenario-select" class="form-select" style="max-width: 480px; display: inline-block; padding: 6px 12px; font-size: 0.85rem;">
      <option value="case-1">Case 1: Authentic PET Plastic Bottle (Dasani 500ml)</option>
      <option value="case-2">Case 2: Authentic Aluminum Drink Can (Coca-Cola 330ml)</option>
      <option value="case-3">Case 3: Fraud Attempt 1: Lead-Weighted Plastic Bottle</option>
      <option value="case-4">Case 4: Fraud Attempt 2: Fake Barcode Sticker on Glass Beer Bottle</option>
    </select>
  </div>

  <div id="rvm-sensor-display"></div>
  <div id="rvm-verdict-box" class="mt-3"></div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Cognitive Memory & Agentic ReAct Loops",
      subtitle: "Mapping ACT-R/SOAR human memory partitions and tracing LLM Reasoning + Acting cycles",
      badge: "Cognitive Agents",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="brain"></i> Cognitive Architectures: The Memory Triad (ACT-R & SOAR)</h3>
  <p style="font-size: 0.9rem; color: var(--text-secondary);">
    In Cognitive Systems (CS Day 3) and Machine Reasoning (MR Day 4), artificial cognition models human mental faculties through three distinct memory systems:
  </p>

  <div class="grid-3-col mt-3">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px; border-top: 3px solid #38bdf8; font-size: 0.85rem;">
      <h5 style="color: #38bdf8;">1. Declarative Memory ("Knowing That")</h5>
      <p style="color: var(--text-secondary); font-size: 0.82rem;">
        Explicit, conscious knowledge. Partitioned into:
      </p>
      <ul style="padding-left: 18px; margin: 0; color: var(--text-secondary); font-size: 0.8rem;">
        <li><strong>Episodic Memory:</strong> Autobiographical events with temporal & spatial tags ("User submitted claim #104 at 10:15 AM").</li>
        <li><strong>Semantic Memory:</strong> General facts, concepts, and relationships ("A PET bottle is made of polyethylene terephthalate").</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px; border-top: 3px solid #34d399; font-size: 0.85rem;">
      <h5 style="color: #34d399;">2. Procedural Memory ("Knowing How")</h5>
      <p style="color: var(--text-secondary); font-size: 0.82rem;">
        Operational skills and habits encoded as <strong>Production Rules</strong>:
      </p>
      <div style="background: rgba(0,0,0,0.3); padding: 6px; border-radius: 4px; font-family: monospace; font-size: 0.75rem; color: #fbbf24;">
        IF goal = "Verify_Deposit"<br>
        &nbsp;&nbsp;&nbsp;AND barcode = "VALID"<br>
        &nbsp;&nbsp;&nbsp;AND weight in range<br>
        THEN dispense_refund()
      </div>
      <p style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 6px;">
        Executed via pattern matching with conflict resolution (Refraction, Specificity, Recency).
      </p>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px; border-top: 3px solid #f59e0b; font-size: 0.85rem;">
      <h5 style="color: #f59e0b;">3. Working Memory (Short-Term Buffers)</h5>
      <p style="color: var(--text-secondary); font-size: 0.82rem;">
        Holds active goals, current sensor inputs, and retrieved declarative chunks currently being processed by the cognitive engine.
      </p>
    </div>
  </div>
</div>

<!-- Interactive ReAct Trace Simulator -->
<div class="lesson-card mt-4">
  <h4><i data-lucide="bot"></i> The ReAct Framework: Synergy of Reasoning and Acting</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    In modern AI systems, large language models without tool use hallucinate facts. When combined with the <strong>ReAct (Reason + Act)</strong> loop (Yao et al., 2022), the agent alternates between internal deliberation and external tool execution:
  </p>

  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px;">
    <div style="display: flex; gap: 10px; margin-bottom: 12px; align-items: center;">
      <button id="react-btn-next" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.85rem;"><i data-lucide="arrow-right"></i> Execute Next Step</button>
      <button id="react-btn-reset" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;"><i data-lucide="rotate-ccw"></i> Reset Trace</button>
      <span style="font-size: 0.8rem; color: var(--text-secondary); margin-left: auto;">Target Query: <em>"Can an international student complete an off-term internship in Singapore without university approval?"</em></span>
    </div>

    <div id="react-log-box" style="min-height: 200px;"></div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: NUS ISS Workshop Code Lab",
      subtitle: "Production Python implementations of Genetic Algorithm OX and the ReAct Engine",
      badge: "Code Labs",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="code"></i> Workshop Lab 1: Python Genetic Algorithm for TSP with Order Crossover (OX)</h3>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    This production-grade script implements Order Crossover (OX) to solve permutation TSP without generating duplicate cities.
  </p>

<pre><code class="language-python">import numpy as np

class GeneticAlgorithmTSP:
    def __init__(self, cities, pop_size=50, pc=0.8, pm=0.05, elitism=2):
        self.cities = cities # Dict of {id: (x, y)}
        self.num_cities = len(cities)
        self.pop_size = pop_size
        self.pc = pc
        self.pm = pm
        self.elitism = elitism
        self.population = [np.random.permutation(self.num_cities) for _ in range(pop_size)]

    def tour_distance(self, tour):
        dist = 0.0
        for i in range(len(tour)):
            c1 = self.cities[tour[i]]
            c2 = self.cities[tour[(i + 1) % len(tour)]]
            dist += np.sqrt((c1[0] - c2[0])**2 + (c1[1] - c2[1])**2)
        return dist

    def order_crossover_ox(self, p1, p2):
        """Order Crossover (OX) for valid permutations"""
        if np.random.rand() > self.pc:
            return p1.copy(), p2.copy()
        n = len(p1)
        cut1, cut2 = sorted(np.random.choice(n, size=2, replace=False))
        
        def ox_child(parent_a, parent_b):
            child = np.full(n, -1, dtype=int)
            # 1. Copy segment from parent_a
            child[cut1:cut2] = parent_a[cut1:cut2]
            # 2. Fill remaining from parent_b preserving order
            b_genes = [g for g in parent_b if g not in child[cut1:cut2]]
            ptr = 0
            for i in range(n):
                if child[i] == -1:
                    child[i] = b_genes[ptr]
                    ptr += 1
            return child

        return ox_child(p1, p2), ox_child(p2, p1)

    def mutate_inversion(self, tour):
        """Inversion Mutation: reverses sub-tour to untangle loops"""
        if np.random.rand() < self.pm:
            i, j = sorted(np.random.choice(len(tour), size=2, replace=False))
            tour[i:j] = tour[i:j][::-1]
        return tour
</code></pre>
</div>

<div class="lesson-card mt-4">
  <h3><i data-lucide="code"></i> Workshop Lab 2: Minimal Autonomous ReAct Agent Loop</h3>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    Notice how the agent separates Thought from Action, invokes external tools, and loops until the final answer is verified against ground truth observations.
  </p>

<pre><code class="language-python">import re

class ReActAgent:
    def __init__(self, llm_client, tools):
        self.llm = llm_client
        self.tools = tools # Dict of {name: callable}

    def run(self, question, max_steps=6):
        scratchpad = f"Question: {question}\\n"
        
        for step in range(1, max_steps + 1):
            prompt = scratchpad + f"Step {step}:\\nThought:"
            response = self.llm.generate(prompt)
            scratchpad += f"Step {step}:\\nThought: " + response
            
            # Check for Final Answer
            if "Final Answer:" in response:
                return response.split("Final Answer:")[-1].strip()
            
            # Parse Action: ToolName[Args]
            action_match = re.search(r"Action:\s*(\w+)\[(.*?)\]", response)
            if not action_match:
                break
            
            tool_name, tool_arg = action_match.group(1), action_match.group(2)
            if tool_name in self.tools:
                observation = self.tools[tool_name](tool_arg)
            else:
                observation = f"Error: Tool {tool_name} not found."
            
            scratchpad += f"\\nObservation: {observation}\\n"

        return "Error: Maximum reasoning steps exceeded."
</code></pre>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: The A+ Exam Crucible & Trap Decoders",
      subtitle: "5 lethal exam traps in GA selection, sensor fusion, and cognitive agent architectures",
      badge: "Exam Traps",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid var(--accent-red);">
  <div class="card-icon" style="color: var(--accent-red);"><i data-lucide="shield-alert"></i></div>
  <div class="card-body">
    <h3>The 5 Lethal Exam Traps for Day 9</h3>
    <p class="lead-text">
      Examiners in NUS ISS love to test the hidden boundaries where naive heuristics fail. Memorize these 5 definitive trap decoders to guarantee an A+ in Paper 1 and Paper 2!
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card" style="border-top: 3px solid #ef4444;">
    <h5 style="color: #ef4444;"><i data-lucide="alert-triangle"></i> Trap 1: The "Negative Fitness" Roulette Crash</h5>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>The Trap:</strong> An exam question gives an optimization problem with negative fitness values (e.g. $f(x) = -10, -5, -2$) and asks you to calculate roulette wheel selection probabilities $p_i = f_i / \\sum f$.<br>
      <strong>The Decoder:</strong> Standard Roulette-Wheel selection <em>mathematically crashes</em> when fitness is negative (probabilities become negative or sum to zero!). You MUST explicitly apply a positive offset window: $f'(x_i) = f(x_i) - f_{\\min} + \\epsilon$, or switch to <strong>Rank Selection</strong>, where selection probability depends strictly on rank order ($1, 2, \\dots, N$) rather than raw values!
    </p>
  </div>

  <div class="lesson-card" style="border-top: 3px solid #f59e0b;">
    <h5 style="color: #f59e0b;"><i data-lucide="alert-triangle"></i> Trap 2: The Binary Crossover Permutation Trap</h5>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>The Trap:</strong> The student applies single-point or two-point binary crossover to a Traveling Salesperson Problem (TSP) or job-shop scheduling chromosome $[1, 3, 2, 5, 4]$.<br>
      <strong>The Decoder:</strong> Binary slicing guarantees illegal offspring with duplicate cities and missing cities. State clearly in your answer: <em>"Permutation problems require Order Crossover (OX) or Partially Mapped Crossover (PMX) to preserve a 1-to-1 bijection of genes."</em>
    </p>
  </div>

  <div class="lesson-card" style="border-top: 3px solid #38bdf8;">
    <h5 style="color: #38bdf8;"><i data-lucide="alert-triangle"></i> Trap 3: The "Valid Barcode = Authentic" Myth</h5>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>The Trap:</strong> A question asks why a smart recycling kiosk (RVM) cannot rely exclusively on a high-speed optical barcode scanner.<br>
      <strong>The Decoder:</strong> A barcode is merely an optical ink pattern. Anyone can photocopy a registered Coca-Cola barcode and paste it onto a glass beer bottle or a plastic bottle stuffed with lead sinkers. Multimodal sensor fusion (Acoustic ping + Load cell weight + Inductive metal sensing) is mandatory to verify <em>physical ground truth</em>.
    </p>
  </div>

  <div class="lesson-card" style="border-top: 3px solid #c084fc;">
    <h5 style="color: #c084fc;"><i data-lucide="alert-triangle"></i> Trap 4: The Infinite Production Rule Loop</h5>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      <strong>The Trap:</strong> In an expert system or ACT-R production rule memory, a rule matches working memory and executes, but on the next cycle, the exact same rule triggers again indefinitely.<br>
      <strong>The Decoder:</strong> Production systems must enforce <strong>Refraction</strong>: an instantiated rule cannot fire more than once on the exact same working memory tokens. The system must also apply <strong>Specificity</strong> (preferring rules with more preconditions) to prevent general rules from clobbering specialized logic.
    </p>
  </div>
</div>

<div class="lesson-card mt-4" style="border-top: 3px solid #34d399;">
  <h5 style="color: #34d399;"><i data-lucide="alert-triangle"></i> Trap 5: The "Act-Only vs ReAct" Hallucination Pitfall</h5>
  <p style="font-size: 0.85rem; color: var(--text-secondary);">
    <strong>The Trap:</strong> Why can't an LLM agent simply call APIs directly without the intermediate "Thought:" step?<br>
    <strong>The Decoder:</strong> Direct API calling ("Act-Only") suffers from high parameter failure rates: the model fails to decompose complex goals, generates invalid arguments, and cannot handle API schema mismatches. The explicit "Thought" step forces the LLM to synthesize the plan, extract arguments from previous observations, and self-correct when an API returns an error!
  </p>
</div>
`
    },
    {
      id: "quizzes",
      title: "Slide Mastery Quizzes: Day 9 Knowledge Check",
      subtitle: "10 high-yield questions on GA selection math, TSP permutations, sensor fusion, and ReAct agents",
      badge: "Knowledge Check",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="help-circle"></i></div>
  <div class="card-body">
    <h3>Day 9 Slide Mastery Quizzes</h3>
    <p class="lead-text">
      Test your mastery of Genetic Algorithms, Multimodal Sensor Fusion, and Cognitive Architectures. Complete all 10 questions to unlock the Day 10 Grand Crucible!
    </p>
  </div>
</div>
<div id="quiz-container" class="mt-4"></div>
`
    }
  ]
};
