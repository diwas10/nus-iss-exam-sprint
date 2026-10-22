import os
import json

def make_stage_html(mod_num, title, diagnostic_data, intuitive_html, vis_html, math_html, practice_html, exam_html, summary_html):
    d_q1 = diagnostic_data["q1"]
    d_q2 = diagnostic_data["q2"]
    
    html = f'''
      <div class="lesson-module-container" id="mod-{mod_num}">
        <!-- STAGE 1: DIAGNOSTIC -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="badge-tech" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">
              Stage 1: Diagnostic (Prior Knowledge Check)
            </span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">2-Minute Diagnostic</span>
          </div>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">
            Test your current understanding. If you answer both correctly, take the accelerated revision path!
          </p>
          
          <div class="grid-2-col" style="gap: 12px;">
            <div id="diag-mount-mod-{mod_num}-q1"></div>
            <div id="diag-mount-mod-{mod_num}-q2"></div>
          </div>
        </div>

        <!-- STAGE 2: INTUITIVE EXPLANATION -->
        <div class="lesson-card mb-4">
          <div class="badge-tech mb-2" style="background: rgba(56, 189, 248, 0.15); color: #38bdf8;">
            Stage 2: Intuitive Mental Model
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Why {title} Exists & What It Solves</h3>
          {intuitive_html}
        </div>

        <!-- STAGE 3: INTERACTIVE VISUALIZATION -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border-left: 4px solid var(--accent-primary);">
          <div class="badge-tech mb-2" style="background: var(--accent-primary); color: white;">
            Stage 3: Interactive Visual Studio
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Manipulate & Observe Live State</h3>
          {vis_html}
        </div>

        <!-- STAGE 4: MATHEMATICAL FOUNDATIONS -->
        <div class="lesson-card mb-4">
          <div class="badge-tech mb-2" style="background: rgba(168, 85, 247, 0.15); color: #c084fc;">
            Stage 4: Mathematical Foundations & Solved Example
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Rigorous Formulations & Step-by-Step Proof</h3>
          {math_html}
        </div>

        <!-- STAGE 5: INDEPENDENT PRACTICE -->
        <div class="lesson-card mb-4" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.04);">
          <div class="badge-tech mb-2" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">
            Stage 5: Independent Practice
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Solve Without Looking</h3>
          <div id="prac-mount-mod-{mod_num}"></div>
        </div>

        <!-- STAGE 6: EXAM APPLICATION -->
        <div class="lesson-card mb-4" style="background: var(--bg-card); border: 1px solid var(--border-color);">
          <div class="badge-tech mb-2" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">
            Stage 6: Exam Application & Model Answer
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">How NUS-ISS Tests This in Open-Book Exams</h3>
          {exam_html}
        </div>

        <!-- STAGE 7: REVISION SUMMARY -->
        <div class="lesson-card mb-4" style="background: var(--bg-secondary); border-radius: 8px;">
          <div class="badge-tech mb-2" style="background: var(--text-muted); color: white;">
            Stage 7: Rapid Revision Summary
          </div>
          <h3 style="margin-top: 4px; color: var(--text-primary);">Key Takeaways, Traps & Comparisons</h3>
          {summary_html}
        </div>
      </div>
    '''
    return html

modules = []

# Mod 1: Reasoning Foundations
modules.append({
    "id": "mod-1", "num": 1,
    "title": "Reasoning Foundations: Deductive, Inductive, Abductive & System 1/2",
    "subtitle": "Truth Preservation, Statistical Generalization, Most Plausible Cause & Cognitive Duality",
    "badge": "IRS (CS Day 1AM)",
    "diag": {
        "q1": {"q": "Which type of reasoning guarantees that if premises are true, the conclusion MUST be true?", "options": "A: Inductive. B: Deductive (truth-preserving).", "feedback": "Correct! Deductive logic preserves truth deterministically."},
        "q2": {"q": "What is Abductive reasoning?", "options": "A: Training an autoencoder. B: Inferring the most likely cause or explanation given an observed symptom or effect.", "feedback": "Correct! Medical diagnosis is primarily abductive reasoning."}
    },
    "intuitive": """
      <p class="lead-text">Human intelligence does not merely fit curves to data; it reasons over rules, concepts, causes, and consequences.</p>
      <p>Kahneman's <strong>System 1</strong> is fast, perceptual, parallel, and intuitive (the domain of Deep Learning and PRS). <strong>System 2</strong> is slow, deliberative, sequential, and logical (the domain of Knowledge Engineering, Rules, and IRS). Intelligent systems reach true mastery by integrating both.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">The 4 Types of Reasoning</h4>
        <div class="grid-4-col" style="gap:8px; font-size:0.82rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">Deductive</strong><br>General $\\to$ Specific.<br>100% Guaranteed.
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Inductive</strong><br>Specific $\\to$ General.<br>Probabilistic (ML).
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #f59e0b;">
            <strong style="color:#f59e0b;">Abductive</strong><br>Effect $\\to$ Best Cause.<br>Medical Diagnosis.
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #ec4899;">
            <strong style="color:#ec4899;">Analogical</strong><br>Source $\\to$ Target.<br>Case-Based Reasoning.
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Formal Logic Syllogisms:</strong></p>
      $$\\text{Modus Ponens: } A, \\; A \\to B \\implies B \\quad (\\text{Deductive})$$
      $$\\text{Abduction: } B, \\; A \\to B \\implies A \\text{ (plausible hypothesis)}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A doctor observes patient eye redness and knows Dry Eye Syndrome causes eye redness. She diagnoses Dry Eye. What type of reasoning was used?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('Abductive reasoning: Reasoning backward from effect (redness) to the most plausible explanation (dry eye).')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Exam Application:</strong> Distinguish clearly between knowledge-driven symbolic deduction (audit trails, deterministic safety) and data-driven induction (statistical noise tolerance). In healthcare, high-stakes decisions require deductive audit trails.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>System 1:</strong> Neural pattern recognition; fast; black-box.</li>
          <li><strong>System 2:</strong> Symbolic reasoning; deliberative; transparent.</li>
        </ul>
      </div>
    """
})

# Mod 2: Knowledge Representation & Frame Daemons
modules.append({
    "id": "mod-2", "num": 2,
    "title": "Knowledge Representation, Frame Systems & Active Daemons (IRS Q1c)",
    "subtitle": "Frames, Slots, Facets, Inheritance Trees, Active Procedural Daemons (if-needed & if-added)",
    "badge": "IRS (CS Day 2)",
    "diag": {
        "q1": {"q": "What is an if-needed daemon in a Frame-based system (IRS Q1c)?", "options": "A: A virus scanner. B: A procedural attachment that executes lazily when a slot value is requested but currently empty, computing it dynamically.", "feedback": "Correct! if-needed computes values on demand (e.g. camera face distance)."},
        "q2": {"q": "What is an if-added daemon in a Frame-based system?", "options": "A: Creates new frames. B: A trigger that executes whenever a slot value is updated or written, checking constraints or triggering alerts.", "feedback": "Correct! if-added fires on value modification (e.g. 20-min break alerts)."}
    },
    "intuitive": """
      <p class="lead-text">Rule bases alone can become messy and unstructured. <strong>Frame-based systems</strong> (invented by Marvin Minsky) organize knowledge into object-oriented hierarchies of concepts, slots (attributes), and facets (metadata).</p>
      <p>Crucially, frames support <strong>Active Procedural Daemons</strong>: code attachments that wake up when slots are accessed. In <strong>IRS Question 1c (EyeCoach)</strong>, when an employee's screen distance is queried, an <code>if-needed</code> daemon calculates distance from the camera face radius. When work time increments, an <code>if-added</code> daemon triggers break reminders!</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">EyeCoach Frame Schema Blueprint (IRS Q1c)</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">Frame: Employee (inherits from Person)</strong>
            <ul style="margin:4px 0 0 16px; color:var(--text-secondary);">
              <li><code>employee_id</code>: string</li>
              <li><code>distance_cm</code>: [if-needed: <code>calc_distance()</code>]</li>
              <li><code>work_minutes</code>: [if-added: <code>check_break()</code>]</li>
            </ul>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Frame: Workstation (inherits from Asset)</strong>
            <ul style="margin:4px 0 0 16px; color:var(--text-secondary);">
              <li><code>display_size_in</code>: float (default: 24.0)</li>
              <li><code>camera_focal_len</code>: integer (default: 600)</li>
            </ul>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>if-needed Camera Distance Calculation Formula (IRS Q1c):</strong></p>
      $$\\text{Distance } D = \\frac{f \\cdot W}{P}$$
      <p>where $f$ is camera focal length in pixels, $W$ is known human face width (~16 cm), and $P$ is measured face bounding box width in pixels.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> If focal length is $f = 500\\text{ px}$, known face width is $W = 16\\text{ cm}$, and detected face width is $P = 200\\text{ px}$. Calculate distance $D$ computed by the if-needed daemon.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d3m2-ans" placeholder="Distance cm..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d3m2-ans').value); if(Math.abs(v - 40.0) < 0.5) alert('Correct! (500 * 16)/200 = 8000 / 200 = 40.0 cm.'); else alert('Incorrect. (500 * 16)/200 = 40.0 cm.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Sample Paper Q1c Marking Rubric:</strong> (1) Define class taxonomy with clear inheritance from root Entity; (2) Specify relevant business slots and default facet values; (3) Specify <code>if-needed</code> daemon for lazy distance computation; (4) Specify <code>if-added</code> daemon for 20-20-20 rule break triggers.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Frames:</strong> Objects/classes with slot attributes and facets.</li>
          <li><strong>if-needed:</strong> Lazy execution when slot value requested.</li>
          <li><strong>if-added:</strong> Triggered execution when slot value written.</li>
        </ul>
      </div>
    """
})

# Mod 3: Expert Systems & CBR
modules.append({
    "id": "mod-3", "num": 3,
    "title": "Expert Systems & Case-Based Reasoning (CBR)",
    "subtitle": "Working Memory, Production Memory, Match-Resolve-Act, Forward/Backward Chaining & CBR 4R Lifecycle",
    "badge": "IRS (RS Day 1 & 4)",
    "diag": {
        "q1": {"q": "What is Forward Chaining in rule-based systems?", "options": "A: Goal-driven verification. B: Data-driven inference: starts from known facts in working memory, matches rule antecedents, and derives new facts.", "feedback": "Correct! Forward chaining drives triage and monitoring."},
        "q2": {"q": "What are the 4 stages of the Case-Based Reasoning (CBR) lifecycle?", "options": "A: Map, Reduce, Filter, Sort. B: Retrieve, Reuse, Revise, Retain.", "feedback": "Correct! The 4Rs of CBR."}
    },
    "intuitive": """
      <p class="lead-text">Expert systems represent human expertise through explicit IF-THEN production rules. An <strong>Inference Engine</strong> runs a continuous Match-Resolve-Act cycle, resolving rule conflicts via specificity, recency, or priority.</p>
      <p>When formalizing rules is too difficult because domain knowledge exists as historical precedent (e.g. legal rulings, unusual clinical cases), <strong>Case-Based Reasoning (CBR)</strong> solves new problems by retrieving and adapting past stored cases.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">The CBR 4R Lifecycle Studio</h4>
        <div class="grid-4-col" style="gap:8px; font-size:0.82rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center; border-left:3px solid #38bdf8;">
            <strong>1. RETRIEVE</strong><br>k-NN similarity on case library
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center; border-left:3px solid #10b981;">
            <strong>2. REUSE</strong><br>Map solution to current context
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center; border-left:3px solid #f59e0b;">
            <strong>3. REVISE</strong><br>Test & repair proposed fix
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; text-align:center; border-left:3px solid #ec4899;">
            <strong>4. RETAIN</strong><br>Store verified new case in memory
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Weighted Nearest-Neighbor Case Retrieval:</strong></p>
      $$\\text{Similarity}(C_{\\text{new}}, C_{\\text{old}}) = \\frac{\\sum_{i=1}^M w_i \\cdot \\text{sim}_i(f_{\\text{new}, i}, f_{\\text{old}, i})}{\\sum_{i=1}^M w_i}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> An emergency triage system receives vital signs and symptom facts. It checks rules to determine if patient should go to Resuscitation vs General ward. What chaining direction is used?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('Forward Chaining (Data-Driven): Starts with patient vital facts and matches antecedents to reach triage decision.')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Rule Engine vs CBR Selection:</strong> If domain has strict regulatory or legal standards (e.g. hospital triage protocol) $\\implies$ <strong>Rule Engine</strong>. If domain is experiential with no formal axioms (e.g. architectural design, rare disease diagnosis) $\\implies$ <strong>CBR</strong>.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Forward Chaining:</strong> Facts $\\to$ Conclusions (Triage, Monitoring).</li>
          <li><strong>Backward Chaining:</strong> Goal hypothesis $\\to$ Subgoals (Troubleshooting, Verification).</li>
          <li><strong>CBR 4Rs:</strong> Retrieve, Reuse, Revise, Retain.</li>
        </ul>
      </div>
    """
})

# Mod 4: Uncertainty (MYCIN & Fuzzy)
modules.append({
    "id": "mod-4", "num": 4,
    "title": "Uncertainty Modeling: MYCIN Certainty Factors & Fuzzy Mamdani Inference",
    "subtitle": "Measure of Belief, Evidence Combination, Fuzzy Sets, Membership Functions & Centroid Defuzzification",
    "badge": "IRS (RS Day 1 & 4)",
    "diag": {
        "q1": {"q": "What is the range of MYCIN Certainty Factors (CF)?", "options": "A: [0, 1]. B: [-1, +1] where -1 is complete disbelief and +1 is complete belief.", "feedback": "Correct! CF ranges from -1 to +1."},
        "q2": {"q": "In Fuzzy Logic, what replaces crisp boolean logic operations?", "options": "A: Neural weights. B: Min for Fuzzy AND, Max for Fuzzy OR, (1 - mu) for Fuzzy NOT.", "feedback": "Correct! Zadeh fuzzy set operators."}
    },
    "intuitive": """
      <p class="lead-text">Real-world reasoning rarely operates on pure 100% facts. Clinical symptoms are ambiguous, sensor voltages are noisy, and human experts express rules with hesitation ('Usually', 'Likely').</p>
      <p><strong>MYCIN Certainty Factors (CF)</strong> provide an intuitive heuristic framework to propagate belief and disbelief through rule chains. <strong>Fuzzy Logic</strong> allows truth to be continuous (a room is not just 'cold' or 'hot', but 0.7 warm), computing crisp control actions via <strong>Mamdani Centroid Defuzzification</strong>.</p>
    """,
    "vis": """
      <div id="mycin-studio">
        <h4 style="color:#38bdf8; margin-top:0;">Interactive MYCIN Certainty Factor Calculator</h4>
        <div class="grid-2-col mb-3" style="gap:10px;">
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Rule 1 CF1: <strong id="mycin-cf1-val" style="color:#38bdf8;">+0.60</strong></label>
            <input type="range" id="mycin-cf1-slider" min="-1" max="1" step="0.05" value="0.60" oninput="ThreeDaySprintDay3Visualizers.updateMYCIN()" style="width:100%;">
          </div>
          <div>
            <label style="font-size:0.8rem; color:var(--text-secondary);">Rule 2 CF2: <strong id="mycin-cf2-val" style="color:#10b981;">+0.50</strong></label>
            <input type="range" id="mycin-cf2-slider" min="-1" max="1" step="0.05" value="0.50" oninput="ThreeDaySprintDay3Visualizers.updateMYCIN()" style="width:100%;">
          </div>
        </div>
        <div id="mycin-result-math" style="background:var(--bg-secondary); padding:12px; border-radius:6px;"></div>
      </div>
    """,
    "math": """
      <p><strong>MYCIN Combination Formulas:</strong></p>
      $$CF_{\\text{combine}}(CF_1, CF_2) = \\begin{cases} CF_1 + CF_2 - CF_1 \\cdot CF_2 & \\text{if } CF_1, CF_2 \\ge 0 \\\\ CF_1 + CF_2 + CF_1 \\cdot CF_2 & \\text{if } CF_1, CF_2 < 0 \\\\ \\frac{CF_1 + CF_2}{1 - \\min(|CF_1|, |CF_2|)} & \\text{if } CF_1 \\cdot CF_2 < 0 \\end{cases}$$
      <p><strong>Fuzzy Centroid (Center of Gravity) Defuzzification:</strong></p>
      $$z^* = \\frac{\\sum_{i} z_i \\cdot \\mu(z_i)}{\\sum_{i} \\mu(z_i)}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Rule 1 asserts CF1 = +0.80. Rule 2 asserts CF2 = +0.50. Calculate combined CF.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d3m4-ans" placeholder="Combined CF..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d3m4-ans').value); if(Math.abs(v - 0.90) < 0.02) alert('Correct! 0.80 + 0.50 - (0.80 * 0.50) = 1.30 - 0.40 = 0.90.'); else alert('Incorrect. 0.80 + 0.50 - 0.40 = 0.90.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Trap:</strong> Forgetting the cross-product term in MYCIN ($CF_1 + CF_2 - CF_1 \\cdot CF_2$). Never let CF exceed $+1.0$ or fall below $-1.0$.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>MYCIN Range:</strong> $[-1, +1]$.</li>
          <li><strong>Fuzzy Operators:</strong> $\\text{AND}=\\min, \\text{OR}=\\max, \\text{NOT}=1-\\mu$.</li>
          <li><strong>Defuzzification:</strong> Converts fuzzy envelope into single crisp output scalar.</li>
        </ul>
      </div>
    """
})

# Mod 5: Knowledge Acquisition
modules.append({
    "id": "mod-5", "num": 5,
    "title": "Knowledge Acquisition, Validation & Static vs Dynamic Engines",
    "subtitle": "Expert Elicitation, Verification & Validation, Decision Tables vs Dynamic Rule Engines & Oversight",
    "badge": "IRS (RS Day 1)",
    "diag": {
        "q1": {"q": "What is the knowledge engineering bottleneck?", "options": "A: CPU clock speed. B: The difficulty of extracting tacit human expertise and translating it into formalized, non-contradictory rules.", "feedback": "Correct! Human experts often cannot articulate their intuitive heuristics."},
        "q2": {"q": "When is a dynamic rule engine superior to a static lookup table?", "options": "A: When lookups have 1 input. B: When there are combinatorial feature combinations, multi-step inference chains, and explanation traces are required.", "feedback": "Correct! Static tables explode combinatorially."}
    },
    "intuitive": """
      <p class="lead-text">Knowledge engineering requires converting fuzzy human intuition into verifiable, machine-executable rules without creating infinite loops or contradictions.</p>
      <p>While a simple static lookup table works for 2 variables, adding 10 symptoms produces a combinatorial explosion of table cells. A <strong>Dynamic Rule Engine</strong> evaluates only the relevant rules on demand, handles missing evidence, and provides an auditable proof tree.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Static Table vs Dynamic Rule Engine Trade-off</h4>
        <table class="styled-table" style="width:100%; font-size:0.85rem;">
          <thead><tr><th>Criterion</th><th>Static Lookup Table</th><th>Dynamic Rule Engine</th></tr></thead>
          <tbody>
            <tr><td><strong>Lookup Speed</strong></td><td>$O(1)$ immediate array access</td><td>Pattern matching cycle ($O(R \\cdot F)$)</td></tr>
            <tr><td><strong>Scalability</strong></td><td>Fails on $>3$ variables (combinatorial explosion)</td><td>Modular: add new rules without altering existing rules</td></tr>
            <tr><td><strong>Explainability</strong></td><td>Zero explanation (black-box cell lookup)</td><td>Generates complete 'Why' and 'How' proof tree</td></tr>
          </tbody>
        </table>
      </div>
    """,
    "math": """
      <p><strong>Combinatorial Complexity of Static Tables:</strong></p>
      $$\\text{Table Cells} = \\prod_{i=1}^M |V_i|$$
      <p>For 10 clinical symptoms with 3 states each: $3^{10} = 59,049$ static cells!</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A diagnostic system has 4 variables with 4 possible states each. How many static table cells are required?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('4^4 = 256 cells.')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Rule:</strong> Emphasize that rule engines provide <strong>explanation facilities</strong>. In medical and legal AI, being able to trace *which* rules fired to justify a decision is mandatory for clinical accreditation.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Verification:</strong> Building the system right (no circular rules, no contradictions).</li>
          <li><strong>Validation:</strong> Building the right system (accurate against expert benchmarks).</li>
        </ul>
      </div>
    """
})

# Mod 6: Association Mining & Recommenders
modules.append({
    "id": "mod-6", "num": 6,
    "title": "Association Mining & Recommender Systems (IRS Q3b & Q3c)",
    "subtitle": "Apriori, Support/Confidence/Lift, Clinical Baskets, Content-Based, Collaborative Filtering (User/Item) & SVD",
    "badge": "IRS (RS Day 2 & 3)",
    "diag": {
        "q1": {"q": "In Apriori association mining, what is the downward-closure property?", "options": "A: High lift rules are ignored. B: All non-empty subsets of a frequent itemset must also be frequent.", "feedback": "Correct! If {A, B} is infrequent, {A, B, C} cannot possibly be frequent."},
        "q2": {"q": "In IRS Q3b, how are baskets constructed from the patient database?", "options": "A: One basket per day. B: One basket per patient case visit containing all observed symptoms, positive signs, and confirmed diagnoses.", "feedback": "Correct! Each patient transaction forms an itemset basket."}
    },
    "intuitive": """
      <p class="lead-text">Association Mining uncovers hidden co-occurrence patterns in transaction datasets ('people who buy diapers also buy beer'). In healthcare, it reveals symptom-disease associations.</p>
      <p><strong>Recommender Systems</strong> personalize suggestions. <strong>Content-Based Filtering</strong> recommends items similar to what a user liked in the past (using TF-IDF / feature cosine similarity). <strong>Collaborative Filtering (CF)</strong> recommends items liked by other users with similar historical taste profiles (using Pearson correlation or Matrix Factorization SVD).</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Collaborative Filtering Paradigms (IRS Q3c)</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">User-Based Collaborative Filtering</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Find users with similar rating vectors. Recommend treatments that similar patients responded well to.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Item-Based Collaborative Filtering</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Compute similarity between items across all ratings. More stable when items << users.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Association Mining Metrics (IRS Q3b):</strong></p>
      $$\\text{Support}(X \\implies Y) = \\frac{\\text{count}(X \\cup Y)}{N}, \\quad \\text{Confidence} = \\frac{\\text{Support}(X \\cup Y)}{\\text{Support}(X)}$$
      $$\\text{Lift}(X \\implies Y) = \\frac{\\text{Confidence}(X \\implies Y)}{\\text{Support}(Y)} = \\frac{P(X \\cap Y)}{P(X)P(Y)}$$
      <p><strong>Pearson Correlation Similarity for Collaborative Filtering:</strong></p>
      $$\\text{sim}(u, v) = \\frac{\\sum_{i} (r_{ui} - \\bar{r}_u)(r_{vi} - \\bar{r}_v)}{\\sqrt{\\sum (r_{ui} - \\bar{r}_u)^2} \\sqrt{\\sum (r_{vi} - \\bar{r}_v)^2}}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> In 1,000 cases, symptom $A$ appears in 200 cases ($\\text{Supp}=0.20$), disease $B$ appears in 100 cases ($\\text{Supp}=0.10$), and both appear in 50 cases ($\\text{Supp}=0.05$). Calculate Lift.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d3m6-ans" placeholder="Lift..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d3m6-ans').value); if(Math.abs(v - 2.5) < 0.1) alert('Correct! Conf = 0.05 / 0.20 = 0.25. Lift = 0.25 / 0.10 = 2.50.'); else alert('Incorrect. Conf/Supp(B) = 0.25 / 0.10 = 2.5.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Sample Paper Q3b & Q3c Model Answers:</strong></p>
        <ul>
          <li><strong>Q3b (Basket Construction):</strong> Each row in Patient Case Database forms an itemset basket. Items included: observed Symptoms (True), positive Signs (True), and Doctor Diagnosis. Preprocessing: filter out absent/false signs; remove administrative IDs. Filter rules using minimum Support (e.g. 1%) and Lift > 1.2.</li>
          <li><strong>Q3c (Treatment Recommendation):</strong> Use Collaborative Filtering on treatment effectiveness ratings (1-5). Use Content-Based Filtering on patient demographic profiles to solve the Cold Start problem for new patients.</li>
        </ul>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Lift > 1:</strong> Positive association (symptom increases disease probability).</li>
          <li><strong>Cold Start Mitigation:</strong> Use content-based demographic profiles for new users.</li>
        </ul>
      </div>
    """
})

# Mod 7: Knowledge Graphs & TransE
modules.append({
    "id": "mod-7", "num": 7,
    "title": "Knowledge Graphs & TransE Embeddings",
    "subtitle": "Entities, Relations, Triples, Multi-Hop Reasoning, TransE/TransH/TransR & Link Prediction",
    "badge": "IRS (MR Day 4)",
    "diag": {
        "q1": {"q": "What is the core geometric hypothesis of the TransE embedding model?", "options": "A: Head times relation equals tail. B: Head vector + relation vector should approximate tail vector: h + r ≈ t.", "feedback": "Correct! Translational vector addition in embedding space."},
        "q2": {"q": "What is the primary limitation of TransE on 1-to-N relations?", "options": "A: TransE is too slow. B: It forces all tail entities to map to the exact same point, causing entity collapse.", "feedback": "Correct! If (h, r, t1) and (h, r, t2) both hold, TransE forces t1 ≈ t2."}
    },
    "intuitive": """
      <p class="lead-text">Tabular databases store records in disconnected rows; <strong>Knowledge Graphs (KGs)</strong> store facts as a dense network of real-world entities connected by typed relationships: $(h, r, t)$ (Head, Relation, Tail).</p>
      <p>To enable machine learning over graphs, <strong>Knowledge Graph Embeddings (KGE)</strong> project entities and relations into continuous vector spaces. <strong>TransE</strong> models relations as translations ($\mathbf{h} + \mathbf{r} \approx \mathbf{t}$). <strong>TransH</strong> and <strong>TransR</strong> extend this to complex 1-to-N relationships via hyperplane projections.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">TransE Vector Translation ($\mathbf{h} + \mathbf{r} \approx \mathbf{t}$)</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">
          Loss penalizes true triples that violate translation while pushing corrupted negative triples away by margin $\\gamma$.
        </p>
      </div>
    """,
    "math": """
      <p><strong>TransE Margin Ranking Loss:</strong></p>
      $$\\mathcal{L} = \\sum_{(h, r, t) \\in S} \\sum_{(h', r, t') \\in S'} \\max\\left(0, \\; \\gamma + \\|\\mathbf{h} + \\mathbf{r} - \\mathbf{t}\\| - \\|\\mathbf{h}' + \\mathbf{r} - \\mathbf{t}'\\|\\right)$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> In 1D vector space, head $h = 2$, relation $r = 5$, and tail $t = 7$. Calculate translation error $|h + r - t|$.</p>
        <button class="btn btn-sm btn-outline" onclick="alert('|2 + 5 - 7| = |7 - 7| = 0 (perfect translation).')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Evaluation Metrics:</strong> For link prediction $(h, r, ?)$, rank candidate entities. Citing <strong>MRR (Mean Reciprocal Rank)</strong> and <strong>Hits@10</strong> is required in KGE exam questions.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>TransE:</strong> $\\mathbf{h} + \\mathbf{r} \\approx \\mathbf{t}$.</li>
          <li><strong>TransH:</strong> Projects onto relation hyperplane $\\mathbf{w}_r$ to solve 1-to-N relations.</li>
          <li><strong>TransR:</strong> Projects into distinct relation vector space $\\mathbf{M}_r$.</li>
        </ul>
      </div>
    """
})

# Mod 8: Genetic Algorithms & Order Crossover (OX)
modules.append({
    "id": "mod-8", "num": 8,
    "title": "Genetic Algorithms & Order Crossover (OX) for TSP",
    "subtitle": "Fitness Evaluation, Selection (Roulette/Tournament), Permutation Crossover (OX/PMX) & Elitism",
    "badge": "IRS (RS Day 4)",
    "diag": {
        "q1": {"q": "Why is standard 1-point crossover invalid for the Traveling Salesperson Problem (TSP)?", "options": "A: Crossover is too slow. B: It produces invalid tours with duplicate cities and missing cities.", "feedback": "Correct! TSP chromosomes are permutations; duplicate visits violate the problem definition."},
        "q2": {"q": "How does Order Crossover (OX) solve the duplicate city problem?", "options": "A: Mutates all duplicates to 0. B: Copies a continuous swath from Parent 1, then inserts the remaining cities from Parent 2 in relative order, skipping cities already in the swath.", "feedback": "Correct! OX guarantees every city appears exactly once."}
    },
    "intuitive": """
      <p class="lead-text">Inspired by Darwinian natural selection, Genetic Algorithms (GAs) optimize complex combinatorial problems through reproduction, crossover, mutation, and survival of the fittest.</p>
      <p>In <strong>Reasoning Systems WS1GA (TSP)</strong>, standard crossovers break permutations. <strong>Order Crossover (OX)</strong> preserves a sub-tour swath from the first parent and fills the remaining slots using the relative order of the second parent. <strong>Elitism</strong> guarantees that the best-performing solution never disappears.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Order Crossover (OX) Trace</h4>
        <div style="font-family:var(--font-mono); font-size:0.85rem; line-height:1.7;">
          <div>Parent 1: [1, 2, <strong>3, 4, 5</strong>, 6, 7, 8] (Swath: 3, 4, 5)</div>
          <div>Parent 2: [8, 7, 6, 5, 4, 3, 2, 1]</div>
          <div>Child 1:  [8, 7, <strong>3, 4, 5</strong>, 6, 2, 1] (Every city visited once!)</div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>TSP Fitness Function:</strong></p>
      $$\\text{Fitness} = \\frac{1}{\\text{Total Tour Distance} + \\epsilon}$$
      <p><strong>Roulette Wheel Selection Probability:</strong></p>
      $$P(\\text{individual}_i) = \\frac{f_i}{\\sum_{j=1}^N f_j}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Three chromosomes have fitnesses $f_1 = 10, f_2 = 20, f_3 = 70$. Total fitness = 100. What is the roulette wheel selection probability of chromosome 2?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('P = 20 / 100 = 0.20 (20%).')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Step Walkthrough:</strong> Be prepared to execute Order Crossover (OX) by hand on two 8-city chromosomes. Step 1: Copy swath directly. Step 2: List elements of Parent 2 starting from cut point 2, omitting elements in swath. Step 3: Insert into Child in circular order.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>OX:</strong> Mandatory for permutation problems (TSP, scheduling).</li>
          <li><strong>Elitism:</strong> Copies top $E$ best individuals directly to next generation.</li>
        </ul>
      </div>
    """
})

# Mod 9: Natural Language Cognition & Chatbots
modules.append({
    "id": "mod-9", "num": 9,
    "title": "Natural Language Cognition, Intents & Slots (IRS Q1a & Q1b)",
    "subtitle": "TF-IDF, Word2Vec, GloVe, Cosine Similarity, Dialogue State Tracking & FAQ Retrieval",
    "badge": "IRS (CS Day 1AM)",
    "diag": {
        "q1": {"q": "In a conversational chatbot (IRS Q1a), what is an Intent vs a Slot?", "options": "A: An intent is a database; a slot is a table. B: An Intent is the user's high-level goal (e.g. AskErgonomics); a Slot is an entity/parameter required to fulfill it (e.g. screen_distance).", "feedback": "Correct! Intents capture goals; slots extract parameters."},
        "q2": {"q": "How does vector FAQ retrieval handle novel user questions (IRS Q1b)?", "options": "A: Returns a random answer. B: Computes cosine similarity against question embeddings; returns stored answer if similarity >= threshold, else falls back to human expert.", "feedback": "Correct! Semantic thresholding with out-of-domain fallback."}
    },
    "intuitive": """
      <p class="lead-text">Natural language cognition allows machines to understand, parse, and converse with humans. Early approaches relied on Bag-of-Words and TF-IDF, losing syntax and semantics.</p>
      <p>Modern conversational AI uses dense semantic embeddings (Word2Vec, BERT) and <strong>Task-Oriented Dialogue Systems</strong>. In <strong>IRS Question 1a (EyeCoach)</strong>, the bot classifies employee intents and extracts required slots to configure workstation ergonomics.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">EyeCoach Chatbot Intent & Slot Architecture (IRS Q1a)</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">Intent: AdjustScreenDistance</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Slots required: <code>screen_size_inch</code>, <code>current_distance_cm</code>.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Intent: StartEyeExercise</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Slots required: <code>exercise_type</code> (e.g. Palms, 20-20-20), <code>duration_sec</code>.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>TF-IDF & Cosine Similarity:</strong></p>
      $$\\text{TF-IDF}(t, d) = \\text{TF}(t, d) \\times \\ln\\left(\\frac{N}{\\text{DF}(t)}\\right), \\quad \\text{Cosine Sim} = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Two normalized sentence vectors have dot product $\\mathbf{u} \\cdot \\mathbf{v} = 0.88$. What is their cosine similarity?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('0.88 (normalized vectors have ||u|| = ||v|| = 1).')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Q1a & Q1b Model Answers:</strong> Define 3 high-level user intents (e.g. <code>QueryErgonomics</code>, <code>ReportDiscomfort</code>, <code>ScheduleBreak</code>) and their specific slots. For FAQ matching, explain embedding retrieval with cosine similarity threshold $\\tau$ to catch out-of-domain queries.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Intent:</strong> Action user wants to perform.</li>
          <li><strong>Slot:</strong> Variable entity needed to execute intent.</li>
        </ul>
      </div>
    """
})

# Mod 10: Vision & Audio Cognition (Marr 3 Levels)
modules.append({
    "id": "mod-10", "num": 10,
    "title": "Vision & Audio Cognition: Marr's 3 Levels & SGH Smart Mirror",
    "subtitle": "Computational/Algorithmic/Hardware Levels, Room Impulse Response, Reverberation T60 & ASR WER",
    "badge": "IRS (CS Day 1PM & Day 2)",
    "diag": {
        "q1": {"q": "What are Marr's Three Levels of Analysis for cognitive systems?", "options": "A: Input, Hidden, Output. B: Computational Theory, Representation & Algorithm, and Hardware Implementation.", "feedback": "Correct! David Marr's classic tri-level cognitive framework."},
        "q2": {"q": "What does Reverberation Time T60 measure in audio cognition?", "options": "A: Microphone sample rate. B: The time required for sound reflections in a room to decay by 60 dB.", "feedback": "Correct! Sabine's reverberation formula."}
    },
    "intuitive": """
      <p class="lead-text">Computer vision detects bounding boxes; <strong>Vision Cognition</strong> understands human functional intent and verifies adherence to medical protocols.</p>
      <p>David Marr established that any information processing system must be analyzed at three levels: <strong>1. Computational Theory</strong> (What is the goal and why); <strong>2. Representation & Algorithm</strong> (How is data structured and transformed); <strong>3. Hardware Implementation</strong> (Physical realization in GPUs or neurons). In the <strong>SGH Smart Mirror case study</strong>, vision cognition verifies that medical staff correctly don masks, gowns, and face shields before entering infectious disease wards.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Marr's 3 Levels Deconstruction for SGH Smart Mirror</h4>
        <div class="grid-3-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">1. Computational Theory</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Goal: Prevent hospital infection transmission by verifying 100% PPE protocol compliance.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">2. Representation & Algo</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Representations: 2D skeleton joints + PPE bounding boxes. Algorithm: Rule verification engine.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #f59e0b;">
            <strong style="color:#f59e0b;">3. Hardware Impl</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Physical: 4K camera, two-way mirror display, on-device Edge TPU GPU accelerator.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Speech Recognition Word Error Rate (WER):</strong></p>
      $$\\text{WER} = \\frac{S + D + I}{N}$$
      <p>where $S$ = substitutions, $D$ = deletions, $I$ = insertions, and $N$ = total reference words.</p>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> A reference audio transcript has $N = 20$ words. The ASR engine produced $S = 2$ substitutions, $D = 1$ deletion, and $I = 1$ insertion. Calculate WER.</p>
        <div style="display:flex; gap:10px; align-items:center; margin-top:8px;">
          <input type="number" step="any" id="prac-d3m10-ans" placeholder="WER..." style="padding:6px 10px; border-radius:6px; background:var(--bg-secondary); color:var(--text-primary); border:1px solid var(--border-color); width:150px;">
          <button class="btn btn-sm btn-primary" onclick="const v = parseFloat(document.getElementById('prac-d3m10-ans').value); if(Math.abs(v - 0.20) < 0.02) alert('Correct! (2 + 1 + 1) / 20 = 4 / 20 = 0.20 (20%).'); else alert('Incorrect. 4 / 20 = 0.20.');">Submit Answer</button>
        </div>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Deconstruction:</strong> When asked to analyze a vision or audio cognitive assistant, explicitly write headings for Marr's three levels. Examiners award distinct marks for separating the computational purpose from algorithmic representations and hardware sensors.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Marr 1:</strong> Computational Theory (What & Why).</li>
          <li><strong>Marr 2:</strong> Representation & Algorithm (How).</li>
          <li><strong>Marr 3:</strong> Hardware Implementation (Physical substrate).</li>
        </ul>
      </div>
    """
})

# Mod 11: Cognitive Architectures (11 Entities)
modules.append({
    "id": "mod-11", "num": 11,
    "title": "Cognitive Architectures & The Exact 11-Entity Model (IRS Q2h)",
    "subtitle": "ACT-R, SOAR, Declarative vs Procedural Memory & The NUS-ISS 11-Entity Cognitive Framework",
    "badge": "IRS (CS Day 3)",
    "diag": {
        "q1": {"q": "What is the difference between Declarative and Procedural memory in ACT-R?", "options": "A: Declarative is audio; procedural is video. B: Declarative stores facts and episodic chunks ('knowing that'); Procedural stores IF-THEN production rules and motor skills ('knowing how').", "feedback": "Correct! Declarative = chunks; Procedural = rules."},
        "q2": {"q": "In the NUS-ISS 11-entity cognitive framework (IRS Q2h), what entity follows the 'Reason' function?", "options": "A: Act Function. B: Plan / Solution.", "feedback": "Correct! Reason produces Plan/Solution, which is executed by Act."}
    },
    "intuitive": """
      <p class="lead-text">To replicate human cognition, an intelligent system requires a unified perception-action-learning cycle coordinating memory, knowledge, and deliberate planning.</p>
      <p>In <strong>IRS Question 2h</strong>, NUS-ISS tests the <strong>exact eleven-entity cognitive framework</strong> from the official lecture slides. Every intelligent diagnostic system maps directly into these 11 entities, from initial physical sensing to environmental action effects.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">The Exact 11-Entity Cognitive Framework (IRS Q2h)</h4>
        <div style="font-family:var(--font-mono); font-size:0.85rem; line-height:1.8; color:var(--text-primary);">
          1. Sensing $\\to$ 2. Input $\\to$ 3. Information $\\to$ 4. Learn Function $\\to$ 5. Knowledge Base $\\leftrightarrow$<br>
          6. Memory $\\to$ 7. Reason Function $\\to$ 8. Plan/Solution $\\to$ 9. Act Function $\\to$ 10. Output $\\to$ 11. Effects of Action
        </div>
      </div>
    """,
    "math": """
      <p><strong>A-EYE Diagnostic System Mapping (IRS Q2h):</strong></p>
      <ul>
        <li><strong>1. Sensing:</strong> Retinal fundus camera & tonometer hardware.</li>
        <li><strong>2. Input:</strong> Raw digital JPEG images & pressure floats.</li>
        <li><strong>3. Information:</strong> Extracted cup-to-disc ratio & vessel tortuosity.</li>
        <li><strong>4. Learn Function:</strong> Retinal CNN feature extractor training.</li>
        <li><strong>5. Knowledge Base:</strong> Clinical ophthalmic disease guidelines & ontologies.</li>
        <li><strong>6. Memory:</strong> Current patient working memory + historical patient database.</li>
        <li><strong>7. Reason Function:</strong> Bayesian inference engine & rule chainer.</li>
        <li><strong>8. Plan / Solution:</strong> Ranked differential diagnosis & treatment recommendation.</li>
        <li><strong>9. Act Function:</strong> EHR database writing & report generator.</li>
        <li><strong>10. Output:</strong> Rendered clinical dashboard & specialist alert notification.</li>
        <li><strong>11. Effects of Action:</strong> Patient receives early glaucoma laser therapy, preserving vision.</li>
      </ul>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> Name the entity that connects the Learn function and Reason function to persistent long-term storage in the 11-entity framework.</p>
        <button class="btn btn-sm btn-outline" onclick="alert('Knowledge Base (and Memory).')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Q2h Marking Rubric (3.5 Marks):</strong> NUS-ISS awards 0.5 marks for each correctly labeled entity box. Memorize all 11 entities in sequence: Sensing, Input, Information, Learn, Knowledge, Memory, Reason, Plan/Solution, Act, Output, Effects of Action.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>11 Entities:</strong> Covers entire perception $\\to$ learning $\\to$ reasoning $\\to$ acting cycle.</li>
          <li><strong>ACT-R:</strong> Declarative chunks + Procedural rules.</li>
        </ul>
      </div>
    """
})

# Mod 12: LLM Reasoning & GraphRAG
modules.append({
    "id": "mod-12", "num": 12,
    "title": "LLM Reasoning, GraphRAG & Agentic Loops",
    "subtitle": "Few-Shot, Chain-of-Thought, ReAct Agent Loops, Neo4j & Cypher, Knowledge Graphs + Vector Search",
    "badge": "IRS (RS Day 5 & CS Day 3)",
    "diag": {
        "q1": {"q": "What is the ReAct agent framework?", "options": "A: A React.js web framework. B: An interleaved loop of Thought (reasoning), Action (tool calling), and Observation (environment feedback).", "feedback": "Correct! ReAct combines reasoning with environment interaction."},
        "q2": {"q": "Why is GraphRAG superior to standard Vector RAG for complex multi-hop queries?", "options": "A: It uses fewer vectors. B: Standard vector search retrieves text chunks in isolation; GraphRAG follows explicit entity relationships across multiple documents.", "feedback": "Correct! Graph traversal enables multi-hop relational synthesis."}
    },
    "intuitive": """
      <p class="lead-text">Standard Large Language Models generate plausible text, but hallucinate facts and cannot perform verifiable multi-step logic on private enterprise data.</p>
      <p><strong>Retrieval-Augmented Generation (RAG)</strong> grounds responses by retrieving relevant text chunks. <strong>GraphRAG</strong> combines vector similarity with Knowledge Graphs (Neo4j): querying entity relationships via Cypher and providing multi-hop reasoning that eliminates hallucinations.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">GraphRAG Hybrid Pipeline</h4>
        <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--text-primary);">
          User Query $\\to$ Entity Extraction $\\to$ Cypher Graph Traversal (Neo4j) + Dense Vector Search $\\to$ Cross-Encoder Reranker $\\to$ LLM Grounded Answer
        </div>
      </div>
    """,
    "math": """
      <p><strong>Cypher Graph Query Example:</strong></p>
      <pre><code>MATCH (p:Patient {id: 'P102'})-[:HAS_SYMPTOM]->(s:Symptom)
MATCH (d:Disease)-[:INDICATED_BY]->(s)
RETURN d.name, count(s) AS matches ORDER BY matches DESC</code></pre>
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> In an agent loop, after the LLM generates a Thought and executes an Action, what is the next step in ReAct?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('Observation: The agent inspects the output from the tool action before taking the next reasoning step.')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Exam Architecture:</strong> When designing modern knowledge systems, explain how GraphRAG prevents hallucinations by verifying all retrieved triples against a curated Knowledge Base before generation.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>CoT:</strong> Chain-of-Thought; forces step-by-step reasoning tokens.</li>
          <li><strong>GraphRAG:</strong> Traverses explicit entity triples; multi-hop reasoning.</li>
        </ul>
      </div>
    """
})

# Mod 13: Hybrid Reasoning & Architecture Design
modules.append({
    "id": "mod-13", "num": 13,
    "title": "Hybrid Reasoning & Neuro-Symbolic Architecture Design",
    "subtitle": "Symbolic + Neural AI, Dual-Process Integration, Human-in-the-Loop Governance & Patient Safety (IRS Q2i)",
    "badge": "IRS (CS Day 3)",
    "diag": {
        "q1": {"q": "What is Neuro-Symbolic AI?", "options": "A: A neural net with more layers. B: The synthesis of neural perception (for noisy pattern recognition) with symbolic logic (for deterministic constraint verification and explainability).", "feedback": "Correct! Best of both System 1 and System 2."},
        "q2": {"q": "Why is patient self-service without primary doctor supervision risky in clinical diagnosis (IRS Q2i)?", "options": "A: Smartphone screens are too small. B: High risk of false negatives causing irreversible blindness, patients cannot verify physical signs, and legal malpractice liability cannot be assigned to software.", "feedback": "Correct! High-stakes clinical AI requires Human-in-the-Loop oversight."}
    },
    "intuitive": """
      <p class="lead-text">Neither pure neural networks nor pure rule engines can solve complex real-world intelligence alone. Neural networks excel at perception but hallucinate; rule engines are explainable but brittle.</p>
      <p><strong>Neuro-Symbolic Hybrid Architectures</strong> place a neural perception model at the front (processing camera frames, audio, and sensor streams) and feed its extracted symbols into a formal logic engine (validating safety constraints and medical protocols). In high-stakes medicine, <strong>Human-in-the-Loop (HITL)</strong> governance is mandatory.</p>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">Dual-Process Neuro-Symbolic Architecture</h4>
        <div class="grid-2-col" style="gap:10px; font-size:0.85rem;">
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #38bdf8;">
            <strong style="color:#38bdf8;">Neural System 1 (Perception):</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">CNN / Transformer extracts features from unstructured fundus images and voice.</p>
          </div>
          <div class="p-2" style="background:var(--bg-card); border-radius:6px; border-left:3px solid #10b981;">
            <strong style="color:#10b981;">Symbolic System 2 (Reasoning):</strong>
            <p style="margin:4px 0 0 0; color:var(--text-secondary);">Rule Engine & Knowledge Graph verifies clinical guidelines and generates explanation tree.</p>
          </div>
        </div>
      </div>
    """,
    "math": """
      <p><strong>Confidence-Based Escalation Guardrail:</strong></p>
      $$\\text{Action} = \\begin{cases} \\text{Automated Differential Diagnosis} & \\text{if } \\text{Certainty}(H) \\ge \\tau_{\\text{high}} \\\\ \\text{Mandatory Human Specialist Referral} & \\text{if } \\text{Certainty}(H) < \\tau_{\\text{high}} \\end{cases}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Exercise:</strong> In an autonomous surgery robot, why must neural motor commands pass through a deterministic symbolic constraint checker?</p>
        <button class="btn btn-sm btn-outline" onclick="alert('To enforce hard physical safety boundaries (no-cut zones) that neural approximations might violate.')">Check Answer</button>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>IRS Sample Paper Q2i Model Answer (1.5 Marks):</strong> Oppose full patient self-service: (1) Patients lack clinical training to evaluate ophthalmic signs; (2) False negatives lead to permanent blindness; (3) Legal liability requires licensed practitioner oversight; (4) System should serve as Clinical Decision Support (CDS) for primary care doctors, maintaining Human-in-the-Loop accountability.</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Neuro-Symbolic:</strong> Neural front-end + Symbolic back-end.</li>
          <li><strong>HITL:</strong> Mandatory for life-critical, medical, and legal domains.</li>
        </ul>
      </div>
    """
})

# Mod 14: Day 3 Integration & Sample Paper Crucible
modules.append({
    "id": "mod-14", "num": 14,
    "title": "Day 3 Integration & IRS Sample Paper Crucible",
    "subtitle": "Comprehensive Synthesis: EyeCoach (Q1), A-EYE Cognitive Architecture (Q2), and Clinical Decision Models (Q3)",
    "badge": "IRS Exam Crucible",
    "diag": {
        "q1": {"q": "What is the primary objective of Day 3 Integration?", "options": "A: Taking multiple choice tests. B: Synthesizing symbolic representation, uncertainty, cognitive architectures, and clinical decision support to ace the IRS examination.", "feedback": "Correct! Day 3 integrates all reasoning paradigms."},
        "q2": {"q": "Are you ready to attempt full-length sample examinations under 3-hour timed conditions?", "options": "A: Not yet. B: Yes, all syllabus topics and examiner traps across both courses have been revised and mastered!", "feedback": "Correct! Proceed to the Daily Revision tab and Exam Generator."}
    },
    "intuitive": """
      <p class="lead-text">You have completed the entire 36-hour revision curriculum. All three sections of official IRS Sample Paper (ISY5001) are now completely solved:</p>
      <ul>
        <li><strong>Section A — Question 1 (13 Marks):</strong> EyeCoach Chatbot: Intents & Slots (Q1a), Vector FAQ retrieval (Q1b), Frame schema with inheritance and active daemons (Q1c), HMM work pattern classification (Q1d).</li>
        <li><strong>Section B — Question 2 (26 Marks):</strong> A-EYE System: The 11-entity cognitive framework (Q2h) and patient self-service safety justification (Q2i).</li>
        <li><strong>Section C — Question 3 (11 Marks):</strong> Clinical Portal: Model selection (Single Tree vs Random Forest vs k-NN) (Q3a), Association mining basket creation (Q3b), Collaborative filtering recommenders (Q3c).</li>
      </ul>
    """,
    "vis": """
      <div class="p-3" style="background:var(--bg-secondary); border-radius:8px;">
        <h4 style="color:#38bdf8; margin-top:0;">IRS 3-Section Grand Crucible Map</h4>
        <div style="font-size:0.85rem; color:var(--text-secondary);">
          Review the IRS Handbook and test yourself in the <strong>Daily Revision</strong> and <strong>Grand Mock Exam</strong> tabs!
        </div>
      </div>
    """,
    "math": """
      <p><strong>Master Formula Review:</strong></p>
      $$CF_{\\text{combine}} = CF_1 + CF_2 - CF_1 CF_2, \\quad z^* = \\frac{\\sum z_i \\mu_i}{\\sum \\mu_i}, \\quad \\text{Lift} = \\frac{\\text{Conf}}{\\text{Supp}(Y)}, \\quad \\text{WER} = \\frac{S+D+I}{N}$$
    """,
    "practice": """
      <div style="font-size:0.9rem;">
        <p><strong>Final Challenge:</strong> Head to the <strong>Quizzes & Exam Questions</strong> tab to take the 20 Grand Quizzes and official sample paper solutions!</p>
      </div>
    """,
    "exam": """
      <div style="font-size:0.88rem; line-height:1.6;">
        <p><strong>Final Day 3 Takeaway:</strong> You have completed 100% of the syllabus across Pattern Recognition Systems (ISY5002) and Intelligent Reasoning Systems (ISY5001). You are prepared to achieve an A+ grade!</p>
      </div>
    """,
    "summary": """
      <div style="font-size:0.86rem; line-height:1.6;">
        <ul>
          <li><strong>Completed:</strong> All 14 Day 3 Modules implemented with 7-stage pedagogy.</li>
          <li><strong>Next Step:</strong> Complete Day 3 Daily Revision & timed crucible.</li>
        </ul>
      </div>
    """
})

# Compile sections array
sections = []
for m in modules:
    content_html = make_stage_html(m["num"], m["title"], m["diag"], m["intuitive"], m["vis"], m["math"], m["practice"], m["exam"], m["summary"])
    sections.append({
        "id": m["id"],
        "title": f"Module {m['num']}: {m['title']}",
        "subtitle": m["subtitle"],
        "badge": m["badge"],
        "content": content_html
    })

alias_map = {
    "level-0": "mod-1",
    "level-1": "mod-2",
    "level-2": "mod-11",
    "level-3": "mod-12",
    "level-4": "mod-8",
    "level-5": "mod-14",
    "level-6": "mod-14"
}

for lvl_id, mod_target in alias_map.items():
    target = next((x for x in sections if x["id"] == mod_target), None)
    if target:
        sections.append({
            "id": lvl_id,
            "title": target["title"] + f" (Legacy {lvl_id})",
            "subtitle": target["subtitle"],
            "badge": target["badge"],
            "content": target["content"]
        })

js_output = f"""// Day 3 Content: Machine Reasoning, Knowledge and Cognitive Systems
// All 14 Comprehensive Modules with 7-Stage Pedagogy for NUS-ISS PRS & IRS Examinations
window.DAY3_REASONING_INTEGRATION_CONTENT = {{
  id: "day-3-reasoning-integration",
  title: "Day 3: Machine Reasoning, Knowledge and Cognitive Systems",
  author: "NUS-ISS Curriculum Team",
  sections: {json.dumps(sections, indent=2)}
}};
"""

out_dir = "courses" if os.path.exists("courses") else "learning_platform/courses"
with open(f"{out_dir}/three-day-sprint/day-3-reasoning-integration/content.js", "w") as f:
    f.write(js_output)

print(f"Generated Day 3 content.js with {len(modules)} modules and {len(sections)} sections (including aliases).")
