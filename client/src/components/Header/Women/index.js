
import React from 'react';
import { NavLink } from 'react-router-dom';
import WomanArticle from './WomanArticle';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const WomenStuffs = ({ onMobile }) => {
  const articles = {
    chaussures: {
      "Toutes les chaussures": "#",
      LifeStyle: "#",
      Running: "#",
      Tennis: "#",
      Football: "#",
      BasketBall: "#",
    },

    vetements: {
      Pantalons: "#",
      Pantalons: "#",
      "Hauts sans ou avec manche": "#",
      "Sweat-shirts et sweat à capuche": "#",
      Short: "#",
      Complet: "#",
    },

    accessoires: {
      "Tapis de sol Gym/Fitness": "#",
      Chaussettes: "#",
      "Montres de sport et chronomètres ": "#",
      "Sacs de sport": "#",
      Autres: "#",
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
            Femmes
          </button>
        ) : (
          <NavLink
            exact
            to="#"
            className="header-menu-item"
            activeClassName="active-header-menu-item"
          >
            Femmes
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
              to=""
              exact
              className="submenu__item__header"
              activeClassName=""
            >
              Chaussures
            </NavLink>
          </h6>
          <WomanArticle infos={articles.chaussures} />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
              exact
              className="submenu__item__header"
              activeClassName=""
            >
              Vetements
            </NavLink>
          </h6>
          <WomanArticle infos={articles.vetements} />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
              exact
              className="submenu__item__header"
              activeClassName=""
            >
              Accessiores
            </NavLink>
          </h6>
          <WomanArticle infos={articles.accessoires} />
        </div>
      </div>
    </>
  );
};

export default WomenStuffs