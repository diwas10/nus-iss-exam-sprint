// Day 2 Reference Data: Signals, Sampling, DTW Series & Rule Engines

window.DAY2_SIGNALS_RULES_DATA = {
  // Sample ECG Segments for DTW (Workshop 1-3 with offset 15)
  ecgSegmentA: [0.10, 0.15, 0.20, 0.85, 1.25, 0.22, -0.30, 0.10, 0.12], // Fast beat (9 samples)
  ecgSegmentB: [0.10, 0.12, 0.14, 0.22, 0.50, 0.90, 1.25, 0.70, 0.20, -0.28, -0.10, 0.10, 0.11, 0.12], // Slow beat (14 samples)

  // Singapore GDP Economic Growth Time Series (from issm_wks1_3_GDP.ipynb)
  gdpCycleA: [2.1, 3.4, 4.8, 6.2, 5.1, 1.8, -1.2, 0.5, 2.3], // Cycle 1 (9 quarters)
  gdpCycleB: [1.8, 2.0, 3.1, 4.5, 6.0, 6.1, 4.2, 2.1, -1.5, -0.8, 0.6, 2.4], // Cycle 2 slower expansion (12 quarters)

  // Deductive / Rule Chaining Knowledge Base (from MR Day 2 Slides 19-30)
  chainingRules: [
    { id: "R1", if: ["Fever > 38.0", "Cough"], then: "RespiratoryInfection", confidence: 0.9 },
    { id: "R2", if: ["RespiratoryInfection", "SpO2 < 92"], then: "SeverePneumonia", confidence: 0.95 },
    { id: "R3", if: ["SeverePneumonia", "Age > 65"], then: "AdmitICU", confidence: 0.99 },
    { id: "R4", if: ["RespiratoryInfection", "SpO2 >= 92"], then: "GeneralWard", confidence: 0.85 }
  ],

  // Clinical Triage Rules Definition (From RS1WS_Hospital Triage Assistant.ipynb)
  triageRules: [
    {
      id: "R1",
      name: "Immediate ICU Critical Alarm",
      priority: 100,
      specificity: 3,
      condition: "SeverityScore > 0.85 AND OxygenSaturation < 90 AND BedAvailable == 'yes'",
      action: "Admit to Intensive Care Unit (ICU)",
      department: "ICU"
    },
    {
      id: "R2",
      name: "ICU Divert to HDU (Bed Scarcity Rule)",
      priority: 95,
      specificity: 3,
      condition: "SeverityScore > 0.85 AND OxygenSaturation < 90 AND BedAvailable == 'no'",
      action: "Divert to High Dependency Unit (HDU) with Ventilator Reserve",
      department: "HDU"
    },
    {
      id: "R3",
      name: "High Dependency Cardiac Monitoring",
      priority: 80,
      specificity: 2,
      condition: "HeartRate > 120 OR (Age > 70 AND Fever > 38.5)",
      action: "Admit to High Dependency Unit (HDU)",
      department: "HDU"
    },
    {
      id: "R4",
      name: "Inpatient General Ward Care",
      priority: 50,
      specificity: 1,
      condition: "Fever > 38.0 OR SeverityScore > 0.50",
      action: "Admit to General Inpatient Ward",
      department: "General Ward"
    },
    {
      id: "R5",
      name: "Outpatient Discharge with Follow-up",
      priority: 10,
      specificity: 2,
      condition: "SeverityScore <= 0.50 AND OxygenSaturation >= 95",
      action: "Discharge with General Practitioner follow-up",
      department: "Discharge"
    }
  ]
};
