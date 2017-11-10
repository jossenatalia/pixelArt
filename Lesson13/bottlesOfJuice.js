var num = 99;
var song;
while (num > 0) {
//   song = num + ' ' + (num == 1 ? 'bottle' : 'bottles') + ' of juice on the wall! ' + num + ' ' + ((num == 1) ? 'bottle ' : 'bottles') + ' of juice! Take one down, pass it around... ' + (num - 1) + ' ' + ((num - 1 == 1) ? 'bottle' : 'bottles') + ' of juice on the wall!';
//   num--;
//   console.log(song);

    if(num === 2) {
        song = '2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!';
    } else if(num === 1) {
        song = '1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!';
    } else {
        song = `${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num - 1} bottles of juice on the wall!`;
    }
    num--;
    console.log(song);
}
