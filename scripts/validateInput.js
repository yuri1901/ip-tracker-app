import { errorMessage, searchTrackerInput, searchTrackerBtn } from "./vars.js";
const validateIpInput = (e) => {
  const regexp = /^[0-9.]+$/gi;
  const curr = e.target.value;

  if (!regexp.test(curr) && curr !== "") {
    errorMessage.classList.add("error-message");
    searchTrackerBtn.disabled = true;
  } else {
    errorMessage.classList.remove("error-message");
    searchTrackerBtn.disabled = false;
  }
};

searchTrackerInput.addEventListener("input", validateIpInput);
searchTrackerBtn.addEventListener("click", () => {
  console.log("good");
});
