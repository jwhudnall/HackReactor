/* 
===== Altitude Deltas =====
Please write a function that takes an array of integer altitudes along a hiking trail, 
as well as two indexes into that array. The two indexes represent the start and end of 
a segment in the array. We can assume that the array will only contain integers, and 
that the two indexes will be valid (i.e. they will exist in the input array, and will 
    make sense compared to each other - start is before end).

Your function should return the "sum of the changes for a walk within that segment" 
(i.e., beginning at the start index and ending at the end index). Each integer in the 
array represents another height on the trail, so "walking" will mean accumulating each 
change in height into a "sum of the changes".

Note that increases in height count double.

Here are some examples of your code running, assuming you have successfully created the 
described function. Please be sure to name the function "sumAltitudeDeltas".

let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
console.log(output_0); //--> 6

let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
console.log(output_1); //--> 7

let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); //--> 2

let output_3 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 4);
console.log(output_3); //--> 15

let output_4 = sumAltitudeDeltas([4, 1, 4, 0, 20, 13], 1, 4);
console.log(output_4); //--> 50
*/

function sumAltitudeDeltas(arr, start, end) {
    var total = 0;
    for (let i = start; i < end; i++) {
        var value = arr[i];
        var next = arr[i + 1];
        if (next > value) {
            var delta = (next - value) * 2;
            total += delta;
        } else if (next < value) {
            var delta = value - next;
            total += delta;
        } 
    }
    return total;
}

function assertEqual(expected, actual, testName) {
    if (expected === actual) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected: ${expected} vs. Actual: ${actual}`);
    }
}

// Test Cases
let output_0 = sumAltitudeDeltas([1, 2, 3, 1], 0, 3);
let expected_0 = 6;
assertEqual(expected_0, output_0, 'Correctly calculates total delta');

let output_1 = sumAltitudeDeltas([5, 3, 6, 7, 2], 2, 4);
let expected_1 = 7;
assertEqual(expected_1, output_1, 'Correctly calculates total delta');

let output_2 = sumAltitudeDeltas([5, 3, 6, 7, 2], 0, 1);
console.log(output_2); //--> 2







/*
===== Title =====
*/