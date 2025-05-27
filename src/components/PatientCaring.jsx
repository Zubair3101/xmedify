import React from "react";
import "./PatientCaring.css";
import verified from "../assets/verified.png";
import patientCaringImg from "../assets/patientcaring.png";

const PatientCaring = () => {
  return (
    <div className="consultation-section-wrapper">
      <div className="consultation-container">
        <div className="consultation-grid">
          <div className="image-section">
            <img
              src={patientCaringImg}
              alt="Doctor consultation"
              className="consultation-image"
            />
          </div>

          <div className="content-section">

            <h3 className="helping-patients">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </h3>

            <h1>
                <span className="bold-text">Patient</span>{' '}
                <span className="blue-text">Caring</span>
            </h1>
            <p className="care-description">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you <br/>and strive to be the first and best choice for healthcare.
            </p>

            <ul className="features-list">
              <li className="feature-item">
                <img src={verified} alt="Tick" className="tick-icon" />
                <span>Stay Updated About Your Health</span>
              </li>
              <li className="feature-item">
                <img src={verified} alt="Tick" className="tick-icon" />
                <span>Check Your Results Online</span>
              </li>
              <li className="feature-item">
                <img src={verified} alt="Tick" className="tick-icon" />
                <span>Manage Your Appointments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
