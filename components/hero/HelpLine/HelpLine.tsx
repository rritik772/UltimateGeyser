import React from 'react'

const HelpLine = () => {
  return (
    <div className='flex justify-center py-10 flex-wrap gap-10'>
       <a href='tel:+91-9792979287' id="telephone">
        <section className='flex flex-col w-96 p-10 items-center gap-3 border rounded-lg shadow'>
            <i className='bi bi-telephone-inbound text-8xl text-red-500'/>
            <span className='font-bold tracking-wide mt-3 text-3xl'>+91-9792979287</span>
            <span className='text-center text-gray-500'>For instant solutions, we are just a call away!</span>
        </section>
        </a>

        <a href="mailto:info@willerhot.com" target="_blank"  rel="noreferrer" id="mailtous">
        <section className='flex flex-col w-96 p-10 items-center gap-3 border rounded-lg shadow'>
            <i className='bi bi-envelope-paper text-8xl text-red-500'/>
            <span className='font-bold tracking-wide mt-3 text-3xl'>info@willerhot.com</span>
            <span className='text-center text-gray-500'>For any product related queries, services or complaints, write to us at!</span>
        </section>
        </a>


        <a href="mailto:customer.care@willerhot.com" target="_blank"  rel="noreferrer" id="customermail">
        <section className='flex flex-col w-96 p-10 items-center gap-3 border rounded-lg shadow'>
            <i className='bi bi-shop text-8xl text-red-500'/>
            <span className='font-bold tracking-wide mt-3 text-2xl'>customer.care@willerhot.com</span>
            <span className='text-center text-gray-500'>For business & other enquiry feel free to write to us at!</span>
        </section>
        </a>


    </div>
  )
}

export default HelpLine
