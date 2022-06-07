import Favorite from "../../components/Favorite"
import React from 'react'
import Avatar from '../Avatar'
import CartIcon from '../CartIcon'
import SearchBar from '../SearchBar'

function HeaderOtherIcons() {
  return (
    <div className="headerOtherIcons">
      <SearchBar />
      <Avatar />
      <CartIcon />
      <Favorite />
    </div>
  );
}

export default HeaderOtherIcons