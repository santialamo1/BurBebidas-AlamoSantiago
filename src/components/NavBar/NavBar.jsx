import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom';


import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <nav className="navbar">
            <div>
                <img src="/logo.svg" alt="Logo" className="logo" />
            </div>
            <div className="nav-links">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to={"/tienda"}>Tienda</NavLink>
            </div>
            <div className="cart-widget">
                <CartWidget />
            </div>
        </nav>
    </header>
  )
}

export default NavBar