var currentSignatureMenuIndex = 0;
var totalNumberofSignatureMenu = 4;

$(document).ready(function(){
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
