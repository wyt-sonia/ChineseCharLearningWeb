$(document).ready(function() {
  $('#startBtn').click(function() {
    $('body').fadeOut('5000');
    $('body').fadeOut(500, function() {
      $('body').css({
        background:
          "url('https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/chars5.jpg')",
        'background-size': 'cover'
      });
      $('body').fadeIn(1000);
    });
  });
  $('#backBtn').click(function() {
    $('.cover_container').fadeIn('5000');
    $('body').fadeOut(500, function() {
      $('body').css({
        background:
          "url('https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/chars7.jpg')",
        'background-size': 'cover'
      });
      $('body').fadeIn(1000);
    });
  });
});
