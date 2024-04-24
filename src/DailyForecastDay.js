import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-weekDay"> {day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="DailyForecast-temp">
        <span className="DailyForecast-min-temp">{minTemp()} </span> |
        <span className="DailyForecast-max-temp">{maxTemp()} </span>
      </div>
    </div>
  );
}
