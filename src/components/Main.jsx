import React, { useReducer, useState } from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { HighlightsSection } from './HighlightsSection';
import { HeroSection } from './HeroSection';
import { BookingForm } from './BookingForm';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Bookings } from './Bookings';
import { ConfirmedBookings } from './ConfirmedBookings';

export const Main = () => {

  const seedRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m) /m;
    }
  }

  const fetchAPI = (date) => {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i+ ':30');
      }
    }
    return result;
  }

  const submitAPI = (formData) => {
    return true;
  }

  const updateTimes = (state, date) => {
    return {availableTimes: fetchAPI(new Date())};
  //   return [
  //    '17:00',
  //    '18:00',
  //    '19:00',
  //    '20:00',
  //    '21:00',
  //    '22:00',
  //  ]
  }

  const navigate = useNavigate();

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  

 

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed')
    }
  }

  // const [availableTimes, setAvailableTimes] = useState([
  //   '17:00',
  //   '18:00',
  //   '19:00',
  //   '20:00',
  //   '21:00',
  //   '22:00',
  // ]);

  return (
    <>
    <Header />
    <Routes> 
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/booking" element={<Bookings availableTimes={state} dispatch={dispatch} submitForm={submitForm}  />}></Route>
          <Route path="/confirmed" element={<ConfirmedBookings  />}></Route>
      </Routes>
      
       
      {/* <HeroSection /> */}
      {/* <BookingForm availableTimes={availableTimes}  /> */}
       <HighlightsSection />
       <Footer />

      {/* '26.51 */}
      {/* 28.50 */}
    </>
    
      

    
  )
}
