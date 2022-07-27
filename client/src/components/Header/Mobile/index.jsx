import WrapperTemplate from '../../Drawers/Wrapper';
import HeaderOtherIcons from '../HeaderOtherIcons';
import MenuOptions from './MenuOptions';
import Logo from "../../../assets/images/logo.jpg"
import { Link } from 'react-router-dom';

function MobileHeader() {
  const DrawerHeader=()=>{
    return (
      <Link to={"/"}>
        <div className="header__mobile__drawerHeader">
          <div className="brand">
            <img src={Logo} alt="" />
          </div>
        </div>
      </Link>
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
        <Link to={"/"} exact>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <HeaderOtherIcons />
    </header>
  );
}

export default MobileHeader;