$(document).on('ready', function() {
  var $girlsCount = $("#categories div a ").length;
  var $countsTabs = []
  var $totalTabs = 0;
  var $categoriesBlock = $('.categories');
  var $block = $categoriesBlock.children("div[counts]");
  for (var i = 0; i < $block.length; i++) {
    $countsTabs[i] = $($block[i]).attr("counts");
    $totalTabs += parseInt($countsTabs[i]);
  }

  function createTotalTabs() {
    $(".categories_data .for-slick").append($('<div class="row tags totalTabs"></div>'));
    for (var j = 0; j < $totalTabs - $girlsCount; j++) {
      $('.tags').append($('<div class="tag-primary"><input type="radio"  name="radios"><label for="radio1">Проблемы с соблюдением правил </label></div>'));
    }
  }

  function generateRows($rowsCount) {
    for (var i = 0; i < $rowsCount; i++) {
      $('<div class="row tags regularTabs"></div>').insertAfter($(".categories_data .for-slick"));
      generateTabs($countsTabs);
    }
  }

  function generateTabs($counts) {
    for (var j = 0; j < $counts[j].length; j++) {
      $('.tags').append($('<div class="tag-primary"><input type="radio"  name="radios"><label for="radio1">Проблемы с соблюдением правил </label></div>'));
    }
  }
  createTotalTabs();
  generateRows($girlsCount);
  $(".regularTabs").css("display", "none");
  $("#categories div ").click(function() {
    var $count = $(this).index();
    $(".regularTabs").css("display", "none");
    $(".regularTabs").eq($count).css("display", "block");
    $(".totalTabs").css("display", "none");
  })

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

});
