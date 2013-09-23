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
$('#future-demo').carousel({
  interval: false
});


// fittext
jQuery(".block-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".block-sub-title").fitText(2, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".item-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });


// mist-animation
// $('.smart').on('activate.bs.scrollspy', function () {
//   pic_num = 0;
  // chImg();
// });

//demo mist
// mistAnime();
flowAngleAnime();
flowSideAnime();
var pic_num = 0;
var pic_num1 = 0;
var pic_num2 = 0;
function mistAnime(){
  var target_height = (100/(15-1));
  var target_background_potition = (target_height * pic_num).toFixed(2) - 0.05 + '%';
  $('.mist').css("background-position-y",  target_background_potition );
  pic_num++;
  console.log(pic_num + ',' + target_background_potition);
  if (pic_num >= 15) pic_num = 0;
  setTimeout("mistAnime()",150);
}
function flowSideAnime(){
  var target_height = $(".flow-side").height();
  $('.flow-side-anime').css("background-position-y",  (-target_height) * pic_num1);
  pic_num1++;
  console.log(pic_num1);
  if (pic_num1 >= 14) pic_num1 = 0;
  setTimeout("flowSideAnime()",100);
}
function flowAngleAnime(){
  var target_height = $(".flow-angle").height();
  $('.flow-angle-anime').css("background-position-y",  (-target_height) * pic_num2);
  pic_num2++;
  console.log(pic_num2);
  if (pic_num2 >= 19) pic_num2 = 0;
  setTimeout("flowAngleAnime()",100);
}


// remove-scrollspy-active
$('.scrollspy-nav li').on('activate.bs.scrollspy', function () {
  $(".block").removeClass("active");
});


// capacity-count
var capacity_count = $("#capacity-count .count");
var count;

$('.capacity-scrollspy').on('activate.bs.scrollspy', function () {
  $(".capacity").addClass("active");
  count = 0;
  countUp();
});

function countUp() {
  capacity_count.text(count.toFixed(2));
  count = count + 0.125;
  if (count > 3) {
    capacity_count.text(3.15);
    return false;
  }
  setTimeout(countUp, 25);
}


// energy-chart-anime
$('.energy-scroollspy').on('activate.bs.scrollspy', function () {
  $(".energy").addClass("active");
});


// lightbox
$('.press-carousel-lightbox').magnificPopup({
  type: 'image'
});


// localscroll
$('.scrollspy-nav').localScroll();
