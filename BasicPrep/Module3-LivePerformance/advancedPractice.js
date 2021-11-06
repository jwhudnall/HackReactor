// Advanced Practice Guide Solutions
function findShortestWordAmongMixedElements(arr) {
    // if empty arr || arr.length === 0, return 0
    var stringArr = arr.filter(x => typeof x === 'string');
    if (stringArr.length === 0) {
        return '';
    }
    var shortest = stringArr[0];
    for (let i = 1; i < stringArr.length; i++) {
        var word = stringArr[i];
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'


function findSmallestNumberAmongMixedElements(arr) {
    var numArr = arr.filter(x => typeof x === 'number');
    if (numArr.length === 0) {
        return 0;
    }
    var smallest = numArr[0];
    for (var i = 1; i < numArr.length; i++) {
        var current = numArr[i];
        if (current < smallest) {
            smallest = current;
        }
    }
    return smallest;
}

function getLongestWordOfMixedElements(arr) {
    var strArr = arr.filter(x => typeof x === 'string');
    if (strArr.length === 0) {
        return '';
    }
    var longestWord = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        var currentWord = strArr[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}

/* 
Problem 2 on Galvanize Website:

Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, 
based on the provided cardData, return the appropriate network string (or undefined if there's no match).

var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

function detectNetwork(cardNumber, cardData) {
  // your solution here
}

// example
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'
*/

function detectNetwork(cardNumber, cardData) {
    // convert cardNumber to string;
    var cardNumStr = cardNumber.toString();
    var actualLength = cardNumStr.length;
    for (let i = 0; i < cardData.length; i++) {
        var issuer = cardData[i]['issuer/network'];
        var prefixArr = cardData[i]['prefixes'];
        var lengthArr = cardData[i]['lengths'];
        var isValidLength = lengthArr.includes(actualLength);
        var hasValidPrefix = validPrefix(cardNumStr, prefixArr);
        if (isValidLength && hasValidPrefix) {
            return issuer;
        }
    }
    return undefined;
}

function validPrefix(str, prefixArr) {
    for (let i = 0; i < prefixArr.length; i++) {
        if (str.indexOf(prefixArr[i]) === 0) {
            return true;
        }
    }
    return false;
}