// Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms

_.delay = function(func, wait) {
  var args = Array.prototype.slice.call(arguments).slice(2);

  setTimeout(function() {
    func.apply(null, args);
  }, wait);
};