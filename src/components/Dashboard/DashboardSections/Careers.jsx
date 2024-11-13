import { useNavigate } from "react-router-dom";

import "./Careers.css";

function Careers() {
  const navigate = useNavigate();

  const careers = [
    {
      id: "computer-science",
      title: "Computer Science",
      overview: "Uncover the principles behind computing, algorithms, and software to solve complex, real-world challenges.",
      skills: ["Basic Programming (e.g., Python or Scratch)", "Logical Thinking", "Basic Math (Algebra)"],
      opportunities: [
        "Software Developer",
        "Systems Analyst",
        "AI Engineer",
      ],
    },
    {
      id: "software-engineering",
      title: "Software Engineering",
      overview: "Learn how to design, develop, and maintain complex software systems.",
      skills: ["Problem-Solving Mindset", "Mathematics", "Introductory Programming Knowledge"],
      opportunities: [
        "Software Engineer",
        "Application Developer",
        "Quality Assurance Engineer",
      ],
    },
    {
      id: "information-technology",
      title: "Information Technology",
      overview: "Study the infrastructure and support systems that keep digital networks running.",
      skills: ["Basic Computer Knowledge (OS, MS Office)", "Problem-Solving Abilities", "Basic Mathematices"],
      opportunities: ["IT Specialist", "Network Administrator", "Technical Support Engineer"],
    },
    {
      id: "BIT",
      title: "Business Information Technology",
      overview: "Combine IT skills with business strategies to improve organizational performance.",
      skills: ["Analytical Thinking", "Basic Understanding of Business Concepts", "Interest in Technology and Business"],
      opportunities: ["Business Analyst", "IT Consultant", "Project Manager"],
    },
    {
      id: "data-science",
      title: "Data Science",
      overview: "Dive into data analysis, machine learning, and insights to drive decision-making.",
      skills: ["Basic Statistics and Probability", "Data Interpretation Skills (working with tables, graphs)", "Interest in Problem Solving"],
      opportunities: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      overview: "Learn techniques to protect systems and data from digital threats and attacks.",
      skills: ["Problem-Solving Mindset", "Attention to Detail", "Basic Understanding of Internet Safety"],
      opportunities: [
        "Cybersecurity Analyst",
        "Security Consultant",
        "Penetration Tester",
        "Ethical Hacker",
      ],
    },
    {
      id: "information-systems",
      title: "Information Systems",
      overview: "Focus on designing and managing systems that help organizations operate efficiently.",
      skills: [
        "Logical Thinking",
        "Introductory Knowledge of Databases",
        "Interest in Business and Technology",
      ],
      opportunities: [
        "Database Administrator",
        "IT Project Manager",
        "Systems Analyst",
      ],
    },
    {
      id: "digital-media",
      title: "Digital Media",
      overview: "Explore creative digital content production, from graphics to video and web design.",
      skills: ["Creative Design Thinking", "Basic Graphic Design Tools", "Understanding of Social Media"],
      opportunities: [
        "Digital Content Creator",
        "Multimedia Designer",
        "Content Strategist",
      ],
    },
    {
      id: "ICT",
      title: "Information & Communication Technology",
      overview: "Discover the role of technology in communication, networks, and digital interactions.",
      skills: ["Basic Networking Concepts ", "Problem-Solving Abilities", "Interest in Communication Tools"],
      opportunities: [
        "Network Engineer",
        "ICT Manager",
        "Telecom Specialist",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      overview: "Develop skills in online marketing, social media, and strategies to engage audiences.",
      skills: ["Creative Writing Skills", "Content Marketing", "Social Media Marketing"],
      opportunities: [
        "Digital Marketing Specialist",
        "SEO Specialist",
        "Social Media Manager",
      ],
    },
  ];

  const handleLearnMore = (careerId) => {
    navigate(`/careers/${careerId}`);
  };

  return (
    <div className="career-page">
        <h1>Explore Career Paths</h1>
      <div className="career-paths-container">
        {careers.map((career, index) => (
          <div key={index} className="career-card">
            <h2>{career.title}</h2>
            <p className="career-overview-p">{career.overview}</p>
            <p className="title">Skills Required:</p>
            <ul>
              {career.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <p className="title">Career Opportunities:</p>
            <ul>
              {career.opportunities.map((opportunity, idx) => (
                <li key={idx}>{opportunity}</li>
              ))}
            </ul>
            <button
              className="learn-more-button"
              onClick={() => handleLearnMore(career.id)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
