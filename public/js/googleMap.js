function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  var map3 = new google.maps.Map(document.getElementById('map3'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  var map4 = new google.maps.Map(document.getElementById('map4'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
