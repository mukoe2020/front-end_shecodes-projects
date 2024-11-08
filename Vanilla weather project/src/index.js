function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;


  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = getDay(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML= `${response.data.temperature.humidity}%`;
  temperatureElement.innerHTML = Math.round(temperature);
  windElement.innerHTML = `${response.data.wind.speed}km/hr`;
  

  
 

  console.log(response.data);
  
}

function getDay(date) {
  let mins = date.getMinutes();
  let hours = date.getHours();
  let days = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
    
  ];
  let day = days[date.getDay()];
  if (mins < 10) {
    mins = `0${mins}`;
  }

  return `${day} ${hours} :${mins}`

}


function searchCity(city) {
  let apiKey = "5d35aed7d739od4f0tcba50250e7abc6";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather)
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon")
