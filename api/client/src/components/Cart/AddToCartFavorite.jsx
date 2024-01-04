import React from 'react'

function addToFavorite({arctileSlug, colorId}) {
  return (
    <div className=" addToButton addToCart">
      <button className="isDark btnRounded" onClick={""}>
        Ajouter aux favoris
      </button>
    </div>
  );
}

export default addToFavorite
