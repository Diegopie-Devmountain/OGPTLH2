 const shoppingList = [
  'kleenex',
  'trash bags',
  'paper towels',
  'paper towels',
  'milk',
  'milk',
  'milk',
];

console.log(shoppingList);

const unique = new Set(shoppingList);

console.log(unique.keys());