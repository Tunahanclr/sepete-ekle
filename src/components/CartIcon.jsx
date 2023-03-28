import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
export default function CartIcon({cart}) {
  return (
    <div className='relative'>  <FiShoppingCart className='text-2xl cursor-pointer' />
    <span className='bg-red-500 text-white w-4 h-4 text-xs flex justify-center items-center rounded-full absolute -top-2 -right-4'>{cart.length}</span></div>
  )
}
