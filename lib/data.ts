export interface Profile {
  name: string;
  role: string;
  location: string;
  status: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  githubHandle: string;
  codeforces: string;
  codeforcesHandle: string;
  codeforcesRating: number;
  leetcode: string;
  leetcodeHandle: string;
  leetcodeSolved: string;
  tuf: string;
  tufHandle: string;
  tufSolved: string;
  intro: string;
  tagline: string;
}

export const profile: Profile = {
  name: "Akarsha Agarwal",
  role: "Computer Science Engineer — ML/CV, Full-Stack & Data Analytics",
  location: "Noida, Uttar Pradesh, India",
  status: "Open to work",
  phone: "+91 6387671250",
  email: "akarshaagarwal25@gmail.com",
  linkedin: "https://www.linkedin.com/in/akarsha-agarwal",
  github: "https://github.com/Ak-arsha",
  githubHandle: "Ak-arsha",
  codeforces: "https://codeforces.com/profile/Akarsha__Agarwal",
  codeforcesHandle: "Akarsha__Agarwal",
  codeforcesRating: 1388,
  leetcode: "https://leetcode.com/u/Akarsha11/",
  leetcodeHandle: "Akarsha11",
  leetcodeSolved: "300+",
  tuf: "https://takeuforward.org/profile/Akarsha",
  tufHandle: "Akarsha",
  tufSolved: "360+",
  intro:
    "Hi, I'm Akarsha Agarwal — a Computer Science Engineering student at JIIT Noida (2023–2027). I specialize in Machine Learning, Computer Vision, Full-Stack Engineering, and Data Analytics. I build intelligent systems that watch, learn, and decide: from deep learning crop disease detection at IIT BHU to medical image watermarking research and full-stack AI web platforms.",
  tagline:
    "I build intelligent systems that watch, learn, and decide — spanning computer vision, deep learning, image security, enterprise analytics, and scalable full-stack applications.",
};

export interface EducationItem {
  id: string;
  years: string;
  degree: string;
  institute: string;
  score: string;
  link: string;
  board?: string;
  description: string;
  highlights: string[];
  coursework?: string[];
}

export const education: EducationItem[] = [
  {
    id: "jiit-btech",
    years: "2023 – 2027",
    degree: "B.Tech, Computer Science & Engineering",
    institute: "Jaypee Institute of Information Technology, Sector 128, Noida",
    score: "7.17 / 10.0 CGPA",
    link: "https://www.jiit.ac.in/",
    board: "Deemed University",
    description:
      "Pursuing a rigorous undergraduate engineering curriculum with specializations in software systems, algorithms, distributed computing, and artificial intelligence.",
    coursework: [
      "Software Engineering & Lab (Grade: B+ / 8.0)",
      "Minor Project-2 (Grade: B+ / 8.0)",
      "Big Data Ingestion",
      "Computer Networks and Internet of Things & Lab",
      "Fundamentals of Soft Computing",
      "Statistics & Probability",
      "Data Structures & Algorithms",
      "Database Management Systems & SQL",
      "Operating Systems & Architecture",
    ],
    highlights: [
      "Team Lead, AI/ML Domain — Google Developer Groups (GDG), JIIT",
      "Presentation Round Selectee at Smart India Hackathon (SIH) 2024 for 'Hardware Enabled Root of Trust'",
      "Co-authored research manuscript on medical image watermarking (under review at Journal of the Franklin Institute)",
    ],
  },
  {
    id: "cms-class-12",
    years: "2022 – 2023",
    degree: "Class XII (Senior Secondary) — CISCE (ISC)",
    institute: "City Montessori School, Rajendra Nagar 1, Lucknow, Uttar Pradesh",
    score: "94.75%",
    link: "https://www.cmseducation.org/",
    board: "Council for the Indian School Certificate Examinations (ISC)",
    description:
      "Completed Senior Secondary education in the Science stream with core focus on Mathematics, Computer Science, Physics, and Chemistry.",
    highlights: [
      "Achieved 94.75% aggregate score in ISC board examinations",
      "Distinction in Computer Science and Advanced Mathematics",
      "Active participant in regional coding and robotics symposiums",
    ],
  },
  {
    id: "cms-class-10",
    years: "2021 – 2022",
    degree: "Class X (Secondary) — CISCE (ICSE)",
    institute: "City Montessori School, Rajendra Nagar 1, Lucknow, Uttar Pradesh",
    score: "93.8%",
    link: "https://www.cmseducation.org/",
    board: "Council for the Indian School Certificate Examinations (ICSE)",
    description:
      "Completed secondary education with comprehensive academic excellence across sciences, mathematics, and computer applications.",
    highlights: [
      "Secured 93.8% aggregate in ICSE board examinations",
      "Honored with academic excellence certificates for top school rank",
    ],
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  topics: string[];
}

export const certifications: CertificationItem[] = [
  {
    name: "Generative AI for Computer Vision",
    issuer: "NPTEL (IIT Kharagpur / IIT Madras)",
    date: "2026",
    topics: ["Diffusion Models", "GANs", "Vision Transformers", "Generative Latent Architectures"],
  },
  {
    name: "Python Backend & REST API Development",
    issuer: "Eglogics Softech Pvt. Ltd.",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/1huvpreEEu0CjP0w-GXNGqvLYe-Na6fAJ/view",
    topics: ["Flask", "FastAPI", "SQL Relational Schemas", "Biometric Computer Vision Pipelines"],
  },
  {
    name: "Deep Learning Research Fellowship",
    issuer: "IIT (BHU) Varanasi",
    date: "2026",
    credentialUrl: "https://drive.google.com/drive/folders/1r6HeJMppizOD-Qg0CcufdnU0TnMgLBon",
    topics: ["PaddyCare AI", "YOLO Classification", "EfficientNet", "Transfer Learning & Inference"],
  },
];

export interface ExperienceItem {
  role: string;
  org: string;
  location: string;
  period: string;
  link: string;
  driveLink: string;
  type: string;
  points: string[];
  skills: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Research Intern",
    org: "IIT (BHU) Varanasi",
    location: "Varanasi, India",
    period: "May 2026 – Jul 2026",
    link: "https://www.iitbhu.ac.in/",
    driveLink: "https://drive.google.com/drive/folders/1r6HeJMppizOD-Qg0CcufdnU0TnMgLBon",
    type: "Research Internship",
    skills: ["PyTorch", "YOLO", "EfficientNet", "FastAPI", "Streamlit", "Transfer Learning", "Data Augmentation"],
    points: [
      "I developed PaddyCare AI, a deep learning classification system to identify 10 major paddy crop diseases alongside healthy leaves from field images, utilizing YOLO and EfficientNet with transfer learning, custom data augmentation, and fine-tuning.",
      "I formulated comprehensive image preprocessing and augmentation pipelines (photometric variations, geometric transforms) to ensure inference resilience against challenging real-world illumination and camera angles.",
      "I built and deployed an asynchronous inference workflow in FastAPI and Streamlit to support rapid disease detection for farmers, aiding timely intervention and minimizing crop loss.",
    ],
  },
  {
    role: "Python Developer Intern",
    org: "Eglogics Softech Pvt. Ltd.",
    location: "Noida, India",
    period: "Mar 2026 – Apr 2026",
    link: "https://eglogics.com/",
    driveLink: "https://drive.google.com/file/d/1huvpreEEu0CjP0w-GXNGqvLYe-Na6fAJ/view",
    type: "Industry Internship",
    skills: ["Python", "OpenCV", "Flask", "SQL", "REST APIs", "Biometric Face Recognition"],
    points: [
      "I built an automated face-recognition attendance workflow in Python and OpenCV that identifies individuals via facial biometric vectors, eliminating physical contact and manual log errors.",
      "I integrated core image-processing logic with a lightweight Flask backend and relational SQL database, securely persisting attendance stamps and enabling sub-second identity verification.",
      "I tested end-to-end outputs, debugged request flows, and resolved edge-case illumination and pose mismatches to ensure robust production reliability.",
    ],
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: "AI / ML & CV" | "Full-Stack & Web" | "Data Analytics & Systems" | "Image Security";
  stack: string[];
  points: string[];
  link?: string; // Live demo URL
  githubLink: string;
  featured: boolean;
  metrics: string;
  summary: string;
}

export const projects: ProjectItem[] = [
  {
    id: "reinsurance-analytics",
    name: "Reinsurance Portfolio Analytics & Data Assurance Platform",
    subtitle: "Star Schema & Data Assurance Suite for 700 Treaties & 14k Records",
    category: "Data Analytics & Systems",
    stack: ["Python", "SQL", "PostgreSQL", "DuckDB", "Power BI / DAX", "Excel VBA", "Qlik", "Streamlit"],
    link: "https://ak-arsha.github.io/reinsurance-analytics/",
    githubLink: "https://github.com/Ak-arsha/reinsurance-analytics",
    featured: true,
    metrics: "700 Treaties • 14,000 Records • 28 Data-Quality Checks",
    summary:
      "End-to-end reinsurance analytics platform simulating a Portfolio Analytics & Actuarial team: multi-source ingestion, contract & treaty validation, clean star schema modeling, and automated triangle & loss ratio reporting.",
    points: [
      "Engineered analytics pipeline for 700 reinsurance treaties, ~8,000 premium transactions, and 6,000 claims; designed a clean star schema with 15 SQL queries/views for multi-dimensional risk and loss ratio analysis.",
      "Implemented 28 rigorous automated data-quality checks covering completeness, cross-system consistency, reconciliation steps, audit logging, and automated actuarial reporting.",
      "Delivered an interactive analytics dashboard with Power BI / DAX and Excel VBA integration for underwriters, actuaries, and executive portfolio reviews.",
    ],
  },
  {
    id: "krishimitra",
    name: "KrishiMitra 🌾",
    subtitle: "AI Farm Advisory & Multi-Role Mandi Platform",
    category: "AI / ML & CV",
    stack: ["Next.js 14", "FastAPI", "XGBoost", "LightGBM", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    link: "https://krishi-mitra-olive-one.vercel.app/",
    githubLink: "https://github.com/Ak-arsha/KrishiMitra",
    featured: true,
    metrics: "5-Day Price Forecast • MSP Sell/Store Engine • Geospatial Matching",
    summary:
      "Production-grade agricultural intelligence platform featuring ML crop price forecasting, Explainable AI insights, geospatial buyer discovery, and MSP-benchmarked advisory.",
    points: [
      "Constructed a full-stack farm advisory platform with machine learning-driven 5-day crop price forecasting using XGBoost and LightGBM models trained on historical mandi price series.",
      "Engineered an automated sell/store decision engine that compares live market quotes against government Minimum Support Price (MSP) floors to optimize farmer revenues.",
      "Integrated an Explainable AI (SHAP) inspection panel, a geospatial buyer recommendation engine utilizing the Haversine formula, and a multilingual voice assistant.",
    ],
  },
  {
    id: "picture-perfect",
    name: "Picture Perfect 📸",
    subtitle: "AI-Powered Image Post-Processing Studio",
    category: "AI / ML & CV",
    stack: ["Python", "Streamlit", "OpenCV", "MediaPipe Face Mesh", "Gemini API", "Supabase"],
    link: "https://github.com/Ak-arsha/Picture-Perfect",
    githubLink: "https://github.com/Ak-arsha/Picture-Perfect",
    featured: true,
    metrics: "Real-Time Face Mesh • Natural Language AI Editing",
    summary:
      "Interactive 3D-styled web studio combining real-time computer vision for facial biometric adjustments with generative multimodal AI for conversational photo edits.",
    points: [
      "Built an interactive web studio executing real-time facial enhancements including automated smile correction and camera gaze alignment via 468-point MediaPipe Face Mesh landmarks.",
      "Integrated natural-language image editing powered by Google Gemini API, enabling users to transform images with intuitive conversational prompts.",
      "Architected cloud asset persistence and history tracking with Supabase PostgreSQL and storage buckets.",
    ],
  },
  {
    id: "deep-steganography",
    name: "Deep-Learning Image Steganography",
    subtitle: "Prep-Hide-Reveal Encoder-Decoder with Residual Architecture",
    category: "Image Security",
    stack: ["PyTorch", "Python", "OpenCV", "NumPy", "Matplotlib", "Scikit-image"],
    link: "https://github.com/Ak-arsha/Deep-Learning-Based-Steganography",
    githubLink: "https://github.com/Ak-arsha/Deep-Learning-Based-Steganography",
    featured: true,
    metrics: "0.89 Secret SSIM • Robust against Noise, Blur & Rotation Attacks",
    summary:
      "Convolutional deep neural network evaluating baseline vs. residual-block encoder-decoder networks for imperceptibly hiding full-color secret images inside cover media.",
    points: [
      "Designed and trained end-to-end deep convolutional Prep–Hide–Reveal networks in PyTorch to conceal 3-channel RGB secret images inside cover images with minimal perceptual distortion.",
      "Demonstrated that incorporating residual blocks improved secret-image recovery SSIM from 0.78 to 0.89 while maintaining high cover imperceptibility.",
      "Benchmarked robustness against adversarial image attacks including Gaussian noise, Gaussian blur, and spatial rotation transformations.",
    ],
  },
  {
    id: "svd-watermarking",
    name: "Traditional Medical Watermarking via SVD",
    subtitle: "Robust & Imperceptible Copyright Protection for Retinal Images",
    category: "Image Security",
    stack: ["Python", "OpenCV", "NumPy", "Matplotlib", "Scikit-image"],
    link: "https://github.com/Ak-arsha/Traditional-Watermarking-via-SVD",
    githubLink: "https://github.com/Ak-arsha/Traditional-Watermarking-via-SVD",
    featured: true,
    metrics: "42.5 dB PSNR • 0.982 SSIM • 85% Watermark Survival over 7k+ Images",
    summary:
      "Singular Value Decomposition (SVD) watermarking pipeline tailored for medical image copyright protection, clinical authentication, and tamper resilience.",
    points: [
      "Developed a classical algebraic SVD-based watermarking pipeline designed to preserve clinical diagnostic fidelity in digital medical and retinal imaging.",
      "Achieved superior imperceptibility of 42.5 dB PSNR and 0.982 SSIM on cover images, ensuring no degradation to diagnostic biomarkers.",
      "Demonstrated 85% average watermark recovery survival across 5 attack vectors (JPEG compression, Gaussian noise, salt-and-pepper noise, median filtering, cropping) across a dataset of 7,000+ retinal scans.",
    ],
  },
  {
    id: "retailpulse-datapulse",
    name: "DataPulse (RetailPulse) — Enterprise Data Platform",
    subtitle: "Enterprise Multi-Industry Data & ETL Engine",
    category: "Data Analytics & Systems",
    stack: ["Python", "SQL", "DuckDB", "Pandas", "ETL Pipelines", "Streamlit"],
    link: "https://github.com/Ak-arsha/RetailPulse",
    githubLink: "https://github.com/Ak-arsha/RetailPulse",
    featured: false,
    metrics: "Fortune 100 Solution Architecture • Multi-Domain ETL Pipelines",
    summary:
      "Enterprise data engineering platform solving automated ingestion, validation, and analytics across Hi-Tech, Healthcare, Retail, and SaaS industries.",
    points: [
      "Architected multi-source ETL pipelines ingesting and reconciling disparate transaction records with high-performance DuckDB and SQL workflows.",
      "Engineered automated schema validation, anomaly detection rules, and data aggregation stages producing clean analytical data marts.",
      "Built interactive Streamlit interfaces delivering real-time executive KPIs, cohort analysis, and trend metrics for business stakeholders.",
    ],
  },
  {
    id: "price-tracker",
    name: "E-Commerce Product Price & Stock Tracker",
    subtitle: "Automated Price Monitoring & Scrape Health Platform",
    category: "Full-Stack & Web",
    stack: ["Python", "FastAPI", "Playwright", "Next.js", "Tailwind CSS", "Vercel"],
    link: "https://price-tracker-indol-iota.vercel.app",
    githubLink: "https://github.com/Ak-arsha/Price-Tracker",
    featured: false,
    metrics: "Automated Price History • Transparent Scrape Auditing",
    summary:
      "Full-stack product price and inventory tracker with scheduled headless scrapers, chronological analytics, and error-isolated telemetry.",
    points: [
      "Engineered automated scraper daemon monitoring e-commerce product inventories, price swings, and stock availability with Playwright and Beautiful Soup.",
      "Designed a resilient data architecture: failed or throttled scrapes are logged transparently in health telemetry without polluting historical pricing trends.",
      "Deployed a responsive Next.js web application on Vercel displaying chronological price movement graphs and user alert notifications.",
    ],
  },
  {
    id: "crop-yield-prediction",
    name: "Crop Yield Prediction for Indian Agriculture",
    subtitle: "Machine Learning Yield Forecasting for Indian Agriculture",
    category: "AI / ML & CV",
    stack: ["Python", "Jupyter Notebook", "XGBoost", "Random Forest", "Scikit-learn", "Pandas"],
    link: "https://github.com/Ak-arsha/Crop-Yield-Prediction",
    githubLink: "https://github.com/Ak-arsha/Crop-Yield-Prediction",
    featured: false,
    metrics: "Multi-Model ML Regression • Soil & Rainfall Predictive Modeling",
    summary:
      "Data-driven predictive mathematical model estimating crop yield (tons/hectare) across Indian agro-climatic zones based on soil nutrients, rainfall, and fertilizer data.",
    points: [
      "Conducted extensive exploratory data analysis, outlier remediation, and feature engineering across multi-decade Indian agricultural records.",
      "Trained and evaluated regression models including XGBoost, Random Forest, and Ridge Regression to forecast crop output with high statistical accuracy.",
      "Derived interpretable feature importances identifying optimal soil nitrogen-phosphorus-potassium (NPK) ratios and rainfall timing for maximizing yields.",
    ],
  },
  {
    id: "jansathi",
    name: "JanSathi — Civic Welfare & Citizen Services Portal",
    subtitle: "Civic Welfare & Citizen Services Portal",
    category: "Full-Stack & Web",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://jansathi-lime.vercel.app",
    githubLink: "https://github.com/Ak-arsha/jansathi",
    featured: false,
    metrics: "Mobile-First Civic Portal • Real-Time Scheme Eligibility Engine",
    summary:
      "Citizen-centric digital portal simplifying discovery, eligibility verification, and application guidance for Indian public welfare schemes.",
    points: [
      "Constructed a high-performance single-page web portal with React, TypeScript, and Vite designed for rapid load times over low-bandwidth mobile connections.",
      "Implemented an intuitive questionnaire engine matching citizens to applicable government programs based on income, location, and demographic criteria.",
      "Structured localized multilingual UX with accessible typography and step-by-step documentation checklists.",
    ],
  },
  {
    id: "video-calling-app",
    name: "WebRTC Real-Time Video Calling Application",
    subtitle: "Real-Time Peer-to-Peer Video Conferencing",
    category: "Full-Stack & Web",
    stack: ["WebRTC", "JavaScript", "Node.js", "Socket.io", "HTML5/CSS3"],
    link: "https://github.com/Ak-arsha/video-calling-app",
    githubLink: "https://github.com/Ak-arsha/video-calling-app",
    featured: false,
    metrics: "P2P WebRTC Mesh Streaming • Screen Share & Low Latency Audio/Video",
    summary:
      "Browser-based peer-to-peer audio and video communication application utilizing WebRTC mesh networking for real-time media exchange without intermediary transcoders.",
    points: [
      "Implemented WebRTC peer connection lifecycle with STUN server candidate harvesting and SDP signaling via a Node.js Socket.io server.",
      "Engineered responsive video controls for camera flipping, microphone muting, dynamic stream renegotiation, and screen sharing.",
      "Built clean participant grid layout with adaptive bandwidth handling and in-call text chat exchange.",
    ],
  },
  {
    id: "akarsha-portfolio",
    name: "Akarsha Agarwal — 3D Portfolio Platform",
    subtitle: "Interactive Multi-Page Engineering Portfolio",
    category: "Full-Stack & Web",
    stack: ["Next.js 15", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
    link: "https://akarsha-portfolio.vercel.app/",
    githubLink: "https://github.com/Ak-arsha/akarsha-portfolio",
    featured: false,
    metrics: "Multi-Page Interactive Night Sky • Physics Cursor Constellation",
    summary:
      "Production Next.js 15 multi-page web platform featuring interactive 3D particle constellations, dynamic API routes, and dedicated sub-pages for Education, Projects, and Research.",
    points: [
      "Engineered a responsive multi-page architecture with Next.js App Router, separating deep views for Education, Projects, Experience, Research, Skills, and Contact.",
      "Built an interactive Three.js starry canvas with custom vertex physics reacting to cursor momentum and viewport coordinates.",
      "Integrated live stats API endpoints fetching dynamic metrics from Codeforces and GitHub with fallback caches.",
    ],
  },
];

export interface PublicationItem {
  title: string;
  venue: string;
  status: string;
  link: string;
  driveLink: string;
  detail: string;
  metrics: string[];
}

export const publications: PublicationItem[] = [
  {
    title: "LocalMark: Robust Localised Message Watermarking for Secure Digital Image Copyright Protection",
    venue: "Journal of the Franklin Institute (2026)",
    status: "Under review",
    link: "https://www.sciencedirect.com/journal/journal-of-the-franklin-institute",
    driveLink: "https://drive.google.com/file/d/1m6w9xMATJaSWIic-cI3O-EPm22PFAkzu/view",
    metrics: ["96% Bit Accuracy", "48.27 dB PSNR", "24 Real-World Attacks", "U-Net Architecture"],
    detail:
      "I co-authored a deep U-Net-based watermarking framework for embedding patient-identifying secret messages into medical retinal images; contributed to dataset curation, experimental benchmarking, and manuscript drafting. The proposed Enhanced Robust Decoder achieved 96% bit accuracy and 48.27 dB PSNR across 24 real-world image attacks, outperforming four leading baseline architectures.",
  },
];

export interface AchievementItem {
  title: string;
  text: string;
  link: string;
  badge: string;
}

export const achievements: AchievementItem[] = [
  {
    title: "Smart India Hackathon (SIH) 2024",
    badge: "National Selectee",
    text: "Selected for the presentation round of Smart India Hackathon 2024 for an innovative security solution built around the 'Hardware Enabled Root of Trust' problem statement.",
    link: "https://www.sih.gov.in/",
  },
  {
    title: "Google Developer Groups (GDG) JIIT",
    badge: "Domain Lead",
    text: "Selected as Team Lead of the AI/ML Domain under GDG (Google Developers Group), Jaypee Institute of Information Technology, mentoring junior engineers and hosting technical workshops.",
    link: "https://gdg.community.dev/",
  },
  {
    title: "Competitive Programming Milestones",
    badge: "1000+ Algorithmic Problems",
    text: "Active competitive programmer with Codeforces rating 1388, 300+ problems solved on LeetCode, and 360+ problems solved on TUF+ spanning advanced dynamic programming, graphs, and greedy algorithms.",
    link: "https://codeforces.com/profile/Akarsha__Agarwal",
  },
];

export const skills = {
  Languages: ["Python", "C", "C++", "Java", "JavaScript", "PHP", "SQL"],
  "ML / DL & Computer Vision": [
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn",
    "MediaPipe",
    "YOLO",
    "EfficientNet",
    "Transfer Learning",
    "Generative AI",
    "spaCy",
    "Transformers",
  ],
  "Web & Frameworks": [
    "FastAPI",
    "Flask",
    "Django",
    "Django REST Framework",
    "Next.js",
    "React.js",
    "Node.js",
    "Streamlit",
    "WebRTC",
    "Tailwind CSS",
    "Framer Motion",
  ],
  "Databases & Analytics": [
    "PostgreSQL",
    "SQL",
    "Supabase",
    "DuckDB",
    "Pandas",
    "NumPy",
    "Power BI / DAX",
    "Excel VBA",
    "Qlik",
  ],
  "Tools & Cloud Platforms": [
    "Git / GitHub",
    "Google Colab",
    "Jupyter Notebook",
    "VS Code",
    "Vercel",
    "Overleaf (LaTeX)",
    "REST APIs",
    "Linux / Bash",
  ],
  "Competitive Programming": [
    "Codeforces (Rating: 1388)",
    "LeetCode (300+ Solved)",
    "TUF+ (360+ Solved)",
  ],
};
