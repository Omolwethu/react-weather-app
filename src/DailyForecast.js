import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
  let latitude = props.coord.lat;
  let longitude = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
