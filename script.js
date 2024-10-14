document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // 1. Create a new li element and set its textContent to taskText
        const li = document.createElement('li');
        li.textContent = taskText;

        // 2. Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set button text
        removeButton.className = 'remove-btn'; // Give it a class

        // 3. Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove li element from taskList
        };

        // 4. Append the remove button to the li element
        li.appendChild(removeButton);

        // 5. Append the li to taskList
        taskList.appendChild(li);

        // 6. Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
