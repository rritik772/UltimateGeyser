import Image from 'next/image';
import React from 'react'
import image1 from './../../public/assets/images/curosal/1.jpg';
import image2 from './../../public/assets/images/curosal/2.jpg';
import image3 from './../../public/assets/images/curosal/3.jpg';


import { useSpringCarousel } from 'react-spring-carousel'

export function Carousel() {
    const images = [image1, image2, image3];

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        withLoop: true,
        items: images.map((item, idx) => ({
            id: idx,
            renderItem: (
                <Image alt={`image ${idx}`} src={item} />
            ),
        })),
    });

    return (
        <div className='relative overflow-hidden'>
            <button onClick={slideToPrevItem} className="z-10 focus:outline-none absolute top-0 bottom-0 my-auto bg-gray-700/50 text-white hover:text-red-500">
                <i className='bi bi-caret-left-square text-4xl p-4'></i>
            </button>
            {carouselFragment}
            <button onClick={slideToNextItem} className="z-10 focus:outline-none absolute top-0 bottom-0 right-0 my-auto bg-gray-700/50 text-white hover:text-red-500">
                <i className='bi bi-caret-right-square text-4xl p-4'></i>
            </button>
        </div>
    );
}

export default Carousel;