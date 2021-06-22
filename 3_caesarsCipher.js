'use strict';

const rot13 = str => {
    const regExp = /[A-Z]/;
    const newArr = [];

    for (let i = 0; i < str.length; i++) {
        if (regExp.test(str[i])) newArr.push(((str[i].charCodeAt() - 65 + 13) % 26) + 65);
        else newArr.push(str[i].charCodeAt());
    }

    return newArr.map(item => String.fromCodePoint(item)).join('');
};
