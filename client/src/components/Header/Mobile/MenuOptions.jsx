import React, { useContext, useEffect } from 'react';
import ChildrenStuffs from '../Children';
import MenStuffs from '../Men';
import WomenStuffs from '../Women';
import Novelties from '../../Novelties';
import WrapperTemplate from '../../Drawers/Wrapper';
import { HeaderOpened } from '../../../contexts/mobileHeaderContext';

function MenuOptions() {

  const setIsHederOpened=useContext(HeaderOpened);
  

    useEffect(() => {
      // const menuItems=document.querySelectorAll(".menu__item")
      // console.log(menuItems);

      // menuItems.forEach(menuItem=>{
      //     menuItem.addEventListener("click", (e)=>{
      //         const submenu=menuItem.children[1]
      //         console.log(submenu.scrollWidth);

      //         const container=document
      //           .querySelector(".css-4t3x6l-MuiPaper-root-MuiDrawer-paper")
      //           console.log(container);
      //           // document.querySelector(".drawerBody").style.transform="translateX(-100%)"
      //         submenu.style.transform="translateX(55%)"
      //         submenu.style.visibility = "visible";
      //         submenu.style.opacity= "1";

      //     })
      // })
      const liElements = document.querySelectorAll(".header__mobile__drawerBody li");

      if (liElements.length) {
        liElements.forEach((li) => {
          const svg = li.querySelector("h6 svg");
          const h6 = li.querySelector("h6");

          //   li.dataset.active = false;
          console.log(svg);
          h6.addEventListener("click", (e) => {
            e.stopPropagation();
            console.log("clicked");
            if (li.dataset.active == "true") {
              li.dataset.active = false;
              return;
            }
            li.dataset.active = true;
          });

          if (!li.dataset.active) {
          }
        });
        console.log(liElements[0].children);
      }

      // const script = document.createElement("script");
      // script.src = "/headerMobile.js";
      // document.body.appendChild(script);
    }, [setIsHederOpened]);
  return (
    <>

        <ul className="header__menu__options mobile">
          <li className="menu__item novelties" data-novelties>
            <Novelties onMobile={true} />
          </li>

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
    
    </>
  )
}

export default MenuOptions