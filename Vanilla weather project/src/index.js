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
  

  
 getforecast(response.data.city)

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

function getforecast(city) {
  let apiKey = "5d35aed7d739od4f0tcba50250e7abc6";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForeCast)
}

function displayForeCast(response) {
  console.log(response.data);

  let days = ["Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  let forecastHTML = '<div class="weather-forecast">';

  days.forEach(function (day) {
    forecastHTML += `
      <div class="weather-forecast-item">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌨</div>
        <div class="weather-forecast-temps">
          <div class="weather-forecast-temp"><strong>12°c</strong></div>
          <div class="weather-forecast-temp"><strong>6°c</strong></div>
        </div>
      </div>
    `;
  });

  forecastHTML += "</div>"; // Close the weather-forecast div
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
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

searchCity("Lisbon");




