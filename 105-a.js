//-------- TASK A --------//
const validators = require('./helperFunctions');

const powerCalcA = (x,n) => {
    //check typeof
    validators.inputNumbersCheck(x,n);

    const powForNumerator= Math.pow(n,2);
    
    //чисельник
    const numerator = Math.pow(x , powForNumerator);

    //знаменник
    const denominator = Math.pow(2,n);

    validators.denominatorZeroCheck(denominator);

    return numerator / denominator;
}

module.exports = { powerCalcA };