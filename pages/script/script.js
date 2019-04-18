$(document).on('ready', function() {
  var result='{"0":[5,2,1,7],"1":[6,123,333],"2":[222,0],"3":[2334,23323232323,2,6,3],"4":[18,19]}';
  result=JSON.parse(result);
  var $sectionsCount=Object.keys(result).length;  //количество элементов(категорий) в JSON с сервера
  var $countsTabs = []
  var $totalTabs = 0;
  var $idTabs=[];
  var $idForTotalTabs=[];
  for (var num in result ) {
    $idTabs.push(result[num]); // запись массива с id для каждого из табов
    $countsTabs.push(result[num].length); // запись количества табов для кажой категории
  }
  function pushIdForTotalTabs($arrId){
    for (var i = 0; i < $arrId.length; i++) {
      for (var j = 0; j <$arrId[i].length; j++) {
        $idForTotalTabs.push($arrId[i][j]); //Запись общего количество табов

      }
    }
  }
  function generateCategories($countCategories){
    for (var i = 0; i < $countCategories; i++) {
      ////Каждая категория помечается порядковым тэгом
        $("#categories").append($(`<div id=${i}><a ><img data-lazy="./images/categories/girl.svg"></a><p>Личные данные это любая информация</p></div>`));
    }
  }
  function generateRows($rowsCount) {
    for (var i = 0; i < $rowsCount; i++) {
      $(".categories_data .for-slick").append($('<div class="row tags regularTabs"></div>')); //генерирует количество строк для табов
      var tabs =$countsTabs[i];
      for (var j = 0; j < tabs; j++) {
        //ДОБАВЛЯЕТ САМИ ТАБЫ С ПРИСВОЕНИЕМ ID СОГЛАСНО ПОЛУЧЕННОМУ json
        $('.regularTabs').eq(i).append($(`<div id=${$idTabs[i][j]}  class="tag-primary"><input type="radio"  name="radios"><label for="radio1">Проблемы с соблюдением правил </label></div>`));
      }
    }
    createTotalTabs(); // функия которая генерирует строку с суммарным количеством табов в категорих с присвоением ему порядкового согласно полученного  json
  }
  function createTotalTabs() {
    $(".categories_data .for-slick").append($('<div class="row tags totalTabs"></div>'));
    for (var j = 0; j < $idForTotalTabs.length; j++) {
      $('.totalTabs').append($(`<div id=${$idForTotalTabs[j]} class="tag-primary"><input type="radio"   name="radios"><label for="radio1">Проблемы с соблюдением правил </label></div>`));
    }
  }
  pushIdForTotalTabs($idTabs);
  generateCategories($sectionsCount);
  generateRows($sectionsCount);

  $(".regularTabs").css("display", "none");
  $("#categories div ").click(function() {
    var $count = $(this).index();
    alert($count);
    $(".regularTabs").css("display", "none");
    $(".regularTabs").eq($count).css("display", "block");
    $(".totalTabs").css("display", "none");
  })
    $(".tags div input[type=radio]+label ").click(function() {
      /////////////////////////////////////////////////////////////// styles
        $(".tags div input[type=radio]+label ").css("background-color","#fff");
        $(".tags div input[type=radio]+label ").css("color","#EB3450");
        $(this).css("background-color","#EB3450");
        $(this).css("color","#fff");
        ////////////////////////////////////////////////////////////


    });
    $(".tag-primary ").click(function() {
      /////////////////////////////////////////////////////////////// styles
        $(".tag-primary").css("background-color","#fff");
        $(this).css("background-color","#EB3450");
          ///////////////////////////////////////////////////////////////
        alert($(this).attr("id"));
    });
  $('.categories').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,
    arrows: true,

    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      },
    ]
  });

  $('.tags').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    variableWidth: true,
    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      }
    ]
  });
  jQuery(function($) {
    function fix_size() {
      var images = $('.articles a div img');
      images.each(setsize);

      function setsize() {
        var img = $(this),
          img_dom = img.get(0),
          container = img.parents('.articles a div');
        if (img_dom.complete) {
          resize();
        } else img.one('load', resize);

        function resize() {
          if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
            img.width('100%');
            img.height('auto');
            return;
          }
          img.height('100%');
          img.width('auto');
        }
      }
    }
    $(window).on('resize', fix_size);
    fix_size();

  });

});
