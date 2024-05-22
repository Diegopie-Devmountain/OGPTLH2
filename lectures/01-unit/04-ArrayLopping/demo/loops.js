const perfectTemp = 125;
let teaTemp = 130;

while (teaTemp > perfectTemp) {
  // add a chip of ice
  teaTemp -= 1;
  console.log('Tea temperature is now', teaTemp);
}

// Example of `break` statement
const students = ['Alice', 'Bob', 'Charlie', 'Diana'];

let i = 0; // i stands for index
while (i < students.length) {
  console.log(students[i]);

  if (students[i] === 'Bob') {
    console.log('Hi Bob!');
    break; // we found Bob, no need to loop any further!
  }
  i += 1;
}

// Count by 2: 0, 2, 4, 6, 8
for (let n = 0; n < 10; n += 2) {
  console.log(n);
}

// Countdown loop
for (let n = 10; n > 0; n -= 1) {
  console.log(n);
}
console.log('Blast off!');

// Looping through a string with for...of
const str = 'Hello';
for (const letter of str) {
  console.log(letter); // H, e, l, l, o
}
