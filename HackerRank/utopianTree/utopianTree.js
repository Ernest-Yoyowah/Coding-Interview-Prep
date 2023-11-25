"use strict";

function utopianTree(n) {
  // Write your code here
  let height = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      height *= 2;
    } else {
      height += 1; // add 1 if odd
    }
  }
  return height;
}

// Example usage:
const n = 4; // Number of cycles
const result = utopianTree(n);
console.log(result);
