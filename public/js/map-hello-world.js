let map;

function initMap() {
  const mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: { lat: 50.80358094898162, lng: 4.32758324093389 },
    zoom: 15,
  });
}
