function Storage(){
    Storage.prototype.addTaskToStorage = function(newTask){
        let tasks = this.getTasksFromStorage();
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    Storage.prototype.getTasksFromStorage = function(){
        let tasks;
        if (localStorage.getItem("tasks") === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }
        return tasks;
    }

    Storage.prototype.deleteTaskFromStorage = function(deleteTaskName){
        let tasks = this.getTasksFromStorage();
        tasks.forEach(function(task, index){
            if (task.name === deleteTaskName){
                tasks.splice(index, 1);
            }
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    Storage.prototype.clearAllTasksFromStorage = function(){
        localStorage.removeItem("tasks");
    }
}