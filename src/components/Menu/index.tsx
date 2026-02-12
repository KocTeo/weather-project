import { useState } from "react";
import "./styles.css";

function Menu() {
  const [selected, setSelected] = useState("Hoje");

  return (
    <div className="menu">
      <div className="menu-title">
        <img src="/src/assets/cloud-sun.svg" alt="clouds with sun" />
        <h1>WeatherMe</h1>
      </div>

      <ul className="menu-links">
        <li>
          {selected === "Hoje" && (
            <div className="menu-link selected">Hoje</div>
          )}
          {selected !== "Hoje" && (
            <div className="menu-link" onClick={() => setSelected("Hoje")}>
              Hoje
            </div>
          )}
        </li>
        <li>
          {selected === "Outro" && (
            <div className="menu-link selected">Outro</div>
          )}
          {selected !== "Outro" && (
            <div className="menu-link" onClick={() => setSelected("Outro")}>
              Outro
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
