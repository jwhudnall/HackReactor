/* 

You will be given an array that contains two strings. 
Your job is to create a function that will take those 
two strings and transpose them, so that the strings go 
from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d

*/

function transposeTwoStrings(array) {
    var transposed = '';
    var string1 = array[0];
    var string2 = array[1];
    var longerStr = longestStr(string1, string2);	
    for(let i = 0; i < longerStr.length; i++) {
      var firstChar = string1[i] || ' ';
      var secondChar = string2[i] || ' ';
      if(i === longerStr.length - 1) {
        transposed += `${firstChar} ${secondChar}`;
      } else {
          transposed += `${firstChar} ${secondChar}\n`;
      }
    }
    return transposed;
  }
  
  function longestStr(str1, str2) {
      if(str1.length >= str2.length) {
        return str1;
      } else {
        return str2;
      }
  }
  
  function assertEqual(expected, actual, testName) {
      if(expected === actual) {
        console.log('passed');
      } else {
          console.log(`Failed [${testName}] Expected: ${expected}
  vs. Actual: ${actual}`);
      }
  }
  
  // Test Cases
  var input1 = ['Hello', 'World'];
  var actual1 = transposeTwoStrings(input1);
  var expected1 = `H W\ne o\nl r\nl l\no d`;
  
  assertEqual(expected1, actual1, 'Correctly transposes "Hello World"');
  console.log('\n');
  console.log(transposeTwoStrings(['STRING1', 'str2']));
  console.log('\n');
  console.log(transposeTwoStrings(['str1', 'string2']));
  
  