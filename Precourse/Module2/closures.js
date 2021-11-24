var makeStopwatch = function() {
  var elapsed = 0;
  var stopwatch = function() {
    return elapsed;
  };
  var increase = function() { elapsed++ };
  setInterval(increase, 1000);
  return stopwatch;
}

var stopwatch1 = makeStopwatch();

// Run the following code in the terminal a few seconds later:
// var stopwatch2 = makeStopwatch();

// stopwatch1(); // returns elapsed value that belongs to the execution context in which it was called
// stopwatch2(); // returns a DIFFERENT elapsed value, belonging to a DIFFERENT execution context