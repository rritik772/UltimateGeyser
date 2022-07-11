import React from 'react'

const WhoAreWe = () => {
    return (
        <div className='p-10 bg-gray-100'>
            {/* <section className='' style={{
                backgroundImage: 'url(/assets/images/about/banner__new_about_us.jpg)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}> */}
            <section className='flex flex-col items-center gap-5'>
                <span className='text-7xl font-black text-red-500'>Who Are We</span>
                <p className='text-xl w-[34rem] leading-loose text-center'>
                    Ariston gives more homes access to 
                    advanced sustainble comfotable solutions using less energy and effort, so we
                    can all enjoy life at home and on out plant.
                </p>
            </section>
        </div>
    )
}

export default WhoAreWe