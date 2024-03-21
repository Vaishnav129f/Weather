// Replace with your API key
const apiKey = "9bd1ce5a694126f91aeb7268bac1d1ad";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  }
});

function getWeatherData(city) {
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching weather data");
      }
      return response.json();
    })
    .then((data) => {
      displayWeatherData(data);
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching weather data");
    });
}

function displayWeatherData(data) {
  const { name, main, wind } = data;
  cityName.textContent = name;
  temperature.textContent = main.temp.toFixed(1);
  humidity.textContent = main.humidity;
  windSpeed.textContent = wind.speed.toFixed(1);
}
