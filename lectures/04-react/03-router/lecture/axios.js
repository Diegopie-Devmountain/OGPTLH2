import axios  from"axios";

const apiKey = "d203ab0e9d06e58c82c3b764c42b7aa7";

axios
  .get(
    `http://api.openweathermap.org/geo/1.0/direct?q=Salt Lake City&appid=${apiKey}`,
  )
  .then(({ data }) => {
    console.log(data[0].lat);
    const city = { lat: data[0].lat, lon: data[0].lon };

    const apiString = `api.openweathermap.org/data/2.5/forecast?lon=${city.lon}&lat=${city.lat}&appid=${apiKey}`;

    console.log(apiString);

    axios.get(apiString).then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    })
  });
