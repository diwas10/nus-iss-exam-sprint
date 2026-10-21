// Day 2 Student Research & Capstone Project Lab: Sensory Signal Transformation

window.DAY2_RESEARCH = {
  topics: [
    {
      id: "res-uci-har",
      title: "1. Wearable Inertial Sensing & Multi-Scale Wavelet Feature Extraction",
      source: "Anguita et al., 'A Public Domain Dataset for Human Activity Recognition Using Smartphones', ESANN 2013",
      slideRef: "Day 2 Workshop & Slide 2, 28",
      summary: "Human Activity Recognition (HAR) on wearable edge devices (smartwatches, smartphones) demands high classification accuracy under strict milliwatt power budgets. While modern deep learning (CNN-LSTM) is powerful, 3-level Discrete Wavelet Transform (DWT) feature extraction paired with Gaussian Naive Bayes or LightGBM achieves comparable accuracy with 100x lower latency and memory footprint.",
      coreChallenge: "Separating gravitational tilt (low-frequency static posture) from body dynamics (high-frequency impacts) while maintaining invariant features across differing user body shapes, walking paces, and sensor orientations.",
      researchQuestions: [
        "How do mother wavelet families (e.g. Daubechies 'db4' vs. Symlets 'sym5' vs. Haar) affect the preservation of foot-strike impact transients in triaxial accelerometer signals?",
        "Can wavelet subband energy and entropy features be computed in fixed-point arithmetic on microcontrollers (ARM Cortex-M0/M4) without hardware floating-point units?",
        "How can domain adaptation be integrated with Naive Bayes to handle covariate shift when a user wears the sensor in their front pocket versus jacket pocket?"
      ],
      recommendedReading: [
        "Anguita, D., et al. (2013). 'Human activity recognition on smartphones using a multiclass hardware-friendly support vector machine'. Ambient Assisted Living.",
        "Mallat, S. (1989). 'A theory for multiresolution signal decomposition: the wavelet representation'. IEEE TPAMI, 11(7), 674-693.",
        "Bulling, O., Blanke, U., & Schiele, B. (2014). 'A tutorial on human activity recognition using body-worn inertial sensors'. ACM Computing Surveys."
      ]
    },
    {
      id: "res-wave-vit",
      title: "2. Wave-ViT & Wavelet Neural Networks: Invertible Downsampling in Computer Vision",
      source: "Yao et al., 'Wave-ViT: Unifying Wavelet and Vision Transformers for Systematic Multi-Scale Aggregation', ECCV 2022",
      slideRef: "PDF Slides 25-27 (2D Wavelets)",
      summary: "In standard Convolutional Neural Networks and Vision Transformers, pooling or strided convolutions permanently discard high-frequency textural information during spatial downsampling. Wave-ViT leverages 2D Discrete Wavelet Transform (2D DWT) as a mathematically lossless, invertible downsampling operator, decomposing features into LL (approx) and LH, HL, HH (high-frequency directional details).",
      coreChallenge: "Standard self-attention has quadratic complexity \\(\\mathcal{O}(N^2)\\) with respect to image resolution. How can wavelet multi-frequency decomposition prune redundant low-frequency tokens while preserving high-frequency boundary details?",
      researchQuestions: [
        "Why does replacing bilinear downsampling with 2D Haar/Biorthogonal wavelets improve adversarial robustness against high-frequency image perturbations?",
        "Can 2D DWT be applied directly to 2D time-frequency sensor representations (STFT spectrograms and scalograms) for acoustic event classification?",
        "How does the computational complexity of 2D Mallat filter banks compare with learned strided depthwise separable convolutions?"
      ],
      recommendedReading: [
        "Yao, T., et al. (2022). 'Wave-ViT: Unifying Wavelet and Vision Transformers for Systematic Multi-Scale Aggregation'. ECCV 2022.",
        "Liu, P., et al. (2018). 'Multi-level Wavelet Convolutional Neural Networks for Image Restoration'. CVPR Workshops.",
        "Huang, H., et al. (2017). 'Wavelet-based Dual-branch Network for Image Deraining'. IEEE TCSVT."
      ]
    },
    {
      id: "res-em-acoustic",
      title: "3. Gaussian Mixture Models & Expectation-Maximization in Industrial Acoustic Anomaly Detection",
      source: "Purohit et al., 'MIMII Dataset: Sound Dataset for Malfunctioning Industrial Machine Investigation and Inspection', DCASE 2019",
      slideRef: "PDF Slides 38-47 (EM & GMM)",
      summary: "In industrial smart factories, acoustic sensors and vibration hydrophones monitor high-value assets (water pumps, valves, compressors, slide rails) for anomalous chokes and bearing wear. Because failure data is extremely scarce, supervised classifiers fail. Instead, semi-supervised Gaussian Mixture Models (GMMs) fitted via the Expectation-Maximization (EM) algorithm model the normal acoustic operational envelope.",
      coreChallenge: "Real factory environments contain severe non-stationary background noise (nearby motors, forklift alarms, HVAC fluctuations). EM can easily get trapped in poor local maxima or overfit to background acoustic modes.",
      researchQuestions: [
        "How can the number of Gaussian components \\(K\\) in GMM be determined automatically using the Bayesian Information Criterion (BIC) or Dirichlet Process priors?",
        "What regularizations prevent the covariance matrices \\(\\Sigma_k\\) from collapsing to singular matrices (zero variance) during the M-step?",
        "How does feature transformation (log-Mel filterbanks vs. CWT scalograms) alter the convexity of the EM log-likelihood surface?"
      ],
      recommendedReading: [
        "Purohit, H., et al. (2019). 'MIMII Dataset: Sound Dataset for Malfunctioning Industrial Machine Investigation and Inspection'. IEEE DCASE.",
        "Dempster, A. P., Laird, N. M., & Rubin, D. B. (1977). 'Maximum likelihood from incomplete data via the EM algorithm'. Journal of the Royal Statistical Society: Series B, 39(1), 1-22.",
        "Bishop, C. M. (2006). 'Pattern Recognition and Machine Learning' (Chapter 9: Mixture Models and EM). Springer."
      ]
    }
  ],

  useCaseLab: {
    title: "Capstone Challenge: Autonomous Pipeline Integrity & Choke Monitoring",
    description: "Design an intelligent sensing edge node for NUS-ISS automated pipe inspection that continuously monitors acoustic emission and pressure pulses, detects blockages using wavelet multiresolution analysis, and classifies anomaly severity using Gaussian Naive Bayes / EM.",
    subsystemQuestions: [
      {
        id: "d2-sub1",
        label: "1. Transducer & Sampling Setup",
        placeholder: "Specify sampling rate, hydrophone/pressure sensor type, and how you avoid aliasing on high-frequency fluid transients..."
      },
      {
        id: "d2-sub2",
        label: "2. Time-Frequency Transform Pipeline",
        placeholder: "Choose STFT vs. DWT vs. CWT. Which wavelet family (Haar, db4, morlet) will you choose and why? What decomposition levels?"
      },
      {
        id: "d2-sub3",
        label: "3. Feature Extraction & Denoising",
        placeholder: "Explain your thresholding method for detail coefficients (soft vs. hard thresholding) and what statistics you extract..."
      },
      {
        id: "d2-sub4",
        label: "4. Classification & Latent Anomaly Detection",
        placeholder: "How will you combine Gaussian Naive Bayes for known fault patterns with EM/GMM for detecting novel unlabelled pipe chokes?"
      }
    ]
  }
};
