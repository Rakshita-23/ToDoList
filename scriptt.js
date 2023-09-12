document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const resetTasksButton = document.getElementById("resetTasks");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                ${taskText}
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            const deleteButton = taskItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });
        }
    });

    resetTasksButton.addEventListener("click", function () {
        taskList.innerHTML = "";
    });
});