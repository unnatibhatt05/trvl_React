import React from 'react';
import '../../App.css'; 

const Trailer = () => {
  return (
    <div style={containerStyle}>  
      <video controls autoPlay style={videoStyle}>
        <source src="/videos/trailer.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

// Center the video container
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#000', // Optional: Dark background for better focus
};

const videoStyle = {
  width: '80%',
  height: 'auto',
  borderRadius: '10px',
};

export default Trailer;
