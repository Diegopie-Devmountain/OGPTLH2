import Stack from './src/stack.js';

function areParensBalanced(expr) {
  const parens = new Stack();

  for ( const char of expr ) {
    if ( char === '(' ) {
      parens.push(char);
      console.log(parens._data);
    } else if (char === ')') {
      console.log(parens._data);
      if (parens.isEmpty()) {
        return false;
      }

      parens.pop();
    }
  }

  return parens.isEmpty();
}

const string1 = '((3+4)-(1+2)/(1+1)'
const string2 = '((3+4)-(1+2)/(1+1)'

const result = areParensBalanced(string1);
console.log(`is ${string1} balanced?`, result); // true
