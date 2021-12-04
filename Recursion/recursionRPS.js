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


// Recursive Solution (innerFunction method)
var rockPaperScissors2 = function(rounds) {
  // Declare result variable
  var choices = ['rock', 'paper', 'scissors'];
  var result = [];

  // create innerfunction
  var innerFunction = function(roundsToGo, choicesSoFar) {
    // Base Case
    if (roundsToGo === 0) {
      result.push(choicesSoFar);
      return;
    }
    // Recursive case
    choices.forEach(function(choice) {
      innerFunction(roundsToGo - 1, choicesSoFar.concat(choice));
    });
  };
  innerFunction(rounds, []);

  return result;
}

var result = rockPaperScissors2(3);

console.log(result);