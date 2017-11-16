var p = $('p');

function numberAdder() {
  var text, length;
  text = $(this).text();
  length = text.length;
  $(this).text(text + ' ' + length);
}

p.each(numberAdder);
