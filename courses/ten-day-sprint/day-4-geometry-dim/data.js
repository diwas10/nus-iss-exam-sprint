// Day 4 Reference Data: Decision Trees, SVM, PCA vs LDA & Case-Based Reasoning

window.DAY4_GEOMETRY_DIM_DATA = {
  // Classic Quinlan Weather Dataset: Play Tennis? (PSUPR Day 2 Slide 11)
  weatherDataset: [
    { day: "D1", outlook: "Sunny", temp: "Hot", humidity: "High", wind: "Weak", play: "No" },
    { day: "D2", outlook: "Sunny", temp: "Hot", humidity: "High", wind: "Strong", play: "No" },
    { day: "D3", outlook: "Overcast", temp: "Hot", humidity: "High", wind: "Weak", play: "Yes" },
    { day: "D4", outlook: "Rain", temp: "Mild", humidity: "High", wind: "Weak", play: "Yes" },
    { day: "D5", outlook: "Rain", temp: "Cool", humidity: "Normal", wind: "Weak", play: "Yes" },
    { day: "D6", outlook: "Rain", temp: "Cool", humidity: "Normal", wind: "Strong", play: "No" },
    { day: "D7", outlook: "Overcast", temp: "Cool", humidity: "Normal", wind: "Strong", play: "Yes" },
    { day: "D8", outlook: "Sunny", temp: "Mild", humidity: "High", wind: "Weak", play: "No" },
    { day: "D9", outlook: "Sunny", temp: "Cool", humidity: "Normal", wind: "Weak", play: "Yes" },
    { day: "D10", outlook: "Rain", temp: "Mild", humidity: "Normal", wind: "Weak", play: "Yes" },
    { day: "D11", outlook: "Sunny", temp: "Mild", humidity: "Normal", wind: "Strong", play: "Yes" },
    { day: "D12", outlook: "Overcast", temp: "Mild", humidity: "High", wind: "Strong", play: "Yes" },
    { day: "D13", outlook: "Overcast", temp: "Hot", humidity: "Normal", wind: "Weak", play: "Yes" },
    { day: "D14", outlook: "Rain", temp: "Mild", humidity: "High", wind: "Strong", play: "No" }
  ],

  // 2D Points for SVM Linear vs Non-Linear Kernel Sandbox
  svmLinearPoints: [
    { x: 0.20, y: 0.30, label: 1 },
    { x: 0.25, y: 0.45, label: 1 },
    { x: 0.30, y: 0.20, label: 1 },
    { x: 0.35, y: 0.38, label: 1 },
    { x: 0.40, y: 0.25, label: 1 }, // Support vector candidate class 1
    { x: 0.60, y: 0.75, label: -1 }, // Support vector candidate class -1
    { x: 0.65, y: 0.85, label: -1 },
    { x: 0.70, y: 0.65, label: -1 },
    { x: 0.75, y: 0.80, label: -1 },
    { x: 0.85, y: 0.70, label: -1 }
  ],

  // Concentric Rings for SVM RBF Kernel
  svmNonLinearPoints: [
    // Inner Ring: Class 1 (Red)
    { x: 0.48, y: 0.50, label: 1 },
    { x: 0.52, y: 0.52, label: 1 },
    { x: 0.45, y: 0.46, label: 1 },
    { x: 0.55, y: 0.48, label: 1 },
    { x: 0.50, y: 0.56, label: 1 },
    // Outer Ring: Class -1 (Blue)
    { x: 0.20, y: 0.50, label: -1 },
    { x: 0.80, y: 0.50, label: -1 },
    { x: 0.50, y: 0.20, label: -1 },
    { x: 0.50, y: 0.80, label: -1 },
    { x: 0.28, y: 0.28, label: -1 },
    { x: 0.72, y: 0.72, label: -1 },
    { x: 0.28, y: 0.72, label: -1 },
    { x: 0.72, y: 0.28, label: -1 }
  ],

  // 2D Points for PCA vs LDA Projection Demo
  pcaLdaPoints: [
    // Class A (Blue)
    { x: 0.20, y: 0.40, label: "Class A" },
    { x: 0.25, y: 0.45, label: "Class A" },
    { x: 0.30, y: 0.50, label: "Class A" },
    { x: 0.35, y: 0.55, label: "Class A" },
    { x: 0.40, y: 0.60, label: "Class A" },
    // Class B (Red) - Shifted vertically
    { x: 0.25, y: 0.20, label: "Class B" },
    { x: 0.30, y: 0.25, label: "Class B" },
    { x: 0.35, y: 0.30, label: "Class B" },
    { x: 0.40, y: 0.35, label: "Class B" },
    { x: 0.45, y: 0.40, label: "Class B" }
  ],

  // Case-Based Reasoning Case Base (Loan Approval Precedent Cases)
  cbrCaseBase: [
    { id: "C1", income: 75000, creditScore: 720, debtRatio: 0.25, loanAmount: 250000, decision: "Approved", interestRate: 3.5 },
    { id: "C2", income: 35000, creditScore: 580, debtRatio: 0.55, loanAmount: 180000, decision: "Rejected", interestRate: 0.0 },
    { id: "C3", income: 90000, creditScore: 760, debtRatio: 0.18, loanAmount: 400000, decision: "Approved", interestRate: 3.2 },
    { id: "C4", income: 52000, creditScore: 640, debtRatio: 0.38, loanAmount: 200000, decision: "Approved", interestRate: 4.8 },
    { id: "C5", income: 28000, creditScore: 540, debtRatio: 0.62, loanAmount: 120000, decision: "Rejected", interestRate: 0.0 }
  ]
};
