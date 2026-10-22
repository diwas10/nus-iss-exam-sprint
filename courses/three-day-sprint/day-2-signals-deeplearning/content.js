// Day 2 Content: Signal Processing + Deep Learning
// Deepened & Expanded Edition: Rigorous Sampling, Transforms (2D Wavelets, STFT), CNNs (Receptive Field, Dilated, Depthwise, ResNet, GAP), RNN/LSTM (BPTT, Spectral Radius, CEC), & Autoencoders (Anomaly MSE, VAE ELBO, Reparameterization)

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
              <em>"Sensors transduce continuous physical energy into analog voltages; the Nyquist theorem dictates ADC digitization; Wavelets and STFT resolve time-frequency uncertainty; Convolutions exploit local 2D spatial translation equivariance; LSTMs maintain linear gradient highways across temporal sequences; and Autoencoders compress healthy sensor manifolds for anomaly detection and generative synthesis."</em>
              <div class="quote-author">— NUS ISS Sensory-to-Deep Pipeline</div>
            </div>
          </div>
        </div>

        <div class="grid-3-col mb-4">
          <div class="lesson-card">
            <h4><i data-lucide="disc"></i> 1. Signals & Sampling</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              Nyquist sampling ($f_s > 2 f_{\\max}$), spectral aliasing and folding frequency ($f_N = f_s/2$), analog anti-aliasing filters, arPLS rubber-band baseline correction, and DTW elastic alignment.
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="sliders"></i> 2. Time-Frequency Transforms</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              The Fourier Paradox, Heisenberg-Gabor uncertainty trade-offs in STFT, and 1D/2D Haar Wavelet Multi-Resolution Analysis (LL, LH, HL, HH energy compaction and Parseval conservation).
            </p>
          </div>
          <div class="lesson-card">
            <h4><i data-lucide="cpu"></i> 3. Deep Learning, Memory & VAEs</h4>
            <p style="font-size:0.88rem; line-height:1.55;">
              CNN receptive fields, dilated and depthwise convs, ResNet identity highways, GAP vs Flatten redesign (PRS Q2a), LSTM Constant Error Carousels, and Generative VAEs with the reparameterization trick.
            </p>
          </div>
        </div>

        <div class="lesson-card mb-4" style="background:var(--bg-secondary); border-left:4px solid var(--accent-primary);">
          <h4 style="margin-top:0;"><i data-lucide="clock"></i> Suggested 5–6 Hour Study Strategy for Day 2</h4>
          <ol style="font-size:0.9rem; line-height:1.6; margin-bottom:0;">
            <li><strong>Hour 1 (Sampling & Alignment):</strong> Study Nyquist aliasing formulas, arPLS asymmetric least squares, and DTW in Level 1.</li>
            <li><strong>Hour 2 (Transforms & Wavelets):</strong> Master STFT spectrogram windowing and 2D Haar subband decomposition in Level 2.</li>
            <li><strong>Hour 3 (Backprop & Activations):</strong> Deconstruct multi-layer gradient flow and the vanishing gradient problem in Level 3.</li>
            <li><strong>Hour 4 (Deep CNN Architectures):</strong> Master receptive fields, depthwise separable convs, ResNet skip connections, and the PRS Q2a CNN redesign in Level 4.</li>
            <li><strong>Hour 5 (LSTMs & Generative Autoencoders):</strong> Derive BPTT spectral radius, the LSTM cell state gradient highway, anomaly MSE thresholding, and VAE reparameterization in Level 5.</li>
            <li><strong>Hour 6 (Revision & Quizzes):</strong> Complete the 10 Slide Mastery Quizzes, work through the 6 post-quiz exam questions, and ask any questions in the Doubt Resolver!</li>
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
          <h3>The Nyquist-Shannon Sampling Theorem & Aliasing Mathematics</h3>
          <p>
            An Analog-to-Digital Converter (ADC) samples continuous-time voltage $x(t)$ at uniform interval $T_s = 1/f_s$. To guarantee that $x(t)$ can be reconstructed without loss of information:
          </p>
          $$\\mathbf{f_s > 2 f_{\\max}, \\quad f_N = \\frac{f_s}{2}}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            Where $f_N$ is the <strong>Nyquist Folding Frequency</strong>. If an analog input contains frequency components $f > f_N$, they fold across $f_N$ into lower baseband frequencies as <strong>ghost signals</strong>:
          </p>
          $$\\mathbf{f_{\\text{alias}} = |f - k \\cdot f_s| \\quad \\text{for } k \\in \\mathbb{Z}}$$
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin:12px 0;">
            <strong style="color:#ef4444;"><i data-lucide="shield-alert"></i> Hardware Rule: The Analog Anti-Aliasing Filter (AAF):</strong>
            Aliasing occurs <em>during the physical ADC sampling process</em>. Once sampled, aliased ghost frequencies collide into valid frequencies and become mathematically indistinguishable. Therefore, an <strong>analog low-pass filter</strong> with cutoff $f_c \\le f_N$ must be installed <strong>strictly BEFORE the ADC</strong>. Digital software filtering in Python/MATLAB cannot un-mix aliased frequencies post-sampling!
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Baseline Correction: Asymmetric Reweighted Penalized Least Squares (arPLS)</h3>
          <p>
            Sensory signals (spectroscopy, ECG, PPG) suffer from low-frequency baseline drift due to temperature fluctuations, electrode movement, or battery discharge. Standard polynomial regression gets pulled upwards by signal peaks, distorting peak amplitudes.
          </p>
          $$\\min_{\\mathbf{z}} \\sum_{i=1}^N w_i (x_i - z_i)^2 + \\lambda \\sum_{i=2}^{N-1} (z_{i-1} - 2z_i + z_{i+1})^2$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>1. Fidelity vs Roughness Penalty:</strong>
              <ul>
                <li>First term penalizes deviation between raw signal $x_i$ and baseline $z_i$.</li>
                <li>Second term penalizes second-order discrete curvature $(\\Delta^2 z_i)^2$, controlled by smoothness parameter $\\lambda$.</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>2. Asymmetric Sigmoidal Weighting:</strong>
              $$w_i = \\frac{1}{1 + \\exp\\left( \\frac{2(x_i - z_i)}{d} \\right)}$$
              <ul>
                <li>If $x_i < z_i$ (baseline valleys): $w_i \\to 1.0$ (heavily fits the curve).</li>
                <li>If $x_i > z_i$ (signal peaks): $w_i \\to 0.0$ (completely ignores peaks).</li>
              </ul>
            </div>
          </div>
          <p style="font-size:0.85rem; line-height:1.55; margin-top:10px;">
            The fitted curve acts like a <strong>rubber band pulled taut underneath the peaks</strong>, following the baseline contour without flattening genuine peak features.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Dynamic Time Warping (DTW): Elastic Sequence Alignment</h3>
          <p>
            Standard Euclidean distance fails when two sensory time series have different speeds, phase shifts, or localized temporal dilations. DTW aligns sequences $X = [x_1, \\dots, x_N]$ and $Y = [y_1, \\dots, y_M]$ using dynamic programming:
          </p>
          $$\\mathbf{D(i, j) = d(x_i, y_j) + \\min\\left( D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1) \\right)}$$
          <div class="grid-3-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>1. Step Patterns:</strong>
              <ul style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li>$(i-1, j-1)$: Diagonal step (simultaneous advance).</li>
                <li>$(i-1, j)$: Vertical step (dilation in $Y$).</li>
                <li>$(i, j-1)$: Horizontal step (dilation in $X$).</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>2. Boundary Conditions:</strong>
              <ul style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li>$D(0, 0) = 0$</li>
                <li>$D(i, 0) = \\infty, \\; D(0, j) = \\infty$</li>
                <li>Endpoint alignment: $(1, 1)$ to $(N, M)$.</li>
              </ul>
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>3. Sakoe-Chiba Constraint:</strong>
              <ul style="font-size:0.82rem; margin:4px 0 0 0; padding-left:16px;">
                <li>Enforces $|i - j| \\le w$.</li>
                <li>Prevents pathological warping (e.g. matching 1ms to 5s).</li>
                <li>Reduces time complexity from $O(NM)$ to $O(N w)$.</li>
              </ul>
            </div>
          </div>
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
            <strong style="color:#f59e0b;">Heisenberg-Gabor Time-Frequency Uncertainty Theorem:</strong>
            $$\\mathbf{\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}}$$
            <ul>
              <li><strong>Narrow Window $w(t)$:</strong> Excellent time resolution $\\Delta t$, but broad/blurry frequency resolution $\\Delta f$.</li>
              <li><strong>Wide Window $w(t)$:</strong> Sharp frequency resolution $\\Delta f$, but blurry temporal onset $\\Delta t$.</li>
              <li>Because STFT uses a fixed window length across all frequencies, it cannot simultaneously capture high-frequency transients and low-frequency oscillations.</li>
            </ul>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Discrete Wavelet Transform (DWT): Multi-Resolution Analysis (MRA)</h3>
          <p>
            Wavelets overcome the fixed-window limitation using dyadic scaling: high frequencies are analyzed with narrow time windows, and low frequencies are analyzed with wide time windows:
          </p>
          $$\\text{Approximation: } A_1 = \\frac{x_1 + x_2}{\\sqrt{2}}, \\quad \\text{Detail: } D_1 = \\frac{x_1 - x_2}{\\sqrt{2}}$$
          <div style="background:var(--bg-secondary); border-left:3px solid #10b981; padding:12px; border-radius:6px; margin:12px 0;">
            <strong style="color:#10b981;">Parseval's Theorem of Energy Conservation:</strong>
            $$\\sum_{i=1}^N x_i^2 = \\sum_{k} A_k^2 + \\sum_{k} D_k^2$$
            Orthogonal wavelet decomposition rotates the coordinate basis without losing a single joule of signal energy!
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>2D Wavelet Decomposition (Image & Sensory Matrix Processing)</h3>
          <p>
            In 2D signal processing (sensory images, spatial vibration arrays), applying low-pass ($L$) and high-pass ($H$) filters sequentially along rows and columns decomposes the input into <strong>4 distinct spatial subbands</strong>:
          </p>
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #3b82f6;">
              <strong style="color:#60a5fa;">LL Subband (Low-Low Approximation)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                Low-pass on rows AND low-pass on columns. Contains the smooth, global structural approximation of the image. Retains <strong>over 90% of total signal energy</strong>.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:var(--text-primary);">LH Subband (Horizontal Detail)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                Low-pass on rows, high-pass on columns. Highlights <strong>vertical edges and vertical boundary transitions</strong>.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <strong style="color:var(--text-primary);">HL Subband (Vertical Detail)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                High-pass on rows, low-pass on columns. Highlights <strong>horizontal edges, stripes, and baseline shifts</strong>.
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:3px solid #ef4444;">
              <strong style="color:#f87171;">HH Subband (Diagonal Detail & Noise)</strong>
              <p style="font-size:0.85rem; margin:6px 0 0 0; line-height:1.5;">
                High-pass on rows AND high-pass on columns. Isolates <strong>diagonal textures, point corners, and high-frequency sensor noise</strong>.
              </p>
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
            Multiplying $(0.25)^L$ across 8 layers shrinks gradients by a factor of $(0.25)^8 = 0.000015$, freezing weights in early layers! ReLU ($f'(z) = 1$ for $z > 0$) provides constant gradient flow without saturation.
          </div>
        </div>
      `
    },
    {
      id: "level-4",
      title: "Level 4: Deep 2D Convolutions, Sizing Math & Architecture Design (PRS Q2a)",
      subtitle: "Receptive Fields, Dilated Convs, Depthwise Separable, ResNet Identity & GAP Redesign",
      badge: "Computer Vision & Advanced Sizing",
      content: `
        <div class="lesson-card mb-4">
          <h3>2D Convolutional Spatial Dimensions & Parameter Counting Formulas</h3>
          $$\\mathbf{O = \\left\\lfloor \\frac{W - K + 2P}{S} \\right\\rfloor + 1}$$
          $$\\mathbf{\\text{Conv2D Trainable Params} = (K_h \\times K_w \\times C_{\\text{in}} + 1) \\times C_{\\text{out}}}$$
          $$\\mathbf{\\text{Dense Trainable Params} = (N_{\\text{in}} + 1) \\times N_{\\text{out}}}$$
          <ul>
            <li>MaxPooling2D, AveragePooling2D, and GlobalAveragePooling2D have <strong>strictly 0 trainable parameters</strong>.</li>
            <li>Batch Normalization layer has $2 \\times C$ trainable parameters (learnable scale $\\gamma$ and shift $\\beta$) plus $2 \\times C$ non-trainable running statistics (running mean and variance).</li>
          </ul>
        </div>

        <div class="lesson-card mb-4">
          <h3>Receptive Field Arithmetic & Dilated (Atrous) Convolutions</h3>
          <p>
            The Receptive Field (RF) of a neuron is the spatial region in the input image that influences its activation:
          </p>
          $$\\mathbf{RF_l = RF_{l-1} + (K_l - 1) \\cdot J_{l-1}, \\quad J_l = J_{l-1} \\cdot S_l}$$
          <p style="font-size:0.85rem; line-height:1.55;">
            Where $J_l$ is the cumulative stride ('jump'). Stacking two $3 \\times 3$ convolutions gives an effective receptive field of $3 + (3 - 1) = 5$, with $2 \\times (3^2) = 18$ parameters, compared to a single $5 \\times 5$ conv with $25$ parameters (saving 28% weights while introducing an extra non-linearity!).
          </p>
          <div style="background:var(--bg-secondary); border-left:3px solid #3b82f6; padding:12px; border-radius:6px; margin-top:10px;">
            <strong style="color:#60a5fa;">Dilated Convolutions (Atrous Convolutions):</strong>
            By inserting $d - 1$ zeros between kernel taps, the effective kernel size expands to:
            $$K' = K + (K - 1)(d - 1)$$
            A $3 \\times 3$ kernel with dilation rate $d = 2$ covers a $5 \\times 5$ spatial area with <strong>zero extra parameters</strong>! Essential for dense pixel segmentation.
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>Depthwise Separable Convolutions & ResNet Identity Highways</h3>
          <div class="grid-2-col mt-2">
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <h4 style="margin:0 0 6px 0; color:#34d399;">Depthwise Separable (MobileNet)</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                Splits standard convolution into two stages:
                <ol style="padding-left:16px; margin:4px 0 0 0;">
                  <li><strong>Depthwise Conv:</strong> Applies 1 filter per input channel ($K \\times K \\times C_{\\text{in}}$ weights).</li>
                  <li><strong>Pointwise Conv:</strong> $1 \\times 1$ conv mixing channels ($1 \\times 1 \\times C_{\\text{in}} \\times C_{\\text{out}}$ weights).</li>
                </ol>
                Computation reduction ratio:
                $$\\frac{K^2 C_{\\text{in}} + C_{\\text{in}} C_{\\text{out}}}{K^2 C_{\\text{in}} C_{\\text{out}}} = \\mathbf{\\frac{1}{C_{\\text{out}}} + \\frac{1}{K^2} \\approx \\frac{1}{9}}$$
                Slashes computational cost by <strong>8 to 9 times</strong> with negligible accuracy loss!
              </p>
            </div>
            <div style="background:var(--bg-secondary); padding:14px; border-radius:8px;">
              <h4 style="margin:0 0 6px 0; color:#60a5fa;">ResNet Residual Identity Shortcuts</h4>
              <p style="font-size:0.85rem; line-height:1.5;">
                Instead of fitting underlying mapping $\\mathcal{H}(\\mathbf{x})$, ResNet fits residual $\\mathcal{F}(\\mathbf{x}) = \\mathcal{H}(\\mathbf{x}) - \\mathbf{x}$:
                $$\\mathbf{y} = \\mathcal{F}(\\mathbf{x}, \\{W_i\\}) + \\mathbf{x}$$
                Gradient flow during backpropagation:
                $$\\frac{\\partial \\mathcal{E}}{\\partial \\mathbf{x}} = \\frac{\\partial \\mathcal{E}}{\\partial \\mathbf{y}} \\left( \\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}} + \\mathbf{I} \\right)$$
                The additive identity term $\\mathbf{I}$ guarantees an unobstructed gradient superhighway directly to early layers, completely immunizing 100+ layer networks against vanishing gradients!
              </p>
            </div>
          </div>
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
      title: "Level 5: Sequential Memory, LSTMs & Generative Autoencoders",
      subtitle: "BPTT Spectral Radius, Constant Error Carousels, Anomaly MSE Calibration & VAE Reparameterization",
      badge: "Temporal & Latent Intelligence",
      content: `
        <div class="lesson-card mb-4">
          <h3>Recurrent Networks & The Spectral Radius Vanishing Gradient Proof</h3>
          <p>
            In a vanilla RNN, hidden state $h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b)$. Backpropagation Through Time (BPTT) requires computing:
          </p>
          $$\\frac{\\partial h_T}{\\partial h_t} = \\prod_{k=t+1}^T \\frac{\\partial h_k}{\\partial h_{k-1}} = \\prod_{k=t+1}^T \\text{diag}\\left( 1 - \\tanh^2(\\cdot) \\right) W_{hh}^T$$
          <div style="background:rgba(239,68,68,0.1); border-left:3px solid #ef4444; padding:12px; border-radius:6px; margin:12px 0; font-size:0.85rem;">
            <strong>Spectral Radius Condition:</strong> Let $\\rho(W_{hh})$ be the largest absolute eigenvalue of $W_{hh}$.
            <ul>
              <li>If $\\rho(W_{hh}) < 1$: Since $\\text{diag}(1 - \\tanh^2) \\le 1$, the product shrinks exponentially to zero as $T - t \\to \\infty$ $\\implies$ <strong>Vanishing Gradient</strong> (inability to learn long-term dependencies).</li>
              <li>If $\\rho(W_{hh}) > 1$: The product explodes exponentially to $\\pm \\infty$ $\\implies$ <strong>Exploding Gradient</strong> (leads to NaN weights, managed via Gradient Clipping).</li>
            </ul>
          </div>
        </div>

        <div class="lesson-card mb-4">
          <h3>The Long Short-Term Memory (LSTM) Constant Error Carousel (CEC)</h3>
          <p>
            An LSTM maintains an internal linear cell state $\\mathbf{c}_t$ regulated by three multiplicative gating valves:
          </p>
          $$\\begin{aligned}
          \\mathbf{f}_t &= \\sigma(W_f \\mathbf{x}_t + U_f \\mathbf{h}_{t-1} + \\mathbf{b}_f) \\quad &(\\text{Forget Gate}) \\\\
          \\mathbf{i}_t &= \\sigma(W_i \\mathbf{x}_t + U_i \\mathbf{h}_{t-1} + \\mathbf{b}_i) \\quad &(\\text{Input Gate}) \\\\
          \\tilde{\\mathbf{c}}_t &= \\tanh(W_c \\mathbf{x}_t + U_c \\mathbf{h}_{t-1} + \\mathbf{b}_c) \\quad &(\\text{Candidate State}) \\\\
          \\mathbf{c}_t &= \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t \\quad &(\\text{Additive Cell State Highway}) \\\\
          \\mathbf{o}_t &= \\sigma(W_o \\mathbf{x}_t + U_o \\mathbf{h}_{t-1} + \\mathbf{b}_o) \\quad &(\\text{Output Gate}) \\\\
          \\mathbf{h}_t &= \\mathbf{o}_t \\odot \\tanh(\\mathbf{c}_t) \\quad &(\\text{Hidden State})
          \\end{aligned}$$
          <p style="font-size:0.88rem; line-height:1.55;">
            <strong>Why LSTM Solves Vanishing Gradient:</strong> Taking the derivative along the cell state:
            $$\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t$$
            When the network learns to set forget gate $\\mathbf{f}_t \\approx 1$, the gradient passes through unchanged (multiplier = 1.0). The error carousel preserves gradient signals across hundreds of time steps with <strong>zero exponential decay</strong>!
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Unsupervised Anomaly Autoencoders (PRS Q2c)</h3>
          <p>
            In industrial predictive maintenance with 3,000 normal sequences and only 2 failures, supervised models achieve 99.93% accuracy by predicting 'Normal' all the time, missing all breakdowns!
          </p>
          $$e(\\mathbf{x}) = \\frac{1}{D} \\sum_{j=1}^D (x_j - \\hat{x}_j)^2 > \\tau$$
          <p style="font-size:0.88rem; line-height:1.55;">
            We train an undercomplete Autoencoder exclusively on healthy operational data. Its low-dimensional bottleneck ($d \\ll D$) learns the compact manifold of normal machine dynamics. When an anomalous crack or imbalance occurs, the network cannot reconstruct it, causing reconstruction error $e(\\mathbf{x})$ to spike past statistical threshold $\\tau = \\mu_e + 3\\sigma_e$.
          </p>
        </div>

        <div class="lesson-card mb-4">
          <h3>Variational Autoencoders (VAEs): The Evidence Lower Bound & Reparameterization Trick</h3>
          <p>
            Standard autoencoders learn an unconstrained, discontinuous latent space with empty gaps. A <strong>Variational Autoencoder (VAE)</strong> is a generative model that constrains the latent distribution to match a standard Gaussian prior $p(\\mathbf{z}) = \\mathcal{N}(\\mathbf{0}, \\mathbf{I})$:
          </p>
          $$\\mathcal{L}_{\\text{VAE}}(\\theta, \\phi; \\mathbf{x}) = \\mathbb{E}_{q_\\phi(\\mathbf{z} \\mid \\mathbf{x})}\\left[ \\log p_\\theta(\\mathbf{x} \\mid \\mathbf{z}) \\right] - D_{\\text{KL}}\\left( q_\\phi(\\mathbf{z} \\mid \\mathbf{x}) \\parallel p(\\mathbf{z}) \\right)$$
          <div class="grid-2-col mt-3">
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px;">
              <strong>1. Closed-Form Gaussian KL Divergence:</strong>
              $$D_{\\text{KL}} = -\\frac{1}{2} \\sum_{j=1}^d \\left( 1 + \\log(\\sigma_j^2) - \\mu_j^2 - \\sigma_j^2 \\right)$$
              Acts as a regularizer, penalizing the encoder if its latent mean deviates from 0 or variance deviates from 1.
            </div>
            <div style="background:var(--bg-secondary); padding:12px; border-radius:8px; border-left:3px solid #10b981;">
              <strong style="color:#10b981;">2. The Reparameterization Trick:</strong>
              Sampling $\\mathbf{z} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\boldsymbol{\\sigma}^2)$ directly is stochastic and non-differentiable! We reparameterize by isolating randomness:
              $$\\mathbf{z} = \\boldsymbol{\\mu}(\\mathbf{x}) + \\boldsymbol{\\sigma}(\\mathbf{x}) \\odot \\boldsymbol{\\epsilon}, \\quad \\boldsymbol{\\epsilon} \\sim \\mathcal{N}(\\mathbf{0}, \\mathbf{I})$$
              Because $\\boldsymbol{\\epsilon}$ is independent external noise, gradients can backpropagate cleanly through deterministic nodes $\\boldsymbol{\\mu}$ and $\\boldsymbol{\\sigma}$!
            </div>
          </div>
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
