const api_key = "970a28cd976a285f58ff695298d0131a";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".city");
const temperatureInfo = document.querySelector(".temperature");
const cityHumidity = document.querySelector(".humidity");
const cityWind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");
const errMessage = document.querySelector(".error");

async function checkWeather(city) {
  const response = await fetch(api_url + city + `&appid=${api_key}`);

  if (response.status === 404) {
    errMessage.style.display = "block";
    weatherBox.style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    cityName.innerHTML = data.name;
    temperatureInfo.innerHTML = Math.round(data.main.temp) + `°C`;
    cityHumidity.innerHTML = data.main.humidity + `%`;
    cityWind.innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    errMessage.style.display = "none"
    weatherBox.style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
