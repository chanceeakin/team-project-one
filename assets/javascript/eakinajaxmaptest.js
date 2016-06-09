$(document).ready(function() {
    $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Austin,+TX&key=AIzaSyDaaBh-p6JLeuyUa265yJu6qdXcw4nt56g',
            type: 'GET',
        })
        .done(function(response) {
            console.log(response);
        })
        .fail(function(response) {
            console.log("error");
        })
        .always(function(response) {
            console.log("complete");
        });
});
