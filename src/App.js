import "./App.css";
import React, { useState } from "react";

function App() {
  const [country, setCountry] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/country/${country}`
      );
      const data = await response.json();
      console.log(data); // TODO: Render country information to user
    } catch (error) {
      console.error(error);
      // TODO: Render error message to user
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
    </div>
  );
}

export default App;
