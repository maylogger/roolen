var windowHeight = $(window).height();
var scrollOffset = windowHeight / 3;
$('body').scrollspy({
  target: '#scrollspy',
  offset: scrollOffset
});

$('#scrollspy').on('activate.bs.scrollspy', function () {
  console.log("hello world");
})
