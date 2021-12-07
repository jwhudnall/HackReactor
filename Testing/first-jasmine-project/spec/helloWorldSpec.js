describe("helloWorld.js", function() {
  it("returns hello world", function() {
    var actual = helloWorld();
    var expected = 'Hello World';
    expect(actual).toBe(expected);
  });

  it("Squares a number", function() {
    var actual = squareNum(3);
    var expected = 9;
    expect(actual).toBe(expected);
  })
});