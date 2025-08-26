import React, { useContext, useEffect, useState } from 'react';
import {loadItems} from "../../redux/actions/CartUtils";
import {useDispatch, useSelector} from "react-redux"
import CartItem from './CartItem';
import { totalPriceContext } from '../../pages/Cart';


function CartItems() {
  const dispatch=useDispatch();

  const [cartItems, setCarItems] = useState([]);

  const totalPriceCont = useContext(totalPriceContext);

  useEffect(()=>{
     if (Object.values(totalPriceCont.price).length) {
       return totalPriceCont.setter(
         Object.values(totalPriceCont.price).reduce((ac, cv) => ac + cv)
       );
     } else {
       return 0;
     }

  },[cartItems])


   useEffect(() => {
     let items = localStorage.getItem("cartItems");
     if (items) {
       items = JSON.parse(items);
       setCarItems(items);
     }
     console.log(items);
   }, []);
  useEffect(()=>{
  }, [])

  return (
    <div className="cartItems">
      <h2>Panier</h2><br />
      {cartItems.length?
      (
        cartItems?.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={JSON.parse(item)}
            idx={index}
            items={cartItems}
            setter={setCarItems}
          />
        );
        })
      ):(
        <div>Aucun article dans le panier</div>
      )
    }

      {/* <CartItem /> */}
    </div>
  );
}

export default CartItems