var animationEnd = (function(el) {
var animations = {
  animation: 'animationend',
  OAnimation: 'oAnimationEnd',
  MozAnimation: 'mozAnimationEnd',
  WebkitAnimation: 'webkitAnimationEnd',
};

for (var t in animations) {
  if (el.style[t] !== undefined) {
    return animations[t];
  }
}
})(document.createElement('div'));


var barLastIndex = 0;
var totalNumOfImages = 5;
var homeLastImage = 1;

$(document).ready(function(){
  startAutoplay();
  $('#arrow-left').click(function(){



    homeLastImage--;
    if(homeLastImage === 0 ){
      homeLastImage = 4;
      $('.home-caro-image-3').hide();
      $('.home-caro-image-2').hide();
      $('.home-caro-image-1').hide();

    }

    $('.home-caro-image-' + homeLastImage ).show();
    $('.home-caro-image-' + homeLastImage ).addClass('sliding-left').one(animationEnd, function() {
      //$(this).hide();
      $(this).removeClass('sliding-left');
    });

    showPrev();
  })

  $('#arrow-right').click(function(){


    if(homeLastImage === 5) {
      for (var i = 0; i < 5; i++) {
          $('.home-caro-image-' + i ).show();
      }
      homeLastImage = 1;
    }
    $('.home-caro-image-' + homeLastImage ).addClass('sliding-right').one(animationEnd, function() {
      $(this).hide();
      $(this).removeClass('sliding-right');
    });
    homeLastImage++;
    showNext();
  })

  $('.menu-btn').click(function(){
    showMenu();
  })

  // initialize first bar as active
  $('#bar-0').addClass('activeBar');

  $('#bar-0').click(function(){


    showCurrentStatus(0);
    homeLastImage = 1;
    barLastIndex = 0;
    $('.home-caro-image-1').show();
    $('.home-caro-image-2').show();
    $('.home-caro-image-3').show();
    $('.home-caro-image-4').show();
    $('.home-caro-image-5').show();

  });

  $('#bar-1').click(function(){


      showCurrentStatus(1);
      homeLastImage = 2;
      barLastIndex = 1;
      $('.home-caro-image-1').hide();
      $('.home-caro-image-2').show();
      $('.home-caro-image-3').show();
      $('.home-caro-image-4').show();
      $('.home-caro-image-5').show();
  });

  $('#bar-2').click(function(){

      showCurrentStatus(2);
      homeLastImage = 3;
      barLastIndex = 2;
      $('.home-caro-image-1').hide();
      $('.home-caro-image-2').hide();
      $('.home-caro-image-3').show();
      $('.home-caro-image-4').show();
      $('.home-caro-image-5').show();

  });
  $('#bar-3').click(function(){
showCurrentStatus(3);

  homeLastImage = 4;
  barLastIndex = 3;
  $('.home-caro-image-1').hide();
  $('.home-caro-image-2').hide();
  $('.home-caro-image-3').hide();
  $('.home-caro-image-4').show();
  $('.home-caro-image-5').show();
  });





});

function showCurrentCaroselImage(index){
  showCurrentPage(index);
  showCurrentStatus(index);
}

function showCurrentPage(index) {
  for (var i = 0; i < totalNumOfImages; i++) {
    var currentItemId = '#c' + i;
    $(currentItemId).hide();

  }
  var findItemId = '#c' + index;
  $(findItemId).show();


}

function showPrev(){

  //hideCurrentImage();
  hideCurrentBar();
  //decrease index by 1
  barLastIndex--;
  if(barLastIndex == -1){
    barLastIndex = 3;
  }

  //showCurrentImage();
  showCurrentBar();
};

function showNext(){

  //hideCurrentImage();
  hideCurrentBar();


  //increase index by 1
  barLastIndex++;
  if(barLastIndex == 4){
    barLastIndex = 0;
  }


  //showCurrentImage();
  showCurrentBar();


};

function showMenu(){
  console.log('Menu clicked');
  window.location.href="/menu";
}

function hideCurrentImage(){
  //make current image as display:none
//  var currentItemId = '#c'+ currentViewItemIndex;
  //$(currentItemId).removeClass('active');

}

function showCurrentImage(){
  //make next image as display:block
  //currentItemId = '#c'+ currentViewItemIndex;

//  $(currentItemId).addClass('active');
}

function hideCurrentBar(){

  //make current bar as background-color as gray
  var currentItemId = '#bar-'+ barLastIndex;

  $(currentItemId).removeClass('activeBar');
}

function showCurrentBar(){
  //make next image as display:block
  currentItemId = '#bar-'+ barLastIndex;
  $(currentItemId).addClass('activeBar');
}

function showCurrentStatus(index){
  //make next bars as background-color as gray
  for (var i = 0; i < totalNumOfImages ; i++) {
    var currentBarId = '#bar-'+ i;
      $(currentBarId).removeClass('activeBar');
  }
  currentBarId = '#bar-'+ index;
  $(currentBarId).addClass('activeBar');

}

function startAutoplay(){

  setInterval(function(){
      $('#arrow-right').click();
 }, 5000);
}
