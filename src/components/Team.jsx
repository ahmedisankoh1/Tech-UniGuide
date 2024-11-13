import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import ahmedImg from "../assets/images/img1.jpg";
function Team() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="contents">
          <div className="team-header">
            <h2 className="team-title">Meet Our Team</h2>
          </div>


          <div className="team-member-container">

            <div className="team-member">
              <img src={ahmedImg} alt="Team member photo" />
              <h3 className="team-name">Ahmed Ibrahim Sankoh</h3>
              <h4 className="team-title">Founder - Tech Inspire SL</h4>
              <p>
              He is the driving force behind Tech Inspire SL, dedicated to bridging the digital divide in Sierra Leone. Through innovative programs and initiatives, He is inspiring young minds and fostering a vibrant tech ecosystem.
              </p>
              <div className="team-social-icon">
                <a href="">
                  <FaFacebook className="team-icon" />
                </a>
                <a href="">
                  <FaLinkedin className="team-icon" />
                </a>{" "}
                <a href="">
                  <FaTwitter className="team-icon" />
                </a>{" "}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
