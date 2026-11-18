function seq(...args) {
  
  const funcs = [...args];

  function chain(...nextArgs) {
    
    if (typeof nextArgs[0] === 'number') {
      return funcs.reduceRight((acc, fn) => fn(acc), nextArgs[0]);
    }

    funcs.push(...nextArgs);
    return chain;
  }

  return chain;
}
console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
); 

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
); 

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
); 