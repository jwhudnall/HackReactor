/* 
Binary search is a technique for very rapidly searching 
a sorted collection by cutting the search space in half 
at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only 
the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only 
the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint 
and get a fractional number, just round it down 
("floor" it).
*/

function binarySearch(arr, target) {
    var startingIndex = 0;
    var endingIndex = arr.length - 1;
    // While startingIndex <= endingIndex
    while(startingIndex <= endingIndex) {
      var middleIndex = Math.floor((startingIndex + endingIndex) / 2);
      var currentSearch = arr[middleIndex];  
      if(target === currentSearch) {
        return middleIndex;
      } else if(target > currentSearch) {
          startingIndex = middleIndex + 1;
      } else {
          // target < midIndex
          endingIndex = middleIndex - 1;
      }
    }
    return null;
  }
  
  function assertEqual(expected, actual, testName) {
      if(expected === actual) {
          console.log('passed');
      } else {
          console.log(`FAILED [${testName}]. Expected: ${expected}
  vs. Actual: ${actual}`);
      }
  }
  
  // Test Cases
  var input1 = [1,2,3,4,5,6,7,8,9,10];
  var actual1 = binarySearch(input1,3);
  var expected1 = 2;
  assertEqual(expected1, actual1, "Correctly identifies index of target within sorted array");
  
  
  var input2 = [2,4,6,8,10,12,14,16,18,20,100];
  var actual2 = binarySearch(input2, 18);
  var expected2 = 8;
  assertEqual(expected2, actual2, "Correctly identifies index");
  
  var input3 = [2,4,6,8,10,12,14,16,18,20,100];
  var actual3 = binarySearch(input2, 19);
  var expected3 = null;
  assertEqual(expected3, actual3, "Correctly returns null if target not in array");