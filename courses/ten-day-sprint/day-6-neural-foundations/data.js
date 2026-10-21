// Day 6 Reference Data: Neural Foundations, Backprop Spreadsheet, RBF/SOM & CNNs

window.DAY6_NEURAL_FOUNDATIONS_DATA = {
  // 1. Exact Benchmark Data from Dr. Zhu Fangming's ANN-BP-v006.xlsx
  // Architecture: 2 Inputs -> 2 Hidden Neurons -> 2 Output Neurons
  backpropBenchmark: {
    inputs: [0.05, 0.10],
    targets: [0.01, 0.99],
    learningRate: 0.5,
    momentum: 0.0,
    // Layer 1 (Input to Hidden)
    w_ih: [
      [0.15, 0.20], // to h1 from [x1, x2]
      [0.25, 0.30]  // to h2 from [x1, x2]
    ],
    b_h: [0.35, 0.35],
    // Layer 2 (Hidden to Output)
    w_ho: [
      [0.40, 0.45], // to o1 from [h1, h2]
      [0.50, 0.55]  // to o2 from [h1, h2]
    ],
    b_o: [0.60, 0.60],

    // Theoretical Step-by-Step Target Checkpoints:
    // net_h1 = 0.05*0.15 + 0.10*0.20 + 0.35 = 0.3775 -> out_h1 = 1/(1+exp(-0.3775)) = 0.593269992
    // net_h2 = 0.05*0.25 + 0.10*0.30 + 0.35 = 0.3925 -> out_h2 = 1/(1+exp(-0.3925)) = 0.596884378
    // net_o1 = 0.59327*0.40 + 0.59688*0.45 + 0.60 = 1.10590597 -> out_o1 = 0.75136507
    // net_o2 = 0.59327*0.50 + 0.59688*0.55 + 0.60 = 1.2249214 -> out_o2 = 0.772928465
    // E_total = 0.5*(0.01 - 0.751365)^2 + 0.5*(0.99 - 0.772928)^2 = 0.274811083 + 0.023560026 = 0.298371109
    expectedForward: {
      net_h1: 0.3775,
      out_h1: 0.593269992,
      net_h2: 0.3925,
      out_h2: 0.596884378,
      net_o1: 1.10590597,
      out_o1: 0.75136507,
      net_o2: 1.2249214,
      out_o2: 0.772928465,
      totalLoss: 0.298371109
    }
  },

  // 2. CNN Architecture Presets for Dimension & Parameter Calculator (PRMLS Day 2b)
  cnnPresets: [
    {
      name: "LeNet-5 Conv1",
      inputShape: { h: 32, w: 32, c: 1 },
      kernelSize: 5,
      numFilters: 6,
      stride: 1,
      padding: 0,
      description: "Classic digit recognizer first layer"
    },
    {
      name: "AlexNet Conv1",
      inputShape: { h: 224, w: 224, c: 3 },
      kernelSize: 11,
      numFilters: 96,
      stride: 4,
      padding: 0,
      description: "ImageNet breakthrough aggressive stride layer"
    },
    {
      name: "CIFAR-10 VGG Block 1",
      inputShape: { h: 32, w: 32, c: 3 },
      kernelSize: 3,
      numFilters: 32,
      stride: 1,
      padding: 1,
      description: "Standard 3x3 same-padding convolutional block"
    }
  ],

  // 3. XAI (Explainable AI) Feature Attribution Sample (MR Day 4)
  xaiLoanExample: {
    applicant: {
      "Income ($k)": 75,
      "Credit Score": 620,
      "Debt Ratio": 0.42,
      "Employment Years": 4
    },
    predictionScore: 0.62, // 62% approved
    shapValues: {
      "Income ($k)": +0.18,        // Increases approval
      "Credit Score": -0.12,       // Lowers approval
      "Debt Ratio": -0.15,         // Lowers approval
      "Employment Years": +0.07    // Increases approval
    },
    baseValue: 0.64 // E[f(x)] global average approval rate
  }
};
