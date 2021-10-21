// Module 1 - Diagnostic Skills Check

// Convert Array To Object 1
function transformFirstAndLast(array) {
    const arrCopy = array.slice();
    const first = arrCopy.shift();
    const last = arrCopy.pop();
    const nameObj = {}
    nameObj[first] = last;

    return nameObj;
}

// Convert Array To Object 2
function transformArrayToObject(array) {
    const newObj = {};
    for (let pair of array) {
        for (let i = 0; i < pair.length; i++) {
            const key = pair[0];
            const val = pair[1];
            newObj[key] = val;
        }
    }
    return newObj;
}

// Convert Array To Object 3
function transformEmployeeData(employeeData) {
    const employeeArr = [];

    for (let record of employeeData) {
        let newEmployee = {};
        for (let i = 0; i < record.length; i++) {
            const key = record[i][0];
            const value = record[i][1];
            newEmployee[key] = value;
        }
        employeeArr.push(newEmployee);
    }
    return employeeArr;
}

// Convert Object To Array 1
function getAllKeys(obj) {
    const keyArr = [];
    for (let key in obj) {
        keyArr.push(key);
    }

    return keyArr;
}

// Convert Object To Array 2
function listAllValues(obj) {
    const valueArr = [];
    for (let key in obj) {
        valueArr.push(obj[key]);
    }
    return valueArr;
}

// Convert Object to Array 3
function convertObjectToArray(obj) {
    const convertedArr = [];
    for (let key in obj) {
        const pair = [key, obj[key]];
        convertedArr.push(pair);
    }
    return convertedArr;
}

// Greet Customer
function greetCustomer(firstName) {
    if (customerData[firstName] === undefined) {
        return 'Welcome! Is this your first time?';
    } else if (customerData[firstName]['visits'] === 1) {
        return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else if (customerData[firstName]['visits'] > 1) {
        return `Welcome back, ${firstName}! So glad to see you again!`;
    }
}