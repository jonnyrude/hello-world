$(document).ready(function(){

     function getQuote(){
         $.ajax({
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success:
                function(data) {
                var onceSaid = data.shift();
                $(".quote").html(onceSaid.content + "<p class='attribution'>— " + onceSaid.title + "</p>");
                },
        cache: false,
        });
    };

    var backgroundBool = true;

    var backgroundLibrary = [
        'https://unsplash.com/photos/_zKxPsGOGKg',
        'https://unsplash.com/photos/T6fDN60bMWY',
        'https://unsplash.com/photos/MqEUKtGpzqA'
        ];

    function getBackground() {

        if (backgroundBool === true) {

            backgroundBool = false;
            $('body').css('background-image', 'url(https://source.unsplash.com/featured/?design');
        } else {
            backgroundBool = true;
            $('body').css('background-image', 'url(https://source.unsplash.com/featured/?nature');
        }
    };

    getQuote();

    getBackground();

    $("#quoteButton").on('click', function(){
        $('.quote-box').fadeOut(300);
        getQuote();
        $('.quote-box').fadeIn(900);
    });

    $('#backgroundButton').on('click', function(){
        getBackground();
    });

});
