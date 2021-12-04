// Rock Paper Scissors Problem

// 1. Non Recursion Solution
var rockPaperScissors = function() {
  var result = [];
  var options = ['rock', 'paper', 'scissors'];
  // nested loop 3 deep
  for (let i = 0; i < options.length; i++) {
    for (let j = 0; j < options.length; j++) {
      for (let k = 0; k < options.length; k++) {
        result.push([ options[i], options[j], options[k] ]);
        // console.log(`i: ${options[i]}, j: ${options[j]}, k: ${options[k]}`);
      }
    }
  }
  return result;
}
console.log(rockPaperScissors().length);