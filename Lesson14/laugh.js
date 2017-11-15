/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(number) {
  var word = '';
  for(var i = 0; i < number; i++) {
      word += 'ha';
  }
  return word + '!';
}

console.log(laugh(10));
