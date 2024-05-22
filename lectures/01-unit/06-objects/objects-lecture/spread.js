/// Spread syntax

const fruitsInventory = {
  apple: 6,
  berry: 12,
  cherry: 8,
};

const inventoryCopy = { ...fruitsInventory };
console.log(inventoryCopy); // { apple: 6, berry: 12, cherry: 8 }

const fruitsArray = ['apple', 'berry', 'cherry'];
const fruitsCopy = [...fruitsArray];
console.log(fruitsCopy); // [ 'apple', 'berry', 'cherry' ]

const vowels = 'aeiou';
const vowelsArray = [...vowels];
console.log(vowelsArray); // [ 'a', 'e', 'i', 'o', 'u' ]

const moreFruits = [...fruitsArray, 'durian'];
console.log(moreFruits); // [ 'apple', 'berry', 'cherry', 'durian' ]

const moreInventory = { ...fruitsInventory, durian: 1 };
console.log(moreInventory); // { apple: 6, berry: 12, cherry: 8, durian: 1 }

const veggies = ['asparagus', 'broccoli', 'carrot'];
const fruitsAndVeggies = [...fruitsArray, ...veggies];
console.log(fruitsAndVeggies); // [ 'apple', 'berry', 'cherry', 'asparagus', 'broccoli', 'carrot' ]

const inventoryUpdate = { berry: 9, durian: 1 };
const updatedInventory = { ...fruitsInventory, ...inventoryUpdate };
console.log(updatedInventory); // { apple: 6, berry: 9, cherry: 8, durian: 1 }
