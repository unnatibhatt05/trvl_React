import React from 'react';
import './HeroSection.css';
import { Buttons } from './Button';
import '../App.css';

/*const bgImage = process.env.PUBLIC_URL + "/images/img-home.jpg";*/

function HeroSection() {
  return (
    <div className="hero-container" >
      <video src="/videos/video-2.mp4" autoPlay loop muted/>
      <h1>ADEVENTURE AWAITS</h1>
      <p> What are You Waiting For?</p>
      <div className="hero-btns">
      <Buttons className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
       GET STARTED
      </Buttons>
      <Buttons className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
       WATCH TRAILER <i className='far fa-play-circle' />
      </Buttons>
      </div>
    </div>
  )
}

export default HeroSection;
