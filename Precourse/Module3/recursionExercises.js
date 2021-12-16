var exponent = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / exponent(base, -exp);
  }

  if (exp % 2 === 0) {
    var y = exponent(base, exp / 2);
    return y * y;
  }

  return base * exponent(base, exp - 1);
};

var powerOfTwo = function (n) {
  if (n <= 1) {
    if (n === 1) {
      return true;
    }
    return false;
  }

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function (string) {
  var lastIdx = string.length - 1;
  if (string.length === 1) {
    return string[lastIdx];
  }
  return string[lastIdx] + reverse(string.slice(0, lastIdx));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  string = string.toLowerCase();

  if (string.length < 2) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string.length - 1));
  }
  return false;
};