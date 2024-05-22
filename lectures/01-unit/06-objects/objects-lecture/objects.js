/// JavaScript 2: Objects demo

const fruits = {
  apple: 5,
  berry: 12,
  cherry: 8,
};

console.log(fruits.apple); // 5

// Accessing values with bracket notation

const fruitName = 'apple';
console.log(fruits[fruitName]); // 5

// Updating values
fruits.apple = 6;
console.log(fruits); // { apple: 6, berry: 12, cherry: 8 }

// Adding values
fruits.dragonfruit = 4;
console.log(fruits); // { apple: 6, berry: 12, cherry: 8, dragonfruit: 4 }

// Deleting
delete fruits.dragonfruit;
console.log(fruits); // { apple: 6, berry: 12, cherry: 8 }

// Looping
for (const fruit in fruits) {
  console.log(fruit, fruits[fruit]);
}

// Values
console.log(Object.values(fruits)); // [6, 12, 8]

// Entries
for (const [fruit, num] of Object.entries(fruits)) {
  console.log(fruit, num);
}

// Destructuring
const { apple, cherry } = fruits;
console.log(apple); // 6
console.log(cherry); // 8

const weirdFruits = {
  'star apple': 2,
  kumquat: 4,
  loganberry: 7,
};

console.log(weirdFruits['star apple']); // 2

weirdFruits.kumquat = 5;
// value of 'kumquat' updated to 5

weirdFruits['prickly pear'] = 3;
console.log(weirdFruits);
