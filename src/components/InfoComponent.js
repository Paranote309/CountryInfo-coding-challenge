import React, { useState } from "react";
import { Text } from "@nextui-org/react";

export default function InfoComponent({ countryData }) {
  return (
    <>
      {countryData && (
        <div>
          {Object.entries(countryData).map(([key, value]) => (
            <div key={key}>
              {/* <Text>{JSON.stringify(value)}</Text> */}
              {key === "capital" && <Text>Capital: {value[0]}</Text>}
              {key === "region" && <Text>Region: {value}</Text>}
              {key === "population" && <Text> Population: {value}</Text>}
              {key === "timezones" && <Text>Timezone: {value[0]}</Text>}
              {key === "currencies" && (
                <Text>Currency: {value[Object.keys(value)[0]].name}</Text>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
