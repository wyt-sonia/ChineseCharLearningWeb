$(document).ready(function() {
  $('#startBtn').click(function() {
    $('.cover_container').fadeOut('5000');
    $('#container').css('background-image', "url('/css/images/css.jpg')");
  });
  $('#backBtn').click(function() {
    $('.cover_container').fadeIn('5000');
  });
});
