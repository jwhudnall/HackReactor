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