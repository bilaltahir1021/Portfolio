import "./styles/Career.css";

const python = "/images/python.webp";
const fastapi = "/images/fastapi.webp";
const cpp = "/images/cpp.webp";
const linux = "/images/kali-linux.webp";

const experiences = [
  {
    title: "AI & Machine Learning Developer",
    company_name: "Self-Initiated Research",
    icon: python, // Use the icon we just fixed!
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Implementing and training Convolutional Neural Networks (CNNs) using PyTorch for computer vision tasks, including the MNIST dataset.",
      "Developing interactive web applications with Streamlit to demonstrate machine learning models to end-users.",
      "Optimizing model performance and accuracy through rigorous hyperparameter tuning and data preprocessing techniques.",
    ],
  },
  {
    title: "SaaS Architect (CRM MVP)",
    company_name: "Micro-SaaS Startup",
    icon: fastapi, 
    iconBg: "#E6DEDD",
    date: "2026 - Present",
    points: [
      "Designing and building a Minimum Viable Product (MVP) for a specialized CRM system aimed at modernizing client management.",
      "Developing high-performance backend APIs using FastAPI and integrating them with relational database systems.",
      "Creating robust SQL schemas and relational algebra models to handle complex data relationships efficiently.",
    ],
  },
  {
    title: "Software Engineer (C++)",
    company_name: "Core Development Projects",
    icon: cpp,
    iconBg: "#383E56",
    date: "2025 - 2026",
    points: [
      "Engineered a persistent sleep consistency analyzer in C++ using recursive logic and file-based data storage.",
      "Developed trend correlation algorithms to help users analyze and improve lifestyle habits through data persistence.",
      "Applied advanced data structures and algorithms to solve complex logical problems in a desktop environment.",
    ],
  },
  {
    title: "Cybersecurity Practitioner",
    company_name: "TryHackMe / Kali Linux",
    icon: linux, 
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Practicing penetration testing and vulnerability assessment within virtualized Kali Linux environments.",
      "Developing proficiency in terminal-based debugging, hash identification, and networking troubleshooting via VirtualBox.",
      "Translating academic theory in Operating Systems and Network Security into practical, hands-on lab experiences.",
    ],
  },
];
