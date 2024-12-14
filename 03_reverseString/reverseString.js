const reverseString = function(string) {
    let returnString = "";
    for (let index = string.length; index >= 0; index--) {
        returnString = returnString  + string.charAt(index);
        
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
