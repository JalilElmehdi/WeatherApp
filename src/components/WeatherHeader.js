import React from 'react';

const WeatherHeader = ({ onSearch, onUnitClick }) => {
  return (
    <div className="weather__header">
      <form className="weather__search" onSubmit={onSearch}>
        <input type="text" placeholder="Search for a city..." className="weather__searchform" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      <div className="weather__units">
        <span className="weather_unit_celsius" onClick={() => onUnitClick('metric')}>°C</span>
        <span className="weather_unit_farenheit" onClick={() => onUnitClick('imperial')}>°F</span>
      </div>
    </div>
  );
};

export default WeatherHeader;
