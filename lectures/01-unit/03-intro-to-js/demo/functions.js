/* eslint-disable no-unreachable, consistent-return, no-else-return */

function addTwo(num1, num2) {
  return num1 + num2;
}

const result = addTwo(2, 3);
console.log(result); // 5

function officialLanguageBroken(country) {
  if (country === 'Mexico') {
    return 'Spanish';
  } else if (country === 'Canada') {
    return 'English';
    return 'French'; // Never runs!
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

const tax = 0.075;

function calculateTotalWithTax(price) {
  return price + price * tax;
}

console.log(calculateTotalWithTax(4));
