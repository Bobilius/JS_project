import Task from "./tasks.js";

const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class TaskManager{
    constructor(){
        this.tasks = [];
    }
    addTask(description) {
        let id = this.getUniqueID()
        let task = new Task(id,description);
        this.tasks.push(task);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTaskDescription(id, description) {
        let index = this.tasks.findIndex((task) => task.id === id);
        this.tasks[index].description = description;
    }
    completeTask(id) {
      let index = this.tasks.findIndex((task) => task.id === id);
        this.tasks[index].completed = true;
    }
    getUniqueID() {
        while(true){
            let id = randomIntFromInterval(0,1000);
            if(this.tasks.findIndex((task) => task.id === id) === -1)
                return id;
        }
    }

}
