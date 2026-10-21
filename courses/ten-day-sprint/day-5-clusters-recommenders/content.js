// Day 5 Clustering, Latent Factors & Recommender Systems Interactive Master Curriculum
// Modules: Pattern Recognition Systems (PSUPR Day 4) & Reasoning Systems (RS Day 2 & 3)

window.DAY5_CLUSTERS_RECOMMENDERS_CONTENT = {
  id: "day-5-clusters-recommenders",
  title: "Day 5: Clustering, Latent Factors & Recommender Systems",
  author: "NUS-ISS Masterclass Lead Lecturer",
  sections: [
    {
      id: "level-0",
      title: "Level 0: The Mental Model — Discovery & Personalization",
      subtitle: "Uncovering hidden clusters without ground-truth labels and mapping human preferences into latent spaces",
      badge: "Mental Models & Synergy",
      content: `
<div class="lesson-card hero-card">
  <div class="card-icon"><i data-lucide="compass"></i></div>
  <div class="card-body">
    <h3>From Unsupervised Nature to Personalized Intelligence</h3>
    <p class="lead-text">
      Welcome to Day 5 — the midpoint of our 10-day sprint! In Days 1–4, we dealt with supervised labels (predicting classes with known ground truth) and deterministic rule systems. Today, we conquer <strong>Unsupervised Discovery</strong> (clustering without labels) and <strong>Personalized Recommendation Systems</strong> (predicting what users want based on collective behavior).
    </p>
    <div class="quote-box">
      <em>"In supervised learning, the teacher tells you the right answer. In clustering, nature hands you a scatter plot and says: 'Find the hidden structure yourself.' In recommender systems, we turn that hidden structure into commercial magic by predicting what people love before they even know it exists."</em>
      <div class="quote-author">— PSUPR Day 4 & RS Day 2/3 Masterclass Notes</div>
    </div>
  </div>
</div>

<!-- 5-Minute Rapid Recall of Day 4 -->
<div class="lesson-card mt-4" style="background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-cyan);">
  <h4><i data-lucide="rotate-ccw"></i> 5-Minute Rapid Recall: Day 4 Core Foundations</h4>
  <div class="grid-3-col mt-2" style="font-size: 0.85rem;">
    <div>
      <strong style="color: #38bdf8;">1. Entropy & Gain Ratio:</strong><br>
      $H(S) = -\\sum p_i \\log_2 p_i$. ID3 favors unique IDs ($Gain = H(S)$); C4.5 Gain Ratio divides by $SplitInfo$ to penalize high branching!
    </div>
    <div>
      <strong style="color: #34d399;">2. SVM Margin & Slack $C$:</strong><br>
      Margin width is $\\frac{2}{\\|w\\|}$. Large $C$ = heavy penalty for errors = narrow margin (less regularization). Small $C$ = wider, softer margin.
    </div>
    <div>
      <strong style="color: #f59e0b;">3. PCA vs LDA:</strong><br>
      PCA is unsupervised (maximizes total variance $w^T \\Sigma w$). LDA is supervised (maximizes between-class over within-class scatter $\\frac{w^T S_B w}{w^T S_W w}$).
    </div>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card">
    <h4><i data-lucide="share-2"></i> Unsupervised Discovery: 3 Clustering Paradigms</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In PSUPR Day 4, clustering algorithms organize data by three distinct philosophies:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. Partitioning (K-Means):</strong> Divides data into $K$ non-overlapping spherical Voronoi cells by iteratively minimizing Within-Cluster Sum of Squares (WCSS).</li>
      <li><strong>2. Hierarchical (Agglomerative):</strong> Builds a bottom-up tree (Dendrogram) by iteratively merging closest cluster pairs using linkage criteria (Single, Complete, Average, Ward).</li>
      <li><strong>3. Density-Based (DBSCAN):</strong> Discovers arbitrary-shaped clusters based on point density ($\\ge \\text{MinPts}$ within $\\epsilon$ radius), naturally isolating noise outliers.</li>
    </ul>
  </div>

  <div class="lesson-card">
    <h4><i data-lucide="shopping-cart"></i> The 3 Recommender Paradigms</h4>
    <p style="font-size: 0.88rem; color: var(--text-secondary);">
      In Reasoning Systems Days 2 & 3, recommendations are generated through:
    </p>
    <ul class="feature-list mt-2" style="font-size: 0.85rem;">
      <li><strong>1. Association Rules (Apriori):</strong> Uncovers co-purchase patterns ($\\{\\text{Diapers}\\} \\to \\{\\text{Beer}\\}$) using Support, Confidence, and Lift.</li>
      <li><strong>2. Collaborative Filtering (CF):</strong> "Users who agreed in the past agree in the future." Uses User-User Pearson correlation or Item-Item cosine similarity.</li>
      <li><strong>3. Latent Factor Models (SVD / NCF):</strong> Compresses the sparse user-item matrix into dense latent taste vectors ($R \\approx P \\cdot Q^T$) or neural embeddings.</li>
    </ul>
  </div>
</div>


<div class="lesson-card" style="margin-top:24px; border:2px solid var(--accent-primary);">
  <h3 style="margin-top:0; color:var(--accent-primary);">⚡ Concise Exam Theory & Step-by-Step Algorithm Blueprint (Day 5)</h3>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Master <strong>Longitudinal Association Rules (IRS Q3b), Collaborative Filtering Critiques (IRS Q3c), and Unsupervised Anomaly Detection (PRS Q2c)</strong>.</p>
  <div class="grid-2-col">
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #3b82f6;">
      <h4 style="margin:0 0 8px 0; color:#3b82f6;">1. Longitudinal Association Rule Mining (IRS Q3b Blueprint)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Patient-Level Baskets:</strong> Group the 5,000 visit rows by <code>Patient ID</code> into <strong>2,000 longitudinal patient baskets</strong> ordered by <code>Diagnosis Date</code>.</li>
        <li><strong>Temporal Prefix Encoding:</strong> Encode earlier visit items as <code>Past_Diag_X</code> and <code>Past_Treat_Y</code>, and later visit items ($\\Delta t \\ge 6\\text{ months}$) as <code>Curr_Diag_Z</code>.</li>
        <li><strong>Metrics:</strong> $\\text{Supp}(A \\to B) = P(A \\cap B)$, $\\text{Conf}(A \\to B) = \\frac{P(A \\cap B)}{P(A)}$, $\\text{Lift}(A \\to B) = \\frac{\\text{Conf}(A \\to B)}{P(B)}$.</li>
        <li><strong>Constraint Filtering:</strong> Filter for $\\text{Lift} &gt; 1$, $\\text{Conf} \\ge c_{\\min}$, LHS containing <code>Past_Diag</code> + <code>Past_Treat</code>, and RHS restricted to <code>Curr_Diag</code>.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #10b981;">
      <h4 style="margin:0 0 8px 0; color:#10b981;">2. Medical Collaborative Filtering Critique (IRS Q3c)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Extreme Sparsity:</strong> $2,000 \\text{ patients} \\times 300 \\text{ treatments} = 600,000$ cells, but only $40\\% \\times 5,000 = 2,000$ ratings exist ($99.67\\%$ missing!).</li>
        <li><strong>Subjective Rating Noise:</strong> Patient 1–5 feedback measures subjective comfort/cost rather than objective clinical cure.</li>
        <li><strong>Pathology Blindness (Fatal Flaw):</strong> Recommending a treatment because "similarly rating patients liked it" ignores the patient's <em>current disease diagnosis</em>, risking severe clinical harm!</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #8b5cf6;">
      <h4 style="margin:0 0 8px 0; color:#8b5cf6;">3. Unsupervised Anomaly Detection (PRS Q2c Blueprint)</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>Extreme Imbalance (3,000 Normal vs 2 Abnormal):</strong> Supervised binary classification fails completely on 2 positive examples (memorizes noise, $0\\%$ generalization).</li>
        <li><strong>One-Class / Autoencoder Solution:</strong> Train an <strong>Autoencoder</strong> (or One-Class SVM / Isolation Forest) <em>solely on the 3,000 Normal vibration sequences</em>.</li>
        <li><strong>Anomaly Scoring:</strong> Flag any test sequence whose reconstruction error $e(\\mathbf{x}) = \\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|_2^2 &gt; \\tau$.</li>
      </ol>
    </div>
    <div style="background:var(--bg-secondary); padding:14px; border-radius:8px; border-left:4px solid #f59e0b;">
      <h4 style="margin:0 0 8px 0; color:#f59e0b;">4. K-Means vs GMM (EM) vs Hierarchical Clustering</h4>
      <ol style="margin:0; padding-left:18px; font-size:0.86rem; line-height:1.55;">
        <li><strong>K-Means:</strong> Hard spherical assignment minimizing WCSS $= \\sum_k \\sum_{i \\in C_k} \\|\\mathbf{x}_i - \\boldsymbol{\\mu}_k\\|^2$.</li>
        <li><strong>GMM (EM):</strong> Soft elliptical assignment $\\gamma_{ik} = \\frac{\\pi_k \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_k, \\Sigma_k)}{\\sum_j \\pi_j \\mathcal{N}(\\mathbf{x}_i \\mid \\boldsymbol{\\mu}_j, \\Sigma_j)}$.</li>
        <li><strong>Silhouette Validation:</strong> $s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))} \\in [-1, 1]$.</li>
      </ol>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-1",
      title: "Level 1: The Clustering Arena — K-Means, Linkages & DBSCAN",
      subtitle: "Spherical partitions vs dendrogram cuts vs density reachability on non-convex manifolds",
      badge: "Clustering Algorithms",
      content: `
<div class="lesson-card">
  <h3>Clustering Algorithms: Formulations & Validation</h3>
  <p class="lead-text">
    Choosing the right clustering algorithm is one of the most common design questions in NUS ISS exams. Each method makes explicit mathematical assumptions about cluster geometry.
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. K-Means (Lloyd's Algorithm)</strong>
      Minimizes Within-Cluster Sum of Squares (WCSS / SSE):
      $$J = \\sum_{k=1}^K \\sum_{x \\in C_k} \\|x - \\mu_k\\|^2$$
      <ul>
        <li><strong>Assumption:</strong> Clusters are spherical, isotropic, and similarly sized.</li>
        <li><strong>Elbow Method:</strong> Plot WCSS vs $K$; choose the bend where marginal gain flattens.</li>
        <li><strong>K-Means++:</strong> Samples initial seeds proportional to squared distance $D(x)^2$.</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">2. Hierarchical Linkages</strong>
      Merges clusters pairwise:
      <ul>
        <li><strong>Single Linkage:</strong> $\\min d(x, y)$ — prone to chaining noise.</li>
        <li><strong>Complete Linkage:</strong> $\\max d(x, y)$ — favors compact, equal-diameter spheres.</li>
        <li><strong>Average Linkage:</strong> $\\frac{1}{|A||B|}\\sum d(x, y)$.</li>
        <li><strong>Ward's Method:</strong> Minimizes total within-cluster variance increase upon merger.</li>
      </ul>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #f59e0b;">3. DBSCAN ($\\epsilon$, MinPts)</strong>
      Density reachability without specifying $K$:
      <ul>
        <li><strong>Core Point:</strong> $\\ge \\text{MinPts}$ within distance $\\epsilon$.</li>
        <li><strong>Border Point:</strong> $< \\text{MinPts}$, but reachable from a Core point.</li>
        <li><strong>Noise Point:</strong> Isolated outlier (unreachable from any core).</li>
        <li><strong>Superpower:</strong> Discovers arbitrary non-convex shapes (rings, moons).</li>
      </ul>
    </div>
  </div>

  <div class="lesson-card mt-3" style="background: rgba(168, 85, 247, 0.05); border-left: 4px solid var(--accent-purple);">
    <h4 style="color: #c084fc;"><i data-lucide="check-square"></i> Master Exam Metric Table: How to Validate Clusters Without Labels</h4>
    <div class="grid-3-col mt-2" style="font-size: 0.82rem;">
      <div>
        <strong>Silhouette Coefficient:</strong><br>
        $s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))} \\in [-1, +1]$<br>
        <span style="color: #38bdf8;">HIGHER is better.</span> $>0.7$ = strong structure.
      </div>
      <div>
        <strong>Davies-Bouldin Index (DBI):</strong><br>
        Evaluates cluster similarity & overlap.<br>
        <span style="color: #ef4444; font-weight: bold;">LOWER is better.</span> Measures tighter separation.
      </div>
      <div>
        <strong>Calinski-Harabasz (CH):</strong><br>
        Ratio of between- to within-cluster dispersion.<br>
        <span style="color: #34d399;">HIGHER is better.</span> Indicates well-defined clusters.
      </div>
    </div>
  </div>
</div>

<!-- Interactive Clustering Arena -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="target"></i> Interactive Clustering Arena Studio</h3>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <select id="cluster-algo-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="kmeans" selected>K-Means Centroid Clustering</option>
        <option value="hierarchical">Hierarchical (Ward Linkage)</option>
        <option value="dbscan">DBSCAN (Density-Based)</option>
      </select>
      <select id="cluster-data-select" class="select-styled" style="font-size: 0.85rem;">
        <option value="blobs" selected>3 Gaussian Blobs (Spherical)</option>
        <option value="moons">Two Non-Convex Moons (Non-Linear)</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Switch between spherical blobs and non-convex moons. Notice how K-Means brutally slices through the two moons because it assumes spherical convexity, while DBSCAN traces the curving density corridors effortlessly!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div style="background: rgba(0,0,0,0.3); border-radius: 8px; border: 1px solid var(--border-color); padding: 10px; display: flex; justify-content: center;">
      <canvas id="cluster-canvas" width="480" height="340" style="max-width: 100%; height: auto; border-radius: 6px;"></canvas>
    </div>

    <div>
      <div id="cluster-k-container" class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Clusters $K$:</span>
          <span id="cluster-val-k" class="badge-tech" style="color: #38bdf8;">3</span>
        </label>
        <input type="range" id="cluster-slider-k" min="2" max="5" step="1" value="3" style="width: 100%; margin-top: 8px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
          <span>K=2</span>
          <span>K=3 (Elbow)</span>
          <span>K=5</span>
        </div>
      </div>

      <div id="cluster-dbscan-container" class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px; margin-bottom: 12px; display: none;">
        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
          <span>Radius $\\epsilon$ (Epsilon):</span>
          <span id="cluster-val-eps" class="badge-tech" style="color: #34d399;">0.15</span>
        </label>
        <input type="range" id="cluster-slider-eps" min="0.08" max="0.30" step="0.01" value="0.15" style="width: 100%; margin-top: 8px;">

        <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between; margin-top: 12px;">
          <span>MinPts:</span>
          <span id="cluster-val-minpts" class="badge-tech" style="color: #f59e0b;">3</span>
        </label>
        <input type="range" id="cluster-slider-minpts" min="2" max="6" step="1" value="3" style="width: 100%; margin-top: 8px;">
      </div>

      <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
        <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 600;">Live Cluster Validation Metrics:</span>
        <div id="cluster-metrics-display" class="mt-2">
          <!-- Rendered dynamically by SprintDay5Visualizers.initClusteringArena() -->
        </div>
      </div>
    </div>
  </div>
</div>
`
    },
    {
      id: "level-2",
      title: "Level 2: Market Basket Analysis — Apriori Support, Confidence & Lift",
      subtitle: "Uncovering co-purchase affinity and decoding the dangerous high-confidence fallacy",
      badge: "Association Rules",
      content: `
<div class="lesson-card">
  <h3>Market Basket Analysis & The Apriori Algorithm</h3>
  <p class="lead-text">
    Association Rule Mining discovers relational rules of the form $A \\to B$ ("If a customer buys itemset $A$, they are likely to also buy itemset $B$").
  </p>

  <div class="grid-3-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. Support</strong>
      How frequently the combination appears in the entire dataset:
      $$\\text{Support}(A \\to B) = P(A \\cup B) = \\frac{\\text{freq}(A, B)}{N}$$
      Filters out rare one-off coincidences.
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #f59e0b;">2. Confidence</strong>
      How often $B$ is purchased when $A$ is purchased:
      $$\\text{Confidence}(A \\to B) = P(B|A) = \\frac{\\text{Support}(A \\cup B)}{\\text{Support}(A)}$$
      Measures rule reliability.
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">3. Lift Ratio</strong>
      How much $A$ boosts the purchase of $B$ over $B$'s baseline rate:
      $$\\text{Lift}(A \\to B) = \\frac{P(A \\cup B)}{P(A) \\cdot P(B)} = \\frac{\\text{Confidence}(A \\to B)}{\\text{Support}(B)}$$
      <ul>
        <li>$\\text{Lift} > 1$: Positive synergy.</li>
        <li>$\\text{Lift} = 1$: Independent.</li>
        <li>$\\text{Lift} < 1$: Negative / substitute.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive Apriori Calculator -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="shopping-bag"></i> Interactive Supermarket Apriori Calculator</h3>
    <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem;">
      <label>Rule:</label>
      <select id="apriori-item-a" class="select-styled">
        <option value="Diapers" selected>Diapers</option>
        <option value="Milk">Milk</option>
        <option value="Bread">Bread</option>
        <option value="Beer">Beer</option>
        <option value="Butter">Butter</option>
      </select>
      <span>➔</span>
      <select id="apriori-item-b" class="select-styled">
        <option value="Beer" selected>Beer</option>
        <option value="Bread">Bread</option>
        <option value="Butter">Butter</option>
        <option value="Milk">Milk</option>
        <option value="Eggs">Eggs</option>
      </select>
    </div>
  </div>
  <p class="text-secondary mt-1">
    Based on 10 authentic transactions from RS Day 2. Select any Antecedent $A$ and Consequent $B$ to see exact itemset counts, Support, Confidence, and Lift calculated live!
  </p>

  <div id="apriori-result-container" class="mt-3">
    <!-- Rendered dynamically by SprintDay5Visualizers.initAprioriCalculator() -->
  </div>
</div>
`
    },
    {
      id: "level-3",
      title: "Level 3: Collaborative Filtering & SVD Matrix Factorization",
      subtitle: "Mean-centered Pearson user-user prediction and low-rank latent factor decomposition",
      badge: "Collaborative Filtering",
      content: `
<div class="lesson-card">
  <h3>Collaborative Filtering & Latent Factor SVD</h3>
  <p class="lead-text">
    Recommender systems predict unseen ratings $\\hat{r}_{u,i}$ by either exploiting similarities between people (User-User CF) or projecting ratings into a low-dimensional latent space (Matrix Factorization).
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #38bdf8;">1. Mean-Centered User-User CF Formula</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Raw ratings cannot be averaged directly because Alice may grade on a curve (average 4.5 stars) while David is harsh (average 2.0 stars). We compute user mean $\\bar{r}_u$ and predict:
      </p>
      $$\\hat{r}_{u,i} = \\bar{r}_u + \\frac{\\sum_{v \\in N} \\text{sim}(u, v) \\cdot (r_{v,i} - \\bar{r}_v)}{\\sum_{v \\in N} |\\text{sim}(u, v)|}$$
      <p style="color: var(--text-secondary); font-size: 0.8rem;">
        Where $\\text{sim}(u, v)$ is the Pearson Correlation Coefficient over co-rated items:
        $$\\text{sim}(u, v) = \\frac{\\sum_{j} (r_{u,j} - \\bar{r}_u)(r_{v,j} - \\bar{r}_v)}{\\sqrt{\\sum (r_{u,j} - \\bar{r}_u)^2} \\sqrt{\\sum (r_{v,j} - \\bar{r}_v)^2}}$$
      </p>
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 14px; border-radius: 8px; border: 1px solid var(--border-color);">
      <h4 style="color: #34d399;">2. Latent Factor Matrix Factorization (SVD)</h4>
      <p style="color: var(--text-secondary); margin-top: 4px;">
        Instead of finding explicit neighbor rows, we factorize the sparse rating matrix $R \\in \\mathbb{R}^{m \\times n}$ into two dense rank-$k$ matrices:
      </p>
      $$R \\approx P \\cdot Q^T$$
      <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
        <li>$P \\in \\mathbb{R}^{m \\times k}$: User latent vector $p_u$ (affinity for genres/themes).</li>
        <li>$Q \\in \\mathbb{R}^{n \\times k}$: Item latent vector $q_i$ (presence of genres/themes).</li>
        <li>Predicted rating is the simple dot product: $\\hat{r}_{ui} = p_u \\cdot q_i^T$.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive Collaborative Filtering Matrix -->
<div class="lesson-card mt-4">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <h3><i data-lucide="film"></i> Interactive Movie Rating Matrix (User-User CF Studio)</h3>
    <span class="badge-tech" style="font-size: 0.75rem;">Click any dashed 'Predict?' button</span>
  </div>
  <p class="text-secondary mt-1">
    Click any unrated movie cell below. Watch the step-by-step mean-centered formula execute in real time, accounting for user baselines and neighbor Pearson correlations!
  </p>

  <div id="cf-matrix-container" class="mt-3" style="overflow-x: auto;">
    <!-- Rendered dynamically by SprintDay5Visualizers.initCollaborativeFilteringMatrix() -->
  </div>

  <div id="cf-calc-output" class="mt-3">
    <!-- Rendered dynamically -->
  </div>
</div>
`
    },
    {
      id: "level-4",
      title: "Level 4: Advanced Recommenders — Implicit Feedback, Neural CF & Python Labs",
      subtitle: "Handling clicks and dwell time, NeuMF architectures, and scikit-learn/Surprise code",
      badge: "Deep Recommenders",
      content: `
<div class="lesson-card">
  <h3>Beyond Star Ratings: Implicit Feedback & Neural CF</h3>
  <p class="lead-text">
    In the real world (YouTube, Netflix, TikTok), users rarely give 1–5 star ratings. Instead, systems observe <strong>implicit feedback</strong>: clicks, views, purchases, and dwell time.
  </p>

  <div class="grid-2-col mt-3" style="font-size: 0.85rem;">
    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #38bdf8;">1. Implicit Confidence Formulation</strong>
      (Hu, Koren, Volinsky, 2008):
      Let preference $p_{ui} = 1$ if interaction $r_{ui} > 0$, else $0$. The model assigns a <strong>confidence</strong> $c_{ui}$ to each observation:
      $$c_{ui} = 1 + \\alpha r_{ui}$$
      Where $\\alpha$ (typically 40) scales user engagement. High dwell time $\\to$ high confidence in positive preference!
    </div>

    <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color);">
      <strong style="color: #34d399;">2. Neural Collaborative Filtering (NCF / NeuMF)</strong>
      (He et al., WWW 2017):
      Replaces linear dot products with neural networks:
      <ul>
        <li><strong>GMF Branch:</strong> Generalized Matrix Factorization captures linear element-wise interactions $\\phi^{GMF} = p_u \\odot q_i$.</li>
        <li><strong>MLP Branch:</strong> Concatenates $[p_u, q_i]$ through non-linear hidden layers to learn complex feature interactions.</li>
        <li><strong>NeuMF Output:</strong> Fuses GMF and MLP before a sigmoid prediction layer.</li>
      </ul>
    </div>
  </div>
</div>

<!-- Interactive Implicit Feedback Studio -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="sliders"></i> Interactive Implicit Interaction Confidence Weighter</h3>
  <p class="text-secondary mt-1">
    Adjust the user interaction frequency $r_{ui}$ (e.g. video watch counts or e-commerce clicks). Notice how baseline confidence starts at 1 and scales linearly with $\\alpha = 40$!
  </p>

  <div class="grid-2-col mt-3" style="grid-template-columns: 1.2fr 1fr;">
    <div class="lesson-card" style="background: rgba(255,255,255,0.02); padding: 14px;">
      <label style="font-weight: 600; font-size: 0.88rem; display: flex; justify-content: space-between;">
        <span>User Interaction Count $r_{ui}$:</span>
        <span id="ncf-val-interactions" class="badge-tech" style="color: #38bdf8;">5 Views</span>
      </label>
      <input type="range" id="ncf-slider-interactions" min="0" max="25" step="1" value="5" style="width: 100%; margin-top: 8px;">
      <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 4px;">
        <span>0 (Unobserved / Weak)</span>
        <span>10</span>
        <span>25 (Obsessive Interest)</span>
      </div>
    </div>

    <div class="lesson-card" style="background: rgba(56,189,248,0.06); padding: 14px; border-left: 4px solid #38bdf8; display: flex; flex-direction: column; justify-content: center;">
      <span style="font-size: 0.75rem; color: var(--text-muted);">Calculated Confidence $c_{ui} = 1 + 40 \\cdot r_{ui}$:</span>
      <strong id="ncf-val-confidence" style="font-size: 1.8rem; color: #38bdf8; margin-top: 4px;">201</strong>
      <span style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 4px;">Weight assigned to this user-item pair during matrix factorization loss optimization.</span>
    </div>
  </div>
</div>

<!-- Python Labs -->
<div class="lesson-card mt-4">
  <h3><i data-lucide="code"></i> Verified Python Code Labs (Clustering & Surprise Recommenders)</h3>
  <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 14px; border: 1px solid var(--border-color); margin-top: 10px;">
    <strong style="color: #38bdf8;">1. DBSCAN & Silhouette Score in Scikit-Learn</strong>
    <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>from sklearn.cluster import DBSCAN
from sklearn.metrics import silhouette_score, davies_bouldin_score

# DBSCAN with eps and min_samples
db = DBSCAN(eps=0.2, min_samples=4)
labels = db.fit_predict(X_scaled)

# Filter out noise (-1) for internal metrics
core_mask = labels != -1
if len(set(labels[core_mask])) > 1:
    sil = silhouette_score(X_scaled[core_mask], labels[core_mask])
    dbi = davies_bouldin_score(X_scaled[core_mask], labels[core_mask])
    print(f"Clusters: {len(set(labels)) - (1 if -1 in labels else 0)} | Silhouette: {sil:.3f} | DBI: {dbi:.3f}")</code></pre>

    <strong style="color: #34d399; margin-top: 14px; display: block;">2. SVD Matrix Factorization with Surprise Library</strong>
    <pre style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 6px; font-size: 0.8rem; overflow-x: auto; color: #e2e8f0; margin-top: 6px;"><code>from surprise import Dataset, SVD, Reader
from surprise.model_selection import cross_validate

# Prepare rating data (userId, itemId, rating)
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['user_id', 'item_id', 'rating']], reader)

# Train Funk SVD with 20 latent factors
algo = SVD(n_factors=20, lr_all=0.005, reg_all=0.02, n_epochs=30)
cross_validate(algo, data, measures=['RMSE', 'MAE'], cv=5, verbose=True)

# Predict rating for user 'Alice' on movie 'Inception'
pred = algo.predict(uid='Alice', iid='Inception')
print(f"Estimated rating: {pred.est:.2f} stars")</code></pre>
  </div>
</div>
`
    },
    {
      id: "level-5",
      title: "Level 5: Exam Crucible — 5 Dangerous Traps & Mid-Course Synthesis",
      subtitle: "The high-confidence trap, K-Means shape blindness, and mid-course mastery matrix",
      badge: "Exam Traps & Synthesis",
      content: `
<div class="lesson-card hero-card" style="border-left: 4px solid #ef4444;">
  <div class="card-icon" style="color: #ef4444;"><i data-lucide="shield-alert"></i></div>
  <div class="card-body">
    <h3>The 5 Fatal Exam Traps for Day 5</h3>
    <p class="lead-text">
      Examiners in NUS ISS love testing where clustering algorithms fail and how recommender metrics trick unwary engineers.
    </p>
  </div>
</div>

<div class="grid-2-col mt-4">
  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 1: The Lift < 1 High Confidence Illusion</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> An association rule $A \\to B$ has a staggering $85\\%$ Confidence. A student writes: <em>"This is a fantastic rule, we should bundle $A$ with $B$."</em><br>
      <strong>The Reality:</strong> What if $B$ is a universally bought item (like Bread or Milk) with $90\\%$ baseline Support? Then $\\text{Lift} = \\frac{0.85}{0.90} = 0.944 < 1$! Buying $A$ actually <strong>decreases</strong> the likelihood of buying $B$! Always check that $\\text{Lift} > 1$ before recommending.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #ef4444;">
    <h4 style="color: #ef4444;">Trap 2: K-Means Non-Convex Cluster Failure</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Running K-Means on concentric circles, interlocking spirals, or moon manifolds.<br>
      <strong>The Reality:</strong> K-Means uses Euclidean distance to linear centroids, forming strictly <strong>convex polygonal Voronoi cells</strong>. It CANNOT separate non-convex shapes, no matter how many iterations you run! You MUST use DBSCAN or Spectral Clustering for arbitrary shapes.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 3: Single Linkage Chaining Effect</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Choosing Single Linkage in Hierarchical Clustering because it is fast.<br>
      <strong>The Reality:</strong> Single Linkage uses the minimum distance between any single pair of points. If there is a thin line of background noise bridging two large clusters, Single Linkage will chain them together into one huge cluster. Use Complete Linkage or Ward's method instead.
    </p>
  </div>

  <div class="lesson-card" style="border-left: 3px solid #f59e0b;">
    <h4 style="color: #f59e0b;">Trap 4: Metric Optimization Inversion</h4>
    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
      <strong>The Trap:</strong> Choosing a cluster configuration that maximizes the Davies-Bouldin Index (DBI).<br>
      <strong>The Reality:</strong> Unlike Silhouette and Calinski-Harabasz (where higher is better), <strong>Davies-Bouldin Index must be MINIMIZED</strong>! DBI measures the ratio of within-cluster scatter to separation; a smaller number means tighter, better-separated clusters.
    </p>
  </div>
</div>

<div class="lesson-card mt-3" style="border-left: 3px solid #38bdf8;">
  <h4 style="color: #38bdf8;">Trap 5: Raw Rating Collapse in Collaborative Filtering</h4>
  <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
    <strong>The Trap:</strong> Directly averaging raw ratings of neighbors to predict target ratings.<br>
    <strong>The Reality:</strong> Critical users give average ratings of 2.5, while generous users give 4.5. Without mean-centering ($r_{v,i} - \\bar{r}_v$), the prediction is heavily biased by generous neighbors regardless of true affinity.
  </p>
</div>
`
    },
    {
      id: "level-6",
      title: "Level 6: Slide Mastery Quizzes — 10 High-Yield Exam Questions",
      subtitle: "Test your mastery against authentic NUS ISS exam questions with instant step-by-step solutions",
      badge: "Knowledge Check",
      content: `
<div class="lesson-card">
  <h3><i data-lucide="check-square"></i> Day 5 Slide Mastery Crucible</h3>
  <p class="lead-text">
    Answer all 10 questions below. Each question is sampled directly from past NUS ISS examination patterns covering K-Means, DBSCAN, Hierarchical Linkages, Apriori, and Collaborative Filtering.
  </p>
  <div id="sprint-quiz-container" class="mt-4">
    <!-- Rendered dynamically by Quiz Engine -->
  </div>
</div>
`
    }
  ]
};
