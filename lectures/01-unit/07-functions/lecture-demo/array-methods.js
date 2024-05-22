/// Array iteration methods

/// forEach()

// Using forEach to output the length of each string.
const fruits = ['apple', 'berry', 'cherry'];
fruits.forEach((fruit) => {
  console.log(fruit.length);
});
// Output:
// 5
// 5
// 6

// Outputting each argument passed to the callback.
fruits.forEach((fruit, idx) => {
  console.log(fruit, idx);
});
// Output: apple 0, berry 1, cherry 2

// Using forEach() to replace every other letter in a string with an asterisk.
const phrase = 'Hello, world!';
const phraseArray = [...phrase]; // copy the string to an array

let replacedEveryOther = '';
phraseArray.forEach((letter, idx) => {
  if (idx % 2 === 0) {
    replacedEveryOther += letter;
  } else {
    replacedEveryOther += '*';
  }
});
console.log(replacedEveryOther); // H*l*o* *o*l*!

/// map()

const capitalize = (word) => {
  // Return the word with the first letter capitalized.
  return word[0].toUpperCase() + word.slice(1);
};

const capitalizedFruits = fruits.map(capitalize);
console.log(capitalizedFruits);
// [ 'Apple', 'Berry', 'Cherry' ]

// fruits is unchanged:
console.log(fruits); // [ 'apple', 'berry', 'cherry' ]

const vals = [3, 100, 22];
const doubledVals = vals.map((val) => val * 2);
console.log(doubledVals); // [ 6, 200, 44 ]

// vals is unchanged:
console.log(vals); // [ 3, 100, 22 ]

const pets = [
  { name: 'Fido', species: 'dog', hasPhd: true },
  { name: 'Socks', species: 'cat', hasPhd: false },
  { name: 'Kiko', species: 'cat', hasPhd: true },
  { name: 'Noodles', species: 'fish', hasPhd: false },
];

// Use map() to output a formal introduction for each pet.
const petIntroductions = pets.map((pet) => {
  if (pet.hasPhd) {
    return `This is Dr. ${pet.name} the ${pet.species}`;
  }
  return `This is ${pet.name} the ${pet.species}`;
});

console.log(petIntroductions);

/// filter()

const isEven = (num) => num % 2 === 0;

const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(isEven);
console.log(evens); // [ 2, 4 ]

const fish = pets.filter((pet) => pet.species === 'fish');
console.log(fish); // [ { name: 'Noodles', species: 'fish', hasPhd: false } ]

// Count the number of vowels in a string.
const sentence = 'The quick brown fox jumps over the lazy dog.';
const vowelsOnly = sentence.split('').filter((letter) => {
  return 'aeiou'.includes(letter);
});
console.log(`There are ${vowelsOnly.length} vowels in the sentence.`);
// Output:
// There are 11 vowels in the sentence.

/// reduce()

// Sum all the numbers in an array.
const initialValue = 0;
const sumAllNums = nums.reduce((runningTotal, curValue) => runningTotal + curValue, initialValue);
console.log(sumAllNums); // 15

// Find the total price of Bob's purchases.
const purchases = [
  { customer: 'Barry', price: 9 },
  { customer: 'Bob', price: 50 },
  { customer: 'Barry', price: 27 },
  { customer: 'Barry', price: 128 },
  { customer: 'Bob', price: 22 },
];
const bobsTotal = purchases.reduce((total, purchase) => {
  if (purchase.customer === 'Bob') {
    return total + purchase.price;
  }
  return total;
}, 0);
console.log(bobsTotal);
