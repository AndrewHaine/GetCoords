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


$('#button').on('click', function(){
  var places = new Array();

  $('#results').empty();

  for (var i = 0; i < 3; i++) {
    var placeValue = document.getElementById('place_input_'+i).value;
    if (placeValue != "") {
      places.push(placeValue);
    };
  };
  for (var place in places) {
    $('#results').append('<div class="result-panel"><div class="placename">'+ places[place] + '</div><div class="longCo"><label for="LongCoIn">Longnitudinal:</label><input class="CoDisplay" value="52.439" readonly type="text" name="LongCoIn"></div><div class="latCo"><label for="LatCoIn">Latitudinal:</label><input class="CoDisplay" value="0.661" readonly type="text" name="LongCoIn"></div></div>');
  }
  console.log(places);
});



var map;
function initMap() {
  var myLatLng = {lat: -43.544, lng: 43.75};

  map = new google.maps.Map(document.getElementById('map-screen'), {
    center: myLatLng,
    zoom: 5
  });
}
