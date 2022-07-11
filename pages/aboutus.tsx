import React from 'react'
import WhoAreWe from '../components/aboutus/Whoarewe'
import WhyRacold from '../components/aboutus/whyracold'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <WhoAreWe />
      <WhyRacold />
      <Footer />
    </div>
  )
}

export default AboutUs