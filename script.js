function addingTaskElement(){
    var taskList = document.getElementById('taskList')
    var taskInput = document.getElementById('taskInput')
    if (!taskInput.value.trim()){
        return alert('Enter some text to add.')
    }
    var li = document.createElement('li')
    li.textContent = taskInput.value;
    taskList.appendChild(li);
   
    var removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.className = 'remove-btn'
    removeBtn.onclick = function(){
        taskList.removeChild(li)
    }
    li.appendChild(removeBtn)
    taskInput.value = ''
   
} 