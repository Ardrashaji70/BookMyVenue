import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-text">
      <p className="hero-tag">📍 Kerala's #1 Venue Platform</p>

      <h1 className="hero-title">
        Book The Perfect Venue{" "}
        <span className="hero-highlight">For Your Special Moments</span>
      </h1>

      <p className="hero-subtitle">
        Find and book birthday halls, cafes, resorts & more — instantly.
      </p>
    </div>
  );
}

export default HeroSection;