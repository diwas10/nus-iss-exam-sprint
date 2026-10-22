// NUS ISS 100% Comprehensive Syllabus Traceability Matrix
// Maps every topic across all 6 courses (PSUPR, PRMLS, ISSM, MR, RS, CS) to the 3-Day Sprint

window.TRACEABILITY_MATRIX = [
  {
    "id": "PSUPR-01",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Pattern Recognition Paradigms & Data Preprocessing",
    "sourcePdf": "PSUPR_Day1a.pdf & PSUPR_Day1b.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 1 \u2014 Machine Learning Foundations",
    "explanation": "Five-stage PR pipeline (Sensory input -> Preprocessing -> Feature Extraction -> Classification -> Decision), feature scaling (MinMax, Standard, Robust), missing value imputation, and categorical encoding.",
    "visualizer": "Feature Scaling & Pipeline Flow Simulator",
    "workedExample": "Calculating MinMax vs Z-score normalization for skewed sensor ranges.",
    "assessment": "Diagnostic Q1 & Q2, Level A Concept Q1, Level B Preprocessing calculation."
  },
  {
    "id": "PSUPR-02",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Classical Supervised Learning: k-NN, Logistic Regression & Naive Bayes",
    "sourcePdf": "PSUPR_Day1b.pdf & PSUPR_Day2.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 2 \u2014 Classical Supervised Learning",
    "explanation": "k-NN distance metrics (Euclidean, Manhattan), Logistic Regression log-odds, Sigmoid activation, Naive Bayes conditional independence, Bayes decision rule, and Laplace smoothing (+1 in numerator, +|V| in denominator).",
    "visualizer": "k-NN Decision Boundary Playground & Naive Bayes Laplace Studio",
    "workedExample": "Full manual Laplace smoothing calculation for zero-frequency attribute across classes.",
    "assessment": "Slide Quiz Q2, Exam Question 1 & 2, Level B Laplace Calculation."
  },
  {
    "id": "PSUPR-03",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Decision Trees, Entropy & Gini Impurity",
    "sourcePdf": "PSUPR_Day2.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 2 \u2014 Classical Supervised Learning",
    "explanation": "Shannon entropy H(S), Information Gain IG, Gini impurity, split selection, pre-pruning vs cost-complexity post-pruning, and tree interpretability.",
    "visualizer": "Decision Tree Split & Entropy Simulator",
    "workedExample": "Calculating Information Gain vs Gini Index for candidate split on diabetes dataset.",
    "assessment": "Slide Quiz Q3, Level B Entropy Calculation, Level C Decision Tree selection."
  },
  {
    "id": "PSUPR-04",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Model Evaluation, ROC-AUC, Lift & Business Objectives",
    "sourcePdf": "PSUPR_Day2.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 3 \u2014 Model Evaluation and Explainability",
    "explanation": "Confusion matrix (TP, TN, FP, FN), Precision, Recall, Specificity, F1, ROC curve, AUC, Cumulative Gains chart, Decile Lift calculation, and threshold selection tailored to bookstore couponing business objectives (PRS Q1).",
    "visualizer": "Confusion Matrix & Cumulative Lift Decile Studio",
    "workedExample": "Decile Lift calculation comparing top 20% targeting vs random baseline.",
    "assessment": "PRS Sample Paper Q1b & Q1c, Slide Quiz Q4, Level B Precision/Recall calculation."
  },
  {
    "id": "PSUPR-05",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Support Vector Machines (SVM), Kernels & Slack Variables",
    "sourcePdf": "PSUPR_Day5_Notes_5_5.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 4 \u2014 Support Vector Machines",
    "explanation": "Hyperplane geometry, margin width 2/||w||, hard vs soft margins, slack variables xi, penalty parameter C, Kernel Trick (Linear, Poly, RBF Gaussian), gamma tuning, and KKT complementary slackness.",
    "visualizer": "SVM Hyperplane Margin, C & Gamma Playground",
    "workedExample": "Solving margin width, identifying support vectors, and classifying points by slack variable value.",
    "assessment": "PRS Sample Paper Q1b, Slide Quiz Q5, Level B Margin Width calculation."
  },
  {
    "id": "PSUPR-06",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Feature Selection, PCA & Fisher's LDA",
    "sourcePdf": "PSUPR_Day3_DimensionReduction.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 5 \u2014 Feature Selection and Dimensionality Reduction",
    "explanation": "Filter (Chi2, ANOVA, Mutual Info), Wrapper (RFE), Embedded (Lasso L1). PCA zero-centering, covariance matrix, eigenvalues/eigenvectors, scree plot, explained variance ratio, target leakage prevention (PRS Q1e), and Fisher's LDA supervised scatter criterion.",
    "visualizer": "PCA vs LDA 2D Projection & Covariance Axis Studio",
    "workedExample": "Calculating 2x2 covariance matrix, solving eigenvalues lambda, and computing 1st principal component.",
    "assessment": "PRS Sample Paper Q1e, Slide Quiz Q6, Level B PCA Eigenvalue solving."
  },
  {
    "id": "PSUPR-07",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Clustering: K-Means, DBSCAN & Hierarchical Linkage",
    "sourcePdf": "PSUPR_Day4_ClusterAnalysis.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 6 \u2014 Clustering",
    "explanation": "K-Means and K-Means++ initialization, WCSS, Elbow method, Silhouette score, Hierarchical agglomerative clustering (Single, Complete, Average, Ward), Dendrograms, DBSCAN (eps, MinPts, Core, Border, Noise), and GMM Expectation-Maximization.",
    "visualizer": "K-Means & DBSCAN Dynamic Clustering Studio",
    "workedExample": "Tracing 1 iteration of K-Means centroid update and calculating silhouette score for a sample point.",
    "assessment": "Slide Quiz Q7, Level B Silhouette calculation, Level C Clustering algorithm selection."
  },
  {
    "id": "PSUPR-08",
    "course": "PSUPR",
    "exam": "PRS",
    "topic": "Regression Models, RBF Networks & SOM",
    "sourcePdf": "PSUPR_Day5_Notes_5_1.pdf to 5_4.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 7 \u2014 Regression and Alternative Neural Models",
    "explanation": "Linear & Polynomial regression, OLS normal equation, MAE, MSE, RMSE, R-squared, Radial Basis Function (RBF) networks, General Regression Neural Networks (GRNN), and Kohonen Self-Organizing Maps (SOM).",
    "visualizer": "Regression Curve Fitting & RBF Gaussian Basis Studio",
    "workedExample": "Calculating MSE, RMSE and R2 on test set predictions.",
    "assessment": "Slide Quiz Q8, Level B R2 score calculation."
  },
  {
    "id": "PRMLS-01",
    "course": "PRMLS",
    "exam": "PRS",
    "topic": "Multilayer Perceptrons & Backpropagation Calculus",
    "sourcePdf": "PRMLS_Day1a.pdf & PRMLS_Day1b.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 4 \u2014 Neural Network Foundations",
    "explanation": "Perceptron, XOR non-separability, MLP forward propagation, activation functions (Sigmoid, ReLU, Softmax), cross-entropy loss, gradient descent with momentum and Adam, chain rule backprop derivations, and regularization (L1/L2, Dropout, BatchNorm).",
    "visualizer": "Backpropagation Gradient Flow & Weight Update Studio",
    "workedExample": "Full manual single-step backpropagation weight gradient derivation on 2-layer network.",
    "assessment": "PRS Sample Paper Q1b, Slide Quiz Q4, Level B Backprop Calculus."
  },
  {
    "id": "PRMLS-02",
    "course": "PRMLS",
    "exam": "PRS",
    "topic": "2D CNNs, Parameter Sizing & Global Average Pooling Redesign",
    "sourcePdf": "PRMLS_Day2a.pdf & PRMLS_Day2b.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 5 \u2014 CNNs and Deep Vision",
    "explanation": "2D convolution operations, kernel, padding, stride, output dimensions, receptive fields, parameter count derivations, Flatten vs Global Average Pooling (GAP) parameter elimination and overfitting prevention (PRS Q2a), ResNet skip connections, VGG, MobileNet, transfer learning, and computer vision tasks.",
    "visualizer": "CNN Output Sizer, Receptive Field & Parameter Calculator (PRS Q2a Redesign)",
    "workedExample": "Step-by-step parameter count calculation of Flatten (120M params) vs GAP (0 params) redesign.",
    "assessment": "PRS Sample Paper Q2a, Slide Quiz Q5, Level B CNN Parameter Counting."
  },
  {
    "id": "PRMLS-03",
    "course": "PRMLS",
    "exam": "PRS",
    "topic": "Sequential Models: RNN, LSTM & Clickstream Modeling",
    "sourcePdf": "PRMLS_Day3a.pdf & PRMLS_Day3b.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 6 \u2014 Sequential Models",
    "explanation": "RNN hidden state recurrence, BPTT, vanishing/exploding gradients proof via spectral radius, LSTM gating (Forget, Input, Candidate, Output), Constant Error Carousel cell state, GRU, 1D CNNs, sequence masking, and clickstream user intention modeling (PRS Q1d).",
    "visualizer": "LSTM Gate Valves & Constant Error Carousel Studio",
    "workedExample": "Computing forget gate activation, candidate state update, and next hidden state vector.",
    "assessment": "PRS Sample Paper Q1d, Slide Quiz Q6, Level C Sequential model proposal."
  },
  {
    "id": "PRMLS-04",
    "course": "PRMLS",
    "exam": "PRS",
    "topic": "Transformers & Scaled Dot-Product Attention",
    "sourcePdf": "PRMLS_Day4a.pdf & PRMLS_Day4b.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 8 \u2014 Transformers",
    "explanation": "Q, K, V linear projections, scaled dot-product attention softmax(QK^T / sqrt(d_k))V, why scaling factor is required, multi-head attention, sinusoidal positional encoding, encoder-decoder blocks, LayerNorm, and BERT vs GPT.",
    "visualizer": "Transformer Scaled Dot-Product Attention Heatmap Studio",
    "workedExample": "Manual 2x2 Query-Key dot product, scale by sqrt(d_k), softmax row-normalization, and value aggregation.",
    "assessment": "Slide Quiz Q8, Level B Attention Matrix Calculation."
  },
  {
    "id": "PRMLS-05",
    "course": "PRMLS",
    "exam": "PRS",
    "topic": "Ensemble Methods: Bagging, Random Forest, AdaBoost & Stacking",
    "sourcePdf": "PRMLS_Day5.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 11 \u2014 Ensemble Learning",
    "explanation": "Condorcet's Jury Theorem, bias-variance reduction, Bagging and Random Forest variance formula (rho*sigma^2 + (1-rho)/M * sigma^2), AdaBoost sample weight updates and alpha model weights, Gradient Boosting residuals, Stacking meta-models with Out-of-fold cross-validation.",
    "visualizer": "Ensemble Studio: AdaBoost Sample Weights & Stacking OOF Flow",
    "workedExample": "Calculating AdaBoost classifier weight alpha_t and updated sample weights for misclassified instance.",
    "assessment": "Slide Quiz Q11, Level B AdaBoost Alpha calculation, Level C Ensemble selection."
  },
  {
    "id": "ISSM-01",
    "course": "ISSM",
    "exam": "PRS",
    "topic": "Sensors, ADC Sampling, Nyquist Theorem & Aliasing",
    "sourcePdf": "ISSM_Day1_Introduction.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 1 \u2014 Signal Foundations",
    "explanation": "Physical transducers, continuous vs discrete signals, ADC quantization, bit depth, SQNR, Nyquist theorem fs > 2*f_max, Nyquist folding frequency f_N = fs/2, ghost aliasing f_alias = |f - k*fs|, and analog anti-aliasing low-pass hardware filter.",
    "visualizer": "Nyquist Sampling Rate & Spectral Aliasing Folding Studio",
    "workedExample": "Calculating ghost frequency when 180 Hz signal is sampled at 100 Hz.",
    "assessment": "Slide Quiz Q1, Level B Aliasing Calculation."
  },
  {
    "id": "ISSM-02",
    "course": "ISSM",
    "exam": "PRS",
    "topic": "Signal Preprocessing: Peak Detection, arPLS & Dynamic Time Warping (DTW)",
    "sourcePdf": "ISSM_Day1_Introduction.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 2 \u2014 Signal Preprocessing",
    "explanation": "Filtering (Butterworth, Savitzky-Golay), peak prominence, baseline drift causes, arPLS Whittaker asymmetric penalized least squares, DTW temporal elasticity, local distance matrix, cumulative cost recurrence, and optimal warping path traceback.",
    "visualizer": "arPLS Baseline Correction & DTW Alignment Matrix Studio",
    "workedExample": "Filling 3x3 DTW cumulative cost matrix and identifying optimal warping path.",
    "assessment": "Slide Quiz Q2, Level B DTW Matrix calculation."
  },
  {
    "id": "ISSM-03",
    "course": "ISSM",
    "exam": "PRS",
    "topic": "Signal Transforms: STFT Spectrograms & 2D Wavelet Subbands",
    "sourcePdf": "ISSM_Day2_SignalTransformation.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 3 \u2014 Signal Transformations",
    "explanation": "Fourier Transform limitations, frequency bins Delta_f = fs/N, STFT windowing trade-offs (Gabor Heisenberg limit), 1D Haar wavelets, Multiresolution Analysis (MRA), 2D Wavelet LL, LH, HL, HH subbands, and Parseval energy conservation.",
    "visualizer": "STFT Time-Frequency Trade-off & 2D Wavelet Subband Studio",
    "workedExample": "Calculating 1D Haar wavelet low-pass approximation and high-pass detail coefficients.",
    "assessment": "PRS Sample Paper Q2c, Slide Quiz Q3, Level B Wavelet Subband energy calculation."
  },
  {
    "id": "ISSM-04",
    "course": "ISSM",
    "exam": "PRS",
    "topic": "Sensory Machine Learning: Autoencoders & 3-Sigma Anomaly Detection",
    "sourcePdf": "ISSM_Day3_SignalProcessingML.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 9 \u2014 Autoencoders and Anomaly Detection",
    "explanation": "Data-driven representation, basis vectors, deep autoencoders, reconstruction MSE loss, 3-sigma anomaly threshold calibration (tau = mu_e + 3*sigma_e), and diagnosing why supervised classification fails on 3000:2 imbalanced datasets (PRS Q2c).",
    "visualizer": "Autoencoder Reconstruction & 3-Sigma Anomaly Detection Studio (PRS Q2c)",
    "workedExample": "Calibrating 3-sigma anomaly threshold on normal validation set and evaluating test sequence error.",
    "assessment": "PRS Sample Paper Q2c, Slide Quiz Q9, Level C Anomaly proposal deconstruction."
  },
  {
    "id": "ISSM-05",
    "course": "ISSM",
    "exam": "PRS",
    "topic": "Multimodal Sensing, Fusion Architectures & Reverse Vending Machine (RVM)",
    "sourcePdf": "ISSM_Day4_SenseMakingSensoryData.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 12 \u2014 Multimodal Intelligent Sensing",
    "explanation": "Modality characteristics (vision, acoustic, vibration, load cell, inductive), sensor complementarity vs redundancy, Early vs Late vs Hybrid sensor fusion trade-offs, handling missing sensors, and RVM digital twin architecture.",
    "visualizer": "Multimodal Sensor Fusion & RVM Digital Twin Studio",
    "workedExample": "Designing Early vs Late fusion scoring matrix for multi-sensor bottle classification.",
    "assessment": "Slide Quiz Q12, Level D Multimodal System Architecture Design."
  },
  {
    "id": "MR-01",
    "course": "MR",
    "exam": "IRS",
    "topic": "State-Space Representation, Uninformed & A* Heuristic Search",
    "sourcePdf": "MR_Day1_MachineReasoning.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 8 \u2014 Search and Constraint Satisfaction",
    "explanation": "State spaces, BFS, DFS, UCS, Greedy Best-First, A* search f(n)=g(n)+h(n), Admissibility h(n) <= h*(n), Consistency/Monotonicity triangle inequality h(n) <= c(n,a,n') + h(n'), why consistency guarantees graph search optimality without reopening closed nodes.",
    "visualizer": "A* Step-by-Step Priority Queue & Graph Search Studio",
    "workedExample": "Full trace of A* priority queue (OPEN and CLOSED sets) on Romanian / Russian cities graph.",
    "assessment": "Slide Quiz Q8, Level B A* f-value calculation, Level C Admissibility proof."
  },
  {
    "id": "MR-02",
    "course": "MR",
    "exam": "IRS",
    "topic": "Constraint Satisfaction Problems (CSP): Backtracking & AC-3",
    "sourcePdf": "MR_Day2_MachineReasoning.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 8 \u2014 Search and Constraint Satisfaction",
    "explanation": "Variables, Domains, Constraints, CSP Backtracking search, Minimum Remaining Values (MRV), Degree Heuristic, Least Constraining Value (LCV), Forward Checking, and Arc Consistency (AC-3) directed arc revision.",
    "visualizer": "CSP N-Queens & Map Coloring Backtracking Studio",
    "workedExample": "Applying AC-3 algorithm to prune inconsistent domain values across 3 variables.",
    "assessment": "Slide Quiz Q8, Level B CSP Backtracking trace."
  },
  {
    "id": "MR-03",
    "course": "MR",
    "exam": "IRS",
    "topic": "Bayesian Belief Networks (BBN), CPTs & d-Separation",
    "sourcePdf": "MR_Day3_MachineReasoning.pdf",
    "sprintDay": 1,
    "sprintModule": "Module 9 \u2014 Bayesian Networks",
    "explanation": "BBN DAG structure, CPTs, joint distribution chain-rule factorization, parameter counting (2^n-1 vs sum 2^parents), d-separation rules: Chains (blocked if observed), Forks (blocked if common cause observed), Colliders / V-structures (active if collider or descendant observed, causing 'explaining away').",
    "visualizer": "Bayesian Network d-Separation & Collider Active Path Studio",
    "workedExample": "Step-by-step posterior probability calculation using chain rule and marginalization.",
    "assessment": "PRS Sample Paper Q2d, Slide Quiz Q9, Level B BBN Parameter counting & d-separation test."
  },
  {
    "id": "MR-04",
    "course": "MR",
    "exam": "IRS",
    "topic": "Knowledge Graphs & TransE Embeddings",
    "sourcePdf": "MR_Day4_MachineReasoning.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 7 \u2014 Knowledge Graphs",
    "explanation": "Entities, relations, triples (h, r, t), multi-hop graph traversal, Knowledge Graph Embeddings: TransE (h + r ~ t), TransH (hyperplane projection), TransR (relation space projection), DistMult, ComplEx, RotatE, link prediction, and MRR / Hits@K metrics.",
    "visualizer": "TransE Vector Space & Margin Loss Studio",
    "workedExample": "Calculating TransE L2 loss for positive triple vs corrupted negative triple.",
    "assessment": "Slide Quiz Q7, Level B TransE Loss calculation, Level C KGE model comparison."
  },
  {
    "id": "RS-01",
    "course": "RS",
    "exam": "IRS",
    "topic": "Rule-Based Expert Systems & Hospital Emergency Triage",
    "sourcePdf": "RS_Day1_ReasoningSystems.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 3 \u2014 Expert Systems",
    "explanation": "Working memory, production memory, inference engine, Match-Resolve-Act cycle, Rete algorithm concepts, conflict resolution (specificity, recency, priority, refractoriness), and forward chaining hospital triage.",
    "visualizer": "Hospital Emergency Triage Rule Engine Studio",
    "workedExample": "Tracing forward chaining conflict set resolution across multiple symptom rules.",
    "assessment": "Slide Quiz Q3, Level C Forward vs Backward Chaining justification."
  },
  {
    "id": "RS-02",
    "course": "RS",
    "exam": "IRS",
    "topic": "Association Mining: Apriori, Support, Confidence & Lift",
    "sourcePdf": "RS_Day2_ReasoningSystems.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 6 \u2014 Association Mining and Recommenders",
    "explanation": "Transaction database, itemsets, Support Supp(X->Y)=Supp(X U Y), Confidence Conf(X->Y)=Supp(X U Y)/Supp(X), Lift Lift(X->Y)=Conf(X->Y)/Supp(Y), Apriori downward-closure property, and creating medical diagnosis baskets from patient databases (IRS Q3b).",
    "visualizer": "Market Basket Association Mining & Lift Studio (IRS Q3b)",
    "workedExample": "Full manual calculation of Support, Confidence, and Lift for medical symptom rule.",
    "assessment": "IRS Sample Paper Q3b, Slide Quiz Q6, Level B Association Lift calculation."
  },
  {
    "id": "RS-03",
    "course": "RS",
    "exam": "IRS",
    "topic": "Recommender Systems: Content-Based, Collaborative Filtering & SVD",
    "sourcePdf": "RS_Day2_ReasoningSystems.pdf & RS_Day3_ReasoningSystems.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 6 \u2014 Association Mining and Recommenders",
    "explanation": "Content-Based Filtering (cosine similarity), User-based vs Item-based CF (Pearson correlation), Matrix Factorization (SVD, ALS), explicit vs implicit feedback, cold start problem mitigations, and patient treatment plan recommenders (IRS Q3c).",
    "visualizer": "Collaborative Filtering Matrix & Cosine Similarity Studio",
    "workedExample": "Calculating Pearson correlation similarity between two users and predicting missing rating.",
    "assessment": "IRS Sample Paper Q3c, Slide Quiz Q6, Level C CBF vs CF comparison."
  },
  {
    "id": "RS-04",
    "course": "RS",
    "exam": "IRS",
    "topic": "Case-Based Reasoning (CBR) & 4R Lifecycle",
    "sourcePdf": "RS_Day4_ReasoningSystems.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 3 \u2014 Expert Systems",
    "explanation": "CBR cycle: Retrieve (k-NN similarity on past cases), Reuse (map solution), Revise (test and repair), Retain (store new case). Comparison with rule-based systems.",
    "visualizer": "CBR 4R Lifecycle Interactive Studio",
    "workedExample": "Calculating weighted Euclidean similarity across 4 patient features to retrieve nearest historical case.",
    "assessment": "Slide Quiz Q3, Level C CBR vs Rule Engine selection."
  },
  {
    "id": "RS-05",
    "course": "RS",
    "exam": "IRS",
    "topic": "Genetic Algorithms & Order Crossover (OX) for TSP",
    "sourcePdf": "RS_Day4_ReasoningSystems.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 8 \u2014 Genetic Algorithms",
    "explanation": "Chromosomes, fitness function, Roulette wheel and Tournament selection, Order Crossover (OX) for permutation problems, PMX, mutation, elitism, TSP optimization, and exploration vs exploitation balance.",
    "visualizer": "Genetic Algorithm TSP Arena & Order Crossover (OX) Studio",
    "workedExample": "Performing Order Crossover (OX) on two 8-city TSP parent chromosomes step-by-step.",
    "assessment": "Slide Quiz Q8, Level B Order Crossover OX calculation."
  },
  {
    "id": "RS-06",
    "course": "RS",
    "exam": "IRS",
    "topic": "Graph Databases & GraphRAG (Neo4j & Cypher)",
    "sourcePdf": "RS_Day5_ReasoningSystems.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 12 \u2014 LLM Reasoning and RAG",
    "explanation": "Property graphs, Neo4j, Cypher querying MATCH (p:Patient)-[:HAS_SYMPTOM]->(s), combining Knowledge Graphs with Vector Search (GraphRAG), community summarization, and multi-hop hybrid clinical retrieval.",
    "visualizer": "GraphRAG Multi-Hop Graph Traversal Studio",
    "workedExample": "Writing Cypher query to retrieve all symptoms shared between patients diagnosed with Glaucoma.",
    "assessment": "Slide Quiz Q12, Level C GraphRAG vs Vector RAG comparison."
  },
  {
    "id": "CS-01",
    "course": "CS",
    "exam": "IRS",
    "topic": "Reasoning Foundations & Natural Language Cognition (NLU)",
    "sourcePdf": "CS_Day1AM_CognitiveSystem.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 1 \u2014 Reasoning Foundations & Module 9 \u2014 Natural Language Cognition",
    "explanation": "Deductive, Inductive, Abductive, Analogical reasoning, System 1 vs System 2, TF-IDF, Word2Vec, GloVe semantic embeddings, Chatbot intent classification, and slot filling for workplace care systems (IRS Q1a).",
    "visualizer": "Semantic Word Embeddings & Vector Analogy Studio",
    "workedExample": "Calculating TF-IDF score for rare clinical terms across corpus.",
    "assessment": "IRS Sample Paper Q1a & Q1b, Slide Quiz Q1 & Q9, Level C Intent/Slot definition."
  },
  {
    "id": "CS-02",
    "course": "CS",
    "exam": "IRS",
    "topic": "Vision Cognition, Marr's 3 Levels & SGH Smart Mirror",
    "sourcePdf": "CS_Day1PM_VisionCognition.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 10 \u2014 Vision and Audio Cognition",
    "explanation": "Computer vision vs vision cognition, Marr's three levels (Computational, Algorithmic/Representational, Hardware/Implementation), SGH Smart Mirror for PPE infection control, object and pose recognition.",
    "visualizer": "Marr's 3 Levels Analysis & PPE Smart Mirror Studio",
    "workedExample": "Deconstructing PPE verification task into Marr's three levels of analysis.",
    "assessment": "Slide Quiz Q10, Level C Marr's 3 Levels justification."
  },
  {
    "id": "CS-03",
    "course": "CS",
    "exam": "IRS",
    "topic": "Frame Systems, Inheritance & Active Daemons",
    "sourcePdf": "CS_Day2_CognitiveSystem.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 2 \u2014 Knowledge Representation",
    "explanation": "Frames, slots, facets, inheritance hierarchies, and active procedural daemons: if-needed (calculating distance from camera face radius) and if-added (triggering break reminders) for EyeCoach workplace care (IRS Q1c).",
    "visualizer": "Frame Hierarchy & Active Daemon Simulator (IRS Q1c)",
    "workedExample": "Designing frame schema with slots, facets, inheritance, and if-needed distance daemon.",
    "assessment": "IRS Sample Paper Q1c, Slide Quiz Q2, Level D Frame System Design."
  },
  {
    "id": "CS-04",
    "course": "CS",
    "exam": "IRS",
    "topic": "Hidden Markov Models (HMM) for Work Pattern Recognition",
    "sourcePdf": "CS_Day2_CognitiveSystem.pdf",
    "sprintDay": 2,
    "sprintModule": "Module 7 \u2014 Hidden Markov Models",
    "explanation": "Hidden vs observed states, initial state vector pi, transition matrix A, emission matrix B, Forward algorithm evaluation, Viterbi decoding, sequence classification of weekly chatbot query patterns into software engineer vs sales executive (IRS Q1d).",
    "visualizer": "HMM Sequence Classifier & Viterbi Lattice Studio (IRS Q1d)",
    "workedExample": "Calculating Forward trellis probability P(O|lambda) for 2-step observation sequence.",
    "assessment": "IRS Sample Paper Q1d, Slide Quiz Q7, Level B HMM Forward algorithm calculation."
  },
  {
    "id": "CS-05",
    "course": "CS",
    "exam": "IRS",
    "topic": "Audio Cognition, Acoustics, RIR & Speech Recognition (ASR)",
    "sourcePdf": "CS_Day2_CognitiveSystem.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 10 \u2014 Vision and Audio Cognition",
    "explanation": "Audio digitization, Room Impulse Response (RIR), reverberation time T60, Sabine formula, ASR Word Error Rate (WER = (S+D+I)/N), Wav2Vec 2.0, Whisper, and Conformer.",
    "visualizer": "Audio Acoustics, RIR & WER Calculator Studio",
    "workedExample": "Calculating Word Error Rate (WER) given substitutions, deletions, and insertions.",
    "assessment": "Slide Quiz Q10, Level B WER calculation."
  },
  {
    "id": "CS-06",
    "course": "CS",
    "exam": "IRS",
    "topic": "Cognitive Architectures & The Exact 11-Entity Model",
    "sourcePdf": "CS_Day3_CognitiveSystem.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 11 \u2014 Cognitive Architectures",
    "explanation": "Perception-action loops, ACT-R, SOAR, Declarative vs Procedural memory, and the exact eleven-entity cognitive framework: Sensing, Input, Information, Learn, Knowledge, Memory, Reason, Plan/Solution, Act, Output, Effects of action (IRS Q2h).",
    "visualizer": "11-Entity Cognitive Framework Interactive Mapper (IRS Q2h)",
    "workedExample": "Mapping A-EYE clinical diagnostic system components to each of the 11 cognitive entities.",
    "assessment": "IRS Sample Paper Q2h, Slide Quiz Q11, Level D 11-Entity Model Mapping."
  },
  {
    "id": "CS-07",
    "course": "CS",
    "exam": "IRS",
    "topic": "LLM Reasoning, RAG & Hybrid Intelligent Architecture Design",
    "sourcePdf": "CS_Day3_CognitiveSystem.pdf",
    "sprintDay": 3,
    "sprintModule": "Module 12 \u2014 LLM Reasoning and RAG & Module 13 \u2014 Hybrid Architecture Design",
    "explanation": "Few-shot, Chain-of-Thought, Tree-of-Thoughts, ReAct agent loop, RAG pipeline, Neuro-Symbolic AI integration (Neural perception + Symbolic rule engine), safety, ethics, and patient self-service risk evaluation (IRS Q2i).",
    "visualizer": "ReAct Agent Loop & Hybrid Neuro-Symbolic Blueprint Studio",
    "workedExample": "Drafting multi-tier hybrid architecture combining neural image feature extractor with symbolic rule engine.",
    "assessment": "IRS Sample Paper Q2i, Slide Quiz Q12 & Q13, Level D Hybrid System Design."
  }
];

window.TraceabilityMatrix = {
  currentFilter: 'all',
  courseFilter: 'all',
  dayFilter: 'all',
  searchQuery: '',

  render: function(containerId) {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) return;

    const matrix = window.TRACEABILITY_MATRIX || [];
    const prsCount = matrix.filter(r => r.exam === 'PRS').length;
    const irsCount = matrix.filter(r => r.exam === 'IRS').length;

    container.innerHTML = `
      <div class="level-header-banner mb-4" style="border-left: 4px solid #10b981; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.05));">
        <div class="level-badge-tag" style="background: #10b981; color: white;"><i data-lucide="shield-check"></i> 100% Verified Syllabus Audit</div>
        <h2>NUS-ISS Graduate Certificate Traceability Matrix</h2>
        <p class="text-secondary">Comprehensive proof of complete coverage: 35 major topic clusters across all 6 courses mapped directly to 3-day sprint lessons, interactive studios, step-by-step proofs, and exam crucible scenarios.</p>
      </div>

      <!-- Stats Grid -->
      <div class="mb-4" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
        <div class="stat-card" style="background: var(--bg-secondary); padding: 14px 12px; border-radius: 10px; border: 1px solid var(--border-color); text-align: center; min-width: 0;">
          <div style="font-size: 1.8rem; font-weight: 800; color: #38bdf8;">${matrix.length}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 4px;">Total Core Topics</div>
          <div style="font-size: 0.73rem; color: #10b981; margin-top: 2px;">100% Course Coverage</div>
        </div>
        <div class="stat-card" style="background: var(--bg-secondary); padding: 14px 12px; border-radius: 10px; border: 1px solid var(--border-color); text-align: center; min-width: 0;">
          <div style="font-size: 1.8rem; font-weight: 800; color: #38bdf8;">${prsCount}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 4px;">ISY5002 (PRS) Topics</div>
          <div style="font-size: 0.73rem; color: var(--text-secondary); margin-top: 2px;">PSUPR, PRMLS, ISSM</div>
        </div>
        <div class="stat-card" style="background: var(--bg-secondary); padding: 14px 12px; border-radius: 10px; border: 1px solid var(--border-color); text-align: center; min-width: 0;">
          <div style="font-size: 1.8rem; font-weight: 800; color: #10b981;">${irsCount}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 4px;">ISY5001 (IRS) Topics</div>
          <div style="font-size: 0.73rem; color: var(--text-secondary); margin-top: 2px;">MR, RS, CS</div>
        </div>
        <div class="stat-card" style="background: var(--bg-secondary); padding: 14px 12px; border-radius: 10px; border: 1px solid var(--border-color); text-align: center; min-width: 0;">
          <div style="font-size: 1.8rem; font-weight: 800; color: #f59e0b;">37</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 4px;">Lecture Decks Audited</div>
          <div style="font-size: 0.73rem; color: var(--text-secondary); margin-top: 2px;">Zero Missing Elements</div>
        </div>
      </div>

      <!-- Controls & Filters -->
      <div class="lesson-card mb-4" style="background: var(--bg-secondary); padding: 18px;">
        <div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center; justify-content: space-between;">
          <!-- Filter Buttons -->
          <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="tm-exam-filter-btns">
            <button class="btn btn-sm ${this.currentFilter === 'all' ? 'btn-primary' : 'btn-outline'}" onclick="window.TraceabilityMatrix.setFilter('all')">All Topics (${matrix.length})</button>
            <button class="btn btn-sm ${this.currentFilter === 'PRS' ? 'btn-primary' : 'btn-outline'}" onclick="window.TraceabilityMatrix.setFilter('PRS')" style="border-color: #38bdf8; color: ${this.currentFilter === 'PRS' ? '#fff' : '#38bdf8'};">ISY5002 PRS (${prsCount})</button>
            <button class="btn btn-sm ${this.currentFilter === 'IRS' ? 'btn-primary' : 'btn-outline'}" onclick="window.TraceabilityMatrix.setFilter('IRS')" style="border-color: #10b981; color: ${this.currentFilter === 'IRS' ? '#fff' : '#10b981'};">ISY5001 IRS (${irsCount})</button>
          </div>

          <!-- Course & Day Selectors -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <select id="tm-course-select" class="form-select" onchange="window.TraceabilityMatrix.setCourse(this.value)" style="background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); padding: 6px 10px; border-radius: 6px; font-size: 0.85rem;">
              <option value="all">All 6 Courses</option>
              <option value="PSUPR" ${this.courseFilter === 'PSUPR' ? 'selected' : ''}>PSUPR (PRS)</option>
              <option value="PRMLS" ${this.courseFilter === 'PRMLS' ? 'selected' : ''}>PRMLS (PRS)</option>
              <option value="ISSM" ${this.courseFilter === 'ISSM' ? 'selected' : ''}>ISSM (PRS)</option>
              <option value="MR" ${this.courseFilter === 'MR' ? 'selected' : ''}>Machine Reasoning (IRS)</option>
              <option value="RS" ${this.courseFilter === 'RS' ? 'selected' : ''}>Reasoning Systems (IRS)</option>
              <option value="CS" ${this.courseFilter === 'CS' ? 'selected' : ''}>Cognitive Systems (IRS)</option>
            </select>

            <select id="tm-day-select" class="form-select" onchange="window.TraceabilityMatrix.setDay(this.value)" style="background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); padding: 6px 10px; border-radius: 6px; font-size: 0.85rem;">
              <option value="all">All 3 Sprint Days</option>
              <option value="1" ${this.dayFilter === '1' ? 'selected' : ''}>Day 1 (Classical ML & Search)</option>
              <option value="2" ${this.dayFilter === '2' ? 'selected' : ''}>Day 2 (Signals & Deep Learning)</option>
              <option value="3" ${this.dayFilter === '3' ? 'selected' : ''}>Day 3 (Reasoning & Grand Crucible)</option>
            </select>

            <!-- Search Box -->
            <input type="text" id="tm-search-box" placeholder="Search topics, formulas, rubrics..." value="${this.searchQuery}" oninput="window.TraceabilityMatrix.setSearch(this.value)" style="background: var(--bg-card); color: var(--text-primary); border: 1px solid var(--border-color); padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; min-width: 220px;" />
          </div>
        </div>
      </div>

      <!-- Matrix Table Mount -->
      <div id="tm-table-container">
        ${this.renderTableHtml()}
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    if (window.renderLatex) window.renderLatex(container);
  },

  setFilter: function(val) {
    this.currentFilter = val;
    this.updateTable();
  },

  setCourse: function(val) {
    this.courseFilter = val;
    this.updateTable();
  },

  setDay: function(val) {
    this.dayFilter = val;
    this.updateTable();
  },

  setSearch: function(val) {
    this.searchQuery = val.toLowerCase().trim();
    this.updateTable();
  },

  updateTable: function() {
    const tableMount = document.getElementById('tm-table-container');
    if (tableMount) {
      tableMount.innerHTML = this.renderTableHtml();
      if (window.lucide) window.lucide.createIcons();
      if (window.renderLatex) window.renderLatex(tableMount);
    }
    // Update filter button styles
    const filterBtns = document.getElementById('tm-exam-filter-btns');
    if (filterBtns) {
      filterBtns.querySelectorAll('button').forEach((b, idx) => {
        const types = ['all', 'PRS', 'IRS'];
        if (types[idx] === this.currentFilter) {
          b.className = 'btn btn-sm btn-primary';
        } else {
          b.className = 'btn btn-sm btn-outline';
        }
      });
    }
  },

  renderTableHtml: function() {
    let rows = window.TRACEABILITY_MATRIX || [];

    if (this.currentFilter !== 'all') {
      rows = rows.filter(r => r.exam === this.currentFilter);
    }
    if (this.courseFilter !== 'all') {
      rows = rows.filter(r => r.course === this.courseFilter);
    }
    if (this.dayFilter !== 'all') {
      rows = rows.filter(r => String(r.sprintDay) === String(this.dayFilter));
    }
    if (this.searchQuery) {
      const q = this.searchQuery;
      rows = rows.filter(r => 
        (r.topic && r.topic.toLowerCase().includes(q)) ||
        (r.explanation && r.explanation.toLowerCase().includes(q)) ||
        (r.sourcePdf && r.sourcePdf.toLowerCase().includes(q)) ||
        (r.sprintModule && r.sprintModule.toLowerCase().includes(q)) ||
        (r.assessment && r.assessment.toLowerCase().includes(q))
      );
    }

    if (rows.length === 0) {
      return `<div class="lesson-card text-center py-5"><p class="text-muted">No syllabus topics match the selected filters.</p></div>`;
    }

    const dayDayMap = {
      1: 'day-1-classical-ml',
      2: 'day-2-signals-deeplearning',
      3: 'day-3-reasoning-integration'
    };

    return `
      <div class="lesson-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color);">
        <div style="padding: 14px 18px; background: rgba(0,0,0,0.2); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 700; font-size: 0.9rem;">Displaying ${rows.length} Verified Syllabus Mappings</span>
          <span class="badge-tech" style="font-size: 0.75rem;">Source: Official NUS-ISS Decks</span>
        </div>
        <div class="table-responsive" style="overflow-x: auto; max-height: 650px;">
          <table class="styled-table" style="width: 100%; font-size: 0.84rem; border-collapse: collapse;">
            <thead>
              <tr style="position: sticky; top: 0; background: var(--bg-card); z-index: 10; border-bottom: 2px solid var(--border-color); text-align: left;">
                <th style="padding: 10px 12px; width: 85px;">ID & Exam</th>
                <th style="padding: 10px 12px; width: 180px;">Syllabus Topic</th>
                <th style="padding: 10px 12px; width: 160px;">Official Source PDF</th>
                <th style="padding: 10px 12px; width: 170px;">3-Day Sprint Location</th>
                <th style="padding: 10px 12px;">Detailed Pedagogical Scope</th>
                <th style="padding: 10px 12px; width: 170px;">Visualizer & Proof</th>
                <th style="padding: 10px 12px; width: 150px;">Assessment Link</th>
                <th style="padding: 10px 12px; width: 90px; text-align: center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((r, i) => {
                const examBadgeColor = r.exam === 'PRS' ? '#38bdf8' : '#10b981';
                const dayId = dayDayMap[r.sprintDay] || 'day-1-classical-ml';
                const matchMod = r.sprintModule.match(/Module\s*(\d+)/i);
                const modId = matchMod ? `mod-${matchMod[1]}` : 'mod-1';

                return `
                  <tr style="border-bottom: 1px solid var(--border-color); background: ${i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)'};">
                    <td style="padding: 10px 12px; vertical-align: top;">
                      <span style="font-family: monospace; font-weight: 700; color: var(--accent-cyan);">${r.id}</span>
                      <div style="margin-top: 4px;">
                        <span style="display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 700; background: ${examBadgeColor}20; color: ${examBadgeColor}; border: 1px solid ${examBadgeColor}40;">${r.exam} • ${r.course}</span>
                      </div>
                    </td>
                    <td style="padding: 10px 12px; vertical-align: top; font-weight: 600; color: var(--text-primary); line-height: 1.35;">
                      ${r.topic}
                    </td>
                    <td style="padding: 10px 12px; vertical-align: top; font-family: monospace; font-size: 0.78rem; color: var(--text-muted); line-height: 1.35;">
                      <i data-lucide="file-text" style="width: 12px; height: 12px; vertical-align: middle; margin-right: 4px;"></i>${r.sourcePdf}
                    </td>
                    <td style="padding: 10px 12px; vertical-align: top; line-height: 1.35;">
                      <div style="font-weight: 700; color: #f59e0b; font-size: 0.8rem;">Day ${r.sprintDay}</div>
                      <div style="font-size: 0.8rem; color: var(--text-secondary);">${r.sprintModule}</div>
                    </td>
                    <td style="padding: 10px 12px; vertical-align: top; color: var(--text-secondary); line-height: 1.45; font-size: 0.8rem;">
                      ${r.explanation}
                    </td>
                    <td style="padding: 10px 12px; vertical-align: top; line-height: 1.35;">
                      <div style="font-size: 0.8rem; font-weight: 600; color: #38bdf8;"><i data-lucide="cpu" style="width: 12px; height: 12px; vertical-align: middle;"></i> ${r.visualizer}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;"><i data-lucide="calculator" style="width: 12px; height: 12px; vertical-align: middle;"></i> ${r.workedExample}</div>
                    </td>
                    <td style="padding: 10px 12px; vertical-align: top; font-size: 0.78rem; color: #10b981; line-height: 1.35;">
                      <i data-lucide="award" style="width: 12px; height: 12px; vertical-align: middle;"></i> ${r.assessment}
                    </td>
                    <td style="padding: 10px 12px; vertical-align: middle; text-align: center;">
                      <button class="btn btn-sm btn-outline" onclick="window.TraceabilityMatrix.jumpTo('${dayId}', '${modId}')" title="Study this module" style="padding: 4px 8px; font-size: 0.75rem;">
                        <i data-lucide="external-link" style="width: 12px; height: 12px;"></i> Go
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  jumpTo: function(dayId, modId) {
    if (window.app) {
      window.app.currentCourseId = 'three-day-sprint';
      window.app.selectDay(dayId);
      setTimeout(() => {
        window.app.loadLevel(modId);
      }, 50);
    }
  }
};

