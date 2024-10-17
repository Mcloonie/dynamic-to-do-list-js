document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim the input value

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task.'); // Alert if input is empty
            return; // Exit the function if input is empty
        }

        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText; // Set textContent to taskText

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove'; // Set button text
        removeBtn.className = 'remove-btn'; // Set class name

        // Assign onclick event to remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeBtn);
        // Append the li to taskList
        taskList.appendChild(li);
        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Call addTask on button click
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter key is pressed
        }
    });
});
