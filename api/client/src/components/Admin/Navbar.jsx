import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'

function Navbar() {
  return (
    <header>
        <nav className='navbar-admin header__desktop'>
            <div className="brand">
                <img src={""} alt="" />
            </div>
            <ul>
                <li>
                    <NavLink exact to={""} activeClassName={"admin-nav-link-active"}>Se connecter</NavLink>
                </li>
                <li>
                    <NavLink exact to={""} activeClassName={"admin-nav-link-active"}>Créer un article</NavLink>
                </li>
                <li>
                    <NavLink exact to={""} activeClassName={"admin-nav-link-active"}>Suprimer un article</NavLink>
                </li>
            </ul>
            <Navigation/>
        </nav>       
    </header>
  )
}

export default Navbar