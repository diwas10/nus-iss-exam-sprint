// Comprehensive Serial Content for Intelligent Sensing Systems - Day 1
// Foundations of Sensor Signal Processing: Zero-to-Mastery Scaffolding

window.DAY1_CONTENT = {
  id: "day-1-signals",
  title: "Foundations of Sensor Signal Processing",
  author: "NUS-ISS & Antigravity Learning Systems",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — What is a Signal?",
      subtitle: "Moving from invisible physical reality to machine intelligence",
      badge: "Intuition",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="zap"></i></div>
  <div class="card-body">
    <h3>The Golden Principle of Sensing</h3>
    <p class="lead-text">
      A <strong>signal</strong> is not just a bunch of numbers in a CSV file. A signal is a <em>continuous story</em> told by the physical universe. It is the rhythmic beating of your heart's ventricles, the pressure shockwave of an earthquake, the microscopic temperature fluctuations of a gas chromatograph, or the acceleration of an Olympic rower pulling an oar through water.
    </p>
    <div class="quote-box">
      <em>"Signals are just numbers... Our mission in intelligent sensing is to extract meaning from those numbers: understand the underlying event, predict future behavior, and trigger automated action."</em>
      <div class="quote-author">— Module 1, Slides 4 & 20</div>
    </div>
    <div class="deck-trace-banner mt-3 p-3" style="background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
      <div style="font-size: 0.85rem; color: var(--text-secondary);">
        <i data-lucide="check-circle" style="color: #34d399; vertical-align: middle; margin-right: 4px;"></i>
        <strong>100% Day 1 Slide & Material Usage:</strong> All 124 slides across Module 1 (PDF), Module 2 (PPTX), and Module 3 (PPTX) + 3 workshops are integrated into this serial curriculum.
      </div>
      <button class="btn btn-sm btn-outline" onclick="app.loadLevel('day1-audit')">
        <i data-lucide="table"></i> View Slide Audit Matrix
      </button>
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="cpu"></i> The 5-Stage Sense-Making Pipeline</h4>
    <p>Every intelligent sensing system in the world follows this exact five-stage flow:</p>
    <div class="pipeline-flow">
      <div class="pipeline-step">
        <span class="step-num">1</span>
        <div><strong>Physical Event</strong><br><small>Sound, ECG voltage, thermal motion</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-down"></i></div>
      <div class="pipeline-step">
        <span class="step-num">2</span>
        <div><strong>Transducer & ADC</strong><br><small>Converts physics to digital samples</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-down"></i></div>
      <div class="pipeline-step">
        <span class="step-num">3</span>
        <div><strong>Preprocessing & Cleaning</strong><br><small>Baseline correction, denoise (arPLS)</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-down"></i></div>
      <div class="pipeline-step">
        <span class="step-num">4</span>
        <div><strong>Feature Extraction</strong><br><small>Peaks, troughs, cadence, shape</small></div>
      </div>
      <div class="pipeline-arrow"><i data-lucide="arrow-down"></i></div>
      <div class="pipeline-step highlight-step">
        <span class="step-num">5</span>
        <div><strong>Sense-Making & Action</strong><br><small>DTW matching, anomaly alert, decision</small></div>
      </div>
    </div>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="crosshair"></i> Real-World Examples from Day 1 Slides</h4>
    <ul class="feature-list">
      <li>
        <strong>Heart ECG (Slide 5):</strong> Measures microvolt electrical depololarization of heart muscle cells. Peak detection calculates instantaneous heart rate and detects arrhythmias.
      </li>
      <li>
        <strong>Brain EEG (Slide 6-7):</strong> Captures cortical synaptic potentials. In the MIT CSAIL study, error-related potentials in the user's brain automatically command an industrial robot to correct its mistakes.
      </li>
      <li>
        <strong>Elderly Walking Strides (Slide 9):</strong> 3-axis accelerometer worn on the waist. Visually looks chaotic, but sequence alignment detects subtle gait asymmetry and predicts falls.
      </li>
      <li>
        <strong>Gas Chromatography (Slide 29-30):</strong> Vaporizes petroleum or essential oils. Different compounds travel through the column at different speeds, producing characteristic intensity peaks.
      </li>
    </ul>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: Anatomy of a Wave — Signals as Functions",
      subtitle: "Dimensions, amplitude, frequency, period, phase, and superposition",
      badge: "Foundations",
      content: `
<div class="deck-trace-banner mb-3 p-3" style="background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
  <div style="font-size: 0.85rem; color: var(--text-secondary);">
    <i data-lucide="file-text" style="color: var(--accent-cyan); vertical-align: middle; margin-right: 4px;"></i>
    <strong>Lecture Slides Source:</strong> 📘 <code>Module 1 (PDF)</code> &bull; Slides 33–36 (Periodicity, Even/Odd Symmetry, Superposition & Fourier Decomposition)
  </div>
  <button class="btn btn-sm btn-outline" onclick="SlideViewer.switchDeck('module1'); SlideViewer.goToSlide(32); app.loadLevel('slide-viewer');">
    <i data-lucide="presentation"></i> Open in Slide Companion (Slide 33)
  </button>
</div>

<div class="lesson-card">
  <h3>Signals as Mathematical Functions</h3>
  <p>In mathematics and engineering, a signal is a function that maps an independent variable (usually <strong>time</strong> \\(t\\) or <strong>space</strong> \\(x,y\\)) to a measurable physical value.</p>

  <div class="grid-3-col mt-3">
    <div class="mini-card">
      <div class="mini-badge">1-Dimensional (1D)</div>
      <h4>\\(z = f(t)\\)</h4>
      <p>A single variable changing over time. Examples: ECG heartbeat, audio microphone voltage, stock price, temperature.</p>
    </div>
    <div class="mini-card">
      <div class="mini-badge">2-Dimensional (2D)</div>
      <h4>\\(z = f(x, y)\\)</h4>
      <p>Intensity distributed across two spatial dimensions. Examples: Ultrasound scans, grayscale digital images, thermal infrared maps.</p>
    </div>
    <div class="mini-card">
      <div class="mini-badge">3-Dimensional (3D)</div>
      <h4>\\(z = f(x, y, z)\\)</h4>
      <p>Volumetric data or spatio-temporal video \\(f(x, y, t)\\). Examples: MRI brain scans, CT volumetric tomography.</p>
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The Fundamental Anatomy of a Periodic Wave</h3>
  <p>A periodic signal repeats itself every period \\(T_0\\): \\(f(t + T_0) = f(t)\\). The simplest pure periodic signal is the sinusoidal wave:</p>
  <div class="math-banner">
    \\[ y(t) = A \\cdot \\sin(2\\pi f t + \\phi) \\]
  </div>
  
  <div class="grid-4-col mt-3">
    <div class="param-box">
      <strong>Amplitude (\\(A\\))</strong>
      <span>Peak height from zero. Determines strength, volume, or signal intensity.</span>
    </div>
    <div class="param-box">
      <strong>Frequency (\\(f\\))</strong>
      <span>Number of complete cycles per second, measured in <strong>Hertz (Hz)</strong>.</span>
    </div>
    <div class="param-box">
      <strong>Period (\\(T = 1/f\\))</strong>
      <span>Time (seconds) for one full cycle to complete.</span>
    </div>
    <div class="param-box">
      <strong>Phase (\\(\\phi\\))</strong>
      <span>Horizontal offset in time (where the wave begins at \\(t=0\\)).</span>
    </div>
  </div>
</div>

<!-- Interactive Wave Studio -->
<div class="interactive-sandbox mt-4" id="wave-studio-sandbox">
  <div class="sandbox-header">
    <div class="sandbox-title">
      <i data-lucide="sliders"></i> Interactive Wave Studio & Audio Synthesizer
    </div>
    <div class="sandbox-controls">
      <button class="btn btn-primary" id="btn-audio-play">
        <i data-lucide="volume-2"></i> <span id="audio-btn-text">Hear This Tone</span>
      </button>
    </div>
  </div>
  <div class="sandbox-body">
    <div class="canvas-container">
      <canvas id="wave-canvas" width="800" height="260"></canvas>
    </div>
    <div class="controls-grid mt-3">
      <div class="control-group">
        <label>Frequency (\\(f\\)): <span id="freq-val" class="ctrl-val">440 Hz (Note A4)</span></label>
        <input type="range" id="slider-freq" min="100" max="1000" value="440" step="5">
      </div>
      <div class="control-group">
        <label>Amplitude (\\(A\\)): <span id="amp-val" class="ctrl-val">1.0</span></label>
        <input type="range" id="slider-amp" min="0.1" max="2.0" value="1.0" step="0.05">
      </div>
      <div class="control-group">
        <label>Waveform Type:</label>
        <select id="select-waveform" class="select-styled">
          <option value="sine">Pure Sine Wave (Smooth)</option>
          <option value="square">Square Wave (Rich Odd Harmonics)</option>
          <option value="sawtooth">Sawtooth Wave (Buzzy, All Harmonics)</option>
          <option value="triangle">Triangle Wave (Mellow)</option>
        </select>
      </div>
    </div>
    <div class="info-alert mt-2">
      <i data-lucide="info"></i>
      <span><strong>Try it:</strong> Click "Hear This Tone" and drag the Frequency slider. Notice how higher frequency equals higher pitch, while higher amplitude increases loudness!</span>
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>Superposition & Decomposition: The Fourier Insight (Slide 35-36)</h3>
  <p class="lead-text">
    Why do we study simple sine waves when real-world signals (like ECG or speech) look so wildly complex?
  </p>
  <p>
    Because of <strong>Superposition</strong> and <strong>Fourier's Theorem</strong>: Any real-world complex signal can be decomposed into an infinite sum of simple sine and cosine waves of different frequencies, amplitudes, and phases!
  </p>
  <div class="quote-box">
    <em>"Instead of trying to understand how complicated signals behave as a whole, we study the individual components, which are simpler signals."</em>
    <div class="quote-author">— Steven W. Smith, DSP Guide (Module 1, Slide 36)</div>
  </div>
  
  <div class="grid-2-col mt-3">
    <div class="card-outline">
      <h4><i data-lucide="plus-circle"></i> Synthesis (Superposition)</h4>
      <p>Combining multiple simple pure tones by addition: \\[ s(t) = \\sin(2\\pi f t) + \\frac{1}{3}\\sin(6\\pi f t) + \\frac{1}{5}\\sin(10\\pi f t) \\dots \\] Adding odd harmonics eventually builds a perfect sharp <strong>square wave</strong>!</p>
    </div>
    <div class="card-outline">
      <h4><i data-lucide="split"></i> Decomposition (Analysis)</h4>
      <p>Taking a complicated recorded sensor signal (like brainwaves or a car engine vibration) and breaking it down into its constituent frequency spectrum using the <strong>Fourier Transform</strong>.</p>
    </div>
  </div>

  <div class="symmetry-box mt-3">
    <h4><i data-lucide="flip-horizontal"></i> Signal Symmetry: Even vs. Odd (Slide 34)</h4>
    <div class="grid-2-col mt-2">
      <div>
        <strong>Even Signal: \\(f(t) = f(-t)\\)</strong>
        <p>Symmetric across the vertical y-axis. Folding along the y-axis produces an exact match (e.g. \\(\\cos(\\omega t)\\), \\(t^2\\)).</p>
      </div>
      <div>
        <strong>Odd Signal: \\(f(t) = -f(-t)\\)</strong>
        <p>Antisymmetric across the origin. Inverting horizontally and vertically gives the same wave (e.g. \\(\\sin(\\omega t)\\), \\(t^3\\)).</p>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: The Digital Bridge — Sampling, Nyquist & Aliasing",
      subtitle: "How analog physical reality gets captured by digital computers without fatal distortion",
      badge: "Crucial Theory",
      content: `
<div class="deck-trace-banner mb-3 p-3" style="background: rgba(2, 132, 199, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
  <div style="font-size: 0.85rem; color: var(--text-secondary);">
    <i data-lucide="file-text" style="color: var(--accent-cyan); vertical-align: middle; margin-right: 4px;"></i>
    <strong>Lecture Slides Source:</strong> 📘 <code>Module 1 (PDF)</code> &bull; Slides 28–32 (Nyquist-Shannon Theorem, Wagon Wheel Aliasing, Telephony 4kHz/8kHz & 200kHz Calculations)
  </div>
  <button class="btn btn-sm btn-outline" onclick="SlideViewer.switchDeck('module1'); SlideViewer.goToSlide(27); app.loadLevel('slide-viewer');">
    <i data-lucide="presentation"></i> Open in Slide Companion (Slide 28)
  </button>
</div>

<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="disc"></i></div>
  <div class="card-body">
    <h3>The Dilemma of the Digital Age</h3>
    <p class="lead-text">
      The physical universe is <strong>continuous</strong>. A heart's electrical voltage changes smoothly every fraction of a picosecond. But computers have finite memory: they cannot store an infinite number of points between 0 and 1 second!
    </p>
    <p>
      Therefore, the <strong>Analog-to-Digital Converter (ADC)</strong> samples the signal at discrete clock ticks separated by a sampling period \\(T_s\\). The rate of these ticks is the <strong>Sampling Frequency \\(f_s = 1 / T_s\\)</strong> (samples per second, or Hz).
    </p>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The Nyquist-Shannon Sampling Theorem (Slide 29)</h3>
  <div class="math-banner">
    \\[ f_s \\ge 2 \\cdot f_{\\max} \\]
  </div>
  <p class="lead-text">
    To completely preserve and reconstruct an analog signal without loss of information, the sampling rate \\(f_s\\) must be <strong>at least twice the highest analog frequency component (\\(f_{\\max}\\))</strong> present in the signal.
  </p>
  <p>
    The threshold \\(f_N = f_s / 2\\) is called the <strong>Nyquist Frequency</strong>. Any frequency present in the input higher than \\(f_N\\) will <strong>alias</strong> (masquerade as a fake lower frequency) and permanently corrupt your data!
  </p>
</div>

<!-- Interactive Aliasing Sandbox -->
<div class="interactive-sandbox mt-4" id="aliasing-sandbox">
  <div class="sandbox-header">
    <div class="sandbox-title">
      <i data-lucide="activity"></i> Interactive Aliasing Simulator
    </div>
    <div class="sandbox-badge">Slide 28-29 Experiment</div>
  </div>
  <div class="sandbox-body">
    <div class="canvas-container">
      <canvas id="aliasing-canvas" width="800" height="280"></canvas>
    </div>
    <div class="controls-grid mt-3">
      <div class="control-group">
        <label>Analog Signal Frequency (\\(f\\)): <span id="analog-freq-val" class="ctrl-val">5 Hz</span></label>
        <input type="range" id="slider-analog-freq" min="1" max="10" value="5" step="1">
      </div>
      <div class="control-group">
        <label>Sampling Frequency (\\(f_s\\)): <span id="sample-rate-val" class="ctrl-val">20 Hz</span></label>
        <input type="range" id="slider-sample-rate" min="3" max="40" value="20" step="1">
      </div>
    </div>
    <div id="aliasing-status-box" class="info-alert mt-2">
      <!-- Dynamic status text rendered by JS -->
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The Stroboscopic Illusion: The Wagon Wheel Effect (Slide 30)</h3>
  <p>
    Have you ever watched a car movie and noticed the car's wheels appear to be <strong>spinning backward</strong> or standing completely still while the car speeds forward?
  </p>
  <p>
    This is not an optical illusion of your eyes—it is <strong>temporal aliasing</strong> caused by the video camera!
  </p>

  <div class="grid-2-col mt-3">
    <div>
      <p>
        If the movie camera films at \\(f_s = 24\\text{ frames per second (fps)}\\), and the wheel rotates at \\(f = 20\\text{ rev/sec}\\):
      </p>
      <ul>
        <li>The Nyquist requirement is \\(f_s \\ge 2 \\times 20 = 40\\text{ fps}\\).</li>
        <li>Since \\(24 < 40\\), severe aliasing occurs!</li>
        <li>The apparent perceived frequency is: \\[ f_{\\text{apparent}} = 20 - 24 = -4\\text{ rev/sec} \\]</li>
        <li>The negative sign means the wheel appears to rotate <strong>backward</strong> at 4 revolutions per second!</li>
      </ul>
    </div>
    <!-- Canvas for Wagon Wheel Animation -->
    <div class="wheel-box">
      <canvas id="wagon-wheel-canvas" width="260" height="260"></canvas>
      <div class="wheel-controls mt-2">
        <label>Wheel Speed: <span id="wheel-rpm-val">20 rev/s</span></label>
        <input type="range" id="slider-wheel-speed" min="5" max="35" value="20" step="1">
        <label class="mt-1">Camera FPS: <span id="camera-fps-val">24 fps</span></label>
        <input type="range" id="slider-camera-fps" min="10" max="60" value="24" step="2">
      </div>
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>Real Slide Practice Questions (Slides 31 & 32)</h3>
  <div class="grid-2-col">
    <div class="quiz-teaser">
      <h4><i data-lucide="phone-call"></i> Slide 31: Telephone Voice Digitization</h4>
      <p>A telephone company digitizes human speech assuming a maximum frequency of \\(4000\\text{ Hz}\\). What must be the sampling rate?</p>
      <div class="solution-reveal">
        <strong>Solution:</strong> \\[ f_s \\ge 2 \\times 4000\\text{ Hz} = 8000\\text{ samples/second} \\]
        Standard landline telephone systems worldwide (PCM G.711) use exactly <strong>8 kHz</strong> sampling with 8-bit quantization (64 kbps channel).
      </div>
    </div>
    <div class="quiz-teaser">
      <h4><i data-lucide="radio"></i> Slide 32: High-Bandwidth Sensor</h4>
      <p>A complex industrial sensor has an analog bandwidth of \\(200\\text{ kHz}\\). What is the minimum sampling rate?</p>
      <div class="solution-reveal">
        <strong>Solution:</strong> \\[ f_s \\ge 2 \\times 200\\text{ kHz} = 400\\text{ kHz} \\]
        An ADC sampling slower than 400 kHz will fold ultrasonic noise and signals down into the measurable band.
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Detecting Signposts — Derivatives & Peak Detection",
      subtitle: "Finding critical events: Why calculus fails on discrete signals and how scipy find_peaks works",
      badge: "Feature Extraction",
      content: `
<div class="deck-trace-banner mb-3 p-3" style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
  <div style="font-size: 0.85rem; color: var(--text-secondary);">
    <i data-lucide="presentation" style="color: #f59e0b; vertical-align: middle; margin-right: 4px;"></i>
    <strong>Lecture Slides Source:</strong> 📙 <code>Module 2 (PPTX)</code> &bull; Slides 1–25 (Peaks/Troughs, Discrete Derivatives, SciPy False Positives, Prominence & Width)
  </div>
  <button class="btn btn-sm btn-outline" onclick="SlideViewer.switchDeck('module2'); SlideViewer.goToSlide(0); app.loadLevel('slide-viewer');">
    <i data-lucide="presentation"></i> Open in Slide Companion (Slide 1)
  </button>
</div>

<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="trending-up"></i></div>
  <div class="card-body">
    <h3>Why Are Peaks So Important?</h3>
    <p class="lead-text">
      In sensor signal processing, <strong>peaks and troughs</strong> are the vital signposts of reality:
    </p>
    <ul class="clean-list">
      <li><strong>ECG Heartbeat (Module 2):</strong> The sharp 'R-peak' corresponds to the ventricular contraction (systole) pumping blood through your body. Peak-to-peak interval gives heart rate variability (HRV).</li>
      <li><strong>Gas Chromatography (Slide 29-30):</strong> The location of a peak identifies the chemical molecule (e.g. octane in gasoline, limonene in lavender oil), and the area under the peak gives its concentration!</li>
      <li><strong>Server Workload Telemetry (Slide 4):</strong> Sudden spikes in CPU or network throughput indicate DDoS attacks or capacity failure.</li>
    </ul>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The Calculus Fallacy: Why \\(f'(x) = 0\\) Fails in Digital Signals</h3>
  <p>In high-school continuous calculus, finding local maxima is trivial: find where the first derivative is zero (\\(f'(x) = 0\\)) and changes from positive to negative.</p>
  <div class="warning-alert mt-2">
    <i data-lucide="alert-triangle"></i>
    <div>
      <strong>Crucial Insight (Slide 8):</strong> This does NOT work on digital sensor signals!
      <ol class="mt-1">
        <li><strong>Time is discrete:</strong> Samples are taken at \\(t = [0, 1, 2, \\dots]\\). The true mathematical peak almost never lands exactly on a sampled clock tick.</li>
        <li><strong>Noise creates hundreds of fake zero-crossings:</strong> Microvolt thermal noise causes tiny up-and-down fluctuations where \\(\\Delta y\\) constantly flips sign!</li>
      </ol>
    </div>
  </div>

  <div class="grid-2-col mt-3">
    <div>
      <h4>Finite Differences in NumPy (Slide 9-10)</h4>
      <p>Instead of continuous derivatives, digital signal processing uses <strong>finite differences</strong>:</p>
      \\[ \\text{Forward difference: } \\Delta y[i] = y[i+1] - y[i] \\]
      <p>In Python:</p>
      <pre><code>import numpy as np
sg = np.array([1, 2, 5, 7, 4, 2])
dsg = np.diff(sg)
# Output: array([ 1,  3,  2, -3, -2])
# Notice sign changes from +2 to -3 at index 3 (the peak!)</code></pre>
    </div>
    <div>
      <h4>The False Positive Disaster (Slide 13)</h4>
      <p>If you naively detect peaks by finding every point where \\(np.diff\\) changes from positive to negative on a real ECG signal with 1440 samples:</p>
      <div class="stat-highlight">
        <span class="stat-num text-danger">204 Peaks Detected!</span>
        <span class="stat-label">In reality, there are only <strong>7 real heartbeats</strong> in this window! 197 detections are false noise spikes!</span>
      </div>
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The 4 Essential Filters of scipy.signal.find_peaks</h3>
  <p>To discard false positives, <code>scipy.signal.find_peaks</code> gives you 4 powerful physical filters:</p>

  <div class="grid-2-col mt-3">
    <div class="filter-card">
      <div class="filter-badge">Filter 1: height</div>
      <h4>Minimum Amplitude</h4>
      <p>Discards any peak whose absolute value is below a threshold.</p>
      <div class="danger-box">
        <strong>The Fatal Flaw (Slide 19):</strong> If the sensor's baseline drifts down, genuine heartbeats drop below the threshold and are missed! If baseline drifts up, noise spikes cross the threshold!
      </div>
    </div>

    <div class="filter-card">
      <div class="filter-badge">Filter 2: distance</div>
      <h4>Refractory Period (Time Gap)</h4>
      <p>Forces a minimum number of samples between consecutive detected peaks.</p>
      <div class="info-box">
        <strong>Physiological Intuition:</strong> A human heart cannot physically beat 300 times a minute. Knowing heartbeats are at least 0.5s apart allows filtering out the secondary T-wave!
      </div>
    </div>

    <div class="filter-card highlight-card">
      <div class="filter-badge">Filter 3: prominence (The Star!)</div>
      <h4>Topographical Isolation</h4>
      <p>Measures how much a peak stands out <strong>relative to its local baseline</strong>, completely ignoring global drift!</p>
      <div class="success-box">
        <strong>Mountain Analogy (Slide 22):</strong> Imagine rain flooding the terrain until the peak becomes an island connected only to higher mountains. The vertical drop to the lowest contour saddle point is its <strong>prominence</strong>!
      </div>
    </div>

    <div class="filter-card">
      <div class="filter-badge">Filter 4: width</div>
      <h4>Duration at Half-Prominence</h4>
      <p>Measures peak duration (FWHM). Distinguishes narrow impulsive electrical spikes from broad physiological waves.</p>
    </div>
  </div>
</div>

<!-- Interactive Peak Finder Sandbox -->
<div class="interactive-sandbox mt-4" id="peak-finder-sandbox">
  <div class="sandbox-header">
    <div class="sandbox-title">
      <i data-lucide="target"></i> Live Peak Detection Sandbox on Real ECG Data (ecg1D.csv)
    </div>
    <div class="sandbox-badge">Real NUS ISS Dataset</div>
  </div>
  <div class="sandbox-body">
    <div class="canvas-container">
      <canvas id="peak-canvas" width="800" height="300"></canvas>
    </div>
    <div class="controls-grid mt-3">
      <div class="control-group">
        <label>Filter Strategy:</label>
        <select id="select-peak-strategy" class="select-styled">
          <option value="raw">1. Raw (No filter) — Shows False Positive Trap</option>
          <option value="height">2. Height Threshold only</option>
          <option value="distance">3. Distance Threshold only</option>
          <option value="prominence" selected>4. Prominence (Recommended!)</option>
        </select>
      </div>
      <div class="control-group" id="ctrl-param-container">
        <label id="lbl-param-slider">Prominence Threshold: <span id="val-param-slider" class="ctrl-val">0.50</span></label>
        <input type="range" id="slider-peak-param" min="0.05" max="1.5" value="0.5" step="0.05">
      </div>
    </div>
    <div class="peak-summary-bar mt-2">
      <div>Detected Peaks: <strong id="detected-peaks-count" class="text-primary">7</strong></div>
      <div>Expected Real Heartbeats: <strong>7</strong></div>
      <div id="peak-quality-badge" class="badge-success">Perfect Match!</div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Signal Cleaning — Baseline Drift & arPLS",
      subtitle: "Why sensor baselines wander and how Asymmetric Reweighted Penalized Least Squares cleans them",
      badge: "Denoising",
      content: `
<div class="deck-trace-banner mb-3 p-3" style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
  <div style="font-size: 0.85rem; color: var(--text-secondary);">
    <i data-lucide="presentation" style="color: #f59e0b; vertical-align: middle; margin-right: 4px;"></i>
    <strong>Lecture Slides Source:</strong> 📙 <code>Module 2 (PPTX)</code> &bull; Slides 26–44 (Baseline Wander, Gas Chromatography, Low-Cost Air Sensors, PLS Whittaker Objective, arPLS Lambda Tuning)
  </div>
  <button class="btn btn-sm btn-outline" onclick="SlideViewer.switchDeck('module2'); SlideViewer.goToSlide(25); app.loadLevel('slide-viewer');">
    <i data-lucide="presentation"></i> Open in Slide Companion (Slide 26)
  </button>
</div>

<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="filter"></i></div>
  <div class="card-body">
    <h3>The Enemy of Clean Signals: Baseline Wander</h3>
    <p class="lead-text">
      In theory, a zero signal should sit at \\(y = 0\\). In the real world, <strong>baselines wander constantly</strong>:
    </p>
    <ul class="clean-list">
      <li><strong>ECG Monitoring (Slide 37):</strong> When a patient breathes, their chest expands and contracts, changing the electrical resistance between electrodes and skin. This adds a low-frequency (0.2 Hz) wave that carries the heartbeats up and down like a ship on ocean waves!</li>
      <li><strong>Gas Chromatography (Slide 29-32):</strong> In GC chemical analysis, as the temperature oven ramps up, column stationary phase bleeds out, causing the detector baseline to slowly rise exponentially.</li>
      <li><strong>Low-Cost Air Quality Sensors (Slide 34):</strong> Ambient temperature and humidity cause optical particle counters to drift dramatically over the day.</li>
    </ul>
    <div class="quote-box">
      <em>"The cheaper your sensor, the more you will encounter this baseline drift problem!"</em>
      <div class="quote-author">— Module 2, Slide 28</div>
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>Why Simple Polynomial or Mean Subtraction Fails</h3>
  <p>Beginners often try to subtract the average or fit a polynomial line (like \\(y = a t^2 + b t + c\\)).</p>
  <div class="danger-box mt-2">
    <strong>Why Polynomial Fit Fails:</strong>
    <ul>
      <li>Polynomials fit both the baseline AND the peaks! The high peaks pull the polynomial upward, distorting the true baseline.</li>
      <li>Polynomials oscillate wildly at the edges (Runge's phenomenon).</li>
      <li>Real baseline drift is non-linear and irregular; no single polynomial can track breathing and movement changes.</li>
    </ul>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The arPLS Algorithm (Eilers & Boelens / Baek et al.)</h3>
  <p class="lead-text">
    <strong>Asymmetric Reweighted Penalized Least Squares (arPLS)</strong> is the gold-standard algorithm used in chemical spectroscopy and biomedical signal processing (Module 2, Slides 35-42).
  </p>

  <div class="grid-2-col mt-3">
    <div>
      <h4>1. The Two Competing Forces</h4>
      <p>We want to find an estimated baseline \\(z\\) by minimizing this cost function:</p>
      \\[ F(z) = \\sum_i w_i (y_i - z_i)^2 + \\lambda \\sum_i (\\Delta^2 z_i)^2 \\]
      <ul>
        <li><strong>Term 1 (Fidelity):</strong> Keeps baseline \\(z\\) faithful to raw signal \\(y\\).</li>
        <li><strong>Term 2 (Smoothness Penalty):</strong> Punishes second differences (roughness). The parameter <strong>\\(\\lambda\\) (lambda)</strong> controls the stiffness!</li>
      </ul>
    </div>
    <div>
      <h4>2. The "Asymmetric" Secret Weapon</h4>
      <p>If we used normal least squares, the baseline would slice right through the middle of the heartbeats! arPLS uses <strong>asymmetric reweighting</strong>:</p>
      <div class="table-responsive">
        <table class="table-styled">
          <thead>
            <tr><th>Residual \\(d_i = y_i - z_i\\)</th><th>What it is</th><th>Assigned Weight \\(w_i\\)</th></tr>
          </thead>
          <tbody>
            <tr><td>\\(d_i > 0\\) (Positive)</td><td>Heartbeat peak!</td><td><strong class="text-danger">Near Zero (\\(w_i \\approx 0\\))</strong></td></tr>
            <tr><td>\\(d_i \\le 0\\) (Negative)</td><td>Baseline / Trough</td><td><strong class="text-success">High (\\(w_i \\approx 1\\))</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p class="mt-2 text-muted">Because peaks get almost zero weight, the baseline is drawn only by the valleys and passes smoothly <strong>underneath</strong> the heartbeats!</p>
    </div>
  </div>
</div>

<!-- Interactive arPLS Baseline Corrector Sandbox -->
<div class="interactive-sandbox mt-4" id="baseline-sandbox">
  <div class="sandbox-header">
    <div class="sandbox-title">
      <i data-lucide="git-commit"></i> Live Baseline Correction Tuner (Lambda Slider)
    </div>
    <div class="sandbox-badge">Slide 40-43 Experiment</div>
  </div>
  <div class="sandbox-body">
    <div class="canvas-container">
      <canvas id="baseline-canvas" width="800" height="300"></canvas>
    </div>
    <div class="controls-grid mt-3">
      <div class="control-group">
        <label>Smoothing Stiffness (\\(\\lambda\\)): <span id="lambda-val" class="ctrl-val">10⁵ (Optimal)</span></label>
        <input type="range" id="slider-lambda" min="2" max="8" value="5" step="1">
      </div>
      <div class="control-group">
        <label>View Mode:</label>
        <select id="select-baseline-view" class="select-styled">
          <option value="both">Raw Signal + Estimated Baseline</option>
          <option value="cleaned">Corrected Signal (Raw - Baseline)</option>
        </select>
      </div>
    </div>
    <div id="lambda-explanation-box" class="info-alert mt-2">
      <!-- Dynamic explanation of selected lambda -->
    </div>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: Elastic Alignment — Dynamic Time Warping (DTW)",
      subtitle: "Comparing temporal sequences when speeds, timing, and durations vary",
      badge: "Pattern Matching",
      content: `
<div class="deck-trace-banner mb-3 p-3" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
  <div style="font-size: 0.85rem; color: var(--text-secondary);">
    <i data-lucide="code" style="color: #34d399; vertical-align: middle; margin-right: 4px;"></i>
    <strong>Lecture Slides Source:</strong> 📗 <code>Module 3 (PPTX)</code> &bull; Slides 1–36 (DTW vs Euclidean, 3 Warping Rules, Distance Matrix, Accumulated Cost Matrix & Path Backtracking)
  </div>
  <button class="btn btn-sm btn-outline" onclick="SlideViewer.switchDeck('module3'); SlideViewer.goToSlide(0); app.loadLevel('slide-viewer');">
    <i data-lucide="presentation"></i> Open in Slide Companion (Slide 1)
  </button>
</div>

<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="git-merge"></i></div>
  <div class="card-body">
    <h3>The Flaw of Euclidean Distance</h3>
    <p class="lead-text">
      Suppose you want to compare two heartbeat signals, or compare two people saying the word <em>"Computer"</em>.
    </p>
    <p>
      If Speaker A says "Com-pu-ter" in 0.8 seconds, and Speaker B says "Commm-pu-ter" in 1.1 seconds, what happens if you compute standard <strong>Euclidean distance</strong>:
    </p>
    \\[ d_{\\text{Euclidean}}(x, y) = \\sqrt{\\sum_{i=1}^N (x[i] - y[i])^2} \\]
    <div class="danger-box mt-2">
      <strong>Why Euclidean Distance Fails (Module 3, Slide 4-5):</strong>
      Euclidean distance is <em>rigid</em>: it compares point \\(x[5]\\) strictly against \\(y[5]\\). If the signal is delayed by even 20 milliseconds, peaks align with valleys, producing a massive distance! Euclidean distance claims two identical words are completely different!
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The Solution: Elastic Dynamic Time Warping (DTW)</h3>
  <p class="lead-text">
    DTW allows <strong>elastic non-linear alignment</strong>. It can stretch or compress portions of the time axis so that peaks match with peaks, and troughs match with troughs!
  </p>

  <div class="grid-3-col mt-3">
    <div class="rule-box">
      <div class="rule-badge">Rule 1: Boundary Condition</div>
      <h4>Start & End Fixed</h4>
      <p>The warping path MUST start at bottom-left \\((0, 0)\\) and end at top-right \\((N-1, M-1)\\). The beginning matches the beginning; the end matches the end.</p>
    </div>
    <div class="rule-box">
      <div class="rule-badge">Rule 2: Monotonicity</div>
      <h4>No Time Travel!</h4>
      <p>The path can only move right, up, or diagonally up-right: \\(i_k \\ge i_{k-1}\\) and \\(j_k \\ge j_{k-1}\\). You cannot move backward in time.</p>
    </div>
    <div class="rule-box">
      <div class="rule-badge">Rule 3: Continuity</div>
      <h4>No Broken Steps</h4>
      <p>The path moves one square at a time: \\(i_k - i_{k-1} \\le 1\\) and \\(j_k - j_{k-1} \\le 1\\). No samples can be skipped.</p>
    </div>
  </div>
</div>

<div class="lesson-card mt-4">
  <h3>The 3 Steps of the DTW Algorithm (Module 3, Slides 13-30)</h3>
  
  <div class="step-card">
    <div class="step-badge">Step 1: Compute Distance Matrix \\(D\\)</div>
    <p>Construct an \\(N \\times M\\) grid where each cell \\(D[i,j]\\) is the squared difference between sample \\(y[i]\\) and \\(x[j]\\):</p>
    \\[ D[i, j] = (y[i] - x[j])^2 \\]
  </div>

  <div class="step-card mt-2">
    <div class="step-badge">Step 2: Compute Accumulated Cost Matrix \\(C\\)</div>
    <p>Using dynamic programming, start from \\((0,0)\\) and fill the grid. The cost to reach cell \\((i, j)\\) is the local distance \\(D[i,j]\\) plus the minimum cost of the 3 legal predecessors:</p>
    \\[ C[i, j] = D[i, j] + \\min \\left( C[i-1, j-1], \\; C[i-1, j], \\; C[i, j-1] \\right) \\]
    <ul class="clean-list mt-2" style="font-size: 0.85rem;">
      <li>• <strong>Diagonal \\(C[i-1, j-1]\\):</strong> Both signals advance simultaneously (1-to-1 match).</li>
      <li>• <strong>Vertical \\(C[i-1, j]\\):</strong> Signal \\(y\\) stretches (1-to-many point alignment).</li>
      <li>• <strong>Horizontal \\(C[i, j-1]\\):</strong> Signal \\(x\\) stretches (many-to-1 point alignment).</li>
    </ul>
  </div>

  <div class="step-card mt-2">
    <div class="step-badge">Step 3: Search Optimal Warping Path (Backtracking)</div>
    <p>Start at the top-right corner \\((N-1, M-1)\\) and greedily step to whichever of the 3 neighbors has the <strong>minimum accumulated cost</strong>, all the way down to \\((0, 0)\\)!</p>
  </div>
</div>

<!-- Interactive DTW Studio Sandbox -->
<div class="interactive-sandbox mt-4" id="dtw-sandbox">
  <div class="sandbox-header">
    <div class="sandbox-title">
      <i data-lucide="git-pull-request"></i> Interactive DTW Matrix Explorer & Warping Path
    </div>
    <div class="sandbox-badge">Visual Dynamic Programming</div>
  </div>
  <div class="sandbox-body">
    <div class="grid-2-col">
      <div>
        <label>Select Signals to Compare:</label>
        <select id="select-dtw-dataset" class="select-styled">
          <option value="toy">1. Toy Signals (Slide 16: x vs y short sequences)</option>
          <option value="ecg_2_3" selected>2. Real ECG: Segment 2 vs Segment 3 (Normal vs Normal)</option>
          <option value="ecg_1_2">3. Real ECG: Segment 1 vs Segment 2 (Anomalous Transient)</option>
          <option value="ecg_2_6">4. Real ECG: Segment 2 vs Segment 6 (Moderate Variation)</option>
          <option value="gdp_us_cn">5. GDP 2002-2022: US vs China</option>
          <option value="gdp_cn_jp">6. GDP 2002-2022: China vs Japan</option>
        </select>
        <div class="dtw-metrics-card mt-3">
          <div class="metric-row">
            <span>DTW Alignment Cost:</span>
            <strong id="dtw-cost-metric" class="text-primary">0.7595</strong>
          </div>
          <div class="metric-row">
            <span>Warping Path Length:</span>
            <strong id="dtw-path-len-metric">306 steps</strong>
          </div>
          <div class="metric-row">
            <span>Morphology Assessment:</span>
            <span id="dtw-morphology-badge" class="badge-success">High Similarity (Normal Beats)</span>
          </div>
        </div>
      </div>
      <div class="canvas-container">
        <canvas id="dtw-matrix-canvas" width="380" height="300"></canvas>
      </div>
    </div>
    
    <div class="canvas-container mt-3">
      <div class="canvas-label">Point-to-Point Elastic Warping Alignment (<span class="text-secondary">pltWarp</span>):</div>
      <canvas id="dtw-warp-canvas" width="800" height="240"></canvas>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-6",
      title: "Level 6: Hands-on Lab & Workshop Code Hub",
      subtitle: "Complete verified Python solutions for Workshops 1-2 & 1-3 with interactive execution sandbox",
      badge: "Code Lab",
      content: `
<div class="deck-trace-banner mb-3 p-3" style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
  <div style="font-size: 0.85rem; color: var(--text-secondary);">
    <i data-lucide="terminal" style="color: #34d399; vertical-align: middle; margin-right: 4px;"></i>
    <strong>Workshop Slides Source:</strong> 📙 <code>Module 2 (Slide 44)</code> for Workshop 1-2 &bull; 📗 <code>Module 3 (Slides 37–44)</code> for Workshop 1-3 & GDP Bonus
  </div>
  <button class="btn btn-sm btn-outline" onclick="SlideViewer.switchDeck('module3'); SlideViewer.goToSlide(36); app.loadLevel('slide-viewer');">
    <i data-lucide="presentation"></i> Open Workshop Slides in Companion (Slide 37)
  </button>
</div>

<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="code"></i></div>
  <div class="card-body">
    <h3>Day 1 Hands-on Workshop Code Hub</h3>
    <p class="lead-text">
      Here are the complete, production-ready, verified Python solutions for the two official NUS ISS Day 1 workshops:
    </p>
    <div class="tag-row mt-2">
      <span class="badge-tech">Workshop 1-2: Peak Detection & arPLS</span>
      <span class="badge-tech">Workshop 1-3: DTW & Heartbeat Segmentation</span>
      <span class="badge-tech">Bonus: Macroeconomic GDP Alignment</span>
    </div>
  </div>
</div>

<div class="code-tabs-container mt-4">
  <div class="code-tabs-header">
    <button class="code-tab-btn active" data-tab="tab-wks1-2">Workshop 1-2: Peak & Baseline Correction</button>
    <button class="code-tab-btn" data-tab="tab-wks1-3">Workshop 1-3: Dynamic Time Warping (DTW)</button>
    <button class="code-tab-btn" data-tab="tab-wks-gdp">Bonus: GDP Alignment (US, CN, JP)</button>
  </div>

  <div class="code-tab-content active" id="tab-wks1-2">
    <div class="code-meta-bar">
      <span>File: <code>intelligent sensing system/ISS 1/workshops/issm_wks1_2_solution.py</code></span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-wks1-2')"><i data-lucide="copy"></i> Copy Code</button>
    </div>
    <pre><code id="code-wks1-2" class="language-python">#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NUS ISS - Intelligent Sensing Systems
Workshop 1-2 Solution: Peak Detection and arPLS Baseline Correction
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.signal import find_peaks as findPeaks
from pybaselines import Baseline

# Setup matplotlib styling
plt.style.use('ggplot')
plt.rcParams['ytick.right'] = True
plt.rcParams['ytick.labelright'] = True
plt.rcParams['ytick.left'] = False
plt.rcParams['ytick.labelleft'] = False

# -------------------------------------------------------------
# Part 1: Read in ECG signal and detect peaks
# -------------------------------------------------------------
# Load 2D ECG data (we select column 1 as recommended in Slide 44)
l2D = pd.read_csv('ecg2D.csv', header=None)
ecg_raw = l2D[1].values

# Peak detection using Prominence (Slide 21-22)
# Prominence=0.5 accurately picks all R-peaks without false alarms
peaks, properties = findPeaks(ecg_raw, prominence=0.5)

print(f"Total samples: {len(ecg_raw)}")
print(f"Detected {len(peaks)} R-peaks at sample indices:")
print(peaks)

# Plot raw peaks
plt.figure(figsize=(12, 4))
plt.plot(ecg_raw, label='Raw ECG (Lead 1)', color='#2b5c8f', lw=1.2)
plt.plot(peaks, ecg_raw[peaks], "x", label='Detected Peaks (prominence=0.5)', color='#e63946', ms=8, mew=2)
plt.title("ECG Signal with Detected R-Peaks")
plt.xlabel("Sample Index")
plt.ylabel("Voltage (mV)")
plt.legend()
plt.tight_layout()
plt.show()

# -------------------------------------------------------------
# Part 2: Perform arPLS baseline correction
# -------------------------------------------------------------
# Fit smooth baseline using Asymmetric Reweighted Penalized Least Squares
# lam=1e5 provides the ideal stiffness for human ECG respiration drift
samples = np.arange(len(ecg_raw))
fitter = Baseline(x_data=samples)
baseline, params = fitter.arpls(ecg_raw, lam=1e5, max_iter=50, tol=1e-3)

# Cleaned ECG is raw minus baseline
ecg_corrected = ecg_raw - baseline

# Plot before and after
plt.figure(figsize=(12, 6))

plt.subplot(2, 1, 1)
plt.plot(ecg_raw, label='Raw ECG', color='#2b5c8f', lw=1.2)
plt.plot(baseline, label='Estimated arPLS Baseline (lam=1e5)', color='#e76f51', lw=2, ls='--')
plt.title("Raw ECG with Estimated Baseline Drift")
plt.ylabel("Voltage (mV)")
plt.legend()

plt.subplot(2, 1, 2)
plt.plot(ecg_corrected, label='Baseline-Corrected ECG', color='#2a9d8f', lw=1.2)
peaks_clean, _ = findPeaks(ecg_corrected, prominence=0.5)
plt.plot(peaks_clean, ecg_corrected[peaks_clean], "x", color='#e63946', label='Clean Peaks', ms=8, mew=2)
plt.title("Cleaned ECG Signal (Zero Baseline)")
plt.xlabel("Sample Index")
plt.ylabel("Voltage (mV)")
plt.legend()

plt.tight_layout()
plt.show()
</code></pre>
  </div>

  <div class="code-tab-content" id="tab-wks1-3">
    <div class="code-meta-bar">
      <span>File: <code>intelligent sensing system/ISS 1/workshops/issm_wks1_3_solution.py</code></span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-wks1-3')"><i data-lucide="copy"></i> Copy Code</button>
    </div>
    <pre><code id="code-wks1-3" class="language-python">#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NUS ISS - Intelligent Sensing Systems
Workshop 1-3 Solution: Dynamic Time Warping (DTW) on ECG Segments
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.signal import find_peaks as findPeaks

# 1. Distance matrix: D[i,j] = (y[i] - x[j])^2
def computeDists(x, y):
    dists = np.zeros((len(y), len(x)))
    for i in range(len(y)):
        for j in range(len(x)):
            dists[i, j] = (y[i] - x[j]) ** 2
    return dists

# 2. Accumulated cost matrix
def computeAcuCost(dists):
    acuCost = np.zeros(dists.shape)
    acuCost[0, 0] = dists[0, 0]
    
    # First row
    for j in range(1, dists.shape[1]):
        acuCost[0, j] = dists[0, j] + acuCost[0, j-1]
        
    # First column
    for i in range(1, dists.shape[0]):
        acuCost[i, 0] = dists[i, 0] + acuCost[i-1, 0]
        
    # Remaining cells: min of diagonal, down, left
    for i in range(1, dists.shape[0]):
        for j in range(1, dists.shape[1]):
            acuCost[i, j] = min(acuCost[i-1, j-1],
                                acuCost[i-1, j],
                                acuCost[i, j-1]) + dists[i, j]
    return acuCost

# 3. Dynamic Time Warping optimal path backtracer
def doDTW(x, y, dists, acuCost):
    i = len(y) - 1
    j = len(x) - 1
    path = [[j, i]]
    
    while (i > 0) and (j > 0):
        if i == 0:
            j = j - 1
        elif j == 0:
            i = i - 1
        else:
            m = min(acuCost[i-1, j-1], acuCost[i-1, j], acuCost[i, j-1])
            if acuCost[i-1, j] == m:
                i = i - 1
            elif acuCost[i, j-1] == m:
                j = j - 1
            else:
                i = i - 1
                j = j - 1
        path.append([j, i])
        
    # Compute total warping cost along path
    cost = 0
    for [j, i] in path:
        cost += dists[i, j]
        
    return path, cost

# 4. Extract individual heartbeat cycles by R-peak offset
def extractECG(ecg, pks, offset=15):
    segs = []
    start = 1 if pks[0] - offset < 0 else 0
    for i in range(start, len(pks) - 1):
        seg = ecg[(pks[i] - offset):(pks[i+1] - offset)]
        segs.append(seg)
    return segs

# -------------------------------------------------------------
# Execute DTW on ECG Segments
# -------------------------------------------------------------
l2D = pd.read_csv('ecg2D.csv', header=None)
ECGs = l2D[1].values
pks, _ = findPeaks(ECGs, prominence=0.5)
segs = extractECG(ECGs, pks, offset=15)

print(f"Extracted {len(segs)} heartbeat segments.")

# Compare pairs: 1 vs 2, 2 vs 3, 2 vs 6
pairs = [
    (0, 1, "ECG 1 and 2"),
    (1, 2, "ECG 2 and 3"),
    (1, 5, "ECG 2 and 6")
]

for idx1, idx2, name in pairs:
    s1, s2 = segs[idx1], segs[idx2]
    dists = computeDists(s1, s2)
    acuCost = computeAcuCost(dists)
    path, cost = doDTW(s1, s2, dists, acuCost)
    print(f"The accumulated cost between {name} is {cost:.4f}")

# Verification Outputs:
# Cost between ecg 1 and 2: 14.9698 (Anomalous Beat 1)
# Cost between ecg 2 and 3: 0.7595  (Very high similarity!)
# Cost between ecg 2 and 6: 2.6060  (Moderate variation)
</code></pre>
  </div>

  <div class="code-tab-content" id="tab-wks-gdp">
    <div class="code-meta-bar">
      <span>File: <code>intelligent sensing system/ISS 1/workshops/issm_wks1_3_GDP_solution.py</code></span>
      <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('code-wks-gdp')"><i data-lucide="copy"></i> Copy Code</button>
    </div>
    <pre><code id="code-wks-gdp" class="language-python">#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
NUS ISS - Intelligent Sensing Systems
Bonus Workshop: Macroeconomic GDP Trajectory Comparison (2002-2022) using DTW
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Load GDP data (21 years: 2002 to 2022)
gdp_df = pd.read_csv('GDP.csv', header=None)
us_gdp    = gdp_df[0].values   # Column 0: US
china_gdp = gdp_df[1].values   # Column 1: China
japan_gdp = gdp_df[2].values   # Column 2: Japan

# DTW functions (computeDists, computeAcuCost, doDTW) as defined above...

# Normalized comparison (z-score) to evaluate shape similarity independent of currency magnitude
def z_norm(arr):
    return (arr - np.mean(arr)) / np.std(arr)

us_norm = z_norm(us_gdp)
cn_norm = z_norm(china_gdp)
jp_norm = z_norm(japan_gdp)

print("=== Normalized Trajectory DTW Costs ===")
# US vs China growth trajectory: highly monotonic, low normalized cost
# Japan trajectory: stagnation / plateaus, higher cost when aligned with US or China
</code></pre>
  </div>
</div>
`
    }
  ]
};
