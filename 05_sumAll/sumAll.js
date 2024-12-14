const sumAll = function(x,y) {
    if (x < 0 || y<0 || typeof x !== "number" || typeof y !== "number" || !Number.isInteger(x) || !Number.isInteger(y)){
        return "ERROR"
    }
    let z = 0;
    const max = Math.max(x,y);
    const min = Math.min(x,y);
    for (let index = min; index <= max; index++) {
        z += index;
    }
    return z;
};

// Do not edit below this line
module.exports = sumAll;
