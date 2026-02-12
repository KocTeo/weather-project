import { useState } from "react";
import "./App.css";
import CardWeather, { type CardWeatherProps } from "./components/CardWeather";
import Menu from "./components/Menu";
import SearchInput from "./components/SerachInput";

function App() {
  const API_KEY = "4be2e5e7ec6168b969c827d44aaf9151";

  const [weather, setWeather] = useState<CardWeatherProps | null>(null);

  const fetchWeather = async (city: string) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    );

    const data = await response.json();

    const weatherData: CardWeatherProps = {
      name: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      visibility: data.visibility,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      iconType: data.weather[0].description,
    };

    console.log(data.weather[0].description);

    setWeather(weatherData);
  };

  return (
    <div className="App">
      <Menu />
      <SearchInput fetchWeather={fetchWeather} />
      <CardWeather {...weather} />
    </div>
  );
}

export default App;
