import React from 'react';
import './HeroSection.css';
import { Buttons } from './Button';
import '../App.css';

function HeroSection() {
  const handleWatchTrailer = () => {
    window.open('/videos/trailer.mp4', '_blank'); // ✅ Opens video in a new tab
  };

  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Buttons className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Buttons>
        <Buttons 
          className='btns' 
          buttonStyle='btn--primary' 
          buttonSize='btn--large'
          onClick={handleWatchTrailer}  // ✅ Opens video directly
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Buttons>
      </div>
    </div>
  );
}

export default HeroSection;
