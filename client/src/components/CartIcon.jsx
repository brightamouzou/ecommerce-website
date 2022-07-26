import React, { useEffect, useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Cart() {
  const [itemsCount,setItemsCount]=useState(0)
  useEffect(()=>{
    function getCartItemsNumber(){
      let items=localStorage.getItem("cartItems");
      if(items && items.length) items=JSON.parse(items)
      if(items)
        setItemsCount(items.length)
    }
    getCartItemsNumber();
  },[])
  return (
    <div className="cart">
      <div className="">
        {itemsCount > 0 ? <span className="notification">+</span> : ""}
      </div>
      <ShoppingCartOutlinedIcon />
    </div>
  );
}

export default Cart