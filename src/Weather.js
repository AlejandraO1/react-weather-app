import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        {" "}
        <div className="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />{" "}
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York City</h1>
      <ul>
        <li>Wednesday 01:35</li>
      </ul>
      <div className="row">
        <div className="col-6">image here 23°F Mostly Cloudly</div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15% </li>
            <li> Humidity: 5%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
