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
===== Title =====
*/