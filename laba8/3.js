const checkType = (value, type) => {
  if (value === null || value === undefined) {
    throw new TypeError(`Очікувався тип ${type.name}, але отримано ${value}`);
  }
  const typeName = type.name.toLowerCase();
  const isPrimitive = typeof value === typeName;
  const isInstance = value instanceof type;

  if (!isPrimitive && !isInstance) {
    throw new TypeError(`Очікувався тип ${type.name}`);
  }
};

const contract = (fn, ...types) => (...args) => {
  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];

  if (args.length !== argTypes.length) {
    throw new TypeError(`Очікувалося аргументів: ${argTypes.length}, отримано: ${args.length}`);
  }

  for (let i = 0; i < argTypes.length; i++) {
    checkType(args[i], argTypes[i]);
  }

  const result = fn(...args);
  checkType(result, returnType);

  return result;
};


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); 