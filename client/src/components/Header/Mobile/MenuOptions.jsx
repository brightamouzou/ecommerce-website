import React, { useContext, useEffect } from 'react';
import ChildrenStuffs from '../Children';
import MenStuffs from '../Men';
import WomenStuffs from '../Women';
import Novelties from '../../Novelties';
import WrapperTemplate from '../../Drawers/Wrapper';
import { HeaderOpened } from '../../../contexts/mobileHeaderContext';
import { Link } from 'react-router-dom';

function MenuOptions() {

  const setIsHederOpened=useContext(HeaderOpened);
  

    useEffect(() => {
      const liElements = document.querySelectorAll(".header__mobile__drawerBody li");

      if (liElements.length) {
        liElements.forEach((li) => {
          const svg = li.querySelector("h6 svg");
          const h6 = li.querySelector("h6");

          // console.log(svg);
          // h6.addEventListener("click", (e) => {
          //   e.stopPropagation();
          //   console.log("clicked");
          //   if (li.dataset.active =="true") {
          //     li.dataset.active = false;
          //     return;
          //   }
          //   li.dataset.active = true;
          // });

          if (!li.dataset.active) {
          }
        });
        // console.log(liElements[0].children);
      }

    }, [setIsHederOpened]);
  return (
    <>
      <ul className="header__menu__options mobile">
        {/* <li className="menu__item novelties" data-novelties>
          <Novelties onMobile={true} />
        </li> */}

        <li className="menu__item men" data-menArticle>
          <MenStuffs onMobile={true} />
        </li>

        <li className="menu__item men" data-womenArticles>
          <WomenStuffs onMobile={true} />
        </li>

        <li className="menu__item men" data-childrenArticles>
          <ChildrenStuffs onMobile={true} />
        </li>
      </ul>

      <div className="mobileApp">
        <button className="isDark">
          <Link to={"/login"}>S'inscrire/Se connecter</Link>
        </button>
      </div>
    </>
  );
}

export default MenuOptions