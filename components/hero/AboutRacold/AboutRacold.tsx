import Image from 'next/image';

const AboutRacold = () => {
  return (
    <div className='lg:() flex flex-wrap justify-evenly items-center gap-10 bg-gray-100 py-10 px-5'>
        <section className='<md:(items-center text-justify) md:(items-start text-start w-86) flex flex-col gap-5'>
            <span className='font-bold block uppercase tracking-wide text-4xl text-red-500'>About Racold</span>
            <span className='text-4xl leading-tight'>Born from the house of Ariston, Racold has grown to be one of the most trusted water heater brands.</span>
            <span className='text-gray-500 text-lg'>With an extensive portfolio of premium quality water geysers like electric water heaters, storage water heaters, gas water heaters, solar water heaters and heat pumps that encompass the entire spectrum water heating solutions.</span>
            <button className='self-center px-5 py-3 border border-red-500 font-bold rounded-lg hover:(text-white bg-red-500 shadow)'>Know More</button>
        </section>

        <section className='<md:(h-[250px] w-screen) md:(h-[500px] w-[750px]) relative'>
                <div className='self-start border shadow rounded-lg overflow-hidden w-full h-full'>
                    <iframe  src="https://www.youtube.com/embed/u6NOTogsw8M" className="w-full h-full" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            {/* <Image alt="racold" src="/assets/images/about/ariston-thermo-group.jpg" layout='fill' /> */}
        </section>
    </div>
  )
}

export default AboutRacold;