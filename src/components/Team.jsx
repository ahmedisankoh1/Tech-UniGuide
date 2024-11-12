import {
  // FaBookOpen,
  // FaBriefcase,
  // FaWrench,
  // FaHandshake,
  // FaChartLine,
  // FaGift,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"; // Icons for feature highlights

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
              <h4 className="team-title">Founder -Tech Inspire SL</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                aliquam fugit facilis repellat? Cumque, labore. Non
                exercitationem ea atque odit, ipsum magni mollitia numquam, est
                illum aspernatur, unde corporis aperiam!
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


            {/* <div className="team-member">
              <img src={ahmedImg} alt="" />
              <h3 className="team-name">Mohamed Super Dumbuya</h3>
              <h4 className="team-title">Co-Founder -Tech Inspire SL</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                aliquam fugit facilis repellat? Cumque, labore. Non
                exercitationem ea atque odit, ipsum magni mollitia numquam, est
                illum aspernatur, unde corporis aperiam!
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
            </div> */}


          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
