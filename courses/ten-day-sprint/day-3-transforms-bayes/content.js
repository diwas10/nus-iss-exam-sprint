// Day 3 Transforms & Bayesian Reasoning Interactive Content for NUS ISS Learning Hub

window.DAY3_TRANSFORMS_BAYES_CONTENT = {
  id: "day-3-transforms-bayes",
  title: "Day 3: Frequency Transforms, Audio/Vision Cognition & Bayesian Reasoning",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — Time-Blindness & Cognitive Perception",
      subtitle: "Why Fourier transforms fail on non-stationary signals and how human/machine perception bridges the gap",
      badge: "Perception & Theory",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="zap"></i></div>
  <div class="card-body">
    <h3>The Fourier Paradox: When Frequency Is Time-Blind</h3>
    <p class="lead-text">
      Welcome to Day 3! In Days 1 and 2, we explored search, rule engines, sampling, and time-domain signals. Today, we step into the <strong>frequency and cognitive perception domains</strong>.
    </p>
    <div class="quote-box">
      <em>"A standard Fourier transform tells you every musical note played in an entire Beethoven symphony, but it gives you zero clue in what sequence they were played. In machine sensory diagnostics and speech, timing is everything."</em>
      <div class="quote-author">— ISSM Day 2, Sensory Signal Transformation</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Days 1 & 2 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Days 1 & 2 Core Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. Nyquist Limit:</strong><br>
      $f_s \\ge 2 f_{\\max}$. If $f_s < 2 f_{\\max}$, high frequencies alias into $f_{\\text{alias}} = |f - k f_s|$.
    </div>
    <div>
      <strong style="color: #34d399;">2. arPLS Baseline:</strong><br>
      Asymmetric weighting ($w_i \\approx 0$ if above baseline, $1$ if below) cleans wandering signals without blunting peaks.
    </div>
    <div>
      <strong style="color: #f59e0b;">3. 4 Pillars of Logic:</strong><br>
      Deductive (100% sound), Inductive (generalizing from data), Abductive (inferring plausible cause), Analogical (CBR).
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="brain"></i> Human Cognition Architecture (CS Day 1 AM)</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In Dr. Fan Zhenzhen's Cognitive Systems Day 1, intelligent systems emulate 4 progressive cognitive stages:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. Perception:</strong> Interpreting sensory voltage (pixels, sound waves, motion) to recognize objects and entities.</li>
      <li><strong>2. Attention:</strong> Selectively filtering out irrelevant noise (e.g. cocktail party background chatter).</li>
      <li><strong>3. Memory:</strong> Short-term sensory buffer $\\leftrightarrow$ Working Memory $\\leftrightarrow$ Long-Term Knowledge.</li>
      <li><strong>4. Reasoning:</strong> Drawing causal deductions, planning actions, and resolving uncertainties via Bayesian inference.</li>
    </ul>
  </div>

  <div class="lesson-card" style="border-left: 4px solid #a78bfa;">
    <h4><i data-lucide="compass"></i> The Transformation Hierarchy</h4>
    <div class="pipeline-flow mt-2">
      <div class="pipeline-step">
        <span class="step-num">1</span>
        <div><strong>Time Domain</strong><br><small>Raw $x(t)$ / amplitudes</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
      <div class="pipeline-step">
        <span class="step-num">2</span>
        <div><strong>STFT / Spectrogram</strong><br><small>Windowed sliding FFT</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-right"></i></div>
      <div class="pipeline-step highlight-step">
        <span class="step-num">3</span>
        <div><strong>Wavelet MRA</strong><br><small>Multi-resolution scales</small></div>
      </div>
    </div>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 3)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>STFT/Wavelets, Bayesian Networks, Certainty Factors, and the 11-Entity Cognitive Model (IRS Q2g &amp; Q2h)</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Bayesian Network Factorization &amp; d-Separation</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Joint Distribution:</strong> $P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))$.</li>
        <li><strong>Causal Chain ($A \\to B \\to C$) &amp; Common Cause ($A \\leftarrow B \\to C$):</strong> Observing $B$ <strong>blocks</strong> the path ($A \\perp C \\mid B$).</li>
        <li><strong>V-Structure / Collider ($A \\to B \\leftarrow C$):</strong> Path is <strong>blocked</strong> when $B$ is unobserved, and <strong>unblocked (active)</strong> when $B$ or any descendant of $B$ is observed (<em>Explaining Away</em>).</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. Shortliffe MYCIN Certainty Factors (CF) &amp; Fuzzy Logic</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Rule CF Propagation:</strong> $CF(H, E) = CF_{\\text{rule}} \\times \\max(0, CF(E))$ where $CF(E_1 \\land E_2) = \\min(CF(E_1), CF(E_2))$.</li>
        <li><strong>Combining Two Rules ($CF_1, CF_2 &gt; 0$):</strong> $CF_{\\text{comb}} = CF_1 + CF_2(1 - CF_1)$.</li>
        <li><strong>Centroid Defuzzification:</strong> $z^* = \\frac{\\sum_i z_i \\, \\mu_{\\text{agg}}(z_i)}{\\sum_i \\mu_{\\text{agg}}(z_i)}$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. IRS Q2g Pupil Normalization Formula Audit</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Scale-Invariant Ratio:</strong> $\\text{RelSize} = \\frac{\\text{pixels(pupil)}}{\\text{pixels(iris)}} \\in (0, 1)$ cancels out camera distance variations.</li>
        <li><strong>Error 1 in Eq Q2.2:</strong> Missing absolute value $|\\bar{L} - \\bar{R}|$ $\\implies$ fails whenever $\\bar{R} &gt; \\bar{L}$ (negative value never $\\ge 1$).</li>
        <li><strong>Error 2 in Eq Q2.2:</strong> Divides a fraction $\\in (0,1)$ by $30$ instead of $0.30 \\times \\max(\\bar{L}, \\bar{R})$.</li>
        <li><strong>Corrected Formula:</strong> $RAPD = \\frac{|\\bar{L} - \\bar{R}|}{0.30 \\times \\max(\\bar{L}, \\bar{R})} \\ge 1$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. 11-Entity Cognitive Model Mapping (IRS Q2h)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Perception Loop (1–3):</strong> 1. <em>Environmental stimuli</em> (illuminated eyes) $\\to$ 2. <em>Perceive function</em> (smartphone camera capture) $\\to$ 3. <em>Raw data</em> (100 image frames).</li>
        <li><strong>Recognition &amp; Learning (4–7):</strong> 4. <em>Recognize function</em> (Haar cascade + pixel counting) $\\to$ 5. <em>Information</em> ($\\bar{L}, \\bar{R}$) $\\to$ 6. <em>Learn function</em> $\\to$ 7. <em>Knowledge (new/known)</em>.</li>
        <li><strong>Reasoning &amp; Action (8–11):</strong> 8. <em>Reason function</em> (Eq Q2.2 RAPD threshold check) $\\to$ 9. <em>Plan/Solution</em> $\\to$ 10. <em>Act function</em> (display screen/send to Web) $\\to$ 11. <em>Effects of action</em>.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: STFT Spectrograms & 1D Haar Wavelet Multi-Resolution",
      subtitle: "The Heisenberg-Gabor uncertainty tradeoff and exact step-by-step Haar decomposition",
      badge: "Time-Frequency",
      content: `
<div class="lesson-card">
  <h3>The Heisenberg-Gabor Uncertainty Principle</h3>
  <p class="lead-text">
    In Short-Time Fourier Transform (STFT), we slide a window of width $w(t)$ across the signal and compute the local Fourier transform. But we run into a fundamental law of physics:
    $$\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$$
    You cannot have both arbitrarily sharp time localization and arbitrarily sharp frequency resolution!
  </p>
</div>

<!-- Interactive STFT & Haar Studio -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="sliders"></i> Interactive STFT Gabor Window & Spectrogram Studio</h3>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label style="font-size: 0.85rem;">Signal Type:</label>
      <select id="stft-signal-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="chirp" selected>Frequency Chirp (4 to 36 Hz)</option>
        <option value="stationary">Stationary Dual-Tone (8 & 24 Hz)</option>
        <option value="choke">Pipe Impact Choke Impulse</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">Slide the window size. Notice how a narrow window pinpoints exact time moments but blurs frequency bins, while a wide window sharpens frequency lines but blurs when they start!</p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div>
      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; margin-bottom: 10px;">
        <span style="font-size: 0.75rem; color: #38bdf8; font-weight: 600;">1. Time-Domain Signal Waveform x(t):</span>
        <canvas id="stft-wave-canvas" width="540" height="130" style="width: 100%; height: auto; border-radius: 6px;"></canvas>
      </div>

      <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px;">
        <span style="font-size: 0.75rem; color: #f59e0b; font-weight: 600;">2. STFT Spectrogram (Time horizontal vs Frequency vertical):</span>
        <canvas id="stft-spec-canvas" width="540" height="150" style="width: 100%; height: auto; border-radius: 6px;"></canvas>
      </div>
    </div>

    <div>
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>STFT Window Width:</span>
          <span id="stft-val-window" class="badge-tech" style="color: #38bdf8;">32 Samples</span>
        </label>
        <input type="range" id="stft-slider-window" min="12" max="96" step="4" value="32" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>Narrow (Sharp Time / Blurry Freq)</span>
          <span>Wide (Sharp Freq / Blurry Time)</span>
        </div>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <strong style="font-size: 0.85rem; color: var(--accent-cyan);"><i data-lucide="git-branch"></i> The Wavelet Solution: Multi-Resolution (MRA)</strong>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 6px; line-height: 1.45;">
          Unlike fixed-window STFT, <strong>Wavelets</strong> adapt dynamically:
          <br>&bull; <em>High frequencies:</em> Analyzed with narrow time windows (capturing fast transients).
          <br>&bull; <em>Low frequencies:</em> Analyzed with wide time windows (capturing slow baseline cycles).
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Interactive Haar Wavelet Decomposition Lab -->
<div class="lesson-card mt-5">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <div>
      <span class="badge-tech" style="font-size: 0.75rem;">ISSM Day 2 Slides 14–19 & Worksheet</span>
      <h3 style="margin-top: 4px;"><i data-lucide="calculator"></i> Interactive 1D Haar Wavelet Multi-Resolution Calculator</h3>
    </div>
    <div style="display: flex; gap: 8px;">
      <select id="haar-input-select" class="select-styled" style="font-size: 0.82rem;">
        <option value="lecture" selected>Lecture Vector [9, 7, 3, 5] (Slide 16)</option>
        <option value="pipe">Pipe Choke Table [0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6]</option>
      </select>
      <button class="btn btn-sm btn-primary" id="haar-btn-decompose"><i data-lucide="play"></i> Compute Haar MRA</button>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Haar Multi-Resolution Analysis decomposes adjacent pairs $[x_1, x_2]$ into orthonormal low-pass approximation $A$ and high-pass detail $D$:
    $$A = \\frac{x_1 + x_2}{\\sqrt{2}}, \\quad D = \\frac{x_2 - x_1}{\\sqrt{2}}$$
  </p>

  <div id="haar-result-container">
    <!-- Populated by visualizers.js -->
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Vision Cognition (Marr's 3 Levels) & Audio Cognition",
      subtitle: "2D Wavelet image subbands, SGH Smart Mirror PPE verification, and Mel-scale speech perception",
      badge: "Cognitive Systems",
      content: `
<div class="lesson-card">
  <h3>Emulating Human Perception in Vision & Sound</h3>
  <p class="lead-text">
    Human brains don't process raw camera pixels or microphone voltages directly; our neural pathways extract hierarchical symbolic features.
  </p>
</div>

<!-- Tabs: Vision Cognition vs Audio Cognition -->
<div class="lesson-card mt-4">
  <div style="display: flex; gap: 10px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 14px;">
    <button class="btn btn-sm btn-outline active" id="cog-tab-vision-btn"><i data-lucide="eye"></i> Vision Cognition & 2D Wavelets</button>
    <button class="btn btn-sm btn-outline" id="cog-tab-audio-btn"><i data-lucide="volume-2"></i> Audio Cognition & Mel Scale</button>
  </div>

  <!-- Pane 1: Vision Cognition -->
  <div id="cog-pane-vision">
    <div class="grid-2-col" style="grid-template-columns: 1.1fr 1fr;">
      <div>
        <h4 style="font-size: 0.9rem; color: var(--accent-cyan); margin-bottom: 8px;">2D Wavelet Subband Decomposition (LL, LH, HL, HH)</h4>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 10px;">
          Applying 1D Haar filters along image rows and columns partitions the 2D image into 4 orthogonal frequency subbands:
        </p>
        <canvas id="wavelet-2d-canvas" width="340" height="260" style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
      </div>

      <div>
        <h4 style="font-size: 0.9rem; color: #f59e0b; margin-bottom: 8px;">David Marr's 3 Levels of Vision (CS Day 1 PM)</h4>
        <div class="timeline-box" style="font-size: 0.82rem;">
          <div style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 6px; border-left: 3px solid #38bdf8;">
            <strong style="color: #38bdf8;">1. Primal Sketch:</strong>
            <p style="margin-top: 2px; color: var(--text-secondary);">Extracts 2D zero-crossings, edges, bars, and blobs directly from raw pixels.</p>
          </div>
          <div style="margin-bottom: 12px; padding: 10px; background: rgba(255,255,255,0.02); border-radius: 6px; border-left: 3px solid #f59e0b;">
            <strong style="color: #f59e0b;">2. 2.5D Sketch:</strong>
            <p style="margin-top: 2px; color: var(--text-secondary);">Derives viewer-centered surface depth, orientation, and texture gradients (depth cues from observer's eye perspective).</p>
          </div>
          <div style="padding: 10px; background: rgba(255,255,255,0.02); border-radius: 6px; border-left: 3px solid #34d399;">
            <strong style="color: #34d399;">3. 3D Model:</strong>
            <p style="margin-top: 2px; color: var(--text-secondary);">Constructs an object-centered, viewer-invariant structural representation for semantic visual reasoning (e.g. SGH Smart Mirror detecting proper PPE gowning!).</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Pane 2: Audio Cognition -->
  <div id="cog-pane-audio" style="display: none;">
    <div class="grid-2-col">
      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <h4 style="font-size: 0.9rem; color: #38bdf8;"><i data-lucide="music"></i> The Mel-Scale Filterbank</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
          Human hearing distinguishes fine frequency differences below 1 kHz, but compresses higher frequencies logarithmically:
          $$m = 2595 \\log_{10}\\left(1 + \\frac{f}{700}\\right)$$
          Modern models (Whisper, Wav2Vec2) process 80-channel Mel-filterbanks rather than raw Hertz to mimic human cochlear frequency distribution.
        </p>
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <h4 style="font-size: 0.9rem; color: #34d399;"><i data-lucide="mic"></i> SpeechBrain Pretrained Models (CS Day 2 Lab)</h4>
        <ul class="feature-list" style="font-size: 0.82rem;">
          <li><strong>Cocktail Party Separation (SepFormer):</strong> Isolates multiple overlapping speakers in a noisy reverberant conference room.</li>
          <li><strong>Speaker Verification (ECAPA-TDNN):</strong> Computes a 192-dimensional speaker embedding vector for biometric authentication.</li>
          <li><strong>Room Acoustics ($RT_{60}$):</strong> Measures reverberation decay time using <code>pyroomacoustics</code> to model acoustic reflection.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Bayesian Belief Networks & Latent EM Clustering",
      subtitle: "Conditional probability tables, joint factorization, and the 18-dice expectation-maximization algorithm",
      badge: "Probabilistic Reasoning",
      content: `
<div class="lesson-card">
  <h3>Reasoning Under Uncertainty: Bayesian Belief Networks</h3>
  <p class="lead-text">
    In complex environments, sensors are noisy and symptoms can have multiple causes. A <strong>Bayesian Belief Network (BBN)</strong> is a Directed Acyclic Graph (DAG) that models joint probability distributions compactly:
    $$P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))$$
  </p>
</div>

<!-- Interactive Burglary / Alarm Bayesian Network -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <div>
      <span class="badge-tech" style="font-size: 0.75rem;">MR Day 2 Slides 71–84</span>
      <h3 style="margin-top: 4px;"><i data-lucide="share-2"></i> Interactive Bayesian Belief Network (Burglary / Alarm DAG)</h3>
    </div>
    <button class="btn btn-sm btn-primary" id="bayes-btn-compute"><i data-lucide="calculator"></i> Update Posterior</button>
  </div>
  <p class="text-secondary mt-1">
    Toggle observed evidence below. Watch how the exact posterior probability $P(\\text{Burglary} \\mid \\text{Evidence})$ updates dynamically using Bayes' Theorem!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1fr 1.2fr;">
    <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
      <h4 style="font-size: 0.85rem; color: var(--accent-cyan); margin-bottom: 10px;">Observed Evidence Checkboxes:</h4>
      
      <label style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px; margin-bottom: 10px; cursor: pointer;">
        <input type="checkbox" id="bayes-chk-john" checked>
        <span><strong>JohnCalls = True:</strong> John claims he heard the alarm.</span>
      </label>

      <label style="font-size: 0.85rem; display: flex; align-items: center; gap: 8px; margin-bottom: 14px; cursor: pointer;">
        <input type="checkbox" id="bayes-chk-mary" checked>
        <span><strong>MaryCalls = True:</strong> Mary claims she heard the alarm.</span>
      </label>

      <div class="info-alert" style="font-size: 0.78rem;">
        <strong>D-Separation Rule (Collider / Explaining Away):</strong>
        <br>In a v-structure $B \\to A \\leftarrow E$, Burglary ($B$) and Earthquake ($E$) are independent priors ($P(B)=0.001$). But if Alarm ($A$) sounds, confirming an Earthquake drastically lowers the chance of Burglary!
      </div>
    </div>

    <div id="bayes-result-box">
      <!-- Populated by visualizers.js -->
    </div>
  </div>
</div>

<!-- Interactive EM Algorithm 18-Dice Stepper -->
<div class="lesson-card mt-5">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <div>
      <span class="badge-tech" style="font-size: 0.75rem;">ISSM Day 2 Slides 41–47</span>
      <h3 style="margin-top: 4px;"><i data-lucide="repeat"></i> Interactive Expectation-Maximization (EM) 18-Dice Stepper</h3>
    </div>
    <div style="display: flex; gap: 8px;">
      <button class="btn btn-sm btn-primary" id="em-btn-step"><i data-lucide="step-forward"></i> Step EM Cycle</button>
      <button class="btn btn-sm btn-outline" id="em-btn-reset"><i data-lucide="rotate-ccw"></i> Reset</button>
    </div>
  </div>
  <p class="text-secondary mt-1">
    How do you cluster data when the cluster labels are hidden (latent)? The EM algorithm alternates between the **E-Step** (computing soft responsibility weights) and the **M-Step** (re-estimating parameters) until convergence.
  </p>

  <div id="em-result-box" style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 14px; margin-top: 10px;">
    <!-- Populated by visualizers.js -->
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: NUS ISS Workshop Lab Walkthrough",
      subtitle: "Haar pipe choke detector, Bayesian ASD screening & SpeechBrain audio separation",
      badge: "Hands-on Python",
      content: `
<div class="lesson-card hero-card">
  <h3>Direct Workshop Solution Code</h3>
  <p class="lead-text">
    Walk through your actual submitted workshop solutions: <code>ISSM_Day2_wk_signal.ipynb</code>, <code>WS2.2.3- Bayes ASD.ipynb</code>, and <code>A0355263A Diwash Baral visualization_of_word_embeddings.ipynb</code>.
  </p>
</div>

<div class="code-tabs-container mt-4">
  <div class="code-tabs-header">
    <button class="code-tab-btn active" data-tab="tab-haar">1. Haar Pipe Choke (Python)</button>
    <button class="code-tab-btn" data-tab="tab-bayes">2. Bayesian ASD Classifier</button>
    <button class="code-tab-btn" data-tab="tab-speech">3. SpeechBrain SepFormer</button>
  </div>

  <div class="code-tab-content active" id="tab-haar">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span class="text-muted" style="font-size: 0.8rem;">Reference: ISSM Day 2 Pipe Inspection Worksheet</span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-haar')"><i data-lucide="copy"></i> Copy Python Code</button>
    </div>
    <pre class="code-block" id="code-haar"><code>import numpy as np
import pywt

# Flow rate readings from drainage pipe crawl robot (ISSM Day 2 Table 1)
flow_data = np.array([0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6])

# 1-Level Discrete Wavelet Transform using Haar filter
cA, cD = pywt.dwt(flow_data, 'haar')

print("Approximation Coefficients (cA):", np.round(cA, 4))
print("Detail Coefficients (cD):", np.round(cD, 4))

# Identify choke location: largest negative detail spike
choke_index = np.argmin(cD)
print(f"🚨 Pipeline Choke Alert at Index {choke_index} with Detail Value {cD[choke_index]:.4f}")
# Expected output: cD[1] = -0.2828 (abrupt drop from 0.8 to 0.4 m/s)
</code></pre>
  </div>

  <div class="code-tab-content" id="tab-bayes">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span class="text-muted" style="font-size: 0.8rem;">Reference: MR 2 Workshop 2.3.3 (Autism Screening Bayesian Network)</span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-bayes')"><i data-lucide="copy"></i> Copy Python Code</button>
    </div>
    <pre class="code-block" id="code-bayes"><code>import pandas as pd
from sklearn.naive_bayes import CategoricalNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score

# Load ASD Screening Dataset
df = pd.read_csv('Autism-Child-Data.csv')
X = df[['A1_Score', 'A2_Score', 'A3_Score', 'A4_Score', 'A5_Score']]
y = df['Class/ASD']

# Categorical Naive Bayes with Laplace Smoothing (alpha=1.0)
clf = CategoricalNB(alpha=1.0)
clf.fit(X, y)

# Predict risk probability for incoming pediatric patient
sample_patient = [[1, 1, 0, 1, 1]]
prob = clf.predict_proba(sample_patient)[0]
print(f"ASD Risk Probability: {prob[1]*100:.2f}%")
</code></pre>
  </div>

  <div class="code-tab-content" id="tab-speech">
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <span class="text-muted" style="font-size: 0.8rem;">Reference: CS Day 2 SpeechBrain Pretrained Models</span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-speech')"><i data-lucide="copy"></i> Copy Python Code</button>
    </div>
    <pre class="code-block" id="code-speech"><code>import torchaudio
from speechbrain.inference.separation import SepformerSeparation as separator

# Load Pre-trained SepFormer model from HuggingFace
model = separator.from_hparams(source="speechbrain/sepformer-wsj02mix", savedir="pretrained_sepformer")

# Separate two overlapping speakers in a single audio channel
est_sources = model.separate_file(path='mixed_audio.wav')

# Save isolated individual speaker tracks
torchaudio.save("speaker1_isolated.wav", est_sources[:, :, 0].detach().cpu(), 8000)
torchaudio.save("speaker2_isolated.wav", est_sources[:, :, 1].detach().cpu(), 8000)
print("Speech separation complete!")
</code></pre>
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
  <h3>Day 3 Exam Secrets from NUS ISS Faculty</h3>
  <p class="lead-text">
    Here are the core traps examiners test on Transforms, Wavelets, and Bayesian Networks:
  </p>
</div>

<div class="accordion-item mt-4">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 1: Haar Decomposition Manual Arithmetic Formula</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Forgetting the $\\sqrt{2}$ denominator in orthonormal Haar wavelets.</p>
    <p><strong>The A+ Correction:</strong> Always write the formal formula:
    $$A_k = \\frac{x_{2k-1} + x_{2k}}{\\sqrt{2}}, \\quad D_k = \\frac{x_{2k} - x_{2k-1}}{\\sqrt{2}}$$
    If you divide by 2 rather than $\\sqrt{2}$, energy is NOT conserved ($\\|x\\|^2 \\ne \\|A\\|^2 + \\|D\\|^2$) and marks will be deducted!</p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 2: STFT vs Wavelet Resolution Trade-Off</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Stating that STFT and Wavelets have identical resolution properties.</p>
    <p><strong>The A+ Correction:</strong>
    <em>"STFT has fixed resolution across all frequencies because its window size is constant. Wavelets provide multi-resolution analysis (MRA): high temporal resolution at high frequencies (narrow wavelets catch fast spikes), and high frequency resolution at low frequencies (wide wavelets catch slow oscillations)."</em></p>
  </div>
</div>

<div class="accordion-item mt-3">
  <div class="accordion-title"><i data-lucide="alert-triangle" style="color: #f59e0b;"></i> Trap 3: Explaining Away (Collider V-Structure)</div>
  <div class="accordion-body">
    <p><strong>The Trap:</strong> Assuming two independent causes remain independent after observing their common effect.</p>
    <p><strong>The A+ Correction:</strong>
    <em>"In a Bayesian Network v-structure $X \\to Z \\leftarrow Y$, $X$ and $Y$ are marginally independent. However, conditioning on their common child $Z$ induces conditional dependence between $X$ and $Y$. Observing that $X$ occurred explains away the evidence $Z$, drastically decreasing the posterior probability of $Y$."</em></p>
  </div>
</div>

<div class="lesson-card mt-4" style="background: rgba(255,255,255,0.02);">
  <h4><i data-lucide="file-text"></i> Day 3 Consolidated Formula Quick-Reference</h4>
  <div style="overflow-x: auto; font-size: 0.85rem;" class="mt-2">
    <table class="styled-table" style="width: 100%;">
      <thead><tr><th>Concept</th><th>Mathematical Formula</th><th>Key Purpose</th></tr></thead>
      <tbody>
        <tr><td>Gabor Uncertainty</td><td>$\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$</td><td>Fundamental lower bound on time-frequency resolution</td></tr>
        <tr><td>Haar Approximation</td><td>$A = (x_1 + x_2) / \\sqrt{2}$</td><td>Low-pass scaling filter preserving energy</td></tr>
        <tr><td>Haar Detail</td><td>$D = (x_2 - x_1) / \\sqrt{2}$</td><td>High-pass difference filter capturing step edges / chokes</td></tr>
        <tr><td>Mel Scale</td><td>$m = 2595 \\log_{10}(1 + f/700)$</td><td>Mimics logarithmic human cochlear pitch perception</td></tr>
        <tr><td>Bayes Factorization</td><td>$P(X_1,\\dots,X_n) = \\prod P(X_i \\mid \\text{Parents}(X_i))$</td><td>DAG factorization of joint probability distribution</td></tr>
        <tr><td>EM Responsibility</td><td>$\\gamma_{ik} = \\frac{\\pi_k P(x_i \\mid \\theta_k)}{\\sum_j \\pi_j P(x_i \\mid \\theta_j)}$</td><td>E-step soft probability weight for latent class $k$</td></tr>
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
<div id="quiz-container-day3">
  <!-- Rendered by QuizEngine -->
</div>
`
    }
  ]
};
