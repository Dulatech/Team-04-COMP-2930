var autocomplete, autocomplete2;
$(document).ready(function () {
    /** 
     * Enables the Departure and Destination Text inputs boxes to autocomplete the user's geographical location,. 
     */
    initAutocomplete();


    $("#autocomplete").focus(geolocate());
    $("#autocomplete2").focus(geolocate());
});
/** 
 * Enables the Departure and Destination Text inputs boxes to autocomplete the user's geographical location,. 
 */
function geolocate() {

    var geolocation = {
        lat: 49.25,
        lng: -122.8
    };
    var circle = new google.maps.Circle({
        center: geolocation,
        radius: 80000
    });
    autocomplete.setBounds(circle.getBounds());
    autocomplete2.setBounds(circle.getBounds());
}

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        // /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete')), {
            types: ['geocode']
        });
    autocomplete.setFields(['address_components', 'geometry']);


    //autocomplete.addListener('place_changed', fillInAddress);
    autocomplete2 = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('autocomplete2')), {
            types: ['geocode']
        });
    autocomplete2.setFields(['address_components', 'geometry']);


    //autocomplete2.addListener('place_changed', fillInAddress);
}
// To remain highlighted
var div = document.getElementById("buttons");
var btns = div.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

// Close collapse whenever you click outside of the box
$(document).click(function(e) {
    if (!($(e.target).is('.card') || $(e.target).is('.input-group') || $(e.target).is('#carYear') || $(e.target).is('#carMake')
    || $(e.target).is('#carModel') || $(e.target).is('.custom-select') || $(e.target).is('.input-group-prepend')
    || $(e.target).is('.input-group-text'))) {
    	$('.collapse').collapse('hide');	    
    }
});