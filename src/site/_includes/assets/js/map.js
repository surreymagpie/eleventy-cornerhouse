// Display leaflet map
var mymap = L.map('map').setView([51.428287, -0.452663], 15);

let tiles = L.tileLayer('https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=mx8gUDCG2YeqTMvVLgNO', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 18,
    zoomOffset: -1,
    tileSize: 512
}).addTo(mymap);

var marker = L.marker([51.428287, -0.452663]).addTo(mymap);

marker.bindPopup("<strong>Cornerhouse Dental Practice</strong>").openPopup();