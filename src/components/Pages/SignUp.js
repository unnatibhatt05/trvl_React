import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("✅ SignUp component mounted");
    console.log("🔍 Checking background image path:", containerStyle.backgroundImage);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('📨 Response from backend:', data);

      if (response.ok) {
        alert('🎉 Sign-up successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        throw new Error(data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <div style={formStyle}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit} style={formInnerStyle}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={inputStyle} />
            <button type="submit" style={{ ...buttonStyle, opacity: loading ? 0.6 : 1 }} disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <p style={linkTextStyle}>
            Already have an account? <Link to="/login" style={linkStyle}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// 🔹 CSS Fixes for Fullscreen Display
const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: "url('/images/img-8.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const overlayStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay effect
};

const formStyle = {
  background: 'rgba(0, 0, 0, 0.85)',
  padding: '2rem',
  borderRadius: '10px',
  color: 'white',
  textAlign: 'center',
  width: '340px',
  border: '2px solid #ff6600',
  boxShadow: '0px 4px 10px rgba(255, 102, 0, 0.5)',
};

const formInnerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '12px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ff6600',
  fontSize: '16px',
  width: '100%',
  outline: 'none',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#ff6600',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '18px',
  transition: 'background 0.3s',
};

const linkTextStyle = {
  marginTop: '10px',
  color: 'white',
};

const linkStyle = {
  color: '#ff6600',
  textDecoration: 'none',
};

export default SignUp;
