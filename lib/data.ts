export const profile = {
  name: "Akarsha Agarwal",
  role: "Computer Science Engineer — ML/CV & Full-Stack Systems",
  location: "Noida, Uttar Pradesh, India",
  phone: "+91 6387671250",
  email: "akarshaagarwal25@gmail.com",
  linkedin: "https://linkedin.com/in/akarsha-agarwal",
  github: "https://github.com/Ak-arsha",
  githubHandle: "Ak-arsha",
  codeforcesHandle: "Akarsha__Agarwal",
  leetcodeHandle: "Akarsha11",
  tagline:
    "I build systems that watch, learn, and decide — from paddy leaves to retinal scans to a night sky of stray photons on your screen.",
};

export const education = [
  {
    years: "2023 – 2027",
    degree: "B.Tech, Computer Science & Engineering",
    institute: "Jaypee Institute of Information Technology, Noida",
    score: "7.17 / 10.0 CGPA",
  },
  {
    years: "2022 – 2023",
    degree: "Class XII",
    institute: "CMS Rajendra Nagar 1, Lucknow, Uttar Pradesh",
    score: "94.75%",
  },
  {
    years: "2021 – 2022",
    degree: "Class X",
    institute: "CMS Rajendra Nagar 1, Lucknow, Uttar Pradesh",
    score: "93.8%",
  },
];

export const experience = [
  {
    role: "Research Intern",
    org: "IIT (BHU) Varanasi",
    period: "May 2026 – Jul 2026",
    points: [
      "Developed PaddyCare AI, a deep learning system classifying 10 major paddy crop diseases plus healthy leaves from images, using YOLO and EfficientNet with transfer learning, augmentation, and fine-tuning.",
      "Built and deployed an inference pipeline with FastAPI and Streamlit for early disease detection, helping farmers act faster and cut crop loss.",
    ],
  },
  {
    role: "Python Developer",
    org: "Eglogics Softech Pvt. Ltd.",
    period: "Mar 2026 – Apr 2026",
    points: [
      "Built an automated face-recognition attendance system in Python and OpenCV that identifies individuals and records attendance digitally, replacing manual tracking.",
      "Integrated facial recognition with a Flask backend and SQL database for faster, contactless attendance capture with fewer recording errors.",
    ],
  },
];

export const projects = [
  {
    name: "Picture Perfect",
    subtitle: "AI-powered image editing studio",
    stack: ["Python", "Streamlit", "OpenCV", "MediaPipe", "Gemini API", "Supabase"],
    points: [
      "Interactive web studio for real-time image editing with automated smile enhancement and gaze correction via MediaPipe Face Mesh.",
      "Natural-language photo editing powered by the Gemini API.",
    ],
    link: "#",
  },
  {
    name: "Image Security Suite",
    subtitle: "Deep learning & classical approaches to image protection",
    stack: ["PyTorch", "OpenCV", "NumPy", "Scikit-image"],
    points: [
      "Deep-learning steganography comparing baseline vs. residual-block architectures for hiding secret images, improving recovery SSIM from 0.78 to 0.89.",
      "Classical SVD-based watermarking for medical image copyright protection — 42.5 dB PSNR / 0.982 SSIM, 85% average survival across 5 attack types on 7,000+ retinal images.",
    ],
    link: "#",
  },
  {
    name: "KrishiMitra",
    subtitle: "AI farm advisory platform",
    stack: ["Next.js", "FastAPI", "XGBoost", "LightGBM", "Supabase"],
    points: [
      "Full-stack advisory platform with ML-based 5-day crop price forecasting, an explainable-AI panel, and a geo-spatial buyer-recommendation engine using the haversine formula.",
      "Sell/store decision engine comparing live market prices to government MSP floors, with JWT/Google OAuth and a FastAPI + PostgreSQL (Supabase) backend.",
    ],
    link: "#",
  },
];

export const publications = [
  {
    title:
      "LocalMark: Robust Localised Message Watermarking for Secure Digital Image Copyright Protection",
    venue: "Under review, Journal of the Franklin Institute (2026)",
    detail:
      "Co-authored a U-Net-based watermarking framework embedding patient-identifying messages into medical retinal images; contributed to data curation and manuscript drafting. The proposed Enhanced Robust Decoder reached 96% bit accuracy and 48.27 dB PSNR across 24 real-world image attacks, outperforming four baseline architectures.",
  },
];

export const achievements = [
  "Selected for the presentation round of Smart India Hackathon 2024, for a solution built around the \u201cRoot of Trust\u201d problem statement.",
  "Selected as Team Lead of the AI/ML Domain under GDG (Google Developers Group), Jaypee Institute of Information Technology.",
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
    "DRF",
    "Flask",
    "FastAPI",
    "React.js",
    "WebRTC",
    "Node.js",
    "Streamlit",
  ],
  "Tools & Platforms": [
    "Git/GitHub",
    "Google Colab",
    "Jupyter",
    "VS Code",
    "Overleaf",
    "REST APIs",
  ],
  Databases: ["SQL", "Supabase (PostgreSQL)"],
};
