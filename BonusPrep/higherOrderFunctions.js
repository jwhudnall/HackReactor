// Callback Functions
function cbFunction(x, y, z) {
    return x + y + z
}

function caller(x, y, z, cbFunction) {
    console.log('In caller function!')
    // your code here
    return cbFunction(x, y, z);
}

let x = caller(1, 2, 3, cbFunction)

// Creating MAP function manually
function map(array, callbackFunction) {
    const mappedArr = [];
    for (let val of array) {
        let value = callbackFunction(val);
        mappedArr.push(value);
    }
    return mappedArr;
}

// Creating FILTER function manually
function filter(array, callbackFunction) {
    const filteredArr = [];
    for (let val of array) {
        if (callbackFunction(val)) {
            filteredArr.push(val);
        }
    }
    return filteredArr;
}

// Creating REDUCE function manually
function reduce(array, callbackFunction, startingValue) {
    let total = startingValue;
    for (let val of array) {
        total = callbackFunction(total, val);
    }
    return total;
}

// Default Parameters
function constructPerson(name = 'Anonymous', age = 0, hobbies = []) {
    name = name;
    age = age;
    hobbies = hobbies;

    const person = {
        name: name,
        age: age,
        hobbies: hobbies
    }

    return person
}

// Object Shorthand
function constructPerson(name = 'Anonymous', age = 0, hobbies = []) {
    return { name, age, hobbies };
}