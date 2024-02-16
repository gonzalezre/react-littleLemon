import React from 'react'

import logo from '../assets/img/Logo.svg';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt='logo'  />
        </div>

        <Nav />
    </header>
  )
}
