$(document).on('ready', function() {

  $('.about-logos').slick({
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
jQuery(function($) {
  function fix_size() {
    var images = $('header .row .header-image img');
    images.each(setsize);

    function setsize() {
      var img = $(this),
        img_dom = img.get(0),
        container = img.parents('header .row .header-image');
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
    var images = $('header .row .header-logo img');
    images.each(setsize);

    function setsize() {
      var img = $(this),
        img_dom = img.get(0),
        container = img.parents('header .row .header-logo');
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
