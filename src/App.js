import "./App.css";
import React, { useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCountryData(null);
    setError(null);
    try {
      const response = await fetch(
        `http://localhost:5000/api/country/${country}`
      );
      const data = await response.json();
      console.log(data); // TODO: Render country information to user
      setIsLoading(false);
      setCountryData(data);
    } catch (error) {
      console.error(error);
      // TODO: Render error message to user
      setIsLoading(false);
      setError("Unable to fetch country information");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a country:
          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {countryData && (
        <div>
          {/* <h2>{countryData.name}</h2>
          <img src={countryData.flag} alt={`Flag of ${countryData.name}`} />
          <p>Capital: {countryData.capital}</p>
          <p>Population: {countryData.population}</p>*/}

          {Object.entries(countryData).map(([key, value]) => (
            <div key={key}>
              {/* <p>{JSON.stringify(value)}</p> */}
              {key === "name" && <p>Name: {value.common}</p>}
              {key === "capital" && <p>Capital: {value[0]}</p>}
              {key === "region" && <p>Region: {value}</p>}
              {key === "population" && <p>Population: {value}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
