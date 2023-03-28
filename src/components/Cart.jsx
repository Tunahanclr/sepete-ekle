import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
export default function Cart({cart,cost,setCart}) {
  const emptyCart=()=>{
    setCart([])
  }
  return (
    <div className='border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Sepet</h2>
        <ul>
           {
            cart.map(item =>(
              <li className='mt-2 flex gap-4 items-center justify-between'>
                <img className='w-24' src={item.img} alt="" />
              <span>{item.name}</span>
              <span className=''>{item.amount}</span>
              <span className='text-red-500 font-semibold'>{item.price}TL</span>
              <span className='text-red-500' >{AiFillDelete}</span>
          </li>
            ))
           }
        </ul>
        <hr className='my-4' />
        <p className='font-semibold text-xl'>Toplam:{cost} TL</p>
        <button className='bg-red-500 text-white w-full py-2 px-4 rounded mt-4 hover:bg-red-600 transition-all' onClick={emptyCart}>Sepeti Boşalt</button>
    </div>
  )
}
