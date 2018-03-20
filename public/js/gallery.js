
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
});

$('.g-interior-btn').click(function(){
  $('.g-food-btn').removeClass('gallery-active');
  $('.g-community-btn').removeClass('gallery-active');
  $(this).addClass('gallery-active');
  $('.food-p').hide();
  $('.interior-p').show();
  $('.community-p').hide();
});

$('.g-community-btn').click(function(){
  $('.g-interior-btn').removeClass('gallery-active');
  $('.g-food-btn').removeClass('gallery-active');
  $(this).addClass('gallery-active');
  $('.food-p').hide();
  $('.interior-p').hide();
  $('.community-p').show();
});
