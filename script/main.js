// Select Elements
const form = document.querySelector("#taskform");
const taskNameInput = document.querySelector("#taskname");
const taskDetailsInput = document.querySelector("#taskdetails");
const cardBodyList = document.querySelectorAll(".card-body")[1];
const clearTasksBtn = document.querySelector("#clear-items");

// UI Object
const ui = new UI();

const storage = new Storage();

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addTask);

    document.addEventListener("DOMContentLoaded", function(){
        let tasks = storage.getTasksFromStorage();
        ui.loadAllTasks(tasks);
    });
    cardBodyList.addEventListener("click", deleteTask);

    clearTasksBtn.addEventListener("click", clearAllTasks);
};

function addTask(e){
    const name = taskNameInput.value;
    const details = taskDetailsInput.value;
    if (name === "" || details === ""){
        ui.displayMessages("danger", "Please fill all the fields!");
    }else{
        // creating a new task
        const newTask = new Task(name, details);
        // add task to ui
        ui.addTaskToUI(newTask);
        storage.addTaskToStorage(newTask);
        ui.displayMessages("success", "Successfully added!");
    }
    // clear input values
    ui.clearInputs(taskNameInput, taskDetailsInput);
    e.preventDefault();
}

function deleteTask(e){
    if (e.target.id === "delete-task"){
        ui.deleteTaskFromUI(e.target);
        storage.deleteTaskFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("success", "Deletion process is completed successfully!")
    }
}

function clearAllTasks(e){
    if (confirm("Are you sure that you want to delete all the tasks?")){
        ui.clearAllTasksFromUI();
        storage.clearAllTasksFromStorage();
        ui.displayMessages("success", "All tasks are completed successfully.")
    }
}