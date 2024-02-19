import React, { useEffect, useReducer, useState } from 'react'
import { BookingForm } from './BookingForm'

export const BookingPage = ({}) => {



  // const [availableTimes, setAvailableTimes] = useState([
  //   '17:00',
  //   '18:00',
  //   '19:00',
  //   '20:00',
  //   '21:00',
  //   '22:00',
  // ]);


  const initializeTimes = async (date) => {
    // Your logic to initialize the available times goes here.
    // For now, return an empty array.

    
  };

  useEffect(() => {
    // Fetch and initialize available times for today
    //const today = new Date().toISOString().split('T')[0];
    
    try {
      // const availableTimes = fetchAPI('2023-01-01');
      // console.log("availableTimes", availableTimes);
      // dispatch({
      //   type: 'UPDATE_TIMES',
      //   payload: availableTimes,
      // });
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  }, []); // Run this effect only on mount

  const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  useEffect(() => {
    // For now, updateTimes returns the same available times regardless of the date.
    dispatch({
      type: 'UPDATE_TIMES',
      payload: updateTimes(/* selected date */),
    });
  }, []); // Run this effect only on mount

  const updateTimes = (selectedDate) => {
    // Your logic to calculate available times based on the selected date goes here.
    // For now, return the same available times.
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];
  };


  return (
    <BookingForm 
      availableTimes={availableTimes} 
      // setAvailableTimes={setAvailableTimes}
    />
  )
}
