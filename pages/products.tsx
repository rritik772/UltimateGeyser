import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import PropductFilters from '../components/products/PropductFilters'

const Products = () => {
  return (
    <div className='pb-20'>
        <Navbar />
        <PropductFilters />
        <Footer />
    </div>
  )
}

export default Products