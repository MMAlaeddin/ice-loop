$(document).ready(function() {
    $("#flavorform").submit(function(event) {
    var iceCreams = ["choco" , "straw" , "van"];
    iceCreams.forEach(function(iceCream) {
        alert("I love " + iceCream + " ?");
    });

    });

});