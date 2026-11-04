// Shared behaviour (jQuery)
$(function () {
  // Mobile menu toggle
  $('.menu-btn').on('click', function () { $('nav ul').toggleClass('open'); });
  $('nav ul a').on('click', function () { $('nav ul').removeClass('open'); });
  // Highlight current page link
  var page = location.pathname.split('/').pop() || 'index.html';
  $('nav ul a').each(function () { if ($(this).attr('href') === page) $(this).addClass('active'); });
  // Fade-in on scroll
  function reveal() {
    var bottom = $(window).scrollTop() + $(window).height() - 40;
    $('.fade').each(function () { if ($(this).offset().top < bottom) $(this).addClass('show'); });
  }
  reveal(); $(window).on('scroll resize', reveal);
  $('#year').text(new Date().getFullYear());
});
