import "./styles.css";

export type CardWeatherProps = {
  name?: string;
  temp?: number;
  humidity?: number;
  visibility?: number;
  pressure?: number;
  windSpeed?: number;
  iconType?: string;
};

function CardWeather({
  name,
  temp,
  humidity,
  visibility,
  pressure,
  windSpeed,
  iconType,
}: CardWeatherProps) {
  const celciusTemp = temp ? Math.round(temp - 273.15) : null;

  return (
    <div className="card-weather">
      <div className="location">
        <span>{name}</span>
        <img src="/src/assets/pin.svg" alt="Pin de localização" />
      </div>

      <div>
        <div className="temperature">
          <img
            src="/src/assets/thermometer.svg"
            alt="Termômetro"
            className="thermometer"
          />
          <span>{celciusTemp}°C</span>
          {iconType === "clear sky" && (
            <img src="/src/assets/sun.svg" alt="Nublado" className="icon" />
          )}
          {iconType === "few clouds" && (
            <img
              src="/src/assets/cloud-sun.svg"
              alt="Poucas nuvens"
              className="icon"
            />
          )}
          {iconType === "broken clouds" ||
            (iconType === "scattered clouds" && (
              <img
                src="/src/assets/clouds.svg"
                alt="Nuvens quebradas"
                className="icon"
              />
            ))}
          {iconType === "shower rain" ||
            (iconType === "rain" && (
              <img
                src="/src/assets/cloud-rain.svg"
                alt="Chuva"
                className="icon"
              />
            ))}
          {iconType === "thunderstorm" && (
            <img
              src="/src/assets/cloud-lighting-rain.svg"
              alt="Trovoada"
              className="icon"
            />
          )}
          {iconType === "snow" && (
            <img src="/src/assets/cloud-snow.svg" alt="Neve" className="icon" />
          )}
        </div>
      </div>

      <div className="weather-info">
        <div className="weather-info-item">
          <span>Humidade</span>
          <span>{humidity}%</span>
        </div>
        <div className="weather-info-item">
          <span>Visibilidade</span>
          <span>{visibility ? `${visibility / 1000} km` : "N/A"}</span>
        </div>
        <div className="weather-info-item">
          <span>Pressão do Ar</span>
          <span>{pressure} hPa</span>
        </div>
        <div className="weather-info-item">
          <span>Vento</span>
          <span>{windSpeed ? `${windSpeed} km/h` : "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default CardWeather;
