var windowHeight = $(window).height();
var scrollOffset = windowHeight / 3;
$('body').scrollspy({
  target: '#scrollspy',
  offset: scrollOffset
});

$('#scrollspy').on('activate.bs.scrollspy', function () {
  $('#scrollspy-item').each(function(){
    if $(this).scrollTop() == 0 {
      $(this).addClass('active')
    }
  });
})
