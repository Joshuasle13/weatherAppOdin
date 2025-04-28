const temp = document.getElementById("temp");
const location = document.getElementById("location");
const day = document.getElementById("day");
const weather = document.getElementById("weather");

const locationValue = (e) => {
  if (e.key === "Enter") {
    const loValue = location.value;
    getWeatherInformation(loValue);
  }
};
location.addEventListener("keypress", locationValue);

async function getWeatherInformation(loValue) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loValue}?key=J3A72KMKVKDFASZB666FVY4FG`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  temp.innerText = weatherData.days[0].temp + "º";
  day.innerText = "Date" + " " + weatherData.days[0].datetime;
  weather.innerText = weatherData.days[0].description;
}

export { getWeatherInformation, location };
