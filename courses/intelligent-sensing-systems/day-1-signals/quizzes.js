// Interactive Quiz Question Bank for Intelligent Sensing Systems - Day 1
// Questions directly sourced and extended from Module 1, 2, and 3 lecture slides.

window.DAY1_QUIZZES = [
  {
    id: "q1_telephone_sampling",
    module: "Module 1: Fundamentals of Signals",
    slideRef: "Slide 31",
    question: "A telecommunications company digitizes human voice assuming a maximum frequency component of \\(f_{\\max} = 4000\\text{ Hz}\\). According to the Nyquist-Shannon sampling theorem, what is the minimum required sampling rate?",
    options: [
      "2,000 samples/sec (2 kHz)",
      "4,000 samples/sec (4 kHz)",
      "8,000 samples/sec (8 kHz)",
      "16,000 samples/sec (16 kHz)"
    ],
    correct: 2,
    explanation: "By the Nyquist-Shannon Sampling Theorem, to capture all information in a band-limited analog signal without aliasing, the sampling rate must be at least twice the maximum frequency: \\(f_s \\ge 2 \\times f_{\\max} = 2 \\times 4000\\text{ Hz} = 8000\\text{ Hz}\\). This is why standard telephone audio (G.711 standard) uses 8,000 samples per second.",
    hint: "Recall the Nyquist rate formula: \\(f_s \\ge 2 f_{\\max}\\)."
  },
  {
    id: "q2_bandwidth_sampling",
    module: "Module 1: Fundamentals of Signals",
    slideRef: "Slide 32",
    question: "A high-speed sensor signal has an analog bandwidth of \\(200\\text{ kHz}\\). What is the minimum sampling frequency needed by the Analog-to-Digital Converter (ADC) to prevent aliasing?",
    options: [
      "100 kHz",
      "200 kHz",
      "400 kHz",
      "800 kHz"
    ],
    correct: 2,
    explanation: "The minimum sampling rate (Nyquist frequency) is \\(f_s = 2 \\times \\text{bandwidth} = 2 \\times 200\\text{ kHz} = 400\\text{ kHz}\\). If sampled at lower than 400 kHz, high frequency components fold back into the audible/measurable band as phantom lower frequencies.",
    hint: "Double the highest frequency component present in the signal."
  },
  {
    id: "q3_wagon_wheel_aliasing",
    module: "Module 1: Fundamentals of Signals",
    slideRef: "Slide 30",
    question: "In a movie recorded at 24 frames per second (fps), a car wheel rotating clockwise at 20 revolutions per second (rev/s) appears to spin slowly backwards at 4 rev/s. What causes this illusion?",
    options: [
      "Optical diffraction of sunlight through the camera lens aperture",
      "Temporal aliasing: the camera's sampling frequency (24 fps) is below the Nyquist rate for a 20 rev/s rotation",
      "Rolling shutter distortion from CMOS sensor line readout",
      "The car's differential gear reversing angular momentum"
    ],
    correct: 1,
    explanation: "This is the classic stroboscopic 'wagon-wheel effect', a direct manifestation of temporal aliasing. Because the frame rate \\(f_s = 24\\text{ fps}\\) is less than the Nyquist threshold (\\(2 \\times 20 = 40\\text{ fps}\\)), the apparent frequency folds down to \\(f_{\\text{apparent}} = 20 - 24 = -4\\text{ rev/s}\\) (negative sign indicates backward rotation).",
    hint: "Think about what happens when the sampling rate is smaller than twice the phenomenon's frequency."
  },
  {
    id: "q4_even_odd_symmetry",
    module: "Module 1: Fundamentals of Signals",
    slideRef: "Slide 34",
    question: "Which of the following statements mathematically describes an **even signal**?",
    options: [
      "\\(f(t) = -f(-t)\\) for all \\(t\\)",
      "\\(f(t) = f(-t)\\) for all \\(t\\), symmetric across the vertical y-axis",
      "\\(f(t + T_0) = f(t)\\) for fundamental period \\(T_0\\)",
      "\\(f(t) = \\frac{1}{f(-t)}\\)"
    ],
    correct: 1,
    explanation: "An even signal is symmetric across the vertical axis: \\(f(t) = f(-t)\\) (e.g. \\(\\cos(\\omega t)\\) or \\(t^2\\)). An odd signal has rotational symmetry around the origin: \\(f(t) = -f(-t)\\) (e.g. \\(\\sin(\\omega t)\\) or \\(t^3\\)). Any arbitrary signal can be decomposed into an even and an odd part.",
    hint: "Even signals look identical when reflected across the vertical axis."
  },
  {
    id: "q5_discrete_derivative_pitfall",
    module: "Module 2: Sensor Signal Processing",
    slideRef: "Slide 8 & 13",
    question: "In continuous calculus, local maxima and minima occur where \\(f'(x) = 0\\). Why can't we simply search for points where \\(f'(x) = 0\\) in discrete sensor signals?",
    options: [
      "Because discrete signals do not follow the laws of physics",
      "Discrete signals are sampled at integer intervals; the true mathematical peak almost never lands exactly on a sampled point, and sensor noise causes hundreds of spurious zero-crossings",
      "Numpy arrays do not support differentiation operations",
      "Derivatives are only valid for 2D images, not 1D time-series"
    ],
    correct: 1,
    explanation: "In digital signals, time is discrete (\\(t = 0, 1, 2, \\dots\\)). The true analog peak usually happens between sample points, so \\(\\Delta y = y[i+1] - y[i]\\) is virtually never exactly 0. Moreover, high-frequency sensor noise causes random local fluctuations where differences change sign, producing huge numbers of false-positive peaks.",
    hint: "What happens when you sample a smooth mountain curve with only a few discrete sticks?"
  },
  {
    id: "q6_peak_height_flaw",
    module: "Module 2: Sensor Signal Processing",
    slideRef: "Slide 19",
    question: "When detecting R-peaks in an ECG with `scipy.signal.find_peaks(ecg, height=1.0)`, what catastrophic issue occurs if the patient's breathing causes low-frequency baseline drift?",
    options: [
      "The program will crash with a memory allocation error",
      "Valid peaks during negative baseline dips drop below 1.0 and get missed, while noise spikes during positive baseline drifts exceed 1.0 and get falsely detected",
      "The sampling frequency automatically drops to half",
      "The ECG signal gets converted into a 2D matrix"
    ],
    correct: 1,
    explanation: "Absolute height is relative to the zero-axis, NOT relative to the local signal neighborhood! When baseline drifts up, even minor ripples surpass the 1.0 threshold (false alarms). When baseline drifts down, real heartbeat peaks drop below 1.0 and are completely missed (false negatives). This is why baseline correction or prominence is mandatory.",
    hint: "Consider what happens to the height of a house built in a deep valley versus on a high hill."
  },
  {
    id: "q7_prominence_definition",
    module: "Module 2: Sensor Signal Processing",
    slideRef: "Slide 21-24",
    question: "How does the **prominence** of a peak solve the baseline drift problem?",
    options: [
      "It calculates the average height of all samples in the entire signal",
      "It measures how much a peak stands out relative to its lowest surrounding contour line connecting higher peaks, making it independent of absolute baseline shifts",
      "It multiplies the signal by a Gaussian kernel",
      "It restricts peak detection to only points spaced 100 samples apart"
    ],
    correct: 1,
    explanation: "Peak prominence measures topographical prominence: imagine flooding the signal with water until the peak becomes an isolated island connected only to higher terrain. The prominence is the vertical drop from the peak summit to the lowest contour line (saddle point). Because it measures local drop, baseline wander does not affect it!",
    hint: "Think of mountain prominence: Mount Everest vs. a tall hill in the Himalayas."
  },
  {
    id: "q8_arpls_lambda_tuning",
    module: "Module 2: Sensor Signal Processing",
    slideRef: "Slide 39-40",
    question: "In the Asymmetric Reweighted Penalized Least Squares (arPLS) baseline algorithm, what happens if the smoothness penalty parameter \\(\\lambda\\) is chosen **too small** (e.g., \\(\\lambda = 10^2\\))?",
    options: [
      "The baseline becomes a flat horizontal line at zero",
      "The baseline becomes too flexible and aggressively follows the fast heartbeat peaks, eating away the ECG amplitude upon subtraction",
      "The algorithm takes 1,000 iterations to converge",
      "The output signal gets inverted upside down"
    ],
    correct: 1,
    explanation: "\\(\\lambda\\) controls the 'stiffness' (penalty on second differences) of the baseline. When \\(\\lambda\\) is too small, the baseline has no stiffness and bends into the rapid ECG QRS spikes. Subtracting this baseline destroys the real heartbeat. Conversely, when \\(\\lambda\\) is too large (e.g. \\(10^9\\)), it cannot bend to follow the actual physiological baseline drift. \\(\\lambda = 10^5\\) is the sweet spot for ECGs.",
    hint: "Small lambda means weak stiffness penalty, making the estimated baseline behave like a flexible rope."
  },
  {
    id: "q9_euclidean_vs_dtw",
    module: "Module 3: Dynamic Time Warping",
    slideRef: "Slide 4-5",
    question: "Why is standard Euclidean distance \\(\\sqrt{\\sum (x[i] - y[i])^2}\\) inadequate for comparing two heartbeats or speech recordings?",
    options: [
      "Because Euclidean distance requires GPU hardware acceleration",
      "Because it compares points strictly one-to-one at identical time indices (\\(x[t]\\) with \\(y[t]\\)), so even a tiny phase delay or slight speed variation produces an artificially massive distance",
      "Because Euclidean distance only works on 3D geometric shapes",
      "Because audio signals cannot be stored as numerical vectors"
    ],
    correct: 1,
    explanation: "Euclidean distance is rigid: point \\(t=5\\) is locked to point \\(t=5\\). If someone speaks the word 'Hello' slightly faster or delayed by 50ms, peaks and valleys misalign completely, producing huge point-by-point errors. DTW allows elastic 1-to-many and many-to-1 warping to align matching features regardless of timing variations.",
    hint: "What happens when you clap your hands in sync with a friend, but your friend started half a second late?"
  },
  {
    id: "q10_dtw_accumulated_cost",
    module: "Module 3: Dynamic Time Warping",
    slideRef: "Slide 21 & 26",
    question: "In Dynamic Time Warping, given distance matrix \\(D[i,j]\\), what is the recurrence relation to compute the accumulated cost cell \\(C[i,j]\\) for \\(i > 0, j > 0\\)?",
    options: [
      "\\(C[i,j] = D[i,j] + \\max(C[i-1,j], C[i,j-1])\\)",
      "\\(C[i,j] = D[i,j] + \\min(C[i-1,j-1], C[i-1,j], C[i,j-1])\\)",
      "\\(C[i,j] = \\frac{C[i-1,j-1] + D[i,j]}{2}\\)",
      "\\(C[i,j] = D[i,j] \\times C[i-1,j-1]\\)"
    ],
    correct: 1,
    explanation: "DTW uses Bellman's principle of optimality via dynamic programming. The cost of arriving at alignment \\((i, j)\\) is the local distance \\(D[i,j]\\) plus the cheapest predecessor from the three valid legal moves: diagonal \\(C[i-1,j-1]\\) (both signals advance), vertical \\(C[i-1,j]\\) (signal y stretches), or horizontal \\(C[i,j-1]\\) (signal x stretches).",
    hint: "You arrive at cell (i, j) by picking the lowest cost among your 3 immediate previous neighbors."
  },
  {
    id: "q11_ecg_segment_comparison",
    module: "Module 3: Dynamic Time Warping",
    slideRef: "Slide 39",
    question: "In the ISS Day 1 workshop, when comparing ECG segments using DTW, why was the cost between Segments 2 and 3 (\\(\\approx 0.76\\)) vastly lower than between Segments 1 and 2 (\\(\\approx 14.97\\))?",
    options: [
      "Segments 2 and 3 had half as many data samples as Segment 1",
      "Segments 2 and 3 represent two consecutive normal sinus rhythm heartbeats with nearly identical morphology, whereas Segment 1 had an anomalous waveform / initial transient",
      "Because DTW calculation was terminated early after 10 iterations",
      "Because Segment 2 was multiplied by a zero factor"
    ],
    correct: 1,
    explanation: "DTW accumulated cost measures morphological dissimilarity. Normal consecutive heartbeats (Beat 2 and Beat 3) share identical P-Q-R-S-T wave shapes and align with almost zero residual distance (cost \\(\\approx 0.76\\)). In contrast, Beat 1 has a different morphology / settling artifact at the start of recording, creating large warped residuals (cost \\(\\approx 14.97\\)).",
    hint: "Compare normal heartbeats with identical shapes against an atypical beat."
  }
];
