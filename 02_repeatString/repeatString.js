const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR"
    }
    let rString= "";
    for (let index = 0; index < num; index++) {
        rString += string
        
    }
    return rString;
};

// Do not edit below this line
module.exports = repeatString;
