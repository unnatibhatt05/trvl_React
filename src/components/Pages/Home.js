import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  const navigate = useNavigate();

  // ✅ Safely retrieve user data from localStorage
  let user = null;
  try {
    const storedUser = localStorage.getItem('user');
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    localStorage.removeItem('user'); // ✅ Remove corrupt data
  }

  const handleWatchTrailer = () => {
    if (!user) {
      localStorage.setItem('redirectAfterLogin', '/trailer');  // ✅ Save intended route
    }
    navigate('/trailer'); // ✅ Navigate to trailer page
  };

  return (
    <>
      <HeroSection onWatchTrailer={handleWatchTrailer} />  {/* ✅ Pass function as prop */}
      <Cards />
    </>
  );
}

export default Home;
