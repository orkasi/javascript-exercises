const removeFromArray = function(array,...toRemove) {
    for (x of toRemove){
        while(array.indexOf(x) !== -1){
            array.splice(array.indexOf(x),1);}
        
    }
   

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
