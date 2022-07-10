import React from 'react'
import WhoAreWe from '../components/aboutus/Whoarewe'
import WhyRacold from '../components/aboutus/whyracold'
import Navbar from '../components/navbar/Navbar'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <WhoAreWe />
      <WhyRacold />
    </div>
  )
}

export default AboutUs