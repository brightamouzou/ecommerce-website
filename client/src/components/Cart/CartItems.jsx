import React, { useEffect } from 'react';
import {loadItems} from "../../redux/actions/CartUtils";
import {useDispatch, useSelector} from "react-redux"
import CartItem from './CartItem';


function CartItems() {
  const dispatch=useDispatch();
  
  // const cartItems = localStorage.getItem("cartItems");

  useEffect(()=>{
    // dispatch(loadItems(cartItems))
  }, [])

  return (
    <div className="cartItems">
      <div>Panier</div>
      <CartItem />
      <CartItem />
    </div>
  );
}

export default CartItems