import { renderMap } from "./map.js";
import { updateUI, errorUI } from "./updateUI.js";
import {
  searchTrackerBtn,
  searchTrackerInput,
  showLoader,
  hideLoader,
} from "./vars.js";

const fetchIpData = async () => {
  const ipapi = `https://ipapi.co/${searchTrackerInput.value}/json/`;
  showLoader();
  try {
    const response = await fetch(ipapi);
    if (!response.ok) {
      throw new Error(
        "Failed to fetch data for the IP. Please try another request."
      );
    }

    const data = await response.json();
    if (data.error || !data.ip) {
      throw new Error("Invalid or unknown IP address.");
    }

    updateUI(data);
    renderMap(data);
  } catch (error) {
    errorUI();
  } finally {
    hideLoader();
  }
};

fetchIpData();
searchTrackerBtn.addEventListener("click", fetchIpData);
