let map;

function initMap() {
  const mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: { lat: 50.80358094898162, lng: 4.32758324093389 },
    zoom: 14,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Ma position',
        });
        map.setCenter(pos);
      }
    );
  }
}
