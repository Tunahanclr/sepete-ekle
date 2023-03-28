import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Products from './components/Products'
import products from './products.json'
function App() {
  const [cart, setCart] = useState([])
  const [cost,setCost]=useState(0)
  const emptyCart=()=>{
    setCart([])
  }
  useEffect(()=>{
    const totalPrice= cart.reduce((acc,cart)=> acc + (cart.amount*cart.price),0)
    setCost(totalPrice)
  },[cart])
  return (
      <div className='container mx-auto'>
        <Header cart={cart}/>
        {
          products.map(product=>(
            <Products key={product.id} cart={cart} setCart={setCart} product={product}/>
          ))
        }
        {cart.length >0 && <Cart cart={cart} cost={cost} setCart={setCart} />}
      </div>
    )
}

export default App
