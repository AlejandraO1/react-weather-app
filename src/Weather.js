import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          {" "}
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />{" "}
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <p>
          <FormattedDate date={weatherData.date} />
        </p>
        <ul>
          <li>
            <img src={weatherData.icon} alt={weatherData.description} />
          </li>
          <li>
            <strong>{Math.round(weatherData.temperature)}</strong>°F
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            Humidity: {Math.round(weatherData.humidity)}%
          </div>
          <div className="col-6">Wind: {Math.round(weatherData.wind)}km/h </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0d38oda45d824a5t0254fbaff5f740bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
