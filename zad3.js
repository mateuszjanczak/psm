const _ = require('lodash');

function sum() {
    const args = Array.from(arguments);
    return args.filter((e, i) => {
        return _.isNumber(e) ? true : console.log("Nieprawidłowy typ: " + e + " pozycja: " + i);
    })
}

console.log(sum(1, 2, 'text', 4, 'string'));