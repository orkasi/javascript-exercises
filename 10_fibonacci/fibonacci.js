const fibonacci = function (x) {
    if (x < 0) {
        return "OOPS"
    }
    const fibo = [];
    fibo.push(0);
    fibo.push(1);
    for (let index = 2; index <= x; index++) {
        fibo.push((fibo[index - 1] + fibo[index - 2]))
    }
    return fibo[x];

};

// Do not edit below this line
module.exports = fibonacci;
