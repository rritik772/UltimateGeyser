import Image from 'next/image';
import { FC, useEffect, useState } from 'react'
import { ProductModal } from '../../../models/product/product-modal'
import { getProductImages } from '../../../utils/firebase/storage/productStorage'

interface SingleProductProps {
    product: ProductModal
    downloadableURLs: string[]
}

const SingleProduct: FC<SingleProductProps> = ({ product, downloadableURLs = [] }) => {
    const { name, price, desc, discount } = product;

    return (
        <section className='<md:(grid-cols-1) md:(grid-cols-5) grid rounded-lg shadow bg-gray-100 p-5 rounded-lg w-full justify-items-center'>
            <span className=''>{name}</span>
            <p className='text-justify text-sm'>{desc.substring(0, 30)}...</p>
            <span className=''>{discount}%</span>
            <span className=''>₹ {price - ((discount * price) / 100)}</span>
            <span>MRP. <span className=''>₹{price}</span></span>
            {/* <div className='flex flex-col gap-3 items-start'>
                <span className='text-lg'>{name}</span>
                <p className='text-justify'>{desc}</p>
                <div>
                    <div className='flex gap-3 items-end'>
                        <span className='text-lg text-red-500'>-{discount}%</span>
                        <span className='text-2xl font-bold'>₹ {price - ((discount * price) / 100)}</span>
                    </div>
                    <small>MRP. <span className='line-through'>₹{price}</span></small>
                </div>
            </div> */}
        </section>
    )
}

export default SingleProduct