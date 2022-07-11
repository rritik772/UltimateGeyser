import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PropductFilters from '../components/products/PropductFilters'

const Products = () => {
  return (
    <div className='pb-20'>
        <Navbar />
        <PropductFilters />
    </div>
  )
}

export default Products