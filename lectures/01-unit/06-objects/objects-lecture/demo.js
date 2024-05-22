const fruits = ["apples", "berry", "cherry"];

for (const fruit of fruits) {
  // console.log(fruit);
}

const fruitCount = [6, 12, 8];

// console.log(fruits[apples], fruitCount[apples]);

const userInfo = {
  username: "Diegopie",
  email: "diego@thepies.co",
  password: "password",
};

const fruitInventory = {
  apples: 6,
  berry: 12,
  cherry: 8,
  grannySmithApple: 20,
};

// console.log(Object.entries(fruitInventory));

for (const [fruit, count] of Object.entries(fruitInventory)) {
  // console.log(fruit, count);
}

const inventoryCopy = { ...fruitInventory };

inventoryCopy.fuji = 25;
inventoryCopy.grannyApple = 50;

// console.log('-- Original Object --');
// console.log(fruitInventory);
// console.log('-- Copy of Object --');
// console.log(inventoryCopy);

for (const fruit in fruitInventory) {
  // console.log(fruit, fruitInventory[fruit]);
}

// console.log(Object.values(fruitInventory));
// const allInv = Object.entries(fruitInventory);
// console.log(allInv);

// console.log(Object.keys(fruitInventory));

const fruitsCopy = [...fruits];

// console.log(fruitsCopy);

// const {username, email} = userInfo;

// console.log("User Info: ", username, email);

// const [apples, cherry] = fruits;
// const [applesTwo, cherryTwo] = fruits;

// console.log(applesTwo, cherryTwo);
// console.log(apples, cherry);

const fruit = [
  {
    name: "apple",
    genus: "Malus",
    colors: ["red", "yellow", "green"],
  },
  {
    name: "berry",
    genus: "Vaccinium",
    colors: ["red", "blue"],
  },
  {
    name: "cherry",
    genus: "Prunus",
    colors: ["red"],
  },
];

console.log(fruit[1].colors[1]);

for (const item of fruit) {
  console.log(item.colors);
  for (const color of item.colors) {
    console.log(color);
  }
  // for (const key in item) {
  //   console.log(key);
  // }
}
