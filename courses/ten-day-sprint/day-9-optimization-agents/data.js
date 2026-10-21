// Day 9 Reference Data: Genetic Algorithms (WS1GA.xlsx), Multimodal RVM & ReAct Agent

window.DAY9_OPTIMIZATION_AGENTS_DATA = {
  // 1. Exact Benchmark from Dr. Zhu Fangming's WS1GA.xlsx (RS Day 4)
  // Maximize f(x) = x^2 for 5-bit binary integers x in [0, 31]
  ws1gaBenchmark: {
    population: [
      { id: 1, binary: "01101", x: 13, fitness: 169 },
      { id: 2, binary: "11000", x: 24, fitness: 576 },
      { id: 3, binary: "01000", x: 8,  fitness: 64 },
      { id: 4, binary: "10011", x: 19, fitness: 361 }
    ],
    totalFitness: 1170,
    expectedProbabilities: [0.1444, 0.4923, 0.0547, 0.3085],
    expectedCumulative: [0.1444, 0.6368, 0.6915, 1.0000]
  },

  // 2. 10 Singapore Landmarks TSP Tour Coordinates
  tspCities: [
    { name: "Marina Bay Sands", x: 0.75, y: 0.70 },
    { name: "Gardens by the Bay", x: 0.82, y: 0.75 },
    { name: "Changi Airport", x: 0.92, y: 0.35 },
    { name: "NUS ISS Kent Ridge", x: 0.25, y: 0.65 },
    { name: "Sentosa Island", x: 0.45, y: 0.90 },
    { name: "Orchard Road", x: 0.55, y: 0.50 },
    { name: "Jurong East Hub", x: 0.20, y: 0.45 },
    { name: "Woodlands Checkpoint", x: 0.40, y: 0.15 },
    { name: "Punggol Waterway", x: 0.75, y: 0.25 },
    { name: "Singapore Zoo", x: 0.45, y: 0.28 }
  ],

  // 3. Multimodal Reverse Vending Machine (RVM) Test Scenarios (ISSM Day 4)
  rvmScenarios: [
    {
      id: "case-1",
      name: "Authentic PET Plastic Bottle (Dasani 500ml)",
      sensors: {
        barcode: { value: "8888012345678", valid: true, catalogType: "PET" },
        contour: { shape: "Cylindrical", diameterMm: 65, heightMm: 210, deformation: 0.05 },
        weight: { grams: 22, expectedRange: [18, 28] },
        metalInductive: { detected: false },
        acousticFreqHz: 820 // Dull plastic resonance
      },
      groundTruth: "ACCEPT: Redeem SGD 0.10 deposit into PET bin"
    },
    {
      id: "case-2",
      name: "Authentic Aluminum Drink Can (Coca-Cola 330ml)",
      sensors: {
        barcode: { value: "8888098765432", valid: true, catalogType: "CAN" },
        contour: { shape: "Cylindrical", diameterMm: 66, heightMm: 115, deformation: 0.02 },
        weight: { grams: 14, expectedRange: [12, 18] },
        metalInductive: { detected: true },
        acousticFreqHz: 1540 // Metallic ring
      },
      groundTruth: "ACCEPT: Crush & deposit into Aluminum bin"
    },
    {
      id: "case-3",
      name: "Fraud Attempt 1: Lead-Weighted Plastic Bottle",
      sensors: {
        barcode: { value: "8888012345678", valid: true, catalogType: "PET" },
        contour: { shape: "Cylindrical", diameterMm: 65, heightMm: 210, deformation: 0.04 },
        weight: { grams: 168, expectedRange: [18, 28] }, // 168g vs 22g!
        metalInductive: { detected: true }, // Lead weights trip inductive sensor!
        acousticFreqHz: 450 // Heavy dampened thud
      },
      groundTruth: "REJECT: Weight anomaly + metal inside plastic bottle! Eject bottle."
    },
    {
      id: "case-4",
      name: "Fraud Attempt 2: Fake Barcode Sticker on Glass Beer Bottle",
      sensors: {
        barcode: { value: "8888012345678", valid: true, catalogType: "PET" }, // Spoofed plastic barcode
        contour: { shape: "Bottle", diameterMm: 72, heightMm: 240, deformation: 0.01 },
        weight: { grams: 340, expectedRange: [18, 28] },
        metalInductive: { detected: false },
        acousticFreqHz: 2850 // Sharp high-pitched glass ping!
      },
      groundTruth: "REJECT: Acoustic frequency (2850Hz) and mass (340g) identify Glass! Eject."
    }
  ],

  // 4. Cognitive ReAct Agent Trace on NUS ISS Internship FAQ (CS Day 3)
  reactTrace: [
    {
      step: 1,
      type: "Thought",
      content: "The user is asking: 'Can an international student complete an off-term internship in Singapore without university approval?' I need to search the NUS ISS Internship Policy guidelines for off-term eligibility and visa regulations."
    },
    {
      step: 2,
      type: "Action",
      tool: "KB_Search",
      input: "query='international student off term internship MOM visa approval NUS ISS'"
    },
    {
      step: 3,
      type: "Observation",
      content: "Found Section 4.2 of NUS ISS Internship Handbook: 'All full-time international students holding a Student Pass must obtain prior written approval from the NUS ISS Internship Committee and a formal Training Employment Pass (TEP) or Work Pass Exemption before commencing ANY off-term work.'"
    },
    {
      step: 4,
      type: "Thought",
      content: "The policy explicitly states that university approval and Ministry of Manpower (MOM) work pass exemption are mandatory. I can now synthesize the grounded, final answer."
    },
    {
      step: 5,
      type: "Final Answer",
      content: "No. Under Singapore MOM regulations and Section 4.2 of the NUS ISS Internship Policy, international students on a Student Pass cannot take on an off-term internship without prior formal written approval from the NUS ISS Internship Committee and a valid work authorization (such as a Training Employment Pass or MOM Work Pass Exemption)."
    }
  ]
};
