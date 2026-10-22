// Day 3 Visualizers Bridge for 3-Day Sprint (Reasoning Systems + Integration + Exams)

window.ThreeDaySprintDay3Visualizers = {
  initHospitalTriage: function() {
    if (window.SprintDay2Visualizers?.initHospitalTriageStudio) {
      window.SprintDay2Visualizers.initHospitalTriageStudio();
    }
  },

  initTransE: function() {
    if (window.SprintDay8Visualizers?.initTransEStudio) {
      window.SprintDay8Visualizers.initTransEStudio();
    }
  },

  initAttention: function() {
    if (window.SprintDay8Visualizers?.initSelfAttentionStudio) {
      window.SprintDay8Visualizers.initSelfAttentionStudio();
    }
  },

  initGA: function() {
    if (window.SprintDay9Visualizers?.initGeneticAlgorithmArena) {
      window.SprintDay9Visualizers.initGeneticAlgorithmArena();
    }
  },

  initEnsemble: function() {
    if (window.SprintDay10Visualizers?.initEnsembleStudio) {
      window.SprintDay10Visualizers.initEnsembleStudio();
    }
  }
};
