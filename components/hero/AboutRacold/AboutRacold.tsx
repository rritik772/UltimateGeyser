import Image from 'next/image';
import image from './../../../public/assets/images/about/ariston-thermo-group.jpg';

const AboutRacold = () => {
  return (
    <div className='sm:(grid-cols-1) lg:(grid-cols-2) grid justify-items-center gap-10 bg-gray-100 py-10'>
        <section className='w-86 flex flex-col gap-5 items-start'>
            <span className='font-bold block uppercase tracking-wide text-4xl text-red-500'>About Racold</span>
            <span className='text-4xl leading-tight'>Born from the house of Ariston, Racold has grown to be one of the most trusted water heater brands.</span>
            <span className='text-gray-500 text-lg'>With an extensive portfolio of premium quality water geysers like electric water heaters, storage water heaters, gas water heaters, solar water heaters and heat pumps that encompass the entire spectrum water heating solutions.</span>
            <button className='self-center px-5 py-3 border border-red-500 font-bold rounded-lg hover:(text-white bg-red-500 shadow)'>Know More</button>
        </section>
        <section>
            <Image alt="racold" src={image} className="rounded-xl" />
        </section>
    </div>
  )
}

export default AboutRacold