/* Add new task */
let newTaskBtn = document.querySelector(".new-task")
let tasksContainer = document.querySelector(".tasks-container")

newTaskBtn.addEventListener("click", () => {
    newTaskBtn.blur()

    // Create modal which adds a new task
    let modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")
    
    let modalContent = document.createElement("div")
    modalContent.classList.add("modal-content")
    modalContainer.appendChild(modalContent)

    let taskNameField = document.createElement("textarea")
    taskNameField.classList.add("task-name-field")
    taskNameField.setAttribute("placeholder", "Task name")
    taskNameField.setAttribute("rows", "1")
    modalContent.appendChild(taskNameField)

    let modalActions = document.createElement("div")
    modalActions.classList.add("modal-actions")
    modalContent.appendChild(modalActions)

    let cancelBtn = document.createElement("button")
    cancelBtn.classList.add("action", "cancel-btn")
    cancelBtn.innerText = "Cancel"
    modalActions.appendChild(cancelBtn)

    let saveBtn = document.createElement("button")
    saveBtn.classList.add("action", "save-btn")
    saveBtn.innerText = "Save"
    modalActions.appendChild(saveBtn)

    document.body.appendChild(modalContainer)
    taskNameField.focus()

    taskNameField.addEventListener("keydown", evt => {
        if (evt.key === "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })

    taskNameField.addEventListener("input", () => {
        taskNameField.style.height = "auto"
        taskNameField.style.height = taskNameField.scrollHeight + "px"
    })

    // For window size changes
    window.addEventListener("resize", () => {
        taskNameField.style.height = "auto"
        taskNameField.style.height = taskNameField.scrollHeight + "px"
    })

    // Exit modal clicking outside the modal
    modalContainer.addEventListener("click", evt => {
        if (evt.target == modalContainer)
            document.body.removeChild(modalContainer)
    })

    // Exit modal clicking on cancel button
    cancelBtn.addEventListener("click", () => {
        taskNameField.blur()
        document.body.removeChild(modalContainer)
    })

    saveBtn.addEventListener("click", () => {
        // Remove focus state from the textarea
        taskNameField.blur()

        // Get task name and export it to local storage
        let taskIndex = tasksContainer.children.length
        let taskId = "task_" + (taskIndex + 1)
        let taskNameText = taskNameField.value
        let taskObj = createTaskObj(taskNameText, taskId, taskIndex)
        let taskObjString = JSON.stringify(taskObj)
        localStorage.setItem(taskId, taskObjString)

        // Create a new task component
        createTask(taskNameText, taskId)

        // Exit modal and remove it from the HTML
        document.body.removeChild(modalContainer)

        console.log(JSON.parse(localStorage.getItem(taskId)))
    })
})

export default function createTask(taskNameText, taskId) {
    // Create new task div
    let newTask = document.createElement("div")
    newTask.classList.add("task")
    newTask.id = taskId

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
    deleteIcon.classList.add("fas", "fa-times",  "delete-icon")
    deleteBackground.appendChild(deleteIcon)

    // Put the task on its container
    tasksContainer.insertBefore(newTask, tasksContainer.firstChild)
}

function createTaskObj(name, id, index) {
    return {
        name: name,
        id: id,
        index: index
    }
}