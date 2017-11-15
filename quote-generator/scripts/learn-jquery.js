$(document).ready(function(){

    //Basic selectors
    $('div[class="quote-box"]').css('padding', '100px 100px 100px 100px');


     function getQuote(){


        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
            $(".quote-box").append(a[0].content + "<p>— " + a[0].title + "</p>")
        });

        //$('p:first').replaceWith(quote)

        // animation
        $('div[class="quote-box"]').hide(1000).show(800);

    };

    getQuote();


    $("button").on('click', function(){
        getQuote;
    });


    //basic animations
    //$('.box:first').hide(500).show(800).delay(300)

    //index filters
    //$('p:first').css('border', '4px solid red');

    // relationship filters


    // attribute filters
    //$('p[class="quote-box"]'.css('border', '4px solid red'));


});
