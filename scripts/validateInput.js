import { errorMessage, searchTrackerInput, searchTrackerBtn } from "./vars.js";
const validateIpInput = (e) => {
  const regexp =
    /^(?:(?:\d{1,3}\.){3}\d{1,3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
  const curr = e.target.value.trim();

  if (!regexp.test(curr) && curr !== "") {
    errorMessage.classList.add("error-message");
    searchTrackerBtn.disabled = true;
  } else {
    errorMessage.classList.remove("error-message");
    searchTrackerBtn.disabled = false;
  }
};

searchTrackerInput.addEventListener("input", validateIpInput);
