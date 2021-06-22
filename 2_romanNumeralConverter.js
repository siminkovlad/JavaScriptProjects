'use strict';

const numbersArray = [
    [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
];

const convertToRoman = num => {
    let result = '';

    for (let i = 0; i < numbersArray[0].length; i++) {
        while (numbersArray[0][i] <= num) {
            result += numbersArray[1][i];
            num -= numbersArray[0][i];
        }
    }

    return result;
};
