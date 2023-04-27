import "./App.css";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  Image,
  Text,
  Tooltip,
  Row,
  Col,
  Spacer,
  Button,
  Input,
} from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";

import InfoComponent from "./components/InfoComponent.js";
import MapComponent from "./components/MapComponent.js";

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [tab, setTab] = useState("Info");

  function ShowTab() {
    if (tab === "Info") {
      return (
        <InfoComponent
          countryData={countryData}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      );
    } else if (tab === "Map") {
      return (
        <MapComponent
          countryData={countryData}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      );
    }
  }

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
    <Grid.Container gap={2} justify="center">
      <Grid>
        <Image src="/CountryInfo.png" height={400} />
      </Grid>
      <Grid xs={10}>
        <Container>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Type a country name..."
              fullWidth
              size="xl"
              contentRightStyling={false}
              labelRight={
                <Button
                  size="xs"
                  type="submit"
                  css={{ backgroundColor: "#e6e8eb" }}
                >
                  <AiOutlineSearch color="#248277" size={20}></AiOutlineSearch>
                </Button>
              }
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </form>
        </Container>
      </Grid>
      <Grid xs={10}>
        <Card
          css={{
            $$cardColor: "#88D4AB",
          }}
        >
          <Card.Header>
            {countryData && (
              <div>
                {Object.entries(countryData).map(([key, value]) => (
                  <div key={key}>
                    {key === "flags" && <Image src={value.png} width="100%" />}

                    {key === "name" && (
                      <Tooltip content={""}>
                        <Text h1>{value.common}</Text>
                      </Tooltip>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Row>
              <Col>
                <Button color="56AB91" onClick={() => setTab("Info")}>
                  Info
                </Button>
              </Col>
              <Col>
                <Button color="56AB91" onClick={() => setTab("Map")}>
                  Map
                </Button>
              </Col>
            </Row>

            <Spacer y={1} />
            {isLoading && <Text>Loading...</Text>}
            <Text style={{ color: "red" }}>{errorMessage}</Text>
            <ShowTab tab />
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            {countryData && (
              <a
                href={
                  "https://en.wikipedia.org/wiki/" + countryData.name.common
                }
              >
                <Button color="248277">Learn more</Button>
              </a>
            )}
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default App;
