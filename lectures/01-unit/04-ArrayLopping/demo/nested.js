// Nested arrays
const grid = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];

console.log(grid[0]); // ['A', 'B', 'C']
console.log(grid[0][1]); // 'B'
console.log(grid[1][0]); // 'D'

grid[2][2] = 'J'; // changes 'I' to 'J'

console.log('');

// Print all the letters in the grid on separate lines
for (const row of grid) {
  for (const letter of row) {
    console.log(letter);
  }
}

// Alternative using generic for loops
for (let row = 0; row < grid.length; row += 1) {
  for (let col = 0; col < grid[row].length; col += 1) {
    console.log(grid[row][col]);
  }
}

// Tic-Tac-Toe

console.log('');

// Output the value of each cell in a tic-tac-toe board:
const tictactoe = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['?', 'O', 'X'],
];

// Get the value in the 3rd row, 1st column ('?')
console.log(tictactoe[2][0]);

// Print out all values
for (const row of tictactoe) {
  for (const cell of row) {
    console.log(cell);
  }
}
// Output:
// X
// O
// X
// O
// X
// O
// ?
// O
// X
