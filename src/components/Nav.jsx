import React, { useState } from 'react'
import '../css/styles.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
}

  return (
    <nav className={`${menuOpen ? "open" : ""}`}>
        <div className="menu-toggle" id="mobile-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
        <ul className={`nav-list ${menuOpen ? "visible" : ""}`}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <a href='#'>About</a>
            </li>
            <li>
                <a href='#'>Menu</a>
            </li>
            <li>
                <a href='#'>Reservations</a>
            </li>
            <li>
                <a href='#'>Order online</a>
            </li>
            <li>
                <a href='#'>Login</a>
            </li>
        </ul>
    </nav>
  )
}
