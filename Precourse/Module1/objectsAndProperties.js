var obj = {};

obj['x'] = 9;
obj['0'] = 'cat';

for(var k in obj) {
  console.log(k);
}