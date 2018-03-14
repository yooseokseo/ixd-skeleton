var currentViewItemIndexAbout = 0;
var totalNumOfImages = 5;
var lastImageAboutDesk = 1;


$(document).ready(function(){
  startAutoplayAbout();
  $('#arrow-left-about').click(function(){
    lastImageAboutDesk--;
    if(lastImageAboutDesk === 0){
      lastImageAboutDesk = 4;
      $('#c3-about').hide();
      $('#c2-about').hide();
      $('#c1-about').hide();
    }
    $('#c'+lastImageAboutDesk+'-about').show();
    $('#c'+lastImageAboutDesk+'-about').addClass('sliding-right').one(animationEnd, function() {
      //$(this).hide();
      $(this).removeClass('sliding-right');

    });
    showPrevAbout();

  })

  $('#arrow-right-about').click(function(){

    if(lastImageAboutDesk === 5){
      for (var i = 0; i < 5; i++) {
        $('#c'+ i + '-about').show();
      }
      lastImageAboutDesk = 1;
    }
      $('#c'+ lastImageAboutDesk + '-about').addClass('sliding-right').one(animationEnd, function() {
        $(this).hide();
        $(this).removeClass('sliding-right');

      });
      lastImageAboutDesk++;
    showNextAbout();

  })



  // initialize first bar as active
  $('#bar-0-about').addClass('activeBar');

  $('#bar-0-about').click(function(){
    showCurrentStatusAbout(0);
    //showCurrentCaroselImageAbout(currentViewItemIndexAbout);
    lastImageAboutDesk = 1;
    currentViewItemIndexAbout = 0;
    $('#c1-about').show();
    $('#c2-about').show();
    $('#c3-about').show();
    $('#c4-about').show();
    $('#c5-about').show();
  });

  $('#bar-1-about').click(function(){
    showCurrentStatusAbout(1);
    lastImageAboutDesk = 2;
    currentViewItemIndexAbout = 1;
    $('#c1-about').hide();
    $('#c2-about').show();
    $('#c3-about').show();
    $('#c4-about').show();
    $('#c5-about').show();

  });

  $('#bar-2-about').click(function(){
    showCurrentStatusAbout(2);
    lastImageAboutDesk = 3;
    currentViewItemIndexAbout = 2;
    $('#c1-about').hide();
    $('#c2-about').hide();
    $('#c3-about').show();
    $('#c4-about').show();
    $('#c5-about').show();


  });
  $('#bar-3-about').click(function(){
    showCurrentStatusAbout(3);
    lastImageAboutDesk = 4;
    currentViewItemIndexAbout = 33;
    $('#c1-about').hide();
    $('#c2-about').hide();
    $('#c3-about').hide();
    $('#c4-about').show();
    $('#c5-about').show();
  });

});
function showCurrentStatusAbout(index){
  //make next bars as background-color as gray
  for (var i = 0; i < totalNumOfImages ; i++) {
    var currentBarId = '#bar-'+ i+'-about';
      $(currentBarId).removeClass('activeBar');
  }
  currentBarId = '#bar-'+ index+'-about';
  $(currentBarId).addClass('activeBar');

}


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

  //hideCurrentImageAbout();
  hideCurrentBarAbout();
  //decrease index by 1
  currentViewItemIndexAbout--;
  if(currentViewItemIndexAbout == -1){
    currentViewItemIndexAbout = 3;
  }


  //showCurrentImageAbout();
  showCurrentBarAbout();
};

function showNextAbout(){

  //hideCurrentImageAbout();
  hideCurrentBarAbout();


  //increase index by 1
  currentViewItemIndexAbout++;
  if(currentViewItemIndexAbout == 4){
    currentViewItemIndexAbout= 0;
  }


  //showCurrentImageAbout();
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
