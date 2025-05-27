import React, { useContext, useState } from "react";
import "./HospitalList.css";
import hospitalIcon from "../assets/hospital.png";
import adImage from "../assets/ad.png";
import BookingCalendar from "./BookingCalander";
import verifiedIcon from "../assets/verifiedblack.png";
import { MedicalContext } from "../contexts/MedicalContext";

const HospitalList = () => {
  const [activeHospitalId, setActiveHospitalId] = useState(null);
  const { hospitals, isLoading, hasSearched } = useContext(MedicalContext);
  const { selectedCity } = useContext(MedicalContext);

  const toggleCalendar = (hospitalId) => {
    setActiveHospitalId(activeHospitalId === hospitalId ? null : hospitalId);
  };

  return (
    <div className="promo-wrapper">
      <div className="promo-grid">
        <div className="promo-text">
          {!hasSearched ? (
            <div className="prompt-message">
              <h3>Please select a state and city to search for hospitals</h3>
              <p>Use the search form above to find hospitals in your area</p>
            </div>
          ) : isLoading ? (
            <div className="loading-message">
              <div className="spinner"></div>
              <p>Loading hospitals...</p>
            </div>
          ) : hospitals.length === 0 ? (
            <div className="no-results-message">
              <h3>No hospitals found for your search</h3>
              <p>Try a different city or state</p>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: "22px", marginBottom: "25px" }}>
                {hospitals.length} medical centers available in {selectedCity}
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  marginBottom: "30px",
                }}
              >
                <img src={verifiedIcon} alt="Verified Img" /> Book appointments
                with minimum wait-time & verified doctor details
              </p>

              {hospitals.map((hospital) => (
                <div
                  key={hospital["Provider ID"]}
                  className="hospital-card"
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "25px",
                    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div style={{ display: "flex", gap: "20px" }}>
                    <img
                      src={hospitalIcon}
                      alt="hospital"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "contain",
                      }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#3b82f6",
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {hospital["Hospital Name"]}
                      </h3>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#000",
                          margin: "4px 0",
                        }}
                      >
                        {hospital.City}, {hospital.State}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#374151",
                          marginBottom: "10px",
                        }}
                      >
                        {hospital["Hospital Type"]}
                      </p>
                      <p style={{ fontWeight: 500, marginBottom: "5px" }}>
                        <span style={{ color: "#00b96b", fontWeight: 600 }}>
                          FREE
                        </span>{" "}
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#9ca3af",
                          }}
                        >
                          ₹500
                        </span>{" "}
                        Consultation fee at clinic
                      </p>
                      <hr
                        style={{
                          border: "none",
                          borderTop: "1px dashed #ccc",
                          margin: "10px 0",
                        }}
                      />
                      <div
                        style={{
                          background: "#dcfce7",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          color: "#15803d",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "6px",
                        }}
                      >
                        👍 {hospital["Hospital overall rating"]}
                      </div>
                    </div>

                    {/* Button */}
                    <div
                      style={{
                        textAlign: "right",
                        marginTop: "16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#22c55e",
                          fontWeight: 600,
                          marginRight: "10px",
                        }}
                      >
                        Available Today
                      </span>
                      <button
                        onClick={() => toggleCalendar(hospital["Provider ID"])}
                        style={{
                          backgroundColor: "#3b82f6",
                          color: "#fff",
                          border: "none",
                          padding: "8px",
                          fontWeight: 500,
                          borderRadius: "6px",
                          cursor: "pointer",
                        }}
                      >
                        {activeHospitalId === hospital["Provider ID"]
                          ? "Hide Booking Calendar"
                          : "Book FREE Center Visit"}
                      </button>
                    </div>
                  </div>

                  {/* Calendar */}
                  {activeHospitalId === hospital["Provider ID"] && (
                    <div style={{ marginTop: "25px", paddingTop: "20px" }}>
                      <BookingCalendar hospital={hospital} />
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="promo-img">
          <img
            src={adImage}
            alt="Offer Banner"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HospitalList;
