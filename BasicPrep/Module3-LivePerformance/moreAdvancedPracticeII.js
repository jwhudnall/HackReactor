/*
===== Split Strings =====
Complete the function splitPairs such that it splits the input string into pairs of characters. 
If the input string has a length that is odd, then it should replace the missing second 
character of the final pair with an underscore _. Note, an empty string should make your 
function produce an empty array.
*/
function splitPairs(str) {
    const resultArr = [];
    // iterate over letters in str by 2
    for (let i = 0; i < str.length; i += 2) {
        // declare char1
        let char1 = str[i];
        // declare char2 || '_'
        let char2 = str[i + 1] || '_';
        resultArr.push(`${char1}${char2}`);
    }
    return resultArr;
}


/*
===== Highest Scoring Word =====
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function highestScoringWord(string) {
    let highScore = 0;
    let highScoreWord = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabet.split('');
    const alphaScore = {};

    for (let i = 0; i < alphaArr.length; i++) {
        let char = alphaArr[i];
        let letterScore = i + 1;
        alphaScore[char] = letterScore;
    }

    // split string on spaces into wordArr
    const wordArr = string.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
        let word = wordArr[i];
        let wordScore = 0;
        for (let letter of word) {
            wordScore += alphaScore[letter];
        }
        if (wordScore > highScore) {
            highScore = wordScore;
            highScoreWord = word;
        }
    }
    return highScoreWord;
}





/*
===== Extract a Domain Name =====

Write a function that when given a URL as a string, parses out just the domain name and 
returns it as a string. For example:

Input1: "http://github.com/carbonfive/raygun  " Output1: "github"
Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"
Input3: "https://www.cnet.com  " Output3: "cnet"
*/

function getDomain(url) {
    let splitArr;
    // if url includes www.
    if (url.includes('www.')) {
        splitArr = url.split('www.');
    } else if (url.includes('://')) {
        splitArr = url.split('://');
    }
    console.log(splitArr)
    let target = splitArr[1];
    let domain = '';
    for (let i = 0; i < target.length; i++) {
        if (target[i] === '.') {
            return domain;
        } else {
            domain += target[i];
        }
    }
}