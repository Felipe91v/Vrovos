function tmenu(){
    
    let divMenuActive = document.querySelector("#menu");
    divMenuActive.classList.toggle('menu-active');

}

var map = L.map('map').setView([-23.545130556942063, -46.88438562869136], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-23.545130556942063, -46.88438562869136]).addTo(map);

var circle = L.circle([-23.545105, -46.884544], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 20
}).addTo(map);

