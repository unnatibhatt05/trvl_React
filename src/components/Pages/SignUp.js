import React, { useState } from 'react';
import '../../App.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div 
      style={{
        backgroundImage: "url('/images/img-8.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '2rem',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
      }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

// Inline styles for input fields and button
const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: 'none',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#ff6600',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default SignUp;
