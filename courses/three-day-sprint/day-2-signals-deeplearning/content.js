// Day 2 Content: Signal Processing + Deep Learning
// Synthesizes Course Days 2, 6, and 7, plus Signal Transformations from Day 3

window.DAY2_SIGNALS_DEEPLEARNING_CONTENT = {
  id: "day-2-signals-deeplearning",
  title: "Day 2: Signal Processing + Deep Learning",
  author: "NUS-ISS Masterclass Senior Faculty",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Unified Dependency Map — Physical Sensing to Deep Representations",
      subtitle: "From Continuous Sensor Voltages to Deep Convolutional and Recurrent Latent Features",
      badge: "Sensory to Deep Architecture",
      content: `
        <div class="lesson-card hero-card mb-4">
          <div class="card-icon"><i data-lucide="activity"></i></div>
          <div class="card-body">
            <h3>Day 2 Synthesis: Signal Processing + Deep Learning</h3>
            <p class="lead-text">
              Welcome to <strong>Day 2 of your Accelerated 3-Day Sprint</strong>. Today unites the continuous physical world of sensor acquisition with the representation power of deep neural architectures:
            </p>
            <div class="quote-box">
              <em>"Sensors transduce physics into analog voltages; the Nyquist theorem dictates ADC digitization; Wavelets and STFT resolve time-frequency uncertainty; Convolutions exploit local 2D spatial translation equivariance; and LSTMs maintain linear gradient highways across temporal sequences."</em>
              <div class="quote-author">— NUS ISS Sensory-to-Deep Pipeline</div>
            </div>
          </div>
        </div>

        <div class="grid-3-col mb-4">
          <div class="lesson-card">
            <h4><i data-lucide="disc"></i> 1. Signals & Sampling</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Nyquist sampling ($f_s > 2 f_{\\max}$), spectral aliasing and folding frequency ($f_N = f_s/2$), hardware anti-aliasing filters, arPLS rubber-band baseline correction, and DTW elastic alignment.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="sliders"></i> 2. Time-Frequency Transforms</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              The Fourier Paradox (time-blind global spectra), Heisenberg-Gabor uncertainty trade-offs in STFT, and 1D/2D Haar Wavelet Multi-Resolution Analysis (LL, LH, HL, HH energy compaction).
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="cpu"></i> 3. Deep Learning & Temporal Memory</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Backpropagation calculus, Sigmoid saturation vs ReLU, 2D CNN parameter counting (GAP vs Flatten redesign PRS Q2a), LSTM constant error carousels, and unsupervised anomaly autoencoders.
            </p>
          </div>
        </div>

        <div class="lesson-card mb-4" style="background:var(--bg-secondary); border-left:4px solid var(--accent-primary);">
          <h4 style="margin-top:0;"><i data-lucide="clock"></i> Suggested 5–6 Hour Study Strategy for Day 2</h4>
          <ol style="font-size:0.9rem; line-height:1.6; margin-bottom:0;">
            <li><strong>Hour 1 (Sampling & Alignment):</strong> Study Nyquist aliasing formulas, arPLS asymmetric least squares, and DTW in Level 1.</li>
            <li><strong>Hour 2 (Transforms & Wavelets):</strong> Master STFT spectrogram windowing and 2D Haar subband decomposition in Level 2.</li>
            <li><strong>Hour 3 (Backprop & Activations):</strong> Deconstruct multi-layer gradient flow and the vanishing gradient problem in Level 3.</li>
            <li><strong>Hour 4 (CNN Design & Parameter Math):</strong> Master the PRS Q2a CNN redesign (saving 97% parameters with GAP) in Level 4.</li>
            <li><strong>Hour 5 (LSTMs & Autoencoders):</strong> Derive the LSTM cell state gradient highway and autoencoder anomaly thresholding in Level 5.</li>
            <li><strong>Hour 6 (Revision & Quizzes):</strong> Complete the 10 Slide Mastery Quizzes, work through the 5 post-quiz exam questions, and ask any questions in the Doubt Resolver!</li>
          </ol>
        </div>
      `
    },
    {
      id: "level-1",
      title: "Level 1: Physical Signal Acquisition & Preprocessing (Nyquist, arPLS & DTW)",
      subtitle: "Sampling Theorem, Folding Frequencies, Rubber-Band Baseline Denoising & Elastic DTW",
      badge: "Sensory Physics & Calibration",
      content: `
        <div class="lesson-card mb-4">
          <h3>The Nyquist-Shannon Sampling Theorem & Aliasing</h3>
          <p>
            To perfectly reconstruct a continuous-time signal from discrete samples, the sampling frequency $f_s$ must exceed twice the maximum frequency component $f_{\\max}$:
          </p>
          $$\\mathbf{f_s > 2 f_{\\max}, \\quad f_N = \\frac{f_s}{2}}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            If an input contains frequencies $f > f_N$, they fold across the Nyquist frequency $f_N$, appearing as lower-frequency <strong>ghost signals</strong>:
            $$f_{\\text{alias}} = |f - k \\cdot f_s|$$
            <strong>Anti-Aliasing Filter:</strong> Must be an analog low-pass filter placed <em>strictly before the ADC</em>. Once digitized, aliased ghost frequencies cannot be separated by digital software.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Baseline Correction: Asymmetric Reweighted Penalized Least Squares (arPLS)</h3>
          <p>
            Sensor baseline drift (caused by temperature, movement, or battery discharge) distorts peak heights. Standard polynomial fitting gets dragged upwards by peaks.
          </p>
          $$\\min_{\\mathbf{z}} \\sum_{i=1}^N w_i (x_i - z_i)^2 + \\lambda \\sum_{i=2}^{N-1} (z_{i-1} - 2z_i + z_{i+1})^2$$
          <p style="font-size:0.88rem; line-height:1.55;">
            <strong>The Rubber-Band Trick:</strong> arPLS dynamically updates weights $w_i$:
            $$w_i = \\begin{cases} 1, & \\text{if } x_i \\le z_i \\quad (\\text{baseline valleys}) \\\\ \\approx 0, & \\text{if } x_i > z_i \\quad (\\text{signal peaks}) \\end{cases}$$
            The fitted curve acts like a rubber band pulled taut underneath the peaks, removing drift without flattening true signal features.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Dynamic Time Warping (DTW)</h3>
          <p>
            Standard Euclidean distance fails when temporal signals are stretched or phase-shifted. DTW computes non-linear elastic alignment via dynamic programming:
          </p>
          $$\\mathbf{D(i, j) = d(x_i, y_j) + \\min\\left(D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1)\\right)}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            The <strong>Sakoe-Chiba band</strong> ($|i - j| \\le w$) bounds the warping window, preventing pathological warping (e.g. matching 1ms to 5s) and slashing complexity to $O(N w)$.
          </p>
        </div>
      `
    },
    {
      id: "level-2",
      title: "Level 2: Frequency & Multi-Resolution Transforms (STFT & Wavelets)",
      subtitle: "The Fourier Paradox, Gabor Uncertainty & 2D Haar Energy Compaction",
      badge: "Spectral & Spatial Multi-Resolution",
      content: `
        <div class="lesson-card mb-4">
          <h3>The Fourier Paradox & Short-Time Fourier Transform (STFT)</h3>
          <p>
            The continuous Fourier Transform integrates over all time ($-\\infty$ to $+\\infty$), telling you WHAT frequencies exist globally, but has <strong>zero time localization</strong> (cannot tell WHEN a transient frequency burst occurred).
          </p>
          $$\\text{STFT}(t, \\omega) = \\int_{-\\infty}^{\\infty} x(\\tau) w(\\tau - t) e^{-j\\omega \\tau} d\\tau$$
          <div style="background:var(--bg-secondary); border-left:3px solid #f59e0b; padding:12px; border-radius:6px; margin:12px 0;">
            <strong>Heisenberg-Gabor Time-Frequency Uncertainty:</strong>
            $$\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$$
            Narrow time window $w(t)$ gives sharp time resolution but blurry frequency resolution. Wide time window gives sharp frequency bins but blurry temporal onset.
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Discrete Wavelet Transform (DWT): Multi-Resolution Analysis</h3>
          <p>
            Wavelets overcome STFT's fixed window by using dyadic scaling: high frequencies are analyzed with narrow time windows, and low frequencies are analyzed with wide time windows.
          </p>
          $$\\text{Approximation: } A_1 = \\frac{x_1 + x_2}{\\sqrt{2}}, \\quad \\text{Detail: } D_1 = \\frac{x_1 - x_2}{\\sqrt{2}}$$
          <p>
            In <strong>2D Wavelet Decomposition</strong> (sensory images), filtering rows and columns yields 4 subbands:
          </p>
          <div class="grid-2-col mt-2">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>LL (Low-Low):</strong> Smooth low-frequency approximation containing over 90% of signal energy.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>LH (Low-High):</strong> Horizontal high-pass; captures vertical edges and boundaries.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>HL (High-Low):</strong> Vertical high-pass; captures horizontal edges and stripes.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>HH (High-High):</strong> High-pass in both directions; captures diagonal corners, textures, and sensor noise.
            </div>
          </div>
        </div>
      `
    },
    {
      id: "level-3",
      title: "Level 3: Neural Foundations & Backpropagation Calculus",
      subtitle: "Gradient Descent, Vanishing Gradients & Activation Saturation (ReLU vs Sigmoid)",
      badge: "Deep Learning Foundations",
      content: `
        <div class="lesson-card mb-4">
          <h3>Backpropagation Calculus: The Chain Rule of Gradient Flow</h3>
          <p>
            For a feedforward neural network with loss function $\\mathcal{L}$, the error $\\boldsymbol{\\delta}^{(l)}$ at layer $l$ is backpropagated as:
          </p>
          $$\\boldsymbol{\\delta}^{(l)} = \\left( (W^{(l+1)})^T \\boldsymbol{\\delta}^{(l+1)} \\right) \\odot f'(\\mathbf{z}^{(l)})$$
          <p>
            The gradient with respect to weights is:
            $$\\frac{\\partial \\mathcal{L}}{\\partial W^{(l)}} = \\boldsymbol{\\delta}^{(l)} (\\mathbf{a}^{(l-1)})^T$$
          </p>
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin:12px 0;">
            <strong style="color:#ef4444;">The Sigmoid Vanishing Gradient Disaster:</strong>
            $$\\sigma'(z) = \\sigma(z)(1 - \\sigma(z)) \\le 0.25$$
            Multiplying $(0.25)^L$ across 8 layers shrinks gradients by a factor of $0.000015$, freezing weights in early layers! ReLU ($f'(z) = 1$ for $z > 0$) provides constant gradient flow without saturation.
          </div>
        </div>
      `
    },
    {
      id: "level-4",
      title: "Level 4: 2D Spatial Convolutions & Architecture Design (PRS Q2a)",
      subtitle: "Filter Channels, Stride, Padding, Parameter Counting & GAP Redesign",
      badge: "Computer Vision & Sizing",
      content: `
        <div class="lesson-card mb-4">
          <h3>2D Convolutional Mathematics & Parameter Counting</h3>
          $$\\mathbf{O = \\left\\lfloor \\frac{W - K + 2P}{S} \\right\\rfloor + 1}$$
          $$\\mathbf{\\text{Conv2D Trainable Params} = (K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}}$$
          $$\\mathbf{\\text{Dense Trainable Params} = (N_{\\text{in}} + 1) \\times N_{\\text{out}}}$$
          <ul>
            <li>MaxPooling2D and GlobalAveragePooling2D have <strong>0 trainable parameters</strong>.</li>
            <li>'Same' padding with stride 1 preserves input dimensions ($O = W$).</li>
          </ul>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #f59e0b;">
          <h3 style="color:#f59e0b; margin-top:0;"><i data-lucide="shield-alert"></i> The 8-Mark PRS Q2a Exam Masterclass Redesign</h3>
          <p style="font-size:0.88rem; line-height:1.55;">
            In Table 4 of the Nov 2026 PRS paper, flattening a $7 \\times 7 \\times 192 = 9408$ feature map into Dense(256) created $(9408+1) \\times 256 = 2,408,704$ parameters (93.4% of all weights!), causing extreme overfitting on 5,000 images.<br>
            <strong>Official Redesign:</strong> Replace <code>Flatten</code> with <code>GlobalAveragePooling2D</code> (averages $7 \\times 7$ to 192 values with 0 weights). Dense(256) now requires only $(192+1) \\times 256 = 49,408$ weights. Split the 918-class Cartesian output into 3 parallel heads (Brand: 18, Type: 17, Value: 3). Total parameters drop from 2.57M to 69k — a <strong>97.3% reduction</strong>!
          </p>
        </div>
      `
    },
    {
      id: "level-5",
      title: "Level 5: Sequential Memory, LSTMs & Temporal Autoencoders",
      subtitle: "Constant Error Carousels, Gating Equations & Unsupervised Anomaly Detection",
      badge: "Temporal & Sequence Intelligence",
      content: `
        <div class="lesson-card mb-4">
          <h3>The Long Short-Term Memory (LSTM) Architecture</h3>
          <p>
            An LSTM maintains an additive internal cell state $\\mathbf{c}_t$ regulated by three sigmoid gating valves:
          </p>
          $$\\begin{aligned}
          \\mathbf{f}_t &= \\sigma(W_f \\mathbf{x}_t + U_f \\mathbf{h}_{t-1} + \\mathbf{b}_f) \\quad &(\\text{Forget Gate}) \\\\
          \\mathbf{i}_t &= \\sigma(W_i \\mathbf{x}_t + U_i \\mathbf{h}_{t-1} + \\mathbf{b}_i) \\quad &(\\text{Input Gate}) \\\\
          \\mathbf{c}_t &= \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tanh(W_c \\mathbf{x}_t + U_c \\mathbf{h}_{t-1} + \\mathbf{b}_c) \\quad &(\\text{Cell State Highway}) \\\\
          \\mathbf{o}_t &= \\sigma(W_o \\mathbf{x}_t + U_o \\mathbf{h}_{t-1} + \\mathbf{b}_o) \\quad &(\\text{Output Gate}) \\\\
          \\mathbf{h}_t &= \\mathbf{o}_t \\odot \\tanh(\\mathbf{c}_t) \\quad &(\\text{Hidden State})
          \\end{aligned}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            Because $\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t$, setting $\\mathbf{f}_t \\approx 1$ preserves the gradient linearly through time with zero exponential decay.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Unsupervised Anomaly Autoencoders (PRS Q2c)</h3>
          <p>
            In predictive maintenance with 3,000 normal sequences and only 2 failures, supervised models achieve 99.93% accuracy by predicting 'Normal' all the time, missing all breakdowns!
          </p>
          $$e(\\mathbf{x}) = \\frac{1}{D} \\sum_{j=1}^D (x_j - \\hat{x}_j)^2 > \\tau$$
          <p style="font-size:0.88rem; line-height:1.55;">
            We train an Autoencoder exclusively on normal sequences. Its low-dimensional bottleneck learns normal machine vibration dynamics. When an anomalous crack or imbalance occurs, the network cannot reconstruct it, causing reconstruction error $e(\\mathbf{x})$ to spike past threshold $\\tau$.
          </p>
        </div>
      `
    },
    {
      id: "level-6",
      title: "Level 6: Python Code Labs & Complete Mathematical Workout",
      subtitle: "Verified PyTorch Code Labs & Step-by-Step Derivations",
      badge: "Hands-on Code & Proofs",
      content: `
        <div class="lesson-card mb-4">
          <h3>Hands-on Python Implementation: PyTorch Conv2D, GAP & LSTM</h3>
          <div class="code-tab-container">
            <div id="code-content-area-d2" style="background:#1e1e1e; border-radius:8px; padding:16px; font-family:'JetBrains Mono', monospace; font-size:0.85rem; color:#d4d4d4; overflow-x:auto;">
<pre><code>import torch
import torch.nn as nn

class RedesignedVisionBackbone(nn.Module):
    def __init__(self):
        super().__init__()
        # 3 Conv blocks
        self.features = nn.Sequential(
            nn.Conv2d(3, 64, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2, 2),
            nn.Conv2d(128, 192, kernel_size=3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(4, 4), # Output: (192, 7, 7)
            nn.AdaptiveAvgPool2d((1, 1)) # Global Average Pooling: (192, 1, 1) -> 0 params!
        )
        self.fc_shared = nn.Linear(192, 256) # Only (192+1)*256 = 49,408 params!
        
        # 3 Multi-Task Heads
        self.head_brand = nn.Linear(256, 18)
        self.head_type = nn.Linear(256, 17)
        self.head_value = nn.Linear(256, 3)

    def forward(self, x):
        x = self.features(x)
        x = torch.flatten(x, 1)
        x = torch.relu(self.fc_shared(x))
        return self.head_brand(x), self.head_type(x), self.head_value(x)
</code></pre>
            </div>
          </div>
        </div>

        <div class="lesson-card mb-4" style="border-left:4px solid #10b981;">
          <h3 style="color:#10b981; margin-top:0;"><i data-lucide="award"></i> Level Complete: Proceed to Day 2 Quizzes & Exam Questions!</h3>
          <p style="font-size:0.9rem; margin-bottom:14px;">
            Test your grasp of Nyquist aliasing, DTW matrix costs, CNN parameter counting, and LSTM error carousels with the slide quizzes, followed by authentic exam scenarios and the Q&A Assistant.
          </p>
          <button class="btn btn-primary" onclick="app.loadLevel('quizzes')">
            <i data-lucide="play"></i> Proceed to Day 2 Quizzes & Exam Questions
          </button>
        </div>
      `
    }
  ]
};
