$(document).ready(function() {

  var placeInput = document.getElementsByName('place-input');

  $('.input-outer').on('click', function() {
      $(this).toggleClass('open');
      setTimeout($.proxy(function() {
        $(this).children('input').val('')
      }, this), 500);
    });
  $('.input-outer input').on('click', function(e) {
    e.stopPropagation();
  });
});

//Map Work
