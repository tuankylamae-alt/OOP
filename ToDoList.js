const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function showMenu() {
  console.log("\n===== MY TO-DO LIST =====");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Complete Task");
  console.log("4. Delete Task");
  console.log("5. Exit");

  rl.question("Choose an option: ", choice => {
    if (choice === "1") {
      addTask();
    } else if (choice === "2") {
      viewTasks();
    } else if (choice === "3") {
      completeTask();
    } else if (choice === "4") {
      deleteTask();
    } else if (choice === "5") {
      console.log("Goodbye!");
      rl.close();
    } else {
      console.log("Invalid choice!");
      showMenu();
    }
  });
}

function addTask() {
  rl.question("Enter a task: ", name => {
    if (name.trim() === "") {
      console.log("Task cannot be empty!");
    } else {
      tasks.push({
        name: name.trim(),
        completed: false
      });
      console.log("Task added successfully!");
    }

    showMenu();
  });
}

function viewTasks() {
  console.log("\n===== TASKS =====");

  if (tasks.length === 0) {
    console.log("No tasks available.");
  } else {
    tasks.forEach((task, index) => {
      const status = task.completed ? "Completed" : "Pending";
      console.log(`${index + 1}. ${task.name} - ${status}`);
    });
  }

  showMenu();
}

function completeTask() {
  if (tasks.length === 0) {
    console.log("No tasks to complete.");
    showMenu();
    return;
  }

  viewTaskChoices("complete");
}

function deleteTask() {
  if (tasks.length === 0) {
    console.log("No tasks to delete.");
    showMenu();
    return;
  }

  viewTaskChoices("delete");
}

function viewTaskChoices(action) {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name}`);
  });

  rl.question("Enter task number: ", answer => {
    const index = Number(answer) - 1;

    if (
      answer.trim() === "" ||
      !Number.isInteger(Number(answer)) ||
      index < 0 ||
      index >= tasks.length
    ) {
      console.log("Invalid task number!");
    } else if (action === "complete") {
      tasks[index].completed = true;
      console.log("Task marked as completed!");
    } else {
      tasks.splice(index, 1);
      console.log("Task deleted successfully!");
    }

    showMenu();
  });
}

showMenu();