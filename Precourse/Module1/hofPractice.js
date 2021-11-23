// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var multiplesOf5 = [];

  _.each(numbers, function(element, index, collection) {
    if (element % 5 === 0) {
      multiplesOf5.push(element);
    }
  });

  return multiplesOf5.length;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var fruits = _.filter(fruits, function(e) {
    return e === targetFruit;
  });

  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(e) {
    return e[0] === letter;
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var filteredArr = _.filter(desserts, function(e) {
    return e.type === 'cookie';
  });

  return filteredArr;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(accumulator, item, index, collection) {
    return accumulator + parseFloat(item.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(acc, item, index, collection) {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  // Input: array
  // Output: array

  // Iterate through movies (array of objects)
    // if release year between 1990 and 2000, add movie to array
  // return array
  var isInRange = function(obj) {
    return obj.releaseYear >= 1990 && obj.releaseYear <= 2000;
  };

  return _.reduce(movies, function(acc, item) {
    if (isInRange(item)) {
      acc.push(item.title);
    }
    return acc;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  // Input: array
  // Output: boolean

  // Declare boolean variable tracker set to false
  var isWithinTimeLimit = false;
  _.reduce(movies, function(acc, item, index, collection) {
    var runTime = item.runtime;
    if (runTime < timeLimit) {
      isWithinTimeLimit = true;
    }
    return item;
  }, movies[0]);

  return isWithinTimeLimit;
};


/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(value, index, list) {
    return value.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {

  var isGlutenFree = function(obj) {
    var includesFlour = obj.ingredients.includes('flour');
    return !includesFlour;
  };

  return _.map(desserts, function(value, index, collection) {
    value.glutenFree = isGlutenFree(value);
    return value;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

  _.map(groceries, function(item, index, collection) {
    var listPrice = parseFloat(item.price.slice(1));
    var discount = Math.round((listPrice * 100) * coupon) / 100;
    var salesPrice = listPrice - discount;
    salesPrice = '$' + salesPrice.toString();
    return item.salePrice = salesPrice;
  });

  return groceries;
};
