import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // ✅ Use Routes instead of Switch
import Navbar from './components/NavBar';  // ✅ Match exact filename case
import './App.css';
import Home from './components/Pages/Home';  // ✅ Match exact filename case
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>   {/* ✅ Use Routes instead of Switch */}
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
