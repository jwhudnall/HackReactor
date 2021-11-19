/*
var fun = function() {};

fun['x'] = 9;
fun[0] = 'cat';

console.log(fun['x']); // 9
console.log(fun[0]); // 'cat'

for(var k in fun) {
  console.log(k);
} // x, 0

*/

// var fun = function() {
//   console.log(2);
// }

// var res = fun();
// console.log(res);

// Parameters and Arguments
var fun = function(input) {
  console.log(arguments[0]);
};

setTimeout(function(){
  fun('hi');
}, 2000);

var myFunc = function(arg1, arg2, arg3, arg4) {
  console.log(arguments[2]);
    return arguments[2];
}
myFunc('Hello', 'World');


var myFunc = function(myStr) {
  console.log('lamp shade');
  return myStr;
}

setTimeout(myFunc('Hello World'), 1500);