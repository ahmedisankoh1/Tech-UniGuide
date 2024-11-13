// src/components/Dashboard/DashboardSections/CareerDetail.jsx
import { FaArrowAltCircleLeft } from "react-icons/fa";
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
    healthcare: {
      title: "Healthcare",
      description:
        "Healthcare focuses on the maintenance and improvement of physical and mental health through medical services. It includes various professions dedicated to diagnosis, treatment, and prevention of illnesses.",
      jobOpportunities: ["Doctor", "Nurse", "Pharmacist"],
      skills: ["Empathy", "Medical Knowledge", "Communication"],
      workingAreas: ["Hospitals", "Clinics", "Pharmaceuticals"],
      educationalPath:
        "Typically requires relevant degrees and certifications. For example, doctors need a medical degree and residency training.",
      salaryRange: "$50,000 - $200,000",
      notableCompanies: ["Mayo Clinic", "Johns Hopkins Medicine", "Pfizer"],
      futureOutlook:
        "High demand due to ongoing health challenges and an aging population.",
    },
    business: {
      title: "Business",
      description:
        "Business involves the organization and management of resources to achieve economic goals. It covers various domains such as finance, marketing, and entrepreneurship.",
      jobOpportunities: ["Business Analyst", "Entrepreneur", "Consultant"],
      skills: ["Leadership", "Strategic Thinking", "Financial Acumen"],
      workingAreas: ["Corporate", "Startups", "Consulting"],
      educationalPath:
        "Typically requires a Bachelor's degree in Business Administration or a related field. MBA is often preferred for higher roles.",
      salaryRange: "$55,000 - $150,000",
      notableCompanies: ["Goldman Sachs", "McKinsey & Company", "Apple"],
      futureOutlook:
        "Growing opportunities with a focus on innovation and digital transformation.",
    },
    art: {
      title: "Art",
      description:
        "Art encompasses the creation of visual, auditory, or performance pieces that express imaginative or technical skill. It includes disciplines like painting, sculpture, music, and film.",
      jobOpportunities: ["Graphic Designer", "Illustrator", "Art Director"],
      skills: ["Creativity", "Visual Communication", "Design Principles"],
      workingAreas: ["Advertising", "Media", "Publishing"],
      educationalPath:
        "Typically requires a degree in Fine Arts, Graphic Design, or a related field. Portfolio is often crucial.",
      salaryRange: "$40,000 - $90,000",
      notableCompanies: ["Pixar", "Disney", "Adobe"],
      futureOutlook:
        "Steady demand with opportunities in digital media and creative industries.",
    },

    cybersecurity: {
      title: "Cybersecurity",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It involves safeguarding sensitive data from breaches and ensuring the integrity and confidentiality of information.",
      jobOpportunities: [
        "Cybersecurity Analyst",
        "Security Consultant",
        "Penetration Tester",
      ],
      skills: ["Network Security", "Risk Management", "Ethical Hacking"],
      workingAreas: ["Technology", "Finance", "Government"],
      educationalPath:
        "Typically requires a Bachelor's degree in Cybersecurity, Information Technology, or a related field. Certifications such as CISSP are highly valued.",
      salaryRange: "$70,000 - $150,000",
      notableCompanies: ["IBM", "Cisco", "Palo Alto Networks"],
      futureOutlook:
        "High demand with increasing importance of data security in all sectors.",
    },
    "environmental-science": {
      title: "Environmental Science",
      description:
        "Environmental Science integrates physical, biological, and information sciences to study and manage the environment. It aims to understand and solve environmental problems.",
      jobOpportunities: [
        "Environmental Scientist",
        "Sustainability Consultant",
        "Conservation Specialist",
      ],
      skills: [
        "Environmental Analysis",
        "Sustainability Practices",
        "Field Research",
      ],
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
        "Growing importance due to climate change and environmental protection efforts.",
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
  };

  const career = careerData[careerId];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/dashboard/careers`);
  };
  
  // Effect to scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="career-detail-page">
      <Sidebar />
      <div className="career-detail-container">
        {/* <button onClick={() => handleBack()} className="backBtn">
          <FaArrowAltCircleLeft />
          Back
        </button>{" "} */}
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
