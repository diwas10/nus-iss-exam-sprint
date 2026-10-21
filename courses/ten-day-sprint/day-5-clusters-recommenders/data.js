// Day 5 Reference Data: Clustering, Apriori Market Basket, Collaborative Filtering & SVD

window.DAY5_CLUSTERS_RECOMMENDERS_DATA = {
  // 1. Clustering 2D Point Datasets
  // Dataset A: 3 Distinct Gaussian Clusters (Well-separated)
  gaussianBlobs: [
    // Cluster 1 (Centroid ~ 0.25, 0.30)
    { x: 0.20, y: 0.28 }, { x: 0.24, y: 0.32 }, { x: 0.28, y: 0.25 },
    { x: 0.22, y: 0.35 }, { x: 0.26, y: 0.30 }, { x: 0.30, y: 0.33 },
    { x: 0.18, y: 0.24 }, { x: 0.25, y: 0.22 },
    // Cluster 2 (Centroid ~ 0.75, 0.30)
    { x: 0.70, y: 0.28 }, { x: 0.75, y: 0.33 }, { x: 0.78, y: 0.26 },
    { x: 0.72, y: 0.35 }, { x: 0.76, y: 0.29 }, { x: 0.80, y: 0.32 },
    { x: 0.68, y: 0.25 }, { x: 0.74, y: 0.22 },
    // Cluster 3 (Centroid ~ 0.50, 0.75)
    { x: 0.45, y: 0.72 }, { x: 0.50, y: 0.78 }, { x: 0.54, y: 0.70 },
    { x: 0.48, y: 0.76 }, { x: 0.52, y: 0.73 }, { x: 0.55, y: 0.80 },
    { x: 0.42, y: 0.74 }, { x: 0.50, y: 0.82 }
  ],

  // Dataset B: Non-Convex Two Moons (K-Means fails, DBSCAN succeeds)
  twoMoons: [
    // Upper Moon
    { x: 0.20, y: 0.45 }, { x: 0.25, y: 0.38 }, { x: 0.32, y: 0.34 },
    { x: 0.40, y: 0.32 }, { x: 0.48, y: 0.34 }, { x: 0.55, y: 0.38 },
    { x: 0.60, y: 0.45 },
    // Lower Moon
    { x: 0.40, y: 0.55 }, { x: 0.45, y: 0.62 }, { x: 0.52, y: 0.66 },
    { x: 0.60, y: 0.68 }, { x: 0.68, y: 0.66 }, { x: 0.75, y: 0.62 },
    { x: 0.80, y: 0.55 },
    // Noise Outliers
    { x: 0.15, y: 0.85 }, { x: 0.88, y: 0.18 }
  ],

  // 2. Supermarket Transactions for Apriori Market Basket Analysis (PSUPR Day 4 & RS Day 2)
  transactions: [
    { tid: "T100", items: ["Milk", "Bread", "Beer"] },
    { tid: "T200", items: ["Bread", "Butter"] },
    { tid: "T300", items: ["Milk", "Diapers", "Beer", "Eggs"] },
    { tid: "T400", items: ["Bread", "Butter", "Milk"] },
    { tid: "T500", items: ["Diapers", "Beer"] },
    { tid: "T600", items: ["Milk", "Bread", "Butter"] },
    { tid: "T700", items: ["Diapers", "Beer", "Bread"] },
    { tid: "T800", items: ["Milk", "Eggs"] },
    { tid: "T900", items: ["Bread", "Butter", "Beer"] },
    { tid: "T1000", items: ["Milk", "Diapers", "Beer"] }
  ],

  // 3. User-Item Collaborative Filtering Rating Matrix (1 to 5 stars, null = unrated)
  // Used in RS Day 2 & 3 Collaborative Filtering workshop
  cfMatrix: {
    users: ["Alice", "Bob", "Charlie", "David", "Eve"],
    items: [
      { id: "M1", title: "The Matrix (Sci-Fi)" },
      { id: "M2", title: "Titanic (Romance)" },
      { id: "M3", title: "Inception (Sci-Fi)" },
      { id: "M4", title: "Star Wars (Sci-Fi)" },
      { id: "M5", title: "Toy Story (Animation)" }
    ],
    // Matrix [user_idx][item_idx]
    ratings: [
      [5, 1, null, 5, 2], // Alice (loves Sci-Fi, target: predict M3 Inception)
      [4, 2, 5, null, 1], // Bob (loves Sci-Fi, very similar to Alice)
      [1, 5, 2, 1, 4],    // Charlie (loves Romance & Animation)
      [null, 4, 1, 2, 5], // David (similar to Charlie)
      [5, 2, 4, 4, null]  // Eve (loves Sci-Fi)
    ],
    // Pre-computed user mean ratings across observed items
    userMeans: [3.25, 3.00, 2.60, 3.00, 3.75]
  },

  // 4. Latent Factor SVD (Singular Value Decomposition) 2D Latent Embeddings
  // Rank-2 factorization: Dimension 1 = SciFi-ness, Dimension 2 = Romance/Family
  svdData: {
    userEmbeddings: {
      "Alice": [0.92, -0.45],
      "Bob": [0.85, -0.38],
      "Charlie": [-0.78, 0.82],
      "David": [-0.65, 0.75],
      "Eve": [0.88, -0.22]
    },
    itemEmbeddings: {
      "The Matrix": [0.95, -0.50],
      "Titanic": [-0.85, 0.70],
      "Inception": [0.90, -0.42],
      "Star Wars": [0.88, -0.30],
      "Toy Story": [-0.40, 0.85]
    }
  }
};
