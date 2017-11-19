$(document).ready(function(){

     function getQuote(){
         $.ajax({
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success:
                function(data) {
                var onceSaid = data.shift();
                $(".quote").html(onceSaid.content + "<p>— " + onceSaid.title + "</p>");
                },
        cache: false,
        });
    };

    getQuote();

    $("#quoteButton").on('click', function(){
        $('.quote-box').fadeOut(300);
        getQuote();
        $('.quote-box').fadeIn(900);
    });
});
