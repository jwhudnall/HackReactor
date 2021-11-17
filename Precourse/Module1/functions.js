var fun = function() {};

fun['x'] = 9;
fun[0] = 'cat';

console.log(fun['x']); // 9
console.log(fun[0]); // 'cat'

for(var k in fun) {
  console.log(k);
} // x, 0