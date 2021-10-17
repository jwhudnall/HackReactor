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