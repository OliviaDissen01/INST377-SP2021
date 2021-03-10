let restaurantList = []
const searchInput = document.querySelector('.search');
// eslint-disable-next-line no-use-before-define
searchInput.addEventListener('change', displayMatches);
// eslint-disable-next-line no-use-before-define
searchInput.addEventListener('keyup', displayMatches);

function mapInit() {
  const mymap = L.map('mapid').setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);

  return map;
}

async function dataHandler(mapObjectFromFunction) {
  const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const json = await data.json();
  restaurantList = json
}
window.onload = getData

// here we need to figure out if the restaurant matches what was searched
function findMatches(word) {
  // eslint-disable-next-line arrow-parens
  return restaurantList.filter(restaurant => restaurant.name.toLowerCase().indexOf(word) > -1);
}

function displayMatches() {
  const matchArray = findMatches(searchInput.value);
  // eslint-disable-next-line arrow-parens
  document.querySelector('.suggestions').innerHTML = matchArray.map(restaurant => `<li class="">
            <div class="name">${restaurant.name}</div>
            <div class="text">${restaurant.category}</div>
            <div class="text italic">${restaurant.address_line_1}</div>
            <div class="text italic">${restaurant.city}</div>
            <div class="text italic">${restaurant.zip}</div>
          </li>`).join('');
}
async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;