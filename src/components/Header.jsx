import React from 'react'

import logo from '../assets/img/Logo.svg';
import { Nav } from './Nav';
import { HeroSection } from './HeroSection';
import { HighlightsSection } from './HighlightsSection';
import { Footer } from './Footer';

export const Header = () => {
  return (
    <>
    <header>
        <div className='logo'>
            <img src={logo} alt='logo'  />
        </div>

        <Nav />
    </header>
    {/* <HeroSection /> */}
      {/* <BookingForm availableTimes={availableTimes}  /> */}
      {/* <HighlightsSection />  */}
      {/* <Footer />  */}
    </>
   
    
  )
}
