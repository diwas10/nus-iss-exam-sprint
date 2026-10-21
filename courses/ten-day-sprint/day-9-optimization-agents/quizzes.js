// Day 9 Slide Mastery Quizzes: 10 High-Yield NUS ISS Exam Questions
// Focus: Genetic Algorithms (WS1GA.xlsx), TSP Permutations, Multimodal Sensor Fusion (RVM), Cognitive Architectures (ACT-R / SOAR) & ReAct Agents

window.DAY9_OPTIMIZATION_AGENTS_QUIZZES = [
  {
    id: "d9-q1",
    module: "Reasoning Systems — Genetic Algorithms Selection",
    slideRef: "RS Day 4 Slide 14-22 (WS1GA.xlsx)",
    question: "In Dr. Zhu Fangming's WS1GA.xlsx benchmark, a population has 4 chromosomes with fitness values $f_1 = 169, f_2 = 576, f_3 = 64, f_4 = 361$ (Total fitness $\\sum f = 1170$). What is the exact Roulette-Wheel selection probability $p_2$ and cumulative probability $C_2$ for chromosome #2?",
    options: [
      "$p_2 = \\frac{576}{1170} \\approx 49.23\\%$, and cumulative probability $C_2 = p_1 + p_2 = 0.1444 + 0.4923 = 0.6367$ (or $63.68\\%$).",
      "$p_2 = 25.0\\%$, and $C_2 = 50.0\\%$ (uniform selection).",
      "$p_2 = \\frac{576}{4} = 144.0$, and $C_2 = 1.0000$.",
      "$p_2 = \\sqrt{576} / 31 = 77.4\\%$, and $C_2 = 0.8800$."
    ],
    correctIndex: 0,
    hint: "Recall the Roulette Wheel probability formula: $p_i = \\frac{f_i}{\\sum_{j=1}^N f_j}$, and cumulative probability $C_i = \\sum_{k=1}^i p_k$.",
    explanation: "Under fitness-proportionate (roulette wheel) selection: $p_2 = 576 / 1170 = 0.492307... \\approx 49.23\\%$. The cumulative threshold is $C_1 = 169/1170 \\approx 0.1444$, so $C_2 = C_1 + p_2 = 0.1444 + 0.4923 = 0.6367$."
  },
  {
    id: "d9-q2",
    module: "Reasoning Systems — Genetic Algorithm Selection Pressure",
    slideRef: "RS Day 4 Slide 25-28",
    question: "In early generations of a Genetic Algorithm, a single 'super-individual' has 10 times higher fitness than the rest of the population. When using standard Roulette-Wheel selection, what dangerous failure mode occurs, and which selection mechanism prevents it?",
    options: [
      "Premature Convergence occurs because the super-individual rapidly copies itself into almost all offspring, eliminating population diversity before other promising regions are explored; Tournament Selection or Rank Selection prevents this by bounding the selection pressure.",
      "Deadlock occurs because probabilities must sum to 0.",
      "Vanishing gradients occur because chromosomes cannot be differentiated.",
      "Mutation rates automatically drop to 0%."
    ],
    correctIndex: 0,
    hint: "If one individual has $90\\%$ of the wheel, nearly all parents in the next generation will be identical clones. How can we decouple selection probability from extreme raw fitness values?",
    explanation: "Roulette-wheel selection is vulnerable to premature convergence when raw fitness values vary by orders of magnitude. Rank Selection (sorting individuals and assigning probabilities based on rank 1..N) and Tournament Selection (picking $k$ random candidates and taking the winner) enforce constant selection pressure regardless of raw fitness scale."
  },
  {
    id: "d9-q3",
    module: "Reasoning Systems — Permutation Crossover for TSP",
    slideRef: "RS Day 4 Slide 31-36",
    question: "When applying a Genetic Algorithm to the Traveling Salesperson Problem (TSP) where each chromosome is an ordered list of city IDs $[1, 2, 3, 4, 5]$, why does standard single-point or two-point binary crossover fail, and what crossover operator must be used instead?",
    options: [
      "Standard crossover creates invalid tours containing duplicate cities and omitted cities; Order Crossover (OX) or Partially Mapped Crossover (PMX) must be used to preserve a valid 1-to-1 permutation.",
      "Standard crossover requires all city coordinates to be integers.",
      "Binary crossover takes exponential time $O(2^N)$ to run.",
      "Standard crossover inverts the direction of the tour, doubling the distance."
    ],
    correctIndex: 0,
    hint: "If Parent 1 is [1, 2, 3, 4, 5] and Parent 2 is [5, 4, 3, 2, 1], cutting at position 2 produces [1, 2, 3, 2, 1] — city 2 is visited twice and cities 4 & 5 are never visited!",
    explanation: "Permutation problems like TSP require each gene to appear exactly once. Standard slicing duplicates genes from one parent and drops genes from the other. Order Crossover (OX) copies a contiguous sub-segment from Parent 1, then fills the remaining slots using the relative order of genes from Parent 2 without duplication."
  },
  {
    id: "d9-q4",
    module: "Reasoning Systems — GA Hyperparameters & Operators",
    slideRef: "RS Day 4 Slide 38-42",
    question: "In an evolutionary optimization system, what are the primary complementary roles of Crossover ($p_c \\approx 0.7-0.9$) and Mutation ($p_m \\approx 0.01-0.05$), and why is Elitism commonly enabled?",
    options: [
      "Crossover performs exploitation by recombining high-performing sub-solutions (building blocks); Mutation performs exploration by injecting new random genetic diversity to escape local optima; Elitism ensures the best-ever individual is never lost due to random crossover/mutation disruption.",
      "Crossover deletes weak chromosomes, while Mutation adds new memory.",
      "Crossover is applied only to neural networks, while Mutation is applied only to rule bases.",
      "Mutation does exploitation, while Crossover guarantees a global optimum in 1 step."
    ],
    correctIndex: 0,
    hint: "Think about Holland's Schema Theorem: Crossover splices good schemas together; mutation flips random bits so the search does not get trapped in a local basin.",
    explanation: "Crossover combines existing partial solutions (building blocks) to exploit known good regions. Mutation makes small, random disruptions to maintain diversity and explore uncharted areas of the search space. Elitism copies the top $K$ individuals directly into the next generation without modification, preventing accidental regression."
  },
  {
    id: "d9-q5",
    module: "Intelligent Sensing Systems — Sensor Fusion Architectures",
    slideRef: "ISSM Day 4 Slide 10-18",
    question: "In multi-sensor systems, what is the fundamental difference between Early Fusion (Feature-Level) and Late Fusion (Decision-Level), and when is Late Fusion strongly preferred in industrial deployments?",
    options: [
      "Early Fusion concatenates raw or normalized sensor features into a single unified vector before classification; Late Fusion trains separate models on each sensor modality and combines their outputs via voting or weighting. Late Fusion is preferred when sensors have asynchronous sampling rates, disparate failure modes, or when modular sensor upgrades are required.",
      "Early fusion runs in the morning, while late fusion runs at night.",
      "Early fusion requires deep learning, while late fusion only uses if-then rules.",
      "Late fusion cannot handle missing data, whereas early fusion is immune to noise."
    ],
    correctIndex: 0,
    hint: "Consider what happens if one sensor modality (e.g. thermal camera) disconnects or samples at 5 Hz while LiDAR samples at 50 Hz. In early fusion, the entire input vector breaks!",
    explanation: "Early fusion combines feature representations early, allowing the model to learn complex cross-modal correlations, but it is fragile to missing sensor feeds and requires synchronous alignment. Late fusion processes each modality independently and fuses decisions/probabilities (e.g., via Bayesian combination or weighted voting), offering high fault-tolerance and modularity."
  },
  {
    id: "d9-q6",
    module: "Intelligent Sensing Systems — RVM Multimodal Anomaly Detection",
    slideRef: "ISSM Day 4 Slide 22-29 (Reverse Vending Machine Case Study)",
    question: "An automated Reverse Vending Machine (RVM) inspects an inserted item: the optical scanner reads a valid barcode for a 500ml PET bottle ($22\\text{g}$ expected), but the load cell measures $168\\text{g}$ and the inductive proximity sensor triggers high. What is the physical diagnosis and system response?",
    options: [
      "Fraud attempt: the user has inserted a plastic bottle weighted with lead sinkers/scrap metal to fraudulently game a weight-based refund; the RVM must reject and eject the item, refusing credit.",
      "Normal variation: the bottle simply contains leftover tap water.",
      "Sensor malfunction: the inductive sensor should be recalibrated to zero.",
      "Accept and dispense full refund because the optical barcode is 100% valid."
    ],
    correctIndex: 0,
    hint: "Does plastic trigger an inductive metal sensor? No. Does water trigger an inductive sensor? No. Only metallic conductors (like lead or iron) trigger inductive coils!",
    explanation: "A valid barcode only confirms the label identity, not the physical payload. A load cell reading $168\\text{g}$ (vs $22\\text{g}$) together with an active inductive metal sensor detects a classic fraud vector: weighting plastic bottles with scrap metal. Sensor fusion catches the anomaly that a barcode scanner alone would miss."
  },
  {
    id: "d9-q7",
    module: "Intelligent Sensing Systems — Acoustic Physical Sensing",
    slideRef: "ISSM Day 4 Slide 32-37",
    question: "In the RVM multi-sensor suite, why is an acoustic transducer tap test (piezo impact ping) included alongside optical shape and color vision?",
    options: [
      "Because acoustic resonance frequency is an intrinsic material property that reliably differentiates aluminum cans ($\\approx 1.5\\text{kHz}$ ringing), glass bottles ($>2.5\\text{kHz}$ sharp ping), and PET plastic ($\\approx 800\\text{Hz}$ dull dampening), even if labels are torn, covered in dirt, or spray-painted.",
      "Because the acoustic sensor plays an audio greeting to customer.",
      "To measure the volume of liquid by ultrasonic echo.",
      "Acoustic sensors are only used to check if the conveyor belt motor is humming."
    ],
    correctIndex: 0,
    hint: "Elastic modulus and density govern acoustic resonance: $f \\propto \\sqrt{E / \\rho}$. Different materials vibrate at radically different modal frequencies.",
    explanation: "Optical cameras can be blinded by opaque coatings, mud, or missing labels. Striking the container generates structural acoustic vibrations whose resonant frequency spectrum directly reveals material stiffness and density, providing foolproof physical material identification."
  },
  {
    id: "d9-q8",
    module: "Cognitive Systems — ACT-R & SOAR Memory Architecture",
    slideRef: "CS Day 3 Slide 15-24",
    question: "In cognitive architectures like ACT-R and SOAR, what is the fundamental functional distinction between Declarative Memory and Procedural Memory?",
    options: [
      "Declarative Memory stores explicit factual knowledge ('knowing that'), partitioned into Episodic (autobiographical experiences with temporal tags) and Semantic memory (general concepts/facts); Procedural Memory stores operational skills ('knowing how') represented as IF-THEN production rules executed by pattern matching.",
      "Declarative memory is volatile RAM, while Procedural memory is hard drive storage.",
      "Declarative memory is only for language translation; Procedural memory is for computer graphics.",
      "Declarative memory executes in parallel, while Procedural memory has no working memory."
    ],
    correctIndex: 0,
    hint: "Remember the philosophical distinction: 'Knowing THAT Singapore is an island' (declarative) vs 'Knowing HOW to ride a bicycle' (procedural).",
    explanation: "ACT-R models human cognition: Declarative memory holds chunks of facts, associations, and experiences that can be retrieved into working memory buffers. Procedural memory contains production rules (`IF goal is X and buffer contains Y THEN perform Z`) that drive cognitive actions and state transitions."
  },
  {
    id: "d9-q9",
    module: "Reasoning Systems — Production Rule Conflict Resolution",
    slideRef: "RS Day 3 Slide 20-25 & CS Day 3 Slide 28",
    question: "In a production rule system, multiple rules often match the current Working Memory simultaneously (forming the 'conflict set'). Which combination of conflict resolution strategies prevents infinite loops and ensures the most specific knowledge takes precedence?",
    options: [
      "Refraction (a rule instance cannot fire more than once on the exact same data) prevents infinite cycling, while Specificity (rules with more conditions/preconditions override general rules) guarantees the most tailored expert knowledge executes.",
      "Random selection among all matching rules.",
      "Executing all matching rules at the same instant in parallel.",
      "Deleting the working memory buffer whenever two rules fire."
    ],
    correctIndex: 0,
    hint: "What happens if a rule fires on fact A, doesn't delete fact A, and re-triggers on the next cycle? An infinite loop! How do expert systems prefer 'Rule 5: Acute Appendicitis' over 'Rule 1: Abdominal Pain'?",
    explanation: "Classic conflict resolution strategies include: 1) Refraction: ensures a rule does not re-fire indefinitely on the same matched tokens; 2) Specificity: rules with more specific tests (subsuming others) are prioritized; 3) Recency: facts activated most recently in working memory take priority."
  },
  {
    id: "d9-q10",
    module: "Cognitive Systems — Agentic ReAct Loops",
    slideRef: "CS Day 3 Slide 34-40 (Reasoning + Acting in LLMs)",
    question: "Why does the ReAct (Reasoning + Acting) cognitive agent loop outperform pure 'Chain-of-Thought' (reasoning only) and pure 'Act-Only' (tool calls without explicit thought steps) when solving complex multi-hop information retrieval tasks?",
    options: [
      "The explicit 'Thought' step allows the agent to decompose the sub-goal, identify missing knowledge, and formulate targeted tool parameters; the 'Observation' step injects external ground truth into the context window, directly breaking hallucination loops and allowing dynamic plan correction.",
      "Because ReAct fine-tunes the underlying LLM weights on every user query.",
      "Because ReAct converts English text into assembly language instructions.",
      "Because ReAct eliminates the need for any external APIs or search engines."
    ],
    correctIndex: 0,
    hint: "Look at the cycle: Thought (deliberation) -> Action (tool call) -> Observation (external truth). What happens when an LLM tries to call tools without thinking, or tries to think without looking up real data?",
    explanation: "ReAct combines verbal reasoning with interactive decision making. Pure Chain-of-Thought suffers from factual hallucination because it cannot query external environments. Pure Act-Only suffers from lack of strategic planning and bad tool arguments. ReAct synergizes reasoning to formulate actions, and environmental feedback (observations) to update reasoning."
  }
];
