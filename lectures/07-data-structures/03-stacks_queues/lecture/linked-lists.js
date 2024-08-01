class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const appleNode = new Node('apple');
const berryNode = new Node('berry');
const cherryNode = new Node('cherry');

appleNode.next = berryNode;
berryNode.next = cherryNode;

console.log(appleNode.data); // 'apple'
console.log(appleNode.next); // Node {data: 'berry', next: {data: 'cherry'}}
console.log(cherryNode.next); // null

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Print the items in the list
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);

      current = current.next;
    }
  }

  // Find a node containing the given data
  find(data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    }
    return null;
  }

  // Append new node with given data to end of list
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }

  // Remove the node with the given value
  remove(value) {
    // If removing head, make 2nd item (if any) the new .head
    if (this.head && this.head.data === value) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null; // we just removed the only item
      }
      return;
    }

    // If we get here, we're removing something other than the head
    let current = this.head;

    // We need to stop at the node BEFORE the one we want to remove
    while (current.next !== null) {
      if (current.next.data === value) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current; // If removing last item, update tail
        }
      } else {
        current = current.next;
      }
    }
  }
}

const ll = new LinkedList();
ll.append('apple');
ll.append('berry');
ll.append('cherry');
ll.printList();
ll.remove('apple');
ll.printList();
