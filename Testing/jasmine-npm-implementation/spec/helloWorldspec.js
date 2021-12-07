// Import functions to be tested
var { square, helloWorld } = require('../src/helloWorld.js');

describe("helloWorld", function () {
  it("returns Hello World", function () {
    var actual = helloWorld();
    var expected = 'Hello World';
    expect(actual).toBe(expected);
  });

  describe("square", function () {
    it("squares a positive number", function () {
      var actual = square(3);
      var expected = 9;
      expect(actual).toBe(expected);
    });

    it("squares a negative number", function() {
      expect(9).toBe(square(-3));
    })
  });

});