document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks without saving them again
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        const trimmedTaskText = taskText ? taskText.trim() : taskInput.value.trim();
        
        // Check if the input is empty
        if (trimmedTaskText === "" && save) {
            alert("Please enter a task.");
            return;
        }

        // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = trimmedTaskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove from the DOM
            removeTaskFromStorage(trimmedTaskText); // Remove from Local Storage
        };

        // Append the button to the li and the li to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Save to Local Storage if applicable
        if (save) {
            saveTaskToStorage(trimmedTaskText);
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText); // Filter out the removed task
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Attach event listeners
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
