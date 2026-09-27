'use strict';
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  
  let random1 = min + Math.random() * (max - min + 1);
  return Math.floor(random1);
}

console.log(random(1, 7));
console.log(random(8));  