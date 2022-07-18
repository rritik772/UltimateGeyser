import React, { useEffect, useState, FC } from 'react'
import { getCapacity } from '../../lib/Capacity'
import { getColors } from '../../lib/Colors'
import { ProductModal } from '../../models/product/product-modal'
import { getProducts } from '../../utils/firebase/database/productsDatabase'
import Loading from '../loading/Loading'
import Products from './Products'

interface ProductFilters {
  categoryFilter: string
}

const ProductFilters: FC<ProductFilters> = ({ categoryFilter }) => {
  console.log(categoryFilter)
  const [allProducts, setAllProducts] = useState<ProductModal[]>([])
  const [products, setProducts] = useState<ProductModal[]>([])
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState<string[]>([])
  const [capacity, setCapacity] = useState<string[]>([])
  const [filterMap, setFilterMap] = useState<Map<string, boolean>>(new Map());

  const handleMap = (colors: string[], capacity: string[]) => {
    for (let color of colors) {
      setFilterMap(new Map(filterMap.set(color, false)))
    }
    for (let cap of capacity) {
      setFilterMap(new Map(filterMap.set(cap, false)))
    }
  }

  useEffect(() => {
    async function getAllProduct() {
      setLoading(true);
      const response = await getProducts(categoryFilter);
      const aColors = getCapacity(response);
      const aCapacity = getColors(response);

      setColors(aColors);
      setCapacity(aCapacity);
      handleMap(aColors, aCapacity);

      setAllProducts(response)
      setProducts(response);
      setLoading(false);
    }

    getAllProduct();
  }, [categoryFilter])


  useEffect(() => {
    let allTrues: string[] = [];
    filterMap.forEach((key, value) => {
      if (key === true) allTrues.push(value)
    })

    let p: ProductModal[] = []
    allTrues.forEach((item) => {
      allProducts.forEach(prod => {
        if (prod.capacity.includes(item)) p.push(prod)
        if (prod.colors.includes(item)) p.push(prod)
      })
    })

    if (p.length === 0) p = allProducts;
    setProducts(p);
  }, [filterMap])

  const handleChange = (e: any) => {
    let p = allProducts.filter(item => {
      if (e.target.checked && item.capacity.includes(e.target.id)) return true
      if (e.target.checked && item.colors.includes(e.target.id)) return true
      else return false
    })
    if (!loading  && p.length === 0)
      p = allProducts;
    setProducts(p);
  }

  if (loading)
    return <Loading />
  return (
    <div className='sm:(grid-cols-1) md:(grid-cols-3) lg:(grid-cols-4) grid justify-items-stretch gap-5 p-5'>
      <section className='place-self-start justify-self-center border p-5 rounded-lg shadow flex flex-col items-center min-w-[20rem] bg-gray-50/50'>
        <span className='text-red-500 text-lg font-bold uppercase tracking-wide'>Filter</span>
        <div className='border-b my-5 border-black w-full' />

        <section className='self-start flex flex-col font-normal tracking-wide'>
          <span className='font-bold uppercase tracking-wide'>Capacity</span>
          {
            capacity.map(item => (
              <div className='' key={item}>
                <input type="checkbox" className='accent-red-500 mr-3' id={item} onChange={(e) => setFilterMap(new Map(filterMap.set(e.target.id, e.target.checked)))}/>
                <label htmlFor={item}>{item}</label>
              </div>
            ))
          }
        </section>

        <section className='self-start flex flex-col font-normal tracking-wide mt-5'>
          <span className='font-bold uppercase tracking-wide'>Colour</span>
          {
            colors.map(item => (
              <div className='' key={item}>
                <input type="checkbox" className='accent-red-500 mr-3' id={item} onChange={(e) => setFilterMap(new Map(filterMap.set(e.target.id, e.target.checked)))}/>
                <label htmlFor={item}>{item}</label>
              </div>
            ))
          }
        </section>

      </section>


      <section className='md:(col-span-2) lg:(col-span-3)'>
        {products.length > 0 && <Products products={products} />}
      </section>
    </div>
  )
}

export default ProductFilters