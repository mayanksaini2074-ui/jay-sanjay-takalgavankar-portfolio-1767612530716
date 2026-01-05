import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Jay Sanjay Takalgavankar",
    "title": "Software Engineering Undergraduate",
    "email": "123109040@nitkkr.ac.in",
    "phone": "+91-9766843534",
    "linkedin": "",
    "github": "GitHub",
    "location": "",
    "summary": "Software engineering undergraduate with strong foundations in Core Java, object-oriented design, and data structures. Experienced in building backend services and data-processing systems with an emphasis on code quality, performance, and testing. Motivated to contribute as a Software Developer Intern on production-grade platforms."
  },
  "experience": [
    {
      "title": "Software Engineering Intern",
      "company": "The BAAP Company",
      "dates": "Apr 2025 – Jul 2025",
      "description": "Developed and optimized backend services for data-intensive applications.",
      "highlights": [
        "Reduced processing latency by approximately 35%.",
        "Collaborated using Git-based workflows and code reviews."
      ]
    },
    {
      "title": "Teaching Assistant (Computer Science)",
      "company": "Kunduz",
      "dates": "Oct 2024 – Nov 2024",
      "description": "Mentored students in data structures, algorithms, and programming fundamentals.",
      "highlights": []
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Industrial Internet of Things",
      "institution": "National Institute of Technology, Kurukshetra",
      "years": "2023 – 2027",
      "gpa": "8.11 / 10"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Smart Logistics & Dispatch Optimization Platform",
      "description": "Designed backend modules to process orders, vehicles, and routing constraints. Applied data structures and algorithms to optimize dispatch logic. Focused on clean code, modular design, and performance efficiency.",
      "technologies": [],
      "link": "Live Link",
      "github": ""
    },
    {
      "name": "Sensor Data Analysis and Monitoring System",
      "description": "Built backend pipelines to ingest, clean, and process sensor data. Implemented validation and anomaly detection for noisy inputs. Improved robustness by handling real-world edge cases.",
      "technologies": [
        "Python"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Stock Market Data Service",
      "description": "Developed REST APIs to fetch, process, and serve market data. Practiced API design, logging, and exception handling. Gained experience with real-time data ingestion workflows.",
      "technologies": [],
      "link": "Live Link",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "cyan"
};
