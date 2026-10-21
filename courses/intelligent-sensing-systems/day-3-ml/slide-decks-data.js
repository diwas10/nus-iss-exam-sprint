// Complete structured slide decks data for Day 3 (PDF & PPTX)
window.DAY3_SLIDE_DECKS = {
  "day3_pdf": {
    "id": "day3-pdf",
    "format": "PDF",
    "title": "Day 3 Lecture Deck: Intelligent Sensory Signal Processing using ML (v3.6)",
    "author": "Dr TIAN Jing (tianjing@nus.edu.sg)",
    "totalSlides": 44,
    "sourceFile": "3 Intelligent sensory signal processing using machine learning v3.6.pdf",
    "slides": [
      {
        "slideNumber": 1,
        "title": "INTELLIGENT SENSORY SIGNAL",
        "content": [
          "PROCESSING USING MACHINE",
          "LEARNING",
          "DATA-DRIVEN & REPRESENTATION LEARNING",
          "Dr TIAN Jing",
          "tianjing@nus.edu.sg"
        ],
        "notes": "Lecture notes for Slide 1: INTELLIGENT SENSORY SIGNAL",
        "images": [
          "day3_pdf_page_1_img_1.png",
          "day3_pdf_page_1_img_2.png",
          "day3_pdf_page_1_img_3.png"
        ],
        "levelId": "level-0"
      },
      {
        "slideNumber": 2,
        "title": "DATA-DRIVEN REPRESENTATION",
        "content": [
          "FOR SENSORY DATA"
        ],
        "notes": "Lecture notes for Slide 2: DATA-DRIVEN REPRESENTATION",
        "images": [
          "day3_pdf_page_2_img_1.png",
          "day3_pdf_page_2_img_2.png",
          "day3_pdf_page_2_img_3.png"
        ],
        "levelId": "level-0"
      },
      {
        "slideNumber": 3,
        "title": "Warm-up: Basis vectors",
        "content": [
          "\u2022 A given vector value is represented in a coordinate system.",
          "\u2022 A coordinate system is defined by a set of linearly independent vectors",
          "forming the system\u2019s basis.",
          "\u2022 Any vector value is represented as a linear sum of the basis vectors.",
          "\u2022 Key idea: The basis vector determines how the signal is represented.",
          "We can change basis vectors so that we can represent the signal in a",
          "different representation.",
          "\ud835\udc2f1",
          "\ud835\udc2f2 \ud835\udc31 Signal \ud835\udc31 = (1, 2)",
          "Basis vectors \ud835\udc2f1 = 1, 0 , \ud835\udc2f2 = 0, 1",
          "Signal representation",
          "coefficients (features) \ud835\udc30 = (1, 2)"
        ],
        "notes": "Lecture notes for Slide 3: Warm-up: Basis vectors",
        "images": [
          "day3_pdf_page_3_img_1.png",
          "day3_pdf_page_3_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 4,
        "title": "Warm-up: Change of basis vectors",
        "content": [
          "\u2022 Question: Given a signal \ud835\udc31, represented in orthonormal basis vectors \ud835\udc2f1, \ud835\udc2f2, what",
          "is the representation of \u0ddc\ud835\udc31 in a different orthonormal basis vectors \ud835\udc2e1, \ud835\udc2e2?",
          "Signal \ud835\udc31 = (1, 2)",
          "Basis vectors \ud835\udc2e1 = \u0d572",
          "2 , \u0d572",
          "2 , \ud835\udc2e2 = \u0d57\u2212 2",
          "2 , \u0d572",
          "2",
          "Signal representation",
          "coefficients (features) \ud835\udc30 = \u0d573 2",
          "2 , \u0d572",
          "2",
          "Reconstruct signal \u0ddc\ud835\udc31 = \u0d573 2",
          "2 \u00d7 \u0d572",
          "2 , \u0d572",
          "2 + \u0d572",
          "2 \u00d7 \u0d57\u2212 2",
          "2 , \u0d572",
          "2",
          "\ud835\udc2e1",
          "\ud835\udc2e2",
          "\ud835\udc31",
          "Photo: http://spiff.rit.edu/classes/phys311.old/lectures/dot/dot.html",
          "\u2022 Reconstruct signal \u0ddc\ud835\udc31",
          "\u0ddc\ud835\udc31 = \u0dcd",
          "\ud835\udc56",
          "\ud835\udc64\ud835\udc56 \u00d7 \ud835\udc2e\ud835\udc56",
          "\u2022 Decompose signal \ud835\udc31",
          "\ud835\udc64\ud835\udc56 = \ud835\udc31, \ud835\udc2e\ud835\udc56 = \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc56 = \u0dcd",
          "\ud835\udc57",
          "\ud835\udc65(\ud835\udc57)\ud835\udc62\ud835\udc56(\ud835\udc57)",
          "where <\u2219> is the dot product of two vectors"
        ],
        "notes": "Lecture notes for Slide 4: Warm-up: Change of basis vectors",
        "images": [
          "day3_pdf_page_4_img_1.png",
          "day3_pdf_page_4_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 5,
        "title": "Appendix: higher dimensions",
        "content": [
          "(checkerboard basis)",
          "Signal at standard basis: \ud835\udc31 = 2 1",
          "6 1",
          "2 1",
          "6 1 = 2 \u00d7 1 0",
          "0 0 + 1 \u00d7 0 1",
          "0 0 + 6 \u00d7 0 0",
          "1 0 + 1 \u00d7 0 0",
          "0 1",
          "\ud835\udc2e1 = 1 1",
          "1 1 /2 \ud835\udc2e2 = 1 1",
          "\u22121 \u22121 /2",
          "\ud835\udc2e3 = \u22121 1",
          "1 \u22121 /2 \ud835\udc2e4 = \u22121 1",
          "\u22121 1 /2",
          "Signal representation coefficients",
          "at new basis: \ud835\udc30 = 5 \u22122",
          "2 \u22123",
          "New basis",
          "Recall the formula",
          "\ud835\udc64\ud835\udc56 = \ud835\udc31, \ud835\udc2e\ud835\udc56 = \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc56 = \u0dcd",
          "\ud835\udc57",
          "\ud835\udc65(\ud835\udc57)\ud835\udc62\ud835\udc56(\ud835\udc57)",
          "where <\u2219> is the dot product of two vectors",
          "\u0ddc\ud835\udc31 = \u0dcd",
          "\ud835\udc56",
          "\ud835\udc64\ud835\udc56 \u00d7 \ud835\udc2e\ud835\udc56",
          "\ud835\udc31, \ud835\udc2e1 = \u0dcd",
          "\ud835\udc57",
          "\ud835\udc65(\ud835\udc57)\ud835\udc62\ud835\udc56(\ud835\udc57)",
          "= 2 \u2217 1",
          "2 + 1 \u2217 1",
          "2 + 6 \u2217 1",
          "2 + 1 \u2217 1",
          "2 = 5",
          "\ud835\udc31, \ud835\udc2e4 = \u0dcd",
          "\ud835\udc57",
          "\ud835\udc65(\ud835\udc57)\ud835\udc62\ud835\udc56(\ud835\udc57)",
          "= 2 \u2217 \u22121",
          "2 + 1 \u2217 1",
          "2 + 6 \u2217 \u22121",
          "2 + 1 \u2217 1",
          "2 = \u22123"
        ],
        "notes": "Lecture notes for Slide 5: Appendix: higher dimensions",
        "images": [
          "day3_pdf_page_5_img_1.png",
          "day3_pdf_page_5_img_2.png",
          "day3_pdf_page_5_img_3.jpg"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 6,
        "title": "Idea: Energy compaction property",
        "content": [
          "\u2022 Assumption: There are a set of \ud835\udc41 typical basis vectors that captures most of all",
          "(say, \ud835\udc40) input data \ud835\udc31\ud835\udc56, where \ud835\udc56 = 1, \u22ef , \ud835\udc40.",
          "\u2022 Given the signal representation as \u0ddc\ud835\udc31 = \u03c3\ud835\udc58=1",
          "\ud835\udc41 \ud835\udc64\ud835\udc58\ud835\udc2e\ud835\udc58",
          "\u2022 That is \u0ddc\ud835\udc31 = \ud835\udc641\ud835\udc2e1 + \ud835\udc642\ud835\udc2e2 + \ud835\udc643\ud835\udc2e3 + \u22ef + \ud835\udc64\ud835\udc41\ud835\udc2e\ud835\udc41 based on \ud835\udc41 basis components. Its",
          "error is defined as Error\ud835\udc41 = \ud835\udc31 \u2212 \u0ddc\ud835\udc31 2",
          "\u2022 Approximate every data \ud835\udc31\ud835\udc56 as \u0ddc\ud835\udc31\ud835\udc56 = \ud835\udc64\ud835\udc56,1\ud835\udc961 + \ud835\udc64\ud835\udc56,2\ud835\udc962 + \u22ef + \ud835\udc64\ud835\udc56,\ud835\udc41\ud835\udc96\ud835\udc41",
          "\u2022 \ud835\udc2e2 is used to \u201ccorrect\u201d errors resulting from using only \ud835\udc2e1.",
          "\u2022 \ud835\udc31\ud835\udc56 \u2212 \ud835\udc64\ud835\udc56,1\ud835\udc961 + \ud835\udc64\ud835\udc56,2\ud835\udc962",
          "2",
          "< \ud835\udc31\ud835\udc56 \u2212 \ud835\udc64\ud835\udc56,1\ud835\udc961",
          "2",
          "\u2022 \ud835\udc2e3 corrects errors remaining after correction with \ud835\udc2e2",
          "\u2022 \ud835\udc31\ud835\udc56 \u2212 \ud835\udc64\ud835\udc56,1\ud835\udc961 + \ud835\udc64\ud835\udc56,2\ud835\udc962 + +\ud835\udc64\ud835\udc56,3\ud835\udc963",
          "2",
          "< \ud835\udc31\ud835\udc56 \u2212 \ud835\udc64\ud835\udc56,1\ud835\udc961 + \ud835\udc64\ud835\udc56,2\ud835\udc962",
          "2",
          "\u2022 And so on",
          "\u2022 Estimate \ud835\udc2e1, \ud835\udc2e2, \u22ef , \ud835\udc2e\ud835\udc41 to minimize the squared error between the original signal",
          "and the reconstructed signal.",
          "Note: \ud835\udc41  might not be as",
          "same as the dimension of \ud835\udc17"
        ],
        "notes": "Lecture notes for Slide 6: Idea: Energy compaction property",
        "images": [
          "day3_pdf_page_6_img_1.png",
          "day3_pdf_page_6_img_2.png"
        ],
        "levelId": "level-1"
      },
      {
        "slideNumber": 7,
        "title": "Find the first basis vector",
        "content": [
          "Dimension 1",
          "Dimension 2",
          "\u2022 Each \u201cpoint\u201d represents a signal data."
        ],
        "notes": "Lecture notes for Slide 7: Find the first basis vector",
        "images": [
          "day3_pdf_page_7_img_1.png",
          "day3_pdf_page_7_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 8,
        "title": "Find the first basis vector",
        "content": [
          "Dimension 1",
          "Dimension 2",
          "\ud835\udc2e",
          "\u2022 Each \u201cpoint\u201d represents a signal data.",
          "\u2022 Any \u201cbasis vector\u201d \ud835\udc2e is a vector in this space."
        ],
        "notes": "Lecture notes for Slide 8: Find the first basis vector",
        "images": [
          "day3_pdf_page_8_img_1.png",
          "day3_pdf_page_8_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 9,
        "title": "Find the first basis vector",
        "content": [
          "Dimension 1",
          "Dimension 2",
          "\ud835\udc2e",
          "\u2022 Every signal data will suffer an error when approximated by its projection on \ud835\udc2e.",
          "\u2022 The total length of all error lines is the total projection error.",
          "\u2022 Objective: Find the best \ud835\udc2e for which the total projection error is minimum."
        ],
        "notes": "Lecture notes for Slide 9: Find the first basis vector",
        "images": [
          "day3_pdf_page_9_img_1.png",
          "day3_pdf_page_9_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 10,
        "title": "Find the first basis vector",
        "content": [
          "Dimension 1",
          "Dimension 2",
          "\ud835\udc2e",
          "\u2022 Every signal data will suffer an error when approximated by its projection on \ud835\udc2e.",
          "\u2022 The total length of all error lines is the total projection error.",
          "\u2022 Objective: Find the best \ud835\udc2e for which the total projection error is minimum."
        ],
        "notes": "Lecture notes for Slide 10: Find the first basis vector",
        "images": [
          "day3_pdf_page_10_img_1.png",
          "day3_pdf_page_10_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 11,
        "title": "Find the first basis vector",
        "content": [
          "Dimension 1",
          "Dimension 2",
          "\ud835\udc2e",
          "\u2022 Every signal data will suffer an error when approximated by its projection on \ud835\udc2e.",
          "\u2022 The total length of all error lines is the total projection error.",
          "\u2022 Objective: Find the best \ud835\udc2e for which the total projection error is minimum."
        ],
        "notes": "Lecture notes for Slide 11: Find the first basis vector",
        "images": [
          "day3_pdf_page_11_img_1.png",
          "day3_pdf_page_11_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 12,
        "title": "Find the first basis vector",
        "content": [
          "Project a signal vector \ud835\udc31 on to a basis vector",
          "\ud835\udc2e with a unit length ( \ud835\udc2e = \ud835\udfcf), \u0ddc\ud835\udc31 = \ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "Dimension 1",
          "Dimension 2",
          "Basis vector \ud835\udc2e",
          "Signal \ud835\udc31",
          "Projected signal",
          "\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "\ud835\udc31 \u2212 \ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "\ud835\udc38\ud835\udc5f\ud835\udc5f\ud835\udc5c\ud835\udc5f = \ud835\udc31 \u2212 \u0ddc\ud835\udc31 2 = \ud835\udc31 \u2212 \ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31 2",
          "= \ud835\udc31 \u2212 \ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31 \ud835\udc47 \ud835\udc31 \u2212 \ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "= \ud835\udc31\ud835\udc47\ud835\udc31 \u2212 \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31 \u2212 \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31 + \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "= \ud835\udc31\ud835\udc47\ud835\udc31 \u2212 \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "\ud835\udc2e\ud835\udc47\ud835\udc2e=1",
          "\u2022 Error for one signal vector \ud835\udc31 \ud835\udc38\ud835\udc5f\ud835\udc5f\ud835\udc5c\ud835\udc5f = \ud835\udc31\ud835\udc47\ud835\udc31 \u2212 \ud835\udc31\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31",
          "\u2022 Error for all signal vectors \ud835\udc31\ud835\udc56",
          "\ud835\udc38\ud835\udc5f\ud835\udc5f\ud835\udc5c\ud835\udc5f = \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56 = \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56",
          "\u2022 Goal: Find \ud835\udc2e to minimize this error.",
          "Problem statement"
        ],
        "notes": "Lecture notes for Slide 12: Find the first basis vector",
        "images": [
          "day3_pdf_page_12_img_1.png",
          "day3_pdf_page_12_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 13,
        "title": "Appendix: Find the first basis vector",
        "content": [
          "Find \ud835\udc2e to minimize the error \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56 subject to \ud835\udc2e\ud835\udc47\ud835\udc2e = 1",
          "Apply Lagrange multiplier \ud835\udefc and set derivative (with respect to \ud835\udc2e) to be zero",
          "\ud835\udc36 = \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56 + \ud835\udefc  \ud835\udc2e\ud835\udc47\ud835\udc2e \u2212 \ud835\udfcf",
          "\u2212\ud835\udfd0 \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc8a\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e + \ud835\udfd0\ud835\udefc\ud835\udc2e = \ud835\udfce\u059c\u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc8a\ud835\udc31\ud835\udc56",
          "\ud835\udc47 \ud835\udc2e = \ud835\udefc\ud835\udc2e",
          "Minimize \ud835\udc6a = \u03c3\ud835\udc8a \ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \u03c3\ud835\udc8a \ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e\ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56 Recall \ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e = \ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56",
          "= \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc2e\ud835\udc47\ud835\udc31\ud835\udc56\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc2e",
          "= \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \ud835\udc2e\ud835\udc47 \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56\ud835\udc31\ud835\udc56",
          "\ud835\udc47 \ud835\udc2e = \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \ud835\udc2e\ud835\udc47\ud835\udefc\ud835\udc2e Recall \u03c3\ud835\udc8a \ud835\udc31\ud835\udc8a\ud835\udc31\ud835\udc56",
          "\ud835\udc47 \ud835\udc2e = \ud835\udefc\ud835\udc2e",
          "= \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \ud835\udefc\ud835\udc2e\ud835\udc47\ud835\udc2e Recall \ud835\udc2e\ud835\udc47\ud835\udc2e = 1",
          "= \u0dcd",
          "\ud835\udc8a",
          "\ud835\udc31\ud835\udc56",
          "\ud835\udc47\ud835\udc31\ud835\udc56 \u2212 \ud835\udefc Choose the largest \ud835\udefc to",
          "minimize this error",
          "\u2022 \ud835\udc2e: eigenvector of matrix \u03c3\ud835\udc8a \ud835\udc31\ud835\udc8a\ud835\udc31\ud835\udc56",
          "\ud835\udc47",
          "\u2022 \ud835\udefc is eigenvalue",
          "unit vector"
        ],
        "notes": "Lecture notes for Slide 13: Appendix: Find the first basis vector",
        "images": [
          "day3_pdf_page_13_img_1.png",
          "day3_pdf_page_13_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 14,
        "title": "To find more basis",
        "content": [
          "So far, we already have the first basis. To get more basis, we need to",
          "\u2022 Get the \u201cerror\u201d signal \ud835\udc31 \u2212 \ud835\udc2e1\ud835\udc2e1",
          "\ud835\udc47\ud835\udc31 by subtracting the first-level",
          "approximation from the original signal.",
          "\u2022 Treat the \u201cerror signal\u201d as a new signal and repeat the estimation",
          "on the \u201cerror\u201d signal.",
          "\u2022 We can continue the process until we find \ud835\udc41 basis vectors.",
          "Quoted from Andrew Ng\u2019s tutorial, http://ufldl.stanford.edu/tutorial/unsupervised/SparseCoding"
        ],
        "notes": "Lecture notes for Slide 14: To find more basis",
        "images": [
          "day3_pdf_page_14_img_1.png",
          "day3_pdf_page_14_img_2.png",
          "day3_pdf_page_14_img_3.jpg"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 15,
        "title": "Data-driven signal representation",
        "content": [
          "Recall: Given a multiple-dimensional signal \ud835\udc31 = \ud835\udc651",
          "\ud835\udc652",
          ",",
          "and \ud835\udc41 basis vectors \ud835\udc2e1 = \ud835\udc6211",
          "\ud835\udc6212",
          ", \ud835\udc2e2 = \ud835\udc6221",
          "\ud835\udc6222",
          ", \u22ef , \ud835\udc2e\ud835\udc41 = \ud835\udc62\ud835\udc411",
          "\ud835\udc62\ud835\udc412",
          ".",
          "\u2022 Decompose signal as \ud835\udc64\ud835\udc56 = \ud835\udc31, \ud835\udc2e\ud835\udc56 , for example, \ud835\udc641 = \ud835\udc31, \ud835\udc2e1 = \ud835\udc651\ud835\udc6211 + \ud835\udc652\ud835\udc6212,",
          "\ud835\udc642 = \ud835\udc31, \ud835\udc2e2 = \ud835\udc651\ud835\udc6221 + \ud835\udc652\ud835\udc6222",
          "\u2022 Reconstruct (approximate) signal as \u0ddc\ud835\udc31 = \u03c3\ud835\udc56=1",
          "\ud835\udc41 \ud835\udc64\ud835\udc56 \u00d7 \ud835\udc2e\ud835\udc56, for example, \u0ddc\ud835\udc651 = \ud835\udc641\ud835\udc6211 +",
          "\ud835\udc642\ud835\udc6221 + \u22ef + \ud835\udc64\ud835\udc41\ud835\udc62\ud835\udc411, \u0ddc\ud835\udc652 = \ud835\udc641\ud835\udc6212 + \ud835\udc642\ud835\udc6222 + \u22ef + \ud835\udc64\ud835\udc41\ud835\udc62\ud835\udc412",
          "\ud835\udc651",
          "\ud835\udc652",
          "\ud835\udc641",
          "\ud835\udc642",
          "\u0ddc\ud835\udc651",
          "\u0ddc\ud835\udc652",
          "\ud835\udc6211",
          "\ud835\udc6222",
          "\ud835\udc6221",
          "\ud835\udc6212",
          "\ud835\udc6211",
          "\ud835\udc6222",
          "\ud835\udc6212",
          "\ud835\udc6221",
          "\ud835\udc64\ud835\udc41 \u2026",
          "Signal representation learning can be interpreted as a",
          "neural network",
          "Input Signal",
          "Output Reconstructed signal",
          "Model weights Basis vectors",
          "Hidden layer output Signal representation",
          "coefficients",
          "Note: Only a linear transformation is used in this slide.",
          "\ud835\udc62\ud835\udc411",
          "\ud835\udc62\ud835\udc412",
          "\ud835\udc62\ud835\udc411",
          "\ud835\udc62\ud835\udc412"
        ],
        "notes": "Lecture notes for Slide 15: Data-driven signal representation",
        "images": [
          "day3_pdf_page_15_img_1.png",
          "day3_pdf_page_15_img_2.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 16,
        "title": "REPRESENTATION LEARNING",
        "content": [
          "FOR SENSORY DATA"
        ],
        "notes": "Lecture notes for Slide 16: REPRESENTATION LEARNING",
        "images": [
          "day3_pdf_page_16_img_1.png",
          "day3_pdf_page_16_img_2.png",
          "day3_pdf_page_16_img_3.png"
        ],
        "levelId": "level-2"
      },
      {
        "slideNumber": 17,
        "title": "Representation learning: Objective",
        "content": [
          "Representation learning: Learn to map from data space to abstract representations,",
          "which are typically more useful than the raw data (for analytics tasks).",
          "Reference: Representational similarity analysis, https://www.frontiersin.org/articles/10.3389/neuro.06.004.2008/full"
        ],
        "notes": "Lecture notes for Slide 17: Representation learning: Objective",
        "images": [
          "day3_pdf_page_17_img_1.png",
          "day3_pdf_page_17_img_2.png",
          "day3_pdf_page_17_img_3.png",
          "day3_pdf_page_17_img_4.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 18,
        "title": "Representation learning: Considerations",
        "content": [
          "1. Smoothness",
          "\u2022 By \u201csmoothness,\u201d we mean that close inputs are mapped to close outputs",
          "(representations).",
          "\u2022 To fit the data (green stars), the blue model is smoother than the purple model.",
          "An example of model fitting",
          "\ud835\udc66 = \ud835\udc53(\ud835\udc65)"
        ],
        "notes": "Lecture notes for Slide 18: Representation learning: Considerations",
        "images": [
          "day3_pdf_page_18_img_1.png",
          "day3_pdf_page_18_img_2.png",
          "day3_pdf_page_18_img_3.jpg"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 19,
        "title": "Representation learning: Considerations",
        "content": [
          "2. Dimensionality",
          "\u2022 Sometimes, we need a representation with a lower dimension than the input",
          "dimension to avoid complicated calculations. But note that we should not lose",
          "too much important data.",
          "\u2022 Sometimes, we also need to increase the dimensions of data to obtain richer",
          "representations."
        ],
        "notes": "Lecture notes for Slide 19: Representation learning: Considerations",
        "images": [
          "day3_pdf_page_19_img_1.png",
          "day3_pdf_page_19_img_2.png",
          "day3_pdf_page_19_img_3.png",
          "day3_pdf_page_19_img_4.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 20,
        "title": "Representation learning: Considerations",
        "content": [
          "Raw sensory",
          "inputs",
          "Learn more abstract",
          "representations in higher layers",
          "Predict a",
          "supervised target",
          "3. Depth and abstraction",
          "A good representation captures high-level, abstract features. To achieve such",
          "representations, we can use deep architectures that reuse low-level features to",
          "produce more abstract features at higher layers."
        ],
        "notes": "Lecture notes for Slide 20: Representation learning: Considerations",
        "images": [
          "day3_pdf_page_20_img_1.png",
          "day3_pdf_page_20_img_2.png",
          "day3_pdf_page_20_img_3.jpg"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 21,
        "title": "Representation learning: Overview",
        "content": [
          "\u2022 Supervised learning: Supervised",
          "learning indicates learning methods",
          "using data with fine-grained human-",
          "annotated labels to train networks.",
          "\u2022 Self-supervised learning: Self-",
          "supervised learning refers to learning",
          "methods where models are explicitly",
          "trained with supervisory signals that are",
          "generated from the data itself (self-",
          "supervision) by leveraging its structure.",
          "Manual",
          "annotation",
          "Self-generated",
          "\u201cannotation\u201d"
        ],
        "notes": "Lecture notes for Slide 21: Representation learning: Overview",
        "images": [
          "day3_pdf_page_21_img_1.png",
          "day3_pdf_page_21_img_2.png",
          "day3_pdf_page_21_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 22,
        "title": "Representation learning (supervised)",
        "content": [
          "Linear adaptation: Freeze \ud835\udc53, train a new linear mapping to new target data."
        ],
        "notes": "Lecture notes for Slide 22: Representation learning (supervised)",
        "images": [
          "day3_pdf_page_22_img_1.png",
          "day3_pdf_page_22_img_2.png",
          "day3_pdf_page_22_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 23,
        "title": "Representation learning (supervised)",
        "content": [
          "Finetuning: Initialize \ud835\udc53\u2019 as \ud835\udc53, then continue training on new target data."
        ],
        "notes": "Lecture notes for Slide 23: Representation learning (supervised)",
        "images": [
          "day3_pdf_page_23_img_1.png",
          "day3_pdf_page_23_img_2.png",
          "day3_pdf_page_23_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 24,
        "title": "Representation learning (self-supervised)",
        "content": [
          "Reference: Beyond Just Vision: A Review on Self-Supervised Representation Learning on Multimodal and Temporal Data, https://arxiv.org/abs/2206.02353",
          "\u2022 Pretext task: Pretext tasks are pre-designed tasks for networks to solve, and",
          "features are learned by learning the objective functions of pretext tasks.",
          "\u2022 Target task (downstream task): Target tasks can be used to evaluate the",
          "quality of features learned by self-supervised learning. These applications can",
          "benefit from the pre-trained models when training data is scarce. In general,",
          "human-annotated labels are needed to solve the target tasks."
        ],
        "notes": "Lecture notes for Slide 24: Representation learning (self-supervised)",
        "images": [
          "day3_pdf_page_24_img_1.png",
          "day3_pdf_page_24_img_2.png",
          "day3_pdf_page_24_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 25,
        "title": "Autoencoder: Overview",
        "content": [
          "\u2022 Idea: Train a model that is optimized (in terms of the optimal basis vectors) to",
          "output a signal as close to the input signal itself.",
          "\u2022 This model is called an autoencoder, containing an encoder (signal",
          "decomposition) and a decoder (signal reconstruction)."
        ],
        "notes": "Lecture notes for Slide 25: Autoencoder: Overview",
        "images": [
          "day3_pdf_page_25_img_1.png",
          "day3_pdf_page_25_img_2.png",
          "day3_pdf_page_25_img_3.png"
        ],
        "levelId": "level-3"
      },
      {
        "slideNumber": 26,
        "title": "Representation learning (self-supervised)",
        "content": [
          "\u2022 The generative-based approach first",
          "uses an encoder to map the input \ud835\udc65 to",
          "the representation \ud835\udc64 , and then a",
          "decoder to reconstruct \u0ddc\ud835\udc65 from \ud835\udc64. The",
          "training objective is to minimize the",
          "reconstruction error between the input",
          "\ud835\udc65 and the reconstructed input \u0ddc\ud835\udc65.",
          "\u2022 The contrastive-based approach",
          "constructs positive and negative",
          "samples ( \ud835\udc651 and \ud835\udc652 ) through data",
          "augmentation or context sampling.",
          "The model is then trained by",
          "maximizing the similarity between",
          "positive samples and the dissimilarity",
          "between negative samples."
        ],
        "notes": "Lecture notes for Slide 26: Representation learning (self-supervised)",
        "images": [
          "day3_pdf_page_26_img_1.png",
          "day3_pdf_page_26_img_2.png",
          "day3_pdf_page_26_img_3.jpg",
          "day3_pdf_page_26_img_4.jpg"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 27,
        "title": "Generative autoencoder: Fully-connected",
        "content": [
          "Input \ud835\udc31 Output \u0ddc\ud835\udc31",
          "\ud835\udc30",
          "Loss: \ud835\udc31 \u2212 \u0ddc\ud835\udc31 2",
          "Encoder Decoder"
        ],
        "notes": "Lecture notes for Slide 27: Generative autoencoder: Fully-connected",
        "images": [
          "day3_pdf_page_27_img_1.png",
          "day3_pdf_page_27_img_2.png",
          "day3_pdf_page_27_img_3.png",
          "day3_pdf_page_27_img_4.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 28,
        "title": "Generative autoencoder: Fully-connected",
        "content": [
          "\ud835\udc31",
          "\u0ddc\ud835\udc31",
          "\ud835\udc38(\ud835\udc31)",
          "\ud835\udc37(\ud835\udc30)\ud835\udc30",
          "\ud835\udc31",
          "\u0ddc\ud835\udc31",
          "\ud835\udc38(\ud835\udc31)",
          "\ud835\udc37(\ud835\udc30)\ud835\udc30",
          "Over-complete",
          "\u2022  The hidden layer has more",
          "dimensions than the input layer.",
          "\u2022 No compression in the hidden layer.",
          "\u2022 A higher-dimensional code helps",
          "model a more complex distribution.",
          "Under-complete",
          "\u2022  The hidden layer has fewer",
          "dimensions than the input layer.",
          "\u2022 Compresses the input.",
          "\u2022 Hidden nodes will be good features",
          "for the training distribution."
        ],
        "notes": "Lecture notes for Slide 28: Generative autoencoder: Fully-connected",
        "images": [
          "day3_pdf_page_28_img_1.png",
          "day3_pdf_page_28_img_2.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 29,
        "title": "Generative autoencoder: Convolutional",
        "content": [
          "The MNIST handwritten digits database.",
          "Each image has a resolution of 28 \u00d7 28.",
          "nn.MSELoss()",
          "batch_size = 64",
          "Epoch = 20",
          "torch.optim.Adam()",
          "lr = 1e-3",
          "weight_decay = 1e-5"
        ],
        "notes": "Lecture notes for Slide 29: Generative autoencoder: Convolutional",
        "images": [
          "day3_pdf_page_29_img_1.png",
          "day3_pdf_page_29_img_2.png",
          "day3_pdf_page_29_img_3.jpg",
          "day3_pdf_page_29_img_4.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 30,
        "title": "Generative autoencoder: Convolutional",
        "content": [
          "Original image",
          "Reconstructed",
          "image",
          "Original image",
          "Reconstructed",
          "image",
          "Experiment: Original images and reconstruction images with different numbers of",
          "training iterations, including small (top row) and large (bottom row)."
        ],
        "notes": "Lecture notes for Slide 30: Generative autoencoder: Convolutional",
        "images": [
          "day3_pdf_page_30_img_1.png",
          "day3_pdf_page_30_img_2.png",
          "day3_pdf_page_30_img_3.jpg"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 31,
        "title": "Generative autoencoder: Convolutional",
        "content": [
          "Original image \ud835\udc34",
          "Reconstructed",
          "image \u1218\ud835\udc34",
          "Original image \ud835\udc35",
          "Reconstructed",
          "image \u0de0\ud835\udc35",
          "Reconstructed image using interpolated embedding",
          "(between two feature embedding vectors \ud835\udc53(\ud835\udc34), \ud835\udc53(\ud835\udc35))",
          "Encoder Encoder",
          "Decoder Decoder",
          "Feature",
          "embedding",
          "Feature",
          "embedding",
          "28 \u00d7 28 28 \u00d7 28",
          "\ud835\udc53 \ud835\udc34 , 64 \u00d7 1 \ud835\udc53 \ud835\udc35 , 64 \u00d7 1",
          "Interpolation",
          "Decoder",
          "64 \u00d7 1",
          ". . . . . ."
        ],
        "notes": "Lecture notes for Slide 31: Generative autoencoder: Convolutional",
        "images": [
          "day3_pdf_page_31_img_1.png",
          "day3_pdf_page_31_img_2.png",
          "day3_pdf_page_31_img_3.png",
          "day3_pdf_page_31_img_4.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 32,
        "title": "Generative autoencoder: Convolutional",
        "content": [
          "Setup: For the autoencoder architecture, we use",
          "a convolutional encoder and decoder, each with",
          "6 conv layers interspersed with \ud835\udc5f\ud835\udc52\ud835\udc59\ud835\udc62",
          "nonlinearities and a 128-dimensional bottleneck.",
          "We train this autoencoder for 20,000 steps of",
          "stochastic gradient descent, using the Adam",
          "optimizer with a batch size of 128.",
          "8 color classes and 3 shape classes",
          "Reference: Representation learning, https://phillipi.github.io/6.s898/"
        ],
        "notes": "Lecture notes for Slide 32: Generative autoencoder: Convolutional",
        "images": [
          "day3_pdf_page_32_img_1.png",
          "day3_pdf_page_32_img_2.png",
          "day3_pdf_page_32_img_3.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 33,
        "title": "Generative autoencoder: Convolutional",
        "content": [
          "Experiment 2: Measure the accuracy of",
          "a one-nearest-neighbor classifier using",
          "the features of each layer. Layer 0",
          "means the color values of the raw",
          "images.",
          "Experiment 1: For a given query,",
          "visualize the images in the dataset",
          "whose embeddings are nearest",
          "neighbors to the query\u2019s embedding.",
          "Reference: Representation learning, https://phillipi.github.io/6.s898/"
        ],
        "notes": "Lecture notes for Slide 33: Generative autoencoder: Convolutional",
        "images": [
          "day3_pdf_page_33_img_1.png",
          "day3_pdf_page_33_img_2.png",
          "day3_pdf_page_33_img_3.png",
          "day3_pdf_page_33_img_4.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 34,
        "title": "Generative autoencoder: Denoising",
        "content": [
          "Idea: Take each input vector \ud835\udc31 and to corrupt",
          "it with noise to give a modified vector \u0de4\ud835\udc31 which",
          "is then input to an autoencoder to give a",
          "reconstructed output \u0ddc\ud835\udc31. The network model is",
          "trained to reconstruct the original noise-free",
          "input vector by minimizing a loss function.",
          "\ud835\udc31 \u0ddc\ud835\udc31\u0de4\ud835\udc31",
          "\ud835\udc38(\u0de4\ud835\udc31) \ud835\udc37(\ud835\udc30)",
          "\ud835\udc30",
          "Loss: \ud835\udc31 \u2212 \u0ddc\ud835\udc31 2"
        ],
        "notes": "Lecture notes for Slide 34: Generative autoencoder: Denoising",
        "images": [
          "day3_pdf_page_34_img_1.png",
          "day3_pdf_page_34_img_2.png",
          "day3_pdf_page_34_img_3.png"
        ],
        "levelId": "level-4"
      },
      {
        "slideNumber": 35,
        "title": "Contrastive autoencoder",
        "content": [
          "Objective: To supervise what information should be embedded (or thrown away)."
        ],
        "notes": "Lecture notes for Slide 35: Contrastive autoencoder",
        "images": [
          "day3_pdf_page_35_img_1.png",
          "day3_pdf_page_35_img_2.png",
          "day3_pdf_page_35_img_3.jpg",
          "day3_pdf_page_35_img_4.jpg"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 36,
        "title": "Contrastive autoencoder",
        "content": [
          "Reference: Representation learning, https://phillipi.github.io/6.s898/"
        ],
        "notes": "Lecture notes for Slide 36: Contrastive autoencoder",
        "images": [
          "day3_pdf_page_36_img_1.png",
          "day3_pdf_page_36_img_2.png",
          "day3_pdf_page_36_img_3.png"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 37,
        "title": "Anomaly detection",
        "content": [
          "An outlier is an observation that deviates",
          "so much from other observations as to",
          "arouse suspicions that it was generated",
          "by a different mechanism.",
          "Quoted from D. M. Hawkins, Identification",
          "of Outliers (1980)",
          "Reference: F. E. Grubbs, \u201cProcedures for detecting outlying observations in samples,\u201d Technometrics, Vol. 11, No. 1, 1969, pp. 1-21,",
          "https://www.jstor.org/stable/1266761",
          "Applications",
          "\u2022 Medical Diagnosis",
          "\u2022 Fraud Detection",
          "\u2022 Manufacturing Defect Detection",
          "Binary output",
          "\u2022 Each test instance is given a normal",
          "or anomaly label",
          "Score output",
          "\u2022 Each test instance is assigned an",
          "anomaly score",
          "\u2022 Allows outputs to be ranked",
          "\u2022 Requires an additional threshold"
        ],
        "notes": "Lecture notes for Slide 37: Anomaly detection",
        "images": [
          "day3_pdf_page_37_img_1.png",
          "day3_pdf_page_37_img_2.png",
          "day3_pdf_page_37_img_3.jpg"
        ],
        "levelId": "level-5"
      },
      {
        "slideNumber": 38,
        "title": "Anomaly detection",
        "content": [
          "Point anomaly Contextual anomaly Collective anomaly",
          "Reference: https://www.aisingapore.org/forums/forum-ai-meetups/the-science-of-anomaly-detection-meetup-slides/",
          "\u2022 Point anomaly: A data point is considered a global outlier if its value is far outside",
          "the entirety of the data set in which it is found.",
          "\u2022 Contextual anomaly: A data point is considered a contextual outlier if its value",
          "significantly deviates from the rest of the data points in the same context.",
          "\u2022 Collective anomaly: A subset of data points within a data set is considered",
          "anomalous if those values, as a collection, deviate significantly from the entire",
          "data set, but the values of the individual data points are not themselves",
          "anomalous in either a contextual or global sense."
        ],
        "notes": "Lecture notes for Slide 38: Anomaly detection",
        "images": [
          "day3_pdf_page_38_img_1.png",
          "day3_pdf_page_38_img_2.png",
          "day3_pdf_page_38_img_3.png",
          "day3_pdf_page_38_img_4.jpg",
          "day3_pdf_page_38_img_5.jpg"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 39,
        "title": "Anomaly detection: Geometrical",
        "content": [
          "Geometrical Assumption Anomaly scoring",
          "Normal data points belong to a cluster (or lie",
          "close to its centroid), while anomalies do not",
          "belong to any clusters (or sparse clusters).",
          "Distance from the",
          "nearest cluster",
          "centroid."
        ],
        "notes": "Lecture notes for Slide 39: Anomaly detection: Geometrical",
        "images": [
          "day3_pdf_page_39_img_1.png",
          "day3_pdf_page_39_img_2.png",
          "day3_pdf_page_39_img_3.jpg",
          "day3_pdf_page_39_img_4.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 40,
        "title": "Anomaly detection: Statistical",
        "content": [
          "Statistical Assumption Anomaly scoring",
          "Given an assumed stochastic model, normal",
          "data instances fall in high-probability regions",
          "of the model, while abnormal data lie in low-",
          "probability regions.",
          "Probability that a data",
          "point lies in a high-",
          "probability region in the",
          "assumed distribution.",
          "Detecting a change in the Normal",
          "distribution using a sliding window.",
          "Detect outlier values, when the value",
          "deviates too much from the mean \u00b1 4\ud835\udf0e."
        ],
        "notes": "Lecture notes for Slide 40: Anomaly detection: Statistical",
        "images": [
          "day3_pdf_page_40_img_1.png",
          "day3_pdf_page_40_img_2.png",
          "day3_pdf_page_40_img_3.jpg",
          "day3_pdf_page_40_img_4.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 41,
        "title": "Anomaly detection: Classification",
        "content": [
          "(supervised)",
          "Classification",
          "Assumption Anomaly scoring",
          "A classifier can be learned to",
          "distinguish between normal and",
          "abnormal. Labelled data exists for the",
          "normal and abnormal classes.",
          "A measure of the classifier",
          "score (likelihood) that the",
          "test data belongs to the",
          "normal class.",
          "Machine learning-based classifier"
        ],
        "notes": "Lecture notes for Slide 41: Anomaly detection: Classification",
        "images": [
          "day3_pdf_page_41_img_1.png",
          "day3_pdf_page_41_img_2.png",
          "day3_pdf_page_41_img_3.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 42,
        "title": "Anomaly detection: Autoencoder",
        "content": [
          "(unsupervised)",
          "Deviation",
          "Assumption Anomaly scoring",
          "Anomalies are very rare compared to",
          "normal data, so they will have larger",
          "reconstruction errors.",
          "Reconstruction error",
          "obtained from the",
          "autoencoder model."
        ],
        "notes": "Lecture notes for Slide 42: Anomaly detection: Autoencoder",
        "images": [
          "day3_pdf_page_42_img_1.png",
          "day3_pdf_page_42_img_2.png",
          "day3_pdf_page_42_img_3.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 43,
        "title": "Workshop: Anomaly detection",
        "content": [
          "\u2022 Train an auto-encoder on the training data.",
          "\u2022 Evaluate it on the validation data and plot the",
          "reconstruction error.",
          "\u2022 Choose a threshold that determines whether an error",
          "value is an outlier (anomaly) or not."
        ],
        "notes": "Lecture notes for Slide 43: Workshop: Anomaly detection",
        "images": [
          "day3_pdf_page_43_img_1.png",
          "day3_pdf_page_43_img_2.png",
          "day3_pdf_page_43_img_3.png"
        ],
        "levelId": "level-6"
      },
      {
        "slideNumber": 44,
        "title": "Thank you!",
        "content": [
          "Dr TIAN Jing",
          "Email: tianjing@nus.edu.sg"
        ],
        "notes": "Lecture notes for Slide 44: Thank you!",
        "images": [
          "day3_pdf_page_44_img_1.png",
          "day3_pdf_page_44_img_2.png"
        ],
        "levelId": "level-7"
      }
    ]
  },
  "day3_worksheet": {
    "id": "day3-worksheet",
    "format": "PPTX",
    "title": "Day 3 Worksheet: Smart Fish Tank Monitoring Case Study",
    "author": "Dr TIAN Jing (NUS-ISS)",
    "totalSlides": 8,
    "sourceFile": "ISSM Day3 worksheet your name.pptx",
    "slides": [
      {
        "slideNumber": 1,
        "title": "ISSM Day3 worksheet",
        "content": [
          "This activity involves a group discussion.",
          "You are allowed to use AI tools for this discussion.",
          "Page 1"
        ],
        "notes": "Worksheet notes for Slide 1: ISSM Day3 worksheet",
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
        "notes": "Worksheet notes for Slide 2: Team members",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 3,
        "title": "Case study",
        "content": [
          "Use case: A smart fish tank monitoring system",
          "Feeding is one of the key aspects of aquaculture and is an important factor in determining the profitability of aquaculture enterprises. Traditionally, the feeding amount is determined by fish farmers relying on their experience. However, this method is highly affected by the level of the worker\u2019s expertise and is subjective and uncertain. To solve these problems, it is important to have automatic and precise control of the feeding amount. Currently, the assessment of fish appetite mainly deals with the information obtained from acoustic, optical, temperature, and oxygen level sensors, and establishes the relationship between the features of fish feeding behavior and fish appetite.",
          "Page 3"
        ],
        "notes": "Worksheet notes for Slide 3: Case study",
        "images": [
          "day3_ws_image1.png"
        ],
        "levelId": "level-7"
      },
      {
        "slideNumber": 4,
        "title": "Question 1",
        "content": [
          "To study the fish's feeding behavior, you have collected data, including oxygen measurements of the fish tank, which are taken every second. In addition, you have collected the fish motion speed that is measured by a computer vision-based solution. The fish motion speed is defined as the overall speed averaged by all fish in the unit of pixels per second. After you plotted these measurements over a long period, you noticed abnormal events (i.e., A and B) as highlighted in the Figure below. State the difference between these two anomaly events, A and B.",
          "The plots of the oxygen measurements of the fish tank (top figure) and the fish motion speeds (bottom figure) over time.",
          "Page 4"
        ],
        "notes": "Worksheet notes for Slide 4: Question 1",
        "images": [
          "day3_ws_image2.png"
        ],
        "levelId": "level-7"
      },
      {
        "slideNumber": 5,
        "title": "Your answers to Question 1",
        "content": [
          "Page 5"
        ],
        "notes": "Worksheet notes for Slide 5: Your answers to Question 1",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 6,
        "title": "Question 2",
        "content": [
          "To identify each anomaly event A and B, would you use a time-domain signal processing method, a frequency-domain method, or a machine learning method? State your suggestion and explain the reason. If you choose the machine learning method, describe what data is needed for model training, and suggest one machine learning model.",
          "Page 6"
        ],
        "notes": "Worksheet notes for Slide 6: Question 2",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 7,
        "title": "Your answers to Question 2",
        "content": [
          "Page 7"
        ],
        "notes": "Worksheet notes for Slide 7: Your answers to Question 2",
        "images": [],
        "levelId": "level-7"
      },
      {
        "slideNumber": 8,
        "title": "AI Tool Declaration",
        "content": [
          "Page 8"
        ],
        "notes": "Worksheet notes for Slide 8: AI Tool Declaration",
        "images": [],
        "levelId": "level-7"
      }
    ]
  }
};
