// Day 2 Visualizers Bridge for 3-Day Sprint (Signal Processing + Deep Learning)

window.SprintDay2Visualizers = window.SprintDay2Visualizers || {
  computeAliasing: function(f, fs) {
    const fn = fs / 2;
    if (f <= fn) return f;
    const k = Math.round(f / fs);
    return Math.abs(f - k * fs);
  }
};

window.ThreeDaySprintDay2Visualizers = {
  initNyquist: function() {
    if (window.SprintDay2Visualizers?.initNyquistAliasingStudio) {
      window.SprintDay2Visualizers.initNyquistAliasingStudio();
    }
  },

  initARPLS: function() {
    if (window.SprintDay2Visualizers?.initARPLSBaselineStudio) {
      window.SprintDay2Visualizers.initARPLSBaselineStudio();
    }
  },

  initDTW: function() {
    if (window.SprintDay2Visualizers?.initDTWMatixStudio) {
      window.SprintDay2Visualizers.initDTWMatixStudio();
    }
  },

  initSTFT: function() {
    if (window.SprintDay3Visualizers?.initSTFTStudio) {
      window.SprintDay3Visualizers.initSTFTStudio();
    }
  },

  initWavelet: function() {
    if (window.SprintDay3Visualizers?.init1DHaarStudio) {
      window.SprintDay3Visualizers.init1DHaarStudio();
    }
  },

  initCNNParams: function() {
    if (window.SprintDay6Visualizers?.initCNNParameterStudio) {
      window.SprintDay6Visualizers.initCNNParameterStudio();
    }
  },

  initLSTM: function() {
    if (window.SprintDay7Visualizers?.initLSTMGateValveStudio) {
      window.SprintDay7Visualizers.initLSTMGateValveStudio();
    }
  }
};
