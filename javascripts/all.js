// scrollspy
$(window).load(function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2;
  $('body').scrollspy({
    target: '#scrollspy',
    offset: scrollOffset
  });
})

// header affix
$('.header').affix({
  offset: {
    top: 50
  }
});


// carousel
$('.carousel').carousel({
  interval: false
});


// fittext
jQuery(".block-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".block-sub-title").fitText(2, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".press-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".item-title").fitText(2, { minFontSize: '14px', maxFontSize: '26px' });


// three way pill
$('.pills > #low').click(function(){
  $('#three-way-demo-mode').removeClass().addClass('low');
});
$('.pills > #high').click(function(){
  $('#three-way-demo-mode').removeClass().addClass('high');
});
$('.pills > #auto').click(function(){
  $('#three-way-demo-mode').removeClass().addClass('auto');
});


// mist-animation
// $('.smart').on('activate.bs.scrollspy', function () {
//   pic_num = 0;
  // chImg();
// });

//demo mist
mistAnime();
flowSideAnime();
flowAngleAnime();
var pic_num = 0;
var pic_num1 = 0;
var pic_num2 = 0;
function mistAnime(){
  var target_height = (100/(15-1));
  var target_background_potition = (target_height * pic_num)+'%';
  $('.mist').css("background-position", "50% "+target_background_potition);
  pic_num++;
  if (pic_num >= 15) pic_num = 0;
  setTimeout("mistAnime()",67);
}
function flowSideAnime(){
  var target_height = (100/(15-1));
  var target_background_potition = (target_height * pic_num1)+'%';
  $('.flow-side-anime').css("background-position", "50% "+target_background_potition);
  pic_num1++;
  if (pic_num1 >= 15) pic_num1 = 0;
  setTimeout("flowSideAnime()", 67);
}
function flowAngleAnime(){
  var target_height = (100/(20-1));
  var target_background_potition = (target_height * pic_num2)+'%';
  $('.flow-angle-anime').css("background-position", "50% "+target_background_potition);
  pic_num2++;
  if (pic_num2 >= 20) pic_num2 = 0;
  setTimeout("flowAngleAnime()", 50);
}


// remove-scrollspy-active
$('.scrollspy-nav li').on('activate.bs.scrollspy', function () {
  $(".block").removeClass("active");
});


// capacity-count
$('.capacity-scrollspy').on('activate.bs.scrollspy', function () {
  $(".capacity").addClass("active");
  $('#stepper').zero().play();
});


// energy-chart-anime
$('.energy-scroollspy').on('activate.bs.scrollspy', function () {
  $(".energy").addClass("active");
});


// easy-control
$('.easy-control-scrollspy').on('activate.bs.scrollspy', function () {
  $(".easy-control").addClass("active");
});


// components-anime
$('.components-scrollspy').on('activate.bs.scrollspy', function () {
  $(".components").addClass("active");
});



// lightbox
$('.press-carousel-lightbox').magnificPopup({
  type: 'image'
});


// localscroll
$('.scrollspy-nav').localScroll();
