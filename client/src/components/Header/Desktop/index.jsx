import React, { useLayoutEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Novelties from '../../Novelties';
import MenStuffs from '../Men/index';
import WomenStuffs from '../Women';
import ChildrenStuffs from '../Children';
import { headerMenuItems } from '../../../utils/events/header';
import HeaderOtherIcons from '../HeaderOtherIcons';

const DesktopHeader = () => {
  useLayoutEffect(()=>{
    headerMenuItems();
  }, [])  
  return (
    
    <header className="header__2 header__desktop header__menu ">
          <div className="brand">
            <Link to={"/"} exact>
              <img src="/assets/images/puma-logo.png" alt="" />
            </Link>
          </div>

            <ul className='header__menu__options'>

              <li className='menu__item novelties'  data-novelties>
                <Novelties/>
              </li>

              <li className='menu__item men' data-menArticle>
                <MenStuffs/>
              </li>
              
              <li className='menu__item men' data-womenArticles>
                <WomenStuffs/>
              </li>

              <li className='menu__item men' data-childrenArticles>
                <ChildrenStuffs/>
              </li>
            </ul>
            <HeaderOtherIcons/>
          

       </header>


  )
}

export default DesktopHeader;