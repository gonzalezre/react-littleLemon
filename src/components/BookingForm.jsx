import React, { useState } from 'react'

export const BookingForm = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(0);
    const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);
  const [occasion, setOcassion] = useState([
    'Birthday',
    'Anniversary',
  ]);



  return (
    <>
    <form style={{"display": "grid", "max-width": "200px", "gap": "20px"}}>
        <label for="res-date">Choose date</label>
        <input type="date" 
            id="res-date" 
            value={date} 
            onChange={e => setDate(e.target.value)}/>
        <label for="res-time">Choose time</label>
        <select id="res-time" onChange={e=> setAvailableTimes(e.target.value)}>
            {availableTimes.map((time, index) => (
                <option key={index}>{time}</option>
            ))}
        </select>
        <label for="guests">Number of guests</label>
        <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests"
            value={guests}
            onChange={e=> setGuests(e.target.value)}/>
        <label for="occasion">Occasion</label>
        <select id="occasion" onChange={e=> setOcassion(e.target.value)}>
            {occasion.map((occasion, index) => (
          <option key={index}>{occasion}</option>
        ))}
        </select>
        <input type="submit" value="Make Your reservation"/>
        </form>
    </>
   
  )
}
