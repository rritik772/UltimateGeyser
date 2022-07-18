import React, { useEffect, useState, FC, useRef } from 'react'

import { useSpringCarousel } from 'react-spring-carousel'
import { getCarousalImages } from '../../utils/firebase/storage/websiteContent';

interface CarouselProps {
    imgUrls: string[]
}

const Carousel: FC<CarouselProps> = ({ imgUrls }) => {
    const nextRef = useRef<HTMLButtonElement>(null);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        withLoop: true,
        items: (imgUrls.length>0) ? imgUrls.map((item, idx) => ({
            id: idx,
            renderItem: (
                <div className='w-full h-full flex justify-center' key={idx}>
                    <img src={item} className='h-full' alt={`${idx}`}/>
                </div>
            ),
        })) as any : defaultItems(),
    });

    useEffect(() => {
        function clickNextButton() {
            if (nextRef!.current)
                nextRef!.current!.click()
            setTimeout(() => clickNextButton(), 3000);
        }
        clickNextButton();
        console.log("I runned")
    }, [])

    return (
        <div className='relative overflow-hidden'>
            <button onClick={slideToPrevItem} className="z-10 focus:outline-none absolute top-0 bottom-0 my-auto text-white hover:text-red-500">
                <i className='bi bi-caret-left-fill text-4xl p-4'></i>
            </button>
            <div className='<md:(w-screen h-56) md:(w-screen h-screen)'>
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} ref={nextRef} className="z-10 focus:outline-none absolute top-0 bottom-0 right-0 my-auto text-white hover:text-red-500">
                <i className='bi bi-caret-right-fill text-4xl p-4'></i>
            </button>
        </div>
    );
}

const defaultItems = () => {
    return [<div key={1}><i className='bi bi-circle-arrow-clockwise bg-black p-10 text-9xl'/></div>]
}

export default Carousel;
