class BinarySearchNode  {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  find(dataToFind) {
    let currentNode = this;

    while (currentNode !== null) {
      console.count('BST');
      console.log(`CurrentNode Node: ${currentNode.data}`);
      console.log(`Children Nodes: ${currentNode.left?.data}, ${currentNode.right?.data}`);

      if (currentNode.data === dataToFind) {
        return currentNode;
      } else if (dataToFind < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right
      }
      


    }
  }
}


const apple = new BinarySearchNode("apple")
const ghost = new BinarySearchNode("ghost")
const fence = new BinarySearchNode("fence", apple, ghost)
const just = new BinarySearchNode("just")
const jackal = new BinarySearchNode("jackal", fence, just)
const zebra = new BinarySearchNode("zebra")
const pencil = new BinarySearchNode("pencil", null, zebra)
const mystic = new BinarySearchNode("mystic")
const nerd = new BinarySearchNode("nerd", mystic, pencil)
const money = new BinarySearchNode("money", jackal, nerd)

console.log("ghost = ", money.find("ghost"))  // should find
// console.log("banana = ", money.find("banana"))  // shouldn't find