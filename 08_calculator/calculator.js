const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function(arr) {
  const sumOfProducts = arr.reduce((a, b) => a * b, 1);
  return sumOfProducts;
};

const power = function(num, pow) {
  let result = num;
	while(pow > 1) {
    result *= num;
    pow--;
  }
  return result;
};

const factorial = function(num) {
	if(num <= 1) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
