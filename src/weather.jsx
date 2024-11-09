import React, { useState } from "react";
import axios from "axios";
import './App.css';

const API_KEY = "PLACE FOR YOUR API KEY"; 

const Weather = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (city === "") return;
    setError("");

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setTemperature(response.data.main.temp);
      setWeatherStatus(response.data.weather[0].main.toLowerCase());
    } catch (err) {
      setError("CITY NOT FOUND OR INVALID API KEY.");
      setTemperature(null);
      setWeatherStatus("default");
    }
  };

  return (
    <div className="weather-app">
       {weatherStatus && (
        <video
          className="background-video"
          src={`/videos/${weatherStatus}.mp4`}
          autoPlay
          loop
          muted
        />
      )}

    <h1>WEATHER VIEW</h1>
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value.toUpperCase())}
      />
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
      {error && <p className="error">{error}</p>}
      {temperature !== null && weatherStatus && (
        <div className="temp-status">
          <span className="temp-value">{temperature}°C</span>
          <span className="status-value">{weatherStatus.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default Weather;
