import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-weekDay"> Tue</div>
          <WeatherIcon code="04d" size={36} />
          <div className="DailyForecast-temp">
            <span className="DailyForecast-min-temp"> 14° </span> |
            <span className="DailyForecast-max-temp"> 20° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
