// import {
//   searchTrackerBtn,
//   searchTrackerInput,
//   ipAddressField,
//   locationField,
//   timezoneField,
//   ispField,
// } from "./vars.js";

// const fetchIpData = async () => {
//   const ipapi = `https://ipapi.co/${searchTrackerInput.value}/json/`;

//   try {
//     const response = await fetch(ipapi);
//     if (!response.ok) {
//       throw new Error("Error fetching");
//     }
//     const data = await response.json();
//     const { ip, city, country, postal, timezone, org, latitude, longitude } =
//       data;

//     renderMap(latitude, longitude);
//     updateUI(ip, city, country, postal, timezone, org);
//   } catch (error) {
//     console.log(error);
//   }
// };

// let map = null;
// const renderMap = (latitude, longitude) => {
//   if (map !== null) {
//     map.remove();
//   }
//   map = L.map("map", {
//     zoomControl: false,
//   }).setView([latitude, longitude], 15);

//   L.tileLayer(
//     "https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=RggH9KMxkJVScMskDf8JGjxgC54E662d2UBref66FozInXfB46D4W2z9iVV3AJyL",
//     {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }
//   ).addTo(map);

//   var myIcon = L.icon({
//     iconUrl: "./images/marker.svg",
//     iconSize: [46, 56],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//   });

//   L.marker([latitude, longitude], { icon: myIcon }).addTo(map);
// };

// const updateUI = (ip, city, country, postal, timezone, org) => {
//   ipAddressField.textContent = ip;
//   locationField.textContent = `${city}, ${country} ${postal}`;
//   timezoneField.textContent = timezone;
//   ispField.textContent = org;
// };

// fetchIpData();
// searchTrackerBtn.addEventListener("click", fetchIpData);
