import React, { useContext } from "react";
import "./MedicalCenters.css";
import doctorImage from "../assets/docs.png";
import hospitalIcon from "../assets/LookingFor/3.png";
import doctorIcon from "../assets/LookingFor/1.png";
import labIcon from "../assets/LookingFor/2.png";
import medicalStoreIcon from "../assets/LookingFor/4.png";
import ambulanceIcon from "../assets/LookingFor/5.png";
import { useNavigate } from "react-router-dom";
import { MedicalContext } from "../contexts/MedicalContext";

const MedicalCenters = () => {
  const navigate = useNavigate();
  const {
    states,
    cities,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    fetchHospitals,
  } = useContext(MedicalContext);

  const handleSearch = () => {
    fetchHospitals().then(() => {
      // Wait for hospitals to be fetched
      navigate("/hospitals", { state: { fromHomepage: true } }); // Pass navigation state
    });
  };

  return (
    <div className="medical-center-container-fluid">
      <div className="intro-section">
        <div className="text-content">
          <h3>Skip the travel! Find Online</h3>
          <h1>
            <span className="bold-text">Medical</span>{" "}
            <span className="blue-text">Centers</span>
          </h1>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button className="find-centers-btn">Find Centers</button>
        </div>
        <div className="image-content">
          <img src={doctorImage} alt="Doctors" />
        </div>
      </div>

      <div className="form-section">
        <div className="form-grid">
          <div id="state">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            id="state"
          >
            <option value="">State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          </div>
          <div id="city">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
            id="city"
          >
            <option value="">City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          </div>
          <button type="submit" id="searchBtn" className="search-btn" onClick={handleSearch}>
            🔍 Search
          </button>
        </div>

        <h3 className="suggestion-title">You may be looking for</h3>
        <div className="options-grid">
          <div className="option-box">
            <img src={doctorIcon} alt="Doctors" />
            <p>Doctors</p>
          </div>
          <div className="option-box">
            <img src={labIcon} alt="Labs" />
            <p>Labs</p>
          </div>
          <div className="option-box active">
            <img src={hospitalIcon} alt="Hospitals" />
            <p>Hospitals</p>
          </div>
          <div className="option-box">
            <img src={medicalStoreIcon} alt="Medical Store" />
            <p>Medical Store</p>
          </div>
          <div className="option-box">
            <img src={ambulanceIcon} alt="Ambulance" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenters;
