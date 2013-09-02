var windowHeight = $(window).height();
var scrollOffset = windowHeight / 3;
$('body').scrollspy({
  target: '#scrollspy',
  offset: scrollOffset
});
