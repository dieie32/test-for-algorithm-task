//-------- TASK B --------//
const validators = require('./helperFunctions');

const powerCalcB = (x,n) => {
    //check typeof
    validators.inputNumbersCheck(x,n);

    const powForNumerator= Math.pow(n,3);
    
    //чисельник
    const numerator = Math.pow(x , powForNumerator);

    //знаменник
    const denominator = Math.pow(3,n);
    
    validators.denominatorZeroCheck(denominator);

    return numerator / denominator;
}

module.exports = { powerCalcB };