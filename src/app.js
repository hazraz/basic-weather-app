let now = new Date();

let currentDay = document.querySelector("h1.current-day");
let currentTime = document.querySelector("h3.current-time");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tues",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let time = hours;

currentDay.innerHTML = `${day}`;
currentTime.innerHTML = `${time}:${minutes}`;

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector(
    "#current-city"
  ).innerHTML = `City: ${response.data.name}`;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity;

  document.querySelector("#current-wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#current-description").innerHTML =
    response.data.weather[0].description;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");
  //let cityInput = document.querySelector("#city-input");
  //cityElement.innerHTML = `City: ${cityInput.value}`;
  let apiKey = "1de37dc30f66e70273aa13be24d80477";
  let city = document.querySelector("#city-input").value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(axios);
  axios.get(apiURL).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//let farenheitLink = document.querySelector("#fahrenheit-link");
//farenheitLink.addEventListener("click", convertToFahrenheit);

//let celciusLink = document.querySelector("#celcius-link");
//celciusLink.addEventListener("click", convertToCelcius);

// function convertToFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#current-temperature");
//let temperature = temperatureElement.innerHTML;
//temperatureElement.innerHTML = 61;
//}

// function convertToCelcius(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#current-temperature");
//let temperature = temperatureElement.innerHTML;
//temperatureElement.innerHTML = 16;
//}
