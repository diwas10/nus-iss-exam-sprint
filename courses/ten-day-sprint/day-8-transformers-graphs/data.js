// Day 8 Reference Data: ResNet, Transformers Attention, TransE KGE & GraphRAG

window.DAY8_TRANSFORMERS_GRAPHS_DATA = {
  // 1. Transformer Self-Attention Benchmark (PRMLS Day 4b)
  attentionSentence: {
    tokens: ["The", "animal", "didn't", "cross", "the", "street", "because", "it", "was", "too", "tired"],
    // Query token: "it" (Index 7)
    // Softmax attention distribution across all tokens when conditioned on "it"
    attentionWeights: [0.02, 0.58, 0.03, 0.04, 0.01, 0.14, 0.02, 0.08, 0.02, 0.01, 0.05],
    // If temperature scaling sqrt(d_k) is removed (unscaled dot product):
    unscaledAttentionWeights: [0.001, 0.985, 0.001, 0.002, 0.000, 0.008, 0.001, 0.001, 0.000, 0.000, 0.001]
  },

  // 2. MobileNet Depthwise Separable vs Standard Convolution Benchmark
  mobilenetBenchmark: {
    inputShape: { h: 112, w: 112, c_in: 64 },
    kernelSize: 3,
    numFilters: 128,
    standard: {
      params: (3 * 3 * 64 + 1) * 128, // 73,856
      mflops: (112 * 112 * 128 * (3 * 3 * 64)) / 1e6 // ~92.48 MFLOPs
    },
    depthwiseSeparable: {
      params: (3 * 3 * 64 + 64) + (1 * 1 * 64 * 128 + 128), // 640 + 8,320 = 8,960 (8.2x fewer!)
      mflops: ((112 * 112 * 64 * 9) + (112 * 112 * 128 * 64)) / 1e6 // 7.22 + 10.27 = 17.50 MFLOPs (5.3x faster!)
    }
  },

  // 3. Knowledge Graph Triples & TransE 2D Vector Coordinates (MR Day 3)
  kgData: {
    entities: {
      "Aspirin": { x: -0.65, y: 0.40, type: "Drug" },
      "Headache": { x: -0.15, y: 0.40, type: "Symptom" },
      "Migraine": { x: 0.45, y: 0.40, type: "Disease" },
      "Metformin": { x: -0.65, y: -0.40, type: "Drug" },
      "Insulin_Resist": { x: -0.15, y: -0.40, type: "Symptom" },
      "Type2_Diabetes": { x: 0.45, y: -0.40, type: "Disease" }
    },
    relations: {
      "TREATS": { dx: 0.50, dy: 0.00 },
      "SYMPTOM_OF": { dx: 0.60, dy: 0.00 }
    },
    triples: [
      { head: "Aspirin", rel: "TREATS", tail: "Headache" },
      { head: "Headache", rel: "SYMPTOM_OF", tail: "Migraine" },
      { head: "Metformin", rel: "TREATS", tail: "Insulin_Resist" },
      { head: "Insulin_Resist", rel: "SYMPTOM_OF", tail: "Type2_Diabetes" }
    ]
  },

  // 4. GraphRAG Multi-Hop Case Study (RS Day 5)
  graphRAGQuery: {
    question: "What symptoms are associated with the disease treated by Metformin?",
    vectorRAGResult: {
      status: "Partial Miss (Low Recall)",
      explanation: "Vector search retrieved chunk 'Metformin is prescribed for Type 2 Diabetes' and chunk 'Insulin resistance is common in metabolic syndrome'. Missed the direct causal linkage between Metformin, Insulin Resistance, and Type 2 Diabetes because of chunk boundary separation.",
      latencyMs: 140
    },
    graphRAGResult: {
      status: "100% Precision & Multi-Hop Grounded",
      cypher: "MATCH (d:Drug {name: 'Metformin'})-[:TREATS]->(s:Symptom)-[:SYMPTOM_OF]->(dis:Disease) RETURN s.name, dis.name",
      explanation: "Graph traversal directly traversed the deterministic path: Metformin ➔ TREATS ➔ Insulin Resistance ➔ SYMPTOM_OF ➔ Type 2 Diabetes with zero hallucination.",
      latencyMs: 18
    }
  }
};
