// Day 2 Slide Mastery Quizzes & Post-Quiz Exam-Style Questions
// Signal Processing + Deep Learning (Course Days 2, 6, 7 + Signal Transformations from Day 3)

window.DAY2_SIGNALS_DEEPLEARNING_QUIZZES = [
  {
    id: "d2-q1",
    module: "Sensory Signals — Nyquist Sampling",
    slideRef: "ISSM Day 1 Slide 22-35",
    question: "If a sensor acquires a signal containing maximum frequency component $f_{\\max} = 60\\text{ Hz}$, what is the strict Nyquist sampling frequency condition to prevent aliasing?",
    options: [
      "$f_s \\ge 60\\text{ Hz}$",
      "$f_s > 120\\text{ Hz}$",
      "$f_s = 30\\text{ Hz}$",
      "$f_s \\le 120\\text{ Hz}$"
    ],
    correctIndex: 1,
    hint: "Nyquist criterion states that sampling frequency must strictly exceed twice the highest signal frequency.",
    explanation: "Nyquist theorem requires $f_s > 2 f_{\\max}$. Here $2 \\times 60 = 120\\text{ Hz}$. If $f_s \\le 120\\text{ Hz}$, the high frequencies fold back across the Nyquist folding frequency $f_N = f_s / 2$ as lower-frequency ghost signals."
  },
  {
    id: "d2-q2",
    module: "Sensory Signals — Anti-Aliasing Hardware",
    slideRef: "ISSM Day 1 Slide 38",
    question: "Where in a sensor signal acquisition hardware pipeline MUST the analog anti-aliasing low-pass filter be placed?",
    options: [
      "Directly after the digital microprocessor inside the cloud server.",
      "Strictly BEFORE the Analog-to-Digital Converter (ADC).",
      "Inside the digital FIR software filter in RAM.",
      "Immediately before the visual display monitor."
    ],
    correctIndex: 1,
    hint: "Can software un-mix two frequencies once they have already been digitized into the same numbers?",
    explanation: "Once an analog signal is digitized by the ADC, aliased frequencies permanently corrupt the baseband and are mathematically indistinguishable from true low frequencies. The filter must be analog and placed before the ADC."
  },
  {
    id: "d2-q3",
    module: "Sensory Signals — Baseline Correction",
    slideRef: "ISSM Day 1 Slide 72-85",
    question: "Why is arPLS (asymmetric reweighted penalized least squares) dramatically superior to standard polynomial curve fitting for baseline drift removal in biomedical signals?",
    options: [
      "Because arPLS requires no matrix inversions.",
      "Because polynomial fitting is pulled upwards by sharp signal peaks, distorting peak heights; arPLS uses asymmetric penalization weights where signal peaks receive weight $\\approx 0$ while baseline valleys receive weight $1$, acting like a rubber band pulled taut beneath the signal.",
      "Because arPLS assumes the signal is strictly white Gaussian noise.",
      "Because arPLS doubles the sampling rate."
    ],
    correctIndex: 1,
    hint: "Think about the rubber band analogy: peaks pull symmetric polynomials up, but asymmetric weights ignore peaks.",
    explanation: "Standard least squares penalizes positive and negative residuals equally, so high peaks drag the fitted curve upward. arPLS applies near-zero weights to positive peak residuals, fitting only the true baseline valleys beneath the signal."
  },
  {
    id: "d2-q4",
    module: "Signal Transforms — Heisenberg-Gabor Uncertainty",
    slideRef: "ISSM Day 2 Slide 15-28",
    question: "What is the Fourier Paradox, and what mathematical theorem governs the time-frequency trade-off in the Short-Time Fourier Transform (STFT)?",
    options: [
      "The Fourier Transform cannot compute negative frequencies; governed by Moore's Law.",
      "Standard FFT integrates over all time ($-\\infty$ to $+\\infty$), providing zero time localization; governed by the Heisenberg-Gabor uncertainty principle $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$.",
      "FFT requires non-linear activation functions; governed by Universal Approximation.",
      "STFT requires infinite window widths to detect transient impulses."
    ],
    correctIndex: 1,
    hint: "Consider why we cannot know both the exact instant a note was played and its exact frequency simultaneously.",
    explanation: "Standard Fourier gives global frequency without temporal resolution. The Heisenberg-Gabor limit $\\Delta t \\cdot \\Delta f \\ge 1/(4\\pi)$ proves you cannot simultaneously obtain arbitrarily high resolution in both time and frequency."
  },
  {
    id: "d2-q5",
    module: "Signal Transforms — 2D Wavelet Subbands",
    slideRef: "ISSM Day 2 Slide 35-48",
    question: "In 2D Discrete Wavelet Transform (DWT), what visual/sensory information is contained in the HH subband?",
    options: [
      "The low-frequency smooth approximation of the image.",
      "Horizontal edges extracted by a horizontal high-pass filter.",
      "Diagonal edges, high-frequency corners, and noise produced by applying high-pass filtering along both rows and columns.",
      "The DC voltage offset of the optical sensor."
    ],
    correctIndex: 2,
    hint: "HH = High-pass on rows AND High-pass on columns.",
    explanation: "LL is low-low (approximation), LH captures horizontal high-frequencies (vertical edges), HL captures vertical high-frequencies (horizontal edges), and HH captures diagonal high-frequencies and noise."
  },
  {
    id: "d2-q6",
    module: "Deep Learning — Vanishing Gradient Calculus",
    slideRef: "PRMLS Day 2b Slide 12-25",
    question: "Why did the ReLU activation function ($f(z) = \\max(0, z)$) replace Sigmoid ($\\\\sigma(z) = \\frac{1}{1 + e^{-z}}$) in deep feedforward and convolutional neural networks?",
    options: [
      "Because ReLU is bounded between -1 and +1.",
      "The derivative of Sigmoid saturates at $\\sigma'(z) \\le 0.25$; multiplying by $\\le 0.25$ across $L$ layers causes gradients to shrink exponentially ($0.25^L \\to 0$), whereas ReLU has constant derivative $f'(z) = 1$ for all $z > 0$, allowing gradient signals to flow undiminished.",
      "Because ReLU is infinitely differentiable at $z = 0$.",
      "Because Sigmoid cannot be computed on modern GPUs."
    ],
    correctIndex: 1,
    hint: "Maximum value of sigmoid derivative is 0.25 at z=0. What happens when you chain 10 of them together?",
    explanation: "Sigmoid derivatives saturate rapidly: $\\frac{d\\sigma}{dz} = \\sigma(1-\\sigma) \\le 0.25$. In deep networks, the backpropagation chain rule multiplies these fractions, destroying gradients. ReLU has derivative 1 for all positive inputs."
  },
  {
    id: "d2-q7",
    module: "Deep Learning — 2D CNN Parameter Counting",
    slideRef: "PRMLS Day 3a Slide 15-30",
    question: "A convolutional layer has 32 input channels ($C_{\\text{in}} = 32$), 64 output filters ($C_{\\text{out}} = 64$), and a kernel size of $3 \\times 3$. Assuming each filter has 1 bias term, how many trainable parameters are in this layer?",
    options: [
      "$3 \\times 3 \\times 64 = 576$",
      "$(3 \\times 3 \\times 32 + 1) \\times 64 = (288 + 1) \\times 64 = 18,496$",
      "$32 \\times 64 = 2,048$",
      "$(3 \\times 3 + 1) \\times 64 = 640$"
    ],
    correctIndex: 1,
    hint: "Each of the 64 filters must span all 32 input channels, plus 1 bias.",
    explanation: "Each filter has size $K_h \\times K_w \\times C_{\\text{in}} = 3 \\times 3 \\times 32 = 288$ weights plus 1 bias = 289 parameters. With $C_{\\text{out}} = 64$ filters: $289 \\times 64 = 18,496$ trainable parameters."
  },
  {
    id: "d2-q8",
    module: "Deep Learning — CNN Architecture Design (PRS Q2a)",
    slideRef: "PRS Sample Paper Nov 2026 Q2a",
    question: "Why was flattening a $7 \\times 7 \\times 192$ feature map into a Dense(256) layer considered a fatal flaw in the Nov 2026 PRS exam question, and what was the official solution?",
    options: [
      "Flattening inverted the RGB color channels; replaced with Batch Normalization.",
      "Flattening created $(9408 + 1) \\times 256 = 2,408,704$ weights (93.4% of all network parameters), causing catastrophic overfitting on 5,000 images; replaced with GlobalAveragePooling2D which reduces parameters to 49,408 (98% reduction).",
      "Dense layers cannot perform classification; replaced with k-NN.",
      "Flattening caused division by zero in Softmax."
    ],
    correctIndex: 1,
    hint: "7 * 7 * 192 = 9408. Connecting 9408 inputs to 256 neurons requires 2.4 million weights!",
    explanation: "High-resolution feature maps feeding directly into wide Dense layers cause massive parameter explosion. Global Average Pooling (GAP) averages spatial $7 \\times 7$ dimensions into a single vector of length 192 with 0 parameters, eliminating the bottleneck."
  },
  {
    id: "d2-q9",
    module: "Sequential Models — LSTM Cell State Highway",
    slideRef: "PRMLS Day 4a Slide 20-38",
    question: "Why does an LSTM preserve long-term temporal memory while a standard vanilla RNN suffers from vanishing gradients?",
    options: [
      "Because LSTMs do not use backpropagation.",
      "Standard RNN multiplies the hidden state by recurrent weight matrix $W_{hh}^T$ at every time step ($W^T \\to 0$); LSTM maintains an additive cell state $\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t$ where gradients flow linearly through time without repeated matrix multiplications.",
      "Because LSTMs replace floating point numbers with discrete integers.",
      "Because LSTMs have an infinite receptive field in frequency."
    ],
    correctIndex: 1,
    hint: "Look at the update: cell state is ADDITIVE (c_t = f * c_{t-1} + ...), not multiplicative.",
    explanation: "The partial derivative $\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t$. If forget gate $\\mathbf{f}_t \\approx 1$, the gradient passes backward across hundreds of time steps with zero attenuation, acting as an error carousel."
  },
  {
    id: "d2-q10",
    module: "Sequential Models — Anomaly Autoencoders",
    slideRef: "PRS Sample Paper Nov 2026 Q2c",
    question: "In an industrial factory with 3,000 normal vibration sequences and only 2 abnormal breakdown recordings, why does supervised binary classification fail, and how does an Autoencoder solve it?",
    options: [
      "Supervised models cannot train on vibration data; use K-Means clustering.",
      "Extreme class imbalance (0.067% abnormal) causes supervised models to predict 'Normal' 100% of the time (99.93% accuracy) while missing all breakdowns; an Unsupervised Autoencoder is trained solely on normal signals to learn their manifold, flagging test samples with high reconstruction error ($e(\\mathbf{x}) > \\tau$).",
      "Autoencoders double the number of anomalies by generating deepfakes.",
      "Autoencoders invert the time axis via Dynamic Time Warping."
    ],
    correctIndex: 1,
    hint: "One-class classification: train ONLY on normal data and measure reconstruction error.",
    explanation: "With only 2 defective instances, a supervised model cannot learn the failure distribution. By training an autoencoder exclusively on normal data, the bottleneck learns normal physics. Any anomalous breakdown pattern produces high reconstruction MSE."
  }
];

// Post-Quiz NUS ISS Exam-Style Questions (Mastery Section)
window.DAY2_EXAM_QUESTIONS = [
  {
    id: "d2-exam-q1",
    title: "Question 1: Nyquist Sampling, Folding Frequency & Aliasing Calculation",
    topic: "Sensory Signal Processing / ISSM Day 1",
    totalMarks: 10,
    scenario: `
      An industrial telemetry vibration sensor samples acoustic emissions from a high-speed CNC cutting spindle at sampling frequency $f_s = 100\\text{ Hz}$.
      The continuous machine vibration signal contains three distinct harmonic components:
      $$x(t) = \\cos(2\\pi \\cdot 20 t) + \\cos(2\\pi \\cdot 80 t) + \\cos(2\\pi \\cdot 130 t)$$
    `,
    subparts: [
      { prompt: "State the Nyquist sampling criterion and calculate the Nyquist folding frequency $f_N$ for this sensor system.", marks: 2 },
      { prompt: "Determine the apparent digital frequency observed in the sampled data for each of the three harmonic components ($20\\text{ Hz}$, $80\\text{ Hz}$, and $130\\text{ Hz}$).", marks: 5 },
      { prompt: "Specify the exact hardware requirement to eliminate spectral aliasing before the signal enters memory.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Nyquist Criterion & Folding Frequency [2 Marks]:</strong></p>
      $$\\begin{aligned}
      f_N &= \\frac{f_s}{2} = \\frac{100\\text{ Hz}}{2} = \\mathbf{50\\text{ Hz}}
      \\end{aligned}$$
      <p>The Nyquist sampling criterion requires that the sampling rate strictly exceed twice the highest frequency component: $f_s > 2 f_{\\max}$.</p>

      <p><strong>Part (b) Observed Aliased Frequencies [5 Marks]:</strong></p>
      <p>When continuous frequency $f$ is sampled at $f_s$, the apparent observed digital frequency $f_{\\text{obs}}$ within the baseband $[0, f_N]$ is given by folding: $f_{\\text{obs}} = |f - k \\cdot f_s|$ for integer $k$:</p>
      <ol>
        <li><strong>Component 1 ($f_1 = 20\\text{ Hz}$):</strong>
          $$f_1 = 20\\text{ Hz} < f_N = 50\\text{ Hz}$$
          No aliasing occurs. Apparent frequency: $\\mathbf{20\\text{ Hz}}$.
        </li>
        <li><strong>Component 2 ($f_2 = 80\\text{ Hz}$):</strong>
          $$f_2 > f_N = 50\\text{ Hz} \\implies f_{\\text{alias}} = |80 - 1 \\times 100| = |-20| = \\mathbf{20\\text{ Hz}}$$
          Component 2 folds back and disguises itself as a <strong>$20\\text{ Hz}$ ghost signal</strong>! It collides directly with Component 1.
        </li>
        <li><strong>Component 3 ($f_3 = 130\\text{ Hz}$):</strong>
          $$f_3 > f_s \\implies f_{\\text{alias}} = |130 - 1 \\times 100| = 30\\text{ Hz} < f_N$$
          Apparent frequency: $\\mathbf{30\\text{ Hz}}$.
        </li>
      </ol>
      <p><strong>Resulting Digital Signal:</strong> The sampled digital spectrum will show energy only at $20\\text{ Hz}$ (with doubled amplitude!) and $30\\text{ Hz}$. The true high-frequency $80\\text{ Hz}$ and $130\\text{ Hz}$ vibrations are completely invisible.</p>

      <p><strong>Part (c) Anti-Aliasing Hardware Placement [3 Marks]:</strong></p>
      <ul>
        <li>An analog <strong>Low-Pass Anti-Aliasing Filter (AAF)</strong> with cutoff frequency $f_c \\le f_N = 50\\text{ Hz}$ must be installed.</li>
        <li><strong>Critical Placement:</strong> Strictly <strong>BEFORE the Analog-to-Digital Converter (ADC)</strong>. Once the continuous waveform is converted into discrete numbers by the ADC, high and low frequencies have collided into the same sampled values and cannot be separated by any digital post-processing software.</li>
      </ul>
    `,
    rubric: [
      "[+2 Marks] Correct folding frequency $f_N = 50\\text{ Hz}$ and Nyquist criterion formula.",
      "[+1 Mark] Component 1 = 20 Hz (unaliased).",
      "[+2 Marks] Component 2 = 20 Hz (folded ghost signal calculation $|80 - 100| = 20$).",
      "[+2 Marks] Component 3 = 30 Hz (calculation $|130 - 100| = 30$).",
      "[+3 Marks] Analog low-pass filter with cutoff $\\le 50\\text{ Hz}$ placed strictly before the ADC."
    ],
    examinerTrap: "Claiming that an aliased signal can be cleaned up using digital filtering (e.g. Butterworth or FFT in Python). Digital software filters cannot un-mix frequencies that were already folded during sampling."
  },
  {
    id: "d2-exam-q2",
    title: "Question 2: Dynamic Time Warping (DTW) Hand Calculation & Warping Path",
    topic: "Sensory Signals / ISSM Day 1 & PRS Q1d",
    totalMarks: 10,
    scenario: `
      Two sensor sequences $X$ (Template) and $Y$ (Test Signal) are recorded:
      $$X = [1, \\, 3, \\, 4, \\, 2], \\quad Y = [1, \\, 1, \\, 3, \\, 2]$$
      Both sequences are indexed from $1$ to $4$. Local distance is computed using absolute difference: $d(x_i, y_j) = |x_i - y_j|$.
      The cumulative distance matrix is computed using dynamic programming:
      $$D(i, j) = d(x_i, y_j) + \\min\\left(D(i-1, j), \\, D(i, j-1), \\, D(i-1, j-1)\\right)$$
      Boundary conditions: $D(0, 0) = 0$, $D(i, 0) = \\infty$, $D(0, j) = \\infty$.
    `,
    subparts: [
      { prompt: "Compute the $4 \\times 4$ pairwise local cost matrix $d(x_i, y_j)$.", marks: 3 },
      { prompt: "Compute the full $4 \\times 4$ cumulative dynamic programming cost matrix $D(i, j)$.", marks: 4 },
      { prompt: "Trace the optimal warping path from $(1, 1)$ to $(4, 4)$ and state the total DTW distance.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Local Cost Matrix $d(i, j) = |x_i - y_j|$ [3 Marks]:</strong></p>
      <table class="styled-table" style="font-size:0.85rem; width:100%; text-align:center;">
        <thead><tr><th>$X \\downarrow \\backslash Y \\rightarrow$</th><th>$y_1 = 1$</th><th>$y_2 = 1$</th><th>$y_3 = 3$</th><th>$y_4 = 2$</th></tr></thead>
        <tbody>
          <tr><td><strong>$x_1 = 1$</strong></td><td>$|1-1|=0$</td><td>$|1-1|=0$</td><td>$|1-3|=2$</td><td>$|1-2|=1$</td></tr>
          <tr><td><strong>$x_2 = 3$</strong></td><td>$|3-1|=2$</td><td>$|3-1|=2$</td><td>$|3-3|=0$</td><td>$|3-2|=1$</td></tr>
          <tr><td><strong>$x_3 = 4$</strong></td><td>$|4-1|=3$</td><td>$|4-1|=3$</td><td>$|4-3|=1$</td><td>$|4-2|=2$</td></tr>
          <tr><td><strong>$x_4 = 2$</strong></td><td>$|2-1|=1$</td><td>$|2-1|=1$</td><td>$|2-3|=1$</td><td>$|2-2|=0$</td></tr>
        </tbody>
      </table>

      <p><strong>Part (b) Cumulative Matrix $D(i, j)$ [4 Marks]:</strong></p>
      $$\\begin{aligned}
      \\text{Row 1: } & D(1,1) = 0 + 0 = 0 \\\\
      & D(1,2) = 0 + D(1,1) = 0 \\\\
      & D(1,3) = 2 + D(1,2) = 2 \\\\
      & D(1,4) = 1 + D(1,3) = 3 \\\\[6pt]
      \\text{Row 2: } & D(2,1) = 2 + D(1,1) = 2 \\\\
      & D(2,2) = 2 + \\min(2, 0, 0) = 2 \\\\
      & D(2,3) = 0 + \\min(2, 2, 0) = \\mathbf{0} \\\\
      & D(2,4) = 1 + \\min(0, 3, 2) = 1 \\\\[6pt]
      \\text{Row 3: } & D(3,1) = 3 + 2 = 5 \\\\
      & D(3,2) = 3 + \\min(5, 2, 2) = 5 \\\\
      & D(3,3) = 1 + \\min(5, 0, 2) = 1 \\\\
      & D(3,4) = 2 + \\min(1, 1, 0) = 2 \\\\[6pt]
      \\text{Row 4: } & D(4,1) = 1 + 5 = 6 \\\\
      & D(4,2) = 1 + \\min(6, 5, 5) = 6 \\\\
      & D(4,3) = 1 + \\min(6, 1, 1) = 2 \\\\
      & D(4,4) = 0 + \\min(2, 2, 1) = \\mathbf{1}
      \\end{aligned}$$

      <table class="styled-table" style="font-size:0.85rem; width:100%; text-align:center;">
        <thead><tr><th>$D(i, j)$</th><th>$j=1$</th><th>$j=2$</th><th>$j=3$</th><th>$j=4$</th></tr></thead>
        <tbody>
          <tr><td><strong>$i=1$</strong></td><td><strong>0</strong></td><td><strong>0</strong></td><td>2</td><td>3</td></tr>
          <tr><td><strong>$i=2$</strong></td><td>2</td><td>2</td><td><strong>0</strong></td><td>1</td></tr>
          <tr><td><strong>$i=3$</strong></td><td>5</td><td>5</td><td><strong>1</strong></td><td>2</td></tr>
          <tr><td><strong>$i=4$</strong></td><td>6</td><td>6</td><td>2</td><td><strong>1</strong></td></tr>
        </tbody>
      </table>

      <p><strong>Part (c) Optimal Warping Path & Total Cost [3 Marks]:</strong></p>
      <p>Backtracking from $(4, 4)$ to $(1, 1)$ choosing the minimum neighbor $\\min(D(i-1,j), D(i,j-1), D(i-1,j-1))$:</p>
      $$(4, 4) \\to (3, 3) \\to (2, 3) \\to (1, 2) \\to (1, 1)$$
      <p><strong>Optimal Warping Path:</strong> $\\mathcal{W} = \\{(1,1), \\, (1,2), \\, (2,3), \\, (3,3), \\, (4,4)\\}$.</p>
      <p><strong>Total DTW Distance:</strong> $D(4, 4) = \\mathbf{1.0}$. Notice how $x_1=1$ matches both $y_1=1$ and $y_2=1$ (time dilation), and $y_3=3$ matches both $x_2=3$ and $x_3=4$.</p>
    `,
    rubric: [
      "[+3 Marks] Correct $4 \\times 4$ local distance matrix.",
      "[+4 Marks] Step-by-step dynamic programming table with boundary initialization.",
      "[+2 Marks] Correct backtracking path: $(1,1) \\to (1,2) \\to (2,3) \\to (3,3) \\to (4,4)$.",
      "[+1 Mark] Final DTW cost $D(4, 4) = 1.0$."
    ],
    examinerTrap: "Evaluating only the diagonal (Euclidean distance). The diagonal path (1,1)->(2,2)->(3,3)->(4,4) has cost 0+2+1+0 = 3.0, whereas the non-linear DTW path achieves cost 1.0!"
  },
  {
    id: "d2-exam-q3",
    title: "Question 3: CNN Spatial Dimensions & Official PRS Q2a Redesign",
    topic: "PRS / PRMLS Day 3a (Official Sample Paper Nov 2026 Q2a)",
    totalMarks: 10,
    scenario: `
      In the Nov 2026 PRS Examination (Question 2a), an engineering team proposed a deep convolutional neural network (Table 4) to classify retail beverage containers into 18 Brands, 17 Types, and 3 Material Values using a dataset of 5,000 images ($112 \\times 112 \\times 3$).
      The architecture was specified as:
      <ol>
        <li><code>InputLayer</code>: $112 \\times 112 \\times 3$</li>
        <li><code>Conv2D_1</code>: 64 filters, kernel $3 \\times 3$, stride 1, padding 'same', ReLU</li>
        <li><code>MaxPooling2D_1</code>: pool size $2 \\times 2$, stride 2</li>
        <li><code>Conv2D_2</code>: 128 filters, kernel $3 \\times 3$, stride 1, padding 'same', ReLU</li>
        <li><code>MaxPooling2D_2</code>: pool size $2 \\times 2$, stride 2</li>
        <li><code>Conv2D_3</code>: 192 filters, kernel $3 \\times 3$, stride 1, padding 'same', ReLU</li>
        <li><code>MaxPooling2D_3</code>: pool size $4 \\times 4$, stride 4</li>
        <li><code>Flatten</code></li>
        <li><code>Dense_1</code>: 256 units, ReLU</li>
        <li><code>Dense_Output</code>: 918 units ($18 \\times 17 \\times 3$), Softmax</li>
      </ol>
    `,
    subparts: [
      { prompt: "Calculate the exact output spatial dimensions and trainable parameters for layers <code>Conv2D_3</code>, <code>MaxPooling2D_3</code>, and <code>Dense_1</code>.", marks: 4 },
      { prompt: "Critique the two major architectural flaws in Table 4 that cause catastrophic overfitting.", marks: 3 },
      { prompt: "Present the official redesigned architecture: replace the Flatten bottleneck and redesign the output head, calculating the resulting parameter reduction.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Spatial Dimension & Parameter Calculations [4 Marks]:</strong></p>
      <ul>
        <li><strong>After <code>MaxPooling2D_2</code>:</strong> Spatial size is $112 / 2 / 2 = 28 \\times 28$, with 128 channels.</li>
        <li><strong><code>Conv2D_3</code>:</strong>
          <ul>
            <li>Spatial size: $28 \\times 28 \\times 192$ (padding 'same').</li>
            <li>Trainable Params: $(3 \\times 3 \\times 128 + 1) \\times 192 = (1152 + 1) \\times 192 = \\mathbf{221,376}$.</li>
          </ul>
        </li>
        <li><strong><code>MaxPooling2D_3</code>:</strong>
          <ul>
            <li>Spatial size: $28 / 4 = 7 \\times 7 \\times 192$.</li>
            <li>Trainable Params: $\\mathbf{0}$ (pooling has no learnable weights).</li>
          </ul>
        </li>
        <li><strong><code>Flatten</code>:</strong> Vector length $7 \\times 7 \\times 192 = \\mathbf{9,408}$.</li>
        <li><strong><code>Dense_1</code> (256 units):</strong>
          <ul>
            <li>Trainable Params: $(9,408 + 1) \\times 256 = \\mathbf{2,408,704}$.</li>
          </ul>
        </li>
      </ul>

      <p><strong>Part (b) The Two Major Architectural Flaws [3 Marks]:</strong></p>
      <ol>
        <li><strong>Dense Parameter Explosion (Flatten Bottleneck):</strong> <code>Dense_1</code> contains 2.41 million parameters, representing <strong>93.4% of the entire network</strong>! With only 5,000 training images, the model memorizes pixel patterns and overfits completely.</li>
        <li><strong>Cartesian Product Output Head:</strong> A single 918-class output ($18 \\times 17 \\times 3$) requires predicting all combinations jointly. With 5,000 images across 918 classes, there are on average only <strong>~5.4 images per class</strong>, making accurate multi-class learning statistically impossible.</li>
      </ol>

      <p><strong>Part (c) The Redesigned Architecture [3 Marks]:</strong></p>
      <ol>
        <li><strong>Replace <code>Flatten</code> with <code>GlobalAveragePooling2D</code>:</strong>
          Collapses the $7 \\times 7 \\times 192$ feature map into a 192-dimensional vector with <strong>0 parameters</strong>.
          Feeding this into <code>Dense(256)</code> requires only $(192 + 1) \\times 256 = \\mathbf{49,408}$ weights (saving $2,359,296$ weights!).
        </li>
        <li><strong>Replace Single Output with 3 Parallel Multi-Task Heads:</strong>
          <ul>
            <li>Head 1 (Brand): <code>Dense(18, activation='softmax')</code>: $(256 + 1) \\times 18 = 4,626$ weights.</li>
            <li>Head 2 (Type): <code>Dense(17, activation='softmax')</code>: $(256 + 1) \\times 17 = 4,369$ weights.</li>
            <li>Head 3 (Material Value): <code>Dense(3, activation='softmax')</code>: $(256 + 1) \\times 3 = 771$ weights.</li>
          </ul>
        </li>
      </ol>
      <p><strong>Total Parameter Reduction:</strong> Original network had $\\approx 2,570,000$ params. Redesigned network has only $\\approx 69,398$ params — an astounding <strong>97.3% parameter reduction</strong> while dramatically improving generalization!</p>
    `,
    rubric: [
      "[+2 Marks] Correct spatial dimensions ($7 \\times 7 \\times 192 = 9408$) and Conv2D_3 params ($221,376$).",
      "[+2 Marks] Calculating Dense_1 weights: $(9408 + 1) \\times 256 = 2,408,704$.",
      "[+3 Marks] Identifying Flatten bottleneck (93% of weights) and 918-class Cartesian sparsity (5 imgs/class).",
      "[+3 Marks] Proposing GlobalAveragePooling2D and 3 parallel heads with exact parameter savings."
    ],
    examinerTrap: "Saying pooling layers have trainable parameters. MaxPooling2D always has 0 parameters. Also forgetting the +1 bias term when multiplying by the number of filters or dense neurons."
  },
  {
    id: "d2-exam-q4",
    title: "Question 4: LSTM Gating Mathematics & Error Carousel Proof",
    topic: "PRMLS Day 4a & PRS Q1d (Sequential Modeling)",
    totalMarks: 10,
    scenario: `
      An industrial telemetry monitoring system tracks sequential degradation across 100 consecutive sensor readings.
      The LSTM cell state updates at step $t$ according to:
      $$\\begin{aligned}
      \\mathbf{f}_t &= \\sigma(W_f \\mathbf{x}_t + U_f \\mathbf{h}_{t-1} + \\mathbf{b}_f) \\quad &(\\text{Forget Gate}) \\\\
      \\mathbf{i}_t &= \\sigma(W_i \\mathbf{x}_t + U_i \\mathbf{h}_{t-1} + \\mathbf{b}_i) \\quad &(\\text{Input Gate}) \\\\
      \\tilde{\\mathbf{c}}_t &= \\tanh(W_c \\mathbf{x}_t + U_c \\mathbf{h}_{t-1} + \\mathbf{b}_c) \\quad &(\\text{Candidate State}) \\\\
      \\mathbf{c}_t &= \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t \\quad &(\\text{Cell State Update}) \\\\
      \\mathbf{o}_t &= \\sigma(W_o \\mathbf{x}_t + U_o \\mathbf{h}_{t-1} + \\mathbf{b}_o) \\quad &(\\text{Output Gate}) \\\\
      \\mathbf{h}_t &= \\mathbf{o}_t \\odot \\tanh(\\mathbf{c}_t) \\quad &(\\text{Hidden State})
      \\end{aligned}$$
    `,
    subparts: [
      { prompt: "Compute the partial derivative $\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}}$ and explain how this prevents vanishing gradients across long time horizons.", marks: 4 },
      { prompt: "State the role of the Forget Gate $\\mathbf{f}_t$ when a sensor transition boundary (e.g. machine restart) occurs.", marks: 3 },
      { prompt: "Contrast how an LSTM handles temporal sequences compared to a 1D Convolutional Neural Network (Conv1D).", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) LSTM Gradient Highway Proof [4 Marks]:</strong></p>
      <p>From the cell state update equation:</p>
      $$\\mathbf{c}_t = \\mathbf{f}_t \\odot \\mathbf{c}_{t-1} + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t$$
      <p>Assuming the forget gate is saturated or constant with respect to $\\mathbf{c}_{t-1}$:</p>
      $$\\frac{\\partial \\mathbf{c}_t}{\\partial \\mathbf{c}_{t-1}} = \\mathbf{f}_t$$
      <p>Across $T$ time steps from step $t$ back to step $1$, the chain rule derivative is:</p>
      $$\\frac{\\partial \\mathbf{c}_T}{\\partial \\mathbf{c}_1} = \\prod_{k=2}^T \\frac{\\partial \\mathbf{c}_k}{\\partial \\mathbf{c}_{k-1}} = \\prod_{k=2}^T \\mathbf{f}_k$$
      <p><strong>Why this stops vanishing gradients:</strong> In a vanilla RNN, the gradient is multiplied by recurrent matrix $W_{hh}^T$ at every step. If the largest eigenvalue of $W_{hh}$ is $< 1$, $(W^T)^T \\to 0$ exponentially. In an LSTM, if the network learns to set forget gate $\\mathbf{f}_k \\approx 1$, the product equals 1. Gradients flow backwards across hundreds of time steps with <strong>zero exponential attenuation</strong> ('Constant Error Carousel').</p>

      <p><strong>Part (b) Role of the Forget Gate [3 Marks]:</strong></p>
      <ul>
        <li>The forget gate $\\mathbf{f}_t \\in (0, 1)$ dynamically controls how much of the past memory cell $\\mathbf{c}_{t-1}$ should be retained.</li>
        <li>When a machine restart or regime change occurs, the sensory inputs indicate that past historical trends are irrelevant. The gate outputs $\\mathbf{f}_t \\approx 0$, effectively resetting the cell state $\\mathbf{c}_t = 0 + \\mathbf{i}_t \\odot \\tilde{\\mathbf{c}}_t$, clearing outdated memory without requiring manual pipeline resets.</li>
      </ul>

      <p><strong>Part (c) LSTM vs 1D-CNN [3 Marks]:</strong></p>
      <table class="styled-table" style="font-size:0.85rem; width:100%;">
        <thead><tr><th>Architectural Trait</th><th>Recurrent LSTM</th><th>1D-CNN (Temporal Conv)</th></tr></thead>
        <tbody>
          <tr><td><strong>Temporal Receptive Field</strong></td><td>Theoretically unbounded (via internal memory state $\\mathbf{c}_t$)</td><td>Bounded by kernel size $K$ and network depth (unless dilated)</td></tr>
          <tr><td><strong>Computation & Parallelism</strong></td><td>Inherently sequential ($O(T)$ steps, cannot parallelize along time axis)</td><td>Fully parallel across the entire sequence length $T$ on GPUs</td></tr>
          <tr><td><strong>Memory Complexity</strong></td><td>Maintains hidden state $\\mathbf{h}_t$; fast streaming inference for IoT</td><td>Requires buffering historical window $W$</td></tr>
        </tbody>
      </table>
    `,
    rubric: [
      "[+2 Marks] Exact derivation: $\\partial \\mathbf{c}_t / \\partial \\mathbf{c}_{t-1} = \\mathbf{f}_t$.",
      "[+2 Marks] Explaining why additive linear highway prevents exponential vanishing gradient.",
      "[+3 Marks] Defining forget gate mechanism: $\\mathbf{f}_t \\approx 1$ preserves, $\\mathbf{f}_t \\approx 0$ clears memory on regime shift.",
      "[+3 Marks] Comparison with 1D-CNN: parallelism, receptive field, and streaming suitability."
    ],
    examinerTrap: "Confusing cell state c_t with hidden state h_t. The gradient highway operates along the additive cell state c_t, not the non-linear hidden state h_t."
  },
  {
    id: "d2-exam-q5",
    title: "Question 5: Unsupervised Anomaly Autoencoder Mathematical Formulation",
    topic: "PRS Nov 2026 Q2c & ISSM Day 3",
    totalMarks: 10,
    scenario: `
      An offshore wind turbine monitoring station records 3,000 normal vibration sequences (each of dimension $D = 128$) and only 2 verified catastrophic gearbox crack failure recordings.
      An engineer designs an undercomplete Autoencoder:
      $$\\hat{\\mathbf{x}} = g(f(\\mathbf{x})), \\quad f: \\mathbb{R}^{128} \\to \\mathbb{R}^{16}, \\quad g: \\mathbb{R}^{16} \\to \\mathbb{R}^{128}$$
      Trained solely on the 3,000 normal sequences using Mean Squared Error loss.
    `,
    subparts: [
      { prompt: "Define the Reconstruction Mean Squared Error $e(\\mathbf{x})$ and explain the physical principle of anomaly detection using bottleneck reconstruction.", marks: 4 },
      { prompt: "Formulate the decision rule for classifying test instance $\\mathbf{x}^*$ as anomalous, specifying how threshold $\\tau$ is calibrated from validation data.", marks: 3 },
      { prompt: "Explain why this unsupervised autoencoder outperforms a supervised SVM or Random Forest trained on the original dataset.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) Reconstruction Error & Bottleneck Physics [4 Marks]:</strong></p>
      $$\\mathbf{e(x) = \\frac{1}{D} \\sum_{j=1}^D (x_j - \\hat{x}_j)^2 = \\frac{1}{D} \\|\\mathbf{x} - g(f(\\mathbf{x}))\\|^2}$$
      <p><strong>Physical Principle:</strong> The bottleneck dimension ($d = 16 \\ll 128$) forces the autoencoder to learn a low-dimensional manifold capturing only the dominant correlations and normal operating frequencies of healthy wind turbine operation. When healthy data enters, the network easily reconstructs it with near-zero error ($e(\\mathbf{x}) \\approx 0$). When an anomalous crack vibration pattern enters, its spectral dynamics do not lie on the learned normal manifold; the bottleneck cannot represent it, causing the reconstruction error to <strong>spike dramatically</strong>.</p>

      <p><strong>Part (b) Decision Rule & Threshold Calibration [3 Marks]:</strong></p>
      $$\\text{Prediction}(\\mathbf{x}^*) = \\begin{cases} \\text{Anomalous (Failure)}, & \\text{if } e(\\mathbf{x}^*) > \\tau \\\\ \\text{Normal}, & \\text{if } e(\\mathbf{x}^*) \\le \\tau \\end{cases}$$
      <p><strong>Threshold Calibration on Normal Validation Set:</strong></p>
      <ol>
        <li>Compute reconstruction errors on held-out normal validation set: $\\{e_1, e_2, \\dots, e_{N_{\\text{val}}}\\}$.</li>
        <li>Calculate sample mean $\\mu_e$ and standard deviation $\\sigma_e$.</li>
        <li>Set threshold using statistical tolerance (e.g. 3-sigma rule):
        $$\\tau = \\mu_e + 3 \\sigma_e \\quad \\text{or percentile threshold } \\tau = P_{99.5}$$
        This guarantees a false alarm rate $\\le 0.5\\%$.</li>
      </ol>

      <p><strong>Part (c) Why Supervised Classifiers Fail [3 Marks]:</strong></p>
      <ul>
        <li><strong>Extreme Imbalance:</strong> With 3,000 normal cases and only 2 abnormal instances (0.067%), a supervised classifier achieves 99.93% accuracy by simply predicting 'Normal' all the time, completely missing every catastrophic failure.</li>
        <li><strong>Overfitting to Specific Failures:</strong> A supervised model with 2 failure examples will merely memorize those specific 2 sensor traces. It will fail to detect novel, unseen failure modes (e.g. bearing seizure vs gear tooth fracture). The unsupervised autoencoder flags <em>any</em> deviation from normality.</li>
      </ul>
    `,
    rubric: [
      "[+2 Marks] Reconstruction MSE formula: $e(\\mathbf{x}) = \\frac{1}{D} \\sum (x_j - \\hat{x}_j)^2$.",
      "[+2 Marks] Physical explanation: bottleneck compresses normal manifold; anomalies cannot be reconstructed.",
      "[+3 Marks] Formal decision rule $e(\\mathbf{x}^*) > \\tau$ and statistical calibration $\\tau = \\mu_e + 3\\sigma_e$.",
      "[+3 Marks] Rigorous explanation of supervised failure: 99.93% trivial majority baseline and failure on novel anomaly modes."
    ],
    examinerTrap: "Using classification accuracy to evaluate the model on imbalanced anomaly data. 99.93% accuracy is worthless when 100% of failures are missed."
  },
  {
    id: "d2-exam-q6",
    title: "Question 6: 2D Haar Wavelet Energy Conservation & VAE Reparameterization Calculus",
    topic: "ISSM Day 2 & PRMLS Day 4b (Transforms & Generative Models)",
    totalMarks: 10,
    scenario: `
      An optical sorting sensor captures a $2 \\times 2$ pixel patch from a conveyor belt camera:
      $$X = \\begin{bmatrix} 8 & 4 \\\\ 6 & 2 \\end{bmatrix}$$
      The orthogonal 1D Haar analysis filter pair is:
      $$h = \\left[ \\frac{1}{\\sqrt{2}}, \\, \\frac{1}{\\sqrt{2}} \\right] \\quad (\\text{Low-pass}), \\quad g = \\left[ \\frac{1}{\\sqrt{2}}, \\, -\\frac{1}{\\sqrt{2}} \\right] \\quad (\\text{High-pass})$$
      Separately, a generative quality-inspection Variational Autoencoder (VAE) maps sensory inputs to a continuous latent space $\\mathbb{R}^d$.
      For a given image, the encoder predicts latent distribution parameters for dimension $j$:
      $$\\mu_j = 0.50, \\quad \\sigma_j^2 = 0.64 \\quad (\\sigma_j = 0.80)$$
      The Gaussian KL-divergence regularization term is:
      $$D_{\\text{KL}}\\left( \\mathcal{N}(\\mu, \\sigma^2) \\parallel \\mathcal{N}(0, 1) \\right) = -\\frac{1}{2} \\left( 1 + \\ln(\\sigma^2) - \\mu^2 - \\sigma^2 \\right)$$
    `,
    subparts: [
      { prompt: "Compute the 2D Haar subband decomposition values ($LL, LH, HL, HH$) for patch $X$, and verify Parseval's energy conservation.", marks: 4 },
      { prompt: "Calculate the exact KL-divergence loss for latent dimension $j$ with $\\mu_j = 0.50$ and $\\sigma_j^2 = 0.64$ (using $\\ln(0.64) \\approx -0.4463$).", marks: 3 },
      { prompt: "Formulate the VAE Reparameterization Trick and explain mathematically why gradient backpropagation fails if latent vector $\\mathbf{z}$ is sampled directly from $\\mathcal{N}(\\boldsymbol{\\mu}, \\boldsymbol{\\Sigma})$.", marks: 3 }
    ],
    solution: `
      <p><strong>Part (a) 2D Haar Wavelet Decomposition & Parseval Conservation [4 Marks]:</strong></p>
      <p>1. <strong>Row-wise Transform:</strong></p>
      $$\\begin{aligned}
      \\text{Row 1: } & A_{\\text{row1}} = \\frac{8 + 4}{\\sqrt{2}} = \\frac{12}{\\sqrt{2}} = 6\\sqrt{2}, \\quad D_{\\text{row1}} = \\frac{8 - 4}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2} \\\\
      \\text{Row 2: } & A_{\\text{row2}} = \\frac{6 + 2}{\\sqrt{2}} = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}, \\quad D_{\\text{row2}} = \\frac{6 - 2}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}
      \\end{aligned}$$
      <p>Intermediate matrix after row filtering: $\\tilde{X} = \\begin{bmatrix} 6\\sqrt{2} & 2\\sqrt{2} \\\\ 4\\sqrt{2} & 2\\sqrt{2} \\end{bmatrix}$.</p>

      <p>2. <strong>Column-wise Transform on $\\tilde{X}$:</strong></p>
      $$\\begin{aligned}
      LL &= \\frac{6\\sqrt{2} + 4\\sqrt{2}}{\\sqrt{2}} = 6 + 4 = \\mathbf{10} \\\\
      HL &= \\frac{6\\sqrt{2} - 4\\sqrt{2}}{\\sqrt{2}} = 6 - 4 = \\mathbf{2} \\\\
      LH &= \\frac{2\\sqrt{2} + 2\\sqrt{2}}{\\sqrt{2}} = 2 + 2 = \\mathbf{4} \\\\
      HH &= \\frac{2\\sqrt{2} - 2\\sqrt{2}}{\\sqrt{2}} = 2 - 2 = \\mathbf{0}
      \\end{aligned}$$
      <p>Subband Matrix: $\\begin{bmatrix} LL & LH \\\\ HL & HH \\end{bmatrix} = \\begin{bmatrix} 10 & 4 \\\\ 2 & 0 \\end{bmatrix}$.</p>

      <p>3. <strong>Parseval Energy Verification:</strong></p>
      $$\\begin{aligned}
      E_{\\text{spatial}} &= 8^2 + 4^2 + 6^2 + 2^2 = 64 + 16 + 36 + 4 = \\mathbf{120} \\\\
      E_{\\text{wavelet}} &= LL^2 + LH^2 + HL^2 + HH^2 = 10^2 + 4^2 + 2^2 + 0^2 = 100 + 16 + 4 + 0 = \\mathbf{120}
      \\end{aligned}$$
      <p>$E_{\\text{spatial}} = E_{\\text{wavelet}} = 120$. Energy is strictly conserved! Notice that the $LL$ subband captures $100 / 120 = \\mathbf{83.3\\%}$ of the entire signal energy.</p>

      <p><strong>Part (b) Latent KL Divergence Calculation [3 Marks]:</strong></p>
      $$\\begin{aligned}
      D_{\\text{KL}} &= -\\frac{1}{2} \\left( 1 + \\ln(0.64) - (0.50)^2 - 0.64 \\right) \\\\
      &= -\\frac{1}{2} \\left( 1 - 0.4463 - 0.25 - 0.64 \\right) \\\\
      &= -\\frac{1}{2} \\left( 1 - 1.3363 \\right) \\\\
      &= -\\frac{1}{2} \\left( -0.3363 \\right) = \\mathbf{0.16815} \\approx \\mathbf{0.168}
      \\end{aligned}$$

      <p><strong>Part (c) Reparameterization Trick & Gradient Flow [3 Marks]:</strong></p>
      <ul>
        <li><strong>Why Direct Sampling Fails:</strong> If $\\mathbf{z} \\sim \\mathcal{N}(\\boldsymbol{\\mu}, \\boldsymbol{\\sigma}^2)$, the sampling operation is a stochastic black box. The gradient $\\frac{\\partial \\mathbf{z}}{\\partial \\boldsymbol{\\mu}}$ and $\\frac{\\partial \\mathbf{z}}{\\partial \\boldsymbol{\\sigma}}$ does not exist because standard backpropagation requires deterministic, continuous functional relationships.</li>
        <li><strong>The Trick:</strong> Introduce an independent standard normal noise vector $\\boldsymbol{\\epsilon} \\sim \\mathcal{N}(\\mathbf{0}, \\mathbf{I})$ and compute:
        $$\\mathbf{z} = \\boldsymbol{\\mu}(\\mathbf{x}) + \\boldsymbol{\\sigma}(\\mathbf{x}) \\odot \\boldsymbol{\\epsilon}$$
        Now $\\mathbf{z}$ is a deterministic linear transformation of $\\boldsymbol{\\mu}$ and $\\boldsymbol{\\sigma}$. The stochasticity is pushed into external leaf node $\\boldsymbol{\\epsilon}$ (which requires no gradients), allowing $\\frac{\\partial \\mathcal{L}}{\\partial \\boldsymbol{\\mu}} = \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{z}}$ and $\\frac{\\partial \\mathcal{L}}{\\partial \\boldsymbol{\\sigma}} = \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{z}} \\odot \\boldsymbol{\\epsilon}$ to flow end-to-end to the encoder!</li>
      </ul>
    `,
    rubric: [
      "[+2 Marks] Accurate row and column Haar calculations yielding LL=10, LH=4, HL=2, HH=0.",
      "[+2 Marks] Parseval energy conservation proof: $64+16+36+4 = 100+16+4+0 = 120$.",
      "[+3 Marks] Step-by-step Gaussian KL-divergence calculation: $-\\frac{1}{2}(1 - 0.4463 - 0.25 - 0.64) \\approx 0.168$.",
      "[+3 Marks] Explaining the reparameterization formula $\\mathbf{z} = \\boldsymbol{\\mu} + \\boldsymbol{\\sigma} \\odot \\boldsymbol{\\epsilon}$ and why direct sampling blocks backpropagation."
    ],
    examinerTrap: "Dividing by 2 instead of sqrt(2) in the Haar filter, which violates orthogonality and causes energy to shrink by half at each stage. Always use 1/sqrt(2) for orthonormal wavelets."
  }
];
