const removeFromArray = function(arr, ...args) {
    if(args[0] !== undefined) {
        let index;
        for (let i = 0; i < args.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if(args[i] === arr[j]) index = j;
                if(index !== undefined) {
                    arr.splice(index, 1);
                    index = undefined;
                }
            }
        }
       
    }
    console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
