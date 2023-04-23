const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/country/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const country = response.data[0];
    res.status(200).json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json("Error fetching country");
  }
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
