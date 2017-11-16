$(document).ready(function(){

     function getQuote(){


        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            $("#quote").html(a[0].content + "<br />— " + a[0].title)

            cache: false;
        });

    };

    getQuote();


    $("#quoteButton").on('click', function(){
        $('#quote').fadeOut(300);
        getQuote();
        $('#quote').fadeIn(900);
    });




    //basic animations
    //$('.box:first').hide(500).show(800).delay(300)

    //index filters
    //$('p:first').css('border', '4px solid red');

    // relationship filters


    // attribute filters
    //$('p[class="quote-box"]'.css('border', '4px solid red'));


});
