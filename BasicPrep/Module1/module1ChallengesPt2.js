// Module 1 Challenges - Part II

// Objects 2
function addFullNameProperty(obj) {
    obj['fullName'] = obj.firstName + ' ' + obj.lastName;
}

function addObjectProperty(obj1, key, obj2) {
    obj1[key] = obj2;
}

function isPersonOldEnoughToDrinkAndDrive(person) {
    return false;
}

// Objects 3
function isPersonOldEnoughToDrive(person) {
    return person.age >= 16;
}

function isPersonOldEnoughToVote(person) {
    return person.age >= 18;
}

function addArrayProperty(obj, key, arr) {
    // Bracket notation needed for "key" variable use
    obj[key] = arr;
}

// Array Methods 1
function getNthElement(array, n) {
    return array[n];
}

function getFirstElement(array) {
    return array[0];
}

function getLastElement(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

// Array Methods 2
function addToFront(arr, element) {
    arr.unshift(element);
    return arr;
}

// Math 2
function computeAreaOfARectangle(length, width) {
    return length * width;
}

function computePerimeterOfARectangle(length, width) {
    return length * 2 + width * 2;
}

function computePerimeterOfATriangle(side1, side2, side3) {
    return side1 + side2 + side3;
}

// Math 3
function computeTripledAreaOfARectangle(length, width) {
    const area = length * width;
    return area * 3;
}

function computePerimeterOfACircle(radius) {
    // 2 * pi * r = circumference
    return 2 * Math.PI * radius;
}

function computeAreaOfACircle(radius) {
    // area = pi * r ** 2
    return Math.PI * radius ** 2;
}

// Math 4
function computePower(num, exponent) {
    return num ** exponent;
}

function computeSquareRoot(num) {
    return Math.sqrt(num);
}

function doubleSquareRootOf(num) {
    const sqrt = Math.sqrt(num);
    return sqrt * 2;
}

// String Methods 3
function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}

// Array Methods 3
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function getElementsAfter(array, n) {
    return array.slice(n + 1);
}

function getElementsUpTo(array, n) {
    return array.slice(0, n);
}

// Array Methods 4
function getAllElementsButFirst(array) {
    array.shift();
    return array;
}

function getAllElementsButLast(array) {
    array.pop();
    return array;
}

function removeFromFront(arr) {
    arr.shift();
    return arr;
}

// Array Methods 5
function removeFromBackOfNew(arr) {
    lenOfArray = arr.length;
    return arr.slice(0, lenOfArray - 1);
}

function removeFromFrontOfNew(arr) {
    return arr.slice(1);
}

function countCharacter(str, char) {
    let count = 0;
    for (letter of str) {
        if (letter === char) {
            count++;
        }
    }
    return count;
}

// Array Methods 6
function removeFromBack(arr) {
    arr.pop();
    return arr;
}