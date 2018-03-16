



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

    $('#store1-open-closed').html('<span class="open-now" style="color:#ACBA9A;">Open Now</span>');
  }
  else {

    $('#store1-open-closed').html('<b>CLOSED</b>');
  }
  if (now > openHourStore2 && now < closedHourStore2) {

    $('#store2-open-closed').html('<span class="open-now" style="color:#ACBA9A;">Open Now</span>');
  }
  else {

    $('#store2-open-closed').html('<b>CLOSED</b>');
  }
  if (now > openHourStore3 && now < closedHourStore3) {

    $('#store3-open-closed').html('<span class="open-now" style="color:#ACBA9A;">Open Now</span>');
  }
  else {

    $('#store3-open-closed').html('<b>CLOSED</b>');
  }






})

$('#contact-us-mobile').click(function(){
  console.log('clicked');
  gotoBottom('contact-us-close');

  $('#contact-us-close').show();
  $('.contact-form-container-mobile').slideDown();
});



$('#contact-us-close').click(function(){
  console.log('clicked');
  $(this).hide();
  $('.contact-form-container-mobile').slideUp();
});


$('#formBtn').click(function() {
  console.log('form btn clicked');
  $('.form-popup-container').addClass('formActive');
})

$('.form-popup-x').click(function() {
  $('.form-popup-container').removeClass('formActive');
})
//hello

$('#contact-form-sent-btn').click(function() {
  console.log('send btn clicked');
  $('#contact-us-close').click();
  $('.thank').fadeIn(1000).css('display', 'flex');

  $('.thank').fadeOut(4000).css('display', 'flex');
})

$('#contact-us-desktop').click(function() {

  $('.poke-form-container-desk').slideDown();

})

$('#close-icon-desk').click(function(){
  $('.poke-form-container-desk').slideUp();
})

$('#sendBtn-desk').click(function(){
  $('.poke-form-container-desk').slideUp();
  $('.thank').fadeIn(1000).css('display', 'flex');
  $('.thank').fadeOut(4000).css('display', 'flex');
})
