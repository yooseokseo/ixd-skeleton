$(".BackToTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});

$('#footer-facebook-icon').hover(function(){
  $(this).attr('src','/images/icons/FBHover.png' );
});
$('#footer-ig-icon').hover(function(){
  $(this).attr('src','/images/icons/IGHover.png' );
});

$('#footer-yelp-icon').hover(function(){
  $(this).attr('src','/images/icons/YelpHover.png' );
});


function localChange(){
  var locationSelesction = $('#loc-selc').val();
  var footerAddsDataDiv = $('#footer-adds-data');
  var footerPhoneDataDiv = $('#footer-phone-data');
  var footerHoursDataDiv = $('#footer-hours-data');
  var footerFacebookDiv = $('#footer-facebook');
  var footerYelpDiv = $('#footer-yelp');


  console.log(locationSelesction);
  switch (locationSelesction) {
    case 'Denver1':
    console.log('denver1');
    $('.adds-data a').attr('href', 'https://www.google.com/maps/place/PokeCity,+8101+E+Belleview+Ave+suite+B1,+Denver,+CO+80237/@39.6247362,-104.8935248,17z/data=!4m2!3m1!1s0x876c86ff438dbbf5:0x6c9761adb01be6c0');
    footerAddsDataDiv.html('8101 E Belleview Ave. Suite B1. Denver, CO 80237');
    footerPhoneDataDiv.text('(303)-862-9941');
    footerHoursDataDiv.text('11:00 am - 08:00 pm');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/thepokecity/?ti=as');
    footerYelpDiv.attr('href', 'https://www.yelp.com/biz/pokecity-denver?osq=poke+cit');
    break;
    case 'Denver2':
    console.log('denver2');
      $('.adds-data a').attr('href', 'https://www.google.com/maps/place/PokeCity/@39.6957817,-104.941828,17z/data=!4m13!1m7!3m6!1s0x876c7e7871deb1d1:0xb53adf16f5ea9822!2s1128+S+Colorado+Blvd,+Denver,+CO+80246!3b1!8m2!3d39.6957817!4d-104.9396393!3m4!1s0x876c7e786fdbd4eb:0x8448a3d8b71d4d03!8m2!3d39.6957817!4d-104.9396393');
    footerAddsDataDiv.html('1128 S Colorado Blvd. <br>Denver, CO 80246');
    footerPhoneDataDiv.text('(303)-954-0005');
    footerHoursDataDiv.text('11:00 am - 08:00 pm');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/PokeCity-Glendale-129682744271297/?ti=as');
    footerYelpDiv.attr('href', 'https://www.yelp.com/biz/pokecity-denver-4');
    break;

    case 'Denver3':
    console.log('denver3');
      $('.adds-data a').attr('href', 'https://www.google.com/maps/place/216+16th+St+%23100,+Denver,+CO+80202/@39.7418279,-104.9906819,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78d44937ea37:0x561677b85d893021!8m2!3d39.7418279!4d-104.9884932');
    footerAddsDataDiv.html('216 16th Street Suite 100. <br>Denver, CO 80202');
    footerPhoneDataDiv.text('(720)-904-7937');
    footerHoursDataDiv.text('11:00 am - 06:00 pm');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/PokeCityDowntown/');
    footerYelpDiv.attr('href', 'https://www.yelp.com/biz/pokecity-downtown-denver?osq=poke+city');
    break;
    case 'Denver4':
    console.log('denver4');
    $('.adds-data a').attr('href', 'https://www.google.com/maps/place/3401+S+Broadway+%23103,+Englewood,+CO+80110/@39.6548218,-104.9899858,17z/data=!3m1!4b1!4m5!3m4!1s0x876c807e4d590277:0x3a5bc99d830c4cde!8m2!3d39.6548218!4d-104.9877971');
    footerAddsDataDiv.html('3401 S Broadway Suite 103. <br>Englewood, CO 80110');
    footerPhoneDataDiv.text('Coming Soon');
    footerHoursDataDiv.text('Coming Soon');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/PokeCity-Englewood-820257754819799/?ti=as');
    footerYelpDiv.attr('href', '#');
    break;
    case 'Denver5':
    console.log('denver5');
    footerAddsDataDiv.html('Coming Soon');
    footerPhoneDataDiv.text('Coming Soon');
    footerHoursDataDiv.text('Coming Soon');
    break;

    default:
    break;
  }
}
