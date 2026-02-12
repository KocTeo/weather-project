import { useState } from "react";
import "./styles.css";

type SearchInputProps = {
  fetchWeather: (city: string) => void;
};

function SearchInput({ fetchWeather }: SearchInputProps) {
  const [city, setCity] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === "Enter" && fetchWeather(city);
  };

  return (
    <div className="search-input">
      <img
        src="/src/assets/search-icon.svg"
        alt="Icone de lupa"
        onClick={() => fetchWeather(city)}
      />
      <input
        type="text"
        placeholder="Pesquisar cidade"
        value={city}
        onChange={({ target }) => setCity(target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchInput;
