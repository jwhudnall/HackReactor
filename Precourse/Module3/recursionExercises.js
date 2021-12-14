var exponent = function(base, exp) {
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