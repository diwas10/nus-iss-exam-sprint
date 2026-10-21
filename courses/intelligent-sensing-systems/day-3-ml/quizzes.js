// Day 3 Mastery Quizzes: Intelligent Sensory Signal Processing using Machine Learning
// Formulated from Dr. TIAN Jing's 44-page lecture slides & 8-slide worksheet

window.DAY3_QUIZZES = [
  {
    id: "d3-q1",
    module: "Energy Compaction",
    slideRef: "PDF Slide 6 (Energy Compaction Property)",
    question: "What is the primary assumption and advantage of the 'Energy Compaction Property' when finding data-driven basis vectors for sensor signals?",
    options: [
      "It assumes all basis vectors must be random, maximizing the entropy of the signals.",
      "It assumes a small set of typical basis vectors captures the majority of energy (variance) in the data, allowing effective compression and noise removal by discarding minor components.",
      "It ensures that signals consume zero electrical power when processed on embedded microcontrollers.",
      "It converts 2D spatial images into 1D temporal sound signals without information loss."
    ],
    answer: 1,
    hint: "Recall how in PCA the first few principal components account for 85–95% of total signal variance.",
    explanation: "Energy compaction states that for physical sensory data, the underlying variance is not uniformly distributed across all dimensions. A small number of orthogonal basis vectors align with the primary directions of variance, concentrating the signal's information into a compact latent representation while discarding noise."
  },
  {
    id: "d3-q2",
    module: "Principal Component Analysis",
    slideRef: "PDF Slides 7-13 (Finding the First Basis Vector)",
    question: "Mathematically, how is the optimal first basis vector \\(\\mathbf{u}_1\\) (with unit length \\(\\|\\mathbf{u}_1\\|=1\\)) found for a zero-mean sensory dataset \\(\\{\\mathbf{x}_i\\}\\)?",
    options: [
      "By maximizing the sum of squared projections \\(\\sum_i (\\mathbf{u}_1^T \\mathbf{x}_i)^2\\), which is mathematically equivalent to minimizing the reconstruction error \\(\\sum_i \\|\\mathbf{x}_i - (\\mathbf{u}_1^T \\mathbf{x}_i)\\mathbf{u}_1\\|^2\\).",
      "By setting all weights of \\(\\mathbf{u}_1\\) to zero to eliminate numerical drift.",
      "By choosing a random vector that is perpendicular to all data points.",
      "By solving the polynomial determinant using the quadratic formula."
    ],
    answer: 0,
    hint: "Pythagorean theorem on projection: \\(\\|\\mathbf{x}_i\\|^2 = \\text{proj}^2 + \\text{error}^2\\). Since \\(\\|\\mathbf{x}_i\\|^2\\) is constant, maximizing projection variance minimizes reconstruction error.",
    explanation: "Slide 12–13 demonstrates that projecting a signal \\(\\mathbf{x}_i\\) onto a unit vector \\(\\mathbf{u}\\) gives projection length \\(\\mathbf{u}^T \\mathbf{x}_i\\). Maximizing the variance of these projections \\(\\mathbf{u}^T \\Sigma \\mathbf{u}\\) directly minimizes the orthogonal reconstruction error. The solution \\(\\mathbf{u}_1\\) is the principal eigenvector of the covariance matrix \\(\\Sigma\\)."
  },
  {
    id: "d3-q3",
    module: "Basis Coordinate Systems",
    slideRef: "PDF Slide 3-5 (Change of Basis)",
    question: "Given a 2-sample signal \\(\\mathbf{x} = [2, 1]^T\\) in standard basis and orthonormal basis vectors \\(\\mathbf{u}_1 = [\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]^T\\) and \\(\\mathbf{u}_2 = [-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}]^T\\), what are the coordinates \\([a_1, a_2]^T\\) in the new basis?",
    options: [
      "\\(a_1 = \\frac{3\\sqrt{2}}{2}\\), \\(a_2 = -\\frac{\\sqrt{2}}{2}\\)",
      "\\(a_1 = 3\\), \\(a_2 = -1\\)",
      "\\(a_1 = 1\\), \\(a_2 = 2\\)",
      "\\(a_1 = \\sqrt{2}\\), \\(a_2 = \\sqrt{2}\\)"
    ],
    answer: 0,
    hint: "Calculate inner products: \\(a_1 = \\mathbf{x}^T \\mathbf{u}_1 = 2(\\frac{\\sqrt{2}}{2}) + 1(\\frac{\\sqrt{2}}{2})\\).",
    explanation: "For orthonormal basis vectors, the coordinate \\(a_i\\) is the dot product \\(\\mathbf{x} \\cdot \\mathbf{u}_i\\). Thus: \\(a_1 = 2\\frac{\\sqrt{2}}{2} + 1\\frac{\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2} \\approx 2.121\\), and \\(a_2 = 2(-\\frac{\\sqrt{2}}{2}) + 1(\\frac{\\sqrt{2}}{2}) = -\\frac{\\sqrt{2}}{2} \\approx -0.707\\)."
  },
  {
    id: "d3-q4",
    module: "Representation Learning",
    slideRef: "PDF Slide 18 (Smoothness Consideration)",
    question: "In sensory representation learning, what does the 'Smoothness' property imply regarding the mapping function \\(f(\\mathbf{x})\\)?",
    options: [
      "All sensor outputs must be smoothed by a 100-sample moving average filter before training.",
      "If two sensory input patterns \\(\\mathbf{x}_1\\) and \\(\\mathbf{x}_2\\) are close in the input data space, their learned representations \\(f(\\mathbf{x}_1)\\) and \\(f(\\mathbf{x}_2)\\) should also be close in the feature space.",
      "The loss function must have zero second derivatives everywhere.",
      "The neural network must only contain linear activation functions."
    ],
    answer: 1,
    hint: "Think about continuity: small sensor noise or slight variations in physical gait should not cause wild jumps in the feature representation.",
    explanation: "Smoothness is a cornerstone of representation learning (Slide 18). It ensures that physically similar sensory states (e.g. walking at 1.2 m/s vs 1.25 m/s) map to adjacent points on the learned feature manifold, enabling smooth interpolation, clustering, and noise resilience."
  },
  {
    id: "d3-q5",
    module: "Transfer Learning",
    slideRef: "PDF Slides 21-23 (Linear Adaptation vs Fine-Tuning)",
    question: "What is the key structural difference between 'Linear Adaptation' and 'Fine-tuning' when applying a pre-trained sensory feature extractor \\(f\\) to a new sensor classification task?",
    options: [
      "Linear adaptation trains from scratch with random weights, while fine-tuning uses an autoencoder.",
      "In linear adaptation, the pre-trained feature extractor \\(f\\) is completely frozen and only a new linear classifier layer is trained; in fine-tuning, \\(f\\) serves as weight initialization and all network layers continue to be updated.",
      "Fine-tuning never updates the output classification layer.",
      "Linear adaptation can only be used on 1D audio signals, while fine-tuning is restricted to 2D images."
    ],
    answer: 1,
    hint: "Look at Slide 22 ('Freeze f, train a new linear mapping') vs Slide 23 ('Initialize f as f, then continue training on new task').",
    explanation: "In linear adaptation (Slide 22), the feature extractor \\(f\\) is frozen as a fixed feature generator, which is fast and prevents catastrophic forgetting. In fine-tuning (Slide 23), the pre-trained weights provide a warm start, but gradients backpropagate through the entire backbone, allowing the features to adapt to new sensor dynamics."
  },
  {
    id: "d3-q6",
    module: "Autoencoders",
    slideRef: "PDF Slides 25-28 (Autoencoder Architecture)",
    question: "Why must the latent representation \\(\\mathbf{z}\\) in an Autoencoder have a lower dimensionality (or constraint) than the input \\(\\mathbf{x}\\)?",
    options: [
      "To prevent the network from trivially learning the identity function \\(\\hat{\\mathbf{x}} = \\mathbf{x}\\) and force it to discover the underlying low-dimensional manifold and correlations of the sensory data.",
      "Because GPU memory cannot store vectors with more than 10 dimensions.",
      "To convert continuous floating-point signals into discrete integers.",
      "Because PyTorch requires hidden layers to be smaller than the batch size."
    ],
    answer: 0,
    hint: "If the latent dimension were equal to or larger than the input without regularization, the network could simply copy input numbers straight to the output without learning any meaningful features.",
    explanation: "An undercomplete autoencoder introduces an informational bottleneck (Slide 25–28). Because the data must squeeze through this constrained bottleneck \\(\\mathbf{z}\\), the model is forced to prioritize the most important orthogonal components and reconstruct only the true signal structure, discarding independent random sensor noise."
  },
  {
    id: "d3-q7",
    module: "Denoising Autoencoders",
    slideRef: "PDF Slide 34 (Denoising Autoencoder)",
    question: "How does a Denoising Autoencoder (DAE) train a sensory model to become robust against real-world sensor glitches and electromagnetic interference?",
    options: [
      "It adds artificial noise \\(\\tilde{\\mathbf{x}} = \\mathbf{x} + \\epsilon\\) to the input, but computes the reconstruction loss against the original clean input \\(\\mathbf{x}\\), teaching the model to project corrupted signals back onto the clean data manifold.",
      "It filters the input using an analog low-pass capacitor before training.",
      "It subtracts the mean of the training data from the test data.",
      "It randomly sets 90% of model weights to zero during inference."
    ],
    answer: 0,
    hint: "Input is noisy \\(\\tilde{\\mathbf{x}}\\), but the target label is clean \\(\\mathbf{x}\\). The network learns an active denoising vector field.",
    explanation: "As shown in Slide 34, a DAE intentionally corrupts the input \\(\\mathbf{x}\\) into \\(\\tilde{\\mathbf{x}}\\). By training the network with loss \\(\\|\\mathbf{x} - g(f(\\tilde{\\mathbf{x}}))\\|^2\\), the autoencoder learns to cancel out noise and project perturbed points back onto the true low-dimensional sensory manifold."
  },
  {
    id: "d3-q8",
    module: "Sensory Anomaly Detection",
    slideRef: "PDF Slide 37-38 (Hawkins Definition & Anomaly Types)",
    question: "According to Hawkins (1980) and Slide 38, what distinguishes a 'Contextual Anomaly' from a 'Point Anomaly' in sensor time-series?",
    options: [
      "A point anomaly is an individual value that is anomalous with respect to the entire global range; a contextual anomaly is an individual value that is normal globally, but abnormal in its specific temporal/environmental context (e.g. 35°C in winter vs summer).",
      "A point anomaly only occurs in temperature sensors, while contextual anomalies only occur in vision cameras.",
      "Contextual anomalies can never be detected by machine learning algorithms.",
      "Point anomalies only occur in datasets with more than 1 million samples."
    ],
    answer: 0,
    hint: "Think about wearing a heavy coat: 0°C in winter is normal; 0°C in the tropics is a contextual anomaly.",
    explanation: "Slide 38 defines the three anomaly types: Point anomalies (single spikes outside global min/max bounds), Contextual anomalies (values within global limits that violate local temporal context, like nighttime power consumption spiking to daytime levels), and Collective anomalies (a collection of points that together form an anomalous sequence, such as a heart arrhythmia)."
  },
  {
    id: "d3-q9",
    module: "Reconstruction-Based Detection",
    slideRef: "PDF Slide 42-43 & Workshop (Autoencoder Anomaly Detection)",
    question: "In the Day 3 workshop, why is an Autoencoder trained ONLY on normal machine sensor data used to detect novel machine anomalies?",
    options: [
      "Because anomalies are rare and diverse in real factories; the autoencoder learns the manifold of normal operating states. When an unseen fault occurs, the model fails to reconstruct it, producing a high reconstruction error \\(\\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|^2 > \\tau\\).",
      "Because training on anomalies causes PyTorch to throw a numerical overflow error.",
      "Because autoencoders cannot perform multi-class classification.",
      "Because normal data contains higher frequencies than anomalous data."
    ],
    answer: 0,
    hint: "Unsupervised anomaly detection: the model is an expert at reconstructing normal behavior, so anomalous patterns cause large reconstruction errors.",
    explanation: "In industrial predictive maintenance, failure modes are scarce, unpredictable, and expensive to collect. By training solely on normal operational states (Slide 42), the autoencoder develops minimal reconstruction loss on healthy states. When an anomaly occurs (bearing wear, motor seizure), the network cannot compress and reconstruct the novel dynamics, causing reconstruction error to spike above threshold \\(\\tau\\)."
  },
  {
    id: "d3-q10",
    module: "Smart Fish Tank Case Study",
    slideRef: "Worksheet Slides 3-6 (Aquaculture Anomaly Events A & B)",
    question: "In the Smart Fish Tank case study (Worksheet Slide 4), what is the key diagnostic difference between Anomaly Event A and Anomaly Event B?",
    options: [
      "Event A is an acute drop in fish swimming velocity while dissolved oxygen remains normal (likely a visual occlusion, camera artifact, or brief external scare); Event B is a progressive depletion of dissolved oxygen followed by sluggish fish motion, indicating genuine biological hypoxia / feeder pump failure.",
      "Event A is caused by water boiling, while Event B is caused by freezing.",
      "Event A indicates the fish are feeding at maximum rate, while Event B indicates zero fish in the tank.",
      "There is no difference; both events are identical Gaussian white noise spikes."
    ],
    answer: 0,
    hint: "Examine both sensor streams: Top plot (oxygen level) vs Bottom plot (fish motion speed). In Event A, oxygen is completely steady at ~7.5 mg/L, but velocity drops. In Event B, oxygen plummets first, then fish slow down.",
    explanation: "Worksheet Slide 4 presents two multimodal sensor streams: dissolved oxygen and computer-vision fish velocity. In Event A, oxygen is completely unaffected while fish velocity drops abruptly, signaling a transient non-biological event (e.g. camera lighting fluctuation or temporary scare). In Event B, dissolved oxygen drops steadily below critical thresholds, triggering a corresponding sustained decrease in fish activity due to hypoxia, requiring immediate automated aeration!"
  }
];
