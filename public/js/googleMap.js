function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.624795, lng: -104.893516},
    zoom: 15
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: {lat: 39.695809, lng: -104.939637},
    zoom: 15
  });
  var map3 = new google.maps.Map(document.getElementById('map3'), {
    center: {lat: 39.741855, lng: -104.988494},
    zoom: 15
  });
  var map4 = new google.maps.Map(document.getElementById('map4'), {
    center: {lat: 39.654924, lng: -104.987796},
    zoom: 15
  });
}
