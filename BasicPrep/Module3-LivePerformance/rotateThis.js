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