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

var myLatLng;
var marker;
var map;
var bounds;
function addMarker(location, name){
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: name,
    animation: google.maps.Animation.DROP
  });
};
function panMap(center){
  map.panTo(center);
};
function screenSize(){
  if($(window).width() < 400){
    return true;
  } else{
    return false;
  }
};
myLatLng = {lat: 52.3555, lng: -1.1743};
function initMap() {
  map = new google.maps.Map(document.getElementById('map-screen'), {
    center: myLatLng,
    zoom: 5,
    disableDefaultUI: screenSize()
  });
};
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
        var placeLat = results[0].geometry.location.lat().toFixed(4);
        var placeLng = results[0].geometry.location.lng().toFixed(4);
        var properName = results[0].formatted_address;
        var myLatLng = {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
        addMarker(myLatLng, properName);
        $('#results').append('<div id="result_' +count+ '" class="result-panel"><div class="placename">'+ properName + '</div><div class="longCo"><label for="LongCoIn">Longnitudinal:</label><input class="CoDisplay lngCoInput" value="'+placeLng+'" readonly type="text" name="LongCoIn"></div><div class="latCo"><label for="LatCoIn">Latitudinal:</label><input class="CoDisplay latCoInput" value="'+placeLat+'" readonly type="text" name="LongCoIn"></div></div>');
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
    placeLat = $('.selected').find('.latCoInput').val();
    placeLng = $('.selected').find('.lngCoInput').val();
    placeName = $('.selected').find('.placename').text();
    intPlaceLat = parseFloat(placeLat);
    intPlaceLng = parseFloat(placeLng);
    myLatLng = {lat: intPlaceLat, lng: intPlaceLng};
    panMap(myLatLng);
    map.setZoom(10);

  };
  console.log(places);
});

$(document).on('click', '.result-panel', function(){
  $('#results').children('div').removeClass('selected');
  $(this).addClass('selected');
  $('#results').scrollTop = $(this).top;
  placeLat = parseFloat($(this).find('.latCoInput').val());
  placeLng = parseFloat($(this).find('.lngCoInput').val());
  myLatLng = {lat: placeLat, lng: placeLng};
  panMap(myLatLng);
  map.setZoom(10);
});
