$(document).on('ready', function() {
  $('.single-item').slick({
    dots: true,
    infinite: false,
      variableWidth: true,
    responsive: [  {
        breakpoint: 768,
        variableWidth: true,
        settings: {
          dots:false
        }
      }, {
        breakpoint: 480,
        variableWidth: true,
        settings: {
          dots:false
        }
      },
    ]
  });



});
