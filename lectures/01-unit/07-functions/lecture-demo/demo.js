// function addTwo(x) {
//   return x + 2
// }

// // console.log(addTwo(4));

// let addTwoArrow = (x) => {
//   return x + 2
// }
// let addTwoArrowShort = (x) => x + 2;

// console.log(addTwoArrow(4));
// console.log(addTwoArrowShort(4));

// const alertTimeExpired = () => {
//   console.log("Time is Up!");
// }

// setTimeout(alertTimeExpired, 3000);

// setTimeout(() => {
//   console.log("Times Up Inline");
// }, 4000);

const greet = (name, callBack) => {
  const fullName = name + " Perez";
  return callBack(fullName);
};

// console.log(greet('Lorena', (name) => `Buenos dias, ${name}`));

const greetings = {
  french: function (name) {
    return `Bonjour, ${name}`;
  },
  spanish: (name) => `Buenos dias, ${name}`,
};

// console.log(greet('Lorena', greetings.spanish));

// console.log(greet('Pierre', greetings.french));

const fruits = ["apple", "berry", "cherry"];

// console.log("-- FOR EACH --");
fruits.forEach(
  (item, index, array) => {
    // console.log(item, index, array);
  }
);

// const phrase = 'Hello, World!';

// const phraseArray = [...phrase];

// let replacedEveryOther = '';

// phraseArray.forEach( (letter, index) => {
//   if (index % 2 === 0) {
//     replacedEveryOther += letter;
//   } else {
//     replacedEveryOther += '*'
//   }
// });

// console.log(replacedEveryOther);
// console.log("-- our for each --");
const ourForEach = (array, arrayItemsCB) => {
  for (let index = 0; index < array.length; index++) {
   
    arrayItemsCB(array[index], index, array);
  }
};

const arrayItems = (item, index, array) => {
  console.log(item, index, array);
};

// ourForEach(fruits, arrayItems);


const capitalizedFruits = fruits.map((word, index) => {
  return word[0].toUpperCase() + word.slice(1);
});

// console.log(fruits);
// console.log(capitalizedFruits);

const vals = [3, 100, 22];

const doubleVals = vals.map(
  (val) => val * 2
  // (val) => {
  //   return val * 2
  // }
)

// console.log(vals);
// console.log(doubleVals);


const isEven = (num) => num % 2 === 0; 

function isEvener (num) {
  return num % 2 === 0;
}

const nums = [1, 2, 3, 4, 5];

const evenNumbers = nums.filter(
  isEvener
  // (num) => {
  //   console.log(num);
  //   console.log(num % 2 === 0);
  //   return num % 2 === 0;
  // }
)


// console.log(evenNumbers);

const pets = [
  { name: 'Fido', species: 'dog', hasPhd: true },
  { name: 'Socks', species: 'cat', hasPhd: false },
  { name: 'Kiko', species: 'cat', hasPhd: true },
  { name: 'Noodles', species: 'fish', hasPhd: false },
];

const doctors = pets.filter( (pet) => {
  // console.log(pet);
  
  return pet.hasPhd;
 
})

const cats = pets.filter((itemInMyArray) => {
  if (itemInMyArray.species === 'cat') {
    // console.log(itemInMyArray.species);
    return true
  }
})

const catsSingle = pets.filter((itemInMyArray) => itemInMyArray.species === 'cat')

// console.log(catsSingle);

const numsForReduce = [1, 2, 3, 4, 5];

// reduce(callBack, initValue)

const initValue = 0;

const sumAllNums = numsForReduce.reduce( (accumulator, currentValue) => {
  // console.count("Iteration")
  // console.log(accumulator);
  // console.log(currentValue);

  return accumulator + currentValue;
})



// console.log(mySum);
// console.log(sumAllNums);


const purchases = [
  { customer: 'Barry', price: 9 },
  { customer: 'Bob', price: 50 },
  { customer: 'Barry', price: 27 },
  { customer: 'Barry', price: 128 },
  { customer: 'Bob', price: 22 },
];
// accumulator, currentValue
const bobsTotal = purchases.reduce( (total, purchase) => {
  // console.count('Bob')
  if (purchase.customer === 'Bob') {
    return total + purchase.price;
  } 
  
  return total;
}, 0)

// console.log(bobsTotal);

const expenses = [
  { category: 'Food', amount: 50 },
  { category: 'Transportation', amount: 30 },
  { category: 'Food', amount: 40 },
  { category: 'Entertainment', amount: 20 },
  { category: 'Transportation', amount: 25 }
];

const totalExpenses = expenses.reduce( (accumulator, currentValue) => { 
  // food // 50
  const { category, amount} = currentValue;

  // console.count('Total Expenses')
  // console.log(accumulator);
  // console.log(accumulator[category]);
  
  accumulator[category] = (accumulator[category] || 0) + amount;
  // console.log(accumulator[category]);
  return accumulator;

}, {} )

// console.log(totalExpenses);

const numberSorter = (a, b) => {
  return b - a;
}

const numsSort = [40, 1, 5, 200];
console.log(numsSort.sort(numberSorter)); // [1, 200, 40, 5]

const kids = [
  {'name': 'Allison', 'age': 11},
  {'name': 'Ben', 'age': 9},
  {'name': 'Caitlin', 'age': 7}
]

const kidsCopy = [...kids];

const sortedKids = [...kids].sort((kid1, kid2) => kid1.age - kid2.age)

console.log(kids);
console.log(sortedKids);