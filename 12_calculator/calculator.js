const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, currentNumber)=>{
    if (arr.length > 0){
      return total + currentNumber
    }  
      
  },0)
};

const multiply = function(arr) {
	return arr.reduce((total, currentNumber)=>{
    return total * currentNumber;
  })
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  let total = 1
	for(let i = num; i >= 1; i--){
total *= i
  }
  return total;
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
