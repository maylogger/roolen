// scrollspy

$(window).load(function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2;
  $('body').scrollspy({
    target: '#scrollspy',
    offset: scrollOffset
  });

  setTimeout(function(){

      $('.home .block').each(function(){
        var windowScrollTop = $(window).scrollTop();
        var windowHalf = windowScrollTop + scrollOffset;
        if ( $(this).offset().top < windowHalf && $(this).offset().top + $(this).height() > windowHalf ) {
          $(this).addClass("active");
        }
      });

  }, 2000);


}).resize( function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2;
  $('body').scrollspy("refresh", {
    target: '#scrollspy',
    offset: scrollOffset
  });
  // 檢查用
  // console.log( $("body").data("bs.scrollspy").options);
  // console.log( $("body").data("bs.scrollspy").offsets);
});


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
jQuery(".block-sub-title").fitText(2, { minFontSize: '20px', maxFontSize: '50px' });
jQuery(".press-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".item-title").fitText(2, { minFontSize: '14px', maxFontSize: '26px' });


// three way pill
$('#low').click(function(){
  $('#three-way-demo-mode').removeClass().addClass('low');
});
$('#high').click(function(){
  $('#three-way-demo-mode').removeClass().addClass('high');
});
$('#auto').click(function(){
  $('#three-way-demo-mode').removeClass().addClass('auto');
});


//mist & flow anime
var pic_num = 0;
var pic_num1 = 0;
var pic_num2 = 0;
var mist_anime;
var flow_side_anime;
var flow_angle_anime;

function mistAnime(){
  var target_height = (100/(15-1));
  var target_background_potition = (target_height * pic_num)+'%';
  $('.mist').css("background-position", "50% "+target_background_potition);
  pic_num++;
  if (pic_num >= 15) pic_num = 0;
  mist_anime = setTimeout("mistAnime()",67);
}

function flowSideAnime(){
  var target_height = (100/(15-1));
  var target_background_potition = (target_height * pic_num1)+'%';
  $('.flow-side-anime').css("background-position", "50% "+target_background_potition);
  pic_num1++;
  if (pic_num1 >= 15) pic_num1 = 0;
  flow_side_anime = setTimeout("flowSideAnime()", 67);
}

function flowAngleAnime(){
  var target_height = (100/(20-1));
  var target_background_potition = (target_height * pic_num2)+'%';
  $('.flow-angle-anime').css("background-position", "50% "+target_background_potition);
  pic_num2++;
  if (pic_num2 >= 20) pic_num2 = 0;
  flow_angle_anime = setTimeout("flowAngleAnime()", 50);
}


// remove-scrollspy-active
$('.scrollspy-nav li').on('activate.bs.scrollspy', function () {
  $(".block").removeClass("active");
  clearTimeout(mist_anime);
  clearTimeout(flow_side_anime);
  clearTimeout(flow_angle_anime);
});


// mist-animation
$('.smart-scrollspy').on('activate.bs.scrollspy', function () {
  mistAnime();
});


// .three-way-anime

$('.three-way-scrollspy').on('activate.bs.scrollspy', function () {
  $(".three-way").addClass("active");
});

// capacity-count
$('#stepper').zero();
$('.capacity-scrollspy').on('activate.bs.scrollspy', function () {
  $(".capacity").addClass("active");
  $('#stepper').play();
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
  flowSideAnime();
  flowAngleAnime();
});


// lightbox
$('.press-carousel-lightbox').magnificPopup({
  type: 'image'
});
$('.popup-youtube').magnificPopup({
  type: 'iframe'
});


// localscroll
$('.scrollspy-nav').localScroll();
