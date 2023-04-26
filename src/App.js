import "./App.css";
import React, { useState } from "react";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCountryData(null);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/country/${country}`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // TODO: Render country information to user
      setIsLoading(false);
      setCountryData(data);
    } catch (error) {
      // TODO: Render error message to user
      setIsLoading(false);
      setErrorMessage("Unable to fetch country information");
      console.log(errorMessage);
    }
  };

  return (
    <div className="App">
      <div class="title">Country Info</div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter A Country:
          <input
            type="text"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {isLoading && <div>Loading...</div>}
      {/* {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
      <p style={{ color: "red" }}>{errorMessage}</p>
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
