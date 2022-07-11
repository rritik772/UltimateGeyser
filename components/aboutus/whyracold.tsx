import Image from 'next/image';
import { FC } from 'react'
import whyracold from './whyracoldcards.json';

interface SingleCardProps {
    topic: string
    img: string
    desc: string
}

const SingleCard: FC<SingleCardProps> = ({ topic, img, desc }) => {
    return (
        <section className='flex flex-col justify-center gap-5 p-5 border shadow w-76 rounded-lg'>
            <span className='text-center text-2xl text-red-500 font-bold tracking-wide'>{topic}</span>
            <div className='w-[150px] h-[150px] relative bg-gray-700 self-center rounded-lg overflow-hidden'>
                <Image alt="topic" src={img} layout='fill' />
            </div>
            <span className='text-gray-700 text-justify'>
                {desc}
            </span>
        </section>
    )
}

const WhyRacold = () => {
    return (
        <div className='my-10'>
            <section className='flex flex-col items-center'>
                <span className='font-bold uppercase tracking-wide text-4xl text-red-500 underline-black'>Why racold?</span>
                <span className='mt-5 font-xl uppercase tracking-widest'>Racold Geysers are equipped with path-breaking technologies in water heating</span>
            </section>
            <section className='mt-10 flex justify-center gap-5'>
                {
                    whyracold.map((item, key) => (
                        <SingleCard key={key} topic={item.topic} img={item.img} desc={item.desc} />
                    ))
                }
            </section>
        </div>
    )
}

export default WhyRacold