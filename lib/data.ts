export const profile = {
  name: "Akarsha Agarwal",
  role: "Computer Science Engineer — ML/CV & Full-Stack Systems",
  location: "Noida, Uttar Pradesh, India",
  phone: "+91 6387671250",
  email: "akarshaagarwal25@gmail.com",
  linkedin: "https://www.linkedin.com/in/akarsha-agarwal",
  github: "https://github.com/Ak-arsha",
  githubHandle: "Ak-arsha",
  codeforces: "https://codeforces.com/profile/Akarsha__Agarwal",
  codeforcesHandle: "Akarsha__Agarwal",
  leetcode: "https://leetcode.com/u/Akarsha11/",
  leetcodeHandle: "Akarsha11",
  tuf: "https://takeuforward.org/profile/Akarsha",
  tufHandle: "Akarsha",
  tagline:
    "I build systems that watch, learn, and decide — from paddy leaves to retinal scans to a night sky of stray photons on your screen.",
};

export const education = [
  {
    years: "2023 – 2027",
    degree: "B.Tech, Computer Science & Engineering",
    institute: "Jaypee Institute of Information Technology, Noida",
    score: "7.17 / 10.0 CGPA",
    link: "https://www.jiit.ac.in/",
  },
  {
    years: "2022 – 2023",
    degree: "Class XII",
    institute: "CMS Rajendra Nagar 1, Lucknow, Uttar Pradesh",
    score: "94.75%",
    link: "https://www.cmseducation.org/",
  },
  {
    years: "2021 – 2022",
    degree: "Class X",
    institute: "CMS Rajendra Nagar 1, Lucknow, Uttar Pradesh",
    score: "93.8%",
    link: "https://www.cmseducation.org/",
  },
];

export const experience = [
  {
    role: "Research Intern",
    org: "IIT (BHU) Varanasi",
    period: "May 2026 – Jul 2026",
    link: "https://www.iitbhu.ac.in/",
    points: [
      "Developed PaddyCare AI, a deep learning system to classify 10 major paddy crop diseases plus healthy leaves from images, using YOLO and EfficientNet with transfer learning, data augmentation, and fine-tuning.",
      "Built and deployed an inference pipeline with FastAPI and Streamlit to support early disease detection for farmers, aiding faster intervention and reduced crop loss.",
    ],
  },
  {
    role: "Python Developer",
    org: "Eglogics Softech Pvt. Ltd.",
    period: "Mar 2026 – Apr 2026",
    link: "https://eglogics.com/",
    points: [
      "Built an automated face-recognition attendance system in Python and OpenCV that identifies individuals via facial features and records attendance digitally, replacing manual tracking.",
      "Integrated facial recognition with a Flask backend and SQL database, enabling faster, contactless attendance capture and reducing administrative workload and recording errors.",
    ],
  },
];

export const projects = [
  {
    name: "Picture Perfect",
    subtitle: "AI-Powered Image Editing Studio",
    stack: ["Python", "Streamlit", "OpenCV", "MediaPipe", "Gemini API", "Supabase"],
    points: [
      "Built an interactive web studio for real-time image editing with automated smile enhancement and gaze correction using MediaPipe Face Mesh.",
      "Integrated natural-language photo editing powered by the Gemini API with Supabase storage.",
    ],
    link: "https://github.com/Ak-arsha/picture-perfect",
    githubLink: "https://github.com/Ak-arsha",
  },
  {
    name: "Deep Learning & Image Security Suite",
    subtitle: "Steganography & SVD Watermarking",
    stack: ["PyTorch", "OpenCV", "NumPy", "Scikit-image"],
    points: [
      "Steganography: Designed a deep-learning steganography system comparing a baseline vs. residual-block architecture for hiding secret images in cover images, improving secret-image recovery SSIM from 0.78 to 0.89 and robustness to noise, blur, and rotation attacks.",
      "SVD Watermarking: Built a classical SVD-based watermarking pipeline for medical image copyright protection, achieving 42.5 dB PSNR / 0.982 SSIM imperceptibility and 85% average watermark survival across 5 attack types on 7,000+ retinal images.",
    ],
    link: "https://github.com/Ak-arsha",
    githubLink: "https://github.com/Ak-arsha",
  },
  {
    name: "KrishiMitra",
    subtitle: "AI Farm Advisory Platform",
    stack: ["Next.js", "FastAPI", "XGBoost", "LightGBM", "Supabase"],
    points: [
      "Built a full-stack advisory platform for farmers with ML-based 5-day crop price forecasting, an explainable-AI panel, and a geo-spatial buyer recommendation engine using the haversine formula.",
      "Designed a sell/store decision engine comparing live market prices to government MSP floors, with JWT/Google OAuth authentication and a FastAPI + PostgreSQL (Supabase) backend.",
    ],
    link: "https://github.com/Ak-arsha/krishimitra",
    githubLink: "https://github.com/Ak-arsha",
  },
];

export const publications = [
  {
    title:
      "LocalMark: Robust Localised Message Watermarking for Secure Digital Image Copyright Protection",
    venue: "Under review, Journal of the Franklin Institute (2026)",
    link: "https://www.sciencedirect.com/journal/journal-of-the-franklin-institute",
    detail:
      "Co-authored a U-Net-based watermarking framework for embedding patient-identifying messages into medical retinal images; contributed to data curation and manuscript drafting. Proposed Enhanced Robust Decoder achieved 96% bit accuracy and 48.27 dB PSNR across 24 real-world image attacks, outperforming four baseline architectures.",
  },
];

export const achievements = [
  {
    text: "Selected for the presentation round of Smart India Hackathon 2024 for a solution built around the “Root of Trust” problem statement.",
    link: "https://www.sih.gov.in/",
  },
  {
    text: "Selected as Team Lead of the AI/ML Domain under GDG (Google Developers Group), Jaypee Institute of Information Technology.",
    link: "https://gdg.community.dev/",
  },
];

export const skills = {
  Languages: ["C", "C++", "Python", "Java", "JavaScript", "PHP"],
  "ML / DL & CV": [
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn",
    "MediaPipe",
    "YOLO",
    "EfficientNet",
    "spaCy",
    "Transformers",
  ],
  "Web & Frameworks": [
    "Django",
    "Django REST Framework",
    "Flask",
    "FastAPI",
    "React.js",
    "WebRTC",
    "Node.js",
    "Streamlit",
    "Next.js",
  ],
  "Tools & Platforms": [
    "Git/GitHub",
    "Google Colab",
    "Jupyter Notebook",
    "VS Code",
    "Overleaf",
    "REST APIs",
  ],
  Databases: ["SQL", "Supabase (PostgreSQL)"],
  "Competitive Programming": [
    "Codeforces (Rating: 1388)",
    "LeetCode (300+ Solved)",
    "TUF+ (360+ Solved)",
  ],
};
