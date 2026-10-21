// Day 3 Student Research & Capstone Project Lab: Intelligent Sensory Signal Processing using ML

window.DAY3_RESEARCH = {
  topics: [
    {
      id: "res-self-supervised-sensors",
      title: "1. Self-Supervised Contrastive Representation Learning for Sensor Streams",
      source: "Tonekaboni et al., 'Unsupervised Representation Learning for Time Series with Temporal Neighborhood Coding', ICLR 2021",
      slideRef: "PDF Slides 24, 35-36 & Workshop Q2",
      summary: "Collecting labeled sensor data (e.g. medical EEG, turbine blade cracks) is prohibitively expensive. Self-supervised contrastive learning (SimCLR/TNC) uses data augmentations (jittering, magnitude scaling, time-warping) to create positive pairs from the same operational state and negative pairs from different time windows, maximizing mutual information in latent feature space.",
      coreChallenge: "Unlike images where rotations and crops rarely change object semantics, aggressive time-series augmentations (e.g. large time-warping or filtering) can unintentionally alter the physical meaning of transient events (like cardiac arrhythmia or seismic tremors).",
      researchQuestions: [
        "Which time-series augmentation strategies (jittering vs. slicing vs. frequency masking) preserve invariant physical dynamics while providing sufficient hardness for contrastive learning?",
        "How does the choice of latent dimension bottleneck \\(z\\) affect downstream linear classification versus unsupervised anomaly detection?",
        "Can non-stationary sensor drift be mitigated by contrasting short temporal neighborhoods against distant stationary baselines?"
      ],
      recommendedReading: [
        "Tonekaboni, S., et al. (2021). 'Unsupervised Representation Learning for Time Series with Temporal Neighborhood Coding'. ICLR 2021.",
        "Eldele, E., et al. (2021). 'Time-Series Representation Learning via Temporal and Contextual Contrasting'. IJCAI 2021.",
        "Chen, T., et al. (2020). 'A Simple Framework for Contrastive Learning of Visual Representations (SimCLR)'. ICML 2020."
      ]
    },
    {
      id: "res-ae-anomaly-detection",
      title: "2. Deep Autoencoders for Industrial Vibration & Motor Anomaly Detection",
      source: "Ribeiro et al., 'A Study of Deep Autoencoders for Anomaly Detection in Industrial Predictive Maintenance', IEEE TII 2021",
      slideRef: "PDF Slides 25-34, 42-43 & Workshop",
      summary: "In smart manufacturing plants, high-speed machines (turbines, CNC cutters, conveyor rollers) operate under continuous vibration and acoustic monitoring. Because failure cases are scarce, autoencoders trained exclusively on healthy operational data detect emerging structural fatigue as reconstruction error spikes \\(\\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|^2 > \\tau\\).",
      coreChallenge: "Overfitting on normal sensor data can cause an autoencoder to generalize too broadly, unintentionally reconstructing subtle anomalies with low error and missing critical early-stage cracks.",
      researchQuestions: [
        "What regularization techniques (weight decay, sparsity constraints, contractive penalty) ensure the autoencoder learns a narrow manifold that rejects anomalous inputs?",
        "How can adaptive dynamic thresholding (e.g. Extreme Value Theory, moving quantile bounds) replace fixed static thresholds \\(\\mu + 3\\sigma\\) in the presence of seasonal temperature shifts?",
        "How do 1D temporal convolutional autoencoders compare with recurrent LSTM autoencoders in memory-constrained industrial edge microcontrollers?"
      ],
      recommendedReading: [
        "Ribeiro, M., et al. (2021). 'A Study of Deep Autoencoders for Anomaly Detection in Industrial Predictive Maintenance'. IEEE Transactions on Industrial Informatics.",
        "Malhotra, P., et al. (2016). 'LSTM-based Encoder-Decoder for Multi-sensor Anomaly Detection'. ICML Anomaly Detection Workshop.",
        "Vincent, P., et al. (2010). 'Stacked Denoising Autoencoders: Learning Useful Representations in a Deep Network with a Local Denoising Criterion'. JMLR, 11, 3371-3408."
      ]
    },
    {
      id: "res-energy-compaction",
      title: "3. Energy Compaction & Optimal Orthogonal Basis Vectors in Sensor Arrays",
      source: "Jolliffe & Cadima, 'Principal Component Analysis: A Review and Recent Developments', Phil. Trans. R. Soc. A 2016",
      slideRef: "PDF Slides 6-15",
      summary: "Modern IoT nodes often record dozens of physically coupled sensors (e.g., 3-axis accelerometer + 3-axis gyro + 3-axis magnetometer). The Energy Compaction property guarantees that multi-channel sensor variance can be concentrated onto minimal orthogonal eigenvectors via PCA / Karhunen-Loève Transform (KLT), achieving lossless data compression on embedded loT edge nodes.",
      coreChallenge: "PCA assumes linear relationships. When sensors exhibit strong non-linear saturation or hysteresis (e.g. thermistors, gas sensor chemistry), linear PCA fails to capture the true low-dimensional manifold.",
      researchQuestions: [
        "How does Kernel PCA (using RBF or polynomial kernels) compare with non-linear deep autoencoders in terms of energy compaction on wearable sensor streams?",
        "Can streaming online PCA (Oja's algorithm) update basis vectors \\(\\mathbf{u}_1, \\mathbf{u}_2\\) in real-time as sensors age and experience physical degradation?",
        "How does energy compaction in the wavelet domain compare with energy compaction in the principal component domain?"
      ],
      recommendedReading: [
        "Jolliffe, I. T., & Cadima, J. (2016). 'Principal component analysis: a review and recent developments'. Philosophical Transactions of the Royal Society A, 374(2065).",
        "Schölkopf, B., Smola, A., & Müller, K. R. (1998). 'Nonlinear component analysis as a kernel eigenvalue problem'. Neural Computation, 10(5), 1299-1319.",
        "Oja, E. (1982). 'Simplified neuron model as a principal component analyzer'. Journal of Mathematical Biology, 15(3), 267-273."
      ]
    }
  ],

  useCaseLab: {
    title: "Capstone Challenge: Smart Aquaculture & Fish Tank Monitoring System",
    description: "Design an intelligent sensing edge node for NUS-ISS Smart Aquaculture that fuses dissolved oxygen sensors with computer-vision fish velocity measurements, isolates biological hypoxia from sensor glitches, and controls automated feeder/aerator actuators.",
    subsystemQuestions: [
      {
        id: "d3-sub1",
        label: "1. Transducer & Sensor Setup",
        placeholder: "Specify the optical dissolved oxygen sensor, sampling frequency, and overhead computer vision camera setup..."
      },
      {
        id: "d3-sub2",
        label: "2. Basis Representation & Noise Filtering",
        placeholder: "How will you apply PCA or Autoencoders to compress multi-channel water quality metrics (oxygen, pH, temperature, turbidity)?"
      },
      {
        id: "d3-sub3",
        label: "3. Anomaly Diagnosis (Event A vs Event B)",
        placeholder: "Explain your diagnostic rule to differentiate Anomaly Event A (camera occlusion/acute fright) from Event B (hypoxia oxygen depletion)..."
      },
      {
        id: "d3-sub4",
        label: "4. Automated Closed-Loop Action",
        placeholder: "Detail the control logic: when does the system activate emergency aerators versus adjusting automated pellet feeding rates?"
      }
    ]
  }
};
