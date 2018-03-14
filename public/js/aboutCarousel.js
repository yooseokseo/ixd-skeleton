

var lastImage = 1;

$('#arrow-right-about-mobile').click(()=>{
  if(lastImage === 5) {
    for (var i = 0; i < 5; i++) {
        $('.about-caro-image-' + i ).show();
    }
    lastImage = 1;
  }


  $('.about-caro-image-' + lastImage ).addClass('sliding-right').one(animationEnd, function() {
    $(this).hide();
    $(this).removeClass('sliding-right');
  });
  lastImage++;

});


$('#arrow-left-about-mobile').click(()=>{
  lastImage--;
  if(lastImage === 0 ){
    lastImage = 4;
    $('.about-caro-image-3').hide();
    $('.about-caro-image-2').hide();
    $('.about-caro-image-1').hide();

  }
  console.log(lastImage);
  $('.about-caro-image-' + lastImage ).show();
  $('.about-caro-image-' + lastImage ).addClass('sliding-left').one(animationEnd, function() {
    //$(this).hide();
    $(this).removeClass('sliding-left');
  });



});

setInterval(function(){
    $('#arrow-right-about-mobile').click();
}, 4000);
