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
                <span className='<md:text-6xl md:text-7xl font-black text-red-500' id="who-are-we">Who Are We</span>
                <p className='<md:(w-full) md:(w-[34rem]) text-xl leading-loose text-center'>
                Willerhot A Fastest Growing Indian Brand Name of Most Trusted Electric & Gas Water Heaters.
                </p>
            </section>
        </div>
    )
}

export default WhoAreWe