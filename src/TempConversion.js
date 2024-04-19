import React, { useState } from "react";
import "./Weather.css";

export default function TempConversion(props) {
  const [units, setUnits] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnits("Celsius");
  }

  if (units === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{""}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}