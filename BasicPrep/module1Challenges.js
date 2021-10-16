// Conditionals 1
function isOldEnoughToDrink(age) {
    return age >= 21;
  }

  function isOldEnoughToDrive(age) {
    return age >= 16;
  }

  function isOldEnoughToVote(age) {
    return age>= 18;
  }

  function isOldEnoughToDrinkAndDrive(age) {
    // Always illegal to drink and drive in US
    return false;
  }

// Objects 1
function getProperty(obj, key) {
    return obj[key];
  }

  function addProperty(obj, key) {
    obj[key] = true;
  }

  function removeProperty(obj, key) {
    delete obj[key];
  }

  // String Methods 1
  function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  function getLengthOfWord(word) {
    return word.length;
  }

  function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
  }