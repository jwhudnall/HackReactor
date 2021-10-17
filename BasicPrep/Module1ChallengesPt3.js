// Module 1, Part 3 Exercises

// Array String Methods 1
function getAllLetters(str) {
    return str.split('');
}

function getAllWords(str) {
    if (str === '') {
        return [];
    }
    return str.split(' ');
}

// Advanced 1
function countWords(str) {
    if (str === '') {
        return {}
    }
    count = {};
    wordArray = str.split(' ');

    for (word of wordArray) {
        if (count[word] === undefined) {
            count[word] = 1;
        } else {
            count[word]++;
        }
    }
    return count;
}

// Conditionals 6
function or(expression1, expression2) {
    if (!expression1 && !expression2) {
        return false;
    }
    return true;
}
//Advanced - Ternary Operator
function or(expression1, expression2) {
    return !expression1 && !expression2 ? false : true;
}

function isEitherEvenOrAreBoth7(num1, num2) {
    const eitherEven = num1 % 2 === 0 || num2 % 2 === 0;
    const both7 = num1 === 7 && num2 === 7;
    return eitherEven || both7;
}

function isEitherEvenAndLessThan9(num1, num2) {
    const eitherEven = num1 % 2 === 0 || num2 % 2 === 0;
    const lessThan9 = num1 < 9 && num2 < 9;
    return eitherEven && lessThan9;
}

// Advanced 2
function extend(obj1, obj2) {
    for (let key in obj2) {
        if (obj1[key] === undefined) {
            obj1[key] = obj2[key];
        }
    }
}

// Objects 6
function removeArrayValues(obj) {
    // iterate through obj
    // if typeof property is array, remove
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
}

function removeNumberValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            delete obj[key];
        }
    }
}

function removeStringValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            delete obj[key];
        }
    }
}

// Objects 4
function removeNumbersLargerThan(num, obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] > num) {
            delete obj[key];
        }
    }
}

function removeNumbersLessThan(num, obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] < num) {
            delete obj[key];
        }
    }
}

function removeStringValuesLongerThan(num, obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string' && obj[key].length > num) {
            delete obj[key];
        }
    }
}

// Objects 5
function removeEvenValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            delete obj[key];
        }
    }
}

function removeEvenValues(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            delete obj[key];
        }
    }
}

// Objects 5
function countNumberOfKeys(obj) {
    return Object.keys(obj).length;
}

function removeOddValues(obj) {
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'number' && value % 2 === 1) {
            delete obj[key];
        }
    }
}

// Array String Methods 2
function convertDoubleSpaceToSingle(str) {
    // split string into array by ' ';
    // join string using ' '
    const strArray = str.split('  ');
    return strArray.join(' ');
}

// Array Methods 7
function joinThreeArrays(arr1, arr2, arr3) {
    return arr1.concat(arr2).concat(arr3);
}

function addToFrontOfNew(arr, element) {
    const newArr = [...arr];
    newArr.unshift(element);
    return newArr;
}

function addToBackOfNew(arr, element) {
    const newArr = arr.slice();
    newArr.push(element);
    return newArr;
}
function getAllElementsButNth(array, n) {
    const newArr = array.slice();
    newArr.splice(n, 1);
    return newArr;
}

// Iteration 1
function getIndexOf(char, str) {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// Conditionals 7
function areValidCredentials(name, password) {
    const validName = name.length > 3;
    const validPassword = password.length > 8;
    return validName && validPassword;
}

function findMinLengthOfThreeWords(word1, word2, word3) {
    let shortestWord = +Infinity;
    const wordArr = [word1, word2, word3];
    for (let word of wordArr) {
        if (word.length < shortestWord) {
            shortestWord = word.length;
        }
    }
    return shortestWord;
}

function findMaxLengthOfThreeWords(word1, word2, word3) {
    const wordArr = [word1, word2, word3];
    let maxLen = -Infinity;

    for (let word of wordArr) {
        if (word.length > maxLen) {
            maxLen = word.length;
        }
    }
    return maxLen;
}

// Conditionals 9
function getLongestOfThreeWords(word1, word2, word3) {
    const wordArr = [word1, word2, word3];
    let longestWord = '';
    for (let word of wordArr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

function findShortestOfThreeWords(word1, word2, word3) {
    const wordArr = [word1, word2, word3];
    let shortestWord = word1;
    for (let i = 1; i < wordArr.length; i++) {
        if (wordArr[i].length < shortestWord.length) {
            shortestWord = wordArr[i];
        }
    }
    return shortestWord;
}

// Advanced 3
function select(arr, obj) {
    const newObj = {};
    // Iterate through arr
    // If key exists in object, assign obj[key] to new obj
    for (let i = 0; i < arr.length; i++) {
        const arrVal = arr[i];
        if (obj[arrVal] !== undefined) {
            newObj[arrVal] = obj[arrVal];
        }
    }
    return newObj;
}