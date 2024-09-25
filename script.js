function addingTaskElement(){
    var taskList = document.getElementById('taskList')
    var taskInput = document.getElementById('taskInput')
    var li = document.createElement('li')
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    
} 