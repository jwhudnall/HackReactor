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
===== Convert Object To Array 1=====
*/
function getAllKeys(obj) {
  var keyArr = [];
  for (let key in obj) {
    keyArr.push(key);
  }
  return keyArr;
}

/*
===== Convert Array to Object 2 =====
*/
function transformArrayToObject(array) {
  var pairObj = {};
  for (let i = 0; i < array.length; i++) {
    var key = array[i][0];
    var val = array[i][1];
    pairObj[key] = val;
  }
  return pairObj;
}

function assertObjEqual(expected, actual, testName) {
  var expectedJSON = JSON.stringify(expected);
  var actualJSON = JSON.stringify(actual);
  if (expectedJSON === actualJSON) {
    console.log('passed');
  } else {
    console.log(`FAILED [{testName}] Expected: ${expected}
vs. Actual: ${actual}`);
  }
}
var input1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
var expected1 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1964
};
var actual1 = transformArrayToObject(input1);

assertObjEqual(expected1, actual1, 'Correctly identifies equivalent, stringified objects');

/*
===== Convert Object to Array 2 =====
*/
function listAllValues(obj) {
  var values = [];
  for (let key in obj) {
    var value = obj[key];
    values.push(value);
  }
  return values;
}

/*
===== Convert Array To Object 3 =====
*/
function transformEmployeeData(employeeData) {
  var finalData = [];
  // Input is array of arrays
  for (let i = 0; i < employeeData.length; i++) {
    var employeeObj = {};
    for (let j = 0; j < employeeData[i].length; j++) {
      var key = employeeData[i][j][0];
      var value = employeeData[i][j][1];
      employeeObj[key] = value;
    } finalData.push(employeeObj);
  }
  return finalData;
}

/* 
===== Find Shortest Element =====
*/

function findShortestElement(arr) {
  var shortestWord = '';
  var shortestLength = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    var currentStr = arr[i];
    if (currentStr.length < shortestLength) {
      shortestWord = currentStr;
      shortestLength = currentStr.length;
    }
  }
  return shortestWord;
}