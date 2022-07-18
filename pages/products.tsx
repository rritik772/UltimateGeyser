import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import ProductFilters from '../components/products/PropductFilters'

const Products = () => {
  const router = useRouter();
  return (
    <div className='pb-20'>
        <Navbar />
        <ProductFilters categoryFilter={(router.query.category)?(router.query.category as string):''}/>
        <Footer />
    </div>
  )
}

export default Products