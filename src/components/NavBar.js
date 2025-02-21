import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // ✅ Import useLocation
import './NavBar.css';
import { Button } from '@mui/material';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current route

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className={`nav-links ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-links ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className={`nav-links ${location.pathname === '/products' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className={`nav-links-mobile ${location.pathname === '/sign-up' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              variant="outlined"
              onClick={() => navigate('/sign-up')}
              style={{
                color: 'white',
                borderColor: 'white',
                marginLeft: '10px'
              }}
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
