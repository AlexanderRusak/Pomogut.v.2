

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
     jQuery(function($) {
       function fix_size() {
         var images = $('.project-1-slider .main-section-wave .image-wave .under-image-wave-background img');
         images.each(setsize);

         function setsize() {
           var img = $(this),
             img_dom = img.get(0),
             container = img.parents('.project-1-slider .main-section-wave .image-wave .under-image-wave-background');
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
     jQuery(function($) {
       function fix_size() {
         var images = $('.project-2-slider .main-section-wave .image-wave .under-image-wave-background img');
         images.each(setsize);

         function setsize() {
           var img = $(this),
             img_dom = img.get(0),
             container = img.parents('.project-2-slider .main-section-wave .image-wave .under-image-wave-background');
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
  $('.next-1').on('click', function() {
    $('.project-1-slider').slick('slickPrev');

  });
  $('.prev-1').on('click', function() {
    $('.project-1-slider').slick('slickNext');
  });
  $('.next-2').on('click', function() {
    $('.project-2-slider').slick('slickPrev');
  });
  $('.prev-2').on('click', function() {
    $('.project-2-slider').slick('slickNext');
  });

	$('#btn-hidden-for-modal').trigger( "click" );
});
