import Image from 'next/image';
import { FC, useState } from 'react'
import { useSpring, animated } from 'react-spring';
import products_list from './products.json';

interface SingleProductProps {
  name: string,
  desc: string,
  price: number,
  color: string[]
  capacity: string[]
  img: string
}

const SingleProduct: FC<SingleProductProps> = ({ name, desc, price, color, capacity, img }) => {
  const [open, setOpen] = useState<boolean>(false);

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
      <div className='relative w-[150px] h-[150px]'>
        <Image alt={name} src={img} layout='fill' />
      </div>
      <span className='text-center text-red-500 font-black text-xl tracking-wide'>{name}</span>
      <span className='text-center text-sm text-gray-600'>{desc}</span>
      <span className='text-center'>MRP. <span className='text-red-500 text-2xl font-bold'>{price}</span></span>

      <animated.div className='flex gap-2' style={spring}>
        <button className='btn btn-red'>Buy Now</button>
        <button className='btn btn-red'>Quick View</button>
      </animated.div>
    </div>
  )
}

const Products = () => {
  return (
    <div className='flex gap-5 flex-wrap justify-center'>
      {
        products_list.map((item, key) => (
          <SingleProduct key={key} {...item} />
        ))
      }
    </div>
  )
}

export default Products