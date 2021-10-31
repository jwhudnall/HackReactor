/* 
Given a list of non-negative integers and 
a target sum, find a pair of numbers that sums 
to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

*/

function findPairForSum(array, num) {
    var arr = array.slice();
    var pair = [];
    var target = num;
    while (arr.length > 0) {
        for (let i = 1; i < arr.length; i++) {
            var base = arr[0];
            var char = arr[i];
            if (sumsToTarget(base, char, target)) {
                pair.push(base, char);
                return pair;
            }
        }
        arr.shift();
    }

    return pair;
}

function sumsToTarget(num1, num2, target) {
    return num1 + num2 === target;
}

function assertEqual(expected, actual, testName) {
    if (expected === actual) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected: ${expected}
  vs. Actual: ${actual}`);
    }
}

// Test Cases
var actual1 = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var expected1 = [4, 5];
assertEqual(expected1, actual1, 'Correctly identifies pair summing to 9');




// ===== Alternate Solution =====
function findPairForSum(array, num) {
  var pair = [];
  for(let i = 0; i < array.length; i++) {
    var base = array[i];
    for(let j = i + 1; j < array.length; j++) {
      var char = array[j];
      if(base + char === num) {
        pair.push(base, char);
      }
    }
  }
  return pair;
}