// Example queue implementation using an array.
// This is a straightforward implementation, but it's not very efficient. For a more efficient
// queue implementation, you should build a queue using a linked list.

export default class Queue {
  constructor() {
    this._data = [];
  }

  enqueue(value) {
    this._data.push(value);
  }

  dequeue() {
    return this._data.shift();
  }

  peek() {
    return this._data[0];
  }

  isEmpty() {
    return this._data.length === 0;
  }
}
