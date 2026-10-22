// Day 1 Visualizers Bridge for 3-Day Sprint (Classical ML + Probability + Search)

window.ThreeDaySprintDay1Visualizers = {
  initAStar: function() {
    if (window.SprintDay1Visualizers?.initAStarPlayground) {
      window.SprintDay1Visualizers.initAStarPlayground();
    }
  },

  initNaiveBayes: function() {
    if (window.SprintDay1Visualizers?.initNaiveBayesLaplaceStudio) {
      window.SprintDay1Visualizers.initNaiveBayesLaplaceStudio();
    }
  },

  initKNN: function() {
    if (window.SprintDay1Visualizers?.initKNNBoundaryPlayground) {
      window.SprintDay1Visualizers.initKNNBoundaryPlayground();
    }
  },

  initConfusionMatrix: function() {
    if (window.SprintDay1Visualizers?.initConfusionMatrixPlayground) {
      window.SprintDay1Visualizers.initConfusionMatrixPlayground();
    }
  },

  initLiftChart: function() {
    if (window.SprintDay1Visualizers?.initLiftChartStudio) {
      window.SprintDay1Visualizers.initLiftChartStudio();
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

# model_pipeline.fit(X_train, y_train)
# pca.explained_variance_ratio_ returns [0.425, 0.210]
</code></pre>`;
    }
  }
};
