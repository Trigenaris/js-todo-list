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