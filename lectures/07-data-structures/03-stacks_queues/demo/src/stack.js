export default class Stack {
  constructor(fromArr) {
    this._data = fromArr ?? [];
  }

  push(item) {
    this._data.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this._data.pop();
  }

  length() {
    return this._data.length;
  }

  peek() {
    return this._data[this._data.length - 1];
  }

  isEmpty() {
    return this._data.length === 0;
  }
}
