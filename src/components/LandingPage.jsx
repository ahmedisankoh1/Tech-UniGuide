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
// import mission_img from "/src/assets/images/mission.png";
// src/components/LandingPage.jsx
// import React from "react";
// import vision_img from "../";

import
"react-icons/fa"; // Icons for feature highlights

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
    // Navigate to sign up page
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquam fugit facilis repellat? Cumque, labore. Non
                </p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Zainab Kamara</h3>
                  {/* <h4 className="team-title">Co-Founder -Tech Inspire SL</h4> */}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquam fugit facilis repellat? Cumque, labore. Non
                </p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Abdul Aziz</h3>
                  {/* <h4 className="team-title">Co-Founder -Tech Inspire SL</h4> */}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquam fugit facilis repellat? Cumque, labore. Non
                </p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Mohamed Super Dumbuya</h3>
                  {/* <h4 className="team-title">Co-Founder -Tech Inspire SL</h4> */}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquam fugit facilis repellat? Cumque, labore. Non
                </p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Mohamed Super Dumbuya</h3>
                  {/* <h4 className="team-title">Co-Founder -Tech Inspire SL</h4> */}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquam fugit facilis repellat? Cumque, labore. Non
                </p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Mohamed Super Dumbuya</h3>
                  {/* <h4 className="team-title">Co-Founder -Tech Inspire SL</h4> */}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  aliquam fugit facilis repellat? Cumque, labore. Non
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
