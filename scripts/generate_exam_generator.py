code = '''// NUS ISS Examination Question Generator & Practice System
// Four Rigorous Tiers: Level A (Concept), Level B (Mathematical), Level C (Scenario Application), Level D (System Design)
// Deterministic Auto-grading for Numerical, Structured Rubrics for Open-Ended, and Instant Mistake Logging

window.ExamGenerator = {
  questions: [
    // -------------------------------------------------------------
    // LEVEL A — CONCEPT RECOGNITION
    // -------------------------------------------------------------
    {
      id: 'gen-a-01',
      level: 'A',
      levelName: 'Level A — Concept Recognition',
      course: 'PRS',
      topic: 'Convolutional Neural Networks',
      title: 'Why Global Average Pooling (GAP) Eliminates Overfitting in Deep CNNs',
      question: 'In deep convolutional neural networks (such as in PRS Sample Paper Q2a), replacing a Flatten layer connected to a dense layer with Global Average Pooling (GAP) dramatically improves generalization. What is the fundamental structural reason?',
      options: [
        'GAP doubles the number of learnable parameters, giving the network higher capacity to memorize rare edges.',
        'GAP has 0 learnable parameters, taking the average of each feature map directly, which acts as a structural regularizer and prevents parameter explosion in dense layers.',
        'GAP changes the convolution operation from 2D spatial cross-correlation to 1D temporal recurrence.',
        'GAP eliminates the need for any non-linear activation functions in prior convolutional layers.'
      ],
      correctIndex: 1,
      explanation: 'A Flatten layer on a 7x7x512 feature map followed by 4096 hidden units produces (7*7*512)*4096 ≈ 102.7 million parameters! This causes massive overfitting. Global Average Pooling replaces all 7x7 spatial values in each feature map with their scalar mean, requiring ZERO parameters and enforcing semantic feature map correspondences directly.'
    },
    {
      id: 'gen-a-02',
      level: 'A',
      levelName: 'Level A — Concept Recognition',
      course: 'IRS',
      topic: 'State-Space Heuristic Search',
      title: 'A* Optimality in Graph Search: Admissibility vs Consistency',
      question: 'When performing A* Graph Search (which maintains a CLOSED set to avoid exploring repeated states), why is heuristic admissibility h(n) <= h*(n) NOT sufficient on its own to guarantee finding the optimal shortest path?',
      options: [
        'Because admissible heuristics always overestimate step costs, causing A* to fall into infinite loops.',
        'Because if an admissible heuristic is inconsistent, A* may reach an optimal state via a suboptimal high-cost path first and close it, permanently ignoring a cheaper path found later unless closed nodes can be reopened.',
        'Because graph search cannot utilize priority queues, forcing A* to degrade into Breadth-First Search.',
        'Because consistency is only required for Tree Search, whereas Graph Search requires only admissibility.'
      ],
      correctIndex: 1,
      explanation: 'In Graph Search, once a node is popped from OPEN and placed in CLOSED, standard A* does not reopen it. If h(n) is admissible but violates consistency (the triangle inequality h(n) <= c(n,a,n\') + h(n\')), the f-values can decrease along a path. A suboptimal path can reach node n first, putting it into CLOSED. When the true cheaper path arrives later, it is discarded! Consistency guarantees f(n) is monotonically non-decreasing, so nodes are guaranteed optimal on their first pop.'
    },
    {
      id: 'gen-a-03',
      level: 'A',
      levelName: 'Level A — Concept Recognition',
      course: 'PRS',
      topic: 'Sensory Anomaly Detection',
      title: 'Why Supervised Classifiers Fail on Industrial Machine Vibration Data',
      question: 'In PRS Sample Paper Q2c, an engineer proposes training a Multi-Layer Perceptron (MLP) binary classifier on 3,000 normal vibration sequences and 2 abnormal sequences. Why is this supervised proposal fundamentally flawed?',
      options: [
        'Vibration signals cannot be represented in the spatial or frequency domain.',
        'Extreme class imbalance (3,000 : 2) causes the supervised classifier to predict "Normal" for 100% of samples (achieving 99.93% accuracy but 0% recall of anomalies), while 2 samples cannot represent the manifold of future unforeseen faults. Unsupervised reconstruction error (Autoencoder with 3-sigma) must be used instead.',
        'MLPs cannot process more than 10 input dimensions without mathematical instability.',
        'Vibration sensors always introduce phase distortion that prevents neural gradient propagation.'
      ],
      correctIndex: 1,
      explanation: 'With 3,000 normal and 2 abnormal samples, the prior probability of abnormality is 0.066%. A trivial dummy classifier that always predicts "Normal" achieves 99.93% accuracy. Furthermore, anomalous mechanical failures take countless unpredictable physical forms (bearing spall, shaft misalignment, belt mistracking) that cannot be spanned by 2 training examples. The standard solution is one-class unsupervised learning: train an autoencoder solely on normal data and trigger an anomaly when reconstruction MSE exceeds mu + 3*sigma.'
    },

    // -------------------------------------------------------------
    // LEVEL B — MATHEMATICAL CALCULATION (Deterministic Check)
    // -------------------------------------------------------------
    {
      id: 'gen-b-01',
      level: 'B',
      levelName: 'Level B — Mathematical Calculation',
      course: 'PRS',
      topic: 'Support Vector Machines',
      title: 'Maximum Margin Hyperplane Width Calculation',
      scenario: 'A linear Support Vector Machine boundary is given by w1*x1 + w2*x2 + b = 0 with weight vector w = [3, 4] and bias b = -5.',
      question: 'Calculate the exact geometric margin width gamma = 2 / ||w|| between the positive and negative support hyperplanes.',
      expectedAnswer: 0.4,
      unit: 'units',
      tolerance: 0.02,
      solutionSteps: `
        $$\\|\\mathbf{w}\\| = \\sqrt{w_1^2 + w_2^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$
        $$\\text{Margin Width } \\gamma = \\frac{2}{\\|\\mathbf{w}\\|} = \\frac{2}{5} = 0.4$$
      `,
      commonTrap: 'Mistake: dividing ||w|| by 2 instead of 2 by ||w||, or forgetting to take the square root of the sum of squares.'
    },
    {
      id: 'gen-b-02',
      level: 'B',
      levelName: 'Level B — Mathematical Calculation',
      course: 'PRS',
      topic: 'Naive Bayes with Laplace Smoothing',
      scenario: 'In an online bookstore dataset, class C = Purchase has 40 total instances. Feature X_j represents Browser with |V_j| = 5 possible categories (Chrome, Safari, Firefox, Edge, Other). In the training set, Firefox appeared exactly 0 times for class C = Purchase.',
      question: 'Calculate the Laplace-smoothed conditional probability P(Browser = Firefox | C = Purchase) using standard add-1 Laplace smoothing. Round to 4 decimal places.',
      expectedAnswer: 0.0222,
      unit: '',
      tolerance: 0.001,
      solutionSteps: `
        $$\\text{Formula: } P(x_j \\mid C_k) = \\frac{\\text{count}(x_j, C_k) + 1}{\\text{count}(C_k) + |V_j|}$$
        $$\\text{Given: } \\text{count}(\\text{Firefox}, \\text{Purchase}) = 0, \\quad \\text{count}(\\text{Purchase}) = 40, \\quad |V_j| = 5$$
        $$P(\\text{Firefox} \\mid \\text{Purchase}) = \\frac{0 + 1}{40 + 5} = \\frac{1}{45} \\approx 0.0222$$
      `,
      commonTrap: 'Exam Trap #1: Dividing by 40 + 1 = 41 instead of 40 + |V| = 45! The denominator MUST add |V_j| to ensure the sum of probabilities across all 5 browser categories equals 1.0.'
    },
    {
      id: 'gen-b-03',
      level: 'B',
      levelName: 'Level B — Mathematical Calculation',
      course: 'PRS',
      topic: 'Nyquist Theorem & Aliasing',
      scenario: 'An industrial vibration accelerometer samples a machine casing at sampling rate fs = 100 Hz. A motor defect generates an acoustic high-frequency tone at f = 180 Hz.',
      question: 'Calculate the apparent ghost frequency f_alias (in Hz) that will be observed in the sampled digital signal due to spectral aliasing folding back across the Nyquist frequency.',
      expectedAnswer: 20.0,
      unit: 'Hz',
      tolerance: 0.5,
      solutionSteps: `
        $$\\text{Nyquist folding frequency: } f_N = \\frac{f_s}{2} = \\frac{100}{2} = 50\\text{ Hz}$$
        $$\\text{Since } f = 180\\text{ Hz} > f_N, \\text{ aliasing occurs:}$$
        $$k = \\text{round}\\left(\\frac{f}{f_s}\\right) = \\text{round}\\left(\\frac{180}{100}\\right) = 2$$
        $$f_{\\text{alias}} = |f - k f_s| = |180 - 2(100)| = |180 - 200| = 20\\text{ Hz}$$
      `,
      commonTrap: 'Assuming the frequency is lost completely. In reality, high frequency energy folds directly into baseband as a 20 Hz phantom wave that misleads maintenance staff!'
    },
    {
      id: 'gen-b-04',
      level: 'B',
      levelName: 'Level B — Mathematical Calculation',
      course: 'IRS',
      topic: 'MYCIN Certainty Factors',
      scenario: 'In an automated diagnostic assistant, Rule 1 asserts hypothesis H (Dry Eye Syndrome) with CF1 = +0.60 based on blink rate. Rule 2 independently asserts hypothesis H with CF2 = +0.50 based on screen distance.',
      question: 'Calculate the combined certainty factor CF_combine(CF1, CF2) for hypothesis H when both rules fire with positive evidence.',
      expectedAnswer: 0.80,
      unit: '',
      tolerance: 0.01,
      solutionSteps: `
        $$\\text{For both } CF_1, CF_2 \\ge 0:$$
        $$CF_{\\text{combine}} = CF_1 + CF_2 - CF_1 \\cdot CF_2$$
        $$CF_{\\text{combine}} = 0.60 + 0.50 - (0.60 \\times 0.50) = 1.10 - 0.30 = 0.80$$
      `,
      commonTrap: 'Forgetting the cross-term product (- CF1 * CF2) and answering 1.10, which violates the strict [-1, +1] range of certainty factors!'
    },
    {
      id: 'gen-b-05',
      level: 'B',
      levelName: 'Level B — Mathematical Calculation',
      course: 'IRS',
      topic: 'Association Rule Mining',
      scenario: 'In an eye clinic transaction database of N = 1,000 patient visits: 200 patients had symptom X (Blurred Vision), 150 patients were diagnosed with Y (Glaucoma), and 60 patients had BOTH symptom X and diagnosis Y.',
      question: 'Calculate the Lift of the association rule X => Y. Round to 2 decimal places.',
      expectedAnswer: 2.00,
      unit: '',
      tolerance: 0.05,
      solutionSteps: `
        $$\\text{Support}(X) = \\frac{200}{1000} = 0.20, \\quad \\text{Support}(Y) = \\frac{150}{1000} = 0.15$$
        $$\\text{Support}(X \\cup Y) = \\frac{60}{1000} = 0.06$$
        $$\\text{Confidence}(X \\implies Y) = \\frac{\\text{Support}(X \\cup Y)}{\\text{Support}(X)} = \\frac{0.06}{0.20} = 0.30$$
        $$\\text{Lift}(X \\implies Y) = \\frac{\\text{Confidence}(X \\implies Y)}{\\text{Support}(Y)} = \\frac{0.30}{0.15} = 2.00$$
      `,
      commonTrap: 'Confusing Confidence (0.30) with Lift (2.00). Lift > 1 indicates symptom X increases the odds of Glaucoma by 2x over random chance.'
    },

    // -------------------------------------------------------------
    // LEVEL C — SCENARIO APPLICATION (Rubric Self-Evaluation)
    // -------------------------------------------------------------
    {
      id: 'gen-c-01',
      level: 'C',
      levelName: 'Level C — Scenario Application',
      course: 'PRS',
      topic: 'Model Evaluation in Business Context',
      title: 'Comparing SVM vs Neural Network under Bookstore Couponing Strategy (PRS Q1b)',
      scenario: 'An online bookstore tests two purchasing intention models on a 30% test holdout (3,699 sessions, where 572 completed transactions and 3,127 did not). Model A (Linear SVM) yields TP=380, FP=520, TN=2607, FN=192. Model B (MLP Neural Net) yields TP=480, FP=980, TN=2147, FN=92. The marketing department offers $15 time-limited discount coupons to predicted buyers, which costs money if wasted on non-buyers but converts marginal buyers.',
      question: 'Compare Model A and Model B in the context of the bookstore business objectives. State which model best meets the business needs if (i) coupon budget is tightly restricted, vs (ii) maximizing market share and transaction volume is paramount. Justify using Precision and Recall.',
      rubric: [
        { criteria: 'Calculates Precision and Recall for both models correctly', marks: 2, guide: 'Model A: Precision = 380/(380+520) = 42.2%, Recall = 380/(380+192) = 66.4%. Model B: Precision = 480/(480+980) = 32.9%, Recall = 480/(480+92) = 83.9%.' },
        { criteria: 'Justifies Scenario (i) Tightly Restricted Coupon Budget', marks: 2, guide: 'Choose Model A (Linear SVM). Higher Precision (42.2% vs 32.9%) minimizes wasted coupon costs on false positives (520 wasted coupons vs 980 for Model B).' },
        { criteria: 'Justifies Scenario (ii) Maximizing Market Share / Sales Volume', marks: 2, guide: 'Choose Model B (Neural Net). Higher Recall (83.9% vs 66.4%) captures 480 purchasers (100 more transactions than Model A), minimizing lost revenue opportunities (only 92 FN missed buyers vs 192 for Model A).' }
      ]
    },
    {
      id: 'gen-c-02',
      level: 'C',
      levelName: 'Level C — Scenario Application',
      course: 'IRS',
      topic: 'Medical Decision Support & Safety',
      title: 'Primary Care Doctor vs Patient Self-Service in Clinical AI (IRS Q2i)',
      scenario: 'An AI engineer in the A-EYE product team suggests eliminating the need for a primary care doctor by turning the diagnostic system into a direct patient-facing self-service app on smartphones.',
      question: 'Would you support this initiative? Justify your decision with clinical, technical, ethical, and legal arguments matching NUS-ISS grading rubrics.',
      rubric: [
        { criteria: 'Clear Position Statement', marks: 1, guide: 'Firmly oppose (or heavily restrict to non-diagnostic education) patient self-service for primary diagnosis.' },
        { criteria: 'Clinical & Technical Risks (False Negatives & Positives)', marks: 2, guide: 'Patients cannot accurately evaluate ophthalmic signs (e.g. fundus features, intraocular pressure). False negatives lead to irreversible blindness (e.g. missed glaucoma); false positives induce severe unwarranted patient panic.' },
        { criteria: 'Legal, Ethical & Human-in-the-Loop Governance', marks: 2, guide: 'Medical malpractice liability cannot be assigned to an autonomous app. Primary doctor provides essential physical exam verification, contextual history, empathy, and professional accountability.' }
      ]
    },

    // -------------------------------------------------------------
    // LEVEL D — INTEGRATED SYSTEM DESIGN
    // -------------------------------------------------------------
    {
      id: 'gen-d-01',
      level: 'D',
      levelName: 'Level D — Integrated System Design',
      course: 'PRS',
      topic: 'Deep Reinforcement Learning & Robotic Sorting',
      title: 'Robotic Pick-and-Place System Architecture & Sim-to-Real Transfer (PRS Q2b)',
      scenario: 'You are designing an autonomous electronic-waste robotic sorting arm on an industrial conveyor belt. The arm must identify target components (batteries, copper coils) among mixed debris, pick them up regardless of orientation, and place them into designated recycling bins while strictly avoiding collisions with obstacles and moving machinery.',
      question: 'Design a Deep Reinforcement Learning (DRL) solution: (1) Formulate a 3-factor mathematical reward function; (2) Draft the multi-component system architecture; (3) Propose a concrete strategy to prevent dangerous collisions during real-world training.',
      rubric: [
        { criteria: '3-Factor Reward Function Formulation', marks: 3, guide: 'Reward R = R_success (+100 for correct bin placement) + R_time (-1 per step to encourage efficiency) + R_collision (-500 for obstacle impact) + R_distance shaping (rewarding gripper approaching target).' },
        { criteria: 'System Architecture Blueprint', marks: 4, guide: 'Must include: (1) Physical Robot Hardware & Actuators, (2) Perception/Vision System (RGB-D camera for object 6D pose estimation), (3) DRL Decision Engine (Actor-Critic / PPO policy network), (4) Environment State Buffer (conveyor velocity, obstacle positions), (5) Safety Interlock Controller.' },
        { criteria: 'Sim-to-Real Collision Mitigation Strategy', marks: 3, guide: 'Train policy in physics simulator (MuJoCo/PyBullet) using Domain Randomization (varying friction, lighting, mass, conveyor speeds); transfer via digital twin with hardware safety bounding boxes enforcing zero-collision operational envelopes.' }
      ]
    },
    {
      id: 'gen-d-02',
      level: 'D',
      levelName: 'Level D — Integrated System Design',
      course: 'IRS',
      topic: 'Cognitive Architectures & Frame Systems',
      title: 'EyeCoach Workplace Care Frame-Based System Schema with Active Daemons (IRS Q1c)',
      scenario: 'The EyeCoach workplace system monitors employee computer posture and visual habits using an RGB camera. When screen distance drops below 50 cm, it must trigger posture advice. It also tracks the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds).',
      question: 'Design a Frame-Based Knowledge Representation schema: (1) Define the business frames with inheritance; (2) Specify slots and facets; (3) Attach procedural active daemons (if-needed and if-added) with exact operational logic.',
      rubric: [
        { criteria: 'Frame Taxonomy & Inheritance Hierarchy', marks: 3, guide: 'Root frame "Entity" -> "WorkstationComponent" & "Employee". Employee frames inherit from generic User; Display and Camera inherit from Hardware.' },
        { criteria: 'Slots, Facets & Qualitative Attributes', marks: 3, guide: 'Employee frame: employee_id, current_distance_cm, session_duration_min, break_status. Facets: default values, valid ranges (distance >= 0).' },
        { criteria: 'Active Daemons Specification', marks: 4, guide: '(i) if-needed daemon attached to current_distance_cm: executes optical calculation from face bounding-box radius (Distance = FocalLength * KnownWidth / PixelWidth) when queried. (ii) if-added daemon attached to session_duration_min: fires when counter hits 20 min to trigger 20-20-20 break notification.' }
      ]
    }
  ],

  render: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="exam-generator-container">
        <!-- Control Header -->
        <div class="lesson-card mb-4" style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.1), rgba(99, 102, 241, 0.1)); border-left: 4px solid var(--accent-primary);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <span class="badge-tech" style="background: var(--accent-primary); color: white; margin-bottom: 6px;">
                <i data-lucide="cpu"></i> Adaptive Exam Generator
              </span>
              <h3 style="margin: 0; color: var(--text-primary);">🎯 NUS-ISS 4-Tier Examination Question Simulator</h3>
              <p style="margin: 6px 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">
                Select examination tiers from conceptual recognition to full multi-component architectural design.
              </p>
            </div>
            
            <!-- Filters -->
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <select id="gen-filter-course" class="btn btn-sm btn-outline" onchange="ExamGenerator.filterQuestions()" style="background: var(--bg-card); color: var(--text-primary); border-color: var(--border-color);">
                <option value="ALL">All Subjects (PRS + IRS)</option>
                <option value="PRS">ISY5002 — PRS Only</option>
                <option value="IRS">ISY5001 — IRS Only</option>
              </select>

              <select id="gen-filter-level" class="btn btn-sm btn-outline" onchange="ExamGenerator.filterQuestions()" style="background: var(--bg-card); color: var(--text-primary); border-color: var(--border-color);">
                <option value="ALL">All Tiers (Levels A–D)</option>
                <option value="A">Level A — Concept Recognition</option>
                <option value="B">Level B — Mathematical Calculation</option>
                <option value="C">Level C — Scenario Application</option>
                <option value="D">Level D — Integrated System Design</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Questions List Mount -->
        <div id="gen-questions-list">
          ${this.renderQuestionsList(this.questions)}
        </div>
      </div>
    `;

    container.innerHTML = html;
    if (window.renderLatex) window.renderLatex(container);
    if (window.lucide) window.lucide.createIcons();
  },

  filterQuestions: function() {
    const course = document.getElementById('gen-filter-course')?.value || 'ALL';
    const level = document.getElementById('gen-filter-level')?.value || 'ALL';

    const filtered = this.questions.filter(q => {
      const matchCourse = course === 'ALL' || q.course === course;
      const matchLevel = level === 'ALL' || q.level === level;
      return matchCourse && matchLevel;
    });

    const listMount = document.getElementById('gen-questions-list');
    if (listMount) {
      listMount.innerHTML = this.renderQuestionsList(filtered);
      if (window.renderLatex) window.renderLatex(listMount);
      if (window.lucide) window.lucide.createIcons();
    }
  },

  renderQuestionsList: function(questions) {
    if (questions.length === 0) {
      return `<div class="lesson-card p-4 text-center text-muted">No questions found matching your filter selection.</div>`;
    }

    return questions.map((q, idx) => {
      if (q.level === 'A') return this.renderLevelACard(q, idx);
      if (q.level === 'B') return this.renderLevelBCard(q, idx);
      if (q.level === 'C' || q.level === 'D') return this.renderRubricCard(q, idx);
      return '';
    }).join('');
  },

  renderLevelACard: function(q, idx) {
    return `
      <div class="lesson-card mb-4 p-4" id="card-${q.id}" style="background: var(--bg-card); border-radius: 10px; border-left: 4px solid #38bdf8;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge-tech" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; font-size: 0.75rem;">${q.levelName}</span>
            <span class="badge-outline" style="font-size: 0.75rem; margin-left: 6px;">${q.course} • ${q.topic}</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Question ${idx + 1}</span>
        </div>

        <h4 style="margin: 0 0 10px 0; color: var(--text-primary);">${q.title}</h4>
        <p style="font-size: 0.92rem; color: var(--text-primary); line-height: 1.6;">${q.question}</p>

        <div class="quiz-options-list mt-3">
          ${q.options.map((opt, optIdx) => `
            <button class="quiz-option" id="btn-${q.id}-${optIdx}" onclick="ExamGenerator.checkLevelA('${q.id}', ${optIdx}, ${q.correctIndex})" style="text-align: left; width: 100%; display: block; margin-bottom: 8px;">
              <span class="opt-letter">${String.fromCharCode(65 + optIdx)}</span> ${opt}
            </button>
          `).join('')}
        </div>

        <div id="feedback-${q.id}" class="mt-3" style="display: none;"></div>
      </div>
    `;
  },

  checkLevelA: function(qId, selectedIdx, correctIdx) {
    const q = this.questions.find(item => item.id === qId);
    const feedbackEl = document.getElementById(`feedback-${qId}`);
    if (!feedbackEl || !q) return;

    const isCorrect = selectedIdx === correctIdx;

    q.options.forEach((_, idx) => {
      const btn = document.getElementById(`btn-${qId}-${idx}`);
      if (btn) {
        btn.disabled = true;
        if (idx === correctIdx) {
          btn.style.borderColor = '#10b981';
          btn.style.background = 'rgba(16, 185, 129, 0.15)';
        } else if (idx === selectedIdx && !isCorrect) {
          btn.style.borderColor = '#ef4444';
          btn.style.background = 'rgba(239, 68, 68, 0.15)';
        }
      }
    });

    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
      <div style="padding: 12px; border-radius: 8px; background: ${isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left: 4px solid ${isCorrect ? '#10b981' : '#ef4444'}; font-size: 0.9rem;">
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
        <p style="margin: 6px 0 0 0; color: var(--text-primary);">${q.explanation}</p>
        ${!isCorrect ? `
          <button class="btn btn-sm btn-outline mt-2" onclick="ExamGenerator.logToMistakes('${q.id}', '${q.options[selectedIdx].replace(/'/g, "\\'")}', '${q.options[correctIdx].replace(/'/g, "\\'")}', '${q.explanation.replace(/'/g, "\\'")}')">
            <i data-lucide="bookmark-plus"></i> Add to Mistake Log
          </button>
        ` : ''}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  },

  renderLevelBCard: function(q, idx) {
    return `
      <div class="lesson-card mb-4 p-4" id="card-${q.id}" style="background: var(--bg-card); border-radius: 10px; border-left: 4px solid #f59e0b;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge-tech" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-size: 0.75rem;">${q.levelName}</span>
            <span class="badge-outline" style="font-size: 0.75rem; margin-left: 6px;">${q.course} • ${q.topic}</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Deterministic Numeric Check</span>
        </div>

        <h4 style="margin: 0 0 10px 0; color: var(--text-primary);">${q.title}</h4>
        
        <div class="p-3 mb-3" style="background: var(--bg-secondary); border-radius: 6px; font-size: 0.9rem; line-height: 1.6;">
          ${q.scenario}
        </div>

        <p style="font-weight: 600; color: var(--text-primary); font-size: 0.92rem;">${q.question}</p>

        <!-- Input Row -->
        <div style="display: flex; gap: 10px; align-items: center; margin-top: 14px; flex-wrap: wrap;">
          <input type="number" step="any" id="input-${q.id}" placeholder="Enter numerical value..." style="padding: 8px 12px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-family: var(--font-mono); font-size: 0.95rem; width: 220px;">
          <span style="color: var(--text-secondary); font-size: 0.9rem;">${q.unit}</span>
          <button class="btn btn-primary btn-sm" onclick="ExamGenerator.checkLevelB('${q.id}')">
            Submit & Verify
          </button>
          <button class="btn btn-outline btn-sm" onclick="ExamGenerator.toggleSolution('${q.id}')">
            Show Solution
          </button>
        </div>

        <div id="feedback-${q.id}" class="mt-3" style="display: none;"></div>
        <div id="solution-${q.id}" class="mt-3 p-3" style="display: none; background: rgba(56, 189, 248, 0.08); border-radius: 8px; border-left: 3px solid var(--accent-cyan); font-size: 0.88rem;">
          <h5 style="margin: 0 0 8px 0; color: var(--accent-cyan);">Verified Step-by-Step Proof</h5>
          ${q.solutionSteps}
          <div style="margin-top: 8px; color: #f87171; font-size: 0.82rem;"><strong>Common Trap:</strong> ${q.commonTrap}</div>
        </div>
      </div>
    `;
  },

  checkLevelB: function(qId) {
    const q = this.questions.find(item => item.id === qId);
    const inputEl = document.getElementById(`input-${qId}`);
    const feedbackEl = document.getElementById(`feedback-${qId}`);
    if (!q || !inputEl || !feedbackEl) return;

    const userVal = parseFloat(inputEl.value);
    if (isNaN(userVal)) {
      alert('Please enter a valid number.');
      return;
    }

    const diff = Math.abs(userVal - q.expectedAnswer);
    const isCorrect = diff <= (q.tolerance || 0.001);

    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
      <div style="padding: 12px; border-radius: 8px; background: ${isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border-left: 4px solid ${isCorrect ? '#10b981' : '#ef4444'}; font-size: 0.9rem;">
        <strong>${isCorrect ? '✓ Exact Mathematical Match!' : '✗ Numerical Discrepancy'}</strong>
        <p style="margin: 4px 0 0 0;">Your answer: <code>${userVal}</code> | Expected: <code>${q.expectedAnswer} ${q.unit}</code> (Tolerance: ±${q.tolerance})</p>
        ${!isCorrect ? `
          <button class="btn btn-sm btn-outline mt-2" onclick="ExamGenerator.logToMistakes('${q.id}', '${userVal}', '${q.expectedAnswer} ${q.unit}', '${q.commonTrap.replace(/'/g, "\\'")}')">
            <i data-lucide="bookmark-plus"></i> Log Calculation Error to Mistake Ledger
          </button>
        ` : ''}
      </div>
    `;

    // Also reveal full solution
    document.getElementById(`solution-${qId}`).style.display = 'block';
    if (window.renderLatex) window.renderLatex(document.getElementById(`solution-${qId}`));
    if (window.lucide) window.lucide.createIcons();
  },

  toggleSolution: function(qId) {
    const sol = document.getElementById(`solution-${qId}`);
    if (sol) {
      sol.style.display = sol.style.display === 'none' ? 'block' : 'none';
      if (sol.style.display === 'block' && window.renderLatex) {
        window.renderLatex(sol);
      }
    }
  },

  renderRubricCard: function(q, idx) {
    const isLevelD = q.level === 'D';
    const borderColor = isLevelD ? '#a855f7' : '#ec4899';
    const badgeColor = isLevelD ? 'rgba(168, 85, 247, 0.15)' : 'rgba(236, 72, 153, 0.15)';
    const textColor = isLevelD ? '#c084fc' : '#f472b6';

    const totalMarks = q.rubric ? q.rubric.reduce((acc, r) => acc + r.marks, 0) : 10;

    return `
      <div class="lesson-card mb-4 p-4" id="card-${q.id}" style="background: var(--bg-card); border-radius: 10px; border-left: 4px solid ${borderColor};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span class="badge-tech" style="background: ${badgeColor}; color: ${textColor}; font-size: 0.75rem;">${q.levelName}</span>
            <span class="badge-outline" style="font-size: 0.75rem; margin-left: 6px;">${q.course} • ${q.topic}</span>
          </div>
          <span class="badge-tech" style="font-size: 0.8rem; background: rgba(245, 158, 11, 0.15); color: #f59e0b;">Total: [${totalMarks} Marks]</span>
        </div>

        <h4 style="margin: 0 0 10px 0; color: var(--text-primary);">${q.title}</h4>

        <div class="p-3 mb-3" style="background: var(--bg-secondary); border-radius: 6px; font-size: 0.9rem; line-height: 1.6;">
          ${q.scenario}
        </div>

        <p style="font-weight: 600; color: var(--text-primary); font-size: 0.92rem; margin-bottom: 12px;">${q.question}</p>

        <!-- User Answer Draft Area -->
        <textarea id="draft-${q.id}" rows="4" placeholder="Draft your exam response here (key points, justification, formulas)..." style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-primary); font-family: var(--font-sans); font-size: 0.88rem; margin-bottom: 12px;"></textarea>

        <div style="display: flex; gap: 10px;">
          <button class="btn btn-primary btn-sm" onclick="ExamGenerator.toggleRubric('${q.id}')">
            Evaluate Against Official NUS-ISS Rubric
          </button>
        </div>

        <div id="rubric-${q.id}" class="mt-3" style="display: none;">
          <div class="lesson-card p-3" style="background: var(--bg-secondary); border-radius: 8px; border: 1px solid var(--border-color);">
            <h5 style="margin: 0 0 10px 0; color: var(--accent-cyan);"><i data-lucide="check-square"></i> Examiner Marking Rubric & Benchmark Solution</h5>
            
            <div class="rubric-items-list">
              ${q.rubric.map((r, rIdx) => `
                <div style="border-bottom: 1px dashed var(--border-color); padding: 8px 0;">
                  <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 0.88rem; color: var(--text-primary);">
                    <span>${rIdx + 1}. ${r.criteria}</span>
                    <span style="color: #f59e0b;">[${r.marks} Marks]</span>
                  </div>
                  <p style="margin: 4px 0 0 0; font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">${r.guide}</p>
                </div>
              `).join('')}
            </div>

            <div class="mt-3 text-right">
              <button class="btn btn-sm btn-outline" style="color: #f43f5e;" onclick="ExamGenerator.logSubjectiveMistake('${q.id}', '${q.title.replace(/'/g, "\\'")}')">
                <i data-lucide="bookmark-plus"></i> Flag Incomplete / Log Weakness
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  toggleRubric: function(qId) {
    const rEl = document.getElementById(`rubric-${qId}`);
    if (rEl) {
      rEl.style.display = rEl.style.display === 'none' ? 'block' : 'none';
      if (rEl.style.display === 'block' && window.renderLatex) {
        window.renderLatex(rEl);
      }
    }
  },

  logToMistakes: function(qId, myAns, correctAns, explanation) {
    const q = this.questions.find(item => item.id === qId);
    if (!q || !window.MasteryTracker) return;

    window.MasteryTracker.logMistake({
      topic: q.topic,
      exam: q.course,
      question: q.title,
      myAnswer: myAns,
      correctAnswer: correctAns,
      errorType: q.levelName,
      explanation: explanation
    });

    alert('Mistake saved to your targeted revision queue!');
  },

  logSubjectiveMistake: function(qId, title) {
    const q = this.questions.find(item => item.id === qId);
    const draftText = document.getElementById(`draft-${qId}`)?.value || 'Draft missed core rubric criteria';
    if (!q || !window.MasteryTracker) return;

    window.MasteryTracker.logMistake({
      topic: q.topic,
      exam: q.course,
      question: title,
      myAnswer: draftText,
      correctAnswer: q.rubric.map(r => r.criteria).join('; '),
      errorType: 'Incomplete Scenario Rubric Coverage',
      explanation: 'Review the detailed marking guide for this scenario to ensure all required justification steps, formulas, and trade-offs are articulated under exam conditions.'
    });

    alert('Scenario flagged and logged into your targeted revision queue!');
  }
};
'''

with open('learning_platform/core/exam-generator.js', 'w') as f:
    f.write(code)

print("Created core/exam-generator.js successfully.")
