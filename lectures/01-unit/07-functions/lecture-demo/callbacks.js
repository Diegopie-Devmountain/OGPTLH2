function alertTimeExpired() {
  console.log("Time's up!");
}

// This calls alertTimeExpired() after waiting 3 seconds.
setTimeout(alertTimeExpired, 3000);

// Example with an inline arrow function
setTimeout(() => console.log("Time's up!"), 3000);

const sayHello = (name) => `Hello, ${name}!`;

const irishGreeting = (name) => `Top of the morning to you, ${name}!`;

const greet = (name, greetingCallback) => {
  console.log(greetingCallback(name));
};

greet('Steve', sayHello); // Hello, Steve!
greet('Patrick', irishGreeting); // Top of the morning to you, Patrick!

greet('Lorena', (name) => `Buenos dias, ${name}!`);
// Buenos dias, Lorena!

greet('Pierre', (name) => `Bonjour, ${name}!`);
// Bonjour, Pierre!
