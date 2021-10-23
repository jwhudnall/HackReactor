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
    if(withinRange) {
        console.log('passed');
    } else {
        console.log(`FAIL [${testName}] "${actual}" not within range ${low} to ${high}`);
    }
  }