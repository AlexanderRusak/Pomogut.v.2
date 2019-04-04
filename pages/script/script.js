$(document).on('ready', function() {
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
          slidesToShow: 2,
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
    centerMode: false,
    variableWidth: true
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
  $('.slick-next').click(function() {
    var id_cat = $(this).children('p').attr('id')
    var id_tag = $(this).children('label').attr('id')
    if (id_tag){console.log(id_tag)}else{console.log(id_cat)}
  });
});
