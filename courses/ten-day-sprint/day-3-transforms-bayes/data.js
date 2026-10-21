// Day 3 Reference Data: Wavelets, STFT, Vision/Audio Cognition & Bayesian Networks

window.DAY3_TRANSFORMS_BAYES_DATA = {
  // Haar Wavelet Example 1 from Lecture (ISSM Day 2 Slide 16)
  haarExampleVector: [9, 7, 3, 5],
  
  // Automated Pipe Inspection Flow Rate Sensor Data (ISSM Day 2 Worksheet Table 1)
  pipeChokeData: [0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6],

  // Haar Wavelet Filters
  haarFilters: {
    lowPass: [Math.SQRT1_2, Math.SQRT1_2],      // [1/√2, 1/√2] ≈ [0.7071, 0.7071]
    highPass: [-Math.SQRT1_2, Math.SQRT1_2]    // [-1/√2, 1/√2] ≈ [-0.7071, 0.7071]
  },

  // Bayesian Belief Network: Burglary / Alarm / John / Mary (MR Day 2 Slides 73-82)
  burglaryAlarmNet: {
    nodes: ["Burglary", "Earthquake", "Alarm", "JohnCalls", "MaryCalls"],
    priors: {
      "Burglary": 0.001,
      "Earthquake": 0.002
    },
    alarmCPT: {
      "T,T": 0.95,
      "T,F": 0.94,
      "F,T": 0.29,
      "F,F": 0.001
    },
    johnCPT: {
      "T": 0.90,
      "F": 0.05
    },
    maryCPT: {
      "T": 0.70,
      "F": 0.01
    }
  },

  // EM 18-Dice Latent Clustering Data (ISSM Day 2 Slides 41-47)
  emDiceData: [
    { trial: 1, counts: { yellow: 5, blue: 5 }, trueDice: "Unknown" },
    { trial: 2, counts: { yellow: 9, blue: 1 }, trueDice: "Unknown" },
    { trial: 3, counts: { yellow: 8, blue: 2 }, trueDice: "Unknown" },
    { trial: 4, counts: { yellow: 4, blue: 6 }, trueDice: "Unknown" },
    { trial: 5, counts: { yellow: 7, blue: 3 }, trueDice: "Unknown" }
  ]
};
