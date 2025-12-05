// const sumAll = function(a,b) {

//     let arr = [];
//       arr.push(a, b);

//       let sortedArr = arr.sort((a, b) => a - b);

//       let i = sortedArr[0];
//       let j = sortedArr.at(-1)

//       while (i < j) {
//         ++i;
//         arr.push(i)
//         console.log(i)
//       }

//       let newArr = [...new Set(arr)].sort((a, b) => a - b);
//       console.log(newArr);

//       let sumVal = newArr.reduce((acc, curVal) => {
//         return acc + curVal
//       })
// console.log(sumVal)
    
//       return sumVal;
//     };

// // Do not edit below this line
// module.exports = sumAll;

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1,10))
console.log("hi")

module.exports = sumAll;

