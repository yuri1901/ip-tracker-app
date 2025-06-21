const searchTrackerBtn = document.querySelector("button[type='button']");
const searchTrackerInput = document.querySelector("input[type='text']");
const errorMessage = document.querySelector(".form > span");

const ipAddressField = document.querySelector(".address > p");
const locationField = document.querySelector(".location > p");
const timezoneField = document.querySelector(".timezone > p");
const ispField = document.querySelector(".isp > p");

const loader = document.querySelector(".loader-inner");

const showLoader = () => {
  loader.style.display = "flex";
};
const hideLoader = () => {
  loader.style.display = "none";
};

export {
  errorMessage,
  searchTrackerBtn,
  searchTrackerInput,
  ipAddressField,
  locationField,
  timezoneField,
  ispField,
  loader,
  showLoader,
  hideLoader,
};
