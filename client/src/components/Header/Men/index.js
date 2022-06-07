
import React from 'react'
import { NavLink } from 'react-router-dom'
import ManArticle from "./ManArticle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MenStuffs = ({onMobile}) => {

    const articles={
        chaussures:{
            "Toutes les chaussures":"#",
            "LifeStyle":"#",
            "Running":"#",
            "Tennis":"#",
            "Football":"#",
            "BasketBall":"#"
        },

        vetements:{
            "Pantalons":"#",
            "Pantalons":"#",
            "Hauts sans ou avec manche":"#",
            "Sweat-shirts et sweat à capuche":"#",
            "Short":"#",
            "Complet":"#"

        },

        accessoires:{
            "Tapis de sol Gym/Fitness":"#",
            "Chaussettes":"#",
            "Montres de sport et chronomètres ":"#",
            "Sacs de sport":"#",
            "Autres":"#"

        }
    }


  return (
    <>
      <h6>
        {onMobile ? (
          <button
            className="header-menu-item"
            activeClassName="active-header-menu-item"
          >
            Enfants
          </button>
        ) : (
          <NavLink
            exact
            to="#"
            className="header-menu-item"
            activeClassName="active-header-menu-item"
          >
            Enfants
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
          <ManArticle
            infos={articles.chaussures}
            aria-label="chaussures hommes"
          />
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
          <ManArticle
            infos={articles.vetements}
            aria-label="vetements hommes"
          />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
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