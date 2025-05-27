import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(42, 167, 255)",
          textAlign: "center",
          color: "white",
          padding: "5px 0px 5px 0px",
        }}
      >
        <p style={{ margin: "0px" }}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div
          className="container-fluid"
          style={{ padding: "0px 85px 0px 85px" }}
        >
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Medify"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Find Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hospitals">
                  Hospitals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Medicines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Surgeries
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Software for Provider
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-primary fw-bold square-pill px-3"
                  to="/my-bookings"
                >
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
