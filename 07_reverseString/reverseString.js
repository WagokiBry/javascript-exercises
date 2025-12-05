const reverseString = function(input) {
let revString = input.split("").reverse().join("");
return revString;}

console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("hello there")); // Output: ereht olleh
console.log(reverseString("123! abc! Hello, Odinite.")); // Output: .etinidO ,olleH !cba !321
console.log(reverseString("")); // Output:  

// Do not edit below this line
module.exports = reverseString;
