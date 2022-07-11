import Image from 'next/image';
import { FC, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import product_data from './product.json';

interface SingleProductProps {
  name: string
  desc: string
  price: number
  img: string
}

const SingleProduct: FC<SingleProductProps> = ({ name, desc, price, img }) => {
  const [open, setOpen] = useState<boolean>(false);

  const spring = useSpring({
    to: {
      opacity: open ? 1 : 0,
      height: open ? 40 : 0
    }
  });


  return (
    <div
      className='flex flex-col p-5 items-center w-72 rounded-lg hover:(shadow)'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
        <div className='relative h-44 w-44'>
          <Image
            alt={name}
            src={img}
            layout='fill'
            className='h-44 w-44 !block'
          />
        </div>
        <span className='font-bold uppercase my-3'>{name}</span>
        <span className='text-justify text-gray-500 text-sm'>{desc}</span>
        <span className='mt-5 font-bold font-mono text-2xl'>MRP. <span className='text-red-500'>{price}</span></span>

      <animated.div className='flex gap-2 mt-5' style={spring}>
        <button className='btn btn-red'>Buy Now</button>
        <button className='btn btn-red'>Quick View</button>
      </animated.div>

    </div>
  )
}

const FeaturedProduct = () => {
  return (
    <div className='py-10'>

      <section className='flex flex-col items-center text-center'>
        <span className='font-bold uppercase tracking-wide text-4xl text-red-500 underline'>Featured Products</span>
        <span className='mt-2 font-mono font-xl uppercase tracking-widest'>Choose from the best heating solution</span>
      </section>

      <section className='sm:(grid-cols-1) md:(grid-cols-2) lg:(grid-cols-4) justify-items-center gap-5 grid my-10'>
        {
          product_data.map((item, key) => (
            <SingleProduct
              key={key}
              name={item.name}
              desc={item.desc}
              price={item.price}
              img={item.img}
            />
          ))
        }
      </section>
    </div>
  )
}

export default FeaturedProduct