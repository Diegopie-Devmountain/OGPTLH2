const fruitsArray = ['apple', 'berry', 'cherry'];

const [fruit0, fruit1, fruit2] = fruitsArray;
console.log(fruit0); // apple
console.log(fruit1); // berry
console.log(fruit2); // cherry

const fruitsInventory = { apple: 6, berry: 12, cherry: 8 };

// Object.entries(fruitsInventory) contains 3 arrays:
// [['apple', 6], ['berry', 12], ['cherry', 8]]

for (const [fruit, num] of Object.entries(fruitsInventory)) {
  // each array gets unpacked into 2 values, 'fruit' and 'num'
  console.log(fruit, num);
}

const { apple, cherry } = fruitsInventory;
console.log(apple); // 6
console.log(cherry); // 8
