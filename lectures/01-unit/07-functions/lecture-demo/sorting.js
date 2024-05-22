const whales = ['Blue', 'Humpback', 'Beluga'];
console.log(whales.sort()); // ['Beluga', 'Blue', 'Humpback']

// Sorting an array of numbers doesn't work out of the box
// because it converts all the numbers to strings!
const nums = [40, 1, 5, 200];
console.log(nums.sort()); // [1, 200, 40, 5]

const sortedNums = nums.sort((a, b) => a - b);
console.log(sortedNums); // [1, 5, 40, 200]

const kids = [
  { name: 'Allison', age: 11 },
  { name: 'Ben', age: 9 },
  { name: 'Caitlin', age: 7 },
];

const sortedKids = kids.sort((kid1, kid2) => kid1.age - kid2.age);
console.log(sortedKids); // Caitlin, Ben, Allison
