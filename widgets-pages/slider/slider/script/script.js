$(document).on('ready', function() {
  $('.single-item').slick({
    dots: true,
    infinite: false,
      variableWidth: true,
    responsive: [  {
        breakpoint: 768,
        variableWidth: true,
        
      }, {
        breakpoint: 480,
        variableWidth: true,

      },
    ]
  });


  jQuery(function($) {
    function fix_size() {
      var images = $('.slider .slider-img-container img');
      images.each(setsize);

      function setsize() {
        var img = $(this),
          img_dom = img.get(0),
          container = img.parents('.slider .slider-img-container');
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
