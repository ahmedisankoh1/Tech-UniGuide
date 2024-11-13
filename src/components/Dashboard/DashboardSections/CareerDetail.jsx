// import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../Sidebar";
import "./careerDetail.css";

import { useParams } from "react-router-dom";

function CareerDetail() {
  const { careerId } = useParams();

  
  const careerData = {
    "computer-science": {
      title: "Computer Science",
      description:
        "Computer Science is the study of computation, automation, and information. It involves both theoretical studies of algorithms and practical engineering of software systems.",
      jobOpportunities: [
        "Software Developer",
        "Data Scientist",
        "Systems Analyst",
      ],
      skills: ["Programming", "Data Analysis", "Problem Solving"],
      workingAreas: ["Technology", "Finance", "Healthcare"],
      educationalPath:
        "Typically requires a Bachelor's degree in Computer Science, Software Engineering, or a related field.",
      salaryRange: "$60,000 - $120,000",
      notableCompanies: ["Google", "Microsoft", "Facebook"],
      futureOutlook:
        "Growing demand due to the increasing reliance on technology and data.",
    },
    "software-engineering": {
      title: "Software Engineering",
      description:
        "Software Engineering is the systematic approach to designing, developing, testing, and maintaining software. It combines engineering principles with coding skills to create efficient, reliable, and scalable software solutions.",
      jobOpportunities: [
        "Software Engineer",
        "Application Developer",
        "Quality Assurance Engineer",
      ],
      skills:  ["Problem-Solving Mindset", "Mathematics", "Introductory Programming Knowledge"],
      workingAreas: ["Construction", "Manufacturing", "Energy"],
      educationalPath:
        "Typically requires a Bachelor's degree in Engineering. Specializations may require further education or certification.",
      salaryRange: "$70,000 - $110,000",
      notableCompanies: ["General Electric", "Siemens", "Boeing"],
      futureOutlook:
        "Stable demand with opportunities in emerging technologies and renewable energy.",
    },
    "information-technology": {
      title: "Information Technology",
      description:
        "Information Technology (IT) is the study and management of computer systems, networks, and databases. It focuses on supporting, managing, and securing the infrastructure that organizations rely on to store, process, and share information.",
      jobOpportunities:["IT Specialist", "Network Administrator", "Technical Support Engineer"],
      skills: ["Basic Computer Knowledge (OS, MS Office)", "Problem-Solving Abilities", "Basic Mathematices"],
      workingAreas: ["Hospitals", "Clinics", "Pharmaceuticals"],
      educationalPath:
        "Typically requires relevant degrees and certifications. For example, doctors need a medical degree and residency training.",
      salaryRange: "$50,000 - $200,000",
      notableCompanies: ["Tesla", "Facebook", "Google"],
      futureOutlook:
        "Steady demand as businesses and organizations increasingly rely on technology infrastructure.",
    },
    "BIT": {
      title: "Business Information Technology",
      description:
        "Business Information Technology blends IT with business management. It focuses on using technology to improve business processes, solve organizational problems, and enhance decision-making through data and technology-driven strategies.",
      jobOpportunities: ["Business Analyst", "IT Consultant", "Project Manager"],
      skills: ["Analytical Thinking", "Basic Understanding of Business Concepts", "Interest in Technology and Business"],
      workingAreas: ["Corporate", "Startups", "Consulting"],
      educationalPath:
        "Typically requires a Bachelor's degree in Business Administration or a related field. MBA is often preferred for higher roles.",
      salaryRange: "$55,000 - $150,000",
      notableCompanies: ["Deloitte", "Oracle", "Apple"],
      futureOutlook:
      "Growing demand as companies look to align technology with business strategies and efficiencies."
    },

    "data-science": {
      title: "Data Science",
      description:
        "Data Science is the study of extracting insights and knowledge from data. It involves using statistical methods, machine learning, and programming to analyze data, make predictions, and drive decision-making.",
      jobOpportunities: ["Data Scientist", "Data Analyst", "Machine Learning Engineer"],
      skills: ["Basic Statistics and Probability", "Data Interpretation Skills (working with tables, graphs)", "Interest in Problem Solving"],
      workingAreas: ["Advertising", "Media", "Publishing"],
      educationalPath:
        "Typically requires a degree in Fine Arts, Graphic Design, or a related field. Portfolio is often crucial.",
      salaryRange: "$40,000 - $90,000",
      notableCompanies: ["Amazon", "IBM", "Facebook"],
      futureOutlook:
      "High demand for data-driven decision-making, with growth in AI and machine learning applications."
    },

    "cybersecurity": {
      title: "Cybersecurity",
      description:
        "Cyber Security is the practice of protecting systems, networks, and data from digital attacks. It involves understanding security principles, identifying vulnerabilities, and implementing strategies to prevent, detect, and respond to cyber threats.",
      jobOpportunities: [
        "Cybersecurity Analyst",
        "Security Consultant",
        "Penetration Tester",
      ],
      skills: ["Problem-Solving Mindset", "Attention to Detail", "Basic Understanding of Internet Safety"],
      workingAreas: ["Technology", "Finance", "Government"],
      educationalPath:
        "Typically requires a Bachelor's degree in Cybersecurity, Information Technology, or a related field. Certifications such as CISSP are highly valued.",
      salaryRange: "$70,000 - $150,000",
      notableCompanies: ["IBM", "Cisco", "Palo Alto Networks"],
      futureOutlook:
        "High demand with increasing importance of data security in all sectors.",
    },
    "information-systems": {
      title: "Information Systems",
      description:
        "Information Systems focuses on the use and management of information technology within organizations. It involves designing and implementing systems to collect, process, and store information to support business operations and decision-making.",
      jobOpportunities: [
        "Cybersecurity Analyst",
        "Security Consultant",
        "Penetration Tester",
        "Ethical Hacker",
      ],
      skills: ["Problem-Solving Mindset", "Attention to Detail", "Basic Understanding of Internet Safety"],
      workingAreas: ["Research", "Government", "Non-Profits"],
      educationalPath:
        "Typically requires a Bachelor's degree in Environmental Science or a related field. Advanced roles may require a Master's or PhD.",
      salaryRange: "$50,000 - $90,000",
      notableCompanies: [
        "Environmental Protection Agency",
        "World Wildlife Fund",
        "Greenpeace",
      ],
      futureOutlook:
        "Strong demand as businesses need effective information management systems.",
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "Digital Marketing involves promoting products and services through digital channels such as social media, search engines, and email. It leverages online tools and strategies to reach and engage customers.",
      jobOpportunities: [
        "Digital Marketer",
        "SEO Specialist",
        "Content Strategist",
      ],
      skills: ["SEO", "Content Marketing", "Social Media Marketing"],
      workingAreas: ["Advertising", "E-commerce", "Consulting"],
      educationalPath:
        "Typically requires a degree in Marketing, Communications, or a related field. Practical experience and certifications are also valuable.",
      salaryRange: "$45,000 - $100,000",
      notableCompanies: ["Google", "HubSpot", "Facebook"],
      futureOutlook:
        "High demand as digital presence becomes crucial for all businesses.",
    },
    "digital-media": {
      title: "Digital Media",
      description:
        "Digital Media focuses on creating and managing digital content, including graphics, videos, and animations. It combines art and technology to communicate visually across various platforms, including websites, social media, and multimedia channels.",
      jobOpportunities: [
        "Digital Content Creator",
        "Multimedia Designer",
        "Content Strategist",
      ],
      skills: ["Creative Design Thinking", "Basic Graphic Design Tools", "Understanding of Social Media"],
      workingAreas: ["Advertising", "E-commerce", "Consulting"],
      educationalPath:
        "Typically requires a degree in Marketing, Communications, or a related field. Practical experience and certifications are also valuable.",
      salaryRange: "$45,000 - $100,000",
      notableCompanies: ["Disney", "Adobe", "Buzz"],
      futureOutlook:
        "Strong demand as digital content and social media continue to grow across industries.",
    },
    "ICT": {
      title: "Information and Communication Technology",
      description:
        "Information & Communication Technology (ICT) combines information technology with communication tools to manage, store, and transmit data. It covers areas such as telecommunications, networking, and the integration of digital tools in communication.",
      jobOpportunities: [
        "Network Engineer",
        "ICT Manager",
        "Telecom Specialist",
      ],
      skills: ["Basic Networking Concepts ", "Problem-Solving Abilities", "Interest in Communication Tools"],
      workingAreas: ["Advertising", "E-commerce", "Consulting"],
      educationalPath:
        "Typically requires a degree in Marketing, Communications, or a related field. Practical experience and certifications are also valuable.",
      salaryRange: "$45,000 - $100,000",
      notableCompanies: ["Disney", "Adobe", "Buzz"],
      futureOutlook:
        "Strong demand as digital content and social media continue to grow across industries.",
    },
  };

  const career = careerData[careerId];

  const navigate = useNavigate();

  
  // Effect to scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="career-detail-page">
      <Sidebar />
      <div className="career-detail-container">
        {career ? (
          <>
            <h1>{career.title}</h1>
            <p>{career.description}</p>
            <h3>Job Opportunities</h3>
            <ul>
              {career.jobOpportunities.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
            <h3>Skills Required</h3>
            <ul>
              {career.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3>Working Areas</h3>
            <ul>
              {career.workingAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <h3>Educational Path</h3>
            <p>{career.educationalPath}</p>
            <h3>Salary Range</h3>
            <p>{career.salaryRange}</p>
            <h3>Notable Companies</h3>
            <ul>
              {career.notableCompanies.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
            <h3>Future Outlook</h3>
            <p>{career.futureOutlook}</p>
          </>
        ) : (
          <p>Career not found.</p>
        )}
      </div>
    </div>
  );
}

export default CareerDetail;
