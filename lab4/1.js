const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

const sum2 = (...args2) => {
  let total = 0;
  for (const num of args2) {
    total += num;
  }
  return total;
};

const sum3 = (...args3) => {
  let total = 0;
  let i = 0;
  while (i < args3.length) {
    total += args3[i];
    i++;
  }
  return total;
};

const sum4 = (...args4) => {
  if (args4.length === 0) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args4[i];
    i++;
  } while (i < args4.length);
  
  return total;
};

const sum5 = (...args5) => args5.reduce((acc, num) => acc + num, 0);


console.log(sum(1, 2, 3)); 
console.log(sum2(1, 2, 3)); 
console.log(sum3(1, 2, 3)); 
console.log(sum4(1, 2, 3));
console.log(sum5(1, 2, 3));