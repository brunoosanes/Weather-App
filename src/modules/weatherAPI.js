async function getCityData(cityName) {
  cityName = cityName || "New York";
  cityName = cityName.trim().replace(/\s+/g, "+");
  const searchURL = `http://api.weatherapi.com/v1/current.json?key=c49d88a8ac7d46a68b0214512242401&q=${cityName}`;
  const data = await fetch(searchURL, { mode: "cors" });
  const parsedData = await data.json();
  console.log(parsedData);
  const {
    location: { name: city, region, country },
    current: {
      condition: { text: condition },
      feelslike_c,
      feelslike_f,
      humidity,
      temp_c,
      temp_f,
      wind_kph,
      wind_mph,
    },
  } = parsedData;

  return {
    condition,
    city,
    region,
    country,
    feelslike_c,
    feelslike_f,
    humidity,
    temp_c,
    temp_f,
    wind_kph,
    wind_mph,
  };
}

export { getCityData };
