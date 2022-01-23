import createTask from "./create-task.js"

const mainContent = document.querySelector("main")

mainContent.addEventListener("click", e => {
    let lists = JSON.parse(localStorage.getItem("lists"))
    let listPage = document.querySelector(".list-page")
    let listId = listPage.dataset.listId
    let selectedListIndex = lists.findIndex(list => list.listId === listId)
    
    let elm = e.target
    if (elm.classList.contains("new-task")) {
        // Remove focus from the new task button
        elm.blur()

        // Create modal which adds a new task
        let modalContainer = document.createElement("div")
        modalContainer.classList.add("modal-container")
        
        let modalContent = document.createElement("div")
        modalContent.classList.add("modal-content")
        modalContainer.appendChild(modalContent)
    
        let taskNameField = document.createElement("textarea")
        taskNameField.classList.add("name-field")
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
            // Get task name and export it to local storage
            let taskId = Date.now().toString()
            let taskNameText = taskNameField.value
            let taskObj = createTaskObj(taskNameText, taskId)
            lists[selectedListIndex].listTasks.push(taskObj)
            let listsStr = JSON.stringify(lists)
            localStorage.setItem("lists", listsStr)
    
            // Create a new task component
            createTask(taskNameText, taskId)
    
            // Exit modal and remove it from the HTML
            document.body.removeChild(modalContainer)
    
            // Remove focus state from the textarea
            taskNameField.blur()
        })
    }
})

function createTaskObj(name, id) {
    return {
        name: name,
        id: id,
    }
}