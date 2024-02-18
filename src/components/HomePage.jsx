import React from 'react'
import restauranfood from '../assets/img/restauranfood.jpg'
import bruchetta from '../assets/img/bruchetta.svg'
import greekSalad  from '../assets/img/greek salad.jpg'
import lemonDessert from '../assets/img/lemon dessert.jpg'
import { Link, useNavigate } from 'react-router-dom'

export const HomePage = () => {
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
        <section id='highlightsSection'>
            <div>
                <div className='highlightsHeader'>
                    <h2>This weeks specials!</h2>
                    <button className='btn btn-primary'>Order online</button>
                </div>
                <div className='highlightsContent'>
                    <div>
                        <div className='highlightsImageContainer'> 
                            <img src={bruchetta} />
                        </div>
                            
                        
                        
                        <div className='highlightsBottomContainer'>
                            <div>
                                <p>Brusheta</p>
                                <p>$10.00</p>
                            </div>
                            <p>
                                Our brusheta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <a href='#'>Order a delivery</a>
                        </div>
                    </div>
                    <div>
                        <div><img src={greekSalad} /></div>
                        
                        <div className='highlightsBottomContainer'>
                            <div>
                                <p>Brusheta</p>
                                <p>$10.00</p>
                            </div>    
                            <p>
                                Our brusheta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <a href='#'>Order a delivery</a>
                            </div>
                    </div>
                    <div>
                        <div><img src={lemonDessert} /></div>
                        
                        <div className='highlightsBottomContainer'>
                            <div><p>Brusheta</p>
                                <p>$10.00</p></div>
                                
                            
                            <p>
                                Our brusheta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            {/* <Link to='booking'>Order a delivery</Link> */}
                            </div>
                    </div>
                </div>
            </div>
            
        </section>
    </main>
  )
}
