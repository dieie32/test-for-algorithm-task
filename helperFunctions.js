const denominatorZeroCheck = (denom) => {
    if(denom === 0) {
        throw new Error('denominator is 0');
    }
}

const inputNumbersCheck = (num1, num2) => {
    if(num1 && !num2) {
        if(typeof num1 !== 'number') {
            throw new Error(`${num1} is not a number`);
        }
    }

    if(num1 && num2) {
        if(typeof num1 !== 'number' && typeof num2 !== 'number') {
            throw new Error(`${num1} and ${num2} are not numbers`);
        }
        if(typeof num1 !== 'number') {
            throw new Error(`${num1} is not a number`);
        }
        if(typeof num2 !== 'number') {
            throw new Error(`${num2} is not a number`);
        }
    }
}

module.exports.denominatorZeroCheck = denominatorZeroCheck;
module.exports.inputNumbersCheck = inputNumbersCheck;