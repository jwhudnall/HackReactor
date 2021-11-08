/*
===== Split Strings =====
Complete the function splitPairs such that it splits the input string into pairs of characters. 
If the input string has a length that is odd, then it should replace the missing second 
character of the final pair with an underscore _. Note, an empty string should make your 
function produce an empty array.
*/
function splitPairs(str) {
    const resultArr = [];
    // iterate over letters in str by 2
    for (let i = 0; i < str.length; i += 2) {
        // declare char1
        let char1 = str[i];
        // declare char2 || '_'
        let char2 = str[i + 1] || '_';
        resultArr.push(`${char1}${char2}`);
    }
    return resultArr;
}


/*
===== Highest Scoring Word =====
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function highestScoringWord(string) {
    let highScore = 0;
    let highScoreWord = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabet.split('');
    const alphaScore = {};

    for (let i = 0; i < alphaArr.length; i++) {
        let char = alphaArr[i];
        let letterScore = i + 1;
        alphaScore[char] = letterScore;
    }

    // split string on spaces into wordArr
    const wordArr = string.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        let wordScore = 0;
        for (let letter of word) {
            wordScore += alphaScore[letter];
        }
        if (wordScore > highScore) {
            highScore = wordScore;
            highScoreWord = word;
        }
    }
    return highScoreWord;
}





/*
===== Extract a Domain Name =====

Write a function that when given a URL as a string, parses out just the domain name and 
returns it as a string. For example:

Input1: "http://github.com/carbonfive/raygun  " Output1: "github"
Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"
Input3: "https://www.cnet.com  " Output3: "cnet"
*/

function getDomain(url) {
    let splitArr;
    // if url includes www.
    if (url.includes('www.')) {
        splitArr = url.split('www.');
    } else if (url.includes('://')) {
        splitArr = url.split('://');
    }
    console.log(splitArr)
    let target = splitArr[1];
    let domain = '';
    for (let i = 0; i < target.length; i++) {
        if (target[i] === '.') {
            return domain;
        } else {
            domain += target[i];
        }
    }
}

/* 
===== generateSampleView() - Again =====

*/
function generateSampleView(objArr) {
    const resultArr = [];
    // examine each object within objArr
    for (let i = 0; i < objArr.length; i++) {
        // if id is odd
        let userId = objArr[i].id;
        if (userId % 2 === 1) {
            // add users email to resultArr
            let userEmail = objArr[i].email;
            resultArr.push(userEmail);
            console.log(`Email pushed to resultArr: ${userEmail}`);
        } else {
            let currentUser = objArr[i];
            let userStreet = currentUser.address.street;
            let userSuite = currentUser.address.suite;
            let userCity = currentUser.address.city;
            let userZip = currentUser.address.zipcode;
            let addressStr = `${userStreet}, ${userSuite}, ${userCity}, ${userZip}`;
            console.log(`Address pushed to resultArr: ${addressStr}`);
            resultArr.push(addressStr);
        }
    }
    return resultArr;
}

function assertArraysEqual(actual, expected, testName) {
    // compare length
    const sameLength = actual.length === expected.length;
    if (!sameLength) {
        console.log(`failed ${testName}. Arrays should have the same length`);
        return;
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            console.log(`failed ${testName}. Expected: ${expected} vs. Actual: ${actual}`);
            return;
        }
    }
    console.log('passed');
}




// Test Suite

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

var actual = generateSampleView(users);
var expected = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];

assertArraysEqual(actual, expected, 'Correctly parses object data as described');