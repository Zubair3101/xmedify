import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./SpecialistDoctors.css";

import doctor1 from "../assets/Doctors/1.png";
import doctor2 from "../assets/Doctors/2.png";
import doctor3 from "../assets/Doctors/3.png";

const doctors = [
  { name: "Dr. Ahmad Khan", specialty: "Neurologist", image: doctor3 },
  { name: "Dr. Heena Sachdeva", specialty: "Orthopaedics", image: doctor1 },
  { name: "Dr. Ankur Sharma", specialty: "Medicine", image: doctor2 },
  { name: "Dr. Ahmad Khan", specialty: "Neurologist", image: doctor3 },
  { name: "Dr. Heena Sachdeva", specialty: "Orthopaedics", image: doctor1 },
  { name: "Dr. Ankur Sharma", specialty: "Medicine", image: doctor2 },
];

export default function SpecialistDoctors() {
  return (
    <div className="specialist-section">
      <h2 className="specialist-heading">Our Medical Specialist</h2>
      <div className="specialist-wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="specialist-swiper"
      >
        {doctors.map((doc, idx) => (
          <SwiperSlide key={idx}>
            <div className="doctor-card">
              <div className="doctor-img-wrapper">
                <img src={doc.image} alt={doc.name} className="doctor-img" />
              </div>
              <h3 className="doctor-name">{doc.name}</h3>
              <p className="doctor-specialty">{doc.specialty}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
