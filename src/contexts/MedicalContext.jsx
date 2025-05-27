import React, { createContext, useState, useEffect } from "react";

export const MedicalContext = createContext();

export const MedicalProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [bookings, setBookings] = useState([]); // Added bookings state
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Load states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://meddata-backend.onrender.com/states"
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  // Load cities when state changes
  useEffect(() => {
    if (selectedState) {
      const fetchCities = async () => {
        try {
          const response = await fetch(
            `https://meddata-backend.onrender.com/cities/${selectedState}`
          );
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };

      fetchCities();
    }
  }, [selectedState]);

  // Fetch hospitals
  const fetchHospitals = async () => {
  if (!selectedState || !selectedCity) return;

  // Only proceed if we're not already loading and the state has actually changed
  if (!isLoading && (
    hospitals.length === 0 || 
    selectedState !== localStorage.getItem("selectedState") || 
    selectedCity !== localStorage.getItem("selectedCity")
  )) {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );
      const data = await response.json();
      
      // Only update if data has changed
      if (JSON.stringify(data) !== JSON.stringify(hospitals)) {
        setHospitals(data);
        localStorage.setItem("hospitals", JSON.stringify(data));
        localStorage.setItem("selectedState", selectedState);
        localStorage.setItem("selectedCity", selectedCity);
      }
      return data;
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
};

  // Add booking
  const addBooking = (booking) => {
    const newBooking = {
      id: Date.now(),
      hospital: booking.hospital,
      date: booking.date,
      time: booking.time,
      email: booking.email,
      createdAt: new Date().toISOString()
    };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    return true; // Return success status
  };

  // Reset search
  const resetSearch = () => {
    setSelectedState("");
    setSelectedCity("");
    setHospitals([]);
    setHasSearched(false);
    localStorage.removeItem("hospitals");
  };

  // Load persisted data on mount
  useEffect(() => {
    const savedHospitals = localStorage.getItem("hospitals");
    const savedState = localStorage.getItem("selectedState");
    const savedCity = localStorage.getItem("selectedCity");
    const savedBookings = localStorage.getItem("bookings");

    if (savedHospitals) setHospitals(JSON.parse(savedHospitals));
    if (savedState) setSelectedState(savedState);
    if (savedCity) setSelectedCity(savedCity);
    if (savedBookings) setBookings(JSON.parse(savedBookings));
  }, []);

  return (
    <MedicalContext.Provider
      value={{
        states,
        cities,
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        hospitals,
        bookings, // Added to context
        fetchHospitals,
        addBooking, // Added to context
        isLoading,
        hasSearched,
        resetSearch,
      }}
    >
      {children}
    </MedicalContext.Provider>
  );
};
