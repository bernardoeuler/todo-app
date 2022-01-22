export default function createTask(taskNameText, taskId) {
    // Get tasks container div
    let tasksContainer = document.querySelector(".tasks-container")
    
    // Create new task div
    let newTask = document.createElement("div")
    newTask.dataset.taskId = taskId
    newTask.classList.add("task")

    // Create task column div
    let taskColumn = document.createElement("div")
    taskColumn.classList.add("task-column")
    newTask.appendChild(taskColumn)

    // Create checkbox container div
    let checkContainer = document.createElement("div")
    checkContainer.classList.add("check-container")
    taskColumn.appendChild(checkContainer)

    // Create checkbox container div
    let checkboxInput = document.createElement("input")
    checkboxInput.classList.add("checkbox")
    checkboxInput.setAttribute("type", "checkbox")
    checkboxInput.setAttribute("onclick", "completeTask(this)")
    checkContainer.appendChild(checkboxInput)

    // Create tick icon div
    let tickContainer = document.createElement("div")
    tickContainer.classList.add("tick")
    checkContainer.appendChild(tickContainer)

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

    // Create delete button background
    let deleteBackground = document.createElement("div")
    deleteBackground.classList.add("delete-background")
    deleteBtn.appendChild(deleteBackground)

    // Create delete icon
    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("fas", "fa-times", "delete-icon")
    deleteBackground.appendChild(deleteIcon)

    // Put the task on its container
    tasksContainer.insertBefore(newTask, tasksContainer.firstChild)
}
