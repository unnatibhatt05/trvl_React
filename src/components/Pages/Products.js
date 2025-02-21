import React from 'react';
import '../../App.css';

export default function Products() {
  return (
    <div
      style={{
        background: "url('/images/img-3.jpg') center/cover no-repeat",
        padding: "50px 20px",
        minHeight: "100vh",
      }}
    >
      <div className="services-content">
        <h1 className="services-title">Our Products</h1>

        <div className="service-section">
          {/* Travel Gear Section */}
          <div className="service-card product-card">
            <h2>🧳 Travel Gear</h2>
            <p>Find the best travel essentials, from backpacks to power banks.</p>
            <button onClick={() => alert("🚀 Travel Gear is coming soon! Stay tuned.")}>
              Shop Now
            </button>
          </div>

          {/* Guides & Maps Section */}
          <div className="service-card product-card-alt">
            <h2>🗺️ Guides & Maps</h2>
            <p>Explore detailed maps and guides for your perfect trip.</p>
            <button onClick={() => window.open("https://www.google.com/maps", "_blank")}>
              Open Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
