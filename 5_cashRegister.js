'use strict';

const denomination = [
    { unit: 'ONE HUNDRED', amount: 100.0 },
    { unit: 'TWENTY', amount: 20.0 },
    { unit: 'TEN', amount: 10.0 },
    { unit: 'FIVE', amount: 5.0 },
    { unit: 'ONE', amount: 1.0 },
    { unit: 'QUARTER', amount: 0.25 },
    { unit: 'DIME', amount: 0.1 },
    { unit: 'NICKEL', amount: 0.05 },
    { unit: 'PENNY', amount: 0.01 }
];

const cashRegister = (price, cash, cid) => {
    const output = { status: null, change: [] };
    let change = cash - price;

    let register = cid.reduce((acc, curr) => {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];

            return acc;
        },
        { total: 0 }
    );

    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;

        return output;
    }

    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';

        return output;
    }

    let changeArr = denomination.reduce((acc, curr) => {
        let value = 0;

        while (register[curr.unit] > 0 && change >= curr.amount) {
            change -= curr.amount;
            register[curr.unit] -= curr.amount;
            value += curr.amount;
            change = Math.round(change * 100) / 100;
        }

        if (value > 0) {
            acc.push([curr.unit, value]);
        }

        return acc;
    }, []);

    if (changeArr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';

        return output;
    }

    output.status = 'OPEN';
    output.change = changeArr;

    return output;
};
