/// Arrow Functions

const addTwo = (x) => {
  return x + 2;
};
addTwo(3); // 5

// The same function written as a function declaration:
// function addTwo(x) {
//   return x + 2;
// }

// An arrow function with no parameters.
const sayHello = () => {
  console.log('Hello');
};
sayHello(); // Hello

// The same function written as a function declaration:
// function sayHello() {
//   console.log('Hello');
// }

// An arrow function with multiple parameters.
const getFullName = (first, last) => {
  return `${first} ${last}`;
};
console.log(getFullName('Ada', 'Lovelace')); // Ada Lovelace

// The same function as a function declaration:
// function getFullName(first, last) {
//   return `${first} ${last}`;
// }

// An arrow function with a one line return.
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 3)); // 5

// The same function as a function declaration:
// function sum(num1, num2) {
//   return num1 + num2;
// }
