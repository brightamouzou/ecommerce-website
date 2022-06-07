import React, { useEffect } from 'react'
import CartItems from '../components/Cart/CartItems'
import TotalCart from '../components/Cart/TotalCart';

function Cart(props) {
    useEffect(()=>{
        console.log(props);
    }, [])
  return (
    <div className="cart cartPage">
      <CartItems />
      <TotalCart />
    </div>
  );
}

export default Cart