$(document).ready(function() {

  var placeInput = document.getElementsByName('place-input');

  $('.input-outer').on('click', function() {
      $(this).toggleClass('open');
      $(this).children('input').val('');
  });
  $('.input-outer input').on('click', function(e) {
    e.stopPropagation();
  });

});
