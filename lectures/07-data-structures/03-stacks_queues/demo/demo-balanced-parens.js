class Stack {
  
  constructor (initArray) {
    this._data = initArray ?? [];
  }

  push(item) {
    this._data.push(item);
  }

  pop() {
    if(this.isEmpty()) {
      return false
    }
    return this._data.pop();
  }

  length() {
    return this._data.length
  }

  peek() {
    return this._data[this.length() - 1]
  }

  isEmpty() {
    return this._data.length === 0;
  }
}






function areTheyBalanced (expression) {
  const parenStack = new Stack();

  for (const char of expression) {
    if ( char === "(" ) {
      parenStack.push(char) 
    } else if ( char === ")" ) {
        const remove = parenStack.pop()

        if (remove) {
          return false
        }
    }
  }
  console.log(parenStack._data);

  return parenStack.isEmpty()

}




const string1 = '((3+4)-(1+2))))/(1+1)'
const string2 = '((3+4)-(1+2)/(1+1)'

console.log(areTheyBalanced(string1))