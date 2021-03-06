let geocoder;
const form = document.getElementById('localizationForm');
const addressInput = document.getElementById('addressInput');
const latitudeResult = document.getElementById('latitudeResult');
const longitudeResult = document.getElementById('longitudeResult');
const typeResult = document.getElementById('typeResult');

function initMap() {
  geocoder = new google.maps.Geocoder();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const addressText = addressInput.value;
    codeAddress(addressText);
  });
}

function codeAddress(address) {
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      const location = results[0].geometry.location;
      latitudeResult.innerText = location.lat();
      longitudeResult.innerText = location.lng();
      typeResult.innerText = JSON.stringify(results[0].types);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
