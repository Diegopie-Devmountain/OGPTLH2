import prompts from "prompts";

class Queue {
  _data = [];

  enqueue(value) {
    this._data.push(value);
  }

  dequeue(value) {
    return this._data.shift();
  }

  peek() {
    return this._data[0]
  }

  getQueue() {
    return this._data
  }

  isEmpty() {
    return this._data.length === 0;
  }
}

// const userQueue = new Queue()

console.log(userQueue);

(async function main() {

  const firstTask = userQueue.isEmpty() ? 'No tasks in list, please add a task' : userQueue.peek();


  console.log(`First task: ${firstTask}`);


  const response = await prompts({
    type: "text",
    name: "command",
    message: "A)dd task, D)o first task, V)iew all tasks or Q)uit",
    format: (userResponse) => userResponse.toLowerCase(),
  });
  console.log(response);

  switch (response.command) {
    case "a":
      const { task } = await prompts({
        type: 'text',
        name: 'task',
        message: 'Enter Task'
      })
      console.log(task);
      userQueue.enqueue(task)
      break;

    case "d":
      const taskToRemove = userQueue.dequeue()
      console.log(`Removed: ${taskToRemove}`);
      break;
    
    case "v": 
      console.log(userQueue.getQueue());
      break;

    case "q":
      console.log('Goodbye!');
      process.exit()
      break;
    default:
      console.log("Please select A, D, or Q");
      break;
  }

  main();
})();
