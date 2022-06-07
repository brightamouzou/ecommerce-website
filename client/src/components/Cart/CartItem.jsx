import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import pumalogo from "../../assets/images/puma-logo.png"
function CartItem() {
    useEffect(()=> {
        //Dispatch an action to get all the cartItem informations from the backend 
    })
  return (
    <div className="cartItem">
      <div className="itemImage">
        <Link to={"pumalogo"} exact>
          <img src={pumalogo} alt="" />
        </Link>
      </div>
      <div className="itemDesc">
        <div className="itemDesc__name">Puma Fenty 'G27</div>
        <div className="itemDesc__category">Chaussures</div>
        <div className="itemDesc__color">Blanc/Bleu nuage/Roux</div>
        <div className="itemDesc__size">Taille/Pointure 39</div>
        <div className="itemDesc__quantity">Quanité</div>

        <div className="buttons">
          <button>
            Deplacez vers les favoris
          </button>
          <button>
            Supprimer du panier
          </button>
        </div>
      </div>
      <div className="price">
        120$
      </div>
    </div>
  );
}

export default CartItem;