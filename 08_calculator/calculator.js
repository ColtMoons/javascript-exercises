const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	if(array.length === 0) return 0;
  return array.reduce((total,data)=>{
    return total + data;
  }, 0);
};

const multiply = function(array) {
  if(array.length === 0) return 0;
  return array.reduce((total,data)=>{
    return total * data;
  }, 1);
};

const power = function(number, power) {
	if(power === 0) return 1;

  let result = number;
  for (let i = 1; i < power; i++) {
    result *=number;
  }
  return result;
};

const factorial = function(n) {
  if(n === 0) return 1;

  let factorial = 1;
  for(let i = 2; i <= n; i++){
    factorial *= i;
  }
	return factorial;
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
