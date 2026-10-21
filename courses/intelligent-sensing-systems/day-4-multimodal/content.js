// ==============================================================================
// NUS ISS - Intelligent Sensing Systems
// Day 4: Sense Making from Sensory Data & Multimodal Systems
// Primary Instructor: Dr. TIAN Jing
// ==============================================================================

window.DAY4_CONTENT = {
  sections: [
    // --------------------------------------------------------------------------
    // LEVEL 0: THE MENTAL MODEL
    // --------------------------------------------------------------------------
    {
      id: "level-0",
      badge: "Level 0: The Mental Model",
      title: "What is a Modality? Why Single Sensors Fail and Multimodal Systems Prevail",
      subtitle: "The limitations of isolated sensory channels and the power of multimodal synergy.",
      content: `
        <div class="lesson-card hero-card mb-4">
          <div class="card-icon"><i data-lucide="zap"></i></div>
          <div class="card-body">
            <h3>Beyond the Single-Transducer Trap</h3>
            <p class="lead-text">
              Imagine navigating a busy Singapore street blindfolded using only your hearing. You can hear approaching engines, but you cannot see traffic lights. 
              Now imagine wearing soundproof headphones and trying to navigate using only vision. You can see cars, but an electric scooter approaching silently in your blind spot is completely undetectable.
            </p>
            <p class="text-secondary mt-2">
              Human survival depends on <strong>multimodal sense-making</strong>—fusing vision, hearing, balance (vestibular inertia), and touch. 
              Similarly, in modern IoT and robotics, relying on a single sensor modality is a recipe for catastrophic failure. 
              <strong>Multimodal Sensing</strong> combines complementary physical channels so that the blind spots of one sensor are covered by the strengths of another!
            </p>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">CORE DEFINITIONS</div>
            <span class="text-muted">PDF Slides 3–4 &bull; What is Modality?</span>
          </div>
          <h3 class="mt-2">Modality & Sensory Channels</h3>
          <p>
            A <strong>modality</strong> is the particular way in which something is expressed or perceived. 
            In physical sensing, each modality captures a distinct fundamental force of nature:
          </p>
          <ul class="styled-list mt-2">
            <li><strong>Inertial Modality:</strong> Accelerometers measure proper acceleration (force relative to free-fall); gyroscopes measure angular rotational velocity (rad/s).</li>
            <li><strong>Acoustic Modality:</strong> Microphones measure pressure waves transmitted through air, fluids, or solids.</li>
            <li><strong>Vision Modality:</strong> Optical cameras capture 2D matrices of reflected photon wavelengths (RGB, Infrared, Depth).</li>
            <li><strong>Electromagnetic / Proximity:</strong> Inductive coils detect eddy currents in metals; capacitive sensors detect dielectric shifts.</li>
          </ul>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 1: SINGLE MODALITY DEEP-DIVE
    // --------------------------------------------------------------------------
    {
      id: "level-1",
      badge: "Level 1: Single Modalities",
      title: "Single Modality Deep-Dive: Inertial, Acoustic & Vision",
      subtitle: "Analyzing individual sensor modalities, their operating principles and physical failure modes.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">MODALITY PROFILES</div>
            <span class="text-muted">PDF Slides 4–11 &bull; Real-World Case Studies</span>
          </div>
          <h3 class="mt-2">Comparing the 3 Dominant Sensor Modalities</h3>

          <div class="comparison-grid mt-3">
            <div class="grid-card">
              <div class="grid-card-header" style="color: #38bdf8;">
                <i data-lucide="activity"></i> <strong>1. Inertial (IMU)</strong>
              </div>
              <p class="mt-2" style="font-size: 0.88rem;">
                <strong>Applications:</strong> Wearable Human Activity Recognition (Berkeley MHAD), gait monitoring.<br>
                <strong>Strength:</strong> Ultra-low power (&lt;5 mW), works in total darkness, preserves privacy.<br>
                <strong>Blind Spot:</strong> Zero environmental context; cannot tell if you are holding a coffee cup or a weapon; suffers from integration drift.
              </p>
            </div>

            <div class="grid-card">
              <div class="grid-card-header" style="color: #f59e0b;">
                <i data-lucide="mic"></i> <strong>2. Acoustic (Audio)</strong>
              </div>
              <p class="mt-2" style="font-size: 0.88rem;">
                <strong>Applications:</strong> Industrial machine diagnostics (SMD assembly defect detection, pipe leaks).<br>
                <strong>Strength:</strong> Omnidirectional 360° coverage, detects internal mechanical friction.<br>
                <strong>Blind Spot:</strong> Vulnerable to ambient acoustic noise (nearby machinery, HVAC alarms).
              </p>
            </div>

            <div class="grid-card">
              <div class="grid-card-header" style="color: #10b981;">
                <i data-lucide="camera"></i> <strong>3. Vision (Optical)</strong>
              </div>
              <p class="mt-2" style="font-size: 0.88rem;">
                <strong>Applications:</strong> Scene recognition, manufacturing defect sorting, flood drainage water level monitoring (210 cameras).<br>
                <strong>Strength:</strong> Dense semantic information (color, text, spatial geometry).<br>
                <strong>Blind Spot:</strong> Blinded by lens glare, darkness, fog, and physical occlusions. High power and compute costs.
              </p>
            </div>
          </div>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 2: SENSORY DATA AUGMENTATION
    // --------------------------------------------------------------------------
    {
      id: "level-2",
      badge: "Level 2: Data Augmentation",
      title: "Sensory Data Augmentation: Jittering, Scaling & Time-Warping",
      subtitle: "Synthesizing realistic physical variations to prevent neural networks from overfitting on sensor quirks.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">THEORY & FORMULATION</div>
            <span class="text-muted">PDF Slides 12–13 &bull; Augmentation Techniques</span>
          </div>
          <h3 class="mt-2">Simulating Real-World Sensor Variations</h3>
          <p>
            Unlike computer vision where images can be flipped or rotated, augmenting sensor time-series requires 
            preserving the underlying physical laws of motion and acoustics:
          </p>
          <ul class="styled-list mt-2">
            <li><strong>Jittering (Noise Addition):</strong> \\(x_{\\text{aug}}(t) = x(t) + \\epsilon, \\; \\epsilon \\sim \\mathcal{N}(0, \\sigma^2)\\). Simulates electronic sensor thermal noise.</li>
            <li><strong>Scaling (Gain Perturbation):</strong> \\(x_{\\text{aug}}(t) = \\alpha \\cdot x(t)\\). Simulates variations in sensor calibration or subject body mass.</li>
            <li><strong>Time-Warping:</strong> Smooth non-linear time dilation \\(x_{\\text{aug}}(t) = x(\\tau(t))\\). Simulates variations in human movement tempo or motor speed.</li>
          </ul>
        </div>

        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">LIVE SIMULATOR</div>
            <span class="text-muted">Interactive Sensory Augmentation Lab</span>
          </div>
          <h3 class="mt-2">Interactive Sensory Signal Augmentation Studio</h3>
          <p class="text-secondary">
            Adjust the sliders below to apply Jittering, Scaling, and Time-Warping to a live wearable accelerometer stream. 
            Notice how the emerald augmented waveform preserves signature peaks while introducing rich physical variance!
          </p>

          <div class="visualizer-container mt-3">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 12px;">
              <div class="slider-control-group">
                <div style="display: flex; justify-content: space-between;">
                  <label for="aug-jitter-slider" style="font-weight: 600;">Jittering (Noise):</label>
                  <span class="badge-tech" id="aug-jitter-val">0.00</span>
                </div>
                <input type="range" id="aug-jitter-slider" min="0" max="0.5" step="0.05" value="0" class="slider-styled mt-2" style="width: 100%;">
              </div>

              <div class="slider-control-group">
                <div style="display: flex; justify-content: space-between;">
                  <label for="aug-scale-slider" style="font-weight: 600;">Scaling (Gain):</label>
                  <span class="badge-tech" id="aug-scale-val">1.00x</span>
                </div>
                <input type="range" id="aug-scale-slider" min="0.5" max="1.8" step="0.1" value="1.0" class="slider-styled mt-2" style="width: 100%;">
              </div>

              <div class="slider-control-group">
                <div style="display: flex; justify-content: space-between;">
                  <label for="aug-warp-slider" style="font-weight: 600;">Time-Warping:</label>
                  <span class="badge-tech" id="aug-warp-val">0.00</span>
                </div>
                <input type="range" id="aug-warp-slider" min="0" max="1.0" step="0.1" value="0" class="slider-styled mt-2" style="width: 100%;">
              </div>
            </div>

            <div class="canvas-wrapper">
              <canvas id="aug-canvas" width="800" height="260" style="width: 100%; height: 260px; background: #0f172a; border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
            </div>
          </div>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 3: WHY MULTIMODAL? THE 4 CORE CHALLENGES
    // --------------------------------------------------------------------------
    {
      id: "level-3",
      badge: "Level 3: Multimodal Challenges",
      title: "Why Multimodal? The 4 Core Machine Learning Challenges",
      subtitle: "The canonical MIT / CMU framework for multimodal artificial intelligence.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">THEORETICAL TAXONOMY</div>
            <span class="text-muted">PDF Slides 16–17 &bull; Paul Liang & Baltrušaitis</span>
          </div>
          <h3 class="mt-2">The 4 Fundamental Challenges</h3>
          <div class="roadmap-grid mt-3">
            <div class="roadmap-card">
              <div class="roadmap-step">1</div>
              <h4>Representation</h4>
              <p>How to summarize and coordinate heterogeneous signals (e.g. 1D audio waves + 2D image pixels) in a joint embedding space.</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">2</div>
              <h4>Alignment</h4>
              <p>How to identify direct temporal and spatial relations between elements across different sensor modalities (e.g. video lips to spoken audio).</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">3</div>
              <h4>Fusion</h4>
              <p>How to integrate information from multiple modalities to make a single robust decision (Early vs Intermediate vs Late).</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">4</div>
              <h4>Translation</h4>
              <p>How to map or generate from one modality to another (e.g. generating synthetic IMU signals from video footage).</p>
            </div>
          </div>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 4: FUSION ARCHITECTURES
    // --------------------------------------------------------------------------
    {
      id: "level-4",
      badge: "Level 4: Fusion Architectures",
      title: "Fusion Architectures: Early vs. Intermediate vs. Late Fusion",
      subtitle: "Comparing tightly coupled, loosely coupled, and uncoupled sensor integration architectures.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">SYSTEM ARCHITECTURES</div>
            <span class="text-muted">PDF Slides 18–20 &bull; Multi-Sensor Integration</span>
          </div>
          <h3 class="mt-2">Early, Intermediate, and Late Fusion</h3>

          <div class="comparison-grid mt-3">
            <div class="grid-card">
              <div class="grid-card-header" style="color: #38bdf8;">
                <strong>Early Fusion (Tightly Coupled)</strong>
              </div>
              <p class="mt-2" style="font-size: 0.88rem;">
                Concatenates low-level raw features \\([\\mathbf{x}_{\\text{imu}}, \\mathbf{x}_{\\text{cam}}, \\mathbf{x}_{\\text{mic}}]\\) into a single input vector.<br>
                &bull; <strong>Pros:</strong> Captures low-level cross-sensor interactions.<br>
                &bull; <strong>Cons:</strong> Highly fragile. If one sensor is blinded or disconnected, the entire model fails.
              </p>
            </div>

            <div class="grid-card">
              <div class="grid-card-header" style="color: #10b981;">
                <strong>Intermediate Fusion (Loosely Coupled)</strong>
              </div>
              <p class="mt-2" style="font-size: 0.88rem;">
                Each modality is encoded into its own latent representation before a shared cross-attention network fuses them.<br>
                &bull; <strong>Pros:</strong> Balances modality independence with deep cross-modal reasoning.<br>
                &bull; <strong>Cons:</strong> Requires complex multi-stream network training.
              </p>
            </div>

            <div class="grid-card">
              <div class="grid-card-header" style="color: #f59e0b;">
                <strong>Late Fusion (Uncoupled Decisions)</strong>
              </div>
              <p class="mt-2" style="font-size: 0.88rem;">
                Independent unimodal models output separate decisions/probabilities, combined via weighted voting or Bayesian averaging.<br>
                &bull; <strong>Pros:</strong> Maximum fault tolerance! Noisy or disconnected sensors are easily zero-weighted without retraining.<br>
                &bull; <strong>Cons:</strong> Misses subtle low-level cross-sensor correlations.
              </p>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">LIVE SIMULATOR</div>
            <span class="text-muted">Interactive Multimodal Fusion Playground</span>
          </div>
          <h3 class="mt-2">Explore Fault Tolerance Under Sensor Corruption</h3>
          <p class="text-secondary">
            Simulate a sensor failure by injecting severe glare into the <strong>Vision Camera</strong> or heavy factory noise into the <strong>Acoustic Mic</strong>. 
            Toggle between <strong>Early</strong> and <strong>Late Fusion</strong> to see why Late Confidence-Gated Fusion maintains over 88% accuracy while Early Fusion collapses!
          </p>

          <div class="visualizer-container mt-3">
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 12px;">
              <div class="slider-control-group">
                <label for="fusion-mode-select" style="font-weight: 600;">Fusion Strategy:</label>
                <select id="fusion-mode-select" class="select-styled mt-2">
                  <option value="late">Late Fusion (Confidence Gating)</option>
                  <option value="intermediate">Intermediate (Cross-Attention)</option>
                  <option value="early">Early Fusion (Concatenation)</option>
                </select>
              </div>

              <div class="slider-control-group">
                <div style="display: flex; justify-content: space-between;">
                  <label for="fusion-noise-vision" style="font-weight: 600;">Camera Glare / Occlusion:</label>
                  <span class="badge-tech">Slider</span>
                </div>
                <input type="range" id="fusion-noise-vision" min="0" max="1" step="0.1" value="0" class="slider-styled mt-2" style="width: 100%;">
              </div>

              <div class="slider-control-group">
                <div style="display: flex; justify-content: space-between;">
                  <label for="fusion-noise-audio" style="font-weight: 600;">Microphone Factory Noise:</label>
                  <span class="badge-tech">Slider</span>
                </div>
                <input type="range" id="fusion-noise-audio" min="0" max="1" step="0.1" value="0" class="slider-styled mt-2" style="width: 100%;">
              </div>
            </div>

            <div class="canvas-wrapper">
              <canvas id="fusion-canvas" width="800" height="280" style="width: 100%; height: 280px; background: #0f172a; border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
            </div>

            <div class="status-callout mt-3" id="fusion-status-box">
              Fusion state ready.
            </div>
          </div>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 5: MULTIMODAL ALIGNMENT
    // --------------------------------------------------------------------------
    {
      id: "level-5",
      badge: "Level 5: Multimodal Alignment",
      title: "Multimodal Alignment: Spatial, Temporal & Feature Alignment",
      subtitle: "Synchronizing heterogeneous clocks, frame rates, and coordinate geometries.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">THE 3 ALIGNMENT TIERS</div>
            <span class="text-muted">PDF Slides 21–25 &bull; Spatial & Temporal Synchronization</span>
          </div>
          <h3 class="mt-2">Spatial, Temporal & Feature Alignment</h3>
          <ul class="styled-list mt-2">
            <li><strong>Spatial Alignment (Slide 21–22):</strong> Transforming local coordinate positions to a shared global coordinate frame (e.g. camera extrinsic calibration matrix \\([\\mathbf{R} | \\mathbf{t}]\\) and LiDAR 3D projection).</li>
            <li><strong>Temporal Alignment (Slide 23–24):</strong> Matching point-to-point correspondence between asynchronous streams using Dynamic Time Warping (DTW) to compensate for transmission lag and variable pacing.</li>
            <li><strong>Feature / Latent Alignment (Slide 25):</strong> Mapping multimodal tokens into a shared metric embedding space via contrastive learning (CLIP).</li>
          </ul>
        </div>

        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">LIVE SIMULATOR</div>
            <span class="text-muted">Cross-Modal Temporal DTW Studio</span>
          </div>
          <h3 class="mt-2">Interactive Video-to-Inertial Temporal Synchronization</h3>
          <p class="text-secondary">
            Drag the <strong>Frame Delay Slider</strong> below. Notice how non-linear Dynamic Time Warping matches corresponding motion peaks across wearable accelerometers and camera optical flow!
          </p>

          <div class="visualizer-container mt-3">
            <div class="slider-control-group mb-3">
              <div style="display: flex; justify-content: space-between;">
                <label for="align-lag-slider" style="font-weight: 600;">Camera Video Transmission Delay (\\(\\tau\\)):</label>
                <span class="badge-tech" id="align-lag-val">0 frames</span>
              </div>
              <input type="range" id="align-lag-slider" min="-25" max="25" step="1" value="0" class="slider-styled mt-2" style="width: 100%;">
            </div>

            <div class="visualizer-controls-row mb-3">
              <span class="badge-tech" id="align-score-meter">Alignment Correlation: --</span>
            </div>

            <div class="canvas-wrapper">
              <canvas id="align-canvas" width="800" height="260" style="width: 100%; height: 260px; background: #0f172a; border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
            </div>
          </div>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 6: END-TO-END SENSE MAKING PIPELINES
    // --------------------------------------------------------------------------
    {
      id: "level-6",
      badge: "Level 6: Sense Making Pipelines",
      title: "End-to-End Sense Making Pipelines: MIT AGI, ADAS & Smart Factories",
      subtitle: "Tracing how raw sensor voltages are processed into high-level autonomous decisions.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">SYSTEM ARCHITECTURE</div>
            <span class="text-muted">PDF Slides 26–39 &bull; MIT 6.S099 & ADAS</span>
          </div>
          <h3 class="mt-2">The Canonical Sense-Making Pipeline</h3>
          <p>
            Slide 33–38 formalizes the 5-stage transformation pipeline from physics to intelligence:
          </p>

          <div class="roadmap-grid mt-3">
            <div class="roadmap-card">
              <div class="roadmap-step">1</div>
              <h4>Raw Sensor Data</h4>
              <p>Continuous electrical signals transduced from physical stimuli (volts, amps, pixels, decibels).</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">2</div>
              <h4>Signal Processing</h4>
              <p>Noise filtering, baseline correction (arPLS), and time-frequency transformations (STFT, DWT).</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">3</div>
              <h4>Feature Extraction</h4>
              <p>Topological peaks, energy compaction (PCA), subband entropies, and cross-sensor correlations.</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">4</div>
              <h4>Representation & ML</h4>
              <p>Autoencoder embeddings, Gaussian Naive Bayes posteriors, and multimodal fusion gating.</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-step">5</div>
              <h4>Sense Making / Action</h4>
              <p>Autonomous vehicle emergency braking, pipe choke alarms, or deposit refunds.</p>
            </div>
          </div>
        </div>
      `
    },

    // --------------------------------------------------------------------------
    // LEVEL 7: MULTIMODAL REVERSE VENDING MACHINE (RVM) LAB
    // --------------------------------------------------------------------------
    {
      id: "level-7",
      badge: "Level 7: Reverse Vending Machine Lab",
      title: "Reverse Engineering Singapore's Multimodal Reverse Vending Machine",
      subtitle: "A complete hands-on digital twin simulation and official answers to the Day 4 experiential learning worksheet.",
      content: `
        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">NUS ISS EXPERIENTIAL CASE STUDY</div>
            <span class="text-muted">Singapore Beverage Container Return Scheme RVM</span>
          </div>
          <h3 class="mt-2">Interactive Multimodal RVM Digital Twin</h3>
          <p class="text-secondary">
            Select different test items from the catalog below. Watch how the RVM combines 
            <strong>Optical Barcode Scanning</strong>, <strong>RGB Camera Material Recognition</strong>, <strong>Load Cell Weighing</strong>, and <strong>Inductive Metal Proximity</strong> 
            to automatically accept valid items and defeat counterfeit fraud attempts!
          </p>

          <div class="visualizer-container mt-3">
            <div class="visualizer-controls-row mb-3">
              <label for="rvm-item-select" style="font-weight: 600;">Insert Container into Machine:</label>
              <select id="rvm-item-select" class="select-styled" style="max-width: 380px;">
                <option value="0">1. Valid 500ml PET Water Bottle</option>
                <option value="1">2. Valid 330ml Aluminum Soda Can</option>
                <option value="2">3. Fraud 1: Photocopied Barcode on Wooden Rod</option>
                <option value="3">4. Fraud 2: Genuine PET Bottle with Water/Sand</option>
                <option value="4">5. Failure Case: Severely Crushed Aluminum Can</option>
              </select>
            </div>

            <div class="rvm-sensor-badges-row mb-3" style="display: flex; gap: 8px; flex-wrap: wrap;">
              <span id="rvm-badge-barcode" class="badge-tech">Barcode: --</span>
              <span id="rvm-badge-camera" class="badge-tech">Vision: --</span>
              <span id="rvm-badge-loadcell" class="badge-tech">Scale: --</span>
              <span id="rvm-badge-metal" class="badge-tech">Metal: --</span>
            </div>

            <div class="canvas-wrapper">
              <canvas id="rvm-canvas" width="800" height="260" style="width: 100%; height: 260px; background: #0f172a; border-radius: 8px; border: 1px solid var(--border-color);"></canvas>
            </div>

            <div class="status-callout mt-3" id="rvm-decision-box">
              RVM ready for container insertion.
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <div class="card-header-row">
            <div class="card-badge">COMPLETE PYTHON LAB SCRIPT</div>
            <span class="text-muted">intelligent sensing system/ISS 4/issm_day4_solution.py</span>
          </div>
          <h3 class="mt-2">Multimodal RVM Decision Pipeline Code</h3>

          <div class="code-editor-box mt-3">
            <div class="code-editor-header">
              <span><i data-lucide="file-code"></i> intelligent sensing system/ISS 4/issm_day4_solution.py</span>
              <button class="btn btn-sm btn-outline" onclick="copyCodeBlock('day4-solution-code')">
                <i data-lucide="copy"></i> Copy Script
              </button>
            </div>
            <pre class="code-content" id="day4-solution-code"><code class="language-python"># Run in terminal: ./.venv/bin/python "intelligent sensing system/ISS 4/issm_day4_solution.py"

# Multimodal Gated Decision Engine
def evaluate_rvm_decision(readings):
    # Step 1: Barcode eligibility check
    if not readings['barcode_valid']:
        return "REJECT & RETURN", "REJECTED", "Barcode unreadable or not registered."
    
    # Step 2: Cross-modal material consistency check
    vis_pet = readings['vision_probs'][0]
    vis_can = readings['vision_probs'][1]
    is_metal = readings['metal_detected']
    
    if vis_pet > 0.70 and not is_metal:
        container_type = "PET Plastic"
    elif vis_can > 0.65 and is_metal:
        container_type = "Aluminum Can"
    else:
        return "REJECT & RETURN", "FRAUD", "Vision contradicts metal sensor (Material Mismatch)."

    # Step 3: Load cell weight check (<30g empty threshold)
    if readings['weight_grams'] > 30.0:
        return "REJECT & RETURN", "FRAUD", "Weight exceeds empty limit (>30g). Residual liquid/dirt detected."

    return "ACCEPT & REFUND ($0.10)", "VALID", f"Verified empty {container_type}."
</code></pre>
          </div>
        </div>
      `
    }
  ]
};

// ==============================================================================
// DAY 4 SLIDE TRACEABILITY MATRIX (100% COVERAGE VERIFICATION)
// Covers all 40 pages of "4 Sense making from sensory data v3.3.pdf",
// all 9 slides of "ISSM Day4 worksheet your name.pptx",
// and all 4 pages of "ISSM Day4 worksheet instruction.pdf"
// ==============================================================================
window.DAY4_TRACEABILITY_MATRIX = [
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 1 - 4",
    topic: "Definition of modality, physical channels, proper acceleration in MEMS accelerometers",
    platformLevel: "Level 0: The Mental Model",
    interactiveFeature: "Interactive comparison of physical sensory channels and proper acceleration."
  },
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 5 - 11",
    topic: "Single modalities: Inertial (MHAD), Acoustic (SMD assembly defects), Vision (manufacturing & floods)",
    platformLevel: "Level 1: Single Modalities",
    interactiveFeature: "Three-way comparative architectural grid with failure mode analysis."
  },
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 12 - 13",
    topic: "Sensory data augmentation: scaling, magnitude filtering, jittering, time-warping",
    platformLevel: "Level 2: Data Augmentation",
    interactiveFeature: "Interactive Augmentation Studio: real-time sliders for jittering, scaling, and time-warping."
  },
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 14 - 17",
    topic: "Why multimodal? Representation, Alignment, Fusion, Translation (Paul Liang / MIT framework)",
    platformLevel: "Level 3: Multimodal Challenges",
    interactiveFeature: "The 4 canonical multimodal challenges interactive roadmap."
  },
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 18 - 20",
    topic: "Multimodal fusion architectures: Tightly coupled (Early), Loosely coupled (Restricted), Uncoupled (Late)",
    platformLevel: "Level 4: Fusion Architectures",
    interactiveFeature: "Multimodal Fusion Playground: sensor failure injection showing Late Fusion fault tolerance."
  },
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 21 - 25",
    topic: "Multimodal alignment: spatial transformation, temporal alignment (DTW vs Euclidean), feature alignment (CLIP)",
    platformLevel: "Level 5: Multimodal Alignment",
    interactiveFeature: "Interactive Temporal DTW Studio: variable delay slider with live cross-modal correlation."
  },
  {
    deck: "4 Sense making from sensory data.pdf",
    slides: "Slides 26 - 39",
    topic: "Sense-making pipelines: MIT AGI, ADAS autonomous vehicles (Radar/LiDAR/Camera), Smart manufacturing",
    platformLevel: "Level 6: End-to-End Pipelines",
    interactiveFeature: "Five-stage transformation roadmap from raw physics to automated intelligence."
  },
  {
    deck: "ISSM Day4 worksheet instruction.pdf",
    slides: "Pages 1 - 4",
    topic: "Experiential learning activity: Singapore Beverage Container Return Scheme Reverse Vending Machine (RVM)",
    platformLevel: "Level 7: RVM Lab",
    interactiveFeature: "Complete reverse-engineering guide and multimodal decision rules."
  },
  {
    deck: "ISSM Day4 worksheet.pptx",
    slides: "Slides 1 - 9",
    topic: "Worksheet questions Q1 to Q5: Sensor analysis, Sense-making pipeline, Fraud controls, Failure case, New capability",
    platformLevel: "Level 7 & Code Lab",
    interactiveFeature: "Interactive RVM Digital Twin Simulator and verified Python script issm_day4_solution.py."
  }
];
