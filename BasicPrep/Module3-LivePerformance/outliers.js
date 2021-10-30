// Passed in 17 minutes

/* 
Given a string of even and odd numbers, 
find which is the sole even number or the 
sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 
3 - Third number is odd, while the rest 
of the numbers are even

detectOutlierValue("1 10 1 1");  //=> 
2 - Second number is even, while the rest 
of the numbers are odd
*/

function detectOutlierValue(numString) {
    var numArr = numString.split(' ');
    var evenArr = [];
    var oddArr = [];
    // Iterate through each array value
    for(let i = 0; i < numArr.length; i++){
      var value = numArr[i];
      if(isEven(value)) {
          evenArr.push(value);
      } else {
          oddArr.push(value);
      }
    }
    if(evenArr.length > oddArr.length) {
      // odd is the outlier
      var targetIndex = numArr.indexOf(oddArr[0]);  
      return parseInt(targetIndex + 1);
    } else {
        // even is the outlier
        var targetIndex = numArr.indexOf(evenArr[0]);
        return parseInt(targetIndex + 1);
    }
  
    // if evenArr.length > oddArr.length: 
      // Odd is the outlier. Capture index of this value and return 
  // else:
      // Even is the outlier. Capture/return index of val.
      // return integer of index (1-indexed)
  }
  
  function isEven(num) {
      return parseInt(num) % 2 === 0;
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
  var input1 = "2 4 7 8 10";
  var actual1 = detectOutlierValue("2 4 7 8 10");
  var expected1 = 3
  assertEqual(expected1, actual1, 'Correctly identifies odd number at index 3');
  
  var input2 = "1 10 1 1";
  var actual2 = detectOutlierValue(input2);
  var expected2 = 2;
  assertEqual(expected2, actual2, 'Correctly identifies an even outlier within string');