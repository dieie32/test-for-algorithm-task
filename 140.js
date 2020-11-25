const validators = require('./helperFunctions');

const calculation = (a) => {
    validators.inputNumbersCheck(a);

    //чисельник
    const numerator = (3 * a) + 4 ;

    //знаменник
    const denominator = Math.pow(a,2) - (5 * a) - 9;

    validators.denominatorZeroCheck(denominator);

    return numerator / denominator;
}

module.exports = { calculation };