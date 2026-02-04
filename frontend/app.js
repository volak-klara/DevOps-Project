const API_URL = "http://localhost:8080/api/tasks";

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

// Load all tasks
async function loadTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const date = task.createdAt
            ? new Date(task.createdAt).toLocaleString()
            : "N/A";

        li.innerHTML = `
            <strong>${task.title}</strong><br>
            <small>Created: ${date}</small><br>
            <small>Completed: ${task.completed}</small>
        `;

        taskList.appendChild(li);
    });
}


// Add new task
async function addTask() {
    const title = taskInput.value.trim();
    if (!title) return;

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });

    taskInput.value = "";
    loadTasks();
}

addBtn.addEventListener("click", addTask);

// Load tasks on page load
loadTasks();
