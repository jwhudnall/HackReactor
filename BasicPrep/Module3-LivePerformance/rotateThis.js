/* 
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another 
string inside the doubled string using familiar String 
methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/

function isRotated(string1, string2) {
	var target = string2;
	var doubledStr = string1 + string1;
	var isIncluded = doubledStr.includes(target);
	return isIncluded;
}

function assertEqual(expected, actual, testName) {
	if(expected === actual) {
		console.log('passed');
	} else {
		console.log(`FAILED [${testName}] Expected: ${expected}
vs. Actual: ${actual}`);
	}
}

// Tests
var inputstr1_1 = 'hello world';
var inputstr2_1 = 'orldhello w';
var expected1 = true;
var actual1 = isRotated(inputstr1_1, inputstr2_1);
assertEqual(expected1, actual1, 'Correctly identifies a rotated string');

var inputstr1_2 = 'hello world';
var inputstr2_2 = 'lo worldhel';
var expected1 = true;
var actual1 = isRotated(inputstr1_2, inputstr2_2);
assertEqual(expected1, actual1, 'Correctly identifies a rotated string');

// ========== Alternate Version, without Hint ==========
/* 
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

*/

function isStillRotated(string1, string2) {
    // declare target array of letters
    var targetArr = string1.split('');
    // declare working array of letters (copy of 1st)
    var workingArr = string2.split('');
    // iterate through all possible combinations (length of string1)
    for(let i = 0; i < targetArr.length; i++) {
      // rejoin target
      var targetStr = targetArr.join('');
      // rejoin current working
      var workingStr = workingArr.join('');
      // if these are equivalent, return true;
      if(targetStr === workingStr) {
        return true
      } else {
        var lastChar = workingArr.pop();
        workingArr.unshift(lastChar);
      }
      // else
        // capture popped value from working array
        // unshift popped value to working array
    }
    // return false
    return false;
  }


// Tests
var inputstr1_1 = 'hello world';
var inputstr2_1 = 'orldhello w';
var expected1 = true;
var actual1 = isStillRotated(inputstr1_1, inputstr2_1);
assertEqual(expected1, actual1, 'Correctly identifies a rotated string');

var inputstr1_2 = 'hello world';
var inputstr2_2 = 'lo worldhel';
var expected1 = true;
var actual1 = isStillRotated(inputstr1_2, inputstr2_2);
assertEqual(expected1, actual1, 'Correctly identifies a rotated string');