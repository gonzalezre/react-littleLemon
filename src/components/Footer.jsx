import React from 'react'
import logo from '../assets/img/Logo.svg';

export const Footer = () => {
  return (
    <footer>
        <section id='footerSection'>
          <div className='companyInfo'>
            <img src={logo} alt=''></img>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div>
            <h3>Important links</h3>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Menu</a></li>
              <li><a href='/'>Reservations</a></li>
              <li><a href='/'>Order Online</a></li>
              <li><a href='/'>Login</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: <br /> San Salvador, El Salvador</li>
              <li>Phone: <br /> +503 222-2222</li>
              <li>Email: <br /> littlelemmon@ll.com</li>
            </ul>
          </div>
          <div>
            <h3>Social media Links</h3>
            <ul>
              <li><a href='/'>Facebook</a></li>
              <li><a href='/'>Instagram</a></li>
              <li><a href='/'>Twitter</a></li>
            </ul>
          </div>
        </section>
    </footer>
  )
}
