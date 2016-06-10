var map;
var infowindow;
var MyLocation = {
    LAT: 30.29128,
    LNG: -97.73858
}
var newSearch = 'food';



function initMap() {
    var active = { lat: MyLocation.LAT, lng: MyLocation.LNG };

    map = new google.maps.Map(document.getElementById('map'), {
        center: active,
        zoom: 12
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: active,
        radius: 5000,
        type: [newSearch]
    }, callback);
    console.log(newSearch);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}

$('#submit').on('click', function() {
    newSearch = $('#address').val().trim();
    newSearch = "'" + newSearch + "'";
        initMap();
})

////////////////////////////////////////////////////////////////
//create a places search box. then weep.
///////////////////////////////////////////////////////////////