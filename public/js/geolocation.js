
var googleURL = '';
var disArray = [];

function findNearest(){
  var nearestStoreIndex = 0;
  var smallestDistance = disArray[0];
  for (var i = 0; i < disArray.length; i++) {
    if(disArray[i] >= smallestDistance){
      //skip
    }
    else{
      smallestDistance = disArray[i];
      nearestStoreIndex = i;
    }
  }
  console.log(nearestStoreIndex);
  findPhoneNearest(nearestStoreIndex);

}
function findPhoneNearest(num){
  switch (num) {
    case 0:
    console.log('DTC');
      break;
    case 1:
    console.log('Glendale');
    break;
    case 2:
    console.log('Downtown');

      $('#phone-name-out').html('Downtown');
      $('#phone-phone-out').html('(720)-904-7937');
      $('#phone-downtown').hide();

    break;
    case 3:
    console.log('Englewood');
    break;

    default:
      console.log('error undefined store index');
  }
}

function updateDistance(num1, num2, num3, num4){
  disArray.push(num1);
  disArray.push(num2);
  disArray.push(num3);
  disArray.push(num4);
  findNearest();
}

function geoFindMe() {
  $('#phone-name-out').html('geoFindMe');
  if (!navigator.geolocation){
      $('#phone-name-out').html('Geolocation is not supported by your browser');
    console.log("Geolocation is not supported by your browser");
    return;
  }
$('#phone-name-out').html('success');
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var disURL = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='+latitude+','+ longitude+'&destinations=39.624795,-104.893516|39.695809,-104.939637|39.741855,-104.988494|39.654924,-104.987796&key=AIzaSyC_Xx3Yrmyy7jSADAV4NhTqzgHzS-ZJ-yk';
    $.ajax({
      type: 'GET',
      url: disURL,
      success: function(result){
        $('#phone-name-out').html('Downtown');
        $('#phone-phone-out').html('(720)-904-7937');
        console.log("current address: "+result.origin_addresses);
        console.log(result.rows[0].elements[0].distance);
        console.log(result.rows[0].elements[1].distance);
        console.log(result.rows[0].elements[2].distance);
        console.log(result.rows[0].elements[3].distance);
        //updateDistance(result.rows[0].elements[0].distance.value,result.rows[0].elements[1].distance.value,result.rows[0].elements[2].distance.value,result.rows[0].elements[3].distance.value);
      }
    });





  }

  function error() {
    console.log("Unable to retrieve your location");
  }





  navigator.geolocation.getCurrentPosition(success, error);
}
