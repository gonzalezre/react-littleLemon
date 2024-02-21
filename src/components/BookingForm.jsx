import React, { useState } from 'react'

export const BookingForm = ({availableTimes, dispatch, submitForm}) => {

    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOcassion] = useState([
    'Birthday',
    'Anniversary',
  ]);
  //   const [availableTimes, setAvailableTimes] = useState([
  //   '17:00',
  //   '18:00',
  //   '19:00',
  //   '20:00',
  //   '21:00',
  //   '22:00',
  // ]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if(date === ''){
      alert("Please complete date");
      return;
    }

    if(times === ''){
      alert("Please complete time");
      return;
    }

    if(guests === 0){
      alert("Please complete guests");
      return;
    }

    if(occasion === ''){
      alert("Please complete occasion");
      return;
    }

    submitForm(e);
  }

  const handleChange = (date) => {
    setDate(date);
    dispatch(date);
  }



  return (
    <section id='bookingSection'>
    <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" 
              id="res-date" 
              value={date} 
              onChange={e => handleChange(e.target.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={times} onChange={e=> setTimes(e.target.value)}>
            <option value = "">Select a Time</option>
              {
                // availableTimes.availableTimes.map((time, index) => (
                //     <option key={index}>{time}</option>
                // ))
                availableTimes.availableTimes.map(availableTimes => {
                  return <option key={availableTimes}>{availableTimes}</option>
                })
              }
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="guests">Number of guests</label>
          <input 
              type="number" 
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests"
              value={guests}
              onChange={e=> setGuests(e.target.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" onChange={e=> setOcassion(e.target.value)}>
              {
                occasion.map((occasion, index) => (
                <option key={index}>{occasion}</option>
                ))
              }
          </select>
        </fieldset>
        <div className='btnHolder'>
          <input type="submit" value="Make Your reservation" className='btn btn-secondary w-100' alt='MakeReservation' aria-label="On Click"/>
        </div>    
        
        
      </form>
    </section>
   
  )
}
