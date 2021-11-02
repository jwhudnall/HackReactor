/* 
===== Convert Object To Array 1 =====
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:

1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.
*/
function transformFirstAndLast(array) {
  var first = array[0];
  var last = array[array.length - 1];
  var resultObj = {};
  resultObj[first] = last;
  return resultObj;
}

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(input))

/*
===== =====
*/

/*
===== =====
*/