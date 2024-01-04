
import React from 'react'
import { NavLink } from 'react-router-dom'
import ManArticle from "./ManArticle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const links = {
  shoes: "/q/articles/shoes",
  clothes: "/q/articles/clothes",
  accessories: "/q/articles/accessories",
};
const MenStuffs = ({onMobile}) => {


    const articles = {
      chaussures: {
        "Toutes les chaussures": links.shoes + "?sex=men",
        LifeStyle: links.shoes + "?subCategories=lifestyle",
        Running: links.shoes + "?subCategories=running",
        Tennis: links.shoes + "?subCategories=tennis",
        Football: links.shoes + "?subCategories=foot",
        BasketBall: links.shoes + "?subCategories=basket",
      },

      vetements: {
        Pantalons: links.clothes + "?subCategories=pants",
        Tshirts: links.clothes + "?subCategories=tShirts",
        Short: links.clothes + "?subCategories=shorts",
        "Sweat shorts et Pullovers": links.clothes + "?subCategories=sweatShirts",
        // Complet: links.clothes,
      },

      accessoires: {
        // "Tapis de sol Gym/Fitness": links.accessories,
        // Chaussettes: links.accessories,
        // "Montres de sport et chronomètres ": links.accessories,
        "Sacs de sport": links.accessories + "?subCategories=bags",
        "Chapeaux": links.accessories + "?subCategories=hats",
        Autres: links.accessories,
      },
    };


  return (
    <>
      <h6>
        {onMobile ? (
          <button
            className="header-menu-item"
            activeClassName="active-header-menu-item"
          >
            Hommes
          </button>
        ) : (
          <NavLink
            exact
            to="#"
            className="header-menu-item"
            activeClassName="active-header-menu-item"
          >
            Hommes
          </NavLink>
        )}
        {onMobile && <ChevronRightIcon />}
      </h6>

      <div className="submenus">
        {/* {onMobile && (
          <div className="submenuMobileHeader">
            <div>
              <span>
                <ChevronLeftIcon />
              </span>
              <span>Nouveautés</span>
            </div>
          </div>
        )} */}
        <div className="submenu__item">
          <h6>
            <NavLink
              to={links.shoes}
              exact
              className="submenu__item__header"
              activeClassName=""
            >
              Chaussures
            </NavLink>
          </h6>
          <ManArticle
            infos={articles.chaussures}
            aria-label="chaussures hommes"
          />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to={links.clothes}
              exact
              className="submenu__item__header"
              activeClassName=""
            >
              Vetements
            </NavLink>
          </h6>
          <ManArticle
            infos={articles.vetements}
            aria-label="vetements hommes"
          />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to={links.accessories}
              exact
              className="submenu__item__header"
              activeClassName=""
            >
              Accessoires
            </NavLink>
          </h6>
          <ManArticle
            infos={articles.accessoires}
            aria-label="vetements hommes"
          />
        </div>
      </div>
    </>
  );
}

export default MenStuffs