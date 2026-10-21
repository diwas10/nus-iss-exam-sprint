// Comprehensive Curriculum Data & Day Hub Renderer for Intelligent Sensing Systems (ISSM)
window.ISSM_CURRICULUM = {
  courseId: 'intelligent-sensing-systems',
  courseTitle: 'Intelligent Sensing Systems',
  instructor: 'Dr TIAN Jing',
  department: 'NUS Institute of Systems Science (ISS)',
  days: [
    {
      id: 'day-1-signals',
      dayNumber: 1,
      title: 'Day 1: Foundations of Sensor Signal Processing',
      shortTitle: 'Day 1: Sensor Signal Processing',
      tagline: 'From Physical Sensor Phenomena to Clean Signals and Elastic Alignment',
      badge: 'Active & Interactive',
      badgeClass: 'live',
      duration: '1 Day (6 Levels + 11 Quizzes + Lab + 3 Workshops)',
      slideCount: '124 Slides / Pages across 3 Decks',
      isInteractive: true,
      description: 'Master the fundamental bridge between the physical and digital domains. Explore how sensors transform light, sound, motion, and biometric voltage into time-series signals; understand sampling and Nyquist limits; detect peaks reliably in noisy streams; remove instrument baseline drift using penalized least squares (arPLS); and align time-distorted sequences using Dynamic Time Warping (DTW).',
      decks: [
        {
          name: 'Module 1: Introduction to Intelligent Sensing Systems',
          format: 'PDF (36 pages)',
          file: 'Module 1 - Introduction to intelligent sensing systems.pdf',
          topics: [
            'Physical phenomena & signals (sound, light, ECG, EEG, motion, velocity, ultrasound)',
            'Sensors: Temperature, proximity, ultrasonic, pressure, water quality',
            'Sense-making pipeline: Raw data -> Information -> Actionable insights (Apple Watch PPG)',
            'Slide 23 Capstone Exercise: Formulate an intelligent sensing use case',
            'Continuous signals vs discrete samples: 1D, 2D images, 3D volumetric MRI',
            'Sampling Theorem & Nyquist rate (fs >= 2 f_max)',
            'Stroboscopic aliasing & Wagon Wheel illusion (Slide 30)',
            'Bandwidth engineering: 4 kHz voice / 8 kHz telephone (Slide 31) & 200 kHz systems (Slide 32)',
            'Periodicity (T0), Even symmetry x(-t)=x(t), and Odd symmetry x(-t)=-x(t) (Slides 33-34)',
            'Superposition theorem & Fourier harmonic decomposition (Slides 35-36)'
          ]
        },
        {
          name: 'Module 2: Foundations of Sensor Signal Processing',
          format: 'PPTX (44 slides)',
          file: 'Module 2 - Foundations of sensor signal processing.pptx',
          topics: [
            'Topological features: Peaks and troughs in sensor time-series',
            'Why calculus derivatives f\'(t)=0 fail on discrete noisy data',
            'SciPy find_peaks baseline trap: False positives from noise spikes',
            'Tuning parameters: Height, Distance, Threshold limitations',
            'Peak Prominence (contour line elevation) and Width (half-prominence evaluation)',
            'Instrument baseline drift in Gas Chromatography (GC) & low-cost air sensors',
            'Penalized Least Squares (PLS) & Whittaker smoothing objective: F = sum(y-z)^2 + lambda*sum(Delta^2 z)^2',
            'Asymmetric Reweighted Penalized Least Squares (arPLS) with asymmetric weighting'
          ]
        },
        {
          name: 'Module 3: Workshop on Sensor Signal Processing',
          format: 'PPTX (44 slides)',
          file: 'Module 3 - Workshop on sensor signal processing.pptx',
          topics: [
            'Why Euclidean distance fails on shifted, delayed, or speed-varying signals',
            'Dynamic Time Warping (DTW): Elastic non-linear temporal alignment',
            'Real-world applications: Speech recognition, rowing stroke analysis, electropherograms',
            'The 3 Fundamental Warping Rules: Boundary condition, Monotonicity, Step condition',
            'DTW 3-step algorithm: Local distance matrix D, Accumulated cost matrix D_acc, Backtracking path',
            'Plotting functions: pltCostAndPath (cost matrix heatmap) & pltWarp (point-to-point warp lines)',
            'ECG segmentation with offset 15 and DTW multi-segment comparison',
            'Bonus Workshop: Dynamic Time Warping on Singapore GDP economic time-series'
          ]
        }
      ],
      workshops: [
        {
          id: 'wks1-2',
          title: 'Workshop 1-2: ECG Peak Detection & arPLS Baseline Correction',
          files: ['issm-wks1-2-_yourname_.py', 'issm-wks1-2-_yourname_.ipynb', 'ecg1D.csv'],
          solution: 'issm_wks1_2_solution.py',
          description: 'Detect all heartbeats accurately across raw ECG traces with baseline wander using pybaselines arPLS and SciPy find_peaks.'
        },
        {
          id: 'wks1-3',
          title: 'Workshop 1-3: Multi-Segment ECG Dynamic Time Warping',
          files: ['issm-wks1-3-_yourname_.py', 'issm-wks1-3-_yourname_.ipynb', 'ecg2D.csv'],
          solution: 'issm_wks1_3_solution.py',
          description: 'Segment lead ECG signals with an offset of 15, compute DTW distance matrices, and find which heartbeats best match a reference normal beat.'
        },
        {
          id: 'wks1-3-gdp',
          title: 'Bonus Workshop: Time-Series DTW on Economic GDP Cycles',
          files: ['issm_wks1_3_GDP_your_name.ipynb', 'GDP.csv'],
          solution: 'issm_wks1_3_GDP_solution.py',
          description: 'Align Singapore quarterly GDP growth rates across multi-year cycles despite varying economic contraction/expansion speeds.'
        }
      ]
    },
    {
      id: 'day-2-transformation',
      dayNumber: 2,
      title: 'Day 2: Sensory Signal Transformation',
      shortTitle: 'Day 2: Signal Transformation',
      tagline: 'Time-Frequency Representations, Wavelet Multi-Resolution, and Statistical EM Clustering',
      badge: 'Active & Interactive',
      badgeClass: 'live',
      duration: '1 Day (8 Levels + 10 Quizzes + Lab + Workshop)',
      slideCount: '54 Slides across PDF (48) & Worksheet (6)',
      isInteractive: true,
      description: 'Discover what happens when signals are non-stationary—where frequencies change over time. Learn why standard Fourier analysis fails to capture when an event occurred, and explore Short-Time Fourier Transform (STFT), spectrograms, and Wavelet transforms for multi-resolution signal decomposition. Conclude with statistical sensor analysis, Gaussian Naive Bayes, Expectation-Maximization (EM), and automated pipe inspection.',
      decks: [
        {
          name: 'Day 2 Lecture Deck: Sensory Signal Transformation (v3.3)',
          format: 'PDF (48 pages)',
          file: '2 Sensory signal transformation v3.3.pdf',
          topics: [
            'Time-frequency representations: Why time-domain or frequency-domain alone is insufficient',
            'Continuous vs Discrete transformations and non-stationary signal behavior',
            'Short-Time Fourier Transform (STFT) & Gabor transform with sliding window functions',
            'Spectrogram computation: Time vs Frequency vs Energy power density',
            'The Heisenberg-Gabor Uncertainty Principle: The trade-off between time resolution and frequency resolution',
            'What is a Wavelet? Functions that "wave" above and below zero with finite duration',
            'Continuous Wavelet Transform (CWT) & Discrete Wavelet Transform (DWT)',
            'Multi-Resolution Analysis (MRA): High-pass detail coefficients (D) vs low-pass approximation coefficients (A)',
            'Iterative Wavelet Decomposition: [9 7 3 5] signal decomposition and exact reconstruction',
            '2D Wavelet Transformation for images: AA (approximation), DA (horizontal), AD (vertical), DD (diagonal)',
            'Wavelet applications: Feature extraction, signal denoising/enhancement, data augmentation, CNN integration',
            'Statistical Sensory Signal Analysis: Human Activity Recognition (HAR) using smartphone sensors',
            'Probabilistic modeling: Naive Bayes on categorical and continuous sensor data',
            'Gaussian distributions & distribution estimation for challenging sensor streams',
            'Hidden variables & Latent labels: Expectation-Maximization (EM) algorithm',
            'EM Toy Task: Unraveling mixed yellow/blue dice rolls iteratively until convergence'
          ]
        },
        {
          name: 'Day 2 Worksheet: Automated Pipe Inspection & Choke Detection',
          format: 'PPTX (6 slides)',
          file: 'ISSM Day2 worksheet your name.pptx',
          topics: [
            'Automated pipe inspection problem formulation and robotic crawl systems',
            'Acoustic and flow rate sensory monitoring in drainage pipelines',
            'Table 1 flow rate sensor data: [0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6]',
            'Haar high-pass detail filter [-sqrt(2)/2, sqrt(2)/2] detecting sudden choke drop at index 1 (-0.2828)',
            'Discussion Q1: Integrating time-domain and wavelet-domain features into classifiers',
            'Discussion Q2: Experimental design for evaluating wavelet filters and decomposition levels'
          ]
        }
      ],
      workshops: [
        {
          id: 'wks2',
          title: 'Day 2 Workshop: Time-Frequency Transformation & Wavelet Decomposition',
          files: ['ISSM Day2 workshop.zip', 'ISSM Day2 worksheet your name.pptx'],
          description: 'Hands-on Python exercises in spectrogram generation, wavelet multi-resolution analysis, and statistical feature extraction.'
        }
      ],
      videos: [
        {
          title: 'Wavelet Decomposition Walkthrough (Slide 17)',
          file: '[video] ISSM Day2 Slide 17.mp4',
          description: 'Step-by-step video demonstration of decomposing sensor signals into approximation and detail coefficients.'
        },
        {
          title: 'Wavelet Reconstruction & Synthesis (Slide 19)',
          file: '[video] ISSM Day2 Slide 19.mp4',
          description: 'Visual demonstration of synthesizing and restoring original signals from wavelet sub-bands without loss.'
        }
      ]
    },
    {
      id: 'day-3-ml',
      dayNumber: 3,
      title: 'Day 3: Intelligent Sensory Signal Processing using Machine Learning',
      shortTitle: 'Day 3: ML Signal Processing',
      tagline: 'Data-Driven Representations, Energy Compaction, PCA, and Autoencoder Anomaly Detection',
      badge: 'Active & Interactive',
      badgeClass: 'live',
      duration: '1 Day (8 Levels + 10 Quizzes + Lab + PyTorch Workshop)',
      slideCount: '52 Slides across 2 Decks (44 PDF + 8 PPTX)',
      isInteractive: true,
      description: 'Move beyond hand-crafted mathematical transforms into modern data-driven representation learning. Learn how linear algebra, covariance analysis, and Principal Component Analysis (PCA) discover the optimal basis vectors that maximize energy compaction. Explore deep representation learning with fully-connected, convolutional, denoising, and contrastive autoencoders for unsupervised sensor anomaly detection.',
      decks: [
        {
          name: 'Day 3 Lecture Deck: Intelligent Sensory Signal Processing using ML (v3.6)',
          format: 'PDF (44 pages)',
          file: '3 Intelligent sensory signal processing using machine learning v3.6.pdf',
          topics: [
            'Fixed basis (Fourier/Wavelet) vs Data-driven representations tailored to specific sensors',
            'Warm-up: Basis vectors and change of basis in signal space',
            'Higher dimensions & checkerboard basis representations',
            'Energy Compaction Property: Concentrating the maximum signal variance into minimal orthogonal components',
            'Finding the first basis vector: Maximizing projection variance and minimizing reconstruction error',
            'Orthogonalization: Finding subsequent basis vectors via Eigenvalue Decomposition / SVD',
            'Principal Component Analysis (PCA) & Karhunen-Loève Transform (KLT) for multi-channel sensor compression',
            'Representation Learning objectives: Smoothness, dimensionality reduction, raw-to-feature mapping',
            'Supervised representation learning: Linear adaptation (freezing backbone) vs fine-tuning',
            'Self-supervised representation learning: Generative vs contrastive paradigms',
            'Autoencoder architectures: Fully-connected autoencoders for 1D sensor streams',
            'Convolutional autoencoders: Spatial feature preservation and latent bottleneck compression',
            'Denoising autoencoders: Corrupting input vectors to force robust manifold learning',
            'Contrastive autoencoders: Supervising feature invariance and distinguishing sensor classes',
            'Sensor Anomaly Detection taxonomy: Geometrical, Statistical, Supervised classification, and Autoencoder reconstruction loss'
          ]
        },
        {
          name: 'Day 3 Worksheet: Autoencoders, Dimensionality Reduction & Anomaly Detection',
          format: 'PPTX (8 slides)',
          file: 'ISSM Day3 worksheet your name.pptx',
          topics: [
            'Discussion Q1: Autoencoder vs PCA for non-linear sensory manifolds',
            'Discussion Q2: Deciding bottleneck dimensions & reconstruction error thresholds',
            'Workshop: Training fully-connected PyTorch Autoencoder (70 -> 10 -> 70)',
            'Evaluating test anomalies across 300 test samples (identifying Sample #299)',
            'Smart Fish Tank Case Study: Multi-sensor IoT telemetry (fish speed vs dissolved oxygen)',
            'Diagnosing Event A (acute shock/occlusion) vs Event B (progressive hypoxia)'
          ]
        }
      ],
      workshops: [
        {
          id: 'wks3',
          title: 'Day 3 Workshop: Autoencoder-Based Sensor Anomaly Detection',
          files: ['ISSM Day3 workshop.zip', 'ISSM Day3 worksheet your name.pptx'],
          solution: 'issm_day3_solution.py',
          description: 'Train deep autoencoders on normal operational sensory streams and identify equipment anomalies by thresholding reconstruction error.'
        }
      ],
      videos: [
        {
          title: 'Basis Vector Transformation & Energy Compaction (Slide 4)',
          file: '[video] ISSM Day3 Slide 4.mp4',
          description: 'Animated visual explanation of projecting multi-sensor vectors onto newly learned principal axes.'
        }
      ]
    },
    {
      id: 'day-4-multimodal',
      dayNumber: 4,
      title: 'Day 4: Sense Making from Sensory Data',
      shortTitle: 'Day 4: Multimodal Sense Making',
      tagline: 'Single vs Multimodal Sensing, Sensor Fusion Taxonomies, and Reverse Vending Machine Case Study',
      badge: 'Active & Interactive',
      badgeClass: 'live',
      duration: '1 Day (8 Levels + 10 Quizzes + Lab + Experiential Activity)',
      slideCount: '53 Slides across 3 Decks (40 PDF + 9 PPTX + 4 Instruction)',
      isInteractive: true,
      description: 'Synthesize everything learned across the previous days to build end-to-end intelligent sensing systems. Examine unimodal sensor channels (inertial, audio, vision) and understand why multimodal systems achieve superhuman reliability. Master sensor fusion architectures (early, intermediate, late), spatial/temporal/latent alignment, and reverse-engineer a commercial smart reverse vending machine (RVM).',
      decks: [
        {
          name: 'Day 4 Lecture Deck: Sense Making from Sensory Data (v3.3)',
          format: 'PDF (40 pages)',
          file: '4 Sense making from sensory data v3.3.pdf',
          topics: [
            'Defining modality: The physical sensory channel (inertial, acoustic, optical, electromagnetic)',
            'Single modality: Inertial sensing (accelerometer/gyroscope) & Berkeley Multimodal Human Action Database (MHAD)',
            'Single modality: Audio sensing (acoustic time-series & anomaly detection in industrial machines)',
            'Single modality: Vision sensing (defect classification in manufacturing lines)',
            'Environmental sensing: Singapore PUB flood monitoring with 210 water-level sensors',
            'Sensor data augmentation: Scaling, magnitude filtering, temporal warping, jittering',
            'Why multimodal? Complementary representations, multi-sensor cross-validation, and fail-safe redundancy',
            'Multimodal machine learning taxonomy: Representation, Translation, Alignment, Fusion, Co-learning',
            'Tightly coupled Early Fusion: Concatenating synchronized raw sensor measurements at the input level',
            'Loosely coupled Intermediate Fusion: Merging deep latent representations in shared bottleneck layers',
            'Uncoupled Late Fusion: Combining independent modality decision confidences via ensembling',
            'Spatial alignment & calibration across heterogeneous coordinate frames',
            'Temporal alignment: Time synchronization, latency compensation, and Euclidean registration',
            'Feature / Latent alignment: Aligning embeddings across modalities (CLIP-style vision-language-sensor alignment)',
            'Autonomous Driving Sense-Making Pipeline: Camera + LiDAR + Radar + GPS/IMU multi-stage fusion',
            'Industrial Smart Manufacturing sense-making pipelines'
          ]
        },
        {
          name: 'Day 4 Experiential Activity: Reverse Engineering a Multimodal Reverse Vending Machine',
          format: 'PDF (4 pages)',
          file: 'ISSM Day4 worksheet instruction (revserse engineering a multimodal reverse vending machine).pdf',
          topics: [
            'Reverse Vending Machine (RVM) smart recycling automation',
            'Identifying multi-sensor modalities: Barcode optical scanner, inductive metal detector, load cell weight scale, acoustic impact sensor, camera vision',
            'Mapping sensor modalities to business decisions (PET plastic bottle vs aluminum can vs glass bottle)',
            'Designing the sense-making pipeline: Data acquisition, pre-processing, temporal alignment, and multi-sensor fusion'
          ]
        }
      ],
      workshops: [
        {
          id: 'wks4',
          title: 'Day 4 Worksheet & Reverse Engineering Exercise',
          files: [
            'ISSM Day4 worksheet your name.pptx',
            'ISSM Day4 worksheet instruction (revserse engineering a multimodal reverse vending machine).pdf'
          ],
          solution: 'issm_day4_solution.py',
          description: 'Experiential group activity: Deconstruct a commercial Reverse Vending Machine and architect its complete multi-sensor sense-making pipeline.'
        }
      ],
      videos: [
        {
          title: 'MIT Multimodal Deep Learning Lecture (Paul Liang, Slide 16)',
          file: '[video] ISSM Day4 Slide 16 (MIT, Paul Liang).mp4',
          description: 'Guest lecture excerpt on deep multimodal data fusion, representation learning, and cross-modal alignment.'
        }
      ]
    }
  ]
};

// Day 1 Slide-by-Slide Traceability Matrix
window.DAY1_TRACEABILITY_MATRIX = [
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 1 - 12',
    topic: 'Physical phenomena, continuous nature of sound, light, ECG, EEG, motion, velocity, ultrasound',
    platformLevel: 'Level 0 ("The Mental Model") & Level 1 ("Anatomy of a Wave")',
    interactiveFeature: 'Interactive Tone & Wave Studio with live Web Audio synthesizer and Canvas oscilloscope'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 13 - 19',
    topic: 'Sensors producing signals: Temperature, proximity, ultrasonic distance, pressure, water quality',
    platformLevel: 'Level 0 ("The Mental Model")',
    interactiveFeature: 'Sensor classification matrix & physical transduction explainers'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 20 - 22',
    topic: 'Sense-making pipeline: Turning raw data into information & actionable insights (Apple Watch PPG)',
    platformLevel: 'Level 0 & Lecture Quiz 1',
    interactiveFeature: 'Apple Watch photoplethysmography sense-making architecture breakdown and quiz question'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Page 23',
    topic: 'Slide 23 Individual Exercise: Formulate an intelligent sensing use case (15-20 min)',
    platformLevel: 'Student Research Lab',
    interactiveFeature: 'Interactive Capstone Project Use-Case Builder with live guidance & submission scoring'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 24 - 27',
    topic: 'Signal dimensions: 1D time-series x(t), 2D spatial images I(x,y), 3D volumetric MRI V(x,y,z)',
    platformLevel: 'Level 0 & Lecture Quiz 2',
    interactiveFeature: 'Dimensionality comparison cards with real-world sensor examples and quiz'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 28 - 29',
    topic: 'Sampling Theorem & Nyquist limit: fs >= 2 * f_max to prevent aliasing distortion',
    platformLevel: 'Level 2 ("The Digital Bridge")',
    interactiveFeature: 'Real-time Nyquist Aliasing Simulator with interactive signal and sampling rate sliders'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Page 30',
    topic: 'Wagon Wheel Effect: Stroboscopic optical illusion when sampling rate is too low',
    platformLevel: 'Level 2 ("The Digital Bridge")',
    interactiveFeature: 'Interactive Canvas Wagon Wheel Simulator with variable frame rate (FPS) and RPM controls'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Page 31',
    topic: 'Voice telephony bandwidth (4 kHz) -> minimum 8 kHz sampling rate calculation (8,000 samples/sec)',
    platformLevel: 'Level 2 & Lecture Quiz 3',
    interactiveFeature: 'Step-by-step mathematical derivation and instant-feedback quiz calculation'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Page 32',
    topic: 'Complex signal with 200 kHz bandwidth -> minimum 400 kHz sampling rate calculation',
    platformLevel: 'Level 2 & Lecture Quiz 4',
    interactiveFeature: 'Bandwidth vs Nyquist sampling frequency quiz and interactive formula checker'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 33 - 34',
    topic: 'Periodicity condition x(t) = x(t + T0), Even symmetry x(-t)=x(t), and Odd symmetry x(-t)=-x(t)',
    platformLevel: 'Level 1 & Level 2',
    interactiveFeature: 'Symmetry mathematical visualizers for cosine (even) and sine (odd) waveforms'
  },
  {
    deck: 'Module 1 (PDF, 36p)',
    slides: 'Pages 35 - 36',
    topic: 'Superposition principle & Fourier decomposition: Constructing complex waves from pure harmonics',
    platformLevel: 'Level 1 ("Anatomy of a Wave")',
    interactiveFeature: 'Fourier harmonic generator mixing fundamental f, 3f, 5f harmonics with audio playback'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 1 - 6',
    topic: 'Topological features: Peaks and troughs in sensor signals, level shifts, and anomaly detection',
    platformLevel: 'Level 3 ("Detecting Signposts")',
    interactiveFeature: 'Visual explanation of topological landmarks in time-series telemetry'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 7 - 13',
    topic: 'Calculus maxima/minima f\'(t)=0, forward finite differences, and why derivatives amplify noise',
    platformLevel: 'Level 3 & Lecture Quiz 5',
    interactiveFeature: 'Derivative noise amplification demonstration and quiz with mathematical breakdown'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 14 - 18',
    topic: 'SciPy find_peaks baseline trap: Untuned peak detection yielding false positives on noise spikes',
    platformLevel: 'Level 3 & Lecture Quiz 6',
    interactiveFeature: 'Interactive Peak Detector Sandbox showing false positive count when parameters are at default'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 19 - 20',
    topic: 'Tuning parameters: Height and minimum Distance limitations on drifting or non-stationary signals',
    platformLevel: 'Level 3 ("Detecting Signposts")',
    interactiveFeature: 'Interactive Height and Distance sliders in Peak Detector Canvas'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 21 - 25',
    topic: 'Topological Prominence (contour line height relative to lowest valley) and Width at half-prominence',
    platformLevel: 'Level 3 & Lecture Quiz 7',
    interactiveFeature: 'Interactive Prominence slider with live peak count and half-prominence width indicators'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 26 - 34',
    topic: 'Instrument baseline drift in Gas Chromatography (GC), refining petroleum, and low-cost air sensors',
    platformLevel: 'Level 4 ("Signal Cleaning") & Lecture Quiz 8',
    interactiveFeature: 'Real-world GC chromatogram and air sensor baseline drift case study and quiz'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slides 35 - 43',
    topic: 'Penalized Least Squares (PLS), Whittaker smoother, arPLS iterative algorithm, lambda stiffness, and p weights',
    platformLevel: 'Level 4 ("Signal Cleaning")',
    interactiveFeature: 'Interactive arPLS Baseline Corrector with live lambda stiffness slider and residual display'
  },
  {
    deck: 'Module 2 (PPTX, 44s)',
    slides: 'Slide 44',
    topic: 'Workshop 1-2: Detect all peaks in all ECGs and eliminate baseline drift in Python',
    platformLevel: 'Level 6 ("Hands-on Code Lab")',
    interactiveFeature: 'Complete verified Python solution tab for Workshop 1-2 (issm_wks1_2_solution.py)'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slides 1 - 7',
    topic: 'Dynamic Time Warping vs Euclidean distance: Why lock-step Euclidean comparison fails under temporal skew',
    platformLevel: 'Level 5 ("Elastic Alignment") & Lecture Quiz 9',
    interactiveFeature: 'Interactive Euclidean vs DTW side-by-side comparison with shifting/stretched waveforms'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slides 8 - 12',
    topic: 'DTW applications: Speech recognition, digital signature tablets, rowing stroke detection, electropherograms',
    platformLevel: 'Level 5 & Student Research Lab',
    interactiveFeature: 'Interactive application cards and research paper summaries with literature citations'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slides 13 - 14',
    topic: 'The 3 DTW Warping Path Rules: Boundary condition, Monotonicity condition, Step condition',
    platformLevel: 'Level 5 & Lecture Quiz 10',
    interactiveFeature: 'Visual step diagrams of valid diagonal/horizontal/vertical moves and interactive quiz'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slides 15 - 28',
    topic: 'DTW 3-step algorithm: Local distance matrix D, Accumulated cost matrix D_acc = d(i,j) + min(...), Backtracking path',
    platformLevel: 'Level 5 ("Elastic Alignment")',
    interactiveFeature: 'Interactive DTW Studio with dynamic cost matrix heatmap and highlighted red optimal path'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slides 29 - 36',
    topic: 'Visualizing DTW: pltCostAndPath function and pltWarp point-to-point mapping lines between signals',
    platformLevel: 'Level 5 & Level 6',
    interactiveFeature: 'Real-time Canvas rendering of yellow warp lines connecting corresponding features between signals'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slides 37 - 42',
    topic: 'Workshop 1-3: ECG segmentation with offset 15, DTW comparisons across segments 1, 2, and 3',
    platformLevel: 'Level 6 ("Hands-on Code Lab") & Quiz 11',
    interactiveFeature: 'Complete verified Python solution tab for Workshop 1-3 (issm_wks1_3_solution.py)'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slide 43',
    topic: 'Bonus Workshop: DTW time-series alignment on Singapore GDP economic growth cycles',
    platformLevel: 'Level 6 ("Hands-on Code Lab")',
    interactiveFeature: 'Complete verified Python solution tab for GDP bonus workshop (issm_wks1_3_GDP_solution.py)'
  },
  {
    deck: 'Module 3 (PPTX, 44s)',
    slides: 'Slide 44',
    topic: 'Appendix: Comparison among various time-series alignment methods (Euclidean, DTW, FastDTW, Cross-correlation)',
    platformLevel: 'Level 5 & Student Research Lab',
    interactiveFeature: 'Algorithmic complexity comparison table (O(N^2) vs O(N)) and trade-off analysis'
  }
];

// Helper to render Day Hub for Days 2, 3, 4, or Day 1 Overview
window.renderDayHub = function(dayId) {
  const day = window.ISSM_CURRICULUM.days.find(d => d.id === dayId);
  if (!day) return '';

  let html = `
    <div class="day-hub-container">
      <!-- Hero Banner -->
      <div class="day-hero-banner mb-4">
        <div class="day-hero-badge-row">
          <span class="badge-tech"><i data-lucide="calendar"></i> DAY ${day.dayNumber}</span>
          <span class="day-status-pill ${day.badgeClass}">${day.badge}</span>
          <span class="badge-outline"><i data-lucide="clock"></i> ${day.duration}</span>
        </div>
        <h1 class="mt-2">${day.title}</h1>
        <p class="lead-text text-secondary mt-1">${day.tagline}</p>
        <p class="course-meta text-muted mt-2">
          <strong>Instructor:</strong> ${window.ISSM_CURRICULUM.instructor} &bull; 
          <strong>Department:</strong> ${window.ISSM_CURRICULUM.department} &bull; 
          <strong>Lecture Scope:</strong> ${day.slideCount}
        </p>
      </div>

      <!-- Action Row: If day is Day 1, give direct jump to interactive levels -->
      ${day.isInteractive ? `
        <div class="lesson-card interactive-cta-card mb-4" style="border-left: 4px solid var(--accent-cyan);">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
            <div>
              <h3 style="color: var(--accent-cyan); margin-bottom: 4px;"><i data-lucide="play-circle" style="vertical-align: middle;"></i> Day 1 Interactive Signal Sandbox is Live!</h3>
              <p class="text-secondary" style="margin: 0;">Explore 6 hands-on levels, audio tone generators, Nyquist simulators, arPLS tuner, DTW matrix, and 11 slide quizzes.</p>
            </div>
            <button class="btn btn-primary" onclick="app.loadLevel('level-0')">
              Enter Day 1 Interactive Sandbox <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      ` : `
        <div class="lesson-card day-preview-notice mb-4" style="border-left: 4px solid #38bdf8;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
            <div>
              <h3 style="color: #38bdf8; margin-bottom: 4px;"><i data-lucide="book-open" style="vertical-align: middle;"></i> Day ${day.dayNumber} Curriculum & Lecture Resources</h3>
              <p class="text-secondary" style="margin: 0;">This module is part of the 4-day NUS ISS ISSM curriculum. You can inspect the complete slide syllabus, workshop files, and case study videos below.</p>
            </div>
            <button class="btn btn-outline" onclick="app.selectDay('day-1-signals')">
              <i data-lucide="arrow-left"></i> Go to Day 1 Interactive Sandbox
            </button>
          </div>
        </div>
      `}

      <!-- Course Description & Synopsis -->
      <div class="lesson-card mb-4">
        <h3><i data-lucide="info"></i> Module Overview & Learning Objectives</h3>
        <p class="mt-2" style="font-size: 0.95rem; line-height: 1.6;">${day.description}</p>
      </div>

      <!-- Lecture Slide Decks Breakdown -->
      <div class="lesson-card mb-4">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3><i data-lucide="file-text"></i> Official Lecture Slides & PDF Syllabus</h3>
          <span class="badge-tech">${day.decks.length} Deck(s)</span>
        </div>

        <div class="deck-list-container">
          ${day.decks.map((deck, idx) => `
            <div class="deck-card mb-3" style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
              <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
                <h4 style="color: var(--accent-cyan); margin: 0;">${deck.name}</h4>
                <span class="badge-outline" style="font-size: 0.75rem;">${deck.format}</span>
              </div>
              <p class="text-muted mt-1" style="font-size: 0.8rem; font-family: monospace;">Source File: ${deck.file}</p>
              
              <h5 class="mt-3 mb-2" style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Syllabus Topics Covered:</h5>
              <ul style="padding-left: 20px; font-size: 0.9rem; line-height: 1.6; margin: 0;">
                ${deck.topics.map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Practical Workshops & Code Skeletons -->
      <div class="lesson-card mb-4">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3><i data-lucide="terminal"></i> Practical Workshops & Exercises</h3>
          <span class="badge-tech">${day.workshops.length} Workshop(s)</span>
        </div>
        <div class="workshop-cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          ${day.workshops.map(w => `
            <div class="workshop-mini-card" style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
              <h4 style="color: var(--text-primary); margin-bottom: 6px; font-size: 0.95rem;">${w.title}</h4>
              <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 12px;">${w.description}</p>
              <div style="font-size: 0.78rem; color: var(--text-muted);">
                <strong>Files:</strong> <code>${w.files.join(', ')}</code>
              </div>
              ${w.solution ? `
                <div style="margin-top: 8px; font-size: 0.78rem; color: #34d399;">
                  <strong>Verified Solution:</strong> <code>${w.solution}</code>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Video Case Studies (if applicable) -->
      ${day.videos && day.videos.length > 0 ? `
        <div class="lesson-card mb-4">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3><i data-lucide="video"></i> Multimedia Lecture Case Studies</h3>
            <span class="badge-tech">${day.videos.length} Video(s)</span>
          </div>
          <div class="videos-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
            ${day.videos.map(v => `
              <div class="video-mini-card" style="background: rgba(0,0,0,0.2); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <i data-lucide="film" style="color: var(--accent-cyan); width: 18px; height: 18px;"></i>
                  <h4 style="font-size: 0.92rem; margin: 0;">${v.title}</h4>
                </div>
                <p class="text-secondary" style="font-size: 0.84rem; line-height: 1.5; margin-bottom: 8px;">${v.description}</p>
                <div style="font-size: 0.75rem; color: var(--text-muted); font-family: monospace;">
                  File: ${v.file}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- If Day 1, display the complete Slide-by-Slide Traceability Matrix -->
      ${day.id === 'day-1-signals' ? `
        <div class="lesson-card mb-4" id="day1-audit-matrix-card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
            <div>
              <h3 style="color: var(--accent-cyan); margin: 0;"><i data-lucide="check-circle-2"></i> Day 1 Slide-to-Platform Traceability Matrix</h3>
              <p class="text-secondary" style="margin: 4px 0 0 0; font-size: 0.85rem;">100% verification: Every single slide from all 3 decks is mapped to an interactive component</p>
            </div>
            <span class="badge-tech">124 Slides Verified</span>
          </div>

          <div class="table-responsive" style="overflow-x: auto;">
            <table class="styled-table" style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
              <thead>
                <tr style="border-bottom: 2px solid var(--border-color); text-align: left;">
                  <th style="padding: 10px 12px;">Deck & Source</th>
                  <th style="padding: 10px 12px;">Slide / Page Range</th>
                  <th style="padding: 10px 12px;">Core Topic & Syllabus Area</th>
                  <th style="padding: 10px 12px;">Platform Module</th>
                  <th style="padding: 10px 12px;">Interactive Implementation</th>
                </tr>
              </thead>
              <tbody>
                ${window.DAY1_TRACEABILITY_MATRIX.map((row, i) => `
                  <tr style="border-bottom: 1px solid var(--border-color); background: ${i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'};">
                    <td style="padding: 10px 12px; font-weight: 600; color: var(--accent-cyan);">${row.deck}</td>
                    <td style="padding: 10px 12px; font-family: monospace;">${row.slides}</td>
                    <td style="padding: 10px 12px; line-height: 1.4;">${row.topic}</td>
                    <td style="padding: 10px 12px; font-weight: 600;">${row.platformLevel}</td>
                    <td style="padding: 10px 12px; color: var(--text-secondary); line-height: 1.4;">${row.interactiveFeature}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}

      <!-- Bottom Navigation Footer -->
      <div class="day-hub-footer mt-4" style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid var(--border-color);">
        <button class="btn btn-outline" onclick="app.selectDay('day-1-signals')">
          <i data-lucide="arrow-left"></i> Back to Day 1 Sandbox
        </button>
        <span class="text-muted" style="font-size: 0.8rem;">NUS-ISS Intelligent Sensing Systems Curriculum</span>
      </div>
    </div>
  `;

  return html;
};
