/// Arrays demo

const meals = ['apple pie', 'bbq', 'chili'];

// Accessing elements with an index
console.log(meals[1]); // bbq

// Reassigning items
meals[0] = 'artichokes';
console.log(meals); // ['artichokes', 'bbq', 'chili']

// Indexing with a variable works too
let idx = 0;
console.log(meals[idx]); // artichokes
idx = 2;
console.log(meals[idx]); // chili

// Get the length of an array
// meals = ['artichokes', 'bbq', 'chili'];
console.log(meals.length); // 3

// Get the last element of an array
console.log(meals[meals.length - 1]); // chili

console.log('');

// Iterating with for...of
for (const meal of meals) {
  console.log(meal); // artichokes, bbq, chili
}

// Iterating with a while loop
let i = 0;
while (i < meals.length) {
  console.log(meals[i]); // artichokes, bbq, chili
  i += 1;
}

// Iterating with a "generic" for-loop
for (let i = 0; i < meals.length; i += 1) {
  console.log(meals[i]); // artichokes, bbq, chili
}

console.log('');

// Array methods

// .push() adds an element to the end of an array
meals.push('donuts');
console.log(meals); // ['artichokes', 'bbq', 'chili', 'donuts']

// .pop() removes the last element from an array
const lastMeal = meals.pop();
console.log(lastMeal); // donuts
console.log(meals); // ['artichokes', 'bbq', 'chili']

// .unshift() adds an element to the beginning of an array
meals.unshift('tacos');
console.log(meals); // ['tacos', 'artichokes', 'bbq', 'chili']

// .shift() removes the first element from an array
const firstMeal = meals.shift();
console.log(firstMeal); // tacos
console.log(meals); // ['artichokes', 'bbq', 'chili']

// .includes()
console.log(meals.includes('bbq')); // true
console.log(meals.includes('dim sum')); // false

// .indexOf()
console.log(meals.indexOf('chili')); // 2
console.log(meals.indexOf('dim sum')); // -1

// .slice() with a start and end index returns a subarray
const mealsSubset = meals.slice(1, 3);
console.log(mealsSubset); // ['bbq', 'chili']

// .slice() with no arguments returns a copy of an array
const meals2 = meals.slice();
console.log(meals2); // ['artichokes', 'bbq', 'chili']

// .splice() removes elements from an array and optionally adds new elements
meals.splice(1, 1); // remove 1 element at index 1
console.log(meals); // ['artichokes', 'chili']

meals.splice(1, 0, 'bbq'); // remove 0 elements at index 1 and add 'bbq'
console.log(meals); // ['artichokes', 'bbq', 'chili']

console.log('');
