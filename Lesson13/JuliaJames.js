var x = 1;

while (x < 21) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log('JuliaJames');
    x++;
  }
  else if (x % 3 === 0) {
    console.log('Julia');
    x++;
  } else if (x % 5 === 0) {
    console.log('James');
    x++;
  } else {
    console.log(x);
    x++;
  }
}
