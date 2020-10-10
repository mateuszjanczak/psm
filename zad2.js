const _ = require('lodash');

function sum() {
    return _.sum(arguments);
}

console.log(sum(1, 2, 3, 4, 5));