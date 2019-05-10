$(document).on('ready', function() {

  jQuery(function($) {
    function fix_size() {
      var images = $('.two-column .row  .two-column-image img');
      images.each(setsize);

      function setsize() {
        var img = $(this),
          img_dom = img.get(0),
          container = img.parents('.two-column .row  .two-column-image ');
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
  $(':radio').change(function() {
  console.log('New star rating: ' + this.value);
});

});
