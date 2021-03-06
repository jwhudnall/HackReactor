// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
//
// The arguments for the original function are passed after the wait
// parameter. For example _.delay(someFunction, 500, 'a', 'b') will
// call someFunction('a', 'b') after 500ms

var delay = function (func, wait) {
  var args = Array.prototype.slice.call(arguments).slice(2);

  setTimeout(function () {
    func.apply(null, args);
  }, wait);
};

// Memorize an expensive function's results by storing them.
// memoize could be renamed to oncePerUniqueArgumentList; memoize does the
// same thing as once, but based on many sets of unique arguments.
//
// _.memoize should return a function that, when called, will check if it has
// already computed the result FOR THE GIVEN ARGUMENT and return that value
// instead if possible.

var _memoize = function (func) {
  var cache = {};
  var result;

  return function (n) {
    var args = Array.prototype.slice.call(arguments).slice(1);
    // check if every argument is in cache
    if (args in cache) {
      console.log('Found in cache!');
      return cache[args];
    } else {
      result = func.apply(null, arguments);
      cache[args] = result;
      return result;
    }
  };
};

// var add = function(a,b) {
//   var args = Array.prototype.slice.call(arguments);
//   return args.reduce((acc, item) => acc + item);
// }

// let firstcall = add(3,4,5)

var _invoke = function (collection, functionOrKey, args) {

  var transformedArr = [];

  if (typeof functionOrKey === 'function') {
    _.each(collection, function (item) {
      var transformedVal = functionOrKey.apply(item, args);
      transformedArr.push(transformedVal);
    });
  } else {
    _.each(collection, function (item) {
      var transformedVal = item[functionOrKey].apply(item, args);
      transformedArr.push(transformedVal);
    });
  }

  return transformedArr;
};