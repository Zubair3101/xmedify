import React from "react";
import Navbar from "../components/Navbar";
import MedicalCenters from "../components/MedicalCenters";
import OfferSlider from "../components/OfferSlider";
import Specialization from "../components/Specialization";
import SpecialistDoctors from "../components/SpecialistDoctors";
import PatientCaring from "../components/PatientCaring";
import Blogpost from "../components/Blogpost";
import OurFamilies from "../components/OurFamilies";
import FAQs from "../components/FAQs";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <MedicalCenters />
      <OfferSlider />
      <Specialization />
      <SpecialistDoctors />
      <PatientCaring />
      <Blogpost />
      <OurFamilies />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default Homepage;
