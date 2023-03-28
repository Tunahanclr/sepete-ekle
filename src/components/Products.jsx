import React from 'react'
import ProductItem from './ProductItem'

export default function Products({product,setCart,cart}) {
  return (
    <div className='grid grid-cols-3 gap-10 mt-6'>
        <ProductItem product={product} cart={cart} setCart={setCart}/>
    </div>
  )
}
