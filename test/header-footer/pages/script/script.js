$(document).on('ready', function() {
  var ajaxResult='{"id_for_girl1, title_for_girl1,./pages/images/categories/girl.svg":[["id_for_tab1","title_for_tab1"], ["id_for_tab2","title_for_tab2"],["id_for_tab3","title_for_tab3"]],"id_for_girl2, title_for_girl2, ./pages/images/categories/girl.svg":[["id_for_tab4","title_for_tab4"], ["id_for_tab5","title_for_tab5"],["id_for_tab6","title_for_tab6"]],"id_for_girl3, title_for_girl3, ./images/categories/girl.svg":[["id_for_tab7","title_for_tab7"], ["id_for_tab8","title_for_tab8"],["id_for_tab9","title for_tab9"]],"id_for_girl4, title_for_girl4,./images/categories/girl.svg":[["id_for_tab10","title_for_tab10"], ["id_for_ta11","title_for_tab11"],["id_for_tab12","title_for_tab12"]],"id_for_girl5, title_for_girl5,./images/categories/girl.svg":[["id_for_tab13","title_for_tab13"], ["id_for_tab14","title_for_tab14"],["id_for_tab15","title_for_tab15"],["id_for_extra1","title_for_extra1"],["id_for_extra2","title_for_extra2"]],"id_for_girl6, title_for_girl6,./pages/images/categories/girl.svg":[["id_for_tab16","title_for_tab16"], ["id_for_tab17","title_for_tab17"],["id_for_tab18","title_for_tab18"]]}';
  ajaxResult=JSON.parse(ajaxResult);
  var $countKeysAfterResult=Object.keys(ajaxResult).length;
  var $keysForCategories=[];
  var keysFullNames=[];
  for (var keys in ajaxResult) {
     $keysForCategories.push(keys.split(","));
     keysFullNames.push(keys);
  }
  var id_for_categories=[];
  var title_for_categories=[];
  var href_for_categories=[];
  for (var i = 0; i < $keysForCategories.length; i++) { //Запись ключей по значениям их в логике
//  alert($keysForCategories[i][0]);
  id_for_categories.push($keysForCategories[i][0]);
   //alert($keysForCategories[i][1]);
   title_for_categories.push($keysForCategories[i][1]);
//  alert($keysForCategories[i][2]);
   href_for_categories.push($keysForCategories[i][2]);
  }


var $valuesForCategories=[];
var id_for_tab=[];
var title_for_tab=[];
var common=[];

  $.each(ajaxResult,function(key,val){
     //alert(val[0].length);
     common.push(val[0].length);
  });

function generateAllCategories(){
  for (var i = 0; i < $countKeysAfterResult; i++) {
    ////Каждая категория помечается порядковым тэгом
      $("#categories").append($(`<div id=${$keysForCategories[i][0]} ><a ><img src=${$keysForCategories[i][2]}></a><p>${$keysForCategories[i][1]}</p></div>`));
  }
}
function generateAllTabs(){
  $(".categories_data .for-slick").append($('<div class="row tags totalTabs"></div>'));
  $.each(ajaxResult,function(key,val){
    // alert(val[0].length);
    // common.push(val[0].length);

    for (var i = 0; i < val.length; i++) {

          $('.totalTabs').append($(`<div id=${val[i][0]} title=${val[i][1]} class="tag-primary"><input type="radio"   name="radios"><label for="radio1">${val[i][1]} </label></div>`));

    }
  });

}

function generateCategariesTabs(){

var counter=0;
  $.each(ajaxResult,function(key,val){
    counter++;
    $(".categories_data .for-slick").append($('<div class="row tags regularTabs"></div>'));
        for (var j = 0; j <val.length; j++) {
          $('.regularTabs').eq(counter-1).append($(`<div id=${val[j][0]} title=${val[j][1]}  class="tag-primary"><input type="radio"  name="radios"><label for="radio1">${val[j][1]} </label></div>`));

          }
  });
}
 generateAllCategories();
generateAllTabs();
generateCategariesTabs()










/*  var result='{"55":[5,2,1,7],"22":[6,123,333],"44":[222,0],"33":[2334,23323232323,2,6,3],"77":[18,19],"88":[0,478]}';
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
        $("#categories").append($(`<div id=${Object.keys(result)[i]}><a ><img data-lazy="./images/categories/girl.svg"></a><p>Личные данные это любая информация</p></div>`));
    }
  }
  function generateRows($rowsCount) {
    for (var i = 0; i < $rowsCount; i++) {
      $(".categories_data .for-slick").append($('<div class="row tags regularTabs"></div>')); //генерирует количество строк для табов
      var tabs =$countsTabs[i];
      for (var j = 0; j < tabs; j++) {
        //ДОБАВЛЯЕТ САМИ ТАБЫ С ПРИСВОЕНИЕМ ID СОГЛАСНО ПОЛУЧЕННОМУ json
        $('.regularTabs').eq(i).append($(`<div id=${$idTabs[i][j]}  class="tag-primary"><input type="radio"  name="radios"><label for="radio1">Проблемы с соблдением правил </label></div>`));
      }
    }
    createTotalTabs(); // функия которая генерирует строку с суммарным количеством табов в категорих с присвоением ему порядкового согласно полученного  json
  }
  function createTotalTabs() {
    $(".categories_data .for-slick").append($('<div class="row tags totalTabs"></div>'));
    for (var j = 0; j < $idForTotalTabs.length; j++) {
      $('.totalTabs').append($(`<div id=${$idForTotalTabs[j]} class="tag-primary"><input type="radio"   name="radios"><label for="radio1">Проблемы с соблюдением правил </label></div>`));
    }
  }*/
//  pushIdForTotalTabs($idTabs);
//  generateCategories($sectionsCount);
//  generateRows($sectionsCount);

  $(".regularTabs").css("display", "none");

  $("#categories div ").click(function() {
    var width=screen.width;

      var $count = $(this).index();
      alert($(this).attr("id"));
      if (width<'590') {
          $('.categories_data .tags').css("display","none");
      }
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
        alert($(this).attr("id"));
          ///////////////////////////////////////////////////////////////
      //  alert($(this).attr("id"));
    });
    if ($(window).width()<'590') {
        $('.categories_data .tags').css("display","none");
    }
  $('.categories').slick({
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
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      }, {
        breakpoint: 590,
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


});
