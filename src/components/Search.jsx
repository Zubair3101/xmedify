import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="bookings-wrapper">
      <div className="bookings-header">
        <h2>My Bookings</h2>
      </div>

      <div className="bookings-form-card">
        <form className="search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search By Hospital" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch /> Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;