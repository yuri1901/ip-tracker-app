let map = null;

const renderMap = ({ latitude, longitude }) => {
  if (map) {
    map.remove();
  }
  map = L.map("map", {
    zoomControl: false,
  }).setView([latitude, longitude], 15);

  L.tileLayer(
    "https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=RggH9KMxkJVScMskDf8JGjxgC54E662d2UBref66FozInXfB46D4W2z9iVV3AJyL",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }
  ).addTo(map);

  const myIcon = L.icon({
    iconUrl: "./images/marker.svg",
    iconSize: [46, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  L.marker([latitude, longitude], { icon: myIcon }).addTo(map);
};
const clearMap = () => {
  if (map) {
    map.remove();
    map = null;
  }
};
export { clearMap, renderMap };
