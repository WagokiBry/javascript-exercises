const repeatString = function(stringy, num) {
  // 1. Handle edge case for negative numbers (return an empty string)
  if (num < 0) {
    return "ERROR";
  }

  // 2. Initialize the accumulator to an empty string (not undefined)
  let stringAppend = "";

  // 3. Loop the specified number of times
  for (let i = 0; i < num; i++) {
    // Append the original string to the result
    // The .slice() is not needed; just append the stringy variable itself
    stringAppend += stringy;
    
    // !!! Removed the 'return;' here !!!
  }

  // 4. Return the final string AFTER the loop is complete
  return stringAppend;
};

// --- Test Cases ---
console.log(repeatString("hi", 3)); // Output: hihihi
console.log(repeatString("hello", 1)); // Output: hello
console.log(repeatString("test", 0)); // Output: 
console.log(repeatString("repeat", -5)); // Output: (empty string)

// Do not edit below this line
module.exports = repeatString;
