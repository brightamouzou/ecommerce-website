import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {responsives} from "../../utils/responsive";
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';

const Header = (props) => {

  return (
    <nav className="main-header header">
      <header className="header__1 header__specialOffers"></header>

      <MobileHeader />
      <DesktopHeader />
    </nav>
  );
}



export default Header;