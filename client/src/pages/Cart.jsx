import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import CartItems from "../components/Cart/CartItems";
import TotalCart from "../components/Cart/TotalCart";


export const totalPriceContext = createContext();
// export const cartItemsContext = createContext();
function Cart({OnPaiement}) {
  const [totalCartPrice, setTotalCartPrice] = useState({});

  console.log(OnPaiement);
  
  return (
    <div className="cart cartPage">
      <totalPriceContext.Provider
        value={{ setter: setTotalCartPrice, price: totalCartPrice }}
      >
        <CartItems />
        <TotalCart onClick={OnPaiement} />
      </totalPriceContext.Provider>
    </div>
  );
}

export default Cart;
