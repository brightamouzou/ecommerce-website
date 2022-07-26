import Favorite from "../Favorite"
import React from 'react'
import Avatar from '../Avatar'
import CartIcon from '../CartIcon'
import SearchBar from '../SearchBar'
import { Link } from "react-router-dom"
import UserAvatar from "./UserAvatar"

function HeaderOtherIcons() {
  return (
    <div className="headerOtherIcons">
      <Link title="Rechercher">
        <SearchBar />
      </Link>
      <Link to={"/login"} title="Profil">
        <UserAvatar />
      </Link>
      <Link to={"/cart"} title="Panier">
        <CartIcon />
      </Link>

      <Link to={"/favorite"} title="Favoris">
        <Favorite />
      </Link>
    </div>
  );
}

export default HeaderOtherIcons