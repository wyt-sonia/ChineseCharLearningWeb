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

var st_htmls = [
  // 男
  '<div id="st_contents"> <div style="display: flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content" id="top" style="flex: 1;border-down:0px;"></div> <div class="st_content" id="down" style="flex: 1;border-top:0px;"></div> </div> </div> ',
  // 红
  '<div id="st_contents"> <div style="display: flex; flex-direction: row;height: 95%; width: 100%;"> <div class="st_content" id="left" style="flex:1;border-right:0px;"></div> <div class="st_content" id="right" style="flex:1;"></div> </div> </div>',
  // 进
  '<div id="st_contents"> <div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div style="display:flex; flex: 2;height: 100%; width: 100%;"><div class="st_content outer" id="0" style="flex: 1; border-right:0px; border-bottom:0px"></div><div class="st_content" id="inner" style="flex: 2"></div></div><div class="st_content outer" id="1" style="display:flex; flex: 1; border-top:0px"></div></div></div>',
  // 店
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px"></div><div style="display:flex; flex: 2;height: 100%; width: 100%;"><div class="st_content outer" id="1" style="flex: 1; border-right:0px; border-top:0px"></div><div class="st_content" id="inner" style="flex: 2"></div></div></div></div>',
  // 勾
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px"></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content" id="inner" style="flex: 2;" ></div> <div class="st_content outer" id="1" style="flex: 1;border-top:0px;border-left:0px" ></div> </div> </div></div>',
  // 闭
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"> <div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px" ></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content outer" id="1" style="flex: 1;border-top:0px;border-right:0px" ></div>  <div class="st_content" id="inner" style="flex: 2;"></div> <div class="st_content outer" id="2" style="flex: 1;border-top:0px;border-left:0px" ></div> </div> </div></div>',
  // 凶
  '<div id="st_contents"> <div style="display:flex; flex-direction: column;height: 95%; width: 100%;" > <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content outer" id="1" style="flex: 1;border-bottom:0px;border-right:0px" ></div> <div class="st_content" id="inner" style="flex: 2;"></div> <div class="st_content outer" id="2" style="flex: 1;border-bottom:0px;border-left:0px" ></div> </div> <div class="st_content outer" id="0" style="display:flex; flex: 1; border-top:0px" ></div> </div></div>',
  // 医
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="1" style="display:flex; flex: 1; border-bottom:0px" ></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;"> <div class="st_content outer" id="0" style="flex: 1;border-bottom:0px;border-right:0px;border-top:0px" ></div> <div class="st_content" id="inner" style="flex: 2;"></div> </div> <div class="st_content outer" id="2" style="display:flex; flex: 1; border-top:0px" ></div> </div> </div>',
  // 国
  '<div id="st_contents"><div style="display:flex; flex-direction: column;height: 95%; width: 100%;"><div class="st_content outer" id="0" style="display:flex; flex: 1; border-bottom:0px" ></div> <div style="display:flex; flex: 2;height: 100%; width: 100%;">  <div class="st_content outer" id="1" style="flex: 1;border-bottom:0px;border-right:0px;border-top:0px" ></div> <div class="st_content" id="inner" style="flex: 2;"></div> <div class="st_content outer" id="2" style="flex: 1;border-bottom:0px;border-left:0px;border-top:0px" ></div> </div> <div class="st_content outer" id="3" style="display:flex; flex: 1; border-top:0px" ></div> </div> </div>',
  // 树
  ' <div id="st_contents"> <div style="display: flex; flex-direction: row;height: 95%; width: 100%;"> <div class="st_content" id="left" style="flex:1;border-right:0px;"></div> <div class="st_content" id="mid" style="flex:1;"></div> <div class="st_content" id="right" style="flex:1; border-left:0px;"></div> </div> </div>',
  // 草
  '<div id="st_contents"> <div style="display: flex; flex-direction: row;height: 95%; width: 100%;"><div class="st_content" id="top" style="flex: 1; border-down:0px;"></div> <div class="st_content" id="mid" style="flex: 1; "></div> <div class="st_content" id="down" style="flex: 1; border-top:0px;"></div> </div> </div>'
];

// randomly display at parts
$(document).ready(function() {
  var currentItem = 0;
  var isGaming = false;
  var part = '';
  var isOuterFull = false;
  var counter = 0;
  var isSimple = true;

  freshUI(-1);

  $('#nextBtn').click(function() {
    currentItem++;
    if (currentItem == 10) {
      $('#nextBtn').fadeOut(1);
    }

    toggleIsSimple(currentItem);
    initST(currentItem);
    initParts(currentItem);
    toggleHintContent(-1);
  });

  $('#startBtn').click(function() {
    if (currentItem != 0 && isGaming) {
      currentItem = 0;
      freshUI(-1);
    }
    toggleContents(isGaming);
    initST(0);
    initParts(0);

    isGaming = !isGaming;
  });

  $('#hintBtn').click(function() {
    toggleHintContent(currentItem);
  });

  $(document).on('dragstart', '.parts', function(event) {
    console.log(event.target.id + ' is draged');
    part = event.target.id;
  });

  $(document).on('dragover', '.st_content', function(event, this) {
    if (!isSimple && event.target.id != 'inner') {
      if (!isOuterFull) {
        event.preventDefault();
        $('.outer').css({
          backgroundColor: 'white',
          opacity: '0.3',
          transition: 'all 0.3s ease'
        });
      }
    } else {
      if (this.childElementCount == 0) {
        event.preventDefault();
        $(event.target).css({
          backgroundColor: 'white',
          opacity: '0.3',
          transition: 'all 0.3s ease'
        });
      }
    }
  });

  $(document).on('dragleave', '.st_content', function(event, this) {
    partFadeBack(event);
  });

  $(document).on('drop', '.st_content', function(event, this) {
    if (isCorrect(event)) {
      partFadeBack(event);
      if (!isSimple && event.target.id != 'inner') { 
        if (!isOuterFull) {       
          document.getElementById("0").appendChild(document.getElementById(part));
          isOuterFull = false;
        }
      } else {
        if (this.childElementCount == 0) {
          this.appendChild(document.getElementById(part));
        }
      }

      document.getElementById(part).classList.remove("btn");
      document.getElementById(part).classList.remove("btn-outline-light");
      document.getElementById(part).setAttribute('draggable', false);
      var paddingT  = ($("#" + part).parent().height() - $("#" + part).height()) / 2; 

      $("#" + part).css ({
        paddingTop: paddingT,
        color: 'white',
        margin: '0',
        width: '100%',
        textAline: 'center',
      });
      if (isFullyCorrect()) {
        counter = 0;
        isOuterFull = false;
      }
    } else {
      partFadeBack(event);
    }
  });

  function toggleIsSimple(currentItem) {
    if (currentItem < 9 && currentItem > 1) {
      isSimple = false;
    } else {
      isSimple = true;
    }
  }

  function isFullyCorrect() {
    counter++;
    if (currentItem < 9) {
      return counter == 2;
    } else {
      return counter == 3;
    }
  }

  function partFadeBack(event) {
    if (!isSimple && event.target.id != 'inner') {
      if (!isOuterFull) {
        $('.outer').css({
          backgroundColor: 'transparent',
          opacity: '1',
          transition: 'all 0.3s ease'
        });
      }
    } else {
      console.log(document.getElementById(event.target.id).childElementCount);
      if (document.getElementById(event.target.id).childElementCount == 0) {
        $(event.target).css({
          backgroundColor: 'transparent',
          opacity: '1',
          transition: 'all 0.3s ease'
        });
      }
    }
  }

  function isCorrect(event) {
    var result = true;
    switch (currentItem) {
      case 0:
        if (
          (event.target.id == 'top' && part != '田') ||
          (event.target.id != 'top' && part == '田')
        ) {
          result = false;
        }
        break;
      case 1:
        if (
          (event.target.id == 'right' && part != '工') ||
          (event.target.id != 'right' && part == '工')
        ) {
          result = false;
        }
        break;
      case 2:
        if (
          (event.target.id == 'inner' && part != '井') ||
          (event.target.id != 'inner' && part == '井')
        ) {
          result = false;
        }
        break;
      case 3:
        if (
          (event.target.id == 'inner' && part != '占') ||
          (event.target.id != 'inner' && part == '占')
        ) {
          result = false;
        }
        break;
      case 4:
        if (
          (event.target.id == 'inner' && part != '厶') ||
          (event.target.id != 'inner' && part == '厶')
        ) {
          result = false;
        }
        break;
      case 5:
        if (
          (event.target.id == 'inner' && part != '才') ||
          (event.target.id != 'inner' && part == '才')
        ) {
          result = false;
        }
        break;
      case 6:
        if (
          (event.target.id == 'inner' && part != '乂') ||
          (event.target.id != 'inner' && part == '乂')
        ) {
          result = false;
        }
        break;
      case 7:
        if (
          (event.target.id == 'inner' && part != '矢') ||
          (event.target.id != 'inner' && part == '矢')
        ) {
          result = false;
        }
        break;
      case 8:
        if (
          (event.target.id == 'inner' && part != '玉') ||
          (event.target.id != 'inner' && part == '玉')
        ) {
          result = false;
        }
        break;
      case 9:
        if (part == '木') {
          result = event.target.id == 'left';
        } else if (part == '寸') {
          result = event.target.id == 'right';
        } else {
          result = event.target.id == 'mid';
        }
        break;
      case 10:
        if (part == '艹') {
          result = event.target.id == 'top';
        } else if (part == '曰') {
          result = event.target.id == 'mid';
        } else {
          result = event.target.id == 'down';
        }
        break;
    }
    return result;
  }

  function freshUI(currentItem) {
    toggleHintContent(currentItem);
    if (currentItem == -1) {
      $('#nextBtn').fadeOut(1);
    }
  }

  function toggleContents(isGaming) {
    if (!isGaming) {
      $('#nextBtn').fadeIn(1000);

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

  function initST(currentItem) {
    $('#st_container').fadeOut(500, function() {
      $('#st_container').html(st_htmls[currentItem]);
      $('#st_container').fadeIn();
    });
  }

  function initParts(currentItem) {
    $('#parts_items_container').fadeOut(500, function() {
      $('#parts_items_container').html(getParts(currentItem));
      $('#parts_items_container').fadeIn();
    });
  }

  function getParts(currentItem) {
    var partsHtml = '';
    for (i = 0; i < chineseCharPartList[currentItem].length; i++) {
      partsHtml +=
        "<div id='" +
        chineseCharPartList[currentItem][i] +
        '\' class="parts btn btn-outline-light" draggable="true">' +
        chineseCharPartList[currentItem][i] +
        '</div>';
    }
    return partsHtml;
  }
});
