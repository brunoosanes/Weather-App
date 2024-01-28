import { getCityData } from "./modules/weatherAPI";
import * as view from "./modules/view.js";
import "./index.css";

async function getData() {
  const cityData = await getCityData(view.getSearchCity());
  view.displayData(cityData);
}

function handleClick(e) {
  e.preventDefault();
  getData();
}

// EVENT LISTENERS
view.DOM.searchBtn.addEventListener("click", handleClick);

getData();
