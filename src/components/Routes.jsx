import React from 'react'
import { Route } from 'react-router-dom'
import { HeroSection } from './HeroSection'
import { Bookings } from './Bookings'
import { Main } from './Main'

export const Routes = () => {
  return (
    <Routes> 
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<Bookings  />}></Route>
    </Routes>
  )
}
