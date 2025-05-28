import React, { useState, useContext } from "react";
import { MedicalContext } from "../contexts/MedicalContext";
import { useSnackbar } from "notistack";

const getNext7Days = () => {
  const days = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Calculate days difference
    const diffInDays = Math.floor((date - today) / (1000 * 60 * 60 * 24));

    let displayLabel;
    if (diffInDays === 0) {
      displayLabel = "Today";
    } else if (diffInDays === 1) {
      displayLabel = "Tomorrow";
    } else {
      displayLabel = date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      });
    }

    days.push({
      label: date.toISOString().split('T')[0], // Keep ISO format for internal use
      displayLabel, // This will show "Today", "Tomorrow", or formatted date
      date: date.toISOString().split('T')[0]
    });
  }
  return days;
};

const timeSlots = {
  Morning: ["11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
};

const BookingCalendar = ({ hospital }) => {
  const { addBooking } = useContext(MedicalContext);
  const { enqueueSnackbar } = useSnackbar();
  
  const days = getNext7Days();
  const [activeIndex, setActiveIndex] = useState(0);
  const [rangeStart, setRangeStart] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);

  const visibleDays = days.slice(rangeStart, rangeStart + 3);

  const next = () => {
    if (rangeStart + 3 < days.length) setRangeStart(rangeStart + 1);
  };

  const prev = () => {
    if (rangeStart > 0) setRangeStart(rangeStart - 1);
  };

  const handleSlotClick = (period, slot) => {
    setSelectedSlot({
      period,
      time: slot,
      date: days[activeIndex].displayLabel,
      dateValue: days[activeIndex].date
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      enqueueSnackbar("Please enter your email", { variant: "error" });
      return;
    }

    const bookingData = {
      hospital: {
        id: hospital["Provider ID"],
        name: hospital["Hospital Name"],
        city: hospital.City,
        state: hospital.State,
        type: hospital["Hospital Type"],
        rating: hospital["Hospital overall rating"]
      },
      date: selectedSlot.dateValue,
      time: selectedSlot.time,
      email
    };

    try {
      addBooking(bookingData);
      enqueueSnackbar("Appointment booked successfully!", { 
        variant: "success",
        autoHideDuration: 3000
      });
      setShowForm(false);
      setEmail("");
    } catch (error) {
      enqueueSnackbar("Failed to book appointment", { 
        variant: "error",
        autoHideDuration: 3000
      });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEmail("");
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Blur overlay when form is shown */}
      {showForm && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        }} />
      )}

      {/* Date navigation */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        <button onClick={prev} disabled={rangeStart === 0} style={arrowStyle}>
          &#8592;
        </button>
        <div style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          borderBottom: "2px solid #e5e7eb",
        }}>
          {visibleDays.map((day, index) => {
            const realIndex = index + rangeStart;
            const isActive = realIndex === activeIndex;
            return (
              <div
                key={day.label}
                onClick={() => setActiveIndex(realIndex)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? "#000" : "#6b7280",
                  cursor: "pointer",
                  padding: "5px 0",
                }}
              >
                <div><p style={{marginBottom: "0px"}}>{day.displayLabel}</p></div>
                <div style={{ fontSize: "13px", color: "#22c55e" }}>
                  10 Slots Available
                </div>
                {isActive && (
                  <div style={{
                    height: "3px",
                    background: "#3b82f6",
                    marginTop: "4px",
                  }} />
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={next}
          disabled={rangeStart + 3 >= days.length}
          style={arrowStyle}
        >
          &#8594;
        </button>
      </div>

      {/* Time slots */}
      {Object.entries(timeSlots).map(([period, slots], i) => (
        <div key={period} style={{ marginBottom: "18px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <p style={{ width: "90px", fontWeight: "500" }}>{period}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleSlotClick(period, slot)}
                  style={{
                    padding: "5px 12px",
                    fontSize: "13px",
                    backgroundColor: "#f0f9ff",
                    border: "1px solid #3b82f6",
                    borderRadius: "6px",
                    color: "#3b82f6",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          {i !== Object.keys(timeSlots).length - 1 && (
            <hr style={{
              border: "none",
              borderTop: "1px solid #e5e7eb",
              marginTop: "14px",
              marginLeft: "90px",
            }} />
          )}
        </div>
      ))}

      {/* Booking Form Modal */}
      {showForm && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          zIndex: 1001,
          width: "650px",
          maxWidth: "90%",
        }}>
          <h2 style={{ marginBottom: "16px", color: "#3b82f6" }}>
            Confirm Booking
          </h2>
          <p style={{ marginBottom: "24px" }}>
            Please enter your email to confirm booking for <strong>{selectedSlot.date}</strong> at <strong>{selectedSlot.time}</strong>
          </p>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "500",
              }}>
                Enter your email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "16px",
                }}
              />
            </div>
            
            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}>
              <button
                type="button"
                onClick={handleCancel}
                style={{
                  padding: "10px 16px",
                  backgroundColor: "#f3f4f6",
                  color: "#374151",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: "10px 16px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const arrowStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  border: "1px solid #e5e7eb",
  backgroundColor: "white",
  fontSize: "18px",
  cursor: "pointer",
  color: "#3b82f6",
};

export default BookingCalendar;