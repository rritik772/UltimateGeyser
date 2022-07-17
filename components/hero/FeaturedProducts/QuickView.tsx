import React, { FC, useEffect, useState } from 'react'
interface QuickViewProps {
    images: string[]
    name: string
    uid: string
    desc: string
    discount: number
    price: number
    colors: string[]
    capacity: string[]
}

const QuickView: FC<QuickViewProps> = ({ images, name, uid, desc, discount, price, colors, capacity }) => {
    const [imgidx, setImgidx] = useState(0);

    return (
        <div className='z-10 bg-gray-100/50 p-5 fixed top-0 bottom-0 left-0 w-full flex justify-center items-center blur overflow-auto'>
            <div className='<md:(grid-cols-1) md:(w-[50rem] grid-cols-2) content-start grid gap-5 border border-red-500 shadow rounded-lg p-5 bg-gray-100'>
                <section className='flex flex-col gap-2 items-center bg-white p-3 rounded-lg border border-red-500'>
                    {
                        images.length > 0 &&
                        <div className='h-max'>
                            <img src={images[imgidx]} className='rounded-lg hover:scale-110 transform duration-300' alt={name}/>
                        </div>
                    }
                </section>
                <section className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Name</span>
                        <span className='text-lg font-bold'>{name}</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Description</span>
                        <p className='leading-4 text-justify'>{desc}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Capacity</span>
                        <p className='leading-4 text-justify'>{capacity.join(', ')}</p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Colors</span>
                        <p className='leading-4 text-justify capitalize'>{colors.join(', ')}</p>
                    </div>
                    <div>
                        <span className='text-gray-500'>Discounts</span>
                        <div className='flex gap-3'>
                            <span className='text-red-500 text-lg font-bold'>{discount}%</span>
                            <span className='text-2xl font-bold'>₹ {price - ((discount * price) / 100)}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500'>MRP</span>
                            <p className='leading-4 text-justify'>{price}</p>
                        </div>
                    </div>
                    <div className='flex gap-1 flex-col'>
                        <span className='text-gray-500'>Images</span>
                        <div className='flex flex-wrap gap-2 w-full overflow-auto'>
                            {
                                images.length > 0 &&
                                images.map((item, key) => (
                                    <img src={item} key={key} className='h-20 p-2 cursor-pointer border border-red-500 rounded-lg bg-white' onClick={() => setImgidx(key)} alt={`${name}-${key}`}/>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

const defaultItems = () => {
    return [<div key={1}><i className='bi bi-circle-arrow-clockwise bg-black p-10 text-9xl' /></div>]
}

export default QuickView