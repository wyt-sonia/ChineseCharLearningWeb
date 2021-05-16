$(document).ready(function() {
  var isGaming = false;

  $('#startBtn').click(function() {
    toggleContents(isGaming);
    isGaming = !isGaming;
  });

  function toggleContents(isGaming) {
    if (!isGaming) {
      $('.cover_container').fadeIn('5000');

      $('#startBtn').fadeOut('5000', function() {
        $('#startBtn').html('Back to Home');
        $('#startBtn').fadeIn();
      });

      $('body').fadeOut('5000');
      $('body').fadeOut(500, function() {
        $('body').css({
          background:
            "url('https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/chars5.jpg')",
          'background-size': 'cover'
        });
        $('body').fadeIn(1000);

        $('#cover_container').fadeOut(1);
        $('#game_container').fadeIn(1000);
      });
    } else {
      $('.cover_container').fadeIn('5000');

      $('#startBtn').fadeOut('5000', function() {
        $('#startBtn').html('Start the game');
        $('#startBtn').fadeIn();
      });

      $('body').fadeOut(500, function() {
        $('body').css({
          background:
            "url('https://raw.githubusercontent.com/wyt-sonia/ChineseCharLearningWeb/master/asset/Image/chars7.jpg')",
          'background-size': 'cover'
        });
        $('body').fadeIn(1000);
        $('#game_container').fadeOut(1);
        $('#cover_container').fadeIn(1000);
      });
    }
  }
});
