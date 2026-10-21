// Datasets for Day 2: Sensory Signal Transformation
window.DAY2_DATA = {
  // 1. Table 1 from Day 2 Group Worksheet (ISSM Day2 worksheet your name.pptx)
  pipeInspection: {
    title: "Table 1. Water Flow Sensor Dataset for Choke Monitoring",
    indices: [1, 2, 3, 4, 5, 6, 7, 8],
    flowRates: [0.6, 0.7, 0.8, 0.4, 0.3, 0.3, 0.6, 0.6],
    unit: "meter/second",
    interval: "1 hour"
  },

  // 2. Expectation-Maximization 18-Roll Two-Dice Dataset (Dr TIAN Jing, Slides 37-47)
  emDice: {
    rolls: [6, 4, 5, 1, 2, 3, 4, 5, 2, 2, 1, 4, 3, 4, 6, 2, 1, 6],
    initialGuess: {
      pBlue: 0.5,
      pYellow: 0.5,
      pXGivenBlue: [0.3, 0.3, 0.1, 0.1, 0.1, 0.1], // numbers 1 to 6
      pXGivenYellow: [0.4, 0.05, 0.05, 0.05, 0.05, 0.4]
    },
    iteration1: {
      pBlue: 0.59,
      pYellow: 0.41,
      sumYellow: 7.31,
      sumBlue: 10.69,
      pXGivenBlue: [0.122, 0.322, 0.125, 0.250, 0.125, 0.056],
      pXGivenYellow: [0.234, 0.077, 0.090, 0.181, 0.090, 0.328]
    }
  },

  // 3. PlayTennis Categorical Naive Bayes Dataset (Slides 30-32)
  playTennis: [
    { outlook: "Sunny", temp: "Hot", humidity: "High", wind: "Weak", play: "No" },
    { outlook: "Sunny", temp: "Hot", humidity: "High", wind: "Strong", play: "No" },
    { outlook: "Overcast", temp: "Hot", humidity: "High", wind: "Weak", play: "Yes" },
    { outlook: "Rain", temp: "Mild", humidity: "High", wind: "Weak", play: "Yes" },
    { outlook: "Rain", temp: "Cool", humidity: "Normal", wind: "Weak", play: "Yes" },
    { outlook: "Rain", temp: "Cool", humidity: "Normal", wind: "Strong", play: "No" },
    { outlook: "Overcast", temp: "Cool", humidity: "Normal", wind: "Strong", play: "Yes" },
    { outlook: "Sunny", temp: "Mild", humidity: "High", wind: "Weak", play: "No" },
    { outlook: "Sunny", temp: "Cool", humidity: "Normal", wind: "Weak", play: "Yes" },
    { outlook: "Rain", temp: "Mild", humidity: "Normal", wind: "Weak", play: "Yes" },
    { outlook: "Sunny", temp: "Mild", humidity: "Normal", wind: "Strong", play: "Yes" },
    { outlook: "Overcast", temp: "Mild", humidity: "High", wind: "Strong", play: "Yes" },
    { outlook: "Overcast", temp: "Hot", humidity: "Normal", wind: "Weak", play: "Yes" },
    { outlook: "Rain", temp: "Mild", humidity: "High", wind: "Strong", play: "No" }
  ],

  // 4. Wavelet Decomposition Toy Signal (Slides 17-19)
  waveletToy: {
    signal: [9, 7, 3, 5],
    haarLowFilter: [Math.SQRT1_2, Math.SQRT1_2],
    haarHighFilter: [-Math.SQRT1_2, Math.SQRT1_2],
    level1Approx: [8 * Math.SQRT2, 4 * Math.SQRT2],
    level1Detail: [-Math.SQRT2, Math.SQRT2],
    level2Approx: 12,
    level2Detail: -4,
    coefficients: [12, -4, -Math.SQRT2, Math.SQRT2]
  },

  // 5. Real Sensor Stream Slice (UCI HAR test.csv, 256 samples)
  sensorStream: [0.552, 0.501, 0.138, -0.423, -0.802, -0.364, 0.326, 0.874, 0.885, 0.257, -0.388, -0.602, 0.006, 0.557, 0.297, 0.193, -0.649, -0.397, 0.0, 0.173, 0.379, 0.011, -0.169, -0.192, 0.234, 1.149, 0.945, 0.216, -0.61, -0.426, 0.56, 0.119, -0.048, -0.294, 0.03, 0.207, -0.465, -0.173, 0.249, 0.231, -0.106, -0.405, 0.142, 0.538, -0.147, -0.465, -0.2, 0.203, 0.452, -0.157, -0.166, 0.382, 0.496, 0.239, -0.129, -0.065, 0.254, -0.233, -0.271, -0.519, -0.007, 0.068, 0.195, 0.737, 0.619, -0.111, -0.469, -0.652, 0.03, 0.69, 0.809, 0.191, -0.07, -0.267, -0.358, -0.235, -0.188, 0.116, -0.016, 0.0, 0.027, 0.003, 0.108, 0.095, -0.134, -0.324, -0.329, 0.224, 0.874, 1.018, 0.049, -0.624, -0.932, -0.071, 0.538, 0.753, 0.539, 0.289, -0.013, -0.348, -0.27, 0.116, 0.338, 0.57, 0.464, 0.404, 0.073, -0.293, -0.048, -0.008, 0.323, 0.402, 0.391, 0.459, 0.403, -0.015, -0.185, 0.049, 0.118, -0.162, -0.2, -0.468, 0.119, 0.774, 0.821, 0.301, -0.562, -0.551, -0.348, 0.05, 0.375, -0.214, -0.485, -0.362, 0.17, 0.167, -0.189, -0.14, 0.226, 0.116, -0.065, 0.076, 0.428, 0.48, -0.006, -0.679, -0.658, -0.26, 0.076, 0.024, -0.358, -0.432, -0.116, 0.144, 0.278, 0.239, 0.485, 0.299, -0.179, -0.46, 0.243, 1.16, 1.064, 0.518, -0.198, -0.216, -0.018, -0.144, 0.174, 0.694, 0.684, 0.017, -0.791, -0.482, 0.597, 0.644, -0.269, -0.673, -0.2, 0.53, 0.153, 0.011, -0.033, 0.328, 0.23, -0.443, -0.603, -0.381, 0.188, 0.542, 0.186, -0.235, -0.513, -0.631, -0.597, -0.227, -0.315, 0.181, -0.041, -0.012, -0.465, -0.936, -0.228, 0.547, 1.003, 0.847, 0.037, -0.403, -1.215, -1.376, -0.732, 0.564, 1.621, 0.517, -0.504, -0.657, -0.536, -0.472, -0.394, 0.61, 1.072, -0.118, -0.912, -1.183, -0.709, -0.319, -0.018, 0.873, 0.894, 0.161, -0.215, -0.663, -0.542, -0.428, -0.17, 0.537, -0.06, -0.789, -1.007, -0.362, 0.801, 0.654, 0.016, -0.608, -0.945, -0.783, -0.386, 0.663, 1.446, 0.884, -0.318, -1.053, -0.949, -0.083, 0.34, 0.588]
};
