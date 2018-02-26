let isPainting = false;

$('#grid').on('mousedown', 'td', function(){ 
    $( this ).css('background-color', $('#colorSelector').val());
    isPainting = true;
});

$('body').on('mouseup', function() {
    isPainting = false;
});

$('#grid').on('mouseover', 'td',function() {
    if(isPainting){
        $( this ).css('background-color', $('#colorSelector').val());
    }
});


$('document').ready(function() {
    makeGrid();
});

/*
@description Creates a html table used as painting canvas
*/
function makeGrid () {
    const CANVAS = $('#grid');
    const WIDTH = $('#gridWidth').val();
    const HEIGHT = $('#gridHeight').val();

    CANVAS.html(''); //clear canvas of any existing grid

    for (let row = 0; row < HEIGHT; row++) {
        CANVAS.append('<tr> </tr>');
        let columns = 0;

        while (columns < WIDTH) {
            //add <td> elements to each row
            CANVAS.children().last().append('<td></td>');
            columns++;
        }
    }
}