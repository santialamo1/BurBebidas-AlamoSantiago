import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <nav className="navbar">
            <div>
                <img src="logo.svg" alt="Logo" className="logo" />
            </div>
            <div className="nav-links">
                <a href="/">Inicio</a>
                <a href="/tienda">Tienda</a>
            </div>
            <div className="cart-widget">
                <CartWidget />
            </div>
        </nav>
    </header>
  )
}

export default NavBar