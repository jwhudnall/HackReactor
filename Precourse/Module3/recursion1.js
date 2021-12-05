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



// Recursion: "Regular" approach
var flatten1 = function(input) {
  var result = [];
  if(!Array.isArray(input)) {
    return input;
  }
  input.forEach(function(item) {
    result = result.concat(flatten1(item));
  });

  return result;
}

var input2 = [1, 2, [3, [[4]]], 5];
var result2 = flatten1(input1);
console.log(result2);