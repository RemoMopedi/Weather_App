const cityDataUrl = "cities.json";
let cityData;

fetch(cityDataUrl)
  .then((response) => response.json())
  .then((data) => {
    cityData = data;
  })
  .catch((error) => console.error("Error fetching city data:", error));

function displayWeather(city) {
  const weatherDisplay = document.getElementById("weatherDisplay");
  const cityName = document.getElementById("cityName");
  const weather = document.getElementById("weather");
  const attractions = document.getElementById("attractions");

  if (cityData[city]) {
    cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1);
    weather.textContent = cityData[city].weather;
    attractions.innerHTML = cityData[city].attractions
      .map((attraction) => `<li>${attraction}</li>`)
      .join("");
    weatherDisplay.classList.remove("hidden");
  } else {
    cityName.textContent = "City not found";
    weatherDisplay.classList.remove("hidden");
  }
}

document.getElementById("getWeather").addEventListener("click", () => {
  const cityInput = document.getElementById("city").value.trim().toLowerCase();
  displayWeather(cityInput);
});
