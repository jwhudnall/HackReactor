/* Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, 
it\'s insanely interesting!';

var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn! */

function flipPairs(sentence) {
    var flippedResult = '';
    for(let i = 0; i < sentence.length; i+=2) {
      var firstChar = sentence[i];
      var secondChar = sentence[i+1];
      if(secondChar !== undefined) {
        flippedResult += secondChar + firstChar;
      } else {
        flippedResult += firstChar;
      }
      
    }
    return flippedResult;
  }
  
  function assertEqual(expected, actual, testName) {
      if(expected === actual) {
          console.log('passed');
      } else {
          console.log(`FAILED [${testName}]. Expected: ${expected} vs. Actual: ${actual}`);
      }
  }
  
  var input = 'check out how interesting this problem is, it\'s insanely interesting!';
  var expected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!'
  var output = flipPairs(input);
  assertEqual(expected, output, "Successfully reverses pairs");
  