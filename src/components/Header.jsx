import React from 'react'
import CartIcon from './CartIcon'

export default function Header({cart}) {
  return (
    <div className='flex justify-between items-center mt-6'>
        <h1 className='text-3xl font-semibold'>Cart app with React and Tailwind</h1>
      <CartIcon cart={cart}/>
    </div>
  )
}
