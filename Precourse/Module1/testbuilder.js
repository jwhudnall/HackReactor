var detectNetwork = function(cardNumber) {
  var requirements = [
    {brand: 'Diner\'s Club', validPrefixes: [38, 39], validLengths: [14]},
    {brand: 'American Express', validPrefixes: [34, 37], validLengths: [15]},
    {brand: 'Visa', validPrefixes: [4], validLengths: [13, 16, 19]},
    {brand: 'MasterCard', validPrefixes: [51, 52, 53, 54, 55], validLengths: [16]}
  ];

  var prefix = cardNumber[0] === '4' ? '4' : cardNumber.slice(0, 2);
  var actualLength = cardNumber.length;

  for (var i = 0; i < requirements.length; i++) {
    var currentBrand = requirements[i];
    var hasValidPrefix = currentBrand.validPrefixes.includes(parseInt(prefix));
    var hasValidLength = currentBrand.validLengths.includes(actualLength);
    if (hasValidPrefix && hasValidLength) {
      return currentBrand.brand;
    }
  }
};