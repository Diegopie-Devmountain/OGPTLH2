class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log("--Current Item--");
      console.log(current); //apple
      current = current.next;
    }
  }

  find(data) { //cherry
    let current = this.head;

    while (current !== null) {
      if(current.data === data) {
        return current
      }
      current = current.next;
    }

    return null;
  }

  append(data) {
    const newNode = new Node(data);
    
    // New Linked List
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length ++
    } else {
      this.tail.next = newNode; 
      this.tail = newNode
      this.length ++
    }
    return 'not undefined! 🤬'
  }

  remove(value) {
    if (!this.head) return "it's empty, dummy"; 

    if (this.head.data === value) { // 1st node is the match 
      this.head = this.head.next;
      if (this.head === null) { // 
        this.tail = null;
      }
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.data == value) { // cherry
        current.next = current.next.next;
        if (current.next === null) { // 
            this.tail = current;
        }
      } else {
        current = current.next;
      }
    }


  }

}


const firstList = new LinkedList();

// const appleNode = new Node("apple");
firstList.append('apple');
// const berryNode = new Node("berry");
firstList.append('berry');
// const cherryNode = new Node("cherry");
firstList.append('cherry');
firstList.append('durian');

firstList.remove('cherry')


const secondList = new LinkedList();


// appleNode.next = berryNode;
// appleNode.next.next = cherryNode;

// console.log(appleNode.next.next);

// firstList.head = appleNode;
// firstList.tail = cherryNode;

// console.log(firstList);
// console.log(firstList.append('durian'));
