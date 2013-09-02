var windowHeight = $(window).height();
var scrollOffset = windowHeight / 2;
$('body').scrollspy({
  target: '#scrollspy-target',
  offset: 140
});
