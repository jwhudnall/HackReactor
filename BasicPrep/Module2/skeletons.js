/* ** Part 2 Skeletons **
Skeletons are essentially functions that have an outline built into them, 
but no actual code yet. They are presented in a half-completed form, 
and your task will be to complete the code based on the outline, 
then use an assertion function that makes sense based on the return value 
of the function(s) we are asking you to create. 

You will then write code for something we will call a test suite. */

// ** Average **
// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    const total = sum(numbers);
    // returns the average of an array of numbers
    return total / numbers.length;
}

function sum(numbers) {
    // returns the sum of an array of numbers
    return numbers.reduce((total, next) => total + next);
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(expected, actual, testName) {
    if (expected === actual) {
        console.log('passed');
    } else {
        console.log(`FAILED ['${testName}']. Expected: ${expected}. Actual: ${actual}`)
    }
}


// TESTS CASES
// Positive case
const test1ArrInput = [2, 2, 2, 2, 2];
const test1ArrOutput = average(test1ArrInput);
const test1Expected = 2;
assertEqual(test1Expected, test1ArrOutput, "Should take the average of positive numbers");

// Negative case
const test2ArrInput = [-2, -2, -2, -2, -2];
const test2ArrOutput = average(test2ArrInput);
const test2Expected = -2;
assertEqual(test2Expected, test2ArrOutput, "Should take the average of negative numbers");

// Mix case
const test3ArrInput = [-2, -2, 2, 2, 5];
const test3ArrOutput = average(test3ArrInput);
const test3Expected = 1;
assertEqual(test3Expected, test3ArrOutput, "Should take the average of positive and negative numbers");