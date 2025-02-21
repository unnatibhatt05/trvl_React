import React from 'react';
import '../../App.css';

export default function Products() {
  return (
    <div 
      className="page-container"
      style={{
        background: "url('/images/img-3.jpg') center/cover no-repeat",
        padding: "50px 20px",
        minHeight: "100vh",
        color: "#333",
      }}
    >
      <h1 className="page-title">Our Products</h1>

      {/* Travel Gear Section (Coming Soon Alert) */}
      <section className="product-section" style={{ backgroundColor: "#FAE3D9" }}>
        <h2>🧳 Travel Gear</h2>
        <p>Find the best travel essentials, from backpacks to power banks.</p>
        <button 
          className="product-button"
          onClick={() => alert("🚀 Travel Gear is coming soon! Stay tuned.")}
        >
          Shop Now
        </button>
      </section>

      {/* Guides & Maps Section (Google Maps Link) */}
      <section className="product-section" style={{ backgroundColor: "#F3E8EE" }}>
        <h2>🗺️ Guides & Maps</h2>
        <p>Explore detailed maps and guides for your perfect trip.</p>
        <button 
          className="product-button"
          onClick={() => window.open("https://www.google.com/maps", "_blank")}
        >
          Open Google Maps
        </button>
      </section>
    </div>
  );
}
