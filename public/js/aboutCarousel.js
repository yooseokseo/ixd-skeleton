

var lastImage = 1;
var dotIndex = 0;
$('#bar-0-about-mobile').click(function(){
  lastImage = 1;
  dotIndex = 0;
  $('.about-caro-image-1').show();
  $('.about-caro-image-2').show();
  $('.about-caro-image-3').show();
  $('.about-caro-image-4').show();
  $('.about-caro-image-5').show();
  showDot(dotIndex);
});
$('#bar-1-about-mobile').click(function(){
  lastImage = 2;
  dotIndex = 1;
  $('.about-caro-image-1').hide();
  $('.about-caro-image-2').show();
  $('.about-caro-image-3').show();
  $('.about-caro-image-4').show();
  $('.about-caro-image-5').show();
  showDot(dotIndex);

});
$('#bar-2-about-mobile').click(function(){
  lastImage = 3;
  dotIndex = 2;
  $('.about-caro-image-1').hide();
  $('.about-caro-image-2').hide();
  $('.about-caro-image-3').show();
  $('.about-caro-image-4').show();
  $('.about-caro-image-5').show();
  showDot(dotIndex);

});
$('#bar-3-about-mobile').click(function(){
  lastImage = 4;
  dotIndex = 3;
  $('.about-caro-image-1').hide();
  $('.about-caro-image-2').hide();
  $('.about-caro-image-3').hide();
  $('.about-caro-image-4').show();
  $('.about-caro-image-5').show();
  showDot(dotIndex);

});
// initialize
$('#bar-0-about-mobile').addClass('dot');

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
    dotIndex++;
    showDot(dotIndex);
  });
  lastImage++;

});


$('#arrow-left-about-mobile').click(()=>{
  dotIndex--;
  lastImage--;
  if(lastImage === 0 ){
    lastImage = 4;
    $('.about-caro-image-3').hide();
    $('.about-caro-image-2').hide();
    $('.about-caro-image-1').hide();

  }
  if(dotIndex === -1){
    dotIndex = 3;
  }

  $('.about-caro-image-' + lastImage ).show();
  $('.about-caro-image-' + lastImage ).addClass('sliding-left').one(animationEnd, function() {
    //$(this).hide();
    $(this).removeClass('sliding-left');
    showDot(dotIndex);
  });



});
function showDot(index){
  if(index == 4){
    index = 0;
    dotIndex =0;
  }
  for (var i = 0; i < 4; i++) {

  var tempString = '#bar-'+ i +'-about-mobile';
  $(tempString).removeClass('dot');
  }
  $('#bar-'+ index +'-about-mobile').addClass('dot');

}
setInterval(function(){
    $('#arrow-right-about-mobile').click();
}, 4000);
