import React from "react";
import "./Footer.css";

import logo from "../assets/logo.png";
import fbIcon from "../assets/facebook_logo.png";
import twitterIcon from "../assets/twitterlogo.png";
import youtubeIcon from "../assets/youtubelogo.png";
import pinterestIcon from "../assets/pinterestlogo.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-grid">
        {/* Logo + Social */}
        <div className="footer-col logo-social">
          <img src={logo} alt="Medify Logo" className="footer-logo" />
          <div className="footer-socials">
            <img src={fbIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={pinterestIcon} alt="Pinterest" />
          </div>
        </div>

        {/* Link groups */}
        <div className="footer-col">
          <ul>
            <li>› About Us</li>
            <li>› Our Pricing</li>
            <li>› Our Gallery</li>
            <li>› Appointment</li>
            <li>› Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>› Orthology</li>
            <li>› Neurology</li>
            <li>› Dental Care</li>
            <li>› Opthalmology</li>
            <li>› Cardiology</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul>
            <li>› About Us</li>
            <li>› Our Pricing</li>
            <li>› Our Gallery</li>
            <li>› Appointment</li>
            <li>› Privacy Policy</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
