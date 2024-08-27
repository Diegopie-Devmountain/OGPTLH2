class BinarySearchNode {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  find(dataToFind) {
    let current = this;
    while (current !== null) {

      if (current.data === dataToFind) {
        return current;
      }
      else if (dataToFind < current.data) {
        current = current.left;
      }
      else {
        current = current.right;
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

console.log("nerd = ", money.find("nerd"))  // should find
console.log("banana = ", money.find("banana"))  // shouldn't find
