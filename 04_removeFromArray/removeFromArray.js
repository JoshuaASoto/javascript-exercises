const removeFromArray = function(array, ...x) {
    const newArray = [];
    array.forEach((item) => {
        if (!x.includes(item)) {
        newArray.push(item);
        }
    });
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
