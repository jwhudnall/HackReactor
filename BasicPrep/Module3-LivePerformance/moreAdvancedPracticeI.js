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
===== Check Winner for Connect Four =====
Write a function called 'checkWinner'. This function will take an array with a length of 7. 
Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of 
either of these is possible (i.e. input will always be of length 7, and elements will only 
be 'red', 'black', or 0).

Your function should accept this array as its only parameter.

If there are 4 'red' elements consecutively in a row, 'checkWinner' 
should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively 
in a row, 'checkWinner' should return the string: 'Black Wins!'. If neither of these is the 
case, 'checkWinner' should return 'Draw!'.

Here are some examples of your code running, assuming you have successfully created the described 
function. Please be sure to name the function "checkWinner".

let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
console.log(draw); // -> 'Draw!'

*/
function checkWinner(arr) {
    var redStreak = 0;
    var blackStreak = 0;

    for (let i = 0; i < arr.length; i++) {
        var current = arr[i];
        if (current === 'black') {
            blackStreak++;
            redStreak = 0;
            if (blackStreak === 4) {
                return 'Black Wins!';
            }
        } else if (current === 'red') {
            redStreak++;
            blackStreak = 0;
            if (redStreak === 4) {
                return 'Red Wins!';
            }
        } else {
            redSreak = 0;
            blackStreak = 0;
        }
    }
    return 'Draw!';
}

function assertEqual(expected, actual, testName) {
    if (expected === actual) {
        console.log('passed');
    } else {
        console.log(`FAILED [${testName}] Expected: ${expected} vs. Actual: ${actual}`);
    }
}

// Tests
let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
let expected1 = 'Black Wins!';
assertEqual(expected1, blackWinner, 'Correctly classifies Black winning.')

let redWinner = checkWinner([0, 0, 0, 'red', 'red', 'red', 'red']);
let expected2 = 'Red Wins!';
assertEqual(expected2, redWinner, 'Correctly classifies Red winning.')

let draw = checkWinner(['red', 'red', 'red', 'black', 'red', 'black', 0]);
let expected3 = 'Draw!';
assertEqual(expected3, draw, 'Correctly classifies a draw.');




/*
===== Title =====
*/