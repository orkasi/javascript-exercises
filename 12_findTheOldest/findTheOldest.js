const findTheOldest = function (people) {
    return people.map((curr) => {
        if (!curr.yearOfDeath) {
            curr.yearOfDeath = 2024;
        }
        return curr;
    }).reduce((oldest, curr) => {
        if (curr.yearOfDeath - curr.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = curr;
            return oldest;
        }
        else {
            return oldest;
        }
    }, {
        name: "Error",
        yearOfBirth: 0,
        yearOfDeath: 0
    })

};

// Do not edit below this line
module.exports = findTheOldest;
