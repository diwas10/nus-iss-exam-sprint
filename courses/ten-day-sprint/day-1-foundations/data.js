// Day 1 Foundations Static Reference Data & Graph Definitions

window.DAY1_FOUNDATIONS_DATA = {
  // A* Graph for Interactive Sandbox
  searchGraph: {
    nodes: {
      "S": { name: "Start (S)", x: 80, y: 160, h_admissible: 8, h_inadmissible: 14 },
      "A": { name: "City A", x: 220, y: 80, h_admissible: 6, h_inadmissible: 12 },
      "B": { name: "City B", x: 220, y: 240, h_admissible: 5, h_inadmissible: 2 },
      "C": { name: "City C", x: 380, y: 80, h_admissible: 4, h_inadmissible: 7 },
      "D": { name: "City D", x: 380, y: 240, h_admissible: 2, h_inadmissible: 1 },
      "G": { name: "Goal (G)", x: 520, y: 160, h_admissible: 0, h_inadmissible: 0 }
    },
    edges: [
      { from: "S", to: "A", cost: 3 },
      { from: "S", to: "B", cost: 4 },
      { from: "A", to: "C", cost: 4 },
      { from: "A", to: "B", cost: 2 },
      { from: "B", to: "D", cost: 5 },
      { from: "C", to: "G", cost: 5 },
      { from: "D", to: "G", cost: 3 },
      { from: "C", to: "D", cost: 1 }
    ]
  },

  // CSP Map Coloring Data (Singapore Regions)
  cspMapData: {
    regions: ["SW", "SE", "NE", "NW", "CS"],
    colors: ["Red", "Green", "Blue"],
    neighbors: {
      "SW": ["NW", "CS", "SE"],
      "SE": ["SW", "CS", "NE"],
      "NE": ["SE", "CS", "NW"],
      "NW": ["SW", "CS", "NE"],
      "CS": ["SW", "SE", "NE", "NW"] // Central Singapore borders all 4!
    }
  },

  // Naive Bayes Fruit Dataset (PSUPR Day 1b Slides 37-45)
  naiveBayesFruitData: {
    classes: ["Banana", "Orange", "Other"],
    priorCounts: { "Banana": 500, "Orange": 300, "Other": 200, "Total": 1000 },
    // Likelihood counts: { featureValue: count given class }
    features: {
      "Long": {
        "Banana": { "Yes": 400, "No": 100 },
        "Orange": { "Yes": 0, "No": 300 },
        "Other": { "Yes": 100, "No": 100 }
      },
      "Sweet": {
        "Banana": { "Yes": 350, "No": 150 },
        "Orange": { "Yes": 150, "No": 150 },
        "Other": { "Yes": 150, "No": 50 }
      },
      "Yellow": {
        "Banana": { "Yes": 450, "No": 50 },
        "Orange": { "Yes": 300, "No": 0 },
        "Other": { "Yes": 50, "No": 150 }
      }
    }
  },

  // Cumulative Gain and Lift Chart Sample Data (PSUPR Day 1b Slide 19)
  liftChartData: [
    { decile: 1, total: 1000, responders: 240, cumResponders: 240, cumGainPct: 48.0, lift: 2.40 },
    { decile: 2, total: 1000, responders: 130, cumResponders: 370, cumGainPct: 74.0, lift: 1.85 },
    { decile: 3, total: 1000, responders: 55,  cumResponders: 425, cumGainPct: 85.0, lift: 1.42 },
    { decile: 4, total: 1000, responders: 30,  cumResponders: 455, cumGainPct: 91.0, lift: 1.14 },
    { decile: 5, total: 1000, responders: 18,  cumResponders: 473, cumGainPct: 94.6, lift: 0.95 },
    { decile: 6, total: 1000, responders: 12,  cumResponders: 485, cumGainPct: 97.0, lift: 0.81 },
    { decile: 7, total: 1000, responders: 7,   cumResponders: 492, cumGainPct: 98.4, lift: 0.70 },
    { decile: 8, total: 1000, responders: 4,   cumResponders: 496, cumGainPct: 99.2, lift: 0.62 },
    { decile: 9, total: 1000, responders: 3,   cumResponders: 499, cumGainPct: 99.8, lift: 0.55 },
    { decile: 10, total: 1000, responders: 1,  cumResponders: 500, cumGainPct: 100.0, lift: 0.50 }
  ],

  // 2D Sample Data for k-NN Decision Boundary Sandbox
  knnSamplePoints: [
    // Class 0: Healthy (Blue)
    { x: 0.15, y: 0.25, label: 0 },
    { x: 0.20, y: 0.35, label: 0 },
    { x: 0.25, y: 0.20, label: 0 },
    { x: 0.30, y: 0.40, label: 0 },
    { x: 0.35, y: 0.28, label: 0 },
    { x: 0.22, y: 0.60, label: 0 },
    { x: 0.40, y: 0.32, label: 0 },
    { x: 0.18, y: 0.45, label: 0 },
    
    // Class 1: Diabetic Risk (Red)
    { x: 0.65, y: 0.70, label: 1 },
    { x: 0.70, y: 0.85, label: 1 },
    { x: 0.80, y: 0.65, label: 1 },
    { x: 0.75, y: 0.78, label: 1 },
    { x: 0.60, y: 0.80, label: 1 },
    { x: 0.85, y: 0.90, label: 1 },
    { x: 0.55, y: 0.60, label: 1 },
    { x: 0.72, y: 0.55, label: 1 },

    // Boundary Ambiguity / Noise
    { x: 0.48, y: 0.52, label: 1 },
    { x: 0.45, y: 0.42, label: 0 }
  ]
};
