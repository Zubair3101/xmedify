import React from "react";
import "./Specialization.css";
import img1 from '../assets/Specialisation/1.png';
import img2 from '../assets/Specialisation/2.png';
import img3 from '../assets/Specialisation/3.png';
import img4 from '../assets/Specialisation/4.png';
import img5 from '../assets/Specialisation/5.png';
import img6 from '../assets/Specialisation/6.png';
import img7 from '../assets/Specialisation/7.png';
import img8 from '../assets/Specialisation/8.png';

const specialisations = [
  { name: 'Dentistry', icon: img1 },
  { name: 'Primary Care', icon: img2 },
  { name: 'Cardiology', icon: img3 },
  { name: 'MRI Resonance', icon: img4 },
  { name: 'Blood Test', icon: img5 },
  { name: 'Piscologist', icon: img6 },
  { name: 'Laboratory', icon: img7 },
  { name: 'X-Ray', icon: img8 },
];

export default function SpecialisationGrid() {
  return (
    <div className="specialisation-container">
      <h2 className="specialisation-heading">
        Find By Specialisation
      </h2>
      <div className="specialisation-grid">
        {specialisations.map((item, idx) => (
          <div key={idx} className="specialisation-card">
            <img src={item.icon} alt={item.name} className="specialisation-image" />
            <p className="specialisation-title">{item.name}</p>
          </div>
        ))}
      </div>
      <button className="view-all-button">
        View All
      </button>
    </div>
  );
}