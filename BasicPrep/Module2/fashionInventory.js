/* Fashion Inventory
This section will feature four exercises that deal with one, 
rather complex array. The array will have two objects, each of 
which will have a nested structure as well. 

Your task for the four problems will be to apply the lessons you have gleaned in 
this module. Ideally, you will be begin by:

1) stubbing a function, 

2) follow that up by writing an appropriate assertion function (based on reasoning 
about the return values and stipulations of the functions you are asked to write)

3) designing a test suite which will verify that your code works

4) outlining with pseudocode an approach that meets the constraints of the problem at hand

5) then writing code which satisfies the requirements.
*/

// ========= Part A =========

function renderInventory(inventory) {
  var flatList = '';
  // iterate through outer array (contains objects)
  for (let i = 0; i < inventory.length; i++) {
    var designer = inventory[i].name;
    var shoes = inventory[i].shoes;
    for (let shoe of shoes) {
      var shoeName = shoe.name;
      var shoePrice = shoe.price;
      var shoeRender = designer + ", " + shoeName + ", " + shoePrice + "\n";
      flatList += shoeRender;
    }
  }
  return flatList;
}


// Test Functions
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"]. Expected: ${expected} vs Actual: ${actual}`)
  }
}

// Test Suite
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

let expected1 = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';

let actual1 = renderInventory(currentInventory);

assertEqual(expected1, actual1, "Correctly displays items in specified format");

/* ========= Part B =========
Your function should return the average cost of all shoes per designer in this format:

var expected = {
'designers': [
  {
    'name': 'Brunello Cucinelli',
    'averagePrice': 1025
  },
  {
    'name': 'Gucci',
    'averagePrice': 850
  }
]
};

*/
function calculateAveragePricePerDesigner(inventory) {
  const averagePrices = { designers: [] };
  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i].name;
    const shoes = inventory[i].shoes;
    let totalShoePrice = 0;

    for (let j = 0; j < shoes.length; j++) {
      const price = shoes[j].price;
      totalShoePrice += price;
    }
    const averageShoePrice = totalShoePrice / shoes.length;
    const averageDesignerWithPrice = {
      name: designer,
      averagePrice: averageShoePrice
    };
    averagePrices.designers.push(averageDesignerWithPrice);
  }
  return averagePrices;
}

// Assert Functions
function assertObjectsEqual(expected, actual, testName) {
  const expectedJSON = JSON.stringify(expected);
  const actualJSON = JSON.stringify(actual);
  if (expectedJSON === actualJSON) {
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"]. Expected: ${expected} vs. Actual: ${actual}`);
  }
}

// Test Cases

var expected1 = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

var actual1 = calculateAveragePricePerDesigner(currentInventory);
assertObjectsEqual(expected1, actual1, "Both objects are equivalent strings");

// ========= Part C =========
function listAllBlackShoes(inventory) {
  var flatList = '';
  for (let i = 0; i < inventory.length; i++) {
    const designer = inventory[i].name;
    const shoes = inventory[i].shoes;
    for (let shoe of shoes) {
      const shoeName = shoe.name;
      const shoePrice = shoe.price;
      const render = `${designer}, ${shoeName}, ${shoePrice}\n`;
      const targetPhrase = 'black'
      if (containsWord(render, targetPhrase)) {
        flatList += render;
      }
    }
  }
  return flatList;
}

//Create helper functions if needed
function containsWord(inputStr, word) {
  return inputStr.indexOf(word) !== -1;
}

// Assert Functions
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"]. Expected: ${expected} vs. Actual: ${actual}`);
  }
}

// Test Suite
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

let actual1 = listAllBlackShoes(currentInventory);
let expected = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n';

assertEqual(expected, actual1, 'Correctly parses items with target phrase');

// ========= Part D =========
function generateLaceDetails(array) {
  const targetWordResults = [];
  const targetWord = 'lace';

  for (let i = 0; i < array.length; i++) {
    const designer = array[i].name;
    const shoes = array[i].shoes;
    for (let j = 0; j < shoes.length; j++) {
      const shoeName = shoes[j].name;
      if (containsWord(shoeName, targetWord)) {
        const nameWordArr = shoeName.split(' ');
        const wordIndex = returnIndex(nameWordArr, targetWord);
        const shoeObj = {
          nameWords: nameWordArr,
          targetWordIndex: wordIndex
        };
        targetWordResults.push(shoeObj);
      }
    }
  }
  return targetWordResults;
}

function containsWord(inputStr, word) {
  return inputStr.indexOf(word) !== -1;
}

function returnIndex(inputArr, word) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].includes(word)) {
      return i;
    }
  }
}

// Assert Functions
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('passed');
  } else {
    console.log(`FAILED ["${testName}"]. Expected: ${expected} vs. Actual: ${actual}`);
  }
}


// Test Suite
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

let phrase1 = 'long laced black boots';
let targetWord1 = 'lace';
let expected1 = true;
let actual1 = containsWord(phrase1, targetWord1);
assertEqual(expected1, actual1, "Correctly identifes target word");