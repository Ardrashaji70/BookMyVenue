import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch({ query, location, category, date });
  };

  return (
    <div className="sb-wrapper">

      {/* Main bar */}
      <div className="sb-container">
        <div className="sb-field">
          <label>🔍 What</label>
          <input
            type="text"
            placeholder="Birthday hall, cafe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="sb-divider" />

        <div className="sb-field">
          <label>📍 Where</label>
          <input
            type="text"
            placeholder="Kochi, Trivandrum..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="sb-divider" />

        <div className="sb-field">
          <label>🏷️ Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All venues</option>
            <option value="birthday">🎂 Birthday Hall</option>
            <option value="cafe">☕ Cafe</option>
            <option value="hotel">🏨 Hotel</option>
            <option value="resort">🌴 Resort</option>
            <option value="auditorium">🎭 Auditorium</option>
            <option value="meetup">🤝 Meetup Space</option>
          </select>
        </div>

        <div className="sb-divider" />

        <div className="sb-field">
          <label>📅 When</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <button className="sb-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Quick chips */}
      <div className="sb-chips">
        {['🎂 Birthday Hall','☕ Cafe','🏨 Hotel','🌴 Resort','🎭 Auditorium','🤝 Meetup'].map((cat) => (
          <span
            key={cat}
            className="sb-chip"
            onClick={() => setCategory(cat.toLowerCase())}
          >
            {cat}
          </span>
        ))}
      </div>

    </div>
  );
}

export default SearchBar;