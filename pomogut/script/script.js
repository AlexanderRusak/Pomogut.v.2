$(document).on('ready', function() {
  $('.project-1-slider').slick({
    dots: false,
    infinite: false,
    speed: 200,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,



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


});
