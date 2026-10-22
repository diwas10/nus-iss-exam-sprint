// Day 1 Visualizers Bridge for 3-Day Sprint (Classical ML + Probability + Search)

window.SprintDay1Visualizers = window.SprintDay1Visualizers || {
  updateNaiveBayes: function() {
    const obsEl = document.getElementById('nb-obs-slider');
    const totEl = document.getElementById('nb-total-slider');
    const vEl = document.getElementById('nb-v-slider');
    if (!obsEl || !totEl || !vEl) return;

    const obs = parseInt(obsEl.value);
    const tot = parseInt(totEl.value);
    const v = parseInt(vEl.value);
    const num = obs + 1;
    const den = tot + v;
    const prob = (num / den).toFixed(4);
    const out = document.getElementById('nb-output-math');
    if (out) {
      out.innerHTML = `$$P(x \\mid C) = \\frac{${obs} + 1}{${tot} + ${v}} = \\frac{${num}}{${den}} \\approx ${prob} \\quad (\\text{Non-zero!})$$`;
      if (typeof window.renderLatex === 'function') window.renderLatex(out);
    }
  },

  stepAStar: function() {
    const status = document.getElementById('astar-status-text');
    if (status) {
      const steps = [
        "Step 1: Expanded Start node (0,0). Pushed (0,1) with f=g+h=1+4=5 and (1,0) with f=1+4=5 into OPEN queue.",
        "Step 2: Popped (0,1) from OPEN queue. Added to CLOSED set. Explored neighbor (0,2) with f=2+3=5.",
        "Step 3: Popped (0,2) with min f=5. Explored neighbor (1,2) with f=3+2=5.",
        "Step 4: Popped (1,2). Explored (2,2) with f=4+1=5.",
        "Step 5: Popped (2,2). Explored Goal (2,3) with f=5+0=5.",
        "Step 6: Goal reached! Monotonic path verified optimal with cost = 5. No closed nodes reopened."
      ];
      this._stepIdx = ((this._stepIdx || 0) + 1) % steps.length;
      status.innerHTML = `<span style="color:var(--accent-primary); font-weight:600;">${steps[this._stepIdx]}</span>`;
    }
  },

  resetAStar: function() {
    this._stepIdx = 0;
    const status = document.getElementById('astar-status-text');
    if (status) {
      status.textContent = "Grid reset. Click 'Step Expansion' to trace OPEN priority queue and CLOSED set.";
    }
  }
};

window.ThreeDaySprintDay1Visualizers = {
  initAStar: function() {
    if (window.SprintDay1Visualizers?.resetAStar) {
      window.SprintDay1Visualizers.resetAStar();
    }
  },

  initNaiveBayes: function() {
    if (window.SprintDay1Visualizers?.updateNaiveBayes) {
      window.SprintDay1Visualizers.updateNaiveBayes();
    }
  },

  showCodeTab: function(tabId) {
    const area = document.getElementById('code-content-area');
    if (!area) return;

    if (tabId === 'py-nb') {
      area.innerHTML = `<pre><code>import numpy as np
from sklearn.naive_bayes import CategoricalNB

# Training counts with Laplace smoothing (alpha=1.0)
# Class 0 = Normal, Class 1 = Faulty
X_train = np.array([[0, 1], [1, 0], [2, 1], [0, 1]])
y_train = np.array([0, 0, 1, 1])

clf = CategoricalNB(alpha=1.0, min_categories=[3, 2])
clf.fit(X_train, y_train)

# Test sample: Low vibration (0), Loud noise (1)
X_test = np.array([[0, 1]])
prob = clf.predict_proba(X_test)
print(f"Predicted class: {clf.predict(X_test)[0]}, Probabilities: {prob}")
</code></pre>`;
    } else if (tabId === 'py-astar') {
      area.innerHTML = `<pre><code>import heapq

def a_star_search(graph, start, goal, h_func):
    # Priority Queue stores tuples: (f_score, g_cost, node, path)
    open_pq = [(h_func[start], 0, start, [start])]
    closed_set = set()

    while open_pq:
        f, g, current, path = heapq.heappop(open_pq)
        
        # Optimal goal test strictly upon POP
        if current == goal:
            return path, g
            
        if current in closed_set:
            continue
        closed_set.add(current)
        
        for neighbor, weight in graph.get(current, []):
            if neighbor not in closed_set:
                new_g = g + weight
                new_f = new_g + h_func.get(neighbor, 0)
                heapq.heappush(open_pq, (new_f, new_g, neighbor, path + [neighbor]))
                
    return None, float('inf')
</code></pre>`;
    } else if (tabId === 'py-pca') {
      area.innerHTML = `<pre><code>from sklearn.decomposition import PCA
from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

# Pipeline prevents data leakage between folds!
scaler = StandardScaler()
pca = PCA(n_components=2)
svm = SVC(C=1.0, kernel='rbf', gamma='scale')

model_pipeline = Pipeline([
    ('scaler', scaler),
    ('pca', pca),
    ('svm', svm)
])

# Fit strictly on X_train to prevent target leakage (PRS Q1e)!
# model_pipeline.fit(X_train, y_train)
</code></pre>`;
    }
  }
};
