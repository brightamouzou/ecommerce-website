import { CircularProgress } from "@mui/material";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { SnackbarContext } from "../../contexts/SnackBar";
import {totalPriceContext } from "../../pages/Cart";
import { fetchData } from "../../utils/api_calls/fethingArticleColor";
import LoadingSomeWhere from "../LoadingSomeWhere";

function CartItem({ item, idx, items, setter }) {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [error, setError] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const snackBarAlert = useContext(SnackbarContext);

  const { category, slug, colorId } = item;

  const totalPriceCont = useContext(totalPriceContext);

  function removeFromCart() {
    try {
      let storedItems = JSON.parse(localStorage.getItem("cartItems"));
      localStorage.removeItem("cartItems");
      let deletedItem = storedItems.splice(currentItemIndex, 1);
      //console.log(deletedItem);
      localStorage.setItem("cartItems", JSON.stringify(storedItems));
      storedItems = JSON.parse(localStorage.getItem("cartItems"));
      let newArr = [...items];

      setter((v) => []);

      //console.log(newArr);
      let deleted = newArr.splice(currentItemIndex, 1);
      //console.log([...newArr.map((ele) => ele)]);
      setTimeout(() => {
        setter((v) =>
          Array.from(
            newArr.filter((item) => JSON.parse(item).colorId !== item.colorId)
          )
        );
      }, 50);
      snackBarAlert(`${""} supprimé avec succès du panier`, true);
    } catch (err) {
      //console.log(err.message);
    }
  }
  async function fetchCurrentColorData() {
    try {
      if (item) {
        //console.log(item.qty);
        setIsLoading(true);
        const data = await fetchData(category, slug, colorId);
        if (data) {
          
          setIsLoading(false);
          setCartItem(data);

          //console.log(data);
        } else {
          new Promise.reject("Erreur");
        }
      }
    } catch (err) {
      setIsLoading(false);
      setError(true);
      //console.log(err.message);
    }
  }
  useEffect(() => {
    //console.log(item);
    setCurrentItemIndex(idx);
    fetchCurrentColorData();
    //Dispatch an action to get all the cartItem informations from the backend
  }, []);

  useEffect(() => {
    if (cartItem)
      totalPriceCont.setter((v) => ({
        ...v,
        [cartItem.slug+colorId]: cartItem.price * item.qty,
        undefined: 0,
      }));
  }, [cartItem]);

  return (
    <>
      {cartItem ? (
        <div className="cartItem">
          <div className="itemImage">
            <Link to={`/articles/${category}/${slug}/${colorId}`} exact>
              <img src={cartItem.colorObject.images.default} alt="" />
            </Link>
          </div>
          <div className="itemDesc">
            <h4 className="itemDesc__name">{cartItem.name}</h4>
            <div className="itemDesc__category">{cartItem.category}</div>
            <div className="itemDesc__color">
              {cartItem.colorObject.colorName}
            </div>
            <div className="itemDesc__size">
              Taille/Pointure &nbsp; {item.size}
            </div>
            <div className="itemDesc__quantity">Quanité : {item.qty}</div>

            <div className="buttons">
              <button>Deplacez vers les favoris</button>
              <button onClick={() => removeFromCart()}>
                Supprimer du panier
              </button>
            </div>
          </div>
          <div className="price t-warning t-bold">{cartItem.price / 100}$</div>
        </div>
      ) : error ? (
        <div>Erreur</div>
      ) : (
        <CircularProgress />
        
      )}
    </>
  );
}

export default CartItem;
