
var theNumberOfPhotos = 10;

/*

console.log('gallery');
$('.photo').hover(function(){
  hideAllShareIcons();
  var photoId = $(this).attr('id');
  var photoNumber = photoId.charAt(photoId.length-1);
  var socialId = '#share-icons-' + photoNumber;
  $(socialId).show();

});

function hideAllShareIcons(){
    $('.photo-share-icons').hide();
}

*/

$('.g-food-btn').click(function(){
  $('.g-interior-btn').removeClass('gallery-active');
  $('.g-community-btn').removeClass('gallery-active');
  $(this).addClass('gallery-active');
  $('.food-p').show();
  $('.interior-p').hide();
  $('.community-p').hide();
  $('.gallery-box').css('grid-template-rows', '0.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
  $('.gallery-box').css('grid-template-areas', '"Food-title" "Fimage1" "Fimage2" "Fimage3" "Fimage4" "Fimage5" "Fimage6" "Fimage7" "Fimage8" "Fimage9"');
  $('.sub-nav').hide();
});

$('.g-interior-btn').click(function(){
  $('.g-food-btn').removeClass('gallery-active');
  $('.g-community-btn').removeClass('gallery-active');
  $(this).addClass('gallery-active');
  $('.food-p').hide();
  $('.interior-p').show();
  $('.community-p').hide();
  //$('.gallery-box').css('grid-template-rows', '0.2fr 0.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr');
  //$('.gallery-box').css('grid-template-areas', '"Food-title" "Food-subtitle" "Fimage1" "Fimage2" "Fimage3" "Fimage4" "Fimage5" "Fimage6" "Fimage7" "Fimage8" "Fimage9"');
  $('.sub-nav').show();
});

$('.g-community-btn').click(function(){
  $('.g-interior-btn').removeClass('gallery-active');
  $('.g-food-btn').removeClass('gallery-active');
  $(this).addClass('gallery-active');
  $('.food-p').hide();
  $('.interior-p').hide();
  $('.community-p').show();
});

/*
$('.desk-photo-hover-1').mouseenter(function(){
  $('.gallery-hover-1').slideDown();
})
$('.desk-photo-hover-1').mouseleave(function(){
  $('.gallery-hover-1').hide();
})
*/
