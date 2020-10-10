const Calculator = require('./Calculator');

const item1 = new Calculator([1,2,3,4,5]);
const item2 = new Calculator([1, 'text', 3, {}]);

console.log(item1.sum());
console.log(item1.subtract());

console.log(item2.sum());
console.log(item2.subtract());