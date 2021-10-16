// Conditionals 1
function isOldEnoughToDrink(age) {
    return age >= 21;
}

function isOldEnoughToDrive(age) {
    return age >= 16;
}

function isOldEnoughToVote(age) {
    return age >= 18;
}

function isOldEnoughToDrinkAndDrive(age) {
    // Always illegal to drink and drive in US
    return false;
}

// Objects 1
function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key) {
    obj[key] = true;
}

function removeProperty(obj, key) {
    delete obj[key];
}

// String Methods 1
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getLengthOfWord(word) {
    return word.length;
}

function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}

// Conditionals 2
function checkAge(name, age) {
    if (age < 21) {
        return `Go home, ${name}!`;
    } else {
        return `Welcome, ${name}!`;
    }
}

function isGreaterThan10(num) {
    return num > 10;
}

function isLessThan30(num) {
    return num < 30;
}

function equalsTen(num) {
    return num === 10;
}

// Conditionals 3
function isLessThan(num1, num2) {
    return num2 < num1;
}

function isGreaterThan(num1, num2) {
    return num2 > num1;
}

function isEqualTo(num1, num2) {
    return num1 === num2;
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 === 1;
}

function isSameLength(word1, word2) {
    return word1.length === word2.length;
}

function areBothOdd(num1, num2) {
    return num1 % 2 === 1 && num2 % 2 === 1;
}

function isEitherEven(num1, num2) {
    return num1 % 2 === 0 || num2 % 2 === 0;
}