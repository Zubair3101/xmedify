import React, { useContext } from "react";
import "./MedicalForm.css";
import { FaSearch } from "react-icons/fa";
import { MedicalContext } from "../contexts/MedicalContext";

const MedicalForm = () => {
  const {
    states,
    cities,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    fetchHospitals,
    isLoading
  } = useContext(MedicalContext);

  return (
    <div className="search-wrapper container-fluid">
      <div className="search-box">
        {/* State Dropdown */}
        <div id="state" className="form-control">
          <FaSearch className="icon" />
          <select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div id="city" className="form-control">
          <FaSearch className="icon" />
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button 
          id="searchBtn"
          type="submit"
          className="search-bttn" 
          onClick={fetchHospitals}
          disabled={!selectedState || !selectedCity || isLoading}
        >
          {isLoading ? 'Loading...' : <><FaSearch /> Search</>}
        </button>
      </div>
    </div>
  );
};

export default MedicalForm;
