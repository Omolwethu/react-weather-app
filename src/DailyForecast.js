import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DailyForecast.css";
import DailyForecastDay from "./DailyForecastDay";

export default function DailyForecast(props) {
  let [complete, setComplete] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setComplete(false);
  }, [props.coord]);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setComplete(true);
  }

  if (complete) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <DailyForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
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
