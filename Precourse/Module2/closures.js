var makeStopwatch = function () {
  var elapsed = 0;
  var stopwatch = function () {
    return elapsed;
  };
  var increase = function () { elapsed++ };
  setInterval(increase, 1000);
  // console.log(stopwatch);
  return stopwatch;
}

var stopwatches = [];

// var stopwatch1 = makeStopwatch();
// stopwatches.push(stopwatch1);

setTimeout(function () {
  setInterval(function () {
    var newWatch = makeStopwatch();
    stopwatches.push(newWatch);
  }, 4000)
}
  , 1000)


// After 10 seconds, console should readout the status of all n stopwatches
// within the stopwatches array
setInterval(function () {
  for (var i = 0; i < stopwatches.length; i++) {
    var currentWatch = stopwatches[i]();
    console.log(`Stopwatch ${i + 1}: ${currentWatch}`);
  }
  console.log('________________________')
}, 10000)