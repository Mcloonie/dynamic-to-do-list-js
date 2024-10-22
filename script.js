// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    loadTasks(); // Load existing tasks from Local Storage

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list for displaying tasks

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents saving again
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Task creation logic remains the same
        if (taskText === undefined) {
            taskText = taskInput.value.trim(); // Get input value if not provided
        }

        if (taskText === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return; // Exit if the input is empty
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text of the list item

        // Create a new button for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set the button text
        removeButton.classList.add('remove-btn'); // Add class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the task from the list
            removeTaskFromStorage(taskText); // Remove from Local Storage
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);
        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Save the task to Local Storage if indicated
        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText); // Add the new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated tasks back to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Filter out the removed task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Update Local Storage
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask()); // Add task on button click
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Add task on Enter key press
        }
    });
});
