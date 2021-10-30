/*
Flip every chunk of n characters in a string, 
where n is any positive integer greater than 1.

Note that this is intentionally very similar to 
the previous problem.

Please focus on getting a working solution with 
the tools you know well.

Practice the interactive/collaborative interview 
style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

function flipEveryNChars(input, n) {
    var result = '';
    const inputArr = input.split('');
    // for every n indices:
    for(let i = 0; i < inputArr.length; i+=n) {
      const targetSlice = inputArr.slice(i, i + n);
      targetSlice.reverse();
      result += targetSlice.join('');
    }
    return result;
  }
  
  function assertEqual(expected, actual, testName) {
      if(expected === actual) {
          console.log('passed');
      } else{
          console.log(`FAILED [${testName}]. Expected: ${expected}
  vs. Actual: ${actual}`);
      }
  }
  
  // Test Cases
  var input1 = 'a short example';
  var output1 = flipEveryNChars(input1, 5);
  var expected1 = 'ohs axe trelpma';
  assertEqual(expected1, output1, "Correctly reverses string where n = 5");
  
  var input2 = 'abcdefgh';
  var output2 = flipEveryNChars(input2, 4);
  var expected2 = 'dcbahgfe';
  assertEqual(expected2, output2, 'Correctly reverses string where n = 4')