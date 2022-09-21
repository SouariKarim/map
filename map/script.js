// const root = document.getElementById('root');
var map = L.map('map').setView([34.431141, 8.775656], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
var pulsingIcon = L.icon.pulse({ iconSize: [20, 20], color: 'red' });
var marker = L.marker([34.4, 8.77], { icon: pulsingIcon }).addTo(map);
