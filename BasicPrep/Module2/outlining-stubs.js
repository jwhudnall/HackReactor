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

