var obj = {};
var x = 'Score!';

obj['x'] = 9;
obj['0'] = 'cat';
obj[x] = 'error';

for(var k in obj) {
  console.log(k);
}