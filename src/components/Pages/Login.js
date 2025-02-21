import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login button clicked!');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response from backend:', data);

      alert(data.message);

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));

        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={formInnerStyle}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        <p style={linkTextStyle}>
          Don't have an account? <a href="/sign-up" style={linkStyle}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

// Inline styles
const containerStyle = {
  backgroundImage: "url('/images/img-8.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formStyle = {
  background: 'rgba(0, 0, 0, 0.7)',
  padding: '2rem',
  borderRadius: '10px',
  color: 'white',
  textAlign: 'center',
  width: '320px',
};

const formInnerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '12px',
  margin: '10px 0',
  borderRadius: '5px',
  border: 'none',
  fontSize: '16px',
  width: '100%',
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

export default Login;
