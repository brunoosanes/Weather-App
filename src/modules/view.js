import sunny from "../assets/sunny.svg";

const infoContainer = document.querySelector(".infoContainer");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search");
const conditionIcon = document.querySelector(".condition-icon");

const DOM = { infoContainer, searchBtn };

function displayData(data) {
  // resets the container info:
  infoContainer.innerHTML = "";

  // iterate through each key:value pairm create a div for each of them, populate text and add classes
  Object.keys(data).forEach((info) => {
    const div = document.createElement("div");
    div.classList.add(`${info}`);
    div.classList.add("info");
    const formatedInfo = formatWord(info);
    const spanKey = document.createElement("span");
    spanKey.classList.add("key");
    spanKey.textContent = `${formatedInfo}: `;
    const spanValue = document.createElement("span");
    spanValue.classList.add("value");
    spanValue.textContent = `${data[info]}`;
    div.appendChild(spanKey);
    div.appendChild(spanValue);
    console.log(div);
    infoContainer.appendChild(div);
  });

  displayIcons();
}

function getSearchCity() {
  if (searchInput.value === "") return;
  return searchInput.value;
}

function formatWord(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1);
  word = word.split("_").join(" ");
  console.log(word);
  return word;
}

const displayIcons = function () {
  conditionIcon.textContent = "";
  const condition = document.querySelector(".condition > .value").textContent;
  const img = document.createElement("img");

  img.src = `assets/Sunny.svg`;

  if (condition === "Sunny") {
    img.src = `assets/Sunny.svg`;
  }
  if (condition === "Cloudy" || condition === "Fog") {
    img.src = `assets/Cloudy.svg`;
  }
  if (condition === "Raining" || condition === "Light rain") {
    img.src = `assets/Rainy.svg`;
  }
  console.log(condition === "Light rain");
  conditionIcon.appendChild(img);
};
/* 
const testBtn = document.querySelector(".testBtn");
testBtn.addEventListener("click", displayIcons);
 */
export { DOM, displayData, getSearchCity };
