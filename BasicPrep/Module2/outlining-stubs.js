/* Write a function called "findFirstWordWithMostRepeatedChars" that accepts a string. As its long but self-descriptive name suggests, it returns the first word in a given string with the most repeated characters.

"Words" are understood to be space-delimited. 

====== Initial Stub =======
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  // For each word...
      var repeatCountForWord = findMaxRepeatCountInWord(word)
      //  If that max repeat count is higher than the overall max repeat count, then
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount

  return wordWithMaxRepeatCount;
}
*/

function countMaxCountWithinWord(word) {
    // split word into letters
    const letters = word.split('');
    let highestCount = 0;
    const letterCountObj = {};
    for(let i = 0; i < letters.length; i++) {
      const letter = letters[i];
        if(letterCountObj[letter] === undefined) {
            letterCountObj[letter] = 1;
        } else {
            letterCountObj[letter]++;
        }
    }
    for(let key in letterCountObj) {
        if(letterCountObj[key] > highestCount) {
            highestCount = letterCountObj[key];
        }
    }
    return highestCount;  
  }
  
  function findFirstWordWithMostRepeatedCounts(sentence) {
    // split sentence into words
    const wordArr = sentence.split(' ');
    let highestCount = 0;
    let wordWithHighestCount = ''
    // for each word
      for(let i = 0; i < wordArr.length; i++) {
        const word = wordArr[i];
        const wordCount = countMaxCountWithinWord(word); 
        if(wordCount > highestCount) {
            wordWithHighestCount = word;
        }
      }
    return wordWithHighestCount;    
  }
  
  // assert function
  function assertEqual(actual, expected, testName) {
      if(actual === expected) {
          console.log('passed');
      } else {
          console.log(`FAILED ["${testName}"] Expected: ${expected} vs. Actual: ${actual}`);
      }
  }
  
  // Test Suite
  let sentence1 = 'Random sentence with many words including aardvaaark';
  let expected1 = 'aardvaaark';
  let actual1 = findFirstWordWithMostRepeatedCounts(sentence1);
  assertEqual(actual1, expected1, 'Correctly identifies word with highest repeat occurrences')

/* ===== Hyphen Count LeetCode Outlining/Stubs Example =====
A sentence consists of lowercase letters ('a' to 'z'), digits ('0' to '9'), 
hyphens ('-'), punctuation marks ('!', '.', and ','), and spaces (' ') only. 
Each sentence can be broken down into one or more tokens separated by one or 
more spaces ' '.

A token is a valid word if all three of the following are true:

1) It only contains lowercase letters, hyphens, and/or punctuation (no digits).
2) There is at most one hyphen '-'. If present, it must be surrounded by lowercase 
characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
3) There is at most one punctuation mark. If present, it must be at the end of the 
token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).
Examples of valid words include "a-b.", "afad", "ba-c", "a!", and "!".

Given a string sentence, return the number of valid words in sentence.

*** Original Outline/Stubbing: ***
*/


var countValidWords = function(sentence) {
  const words = sentence.split(' ');
  let validWordCount = 0;
  for(let word of words) {
    if(hasValidCharacters(word)) {
      validWordCount++;
    }
  }
  return validWordCount;
}

// Helper Functions
function countInnerHyphens(word) {
  let hyphenCount = 0;
  // iterate through word letters
  const target = '-';
  const lastIndex = word.length - 1;
  for(let i = 0; i < word.length; i++) {
      const letter = word[i];
      if(letter === target && (i !== 0 && i !== lastIndex)) {
          hyphenCount++;
      }
  }
  return hyphenCount;
}


function hasValidCharacters(word) {
  if(word === '') {
    return false;
  }
  const punctuationTargets = [',', '.', '!'];
  const lastIndex = word.length - 1;
  const hasUpToOneValidHyphen = countInnerHyphens(word) <= 1;
  for(let i = 0; i < word.length; i++) {
    const character = word[i];
    if(punctuationTargets.includes(character) && i !== lastIndex) {
      return false;
    } else if(character === '-') {
        if(!hasUpToOneValidHyphen || i === 0 || i === lastIndex) {
          return false;
        }
    } else if(!isNaN(parseInt(character))) {
      return false;
    } else if(character !== character.toLowerCase()) {
      return false;
    }
  }
  return true;
}

// Assert Functions
function assertEqual(expected, actual, testName) {
  if(expected === actual) {
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"]. Expected: ${expected} vs. Actual: ${actual}`);
  }
}

// Test Suite
// let sentence1 = 'Hello! My name- is james hud-nall!';
// let expected1 = 3;
// let actual1 = countValidWords(sentence1);
// assertEqual(expected1, actual1, "Correctly calculates words")
let input1 = ' 62   nvtk0wr4f  8 qt3r! w1ph 1l ,e0d 0n 2v 7c.  n06huu2n9 s9   ui4 nsr!d7olr  q-, vqdo!btpmtmui.bb83lf g .!v9-lg 2fyoykex uy5a 8v whvu8 .y sc5 -0n4 zo pfgju 5u 4 3x,3!wl  fv4   s  aig cf j1 a i  8m5o1  !u n!.1tz87d3 .9    n a3  .xb1p9f  b1i a j8s2 cugf l494cx1! hisceovf3 8d93 sg 4r.f1z9w   4- cb r97jo hln3s h2 o .  8dx08as7l!mcmc isa49afk i1 fk,s e !1 ln rt2vhu 4ks4zq c w  o- 6  5!.n8ten0 6mk 2k2y3e335,yj  h p3 5 -0  5g1c  tr49, ,qp9 -v p  7p4v110926wwr h x wklq u zo 16. !8  u63n0c l3 yckifu 1cgz t.i   lh w xa l,jt   hpi ng-gvtk8 9 j u9qfcd!2  kyu42v dmv.cst6i5fo rxhw4wvp2 1 okc8!  z aribcam0  cp-zp,!e x  agj-gb3 !om3934 k vnuo056h g7 t-6j! 8w8fncebuj-lq    inzqhw v39,  f e 9. 50 , ru3r  mbuab  6  wz dw79.av2xp . gbmy gc s6pi pra4fo9fwq k   j-ppy -3vpf   o k4hy3 -!..5s ,2 k5 j p38dtd   !i   b!fgj,nx qgif '
let expected1 = 49;
let actual1 = countValidWords(input1);
assertEqual(expected1, actual1, "Should be 49");