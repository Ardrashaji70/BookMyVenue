import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import SearchBar from "../Components/SearchBar";
import "./Home.css";

import cafe1 from "../Assets/cafe1.jpg.jpg";
import cafe2 from "../Assets/cafe2.jpg.jpg";
import cafe3 from "../Assets/cafe3.jpg.jpg";

const HomePage = () => {
  const images = [cafe1, cafe2, cafe3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="hero-wrapper"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        {/* Overlay */}
        <div className="hero-overlay" />

        {/* Navbar */} 
        <div className="hero-navbar">
          <Navbar />
        </div>

        {/* Hero + SearchBar content */}
        <div className="hero-content">
          <HeroSection />
          <SearchBar onSearch={(filters) => console.log(filters)} />
        </div>

        {/* Dots */}
        <div className="hero-dots">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`hero-dot ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomePage;