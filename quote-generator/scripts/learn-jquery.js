$(document).ready(function(){

     function getQuote(){
         $.ajax({
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success:
                function(data) {
                var onceSaid = data.shift();
                $(".quote").html(onceSaid.content + "<p class='attribution'>— " + onceSaid.title + "</p>");
                $('.quote-box').fadeIn(900);

                },
        cache: false,
        });
        
        var q = $('p').text();
        $('.twitter-share-button').attr('data-text', q)

    };

    var width = $(window).width();
    var widthS= width.toString();
    var height = $(window).height() + 400;
    var heightS = height.toString();
    
    function getBackground() {
       
        $('.backgroundButton').prop('disabled', true);
        width += 1;
        widthS = width.toString();
        height += 1;
        heightS = height.toString();
        $('body').css('background-image', 'url(https://source.unsplash.com/user/jrkrelix/likes/' + widthS + 'x' + heightS + ')');
        $('.backgroundButton').prop('disabled', false);
    };


    getQuote();
    
    getBackground();

    
    $("#quoteButton").on('click', function(){
        $('.quote-box').fadeOut(300);
        getQuote();
    });

    $('#backgroundButton').on('click', function(){
        getBackground();
    });

    function tweetThis() {
        
        var q = $('p').text();
        var tweetUrl = 'https://www.twitter.com/share?text=';
        tweetUrl += q.replace(' ', '%20');
        console.log(tweetUrl);
        var win = window.open(tweetUrl, '_blank');
        win.focus();
    }

    $('#tweet-button').on('click', function(){
        tweetThis();
    })

});
