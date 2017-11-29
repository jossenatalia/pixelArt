function makeGrid() {
    const rows = $('#input_height').val();
    const cells = $('#input_width').val();
    const table = $('#pixel_canvas');
    const color = $('#colorPicker');

    table.children().remove();

    for (let i = 0; i < rows; i++) {
        table.append('<tr></tr>');
        for (let j = 0; j < cells; j++) {
            table.children().last().append('<td></td>');
        }
    };

    $('td').click(function () {
        $(this).css('background-color', color.val());
    })
}

$('#submit').click(function (e) {
    e.preventDefault();
    makeGrid();
});


