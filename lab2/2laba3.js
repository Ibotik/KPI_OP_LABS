function average(a, b) {
  return (a + b) / 2;
}
console.log(average(10, 20)); 

function square(x) {
  return (x)**2;
}
console.log(square(3)); 

function cube(x) {
  return (x)**3;
}
console.log(cube(5)); 

function calculate() {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    result.push(average(square(i),cube(i)));
  }
  return result;
}
console.dir(calculate()); 