import createTaskObj from "../create-task-obj.js"

export default function edit(saveBtn, field, modalContainer, taskId) {
    saveBtn.addEventListener("click", () => {
        const lists = JSON.parse(localStorage.getItem("lists"))
        const listPage = document.querySelector(".list-page")

        let listId = listPage.dataset.listId

        let listIndex = lists.findIndex(list => list.id === listId)
        let taskIndex = lists[listIndex].tasks.findIndex(task => task.id === taskId)

        let task = lists[listIndex].tasks[taskIndex]

        let taskNameText = field.value
        let checked = task.checked

        let taskObj = createTaskObj(taskNameText, taskId, checked)
        lists[listIndex].tasks[taskIndex] = taskObj

        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)

        let taskElement = document.querySelector(`[data-task-id="${taskId}"]`)
        let taskNameElement = taskElement.querySelector(".task-name")
        taskNameElement.innerText = taskNameText

        document.body.removeChild(modalContainer)

        field.blur()
    })

    field.addEventListener("keydown", evt => {
        // If press "Enter" key it also saves the task
        if (evt.key == "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })
}