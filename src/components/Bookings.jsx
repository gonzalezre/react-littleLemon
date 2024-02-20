import React, { useEffect, useReducer, useState } from 'react'
import { BookingForm } from './BookingForm'

export const Bookings = ({availableTimes, dispatch, submitForm}) => {



  // const [availableTimes, setAvailableTimes] = useState([
  //   '17:00',
  //   '18:00',
  //   '19:00',
  //   '20:00',
  //   '21:00',
  //   '22:00',
  // ]);



  return (
    <BookingForm 
      availableTimes={availableTimes} 
      dispatch={dispatch}
      submitForm={submitForm}
      // setAvailableTimes={setAvailableTimes}
    />
  )
}
