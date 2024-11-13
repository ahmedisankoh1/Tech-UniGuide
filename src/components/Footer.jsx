import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="top">
          <div className="navbar-logo">
            <NavLink to="/" activeClassName="active">
              <span>Tech Uni</span>Guide
            </NavLink>
          </div>
          <div className="media-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="link-boxes">
          <ul className="box">
            <div className="navbar-logo">
              <NavLink to="/" activeClassName="active">
                <span>Tech Uni</span>Guide
              </NavLink>
            </div>
            <p>
              Your guide to understanding tech courses and choosing the right career
              path.
            </p>
          </ul>
          <ul className="box">
            <li className="link_name">Tech UniGuide</li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          
          <ul className="box">
            <li className="link_name">How to reach us</li>
            <li>
              <p>
                {" "}
                <FaPhone /> +23233770612
              </p>
            </li>
            <li>
              <p>
                {" "}
                <FaLinkedin />  <a href="https://www.linkedin.com/in/ahmed-i-sankoh"> Ahmed Ibrahim Sankoh</a> 
              </p>
              <p>
                {" "}
                <FaWhatsapp /> +23233770612
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tech UniGuide. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
