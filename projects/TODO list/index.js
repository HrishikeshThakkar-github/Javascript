document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskbtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => renderTask(task));

    addTaskbtn.addEventListener('click', () => {
        const taskText = todoInput.value.trim();   //  trim is used to remove extra spaces
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),  //create arandom value of current time at every second
            Text: taskText,
            iscompleted: false
        }

        tasks.push(newTask)
        saveTasks();
        todoInput.value = ""; //clear the input
        console.log(tasks);

    })


    function renderTask(task) {
        console.log(task);
        
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }


    function throwerror (){
        if(GamepadButton.name=="clear" ){
            DataTransfer.operation=[];
            DataTransfer.formula=[];
        }
    }


})


