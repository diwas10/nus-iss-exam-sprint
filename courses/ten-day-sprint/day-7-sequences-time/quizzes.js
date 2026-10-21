// Day 7 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions
// Focus: RNNs, LSTM Gating, Autoencoder Anomaly Detection, Word2Vec & Vector Semantics

window.DAY7_SEQUENCES_TIME_QUIZZES = [
  {
    id: "d7-q1",
    module: "Pattern Recognition Systems — Recurrent Neural Networks",
    slideRef: "PRMLS Day 3b Slide 6-12",
    question: "In Backpropagation Through Time (BPTT) for a Vanilla RNN, why does the gradient of the loss at step $T$ with respect to hidden state $h_1$ vanish when $T$ is large?",
    options: [
      "The gradient contains a product of $T - 1$ Jacobian matrices $\\prod_{t=2}^T \\frac{\\partial h_t}{\\partial h_{t-1}}$. Because each Jacobian involves $W_{hh}^T \\cdot \\text{diag}(\\sigma')$, if the spectral radius of $W_{hh} < 1$, the gradient shrinks exponentially to zero.",
      "Because Vanilla RNNs cannot process float32 numbers across time.",
      "Because the learning rate $\\eta$ is divided by $T$ at every time step.",
      "Because sequence length is limited to 4 tokens by the operating system."
    ],
    correctIndex: 0,
    hint: "Think about multiplying a number like $0.8$ by itself 50 times: $0.8^{50} \\approx 0.000014$!",
    explanation: "By the chain rule across time, $\\frac{\\partial h_T}{\\partial h_1} = \\prod_{t=2}^T \\frac{\\partial h_t}{\\partial h_{t-1}}$. When repeated matrix multiplications have eigenvalues smaller than 1 (and activation derivatives $\\le 1$), the gradient decays exponentially, preventing the model from learning long-range temporal connections."
  },
  {
    id: "d7-q2",
    module: "Pattern Recognition Systems — LSTM Gating",
    slideRef: "PRMLS Day 3b Slide 15-22",
    question: "How does the Long Short-Term Memory (LSTM) network mathematically eliminate the vanishing gradient problem on its internal memory cell state $C_t$?",
    options: [
      "By replacing matrix multiplications on the cell state with an ADDITIVE update: $C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t$. When the Forget Gate $f_t = 1$, the gradient $\\frac{\\partial C_t}{\\partial C_{t-1}} = 1$, creating an unimpeded gradient highway across time.",
      "By removing all activation functions from the network.",
      "By resetting the hidden state $h_t$ to zero at every punctuation mark.",
      "By replacing backpropagation with genetic algorithms."
    ],
    correctIndex: 0,
    hint: "Multiplicative recurrence causes exponential decay; additive recurrence allows gradients to flow backwards unchanged!",
    explanation: "In an LSTM, $\\frac{\\partial C_t}{\\partial C_{t-1}} = f_t$. If the network learns to keep $f_t \\approx 1$ for a key feature (e.g. subject noun gender), the error signal can propagate back over hundreds of time steps with zero exponential decay."
  },
  {
    id: "d7-q3",
    module: "Pattern Recognition Systems — LSTM Architecture",
    slideRef: "PRMLS Day 3b Slide 18 & Worksheet",
    question: "Match the 4 LSTM gates with their precise operational functions:",
    options: [
      "Forget Gate ($f_t$): discards irrelevant past memory; Input Gate ($i_t$): regulates what new candidate info writes to cell state; Candidate ($\\tilde{C}_t$): generates new content; Output Gate ($o_t$): controls what fraction of cell state is emitted as hidden output $h_t$.",
      "Forget Gate: stops training; Input Gate: reads keyboard input; Candidate: predicts class labels; Output Gate: prints to screen.",
      "All 4 gates perform identical scalar additions.",
      "Forget Gate deletes the weights; Output Gate computes cross-entropy."
    ],
    correctIndex: 0,
    hint: "Remember the 4 equations: $f_t = \\sigma(\\dots)$, $i_t = \\sigma(\\dots)$, $\\tilde{C}_t = \\tanh(\\dots)$, $o_t = \\sigma(\\dots)$ and $h_t = o_t \\odot \\tanh(C_t)$.",
    explanation: "The Forget gate resets outdated state; the Input gate admits new facts scaled by candidate $\\tilde{C}_t$; the Cell State acts as long-term memory; and the Output gate filters the cell state into working memory $h_t$."
  },
  {
    id: "d7-q4",
    module: "Pattern Recognition Systems — GRU vs LSTM",
    slideRef: "PRMLS Day 3b Slide 25-28",
    question: "What is the primary architectural simplification introduced in the Gated Recurrent Unit (GRU) compared to a standard LSTM?",
    options: [
      "GRU merges the Cell State and Hidden State into a single vector $h_t$, and couples the Forget and Input gates into a single Update Gate $z_t$ (updating via $(1-z_t)h_{t-1} + z_t \\tilde{h}_t$), reducing parameter count by $25\\%$.",
      "GRU uses 8 gates instead of 4 gates.",
      "GRU cannot be used for language modeling.",
      "GRU removes all recurrence and operates as a feedforward network."
    ],
    correctIndex: 0,
    hint: "GRU has only 2 gates: Reset Gate $r_t$ and Update Gate $z_t$. No separate cell state $C_t$!",
    explanation: "GRU has 3 sets of weights per unit instead of 4 (Reset gate $r_t$, Update gate $z_t$, Candidate $\\tilde{h}_t$). It eliminates the separate cell state $C_t$ and directly blends $h_{t-1}$ and $\\tilde{h}_t$, making it faster to train with fewer parameters."
  },
  {
    id: "d7-q5",
    module: "Pattern Recognition Systems — RNN Parameter Counting",
    slideRef: "PRMLS Day 3b Slide 14 & NUS ISS Past Exam Trap",
    question: "A standard LSTM layer has input feature dimension $d_{\\text{in}} = 128$ and hidden dimension $d_h = 64$ with bias enabled. Exactly how many trainable parameters are in this LSTM layer?",
    options: [
      "49,408 parameters: $4 \\times [(d_{\\text{in}} + d_h + 1) \\times d_h] = 4 \\times [(128 + 64 + 1) \\times 64] = 4 \\times [193 \\times 64] = 49,408$",
      "12,352 parameters: $(128 + 64 + 1) \\times 64 = 12,352$ (Vanilla RNN count, forgetting the 4 gates)",
      "8,192 parameters: $128 \\times 64$",
      "24,704 parameters: $2 \\times 12,352$"
    ],
    correctIndex: 0,
    hint: "Remember: an LSTM has FOUR internal neural networks (Forget, Input, Candidate, Output). Multiply the Vanilla RNN parameter count by 4!",
    explanation: "Each of the 4 gates ($f, i, \\tilde{C}, o$) has its own weight matrices $W_{xi} \\in \\mathbb{R}^{d_h \\times d_{\\text{in}}}$, $W_{hi} \\in \\mathbb{R}^{d_h \\times d_h}$, and bias $b \\in \\mathbb{R}^{d_h}$. Per gate: $(128 + 64 + 1) \\times 64 = 193 \\times 64 = 12,352$. Across 4 gates: $12,352 \\times 4 = 49,408$ parameters."
  },
  {
    id: "d7-q6",
    module: "Intelligent Sensing Systems — Autoencoder Anomaly",
    slideRef: "ISSM Day 3 Slide 18-28 & Smart Fish Tank",
    question: "How does an Autoencoder detect sensory anomalies (e.g. equipment failure or hypoxia in a Smart Fish Tank) in an unsupervised manner without ever seeing labeled anomalies during training?",
    options: [
      "It is trained exclusively on normal sensor data to reconstruct clean inputs. When an abnormal pattern occurs, the bottleneck cannot represent the novel dynamics, causing a massive spike in Reconstruction Error $\\|x - \\hat{x}\\|^2 > \\tau$.",
      "It runs a binary classification SVM on the latent layer.",
      "It memorizes all normal inputs in a hash table.",
      "It uses genetic algorithms to mutate anomalous sensor readings."
    ],
    correctIndex: 0,
    hint: "If you only teach someone to draw horses, what happens when you ask them to draw an elephant? The reconstruction will look terrible!",
    explanation: "Autoencoders learn a compressed low-dimensional manifold of normal operating behavior. Out-of-distribution patterns or sensor faults cannot be accurately reconstructed through the bottleneck, yielding elevated reconstruction residuals that easily trip threshold $\\tau$."
  },
  {
    id: "d7-q7",
    module: "Intelligent Sensing Systems — Sensor Anomaly Triage",
    slideRef: "ISSM Day 3 Slide 30-34",
    question: "In the Smart Fish Tank case study, how should an automated triage system distinguish between Event A (a sudden single-step sensor glitch) and Event B (genuine biological hypoxia)?",
    options: [
      "Temporal persistence: Event A is an isolated single-step impulse ($t=26$) that immediately returns to baseline; Event B exhibits persistent, multi-step consecutive violations over time, demanding physical actuator intervention.",
      "Event A has zero reconstruction error.",
      "Event B only occurs during the night.",
      "Sensor glitches are always negative numbers."
    ],
    correctIndex: 0,
    hint: "Never sound a hospital or industrial plant evacuation siren on a 1-millisecond hardware glitch! Require consecutive anomalous frames.",
    explanation: "Industrial triage requires temporal debounce/persistence filtering. A transient spike lasting 1 sample is flagged as sensor noise (reboot/filter). Sustained elevated reconstruction error over $K$ consecutive steps indicates systemic physical degradation requiring emergency actuators."
  },
  {
    id: "d7-q8",
    module: "Cognitive Systems — Word Embeddings",
    slideRef: "CS Day 1 AM Slide 18-24",
    question: "What is the key difference in training objective between Word2Vec Continuous Bag-of-Words (CBOW) and Skip-Gram?",
    options: [
      "CBOW predicts the target center word given its surrounding context words; Skip-Gram predicts the surrounding context words given the target center word.",
      "CBOW uses transformers, while Skip-Gram uses decision trees.",
      "CBOW works only on English, while Skip-Gram works on any language.",
      "CBOW is supervised, while Skip-Gram is unsupervised."
    ],
    correctIndex: 0,
    hint: "CBOW: Context $\\rightarrow$ Target (averages context, faster). Skip-Gram: Target $\\rightarrow$ Context (better for rare words).",
    explanation: "In CBOW, the context word vectors are summed or averaged to predict the central target word. In Skip-Gram, the central word vector is used to predict distributed probability distributions across multiple context positions."
  },
  {
    id: "d7-q9",
    module: "Cognitive Systems — Negative Sampling",
    slideRef: "CS Day 1 AM Slide 25-28",
    question: "Why is Negative Sampling necessary when training Word2Vec on large vocabularies ($|V| > 100,000$)?",
    options: [
      "Computing the exact Softmax denominator $\\sum_{w \\in V} \\exp(v_w^T v_c)$ requires summing over all 100,000 words at every single word step, which is computationally intractable; Negative Sampling replaces Softmax with binary logistic regressions on 1 true pair and $k$ sampled noise words.",
      "Negative sampling removes all swear words from the dictionary.",
      "Because neural networks cannot process positive probabilities.",
      "Negative sampling is used to invert the covariance matrix."
    ],
    correctIndex: 0,
    hint: "Evaluating 100,000 exponentiations for every gradient update is crippling. Evaluating $1 + 5 = 6$ logistic terms is lightning-fast!",
    explanation: "Mikolov et al. (2013) replaced the full softmax denominator with Noise Contrastive Estimation (Negative Sampling). The objective maximizes $P(\\text{target}|\\text{context})$ while minimizing probabilities for $k$ random 'negative' words from a unigram noise distribution $U(w)^{3/4}$."
  },
  {
    id: "d7-q10",
    module: "Cognitive Systems — Vector Semantics",
    slideRef: "CS Day 1 AM Slide 22 & Workshop",
    question: "The famous semantic vector relationship $\\vec{v}_{\\text{king}} - \\vec{v}_{\\text{man}} + \\vec{v}_{\\text{woman}} \\approx \\vec{v}_{\\text{queen}}$ demonstrates what fundamental property of dense continuous embeddings?",
    options: [
      "Linear compositionality: semantic relationships (such as gender or capital cities) are encoded as consistent spatial displacement vectors in the continuous geometric latent space.",
      "That words are converted to binary ASCII codes.",
      "That language models cannot distinguish men from women.",
      "That vector lengths must always equal 1.0."
    ],
    correctIndex: 0,
    hint: "The displacement vector $\\vec{v}_{\\text{king}} - \\vec{v}_{\\text{man}}$ isolates the abstract semantic concept of 'royalty'!",
    explanation: "Dense word embeddings learn linear substructures where relational analogies correspond to vector addition and subtraction. The direction $\\vec{v}_{\\text{man}} \\to \\vec{v}_{\\text{king}}$ is virtually identical to $\\vec{v}_{\\text{woman}} \\to \\vec{v}_{\\text{queen}}$, confirming that abstract cognitive concepts are geometrically preserved."
  }
];
