// Day 3 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions

window.DAY3_TRANSFORMS_BAYES_QUIZZES = [
  {
    id: "d3-q1",
    module: "Intelligent Sensing Systems — Transforms",
    slideRef: "ISSM Day 2 Slide 5-8",
    question: "Why does the standard Fast Fourier Transform (FFT) fail when analyzing non-stationary signals like speech or machine vibration shocks?",
    options: [
      "Because FFT requires inputs to be 2D matrices.",
      "Because FFT is time-blind: it integrates across the entire duration of the signal, telling you which frequencies exist globally, but providing zero information about WHEN those frequencies occurred.",
      "Because FFT cannot handle sinusoidal waves.",
      "Because FFT produces complex numbers which cannot be plotted."
    ],
    correctIndex: 1,
    hint: "Think about musical notes: FFT tells you which notes were played across a whole symphony, but not the sheet music order!",
    explanation: "Standard Fourier Transform uses sinusoidal basis functions that extend from $-\\infty$ to $+\\infty$. Consequently, it loses all temporal localization. For non-stationary signals where frequency changes over time, time-frequency analysis (STFT or Wavelets) is required."
  },
  {
    id: "d3-q2",
    module: "Intelligent Sensing Systems — STFT",
    slideRef: "ISSM Day 2 Slide 9-12",
    question: "According to the Heisenberg-Gabor Uncertainty Principle in Short-Time Fourier Transform (STFT), what happens if you choose a very narrow sliding time window?",
    options: [
      "Both time resolution and frequency resolution become infinitely sharp.",
      "Time resolution becomes very sharp (you know precisely when events occur), but frequency resolution becomes blurry (you cannot distinguish close frequencies).",
      "Frequency resolution becomes sharp, but time resolution becomes blurry.",
      "The computation time drops to zero."
    ],
    correctIndex: 1,
    hint: "Narrow window in time means broad spread in frequency: $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$.",
    explanation: "The Heisenberg-Gabor limit states $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$. A narrow window isolates exact moments in time ($\\Delta t$ small) but truncates the waveform so severely that frequency peaks blur ($\\Delta f$ large)."
  },
  {
    id: "d3-q3",
    module: "Intelligent Sensing Systems — Haar Wavelets",
    slideRef: "ISSM Day 2 Slide 16 & Worksheet",
    question: "Given a 2-sample sensor signal pair $[x_1, x_2] = [8, 4]$, what are the Haar wavelet Low-Pass Approximation coefficient ($A$) and High-Pass Detail coefficient ($D$)?",
    options: [
      "$A = 12 / \\sqrt{2} = 8.485$, $D = -4 / \\sqrt{2} = -2.828$",
      "$A = 4 / \\sqrt{2} = 2.828$, $D = 12 / \\sqrt{2} = 8.485$",
      "$A = 6.0$, $D = 2.0$",
      "$A = 32$, $D = 2$"
    ],
    correctIndex: 0,
    hint: "$A = (x_1 + x_2) / \\sqrt{2}$ and $D = (x_2 - x_1) / \\sqrt{2}$.",
    explanation: "Using the orthonormal Haar filter: $A = (8 + 4) / \\sqrt{2} = 12 / \\sqrt{2} \\approx 8.4853$. $D = (4 - 8) / \\sqrt{2} = -4 / \\sqrt{2} \\approx -2.8284$."
  },
  {
    id: "d3-q4",
    module: "Intelligent Sensing Systems — Wavelet 2D",
    slideRef: "ISSM Day 2 Slide 20-22",
    question: "In 2D Discrete Wavelet Transform (DWT) of an image, which subband captures horizontal edges and boundaries?",
    options: [
      "LL (Low-Low Approximation)",
      "LH (Low-pass on columns, High-pass on rows)",
      "HL (High-pass on columns, Low-pass on rows)",
      "HH (High-High Diagonal)"
    ],
    correctIndex: 1,
    hint: "High-pass along rows highlights horizontal intensity transitions.",
    explanation: "In 2D wavelet decomposition: LL is the scaled approximation image; LH captures horizontal edges; HL captures vertical edges; and HH captures diagonal high-frequency textures."
  },
  {
    id: "d3-q5",
    module: "Intelligent Sensing Systems — Pipe Choke Case",
    slideRef: "ISSM Day 2 Worksheet Slide 3-5",
    question: "In the automated pipe inspection worksheet, flow rate sensor readings drop sharply from 0.8 to 0.4 m/s at index 1. Why does the Haar high-pass filter $[-1/\\sqrt{2}, 1/\\sqrt{2}]$ successfully identify this blockage?",
    options: [
      "Because the detail coefficient spikes with a large negative value $D = (0.4 - 0.8) / \\sqrt{2} = -0.2828$, clearly flagging the abrupt transient discontinuity.",
      "Because the approximation coefficient drops to zero.",
      "Because flow rate is converted into audio decibels.",
      "Because Haar filters invert the pipe geometry."
    ],
    correctIndex: 0,
    hint: "Haar detail measures difference: $D = (0.4 - 0.8) / \\sqrt{2} = -0.4 / 1.414 = -0.2828$.",
    explanation: "The high-pass Haar detail filter computes step differences. Steady flow produces near-zero detail coefficients, but the sudden choke drop yields a dramatic spike of $-0.2828$, easily caught by a threshold detector."
  },
  {
    id: "d3-q6",
    module: "Cognitive Systems — Marr's Levels",
    slideRef: "CS Day 1 PM (JR) Slide 18-24",
    question: "According to David Marr's classic 3-stage model of visual cognition, what is the correct progression from raw retinal pixels to understanding?",
    options: [
      "3D Model $\\to$ 2.5D Sketch $\\to$ Primal Sketch",
      "Primal Sketch (edges/zero-crossings) $\\to$ 2.5D Sketch (viewer-centered depth/surface orientation) $\\to$ 3D Model (object-centered structural description)",
      "Pixels $\\to$ CNN $\\to$ Softmax",
      "Sensory Store $\\to$ Working Memory $\\to$ Long-Term Memory"
    ],
    correctIndex: 1,
    hint: "Early vision finds 2D edges, middle vision computes viewer-centered depth (2.5D), late vision forms 3D models.",
    explanation: "Marr's framework: (1) Primal Sketch extracts 2D geometry, edges, and textures; (2) 2.5D Sketch derives viewer-centered depth and surface normals; (3) 3D Model constructs invariant, object-centered 3D volumetric representations for semantic reasoning."
  },
  {
    id: "d3-q7",
    module: "Cognitive Systems — Audio Cognition",
    slideRef: "CS Day 2 (Gary) Slide 15-22",
    question: "Why do modern speech recognition models (e.g. Whisper, Wav2Vec2) and audio perception systems transform linear frequency Hertz into the Mel Scale?",
    options: [
      "Because the Mel scale uses binary numbers.",
      "Because human hearing perceives pitch logarithmically rather than linearly: we have high frequency resolution below 1 kHz and much lower resolution at higher frequencies.",
      "Because Mel-spectrograms eliminate all audio noise.",
      "Because sound travels faster in the Mel domain."
    ],
    correctIndex: 1,
    hint: "Human ears distinguish 100 Hz vs 200 Hz easily, but cannot easily tell 10,000 Hz from 10,100 Hz.",
    explanation: "The Mel scale mimics human cochlear perception: linear spacing below 1 kHz and logarithmic spacing above 1 kHz. This concentrates neural network capacity where human phonetic distinctions actually occur."
  },
  {
    id: "d3-q8",
    module: "Machine Reasoning — Bayesian Networks",
    slideRef: "MR Day 2 (JR) Slide 79-84",
    question: "In a Bayesian Belief Network with variables $X_1, X_2, \\dots, X_n$, how is the full joint probability distribution factored?",
    options: [
      "$P(X_1, \\dots, X_n) = \\sum_{i=1}^n P(X_i)$",
      "$P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))$",
      "$P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Children}(X_i))$",
      "$P(X_1, \\dots, X_n) = \\frac{1}{n} \\sum P(X_i)$"
    ],
    correctIndex: 1,
    hint: "Each node is conditionally independent of its non-descendants given its parents.",
    explanation: "A Bayesian Network's core power is factoring the exponentially large joint distribution into a product of local conditional probability tables: $P(X_1, \\dots, X_n) = \\prod_{i=1}^n P(X_i \\mid \\text{Parents}(X_i))$."
  },
  {
    id: "d3-q9",
    module: "Machine Reasoning — D-Separation",
    slideRef: "MR Day 2 (JR) Slide 81-83",
    question: "In the Burglary-Earthquake Bayesian Network where Alarm is a common effect ($B \\to A \\leftarrow E$), are Burglary and Earthquake independent, and what happens when Alarm is observed?",
    options: [
      "They are always dependent under all conditions.",
      "Burglary and Earthquake are marginally independent, but become CONDITIONALLY DEPENDENT when Alarm is observed (the 'Explaining Away' phenomenon / v-structure).",
      "They become permanently independent only when Alarm is true.",
      "Earthquake causes Burglary."
    ],
    correctIndex: 1,
    hint: "In a v-structure (collider), conditioning on the common child opens the path between the parents!",
    explanation: "In a collider / v-structure ($B \\to A \\leftarrow E$), $B$ and $E$ are independent priors. However, if the Alarm sounds, learning that an Earthquake occurred 'explains away' the alarm, drastically reducing the probability of Burglary. Thus, observing $A$ induces conditional dependence."
  },
  {
    id: "d3-q10",
    module: "Intelligent Sensing Systems — EM Algorithm",
    slideRef: "ISSM Day 2 Slide 41-47",
    question: "In the Expectation-Maximization (EM) algorithm applied to latent clustering (e.g. the 18-dice toy task), what occurs during the E-step and M-step?",
    options: [
      "E-step optimizes neural network weights; M-step computes cross-entropy.",
      "E-step calculates the expected posterior probabilities (responsibilities) of the hidden latent classes given current parameters; M-step updates the parameters to maximize the expected log-likelihood based on those responsibilities.",
      "E-step eliminates outliers; M-step computes the Fast Fourier Transform.",
      "E-step assigns points strictly to the nearest centroid with 0 or 1 weights."
    ],
    correctIndex: 1,
    hint: "E-step: Expectation / soft assignment. M-step: Maximization / re-estimate parameters.",
    explanation: "The EM algorithm iteratively solves missing-data problems: E-step calculates soft responsibility weights for latent labels given current parameter guesses; M-step calculates new maximum likelihood estimates using those soft weights until convergence."
  }
];
