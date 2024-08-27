const util = require('util');
// import util from util;

class TreeNode {
  constructor(data, children = []) {
    this.data = data;
    this.children = children
  }

  // [util.inspect.custom]() {
  //   return JSON.stringify(this, null, 2);
  // }

  findDepthSearch(data) {
    // stack for the loop
    let toVisit = [this]; 
    console.log(toVisit);
    console.log(toVisit.length);

    while(toVisit.length > 0) {
      // Remove from stack
      let current = toVisit.pop();

      if (current.data === data) {
        return current;
      }

      // add to stack
      toVisit = toVisit.concat(current.children);

      console.count('Depth Search')
      console.log(`Children of: ${current.data}`);
      
      console.log(toVisit);
      console.log(toVisit.length);     
    }
  }

  findBreadthSearch(data) {
    // stack for the loop
    let toVisit = [this]; 
    console.log(toVisit);
    console.log(toVisit.length);

    while(toVisit.length > 0) {
      // Remove from stack
      let current = toVisit.shift();

      if (current.data === data) {
        return current;
      }

      // add to stack
      toVisit = toVisit.concat(current.children);

      console.count('Breadth Search')
      console.log(`Children of: ${current.data}`);
      
      console.log(toVisit);
      console.log(toVisit.length);
    }
  }

}

class Tree { 
  constructor(root) {
    this.root = root;
  }
}


const kyo = new TreeNode('kyo', [
  new TreeNode('Riley')
]);
const dawa = new TreeNode('dawa', [
  new TreeNode('seamus'),
  new TreeNode('harlow'),
]);
const riley = new TreeNode('riley', [
  new TreeNode('les'),
  new TreeNode('endi'),
]);
const mien = new TreeNode('mien', [
  new TreeNode('isi')
]);

const taylor = new TreeNode('taylor', [kyo]);
const zuza = new TreeNode('zuza', [dawa, riley]);
const rachna = new TreeNode('rachna', [mien]);

const morgan = new TreeNode('morgan', [taylor, zuza, rachna])

const employeeTree = new Tree(morgan)

console.log(taylor.findBreadthSearch('riley'));
