// Select elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const tasksContainer = document.getElementById("tasks-container");
const clearButton = document.querySelector(".clear-btn");
const taskListContainer = document.getElementById("task-list"); // Select the task list container

// Function to check if there are any tasks and show/hide task list
function checkTaskListVisibility() {
  if (tasksContainer.children.length > 0) {
    taskListContainer.style.display = "block"; // Show task list
  } else {
    taskListContainer.style.display = "none"; // Hide task list if no tasks
  }
}

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim(); // Remove extra spaces

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task element
  const li = document.createElement("li");
  li.className = "task-item";

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.className = "task-text";

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "delete-btn";

  // Add event listener to delete the task when the button is clicked
  deleteBtn.addEventListener("click", () => {
    li.remove();
    checkTaskListVisibility(); // Check if the task list should be hidden after deletion
  });

  // Append task text and delete button to the list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Append the list item to the tasks container
  tasksContainer.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  checkTaskListVisibility(); // Check if the task list should be shown after adding a task
}

// Add event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Add event listener for the "Enter" key
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent default form submission behavior
    addTask(); // Call the addTask function
  }
});

// Add event listener for the "Clear" button in the input field
clearButton.addEventListener("click", () => {
  taskInput.value = ""; // Clear the input field
});
