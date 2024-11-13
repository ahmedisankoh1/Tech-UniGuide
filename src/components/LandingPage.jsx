import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Features from "./Features";
import Team from "./Team";
import "./LandingPage.css";
import "./About.css";
import "./Features.css";
import "./Team.css";
import vision_img from "/src/assets/images/vision.png";

import
"react-icons/fa";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-page-container">
        <div className="content">
          <div className="landing-hero">
            <h3>Welcome to</h3>
            <h1>
              <span>Tech Uni</span>Guide
            </h1>
            <p>
              Your guide to understanding courses and choosing the right career
              path.
            </p>
            <p>
              Tech UniGuide is designed to help students explore diverse career
              options, get in-depth course descriptions, and understand what
              each path has to offer. Choose wisely, knowing exactly what awaits
              you.
            </p>
          </div>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
      <About />
      <Features />
      <Team />

      <section className="team-section">
        <div className="team-container">
          <div className="contents">
            <div className="team-header">
              <h2 className="team-title">We Helped Them Choose</h2>
            </div>
            <div className="team-member-container">


              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Joshua Kajua</h3>
                </div>
                <p>
                  Joshua Kajua is a well known Teacher in Lungi, Sierra Loene and has contributed towards the growth of tech education in the district.
                </p>
              </div>


              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Zainab Kamara</h3>
                </div>
                <p>
                  Zainab Kamara is a born of Lungi, Sierra Leone that has been trying to break the digital devide in rural communities focusing on girl. She has helped alot acheive their dreams in the digital world.
                </p>
              </div>


              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Abdul Aziz</h3>
                </div>
                <p>
                  Abdul Aziz is a well known business man in Lungi, Sierra Leone, he is mainly recognised for the scholarships he offers to students who choose to pursue a career in tech.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
