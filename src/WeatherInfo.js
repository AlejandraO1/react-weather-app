import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <ul>
        <li>
          <img src={props.data.icon} alt={props.data.description} />
        </li>
        <li>
          <strong>{Math.round(props.data.temperature)}</strong>°F
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          Humidity: {Math.round(props.data.humidity)}%
        </div>
        <div className="col-6">Wind: {Math.round(props.data.wind)}km/h </div>
      </div>
    </div>
  );
}
