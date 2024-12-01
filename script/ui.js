function UI(){

}
UI.prototype.addTaskToUI = function(newTask){
    const taskList = document.querySelector("#tasks");
    taskList.innerHTML +=`
    <tr>
        <td>${newTask.name}</td>
        <td>${newTask.details}</td>
        <td>
            <a href="#" class="btn btn-danger" id="delete-task">Delete</a>
        </td>
    </tr>
    `
}

UI.prototype.clearInputs = function(element1, element2){
    element1.value = "";
    element2.value = "";
}

UI.prototype.displayMessages = function(type, message){
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    div.style.opacity = 0;
    div.style.transition = "opacity 1s";
    cardBody.appendChild(div);

    setTimeout(function(){
        div.style.opacity = 1;
    }, 10)

    setTimeout(function(){
        div.style.opacity = 0;
        setTimeout(function(){
            div.remove();
        }, 1000)
    }, 2000)
}

UI.prototype.loadAllTasks = function(tasks){
    const taskList = document.querySelector("#tasks");
    tasks.forEach(function(task){
        taskList.innerHTML +=`
        <tr>
            <td>${Task.name}</td>
            <td>${Task.details}</td>
            <td>
                <a href="#" class="btn btn-danger" id="delete-task">Delete</a>
            </td>
        </tr>
        `
    })
}

UI.prototype.deleteTaskFromUI = function(delElement){
    delElement.parentElement.parentElement.remove();
}

UI.prototype.clearAllTasksFromUI = function(){
    const taskList = document.querySelector("#tasks")
    while(taskList.firstChild != null){
        taskList.removeChild(taskList.firstChild)
    }
}