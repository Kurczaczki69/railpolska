// file containing all the code related to the map (using leaflet.js)

let map = L.map("map", {
  center: [51.9194, 19.1451], // center on Poland
  zoom: 7, // zoom level
  maxBounds: [
    [47.29, 10.547], // southwest corner
    [57.062, 28.114], // northeast corner
  ],
  maxBoundsViscosity: 1.0, // prevent panning outside the bounds
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 6,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
