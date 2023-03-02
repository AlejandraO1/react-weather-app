import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast";
import { ColorRing } from "react-loader-spinner";

import "./Weather.css";
import "./backgroundImages.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [backgroundWeather, setBackground] = useState("");

  function changeBackground(icon) {
    if (icon === "clear-sky-day") {
      setBackground("day-clear");
    } else if (icon === "clear-sky-night") {
      setBackground("night-clear");
    } else if (icon === "few-clouds-day") {
      setBackground("day-clouds");
    } else if (icon === "few-clouds-night") {
      setBackground("night-clouds");
    } else if (
      icon === "scattered-clouds-day" ||
      icon === "broken-clouds-day"
    ) {
      setBackground("cloudy-day");
    } else if (
      icon === "scattered-clouds-night" ||
      icon === "broken-clouds-night"
    ) {
      setBackground("cloudy-night");
    } else if (
      icon === "shower-rain-day" ||
      icon === "shower-rain-night" ||
      icon === "rain-day" ||
      icon === "rain-night"
    ) {
      setBackground("rainy");
    } else if (icon === "thunderstorm-day" || icon === "thunderstorm-night") {
      setBackground("thunder");
    } else if (icon === "snow-day" || icon === "snow-night") {
      setBackground("snow");
    } else if (icon === "mist-day" || icon === "mist-night") {
      setBackground("misty");
    }
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
    changeBackground(response.data.condition.icon);
  }

  function search() {
    const apiKey = "0d38oda45d824a5t0254fbaff5f740bd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          {" "}
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />{" "}
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>{" "}
        <div className={backgroundWeather}>
          <WeatherInfo data={weatherData} />
        </div>
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loading">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#c19898", "#c19898", "#c19898", "#c19898", "#c19898"]}
        />
      </div>
    );
  }
}
