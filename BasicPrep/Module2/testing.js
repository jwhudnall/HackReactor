// Module 2: Testing

// assertEqual
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}

// assertArraysEqual
function assertArraysEqual(actual, expected, testName) {
    const sameLength = actual.length === expected.length;
    let sameValues = true;
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            sameValues = false;
        }
    }
    if (sameLength && sameValues) {
        console.log('passed');
    } else {
        return console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
}

// assertObjectsEqual
function assertObjectsEqual(actual, expected, testName) {
    const jsonActual = JSON.stringify(actual);
    const jsonExpected = JSON.stringify(expected);

    const identicalObjects = jsonActual === jsonExpected;
    if (identicalObjects) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected ${jsonExpected}, but got ${jsonActual}`)
    }
}

// assertWithinRange
function assertWithinRange(low, high, actual, testName) {
    const withinRange = actual >= low && actual <= high;
    if (withinRange) {
        console.log('passed');
    } else {
        console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
    }
}

// Clean Code Sample Testing
function addOne(val) {
    return val + 1;
}

function assert(condition, testName) {
    if (condition) {
        console.log('passed');
    } else {
        console.log(`FAILED ["${testName}"]`);
    }
}

// Test Suite
let result1 = addOne(2);
let result2 = addOne(-2);

assert(result1 === 3, "Should return result of a positive number added to 1");
assert(result2 === -1, "Should return result of a negative number added to 1");

// ** Applying assertEqual 1 **
// FUNCTION DEFINITION(S)
function square(n) {
    return n * n;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual(condition, message) {
    if(condition) {
      console.log('passed');
    } else {
      console.log(`FAILED ["${condition}"]. ${message}`);
    }
  }
  
  // TESTS CASES
  
  assertEqual(square(4) === 16, "Squaring a positive value should result in value * value");
  assertEqual(square(-4) === 16, "Squaring a negative value should result in value * value");

  // ** Applying assertEqual 2 **
  // Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
  
    for (var i = 0; i < array.length; i++) {
      doesEveryElementMatch = callbackFunction(array[i]);
      if(!doesEveryElementMatch) {
        return doesEveryElementMatch;
      }
    }
  
    return doesEveryElementMatch;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertEqual(actual, expected, testName) {
    if(actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED [${testName}]. Expected: ${expected}. Actual: ${actual}`);
    }
  }
  
  // TESTS CASES
  function lessThan10(num) {
    return num < 10;
  }
  
  const trueArray = [1,6,4,2,1];
  const falseArray = [1,10,4,1];
  
  assertEqual(every(trueArray, lessThan10), true, 'Should be true');
  assertEqual(every(falseArray, lessThan10), false, 'Should be false');