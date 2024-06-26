import React, { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import WeatherData from "./WeatherData";
import DailyForecast from "./DailyForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ input: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherInfo({
      input: true,
      coord: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.input) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weatherInfo} />
        <DailyForecast coord={weatherInfo.coord} />
      </div>
    );
  } else {
    search();

    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#c9356c"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
