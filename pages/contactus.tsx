import React from 'react'
import ContactUsForm from '../components/contactus/ContactUsForm'
import ContactUsMap from '../components/contactus/ContactUsMap'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const ContactUs = () => {
  return (
    <div>
        <Navbar />
        <ContactUsForm />
        <ContactUsMap />
        <Footer />
    </div>
  )
}

export default ContactUs