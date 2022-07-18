import { FC, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ProductModal } from '../../../models/product/product-modal';
import { getFeaturedProduct } from '../../../utils/firebase/database/productsDatabase';
import { getProductImages } from '../../../utils/firebase/storage/productStorage';
import Loading from '../../loading/Loading';
import QuickView from './QuickView';

interface SingleProductProps {
  name: string
  desc: string
  price: number
  discount: number
  uid: string
  colors: string[]
  capacity: string[]
}

const SingleProduct: FC<SingleProductProps> = ({ name, desc, price, discount, uid, colors, capacity }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [images, setImages] = useState<string[]>([])

  const spring = useSpring({
    opacity: open ? 1 : 0,
    height: open ? 40 : 0,
  });

  useEffect(() => {
      async function getImages() {
        const urls = await getProductImages(uid as string);
        setImages(urls);
      }

      getImages();
  })

  return (
    <div
      className='flex flex-col p-5 items-center w-80 rounded-lg border hover:(shadow-lg) duration-500'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {
        images.length > 0 &&
        <img src={images[0]} alt={name} className='h-56 rounded-lg' />
      }
      <span className='font-bold uppercase my-3'>{name}</span>
      <span className='text-justify text-gray-500 text-sm'>{desc}</span>

      <div className='flex flex-col items-center mt-3'>
        <div className='flex gap-3 items-end'>
          <span className='text-xl text-red-500 font-bold'>{discount}%</span>
          <span className='text-2xl font-bold tracking-wide'>Rs. {price - (price * discount / 100)}</span>
        </div>
        <small className='line-through font-bold font-mono text-lg'>MRP. <span className='text-red-500'>{price}</span></small>
      </div>

      <animated.div className='flex gap-2 mt-5 h-auto' style={spring}>
        <button className='btn btn-red-outline'>Buy Now</button>
        <button className='btn btn-red-outline' onClick={() => setQuickViewOpen(!quickViewOpen)}>Quick View</button>
      </animated.div>
      {
        quickViewOpen &&
        <QuickView images={images!} name={name} desc={desc} price={price} discount={discount} uid={uid} colors={colors} capacity={capacity} setIsOpen={(e) => setQuickViewOpen(e)}/>
      }
    </div>
  )
}

const FeaturedProduct = () => {
  const [products, setProducts] = useState<ProductModal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFeaturedProductDetails() {
      setLoading(true);
      const response = await getFeaturedProduct();

      setProducts(response);
      setLoading(false);
    }

    getFeaturedProductDetails();
  }, [])

  return (
    <div className='py-10'>

      <section className='flex flex-col items-center text-center'>
        <span className='font-bold uppercase tracking-wide text-4xl text-red-500'>Featured Products</span>
        <span className='mt-2 font-mono font-xl uppercase tracking-widest'>Choose from the best heating solution</span>
      </section>

      {
        loading && <Loading />
      }

      <section className='flex justify-evenly flex-wrap gap-5 my-10'>
        {
          !loading && products.map((item, key) => (
            <SingleProduct
              key={key}
              name={item.name}
              desc={item.desc}
              price={item.price}
              discount={item.discount}
              uid={item.uid! as string}
              colors={item.colors}
              capacity={item.capacity}
            />
          ))
        }
      </section>
    </div>
  )
}

export default FeaturedProduct
