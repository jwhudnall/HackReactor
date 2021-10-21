// Module 1 - Part 4 Exercises

// Array Methods 9
function filterOddLengthWords(words) {
    return words.filter(word => word.length % 2 === 1);
}

function filterEvenLengthWords(words) {
    return words.filter(word => word.length % 2 === 0);
}

function getLengthOfLongestElement(arr) {
    maxLen = 0;
    for (word of arr) {
        if (word.length > maxLen) {
            maxLen = word.length;
        }
    }
    return maxLen;
}

// Array Methods 10
function squareElements(arr) {
    return arr.map(num => num ** 2);
}

function filterOddElements(arr) {
    const oddElements = [];
    for (let num of arr) {
        if (num % 2 === 1) {
            oddElements.push(num);
        }
    }
    return oddElements;
}

// Advanced using .filter() :
function filterOddElements(arr) {
    return arr.filter(num => num % 2 === 1);
}

// Normal solution:
function computeProductOfAllElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let product = 1;
    for (let num of arr) {
        product *= num;
    }
    return product;
}
// .reduce() solution:
function computeProductOfAllElements(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((product, currentVal) => product * currentVal);
}

// Array Methods 11
function filterEvenElements(arr) {
    return arr.filter(num => num % 2 === 0);
}

function getLengthOfShortestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let minLen = +Infinity;
    for (word of arr) {
        if (word.length < minLen) {
            minLen = word.length;
        }
    }
    return minLen;
}

function getLongestElement(arr) {
    let maxLen = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLen.length) {
            maxLen = arr[i];
        }
    }
    return maxLen;
}

// Array Methods 12
function findSmallestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    smallestEl = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestEl) {
            smallestEl = arr[i];
        }
    }
    return smallestEl;
}

function findShortestElement(arr) {
    if (arr.length === 0) {
        return ''
    }
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}

// Array Methods 13
function getLargestElement(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function computeSumOfAllElements(arr) {
    return arr.reduce((accu, cV) => accu + cV, 0);
}

// Objects 7
function getElementsThatEqual10AtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined) {
        return []
    }
    // only array properties should make it this far
    const finalArr = [];
    for (let num of obj[key]) {
        if (num === 10) {
            finalArr.push(num);
        }
    }
    return finalArr;
}

function getElementsLessThan100AtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined) {
        return []
    }
    const elementArr = [];
    for (let val of obj[key]) {
        if (val < 100) {
            elementArr.push(val);
        }
    }

    return elementArr;
}

// Advanced 4
function countAllCharacters(str) {
    const charObj = {};
    for (char of str) {
        if (charObj[char] === undefined) {
            charObj[char] = 1;
        } else {
            charObj[char]++;
        }
    }

    return charObj;
}

// Objects 8
function getElementsGreaterThan10AtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || typeof obj[key] === undefined) {
        return [];
    }
    const newArr = [];
    for (let num of obj[key]) {
        if (num > 10) {
            newArr.push(num);
        }
    }

    return newArr;
}

function getFirstElementOfProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined) {
        return undefined;
    } else if (obj[key].length === 0) {
        return undefined
    } else {
        return obj[key][0];
    }
}

function getNthElementOfProperty(obj, key, n) {
    if (!Array.isArray(obj[key]) ||
        obj[key] === undefined ||
        obj[key].length === 0 ||
        n > obj[key].length - 1) {
        return undefined;
    }
    return obj[key][n];
}

function getLastElementOfProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined || obj[key].length === 0) {
        return undefined;
    } else {
        const lastIdx = obj[key].length - 1;
        return obj[key][lastIdx];
    }
}

// Array Methods 8
function removeElement(array, discarder) {
    return array.filter(n => n !== discarder);
}

function keep(array, keeper) {
    const finalArr = [];
    for (let num of array) {
        if (num === keeper) {
            finalArr.push(num);
        }
    }
    return finalArr;
}

function computeAverageOfNumbers(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let total = nums.reduce((total, cV) => total + cV);
    return total / nums.length;
}

// Objects 9
function getOddLengthWordsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined) {
        return [];
    }
    const oddWordsArr = [];
    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i].length % 2 === 1) {
            oddWordsArr.push(obj[key][i]);
        }
    }
    return oddWordsArr;
}

function getAverageOfElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined ||
        obj[key].length === 0) {
        return 0;
    }
    let sum = 0;
    for (let num of obj[key]) {
        sum += num;
    }
    return sum / obj[key].length;
}

function getEvenLengthWordsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key] === undefined || obj[key].length === 0) {
        return [];
    }
    const evenWordArr = [];
    for (let word of obj[key]) {
        if (word.length % 2 === 0) {
            evenWordArr.push(word);
        }
    }
    return evenWordArr;
}

// Objects 10
function getSquaredElementsAtProperty(obj, key) {
    if (obj[key] === undefined || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return [];
    }
    const squaredElements = obj[key].map(x => x ** 2);
    return squaredElements;
}

function getOddElementsAtProperty(obj, key) {
    if (obj[key] === undefined || !Array.isArray(obj[key]) ||
        obj[key].length === 0) {
        return [];
    }
    const array = obj[key];
    const oddElementArr = array.filter(x => x % 2 === 1);
    return oddElementArr;
}

function getEvenElementsAtProperty(obj, key) {
    if (obj[key] === undefined || !Array.isArray(obj[key]) ||
        obj[key].length === 0) {
        return [];
    }
    // Filters property array, leaving even numbers
    return obj[key].filter(x => x % 2 === 0);
}

// Objects 11
function getSmallestElementAtProperty(obj, key) {
    if (obj[key] === undefined || !Array.isArray(obj[key]) ||
        obj[key].length === 0) {
        return undefined;
    }
    let max = +Infinity;
    for (num of obj[key]) {
        if (num < max) {
            max = num;
        }
    }
    return max;
}

function getLargestElementAtProperty(obj, key) {
    if (obj[key] === undefined
        || !Array.isArray(obj[key])
        || obj[key].length === 0) {
        return undefined;
    }
    let max = -Infinity;
    for (let num of obj[key]) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function getAllButLastElementOfProperty(obj, key) {
    if (obj[key] === undefined
        || !Array.isArray(obj[key])
        || obj[key].length === 0) {
        return [];
    }
    const arrLength = obj[key].length;
    return obj[key].slice(0, arrLength - 1);
}

function getElementOfArrayProperty(obj, key, index) {
    if(obj[key] === undefined
      || !Array.isArray(obj[key])
      || obj[key].length == 0) {
          return undefined;
      }
      return obj[key][index];
  }