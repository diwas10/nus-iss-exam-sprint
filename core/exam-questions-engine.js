// NUS ISS Exam-Style Questions Engine
// Provides authentic multi-part exam questions with marking rubrics, KaTeX math workouts, and examiner traps

window.ExamQuestionsEngine = {
  render: function(containerId, examQuestions) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const questions = Array.isArray(examQuestions) ? examQuestions : [];
    if (questions.length === 0) return;

    let html = `
      <div class="exam-questions-section mt-5" style="border-top: 2px dashed var(--border-color); padding-top: 30px;">
        <div class="exam-header-card mb-4" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.08), rgba(245, 158, 11, 0.08)); border-left: 4px solid #ef4444; border-radius: 10px; padding: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <div class="badge-tech" style="background: rgba(239, 68, 68, 0.2); color: #f87171; margin-bottom: 6px;">
                <i data-lucide="file-text" style="width: 14px; height: 14px; vertical-align: middle;"></i> NUS ISS Official Exam Format
              </div>
              <h3 style="margin: 0; color: var(--text-primary);">🎯 Post-Quiz Exam-Style Structured Questions</h3>
              <p style="margin: 6px 0 0 0; color: var(--text-secondary); font-size: 0.9rem;">
                Practice authentic scenario-based questions with explicit mark allocations, step-by-step mathematical proofs, and examiner marking rubrics.
              </p>
            </div>
            <div style="text-align: right;">
              <span class="badge-tech" style="font-size: 0.82rem; padding: 6px 12px;">
                ${questions.length} Scenario Questions
              </span>
            </div>
          </div>
        </div>

        <div class="exam-questions-list">
    `;

    questions.forEach((eq, qIdx) => {
      const qId = eq.id || `exam-q-${qIdx}`;
      const totalMarks = eq.totalMarks || (eq.subparts ? eq.subparts.reduce((acc, sp) => acc + (sp.marks || 0), 0) : 10);

      html += `
        <div class="lesson-card mb-4 exam-question-card" id="${qId}" style="border: 1px solid var(--border-color); border-radius: 12px; padding: 22px; background: var(--bg-card);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge-tech" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-weight: 700;">
                Exam Question ${qIdx + 1}
              </span>
              <span style="font-size: 0.8rem; color: var(--text-muted);"><i data-lucide="tag" style="width: 12px; height: 12px;"></i> ${eq.topic || 'NUS ISS Core Topic'}</span>
            </div>
            <span class="badge-outline" style="border-color: #f59e0b; color: #f59e0b; font-weight: 700; font-size: 0.82rem;">
              [Total: ${totalMarks} Marks]
            </span>
          </div>

          <h4 style="font-size: 1.15rem; color: var(--text-primary); margin-top: 0; line-height: 1.4;">${eq.title}</h4>
          
          <div class="exam-scenario-box p-3 mb-3" style="background: var(--bg-secondary); border-radius: 8px; border-left: 3px solid var(--accent-primary); font-size: 0.92rem; line-height: 1.6; color: var(--text-primary);">
            ${eq.scenario}
          </div>

          <div class="exam-subparts-list mb-3">
            ${(eq.subparts || []).map((sp, sIdx) => `
              <div class="exam-subpart-item mb-2" style="padding: 10px 14px; background: rgba(255,255,255,0.02); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
                  <div style="font-weight: 600; font-size: 0.92rem; color: var(--text-primary);">
                    <span style="color: var(--accent-primary); font-weight: 700;">(${String.fromCharCode(97 + sIdx)})</span> ${sp.prompt}
                  </div>
                  <span style="color: #f59e0b; font-weight: 600; font-size: 0.82rem; white-space: nowrap;">[${sp.marks} Marks]</span>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
            <button class="btn btn-primary btn-sm" onclick="ExamQuestionsEngine.toggleAnswer('${qId}')" id="btn-toggle-${qId}">
              <i data-lucide="eye"></i> Reveal Step-by-Step Model Solution
            </button>
            <button class="btn btn-outline btn-sm" onclick="ExamQuestionsEngine.toggleRubric('${qId}')">
              <i data-lucide="check-square"></i> Marking Scheme & Examiner Traps
            </button>
          </div>

          <!-- Collapsible Model Solution -->
          <div class="exam-solution-container mt-3" id="solution-${qId}" style="display: none; background: var(--bg-secondary); border: 1px solid #10b981; border-radius: 8px; padding: 18px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px dashed rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
              <span style="font-weight: 700; color: #10b981; font-size: 0.95rem;">
                <i data-lucide="award" style="width: 16px; height: 16px; vertical-align: middle;"></i> Model Solution (Official Standard)
              </span>
              <span style="font-size: 0.78rem; color: var(--text-muted);">Step-by-Step Mathematical Workout</span>
            </div>
            <div class="solution-content" style="font-size: 0.9rem; line-height: 1.65; color: var(--text-primary);">
              ${eq.solution}
            </div>
          </div>

          <!-- Collapsible Rubric & Traps -->
          <div class="exam-rubric-container mt-3" id="rubric-${qId}" style="display: none; background: rgba(245, 158, 11, 0.05); border: 1px solid #f59e0b; border-radius: 8px; padding: 16px;">
            <div style="font-weight: 700; color: #f59e0b; font-size: 0.92rem; margin-bottom: 8px;">
              <i data-lucide="check-circle" style="width: 16px; height: 16px; vertical-align: middle;"></i> Marking Rubric Allocation:
            </div>
            <ul style="margin: 0 0 12px 0; padding-left: 20px; font-size: 0.88rem; line-height: 1.55; color: var(--text-secondary);">
              ${(eq.rubric || []).map(r => `<li>${r}</li>`).join('')}
            </ul>

            ${eq.examinerTrap ? `
              <div style="background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; padding: 10px 14px; border-radius: 6px;">
                <strong style="color: #ef4444; font-size: 0.85rem;"><i data-lucide="alert-triangle" style="width: 14px; height: 14px; vertical-align: middle;"></i> Examiner Trap Alert:</strong>
                <p style="margin: 4px 0 0 0; font-size: 0.85rem; color: var(--text-primary); line-height: 1.45;">${eq.examinerTrap}</p>
              </div>
            ` : ''}

            <div class="self-checklist mt-3 pt-2" style="border-top: 1px dashed rgba(245, 158, 11, 0.3);">
              <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">Self-Assessment Check:</span>
              <div style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 6px; font-size: 0.82rem;">
                <label style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                  <input type="checkbox"> Stated correct formula & properties
                </label>
                <label style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                  <input type="checkbox"> Numerical derivation 100% accurate
                </label>
                <label style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                  <input type="checkbox"> Avoided examiner pitfalls
                </label>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', html);

    if (window.lucide) window.lucide.createIcons();
    if (typeof window.renderLatex === 'function') {
      window.renderLatex(container);
    }
  },

  toggleAnswer: function(qId) {
    const el = document.getElementById(`solution-${qId}`);
    const btn = document.getElementById(`btn-toggle-${qId}`);
    if (!el) return;
    const isHidden = el.style.display === 'none';
    el.style.display = isHidden ? 'block' : 'none';
    if (btn) {
      btn.innerHTML = isHidden 
        ? `<i data-lucide="eye-off"></i> Hide Model Solution`
        : `<i data-lucide="eye"></i> Reveal Step-by-Step Model Solution`;
      if (window.lucide) window.lucide.createIcons();
    }
    if (isHidden && typeof window.renderLatex === 'function') {
      window.renderLatex(el);
    }
  },

  toggleRubric: function(qId) {
    const el = document.getElementById(`rubric-${qId}`);
    if (!el) return;
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
    if (typeof window.renderLatex === 'function') {
      window.renderLatex(el);
    }
  }
};
