var isPainting = false;

$('#grid').on('mousedown', 'td', function(){
    $( this ).css('background-color', $('#colorSelector').val());
    isPainting = true;
});


$('#grid').on('mouseup', function(){
    isPainting = false;
});

$('#grid').on('mouseover', 'td',function(){
    if(isPainting){
        $( this ).css('background-color', $('#colorSelector').val());
    }
});

$('document').ready(function() {
    makeGrid([10,10]);
    $('#gridWidth').focus(); //Cursor to the first grid input
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
}