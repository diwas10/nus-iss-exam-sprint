// Day 2 Signals & Rule Engines Interactive Content for NUS ISS Learning Hub (Upgraded Masterclass Edition)

window.DAY2_SIGNALS_RULES_CONTENT = {
  id: "day-2-signals-rules",
  title: "Day 2: Signals, Sampling & Rule-Based Reasoning",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — The Physical World & The 4 Pillars of Reasoning",
      subtitle: "Moving from physical analog phenomena to actionable digital intelligence and deductive logic",
      badge: "Physics & Logic",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="activity"></i></div>
  <div class="card-body">
    <h3>The Bridge from Physics to Logic</h3>
    <p class="lead-text">
      Welcome to Day 2! In Day 1, we tackled abstract graph search and tabular classifiers. But in real life—and across NUS ISS Intelligent Sensing Systems (ISSM)—data originates in the <strong>physical universe</strong>: heart muscles contracting, vocal cords vibrating, industrial gas compressors shaking.
    </p>
    <div class="quote-box">
      <em>"A signal is a physical function carrying information across space or time. Before an AI can reason about heart failure or machine breakdown, it must capture and clean that physical wave without distortion."</em>
      <div class="quote-author">— ISSM Module 1, Dr. Hu Zhengqing</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 1 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 1 Foundations Check</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. A* Optimality:</strong><br>
      Admissibility ($h \\le h^*$) guarantees optimal Tree Search. Consistency ($h(n) \\le c + h(n')$) guarantees optimal Graph Search on the first expansion.
    </div>
    <div>
      <strong style="color: #34d399;">2. CSP Fail-First:</strong><br>
      MRV chooses the variable with fewest remaining legal values. Forward checking prunes neighbor domains immediately.
    </div>
    <div>
      <strong style="color: #f59e0b;">3. Naive Bayes Laplace:</strong><br>
      Laplace smoothing ($\\alpha=1$) prevents zero-probability multiplication catastrophes when encountering unseen features.
    </div>
  </div>
</div>

<!-- The 4 Pillars of Reasoning Matrix -->
<div class="lesson-card mt-4">
  <h4><i data-lucide="columns"></i> The 4 Pillars of Reasoning in Modern AI (MR Day 2 & RS Day 1)</h4>
  <p style="font-size: 0.88rem; color: var(--text-secondary);">
    In Dr. JR's Machine Reasoning Day 2, human and machine problem-solving is partitioned into 4 distinct inference paradigms:
  </p>
  <div class="table-responsive mt-3" style="overflow-x: auto;">
    <table class="styled-table" style="width: 100%; font-size: 0.85rem;">
      <thead>
        <tr><th>Reasoning Type</th><th>Inference Structure</th><th>Guaranteed Truth?</th><th>Real-World Modern Application</th></tr>
      </thead>
      <tbody>
        <tr style="background: rgba(56, 189, 248, 0.08);">
          <td><strong>Deductive (Modus Ponens)</strong></td>
          <td>Rule ($A \\to B$) + Fact ($A$) $\\vdash$ Conclusion ($B$)</td>
          <td><strong style="color: #34d399;">YES (100% Sound)</strong></td>
          <td>Business Rule Engines, Tax Laws, Hospital Clinical Triage</td>
        </tr>
        <tr>
          <td><strong>Inductive</strong></td>
          <td>Instances ($x_1 \\to y_1, \\dots, x_n \\to y_n$) $\\vdash$ General Rule ($X \\to Y$)</td>
          <td><span style="color: #f59e0b;">Statistical / Probabilistic</span></td>
          <td>Supervised Machine Learning ($k$-NN, Decision Trees, Neural Networks)</td>
        </tr>
        <tr style="background: rgba(167, 139, 250, 0.08);">
          <td><strong>Abductive</strong></td>
          <td>Observed Effect ($B$) + Rule ($A \\to B$) $\\vdash$ Plausible Cause ($A$)</td>
          <td><span style="color: #f59e0b;">Plausible Hypothesis</span></td>
          <td>Medical Differential Diagnosis, Crime Investigation, Fault Isolation</td>
        </tr>
        <tr>
          <td><strong>Analogical (CBR)</strong></td>
          <td>Prior Similar Case ($C_{\\text{old}} \\approx C_{\\text{new}}$) $\\vdash$ Adapt Solution</td>
          <td><span style="color: #f59e0b;">Heuristic Adaptation</span></td>
          <td>Case-Based Reasoning (CBR), Legal Precedent Law, Architecture Design</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="radio"></i> Physical Signals & Symmetry (ISSM Module 1)</h4>
    <ul class="feature-list" style="font-size: 0.85rem;">
      <li><strong>Continuous vs Discrete:</strong> Physical phenomena are continuous voltage functions $x(t) \\in \\mathbb{R}$. Microcontrollers convert them into discrete sequences $x[n] = x(n \\cdot T_s)$.</li>
      <li><strong>Even Symmetry ($x(-t) = x(t)$):</strong> Symmetric about the vertical y-axis (e.g. Cosine wave). Composed purely of cosine harmonics.</li>
      <li><strong>Odd Symmetry ($x(-t) = -x(t)$):</strong> Anti-symmetric about the origin (e.g. Sine wave). $x(0) = 0$. Composed purely of sine harmonics.</li>
      <li><strong>Bandwidth Engineering:</strong> Human speech extends up to 20 kHz, but telephone networks band-limit speech to 3.4 kHz and sample at 8 kHz ($> 2 \\times 3.4\\text{ kHz}$) to minimize network bandwidth while maintaining intelligibility!</li>
    </ul>
  </div>

  <div class="lesson-card" style="border-left: 4px solid var(--accent-cyan);">
    <h4><i data-lucide="shield-alert"></i> The Hybrid Safety Loop (RS Day 1)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Why is Machine Learning never deployed alone in emergency triage or flight control? Because statistical models cannot guarantee compliance with hospital bed constraints or regulatory safety policies.
    </p>
    <div class="pipeline-flow mt-3">
      <div class="pipeline-step">
        <span class="step-num">1</span>
        <div><strong>Sensors</strong><br><small>ECG, SpO2, Temp</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
      <div class="pipeline-step">
        <span class="step-num">2</span>
        <div><strong>ML Predictor</strong><br><small>Risk Prob = 0.92</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
      <div class="pipeline-step highlight-step">
        <span class="step-num">3</span>
        <div><strong>Rule Engine</strong><br><small>Policy & bed constraints</small></div>
      </div>
    </div>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 2)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>Forward/Backward Chaining, Resolution Refutation, Frame Daemons (IRS Q1c), and Vibration Anomaly Critique (PRS Q2c)</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Forward vs. Backward Chaining Cycle</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Match:</strong> Identify all rules whose premises match Working Memory (WM) to form the <em>Conflict Set</em>.</li>
        <li><strong>Conflict Resolution:</strong> Pick 1 rule via (a) <em>Specificity</em> (most conditions), (b) <em>Recency</em> (newest facts), (c) <em>Refractoriness</em> (no repeat firing).</li>
        <li><strong>Act:</strong> Add consequent to WM and repeat until goal is reached or Conflict Set is empty.</li>
        <li><strong>IRS Q2d Dynamic Triggering:</strong> In <code>A-EYE-Web</code>, selecting primary symptoms fires Forward Chaining rules to dynamically filter relevant secondary symptom checkboxes!</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. Resolution by Refutation (5-Step Proof)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Negate Goal:</strong> To prove $KB \\models \\alpha$, assert $\\neg \\alpha$.</li>
        <li><strong>Eliminate Implications:</strong> Replace $A \\to B$ with $\\neg A \\lor B$.</li>
        <li><strong>Move $\\neg$ Inward &amp; Skolemize:</strong> Apply De Morgan's laws and replace $\\exists y$ with Skolem constant/function.</li>
        <li><strong>Resolve CNF Clauses:</strong> Unify complementary literals $L, \\neg L'$ until the <strong>Empty Clause ($\\square$)</strong> is derived.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. Frame Schema &amp; Procedural Daemons (IRS Q1c)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Hierarchy Links:</strong> <code>AKO</code> (Subclass $\\to$ Superclass) vs <code>IS-A</code> (Instance $\\to$ Class).</li>
        <li><strong>Qualitative Slots:</strong> Encode ergonomics properties (<code>lighting_sufficiency</code>, <code>gaze_angle</code>, <code>distance_status</code>) with <code>DEFAULT</code> and <code>RANGE</code> facets.</li>
        <li><strong><code>if-needed</code> Daemon:</strong> Lazily computes <code>face_to_screen_distance</code> from webcam iris/face pixel diameter $d_1, d_2$ using inverse proportion $D = D_{\\text{cal}} \\frac{d_{\\text{cal}}}{d_{\\text{obs}}}$ and flags violation if $D \\notin [18, 24]\\text{ in}$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. Nyquist Sampling &amp; Time-Domain Critique (PRS Q2c)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Nyquist Criterion:</strong> $f_s \\ge 2 f_{\\max}$ to avoid aliasing; apply low-pass anti-aliasing filter before ADC.</li>
        <li><strong>Why Global Summary Stats Fail on Transients (PRS Q2c):</strong> Collapsing a 5-second vibration waveform into global Mean/RMS averages out a brief 2-second abnormal burst ($t=1\\text{--}3\\text{s}$) across normal periods!</li>
        <li><strong>Solution:</strong> Z-score normalize all features and extract <strong>short-time sliding window</strong> features or 1D-CNN/LSTM Autoencoder representations.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: The Sampling Frontier & Aliasing",
      subtitle: "The Nyquist-Shannon Theorem, the wagon-wheel ghost effect, and anti-aliasing filters",
      badge: "Signal Processing",
      content: `
<div class="lesson-card">
  <h3>The Nyquist-Shannon Sampling Theorem</h3>
  <p class="lead-text">
    An analog signal contains infinitely many continuous voltage points. When an Analog-to-Digital Converter (ADC) samples the signal at discrete rate $f_s$, how fast must it sample?
  </p>
  <div class="info-alert mt-2" style="font-size: 0.95rem; border-left: 4px solid var(--accent-cyan);">
    <strong>The Law:</strong> To perfectly reconstruct an analog signal of maximum frequency $f_{max}$ without distortion or information loss:
    $$f_s \\ge 2 \\cdot f_{max}$$
    The frequency $f_N = \\frac{f_s}{2}$ is the <strong>Nyquist Frequency</strong>.
  </div>
</div>

<!-- Interactive Nyquist & Aliasing Simulator -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="sliders"></i> Interactive Nyquist-Shannon Sampling & Aliasing Studio</h3>
    <div id="nyquist-alert-box" style="padding: 6px 14px; border-radius: 6px; font-size: 0.85rem;"></div>
  </div>
  <p class="text-secondary mt-1">Adjust the True Signal Frequency $f$ and Sampling Rate $f_s$. Watch how sampling below the Nyquist rate ($f_s < 2 f_{max}$) forces high-frequency waves to disguise themselves as ghost alias frequencies!</p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.3fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; text-align: center;">
      <canvas id="nyquist-canvas" width="560" height="260" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
      <div style="display: flex; justify-content: space-around; font-size: 0.75rem; margin-top: 6px;">
        <span style="color: #38bdf8;">&mdash; True Continuous Wave</span>
        <span style="color: #f59e0b;">&bull; Discrete ADC Samples</span>
        <span style="color: #10b981;">- - Reconstructed / Alias Wave</span>
      </div>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); margin-bottom: 12px; padding: 14px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>True Signal Frequency (f):</span>
          <span id="nyquist-val-f" class="badge-tech" style="color: #38bdf8;">10 Hz</span>
        </label>
        <input type="range" id="nyquist-slider-f" min="5" max="40" step="1" value="10" style="width: 100%; margin-top: 8px;">
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Frequency of the physical phenomenon</div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); margin-bottom: 12px; padding: 14px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Sampling Frequency (fs):</span>
          <span id="nyquist-val-fs" class="badge-tech" style="color: #10b981;">25 Hz</span>
        </label>
        <input type="range" id="nyquist-slider-fs" min="8" max="100" step="1" value="25" style="width: 100%; margin-top: 8px;">
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Rate of discrete sensor sampling points</div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <strong style="font-size: 0.82rem; color: var(--text-secondary);">Wave Symmetry Toggle (ISSM Mod 1):</strong>
        <div style="display: flex; gap: 10px; margin-top: 8px;">
          <button class="btn btn-sm btn-outline active" id="nyquist-sym-odd" style="font-size: 0.78rem;">Odd Symmetry (Sine: x(-t) = -x(t))</button>
          <button class="btn btn-sm btn-outline" id="nyquist-sym-even" style="font-size: 0.78rem;">Even Symmetry (Cosine: x(-t) = x(t))</button>
        </div>
      </div>
    </div>
  </div>

  <div class="info-alert mt-4" style="font-size: 0.82rem;">
    <strong>Real-World Analogies from Lecture:</strong>
    <ul style="margin-left: 14px; margin-top: 4px;">
      <li><strong>Wagon Wheel Illusion (ISSM Mod 1 Slide 30):</strong> In movie footage, rotating wagon wheels appear to spin backwards because the camera frame rate (24 fps) is below twice the wheel spoke rotation frequency!</li>
      <li><strong>Anti-Aliasing Low-Pass Filter:</strong> Before ADC conversion, hardware engineers place an analog low-pass filter to block all frequencies above $f_s / 2$. Once aliased data enters memory, no digital software can tell true frequencies from ghost aliases!</li>
    </ul>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Peak Detection & arPLS Baseline Correction",
      subtitle: "Topological feature extraction, prominence elevation, and the asymmetric rubber-band algorithm",
      badge: "Sensor Preprocessing",
      content: `
<div class="lesson-card">
  <h3>The Problem: Sensory Baseline Drift</h3>
  <p class="lead-text">
    In your workshop assignment <code>issm-wks1-2</code>, you analyzed ECG and sensor streams. Electrodes pick up respiration motion, sweat, and thermal shifts, causing the signal to ride on a low-frequency rolling hill.
  </p>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="target"></i> Peak Detection Metrics (ISSM Module 2)</h4>
    <ul class="feature-list" style="font-size: 0.85rem;">
      <li><strong>Absolute Height Threshold:</strong> Fails completely when signals drift vertically! A true peak in a valley is missed, while noise on a crest triggers false alarms.</li>
      <li><strong>Peak Prominence:</strong> Measures vertical elevation above the highest surrounding contour valley. Robust against drift!</li>
      <li><strong>Distance Criterion:</strong> Minimum time distance between peaks, enforcing biological limits (e.g. human refractory period $< 220\\text{ bpm}$).</li>
      <li><strong>Width at Half-Prominence:</strong> Evaluates peak width at $50\\%$ elevation to distinguish sharp QRS spikes from broad motion artifacts.</li>
    </ul>
  </div>

  <div class="lesson-card" style="border-left: 4px solid #f59e0b;">
    <h4><i data-lucide="filter"></i> arPLS: The Rubber-Band Model</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Standard polynomial regression fails because high positive peaks drag the curve upward. <strong>arPLS (Asymmetric Reweighted Penalized Least Squares)</strong> solves this:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>Smoothness ($\\lambda$):</strong> Penalizes wiggles; controls rubber-band stiffness via second-order difference matrix $\\Delta^2$. High $\\lambda = 10^5..10^7$ makes it rigid.</li>
      <li><strong>Asymmetry ($p$):</strong> If signal is above baseline ($y_i > z_i$), weight $w_i \\approx 0$ (ignore the peak!). If below, weight $w_i \\approx 1$ (anchor the curve!).</li>
    </ul>
  </div>
</div>

<!-- Interactive arPLS Simulator -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="sliders"></i> Interactive arPLS Baseline Removal Studio</h3>
  <p class="text-secondary mt-1">Adjust the Smoothness $\\lambda$ and Asymmetry $p$ sliders. Watch the yellow estimated baseline hug the lower valleys without blunting the heartbeat peaks!</p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.3fr 1fr;">
    <div>
      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; margin-bottom: 10px;">
        <span style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">1. Raw Signal (White) + Fitted arPLS Baseline (Yellow):</span>
        <canvas id="arpls-raw-canvas" width="560" height="150" style="width: 100%; height: auto; border-radius: 6px;"></canvas>
      </div>

      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px;">
        <span style="font-size: 0.75rem; color: #38bdf8; font-weight: 600;">2. Cleaned Signal (Baseline Subtracted, Flat Zero-Axis with Peak Dots):</span>
        <canvas id="arpls-clean-canvas" width="560" height="150" style="width: 100%; height: auto; border-radius: 6px;"></canvas>
      </div>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); margin-bottom: 12px; padding: 14px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Smoothness Penalty (&lambda;):</span>
          <span id="arpls-val-lambda" class="badge-tech" style="color: #f59e0b;">10^5</span>
        </label>
        <input type="range" id="arpls-slider-lambda" min="2" max="8" step="0.5" value="5" style="width: 100%; margin-top: 8px;">
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Controls rubber-band stiffness. High $\\lambda$ = ultra smooth.</div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Asymmetry Parameter (p):</span>
          <span id="arpls-val-p" class="badge-tech" style="color: #38bdf8;">0.010</span>
        </label>
        <input type="range" id="arpls-slider-p" min="0.001" max="0.1" step="0.005" value="0.01" style="width: 100%; margin-top: 8px;">
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">Small $p$ ensures true peaks do not drag the baseline up!</div>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Dynamic Time Warping (DTW)",
      subtitle: "Elastic non-linear alignment, 3 boundary constraints, and cost matrix recurrence",
      badge: "Sequence Alignment",
      content: `
<div class="lesson-card">
  <h3>Why Euclidean Distance Fails on Time Series</h3>
  <p class="lead-text">
    If Person A speaks "Singapore" in 1.0 second and Person B says "Siiiiiingapore" in 2.2 seconds, Euclidean distance compares points strictly at the same time index $t$, completely mismatching the syllables.
    <strong>Dynamic Time Warping (DTW)</strong> warps the time axis non-linearly to find the optimal elastic alignment!
  </p>
</div>

<!-- Interactive DTW Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="grid"></i> Interactive DTW Accumulated Cost Matrix</h3>
    <div style="display: flex; align-items: center; gap: 10px;">
      <select id="dtw-dataset-select" class="select-styled" style="font-size: 0.82rem;">
        <option value="ecg" selected>ECG Heartbeat Alignment (wks1-3)</option>
        <option value="gdp">Singapore GDP Economic Cycles (wks1-3-GDP)</option>
      </select>
      <div id="dtw-path-info" style="font-size: 0.85rem;"></div>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Below is the live Accumulated Cost Matrix $D_{\\text{acc}}(i, j)$ computed via dynamic programming:
    $$D_{\\text{acc}}(i, j) = |x_i - y_j| + \\min\\{D_{\\text{acc}}(i-1, j), D_{\\text{acc}}(i, j-1), D_{\\text{acc}}(i-1, j-1)\\}$$
    The cells with ⭐ form the optimal warping path from start $(0, 0)$ bottom-left to end $(N-1, M-1)$ top-right!
  </p>

  <div class="table-responsive mt-3" style="overflow-x: auto;">
    <table id="dtw-matrix-table" class="styled-table" style="width: 100%; border-collapse: collapse; text-align: center;">
      <!-- Populated by visualizers.js -->
    </table>
  </div>

  <div class="grid-3-col mt-4">
    <div class="lesson-card" style="font-size: 0.85rem;">
      <strong style="color: #38bdf8;">1. Boundary Condition:</strong>
      <p style="margin-top: 4px; color: var(--text-secondary);">The warping path must start at $(0, 0)$ and end at $(N-1, M-1)$. All samples from beginning to end are matched.</p>
    </div>
    <div class="lesson-card" style="font-size: 0.85rem;">
      <strong style="color: #38bdf8;">2. Monotonicity:</strong>
      <p style="margin-top: 4px; color: var(--text-secondary);">$i_k \\ge i_{k-1}$ and $j_k \\ge j_{k-1}$. The path cannot step backward in time!</p>
    </div>
    <div class="lesson-card" style="font-size: 0.85rem;">
      <strong style="color: #38bdf8;">3. Continuity / Step Size:</strong>
      <p style="margin-top: 4px; color: var(--text-secondary);">$i_k - i_{k-1} \\le 1$ and $j_k - j_{k-1} \\le 1$. No sample points can be skipped.</p>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Hybrid Reasoning & The Hospital Triage Rule Assistant",
      subtitle: "Forward vs Backward chaining, conflict resolution strategies, and self-check safety guardrails",
      badge: "Reasoning Systems Lab",
      content: `
<div class="lesson-card hero-card">
  <h3>Hospital Emergency Triage: The Clinical Reasoning Engine</h3>
  <p class="lead-text">
    In your submitted workshop <code>RS1WS_Hospital Triage Assistant.ipynb</code>, you implemented an explainable hybrid decision system for hospital ER triage. Let's run it live right here!
  </p>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="arrow-right-circle"></i> Forward Chaining (Data-Driven)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Starts with known patient facts in Working Memory, continuously matches rule IF-conditions, and asserts new conclusions. <strong>Best for real-time monitoring and sensing.</strong>
    </p>
  </div>
  <div class="lesson-card">
    <h4><i data-lucide="arrow-left-circle"></i> Backward Chaining (Goal-Driven)</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary);">
      Starts with a hypothesis goal ("Should this patient be admitted to ICU?"), searches for rules that conclude this goal, and recursively verifies their IF-preconditions. <strong>Best for medical diagnosis.</strong>
    </p>
  </div>
</div>

<!-- Interactive Hospital Triage Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="shield-check"></i> Interactive Hospital Triage Rule Engine & Guardrails</h3>
    <div>
      <span class="text-muted" style="font-size: 0.82rem; margin-right: 8px;">Final Disposition:</span>
      <span id="triage-disposition-badge" class="badge-tech" style="font-size: 1rem; color: #38bdf8;">Awaiting Evaluation</span>
    </div>
  </div>
  <p class="text-secondary mt-1">Input patient vitals and ML severity score. Click <strong>"Execute Clinical Triage Engine"</strong> to observe fact assertion, safety guardrails, rule matching, and conflict resolution!</p>

  <div class="grid-2-col mt-4" style="grid-template-columns: 1fr 1.2fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 16px;">
      <h4 style="font-size: 0.9rem; margin-bottom: 12px; color: var(--accent-cyan);"><i data-lucide="user"></i> Patient Vitals Input:</h4>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
        <div>
          <label style="font-size: 0.8rem; color: var(--text-secondary);">Age (Years):</label>
          <input type="number" id="triage-input-age" value="76" class="select-styled" style="width: 100%;">
        </div>
        <div>
          <label style="font-size: 0.8rem; color: var(--text-secondary);">Oxygen Saturation (SpO2 %):</label>
          <input type="number" id="triage-input-spo2" value="88" class="select-styled" style="width: 100%;">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
        <div>
          <label style="font-size: 0.8rem; color: var(--text-secondary);">Heart Rate (bpm):</label>
          <input type="number" id="triage-input-hr" value="128" class="select-styled" style="width: 100%;">
        </div>
        <div>
          <label style="font-size: 0.8rem; color: var(--text-secondary);">Fever (&deg;C):</label>
          <input type="number" id="triage-input-fever" value="39.2" step="0.1" class="select-styled" style="width: 100%;">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
        <div>
          <label style="font-size: 0.8rem; color: var(--text-secondary);">ML Severity Score (0-1):</label>
          <input type="number" id="triage-input-score" value="0.92" step="0.05" class="select-styled" style="width: 100%;">
        </div>
        <div>
          <label style="font-size: 0.8rem; color: var(--text-secondary);">ICU Bed Available:</label>
          <select id="triage-input-bed" class="select-styled" style="width: 100%;">
            <option value="yes" selected>Yes (Bed Open)</option>
            <option value="no">No (ICU Full - Trigger Divert)</option>
          </select>
        </div>
      </div>

      <button class="btn btn-primary" id="triage-btn-run" style="width: 100%;">
        <i data-lucide="play"></i> Execute Clinical Triage Engine
      </button>
    </div>

    <div>
      <div style="background: rgba(0,0,0,0.4); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; min-height: 280px;">
        <h4 style="font-size: 0.85rem; margin-bottom: 8px; color: #f59e0b;"><i data-lucide="file-text"></i> Explainable Decision Audit Trail:</h4>
        <div id="triage-audit-log" style="color: var(--text-secondary); font-size: 0.82rem;">
          <em>Click "Execute Clinical Triage Engine" to see the rule matching step and audit log.</em>
        </div>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: The A+ Exam Crucible & Trap Decoders",
      subtitle: "Past paper question patterns, model answer rubrics, and formula cheat sheet",
      badge: "Exam Mastery",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #34d399;">
  <h3>Day 2 Exam Secrets from NUS ISS Faculty</h3>
  <p class="lead-text">
    Here are the specific questions examiners love to ask on Signal Processing, DTW, and Rule Engines:
  </p>
</div>

<div class="accordion-item mt-4">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 1: What causes aliasing and how do you calculate ghost frequency?</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Saying "aliasing is just background noise".</p>
    <p><strong>The A+ Correction:</strong> State clearly:
    <em>"Aliasing occurs when the sampling rate $f_s < 2 f_{max}$. High-frequency components fold across the Nyquist frequency $f_N = f_s / 2$. The perceived alias frequency is $f_{alias} = |f - k \\cdot f_s|$, where $k$ is an integer chosen such that $f_{alias} \\le f_s / 2$. This creates an artificial low-frequency ghost wave that cannot be distinguished from true low frequencies."</em></p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 2: Forward Chaining vs Backward Chaining Decision Criteria</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Saying both chaining methods are interchangeable.</p>
    <p><strong>The A+ Correction:</strong> Use the direction of inference:
    <em>"Forward chaining is data-driven (Facts $\\to$ Rules $\\to$ New Conclusions). It is ideal for monitoring, real-time sensing, and emergency triage where data is continuously pushed into the system. Backward chaining is goal-driven (Hypothesis $\\to$ Required Antecedents $\\to$ Sub-goals). It is optimal for diagnosis, debugging, and targeted query answering where only a few specific hypotheses need verification."</em></p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 3: Conflict Resolution Hierarchy</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Omitting the priority ranking when multiple rules match.</p>
    <p><strong>The A+ Correction:</strong> State the standard three conflict resolution strategies:
    1. <strong>Priority (Salience):</strong> Explicit numerical weighting assigned by domain experts.
    2. <strong>Specificity:</strong> Rules with more antecedent conditions represent more specialized knowledge and override generic rules.
    3. <strong>Recency:</strong> Rules matching the most recently asserted facts in working memory fire first.</p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 4: Peak Height vs Peak Prominence</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Relying on peak height $y_i > \\text{threshold}$ when baseline drift is present.</p>
    <p><strong>The A+ Correction:</strong> Prominence measures the vertical drop on the left and right to the lowest surrounding valley. A small peak on a high baseline has high height but low prominence; a true QRS heartbeat peak in a deep baseline valley has low height but high prominence.</p>
  </div>
</div>

<div class="lesson-card mt-4" style="background: rgba(255,255,255,0.02);">
  <h4><i data-lucide="file-text"></i> Day 2 Consolidated Formula Quick-Reference</h4>
  <div style="overflow-x: auto; font-size: 0.85rem;" class="mt-2">
    <table class="styled-table" style="width: 100%;">
      <thead><tr><th>Concept</th><th>Mathematical Formula</th><th>Key Purpose</th></tr></thead>
      <tbody>
        <tr><td>Nyquist Rate</td><td>$f_s \\ge 2 \\cdot f_{\\max}$</td><td>Minimum sampling rate to prevent aliasing distortion</td></tr>
        <tr><td>Alias Frequency</td><td>$f_{\\text{alias}} = |f - k \\cdot f_s|$</td><td>Frequency perceived by ADC when sampling under Nyquist</td></tr>
        <tr><td>Whittaker PLS Objective</td><td>$F = \\sum (y_i - z_i)^2 + \\lambda \\sum (\\Delta^2 z_i)^2$</td><td>Balances fidelity to raw signal with baseline stiffness</td></tr>
        <tr><td>DTW Recurrence</td><td>$D_{\\text{acc}}(i,j) = |x_i - y_j| + \\min\\{D_{\\text{acc}}(i-1,j), D_{\\text{acc}}(i,j-1), D_{\\text{acc}}(i-1,j-1)\\}$</td><td>Finds optimal non-linear warping path</td></tr>
        <tr><td>Modus Ponens</td><td>$A, A \\to B \\vdash B$</td><td>Deductive logical guarantee</td></tr>
      </tbody>
    </table>
  </div>
</div>
`
    },
    {
      id: "quizzes",
      title: "Level 6: Slide Mastery Quizzes",
      subtitle: "10 high-yield NUS ISS exam questions with instant scoring",
      badge: "Knowledge Check",
      content: `
<div id="quiz-container-day2">
  <!-- Rendered by QuizEngine -->
</div>
`
    }
  ]
};
