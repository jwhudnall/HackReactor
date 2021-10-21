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
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// Conditionals 8
function convertScoreToGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'INVALID SCORE'
    }
}

function convertScoreToGradeWithPlusAndMinus(score) {
    let modifier = '';
    if (score >= 60) {
        if (score.toString().length === 2) {
            let lastDigit = score.toString().slice(1);
            if (lastDigit >= 0 && lastDigit <= 2) {
                modifier = '-';
            } else if (lastDigit >= 8 && lastDigit <= 9) {
                modifier = '+';
            }
        } else if (score === 100) {
            modifier = '+';
        }
    }
    if (score >= 90 && score <= 100) {
        return 'A' + modifier;
    } else if (score >= 80 && score <= 89) {
        return 'B' + modifier;
    } else if (score >= 70 && score <= 79) {
        return 'C' + modifier;
    } else if (score >= 60 && score <= 69) {
        return 'D' + modifier;
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'INVALID SCORE';
    }
}

// Iteration 4
function computeFactorialOfN(n) {
    if (typeof n === 'number' && n > 0) {
        let total = 1;
        for (let i = n; i > 0; i--) {
            total *= i;
        }
        return total;
    }
}

// *** Recursive Solution ***
function computeFactorialOfN(n) {
    if (n === 0) {
        return 1;
    }
    return n * computeFactorialOfN(n - 1);
}

function repeatString(string, num) {
    let finalStr = '';
    for (let i = num; i > 0; i--) {
        finalStr += string;
    }
    return finalStr;
}

// Math 6
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    const total = principal * (1 + interestRate / compoundingFrequency) ** (compoundingFrequency * timeInYears);
    return total - principal;
}

// Advanced 6
function modulo(num1, num2) {
    if (typeof num1 === NaN || typeof num2 === NaN) {
        return NaN;
    } else if (typeof num1 === 'number' && num2 === 0) {
        return NaN;
    } else if (num1 === 0 && typeof num2 === 'number') {
        return 0;
    }
    let isNegative = false;;
    if (num1 < 0) {
        isNegative = true;
    }
    let intVal = Math.floor(Math.abs(num1) / Math.abs(num2));
    let remainder = Math.abs(num1) - (intVal * Math.abs(num2));

    if (isNegative) {
        const valueStr = `-${remainder}`;
        return parseInt(valueStr);
    } else {
        return Math.abs(remainder);
    }
}

// Advanced 6 ** Revised Solution **
function modulo(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || (typeof num1 === 'number' && num2 === 0)) {
        return NaN;
    } else if (num1 === 0 && typeof num2 === 'number') {
        return 0;
    }
    // Ternary: condition ? exprIfTrue : exprIfFalse
    let isNegative = true ? num1 < 0 : false;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    while (num1 >= num2) {
        num1 = num1 - num2;
    }
    const result = isNegative ? parseInt(`-${num1}`) : num1;
    return result;
}

// Iteration 5
function multiply(num1, num2) {
    let product = 0;
    // Ternary: condition ? exprIfTrue : exprIfFalse
    const isNegative = num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0 ?
        true : false;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    for (i = 1; i <= num2; i++) {
        product += num1;
    }
    return isNegative ? -product : product;
}

// Advanced 7
function isOddWithoutModulo(num) {
    num = Math.abs(num)
    while (num >= 2) {
        num -= 2;
    }
    return num === 1 ? true : false;
}

// Advanced 8
function isEvenWithoutModulo(num) {
    num = Math.abs(num);
    while (num >= 2) {
        num -= 2;
    }
    return num === 0 ? true : false;
}

// Iteration 6
function multiplyBetween(num1, num2) {
    if (num2 < num1 || num1 === num2) {
        return 0
    }
    let total = 1;
    while (num2 > num1) {
        total *= num1;
        num1++;
    }
    return total;
}

function computeSumBetween(num1, num2) {
    if (num2 < num1 || num2 === num1) {
        return 0;
    }
    let total = 0;
    while (num2 > num1) {
        total += num1;
        num1++;
    }
    return total;
}