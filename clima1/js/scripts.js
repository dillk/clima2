const apiKey = "af4d46545f5964577150c4504fecca26";
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const countryElement = document.querySelector("#country");
const weatherContainer = document.querySelector("#weather-data");
const loader = document.querySelector("#loader");
const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const getWeatherData = async (city) => {
  toggleLoader();
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

const hideInformation = () => {
  suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  weatherContainer.classList.remove("hide");
};

suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});
