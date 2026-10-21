// Day 2 Mastery Quizzes: Sensory Signal Transformation
// Formulated from Dr. TIAN Jing's 48-page lecture slides & 6-slide worksheet

window.DAY2_QUIZZES = [
  {
    id: "d2-q1",
    module: "Time-Frequency Trade-off",
    slideRef: "PDF Slide 12-14 (Heisenberg-Gabor Uncertainty)",
    question: "According to the Heisenberg-Gabor Uncertainty Principle in Short-Time Fourier Transform (STFT), what occurs when you decrease the time-window length \\(w(t)\\) to achieve sharper temporal localization?",
    options: [
      "Time resolution improves, but frequency resolution worsens (frequency bins become blurrier).",
      "Both time resolution and frequency resolution improve simultaneously.",
      "Frequency resolution improves, but time resolution worsens.",
      "The signal is completely converted into a continuous wavelet without resolution loss."
    ],
    answer: 0,
    hint: "Think of \\(\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}\\). If \\(\\Delta t\\) gets smaller, what must happen to \\(\\Delta f\\)?",
    explanation: "Under the Gabor uncertainty limit \\(\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}\\), you cannot simultaneously attain arbitrarily fine resolution in both time and frequency. Narrowing the analysis window \\(w(t)\\) isolates 'when' an event happens with high precision (smaller \\(\\Delta t\\)), but truncates the oscillation cycles needed to distinguish nearby frequencies, broadening the spectral lobes and degrading frequency resolution (larger \\(\\Delta f\\))."
  },
  {
    id: "d2-q2",
    module: "Fourier Transform Limitation",
    slideRef: "PDF Slide 8-11 (Fourier Blindness)",
    question: "Suppose a sensor signal contains a 5 Hz vibration burst from \\(t=0\\) to \\(1\\) s, followed by a 25 Hz burst from \\(t=1\\) to \\(2\\) s. If you compute its standard Fourier Transform \\(X(f)\\), what critical information is lost?",
    options: [
      "The exact frequency values (5 Hz and 25 Hz) cannot be detected.",
      "The time localization of when each frequency occurred is lost, because the basis sinusoids \\(e^{-i 2\\pi f t}\\) integrate across all time \\((-\\infty, \\infty)\\).",
      "The overall energy of the signal is destroyed.",
      "The Fourier Transform cannot process signals with frequencies higher than 10 Hz."
    ],
    answer: 1,
    hint: "Notice that swapping the order (25 Hz first, then 5 Hz) yields the exact same Fourier amplitude spectrum \\(|X(f)|\\).",
    explanation: "The standard Fourier Transform multiplies the signal by infinite sinusoids \\(e^{-i 2\\pi f t}\\) integrated across all time. It tells you WHAT frequencies exist globally in the signal, but is completely blind to WHEN they occurred. Swapping the time order of the two frequency bursts yields virtually identical Fourier magnitude spectra, making standard FT unsuitable for non-stationary signals like footsteps, speech, or sudden pipe chokes."
  },
  {
    id: "d2-q3",
    module: "Wavelet Multiresolution Analysis",
    slideRef: "PDF Slide 15 & 23-24 (Multiresolution Analysis)",
    question: "How does the Continuous/Discrete Wavelet Transform solve the rigid windowing dilemma of the STFT?",
    options: [
      "By fixing the window length to a constant 1 millisecond across all frequencies.",
      "By using short time windows at high frequencies (to pinpoint transient spikes) and long time windows at low frequencies (to precisely resolve slow oscillations).",
      "By completely discarding the frequency domain and only analyzing time-domain derivatives.",
      "By applying a linear neural network to predict the missing time coordinates."
    ],
    answer: 1,
    hint: "Recall the wavelet dilation formula \\(\\psi_{a,b}(t) = \\frac{1}{\\sqrt{a}} \\psi\\left(\\frac{t - b}{a}\\right)\\). When scale \\(a\\) is small, frequency is high and window duration is short.",
    explanation: "Wavelet Multiresolution Analysis (MRA) uses flexible, adaptive time-frequency tiles. High-frequency transients (like cracks, impacts, or rapid transitions) need sharp time resolution, which wavelets provide via contracted (narrow) wavelets. Low-frequency signals (like slow breathing or baseline drift) need sharp frequency resolution, provided via dilated (broad) wavelets."
  },
  {
    id: "d2-q4",
    module: "Haar Wavelet 1D Calculation",
    slideRef: "PDF Slide 17-18 & Slide 17 Video (Haar Toy Example)",
    question: "Given the 4-sample sequence \\(x = [9, 7, 3, 5]\\) and the normalized Haar decomposition low-pass filter \\([\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]\\) and high-pass filter \\([-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]\\), what are the Level 1 approximation \\(A_1\\) and detail \\(D_1\\) coefficients before Level 2?",
    options: [
      "\\(A_1 = [8\\sqrt{2}, 4\\sqrt{2}]\\), \\(D_1 = [-\\sqrt{2}, \\sqrt{2}]\\)",
      "\\(A_1 = [16, 8]\\), \\(D_1 = [2, -2]\\)",
      "\\(A_1 = [4, 4]\\), \\(D_1 = [1, 1]\\)",
      "\\(A_1 = [12, -4]\\), \\(D_1 = [0, 0]\\)"
    ],
    answer: 0,
    hint: "Compute: \\(A_1[0] = 9 \\cdot \\frac{\\sqrt{2}}{2} + 7 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{16\\sqrt{2}}{2} = 8\\sqrt{2}\\). Then compute \\(D_1[0] = -9 \\cdot \\frac{\\sqrt{2}}{2} + 7 \\cdot \\frac{\\sqrt{2}}{2}\\).",
    explanation: "Using the orthonormal Haar filters: \\(A_1[0] = \\frac{9+7}{\\sqrt{2}} = 8\\sqrt{2}\\), \\(A_1[1] = \\frac{3+5}{\\sqrt{2}} = 4\\sqrt{2}\\). For high-pass detail: \\(D_1[0] = \\frac{-9+7}{\\sqrt{2}} = -\\sqrt{2}\\), \\(D_1[1] = \\frac{-3+5}{\\sqrt{2}} = \\sqrt{2}\\). When decomposed to Level 2, \\(A_1\\) yields Level 2 approximation \\(A_2 = [12]\\) and detail \\(D_2 = [-4]\\), producing the final transformed vector \\([12, -4, -\\sqrt{2}, \\sqrt{2}]\\)."
  },
  {
    id: "d2-q5",
    module: "2D Wavelet Subbands",
    slideRef: "PDF Slide 25-27 (2D Wavelet Decomposition)",
    question: "In 2D Discrete Wavelet Transform applied to images or 2D sensory spectrograms, what physical features are captured by the \\(HL\\) (High-pass rows, Low-pass columns) subband?",
    options: [
      "Smooth global average (coarse approximation).",
      "Horizontal edges (vertical frequency variations).",
      "Vertical edges (horizontal frequency variations).",
      "Diagonal corner features only."
    ],
    answer: 2,
    hint: "High-pass along the horizontal dimension detects rapid changes across columns (vertical edges), while low-pass along vertical smooths within columns.",
    explanation: "The 2D DWT separates an image into 4 subbands: \\(LL\\) (Approximation), \\(LH\\) (Low-pass horizontal, High-pass vertical \\(\\to\\) detects horizontal edges), \\(HL\\) (High-pass horizontal, Low-pass vertical \\(\\to\\) detects vertical edges), and \\(HH\\) (High-pass horizontal & vertical \\(\\to\\) detects diagonal edges and corners)."
  },
  {
    id: "d2-q6",
    module: "Discrete Wavelet Transform (DWT)",
    slideRef: "PDF Slide 22-23 (Dyadic Sampling)",
    question: "Why is the Discrete Wavelet Transform (DWT) computed using a dyadic grid (scales \\(a = 2^j\\) and shifts \\(b = k 2^j\\)) rather than continuous evaluation?",
    options: [
      "To completely eliminate noise without requiring any mathematics.",
      "Because the Continuous Wavelet Transform (CWT) is computationally prohibitive and generates massive redundant data; dyadic sampling provides an orthonormal, non-redundant, and computationally efficient representation via filter banks.",
      "Because digital computers can only multiply numbers that are powers of 2.",
      "Because dyadic sampling converts non-linear differential equations into linear algebraic equations."
    ],
    answer: 1,
    hint: "Mallat's pyramid algorithm uses dyadic powers of 2 to achieve \\(O(N)\\) complexity.",
    explanation: "CWT calculates wavelet coefficients for every possible continuous scale and shift, creating huge data redundancy and heavy computation. DWT discretizes scales in powers of 2 (\\(2^j\\)) and translations proportionally (\\(k \\cdot 2^j\\)). This dyadic grid allows the fast Mallat filter bank algorithm to run in linear \\(O(N)\\) time, while retaining perfect reconstruction capability."
  },
  {
    id: "d2-q7",
    module: "Naive Bayes Classification",
    slideRef: "PDF Slide 29-33 (Bayes Decision Rule)",
    question: "What is the 'naive' assumption made by the Naive Bayes classifier when calculating the posterior probability \\(P(C_k | X)\\) for a feature vector \\(X = (x_1, x_2, \\dots, x_d)\\)?",
    options: [
      "All class prior probabilities \\(P(C_k)\\) must be exactly equal.",
      "All sensor features are strictly conditionally independent given the class label: \\(P(X|C_k) = \\prod_{i=1}^d P(x_i|C_k)\\).",
      "All feature values must follow a uniform distribution between 0 and 1.",
      "The classifier assumes that the training data has zero measurement error."
    ],
    answer: 1,
    hint: "'Naive' refers to treating features as if knowing one feature tells you nothing about another feature, once the class is fixed.",
    explanation: "The Naive Bayes model simplifies the joint likelihood \\(P(x_1, \\dots, x_d | C_k)\\) by assuming that each feature \\(x_i\\) is conditionally independent of every other feature \\(x_j\\) given the class \\(C_k\\). Even though this assumption is rarely strictly true in real physical sensors (where accelerometer axes are physically coupled), Naive Bayes performs remarkably well and avoids the curse of dimensionality."
  },
  {
    id: "d2-q8",
    module: "Expectation-Maximization Algorithm",
    slideRef: "PDF Slide 39-47 (EM Two-Dice Simulation)",
    question: "In the Expectation-Maximization (EM) algorithm, what occurs specifically during the 'E-step' (Expectation step)?",
    options: [
      "The model parameters (e.g., coin/dice probabilities) are updated by taking partial derivatives of the likelihood.",
      "Using the current parameter estimates, the algorithm calculates the expected values (or posterior probabilities) of the hidden / latent variables given the observed data.",
      "The dataset is randomly partitioned into training and validation sets.",
      "A gradient descent optimizer updates the deep neural network weights."
    ],
    answer: 1,
    hint: "E-step asks: 'Given our current best guess of the parameters, what is the probability that each observation was generated by component A vs. component B?'",
    explanation: "In the E-step, the model treats the current parameter estimates as fixed and evaluates the posterior distribution over the hidden (latent) variables: \\(P(Z_i = k | X_i, \\Theta^{(t)})\\). In the subsequent M-step (Maximization), these soft posterior weights are used to re-estimate the parameters \\(\\Theta^{(t+1)}\\) to maximize the expected complete-data log-likelihood."
  },
  {
    id: "d2-q9",
    module: "Automated Pipe Inspection",
    slideRef: "Worksheet Slide 3-4 (Haar Wavelet Pipe Choke)",
    question: "In the automated pipe inspection case study, water flow sensor data is recorded as: \\([0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6]\\). Applying the Haar high-pass filter \\([-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]\\) to successive pairs, which coefficient reveals the sudden pipe choke and what is its value?",
    options: [
      "\\(D_1[0] = 0.071\\) at index pair \\((0.6, 0.7)\\)",
      "\\(D_1[1] = -0.283\\) at index pair \\((0.8, 0.4)\\), signaling an abrupt negative drop in flow rate.",
      "\\(D_1[2] = 0.000\\) at index pair \\((0.3, 0.3)\\)",
      "\\(D_1[3] = 0.500\\) at index pair \\((0.6, 0.6)\\)"
    ],
    answer: 1,
    hint: "Calculate \\(D_1[1] = -0.8 \\cdot \\frac{\\sqrt{2}}{2} + 0.4 \\cdot \\frac{\\sqrt{2}}{2} = -0.4 \\cdot 0.7071\\).",
    explanation: "Between samples 3 and 4, the flow rate plummets from 0.8 to 0.4 (a 50% drop). Computing the Haar high-pass detail: \\(D_1[1] = -0.8 \\times 0.7071 + 0.4 \\times 0.7071 = -0.283\\). This large negative spike in the detail coefficient flags the sudden pressure drop / choke obstruction in the pipe, whereas normal variations (e.g. \\(0.6 \\to 0.7\\)) produce small details (\\(+0.071\\))."
  },
  {
    id: "d2-q10",
    module: "Wearable Activity Recognition",
    slideRef: "Workshop Notebook & PDF Slide 2 (UCI HAR Pipeline)",
    question: "In the UCI Human Activity Recognition (HAR) smartphone workshop, why do we decompose the tri-axial accelerometer and gyroscope signals into Discrete Wavelet Transform (DWT) subbands before feeding them to Gaussian Naive Bayes?",
    options: [
      "Raw time series have high dimensionality, phase alignment sensitivity, and sensor noise; DWT compacts signal energy into multi-scale frequency bands where statistical features (energy, variance, mean) cleanly separate dynamic activities (walking, stairs) from static postures (sitting, standing).",
      "Because Gaussian Naive Bayes cannot take numerical arrays as input unless they are converted to text.",
      "Because the smartphone accelerometer only records data in the wavelet domain natively.",
      "Because DWT removes all gravitational acceleration permanently without filtering."
    ],
    answer: 0,
    hint: "Think about feature compactness: 128 raw samples per window vs. 4 wavelet coefficient statistics that capture both fast foot strikes and slow postural shifts.",
    explanation: "Feeding 128 raw time-series points directly into a classifier fails because individual sample values drift and shift with phase. DWT separates the signal into approximation (slow postural tilt from gravity) and detail coefficients (high-frequency impacts from walking or stair climbing). Extracting energy and variance from these subbands yields compact, highly discriminative features that allow Gaussian Naive Bayes to classify activities with high accuracy."
  }
];
