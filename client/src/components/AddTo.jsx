
import React from 'react'
import AddToCartButton from './Cart/AddToCartButton'
import AddFavoriteButton from './Cart/AddToCartFavorite'
//Use for add to card and add to favorites
function AddTo() {
  return (
    <div className="addTo">
      <AddToCartButton />
      <AddFavoriteButton />
    </div>
  );
}

export default AddTo