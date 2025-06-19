const searchTrackerBtn = document.querySelector("button[type='button']");
const searchTrackerInput = document.querySelector("input[type='text']");

const address = document.querySelector(".address > p");
const loc = document.querySelector(".location > p");
const tmz = document.querySelector(".timezone > p");
const isp = document.querySelector(".isp > p");

const fetchIpData = async () => {
  const ipapi = `https://ipapi.co/${searchTrackerInput.value}/json/`;

  try {
    const response = await fetch(ipapi);
    if (!response.ok) {
      throw new Error("Error fetching");
    }

    const data = await response.json();
    const { ip, city, country, postal, timezone, org, latitude, longitude } =
      data;

    var map = L.map("map").setView([latitude, longitude], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    address.textContent = ip;
    loc.textContent = `${city}, ${country} ${postal}`;
    tmz.textContent = timezone;
    isp.textContent = org;
  } catch (error) {
    console.log(error);
  }
};

// fetchIpData();
searchTrackerBtn.addEventListener("click", fetchIpData);
