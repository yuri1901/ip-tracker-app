import {
  ipAddressField,
  locationField,
  timezoneField,
  ispField,
} from "./vars.js";

import { clearMap } from "./map.js";
const updateUI = ({ ip, city, country, postal, timezone, org }) => {
  ipAddressField.textContent = ip;
  locationField.textContent = `${city}, ${country} ${postal}`;
  timezoneField.textContent = timezone;
  ispField.textContent = org;
};
const errorUI = () => {
  ipAddressField.textContent = "-";
  locationField.textContent = "-";
  timezoneField.textContent = "-";
  ispField.textContent = "-";
  clearMap();
};

export { updateUI, errorUI };
