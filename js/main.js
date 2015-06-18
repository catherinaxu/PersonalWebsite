$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });

    $("#person").click(function(event) {
        window.location.href = 'https://www.google.com/search?q=catherina+xu&oq=catherina+xu&aqs=chrome..69i57j69i60l3j69i59.2296j0j1&sourceid=chrome&es_sm=91&ie=UTF-8';
    });

    $("#linkedin").click(function(event) {
        window.location.href = 'https://linkedin.com/in/catherinaxu';
    });

    $("#github").click(function(event) {
        window.location.href = 'https://github.com/catherinaxu';
    });

    $("#facebook").click(function(event) {
        window.location.href = 'https://www.facebook.com/catherinaxu';
    });
});
