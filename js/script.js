let h2 = document.querySelector("h2");
var map;

function sucess(pos) {
  console.log(pos.coords.latitude, pos.coords.longitude);
  h2.textContent = `Latitude: ${pos.coords.latitude} e
   Longitude: ${pos.coords.longitude}`;

  if (map === undefined) {
    map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 13);
  } else {
    map.remove();
    map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 13);
  }

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([pos.coords.latitude, pos.coords.longitude])
    .addTo(map)
    .bindPopup("Você está aqui!")
    .openPopup();
}

function error(err) {
  console.log(err);
}

navigator.geolocation.watchPosition(sucess, error, {
  enableHighAccuracy: true,
  timeout: 6000,
});
