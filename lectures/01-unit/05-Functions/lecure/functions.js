/* eslint-disable no-unreachable, consistent-return, no-else-return */

function addNums(num1, num2) {
  return num1 + num2;
}

const sum = addNums(2, 3);
console.log(sum); // 5

function addWords(word1, word2) {
  console.log(word1 + word2);
}

const result = addWords('dev', 'mountain');
console.log(result);
// undefined, because addWords has no return!

function officialLanguageBroken(country) {
  if (country === 'Mexico') {
    return 'Spanish';
  } else if (country === 'Canada') {
    return 'English';
    return 'French'; // Never runs
  }
}

console.log(officialLanguageBroken('Canada'));

function officialLanguage(country) {
  if (country === 'Mexico') {
    return 'Spanish';
  } else if (country === 'Canada') {
    return ['English', 'French'];
  }
}

console.log(officialLanguage('Canada'));

function sayHello(name) {
  console.log('Hello', name);
}

sayHello();
// prints out "Hello undefined" because no value is provided for parameter 'name'

function calculateTip(amount, percentage = 0.15) {
  return amount * percentage;
}

console.log(calculateTip(10)); // 1.5
console.log(calculateTip(10, 0.2)); // 2

const tax = 0.075;

function calculateTotalWithTax(price) {
  return price + price * tax;
}

console.log(calculateTotalWithTax(4)); // 4.3

function greet(person, beforeNoon, afterMidnight = false) {
  if (beforeNoon) {
    return `Good morning, ${person}!`;
  } else if (afterMidnight) {
    console.log(`Don't wake ${person}, they're asleep!`);
  } else {
    return `Hello, ${person}!`;
  }
}

const name1 = 'Andrew';

const greeting1 = greet(name1, false);
const greeting2 = greet('Bob', false, true);
const greeting3 = greet('Clara', true);
