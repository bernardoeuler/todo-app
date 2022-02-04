import createTask from "../create-task.js"
import createTaskObj from "../create-task-obj.js"

export default function save(saveBtn, field, modalContainer) {
    saveBtn.addEventListener("click", () => {
        const lists = JSON.parse(localStorage.getItem("lists"))
        const listPage = document.querySelector(".list-page")

        let listId = listPage.dataset.listId
        let activeListIndex = lists.findIndex(list => list.id === listId)

        let taskName = field.value
        let taskId = Date.now().toString()

        let taskObj = createTaskObj(taskName, taskId, false)
        lists[activeListIndex].tasks.push(taskObj)

        let listsStr = JSON.stringify(lists)
        localStorage.setItem("lists", listsStr)

        createTask(taskName, taskId, false)

        field.value = ""

        document.body.removeChild(modalContainer)

        field.blur()
    })

    field.addEventListener("keydown", evt => {
        if (evt.key == "Enter") {
            evt.preventDefault()
            saveBtn.click()
        }
    })
}
