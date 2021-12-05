// Personal solution to re-implementation of Javascripts JSON.stringify() method
var stringifyJSON = function(obj) {
  var isNumber = typeof obj === 'number';
  var isString = typeof obj === 'string';
  var isNull = obj === null;
  var isBool = typeof obj === 'boolean';
  var isArray = Array.isArray(obj);
  var isObject = !Array.isArray(obj) && typeof obj === 'object';
  var isUndefined = typeof obj === 'undefined';

  var popTrailingComma = function(str) {
    var lastIndex = str.length - 1;
    var lastValue = str.split('')[lastIndex];
    if (lastValue === ',') {
      return str.slice(0, lastIndex);
    }
    return str;
  };

  if (isNumber || isBool || isNull) {
    return String(obj);
  }

  if (isString) {
    return '"' + obj.toString() + '"';
  }

  if (isArray) {
    var subString = '';
    obj.forEach(function(item) {
      subString += stringifyJSON(item) + ',';
    });
    var cleanedSubString = popTrailingComma(subString);
    return '[' + cleanedSubString + ']';
  }

  if (isObject) {
    var subString = '';
    for (var key in obj) {
      var value = obj[key];
      if (value === undefined || typeof value === 'function') {
        continue;
      }
      subString += '"' + key + '"' + ':' + stringifyJSON(value) + ',';
    }
    var cleanedSubString = popTrailingComma(subString);
    return '{' + cleanedSubString + '}';
  }
};