const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const allCheck = document.getElementById('all-check');

//updating task count with each addition of task
function updateTaskCount() {
    const taskCountDiv = document.getElementById("task-count");
    const taskCount = document.querySelectorAll('.task').length;
    console.log(taskCount);
    taskCountDiv.textContent = `Total Tasks: ${taskCount}`;
}

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    console.log(taskText);
    taskInput.value = "";
    if (taskText !== "") {
        createTask(taskText);
        updateTaskCount();
    }
});

function createTask(text) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    listItem.appendChild(checkbox);
    
    const label = document.createElement("label");
    label.textContent = text;
    label.classList.add("task-label");
    listItem.appendChild(label);

    taskDiv.appendChild(listItem);
    
    const deletePart = document.createElement("div");
    deletePart.classList.add("delete-part");
    
    const deleteIcon = document.createElement("span");
    deleteIcon.innerHTML = "&#10005;";
    deleteIcon.classList.add("delete-task");
    deleteIcon.style.color = "red";
    deleteIcon.addEventListener("click", () => {
        
        if(checkbox.checked){
        taskDiv.remove();
        updateTaskCount()
        }
    });
    deletePart.appendChild(deleteIcon);
    taskDiv.appendChild(deletePart);
    
    taskList.appendChild(taskDiv);

}

allCheck.addEventListener("click", () => {
        let anyChecked = false;
        const checkboxes = document.querySelectorAll('.task-checkbox');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                anyChecked = true;
                return; // exit the loop early if any checkbox is checked
            }
        });
        checkboxes.forEach(checkbox => {
            checkbox.checked = !anyChecked;
        });
        allCheck.style.color = anyChecked ? "white" : "green";
    
});


const deleteAllButton = document.getElementById('delete-all');
deleteAllButton.addEventListener("click", () => {
    deleteAllButton.style.color = "red";

    const checkboxes = document.querySelectorAll('.task-checkbox');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('.task').remove();
        }
    });
    updateTaskCount();
    allCheck.style.color = "white";
    setTimeout(() => {
        deleteAllButton.style.color = "white";
    }, 500); 
    
});





