var currentSignatureMenuIndex = 0;
var totalNumberofSignatureMenu = 4;

var lastScrollLeft = 0;
var documentScrollLeft = $('.menu-signature-container').scrollLeft();
if(documentScrollLeft === 0){
  console.log('init');
  $('#arrow-right-menu').fadeIn();
  $('#arrow-left-menu').fadeOut();
}

$('.menu-signature-container').scroll(function() {
    documentScrollLeft = $('.menu-signature-container').scrollLeft();
    if (lastScrollLeft != documentScrollLeft) {
        console.log(documentScrollLeft);
        if(lastScrollLeft >= documentScrollLeft){
                //scrollong left
          if(documentScrollLeft === 0){
            console.log('start point');
            $('#arrow-right-menu').fadeIn();
          }
          if(documentScrollLeft >150){
            $('#arrow-left-menu').fadeOut();
          }


        }
        else {
          //scrolling right
          $('#arrow-right-menu').fadeOut();
          if(documentScrollLeft >150){
            $('#arrow-left-menu').fadeIn();
          }

        }
          /*
        if(documentScrollLeft > 0 && documentScrollLeft< 150){
          $('#arrow-right-menu').fadeOut();
        }
        else if(documentScrollLeft === 0){
          $('#arrow-right-menu').fadeIn();
          $('#arrow-left-menu').fadeOut();
        }
        else {
          console.log('here');
          $('#arrow-left-menu').fadeIn();
        }
        /*
        if (documentScrollLeft === 0){
          console.log('start point');
          $('#arrow-left-menu').fadeOut();
          $('#arrow-right-menu').fadeIn();
        }
        else if(documentScrollLeft >= 150){
          console.log('end point');
          $('#arrow-left-menu').fadeIn();
          $('#arrow-right-menu').fadeOut();
        }

        else{
          console.log('where1');

        }
        */

        lastScrollLeft = documentScrollLeft;
    }
    else {
        $('#arrow-right-menu').fadeIn();
    }



});


$(document).ready(function(){
  $('#arrow-right-menu').click(function(){
    $('.menu-signature-container').animate( { scrollLeft: '+=300' }, 1000);

  });
  $('#arrow-left-menu').click(function(){
    $('.menu-signature-container').animate( { scrollLeft: '-=300' }, 1000);

  });



  $('.item1').click(function(){
    console.log('item1 is clicked');
    currentSignatureMenuIndex = 0;
    hideAllArrowDown();
    hideAllArrowUp();
    showArrowDown(currentSignatureMenuIndex);
    showArrowUp(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
  })
  $('.item2').click(function(){
    console.log('item2 is clicked');
    currentSignatureMenuIndex = 1;
    hideAllArrowDown();
    hideAllArrowUp();
    showArrowDown(currentSignatureMenuIndex);
    showArrowUp(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
    setItem2();


  })
  $('.item3').click(function(){
    console.log('item3 is clicked');
    currentSignatureMenuIndex = 2;
    hideAllArrowDown();
    hideAllArrowUp();
    showArrowDown(currentSignatureMenuIndex);
    showArrowUp(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
    setItem3();
  })
  $('.item4').click(function(){
    console.log('item4 is clicked');
    currentSignatureMenuIndex = 3;
    hideAllArrowDown();
    hideAllArrowUp();
    showArrowDown(currentSignatureMenuIndex);
    showArrowUp(currentSignatureMenuIndex);
    hideAllSignatureOne();
    showSignatureOne(currentSignatureMenuIndex);
  })


});

function setItem2(){
  $('.menu-signature-container').scrollLeft(27);
}
function setItem3(){
  $('.menu-signature-container').scrollLeft(181);
}

function hideAllArrowDown(){
  for (var i = 0; i < totalNumberofSignatureMenu; i++) {
    var arrowDownId= '#arrow-down-'+ i;
    $(arrowDownId).removeClass('arrowActive');
  }
}

function hideAllArrowUp(){
  for (var i = 0; i < totalNumberofSignatureMenu; i++) {
    var arrowUpId= '#arrow-up-'+ i;
    $(arrowUpId).removeClass('arrowActive');
  }
}
function showArrowUp(index){
  var arrowUpId= '#arrow-up-'+ index;
  $(arrowUpId).addClass('arrowActive');
}


function showArrowDown(index){
  var arrowDownId= '#arrow-down-'+ index;
  $(arrowDownId).addClass('arrowActive');
}

function showSignatureOne(index){
  var arrowDownId= '#one-item-'+ index;
  $(arrowDownId).addClass('oneActive');
}


function hideAllSignatureOne(){
  for (var i = 0; i < totalNumberofSignatureMenu; i++) {
    var arrowDownId= '#one-item-'+ i;
    $(arrowDownId).removeClass('oneActive');
  }
}
