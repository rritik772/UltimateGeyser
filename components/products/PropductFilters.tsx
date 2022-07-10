import React from 'react'

const PropductFilters = () => {
  return (
    <div className='sm:(grid-cols-1) md:(grid-cols-3) lg:(grid-cols-4) grid gap-5 p-5'>
        <section className='border border-black p-5 rounded-lg shadow flex flex-col items-center'>
            <span className='text-red-500 text-lg font-bold uppercase tracking-wide'>Filter</span>
            <div className='border-b my-5 border-black w-full'/>
            <section className='self-start flex flex-col'>
                <span className='font-bold uppercase tracking-wide'>Capacity</span>
            </section>
        </section>
        <section className='md:(col-span-2) lg:(col-span-3) border'>

        </section>
    </div>
  )
}

export default PropductFilters