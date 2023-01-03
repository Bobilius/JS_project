
import TaskManager from "./taskManager.js"

let manager = new TaskManager();

function handleAddition(){
    let newTask = document.getElementById("floatingDescription");
    if(newTask.value !== ''){
        manager.addTask(newTask.value);
        showTasksInTable();
    }
}

function showTasksInTable(){
    document.getElementById("inProgress").innerHTML = "";
    document.getElementById("completed").innerHTML = "";
    for(let task of manager.tasks){
        let id = "inProgress";
        if(task.completed){
            id = "completed";
            document.getElementById(id).innerHTML += `<tr> <td>${task.description}</td><td>${task.id} </td><td><button id="d+${task.id}"><i class="fa-regular fa-trash-can"></i></button> </td> </tr>`;
        }else{
        document.getElementById(id).innerHTML += `<tr> <td>${task.description}</td><td>${task.id} </td><td> <button id="x+${task.id}"><i class="fa-solid fa-pen-to-square"></i></button> <button id="d+${task.id}"><i class="fa-regular fa-trash-can"></i></button> </td> </tr>`;
        }
    }
for(let task of manager.tasks){
    if(!task.completed){
        document.getElementById(`x+${task.id}`).addEventListener("click", ()=>{manager.completeTask(task.id);showTasksInTable()});
    }
        document.getElementById(`d+${task.id}`).addEventListener("click", ()=>{manager.deleteTask(task.id);showTasksInTable()});
}    
}
showTasksInTable()
document.getElementById("addTasks").addEventListener("click", handleAddition);


