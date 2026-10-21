// Student Research Topics, Literature Deep-Dives, and Capstone Use-Case Project Builder
// Directly expanding on research citations from Module 1, 2, and 3 lecture slides.

window.DAY1_RESEARCH = {
  topics: [
    {
      id: "bci-eeg-robotics",
      title: "1. Brain-Computer Interfaces (BCI): Robotic Control via EEG",
      slideRef: "Module 1, Slide 7",
      source: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)",
      link: "https://www.youtube.com/watch?v=Zd9WhJPa2Ok",
      tags: ["Bio-signals", "EEG", "Real-Time Control", "Artifact Removal"],
      summary: "In the lecture, an operator observes an autonomous robot sorting objects. When the robot makes an error, the operator's brain naturally emits an 'Error-Related Potential' (ErrP) within 300-500ms. Non-invasive EEG electrodes capture this micro-volt signal, allowing the robot to correct itself mid-action without explicit human speech or button presses.",
      coreChallenge: "EEG signals have microvolt-level amplitudes (10-100 µV) and are easily swamped by electromyographic (EMG) muscle noise, eye blinks (EOG, up to 1000 µV), and 50/60 Hz mains interference. A simple threshold detector fails immediately.",
      researchQuestions: [
        "How can Independent Component Analysis (ICA) or Empirical Mode Decomposition (EMD) isolate ocular and muscle artifacts from genuine cortical rhythms?",
        "Why is the signal-to-noise ratio (SNR) in non-invasive EEG so low, and how do researchers use ensemble averaging across multiple stimulus trials to reveal P300 and ErrP waveforms?",
        "How can Dynamic Time Warping be applied to match template ERP waveforms that suffer from inter-trial latency jitter?"
      ],
      recommendedReading: [
        "Chavarriaga, R., et al. (2014). 'Error-related potentials for brain-machine interfaces.' Frontiers in Neuroscience.",
        "Salazar-Gomez, A. F., et al. (2017). 'Correcting Robot Mistakes with EEG and Eye Tracking.' IEEE ICRA."
      ]
    },
    {
      id: "elderly-gait-fall-prevention",
      title: "2. Wearable Inertial Sensing: Gait Analysis in Elderly Fall Prevention",
      slideRef: "Module 1, Slide 9",
      source: "Sensors Journal (doi: 10.3390/s150306419)",
      link: "https://doi.org/10.3390/s150306419",
      tags: ["Accelerometer", "Gait Dynamics", "DTW", "Healthcare IoT"],
      summary: "Slide 9 depicts raw 3-axis accelerometer readings from 4 walking strides of an elderly subject. Visually, the raw time-series appears noisy and chaotic. However, through peak segmentation and DTW elastic alignment, subtle stride irregularities, stance-phase asymmetry, and freezing of gait can be detected days before an actual fall occurs.",
      coreChallenge: "Walking speed varies naturally throughout daily living; comparing strides at fixed Euclidean intervals produces false anomalies. Dynamic Time Warping aligns each stride cycle (heel strike to toe-off) against a normative personal baseline.",
      researchQuestions: [
        "What is the optimal sensor placement (lumbar spine, ankle, or chest) to maximize stride detection fidelity with minimal patient burden?",
        "How can `find_peaks` with prominence and refractory distance filter out extraneous arm swings or postural adjustments from true heel strikes?",
        "Can the accumulated DTW warping cost between consecutive left and right foot strides serve as a real-time digital biomarker for Parkinson's disease progression?"
      ],
      recommendedReading: [
        "Del Din, S., et al. (2016). 'Free-living gait in Parkinson's disease: wearable sensors reveal cadence and variability.' IEEE TBME.",
        "Muro-de-la-Herran, A., et al. (2014). 'Gait analysis methods: An overview of wearable and non-wearable systems.' Sensors."
      ]
    },
    {
      id: "rowing-stroke-biomechanics",
      title: "3. Sports Telemetry: Multi-Athlete Synchronization in Competitive Rowing",
      slideRef: "Module 1, Slide 11 & Module 3, Slide 11",
      source: "IEEE ISSNIP (DOI: 10.1109/ISSNIP.2014.6827684)",
      link: "https://doi.org/10.1109/ISSNIP.2014.6827684",
      tags: ["IMU Sensors", "DTW", "Synchronization", "Biomechanics"],
      summary: "In rowing eights, boat speed depends not only on individual physical power, but on the microsecond phase synchronization of all 8 rowers' stroke cycles. Sensors placed on oars and seats capture instantaneous velocity and acceleration curves.",
      coreChallenge: "Even in elite crews, stroke rates change dynamically across the race (from 48 strokes/min at the start to 36 in mid-race). Fixed-frequency Fourier analysis fails because the signal is non-stationary.",
      researchQuestions: [
        "How can DTW alignment measure the exact phase lag (in milliseconds) between the stroke seat (leader) and bow rowers throughout the drive and recovery phases?",
        "How can baseline correction remove gravitational acceleration tilt components as the boat rocks, isolating the true propulsive surge acceleration?"
      ],
      recommendedReading: [
        "Smith, R. M., & Loschner, C. (2002). 'Biomechanical analysis of rowing stroke cycle.' Journal of Sports Sciences.",
        "Gershon, M., et al. (2014). 'Automated stroke detection in rowing using IMU sensors.' IEEE Sensors."
      ]
    },
    {
      id: "low-cost-sensor-drift",
      title: "4. Environmental & Chemical Sensing: Baseline Drift in IoT Air & GC Chromatograms",
      slideRef: "Module 2, Slides 28-34",
      source: "EPA Air Quality Sensor Research & Eilers/Boelens arPLS",
      link: "https://cfpub.epa.gov",
      tags: ["Gas Chromatography", "Environmental IoT", "arPLS", "Sensor Drift"],
      summary: "Slides 28-34 highlight that low-cost particulate (PM2.5) and gas sensors drift continuously due to temperature swings, humidity spikes, and photochemical aging. Similarly, gas chromatograms (GC) suffer from column bleeding and temperature ramping, causing the baseline to warp underneath chemical peaks.",
      coreChallenge: "Standard high-pass filters introduce phase distortion and ringing around sharp peaks, while polynomial fitting fails on unpredictable thermal drift. arPLS uses asymmetric weighting to let the baseline conform to the bottom of the signal while ignoring peaks.",
      researchQuestions: [
        "How can the smoothing parameter \\(\\lambda\\) be adaptively tuned in real-time when ambient temperature fluctuates at unpredictable rates?",
        "How does classical arPLS compare with 1D Convolutional Neural Networks (U-Nets) in terms of computational latency and edge micro-controller feasibility?",
        "In smart city sensor grids, how can network-level spatial correlation among neighbor nodes help calibrate an individual sensor's drifting baseline?"
      ],
      recommendedReading: [
        "Baek, S. J., et al. (2015). 'Baseline correction using asymmetrically reweighted penalized least squares smoothing.' Analyst.",
        "Zimmerman, N., et al. (2018). 'A machine learning calibration model using random forests to improve low-cost air quality sensor readings.' Atmospheric Measurement Techniques."
      ]
    }
  ],

  useCaseTemplate: {
    title: "Module 1 Slide 23: Intelligent Sense-Making Project Proposal",
    instructions: "Propose a novel intelligent sensing system. Do NOT reuse existing examples from lecture notes (e.g. avoid Apple Watch ECG, smart thermostat, standard rowing boat). Follow the 4-phase engineering rubric below:",
    sampleProjects: [
      {
        name: "Smart Hydration & Electrolyte Patch for Firefighters",
        domain: "Occupational Safety & Extreme Environments",
        sensorDeployment: "Microfluidic sweat patch embedded with ion-selective electrochemical impedance sensors (ISE) and optical colorimetric spectrometer, attached to firefighter torso.",
        acquiredSignal: "1D temporal time-series of sodium (Na+), potassium (K+), lactate concentrations, and core body temperature sampled at 0.5 Hz.",
        processingPipeline: "1. Baseline drift correction via arPLS (accounting for sweat rate buildup); 2. Finite difference rate of change (dC/dt) to detect sudden ionic exhaustion; 3. DTW matching of lactate trajectory against critical heat exhaustion profiles.",
        actionableInsights: "Automated incident command dashboard triggers alert: 'Firefighter #4 enters Dehydration Level 2; mandatory rotation relief within 4 minutes'."
      },
      {
        name: "Structural Health Monitoring of High-Speed Rail Bridges",
        domain: "Smart Infrastructure & Transportation",
        sensorDeployment: "Piezoelectric triaxial accelerometers and fiber Bragg grating (FBG) optical strain sensors permanently anchored to railway bridge expansion joints and mid-span piers.",
        acquiredSignal: "Continuous 1D vibration acceleration (kHz range) and dynamic micro-strain signals recorded as trains cross.",
        processingPipeline: "1. Peak detection (`scipy.signal.find_peaks` with prominence) on wheel-axle impact responses; 2. Baseline removal to eliminate diurnal solar heating expansion; 3. DTW alignment of train transit vibration signatures against the pristine bridge response library to spot frequency shifts.",
        actionableInsights: "Detect sub-millimeter structural cracks and micro-fissures 6 months before visible surface deformation; automatically schedule maintenance before track degradation."
      }
    ]
  }
};
