// Interactive Quiz Engine for NUS ISS Learning Hub

window.QuizEngine = {
  state: {
    currentQuizzes: [],
    answers: {}, // questionId -> selectedIndex
    submitted: {}, // questionId -> boolean
    score: 0
  },

  getCorrectIndex: function(q) {
    return typeof q.correct === 'number' ? q.correct : q.correctIndex;
  },

  render: function(containerId, quizzes) {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.state.currentQuizzes = Array.isArray(quizzes) ? quizzes : [];

    if (this.state.currentQuizzes.length === 0) {
      container.innerHTML = `<div class="info-alert">No quizzes available for this module yet.</div>`;
      return;
    }

    let html = `
      <div class="quiz-header-card mb-4">
        <div class="quiz-header-info">
          <h3><i data-lucide="award"></i> Exam & Lecture Slide Mastery Quizzes</h3>
          <p class="text-secondary">Test your algorithmic step-by-step mastery and mathematical precision with exam-grade questions.</p>
        </div>
        <div class="quiz-scoreboard">
          <div class="score-number"><span id="quiz-score-num">0</span> / ${this.state.currentQuizzes.length}</div>
          <div class="score-label">Score</div>
        </div>
      </div>
      <div class="quizzes-list">
    `;

    this.state.currentQuizzes.forEach((q, idx) => {
      const selected = this.state.answers[q.id];
      const isSubmitted = Boolean(this.state.submitted[q.id]);
      const correctIdx = this.getCorrectIndex(q);
      const isCorrect = selected === correctIdx;

      html += `
        <div class="quiz-card mb-4" id="quiz-card-${q.id}">
          <div class="quiz-meta-row">
            <span class="quiz-badge">${q.module || 'NUS ISS Exam Prep'}</span>
            <span class="quiz-ref"><i data-lucide="bookmark"></i> Source: ${q.slideRef || 'Official Syllabus'}</span>
          </div>
          <h4 class="quiz-question-title mt-2">Question ${idx + 1}: ${q.question}</h4>
          
          <div class="quiz-options-list mt-3">
            ${q.options.map((opt, optIdx) => {
              let cls = 'quiz-option';
              if (isSubmitted) {
                if (optIdx === correctIdx) cls += ' opt-correct';
                else if (optIdx === selected && !isCorrect) cls += ' opt-wrong';
              }
              return `
                <label class="${cls}" id="opt-label-${q.id}-${optIdx}">
                  <input type="radio" name="quiz-${q.id}" value="${optIdx}" ${selected === optIdx ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''} onchange="QuizEngine.selectOption('${q.id}', ${optIdx})">
                  <span class="opt-indicator">${String.fromCharCode(65 + optIdx)}</span>
                  <span class="opt-text">${opt}</span>
                </label>
              `;
            }).join('')}
          </div>

          <div class="quiz-action-bar mt-3">
            <button class="btn btn-primary btn-sm" id="btn-submit-${q.id}" ${isSubmitted ? 'disabled' : ''} onclick="QuizEngine.submitAnswer('${q.id}')">
              <i data-lucide="check-circle"></i> Check Answer
            </button>
            <button class="btn btn-outline btn-sm" onclick="QuizEngine.toggleHint('${q.id}')">
              <i data-lucide="help-circle"></i> Step-by-Step Hint
            </button>
          </div>

          <div class="quiz-hint-box mt-2" id="hint-${q.id}" style="display: none;">
            <i data-lucide="lightbulb"></i> <span>${q.hint || 'Apply the core formula and check boundary conditions.'}</span>
          </div>

          <div class="quiz-feedback-box ${isSubmitted ? (isCorrect ? 'success-box' : 'danger-box') : ''} mt-3" id="feedback-${q.id}" style="display: ${isSubmitted ? 'block' : 'none'};">
            ${isSubmitted ? `
              <div class="feedback-header"><i data-lucide="${isCorrect ? 'check-circle-2' : 'x-circle'}"></i> ${isCorrect ? 'Correct!' : 'Review Step-by-Step Solution:'}</div>
              <p>${q.explanation}</p>
            ` : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    this.recalculateScore();

    // Automatically append Post-Quiz Exam-Style Questions & Q&A Doubt Assistant!
    let examQuestions = window.CURRENT_EXAM_QUESTIONS;
    if (!examQuestions || examQuestions.length === 0) {
      if (window.app?.currentDayId === 'day-1-classical-ml') {
        examQuestions = window.DAY1_EXAM_QUESTIONS;
      } else if (window.app?.currentDayId === 'day-2-signals-deeplearning') {
        examQuestions = window.DAY2_EXAM_QUESTIONS;
      } else if (window.app?.currentDayId === 'day-3-reasoning-integration') {
        examQuestions = window.DAY3_EXAM_QUESTIONS;
      }
    }

    if (window.ExamQuestionsEngine && examQuestions && examQuestions.length > 0) {
      window.ExamQuestionsEngine.render(containerId, examQuestions);
    }

    if (window.QAAssistant && typeof window.QAAssistant.renderInline === 'function') {
      window.QAAssistant.renderInline(containerId);
    }

    if (typeof window.renderLatex === 'function') {
      window.renderLatex(container);
    }

    if (window.lucide) window.lucide.createIcons();
  },

  selectOption: function(qid, optIdx) {
    this.state.answers[qid] = optIdx;
  },

  toggleHint: function(qid) {
    const hint = document.getElementById(`hint-${qid}`);
    if (hint) {
      const show = hint.style.display === 'none';
      hint.style.display = show ? 'flex' : 'none';
      if (show && typeof window.renderLatex === 'function') {
        window.renderLatex(hint);
      }
    }
  },

  submitAnswer: function(qid) {
    const q = this.state.currentQuizzes.find(item => item.id === qid);
    if (!q) return;

    const selected = this.state.answers[qid];
    if (selected === undefined) {
      alert("Please select an option before checking your answer!");
      return;
    }

    this.state.submitted[qid] = true;
    const correctIdx = this.getCorrectIndex(q);
    const isCorrect = selected === correctIdx;
    const feedbackBox = document.getElementById(`feedback-${qid}`);
    const submitBtn = document.getElementById(`btn-submit-${qid}`);

    if (submitBtn) submitBtn.disabled = true;

    // Highlight options
    q.options.forEach((_, idx) => {
      const optLabel = document.getElementById(`opt-label-${qid}-${idx}`);
      if (optLabel) {
        const input = optLabel.querySelector('input');
        if (input) input.disabled = true;
        if (idx === correctIdx) {
          optLabel.classList.add('opt-correct');
        } else if (idx === selected && !isCorrect) {
          optLabel.classList.add('opt-wrong');
        }
      }
    });

    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      if (isCorrect) {
        feedbackBox.className = 'quiz-feedback-box success-box mt-3';
        feedbackBox.innerHTML = `
          <div class="feedback-header"><i data-lucide="check-circle-2"></i> Correct!</div>
          <p>${q.explanation}</p>
        `;
      } else {
        feedbackBox.className = 'quiz-feedback-box danger-box mt-3';
        feedbackBox.innerHTML = `
          <div class="feedback-header"><i data-lucide="x-circle"></i> Review Step-by-Step Solution:</div>
          <p>${q.explanation}</p>
          <div class="mt-2">
            <button class="btn btn-sm btn-outline" onclick="QuizEngine.resetQuestion('${qid}')">
              <i data-lucide="rotate-ccw"></i> Retry Question
            </button>
          </div>
        `;

        // Automatically log mistake to MasteryTracker
        if (window.MasteryTracker && typeof window.MasteryTracker.logMistake === 'function') {
          window.MasteryTracker.logMistake({
            id: `err_quiz_${qid}_${Date.now()}`,
            topic: q.module || 'Lecture Slide Quiz',
            exam: window.app?.currentDayId?.includes('day-3') ? 'IRS' : 'PRS',
            question: q.question,
            myAnswer: q.options[selected],
            correctAnswer: q.options[correctIdx],
            errorType: 'Concept Recall Gap',
            explanation: q.explanation
          });
        }
      }
      if (typeof window.renderLatex === 'function') {
        window.renderLatex(feedbackBox);
      }
    }

    this.recalculateScore();
    if (window.lucide) window.lucide.createIcons();
  },

  resetQuestion: function(qid) {
    delete this.state.answers[qid];
    delete this.state.submitted[qid];

    const q = this.state.currentQuizzes.find(item => item.id === qid);
    if (!q) return;

    const submitBtn = document.getElementById(`btn-submit-${qid}`);
    if (submitBtn) submitBtn.disabled = false;

    q.options.forEach((_, idx) => {
      const optLabel = document.getElementById(`opt-label-${qid}-${idx}`);
      if (optLabel) {
        optLabel.classList.remove('opt-correct', 'opt-wrong');
        const input = optLabel.querySelector('input');
        if (input) {
          input.disabled = false;
          input.checked = false;
        }
      }
    });

    const feedbackBox = document.getElementById(`feedback-${qid}`);
    if (feedbackBox) {
      feedbackBox.style.display = 'none';
      feedbackBox.innerHTML = '';
    }

    this.recalculateScore();
    if (window.lucide) window.lucide.createIcons();
  },

  recalculateScore: function() {
    let score = 0;
    this.state.currentQuizzes.forEach(q => {
      if (this.state.submitted[q.id] && this.state.answers[q.id] === this.getCorrectIndex(q)) {
        score++;
      }
    });
    this.state.score = score;
    const scoreNum = document.getElementById('quiz-score-num');
    if (scoreNum) scoreNum.innerText = score;
  }
};
