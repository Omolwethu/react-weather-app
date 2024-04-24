import React, { useState } from "react";
import axios from "axios";
import "./DailyForecast.css";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecast(props) {
  let [complete, setComplete] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setComplete(true);
  }

  if (complete) {
    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col">
            <DailyForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Please wait...";
  }
}
