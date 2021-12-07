var helloWorld = function () {
  return 'Hello World';
};

var square = function (num) {
  return num ** 2;
};

// Export function(s)
module.exports = { helloWorld, square };