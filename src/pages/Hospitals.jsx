import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'
import FAQs from '../components/FAQs'
import MedicalForm from '../components/MedicalForm'
import HospitalList from '../components/HospitalList'
import { MedicalContext } from '../contexts/MedicalContext'
import { useLocation } from 'react-router-dom';


function Hospitals() {
  const { resetSearch, hasSearched } = useContext(MedicalContext);
  const location = useLocation();

  useEffect(() => {
    // Only reset if coming directly to hospitals page (not from homepage)
    if (!location.state?.fromHomepage && !hasSearched) {
      resetSearch();
    }
  }, [location.kesy]);

  return (
    <div>
        <Navbar/>
        <MedicalForm />
        <HospitalList />
        <FAQs />
        <DownloadApp />
        <Footer />
    </div>
  )
}

export default Hospitals