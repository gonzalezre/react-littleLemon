import React from 'react'
import restauranfood from '../assets/img/restauranfood.jpg'
import { Link, useNavigate } from 'react-router-dom'

export const HeroSection = () => {
     const  navigate  = useNavigate();

    const handleReserve = () => {
        navigate('/booking');
    }

  return (
    <main>
        <section id='heroSection'>
            <div>
                <h1>Little Lemmon</h1>
                <h2>San Salvador</h2>
                <p>It offers the best food ever in El Salvador Pupusas, Chilate, Nuegado, Atole de elote.</p>
                <button className='btn btn-primary' onClick={handleReserve}>Reserve</button>
            </div>
            <div>
                <img src={restauranfood} />
            </div>
        </section>
    </main>
  )
}
