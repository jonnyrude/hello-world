
$('document').ready(function() {
    
    makeGrid([10,10]);
    setColor();
    $('#gridWidth').focus();

    $('#colorSelector').on('change', function() {
       setColor();
    });
});


function getDimensions() {
    var width = $('#gridWidth').val();
    var height = $('#gridHeight').val();
    return [width, height];
}


function makeGrid (dimensionsArray) {
    var canvas = $('#grid');
    var w = parseInt(dimensionsArray[0]);
    var h = parseInt(dimensionsArray[1]);
    
    if ((w > 0 && w <= 100) && (h > 0 && h <= 40)) {
    
        canvas.html(''); //clear canvas of any existing grid
        
        for (var row = 0; row < h; row++) {
        //add row
            canvas.append('<tr> </tr>')
            var columns = 0;
            while (columns < w) {
                //add <td> elements to each row
                canvas.children().last().append('<td></td>')
                columns++;
            }
        }
        $('.error').css('visibility', 'hidden');
    }
        else {
            $('.error').css('visibility', 'visible');
        }
    


    function setFlag(tOrF) {
        sessionStorage.setItem('brushFlag', tOrF);
    }

    $('td').on('mousedown', function(){
        var color = sessionStorage.getItem('brushColor');
        $( this ).css('background-color', color);
        setFlag(true);
    });

    $('td').on('mouseenter', function(){
        if(sessionStorage.getItem('brushFlag')){
            var color = sessionStorage.getItem('brushColor');
            $( this ).css('backround-color', color);
        }
    });

    $('document').on('mouseup', function(){
        setFlag(false);
    });
}

function setColor() {
    var color = $('#colorSelector').val();
    sessionStorage.setItem('brushColor', color);
}

