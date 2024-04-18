import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was created by{" "}
          <a
            href="https://heartfelt-gumdrop-809c5e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Olwethu Zulu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Omolwethu/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
