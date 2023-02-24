import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import TemperatureConversion from "./TemperatureConversion.js";

export default function WeatherInfo(props) {
  return (
    <div className="displayWeather">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <ul>
        <li>
          <WeatherIcon code={props.data.icon} />
        </li>
        <li>
          <TemperatureConversion fahrenheit={props.data.temperature} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          Humidity: {Math.round(props.data.humidity)}%
        </div>
        <div className="col-6">Wind: {Math.round(props.data.wind)} km/h </div>
      </div>
    </div>
  );
}
