$(document).ready(function() {

  var placeInput = $('.place-input');

  $('.input-outer').on('click', function() {
    $(this).children('input').prop('disabled', false);
    if($(this).hasClass('open')){
      $(this).children('input').prop('disabled', true);
    };
    $(this).toggleClass('open');
    setTimeout($.proxy(function() {
      $(this).children('input').val('');
    }, this), 500);
  });
  $('.input-outer input').on('click', function(e) {
    e.stopPropagation();
  });
});

//Map Work



var map;
var myLatLng = {lat: -43.544, lng: 43.75};
function initMap() {


  map = new google.maps.Map(document.getElementById('map-screen'), {
    center: myLatLng,
    zoom: 5
  });
}
var geocoder;
$('#button').on('click', function(){
  var places = new Array();

  $('#results').empty();

  for (var i = 0; i < 3; i++) {
    var placeValue = document.getElementById('place_input_'+i).value;
    if (placeValue != "") {
      places.push(placeValue);
    };
  };
  count = 0;
  for (var place in places) {
    geocoder = new google.maps.Geocoder();
    var placeStr = places[place];
    geocoder.geocode({address: placeStr}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK){
        //console.log('Coolio');
        console.log(results[0].formatted_address+ ':');
        console.log('Latitude: ' + results[0].geometry.location.lat());
        console.log('Longitude: ' + results[0].geometry.location.lng());
        var placeLat = results[0].geometry.location.lat().toFixed(4);
        var placeLng = results[0].geometry.location.lng().toFixed(4);
        var properName = results[0].formatted_address;
        $('#results').append('<div id="result_' +count+ '" class="result-panel"><div class="placename">'+ properName + '</div><div class="longCo"><label for="LongCoIn">Longnitudinal:</label><input class="CoDisplay" value="'+placeLng+'" readonly type="text" name="LongCoIn"></div><div class="latCo"><label for="LatCoIn">Latitudinal:</label><input class="CoDisplay" value="'+placeLat+'" readonly type="text" name="LongCoIn"></div></div>');
        count++;
        if(count == places.length){
          addSelected();
        }
      } else {
        console.log('Not Coolio');
        console.log(status);
      }
    })
  }
  function addSelected(){
    $('.result-panel:first-child').addClass('selected');
    //console.log('done');
    //placeLat = $('#result>.latCo>input').value
    //placeLng = $('.result-panel:first-child>.longCo>input').value
    //console.log(placeLat);
    //myLatLng = {lat: placeLat, lng: placeLng};
    //initMap();
  };
  console.log(places);

});

$(document).on('click', '.result-panel', function(){
  $('#results').children('div').removeClass('selected');
  $(this).addClass('selected');
});
