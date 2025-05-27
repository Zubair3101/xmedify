import React from 'react'
import Navbar from '../components/Navbar'
import FAQs from '../components/FAQs'
import DownloadApp from '../components/DownloadApp'
import Footer from '../components/Footer'
import Search from '../components/Search'
import BookingList from '../components/BookingList'

function Bookings() {
  return (
    <div>
        <Navbar />
        <Search />
        <BookingList />
        <FAQs />
        <DownloadApp />
        <Footer />
    </div>
  )
}

export default Bookings