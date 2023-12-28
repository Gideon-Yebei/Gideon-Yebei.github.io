import React from 'react';
import './header.css';
import ME from '../../assets/img/me.png';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';


function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Gideon</h1>
        <div className="text-light">Full-Stack Developer</div>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header