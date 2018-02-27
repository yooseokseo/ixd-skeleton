$(".back").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});

;

function localChange(){
  var locationSelesction = $('#loc-selc').val();
  var footerAddsDataDiv = $('#footer-adds-data');
  var footerPhoneDataDiv = $('#footer-phone-data');
  console.log(locationSelesction);
  switch (locationSelesction) {
    case 'Denver1':
    console.log('denver1');
    footerAddsDataDiv.html('8101 E Belleview Ave. Suite B1. <br>Denver, CO 80237');
    footerPhoneDataDiv.text('denver1 phone Number');
    break;
    case 'Denver2':
    console.log('denver2');
    footerAddsDataDiv.html('1128 S Colorado Blvd. <br>Denver, CO 80246');
    footerPhoneDataDiv.text('denver2 phone Number');
    break;
    case 'Denver3':
    console.log('denver3');
    footerAddsDataDiv.html('216 16th Street Suite 100. <br>Denver, CO 80202');
    footerPhoneDataDiv.text('denver3 phone Number');
    break;
    case 'Denver4':
    console.log('denver4');
    footerAddsDataDiv.html('3401 S Broadway Suite 103. <br>Englewood, CO 80110');
    footerPhoneDataDiv.text('denver4 phone Number');
    break;
    case 'Denver5':
    console.log('denver5');
    footerAddsDataDiv.html('Coming Soon');
    footerPhoneDataDiv.text('Coming Soon');
    break;

    default:
    break;
  }
}
