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

// ** Decorate a Student List **
// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
    const studentArr = [];
    // creates an object for each string in the input array, with an age of 10 or 11
    for (let name of classList) {
        const studentObj = { name: name, age: getRandomIntInclusive(10, 11) };
        // Add object 
        studentArr.push(studentObj);
    }
    // returns an array of these objects
    return studentArr;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual) {
    return low <= actual && high >= actual;
}

function testPopulateStudentList(inputArr, outputObj) {
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] !== outputObj[i].name) {
            // end function & log failure message
            console.log(`FAILED: Incorrect name at index: ${i}`);
            return;
        }
        if (!assertWithinRange(10, 11, outputObj[i].age)) {
            // end function & log failure message
            console.log(`FAILED: Incorrect age at index: ${i}`);
        }
    }
    console.log('passed');
    return;
}

// TESTS CASES
const classList1 = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
    "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
    "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

const classListWithAges1 = decorateClassListWithAges(classList1);
testPopulateStudentList(classList1, classListWithAges1);

// ** Isograms **

/* Directions: An isogram is a word that has no repeating letters, 
consecutive or non-consecutive. Your task is to write and test 
a function that determines whether a string is an isogram, following 
the format of the previous problems. It should return true if the 
input string is an isogram, and should return false otherwise. */

// Original Solution:
function isIsogram(text) {
    const usedLetters = [];
    for (let i = 0; i < text.length; i++) {
        const letter = text[i].toLowerCase();
        if (usedLetters.indexOf(letter) !== -1) {
            return false;
        } else {
            usedLetters.push(letter);
        }
    }
    return true;
}

// SOLUTION FOLLOWING SKELETON CODE:
function isIsogram(text) {
    // add each char to a set
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    // note: a set drops dup values
    // thus, to see if all the chars were unique,
    const letterSet = new Set();
    for (let letter of text) {
        letter = letter.toLowerCase();
        letterSet.add(letter);
    }
    // check length of text and the size of the set
    return text.length === letterSet.size;
}

// Test Function(s)
function assertIsogram(expected, actual, testName) {
    if (expected === actual) {
        console.log('passed');
    } else {
        console.log(`FAILED ["${testName}"] Expected: ${expected} vs Actual: ${actual}`);
    }
}

// Tests
const true1 = 'race';
const result1 = isIsogram(true1);
assertIsogram(true, result1, 'Correctly identifies an Isogram');

const false1 = 'racecar';
const result2 = isIsogram(false1);
assertIsogram(false, result2, 'Correctly returns false if not an Isogram');

// ** Interpret a Skeleton **
// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
    // Break up individual word into individual letters.
    const wordArr = word.split('');
    // Count the instances of each letter
    const counts = {};
    for (let letter of wordArr) {
        if (counts[letter] === undefined) {
            counts[letter] = 1;
        } else {
            counts[letter]++;
        }
    }
    // Iterate all the counts and find the highest
    let maxCount = 0;
    // Return this word's max repeat count
    for (let key in counts) {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
        }
    }
    return maxCount;
}

function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';

    // Break up input text into words (space-delimited).
    const wordArr = text.split(' ');
    // For each word...
    for (let i = 0; i < wordArr.length; i++) {
        const word = wordArr[i];
        const repeatCountForWord = findMaxRepeatCountInWord(word);
        // If that max repeat count is higher than the overall max repeat count, then
        if (repeatCountForWord > maxRepeatCountOverall) {
            // update maxRepeatCountOverall
            maxRepeatCountOverall = repeatCountForWord;
            wordWithMaxRepeatCount = word;
            // update wordWithMaxRepeatCount
        }
    }
    return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(expected, actual, testName) {
    if (expected === actual) {
        console.log('passed');
    } else {
        console.log(`FAILED ["${testName}"] Expected: ${expected} vs Actual: ${actual}`);
    }
}

// TESTS CASES
const sample1Text = "This raacea is fast";
const sample1Solution = findFirstWordWithMostRepeatedChars(sample1Text);
assertEqual('raacea', sample1Solution, "Correctly identifies word with most repeated characters");

