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
    footerAddsDataDiv.html('8101 E Belleview Ave. Suite B1. <br>Denver, CO 80237');
    footerPhoneDataDiv.text('(303)-862-9941');
    footerHoursDataDiv.text('11:00 am - 08:00 pm');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/thepokecity/?ti=as');
    footerYelpDiv.attr('href', 'https://www.yelp.com/biz/pokecity-denver?osq=poke+cit');
    break;
    case 'Denver2':
    console.log('denver2');
    footerAddsDataDiv.html('1128 S Colorado Blvd. <br>Denver, CO 80246');
    footerPhoneDataDiv.text('(303)-954-0005');
    footerHoursDataDiv.text('11:00 am - 08:00 pm');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/PokeCity-Glendale-129682744271297/?ti=as');
    footerYelpDiv.attr('href', 'https://www.yelp.com/biz/pokecity-denver-4');
    break;

    case 'Denver3':
    console.log('denver3');
    footerAddsDataDiv.html('216 16th Street Suite 100. <br>Denver, CO 80202');
    footerPhoneDataDiv.text('(720)-904-7937');
    footerHoursDataDiv.text('11:00 am - 06:00 pm');
    footerFacebookDiv.attr('href', 'https://www.facebook.com/PokeCityDowntown/');
    footerYelpDiv.attr('href', 'https://www.yelp.com/biz/pokecity-downtown-denver?osq=poke+city');
    break;
    case 'Denver4':
    console.log('denver4');
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
