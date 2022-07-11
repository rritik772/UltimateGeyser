import React from 'react'
import Products from './Products'
import products_list from './products.json'

const PropductFilters = () => {
  return (
    <div className='sm:(grid-cols-1) md:(grid-cols-3) lg:(grid-cols-4) grid justify-items-stretch gap-5 p-5'>
      <section className='place-self-start justify-self-center border p-5 rounded-lg shadow flex flex-col items-center min-w-[20rem] bg-gray-50/50'>
        <span className='text-red-500 text-lg font-bold uppercase tracking-wide'>Filter</span>
        <div className='border-b my-5 border-black w-full' />

        <section className='self-start flex flex-col font-normal tracking-wide'>
          <span className='font-bold uppercase tracking-wide'>Capacity</span>
          <div className=''>
            <input type="checkbox" className='accent-red-500 mr-3' id='3l'/>
            <label htmlFor="3l">3L</label>
          </div>
          <div className=''>
            <input type="checkbox" className='accent-red-500 mr-3' id='6l'/>
            <label htmlFor="6l">6L</label>
          </div>
          <div className=''>
            <input type="checkbox" className='accent-red-500 mr-3' id='9l'/>
            <label htmlFor="9l">9L</label>
          </div>
        </section>

        <section className='self-start flex flex-col font-normal tracking-wide mt-5'>
          <span className='font-bold uppercase tracking-wide'>Colour</span>
          <div className=''>
            <input type="checkbox" className='accent-red-500 mr-3' id='white'/>
            <label htmlFor="white">White</label>
          </div>
          <div className=''>
            <input type="checkbox" className='accent-red-500 mr-3' id='sandy'/>
            <label htmlFor="sandy">Sandy</label>
          </div>
          <div className=''>
            <input type="checkbox" className='accent-red-500 mr-3' id='off-white'/>
            <label htmlFor="off-white">Off-white</label>
          </div>
        </section>

      </section>


      <section className='md:(col-span-2) lg:(col-span-3)'>
        <Products />
      </section>
    </div>
  )
}

export default PropductFilters