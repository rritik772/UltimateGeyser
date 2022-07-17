
const AboutRacold = () => {
  return (
    <div className='lg:() flex flex-wrap justify-evenly items-center gap-10 bg-gray-100 py-10 px-5'>
        <section className='<md:(items-center text-justify) md:(items-start text-start w-86) flex flex-col gap-5'>
            <span className='font-bold block uppercase tracking-wide text-4xl text-red-500'>About Willerhot</span>
            <span className='text-4xl leading-tight'>Willerhot A Fastest Growing Indian Brand Name of Most Trusted Electric & Gas Water Heaters.</span>
            <span className='text-gray-500 text-lg'>Willerhot makes comfort storage water heaters unbeatable in terms of durability, safety and energy-efficiency. You can choose between various products, euro smart, kayro, nova or victor, which all come with high quality metarial and modern design.</span>
            <button className='self-center px-5 py-3 border border-red-500 font-bold rounded-lg hover:(text-white bg-red-500 shadow)'>Know More</button>
        </section>

        <section className='<md:(h-[250px] w-screen) md:(h-[500px] w-[750px]) relative'>
                <div className='self-start border shadow rounded-lg overflow-hidden w-full h-full'>
                    <iframe  src="https://www.youtube.com/embed/eBjYWsAP1x0" className="w-full h-full" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            {/* <Image alt="racold" src="/assets/images/about/ariston-thermo-group.jpg" layout='fill' /> */}
        </section>
    </div>
  )
}

export default AboutRacold;
