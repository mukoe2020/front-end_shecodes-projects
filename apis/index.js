let apiKey = `5d35aed7d739od4f0tcba50250e7abc6`;
let city = `Sydney`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector('#temp')
  let temperature = Math.round (response.data.temperature.current);
  temperatureElement.innerHTML = `it is ${temperature}°C in ${city}` 
}
axios.get(apiUrl).then(displayTemperature)