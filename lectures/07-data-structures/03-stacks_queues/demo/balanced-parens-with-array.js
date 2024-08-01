function areParensBalanced(expr) {
  const parens = [];

  for (const char of expr) {
    if ( char === '(' ) {
      parens.push(char);
    } else if ( char === ')' ) {
      if (parens.length !== 0) {
        return false;
      }

      parens.pop();
    }
  }

  return parens.length !== 0;
}

const result = areParensBalanced('((3+4)-(1+2))/(1+1)');
console.log('is ((3+4)-(1+2))/(1+1) balanced?', result); // true
