import React from 'react'

const HelpLine = () => {
  return (
    <div className='flex justify-center py-10 flex-wrap gap-10'>
        <section className='flex flex-col w-96 p-10 items-center gap-3 border rounded-lg shadow'>
            <i className='bi bi-telephone-inbound-fill text-8xl text-red-500'/>
            <span className='font-bold tracking-wide mt-3 text-4xl'>+91 012345679</span>
            <span className='text-center text-gray-500'>For any product related queries, services or complaints, we are just a call away!</span>
        </section>
        <section className='flex flex-col w-96 p-10 items-center gap-3 border rounded-lg shadow'>
            <i className='bi bi-envelope-paper-fill text-8xl text-red-500'/>
            <span className='font-bold tracking-wide mt-3 text-4xl'>+91 012345679</span>
            <span className='text-center text-gray-500'>For any product related queries, services or complaints, we are just a call away!</span>
        </section>
        <section className='flex flex-col w-96 p-10 items-center gap-3 border rounded-lg shadow'>
            <i className='bi bi-shop text-8xl text-red-500'/>
            <span className='font-bold tracking-wide mt-3 text-4xl'>+91 012345679</span>
            <span className='text-center text-gray-500'>For any product related queries, services or complaints, we are just a call away!</span>
        </section>
    </div>
  )
}

export default HelpLine