import { FieldValue } from 'firebase/firestore';
import { FC, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring';
import { ProductModal } from '../../models/product/product-modal';
import { getProductImages } from '../../utils/firebase/storage/productStorage';
import QuickView from '../hero/FeaturedProducts/QuickView';
import products_list from './products.json';

interface SingleProductProps {
  name: string,
  desc: string,
  price: number,
  colors: string[]
  capacity: string[]
  uid: string | undefined | FieldValue
  discount: number
  // img: string
}

const SingleProduct: FC<SingleProductProps> = ({ name, desc, price, discount, colors, capacity, uid }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getImageUrls() {
      setLoading(true);
      const urls = await getProductImages(uid! as string);
      setImgUrls(urls);
      setLoading(false);
    }
    getImageUrls();
  }, [uid])

  const spring = useSpring({
    to: {
      opacity: open ? 1 : 0,
      height: open ? 40 : 0
    }
  });

  return (
    <div
      className='border rounded-lg shadow p-5 flex flex-col gap-5 items-center w-[300px] bg-gray-50/50'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {
        !loading && imgUrls.length > 0 ?
          <div className=''>
            <img alt={name} src={imgUrls[0]} className='h-44'/>
          </div> :
          <i className='bi bi-arrow-clockwise animate-spin text-4xl' />
      }
      {
        !loading && imgUrls.length == 0 && <i className='bi bi-image text-red-500' />
      }
      <span className='text-center text-red-500 font-black text-xl tracking-wide'>{name}</span>
      <span className='text-center text-sm text-gray-600'>{desc.substring(0, 30)}...</span>
      <div className='flex flex-col items-center'>
        <div className='flex gap-3 items-end'>
          <span className='text-xl text-red-500 font-bold'>{discount}%</span>
          <span className='text-2xl font-bold tracking-wide'>Rs. {price - (price * discount / 100)}</span>
        </div>
        <small className='line-through font-bold font-mono'>MRP. <span className='text-red-500'>{price}</span></small>
      </div>

      <animated.div className='flex gap-2' style={spring}>
        <button className='btn btn-red'>Buy Now</button>
        <button className='btn btn-red-outline' onClick={() => setQuickViewOpen(!quickViewOpen)}>Quick View</button>
      </animated.div>
      {
        quickViewOpen &&
        <QuickView images={imgUrls} name={name} desc={desc} price={price} discount={discount} uid={uid as string} colors={colors} capacity={capacity} />
      }
      {
        quickViewOpen &&
        <span className="z-30 fixed top-0 right-0 fixed bi bi-x-circle cursor-pointer text-4xl p-3 bg-white hover:text-red-500 rounded-full" onClick={() => setQuickViewOpen(!quickViewOpen)} />
      }
    </div>
  )
}


interface ProductsProps {
  products: ProductModal[]
}

const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <div className='flex gap-5 flex-wrap justify-center items-start'>
      {
        products.map((item, key) => (
          <SingleProduct key={key} {...item} />
        ))
      }
    </div>
  )
}

export default Products