import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York City</h1>
      <p>Wednesday 01:35</p>
      <ul>
        <li>image here</li>
        <li>
          <strong>23</strong>°F
        </li>
        <li>Mostly Cloudly</li>
      </ul>
      <div className="row">
        <div className="col-4">Precipitation: 15% </div>
        <div className="col-4">Humidity: 5% </div>
        <div className="col-4">Wind: 13 km/h </div>
      </div>
    </div>
  );
}
