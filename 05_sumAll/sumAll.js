const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    }

    let sum = 0;
    const start = a < b ? a : b;
    const end = a > b ? a : b;
    // for (let i = start; i <= end; i++) {
    //     sum += i;
    // }
    // return sum;
    return (end + start) * (end - start + 1) / 2
};

// Do not edit below this line
module.exports = sumAll;
