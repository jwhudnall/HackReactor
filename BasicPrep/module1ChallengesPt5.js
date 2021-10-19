// Module 1 Challenges - Part 5

// Math 5
function calculateBillTotal(preTaxAndTipAmount) {
    let taxRate = .095
    let taxAmt = preTaxAndTipAmount * taxRate;
    let tipRate = .15
    let tipAmt = tipRate * preTaxAndTipAmount;

    return preTaxAndTipAmount + taxAmt + tipAmt;
}

// Iteration 2
function getStringLength(string) {
    // Can't use native length operations
    let count = 0;
    let str = string;
    while (str !== '') {
        str = str.slice(1);
        count++;
    }
    return count;
}

// Array Methods 14
function joinArrayOfArrays(arr) {
    return arr.reduce((accu, cV) => accu.concat(cV));
}

// Objects 12
function getProductOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined || !Array.isArray(obj[key]) ||
        obj[key].length === 0) {
        return 0;
    } else {
        return obj[key].reduce((accu, cV) => accu * cV, 1);
    }
}

// Advanced 5
function sumDigits(num) {
    let sum = 0;
    // convert number to a string
    let converted = num.toString();
    // if leading -, subtract 2nd string value from sum
    if (converted[0] === '-') {
        sum -= Number(converted[1]);
        converted = converted.slice(2);
    }
    for (let i = 0; i < converted.length; i++) {
        sum += Number(converted[i]);
    }
    return sum;
}
// Objects 13
function getSumOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined
        || !Array.isArray(obj[key])
        || obj[key].length === 0) {
        return 0;
    }
    return obj[key].reduce((total, next) => total + next);
}

// Array Methods 15
function findShortestWordAmongMixedElements(arr) {
    const strArr = arr.filter(x => typeof x === 'string');
    if (strArr.length === 0 || arr.length === 0) {
        return '';
    }
    let shortestWord = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i].length < shortestWord.length) {
            shortestWord = strArr[i];
        }
    }
    return shortestWord;
}

// Array Methods 15
function findSmallestNumberAmongMixedElements(arr) {
    const numArr = arr.filter(x => typeof x === 'number');
    if (numArr.length === 0 || arr.length === 0) {
        return 0;
    }
    let min = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] < min) {
            min = numArr[i];
        }
    }
    return min;
}

// Array Methods 16
function getLongestWordOfMixedElements(arr) {
    const strArr = arr.filter(x => typeof x === 'string');
    if (strArr.length === 0 || arr.length === 0) {
        return '';
    }
    let longestWord = strArr[0];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr.length > longestWord.length) {
            longestWord = strArr[i];
        }
    }
    return longestWord;
}

function getLargestNumberAmongMixedElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const numArr = [];
    for (let el of arr) {
        if (typeof el === 'number') {
            numArr.push(el);
        }
    }
    if (numArr.length === 0) {
        return 0;
    }
    let max = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }
    return max;
}

// Iteration 3
function computeSummationToN(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
  }