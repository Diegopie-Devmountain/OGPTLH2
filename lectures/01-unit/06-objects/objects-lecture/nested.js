const fruits = [
  {
    name: 'apple',
    genus: 'Malus',
    colors: ['red', 'yellow', 'green'],
  },
  {
    name: 'berry',
    genus: 'Vaccinium',
    colors: ['red', 'blue'],
  },
  {
    name: 'cherry',
    genus: 'Prunus',
    colors: ['red'],
  },
];

console.log(Array.isArray(fruits)); // true
console.log(typeof fruits[0]); // Object
console.log(fruits[0].colors); // ['red', 'yellow', 'green']
console.log(fruits[0].colors[1]); // 'yellow'

// Looping through an array of objects
for (const fruit of fruits) {
  // fruit is an object, loop through its keys
  for (const key in fruit) {
    console.log(key, fruit[key]);
  }
  console.log('');
}

// Don't worry about understanding this function.
// It's copied from MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#custom_method_that_gets_a_more_specific_type)
// and used here to return the specific type of an object.
function type(value) {
  if (value === null) {
    return 'null';
  }
  const baseType = typeof value;
  // Primitive types
  if (!['object', 'function'].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag often specifies the "display name" of the
  // object's class. It's used in Object.prototype.toString().
  const tag = value[Symbol.toStringTag];
  if (typeof tag === 'string') {
    return tag;
  }

  // If it's a function whose source code starts with the "class" keyword
  if (baseType === 'function' && Function.prototype.toString.call(value).startsWith('class')) {
    return 'class';
  }

  // The name of the constructor; for example `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean` or `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === 'string' && className !== '') {
    return className;
  }

  // At this point there's no robust way to get the type of value,
  // so we use the base implementation.
  return baseType;
}
