const sumAll = function(num1, num2) {
 let sum = 0;
 let start;
 let finish;
 if( num1 < num2) {
    start = num1;
    finish = num2;
 } else {
    start = num2;
    finish = num1;
 }
 if((num1 > 0 && num2 > 0) && 
    (Number.isInteger(num1) && Number.isInteger(num2))) {
    for (let i = start; i <= finish; i++) {
        sum += i;  
    }
 } else {
   return "ERROR";
 }
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
