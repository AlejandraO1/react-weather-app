import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="TemperatureConversion">
        <strong class="temperature">{Math.round(props.fahrenheit)}</strong>
        <sup>
          {" "}
          °F |{" "}
          <a href="/" onClick={showCelsius} rel="noreferrer">
            °C
          </a>
        </sup>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="TemperatureConversion">
        <strong class="temperature">{Math.round(celsius)}</strong>
        <sup>
          {" "}
          <a href="/" onClick={showFahrenheit} rel="noreferrer">
            °F{" "}
          </a>
          | °C
        </sup>
      </div>
    );
  }
}
