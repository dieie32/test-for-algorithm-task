const validators = require('./helperFunctions');

const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

const calcFactorialEquation = (m,n) => {
    //check typeof
    validators.inputNumbersCheck(m,n)

    //чисельник
    const numerator = factorial(n) + factorial(m);

    //знаменник
    const denominator = factorial(n + m);
    
    validators.denominatorZeroCheck(denominator);

    return numerator / denominator;
}

module.exports = { calcFactorialEquation };