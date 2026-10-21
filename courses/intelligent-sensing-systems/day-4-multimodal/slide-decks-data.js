// Complete structured slide decks data for Day 4 (PDF & PPTX)
window.DAY4_SLIDE_DECKS = {
  "day4_pdf": {
    "id": "day4-pdf",
    "format": "PDF",
    "title": "Day 4 Lecture Deck: Sense Making from Sensory Data (v3.3)",
    "author": "Dr TIAN Jing (tianjing@nus.edu.sg)",
    "totalSlides": 40,
    "sourceFile": "4 Sense making from sensory data v3.3.pdf",
    "slides": [
      {
        "slideNumber": 1,
        "title": "SENSE MAKING FROM",
        "content": [
          "SENSORY DATA",
          "MULTIMODAL MACHINE LEARNING",
          "Dr TIAN Jing",
          "tianjing@nus.edu.sg"
        ],
        "notes": "Lecture notes for Slide 1: SENSE MAKING FROM",
        "images": [
          "day4_pdf_page_1_img_1.png",
          "day4_pdf_page_1_img_2.png",
          "day4_pdf_page_1_img_3.png"
        ],
        "levelId": "level-0"
      },
      {
        "slideNumber": 2,
        "title": "SENSE MAKING FROM SINGLE",
        "content": [
          "MODALITY / MULTIMODAL",
          "SENSORY DATA"
        ],
        "notes": "Lecture notes for Slide 2: SENSE MAKING FROM SINGLE",
        "images": [
          "day4_pdf_page_2_img_1.png",
          "day4_pdf_page_2_img_2.png",
          "day4_pdf_page_2_img_3.png"
        ],
        "levelId": "level-0"
      },
      {
        "slideNumber": 3,
        "title": "What is modality",
        "content": [
          "Modality refers to the way in which something expressed or perceived.",
          "Raw modality",
          "(closest from sensor)",
          "Abstract modality",
          "(farthest from sensor)",
          "Speech Language Sentiment",
          "Image Detected objects Object attributes",
          "IoT water sensor",
          "reading Water leakage Event statistics"
        ],
        "notes": "Lecture notes for Slide 3: What is modality",
        "images": [
          "day4_pdf_page_3_img_1.png",
          "day4_pdf_page_3_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 4,
        "title": "Single modality: Inertial",
        "content": [
          "\u2022 An accelerometer essentially measures the force (proper acceleration)",
          "along the \ud835\udc65, \ud835\udc66, and \ud835\udc67 axes.",
          "\u2022 Understanding of position/orientation helps mobile phones reorient the",
          "screen in portrait or landscape mode and reverse direction as required.",
          "\u2022 Gesture recognition is based on buffering continuous data and looking",
          "at the change in force and orientation.",
          "Source: http://www.utdallas.edu/~kehtar/UTD-MHAD.html"
        ],
        "notes": "Lecture notes for Slide 4: Single modality: Inertial",
        "images": [
          "day4_pdf_page_4_img_1.png",
          "day4_pdf_page_4_img_2.png",
          "day4_pdf_page_4_img_3.png",
          "day4_pdf_page_4_img_4.jp2"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 5,
        "title": "Example: Berkeley Multimodal",
        "content": [
          "Human Action Database (MHAD)",
          "Source: http://tele-immersion.citris-uc.org/berkeley_mhad"
        ],
        "notes": "Lecture notes for Slide 5: Example: Berkeley Multimodal",
        "images": [
          "day4_pdf_page_5_img_1.png",
          "day4_pdf_page_5_img_2.png",
          "day4_pdf_page_5_img_3.jpg"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 6,
        "title": "Single modality: Audio",
        "content": [
          "\u2022 Audio/sound classification: A common IoT use case for microphones is",
          "to classify the environment or activity in which the sound was captured.",
          "\u2022 Speaker recognition: Speaker recognition, or voice recognition,",
          "attempts to determine who is speaking.",
          "\u2022 Keyword detection: Recognize whether a particular word was uttered.",
          "Keyword recognition can also be generalized to key-phrase",
          "recognition, and both are typically used as triggers for additional",
          "activity, such as starting a session of commands or bringing up an",
          "application.",
          "\u2022 Command and control: Refers to using a small set of phrases in",
          "speech recognition. For illustration, this could include a set of",
          "commands to control a toy car, such as \u201cmove forward,\u201d \u201cmove",
          "backward,\u201d \u201cgo faster,\u201d \u201cgo slower,\u201d \u201cturn right/left,\u201d etc."
        ],
        "notes": "Lecture notes for Slide 6: Single modality: Audio",
        "images": [
          "day4_pdf_page_6_img_1.png",
          "day4_pdf_page_6_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 7,
        "title": "Example: Anomaly detection of time",
        "content": [
          "series sound data",
          "Sound data are acquired from the SMD assembly machine at a 192 kHz sampling",
          "rate. The data collection process is shown in (a). Sequential machine operational",
          "sound data are collected from an operating SMD assembly machine, with a",
          "microphone placed as indicated by the red bounding box in (b).",
          "Source: Fast Adaptive RNN Encoder\u2013Decoder for Anomaly Detection in SMD Assembly Machine, https://www.mdpi.com/1424-8220/18/10/3573"
        ],
        "notes": "Lecture notes for Slide 7: Example: Anomaly detection of time",
        "images": [
          "day4_pdf_page_7_img_1.png",
          "day4_pdf_page_7_img_2.png",
          "day4_pdf_page_7_img_3.jpg"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 8,
        "title": "Single modality: Vision",
        "content": [
          "\u2022 Scene recognition: Identify multiple objects, faces, and people in an",
          "image and use that information to determine the likely activity or",
          "context.",
          "\u2022 Object recognition: Identify objects in an image and potentially match",
          "them to a pre-existing database of objects that have been captured",
          "before.",
          "\u2022 Gesture recognition: Recognize static poses or moving gestures, either",
          "specific to the hand/arm or the human body.",
          "\u2022 Anomaly detection: Identify if any anomaly occurred that should trigger",
          "additional analysis.",
          "\u2022 Video summarization: Summarize the salient aspects of a long video",
          "stream. This includes scene changes, key scenarios, and",
          "objects/characters that are the focus of the video."
        ],
        "notes": "Lecture notes for Slide 8: Single modality: Vision",
        "images": [
          "day4_pdf_page_8_img_1.png",
          "day4_pdf_page_8_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 9,
        "title": "Example: Classification of",
        "content": [
          "manufacturing defects",
          "Source: Automatic detection and classification of manufacturing defects in metal boxes using deep neural networks,",
          "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0203192",
          "Images: (a) without defects, (b)-(c) with small defects, and (d)-(f) with big defects."
        ],
        "notes": "Lecture notes for Slide 9: Example: Classification of",
        "images": [
          "day4_pdf_page_9_img_1.png",
          "day4_pdf_page_9_img_2.png",
          "day4_pdf_page_9_img_3.jpg"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 10,
        "title": "Example: Flood monitoring",
        "content": [
          "\u2022 210 water level sensors are used",
          "for monitoring the drainage",
          "system.",
          "\u2022 49 CCTV cameras at selected",
          "locations are used for monitoring",
          "the road.",
          "Reference: https://app.pub.gov.sg/waterlevel/pages/WaterLevelSensors.aspx"
        ],
        "notes": "Lecture notes for Slide 10: Example: Flood monitoring",
        "images": [
          "day4_pdf_page_10_img_1.png",
          "day4_pdf_page_10_img_2.png",
          "day4_pdf_page_10_img_3.jpg",
          "day4_pdf_page_10_img_4.jpg",
          "day4_pdf_page_10_img_5.jpg",
          "day4_pdf_page_10_img_6.jpg"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 11,
        "title": "Example: Sensor-based human",
        "content": [
          "activity recognition",
          "Source: Deep learning for sensor-based activity recognition: A survey, https://arxiv.org/abs/1707.03502"
        ],
        "notes": "Lecture notes for Slide 11: Example: Sensor-based human",
        "images": [
          "day4_pdf_page_11_img_1.png",
          "day4_pdf_page_11_img_2.png",
          "day4_pdf_page_11_img_3.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 12,
        "title": "Single modality: Augmentation",
        "content": [
          "\u2022 Scaling changes the magnitude of the data in a window by multiplying by a",
          "random scalar.",
          "\u2022 Magnitude filtering changes the magnitude of each sample by convolving the",
          "data window with a smooth curve varying around one.",
          "\u2022 Jittering simulates additive sensor noise. These data augmentation methods",
          "may increase robustness against multiplicative and additive noise and improve",
          "performance.",
          "\u2022 Time-warping perturbs the temporal location. By smoothly distorting the time",
          "intervals between samples, the temporal locations of the samples can be",
          "changed using time-warping.",
          "Reference:",
          "\u2022 Time Series Data Augmentation for Deep Learning: A Survey, https://arxiv.org/abs/2002.12478",
          "\u2022 An empirical survey of data augmentation for time series classification with neural networks, https://arxiv.org/abs/2007.15951"
        ],
        "notes": "Lecture notes for Slide 12: Single modality: Augmentation",
        "images": [
          "day4_pdf_page_12_img_1.png",
          "day4_pdf_page_12_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 13,
        "title": "Single modality: Augmentation",
        "content": [
          "Scaling Magnitude filtering",
          "Jittering Time-warping"
        ],
        "notes": "Lecture notes for Slide 13: Single modality: Augmentation",
        "images": [
          "day4_pdf_page_13_img_1.png",
          "day4_pdf_page_13_img_2.png",
          "day4_pdf_page_13_img_3.png",
          "day4_pdf_page_13_img_4.png",
          "day4_pdf_page_13_img_5.png",
          "day4_pdf_page_13_img_6.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 14,
        "title": "Why multimodal (1)",
        "content": [
          "\u2022 Representation: The information from the fusion",
          "process has an abstract level higher than that of",
          "each input data set.",
          "\u2022 Accuracy: The standard deviation of the data after",
          "the fusion process is (usually) smaller than the",
          "standard deviation provided directly by the sources.",
          "\u2022 Completeness: Bringing new information to the",
          "current knowledge on an environment allows a more",
          "complete view of this environment."
        ],
        "notes": "Lecture notes for Slide 14: Why multimodal (1)",
        "images": [
          "day4_pdf_page_14_img_1.png",
          "day4_pdf_page_14_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 15,
        "title": "Why multimodal (2)",
        "content": [
          "\u2022 Fusion across sensors (same type): Several temperature sensors",
          "measure the temperature of an object.",
          "\u2022 Fusion across domains (same type, different definition/range): Several",
          "sensors measure the same attribute over several different ranges or",
          "domains. This arises, for example, in the definition of a temperature",
          "scale.",
          "\u2022 Fusion across attributes (different types): Several sensors measure",
          "different quantities associated with the same experimental situation,",
          "such as measuring air temperature, pressure, and humidity to",
          "determine air refractive index.",
          "\u2022 Fusion across time: Current measurements are fused with historical",
          "information.",
          "Challenge: Each modality has a different quality (e.g., noisy or not),",
          "structure (e.g., spatial or temporal), and representation (e.g., discrete or",
          "continuous)."
        ],
        "notes": "Lecture notes for Slide 15: Why multimodal (2)",
        "images": [
          "day4_pdf_page_15_img_1.png",
          "day4_pdf_page_15_img_2.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 16,
        "title": "Multimodal machine learning",
        "content": [
          "\u2022 Representation studies how to represent and summarize multimodal data to reflect the",
          "heterogeneity and interconnections between individual modality elements.",
          "\u2022 Alignment aims to identify the connections and interactions across all elements.",
          "\u2022 Reasoning aims to compose knowledge from multimodal evidence, usually through",
          "multiple inferential steps for a task.",
          "\u2022 Generation involves learning a generative process to produce raw modalities that reflect",
          "cross-modal interactions, structure, and coherence.",
          "\u2022 Transference aims to transfer knowledge between modalities and their representations.",
          "Reference: Foundations &",
          "Trends in Multimodal Machine",
          "Learning: Principles, Challenges,",
          "and Open Questions,",
          "https://arxiv.org/abs/2209.03430"
        ],
        "notes": "Lecture notes for Slide 16: Multimodal machine learning",
        "images": [
          "day4_pdf_page_16_img_1.png",
          "day4_pdf_page_16_img_2.png",
          "day4_pdf_page_16_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 17,
        "title": "Multimodal machine learning",
        "content": [
          "Reference: Deep Multimodal Data Fusion, https://dl.acm.org/doi/10.1145/3649447"
        ],
        "notes": "Lecture notes for Slide 17: Multimodal machine learning",
        "images": [
          "day4_pdf_page_17_img_1.png",
          "day4_pdf_page_17_img_2.png",
          "day4_pdf_page_17_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 18,
        "title": "Multimodal sensor data representation (1)",
        "content": [
          "\u2022 Tightly coupled sensor data fusion (early fusion): It allows for the",
          "combination of multiple sensors that appear as a single complex",
          "sensor for most of the applications.",
          "Data",
          "Data",
          "Feature extraction Recognition Decision making",
          "Recognition Decision making",
          "Data Feature extraction",
          "Data Feature extraction",
          "Sometimes, it is also called \u201cintermediate fusion\u201d."
        ],
        "notes": "Lecture notes for Slide 18: Multimodal sensor data representation (1)",
        "images": [
          "day4_pdf_page_18_img_1.png",
          "day4_pdf_page_18_img_2.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 19,
        "title": "Multimodal sensor data representation (2)",
        "content": [
          "\u2022 Loosely coupled sensor data fusion (restricted fusion): Restricts the",
          "recognition search space of the mode modality based on the results",
          "from the other modality. The first recognition pipe helps to set the",
          "context for the other. Once that is accomplished, the second",
          "recognition pipe only performs recognition within the established",
          "context, leading to potential savings in computation and higher",
          "performance.",
          "Data Feature extraction Recognition",
          "Data Feature extraction Recognition Decision making"
        ],
        "notes": "Lecture notes for Slide 19: Multimodal sensor data representation (2)",
        "images": [
          "day4_pdf_page_19_img_1.png",
          "day4_pdf_page_19_img_2.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 20,
        "title": "Multimodal sensor data representation (3)",
        "content": [
          "\u2022 Uncoupled sensor data fusion (late fusion): The data fusion occurs at",
          "the last possible stage in the respective pipelines. The advantage of",
          "this method is that sensor fusion is simple and can be accomplished",
          "using existing technology pipelines for recognition.",
          "Data Feature extraction Recognition",
          "Data Feature extraction Recognition",
          "Decision fusion"
        ],
        "notes": "Lecture notes for Slide 20: Multimodal sensor data representation (3)",
        "images": [
          "day4_pdf_page_20_img_1.png",
          "day4_pdf_page_20_img_2.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 21,
        "title": "Alignment",
        "content": [
          "\u2022 Spatial alignment. Transformation of the local spatial",
          "positions to a common coordinate system. The",
          "process involves georeferencing the location and",
          "field of view of each sensor.",
          "\u2022 Temporal alignment. Transformation of the local",
          "times to a common time axis. In many applications, it",
          "is performed using a dynamic time warping",
          "algorithm."
        ],
        "notes": "Lecture notes for Slide 21: Alignment",
        "images": [
          "day4_pdf_page_21_img_1.png",
          "day4_pdf_page_21_img_2.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 22,
        "title": "Alignment: Spatial",
        "content": [
          "\u2022 At different times (multi-temporal fusion)",
          "Multiple image enhancement"
        ],
        "notes": "Lecture notes for Slide 22: Alignment: Spatial",
        "images": [
          "day4_pdf_page_22_img_1.png",
          "day4_pdf_page_22_img_2.png",
          "day4_pdf_page_22_img_3.jpg",
          "day4_pdf_page_22_img_4.png",
          "day4_pdf_page_22_img_5.png",
          "day4_pdf_page_22_img_6.png",
          "day4_pdf_page_22_img_7.png",
          "day4_pdf_page_22_img_8.png",
          "day4_pdf_page_22_img_9.png",
          "day4_pdf_page_22_img_10.png",
          "day4_pdf_page_22_img_11.png",
          "day4_pdf_page_22_img_12.png",
          "day4_pdf_page_22_img_13.png",
          "day4_pdf_page_22_img_14.png",
          "day4_pdf_page_22_img_15.png",
          "day4_pdf_page_22_img_16.png",
          "day4_pdf_page_22_img_17.png",
          "day4_pdf_page_22_img_18.png",
          "day4_pdf_page_22_img_19.png",
          "day4_pdf_page_22_img_20.png"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 23,
        "title": "Alignment: Temporal",
        "content": [
          "Objective: Find point-to-",
          "point correspondence",
          "between two frames in",
          "the video sequence. The",
          "pixel intensities of an",
          "object do not change",
          "between consecutive",
          "frames. Neighbouring",
          "pixels have similar",
          "motion.",
          "Image source: http://users.umiacs.umd.edu/~zhuolin/Keckgesturedataset.html"
        ],
        "notes": "Lecture notes for Slide 23: Alignment: Temporal",
        "images": [
          "day4_pdf_page_23_img_1.png",
          "day4_pdf_page_23_img_2.png",
          "day4_pdf_page_23_img_3.jpg",
          "day4_pdf_page_23_img_4.png",
          "day4_pdf_page_23_img_5.jpg"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 24,
        "title": "Alignment: Temporal",
        "content": [
          "Euclidean registration (top figure):",
          "Align the \ud835\udc56-th point on one time",
          "series with the same \ud835\udc56-th point.",
          "Dynamic time warping registration",
          "(bottom figure): Allows similar",
          "shapes to match even if they are",
          "different in the time axis.",
          "Reference: https://databricks.com/blog/2019/04/30/understanding-dynamic-time-warping.html"
        ],
        "notes": "Lecture notes for Slide 24: Alignment: Temporal",
        "images": [
          "day4_pdf_page_24_img_1.png",
          "day4_pdf_page_24_img_2.png",
          "day4_pdf_page_24_img_3.jpg",
          "day4_pdf_page_24_img_4.png"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 25,
        "title": "Alignment: Feature (latent)",
        "content": [
          "Reference: Learning Transferable Visual Models From Natural Language Supervision, ICML 2021, https://arxiv.org/abs/2103.00020",
          "CLIP: Contrastive Language-Image Pre-training",
          "(model training)",
          "\u2022 Objective: Train an image encoder",
          "and a text encoder to predict the",
          "correct pairings of a batch of",
          "(image, text) examples.",
          "\u2022 A dataset of 400 million (image,",
          "text) pairs collected on the Internet.",
          "\u2022 Training: Given a batch of \ud835\udc41",
          "(image, text) pairs, CLIP is trained",
          "to predict which of the \ud835\udc41 \u00d7",
          "\ud835\udc41 possible (image, text) pairings",
          "across a batch actually occurred. It",
          "jointly trains an image encoder and",
          "text encoder to maximize the cosine",
          "similarity of the image and text",
          "embeddings of the \ud835\udc41 real pairs in",
          "the batch while minimizing the",
          "cosine similarity of the embeddings",
          "of the \ud835\udc412 \u2212 \ud835\udc41 incorrect pairings."
        ],
        "notes": "Lecture notes for Slide 25: Alignment: Feature (latent)",
        "images": [
          "day4_pdf_page_25_img_1.png",
          "day4_pdf_page_25_img_2.png",
          "day4_pdf_page_25_img_3.png"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 26,
        "title": "SENSE MAKING PIPELINE &",
        "content": [
          "CASE STUDIES"
        ],
        "notes": "Lecture notes for Slide 26: SENSE MAKING PIPELINE &",
        "images": [
          "day4_pdf_page_26_img_1.png",
          "day4_pdf_page_26_img_2.png",
          "day4_pdf_page_26_img_3.png"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 27,
        "title": "Sense making pipeline A (1)",
        "content": [
          "Source: MIT 6.S099: Artificial General Intelligence, https://agi.mit.edu/",
          "Environment",
          "Sensor",
          "Sensor data",
          "Feature extraction",
          "Representation",
          "Machine learning",
          "Knowledge",
          "Action",
          "Planning",
          "Reasoning",
          "Effector"
        ],
        "notes": "Lecture notes for Slide 27: Sense making pipeline A (1)",
        "images": [
          "day4_pdf_page_27_img_1.png",
          "day4_pdf_page_27_img_2.png",
          "day4_pdf_page_27_img_3.jpg"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 28,
        "title": "Sense making pipeline A (2)",
        "content": [
          "Source: MIT 6.S099: Artificial General Intelligence, https://agi.mit.edu/",
          "Environment",
          "Sensor",
          "Sensor data",
          "Feature extraction",
          "Representation",
          "Machine learning",
          "Knowledge",
          "Action",
          "Planning",
          "Reasoning",
          "Effector",
          "3. Signal representation can be",
          "learned from signal dataset",
          "2. Signal representation can be",
          "adaptively to the input signal",
          "1. Signal representation can",
          "be manually designed",
          "(input-agnostic)"
        ],
        "notes": "Lecture notes for Slide 28: Sense making pipeline A (2)",
        "images": [
          "day4_pdf_page_28_img_1.png",
          "day4_pdf_page_28_img_2.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 29,
        "title": "Sense making pipeline A (3)",
        "content": [
          "Source: MIT 6.S099: Artificial General Intelligence, https://agi.mit.edu/",
          "Environment",
          "Sensor",
          "Sensor data",
          "Feature extraction",
          "Representation",
          "Machine learning",
          "Knowledge",
          "Action",
          "Planning",
          "Reasoning",
          "Effector",
          "Built machine learning model to extract",
          "knowledge from feature representation"
        ],
        "notes": "Lecture notes for Slide 29: Sense making pipeline A (3)",
        "images": [
          "day4_pdf_page_29_img_1.png",
          "day4_pdf_page_29_img_2.png",
          "day4_pdf_page_29_img_3.jpg"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 30,
        "title": "Sense making pipeline A (4)",
        "content": [
          "Source: MIT 6.S099: Artificial General Intelligence, https://agi.mit.edu/",
          "Environment",
          "Sensor",
          "Sensor data",
          "Feature extraction",
          "Representation",
          "Machine learning",
          "Knowledge",
          "Action",
          "Planning",
          "Reasoning",
          "Effector",
          "Reasoning based on machine learning results."
        ],
        "notes": "Lecture notes for Slide 30: Sense making pipeline A (4)",
        "images": [
          "day4_pdf_page_30_img_1.png",
          "day4_pdf_page_30_img_2.png",
          "day4_pdf_page_30_img_3.jpg"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 31,
        "title": "Sense making pipeline A (5)",
        "content": [
          "Source: MIT 6.S099: Artificial General Intelligence, https://agi.mit.edu/",
          "Environment",
          "Sensor",
          "Sensor data",
          "Feature extraction",
          "Representation",
          "Machine learning",
          "Knowledge",
          "Action",
          "Planning",
          "Reasoning",
          "Effector",
          "\u2022 Make the decision (planning)",
          "\u2022 Implement the decision (effector)"
        ],
        "notes": "Lecture notes for Slide 31: Sense making pipeline A (5)",
        "images": [
          "day4_pdf_page_31_img_1.png",
          "day4_pdf_page_31_img_2.png",
          "day4_pdf_page_31_img_3.jpg"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 32,
        "title": "Another example",
        "content": [
          "Example: Automatic Driver Assistance System (ADAS)",
          "\u2022 It uses a set of sensors like cameras, motion sensors, etc., to provide a driver",
          "with assistance for safety and comfort, such as tracking the position of a car in",
          "the traffic lanes and providing audible warnings in case the car drifts from its",
          "lane (Lane Departure Warning).",
          "\u2022 It works on the fundamental processing principles of IoT, comprising sensors",
          "collecting data (cameras, motion sensors), algorithms recognizing the data",
          "(relative position of the car in the lane, car drift), and applications acting on the",
          "recognized data (audible warning on/off).",
          "Source: Making Sense of Sensors: End-to-End Algorithms and Infrastructure Design from Wearable-Devices to Data Centers, Apress.",
          "Sense Recognize Act",
          "Camera and",
          "motion",
          "Lane position",
          "and drift Warn",
          "Microphone Query Response"
        ],
        "notes": "Lecture notes for Slide 32: Another example",
        "images": [
          "day4_pdf_page_32_img_1.png",
          "day4_pdf_page_32_img_2.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 33,
        "title": "Sense making pipeline B (1)",
        "content": [
          "Raw Sensor Data",
          "\u2022 Raw (or unprocessed) sensor data is captured by sensors at the front end",
          "of the pipeline",
          "\u2022 Vision: Camera sensors take still or video shots of a scene",
          "\u2022 Audio/Speech: The microphone-like sensors typically capture the audio,",
          "and analog-to-digital conversion is applied",
          "\u2022 Motion: Inertial sensors typically measure acceleration and motion",
          "\u2022 BMI sensors: The Brain-Machine Interface sensors, like EEG, report",
          "brain activity measurements as activity graphs",
          "\u2022 Other IoT sensors: temperature, humidity, etc.",
          "Raw Sensor",
          "Data",
          "Features",
          "Recognized",
          "Entities",
          "Semantic",
          "Relationship",
          "Contextual",
          "Relationship",
          "Knowledge"
        ],
        "notes": "Lecture notes for Slide 33: Sense making pipeline B (1)",
        "images": [
          "day4_pdf_page_33_img_1.png",
          "day4_pdf_page_33_img_2.png",
          "day4_pdf_page_33_img_3.png",
          "day4_pdf_page_33_img_4.png",
          "day4_pdf_page_33_img_5.png",
          "day4_pdf_page_33_img_6.png",
          "day4_pdf_page_33_img_7.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 34,
        "title": "Raw Sensor",
        "content": [
          "Data",
          "Features",
          "Recognized",
          "Entities",
          "Semantic",
          "Relationship",
          "Contextual",
          "Relationship",
          "Knowledge",
          "Sense making pipeline B (2)",
          "Category Representative features",
          "Geometrical Edges, lines, line widths, line relationships (e.g., parallel,",
          "perpendicular), circles, shapes, size of the enclosed area",
          "Structural Surface area, relative orientation, orientation in the vertical",
          "and horizontal ground plane",
          "Statistical Number of surfaces, area, and perimeter, mean, variance,",
          "kurtosis, skewness, entropy",
          "Spectral Color coefficients, spectral peaks, and lines",
          "Time domain Pulse characteristics (rise and fall times, amplitude), pulse",
          "width, pulse repetition interval, moments",
          "Frequency domain Fourier coefficients, Wavelet coefficients"
        ],
        "notes": "Lecture notes for Slide 34: Raw Sensor",
        "images": [
          "day4_pdf_page_34_img_1.png",
          "day4_pdf_page_34_img_2.png",
          "day4_pdf_page_34_img_3.png",
          "day4_pdf_page_34_img_4.png",
          "day4_pdf_page_34_img_5.png",
          "day4_pdf_page_34_img_6.png",
          "day4_pdf_page_34_img_7.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 35,
        "title": "Raw Sensor",
        "content": [
          "Data",
          "Features",
          "Recognized",
          "Entities",
          "Semantic",
          "Relationship",
          "Contextual",
          "Relationship",
          "Knowledge",
          "Sense making pipeline B (3)",
          "Recognized Entities",
          "\u2022 Complex task involving spatial and temporal analysis of the extracted",
          "features to map the aggregate to predefined entities.",
          "\u2022 For vision, the recognition task may involve classifying the extracted",
          "features to recognize shapes like objects and faces.",
          "\u2022 For audio, statistical analysis and classification of features allow for",
          "aggregated features to be recognized as words."
        ],
        "notes": "Lecture notes for Slide 35: Raw Sensor",
        "images": [
          "day4_pdf_page_35_img_1.png",
          "day4_pdf_page_35_img_2.png",
          "day4_pdf_page_35_img_3.png",
          "day4_pdf_page_35_img_4.png",
          "day4_pdf_page_35_img_5.png",
          "day4_pdf_page_35_img_6.png",
          "day4_pdf_page_35_img_7.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 36,
        "title": "Raw Sensor",
        "content": [
          "Data",
          "Features",
          "Recognized",
          "Entities",
          "Semantic",
          "Relationship",
          "Contextual",
          "Relationship",
          "Knowledge",
          "Sense making pipeline B (4)",
          "Semantic Relationship",
          "\u2022 The connections between various recognized entities, for example, the",
          "semantic relationship between a key and a lock, refer to the operation of",
          "opening or closing the lock with the key.",
          "\u2022 For audio, the sentence \u201cI like coffee\u201d connects \"I\" (the subject) with",
          "\"coffee\u201c (object) using the predicate \"like.\u201c",
          "\u2022 For vision, the semantic context of the video can be analyzed based on",
          "identified entities (multiple objects, locations, people, and activities) and",
          "scoring these entities for their co-occurrence as well as their relation to",
          "the type of classification scenario of importance."
        ],
        "notes": "Lecture notes for Slide 36: Raw Sensor",
        "images": [
          "day4_pdf_page_36_img_1.png",
          "day4_pdf_page_36_img_2.png",
          "day4_pdf_page_36_img_3.png",
          "day4_pdf_page_36_img_4.png",
          "day4_pdf_page_36_img_5.png",
          "day4_pdf_page_36_img_6.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 37,
        "title": "Raw Sensor",
        "content": [
          "Data",
          "Features",
          "Recognized",
          "Entities",
          "Semantic",
          "Relationship",
          "Contextual",
          "Relationship",
          "Knowledge",
          "Sense making pipeline B (5)",
          "Contextual Relationship",
          "\u2022 Understand the recognized data in context. The context can be obtained",
          "in multiple ways. These include using domain knowledge, other sensors,",
          "or the history of recognized data for context recognition.",
          "\u2022 For vision: A face recognition surveillance system can identify a potential",
          "invasion or normal operation depending on when the recognition takes",
          "place (day vs. night) or depending on the person who is recognized."
        ],
        "notes": "Lecture notes for Slide 37: Raw Sensor",
        "images": [
          "day4_pdf_page_37_img_1.png",
          "day4_pdf_page_37_img_2.png",
          "day4_pdf_page_37_img_3.png",
          "day4_pdf_page_37_img_4.png",
          "day4_pdf_page_37_img_5.png",
          "day4_pdf_page_37_img_6.png",
          "day4_pdf_page_37_img_7.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 38,
        "title": "Raw Sensor",
        "content": [
          "Data",
          "Features",
          "Recognized",
          "Entities",
          "Semantic",
          "Relationship",
          "Contextual",
          "Relationship",
          "Knowledge",
          "Sense making pipeline B (6)",
          "Knowledge",
          "\u2022 Knowledge representation: Knowledge needs to be stored and",
          "represented in a manner such that the semantic information and",
          "relationships between various concepts are retained and are modifiable.",
          "\u2022 Knowledge operations: These include tools, APIs, and programming",
          "languages to insert and extract data from the knowledge database. This",
          "involves understanding the incoming semantic data and providing a",
          "mechanism to find and manipulate the correct relationships. The",
          "extraction process involves responding to different queries targeting",
          "relationships between different entities and concepts."
        ],
        "notes": "Lecture notes for Slide 38: Raw Sensor",
        "images": [
          "day4_pdf_page_38_img_1.png",
          "day4_pdf_page_38_img_2.png",
          "day4_pdf_page_38_img_3.png",
          "day4_pdf_page_38_img_4.png",
          "day4_pdf_page_38_img_5.png",
          "day4_pdf_page_38_img_6.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 39,
        "title": "Example: Smart manufacture",
        "content": [
          "Source: Deep learning for smart manufacturing:",
          "Methods and applications,",
          "https://doi.org/10.1016/j.jmsy.2018.01.003"
        ],
        "notes": "Lecture notes for Slide 39: Example: Smart manufacture",
        "images": [
          "day4_pdf_page_39_img_1.png",
          "day4_pdf_page_39_img_2.png",
          "day4_pdf_page_39_img_3.jpg"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 40,
        "title": "Thank you!",
        "content": [
          "Dr TIAN Jing",
          "Email: tianjing@nus.edu.sg"
        ],
        "notes": "Lecture notes for Slide 40: Thank you!",
        "images": [
          "day4_pdf_page_40_img_1.png",
          "day4_pdf_page_40_img_2.png"
        ],
        "levelId": "level-7"
      }
    ]
  },
  "day4_worksheet": {
    "id": "day4-worksheet",
    "format": "PPTX",
    "title": "Day 4 Worksheet: Multimodal Reverse Vending Machine",
    "author": "Dr TIAN Jing (NUS-ISS)",
    "totalSlides": 9,
    "sourceFile": "ISSM Day4 worksheet your name.pptx",
    "slides": [
      {
        "slideNumber": 1,
        "title": "ISSM Day4 worksheet",
        "content": [
          "This activity involves a group discussion.",
          "You are allowed to use AI tools for this discussion.",
          "Page 1"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 1: ISSM Day4 worksheet",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 2,
        "title": "Team members",
        "content": [
          "List your team members\u2019 full names (as in your course registration)",
          "Page 2"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 2: Team members",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 3,
        "title": "Guideline",
        "content": [
          "Apply the instructions provided in [Experiential Learning Activity: A Multimodal Reverse Vending Machine].docx.",
          "Submit a concise (5-slide only) PowerPoint File containing:",
          "Sensor analysis;",
          "Sensemaking pipeline;",
          "Fraud scenarios and corresponding controls;",
          "One observed or documented failure/uncertainty case;",
          "One proposed new capability.",
          "Page 3"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 3: Guideline",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 4,
        "title": "Q1. Sensor analysis",
        "content": [
          "Page 4"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 4: Q1. Sensor analysis",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 5,
        "title": "Q2. Sensemaking pipeline",
        "content": [
          "Page 5"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 5: Q2. Sensemaking pipeline",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 6,
        "title": "Q3. Fraud scenarios and corresponding controls",
        "content": [
          "Page 6"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 6: Q3. Fraud scenarios and corresponding controls",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 7,
        "title": "Q4. One observed or documented failure/uncertainty case",
        "content": [
          "Page 7"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 7: Q4. One observed or documented failure/uncertainty case",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 8,
        "title": "Q5. One proposed new capability",
        "content": [
          "Page 8"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 8: Q5. One proposed new capability",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 9,
        "title": "AI Tool Declaration",
        "content": [
          "Page 9"
        ],
        "notes": "Reverse engineering worksheet notes for Slide 9: AI Tool Declaration",
        "images": [],
        "levelId": "level-7"
      }
    ]
  },
  "day4_instruction": {
    "id": "day4-instruction",
    "format": "PDF",
    "title": "Day 4 Worksheet Instructions: Reverse Engineering Guide",
    "author": "Dr TIAN Jing (NUS-ISS)",
    "totalSlides": 4,
    "sourceFile": "ISSM Day4 worksheet instruction.pdf",
    "slides": [
      {
        "slideNumber": 1,
        "title": "1",
        "content": [
          "Experiential Learning Activity:",
          "A Multimodal Reverse Vending Machine",
          "1. Activity Objective",
          "This activity examines a real -world reverse vending machine used in Singapore\u2019s beverage",
          "container return ecosystem as a multimodal sensing and sensemaking system.",
          "By completing the activity, students should be able to:",
          "\u2022 identify sensing modalities that are observed or reasonably inferred from the machine's",
          "behavior;",
          "\u2022 explain the complementary roles of different sensing modalities;",
          "\u2022 trace how low -level sensor observations may be transformed into higher -level",
          "decisions such as accept, reject, classify, count, and reward;",
          "\u2022 analyze how multimodal sensing and sensor fusion can improve reliability and mitigate",
          "misuse or fraud; and",
          "\u2022 design and justify an additional sensing or intelligence capability that could improve",
          "the system.",
          "The objective is not to determine the proprietary implementation of a particular",
          "machine with certainty . Instead, the activity requires you to construct and justify a",
          "plausible technical interpretation based on available evidence."
        ],
        "notes": "Reverse Vending Machine instruction details (Page 1)",
        "images": [
          "day4_inst_page_1_img_1.jpg"
        ],
        "levelId": "level-7"
      },
      {
        "slideNumber": 2,
        "title": "2",
        "content": [
          "2. Use-Case Context",
          "Singapore\u2019s Beverage Container Return Scheme uses reverse vending machines to accept",
          "eligible beverage containers and determine whether to refund the deposit . From the user\u2019s",
          "perspective, the process is: Insert container \u2192 Machine examines container \u2192 Accept or",
          "reject \u2192 Provide refund . However, the machine must potentially answer several questions",
          "before accepting a container:",
          "\u2022 Is the container eligible for the scheme?",
          "What type of container is it?",
          "\u2022 Does its physical appearance agree with its claimed identity?",
          "\u2022 Has the same container or transaction been manipulated?",
          "\u2022 Has the accepted container successfully entered the collection system?",
          "The exact sensor configuration and algorithms used by every machine deployed in",
          "Singapore are not necessarily publicly disclosed. Different machine vendors may also use",
          "different implementations. Your task is therefore to investigate the system as an external",
          "observer and reverse-engineer its likely sensing and sensemaking architecture.",
          "3. Activity Instructions",
          "Step 1 \u2014 Observe a real system",
          "\u2022 Locate a reverse vending machine associated with Singapore\u2019s beverage container",
          "return system. Observe the machine and its interaction process.",
          "\u2022 You are not required to purchase or insert beverage containers for this activity.",
          "\u2022 Do not obstruct or insert inappropriate objects into the machine.  Do not vandalize the",
          "machine or do anything that violates Singapore law or harms the public interest.",
          "Step 2 \u2014 Collect evidence",
          "Collect evidence that helps you understand how the machine operates.",
          "Evidence may include:",
          "\u2022 your own photographs of the machine;",
          "\u2022 photographs of visible scanner windows, openings, displays or other components;",
          "\u2022 information displayed on the machine;",
          "\u2022 official websites and technical documentation;",
          "\u2022 news reports;",
          "\u2022 demonstration videos on social networks (e.g., YouTube, Instagram); and",
          "\u2022 screenshots showing the machine accepting or rejecting different containers."
        ],
        "notes": "Reverse Vending Machine instruction details (Page 2)",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 3,
        "title": "3",
        "content": [
          "For each important piece of evidence, record its source.",
          "Step 3 \u2014 Separate observation from inference",
          "For every technical claim you make, classify it as one of the following:",
          "\u2022 Observed: Directly visible or demonstrated from your own observation or collected",
          "evidence.",
          "\u2022 Documented: Explicitly stated by a manufacturer, government agency, technical",
          "manual, or other trusted reference.",
          "\u2022 Inferred: Not directly documented but logically inferred from the observed behaviour",
          "of the system.",
          "4. Questions for Investigation and Discussion",
          "Q1. What sensing modalities are used?",
          "Identify the sensors that you believe are used by the reverse vending machine.",
          "Complete the following table.",
          "Sensor/modality What does it",
          "measure?",
          "Purpose in the",
          "system",
          "Evidence Observed /",
          "Documented /",
          "Inferred",
          "Example:",
          "Camera /",
          "optical scanner",
          "Visual",
          "appearance of",
          "container",
          "Recognize",
          "container shape",
          "or label",
          "Manufacturer",
          "webpage",
          "Documented",
          "Include only sensors for which you can provide a reasonable justification.",
          "Q2. How does the machine make sense of multimodal sensor data?",
          "Construct a plausible sensemaking pipeline  from the moment a container enters the",
          "machine until the machine decides whether to accept or reject it.  You can use the two",
          "pipelines taught in the course as references.",
          "Q3. How could someone attempt to defraud the system?",
          "Identify at least one possible fraud or manipulation scenario. You might use AI tools to",
          "\u201csimulate\u201d and \u201cgenerate\u201d the possible fraud scenario."
        ],
        "notes": "Reverse Vending Machine instruction details (Page 3)",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 4,
        "title": "4",
        "content": [
          "Examples could include:",
          "\u2022 copying a valid barcode onto another object;",
          "\u2022 attempting to redeem the same container repeatedly;",
          "\u2022 presenting a foreign container that resembles an eligible Singapore container.",
          "For each scenario, complete the following analysis.",
          "Fraud attempt",
          "What does the",
          "attacker try to exploit?",
          "Which sensor/control",
          "could detect it?",
          "Why might multimodal",
          "sensing help?",
          "Q4. Investigate one failure or uncertainty case",
          "Find one example in which:",
          "\u2022 a container is rejected;",
          "\u2022 a user has difficulty inserting a container;",
          "\u2022 the machine cannot recognize a container;",
          "\u2022 the container must be repositioned; or",
          "\u2022 machine behavior appears inconsistent.",
          "The evidence may come from your own observation or publicly available media.",
          "Describe:",
          "\u2022 What happened? What sensor or recognition stage might have failed?",
          "\u2022 What alternative explanations are possible?",
          "\u2022 What additional sensor information could help resolve the ambiguity?",
          "Q5. Recommend one new capability",
          "Identify one useful capability that does not appear to be currently available , or that",
          "could substantially improve the existing system.",
          "6. Deliverable",
          "Submit a concise (5-slide only) PowerPoint File containing:",
          "1. your completed sensor analysis;",
          "2. proposed sensemaking pipeline;",
          "3. fraud scenarios and corresponding controls;",
          "4. one observed or documented failure/uncertainty case;",
          "5. one proposed new capability."
        ],
        "notes": "Reverse Vending Machine instruction details (Page 4)",
        "images": [],
        "levelId": "level-7"
      }
    ]
  }
};
