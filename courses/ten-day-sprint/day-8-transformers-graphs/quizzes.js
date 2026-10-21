// Day 8 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions
// Focus: ResNet, MobileNet, Transformers Self-Attention, TransE KGE, Link Prediction & GraphRAG

window.DAY8_TRANSFORMERS_GRAPHS_QUIZZES = [
  {
    id: "d8-q1",
    module: "Pattern Recognition Systems — ResNet Architecture",
    slideRef: "PRMLS Day 4a Slide 12-18",
    question: "Why does the identity skip connection $H(x) = F(x) + x$ in ResNet completely resolve the degradation problem when training extremely deep neural networks (e.g. 152 layers)?",
    options: [
      "Because the gradient with respect to input $\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H}\\left(\\frac{\\partial F}{\\partial x} + 1\\right)$ contains an additive $+1$ term, which guarantees that gradients always flow directly back to the earliest layers even if the residual weights $\\frac{\\partial F}{\\partial x}$ vanish to zero.",
      "Because ResNet skips all matrix multiplications during training.",
      "Because ResNet deletes odd-numbered layers during backpropagation.",
      "Because the skip connection converts 2D convolutions into 1D convolutions."
    ],
    correctIndex: 0,
    hint: "Notice the expansion: $\\frac{\\partial L}{\\partial x} = \\frac{\\partial L}{\\partial H}\\frac{\\partial F}{\\partial x} + \\frac{\\partial L}{\\partial H}$. The second term is completely unaffected by depth!",
    explanation: "In deep feedforward networks, repeated multiplication of weight gradients $< 1$ leads to exponential decay. In ResNet, the $+1$ in the chain rule ensures that the output loss gradient $\\frac{\\partial L}{\\partial H}$ is directly added to earlier layers without passing through any vanishing weight matrices."
  },
  {
    id: "d8-q2",
    module: "Pattern Recognition Systems — MobileNet Separable Convolutions",
    slideRef: "PRMLS Day 4a Slide 22-26",
    question: "How does MobileNet's Depthwise Separable Convolution achieve an $8\\times$ to $9\\times$ reduction in computational cost compared to standard $3 \\times 3$ convolution?",
    options: [
      "By factorizing standard convolution into a Depthwise Convolution (1 spatial $3 \\times 3$ filter per input channel) followed by a Pointwise Convolution ($1 \\times 1$ linear projection across channels), reducing FLOPs by $\\frac{1}{K} + \\frac{1}{F^2} \\approx \\frac{1}{9}$.",
      "By quantizing all float32 weights into 1-bit binary numbers.",
      "By skipping every second pixel in the input image.",
      "By replacing CNN layers with decision trees."
    ],
    correctIndex: 0,
    hint: "Standard cost is $H \\cdot W \\cdot C_{\\text{in}} \\cdot K \\cdot F^2$. Separable cost is $H \\cdot W \\cdot C_{\\text{in}} \\cdot F^2 + H \\cdot W \\cdot C_{\\text{in}} \\cdot K \\cdot 1$. Divide them!",
    explanation: "Standard convolution performs spatial filtering and channel combining in a single massive step. MobileNet decouples them: $\\frac{\\text{Cost}_{\\text{sep}}}{\\text{Cost}_{\\text{std}}} = \\frac{F^2 \\cdot C_{\\text{in}} + C_{\\text{in}} \\cdot K}{F^2 \\cdot C_{\\text{in}} \\cdot K} = \\frac{1}{K} + \\frac{1}{F^2}$. For $F=3$ and $K \\ge 64$, this reduces computation to $\\approx \\frac{1}{9} \\approx 11\\%$ of standard convolution."
  },
  {
    id: "d8-q3",
    module: "Pattern Recognition Systems — Transfer Learning",
    slideRef: "PRMLS Day 4a Slide 28-32",
    question: "You are building a computer vision model for a specialized medical dataset with only 300 X-ray images. You have a ResNet-50 backbone pre-trained on ImageNet (1.2M natural images). What is the optimal transfer learning strategy?",
    options: [
      "Freeze the entire ResNet convolutional backbone and train ONLY the final linear classification layer (to prevent overfitting on the tiny 300-image dataset).",
      "Train all 50 layers from scratch with random initial weights.",
      "Fine-tune all 50 layers with a massive learning rate.",
      "Discard ResNet and train a 1-layer Perceptron."
    ],
    correctIndex: 0,
    hint: "Small dataset + high-capacity 50-layer deep network = catastrophic overfitting if you train all layers! Freeze the feature extractor.",
    explanation: "When data is scarce (300 images), updating millions of backbone weights will immediately overfit to training noise. Freezing the pre-trained feature extractor preserves generic edge and texture detectors while learning only the top classifier weights."
  },
  {
    id: "d8-q4",
    module: "Pattern Recognition Systems — Transformer Attention",
    slideRef: "PRMLS Day 4b Slide 8-15",
    question: "In the Transformer Scaled Dot-Product Attention formula $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$, why is dividing by $\\sqrt{d_k}$ mathematically essential?",
    options: [
      "For large key dimensions $d_k$, the dot product $q^T k$ grows large in magnitude, which pushes the Softmax function into saturated regions with near-zero gradients; dividing by $\\sqrt{d_k}$ normalizes the variance back to 1.0.",
      "To ensure that the attention matrix has an inverse.",
      "Because PyTorch cannot compute matrix multiplication without square roots.",
      "To prevent negative numbers from entering the Value matrix."
    ],
    correctIndex: 0,
    hint: "If $q$ and $k$ are independent random variables with mean 0 and variance 1, what is the variance of their dot product $\\sum_{i=1}^{d_k} q_i k_i$?",
    explanation: "The variance of the sum of $d_k$ independent terms is $d_k$. For large dimensions (e.g. $d_k = 64$ or $128$), dot products reach $\\pm 20$, where Softmax outputs are either $1.0$ or $0.0$, yielding practically zero gradients ($\\sigma'(z) \\approx 0$). Scaling by $\\frac{1}{\\sqrt{d_k}}$ preserves healthy gradient flow."
  },
  {
    id: "d8-q5",
    module: "Pattern Recognition Systems — Multi-Head Attention",
    slideRef: "PRMLS Day 4b Slide 16-20",
    question: "What is the primary cognitive benefit of Multi-Head Attention over Single-Head Attention in Transformers?",
    options: [
      "It allows the model to jointly attend to information from different representation subspaces at different positions (e.g. one head tracks grammatical agreement, while another tracks semantic coreference).",
      "It speeds up inference by running on multiple physical CPUs.",
      "It eliminates the need for Positional Encoding.",
      "It allows processing images and audio at the exact same millisecond."
    ],
    correctIndex: 0,
    hint: "A single attention head can only produce one weighted average. Multiple heads allow attending to 'what happened', 'who did it', and 'where' simultaneously!",
    explanation: "Multi-head attention projects Queries, Keys, and Values $h$ times with different learned linear projections to dimension $d_k = d_{\\text{model}} / h$. Each head specializes in capturing different linguistic or visual relations (e.g. subject-verb dependency vs pronoun coreference)."
  },
  {
    id: "d8-q6",
    module: "Machine Reasoning — Knowledge Graph Embeddings",
    slideRef: "MR Day 3 Slide 10-16",
    question: "In Bordes et al. (2013) TransE, what is the geometric translation objective for a valid knowledge triple $(h, r, t)$?",
    options: [
      "The head entity vector plus the relation vector should be close to the tail entity vector: $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$, minimizing score $f_r(h, t) = \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\|_2$.",
      "The dot product of head and tail must equal the relation: $\\mathbf{h}^T \\mathbf{t} = \\mathbf{r}$.",
      "Head and tail are concatenated into a single scalar value.",
      "Relation vector is the cross product of head and tail."
    ],
    correctIndex: 0,
    hint: "Translational distance model: $\\mathbf{h} + \\mathbf{r} - \\mathbf{t} = \\mathbf{0}$.",
    explanation: "TransE models relations as translations in embedding space: if $(h, r, t)$ holds, $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$. It optimizes a margin-based ranking loss $\\max(0, \\gamma + f(h, r, t) - f(h', r, t'))$ against corrupted negative triples."
  },
  {
    id: "d8-q7",
    module: "Machine Reasoning — TransE Limitations",
    slideRef: "MR Day 3 Slide 18-22",
    question: "What is the mathematical limitation of TransE when modeling symmetric relations (e.g. 'is_married_to' or 'is_colleague_of')?",
    options: [
      "If $(h, r, t)$ and $(t, r, h)$ are both true, TransE requires $\\mathbf{h} + \\mathbf{r} = \\mathbf{t}$ and $\\mathbf{t} + \\mathbf{r} = \\mathbf{h}$, which mathematically forces the relation vector $\\mathbf{r} = \\mathbf{0}$ and $\\mathbf{h} = \\mathbf{t}$!",
      "TransE cannot compute distances for strings containing underscores.",
      "Symmetric relations cause infinite loops in gradient descent.",
      "TransE requires all entities to be positive integers."
    ],
    correctIndex: 0,
    hint: "Add the two equations together: $\\mathbf{h} + \\mathbf{t} + 2\\mathbf{r} = \\mathbf{h} + \\mathbf{t} \\implies 2\\mathbf{r} = 0$!",
    explanation: "TransE cannot represent symmetric relations because $\\mathbf{h} + \\mathbf{r} = \\mathbf{t}$ and $\\mathbf{t} + \\mathbf{r} = \\mathbf{h}$ implies $\\mathbf{r} = 0$, collapsing all connected entities to the same point. Models like DistMult and ComplEx solve this using bilinear and complex Hermitian products."
  },
  {
    id: "d8-q8",
    module: "Machine Reasoning — Link Prediction Metrics",
    slideRef: "MR Day 3 Slide 25-28",
    question: "In a link prediction evaluation for 3 test queries, the ground-truth tail entities are ranked at positions $1$, $2$, and $4$ among all candidate entities. What is the Mean Reciprocal Rank (MRR)?",
    options: [
      "$\\text{MRR} = \\frac{1}{3}\\left(\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{4}\\right) = \\frac{1}{3}(1.75) \\approx 0.5833$",
      "$\\text{MRR} = \\frac{1 + 2 + 4}{3} = 2.3333$ (This is Mean Rank MR, not MRR!)",
      "$\\text{MRR} = 0.3333$",
      "$\\text{MRR} = 1.0000$"
    ],
    correctIndex: 0,
    hint: "Mean Reciprocal Rank averages the INVERSES of the ranks: $\\text{MRR} = \\frac{1}{|Q|}\\sum \\frac{1}{\\text{rank}_i}$.",
    explanation: "Mean Rank (MR) is the raw average: $\\frac{1+2+4}{3} = 2.333$. Mean Reciprocal Rank (MRR) averages the reciprocals: $\\frac{1}{3}(1.0 + 0.5 + 0.25) = \\frac{1.75}{3} \\approx 0.5833$. Confusing MR with MRR is an infamous student calculation trap!"
  },
  {
    id: "d8-q9",
    module: "Reasoning Systems — Neo4j Property Graphs",
    slideRef: "RS Day 5 Slide 8-14",
    question: "Why do Property Graph databases like Neo4j drastically outperform relational SQL databases on deep multi-hop traversals (e.g. 5 degrees of separation)?",
    options: [
      "Property graphs use 'Index-Free Adjacency', where every node directly stores physical pointers to its neighboring nodes on disk, so $k$-hop traversal is $O(k)$ rather than exponential SQL Cartesian `JOIN` table scans.",
      "Property graphs store all data in RAM only and delete data upon reboot.",
      "Relational databases cannot store strings longer than 255 characters.",
      "Neo4j runs exclusively on quantum processors."
    ],
    correctIndex: 0,
    hint: "Index-free adjacency means traversal speed is independent of the total size of the database!",
    explanation: "In relational SQL, joining 5 tables requires massive index lookups and intermediate join tables ($O(N^k)$). In Neo4j, traversing an edge is a simple pointer dereference $O(1)$, making multi-hop graph traversal proportional only to the size of the subgraph visited."
  },
  {
    id: "d8-q10",
    module: "Reasoning Systems — GraphRAG vs Vector RAG",
    slideRef: "RS Day 5 Slide 22-28",
    question: "When answering the complex multi-hop clinical question: 'What symptoms are associated with the disease treated by Metformin?', why does traditional Vector RAG frequently fail while GraphRAG succeeds?",
    options: [
      "Vector RAG searches by semantic text chunk similarity; if the symptom and Metformin appear in separate document chunks, vector similarity fails to bridge the intermediate link ('Type 2 Diabetes'). GraphRAG deterministically walks the structured path: (Metformin)-[:TREATS]->(Diabetes)-[:HAS_SYMPTOM]->(Symptom).",
      "Vector RAG cannot handle English medical terminology.",
      "GraphRAG only works if the question is written in Latin.",
      "Vector RAG is 1000 times slower than GraphRAG."
    ],
    correctIndex: 0,
    hint: "Chunk boundaries break relational chains! Knowledge Graphs preserve explicit relational edges across documents.",
    explanation: "Semantic vector search is fundamentally unimodal and local: chunks describing Metformin's mechanism and chunks describing diabetic retinopathy may have low embedding cosine similarity. GraphRAG combines vector retrieval with explicit knowledge graph traversals to resolve multi-hop relational dependencies without hallucination."
  }
];
