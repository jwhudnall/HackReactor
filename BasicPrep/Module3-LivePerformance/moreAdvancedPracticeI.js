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
===== A Request From Corporate =====
Let us walk through the idea for this problem, as it is somewhat more complex than usual. 
The problem will require you to write two functions. One function will accomplish a task 
of some kind, and the other function will be an assertion function which can be used to 
compare your answer with an expected answer.

The first function you will write will be called generateSampleView. The input for this 
function will always be an array of objects, theoretically the result of a call to an API, 
or database. generateSampleView will take this array as its parameter, and return an array 
of strings based upon conditions that we will describe in a moment. The format of this 
input array of objects is described below:

var users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];
Note: your function will be tested with a longer input, but the format will remain consistent 
for each user in the input array.

Your function should examine each user object, and add to the array return value for this function 
one of the following:

If the value of the id property is odd, add the user's email to the return array
If the value of the id property is even, your function should create a new string for the given user, 
add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to 
the return array
Thus, if our input was the users array listed above, our output would be:

var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
The second function you will write will be called assertArraysEqual. It will be a function that takes 
three parameters: actual will be an array of scalar values, and should ideally be the result of calling 
a function that you are testing. (presumably the function being tested should return an array of scalar 
    values); expected, also an array of scalar values, should be the theoretical result of calling your 
    function (or, what you "expect" the function to return). Finally, testName will be a string, and 
    should describe what a call to assertArraysEqual is verifying about the function being tested.

Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to strings so I can 
compare two strings" type of technique to implement this.

There are typically two things that we must check in order to determine that two arrays of scalar values 
are indeed equal to one another. Do they have the same length, and do they contain the same values. Thus, 
your function must make a determination about these issues, then either log 'passed' to the console or else 
'failed', as well as the testName to the console. The tests for this function will check to see if your 
console.log message for a passing case contains 'passed', and 'failed' for a failing case (both in lower case).
*/
function generateSampleView(objArr) {
    // declare resultArr
    const resultArr = [];
    // Examine each user within objArr
    for (let i = 0; i < objArr.length; i++) {
        let userId = objArr[i].id;
        if (userId % 2 === 1) {
            let userEmail = objArr[i].email;
            resultArr.push(userEmail);
        } else if (userId % 2 === 0) {
            let userStreet = objArr[i].address.street;
            let userSuite = objArr[i].address.suite;
            let userCity = objArr[i].address.city;
            let userZip = objArr[i].address.zipcode;
            let userString = `${userStreet}, ${userSuite}, ${userCity}, ${userZip}`;

            resultArr.push(userString);
        }
    }
    return resultArr;
}

function assertArraysEqual(actual, expected, testName) {
    // compare lengths, failing if different
    let hasEqualLen = actual.length === expected.length;
    if (!hasEqualLen) {
        console.log(`failed [${testName}]. Arrays should have the same length.`)
        return;
    }
    // iterate through actual, comparing values, failing if any anomalies
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log(`failed [${testName}]. Expected: ${expected[i]} vs. Actual: ${actual[i]}`);
            return;
        }
    }
    console.log('passed');
}

// Tests
var users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
];

var actual1 = generateSampleView(users);
var expected1 = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
assertArraysEqual(actual1, expected1, 'Correctly trims users in requested order');

var actual2 = generateSampleView(users);
var expected2 = ["Sincere@april.biz a", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];
assertArraysEqual(actual2, expected2, 'Correctly trims users');

/*
===== Title =====
*/