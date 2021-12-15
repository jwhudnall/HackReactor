(function () {
  'use strict';

  window._ = {};

  _.identity = function (val) {
    return val;
  };

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function (array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last n elements. If n is undefined, return just the
  // last element.
  _.last = function (array, n) {
    if (n > array.length) {
      var startIdx = 0;
    } else {
      var startIdx = array.length - n;
    }
    var lastIdx = array.length - 1;

    return n === undefined ? array[lastIdx] : array.slice(startIdx, lastIdx + 1);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function (collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function (collection, test) {
    var results = [];

    _.each(collection, function (element) {
      if (test(element)) {
        results.push(element);
      }
    });

    return results;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function (collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it
    return _.filter(collection, function (item) {
      return !test(item);
    });
  };

  // *** _.uniq ***
  // Original Solution:

    // Produce a duplicate-free version of the array.
    _.uniq = function (array, isSorted, iterator) {
      // You can safely ignore the isSorted parameter in your solution!
      // The isSorted parameter is only included for consistency with Underscore's
      // version of uniq, and its functionality is not specifically tested here.

      // The iterator specifies what _.uniq uses to decide if an item is a
      // duplicate or not. _.uniq should use an item's transformed value, the result
      // of invoking iterator on the item, to determine whether or not the original
      // item is unique in the collection so far.

      // If there is no defined iterator, _.uniq should default to use
      // an item's original value to determine uniqueness.

      var transformedValues = [];
      var passingValues = [];

      _.each(array, function (element) {
        var includedInPassingValues = passingValues.includes(element);
        if (typeof iterator === 'undefined' && !includedInPassingValues) {
          passingValues.push(element);
        } else if (typeof iterator === 'function') {
          var transformedValue = iterator(element);
          var includedInTransformedValues = transformedValues.includes(transformedValue);
          if (!includedInTransformedValues) {
            passingValues.push(element);
            transformedValues.push(transformedValue);
          }
        }
      });

      return passingValues;
    };




}());