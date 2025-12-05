const palindromes = function (str) {

let arr = str.replace(/\s|\W/g, '').toLowerCase().split("");
console.log(arr)
let forward = arr.join("");
console.log(forward)
let backWards = arr.reverse().join("")
console.log(backWards)

let bool = forward === backWards? true : false;

return bool
};

// Do not edit below this line
module.exports = palindromes;
