import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg bmv-navbar sticky-top" style={{ background: "#111212" }}>
      <div className="container-fluid px-4">

        {/* ── FAR LEFT: Logo text only ── */}
        <Link className="navbar-brand" to="/">
          <span style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: "-0.3px",
            color: "#f1f5f9",
          }}>
            Book<span style={{ color: "#f71b43" }}>My</span>Venue
          </span>
        </Link>

        {/* Toggler (mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{ filter: "invert(1)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ── RIGHT SIDE: links + buttons ── */}
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}>

          {/* Nav links */}
          <ul className="navbar-nav gap-1 me-3">
            <li className="nav-item">
              <Link
                className={`nav-link bmv-link ${isActive('/') ? 'active' : ''}`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link bmv-link ${isActive('/explore') ? 'active' : ''}`}
                to="/explore"
                onClick={() => setIsOpen(false)}
              >
                Venues
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link bmv-link ${isActive('/list-venue') ? 'active' : ''}`}
                to="/list-venue"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link bmv-link ${isActive('/about') ? 'active' : ''}`}
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link bmv-link ${isActive('/contact') ? 'active' : ''}`}
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Favorites
              </Link>
            </li>
          </ul>

          {/* Location pill */}
          <span className="bmv-location-pill me-3 d-none d-lg-flex">
            📍 Kochi, Kerala
          </span>

          {/* Buttons */}
          <div className="d-flex gap-2 mt-2 mt-lg-0">
            <Link to="/login" className="btn bmv-btn-outline" onClick={() => setIsOpen(false)}>
              Log in
            </Link>
            <Link to="/signup" className="btn bmv-btn-primary" onClick={() => setIsOpen(false)}>
              Sign up free
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;