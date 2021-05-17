var chineseCharList = [
  '男',
  '红',
  '进',
  '店',
  '勾',
  '闭',
  '凶',
  '医',
  '国',
  '树',
  '草'
];

var pinyinList = [
  'nán',
  'hóng',
  'jìn',
  'diàn',
  'gōu',
  'bì',
  'xiōng',
  'yī',
  'guó',
  'shù',
  'cǎo'
];

var meaningList = [
  'male',
  'red',
  'enter',
  'shop',
  'tick',
  'close',
  'fierce',
  'medical',
  'country',
  'tree',
  'grass'
];

var chineseCharPartList = [
  ['力', '田'],
  ['纟', '工'],
  ['辶', '井'],
  ['广', '占'],
  ['勹', '厶'],
  ['门', '才'],
  ['乂', '凵'],
  ['匚', '矢'],
  ['囗', '玉'],
  ['木', '寸', '又'],
  ['艹', '曰', '十']
];

// randomly display at parts

$(document).ready(function() {
  var currentItem = 0;
  var isGaming = false;

  freshUI(-1);

  $('#nextBtn').click(function() {
    currentItem++;
    toggleHintContent(-1);
  });

  $('#startBtn').click(function() {
    if (currentItem != 0 && isGaming) {
      currentItem = 0;
      freshUI(-1);
    } else {
      toggleContents(isGaming);
    }

    isGaming = !isGaming;
  });

  $('#hintBtn').click(function() {
    toggleHintContent(currentItem);
  });

  function freshUI(currentItem) {
    toggleHintContent(currentItem);
    if (currentItem == -1) {
      $('#nextBtn').fadeOut(1);
    }
  }

  function toggleContents(isGaming) {
    if (!isGaming) {
      $('#nextBtn').fadeIn(00);

      $('.cover_container').fadeIn(1000);

      $('#startBtn').fadeOut(500, function() {
        $('#startBtn').html('Back to Home');
        $('#startBtn').fadeIn();
      });

      $('body').fadeOut(500);
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
      $('#nextBtn').fadeOut(500);

      $('.cover_container').fadeIn(1000);

      $('#startBtn').fadeOut(500, function() {
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

  function toggleHintContent(currentItem) {
    if (currentItem != -1) {
      $('#hintBtn').fadeOut(500);
      $('#pinyin').fadeOut(500, function() {
        $('#pinyin').html('Pin Yin: ' + pinyinList[currentItem]);
        $('#pinyin').fadeIn();
      });
      $('#meaning').fadeOut(500, function() {
        $('#meaning').html('Meaning: ' + meaningList[currentItem]);
        $('#meaning').fadeIn();
      });
      $('#chinese_char').fadeOut(500, function() {
        $('#chinese_char').html(chineseCharList[currentItem]);
        $('#chinese_char').fadeIn();
      });
    } else {
      $('#hintBtn').fadeIn(500);
      $('#pinyin').fadeOut(500, function() {
        $('#pinyin').html('');
        $('#pinyin').fadeIn();
      });
      $('#meaning').fadeOut(500, function() {
        $('#meaning').html('');
        $('#meaning').fadeIn();
      });
      $('#chinese_char').fadeOut(500, function() {
        $('#chinese_char').html('');
        $('#chinese_char').fadeIn();
      });
    }
  }
});
