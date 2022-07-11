import React from 'react'

const YoutubeSection = () => {
    return (
        <div className='bg-gray-100'>
            <section className='flex flex-col items-center p-5'>
                <span className='font-bold uppercase tracking-wide text-4xl text-red-500 underline-black' id="out-youtube">Our Youtube</span>
                <span className='mt-5 font-xl uppercase tracking-widest text-center'>Find More about us</span>
            </section>
            <section className='flex justify-center gap-5 flex-wrap p-5'>
                <div className='border shadow rounded-lg overflow-hidden'>
                    <iframe  src="https://www.youtube.com/embed/u6NOTogsw8M" className="<md:w-[20rem] w-[30rem] h-[25rem]" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='border shadow rounded-lg overflow-hidden'>
                    <iframe  src="https://www.youtube.com/embed/u6NOTogsw8M" className="<md:w-[20rem] w-[30rem] h-[25rem]" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='border shadow rounded-lg overflow-hidden'>
                    <iframe  src="https://www.youtube.com/embed/u6NOTogsw8M" className="<md:w-[20rem] w-[30rem] h-[25rem]" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='border shadow rounded-lg overflow-hidden'>
                    <iframe  src="https://www.youtube.com/embed/u6NOTogsw8M" className="<md:w-[20rem] w-[30rem] h-[25rem]" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='border shadow rounded-lg overflow-hidden'>
                    <iframe  src="https://www.youtube.com/embed/u6NOTogsw8M" className="<md:w-[20rem] w-[30rem] h-[25rem]" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default YoutubeSection