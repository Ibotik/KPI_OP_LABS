'use strict';
const fn = () => {
 const obj1 = { name: 'Denis' };
 let obj2 = { name: 'Vasia' };
 obj1.name = 'Edik';
 obj2.name = 'Mikola';
 console.log(obj1);
 console.log(obj2);
 // obj1 = { name: "Another Object" };  не буде працювати бо константа
 obj2 = { name: "Yarik" };
 console.log(obj2);
};
fn()

const createUser = (name, city) => ({ name, city });
const user = createUser('Vasia', 'Mala Dybeshnia');
console.log(user);