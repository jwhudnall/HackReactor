// Recursion: innerFunction Approach
var flatten = function(input) {
  var result = [];

  var innerFunction = function(array) {
    if (!Array.isArray(array)) {
      result.push(array);
      return;
    }

    array.forEach(function(item) {
      innerFunction(item);
    });

  };
  innerFunction(input);

  return result;
};

var input1 = [1, 2, [3, [[4]]], 5];
var result1 = flatten(input1);
console.log(`First Method Result: ${result1}`);