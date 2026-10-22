import os
import json

def make_stage_html(mod_num, title, diagnostic_data, intuitive_html, vis_html, math_html, practice_html, exam_html, summary_html):
    d_q1 = diagnostic_data["q1"]
    d_q2 = diagnostic_data["q2"]
    
    html = f'''
      <div class="lesson-module-container" id="mod-{mod_num}">
        <!-- STAGE 1: DIAGNOSTIC -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge-tech" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">
              Stage 1: Diagnostic (Prior Knowledge Check)
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">2-Minute Diagnostic</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">
            Test your current understanding. If you answer both correctly, take the accelerated revision path!
          </p>
          
          <div class="grid-2-col" style="gap: 12px;">
            <div id="diag-mount-mod-{mod_num}-q1"></div>
            <div id="diag-mount-mod-{mod_num}-q2"></div>
          </div>
        </div>

        <!-- STAGE 2: INTUITIVE EXPLANATION -->
        <div class="lesson-card mb-4">
          <div class="badge-tech mb-2" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
            Stage 2: Intuitive Mental Model
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Why {title} Exists & What It Solves</h3>
          {intuitive_html}
        </div>

        <!-- STAGE 3: INTERACTIVE VISUALIZATION -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-left: 4px solid var(--accent-primary);">
          <div class="badge-tech mb-2" style="background: var(--accent-primary); color: white;">
            Stage 3: Interactive Visual Studio
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Manipulate & Observe Live State</h3>
          {vis_html}
        </div>

        <!-- STAGE 4: MATHEMATICAL FOUNDATIONS -->
        <div class="lesson-card mb-4">
          <div class="badge-tech mb-2" style="background: rgba(168, 85, 247, 0.15); color: #c084fc;">
            Stage 4: Mathematical Foundations & Solved Example
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Rigorous Formulations & Step-by-Step Proof</h3>
          {math_html}
        </div>

        <!-- STAGE 5: INDEPENDENT PRACTICE -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.04);">
          <div class="badge-tech mb-2" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">
            Stage 5: Independent Practice
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Solve Without Looking</h3>
          <div id="prac-mount-mod-{mod_num}"></div>
        </div>

        <!-- STAGE 6: EXAM APPLICATION -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border: 1px solid var(--border-color);">
          <div class="badge-tech mb-2" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">
            Stage 6: Exam Application & Model Answer
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">How NUS-ISS Tests This in Open-Book Exams</h3>
          {exam_html}
        </div>

        <!-- STAGE 7: REVISION SUMMARY -->
        <div class="lesson-card mb-4" style="background: var(--bg-secondary); border-radius: 8px;">
          <div class="badge-tech mb-2" style="background: var(--text-muted); color: white;">
            Stage 7: Rapid Revision Summary
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Key Takeaways, Traps & Comparisons</h3>
          {summary_html}
        </div>
      </div>
    '''
    return html

modules = []

# Mod 1: Signal Foundations
modules.append({
    "id": "mod-1", "num": 1,
    "title": "Signal Foundations: Sensors, ADC, Sampling & Nyquist Aliasing",
    "subtitle": "Continuous to Discrete, Quantization, Nyquist Theorem, Ghost Frequencies & Anti-Aliasing Filters",
    "badge": "PRS (ISSM Day 1)",
    "diag": {
        "q1": {"q": "What is the Nyquist folding frequency for a sensor sampled at fs = 100 Hz?", "options": "A: 100 Hz. B: 50 Hz (fs / 2).", "feedback": "Correct! f_N = fs / 2."},
        "q2": {"q": "Where must an anti-aliasing filter be physically placed?", "options": "A: In software after ADC. B: In hardware as an analog low-pass filter strictly BEFORE the ADC.", "feedback": "Correct! Once aliasing occurs, software cannot distinguish ghost frequencies from real frequencies."}
    },
    "intuitive": """
      <p class="lead-text">Physical phenomena (temperature, pressure, acoustic vibrations) exist as continuous analog voltages. To process them in AI, we must digitize them via an Analog-to-Digital Converter (ADC).</p>
      <p>If we sample too slowly (sampling rate $f_s < 2 f_{\\max}$), high-frequency waves fold across the Nyquist barrier ($f_N = f_s/2$) and disguise themselves as low-frequency 'ghost' waves—a fatal distortion known as <strong>spectral aliasing</strong>.</p>
    """,
    "vis": """
      <div id="nyquist-aliasing-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive Nyquist Sampling & Aliasing Studio</h4>
        <div class="grid-2-col mb-3" style="gap:10px;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">True Analog Frequency: <strong id="nyq-f-val" style="color:#38bdf8;">180 Hz</strong></label>
            <input type="range" id="nyq-f-slider" min="10" max="300" step="5" value="180" oninput="SprintDay2Visualizers.updateNyquist()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">ADC Sampling Rate: <strong id="nyq-fs-val" style="color:#10b981;">100 Hz</strong></label>
            <input type="range" id="nyq-fs-slider" min="50" max="400" step="10" value="100" oninput="SprintDay2Visualizers.updateNyquist()" style="width:100%;">
          </div>
        </div>
        <div id="nyq-output-math" style="background:var(--bg-secondary); padding:12px; border-radius:6px;"></div>
      </div>
    """,
    "math": """
      <p><strong>Nyquist-Shannon Theorem:</strong> $f_s > 2 f_{\\max}, \\quad f_N = \\frac{f_s}{2}$</p>
      <p><strong>Aliasing Ghost Frequency Formula:</strong> $f_{\\text{alias}} = |f - k f_s|, \\quad k = \\text{round}\\left(\\frac{f}{f_s}\\right)$</p>
      <p><strong>Worked Example:</strong> Signal $f = 180\\text{ Hz}$, sampled at $f_s = 100\\text{ Hz}$.</p>
      <ul>
        <li>$f_N = 100 / 2 = 50\\text{ Hz}$. Since $180 > 50$, aliasing occurs!</li>
        <li>$k = \\text{round}(180 / 100) = 2$.</li>
        <li>$f_{\\text{alias}} = |180 - 2(100)| = |180 - 200| = 20\\text{ Hz}$. The machine will see a 20 Hz phantom wave!</li>
      </ul>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A vibration sensor samples at $f_s = 200\\text{ Hz}$. A gear tooth frequency is $f = 350\\text{ Hz}$. Calculate the apparent alias frequency $f_{\\text{alias}}$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m1-ans" placeholder="Alias Hz..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m1-ans').value); if(Math.abs(v - 50.0) < 1.0) alert('Correct! k = round(350/200) = 2. |350 - 400| = 50 Hz.'); else alert('Incorrect. |350 - 2(200)| = 50 Hz.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>NUS-ISS Open-Book Trap:</strong> If asked how to fix aliasing after digital recording, explain that <em>it cannot be fixed in software</em>. Digital low-pass filters cannot distinguish a true 20 Hz wave from an aliased 180 Hz wave. The solution MUST be an analog hardware low-pass filter placed before the ADC.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Nyquist Rate:</strong> $2 f_{\\max}$.</li>
          <li><strong>Nyquist Folding Frequency:</strong> $f_N = f_s / 2$.</li>
          <li><strong>Anti-Aliasing:</strong> Hardware analog filter before sampling.</li>
        </ul>
      </div>
    """
})

# Mod 2: Preprocessing, arPLS & DTW
modules.append({
    "id": "mod-2", "num": 2,
    "title": "Signal Preprocessing: Peak Detection, arPLS Baseline & DTW Alignment",
    "subtitle": "Butterworth Filtering, Baseline Drift, Whittaker Smoothing & Dynamic Time Warping",
    "badge": "PRS (ISSM Day 1)",
    "diag": {
        "q1": {"q": "What problem does arPLS (asymmetric reweighted penalized least squares) solve?", "options": "A: Removes high-frequency noise. B: Removes low-frequency baseline drift (like temperature or sweat) without eroding legitimate signal peaks.", "feedback": "Correct! arPLS acts like an elastic rubber band under peaks."},
        "q2": {"q": "Why is Euclidean distance unsuitable for comparing two audio or ECG time series of different speaking rates?", "options": "A: Euclidean distance cannot handle floats. B: It is rigid point-to-point and fails when one signal is stretched or time-shifted; DTW provides non-linear elastic alignment.", "feedback": "Correct! DTW aligns sequences across temporal speed variations."}
    },
    "intuitive": """
      <p class="lead-text">Raw sensor signals are corrupted by baseline drift (gradual thermal expansion, patient respiration) and temporal pacing differences (fast vs slow footsteps).</p>
      <p><strong>arPLS</strong> acts like an elastic band under the signal: it strongly penalizes points below the curve while ignoring peaks, stripping away baseline wander. <strong>Dynamic Time Warping (DTW)</strong> dynamically stretches and compresses the time axis to find the minimal distance path between two signals.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">DTW Cumulative Cost Matrix Concept</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          Given sequences $X$ (length $N$) and $Y$ (length $M$), DTW fills cumulative matrix $D(i, j) = d(x_i, y_j) + \\min(D(i-1, j), D(i, j-1), D(i-1, j-1))$.
          The optimal warping path traces from $(1,1)$ to $(N,M)$ along the valley of minimum cost.
        </p>
      </div>
    """,
    "math": """
      <p><strong>DTW Dynamic Programming Recurrence:</strong></p>
      $$D(i, j) = |x_i - y_j| + \\min \\begin{cases} D(i-1, j) & (\\text{insertion}) \\\\ D(i, j-1) & (\\text{deletion}) \\\\ D(i-1, j-1) & (\\text{match}) \\end{cases}$$
      <p><strong>Sakoe-Chiba Band Constraint:</strong> $|i - j| \\le w$ limits search window to speed up computation from $O(NM)$ to $O(N w)$.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> If local distance is $d(x_i, y_j) = 3$, and neighbor cumulative costs are $D(i-1, j)=12, D(i, j-1)=10, D(i-1, j-1)=8$. Calculate $D(i, j)$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m2-ans" placeholder="Cost..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m2-ans').value); if(Math.abs(v - 11.0) < 0.1) alert('Correct! 3 + min(12, 10, 8) = 3 + 8 = 11.'); else alert('Incorrect. 3 + min(12, 10, 8) = 11.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Application:</strong> Use DTW whenever comparing temporal gestures, speech utterances, or ECG waveforms where subjects execute actions at varying velocities.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>arPLS:</strong> Asymmetric weighting ($w_i \\to 0$ for peaks, $w_i \\to 1$ for baseline).</li>
          <li><strong>DTW:</strong> Elastic alignment matrix overcoming time-dilation differences.</li>
        </ul>
      </div>
    """
})

# Mod 3: Signal Transformations
modules.append({
    "id": "mod-3", "num": 3,
    "title": "Signal Transformations: STFT Spectrograms & 2D Wavelet Subbands",
    "subtitle": "Fourier Paradox, Gabor Limit, 1D Haar Wavelets, Multiresolution Analysis & Parseval's Theorem",
    "badge": "PRS (ISSM Day 2)",
    "diag": {
        "q1": {"q": "What is the Fourier Paradox in classical Fourier transforms?", "options": "A: Fourier transform cannot process sound. B: Fourier tells you WHAT frequencies exist, but gives ZERO information on WHEN they occurred.", "feedback": "Correct! Fourier has total time blindness."},
        "q2": {"q": "What are the 4 subbands produced by 2D Discrete Wavelet Transform?", "options": "A: Alpha, Beta, Gamma, Delta. B: LL (Approximation), LH (Horizontal), HL (Vertical), HH (Diagonal).", "feedback": "Correct! LL captures the vast majority of signal energy."}
    },
    "intuitive": """
      <p class="lead-text">Standard Fourier Transform tells you what notes are played in a symphony, but spreads them infinitely over time—you cannot tell if the cymbal crashed at the beginning or end.</p>
      <p><strong>Short-Time Fourier Transform (STFT)</strong> slides a window over time to produce a 2D Spectrogram, but is constrained by the <strong>Heisenberg-Gabor uncertainty</strong>. <strong>Wavelet Transforms</strong> solve this by using short wavelets for high frequencies and long wavelets for low frequencies (Multiresolution Analysis).</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">2D Wavelet Subband Decomposition</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">LL Subband (Approximation)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Low-pass row + Low-pass col. Captures >80-90% of total energy. Coarse representation.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">LH, HL, HH Subbands (Details)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">High-pass filtering in horizontal, vertical, and diagonal directions. Edge transients.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Parseval's Theorem (Energy Conservation):</strong></p>
      $$\\sum_{i,j} x_{ij}^2 = \\|\\mathbf{LL}\\|^2 + \\|\\mathbf{LH}\\|^2 + \\|\\mathbf{HL}\\|^2 + \\|\\mathbf{HH}\\|^2$$
      <p><strong>1D Haar Wavelet Filters:</strong></p>
      $$s = \\frac{x_1 + x_2}{\\sqrt{2}} \\quad (\\text{scaling / low-pass}), \\quad d = \\frac{x_1 - x_2}{\\sqrt{2}} \\quad (\\text{wavelet / high-pass})$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Two signal values are $x_1 = 6, x_2 = 2$. Calculate the unscaled Haar detail difference $(x_1 - x_2) / 2$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m3-ans" placeholder="Detail..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m3-ans').value); if(Math.abs(v - 2.0) < 0.1) alert('Correct! (6 - 2)/2 = 2.0.'); else alert('Incorrect. (6 - 2)/2 = 2.0.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>PRS Q2c Vibration Feature Context:</strong> In the conveyor anomaly question, 20 frequency features were extracted by taking 4 statistics (mean, median, variance, std) across 5 wavelet subbands. Know how wavelets isolate localized transient shocks from background vibration.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>STFT:</strong> Fixed window; trade-off between time and frequency resolution.</li>
          <li><strong>Wavelets:</strong> Multiresolution analysis; variable window length.</li>
          <li><strong>Parseval:</strong> Energy in time domain equals energy in wavelet domain.</li>
        </ul>
      </div>
    """
})

# Mod 4: Neural Foundations & Backprop
modules.append({
    "id": "mod-4", "num": 4,
    "title": "Neural Network Foundations & Backpropagation Calculus",
    "subtitle": "MLP, Activation Functions, Cross-Entropy Loss, Gradient Descent (SGD, Adam) & Chain Rule",
    "badge": "PRS (PRMLS Day 1)",
    "diag": {
        "q1": {"q": "Why can a single-layer perceptron not solve the XOR problem?", "options": "A: XOR has 4 inputs. B: XOR is not linearly separable by a single straight hyperplane.", "feedback": "Correct! Minsky & Papert showed single perceptrons only solve linearly separable problems."},
        "q2": {"q": "What is the gradient of the ReLU activation function for z > 0?", "options": "A: 0. B: 1.0 (constant gradient, preventing vanishing gradient).", "feedback": "Correct! ReLU d/dz = 1 for z > 0."}
    },
    "intuitive": """
      <p class="lead-text">Multilayer Perceptrons (MLPs) overcome linear limitations by interleaving linear affine transformations $\\mathbf{z} = \\mathbf{W}\\mathbf{x} + \\mathbf{b}$ with non-linear activation functions (ReLU, Sigmoid).</p>
      <p>Training an MLP is an exercise in multivariable calculus: <strong>Backpropagation</strong> applies the chain rule in reverse from the output loss back to the input weights, allowing gradient descent (SGD, Adam) to iteratively adjust every weight.</p>
    """,
    "vis": """
      <div id="backprop-calculator-studio"></div>
    """,
    "math": """
      <p><strong>Binary Cross-Entropy Loss:</strong></p>
      $$\\mathcal{L}(y, \\hat{y}) = -\\left[y \\ln \\hat{y} + (1 - y) \\ln(1 - \\hat{y})\\right]$$
      <p><strong>Backprop Output Error for Sigmoid + BCE:</strong></p>
      $$\\delta = \\frac{\\partial \\mathcal{L}}{\\partial z} = \\hat{y} - y$$
      <p>The non-linear sigmoid derivative cancels cleanly with the cross-entropy derivative!</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Ground truth is $y = 1$. Model predicts $\\hat{y} = 0.8$. Calculate output error $\\delta = \\hat{y} - y$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m4-ans" placeholder="Error..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m4-ans').value); if(Math.abs(v - (-0.2)) < 0.05) alert('Correct! 0.8 - 1.0 = -0.2.'); else alert('Incorrect. 0.8 - 1.0 = -0.2.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Rule:</strong> When explaining why deep MLPs with Sigmoid activations fail, cite the <strong>vanishing gradient problem</strong>: $\\sigma\'(z) \\le 0.25$. Multiplying numbers $\\le 0.25$ over 10 layers drives gradients to zero ($0.25^{10} \\approx 10^{-6}$). ReLU fixes this because its derivative is $1.0$.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>ReLU:</strong> $\\max(0, z)$; fixes vanishing gradient; watch out for dead ReLUs.</li>
          <li><strong>Adam:</strong> Combines Momentum (first moment) and RMSprop (second moment).</li>
          <li><strong>Dropout:</strong> Randomly zeroes activations during training to break co-adaptation.</li>
        </ul>
      </div>
    """
})

# Mod 5: CNNs & Deep Vision
modules.append({
    "id": "mod-5", "num": 5,
    "title": "CNNs, Receptive Fields & GAP Redesign (PRS Q2a)",
    "subtitle": "2D Convolution, Kernel/Stride/Padding, Parameter Counting, ResNet & Flatten vs GAP Redesign",
    "badge": "PRS (PRMLS Day 2)",
    "diag": {
        "q1": {"q": "What is the primary cause of overfitting in the PRS Q2a CNN architecture?", "options": "A: Too many conv layers. B: A Flatten layer followed by Dense(4096) creating over 100 million parameters.", "feedback": "Correct! Dense layers connected to spatial grids cause parameter explosions."},
        "q2": {"q": "How many trainable parameters does a Global Average Pooling (GAP) layer have?", "options": "A: 4096. B: Exactly ZERO.", "feedback": "Correct! GAP simply computes the scalar average of each feature map."}
    },
    "intuitive": """
      <p class="lead-text">Standard fully-connected networks fail on images because they destroy 2D spatial arrangement and require billions of parameters.</p>
      <p><strong>Convolutional Neural Networks (CNNs)</strong> slide small shared filter kernels across feature maps, leveraging two physical priors: <strong>Local Receptive Fields</strong> and <strong>Translation Equivariance</strong>. Replacing bulky Flatten layers with <strong>Global Average Pooling (GAP)</strong> dramatically slashes parameters and prevents overfitting.</p>
    """,
    "vis": """
      <div id="cnn-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive CNN Sizer & PRS Q2a GAP Redesign Studio</h4>
        <div class="grid-3-col mb-3" style="gap:10px;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Input Grid: <strong id="cnn-i-val" style="color:#38bdf8;">14x14</strong></label>
            <input type="range" id="cnn-i-slider" min="7" max="56" step="7" value="14" oninput="SprintDay2Visualizers.updateCNNParams()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Kernel k: <strong id="cnn-k-val" style="color:#10b981;">3x3</strong></label>
            <input type="range" id="cnn-k-slider" min="1" max="7" step="2" value="3" oninput="SprintDay2Visualizers.updateCNNParams()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Padding p: <strong id="cnn-p-val" style="color:#f59e0b;">1</strong></label>
            <input type="range" id="cnn-p-slider" min="0" max="3" value="1" oninput="SprintDay2Visualizers.updateCNNParams()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Stride s: <strong id="cnn-s-val" style="color:#38bdf8;">2</strong></label>
            <input type="range" id="cnn-s-slider" min="1" max="3" value="2" oninput="SprintDay2Visualizers.updateCNNParams()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">C_in Channels: <strong id="cnn-cin-val" style="color:#10b981;">128</strong></label>
            <input type="range" id="cnn-cin-slider" min="16" max="512" step="16" value="128" oninput="SprintDay2Visualizers.updateCNNParams()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">C_out Filters: <strong id="cnn-cout-val" style="color:#f59e0b;">256</strong></label>
            <input type="range" id="cnn-cout-slider" min="16" max="512" step="16" value="256" oninput="SprintDay2Visualizers.updateCNNParams()" style="width:100%;">
          </div>
        </div>
        <div id="cnn-output-math" style="background:var(--bg-secondary); padding:12px; border-radius:6px;"></div>
      </div>
    """,
    "math": """
      <p><strong>Output Spatial Sizing:</strong></p>
      $$O = \\left\\lfloor \\frac{I - k + 2p}{s} \\right\\rfloor + 1$$
      <p><strong>Conv2D Layer Parameter Count:</strong></p>
      $$\\text{Weights} = (k_h \\times k_w \\times C_{\\text{in}}) \\times C_{\\text{out}}, \\quad \\text{Biases} = C_{\\text{out}}$$
      <p><strong>Worked Example (PRS Q2a Redesign):</strong> Conv5 outputs $7 \\times 7 \\times 512$.</p>
      <ul>
        <li><strong>Original Flatten:</strong> $7 \\times 7 \\times 512 = 25,088$ units. Connecting to Dense(4096) produces $25,088 \\times 4,096 + 4,096 = 102,764,544$ parameters (~102.8M params).</li>
        <li><strong>Redesign with GAP:</strong> GAP averages each $7 \\times 7$ feature slice to 1 scalar. Parameter count = <strong>0</strong>. Directly connecting 512 to 2 classes produces only $512 \\times 2 + 2 = 1,026$ parameters! Overfitting eliminated.</li>
      </ul>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A Conv2D layer has $C_{\\text{in}} = 3$ (RGB), $C_{\\text{out}} = 16$, and kernel $3 \\times 3$ with bias. Calculate total parameters.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m5-ans" placeholder="Params..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseInt(document.getElementById('prac-d2m5-ans').value); if(v === 448) alert('Correct! (3*3*3)*16 + 16 = 27*16 + 16 = 432 + 16 = 448.'); else alert('Incorrect. (3*3*3)*16 + 16 = 448.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>PRS Sample Paper Q2a Model Answer:</strong> State clearly that the training-validation gap (99.8% vs 58.2%) is caused by the Flatten layer having >100M parameters. Redesign using: (1) Replace Flatten with Global Average Pooling (GAP); (2) Add Residual Skip Connections (ResNet style) to prevent vanishing gradients; (3) Add Batch Normalization and Dropout (0.3); (4) Implement data augmentation.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Conv Parameters:</strong> $(k^2 \\cdot C_{\\text{in}} + 1) \\cdot C_{\\text{out}}$.</li>
          <li><strong>GAP:</strong> 0 parameters; structural regularizer.</li>
          <li><strong>ResNet:</strong> Shortcut $\\mathbf{y} = \\mathcal{F}(\\mathbf{x}) + \\mathbf{x}$ allows training 100+ layer networks.</li>
        </ul>
      </div>
    """
})

# Compile sections array
sections = []
for m in modules:
    content_html = make_stage_html(m["num"], m["title"], m["diag"], m["intuitive"], m["vis"], m["math"], m["practice"], m["exam"], m["summary"])
    sections.append({
        "id": m["id"],
        "title": f"Module {m['num']}: {m['title']}",
        "subtitle": m["subtitle"],
        "badge": m["badge"],
        "content": content_html
    })

# Add aliases for backwards compatibility with level-0 to level-6
alias_map = {
    "level-0": "mod-1",
    "level-1": "mod-1",
    "level-2": "mod-3",
    "level-3": "mod-4",
    "level-4": "mod-5",
    "level-5": "mod-6",
    "level-6": "mod-13"
}

for lvl_id, mod_target in alias_map.items():
    target = next((x for x in sections if x["id"] == mod_target), None)
    if target:
        sections.append({
            "id": lvl_id,
            "title": target["title"] + f" (Legacy {lvl_id})",
            "subtitle": target["subtitle"],
            "badge": target["badge"],
            "content": target["content"]
        })

js_output = f"""// Day 2 Content: Signal Processing, Deep Learning & Intelligent Perception
// Comprehensive Modules with 7-Stage Pedagogy for NUS-ISS PRS & IRS Examinations
window.DAY2_SIGNALS_DEEPLEARNING_CONTENT = {{
  id: "day-2-signals-deeplearning",
  title: "Day 2: Signal Processing, Deep Learning & Intelligent Perception",
  author: "NUS-ISS Curriculum Team",
  sections: {json.dumps(sections, indent=2)}
}};
"""

out_dir = "courses" if os.path.exists("courses") else "learning_platform/courses"
with open(f"{out_dir}/three-day-sprint/day-2-signals-deeplearning/content.js", "w") as f:
    f.write(js_output)

print(f"Generated Day 2 content.js with {len(modules)} modules and {len(sections)} sections (including aliases).")

# Mod 6: Sequential Models
modules.append({
    "id": "mod-6", "num": 6,
    "title": "Sequential Models: RNN, LSTM & Clickstream Prediction (PRS Q1d)",
    "subtitle": "BPTT, Vanishing Gradients, Forget/Input/Output Gates, Constant Error Carousel & 1D CNN",
    "badge": "PRS (PRMLS Day 3)",
    "diag": {
        "q1": {"q": "What component in an LSTM prevents the vanishing gradient problem?", "options": "A: The Softmax layer. B: The Constant Error Carousel (CEC) cell state conveyor belt with linear additive updates.", "feedback": "Correct! c_t = f_t * c_{t-1} + i_t * c~_t allows gradients to flow back without exponential decay."},
        "q2": {"q": "In PRS Q1d, how should clickstream page sequences be modeled?", "options": "A: Linear regression. B: Sequential model (LSTM/GRU or 1D Dilated CNN) tracking page transitions, dwell times, and order.", "feedback": "Correct! Clickstream data is intrinsically sequential."}
    },
    "intuitive": """
      <p class="lead-text">Standard networks assume each input is independent of past inputs. But language, sensor telemetry, and user website navigation are intrinsically temporal sequences.</p>
      <p><strong>Recurrent Neural Networks (RNNs)</strong> maintain a hidden state vector $\\mathbf{h}_t$ that acts as internal memory. Standard RNNs suffer from vanishing gradients when backpropagated over many steps. <strong>LSTMs</strong> solve this via three non-linear gates (Forget, Input, Output) regulating an additive cell state conveyor belt.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">LSTM Cell State & Gating Architecture</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          Forget gate $\\mathbf{f}_t$ chooses what to erase. Candidate $\\mathbf{\\tilde{C}}_t$ proposes new memory.
          Input gate $\\mathbf{i}_t$ decides what to store. Cell state updates linearly: $\\mathbf{C}_t = \\mathbf{f}_t \\odot \\mathbf{C}_{t-1} + \\mathbf{i}_t \\odot \\mathbf{\\tilde{C}}_t$.
        </p>
      </div>
    """,
    "math": """
      <p><strong>LSTM Mathematical Equations:</strong></p>
      $$\\mathbf{f}_t = \\sigma(\\mathbf{W}_f [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_f), \\quad \\mathbf{i}_t = \\sigma(\\mathbf{W}_i [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_i)$$
      $$\\mathbf{\\tilde{C}}_t = \\tanh(\\mathbf{W}_c [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_c), \\quad \\mathbf{C}_t = \\mathbf{f}_t \\odot \\mathbf{C}_{t-1} + \\mathbf{i}_t \\odot \\mathbf{\\tilde{C}}_t$$
      $$\\mathbf{o}_t = \\sigma(\\mathbf{W}_o [\\mathbf{h}_{t-1}, \\mathbf{x}_t] + \\mathbf{b}_o), \\quad \\mathbf{h}_t = \\mathbf{o}_t \\odot \\tanh(\\mathbf{C}_t)$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> If past cell state is $C_{t-1} = 4.0$, forget gate is $f_t = 0.5$, input gate is $i_t = 0.8$, and candidate is $\\tilde{C}_t = 2.0$. Calculate updated cell state $C_t$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m6-ans" placeholder="C_t..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m6-ans').value); if(Math.abs(v - 3.6) < 0.1) alert('Correct! C_t = 0.5(4.0) + 0.8(2.0) = 2.0 + 1.6 = 3.6.'); else alert('Incorrect. 0.5(4.0) + 0.8(2.0) = 3.6.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>PRS Sample Paper Q1d Model Proposal:</strong> Propose an LSTM or 1D Dilated Convolutional network. Explain: (1) Input sequence representation: embed page IDs, concatenate duration and device; (2) Masking: pad variable-length sessions to maximum length $T$ with padding mask; (3) Final state $\\mathbf{h}_T$ fed to Dense Sigmoid for purchase probability.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>BPTT:</strong> Backpropagation Through Time; unrolls sequence steps.</li>
          <li><strong>GRU:</strong> Lightweight alternative; merges cell and hidden state; 2 gates.</li>
          <li><strong>1D CNN:</strong> Fast parallel sequence processing with dilated receptive fields.</li>
        </ul>
      </div>
    """
})

# Mod 7: HMM
modules.append({
    "id": "mod-7", "num": 7,
    "title": "Hidden Markov Models (HMM) & Work Pattern Decoding (IRS Q1d)",
    "subtitle": "Hidden vs Observed States, Transition Matrix A, Emission Matrix B, Forward & Viterbi Algorithm",
    "badge": "IRS/PRS (CS Day 2)",
    "diag": {
        "q1": {"q": "What is the difference between a hidden state and an observed state in an HMM?", "options": "A: Hidden states are encrypted. B: Hidden states are unobservable latent conditions (e.g. user work profile); observed states are measurable events (e.g. daily query types).", "feedback": "Correct! HMM models latent stochastic processes generating observations."},
        "q2": {"q": "Which algorithm finds the single most probable sequence of hidden states?", "options": "A: Forward algorithm. B: Viterbi decoding algorithm.", "feedback": "Correct! Viterbi uses dynamic programming to find argmax path."}
    },
    "intuitive": """
      <p class="lead-text">An HMM is a generative probabilistic model where the underlying system moves through unobservable 'hidden' states, each emitting observable signals according to fixed probabilities.</p>
      <p>In <strong>IRS Question 1d</strong>, an employee's underlying job role (Software Engineer vs Sales Executive) is a hidden state sequence generating visible daily chatbot queries (ergonomics, visual habits, eye exercises). By training one HMM per work pattern, we classify new query sequences by evaluating $P(O \\mid \\lambda)$.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">HMM Triplet $\\lambda = (\\mathbf{A}, \\mathbf{B}, \\boldsymbol{\\pi})$ Structure</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          $\\boldsymbol{\\pi}$: Initial state probabilities. $\\mathbf{A}$: State transition probabilities $a_{ij} = P(s_{t+1}=j \\mid s_t=i)$.
          $\\mathbf{B}$: Emission probabilities $b_j(k) = P(o_t=k \\mid s_t=j)$.
        </p>
      </div>
    """,
    "math": """
      <p><strong>Forward Algorithm Trellis Step:</strong></p>
      $$\\alpha_1(i) = \\pi_i b_i(o_1), \\quad \\alpha_{t+1}(j) = \\left[\\sum_{i=1}^N \\alpha_t(i) a_{ij}\\right] b_j(o_{t+1})$$
      $$P(O \\mid \\lambda) = \\sum_{i=1}^N \\alpha_T(i)$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Initial probability $\\pi_1 = 0.6$, emission $b_1(o_1) = 0.5$. Calculate initial forward variable $\\alpha_1(1)$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m7-ans" placeholder="Alpha..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m7-ans').value); if(Math.abs(v - 0.3) < 0.05) alert('Correct! 0.6 * 0.5 = 0.3.'); else alert('Incorrect. 0.6 * 0.5 = 0.3.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Sample Paper Q1d Sequence Classification:</strong> Train two separate HMM models: $\\lambda_A$ (for Software Engineer) and $\\lambda_B$ (for Sales Executive) using the Baum-Welch (EM) algorithm. For a test weekly query sequence $O$, compute $P(O \\mid \\lambda_A)$ and $P(O \\mid \\lambda_B)$ via the Forward Algorithm. Assign to the class with the maximum likelihood.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Problem 1 (Evaluation):</strong> Forward-Backward algorithm $\\to P(O \\mid \\lambda)$.</li>
          <li><strong>Problem 2 (Decoding):</strong> Viterbi algorithm $\\to \\arg\\max_Q P(Q \\mid O, \\lambda)$.</li>
          <li><strong>Problem 3 (Learning):</strong> Baum-Welch (EM) $\\to$ estimate $\\mathbf{A}, \\mathbf{B}, \\boldsymbol{\\pi}$.</li>
        </ul>
      </div>
    """
})

# Mod 8: Transformers
modules.append({
    "id": "mod-8", "num": 8,
    "title": "Transformers & Scaled Dot-Product Attention",
    "subtitle": "Query/Key/Value Projections, Multi-Head Attention, Positional Encoding & BERT vs GPT",
    "badge": "PRS (PRMLS Day 4)",
    "diag": {
        "q1": {"q": "Why is the Query-Key dot product divided by sqrt(d_k)?", "options": "A: To speed up matrix multiplication. B: To prevent large dot products from pushing softmax into regions with vanishing gradients.", "feedback": "Correct! Without scaling, large key dimensions cause vanishing softmax gradients."},
        "q2": {"q": "What is the core difference between BERT and GPT architectures?", "options": "A: BERT is a decoder; GPT is an encoder. B: BERT is a bidirectional encoder (MLM); GPT is an autoregressive causal decoder.", "feedback": "Correct! BERT attends bidirectionally; GPT masks future tokens."}
    },
    "intuitive": """
      <p class="lead-text">RNNs process sequences token-by-token sequentially, creating a temporal bottleneck that cannot be parallelized across GPUs.</p>
      <p><strong>Transformers</strong> replace recurrence entirely with <strong>Self-Attention</strong>. Every token calculates an attention score with every other token in parallel. Queries search for information; Keys index the content; Values supply the contextual representation.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Attention Matrix Formulation</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          $\\text{Attention}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{softmax}\\left(\\frac{\\mathbf{Q}\\mathbf{K}^T}{\\sqrt{d_k}}\\right)\\mathbf{V}$.
          Attention weights sum to 1.0 along each row.
        </p>
      </div>
    """,
    "math": """
      <p><strong>Multi-Head Attention:</strong></p>
      $$\\text{MHA}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h)\\mathbf{W}^O, \\quad \\text{head}_i = \\text{Attention}(\\mathbf{Q}\\mathbf{W}_i^Q, \\mathbf{K}\\mathbf{W}_i^K, \\mathbf{V}\\mathbf{W}_i^V)$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> If key dimension is $d_k = 64$, what is the scaling denominator $\\sqrt{d_k}$?</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m8-ans" placeholder="sqrt(d_k)..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m8-ans').value); if(Math.abs(v - 8.0) < 0.1) alert('Correct! sqrt(64) = 8.0.'); else alert('Incorrect. sqrt(64) = 8.0.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Vision & Sequence Transfer:</strong> In modern perception, Transformers are applied to vision via ViT (splitting 2D images into $16 \\times 16$ flattened patch tokens). Use when modeling global context across distant regions.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Scaled Attention:</strong> $\\text{softmax}(QK^T / \\sqrt{d_k})V$.</li>
          <li><strong>Positional Encoding:</strong> Sinusoidal or learned vectors injected to restore spatial/temporal order.</li>
        </ul>
      </div>
    """
})

# Mod 9: Autoencoders & Anomaly Detection
modules.append({
    "id": "mod-9", "num": 9,
    "title": "Autoencoders & 3-Sigma Anomaly Detection (PRS Q2c)",
    "subtitle": "Unsupervised Bottlenecks, Reconstruction Loss, Variational Autoencoders & Extreme Imbalance Calibration",
    "badge": "PRS (ISSM Day 3)",
    "diag": {
        "q1": {"q": "Why does training a supervised 2-class classifier on 3000 normal and 2 abnormal vibration sequences fail?", "options": "A: 3000 is too large. B: Extreme class imbalance leads to trivial majority prediction (99.93% accuracy but 0% recall of anomalies), and 2 samples cannot represent future novel faults.", "feedback": "Correct! Unsupervised one-class reconstruction must be used instead."},
        "q2": {"q": "How is the 3-sigma anomaly threshold calculated?", "options": "A: From the maximum test error. B: tau = mu_error + 3 * sigma_error calibrated on normal validation reconstruction errors.", "feedback": "Correct! Statistical 3-sigma rule covers 99.7% of normal noise."}
    },
    "intuitive": """
      <p class="lead-text">In high-stakes industrial applications, catastrophic equipment failures happen rarely (e.g. 2 times a year). Collecting thousands of abnormal training samples is impossible.</p>
      <p><strong>Autoencoders</strong> compress normal data through an information bottleneck and reconstruct it. The network learns the manifold of normal operating behavior. When a mechanical anomaly occurs, the bottleneck cannot compress the abnormal frequencies, producing a massive spike in <strong>reconstruction error</strong>.</p>
    """,
    "vis": """
      <div id="anomaly-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive 3-Sigma Anomaly Detection Studio (PRS Q2c)</h4>
        <div class="mb-3">
          <label style="font-size:0.8rem; color:var(--text-secondary);">Test Sequence Reconstruction Error $\\|x - \\hat{x}\\|^2$: <strong id="ae-err-val" style="color:#38bdf8;">0.050</strong></label>
          <input type="range" id="ae-err-slider" min="0.010" max="0.150" step="0.005" value="0.050" oninput="SprintDay2Visualizers.updateAnomaly()" style="width:100%;">
        </div>
        <div id="ae-output-math" style="background:var(--bg-secondary); padding:12px; border-radius:6px;"></div>
      </div>
    """,
    "math": """
      <p><strong>Autoencoder Reconstruction Loss:</strong></p>
      $$\\mathcal{L}_{\\text{recon}} = \\frac{1}{D}\\sum_{j=1}^D (x_j - \\hat{x}_j)^2$$
      <p><strong>3-Sigma Threshold Calibration:</strong></p>
      $$\\mu_e = \\frac{1}{N}\\sum e_i, \\quad \\sigma_e = \\sqrt{\\frac{1}{N}\\sum (e_i - \\mu_e)^2}, \\quad \\tau = \\mu_e + 3\\sigma_e$$
      <p><strong>Worked Example (PRS Q2c):</strong> If $\\mu_e = 0.040, \\sigma_e = 0.015$, threshold $\\tau = 0.040 + 3(0.015) = 0.085$. If a test reading produces error $0.112 > 0.085 \\implies$ <strong>ANOMALY!</strong></p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Validation normal errors have $\\mu_e = 0.020$ and $\\sigma_e = 0.005$. Calculate the 3-sigma anomaly threshold $\\tau$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m9-ans" placeholder="Threshold..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m9-ans').value); if(Math.abs(v - 0.035) < 0.002) alert('Correct! 0.020 + 3(0.005) = 0.035.'); else alert('Incorrect. 0.020 + 3(0.005) = 0.035.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>PRS Q2c Model Answer Structure:</strong> (1) Strongly disagree with colleague's 2-class supervised MLP; (2) Challenge 1: Severe class imbalance (3000:2) causes 99.93% dummy accuracy with 0% anomaly recall; (3) Challenge 2: 2 abnormal samples cannot represent unknown future failure modes; (4) Solution: Train an unsupervised Autoencoder on the 3,000 normal sequences and calibrate a 3-sigma threshold $\\tau = \\mu + 3\\sigma$ on reconstruction MSE.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>One-Class Learning:</strong> Train strictly on normal operating data.</li>
          <li><strong>Detection Mechanism:</strong> High reconstruction error indicates out-of-manifold anomaly.</li>
          <li><strong>3-Sigma Rule:</strong> Statistically bounds false alarm rate to $<0.3\\%$.</li>
        </ul>
      </div>
    """
})

# Mod 10: Deep RL
modules.append({
    "id": "mod-10", "num": 10,
    "title": "Deep Reinforcement Learning & Robotic Pick-and-Place (PRS Q2b)",
    "subtitle": "Markov Decision Processes, Q-Learning, DQN, Multi-Factor Reward Shaping & Sim-to-Real Transfer",
    "badge": "PRS (PRMLS Day 4)",
    "diag": {
        "q1": {"q": "What is the role of Experience Replay in Deep Q-Networks (DQN)?", "options": "A: Compresses images. B: Stores past transitions (s, a, r, s') and samples random batches to break temporal correlation and stabilize training.", "feedback": "Correct! Replay buffers prevent non-stationary policy divergence."},
        "q2": {"q": "In PRS Q2b, why is training directly on a physical robot hazardous?", "options": "A: The robot battery runs out. B: Exploration requires experiencing physical collisions to learn to avoid them, causing severe mechanical damage to the robot and conveyor.", "feedback": "Correct! Collisions during random exploration destroy expensive hardware."}
    },
    "intuitive": """
      <p class="lead-text">Reinforcement Learning (RL) trains an agent to take sequential actions in an environment to maximize cumulative reward.</p>
      <p>In <strong>PRS Question 2b</strong>, a robotic arm must sort circuit boards and batteries from a moving conveyor. The agent must learn to grasp odd orientations while avoiding collisions with structural beams. Training in the real world is dangerous; we solve this via <strong>Sim-to-Real transfer</strong> using physics simulation (MuJoCo) and domain randomization.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Robotic Sorting System Architecture (PRS Q2b)</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">Perception & Environment State:</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">RGB-D Camera $\\to$ 6D Pose Estimation $\\to$ Obstacle & Conveyor Speed Vector.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Decision Engine & Actuation:</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">DRL Actor-Critic Policy Network $\\to$ Joint Torque Commands $\\to$ Safety Interlock Controller.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Bellman Optimality Equation:</strong></p>
      $$Q^*(s, a) = R(s, a) + \\gamma \\max_{a'} Q^*(s', a')$$
      <p><strong>Multi-Factor Reward Function (PRS Q2b):</strong></p>
      $$R = +100 \\cdot \\mathbb{I}_{\\text{placed in correct bin}} - 1 \\cdot \\Delta t - 500 \\cdot \\mathbb{I}_{\\text{collision}} + R_{\\text{distance shaping}}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Immediate reward is $r = +10$, discount factor $\\gamma = 0.9$, and maximum estimated future Q-value is $\\max Q(s\', a\') = 50$. Calculate Bellman target $y = r + \\gamma \\max Q$.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m10-ans" placeholder="Target..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m10-ans').value); if(Math.abs(v - 55.0) < 0.1) alert('Correct! 10 + 0.9(50) = 10 + 45 = 55.0.'); else alert('Incorrect. 10 + 0.9(50) = 55.0.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>PRS Q2b Sim-to-Real Strategy:</strong> Train policy in simulation with Domain Randomization (varying friction coefficients, camera lighting, object mass, and conveyor speeds). When deploying to physical hardware, enforce <strong>Virtual Safety Bounding Boxes</strong> that override neural motor commands if an arm trajectory approaches within 10 cm of an obstacle.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Reward Shaping:</strong> Balance success reward, time penalty, and severe collision penalty.</li>
          <li><strong>Sim-to-Real:</strong> Eliminate physical collision hazards during training.</li>
        </ul>
      </div>
    """
})

# Mod 11: Ensemble Learning
modules.append({
    "id": "mod-11", "num": 11,
    "title": "Ensemble Learning: Bagging, Random Forest, AdaBoost & Stacking",
    "subtitle": "Condorcet's Jury Theorem, Exponential Loss, Sample Reweighting & Out-Of-Fold Cross-Validation",
    "badge": "PRS (PRMLS Day 5)",
    "diag": {
        "q1": {"q": "What is the primary variance reduction mechanism in Random Forest compared to standard Bagging?", "options": "A: Trees are pruned deeper. B: Random feature subset selection at each split decorrelates the trees, reducing pairwise correlation rho.", "feedback": "Correct! Var(ensemble) = rho * sigma^2 + (1 - rho)/M * sigma^2."},
        "q2": {"q": "Why does Stacking require Out-Of-Fold (OOF) cross-validated predictions?", "options": "A: To save GPU memory. B: To prevent target leakage: training the blender on in-sample predictions causes extreme overfitting.", "feedback": "Correct! Meta-models must be trained on held-out predictions."}
    },
    "intuitive": """
      <p class="lead-text">Condorcet's Jury Theorem proves that if independent voters have an accuracy $>0.5$, a majority vote approaches 100% accuracy as the number of voters grows.</p>
      <p><strong>Bagging</strong> trains independent models in parallel on bootstrap resamples to reduce variance. <strong>Boosting (AdaBoost, Gradient Boosting)</strong> trains sequential models where each new learner corrects the mistakes of earlier models to reduce bias. <strong>Stacking</strong> trains heterogeneous models and fuses them via a meta-learner.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Ensemble Paradigms Comparison</h4>
        <div class="grid-3-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">Bagging / Random Forest</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Parallel learners on bootstrap samples. Reduces <strong>Variance</strong>.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Boosting (AdaBoost/GBM)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Sequential learners on residual errors. Reduces <strong>Bias</strong>.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #f59e0b;">
            <strong style="color:#f59e0b;">Stacking (Meta-Learner)</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Heterogeneous base models combined via Out-of-Fold blender.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>AdaBoost Weight Update:</strong></p>
      $$\\alpha_t = \\frac{1}{2}\\ln\\left(\\frac{1 - \\epsilon_t}{\\epsilon_t}\\right), \\quad w_i^{(t+1)} = w_i^{(t)} \\exp(-\\alpha_t y_i h_t(x_i))$$
      <p>Misclassified samples ($y_i h_t(x_i) = -1$) are amplified by $e^{\\alpha_t} > 1$.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A base classifier has error $\\epsilon = 0.10$. Calculate model weight $\\alpha = 0.5 \\ln((1-0.10)/0.10) = 0.5 \\ln(9)$. (Hint: $\\ln(9) \\approx 2.197$). Round to 2 decimal places.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m11-ans" placeholder="Alpha..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m11-ans').value); if(Math.abs(v - 1.10) < 0.05) alert('Correct! 0.5 * 2.197 ≈ 1.10.'); else alert('Incorrect. 0.5 * 2.197 = 1.10.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Selection:</strong> When individual decision trees overfit and have high variance $\\implies$ use <strong>Random Forest</strong>. When base models are weak decision stumps with high bias $\\implies$ use <strong>AdaBoost</strong>. When combining diverse models (SVM + LightGBM + NN) $\\implies$ use <strong>Stacking with OOF validation</strong>.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Random Forest:</strong> $\\text{Var} = \\rho \\sigma^2 + \\frac{1-\\rho}{M}\\sigma^2$. Decorrelation minimizes $\\rho$.</li>
          <li><strong>AdaBoost:</strong> Minimizes exponential loss $\\sum e^{-y_i f(x_i)}$.</li>
        </ul>
      </div>
    """
})

# Mod 12: Multimodal Intelligent Sensing
modules.append({
    "id": "mod-12", "num": 12,
    "title": "Multimodal Intelligent Sensing & Reverse Vending Machine (RVM)",
    "subtitle": "Sensor Complementarity vs Redundancy, Early vs Late vs Hybrid Fusion & Unimodal Failures",
    "badge": "PRS (ISSM Day 4)",
    "diag": {
        "q1": {"q": "What is the primary advantage of Late Fusion over Early Fusion?", "options": "A: It requires less GPU compute. B: Modularity and fault tolerance: if one sensor fails, other modalities continue operating without crashing the model.", "feedback": "Correct! Late fusion handles missing modalities gracefully."},
        "q2": {"q": "In a Reverse Vending Machine (RVM), why can camera vision alone not reliably identify plastic vs metal bottles?", "options": "A: Cameras cannot see round objects. B: Transparent plastic bottles wrapped in aluminum foil mimic metal; camera cannot sense physical mass or electrical inductance.", "feedback": "Correct! Unimodal sensing is vulnerable to edge cases."}
    },
    "intuitive": """
      <p class="lead-text">No single sensor modality is infallible. Cameras are blinded by glare, acoustic sensors are deafened by ambient factory noise, and load cells cannot identify visual barcodes.</p>
      <p><strong>Multimodal Intelligent Sensing</strong> combines complementary physical channels:
      1. <strong>Early Fusion:</strong> Concatenates raw features (preserves cross-modal correlations, but fragile to missing sensors);
      2. <strong>Late Fusion:</strong> Combines decision logits (modular, fault tolerant);
      3. <strong>Hybrid Fusion:</strong> Combines intermediate neural representations.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Reverse Vending Machine (RVM) Sensor Suite</h4>
        <div class="grid-4-col" style="gap:8px; font-size:0.82rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center;">
            <strong>RGB-D Camera</strong><br><span style="color:var(--text-muted);">Barcode & Shape</span>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center;">
            <strong>Acoustic Tap</strong><br><span style="color:var(--text-muted);">Resonance Material</span>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center;">
            <strong>Load Cell</strong><br><span style="color:var(--text-muted);">Physical Mass</span>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center;">
            <strong>Inductive Proximity</strong><br><span style="color:var(--text-muted);">Metal Eddy Currents</span>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Late Decision Fusion Formula:</strong></p>
      $$P_{\\text{final}}(C) = \\sum_{m=1}^M w_m P_m(C \\mid \\mathbf{x}_m), \\quad \\sum w_m = 1.0$$
      <p>Weights $w_m$ reflect real-time sensor confidence scores based on environmental SNR.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Modality 1 (Camera) predicts $P=0.9$ with weight $w_1 = 0.6$. Modality 2 (Acoustic) predicts $P=0.5$ with weight $w_2 = 0.4$. Calculate fused probability.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d2m12-ans" placeholder="Fused P..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d2m12-ans').value); if(Math.abs(v - 0.74) < 0.02) alert('Correct! 0.6(0.9) + 0.4(0.5) = 0.54 + 0.20 = 0.74.'); else alert('Incorrect. 0.6(0.9) + 0.4(0.5) = 0.74.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>ISSM Exam Blueprint:</strong> When asked to design an intelligent sorting or sensing device (e.g. Reverse Vending Machine), always articulate: (1) 4 distinct physical sensor modalities; (2) Failure modes of each unimodal channel; (3) Hybrid fusion architecture; (4) Graceful degradation policy when a sensor fails.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Complementarity:</strong> Distinct physical properties (vision = color, acoustic = density).</li>
          <li><strong>Redundancy:</strong> Overlapping sensors provide fail-safe verification.</li>
        </ul>
      </div>
    """
})

# Mod 13: Day 2 Integration
modules.append({
    "id": "mod-13", "num": 13,
    "title": "Day 2 Integration & PRS Sample Paper Masterclass",
    "subtitle": "Comprehensive Synthesis: CNN GAP Redesign (Q2a), Robotic DRL (Q2b), Autoencoder Anomaly (Q2c) & Bayesian Conveyor (Q2d)",
    "badge": "PRS Exam Crucible",
    "diag": {
        "q1": {"q": "What is the unifying theme of Day 2 in Pattern Recognition Systems?", "options": "A: Basic linear algebra. B: Bridging physical sensory signals to deep neural representations and safe autonomous actions.", "feedback": "Correct! From analog waves to deep CNNs, LSTMs, and robotic actions."},
        "q2": {"q": "Can deep reinforcement learning policies be transferred directly from simulation to real robots?", "options": "A: Yes, simulators are 100% identical. B: No, the sim-to-real gap requires Domain Randomization and safety bounding boxes.", "feedback": "Correct! Friction, latency, and lighting differ in reality."}
    },
    "intuitive": """
      <p class="lead-text">You have completed the entire spectrum of sensory perception and deep learning representations. All four parts of official PRS Sample Paper Question 2 are now mastered:</p>
      <ul>
        <li><strong>PRS Q2a (4 marks):</strong> Diagnose CNN Flatten parameter explosion; redesign with GAP and ResNet skip connections.</li>
        <li><strong>PRS Q2b (4 marks):</strong> Deep RL 3-factor reward function, 5-component architecture, and safe sim-to-real transfer.</li>
        <li><strong>PRS Q2c (4 marks):</strong> Deconstruct supervised 3000:2 anomaly proposal; implement unsupervised Autoencoder with 3-sigma error threshold.</li>
        <li><strong>PRS Q2d (4 marks):</strong> Conveyor belt failure diagnosis using Naive Bayes calculations.</li>
      </ul>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">PRS Question 2 Grand Synthesis Map</h4>
        <div style="font-size:0.85rem; color:var(--text-secondary);">
          Review the solved walkthroughs and test yourself under timed conditions in the <strong>Daily Revision</strong> tab.
        </div>
      </div>
    """,
    "math": """
      <p><strong>Master Formula Review:</strong></p>
      $$f_N = \\frac{f_s}{2}, \\quad O = \\left\\lfloor \\frac{I - k + 2p}{s} \\right\\rfloor + 1, \\quad \\tau = \\mu_e + 3\\sigma_e, \\quad Q^*(s, a) = R + \\gamma \\max Q^*$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Challenge:</strong> Head to the <strong>Quizzes & Exam Questions</strong> tab to attempt the full PRS Exam Questions and the 4-tier Question Generator!</p>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Final Day 2 Takeaway:</strong> You are 100% prepared for Pattern Recognition Systems (ISY5002)!</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Completed:</strong> All 13 Day 2 Modules implemented with 7-stage pedagogy.</li>
          <li><strong>Next Step:</strong> Complete Day 2 Daily Revision & Timed Assessment.</li>
        </ul>
      </div>
    """
})

# Recompile sections with all 13 modules
sections = []
for m in modules:
    content_html = make_stage_html(m["num"], m["title"], m["diag"], m["intuitive"], m["vis"], m["math"], m["practice"], m["exam"], m["summary"])
    sections.append({
        "id": m["id"],
        "title": f"Module {m['num']}: {m['title']}",
        "subtitle": m["subtitle"],
        "badge": m["badge"],
        "content": content_html
    })

alias_map = {
    "level-0": "mod-1",
    "level-1": "mod-1",
    "level-2": "mod-3",
    "level-3": "mod-4",
    "level-4": "mod-5",
    "level-5": "mod-6",
    "level-6": "mod-13"
}

for lvl_id, mod_target in alias_map.items():
    target = next((x for x in sections if x["id"] == mod_target), None)
    if target:
        sections.append({
            "id": lvl_id,
            "title": target["title"] + f" (Legacy {lvl_id})",
            "subtitle": target["subtitle"],
            "badge": target["badge"],
            "content": target["content"]
        })

js_output = f"""// Day 2 Content: Signal Processing, Deep Learning & Intelligent Perception
// All 13 Comprehensive Modules with 7-Stage Pedagogy for NUS-ISS PRS & IRS Examinations
window.DAY2_SIGNALS_DEEPLEARNING_CONTENT = {{
  id: "day-2-signals-deeplearning",
  title: "Day 2: Signal Processing, Deep Learning & Intelligent Perception",
  author: "NUS-ISS Curriculum Team",
  sections: {json.dumps(sections, indent=2)}
}};
"""

out_dir = "courses" if os.path.exists("courses") else "learning_platform/courses"
with open(f"{out_dir}/three-day-sprint/day-2-signals-deeplearning/content.js", "w") as f:
    f.write(js_output)

print(f"Updated Day 2 content.js with all {len(modules)} modules and {len(sections)} sections (including aliases).")
