import prompts from 'prompts';
import Queue from './src/queue.js';

const taskQueue = new Queue();

async function main() {
  const firstTask = taskQueue.isEmpty() ? undefined : taskQueue.peek();

  console.log(`First task: ${firstTask}`);
  const { command } = await prompts({
    type: 'text',
    name: 'command',
    message: 'A)dd task, D)o first task, or Q)uit?',
    format: (value) => value.toUpperCase(),
  });

  if (command === 'A') {
    const { task } = await prompts({
      type: 'text',
      name: 'task',
      message: 'Enter task',
    });
    taskQueue.enqueue(task);
  } else if (command === 'D') {
    const task = taskQueue.dequeue();
    console.log(`Task done: ${task}`);
  } else if (command === 'Q') {
    console.log('Goodbye!');
    process.exit();
  } else {
    console.log('Invalid command');
  }

  main();
}

main();
