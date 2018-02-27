var currentViewItemIndex = 0;
var totalNumOfImages = 4;


$(document).ready(function(){
  startAutoplay();
  $('#arrow-left-about').click(function(){
    showPrevAbout();
  })

  $('#arrow-right-about').click(function(){
    showNextAbout();
  })


  // initialize first bar as active
  $('#bar-0-about').addClass('activeBar');

  $('#bar-0-about').click(function(){
    currentViewItemIndex = 0;
    showCurrentCaroselImageAbout(currentViewItemIndex);

  });

  $('#bar-1-about').click(function(){
    currentViewItemIndex = 1;
    showCurrentCaroselImageAbout(currentViewItemIndex);

  });

  $('#bar-2-about').click(function(){
    currentViewItemIndex = 2;
    showCurrentCaroselImageAbout(currentViewItemIndex);

  });
  $('#bar-3-about').click(function(){
    currentViewItemIndex = 3;
    showCurrentCaroselImageAbout(currentViewItemIndex);

  });





});

function showCurrentCaroselImageAbout(index){
  showCurrentPageAbout(index);
  showCurrentStatusAbout(index);
}

function showCurrentPageAbout(index) {
  for (var i = 0; i < totalNumOfImages; i++) {
    var currentItemId = '#c' + i + '-about';
    $(currentItemId).removeClass('active');

  }

  var findItemId = '#c' + index + '-about';
  console.log("findItemId" + findItemId);
  $(findItemId).addClass('active');


}

function showPrevAbout(){
  console.log('Prev clicked');
  hideCurrentImageAbout();
  hideCurrentBarAbout();
  //decrease index by 1
  if(currentViewItemIndex == 0){
    currentViewItemIndex = 4;
  }
  currentViewItemIndex--;

  showCurrentImageAbout();
  showCurrentBarAbout();
};

function showNextAbout(){
  console.log('Next clicked');
  hideCurrentImageAbout();
  hideCurrentBarAbout();


  //increase index by 1
  currentViewItemIndex++;
  if(currentViewItemIndex == totalNumOfImages){
    currentViewItemIndex= 0;
  }
  console.log('currentViewItemIndex: ' + currentViewItemIndex );

  showCurrentImageAbout();
  showCurrentBarAbout();


};


function hideCurrentImageAbout(){
  //make current image as display:none
  var currentItemId = '#c'+ currentViewItemIndex + '-about';
  console.log('currentItemId: ' + currentItemId);
  $(currentItemId).removeClass('active');
}

function showCurrentImageAbout(){
  //make next image as display:block
  currentItemId = '#c'+ currentViewItemIndex + '-about';
  $(currentItemId).addClass('active');
}

function hideCurrentBarAbout(){
  //make current bar as background-color as gray
  var currentItemId = '#bar-'+ currentViewItemIndex + '-about';
  console.log('currentItemId: ' + currentItemId);
  $(currentItemId).removeClass('activeBar');
}

function showCurrentBarAbout(){
  //make next image as display:block
  currentItemId = '#bar-'+ currentViewItemIndex + '-about';
  $(currentItemId).addClass('activeBar');
}

function showCurrentStatusAbout(index){
  //make next bars as background-color as gray
  for (var i = 0; i < totalNumOfImages ; i++) {
    var currentBarId = '#bar-'+ i + '-about';
      $(currentBarId).removeClass('activeBar');
  }
  currentBarId = '#bar-'+ index + '-about';
  $(currentBarId).addClass('activeBar');

}

function startAutoplayAbout(){
  console.log('set');
  setInterval(function(){
      showNextAbout();
 }, 5000);
}
