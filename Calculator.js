const _ = require('lodash');

module.exports = class Calculator {
    items = [];

    constructor(items) {
        this.items = items.filter((e, i) => {
            return _.isNumber(e) ? true : console.log("Nieprawidłowy typ: " + e + " pozycja: " + i);
        });
    }

    sum() {
        return this.items.reduce((accumulator, current) => accumulator + current);
    }

    subtract() {
        return this.items.reduce((accumulator, current) => accumulator - current);
    }
}