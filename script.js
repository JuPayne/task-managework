function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    
    // new list 
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    // Add HTML structure
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    
    // Add task to the list
    taskList.appendChild(taskItem);
    
    // Clear 
    taskInput.value = '';
    
    taskInput.focus();
}

// remove a task
function removeTask(button) {
    const taskItem = button.parentElement;
    
    taskItem.style.opacity = '0';
    taskItem.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        taskItem.remove();
    }, 300);
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

//  welcome message 
window.onload = function() {
    console.log('Task Manager loaded successfully!');
};
