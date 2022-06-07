import React, { useContext } from 'react'
import WrapperTemplate from '../../Drawers/Wrapper';

import HeaderOtherIcons from '../HeaderOtherIcons';
import CloseIcon from '../../CloseIcon';
import MenuOptions from './MenuOptions';
import { HeaderOpened } from '../../../contexts/mobileHeaderContext';
// import pumaLogo from "../../../../public/assets/images/puma-logo.png"

function MobileHeader() {

  function closeDrawer(){
    document.querySelector("footer").click()
  }




  const DrawerHeader=()=>{
    return (
      <div className="header__mobile__drawerHeader">
        <div className="brand">
          <img src={"/assets/images/puma-logo.png"} alt="" />
        </div>
      </div>
    );
  }
  return (
    <header className="header__mobile header__menu">
      <WrapperTemplate width={"100vw"} DrawerHeader={DrawerHeader}>
        <div className="header__mobile__drawerBody">
        <MenuOptions />
        </div>
      </WrapperTemplate>

      <div className="brand">
        <img src={"/assets/images/puma-logo.png"} alt="" />
      </div>

      <HeaderOtherIcons />
    </header>
  );
}

export default MobileHeader;