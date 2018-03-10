var currentViewItemIndexAbout = 0;
var totalNumOfImages = 4;


$(document).ready(function(){
  startAutoplayAbout();
  $('#arrow-left-about').click(function(){
    showPrevAbout();

  })

  $('#arrow-right-about').click(function(){
    showNextAbout();

  })


  // initialize first bar as active
  $('#bar-0-about').addClass('activeBar');

  $('#bar-0-about').click(function(){
    currentViewItemIndexAbout = 0;
    showCurrentCaroselImageAbout(currentViewItemIndexAbout);

  });

  $('#bar-1-about').click(function(){
    currentViewItemIndexAbout = 1;
    showCurrentCaroselImageAbout(currentViewItemIndexAbout);

  });

  $('#bar-2-about').click(function(){
    currentViewItemIndexAbout = 2;
    showCurrentCaroselImageAbout(currentViewItemIndexAbout);

  });
  $('#bar-3-about').click(function(){
    currentViewItemIndexAbout = 3;
    showCurrentCaroselImageAbout(currentViewItemIndexAbout);

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

  $(findItemId).addClass('active');


}

function showPrevAbout(){

  hideCurrentImageAbout();
  hideCurrentBarAbout();
  //decrease index by 1
  if(currentViewItemIndexAbout == 0){
    currentViewItemIndexAbout = 4;
  }
  currentViewItemIndexAbout--;

  showCurrentImageAbout();
  showCurrentBarAbout();
};

function showNextAbout(){

  hideCurrentImageAbout();
  hideCurrentBarAbout();


  //increase index by 1
  currentViewItemIndexAbout++;
  if(currentViewItemIndexAbout == totalNumOfImages){
    currentViewItemIndexAbout= 0;
  }


  showCurrentImageAbout();
  showCurrentBarAbout();


};


function hideCurrentImageAbout(){
  //make current image as display:none
  for (var i = 0; i < totalNumOfImages; i++) {
    var currentItemId = '#c'+ i + '-about';
    $(currentItemId).removeClass('active');
  }
  var currentItemId = '#c'+ currentViewItemIndexAbout + '-about';

  $(currentItemId).removeClass('active');
}

function showCurrentImageAbout(){
  //make next image as display:block
  currentItemId = '#c'+ currentViewItemIndexAbout + '-about';
  $(currentItemId).addClass('active');
}

function hideCurrentBarAbout(){
  for (var i = 0; i < totalNumOfImages; i++) {
    var currentItemId = '#bar-'+ i + '-about';
    $(currentItemId).removeClass('active');
  }
  //make current bar as background-color as gray
  var currentItemId = '#bar-'+ currentViewItemIndexAbout + '-about';

  $(currentItemId).removeClass('activeBar');
}

function showCurrentBarAbout(){
  //make next image as display:block
  currentItemId = '#bar-'+ currentViewItemIndexAbout + '-about';
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

  setInterval(function(){
      showNextAbout();
 }, 5000);
}
