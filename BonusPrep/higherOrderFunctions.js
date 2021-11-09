// Callback Functions
function cbFunction(x, y, z) {
    return x + y + z
  }
  
  function caller(x, y, z, cbFunction) {
    console.log('In caller function!')
    // your code here
    return cbFunction(x, y, z);
  }
  
  let x = caller(1, 2, 3, cbFunction)