$(document).on('ready', function() {
  $('.single-item').slick({
    dots: true,
    infinite: false,
    responsive: [  {
        breakpoint: 768,
        settings: {
          dots:false
        }
      }, {
        breakpoint: 480,
        settings: {
          dots:false
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
