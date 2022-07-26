import React from 'react'
import { NavLink } from 'react-router-dom'
import Noveltie from './Noveltie'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Novelties = ({onMobile}) => {

    const nouveautes={
        articleMoment:{
            "Toutes les nouveautés":"http://localhost:3000/",
            "Meilleur rapport Qualité/Prix":"http://localhost:3000/"
        },
        nouveautesHommes:{
            "Chaussures":"#link",
            "Vetements":"#link",
            "Equipements et accessoires":"#link"
        },

        nouveautesFemmes:{
            "Chaussures":"#link",
            "Vetements":"#link",
            "Equipements et accessoires":"#link"
        },

        nouveautesEnfants:{
            "Chaussures":"#link",
            "Vetements":"#link",
            "Equipements et accessoires":"#link"
        }, 

        rechercheParMarque:{
            "Adidas":"#link",
            "Puma":"#link",
            "Nike":"#link",
            "Reebok":"#link",
            
        }

    }
  return (
    <>
      <h6>
        {onMobile ? (
          <button
            className="header-menu-item"
            activeClassName="active-header-menu-item"
            disabled
          >
            Nouveautés
          </button>
        ) : (
          <NavLink
            exact
            to="#"
            className="header-menu-item t-disabled"
            activeClassName="active-header-menu-item"

          >
            Nouveautés
          </NavLink>
        )}
        {onMobile &&<ChevronRightIcon />}
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
              className="submenu__item__header"
              exact
              activeClassName=""
            >
              Articles du moment
            </NavLink>
          </h6>
          <Noveltie infos={nouveautes.articleMoment} />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
              className="submenu__item__header"
              exact
              activeClassName=""
            >
              Nouveautés pour hommes
            </NavLink>
          </h6>
          <Noveltie infos={nouveautes.nouveautesHommes} />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
              className="submenu__item__header"
              exact
              activeClassName=""
            >
              Nouveautés pour femmes
            </NavLink>
          </h6>
          <Noveltie infos={nouveautes.nouveautesFemmes} />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
              className="submenu__item__header"
              exact
              activeClassName=""
            >
              Nouveautés pour enfants
            </NavLink>
          </h6>
          <Noveltie infos={nouveautes.nouveautesEnfants} />
        </div>

        <div className="submenu__item">
          <h6>
            <NavLink
              to=""
              className="submenu__item__header"
              exact
              activeClassName=""
            >
              Rechercher par marque
            </NavLink>
          </h6>
          <Noveltie infos={nouveautes.rechercheParMarque} />
        </div>
      </div>
    </>
  );
}

export default Novelties