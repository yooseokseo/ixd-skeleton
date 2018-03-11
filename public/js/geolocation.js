
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
/*
    $.ajax({
      type: 'GET',
      url: "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=32.8704319,-117.2187208&destinations=39.624795,-104.893516|39.695809,-104.939637|39.741855,-104.988494|39.654924,-104.987796&key=AIzaSyC_Xx3Yrmyy7jSADAV4NhTqzgHzS-ZJ-yk",
      headers: {  'Access-Control-Allow-Origin': '*' }
    });
*/




  }

  function error() {
    console.log("Unable to retrieve your location");
  }





  navigator.geolocation.getCurrentPosition(success, error);
}
