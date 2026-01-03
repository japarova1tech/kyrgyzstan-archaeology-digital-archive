// map.js
var map = L.map('map').setView([42.5, 74.5], 6); // Центр Кыргызстана

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Загружаем данные
fetch('data/sites.json')
  .then(response => response.json())
  .then(sites => {
    sites.forEach(site => {
      L.marker(site.coordinates)
        .addTo(map)
        .bindPopup(`<b>${site.name}</b><br>${site.period}<br>${site.region}`);
    });
  });
