import React from 'react'
import '../css/styles.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
        <ul>
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
