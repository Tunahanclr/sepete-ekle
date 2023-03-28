import React from 'react'

export default function ProductItem({product,cart,setCart}) {
  const basketProduct = cart.find(item => item.id === product.id);
  function addBasket(){
    const addFind=cart.find(item => item.id === product.id)
    if(addFind){
    addFind.amount +=1
    setCart([...cart.filter(item=>item.id !== product.id),{
      id : product.id,
      name: product.name,
      img : product.img,
      price  : product.price,
      amount : addFind.amount
    }])
    }else{
        setCart([...cart,{
          id : product.id,
          name: product.name,
          img : product.img,
          price  : product.price,
          amount : 1
        }])
    }
  }
  function removeBasket(){
    const removeFind = cart.find(item => item.id === product.id);
    removeFind.amount -=1;
    if(removeFind.amount === 0)
    {
      setCart([...cart.filter(item => item.id !== product.id)]);
    }
    else
    {
      setCart([...cart.filter(item => item.id !== product.id),
      {
        id : product.id,
        name: product.name,
        img : product.img,
        price  : product.price,
        amount : removeFind.amount
      }])
    }
  }
  return (
    <div className='border flex flex-col justify-center items-center p-4 m-2 rounded-lg shadow-lg'>
        <img className='w-36 object-cover rounded-t-lg ' src={product.img} alt="" />
        <div>
            <h2 className='text-xl font-semibold text-center'>{product.name}</h2>
            <p className='text-gray-500 my-2 text-center'>{product.price} TL</p>
          <div className='flex items-center gap-4'>
          <button className='text-2xl' disabled={!basketProduct} onClick={removeBasket}>-</button>
            <span>{basketProduct && basketProduct.amount || 0}</span>
            <button className='bg-blue-500 w-44 h-10 rounded hover:bg-blue-600' onClick={addBasket}>Sepete Ekle </button>
          </div>
        </div>
    </div>
  )
}
