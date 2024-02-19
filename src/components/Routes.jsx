import React from 'react'
import { Route } from 'react-router-dom'
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage'
import { Main } from './Main'

export const Routes = () => {
  return (
    <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage  />}></Route>
    </Routes>
  )
}
