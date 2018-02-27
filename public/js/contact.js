$('#formBtn').click(function(){
  console.log('form btn clicked');
  $('.form-popup-container').addClass('formActive');
})

$('.form-popup-x').click(function(){
  $('.form-popup-container').removeClass('formActive');
})





$('.form-popup-submit').click(function(){
  console.log('send btn clicked');
  $('.form-popup-x').click();
  $('.thank').fadeIn(1000);
  $('.thank').fadeOut(4000);
})
