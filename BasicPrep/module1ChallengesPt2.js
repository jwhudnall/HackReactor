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