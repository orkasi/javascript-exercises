const palindromes = function (string) {
    string = string.trim();
    string = string.toLowerCase();
    string = string.replace(/ |!|\.|,/gi, "");
    const fstring = string;
    const rstring = string.split("").reverse().join("");
    return rstring === fstring;
};

// Do not edit below this line
module.exports = palindromes;
