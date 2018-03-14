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

  var marker1 = new google.maps.Marker({
    position: {lat: 39.624795, lng: -104.893516},
    map: map,
    title: 'POKE CITY - DTC'
  });
  var marker2 = new google.maps.Marker({
    position: {lat: 39.695809, lng: -104.939637},
    map: map2,
    title: 'POKE CITY - GLENDALE'
  });
  var marker3 = new google.maps.Marker({
    position: {lat: 39.741855, lng: -104.988494},
    map: map3,
    title: 'POKE CITY - DOWNTOWN'
  });
  var marker4 = new google.maps.Marker({
    position: {lat: 39.654924, lng: -104.987796},
    map: map4,
    title: 'POKE CITY - ENGLEWOOD'
  });
  marker1.addListener('click', map1Maker);
  marker2.addListener('click', map2Maker);
  marker3.addListener('click', map3Maker);
  marker4.addListener('click', map4Maker);
}

function map1Maker(){
  window.location = "https://www.google.com/maps/place/PokeCity,+8101+E+Belleview+Ave+suite+B1,+Denver,+CO+80237/@39.6247362,-104.8935248,17z/data=!4m2!3m1!1s0x876c86ff438dbbf5:0x6c9761adb01be6c0";
}
function map2Maker(){
  window.location = "https://www.google.com/maps/place/PokeCity/@39.6957817,-104.941828,17z/data=!4m13!1m7!3m6!1s0x876c7e7871deb1d1:0xb53adf16f5ea9822!2s1128+S+Colorado+Blvd,+Denver,+CO+80246!3b1!8m2!3d39.6957817!4d-104.9396393!3m4!1s0x876c7e786fdbd4eb:0x8448a3d8b71d4d03!8m2!3d39.6957817!4d-104.9396393";
}
function map3Maker(){
  window.location = "https://www.google.com/maps/place/216+16th+St+%23100,+Denver,+CO+80202/@39.7418279,-104.9906819,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78d44937ea37:0x561677b85d893021!8m2!3d39.7418279!4d-104.9884932";
}
function map4Maker(){
  window.location = "https://www.google.com/maps/place/3401+S+Broadway+%23103,+Englewood,+CO+80110/@39.6548218,-104.9899858,17z/data=!3m1!4b1!4m5!3m4!1s0x876c807e4d590277:0x3a5bc99d830c4cde!8m2!3d39.6548218!4d-104.9877971";

}
