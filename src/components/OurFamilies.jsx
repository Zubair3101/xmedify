import React from "react";
import "./OurFamilies.css";

import iconPatient from "../assets/OurFamilies/1.png";
import iconHospital from "../assets/OurFamilies/2.png";
import iconLab from "../assets/OurFamilies/3.png";
import iconDoctor from "../assets/OurFamilies/4.png";

const stats = [
  {
    icon: iconPatient,
    number: "5000+",
    label: "Happy Patients",
    bg: "#e0f2ff", // light blue
  },
  {
    icon: iconHospital,
    number: "200+",
    label: "Hospitals",
    bg: "#ffe9e5", // light pink
  },
  {
    icon: iconLab,
    number: "1000+",
    label: "Laboratories",
    bg: "#fff5db", // light yellow
  },
  {
    icon: iconDoctor,
    number: "700+",
    label: "Expert Doctors",
    bg: "#e5fdf4", // light green
  },
];

export default function OurFamilies() {
  return (
    <div className="our-families-wrapper">
      <div className="our-families-container">
        <div className="our-families-left">
          <p className="section-highlight">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <h2 className="section-title">Our Families</h2>
          <p className="section-description">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="our-families-right">
          <div className="our-families-grid">
            {stats.map((item, idx) => (
              <div className="stat-card" key={idx}>
                <div
                  className="icon-circle"
                  style={{ backgroundColor: item.bg }}
                >
                  <img src={item.icon} alt={item.label} />
                </div>
                <h3 className="stat-number">{item.number}</h3>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
