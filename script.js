// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim(); 

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task.'); // Prompt user to enter a task if input is empty
            return; // Exit the function if input is empty
        }

        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add onclick event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li); // Remove the task when clicked
        };

        // Append button to li and li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Add task on button click
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Add task on Enter key press
        }
    });
});
