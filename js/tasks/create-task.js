export default function createTask(taskNameText, taskId, checked) {
    // Get tasks container div
    const tasksContainer = document.querySelector(".tasks-container")
    
    // Create new task div
    let newTask = document.createElement("div")
    newTask.dataset.taskId = taskId
    newTask.classList.add("task")

    // Create checkbox container div
    let checkboxContainer = document.createElement("div")
    checkboxContainer.classList.add("check-container")
    newTask.appendChild(checkboxContainer)
    if (checked) checkboxContainer.classList.add("checked")

    // Create checkbox container div
    let checkboxInput = document.createElement("input")
    checkboxInput.classList.add("checkbox")
    checkboxInput.setAttribute("type", "checkbox")
    checkboxInput.setAttribute("onclick", "checkTask(this)")
    checkboxContainer.appendChild(checkboxInput)
    if (checked) checkboxInput.checked = checked

    // Create tick icon div
    let tickContainer = document.createElement("div")
    tickContainer.classList.add("tick")
    checkboxContainer.appendChild(tickContainer)

    // Create tick icon
    let tickIcon = document.createElement("img")
    tickIcon.setAttribute("src", "./static/images/tick.svg")
    tickContainer.appendChild(tickIcon)

    // Create task content
    let taskContent = document.createElement("div")
    taskContent.classList.add("task-content")
    newTask.appendChild(taskContent)

    // Create task title
    let taskName = document.createElement("h3")
    taskName.classList.add("task-name")
    taskName.innerText = taskNameText
    taskContent.appendChild(taskName)

    // Create delete button
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.setAttribute("onclick", "deleteTask(this)")
    deleteBtn.style.display = "block"
    newTask.appendChild(deleteBtn)

    // Create delete icon
    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fas", "fa-times", "delete-icon")
    deleteBtn.appendChild(deleteIcon)

    // Put the task on its container
    tasksContainer.insertBefore(newTask, tasksContainer.firstChild)
}
