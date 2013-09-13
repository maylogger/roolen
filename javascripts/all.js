$(window).load(function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2;
  $('body').scrollspy({
    target: '#scrollspy',
    offset: scrollOffset
  });
})


$('#future-demo').carousel({
  interval: false
});


jQuery(".block-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".block-sub-title").fitText(2, { minFontSize: '24px', maxFontSize: '50px' });



