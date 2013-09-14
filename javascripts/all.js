// scrollspy
$(window).load(function() {
  var windowHeight = $(window).height();
  var scrollOffset = windowHeight / 2;
  $('body').scrollspy({
    target: '#scrollspy',
    offset: scrollOffset
  });
})


// carousel
$('#future-demo').carousel({
  interval: false
});


// fittext
jQuery(".block-title").fitText(1.5, { minFontSize: '24px', maxFontSize: '50px' });
jQuery(".block-sub-title").fitText(2, { minFontSize: '24px', maxFontSize: '50px' });


// capacity-count
var capacity_count = $("#capacity-count .count");
var count;

$('.capacity').on('activate.bs.scrollspy', function () {
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

