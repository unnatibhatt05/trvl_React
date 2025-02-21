import React from 'react';
import '../../App.css';  // Keep global styles

export default function Services() {
  return (
    <div
      style={{
        background: "url('/images/img-2.jpg') center/cover no-repeat",
        padding: "50px 20px",
        minHeight: "100vh",
      }}
    >
      <div className="services-content">
        <h1 className="services-title">Our Services</h1>

        <div className="service-section">
          <div className="service-card">
            <h2>🏨 Hotel Booking</h2>
            <p>Book top-rated hotels at the best prices and enjoy a comfortable stay.</p>
            <button onClick={() => alert("Hotel booking service coming soon!")}>Book Now</button>
          </div>

          <div className="service-card">
            <h2>🌍 Tour Packages</h2>
            <p>Explore our exclusive travel packages for a hassle-free vacation.</p>
            <button onClick={() => alert("Tour package service coming soon!")}>Explore Tours</button>
          </div>
        </div>
      </div>
    </div>
  );
}
