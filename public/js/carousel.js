var currentViewItemIndex = 0;
var totalNumOfImages = 4;


$(document).ready(function(){
  //startAutoplay();
  $('#arrow-left').click(function(){
    showPrev();
  })

  $('#arrow-right').click(function(){
    console.log('clicked');
    showNext();
  })

  $('.menu-btn').click(function(){
    showMenu();
  })

  // initialize first bar as active
  $('#bar-0').addClass('activeBar');

  $('#bar-0').click(function(){
    currentViewItemIndex = 0;
    showCurrentCaroselImage(currentViewItemIndex);

  });

  $('#bar-1').click(function(){
    currentViewItemIndex = 1;
    showCurrentCaroselImage(currentViewItemIndex);

  });

  $('#bar-2').click(function(){
    currentViewItemIndex = 2;
    showCurrentCaroselImage(currentViewItemIndex);

  });
  $('#bar-3').click(function(){
    currentViewItemIndex = 3;
    showCurrentCaroselImage(currentViewItemIndex);

  });





});

function showCurrentCaroselImage(index){
  showCurrentPage(index);
  showCurrentStatus(index);
}

function showCurrentPage(index) {
  for (var i = 0; i < totalNumOfImages; i++) {
    var currentItemId = '#c' + i;
    $(currentItemId).removeClass('active');

  }

  var findItemId = '#c' + index;
  $(findItemId).addClass('active');


}

function showPrev(){

  hideCurrentImage();
  hideCurrentBar();
  //decrease index by 1
  if(currentViewItemIndex == 0){
    currentViewItemIndex = 4;
  }
  currentViewItemIndex--;

  showCurrentImage();
  showCurrentBar();
};

function showNext(){

  hideCurrentImage();
  hideCurrentBar();


  //increase index by 1
  currentViewItemIndex++;
  if(currentViewItemIndex == totalNumOfImages){
    currentViewItemIndex= 0;
  }


  showCurrentImage();
  showCurrentBar();


};

function showMenu(){
  console.log('Menu clicked');
  window.location.href="/menu";
}

function hideCurrentImage(){
  //make current image as display:none
  var currentItemId = '#c'+ currentViewItemIndex;
  $(currentItemId).removeClass('active');

}

function showCurrentImage(){
  //make next image as display:block
  currentItemId = '#c'+ currentViewItemIndex;

  $(currentItemId).addClass('active');
}

function hideCurrentBar(){
  //make current bar as background-color as gray
  var currentItemId = '#bar-'+ currentViewItemIndex;

  $(currentItemId).removeClass('activeBar');
}

function showCurrentBar(){
  //make next image as display:block
  currentItemId = '#bar-'+ currentViewItemIndex;
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
      showNext();
 }, 5000);
}
