import React from 'react';
const WeatherInfo = ({ realFeel, humidity, wind, pressure }) => {
  return (
    <div className="weather__info">
      <div className="weather__card">
      
      <i className="fas fa-temperature-low"></i>
        <div>
        
          <p>Real Feel</p>
          <p className="weather__realfeel" dangerouslySetInnerHTML={{ __html: realFeel }}></p>
        </div>
      </div>
      <div className="weather__card">
      
      <i className="fas fa-tint"></i>
        <div>
          <p>Humidity</p>
          <p className="weather__humidity">{humidity}</p>
        </div>
      </div>
      <div className="weather__card">
      <i className="fas fa-wind"></i>
        <div>
          <p>Wind</p>
          <p className="weather__wind">{wind}</p>
        </div>
      </div>
      <div className="weather__card">
      <i className="fas fa-stopwatch"></i>

        <div>
          <p>Pressure</p>
          <p className="weather__pressure">{pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
