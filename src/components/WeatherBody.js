import React from 'react';

const WeatherBody = ({ city, datetime, forecast, temperature, minMax }) => {
  return (
    <div className="weather__body">
      <h1 className="weather__city">{city}</h1>
      <div className="weather__datetime">{datetime}</div>
      <div className="weather__forecast" dangerouslySetInnerHTML={{ __html: forecast }}></div>
      {forecast==="Clouds"?
      <div><img src={require(`../cloud.png`)} width="50px" style={{marginTop:"10px"}} alt='cloud'/></div>:
      <div><img src={require(`../clear.png`)} width="50px" style={{marginTop:"10px"}} alt='clear'/></div>}
      <p className="weather__temperature" dangerouslySetInnerHTML={{ __html: temperature }}></p>
      <div className="weather__minmax" dangerouslySetInnerHTML={{ __html: minMax }}></div>
    </div>
  );
};

export default WeatherBody;
