import React from "react";
import "./DownloadApp.css";

import mobileCombo from "../assets/phoneapp.png"; // your uploaded full mobile image
import arrow from "../assets/arrow.png";                // your arrow image
import googlePlay from "../assets/google_play.png";     // Google Play badge
import appStore from "../assets/apple_store.png";         // App Store badge

const DownloadApp = () => {
  return (
    <div className="download-wrapper">
      <div className="download-container">
        {/* Left: Full mobile image */}
        <div className="mobile-wrapper">
          <img src={mobileCombo} alt="Mobile Preview" className="mobile-image" />
        </div>

        {/* Right: Text and form */}
        <div className="content">
          <img src={arrow} alt="Arrow" className="arrow-img" />
          <h2>
            Download the
          </h2>
          <h2><span className="highlight">Medify</span> App</h2>
          <p className="subtext">Get the link to download the app</p>

          <div className="sms-form">
            <span className="country-code">+91</span>
            <input type="text" placeholder="Enter phone number" style={{width: "50%"}}/>
            <button>Send SMS</button>
          </div>

          <div className="store-buttons">
            <button><img src={googlePlay} alt="Google Play" /></button>
            <button><img src={appStore} alt="App Store" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
