// src/components/About.jsx
import {
  // FaBookOpen,
  // FaBriefcase,
  // FaWrench,
  FaHandshake,
  FaChartLine,
  FaGift,
  // FaFacebook,
  // FaLinkedin,
  // FaTwitter,
} from "react-icons/fa"; // Icons for feature highlights

import React from "react";
import "./About.css";

function About() {
  return (
   <section className="about-container" id="about">
        <div className="contents">
          <div className="about-header">
            <h2>About Tech UniGuide</h2>
            <p>
              Tech UniGuide is a platform dedicated to providing students with
              essential information about various tech and non-tech courses. Our
              mission is to help students make informed decisions about their
              career paths based on their interests and goals.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight">
              <FaChartLine className="about-icon" />
              <div className="text">
                <h3>Our Vision</h3>
                <p>
                  To empower students with knowledge and resources that pave the
                  way for successful career choices.
                </p>
              </div>
            </div>
            <div className="highlight">
              <FaHandshake className="about-icon" />
              <div className="text">
                <h3>Our Mission</h3>
                <p>
                  To bridge the gap between education and industry by providing
                  up-to-date information on courses, job opportunities, and
                  required skills.
                </p>
              </div>
            </div>
            <div className="highlight">
              <FaGift className="about-icon" />
              <div className="text">
                <h3>What We Offer</h3>
                <p>
                  Comprehensive course descriptions, insights of different universities,
                  and connections to industry professionals to help students
                  thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    // </div>
  );
}

export default About;
