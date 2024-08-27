class Node {
  constructor(data, children=[]) {
    this.data = data;
    this.children = children;
  }

  // Find using Depth First Search.
  find(data) {
    let toVisit = [this];

    while (toVisit.length > 0) {
      let current = toVisit.pop();

      if (current.data === data) {
        return current;
      }
      toVisit = toVisit.concat(current.children);
    }
  }
}


const resume = new Node("resume.txt", [])
const recipes = new Node("recipes.txt", [])
const jane = new Node("jane/", [resume, recipes])
const server = new Node("server.py", [])
const jessica = new Node("jessica/", [server])
const users = new Node("Users/", [jane, jessica])
const root = new Node("/", [users])

console.log(root.find("recipes.txt"));  // should find
console.log(root.find("CSS"));  // should not find