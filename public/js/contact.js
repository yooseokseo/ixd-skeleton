



$(function() {
  var now = new Date();
  var openHourStore1 = new Date();
  var closedHourStore1 = new Date();
  var openHourStore2 = new Date();
  var closedHourStore2 = new Date();
  var openHourStore3 = new Date();
  var closedHourStore3 = new Date();


  openHourStore1.setHours(11);
  openHourStore1.setMinutes(00);
  openHourStore1.setSeconds(00);
  closedHourStore1.setHours(20);
  closedHourStore1.setMinutes(00);
  closedHourStore1.setSeconds(00);
  openHourStore2.setHours(11);
  openHourStore2.setMinutes(00);
  openHourStore2.setSeconds(00);
  closedHourStore2.setHours(20);
  closedHourStore2.setMinutes(00);
  closedHourStore2.setSeconds(00);
  openHourStore3.setHours(11);
  openHourStore3.setMinutes(00);
  openHourStore3.setSeconds(00);
  closedHourStore3.setHours(18);
  closedHourStore3.setMinutes(00);
  closedHourStore3.setSeconds(00);

  if (now > openHourStore1 && now < closedHourStore1) {
    console.log('open');
    $('#store1-open-closed').html('Open Now')
  }
  else {
    console.log('close');
    $('#store1-open-closed').html('Closed Now')
  }
  if (now > openHourStore2 && now < closedHourStore2) {
    console.log('open');
    $('#store2-open-closed').html('Open Now')
  }
  else {
    console.log('close');
    $('#store2-open-closed').html('Closed Now')
  }
  if (now > openHourStore3 && now < closedHourStore3) {
    console.log('open');
    $('#store3-open-closed').html('Open Now')
  }
  else {
    console.log('close');
    $('#store3-open-closed').html('Closed Now')
  }






})

function generateStoreHour1(){

}


$('#formBtn').click(function() {
  console.log('form btn clicked');
  $('.form-popup-container').addClass('formActive');
})

$('.form-popup-x').click(function() {
  $('.form-popup-container').removeClass('formActive');
})





$('.form-popup-submit').click(function() {
  console.log('send btn clicked');
  $('.form-popup-x').click();
  $('.thank').fadeIn(1000);
  $('.thank').fadeOut(4000);
})
