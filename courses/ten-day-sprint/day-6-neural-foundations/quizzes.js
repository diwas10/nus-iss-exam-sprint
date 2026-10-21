// Day 6 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions
// Focus: Perceptrons, Backprop Math, Activations, RBF/SOM, CNN Parameters & Explainable AI (XAI)

window.DAY6_NEURAL_FOUNDATIONS_QUIZZES = [
  {
    id: "d6-q1",
    module: "Pattern Recognition Systems — Perceptrons",
    slideRef: "PRMLS Day 1a Slide 8-14",
    question: "Why was the discovery by Minsky & Papert (1969) regarding the XOR function so devastating to the first generation of artificial neural networks?",
    options: [
      "They proved that single-layer perceptrons can only form a single linear decision boundary, and therefore cannot solve non-linearly separable problems like XOR without hidden layers.",
      "They proved that backpropagation has exponential $O(2^N)$ time complexity.",
      "They demonstrated that gradient descent always diverges on binary inputs.",
      "They proved that analog computers are superior to digital neural networks."
    ],
    correctIndex: 0,
    hint: "Plot XOR on a 2D plane: (0,0) and (1,1) are Class 0; (0,1) and (1,0) are Class 1. Can a single straight line separate them?",
    explanation: "A single-layer perceptron computes $y = f(w^T x + b)$, which is strictly a single linear separating hyperplane. Since XOR requires at least two lines to isolate classes, a multi-layer perceptron (MLP) with non-linear hidden units is mathematically necessary."
  },
  {
    id: "d6-q2",
    module: "Pattern Recognition Systems — Backpropagation Math",
    slideRef: "PRMLS Day 1b Slide 12-18 & ANN-BP-v006.xlsx",
    question: "In standard MLP backpropagation with squared error loss $E = \\frac{1}{2}(t_k - y_k)^2$ and sigmoid activation $y_k = \\sigma(z_k)$, what is the local error gradient $\\delta_k = -\\frac{\\partial E}{\\partial z_k}$ at output neuron $k$?",
    options: [
      "$\\delta_k = (t_k - y_k) \\cdot y_k(1 - y_k)$",
      "$\\delta_k = (t_k - y_k)^2$",
      "$\\delta_k = \\frac{t_k - y_k}{y_k(1 - y_k)}$",
      "$\\delta_k = y_k(1 - y_k) \\sum w_{jk}$"
    ],
    correctIndex: 0,
    hint: "By chain rule: $\\frac{\\partial E}{\\partial z_k} = \\frac{\\partial E}{\\partial y_k} \\cdot \\frac{\\partial y_k}{\\partial z_k} = -(t_k - y_k) \\cdot \\sigma'(z_k)$. Note that $\\sigma'(z) = \\sigma(z)(1-\\sigma(z))$.",
    explanation: "$\\frac{\\partial E}{\\partial y_k} = -(t_k - y_k)$ and $\\frac{\\partial y_k}{\\partial z_k} = y_k(1 - y_k)$. Therefore, $\\delta_k = -\\frac{\\partial E}{\\partial z_k} = (t_k - y_k) \\cdot y_k(1 - y_k)$. The weight update is $\\Delta w_{jk} = \\eta \\delta_k a_j$."
  },
  {
    id: "d6-q3",
    module: "Pattern Recognition Systems — Activation Functions",
    slideRef: "PRMLS Day 1b Slide 22-26",
    question: "Why does the Sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ cause the notorious 'Vanishing Gradient Problem' in deep networks, and why does ReLU resolve it?",
    options: [
      "The derivative $\\sigma'(z)$ has a maximum value of only $0.25$ (at $z=0$). Multiplying gradients across many layers causes the gradient signal to shrink exponentially towards zero; ReLU has a derivative of exactly $1.0$ for all $z > 0$.",
      "Sigmoid functions cannot be computed on modern GPUs.",
      "ReLU allows negative weights while Sigmoid restricts weights to $[0, 1]$.",
      "Sigmoid causes exploding gradients because its derivative exceeds $10.0$."
    ],
    correctIndex: 0,
    hint: "$\\sigma'(z) = \\sigma(z)(1-\\sigma(z))$. When $\\sigma = 0.5$, $\\sigma' = 0.5 \\times 0.5 = 0.25$. What is $0.25^6$?",
    explanation: "Because $\\max(\\sigma') = 0.25$, backpropagating through $L$ layers scales the gradient by at least $0.25^L$, effectively halting learning in early layers. ReLU ($\\max(0, z)$) has a constant gradient of $1.0$ for positive activations, allowing gradients to flow back unaltered."
  },
  {
    id: "d6-q4",
    module: "Pattern Recognition Systems — RBF vs MLP",
    slideRef: "PRMLS Day 2a Slide 5-14",
    question: "What is the fundamental architectural difference between an MLP and a Radial Basis Function (RBF) network?",
    options: [
      "MLP hidden neurons compute global inner products ($w^T x + b$) that form unbounded planar hyperplanes; RBF hidden neurons compute local Euclidean distances ($\\|x - \\mu_j\\|$) with Gaussian decay, responding only to inputs within a local receptive field.",
      "MLP is unsupervised, while RBF is strictly supervised.",
      "MLP has one output neuron, while RBF must have at least 100 output neurons.",
      "RBF networks use backpropagation through time."
    ],
    correctIndex: 0,
    hint: "Gaussian bell curve $\\exp(-\\frac{\\|x-\\mu\\|^2}{2\\sigma^2})$ drops to 0 when $x$ is far from center $\\mu$.",
    explanation: "MLP neurons have global receptive fields (their decision boundaries extend to infinity). RBF neurons have localized receptive fields centered at $\\mu_j$: if an input is far from all prototype centers, all RBF activations drop to 0, which prevents confident extrapolation on out-of-distribution data."
  },
  {
    id: "d6-q5",
    module: "Pattern Recognition Systems — RBF Training",
    slideRef: "PRMLS Day 2a Slide 15-18",
    question: "Why is training a Radial Basis Function (RBF) network often orders of magnitude faster than training an equivalent MLP with Backpropagation?",
    options: [
      "RBF training is decomposed into a two-stage hybrid process: centers $\\mu_j$ are found via fast unsupervised clustering (K-Means), and output weights are solved directly via closed-form linear least squares (pseudo-inverse), avoiding iterative backpropagation.",
      "RBF networks do not use floating-point numbers.",
      "RBF networks only train on the first 10 rows of data.",
      "RBF networks use quantum annealing."
    ],
    correctIndex: 0,
    hint: "Once the hidden layer basis matrix $\\Phi$ is fixed, the output is just linear regression: $W = (\\Phi^T \\Phi)^{-1} \\Phi^T Y$!",
    explanation: "Two-stage training: 1. Unsupervised phase finds prototype centers $\\mu_j$ and bandwidths $\\sigma_j$ (e.g. via K-Means). 2. Supervised phase fixes hidden activations $\\Phi$ and computes output weights in one step via $W = \\Phi^{\\dagger} Y$, eliminating thousands of gradient descent epochs."
  },
  {
    id: "d6-q6",
    module: "Pattern Recognition Systems — Self-Organizing Maps",
    slideRef: "PRMLS Day 2a Slide 22-26",
    question: "In a Kohonen Self-Organizing Map (SOM), what is the 'Best Matching Unit' (BMU) and how are weights updated during competitive learning?",
    options: [
      "The BMU is the neuron whose weight vector has the minimum Euclidean distance to the current input vector; both the BMU and its topological grid neighbors have their weights pulled toward the input.",
      "The BMU is the neuron with the highest bias, and only the BMU updates its weights.",
      "The BMU is the neuron that produces a negative output.",
      "The BMU is determined by majority voting across all classes."
    ],
    correctIndex: 0,
    hint: "Competitive: winner takes all (or winner and its neighborhood take most!). $\\Delta w_i = \\eta(t) h_{ci}(t) (x - w_i)$.",
    explanation: "The BMU $c = \\arg\\min_i \\|x - w_i\\|$ wins the competition. Under Kohonen's rule, the BMU and neurons in its topological neighborhood $h_{ci}(t)$ are shifted toward $x$: $\\Delta w_i = \\eta(t) h_{ci}(t) (x - w_i)$. As training progresses, the neighborhood radius shrinks, preserving topological relationships."
  },
  {
    id: "d6-q7",
    module: "Pattern Recognition Systems — CNN Spatial Dimensions",
    slideRef: "PRMLS Day 2b Slide 8-15",
    question: "An input image of dimensions $32 \\times 32 \\times 3$ is processed by a 2D convolutional layer with 16 filters of size $5 \\times 5$, padding $P = 2$, and stride $S = 2$. What is the spatial output feature map volume?",
    options: [
      "$16 \\times 16 \\times 16$",
      "$32 \\times 32 \\times 16$",
      "$14 \\times 14 \\times 16$",
      "$8 \\times 8 \\times 3$"
    ],
    correctIndex: 0,
    hint: "Output dimension formula: $W_{\\text{out}} = \\lfloor \\frac{W - F + 2P}{S} \\rfloor + 1$. Number of channels = number of filters!",
    explanation: "$W_{\\text{out}} = \\lfloor \\frac{32 - 5 + 2(2)}{2} \\rfloor + 1 = \\lfloor \\frac{31}{2} \\rfloor + 1 = 15 + 1 = 16$. Since there are 16 filters, the output tensor shape is $16 \\times 16 \\times 16$."
  },
  {
    id: "d6-q8",
    module: "Pattern Recognition Systems — CNN Parameter Counting",
    slideRef: "PRMLS Day 2b Slide 16-20 & NUS ISS Past Exam Trap",
    question: "A convolutional layer receives an input feature map of size $14 \\times 14 \\times 32$. It applies 64 filters of size $3 \\times 3$ with bias enabled. Exactly how many trainable parameters are in this layer?",
    options: [
      "18,496 parameters: $[(3 \\times 3 \\times 32) + 1] \\times 64 = (288 + 1) \\times 64 = 18,496$",
      "18,432 parameters: $(3 \\times 3 \\times 32) \\times 64 = 18,432$ (omitting bias)",
      "576 parameters: $(3 \\times 3 \\times 64)$",
      "62,720 parameters: $14 \\times 14 \\times 32$"
    ],
    correctIndex: 0,
    hint: "Each filter has depth equal to the input channels ($C_{\\text{in}} = 32$) plus 1 scalar bias. Multiply by the number of filters ($K=64$)!",
    explanation: "Each filter spans all input channels: $3 \\times 3 \\times 32 = 288$ weights. With 1 bias per filter, each filter has $288 + 1 = 289$ parameters. With 64 filters, total parameters $= 289 \\times 64 = 18,496$. Omitting the $+1$ bias is the #1 student exam mistake!"
  },
  {
    id: "d6-q9",
    module: "Pattern Recognition Systems — Regularization",
    slideRef: "PRMLS Day 3a Slide 10-14",
    question: "How does Dropout regularization operate differently between training time and inference/testing time?",
    options: [
      "During training, neurons are randomly deactivated with probability $p$; during inference, all neurons are active and their outputs (or weights) are scaled by $(1 - p)$ to match the expected value.",
      "During training, weights are clipped to zero; during inference, learning rate is set to zero.",
      "During training, all neurons are active; during inference, half of the neurons are permanently deleted.",
      "Dropout is only applied during testing, never during training."
    ],
    correctIndex: 0,
    hint: "Think of Dropout during training as training an ensemble of $2^N$ sub-networks. At test time, you use the full network with scaled weights!",
    explanation: "Dropout prevents co-adaptation during training by dropping units with probability $p$. At test time, dropping units would introduce unwanted stochasticity, so all units remain active, but activations are multiplied by $(1-p)$ (or inverted dropout scales by $\\frac{1}{1-p}$ at train time) so expected output activations remain consistent."
  },
  {
    id: "d6-q10",
    module: "Machine Reasoning — Explainable AI (XAI)",
    slideRef: "MR Day 4 Slide 8-18",
    question: "What is the foundational theoretical difference between LIME (Local Interpretable Model-agnostic Explanations) and SHAP (SHapley Additive exPlanations)?",
    options: [
      "LIME builds an empirical local surrogate model (e.g. sparse linear regression) by perturbing instances near the prediction; SHAP is grounded in cooperative game theory (Shapley values), guaranteeing mathematical axioms of Efficiency, Symmetry, and Additivity.",
      "LIME works only on images; SHAP works only on tabular data.",
      "LIME computes global feature importance; SHAP is strictly local.",
      "SHAP requires re-training the deep neural network from scratch for every single prediction."
    ],
    correctIndex: 0,
    hint: "Shapley values originate from Nobel laureate Lloyd Shapley's game theory: allocating fair payouts based on marginal contributions of players!",
    explanation: "LIME creates a local linear surrogate by sampling perturbations around the target instance, which is heuristic and can vary across random seeds. SHAP computes exact or sampling-based Shapley values that uniquely satisfy the four axiomatic fairness properties of game theory: Efficiency, Symmetry, Dummy player, and Additivity."
  }
];
