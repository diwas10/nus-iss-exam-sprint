// Day 4 Student Research & Capstone Project Lab: Sense Making from Sensory Data & Multimodal Systems

window.DAY4_RESEARCH = {
  topics: [
    {
      id: "res-deep-multimodal-fusion",
      title: "1. Deep Multimodal Data Fusion: Architectures & Trade-offs",
      source: "Ramachandram & Taylor, 'Deep Multimodal Learning: A Survey on Recent Advances and Trends', IEEE SPM 2017",
      slideRef: "PDF Slides 16-20",
      summary: "Multimodal fusion architectures dictate how heterogeneous sensory modalities (wearables, cameras, microphones, environmental probes) are merged. While Early Fusion exploits low-level cross-sensor correlations, it is fragile to missing sensors. Late Fusion provides fault tolerance through decision ensembles, while Intermediate Cross-Attention Fusion dynamically weights modalities based on predictive uncertainty.",
      coreChallenge: "Heterogeneous sampling rates and dimensions: an optical camera produces 30 fps high-dimensional pixel tensors, while an environmental temperature sensor produces 0.1 Hz scalar floats. How can latent spaces be aligned without losing temporal nuances?",
      researchQuestions: [
        "How can Transformer-based cross-attention mechanisms dynamically down-weight modalities suffering from transient degradation (e.g., lens flare or microphone saturation)?",
        "What are the mathematical conditions under which Late Fusion provably achieves lower Bayesian risk than Early Fusion?",
        "How can missing modalities during inference (e.g., a disconnected sensor) be imputed using cross-modal translation autoencoders?"
      ],
      recommendedReading: [
        "Ramachandram, D., & Taylor, G. W. (2017). 'Deep multimodal learning: A survey on recent advances and trends'. IEEE Signal Processing Magazine, 34(6), 96-108.",
        "Baltrušaitis, T., Ahuja, C., & Morency, L. P. (2018). 'Multimodal machine learning: A survey and taxonomy'. IEEE TPAMI, 41(2), 423-443.",
        "Liang, P. P., et al. (2022). 'Foundations and Recent Trends in Multimodal Machine Learning: Principles, Challenges, and Open Questions'. arXiv:2209.03430."
      ]
    },
    {
      id: "res-cross-modal-alignment",
      title: "2. Cross-Modal Alignment & Contrastive Representation Learning for IoT",
      source: "Radford et al., 'Learning Transferable Visual Models From Natural Language Supervision (CLIP)', ICML 2021",
      slideRef: "PDF Slides 21-25",
      summary: "Modern multimodal intelligence aligns disparate sensor streams into a shared metric embedding space. Contrastive training (matching positive sensor-video pairs against negative pairs) allows zero-shot retrieval and cross-modal translation—enabling an AI system to 'see' through sound or 'predict' body inertia from camera footage.",
      coreChallenge: "Multimodal temporal misalignment: physical transducers possess differing internal signal propagation delays, analog filter latencies, and packet delivery jitters over wireless mesh networks.",
      researchQuestions: [
        "How can Soft-DTW (differentiable Dynamic Time Warping) be integrated directly into deep neural network loss functions for end-to-end temporal alignment?",
        "Can cross-modal contrastive pre-training on large unlabelled multi-sensor datasets enable zero-shot transfer to novel industrial machines?",
        "How can spatial camera extrinsic matrices be co-registered automatically with spatial antenna arrays in RF/radar sensing?"
      ],
      recommendedReading: [
        "Radford, A., et al. (2021). 'Learning Transferable Visual Models From Natural Language Supervision'. ICML 2021.",
        "Cuturi, M., & Blondel, M. (2017). 'Soft-DTW: a Differentiable Loss Function for Time-Series'. ICML 2017.",
        "Gidaris, S., et al. (2018). 'Unsupervised Representation Learning by Predicting Image Rotations'. ICLR 2018."
      ]
    },
    {
      id: "res-autonomous-fusion",
      title: "3. ADAS & Autonomous Robot Perception: Radar, LiDAR, and Camera Fusion",
      source: "Li et al., 'Deep Learning for Autonomous Driving: An Overview of Recent Advances and Challenges', IEEE TITS 2022",
      slideRef: "PDF Slides 31-32 (ADAS Pipeline)",
      summary: "Autonomous driving represents the pinnacle of safety-critical multimodal sense-making. Cameras provide dense semantic color and texture; LiDAR provides precise millimeter 3D spatial geometry; Radar penetrates adverse weather (heavy rain, fog, blinding blizzard) and provides direct Doppler velocity readings.",
      coreChallenge: "Conflicting sensor evidence: What should an autonomous controller do when the optical camera detects a phantom shadow on the highway, but radar and LiDAR detect completely empty free space at 100 km/h?",
      researchQuestions: [
        "How can Dempster-Shafer theory or Bayesian evidential deep learning represent epistemic vs. aleatoric uncertainty across conflicting sensory modalities?",
        "Can Bird's Eye View (BEV) unified latent space representations replace independent 2D camera and 3D LiDAR detection heads?",
        "What are the latency and memory limits of running multi-stream BEV fusion on automotive-grade microchips (e.g. NVIDIA Orin) under 50 ms loop deadlines?"
      ],
      recommendedReading: [
        "Li, Y., et al. (2022). 'Deep Learning for Autonomous Driving: An Overview of Recent Advances and Challenges'. IEEE TITS.",
        "Philion, J., & Fidler, S. (2020). 'Lift, Splat, Shoot: Encoding Images From Arbitrary Cameras by Predicting Depth'. ECCV 2020.",
        "Feng, D., et al. (2020). 'Deep Multi-modal Object Detection and Semantic Segmentation for Autonomous Driving: Datasets, Methods, and Challenges'. IEEE TITS."
      ]
    }
  ],

  useCaseLab: {
    title: "Capstone Challenge: Next-Generation Multimodal Reverse Vending Machine (RVM)",
    description: "Reverse engineer Singapore's Beverage Container Return Scheme RVM and architect an upgraded multimodal edge system that defeats barcode counterfeiting, liquid residue fraud, and damaged container rejections using optical, acoustic, and spectroscopic sensing.",
    subsystemQuestions: [
      {
        id: "d4-sub1",
        label: "1. Sensor Suite & Transducer Topology",
        placeholder: "Detail your multimodal sensor layout (GS1 laser scanner, high-speed RGB camera, load cell scale, inductive metal coil, NIR spectrometer, acoustic tap transducer)..."
      },
      {
        id: "d4-sub2",
        label: "2. Multimodal Fusion Pipeline",
        placeholder: "Explain whether you choose Early, Intermediate, or Late decision-level fusion, and how you cross-verify container identity against physical mass and material..."
      },
      {
        id: "d4-sub3",
        label: "3. Anti-Fraud & Uncertainty Mitigation",
        placeholder: "How does your system detect photocopied barcodes, containers filled with water/sand, and deformed/crushed cans where barcodes are damaged?"
      },
      {
        id: "d4-sub4",
        label: "4. Proposed New Capability",
        placeholder: "Describe the implementation of an Acoustic Strike Resonance sensor or NIR Spectroscopy to verify plastic polymer purity (PET vs HDPE) and fluid sloshing..."
      }
    ]
  }
};
