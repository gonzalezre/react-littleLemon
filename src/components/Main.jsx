import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from './HomePage'
import { BookingPage } from './BookingPage'

export const Main = () => {
  return (
    <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>

    
  )
}
