function makeGrid() {
  const rowsNum = $('#input_height').val();
  const cellsNum = $('#input_width').val();
  const table = $('#pixel_canvas');
  const color = $('#colorPicker');

  //remove last pixelArt
  table.children().remove();

  for (let row = 0; row < rowsNum; row++) {
    table.append('<tr></tr>');
    for (let cell = 0; cell < cellsNum; cell++) {
      table.children().last().append('<td></td>');
    }
  };

  //use selected color
  $('td').click(function () {
    $(this).css('background-color', color.val());
  })
}

//generate table
$('#submit').click(function (e) {
  e.preventDefault();
  makeGrid();
});


