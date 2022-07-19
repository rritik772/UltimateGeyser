import React, { FC } from 'react'

interface CallUsProps {
    setIsOpen: (e: boolean) => void
}

const CallUs: FC<CallUsProps> = ({ setIsOpen }) => {
    return (
        <div>
            <div className='fixed z-30 bg-gray-100/50 blur-xl h-screen w-screen top-0 left-0' onClick={() => setIsOpen(false)} />
            <section className='z-40 fixed top-0 bottom-0 left-0 right-0 m-auto flex flex-col items-center justify-center' onClick={() => setIsOpen(false)}  >
                <div className='relative z-50'>
                    <button className='absolute top-0 right-0 px-2 py-1 bg-red-500 rounded-full text-white text-xl -m-4 cursor-pointer mr-1' onClick={() => setIsOpen(false)}>
                        <i className='bi bi-x-circle' />
                    </button>
                </div>
                <a href='tel:+91-9792979287' id="telephone" className="relative">
                    <section className='flex flex-col <md:w-86 md:w-96 p-10 items-center gap-3 border rounded-lg shadow bg-gray-100'>
                        <i className='bi bi-telephone-inbound text-8xl text-red-500' />
                        <span className='font-bold  tracking-wide mt-3 <md:text-2xl md:text-3xl'>+91-9792979287</span>
                        <span className='text-center text-gray-500'>For Instant order</span>
                    </section>
                </a>
            </section>
        </div>
    )
}

export default CallUs