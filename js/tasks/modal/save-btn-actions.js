import createTask from "../create-task.js"
import createTaskObj from "../create-task-obj.js"

export default function saves(saveBtn, taskNameField, modalContainer) {
    let lists = JSON.parse(localStorage.getItem("lists"))
    let listPage = document.querySelector(".list-page")
    let listId = listPage.dataset.listId
    let selectedListIndex = lists.findIndex(list => list.id === listId)
    
    saveBtn.addEventListener("click", () => {
        // Get task data
        let taskName = taskNameField.value
        let taskId = Date.now().toString()
        let checked = false
        let taskObj = createTaskObj(taskName, taskId, checked)
        
        // Export it to local storage
        lists[selectedListIndex].tasks.push(taskObj)
        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)

        // Create a new task component
        createTask(taskName, taskId, checked)

        // Exit modal and remove it from the HTML
        document.body.removeChild(modalContainer)

        // Remove focus state from the textarea
        taskNameField.blur()
    })

    taskNameField.addEventListener("keydown", evt => {
        // If press "Enter" key it also saves the task
        if (evt.key == "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })
}
