import Image from 'next/image';
import { FC, useEffect, useState } from 'react'
import { ProductModal } from '../../../models/product/product-modal'
import { getProductImages } from '../../../utils/firebase/storage/productStorage'
import UpdateProduct from './UpdateProduct';

interface SingleProductProps {
    product: ProductModal
    downloadableURLs: string[]
}

const SingleProduct: FC<SingleProductProps> = ({ product, downloadableURLs = [] }) => {
    const { name, price, desc, discount } = product;
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className='<md:(grid-cols-2 gap-1 justify-items-start) md:(grid-cols-5 justify-items-center) grid rounded-lg shadow bg-gray-100 p-5 rounded-lg w-full cursor-pointer' onClick={() => setOpen(!open)}>
                <span className=''>{name}</span>
                <p className='text-justify'>{desc.substring(0, 30)}...</p>
                <span className=''>{discount}%</span>
                <span className=''>₹ {price - ((discount * price) / 100)}</span>
                <span>MRP. <span className=''>₹{price}</span></span>
            </section>
            {
                open &&
                <UpdateProduct product={product}/>
            }
        </>
    )
}

export default SingleProduct