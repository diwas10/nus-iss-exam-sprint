// Day 4 Mastery Quizzes: Sense Making from Sensory Data & Multimodal Systems
// Formulated from Dr. TIAN Jing's 40-page lecture slides & 9-slide RVM worksheet

window.DAY4_QUIZZES = [
  {
    id: "d4-q1",
    module: "Modality Definition",
    slideRef: "PDF Slide 3 (What is Modality)",
    question: "According to Slide 3, what is the formal definition of a 'Modality' in intelligent sensing systems?",
    options: [
      "The physical brand and manufacturer of the microcontroller board.",
      "The particular way or channel in which information is expressed or perceived (e.g. inertial force, acoustic pressure, optical photons, temperature).",
      "The serial baud rate used to transmit sensor bits over USB.",
      "The specific programming language (Python or C++) used to process sensor signals."
    ],
    answer: 1,
    hint: "Think about human sensory faculties: vision, audition, touch. A sensor modality is the sensory medium through which physical reality is captured.",
    explanation: "Slide 3 defines a modality as 'the way in which something is expressed or perceived'. Raw modalities correspond to fundamental physical channels (inertial movement, sound pressure waves, optical light fields, chemical concentrations)."
  },
  {
    id: "d4-q2",
    module: "Inertial Sensing",
    slideRef: "PDF Slide 4 (Inertial Accelerometers)",
    question: "What physical quantity does a MEMS accelerometer on a smartphone or wearable sensor actually measure?",
    options: [
      "The absolute geographic GPS coordinate of the user.",
      "The proper acceleration (the physical acceleration of an object relative to free-fall, which includes the 1g gravitational reaction force when stationary).",
      "The angular velocity of rotation in radians per second.",
      "The absolute magnetic field vector pointing toward magnetic north."
    ],
    answer: 1,
    hint: "When a smartphone rests flat on a table, why does the accelerometer register 9.81 m/s² on the Z-axis?",
    explanation: "Slide 4 explains that an accelerometer measures proper acceleration—the force experienced by an internal proof mass relative to free-fall. When stationary on Earth, a sensor detects the upward normal contact force countering gravity (+1g or 9.81 m/s²), while a free-falling sensor reads 0g."
  },
  {
    id: "d4-q3",
    module: "Sensory Augmentation",
    slideRef: "PDF Slides 12-13 (Augmentation Techniques)",
    question: "In single-modality sensory data augmentation, what is the effect of 'Time-Warping' on a sensor time-series?",
    options: [
      "It multiplies all voltage values by a constant gain factor \\(\\alpha\\).",
      "It distorts the time intervals by non-linearly perturbing the sampling pace (simulating faster and slower execution speeds of human activity) while preserving the sequence of topological peaks.",
      "It completely reverses the time order of the sensor signal from back to front.",
      "It converts 1D accelerometer data into 2D JPEG images."
    ],
    answer: 1,
    hint: "Think about someone walking briskly versus strolling leisurely. The gait shape is identical, but the tempo stretches and compresses.",
    explanation: "Slide 13 lists sensory data augmentations: Scaling (magnitude gain), Jittering (adding Gaussian noise), and Time-Warping (non-linear temporal stretching/compression). Time-warping mimics natural physical pacing variations across human subjects without altering underlying kinematics."
  },
  {
    id: "d4-q4",
    module: "Why Multimodal",
    slideRef: "PDF Slides 14-15 (Complementary vs Redundant)",
    question: "Why does combining complementary sensor modalities (e.g. wearable IMU + video camera) dramatically outperform any single modality in Human Activity Recognition?",
    options: [
      "Because cameras fail during visual occlusions and poor lighting (where IMUs excel), while IMUs suffer from drift and cannot discern spatial context or objects held in hand (where cameras excel).",
      "Because using two sensors always cuts battery consumption in half.",
      "Because neural networks cannot train unless fed at least two data sources simultaneously.",
      "Because optical cameras eliminate all physical friction."
    ],
    answer: 0,
    hint: "Think about complementary strengths: IMU measures body inertia directly from inside; camera captures environmental context and social interaction from outside.",
    explanation: "Slide 14–15 highlights that multimodal sensing delivers both *redundancy* (robustness against single sensor failure or noise) and *complementarity* (each modality fills in the blind spots of the other, resolving ambiguities that are mathematically undecidable from a single modality alone)."
  },
  {
    id: "d4-q5",
    module: "Multimodal Machine Learning",
    slideRef: "PDF Slide 16-17 (Paul Liang / MIT Core Challenges)",
    question: "According to the canonical Baltrušaitis / Paul Liang multimodal machine learning framework (Slide 16), which of the following is NOT one of the primary multimodal challenges?",
    options: [
      "Multimodal Representation (how to represent and summarize multimodal data).",
      "Multimodal Fusion (how to join information from two or more modalities to perform prediction).",
      "Multimodal Alignment (how to identify direct relations between elements of different modalities).",
      "Multimodal Liquidation (how to sell obsolete hardware sensors for scrap metal)."
    ],
    answer: 3,
    hint: "The 5 core challenges from MIT/CMU are: Representation, Alignment, Fusion, Translation, and Co-learning.",
    explanation: "Slide 16–17 references the seminal multimodal taxonomy (Representation, Alignment, Fusion, Translation, Co-learning). 'Liquidation' is obviously not a technical AI research challenge!"
  },
  {
    id: "d4-q6",
    module: "Fusion Architectures",
    slideRef: "PDF Slides 18-20 (Early vs Intermediate vs Late Fusion)",
    question: "What is the primary operational advantage of 'Late Fusion' (uncoupled decision-level fusion) over 'Early Fusion' (tightly coupled feature concatenation) in safety-critical industrial IoT?",
    options: [
      "In late fusion, individual unimodal models process their own streams independently. If one sensor fails, disconnects, or suffers severe noise (e.g. lens glare), the system can dynamically zero its decision weight without corrupting the remaining operational sensors.",
      "Late fusion requires zero training data and zero computational power.",
      "Late fusion guarantees 100% mathematical accuracy on every dataset regardless of noise.",
      "Early fusion can only be executed on quantum computers."
    ],
    answer: 0,
    hint: "Think about modularity: In early fusion, garbage in from ONE sensor taints the entire unified feature vector. In late fusion, you can simply ignore the bad sensor's vote.",
    explanation: "Slide 20 explains that late fusion trains separate models on each modality and combines their decision vectors (via weighted voting, averaging, or confidence gating). This makes late fusion highly robust against missing or corrupted modalities in production environments."
  },
  {
    id: "d4-q7",
    module: "Cross-Modal Alignment",
    slideRef: "PDF Slides 21-25 (Spatial vs Temporal Alignment)",
    question: "In multimodal temporal alignment (Slide 23–24), why does Dynamic Time Warping (DTW) succeed in synchronizing wearable inertial data with camera video streams where Euclidean registration fails?",
    options: [
      "Because video and accelerometer streams often have differing latencies, non-linear phase shifts, and frame-rate fluctuations that require non-linear elastic warping to match corresponding physical events (e.g. heel strikes).",
      "Because Euclidean distance cannot be computed on numbers larger than 100.",
      "Because cameras record time in backward reverse order.",
      "Because DTW removes all temporal dimensions completely."
    ],
    answer: 0,
    hint: "Recall Day 1 DTW: point-to-point Euclidean matching forces 1-to-1 time alignment; DTW allows 1-to-many warping to align speed-varying signals.",
    explanation: "Slides 23–24 contrast Euclidean registration with non-linear temporal alignment. Real multimodal pipelines exhibit transmission jitter, sampling clock drift, and varying physical response latencies. DTW finds the optimal non-linear warping path that aligns corresponding semantic peaks across different modalities."
  },
  {
    id: "d4-q8",
    module: "End-to-End ADAS Systems",
    slideRef: "PDF Slide 32 (Autonomous Driver Assistance Systems)",
    question: "In an ADAS autonomous driving sense-making pipeline (Slide 32), what is the complementary role of Radar vs. LiDAR vs. Optical Camera?",
    options: [
      "Cameras capture rich color, texture, and text (traffic signs, lane lines); LiDAR delivers dense 3D spatial point clouds with millimeter precision; Radar penetrates heavy rain, fog, and dust while directly measuring radial velocity via Doppler shift.",
      "Radar takes photos, cameras measure distance, and LiDAR measures sound.",
      "All three sensors perform the exact same physical measurement and have identical failure modes.",
      "LiDAR is only used inside the engine, while cameras are only placed on the tires."
    ],
    answer: 0,
    hint: "Think about bad weather and spatial depth: cameras struggle in blinding fog; radar easily penetrates fog; LiDAR gives exact 3D geometry.",
    explanation: "Slide 32 highlights ADAS sensor fusion: Cameras provide rich semantic classification (lane markings, pedestrian detection); LiDAR provides accurate 3D spatial occupancy geometry; Radar provides all-weather penetration and instant Doppler velocity measurement."
  },
  {
    id: "d4-q9",
    module: "Reverse Vending Machine Lab",
    slideRef: "Worksheet Instruction & Slide 4-6 (Fraud Scenarios)",
    question: "In Singapore's Beverage Container Return Scheme Reverse Vending Machine (RVM), a fraudster photocopies an eligible beverage barcode onto a wooden rod. How does the machine's multimodal sensor suite detect and reject this fraud attempt?",
    options: [
      "While the optical barcode laser detects a valid registered code, the RGB camera inspection detects non-transparent wood texture, and the digital load cell records a weight far exceeding standard empty container specifications (e.g. 95g vs ~18g), triggering an immediate fraud reject.",
      "The machine calls the police via satellite telephone.",
      "The barcode scanner catches fire when reading photocopied paper.",
      "The machine accepts the wooden rod and dispenses double refund money."
    ],
    answer: 0,
    hint: "Cross-modal verification: barcode says 'PET bottle', but camera says 'wood' and load cell scale says '95g'. The cross-modal agreement check fails!",
    explanation: "In Worksheet Question 3, multimodal fusion provides tamper resistance: single-modality barcode scanners are easily fooled by paper copies, but cross-verifying with camera material classification and load-cell mass verification immediately flags the counterfeit cylinder."
  },
  {
    id: "d4-q10",
    module: "RVM Uncertainty Handling",
    slideRef: "Worksheet Instruction & Slide 7-8 (Failure Cases & New Capabilities)",
    question: "In the Reverse Vending Machine case study, what proposed new sensing capability can reliably differentiate between empty containers and containers with contaminated residual liquids, as well as classify polymer plastics (PET vs HDPE)?",
    options: [
      "Near-Infrared (NIR) Spectroscopy or Acoustic Strike Resonance: NIR absorption spectra identify polymer molecular bonds (PET vs HDPE), while acoustic resonance frequency identifies residual liquid mass and viscosity.",
      "Replacing the machine with a human worker.",
      "Installing an analog AM/FM radio receiver.",
      "Weighing the user who inserted the container."
    ],
    answer: 0,
    hint: "Look at Worksheet Slide 8 (Q5: Proposed New Capability). Commercial recycling sorting plants use optical NIR spectrometers and acoustic transducers.",
    explanation: "Worksheet Question 5 asks for a proposed new capability. Commercial automated sorting plants deploy NIR spectroscopy (which identifies unique chemical infrared absorption bands of PET, HDPE, and PP polymers) and acoustic excitation/hydrophones (detecting fluid slosh resonance) to ensure high-purity recycling streams."
  }
];
