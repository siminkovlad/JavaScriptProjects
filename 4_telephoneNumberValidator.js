'use strict';

const telephoneNumberValidator = str => {
    const regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    return regExp.test(str);
};
