import React from "react";
import Navbar from "../Components/Navbar";
import "./About.css";
import HeroSection from "../Components/HeroSection";

function About() {
  return (
    <div className="about-wrapper">
      <Navbar />

      {/* Hero */}
      <div className="about-hero">
        <p className="about-badge">📍 Kerala's #1 Venue Platform</p>
        <h1 className="about-title">
          What is <span className="about-highlight">BookMyVenue?</span>
        </h1>
        <p className="about-subtitle">
          A location-based venue discovery and booking platform built for Kerala — connecting people to the perfect spaces for every occasion.
        </p>
      </div>

      {/* What we do */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">What We Do <span className="about-highlight"></span></h2>
          <p className="about-section-text">
            BookMyVenue bridges the gap between people seeking local venues and the venues themselves — simply, smartly, and openly. Whether you're planning a birthday party, a corporate meetup, or a wedding reception, we help you find and book the perfect space near you in seconds.
          </p>
        </div>
      </div>

      {/* Problems we solve */}
      <div className="about-section about-section-gray">
        <div className="about-container">
          <h2 className="about-section-title">The Problem We Solve</h2>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-card-icon">🌐</div>
              <h3>No Central Platform</h3>
              <p>Venue discovery is scattered across WhatsApp, Instagram pages, and Google searches with no single trusted source.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">📅</div>
              <h3>No Easy Booking</h3>
              <p>No standardized way to check availability or confirm bookings for local event spaces.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">👥</div>
              <h3>Community Needs Unmet</h3>
              <p>Birthday halls and meetup spaces have little to no digital presence or online visibility.</p>
            </div>
            <div className="about-card">
              <div className="about-card-icon">📉</div>
              <h3>Venue Owners Struggle</h3>
              <p>Small owners lack the tools to manage inquiries and bookings online efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our solution */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Our Solution</h2>
          <div className="about-features">
            <div className="about-feature">
              <span className="about-feature-icon">📍</span>
              <div>
                <h4>Location-Based Discovery</h4>
                <p>Users share their location to find nearby venues instantly across Kerala.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">⚡</span>
              <div>
                <h4>Simple Booking Flow</h4>
                <p>Browse, view details, check real-time availability, and confirm your booking in seconds.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">🔎</span>
              <div>
                <h4>Smart Filtering</h4>
                <p>Filter by venue type, capacity, price range, and date to find exactly what you need.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">🏪</span>
              <div>
                <h4>Venue Listings</h4>
                <p>Venue owners get a dedicated profile to showcase photos, amenities, and pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="about-section about-section-dark">
        <div className="about-container">
          <h2 className="about-section-title about-title-white">Vision & Mission</h2>
          <div className="about-vm">
            <div className="about-vm-card">
              <div className="about-vm-icon">💡</div>
              <h3>Vision</h3>
              <p>To become Kerala's most trusted and accessible venue booking platform — empowering communities to gather, celebrate, and connect without friction.</p>
            </div>
            <div className="about-vm-card about-vm-card-yellow">
              <div className="about-vm-icon">🚀</div>
              <h3>Mission</h3>
              <p>Building an open,community-driven platform that simplifies space discovery for everyone, starting from the smallest neighborhood birthday hall to major city venues.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Venue types */}
      <div className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Venues We Cover</h2>
          <div className="about-venues">
            {[
              { icon: "🎂", label: "Birthday Halls" },
              { icon: "☕", label: "Cafes" },
              { icon: "🏨", label: "Hotels" },
              { icon: "🌴", label: "Resorts" },
              { icon: "🎭", label: "Auditoriums" },
              { icon: "🤝", label: "Meetup Spaces" },
              { icon: "🛍️", label: "Malls" },
              { icon: "🏛️", label: "Venue Halls" },
            ].map((v) => (
              <div key={v.label} className="about-venue-chip">
                <span>{v.icon}</span>
                <span>{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to find your perfect venue?</h2>
        <p>Join thousands of Kerala families, professionals, and event organizers on BookMyVenue.</p>
        <div className="about-cta-btns">
          <a href="/explore" className="about-cta-primary">Explore Venues</a>
          <a href="/signup" className="about-cta-outline">Sign up free</a>
        </div>
      </div>

    </div>
  );
}

export default About;