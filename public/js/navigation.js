// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunc()};

// Get the navbar
var navbar = document.getElementById("navbar");
var menu = $('.main');
//var navHamburgerContainter= $('#site-nav-hamberger-open');
var navHamburgerContent= $('.site-nav-open');
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var isNavClicked = false;
var isAddedTopPosiotion = false;
var isShownOrderDelivery =true;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
  if(isNavClicked){
    //do nothing
  }
  else{
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      menu.addClass('addTopMargin');
      navHamburgerContent.addClass('addTopPosition');
      isAddedTopPosiotion = true;
      $('#navbar').css('position', 'fixed');
      $('#navbar').css('width', '100%');
      console.log(navbar.offsetTop);


    } else {
      navbar.classList.remove("sticky");
      menu.removeClass('addTopMargin');
      navHamburgerContent.removeClass('addTopPosition');
      isAddedTopPosiotion = false;
      $('#navbar').css('position', 'relative');
      $('#navbar').css('width', '100%');
      console.log(navbar.offsetTop);
    }
  }

}

$('.menu-toggle').click(function() {
  if(navbar.offsetTop === 40){

    isShownOrderDelivery = true;
  }
  else{

    isShownOrderDelivery = false;
  }

  if(isNavClicked){
    isNavClicked = false;


  }
  else{
    isNavClicked = true;
  }

  if(isAddedTopPosiotion){
    if(isNavClicked){
      /*
      console.log('case 1');
      console.log('get rid of top position for while');
      $('#navbar').css('z-index', '0');
      navHamburgerContent.css('top', '0');
      navHamburgerContent.css('grid-template-areas', '  ". Logo Close" ". Logo CLose" ". Home ." ". Menu ." ". Gallery ." ". About ." ". Contact ." ". Order ." "Nav Nav Nav"');
      $('.close-nav').show();
      $('.main').css('margin-top', '0'  );
      $('#navbar').css('position', 'relative');
      */
      if(isShownOrderDelivery){
        console.log('isShownOrderDelivery - 1');
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
        $('.site-nav-open').toggleClass('site-nav-show', 100);
        $('body').toggleClass('nav-fix', 100);
        $('html').toggleClass('nav-fix', 100);
        $('#navbar').css('position', 'static');
        $('.site-nav-open').css('top', '0');
        $('.main').css('margin-top', '0'  );
      }
      else {
          console.log('No isShownOrderDelivery - 2');
          $('.site-nav').toggleClass('site-nav--open', 500);
          $(this).toggleClass('open');
          $('.site-nav-open').toggleClass('site-nav-show', 100);
          $('body').toggleClass('nav-fix', 100);
          $('html').toggleClass('nav-fix', 100);
          $('#navbar').css('position', 'static');
          $('.site-nav-open').css('top', '0');
          $('.main').css('margin-top', '0'  );
      }
    }
    else{
      /*
      console.log('case 2');
      $('#navbar').css('z-index', '15');
        $('.main').css('magin-top', '0'  );
          $('#navbar').css('position', 'static');
          */
          if(isShownOrderDelivery){
            console.log('isShownOrderDelivery - 3');
            $('.site-nav').toggleClass('site-nav--open', 500);
            $(this).toggleClass('open');
            $('.site-nav-open').toggleClass('site-nav-show', 100);
            $('body').toggleClass('nav-fix', 100);
            $('html').toggleClass('nav-fix', 100);
            $('#navbar').css('position', 'relative');
            $('.site-nav-open').css('top', '-7.5rem');
            $('.main').css('margin-top', '0'  );
          }
          else {
              console.log('No isShownOrderDelivery - 4');
          }
    }

  }
  else {
    if(isNavClicked){
      /*
      navbar.classList.remove("sticky");
      menu.removeClass('addTopMargin');
      navHamburgerContent.removeClass('addTopPosition');
      isAddedTopPosiotion = false;

      $('#navbar').css('width', '100%');
      console.log(navbar.offsetTop);
      console.log('case 3');
      console.log('good to go');
      $('#navbar').css('z-index', '15');
        $('#navbar').css('position', 'static');
        */
        if(isShownOrderDelivery){
          console.log('isShownOrderDelivery - 5');
          $('#navbar').css('position', 'static');
          $('.site-nav').toggleClass('site-nav--open', 500);
          $(this).toggleClass('open');
          $('.site-nav-open').toggleClass('site-nav-show', 100);
          $('body').toggleClass('nav-fix', 100);
          $('html').toggleClass('nav-fix', 100);


        }
        else {
            console.log('No isShownOrderDelivery - 6');
        }
    }
    else {
      if(isShownOrderDelivery){
        console.log('isShownOrderDelivery - 7');
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
        $('.site-nav-open').toggleClass('site-nav-show', 100);
        $('body').toggleClass('nav-fix', 100);
        $('html').toggleClass('nav-fix', 100);
      }
      else {
          console.log('No isShownOrderDelivery - 8');
      }
    }


  };

/*
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  $('.site-nav-open').toggleClass('site-nav-show', 100);
  $('body').toggleClass('nav-fix', 100);
  $('html').toggleClass('nav-fix', 100);

*/




/*
html, body {margin: 0; height: 100%; overflow: hidden}
  $('.site-nav-open').toggleClass('site-nav-show', 100);
*/


})
$('.menu-toggle-inside').click(function() {
  $('.menu-toggle').click();
});



$('#home-nav-content').mouseenter(function(){
  console.log('enter');
    $('#home-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#home-nav-content').mouseleave(function(){
  console.log('leave');
    $('#home-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#menu-nav-content').mouseenter(function(){
  console.log('enter');
    $('#menu-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#menu-nav-content').mouseleave(function(){
  console.log('leave');
    $('#menu-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#gallery-nav-content').mouseenter(function(){
  console.log('enter');
    $('#gallery-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#gallery-nav-content').mouseleave(function(){
  console.log('leave');
    $('#gallery-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#about-nav-content').mouseenter(function(){
  console.log('enter');
    $('#about-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#about-nav-content').mouseleave(function(){
  console.log('leave');
    $('#about-nav-content .nav-bar').removeClass('nav-down-bar-active');

});

$('#contact-nav-content').mouseenter(function(){
  console.log('enter');
    $('#contact-nav-content .nav-bar').addClass('nav-down-bar-active');

});

$('#contact-nav-content').mouseleave(function(){
  console.log('leave');
    $('#contact-nav-content .nav-bar').removeClass('nav-down-bar-active');

});


function gotoBottom(id){
  console.log('here');
   var element = document.getElementById(id);
   console.log(element);
   console.log(element.scrollHeight);
   console.log(element.clientHeight);
   element.scrollTop = 100;
}
