// Advanced Practice Guide Solutions
function findShortestWordAmongMixedElements(arr) {
    // if empty arr || arr.length === 0, return 0
    var stringArr = arr.filter(x => typeof x === 'string');
    if(stringArr.length === 0) {
      return '';
    } 
    var shortest = stringArr[0];
    for(let i = 1; i < stringArr.length; i++) {
      var word = stringArr[i];
      if(word.length < shortest.length) {
        shortest = word;
      }
    }
    return shortest;
  }
  
  var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
  console.log(output); // --> 'two'

  