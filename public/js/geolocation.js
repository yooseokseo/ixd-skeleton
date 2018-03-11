
var googleURL = '';


function geoFindMe() {

  if (!navigator.geolocation){
    console.log("Geolocation is not supported by your browser");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log("latitude :" + latitude);
    console.log("longitude :" + longitude);

    





  }

  function error() {
    console.log("Unable to retrieve your location");
  }





  navigator.geolocation.getCurrentPosition(success, error);
}
