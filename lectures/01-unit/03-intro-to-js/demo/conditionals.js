// Check if names are the same and output a message
const myName = 'Muir';
const yourName = 'Sam';

if (myName === yourName) {
  console.log('We have the same name!');
} else {
  console.log("That's a nice name.");
}

// Output an error message if password is too short
const password = 'hunter2';
if (password.length < 8) {
  console.log('Password is too short!');
}

// Compare number of pets
const myNumPets = 2;
const yourNumPets = 4;

if (myNumPets > yourNumPets) {
  console.log('I have more pets than you!');
} else if (myNumPets < yourNumPets) {
  console.log('You have more pets than me!');
} else {
  console.log('We have the same number of pets!');
}
