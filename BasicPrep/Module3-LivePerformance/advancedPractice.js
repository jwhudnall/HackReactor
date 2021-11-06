// Advanced Practice Guide Solutions
function findShortestWordAmongMixedElements(arr) {
    // if empty arr || arr.length === 0, return 0
    var stringArr = arr.filter(x => typeof x === 'string');
    if (stringArr.length === 0) {
        return '';
    }
    var shortest = stringArr[0];
    for (let i = 1; i < stringArr.length; i++) {
        var word = stringArr[i];
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'


function findSmallestNumberAmongMixedElements(arr) {
    var numArr = arr.filter(x => typeof x === 'number');
    if (numArr.length === 0) {
        return 0;
    }
    var smallest = numArr[0];
    for (var i = 1; i < numArr.length; i++) {
        var current = numArr[i];
        if (current < smallest) {
            smallest = current;
        }
    }
    return smallest;
}

function getLongestWordOfMixedElements(arr) {
    var strArr = arr.filter(x => typeof x === 'string');
    if (strArr.length === 0) {
        return '';
    }
    var longestWord = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        var currentWord = strArr[i];
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}



