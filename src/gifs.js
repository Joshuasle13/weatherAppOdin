import { location } from "./weather";

const locationValue = (e) => {
  if (e.key === "Enter") {
    const loValue = location.value;
    backImage(loValue);
  }
};
location.addEventListener("keypress", locationValue);

async function backImage(loValue) {
  const weatherResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loValue}?key=J3A72KMKVKDFASZB666FVY4FG`,
    { mode: "cors" }
  );
  const weatherData = await weatherResponse.json();
  console.log(weatherData);

  const condition = weatherData.currentConditions.conditions;

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=CiiW9uaodqrYWHSebm6fu3b1tTO0s7Oz&s=${condition} weather`,
    { mode: "cors" }
  );

  const getBackground = await response.json();
  const body = document.body;
  const image = getBackground.data.images.original.url;
  console.log(image);
  body.style.backgroundImage = `url(${image})`;
}

export { backImage };
