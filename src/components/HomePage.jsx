import React from 'react'
import restauranfood from '../assets/img/restauranfood.jpg'

export const HomePage = () => {
  return (
    <main>
        <section id='heroSection'>
            <div>
                <h1>Little Lemmon</h1>
                <h2>San Salvador</h2>
                <p>It offers the best food ever in El Salvador Pupusas, Chilate, Nuegado, Atole de elote.</p>
                <button className='btn btn-primary'>Reserve</button>
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
                    <div>column1</div>
                    <div>column2</div>
                    <div>column3</div>
                </div>
            </div>
            
        </section>
    </main>
  )
}
