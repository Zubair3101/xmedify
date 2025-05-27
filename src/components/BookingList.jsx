import React, { useContext } from "react";
import "./BookingList.css";
import hospitalIcon from "../assets/hospital.png";
import adImage from "../assets/ad.png";
import { MedicalContext } from "../contexts/MedicalContext";

const BookingList = () => {

  const {bookings} = useContext(MedicalContext);

  return (
    <div className="promo-wrapper">
      <div className="promo-grid">
        <div className="promo-text">

          {bookings.map((booking) => (
                <div
                  key={booking.hospital.id}
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
                        {booking.hospital.name}
                      </h3>
                      <p
                        style={{
                          fontWeight: 600,
                          color: "#000",
                          margin: "4px 0",
                        }}
                      >
                        {booking.hospital.city}, {booking.hospital.state}
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#374151",
                          marginBottom: "10px",
                        }}
                      >
                        {booking.hospital.type}
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
                        👍 {booking.hospital.rating}
                      </div>
                    </div>

                    {/* Button */}
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "16px",
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <div>
                        <p style={{marginBottom: "0px", border: "1px solid #3b82f6", borderRadius: "5px", padding: "3px 6px", color: "#3b82f6", fontSize: "14px", marginRight: "10px"}}>{booking.time}</p>
                      </div>
                      <div>
                        <p style={{marginBottom: "0px", border: "1px solid green", borderRadius: "5px", padding: "3px 6px", color: "green", fontSize: "14px"}}>{booking.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        <div className="promo-img">
          <img src={adImage} alt="Offer Banner" style={{ width: "100%", borderRadius: "12px" }} />
        </div>
      </div>
    </div>
  );
};

export default BookingList;
