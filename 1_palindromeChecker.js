'use strict';

const palindromeChecker = str => {
    const regExp = /[\W_]/g;
    const filteredStr = str.toLowerCase().replace(regExp, '');
    const reverseStr = filteredStr.split('').reverse().join('');

    return filteredStr === reverseStr;
};
