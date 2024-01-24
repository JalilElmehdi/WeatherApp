import React, { useState, useEffect } from 'react';
import WeatherHeader from './components/WeatherHeader';
import WeatherBody from './components/WeatherBody';
import WeatherInfo from './components/WeatherInfo';
import './App.css';
import Rating from './components/rating';
import Footer from './components/footer';


function App() {
  // State
  const [currCity, setCurrCity] = useState("Casablanca");
  const [units, setUnits] = useState("metric");

  const [weatherData, setWeatherData] = useState({
    city: '',
    datetime: '',
    forecast: '',
    temperature: '',
    icon: '',
    minMax: '',
    realFeel: '',
    humidity: '',
    wind: '',
    pressure: '',
  });

  const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5';

  useEffect(() => {
    getWeather();
  }, [currCity, units]);

  const getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`)
      .then(res => res.json())
      .then(data => {
        setWeatherData({
          city: `${data.name}, ${convertCountryCode(data.sys.country)}`,
          datetime: convertTimeStamp(data.dt, data.timezone),
          forecast: `${data.weather[0].main}`,
          temperature: `${data.main.temp.toFixed()}&#176`,
          minMax: `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`,
          realFeel: `${data.main.feels_like.toFixed()}&#176`,
          humidity: `${data.main.humidity}%`,
          wind: `${data.wind.speed} ${units === "imperial" ? "mph" : "m/s"}`,
          pressure: `${data.main.pressure} hPa`,
        });
      });
  };

  const convertTimeStamp = (timestamp, timezone) => {
    const convertTimezone = timezone / 3600; 
    const date = new Date(timestamp * 1000);

    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  };

  const convertCountryCode = country => {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(country);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let search = document.querySelector(".weather__searchform");
    setCurrCity(search.value);
    search.value = "";
  };

  const handleUnitClick = (unit) => {
    if (units !== unit) {
      setUnits(unit);
    }
  };

  return (
    
    <>
    <div className="container">
      <WeatherHeader onSearch={handleSearch} onUnitClick={handleUnitClick} />
      <WeatherBody {...weatherData} />
      <WeatherInfo {...weatherData} />
      
    </div>
    <Rating /><br></br>
    <Footer />
    </>
    
  );
}

export default App;
