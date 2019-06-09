

$(document).on('ready', function() {
  /////////////////////////////////////////////////////////////////   //for you


////////////////////////////////////////////////////////////////////////////////
  $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
 	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
         if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
 	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
         }
 	    return false; // выключаем стандартное действие
     });

  $('.project-1-slider').slick({
    dots: false,
    infinite: false,
    speed: 200,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }
  ]


      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object

  });
  $('.project-2-slider').slick({
    dots: false,
    infinite: false,
    speed: 200,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }
  ]


  });
  $('.about-logos').slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 3,
    arrows: true,

    responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: false,
        }
      },
    ]
  });
  var countSlidersProject_1= ($('.project-1-slider .slick-slide .image-wave').length-1).toString();
  var countSlidersProject_2= ($('.project-2-slider .slick-slide .image-wave').length-1).toString();
  var childrenOfProject_1=$(".project-1-slider .slick-list .slick-track").children();
    var childrenOfProject_2=$(".project-2-slider .slick-list .slick-track").children();
    $(".arrows .next-1").css("opacity","0.3");// имитация неактивной кнопик
    $(".arrows .next-2").css("opacity","0.3");//


  $('.next-1').on('click', function() {
    $('.project-1-slider').slick('slickPrev');
    $(".arrows .prev-1").css("opacity","1.0");
    for (var i = 0; i < childrenOfProject_1.length; i++) {
      if($('.project-1-slider .slick-slide').eq(i).attr("data-slick-index")=="0" && $('.project-1-slider .slick-slide').eq(i).attr("aria-hidden")=="false" ){
        $(".arrows .next-1").css("opacity","0.3");
      }
    }
  });
  $('.prev-1').on('click', function() {
    $('.project-1-slider').slick('slickNext');
    $(".arrows .next-1").css("opacity","1");
      for (var i = 0; i < childrenOfProject_1.length; i++) {
        if($('.project-1-slider .slick-slide').eq(i).attr("data-slick-index")==countSlidersProject_1 && $('.project-1-slider .slick-slide').eq(i).attr("aria-hidden")=="false" ){

          $(".arrows .prev-1").css("opacity","0.3");
        }

      }


  });
  $('.next-2').on('click', function() {
    $('.project-2-slider').slick('slickPrev');
    $(".arrows .prev-2").css("opacity","1.0");
    for (var i = 0; i < childrenOfProject_2.length; i++) {
      if($('.project-2-slider .slick-slide').eq(i).attr("data-slick-index")=="0" && $('.project-2-slider .slick-slide').eq(i).attr("aria-hidden")=="false" ){
        $(".arrows .next-2").css("opacity","0.3");
      }


    }
  });
  $('.prev-2').on('click', function() {
    $('.project-2-slider').slick('slickNext');
    $(".arrows .next-2").css("opacity","1");
      for (var i = 0; i < childrenOfProject_2.length; i++) {
        if($('.project-2-slider .slick-slide').eq(i).attr("data-slick-index")==countSlidersProject_2 && $('.project-2-slider .slick-slide').eq(i).attr("aria-hidden")=="false" ){

          $(".arrows .prev-2").css("opacity","0.3");
        }

      }
  });

	$('#btn-hidden-for-modal').trigger( "click" );
  $('.g-recaptcha div div:first-child iframe').attr('style',' border:2px solid red !important');

  ///////////////////////////////////////////
$(".arrows .next-light").css("display","none");
$(".arrows .prev-light").css("display","none");

});
